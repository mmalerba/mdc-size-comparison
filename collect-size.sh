#!/bin/bash

set -ex

project_dir=$(realpath $(dirname ${0}))

if [[ -z "$1" ]]; then
    echo "Need to specify project name."
    exit 1
fi

echo "Collecting size data for $1.."

# Go to test project.
cd $project_dir/$1

rm -rf $project_dir/results/$1
rm -rf $project_dir/$1/dist

yarn ng build --prod --source-map

mkdir -p $project_dir/results/$1

$project_dir/node_modules/.bin/source-map-explorer dist/$1/main-es5*.js --html $project_dir/results/$1/js-size-es5-visualized.html
$project_dir/node_modules/.bin/source-map-explorer dist/$1/main-es2015*.js --html $project_dir/results/$1/js-size-es2015-visualized.html

du -bc dist/$1/{main*.js,styles*.css} >> $project_dir/results/$1/size-summary.txt

mkdir -p $project_dir/results/$1/chunks/
cp dist/$1/main*.js $project_dir/results/$1/chunks/

mkdir -p $project_dir/results/$1/styles/
cp dist/$1/styles*.css $project_dir/results/$1/styles/