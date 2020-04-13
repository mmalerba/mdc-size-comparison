#!/bin/bash

set -ex

# Useful path aliases.
workspace_root="$(realpath "$(dirname "$0")"/..)"
projects_dir="$workspace_root/projects"
results_dir="$workspace_root/results"
dist_dir="$workspace_root/dist"
source_map_explorer="$workspace_root/node_modules/.bin/source-map-explorer"

# Ensure results are based on versions shown in yarn.lock.
yarn --frozen-lockfile --non-interactive

# Delete previous build.
rm -rf "$dist_dir"

# Write headers for the summary tsv file.
echo -e "\
Component\t\
ES5 (non-MDC)\t\
ES5 (MDC)\t\
ES2015 (non-MDC)\t\
ES2015 (MDC)\t\
Theme CSS (non-MDC)\t\
Theme CSS (MDC)\t\
Base CSS (non-MDC)\t\
Base CSS (MDC)\
" > "$results_dir/size-summary.tsv"

# Loop over each component and gather results (assumes each component has a project named
# mat-mdc-<component>).
for component in $(basename -a "$projects_dir"/mat-mdc-* | sed "s/mat-mdc-//g")
do
  # Gather results for each project. Assumes the component has up to 3 projects:
  # mat-<component>, mat-mdc-<component>, and mat-mwc-component.
  for project in "mat-$component" "mat-mdc-$component" "mat-mwc-$component"
  do
    if [ ! -d "${projects_dir}/${project}" ]
      continue
    fi

    echo "Collecting size data for $project..."

    # TEMPORARY: skip projects that have a results directory already
    if [ -d "${results_dir}/${project}" ]
      continue
    fi

    # Delete old results for this project.
    # rm -rf "${results_dir:?}/$project"

    # Build the project and create a directory for the results.
    yarn ng build "$project" --prod --source-map
    mkdir -p "$results_dir/$project"

    # Copy over the built JS and CSS to the results folder for manual analysis if needed.
    mkdir -p "$results_dir/$project/chunks/"
    cp "$dist_dir/$project"/main*.js "$results_dir/$project/chunks/"
    cp "$dist_dir/$project"/styles*.css "$results_dir/$project/chunks/"

    # Create a directory to save the more granularly split up code.
    mkdir -p "$results_dir/$project/split"

    # Extract CSS inlined in the ES5 JS, e.g. styles:["<CSS_CODE>"], and save it. (Should be same in ES2015).
    {
      grep -oP "(?<=styles:\[\").*?(?=\"])" "$dist_dir/$project"/main-es5*.js || true
      grep -oP "(?<=styles:\[').*?(?='])" "$dist_dir/$project"/main-es5*.js || true
    } | tr -d "\n" > "$results_dir/$project/split/base.css"

    # Copy over the unchanged theme CSS.
    cp "$dist_dir/$project"/styles*.css "$results_dir/$project/split/theme.css"

    # Do some additional processing for both the ES5 and ES2015 code.
    for js_version in "es5" "es2015"
    do
      # Generate treemap for output JS.
      "$source_map_explorer" "$dist_dir/$project/main-$js_version"*.js --html "$results_dir/$project/js-size-$js_version-visualized.html"

      # Delete the inlined CSS from the JS bundle and save it.
      sed -E "s/styles:\[\"(.*?)\"]/styles:[\"\"]/g" "$dist_dir/$project/main-$js_version"*.js |
        sed -E "s/styles:\['(.*?)']/styles:[\"\"]/g" > "$results_dir/$project/split/main-$js_version.js"
    done
  done

  # Add the size info for the component to the summary tsv.
  {
    echo "$component"
    du -b "$results_dir/mat-$component/split/main-es5.js" | cut -f 1
    du -b "$results_dir/mat-mdc-$component/split/main-es5.js" | cut -f 1
    du -b "$results_dir/mat-$component/split/main-es2015.js" | cut -f 1
    du -b "$results_dir/mat-mdc-$component/split/main-es2015.js" | cut -f 1
    du -b "$results_dir/mat-$component/split/theme.css" | cut -f 1
    du -b "$results_dir/mat-mdc-$component/split/theme.css" | cut -f 1
    du -b "$results_dir/mat-$component/split/base.css" | cut -f 1
    du -b "$results_dir/mat-mdc-$component/split/base.css" | cut -f 1
  } | paste -sd "\t" >> "$results_dir/size-summary.tsv"
done
