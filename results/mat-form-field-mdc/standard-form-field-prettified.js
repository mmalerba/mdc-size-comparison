const Qu = new Ft("mat-label-global-options")
, Wu = ["underline"]
, Ku = ["connectionContainer"]
, Ju = ["inputContainer"]
, Yu = ["label"];
function Xu(t, e) {
  1 & t && (vs(0),
  gs(1, "div", 14),
  bs(2, "div", 15),
  bs(3, "div", 16),
  bs(4, "div", 17),
  ys(),
  gs(5, "div", 18),
  bs(6, "div", 15),
  bs(7, "div", 16),
  bs(8, "div", 17),
  ys(),
  ws())
}
function tc(t, e) {
  1 & t && (gs(0, "div", 19),
  Is(1, 1),
  ys())
}
function ec(t, e) {
  if (1 & t && (vs(0),
  Is(1, 2),
  gs(2, "span"),
  Ms(3),
  ys(),
  ws()),
  2 & t) {
      const t = As(2);
      fr(3),
      js(t._control.placeholder)
  }
}
function nc(t, e) {
  1 & t && Is(0, 3, ["*ngSwitchCase", "true"])
}
function rc(t, e) {
  1 & t && (gs(0, "span", 23),
  Ms(1, " *"),
  ys())
}
function ic(t, e) {
  if (1 & t) {
      const t = Te();
      gs(0, "label", 20, 21),
      xs("cdkObserveContent", (function(e) {
          return Se.lFrame.contextLView = t,
          As().updateOutlineGap()
      }
      )),
      fs(2, ec, 4, 1, "ng-container", 12),
      fs(3, nc, 1, 0, void 0, 12),
      fs(4, rc, 2, 0, "span", 22),
      ys()
  }
  if (2 & t) {
      const t = As();
      Ds("mat-empty", t._control.empty && !t._shouldAlwaysFloat)("mat-form-field-empty", t._control.empty && !t._shouldAlwaysFloat)("mat-accent", "accent" == t.color)("mat-warn", "warn" == t.color),
      ms("cdkObserveContentDisabled", "outline" != t.appearance)("id", t._labelId)("ngSwitch", t._hasLabel()),
      hs("for", t._control.id)("aria-owns", t._control.id),
      fr(2),
      ms("ngSwitchCase", !1),
      fr(1),
      ms("ngSwitchCase", !0),
      fr(1),
      ms("ngIf", !t.hideRequiredMarker && t._control.required && !t._control.disabled)
  }
}
function sc(t, e) {
  1 & t && (gs(0, "div", 24),
  Is(1, 4),
  ys())
}
function oc(t, e) {
  if (1 & t && (gs(0, "div", 25, 26),
  bs(2, "span", 27),
  ys()),
  2 & t) {
      const t = As();
      fr(2),
      Ds("mat-accent", "accent" == t.color)("mat-warn", "warn" == t.color)
  }
}
function lc(t, e) {
  1 & t && (gs(0, "div"),
  Is(1, 5),
  ys()),
  2 & t && ms("@transitionMessages", As()._subscriptAnimationState)
}
function ac(t, e) {
  if (1 & t && (gs(0, "div", 31),
  Ms(1),
  ys()),
  2 & t) {
      const t = As(2);
      ms("id", t._hintLabelId),
      fr(1),
      js(t.hintLabel)
  }
}
function uc(t, e) {
  if (1 & t && (gs(0, "div", 28),
  fs(1, ac, 2, 2, "div", 29),
  Is(2, 6),
  bs(3, "div", 30),
  Is(4, 7),
  ys()),
  2 & t) {
      const t = As();
      ms("@transitionMessages", t._subscriptAnimationState),
      fr(1),
      ms("ngIf", t.hintLabel)
  }
}
const cc = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]]
, dc = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
let hc = 0
, fc = (()=>{
  class t {
      constructor() {
          this.id = `mat-error-${hc++}`
      }
  }
  return t.\u0275fac = function(e) {
      return new (e || t)
  }
  ,
  t.\u0275dir = _e({
      type: t,
      selectors: [["mat-error"]],
      hostAttrs: ["role", "alert", 1, "mat-error"],
      hostVars: 1,
      hostBindings: function(t, e) {
          2 & t && hs("id", e.id)
      },
      inputs: {
          id: "id"
      }
  }),
  t
}
)();
const pc = {
  transitionMessages: Nu("transitionMessages", [Pu("enter", Fu({
      opacity: 1,
      transform: "translateY(0%)"
  })), Mu("void => enter", [Fu({
      opacity: 0,
      transform: "translateY(-100%)"
  }), Ru("300ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])
};
let mc = (()=>{
  class t {
  }
  return t.\u0275fac = function(e) {
      return new (e || t)
  }
  ,
  t.\u0275dir = _e({
      type: t
  }),
  t
}
)();
function _c(t) {
  return Error(`A hint was already declared for 'align="${t}"'.`)
}
let gc = 0
, yc = (()=>{
  class t {
      constructor() {
          this.align = "start",
          this.id = `mat-hint-${gc++}`
      }
  }
  return t.\u0275fac = function(e) {
      return new (e || t)
  }
  ,
  t.\u0275dir = _e({
      type: t,
      selectors: [["mat-hint"]],
      hostAttrs: [1, "mat-hint"],
      hostVars: 4,
      hostBindings: function(t, e) {
          2 & t && (hs("id", e.id)("align", null),
          Ds("mat-right", "end" == e.align))
      },
      inputs: {
          align: "align",
          id: "id"
      }
  }),
  t
}
)()
, bc = (()=>{
  class t {
  }
  return t.\u0275fac = function(e) {
      return new (e || t)
  }
  ,
  t.\u0275dir = _e({
      type: t,
      selectors: [["mat-label"]]
  }),
  t
}
)()
, vc = (()=>{
  class t {
  }
  return t.\u0275fac = function(e) {
      return new (e || t)
  }
  ,
  t.\u0275dir = _e({
      type: t,
      selectors: [["mat-placeholder"]]
  }),
  t
}
)()
, wc = (()=>{
  class t {
  }
  return t.\u0275fac = function(e) {
      return new (e || t)
  }
  ,
  t.\u0275dir = _e({
      type: t,
      selectors: [["", "matPrefix", ""]]
  }),
  t
}
)()
, Cc = (()=>{
  class t {
  }
  return t.\u0275fac = function(e) {
      return new (e || t)
  }
  ,
  t.\u0275dir = _e({
      type: t,
      selectors: [["", "matSuffix", ""]]
  }),
  t
}
)()
, xc = 0;
class Ec {
  constructor(t) {
      this._elementRef = t
  }
}
const kc = $u(Ec, "primary")
, Ac = new Ft("MAT_FORM_FIELD_DEFAULT_OPTIONS");
let Sc = (()=>{
  class t extends kc {
      constructor(t, e, n, r, i, s, o, l) {
          super(t),
          this._elementRef = t,
          this._changeDetectorRef = e,
          this._dir = r,
          this._defaults = i,
          this._platform = s,
          this._ngZone = o,
          this._outlineGapCalculationNeededImmediately = !1,
          this._outlineGapCalculationNeededOnStable = !1,
          this._destroyed = new x,
          this._showAlwaysAnimate = !1,
          this._subscriptAnimationState = "",
          this._hintLabel = "",
          this._hintLabelId = `mat-hint-${xc++}`,
          this._labelId = `mat-form-field-label-${xc++}`,
          this._labelOptions = n || {},
          this.floatLabel = this._getDefaultFloatLabelState(),
          this._animationsEnabled = "NoopAnimations" !== l,
          this.appearance = i && i.appearance ? i.appearance : "legacy",
          this._hideRequiredMarker = !(!i || null == i.hideRequiredMarker) && i.hideRequiredMarker
      }
      get appearance() {
          return this._appearance
      }
      set appearance(t) {
          const e = this._appearance;
          this._appearance = t || this._defaults && this._defaults.appearance || "legacy",
          "outline" === this._appearance && e !== t && (this._outlineGapCalculationNeededOnStable = !0)
      }
      get hideRequiredMarker() {
          return this._hideRequiredMarker
      }
      set hideRequiredMarker(t) {
          this._hideRequiredMarker = su(t)
      }
      get _shouldAlwaysFloat() {
          return "always" === this.floatLabel && !this._showAlwaysAnimate
      }
      get _canLabelFloat() {
          return "never" !== this.floatLabel
      }
      get hintLabel() {
          return this._hintLabel
      }
      set hintLabel(t) {
          this._hintLabel = t,
          this._processHints()
      }
      get floatLabel() {
          return "legacy" !== this.appearance && "never" === this._floatLabel ? "auto" : this._floatLabel
      }
      set floatLabel(t) {
          t !== this._floatLabel && (this._floatLabel = t || this._getDefaultFloatLabelState(),
          this._changeDetectorRef.markForCheck())
      }
      get _control() {
          return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic
      }
      set _control(t) {
          this._explicitFormFieldControl = t
      }
      get _labelChild() {
          return this._labelChildNonStatic || this._labelChildStatic
      }
      getConnectedOverlayOrigin() {
          return this._connectionContainerRef || this._elementRef
      }
      ngAfterContentInit() {
          this._validateControlChild();
          const t = this._control;
          t.controlType && this._elementRef.nativeElement.classList.add(`mat-form-field-type-${t.controlType}`),
          t.stateChanges.pipe(Du(null)).subscribe(()=>{
              this._validatePlaceholders(),
              this._syncDescribedByIds(),
              this._changeDetectorRef.markForCheck()
          }
          ),
          t.ngControl && t.ngControl.valueChanges && t.ngControl.valueChanges.pipe(fu(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()),
          this._ngZone.runOutsideAngular(()=>{
              this._ngZone.onStable.asObservable().pipe(fu(this._destroyed)).subscribe(()=>{
                  this._outlineGapCalculationNeededOnStable && this.updateOutlineGap()
              }
              )
          }
          ),
          G(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(()=>{
              this._outlineGapCalculationNeededOnStable = !0,
              this._changeDetectorRef.markForCheck()
          }
          ),
          this._hintChildren.changes.pipe(Du(null)).subscribe(()=>{
              this._processHints(),
              this._changeDetectorRef.markForCheck()
          }
          ),
          this._errorChildren.changes.pipe(Du(null)).subscribe(()=>{
              this._syncDescribedByIds(),
              this._changeDetectorRef.markForCheck()
          }
          ),
          this._dir && this._dir.change.pipe(fu(this._destroyed)).subscribe(()=>{
              "function" == typeof requestAnimationFrame ? this._ngZone.runOutsideAngular(()=>{
                  requestAnimationFrame(()=>this.updateOutlineGap())
              }
              ) : this.updateOutlineGap()
          }
          )
      }
      ngAfterContentChecked() {
          this._validateControlChild(),
          this._outlineGapCalculationNeededImmediately && this.updateOutlineGap()
      }
      ngAfterViewInit() {
          this._subscriptAnimationState = "enter",
          this._changeDetectorRef.detectChanges()
      }
      ngOnDestroy() {
          this._destroyed.next(),
          this._destroyed.complete()
      }
      _shouldForward(t) {
          const e = this._control ? this._control.ngControl : null;
          return e && e[t]
      }
      _hasPlaceholder() {
          return !!(this._control && this._control.placeholder || this._placeholderChild)
      }
      _hasLabel() {
          return !!this._labelChild
      }
      _shouldLabelFloat() {
          return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat)
      }
      _hideControlPlaceholder() {
          return "legacy" === this.appearance && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat()
      }
      _hasFloatingLabel() {
          return this._hasLabel() || "legacy" === this.appearance && this._hasPlaceholder()
      }
      _getDisplayedMessages() {
          return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? "error" : "hint"
      }
      _animateAndLockLabel() {
          var t;
          this._hasFloatingLabel() && this._canLabelFloat && (this._animationsEnabled && (this._showAlwaysAnimate = !0,
          function t(e, n, i, s) {
              return r(i) && (s = i,
              i = void 0),
              s ? t(e, n, i).pipe(F(t=>a(t) ? s(...t) : s(t))) : new y(t=>{
                  !function t(e, n, r, i, s) {
                      let o;
                      if (function(t) {
                          return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
                      }(e)) {
                          const t = e;
                          e.addEventListener(n, r, s),
                          o = ()=>t.removeEventListener(n, r, s)
                      } else if (function(t) {
                          return t && "function" == typeof t.on && "function" == typeof t.off
                      }(e)) {
                          const t = e;
                          e.on(n, r),
                          o = ()=>t.off(n, r)
                      } else if (function(t) {
                          return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
                      }(e)) {
                          const t = e;
                          e.addListener(n, r),
                          o = ()=>t.removeListener(n, r)
                      } else {
                          if (!e || !e.length)
                              throw new TypeError("Invalid event target");
                          for (let o = 0, l = e.length; o < l; o++)
                              t(e[o], n, r, i, s)
                      }
                      i.add(o)
                  }(e, n, (function(e) {
                      t.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : e)
                  }
                  ), t, i)
              }
              )
          }(this._label.nativeElement, "transitionend").pipe((t = 1,
          e=>0 === t ? lu : e.lift(new xu(t)))).subscribe(()=>{
              this._showAlwaysAnimate = !1
          }
          )),
          this.floatLabel = "always",
          this._changeDetectorRef.markForCheck())
      }
      _validatePlaceholders() {
          if (this._control.placeholder && this._placeholderChild)
              throw Error("Placeholder attribute and child element were both specified.")
      }
      _processHints() {
          this._validateHints(),
          this._syncDescribedByIds()
      }
      _validateHints() {
          if (this._hintChildren) {
              let t, e;
              this._hintChildren.forEach(n=>{
                  if ("start" === n.align) {
                      if (t || this.hintLabel)
                          throw _c("start");
                      t = n
                  } else if ("end" === n.align) {
                      if (e)
                          throw _c("end");
                      e = n
                  }
              }
              )
          }
      }
      _getDefaultFloatLabelState() {
          return this._defaults && this._defaults.floatLabel || this._labelOptions.float || "auto"
      }
      _syncDescribedByIds() {
          if (this._control) {
              let t = [];
              if ("hint" === this._getDisplayedMessages()) {
                  const e = this._hintChildren ? this._hintChildren.find(t=>"start" === t.align) : null
                    , n = this._hintChildren ? this._hintChildren.find(t=>"end" === t.align) : null;
                  e ? t.push(e.id) : this._hintLabel && t.push(this._hintLabelId),
                  n && t.push(n.id)
              } else
                  this._errorChildren && (t = this._errorChildren.map(t=>t.id));
              this._control.setDescribedByIds(t)
          }
      }
      _validateControlChild() {
          if (!this._control)
              throw Error("mat-form-field must contain a MatFormFieldControl.")
      }
      updateOutlineGap() {
          const t = this._label ? this._label.nativeElement : null;
          if ("outline" !== this.appearance || !t || !t.children.length || !t.textContent.trim())
              return;
          if (!this._platform.isBrowser)
              return;
          if (!this._isAttachedToDOM())
              return void (this._outlineGapCalculationNeededImmediately = !0);
          let e = 0
            , n = 0;
          const r = this._connectionContainerRef.nativeElement
            , i = r.querySelectorAll(".mat-form-field-outline-start")
            , s = r.querySelectorAll(".mat-form-field-outline-gap");
          if (this._label && this._label.nativeElement.children.length) {
              const i = r.getBoundingClientRect();
              if (0 === i.width && 0 === i.height)
                  return this._outlineGapCalculationNeededOnStable = !0,
                  void (this._outlineGapCalculationNeededImmediately = !1);
              const s = this._getStartEnd(i)
                , o = this._getStartEnd(t.children[0].getBoundingClientRect());
              let l = 0;
              for (const e of t.children)
                  l += e.offsetWidth;
              e = o - s - 5,
              n = l > 0 ? .75 * l + 10 : 0
          }
          for (let o = 0; o < i.length; o++)
              i[o].style.width = `${e}px`;
          for (let o = 0; o < s.length; o++)
              s[o].style.width = `${n}px`;
          this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = !1
      }
      _getStartEnd(t) {
          return this._dir && "rtl" === this._dir.value ? t.right : t.left
      }
      _isAttachedToDOM() {
          const t = this._elementRef.nativeElement;
          if (t.getRootNode) {
              const e = t.getRootNode();
              return e && e !== t
          }
          return document.documentElement.contains(t)
      }
  }
  return t.\u0275fac = function(e) {
      return new (e || t)(ps(ao),ps(Li),ps(Qu, 8),ps(Vu, 8),ps(Ac, 8),ps(Xa),ps(Hl),ps(zu, 8))
  }
  ,
  t.\u0275cmp = ce({
      type: t,
      selectors: [["mat-form-field"]],
      contentQueries: function(t, e, n) {
          var r;
          1 & t && (dl(n, mc, !0),
          hl(n, mc, !0),
          dl(n, bc, !0),
          hl(n, bc, !0),
          dl(n, vc, !0),
          dl(n, fc, !0),
          dl(n, yc, !0),
          dl(n, wc, !0),
          dl(n, Cc, !0)),
          2 & t && (al(r = pl()) && (e._controlNonStatic = r.first),
          al(r = pl()) && (e._controlStatic = r.first),
          al(r = pl()) && (e._labelChildNonStatic = r.first),
          al(r = pl()) && (e._labelChildStatic = r.first),
          al(r = pl()) && (e._placeholderChild = r.first),
          al(r = pl()) && (e._errorChildren = r),
          al(r = pl()) && (e._hintChildren = r),
          al(r = pl()) && (e._prefixChildren = r),
          al(r = pl()) && (e._suffixChildren = r))
      },
      viewQuery: function(t, e) {
          var n, r;
          1 & t && (ul(Wu, !0),
          r = Ku,
          !0,
          cl(Ve(), Te(), r, !0, void 0, !0),
          ul(Ju, !0),
          ul(Yu, !0)),
          2 & t && (al(n = pl()) && (e.underlineRef = n.first),
          al(n = pl()) && (e._connectionContainerRef = n.first),
          al(n = pl()) && (e._inputContainerRef = n.first),
          al(n = pl()) && (e._label = n.first))
      },
      hostAttrs: [1, "mat-form-field"],
      hostVars: 44,
      hostBindings: function(t, e) {
          2 & t && Ds("mat-form-field-appearance-standard", "standard" == e.appearance)("mat-form-field-appearance-fill", "fill" == e.appearance)("mat-form-field-appearance-outline", "outline" == e.appearance)("mat-form-field-appearance-legacy", "legacy" == e.appearance)("mat-form-field-invalid", e._control.errorState)("mat-form-field-can-float", e._canLabelFloat)("mat-form-field-should-float", e._shouldLabelFloat())("mat-form-field-has-label", e._hasFloatingLabel())("mat-form-field-hide-placeholder", e._hideControlPlaceholder())("mat-form-field-disabled", e._control.disabled)("mat-form-field-autofilled", e._control.autofilled)("mat-focused", e._control.focused)("mat-accent", "accent" == e.color)("mat-warn", "warn" == e.color)("ng-untouched", e._shouldForward("untouched"))("ng-touched", e._shouldForward("touched"))("ng-pristine", e._shouldForward("pristine"))("ng-dirty", e._shouldForward("dirty"))("ng-valid", e._shouldForward("valid"))("ng-invalid", e._shouldForward("invalid"))("ng-pending", e._shouldForward("pending"))("_mat-animation-noopable", !e._animationsEnabled)
      },
      inputs: {
          color: "color",
          floatLabel: "floatLabel",
          appearance: "appearance",
          hideRequiredMarker: "hideRequiredMarker",
          hintLabel: "hintLabel"
      },
      exportAs: ["matFormField"],
      features: [qs],
      ngContentSelectors: dc,
      decls: 15,
      vars: 8,
      consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
      template: function(t, e) {
          1 & t && (function(t) {
              const e = Te()[16][6];
              if (!e.projection) {
                  const n = e.projection = te(t ? t.length : 1, null)
                    , r = n.slice();
                  let i = e.child;
                  for (; null !== i; ) {
                      const e = t ? Ss(i, t) : 0;
                      null !== e && (r[e] ? r[e].projectionNext = i : n[e] = i,
                      r[e] = i),
                      i = i.next
                  }
              }
          }(cc),
          gs(0, "div", 0),
          gs(1, "div", 1, 2),
          xs("click", (function(t) {
              return e._control.onContainerClick && e._control.onContainerClick(t)
          }
          )),
          fs(3, Xu, 9, 0, "ng-container", 3),
          fs(4, tc, 2, 0, "div", 4),
          gs(5, "div", 5, 6),
          Is(7),
          gs(8, "span", 7),
          fs(9, ic, 5, 16, "label", 8),
          ys(),
          ys(),
          fs(10, sc, 2, 0, "div", 9),
          ys(),
          fs(11, oc, 3, 4, "div", 10),
          gs(12, "div", 11),
          fs(13, lc, 2, 1, "div", 12),
          fs(14, uc, 5, 2, "div", 13),
          ys(),
          ys()),
          2 & t && (fr(3),
          ms("ngIf", "outline" == e.appearance),
          fr(1),
          ms("ngIf", e._prefixChildren.length),
          fr(5),
          ms("ngIf", e._hasFloatingLabel()),
          fr(1),
          ms("ngIf", e._suffixChildren.length),
          fr(1),
          ms("ngIf", "outline" != e.appearance),
          fr(1),
          ms("ngSwitch", e._getDisplayedMessages()),
          fr(1),
          ms("ngSwitchCase", "error"),
          fr(1),
          ms("ngSwitchCase", "hint"))
      },
      directives: [_a, va, wa, Su],
      styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", '.mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:"";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n', '.mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:" ";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n', ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
      encapsulation: 2,
      data: {
          animation: [pc.transitionMessages]
      },
      changeDetection: 0
  }),
  t
}
)()
const pd = new Ft("MAT_INPUT_VALUE_ACCESSOR")
, md = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"];
let _d = 0;
class gd {
  constructor(t, e, n, r) {
      this._defaultErrorStateMatcher = t,
      this._parentForm = e,
      this._parentFormGroup = n,
      this.ngControl = r
  }
}
const yd = Gu(gd);
let bd = (()=>{
  class t extends yd {
      constructor(t, e, n, r, i, s, o, l, a) {
          super(s, r, i, n),
          this._elementRef = t,
          this._platform = e,
          this.ngControl = n,
          this._autofillMonitor = l,
          this._uid = `mat-input-${_d++}`,
          this._isServer = !1,
          this._isNativeSelect = !1,
          this.focused = !1,
          this.stateChanges = new x,
          this.controlType = "mat-input",
          this.autofilled = !1,
          this._disabled = !1,
          this._required = !1,
          this._type = "text",
          this._readonly = !1,
          this._neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter(t=>nu().has(t));
          const u = this._elementRef.nativeElement;
          this._inputValueAccessor = o || u,
          this._previousNativeValue = this.value,
          this.id = this.id,
          e.IOS && a.runOutsideAngular(()=>{
              t.nativeElement.addEventListener("keyup", t=>{
                  let e = t.target;
                  e.value || e.selectionStart || e.selectionEnd || (e.setSelectionRange(1, 1),
                  e.setSelectionRange(0, 0))
              }
              )
          }
          ),
          this._isServer = !this._platform.isBrowser,
          this._isNativeSelect = "select" === u.nodeName.toLowerCase(),
          this._isNativeSelect && (this.controlType = u.multiple ? "mat-native-select-multiple" : "mat-native-select")
      }
      get disabled() {
          return this.ngControl && null !== this.ngControl.disabled ? this.ngControl.disabled : this._disabled
      }
      set disabled(t) {
          this._disabled = su(t),
          this.focused && (this.focused = !1,
          this.stateChanges.next())
      }
      get id() {
          return this._id
      }
      set id(t) {
          this._id = t || this._uid
      }
      get required() {
          return this._required
      }
      set required(t) {
          this._required = su(t)
      }
      get type() {
          return this._type
      }
      set type(t) {
          this._type = t || "text",
          this._validateType(),
          !this._isTextarea() && nu().has(this._type) && (this._elementRef.nativeElement.type = this._type)
      }
      get value() {
          return this._inputValueAccessor.value
      }
      set value(t) {
          t !== this.value && (this._inputValueAccessor.value = t,
          this.stateChanges.next())
      }
      get readonly() {
          return this._readonly
      }
      set readonly(t) {
          this._readonly = su(t)
      }
      ngOnInit() {
          this._platform.isBrowser && this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{
              this.autofilled = t.isAutofilled,
              this.stateChanges.next()
          }
          )
      }
      ngOnChanges() {
          this.stateChanges.next()
      }
      ngOnDestroy() {
          this.stateChanges.complete(),
          this._platform.isBrowser && this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)
      }
      ngDoCheck() {
          this.ngControl && this.updateErrorState(),
          this._dirtyCheckNativeValue()
      }
      focus(t) {
          this._elementRef.nativeElement.focus(t)
      }
      _focusChanged(t) {
          t === this.focused || this.readonly && t || (this.focused = t,
          this.stateChanges.next())
      }
      _onInput() {}
      _isTextarea() {
          return "textarea" === this._elementRef.nativeElement.nodeName.toLowerCase()
      }
      _dirtyCheckNativeValue() {
          const t = this._elementRef.nativeElement.value;
          this._previousNativeValue !== t && (this._previousNativeValue = t,
          this.stateChanges.next())
      }
      _validateType() {
          if (md.indexOf(this._type) > -1)
              throw Error(`Input type "${this._type}" isn't supported by matInput.`)
      }
      _isNeverEmpty() {
          return this._neverEmptyInputTypes.indexOf(this._type) > -1
      }
      _isBadInput() {
          let t = this._elementRef.nativeElement.validity;
          return t && t.badInput
      }
      get empty() {
          return !(this._isNeverEmpty() || this._elementRef.nativeElement.value || this._isBadInput() || this.autofilled)
      }
      get shouldLabelFloat() {
          if (this._isNativeSelect) {
              const t = this._elementRef.nativeElement
                , e = t.options[0];
              return this.focused || t.multiple || !this.empty || !!(t.selectedIndex > -1 && e && e.label)
          }
          return this.focused || !this.empty
      }
      setDescribedByIds(t) {
          this._ariaDescribedby = t.join(" ")
      }
      onContainerClick() {
          this.focused || this.focus()
      }
  }
  return t.\u0275fac = function(e) {
      return new (e || t)(ps(ao),ps(Xa),ps(Rc, 10),ps(dd, 8),ps(fd, 8),ps(Uu),ps(pd, 10),ps(gu),ps(Hl))
  }
  ,
  t.\u0275dir = _e({
      type: t,
      selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
      hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
      hostVars: 10,
      hostBindings: function(t, e) {
          1 & t && xs("blur", (function(t) {
              return e._focusChanged(!1)
          }
          ))("focus", (function(t) {
              return e._focusChanged(!0)
          }
          ))("input", (function(t) {
              return e._onInput()
          }
          )),
          2 & t && (Hs("disabled", e.disabled)("required", e.required),
          hs("id", e.id)("placeholder", e.placeholder)("readonly", e.readonly && !e._isNativeSelect || null)("aria-describedby", e._ariaDescribedby || null)("aria-invalid", e.errorState)("aria-required", e.required.toString()),
          Ds("mat-input-server", e._isServer))
      },
      inputs: {
          id: "id",
          disabled: "disabled",
          required: "required",
          type: "type",
          value: "value",
          readonly: "readonly",
          placeholder: "placeholder",
          errorStateMatcher: "errorStateMatcher"
      },
      exportAs: ["matInput"],
      features: [io([{
          provide: mc,
          useExisting: t
      }]), qs, Qs()]
  }),
  t
}
)()