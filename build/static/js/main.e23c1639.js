/*! For license information please see main.e23c1639.js.LICENSE.txt */
(() => {
  var e = {
      730: (e, t, n) => {
        "use strict";
        var r = n(43),
          a = n(853);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          i = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, l, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
                ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
                : ((t = a.attributeName),
                  (r = a.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (a = a.type) || (4 === a && !0 === n)
                          ? ""
                          : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          _ = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          x = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          E = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          L = Symbol.for("react.suspense"),
          z = Symbol.for("react.suspense_list"),
          R = Symbol.for("react.memo"),
          T = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var j = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var I = Symbol.iterator;
        function O(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (I && e[I]) || e["@@iterator"])
              ? e
              : null;
        }
        var M,
          F = Object.assign;
        function D(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var U = !1;
        function A(e, t) {
          if (!e || U) return "";
          U = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  l = r.stack.split("\n"),
                  o = a.length - 1,
                  i = l.length - 1;
                1 <= o && 0 <= i && a[o] !== l[i];

              )
                i--;
              for (; 1 <= o && 0 <= i; o--, i--)
                if (a[o] !== l[i]) {
                  if (1 !== o || 1 !== i)
                    do {
                      if ((o--, 0 > --i || a[o] !== l[i])) {
                        var u = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= o && 0 <= i);
                  break;
                }
            }
          } finally {
            (U = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = A(e.type, !1));
            case 11:
              return (e = A(e.type.render, !1));
            case 1:
              return (e = A(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case x:
              return "StrictMode";
            case L:
              return "Suspense";
            case z:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case E:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case R:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case T:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function V(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === x ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function Q(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = Q(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = Q(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          G(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function le(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
              ? "http://www.w3.org/1999/xhtml"
              : e;
        }
        var se,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
                "number" !== typeof t ||
                0 === t ||
                (pe.hasOwnProperty(e) && pe[e])
              ? ("" + t).trim()
              : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function _e(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          xe = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = _a(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ee(e) {
          Se ? (xe ? xe.push(e) : (xe = [e])) : (Se = e);
        }
        function Ne() {
          if (Se) {
            var e = Se,
              t = xe;
            if (((xe = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Le() {}
        var ze = !1;
        function Re(e, t, n) {
          if (ze) return e(t, n);
          ze = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (ze = !1), (null !== Se || null !== xe) && (Le(), Ne());
          }
        }
        function Te(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = _a(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var je = !1;
        if (c)
          try {
            var Ie = {};
            Object.defineProperty(Ie, "passive", {
              get: function () {
                je = !0;
              },
            }),
              window.addEventListener("test", Ie, Ie),
              window.removeEventListener("test", Ie, Ie);
          } catch (ce) {
            je = !1;
          }
        function Oe(e, t, n, r, a, l, o, i, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Me = !1,
          Fe = null,
          De = !1,
          Ue = null,
          Ae = {
            onError: function (e) {
              (Me = !0), (Fe = e);
            },
          };
        function He(e, t, n, r, a, l, o, i, u) {
          (Me = !1), (Fe = null), Oe.apply(Ae, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (Be(e) !== e) throw Error(l(188));
        }
        function Qe(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return We(a), e;
                    if (o === r) return We(a), t;
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = o);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = o.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = o), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = o), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          Ge = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
              },
          it = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var i = o & ~a;
            0 !== i ? (r = dt(i)) : 0 !== (l &= o) && (r = dt(l));
          } else 0 !== (o = n & ~a) ? (r = dt(o)) : 0 !== l && (r = dt(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function mt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var _t,
          kt,
          St,
          xt,
          Ct,
          Et = !1,
          Nt = [],
          Pt = null,
          Lt = null,
          zt = null,
          Rt = new Map(),
          Tt = new Map(),
          jt = [],
          It =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function Ot(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Lt = null;
              break;
            case "mouseover":
            case "mouseout":
              zt = null;
              break;
            case "pointerover":
            case "pointerout":
              Rt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Tt.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ft(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Dt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ut(e, t, n) {
          Dt(e) && n.delete(t);
        }
        function At() {
          (Et = !1),
            null !== Pt && Dt(Pt) && (Pt = null),
            null !== Lt && Dt(Lt) && (Lt = null),
            null !== zt && Dt(zt) && (zt = null),
            Rt.forEach(Ut),
            Tt.forEach(Ut);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Et ||
              ((Et = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, At)));
        }
        function Bt(e) {
          function t(t) {
            return Ht(t, e);
          }
          if (0 < Nt.length) {
            Ht(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Ht(Pt, e),
              null !== Lt && Ht(Lt, e),
              null !== zt && Ht(zt, e),
              Rt.forEach(t),
              Tt.forEach(t),
              n = 0;
            n < jt.length;
            n++
          )
            (r = jt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < jt.length && null === (n = jt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && jt.shift();
        }
        var Vt = w.ReactCurrentBatchConfig,
          Wt = !0;
        function Qt(e, t, n, r) {
          var a = bt,
            l = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = l);
          }
        }
        function $t(e, t, n, r) {
          var a = bt,
            l = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = l);
          }
        }
        function qt(e, t, n, r) {
          if (Wt) {
            var a = Yt(e, t, n, r);
            if (null === a) Wr(e, t, r, Kt, n), Ot(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = Mt(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Lt = Mt(Lt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (zt = Mt(zt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Rt.set(l, Mt(Rt.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      Tt.set(l, Mt(Tt.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Ot(e, r), 4 & t && -1 < It.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && _t(l),
                  null === (l = Yt(e, t, n, r)) && Wr(e, t, r, Kt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Yt(e, t, n, r) {
          if (((Kt = null), null !== (e = ya((e = _e(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Xt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Gt ? Gt.value : Gt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          dn = F({}, sn, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = F({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((ln = e.screenX - un.screenX),
                        (on = e.screenY - un.screenY))
                      : (on = ln = 0),
                    (un = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          hn = an(pn),
          mn = an(F({}, pn, { dataTransfer: 0 })),
          vn = an(F({}, dn, { relatedTarget: 0 })),
          gn = an(
            F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = F({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(F({}, sn, { data: 0 })),
          _n = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return xn;
        }
        var En = F({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = _n[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? kn[e.keyCode] || "Unidentified"
                  : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          Nn = an(En),
          Pn = an(
            F({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          Ln = an(
            F({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            }),
          ),
          zn = an(
            F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Rn = F({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Tn = an(Rn),
          jn = [9, 13, 27, 32],
          In = c && "CompositionEvent" in window,
          On = null;
        c && "documentMode" in document && (On = document.documentMode);
        var Mn = c && "TextEvent" in window && !On,
          Fn = c && (!In || (On && 8 < On && 11 >= On)),
          Dn = String.fromCharCode(32),
          Un = !1;
        function An(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== jn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var Vn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function Qn(e, t, n, r) {
          Ee(r),
            0 < (t = $r(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          qn = null;
        function Kn(e) {
          Dr(e, 0);
        }
        function Yn(e) {
          if (q(wa(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Gn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent("onpropertychange", nr), (qn = $n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(qn)) {
            var t = [];
            Qn(t, qn, e, _e(e)), Re(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), ($n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(qn);
        }
        function lr(e, t) {
          if ("click" === e) return Yn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          br ||
            null == vr ||
            vr !== K(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = $r(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function _r(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: _r("Animation", "AnimationEnd"),
            animationiteration: _r("Animation", "AnimationIteration"),
            animationstart: _r("Animation", "AnimationStart"),
            transitionend: _r("Transition", "TransitionEnd"),
          },
          Sr = {},
          xr = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in xr) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((xr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Er = Cr("animationend"),
          Nr = Cr("animationiteration"),
          Pr = Cr("animationstart"),
          Lr = Cr("transitionend"),
          zr = new Map(),
          Rr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Tr(e, t) {
          zr.set(e, t), u(t, [e]);
        }
        for (var jr = 0; jr < Rr.length; jr++) {
          var Ir = Rr[jr];
          Tr(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)));
        }
        Tr(Er, "onAnimationEnd"),
          Tr(Nr, "onAnimationIteration"),
          Tr(Pr, "onAnimationStart"),
          Tr("dblclick", "onDoubleClick"),
          Tr("focusin", "onFocus"),
          Tr("focusout", "onBlur"),
          Tr(Lr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var Or =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Or),
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, i, u, s) {
              if ((He.apply(this, arguments), Me)) {
                if (!Me) throw Error(l(198));
                var c = Fe;
                (Me = !1), (Fe = null), De || ((De = !0), (Ue = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== l && a.isPropagationStopped()))
                    break e;
                  Fr(a, i, s), (l = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (i = r[o]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== l && a.isPropagationStopped())
                  )
                    break e;
                  Fr(a, i, s), (l = u);
                }
            }
          }
          if (De) throw ((e = Ue), (De = !1), (Ue = null), e);
        }
        function Ur(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Ar(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Hr = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Hr]) {
            (e[Hr] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || Ar(t, !1, e), Ar(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hr] || ((t[Hr] = !0), Ar("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var a = Qt;
              break;
            case 4:
              a = $t;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !je ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = ya(i))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = l = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Re(function () {
            var r = l,
              a = _e(n),
              o = [];
            e: {
              var i = zr.get(e);
              if (void 0 !== i) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Nn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = vn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Ln;
                    break;
                  case Er:
                  case Nr:
                  case Pr:
                    u = gn;
                    break;
                  case Lr:
                    u = zn;
                    break;
                  case "scroll":
                    u = fn;
                    break;
                  case "wheel":
                    u = Tn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Pn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Te(h, f)) &&
                        c.push(Qr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, n, a)),
                  o.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ya(s) && !s[ha])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                        ? i.defaultView || i.parentWindow
                        : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ya(s)
                          : null) &&
                        (s !== (d = Be(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == u ? i : wa(u)),
                  (p = null == s ? i : wa(s)),
                  ((i = new c(m, h + "leave", u, n, a)).target = d),
                  (i.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(f, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  u && s)
                )
                  e: {
                    for (f = s, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, m = f; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (f = qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = qr(c)), (f = qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Kr(o, i, u, c, !1),
                  null !== s && null !== d && Kr(o, d, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? wa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var v = Xn;
              else if (Wn(i))
                if (Gn) v = or;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (v = lr);
              switch (
                (v && (v = v(e, r))
                  ? Qn(o, v, n, a)
                  : (g && g(e, i, r),
                    "focusout" === e &&
                      (g = i._wrapperState) &&
                      g.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (g = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(g) || "true" === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(o, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(o, n, a);
              }
              var y;
              if (In)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? An(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Bn && (y = en())
                    : ((Zt = "value" in (Gt = a) ? Gt.value : Gt.textContent),
                      (Bn = !0))),
                0 < (g = $r(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Hn(n)) && (b.data = y))),
                (y = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Un = !0), Dn);
                        case "textInput":
                          return (e = t.data) === Dn && Un ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!In && An(e, t))
                          ? ((e = en()), (Jt = Zt = Gt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Dr(o, t);
          });
        }
        function Qr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Te(e, n)) && r.unshift(Qr(e, l, a)),
              null != (l = Te(e, t)) && r.push(Qr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== s &&
              ((i = s),
              a
                ? null != (u = Te(n, l)) && o.unshift(Qr(n, u, i))
                : a || (null != (u = Te(n, l)) && o.push(Qr(n, u, i)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Yr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Xr, "");
        }
        function Zr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(l(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
                ? function (e) {
                    return la.resolve(null).then(e).catch(ia);
                  }
                : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Bt(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          va = "__reactListeners$" + da,
          ga = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function _a(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function xa(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Ea(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var Na = {},
          Pa = xa(Na),
          La = xa(!1),
          za = Na;
        function Ra(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Na;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function Ta(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function ja() {
          Ca(La), Ca(Pa);
        }
        function Ia(e, t, n) {
          if (Pa.current !== Na) throw Error(l(168));
          Ea(Pa, t), Ea(La, n);
        }
        function Oa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, V(e) || "Unknown", a));
          return F({}, n, r);
        }
        function Ma(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Na),
            (za = Pa.current),
            Ea(Pa, e),
            Ea(La, La.current),
            !0
          );
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Oa(e, t, za)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(La),
              Ca(Pa),
              Ea(Pa, e))
            : Ca(La),
            Ea(La, n);
        }
        var Da = null,
          Ua = !1,
          Aa = !1;
        function Ha(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function Ba() {
          if (!Aa && null !== Da) {
            Aa = !0;
            var e = 0,
              t = bt;
            try {
              var n = Da;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Ua = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), qe(Je, Ba), a);
            } finally {
              (bt = t), (Aa = !1);
            }
          }
          return null;
        }
        var Va = [],
          Wa = 0,
          Qa = null,
          $a = 0,
          qa = [],
          Ka = 0,
          Ya = null,
          Xa = 1,
          Ga = "";
        function Za(e, t) {
          (Va[Wa++] = $a), (Va[Wa++] = Qa), (Qa = e), ($a = t);
        }
        function Ja(e, t, n) {
          (qa[Ka++] = Xa), (qa[Ka++] = Ga), (qa[Ka++] = Ya), (Ya = e);
          var r = Xa;
          e = Ga;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - ot(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Xa = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ga = l + e);
          } else (Xa = (1 << l) | (n << a) | r), (Ga = e);
        }
        function el(e) {
          null !== e.return && (Za(e, 1), Ja(e, 1, 0));
        }
        function tl(e) {
          for (; e === Qa; )
            (Qa = Va[--Wa]), (Va[Wa] = null), ($a = Va[--Wa]), (Va[Wa] = null);
          for (; e === Ya; )
            (Ya = qa[--Ka]),
              (qa[Ka] = null),
              (Ga = qa[--Ka]),
              (qa[Ka] = null),
              (Xa = qa[--Ka]),
              (qa[Ka] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function ol(e, t) {
          var n = Rs(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function il(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ya ? { id: Xa, overflow: Ga } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Rs(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ul(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function sl(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!il(e, t)) {
                if (ul(e)) throw Error(l(418));
                t = sa(n.nextSibling);
                var r = nl;
                t && il(e, t)
                  ? ol(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (ul(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function dl(e) {
          if (e !== nl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (ul(e)) throw (fl(), Error(l(418)));
            for (; t; ) ol(e, t), (t = sa(t.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fl() {
          for (var e = rl; e; ) e = sa(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = w.ReactCurrentBatchConfig;
        function vl(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function gl(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            ))
          );
        }
        function yl(e) {
          return (0, e._init)(e._payload);
        }
        function bl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = js(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Fs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var l = n.type;
            return l === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === l ||
                    ("object" === typeof l &&
                      null !== l &&
                      l.$$typeof === T &&
                      yl(l) === t.type))
                ? (((r = a(t, n.props)).ref = vl(e, t, n)), (r.return = e), r)
                : (((r = Is(n.type, n.key, n.props, null, e.mode, r)).ref = vl(
                    e,
                    t,
                    n,
                  )),
                  (r.return = e),
                  r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ds(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Os(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Fs("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case _:
                  return (
                    ((n = Is(t.type, t.key, t.props, null, e.mode, n)).ref = vl(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Ds(t, e.mode, n)).return = e), t;
                case T:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || O(t))
                return ((t = Os(t, e.mode, n, null)).return = e), t;
              gl(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case _:
                  return n.key === a ? s(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case T:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || O(n)) return null !== a ? null : d(e, t, n, r, null);
              gl(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case _:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case T:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || O(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              gl(t, r);
            }
            return null;
          }
          function m(a, l, i, u) {
            for (
              var s = null, c = null, d = l, m = (l = 0), v = null;
              null !== d && m < i.length;
              m++
            ) {
              d.index > m ? ((v = d), (d = null)) : (v = d.sibling);
              var g = p(a, d, i[m], u);
              if (null === g) {
                null === d && (d = v);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (l = o(g, l, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (d = v);
            }
            if (m === i.length) return n(a, d), al && Za(a, m), s;
            if (null === d) {
              for (; m < i.length; m++)
                null !== (d = f(a, i[m], u)) &&
                  ((l = o(d, l, m)),
                  null === c ? (s = d) : (c.sibling = d),
                  (c = d));
              return al && Za(a, m), s;
            }
            for (d = r(a, d); m < i.length; m++)
              null !== (v = h(d, a, m, i[m], u)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? m : v.key),
                (l = o(v, l, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              al && Za(a, m),
              s
            );
          }
          function v(a, i, u, s) {
            var c = O(u);
            if ("function" !== typeof c) throw Error(l(150));
            if (null == (u = c.call(u))) throw Error(l(151));
            for (
              var d = (c = null), m = i, v = (i = 0), g = null, y = u.next();
              null !== m && !y.done;
              v++, y = u.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(a, m, y.value, s);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = o(b, i, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = g);
            }
            if (y.done) return n(a, m), al && Za(a, v), c;
            if (null === m) {
              for (; !y.done; v++, y = u.next())
                null !== (y = f(a, y.value, s)) &&
                  ((i = o(y, i, v)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return al && Za(a, v), c;
            }
            for (m = r(a, m); !y.done; v++, y = u.next())
              null !== (y = h(m, a, v, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (i = o(y, i, v)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Za(a, v),
              c
            );
          }
          return function e(r, l, o, u) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case _:
                  e: {
                    for (var s = o.key, c = l; null !== c; ) {
                      if (c.key === s) {
                        if ((s = o.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, o.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === T &&
                            yl(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, o.props)).ref = vl(r, c, o)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === S
                      ? (((l = Os(o.props.children, r.mode, u, o.key)).return =
                          r),
                        (r = l))
                      : (((u = Is(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          u,
                        )).ref = vl(r, l, o)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case k:
                  e: {
                    for (c = o.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === o.containerInfo &&
                          l.stateNode.implementation === o.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, o.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = Ds(o, r.mode, u)).return = r), (r = l);
                  }
                  return i(r);
                case T:
                  return e(r, l, (c = o._init)(o._payload), u);
              }
              if (te(o)) return m(r, l, o, u);
              if (O(o)) return v(r, l, o, u);
              gl(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, o)).return = r), (r = l))
                  : (n(r, l), ((l = Fs(o, r.mode, u)).return = r), (r = l)),
                i(r))
              : n(r, l);
          };
        }
        var wl = bl(!0),
          _l = bl(!1),
          kl = xa(null),
          Sl = null,
          xl = null,
          Cl = null;
        function El() {
          Cl = xl = Sl = null;
        }
        function Nl(e) {
          var t = kl.current;
          Ca(kl), (e._currentValue = t);
        }
        function Pl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ll(e, t) {
          (Sl = e),
            (Cl = xl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bi = !0), (e.firstContext = null));
        }
        function zl(e) {
          var t = e._currentValue;
          if (Cl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === xl)
            ) {
              if (null === Sl) throw Error(l(308));
              (xl = e), (Sl.dependencies = { lanes: 0, firstContext: e });
            } else xl = xl.next = e;
          return t;
        }
        var Rl = null;
        function Tl(e) {
          null === Rl ? (Rl = [e]) : Rl.push(e);
        }
        function jl(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Tl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Il(e, r)
          );
        }
        function Il(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ol = !1;
        function Ml(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Fl(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Dl(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ul(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Pu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Il(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Tl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Il(e, n)
          );
        }
        function Al(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Hl(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Bl(e, t, n, r) {
          var a = e.updateQueue;
          Ol = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== l) {
            var d = a.baseState;
            for (o = 0, c = s = u = null, i = l; ; ) {
              var f = i.lane,
                p = i.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = F({}, d, f);
                      break e;
                    case 2:
                      Ol = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = d)) : (c = c.next = p),
                  (o |= f);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (f = i).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = d),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Mu |= o), (e.lanes = o), (e.memoizedState = d);
          }
        }
        function Vl(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Wl = {},
          Ql = xa(Wl),
          $l = xa(Wl),
          ql = xa(Wl);
        function Kl(e) {
          if (e === Wl) throw Error(l(174));
          return e;
        }
        function Yl(e, t) {
          switch ((Ea(ql, t), Ea($l, e), Ea(Ql, Wl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          Ca(Ql), Ea(Ql, t);
        }
        function Xl() {
          Ca(Ql), Ca($l), Ca(ql);
        }
        function Gl(e) {
          Kl(ql.current);
          var t = Kl(Ql.current),
            n = ue(t, e.type);
          t !== n && (Ea($l, e), Ea(Ql, n));
        }
        function Zl(e) {
          $l.current === e && (Ca(Ql), Ca($l));
        }
        var Jl = xa(0);
        function eo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var to = [];
        function no() {
          for (var e = 0; e < to.length; e++)
            to[e]._workInProgressVersionPrimary = null;
          to.length = 0;
        }
        var ro = w.ReactCurrentDispatcher,
          ao = w.ReactCurrentBatchConfig,
          lo = 0,
          oo = null,
          io = null,
          uo = null,
          so = !1,
          co = !1,
          fo = 0,
          po = 0;
        function ho() {
          throw Error(l(321));
        }
        function mo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function vo(e, t, n, r, a, o) {
          if (
            ((lo = o),
            (oo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ro.current = null === e || null === e.memoizedState ? Jo : ei),
            (e = n(r, a)),
            co)
          ) {
            o = 0;
            do {
              if (((co = !1), (fo = 0), 25 <= o)) throw Error(l(301));
              (o += 1),
                (uo = io = null),
                (t.updateQueue = null),
                (ro.current = ti),
                (e = n(r, a));
            } while (co);
          }
          if (
            ((ro.current = Zo),
            (t = null !== io && null !== io.next),
            (lo = 0),
            (uo = io = oo = null),
            (so = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function go() {
          var e = 0 !== fo;
          return (fo = 0), e;
        }
        function yo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === uo ? (oo.memoizedState = uo = e) : (uo = uo.next = e), uo
          );
        }
        function bo() {
          if (null === io) {
            var e = oo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = io.next;
          var t = null === uo ? oo.memoizedState : uo.next;
          if (null !== t) (uo = t), (io = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (io = e).memoizedState,
              baseState: io.baseState,
              baseQueue: io.baseQueue,
              queue: io.queue,
              next: null,
            }),
              null === uo ? (oo.memoizedState = uo = e) : (uo = uo.next = e);
          }
          return uo;
        }
        function wo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function _o(e) {
          var t = bo(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = io,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var i = a.next;
              (a.next = o.next), (o.next = i);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var u = (i = null),
              s = null,
              c = o;
            do {
              var d = c.lane;
              if ((lo & d) === d)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = f), (i = r)) : (s = s.next = f),
                  (oo.lanes |= d),
                  (Mu |= d);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === s ? (i = r) : (s.next = u),
              ir(r, t.memoizedState) || (bi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (oo.lanes |= o), (Mu |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ko(e) {
          var t = bo(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (i !== a);
            ir(o, t.memoizedState) || (bi = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function So() {}
        function xo(e, t) {
          var n = oo,
            r = bo(),
            a = t(),
            o = !ir(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (bi = !0)),
            (r = r.queue),
            Mo(No.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== uo && 1 & uo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ro(9, Eo.bind(null, n, r, a, t), void 0, null),
              null === Lu)
            )
              throw Error(l(349));
            0 !== (30 & lo) || Co(n, t, a);
          }
          return a;
        }
        function Co(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e);
        }
        function Eo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Po(t) && Lo(e);
        }
        function No(e, t, n) {
          return n(function () {
            Po(t) && Lo(e);
          });
        }
        function Po(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Lo(e) {
          var t = Il(e, 1);
          null !== t && ns(t, e, 1, -1);
        }
        function zo(e) {
          var t = yo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Ko.bind(null, oo, e)),
            [t.memoizedState, e]
          );
        }
        function Ro(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          );
        }
        function To() {
          return bo().memoizedState;
        }
        function jo(e, t, n, r) {
          var a = yo();
          (oo.flags |= e),
            (a.memoizedState = Ro(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Io(e, t, n, r) {
          var a = bo();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== io) {
            var o = io.memoizedState;
            if (((l = o.destroy), null !== r && mo(r, o.deps)))
              return void (a.memoizedState = Ro(t, n, l, r));
          }
          (oo.flags |= e), (a.memoizedState = Ro(1 | t, n, l, r));
        }
        function Oo(e, t) {
          return jo(8390656, 8, e, t);
        }
        function Mo(e, t) {
          return Io(2048, 8, e, t);
        }
        function Fo(e, t) {
          return Io(4, 2, e, t);
        }
        function Do(e, t) {
          return Io(4, 4, e, t);
        }
        function Uo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function Ao(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Io(4, 4, Uo.bind(null, t, e), n)
          );
        }
        function Ho() {}
        function Bo(e, t) {
          var n = bo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mo(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Vo(e, t) {
          var n = bo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mo(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Wo(e, t, n) {
          return 0 === (21 & lo)
            ? (e.baseState && ((e.baseState = !1), (bi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = mt()), (oo.lanes |= n), (Mu |= n), (e.baseState = !0)),
              t);
        }
        function Qo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ao.transition;
          ao.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ao.transition = r);
          }
        }
        function $o() {
          return bo().memoizedState;
        }
        function qo(e, t, n) {
          var r = ts(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Yo(e))
          )
            Xo(t, n);
          else if (null !== (n = jl(e, t, n, r))) {
            ns(n, e, r, es()), Go(n, t, r);
          }
        }
        function Ko(e, t, n) {
          var r = ts(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Yo(e)) Xo(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, o))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Tl(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = jl(e, t, a, r)) &&
              (ns(n, e, r, (a = es())), Go(n, t, r));
          }
        }
        function Yo(e) {
          var t = e.alternate;
          return e === oo || (null !== t && t === oo);
        }
        function Xo(e, t) {
          co = so = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Go(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var Zo = {
            readContext: zl,
            useCallback: ho,
            useContext: ho,
            useEffect: ho,
            useImperativeHandle: ho,
            useInsertionEffect: ho,
            useLayoutEffect: ho,
            useMemo: ho,
            useReducer: ho,
            useRef: ho,
            useState: ho,
            useDebugValue: ho,
            useDeferredValue: ho,
            useTransition: ho,
            useMutableSource: ho,
            useSyncExternalStore: ho,
            useId: ho,
            unstable_isNewReconciler: !1,
          },
          Jo = {
            readContext: zl,
            useCallback: function (e, t) {
              return (yo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: zl,
            useEffect: Oo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                jo(4194308, 4, Uo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return jo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return jo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = yo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = yo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = qo.bind(null, oo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (yo().memoizedState = e);
            },
            useState: zo,
            useDebugValue: Ho,
            useDeferredValue: function (e) {
              return (yo().memoizedState = e);
            },
            useTransition: function () {
              var e = zo(!1),
                t = e[0];
              return (
                (e = Qo.bind(null, e[1])), (yo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = oo,
                a = yo();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Lu)) throw Error(l(349));
                0 !== (30 & lo) || Co(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Oo(No.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Ro(9, Eo.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = yo(),
                t = Lu.identifierPrefix;
              if (al) {
                var n = Ga;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xa & ~(1 << (32 - ot(Xa) - 1))).toString(32) + n)),
                  0 < (n = fo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = po++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ei = {
            readContext: zl,
            useCallback: Bo,
            useContext: zl,
            useEffect: Mo,
            useImperativeHandle: Ao,
            useInsertionEffect: Fo,
            useLayoutEffect: Do,
            useMemo: Vo,
            useReducer: _o,
            useRef: To,
            useState: function () {
              return _o(wo);
            },
            useDebugValue: Ho,
            useDeferredValue: function (e) {
              return Wo(bo(), io.memoizedState, e);
            },
            useTransition: function () {
              return [_o(wo)[0], bo().memoizedState];
            },
            useMutableSource: So,
            useSyncExternalStore: xo,
            useId: $o,
            unstable_isNewReconciler: !1,
          },
          ti = {
            readContext: zl,
            useCallback: Bo,
            useContext: zl,
            useEffect: Mo,
            useImperativeHandle: Ao,
            useInsertionEffect: Fo,
            useLayoutEffect: Do,
            useMemo: Vo,
            useReducer: ko,
            useRef: To,
            useState: function () {
              return ko(wo);
            },
            useDebugValue: Ho,
            useDeferredValue: function (e) {
              var t = bo();
              return null === io
                ? (t.memoizedState = e)
                : Wo(t, io.memoizedState, e);
            },
            useTransition: function () {
              return [ko(wo)[0], bo().memoizedState];
            },
            useMutableSource: So,
            useSyncExternalStore: xo,
            useId: $o,
            unstable_isNewReconciler: !1,
          };
        function ni(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function ri(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ai = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              a = ts(e),
              l = Dl(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Ul(e, l, a)) && (ns(t, e, a, r), Al(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              a = ts(e),
              l = Dl(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Ul(e, l, a)) && (ns(t, e, a, r), Al(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = es(),
              r = ts(e),
              a = Dl(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Ul(e, a, r)) && (ns(t, e, r, n), Al(t, e, r));
          },
        };
        function li(e, t, n, r, a, l, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, l);
        }
        function oi(e, t, n) {
          var r = !1,
            a = Na,
            l = t.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = zl(l))
              : ((a = Ta(t) ? za : Pa.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ra(e, a)
                  : Na)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ai),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function ii(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ai.enqueueReplaceState(t, t.state, null);
        }
        function ui(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Ml(e);
          var l = t.contextType;
          "object" === typeof l && null !== l
            ? (a.context = zl(l))
            : ((l = Ta(t) ? za : Pa.current), (a.context = Ra(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (ri(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && ai.enqueueReplaceState(a, a.state, null),
              Bl(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function si(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += H(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function ci(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function di(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fi = "function" === typeof WeakMap ? WeakMap : Map;
        function pi(e, t, n) {
          ((n = Dl(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wu || ((Wu = !0), (Qu = r)), di(0, t);
            }),
            n
          );
        }
        function hi(e, t, n) {
          (n = Dl(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                di(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                di(0, t),
                  "function" !== typeof r &&
                    (null === $u ? ($u = new Set([this])) : $u.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function mi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cs.bind(null, e, t, n)), t.then(e, e));
        }
        function vi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Dl(-1, 1)).tag = 2), Ul(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yi = w.ReactCurrentOwner,
          bi = !1;
        function wi(e, t, n, r) {
          t.child = null === e ? _l(t, null, n, r) : wl(t, e.child, n, r);
        }
        function _i(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            Ll(t, a),
            (r = vo(e, t, n, r, l, a)),
            (n = go()),
            null === e || bi
              ? (al && n && el(t), (t.flags |= 1), wi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, t, a))
          );
        }
        function ki(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              Ts(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Is(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Si(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(o, r) &&
              e.ref === t.ref
            )
              return Wi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = js(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Si(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (ur(l, r) && e.ref === t.ref) {
              if (((bi = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wi(e, t, a);
              0 !== (131072 & e.flags) && (bi = !0);
            }
          }
          return Ei(e, t, n, r, a);
        }
        function xi(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ea(ju, Tu),
                (Tu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ea(ju, Tu),
                  (Tu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ea(ju, Tu),
                (Tu |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ea(ju, Tu),
              (Tu |= r);
          return wi(e, t, a, n), t.child;
        }
        function Ci(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ei(e, t, n, r, a) {
          var l = Ta(n) ? za : Pa.current;
          return (
            (l = Ra(t, l)),
            Ll(t, a),
            (n = vo(e, t, n, r, l, a)),
            (r = go()),
            null === e || bi
              ? (al && r && el(t), (t.flags |= 1), wi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, t, a))
          );
        }
        function Ni(e, t, n, r, a) {
          if (Ta(n)) {
            var l = !0;
            Ma(t);
          } else l = !1;
          if ((Ll(t, a), null === t.stateNode))
            Vi(e, t), oi(t, n, r), ui(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              i = t.memoizedProps;
            o.props = i;
            var u = o.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = zl(s))
              : (s = Ra(t, (s = Ta(n) ? za : Pa.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== r || u !== s) && ii(t, o, r, s)),
              (Ol = !1);
            var f = t.memoizedState;
            (o.state = f),
              Bl(t, r, o, a),
              (u = t.memoizedState),
              i !== r || f !== u || La.current || Ol
                ? ("function" === typeof c &&
                    (ri(t, n, c, r), (u = t.memoizedState)),
                  (i = Ol || li(t, n, i, r, f, u, s))
                    ? (d ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = i))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Fl(e, t),
              (i = t.memoizedProps),
              (s = t.type === t.elementType ? i : ni(t.type, i)),
              (o.props = s),
              (d = t.pendingProps),
              (f = o.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = zl(u))
                : (u = Ra(t, (u = Ta(n) ? za : Pa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== d || f !== u) && ii(t, o, r, u)),
              (Ol = !1),
              (f = t.memoizedState),
              (o.state = f),
              Bl(t, r, o, a);
            var h = t.memoizedState;
            i !== d || f !== h || La.current || Ol
              ? ("function" === typeof p &&
                  (ri(t, n, p, r), (h = t.memoizedState)),
                (s = Ol || li(t, n, s, r, f, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = s))
              : ("function" !== typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Pi(e, t, n, r, l, a);
        }
        function Pi(e, t, n, r, a, l) {
          Ci(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Fa(t, n, !1), Wi(e, t, l);
          (r = t.stateNode), (yi.current = t);
          var i =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = wl(t, e.child, null, l)),
                (t.child = wl(t, null, i, l)))
              : wi(e, t, i, l),
            (t.memoizedState = r.state),
            a && Fa(t, n, !0),
            t.child
          );
        }
        function Li(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ia(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ia(0, t.context, !1),
            Yl(e, t.containerInfo);
        }
        function zi(e, t, n, r, a) {
          return pl(), hl(a), (t.flags |= 256), wi(e, t, n, r), t.child;
        }
        var Ri,
          Ti,
          ji,
          Ii,
          Oi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Mi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fi(e, t, n) {
          var r,
            a = t.pendingProps,
            o = Jl.current,
            i = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ea(Jl, 1 & o),
            null === e)
          )
            return (
              sl(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Ms(u, a, 0, null)),
                      (e = Os(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Mi(n)),
                      (t.memoizedState = Oi),
                      e)
                    : Di(t, u))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ui(e, t, i, (r = ci(Error(l(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((o = r.fallback),
                      (a = t.mode),
                      (r = Ms(
                        { mode: "visible", children: r.children },
                        a,
                        0,
                        null,
                      )),
                      ((o = Os(o, a, i, null)).flags |= 2),
                      (r.return = t),
                      (o.return = t),
                      (r.sibling = o),
                      (t.child = r),
                      0 !== (1 & t.mode) && wl(t, e.child, null, i),
                      (t.child.memoizedState = Mi(i)),
                      (t.memoizedState = Oi),
                      o);
              if (0 === (1 & t.mode)) return Ui(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Ui(e, t, i, (r = ci((o = Error(l(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (i & e.childLanes)), bi || u)) {
                if (null !== (r = Lu)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Il(e, a), ns(r, e, a, -1));
                }
                return ms(), Ui(e, t, i, (r = ci(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ns.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (rl = sa(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Ka++] = Xa),
                    (qa[Ka++] = Ga),
                    (qa[Ka++] = Ya),
                    (Xa = e.id),
                    (Ga = e.overflow),
                    (Ya = t)),
                  (t = Di(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, o, n);
          if (i) {
            (i = a.fallback), (u = t.mode), (r = (o = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = js(o, s)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (i = js(r, i))
                : ((i = Os(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Mi(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Oi),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = js(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Di(e, t) {
          return (
            ((t = Ms(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function Ui(e, t, n, r) {
          return (
            null !== r && hl(r),
            wl(t, e.child, null, n),
            ((e = Di(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ai(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Pl(e.return, t, n);
        }
        function Hi(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Bi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((wi(e, t, r.children, n), 0 !== (2 & (r = Jl.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ai(e, n, t);
                else if (19 === e.tag) Ai(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ea(Jl, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === eo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Hi(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === eo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Hi(t, !0, n, null, l);
                break;
              case "together":
                Hi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Mu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = js((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = js(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Qi(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function $i(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qi(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $i(t), null;
            case 1:
            case 17:
              return Ta(t.type) && ja(), $i(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Xl(),
                Ca(La),
                Ca(Pa),
                no(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (os(ll), (ll = null)))),
                Ti(e, t),
                $i(t),
                null
              );
            case 5:
              Zl(t);
              var a = Kl(ql.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                ji(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return $i(t), null;
                }
                if (((e = Kl(Ql.current)), dl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ur("cancel", r), Ur("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ur("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Or.length; a++) Ur(Or[a], r);
                      break;
                    case "source":
                      Ur("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ur("error", r), Ur("load", r);
                      break;
                    case "details":
                      Ur("toggle", r);
                      break;
                    case "input":
                      X(r, o), Ur("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Ur("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Ur("invalid", r);
                  }
                  for (var u in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(u)) {
                      var s = o[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : i.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Ur("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      $(r), J(r, o, !0);
                      break;
                    case "textarea":
                      $(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                          ? (e = u.createElement(n, { is: r.is }))
                          : ((e = u.createElement(n)),
                            "select" === n &&
                              ((u = e),
                              r.multiple
                                ? (u.multiple = !0)
                                : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Ri(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Ur("cancel", e), Ur("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ur("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Or.length; a++) Ur(Or[a], e);
                        a = r;
                        break;
                      case "source":
                        Ur("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ur("error", e), Ur("load", e), (a = r);
                        break;
                      case "details":
                        Ur("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = Y(e, r)), Ur("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          Ur("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ur("invalid", e);
                    }
                    for (o in (ye(n, a), (s = a)))
                      if (s.hasOwnProperty(o)) {
                        var c = s[o];
                        "style" === o
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === o
                            ? null != (c = c ? c.__html : void 0) && de(e, c)
                            : "children" === o
                              ? "string" === typeof c
                                ? ("textarea" !== n || "" !== c) && fe(e, c)
                                : "number" === typeof c && fe(e, "" + c)
                              : "suppressContentEditableWarning" !== o &&
                                "suppressHydrationWarning" !== o &&
                                "autoFocus" !== o &&
                                (i.hasOwnProperty(o)
                                  ? null != c &&
                                    "onScroll" === o &&
                                    Ur("scroll", e)
                                  : null != c && b(e, o, c, u));
                      }
                    switch (n) {
                      case "input":
                        $(e), J(e, r, !1);
                        break;
                      case "textarea":
                        $(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return $i(t), null;
            case 6:
              if (e && null != t.stateNode) Ii(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = Kl(ql.current)), Kl(Ql.current), dl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (o = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return $i(t), null;
            case 13:
              if (
                (Ca(Jl),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fl(), pl(), (t.flags |= 98560), (o = !1);
                else if (((o = dl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(l(317));
                    o[fa] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  $i(t), (o = !1);
                } else null !== ll && (os(ll), (ll = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & Jl.current)
                        ? 0 === Iu && (Iu = 3)
                        : ms())),
                  null !== t.updateQueue && (t.flags |= 4),
                  $i(t),
                  null);
            case 4:
              return (
                Xl(),
                Ti(e, t),
                null === e && Br(t.stateNode.containerInfo),
                $i(t),
                null
              );
            case 10:
              return Nl(t.type._context), $i(t), null;
            case 19:
              if ((Ca(Jl), null === (o = t.memoizedState))) return $i(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = o.rendering)))
                if (r) Qi(o, !1);
                else {
                  if (0 !== Iu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = eo(e))) {
                        for (
                          t.flags |= 128,
                            Qi(o, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (u = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = u.childLanes),
                                (o.lanes = u.lanes),
                                (o.child = u.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = u.memoizedProps),
                                (o.memoizedState = u.memoizedState),
                                (o.updateQueue = u.updateQueue),
                                (o.type = u.type),
                                (e = u.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ea(Jl, (1 & Jl.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ge() > Bu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Qi(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = eo(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Qi(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !u.alternate &&
                        !al)
                    )
                      return $i(t), null;
                  } else
                    2 * Ge() - o.renderingStartTime > Bu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Qi(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = o.last) ? (n.sibling = u) : (t.child = u),
                    (o.last = u));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = Jl.current),
                  Ea(Jl, r ? (1 & n) | 2 : 1 & n),
                  t)
                : ($i(t), null);
            case 22:
            case 23:
              return (
                ds(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Tu) &&
                    ($i(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : $i(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Ki(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                Ta(t.type) && ja(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Xl(),
                Ca(La),
                Ca(Pa),
                no(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Zl(t), null;
            case 13:
              if (
                (Ca(Jl),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(Jl), null;
            case 4:
              return Xl(), null;
            case 10:
              return Nl(t.type._context), null;
            case 22:
            case 23:
              return ds(), null;
            default:
              return null;
          }
        }
        (Ri = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ti = function () {}),
          (ji = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Kl(Ql.current);
              var l,
                o = null;
              switch (n) {
                case "input":
                  (a = Y(e, a)), (r = Y(e, r)), (o = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (l in u)
                      u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (l in u)
                        !u.hasOwnProperty(l) ||
                          (s && s.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in s)
                        s.hasOwnProperty(l) &&
                          u[l] !== s[l] &&
                          (n || (n = {}), (n[l] = s[l]));
                    } else n || (o || (o = []), o.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (o = o || []).push(c, s))
                      : "children" === c
                        ? ("string" !== typeof s && "number" !== typeof s) ||
                          (o = o || []).push(c, "" + s)
                        : "suppressContentEditableWarning" !== c &&
                          "suppressHydrationWarning" !== c &&
                          (i.hasOwnProperty(c)
                            ? (null != s && "onScroll" === c && Ur("scroll", e),
                              o || u === s || (o = []))
                            : (o = o || []).push(c, s));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ii = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yi = !1,
          Xi = !1,
          Gi = "function" === typeof WeakSet ? WeakSet : Set,
          Zi = null;
        function Ji(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                xs(e, t, r);
              }
            else n.current = null;
        }
        function eu(e, t, n) {
          try {
            n();
          } catch (r) {
            xs(e, t, r);
          }
        }
        var tu = !1;
        function nu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && eu(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function ru(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function au(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function lu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), lu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[va],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ou(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function iu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ou(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e; )
              uu(e, t, n), (e = e.sibling);
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        var cu = null,
          du = !1;
        function fu(e, t, n) {
          for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
        }
        function pu(e, t, n) {
          if (lt && "function" === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Xi || Ji(n, t);
            case 6:
              var r = cu,
                a = du;
              (cu = null),
                fu(e, t, n),
                (du = a),
                null !== (cu = r) &&
                  (du
                    ? ((e = cu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cu.removeChild(n.stateNode));
              break;
            case 18:
              null !== cu &&
                (du
                  ? ((e = cu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Bt(e))
                  : ua(cu, n.stateNode));
              break;
            case 4:
              (r = cu),
                (a = du),
                (cu = n.stateNode.containerInfo),
                (du = !0),
                fu(e, t, n),
                (cu = r),
                (du = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xi &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    o = l.destroy;
                  (l = l.tag),
                    void 0 !== o &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      eu(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              fu(e, t, n);
              break;
            case 1:
              if (
                !Xi &&
                (Ji(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  xs(n, t, i);
                }
              fu(e, t, n);
              break;
            case 21:
              fu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xi = (r = Xi) || null !== n.memoizedState),
                  fu(e, t, n),
                  (Xi = r))
                : fu(e, t, n);
              break;
            default:
              fu(e, t, n);
          }
        }
        function hu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gi()),
              t.forEach(function (t) {
                var r = Ps.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function mu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (cu = u.stateNode), (du = !1);
                      break e;
                    case 3:
                    case 4:
                      (cu = u.stateNode.containerInfo), (du = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === cu) throw Error(l(160));
                pu(o, i, a), (cu = null), (du = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                xs(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vu(t, e), (t = t.sibling);
        }
        function vu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mu(t, e), gu(e), 4 & r)) {
                try {
                  nu(3, e, e.return), ru(3, e);
                } catch (v) {
                  xs(e, e.return, v);
                }
                try {
                  nu(5, e, e.return);
                } catch (v) {
                  xs(e, e.return, v);
                }
              }
              break;
            case 1:
              mu(t, e), gu(e), 512 & r && null !== n && Ji(n, n.return);
              break;
            case 5:
              if (
                (mu(t, e),
                gu(e),
                512 & r && null !== n && Ji(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (v) {
                  xs(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : o,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === o.type &&
                      null != o.name &&
                      G(a, o),
                      be(u, i);
                    var c = be(u, o);
                    for (i = 0; i < s.length; i += 2) {
                      var d = s[i],
                        f = s[i + 1];
                      "style" === d
                        ? ve(a, f)
                        : "dangerouslySetInnerHTML" === d
                          ? de(a, f)
                          : "children" === d
                            ? fe(a, f)
                            : b(a, d, f, c);
                    }
                    switch (u) {
                      case "input":
                        Z(a, o);
                        break;
                      case "textarea":
                        le(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (v) {
                    xs(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((mu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (v) {
                  xs(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (mu(t, e),
                gu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (v) {
                  xs(e, e.return, v);
                }
              break;
            case 4:
            default:
              mu(t, e), gu(e);
              break;
            case 13:
              mu(t, e),
                gu(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Hu = Ge())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xi = (c = Xi) || d), mu(t, e), (Xi = c))
                  : mu(t, e),
                gu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Zi = e, d = e.child; null !== d; ) {
                    for (f = Zi = d; null !== Zi; ) {
                      switch (((h = (p = Zi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return);
                          break;
                        case 1:
                          Ji(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              xs(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          Ji(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            _u(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zi = h)) : _u(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((u = f.stateNode),
                              (i =
                                void 0 !== (s = f.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = me("display", i)));
                      } catch (v) {
                        xs(e, e.return, v);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (v) {
                        xs(e, e.return, v);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              mu(t, e), gu(e), 4 & r && hu(e);
            case 21:
          }
        }
        function gu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ou(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    su(e, iu(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  uu(e, iu(e), o);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (i) {
              xs(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yu(e, t, n) {
          (Zi = e), bu(e, t, n);
        }
        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zi; ) {
            var a = Zi,
              l = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Yi;
              if (!o) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Xi;
                i = Yi;
                var s = Xi;
                if (((Yi = o), (Xi = u) && !s))
                  for (Zi = a; null !== Zi; )
                    (u = (o = Zi).child),
                      22 === o.tag && null !== o.memoizedState
                        ? ku(a)
                        : null !== u
                          ? ((u.return = o), (Zi = u))
                          : ku(a);
                for (; null !== l; ) (Zi = l), bu(l, t, n), (l = l.sibling);
                (Zi = a), (Yi = i), (Xi = s);
              }
              wu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Zi = l))
                : wu(e);
          }
        }
        function wu(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi || ru(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ni(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Vl(t, o, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Vl(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Bt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Xi || (512 & t.flags && au(t));
              } catch (p) {
                xs(t, t.return, p);
              }
            }
            if (t === e) {
              Zi = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function _u(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (t === e) {
              Zi = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function ku(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ru(4, t);
                  } catch (u) {
                    xs(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      xs(t, a, u);
                    }
                  }
                  var l = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    xs(t, l, u);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    xs(t, o, u);
                  }
              }
            } catch (u) {
              xs(t, t.return, u);
            }
            if (t === e) {
              Zi = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Zi = i);
              break;
            }
            Zi = t.return;
          }
        }
        var Su,
          xu = Math.ceil,
          Cu = w.ReactCurrentDispatcher,
          Eu = w.ReactCurrentOwner,
          Nu = w.ReactCurrentBatchConfig,
          Pu = 0,
          Lu = null,
          zu = null,
          Ru = 0,
          Tu = 0,
          ju = xa(0),
          Iu = 0,
          Ou = null,
          Mu = 0,
          Fu = 0,
          Du = 0,
          Uu = null,
          Au = null,
          Hu = 0,
          Bu = 1 / 0,
          Vu = null,
          Wu = !1,
          Qu = null,
          $u = null,
          qu = !1,
          Ku = null,
          Yu = 0,
          Xu = 0,
          Gu = null,
          Zu = -1,
          Ju = 0;
        function es() {
          return 0 !== (6 & Pu) ? Ge() : -1 !== Zu ? Zu : (Zu = Ge());
        }
        function ts(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Pu) && 0 !== Ru
              ? Ru & -Ru
              : null !== ml.transition
                ? (0 === Ju && (Ju = mt()), Ju)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function ns(e, t, n, r) {
          if (50 < Xu) throw ((Xu = 0), (Gu = null), Error(l(185)));
          gt(e, n, r),
            (0 !== (2 & Pu) && e === Lu) ||
              (e === Lu && (0 === (2 & Pu) && (Fu |= n), 4 === Iu && is(e, Ru)),
              rs(e, r),
              1 === n &&
                0 === Pu &&
                0 === (1 & t.mode) &&
                ((Bu = Ge() + 500), Ua && Ba()));
        }
        function rs(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var o = 31 - ot(l),
                i = 1 << o,
                u = a[o];
              -1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[o] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (l &= ~i);
            }
          })(e, t);
          var r = ft(e, e === Lu ? Ru : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ua = !0), Ha(e);
                  })(us.bind(null, e))
                : Ha(us.bind(null, e)),
                oa(function () {
                  0 === (6 & Pu) && Ba();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ls(n, as.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function as(e, t) {
          if (((Zu = -1), (Ju = 0), 0 !== (6 & Pu))) throw Error(l(327));
          var n = e.callbackNode;
          if (ks() && e.callbackNode !== n) return null;
          var r = ft(e, e === Lu ? Ru : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vs(e, r);
          else {
            t = r;
            var a = Pu;
            Pu |= 2;
            var o = hs();
            for (
              (Lu === e && Ru === t) ||
              ((Vu = null), (Bu = Ge() + 500), fs(e, t));
              ;

            )
              try {
                ys();
                break;
              } catch (u) {
                ps(e, u);
              }
            El(),
              (Cu.current = o),
              (Pu = a),
              null !== zu ? (t = 0) : ((Lu = null), (Ru = 0), (t = Iu));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ls(e, a))),
              1 === t)
            )
              throw ((n = Ou), fs(e, 0), is(e, r), rs(e, Ge()), n);
            if (6 === t) is(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(l(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vs(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = ls(e, o))),
                  1 === t))
              )
                throw ((n = Ou), fs(e, 0), is(e, r), rs(e, Ge()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  _s(e, Au, Vu);
                  break;
                case 3:
                  if (
                    (is(e, r),
                    (130023424 & r) === r && 10 < (t = Hu + 500 - Ge()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      es(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(_s.bind(null, e, Au, Vu), t);
                    break;
                  }
                  _s(e, Au, Vu);
                  break;
                case 4:
                  if ((is(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - ot(r);
                    (o = 1 << i), (i = t[i]) > a && (a = i), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * xu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(_s.bind(null, e, Au, Vu), r);
                    break;
                  }
                  _s(e, Au, Vu);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return rs(e, Ge()), e.callbackNode === n ? as.bind(null, e) : null;
        }
        function ls(e, t) {
          var n = Uu;
          return (
            e.current.memoizedState.isDehydrated && (fs(e, t).flags |= 256),
            2 !== (e = vs(e, t)) && ((t = Au), (Au = n), null !== t && os(t)),
            e
          );
        }
        function os(e) {
          null === Au ? (Au = e) : Au.push.apply(Au, e);
        }
        function is(e, t) {
          for (
            t &= ~Du,
              t &= ~Fu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function us(e) {
          if (0 !== (6 & Pu)) throw Error(l(327));
          ks();
          var t = ft(e, 0);
          if (0 === (1 & t)) return rs(e, Ge()), null;
          var n = vs(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ls(e, r)));
          }
          if (1 === n) throw ((n = Ou), fs(e, 0), is(e, t), rs(e, Ge()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            _s(e, Au, Vu),
            rs(e, Ge()),
            null
          );
        }
        function ss(e, t) {
          var n = Pu;
          Pu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Pu = n) && ((Bu = Ge() + 500), Ua && Ba());
          }
        }
        function cs(e) {
          null !== Ku && 0 === Ku.tag && 0 === (6 & Pu) && ks();
          var t = Pu;
          Pu |= 1;
          var n = Nu.transition,
            r = bt;
          try {
            if (((Nu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Nu.transition = n), 0 === (6 & (Pu = t)) && Ba();
          }
        }
        function ds() {
          (Tu = ju.current), Ca(ju);
        }
        function fs(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== zu))
            for (n = zu.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    ja();
                  break;
                case 3:
                  Xl(), Ca(La), Ca(Pa), no();
                  break;
                case 5:
                  Zl(r);
                  break;
                case 4:
                  Xl();
                  break;
                case 13:
                case 19:
                  Ca(Jl);
                  break;
                case 10:
                  Nl(r.type._context);
                  break;
                case 22:
                case 23:
                  ds();
              }
              n = n.return;
            }
          if (
            ((Lu = e),
            (zu = e = js(e.current, null)),
            (Ru = Tu = t),
            (Iu = 0),
            (Ou = null),
            (Du = Fu = Mu = 0),
            (Au = Uu = null),
            null !== Rl)
          ) {
            for (t = 0; t < Rl.length; t++)
              if (null !== (r = (n = Rl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var o = l.next;
                  (l.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Rl = null;
          }
          return e;
        }
        function ps(e, t) {
          for (;;) {
            var n = zu;
            try {
              if ((El(), (ro.current = Zo), so)) {
                for (var r = oo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                so = !1;
              }
              if (
                ((lo = 0),
                (uo = io = oo = null),
                (co = !1),
                (fo = 0),
                (Eu.current = null),
                null === n || null === n.return)
              ) {
                (Iu = 1), (Ou = t), (zu = null);
                break;
              }
              e: {
                var o = e,
                  i = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Ru),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    d = u,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = vi(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      gi(h, i, u, 0, t),
                      1 & h.mode && mi(o, c, t),
                      (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(s), (t.updateQueue = v);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    mi(o, c, t), ms();
                    break e;
                  }
                  s = Error(l(426));
                } else if (al && 1 & u.mode) {
                  var g = vi(i);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      gi(g, i, u, 0, t),
                      hl(si(s, u));
                    break e;
                  }
                }
                (o = s = si(s, u)),
                  4 !== Iu && (Iu = 2),
                  null === Uu ? (Uu = [o]) : Uu.push(o),
                  (o = i);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Hl(o, pi(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === $u || !$u.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Hl(o, hi(o, u, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              ws(n);
            } catch (w) {
              (t = w), zu === n && null !== n && (zu = n = n.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = Cu.current;
          return (Cu.current = Zo), null === e ? Zo : e;
        }
        function ms() {
          (0 !== Iu && 3 !== Iu && 2 !== Iu) || (Iu = 4),
            null === Lu ||
              (0 === (268435455 & Mu) && 0 === (268435455 & Fu)) ||
              is(Lu, Ru);
        }
        function vs(e, t) {
          var n = Pu;
          Pu |= 2;
          var r = hs();
          for ((Lu === e && Ru === t) || ((Vu = null), fs(e, t)); ; )
            try {
              gs();
              break;
            } catch (a) {
              ps(e, a);
            }
          if ((El(), (Pu = n), (Cu.current = r), null !== zu))
            throw Error(l(261));
          return (Lu = null), (Ru = 0), Iu;
        }
        function gs() {
          for (; null !== zu; ) bs(zu);
        }
        function ys() {
          for (; null !== zu && !Ye(); ) bs(zu);
        }
        function bs(e) {
          var t = Su(e.alternate, e, Tu);
          (e.memoizedProps = e.pendingProps),
            null === t ? ws(e) : (zu = t),
            (Eu.current = null);
        }
        function ws(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qi(n, t, Tu))) return void (zu = n);
            } else {
              if (null !== (n = Ki(n, t)))
                return (n.flags &= 32767), void (zu = n);
              if (null === e) return (Iu = 6), void (zu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (zu = t);
            zu = t = e;
          } while (null !== t);
          0 === Iu && (Iu = 5);
        }
        function _s(e, t, n) {
          var r = bt,
            a = Nu.transition;
          try {
            (Nu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ks();
                } while (null !== Ku);
                if (0 !== (6 & Pu)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, o),
                  e === Lu && ((zu = Lu = null), (Ru = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    Ls(tt, function () {
                      return ks(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Nu.transition), (Nu.transition = null);
                  var i = bt;
                  bt = 1;
                  var u = Pu;
                  (Pu |= 4),
                    (Eu.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (_) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (u = i + a),
                                    f !== o ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (s = i + r),
                                    3 === f.nodeType &&
                                      (i += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = i),
                                    p === o && ++d === r && (s = i),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Zi = t;
                        null !== Zi;

                      )
                        if (
                          ((e = (t = Zi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zi = e);
                        else
                          for (; null !== Zi; ) {
                            t = Zi;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : ni(t.type, v),
                                          g,
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (_) {
                              xs(t, t.return, _);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zi = e);
                              break;
                            }
                            Zi = t.return;
                          }
                      (m = tu), (tu = !1);
                    })(e, n),
                    vu(n, e),
                    hr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    yu(n, e, a),
                    Xe(),
                    (Pu = u),
                    (bt = i),
                    (Nu.transition = o);
                } else e.current = n;
                if (
                  (qu && ((qu = !1), (Ku = e), (Yu = a)),
                  (o = e.pendingLanes),
                  0 === o && ($u = null),
                  (function (e) {
                    if (lt && "function" === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rs(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Wu) throw ((Wu = !1), (e = Qu), (Qu = null), e);
                0 !== (1 & Yu) && 0 !== e.tag && ks(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Gu
                      ? Xu++
                      : ((Xu = 0), (Gu = e))
                    : (Xu = 0),
                  Ba();
              })(e, t, n, r);
          } finally {
            (Nu.transition = a), (bt = r);
          }
          return null;
        }
        function ks() {
          if (null !== Ku) {
            var e = wt(Yu),
              t = Nu.transition,
              n = bt;
            try {
              if (((Nu.transition = null), (bt = 16 > e ? 16 : e), null === Ku))
                var r = !1;
              else {
                if (((e = Ku), (Ku = null), (Yu = 0), 0 !== (6 & Pu)))
                  throw Error(l(331));
                var a = Pu;
                for (Pu |= 4, Zi = e.current; null !== Zi; ) {
                  var o = Zi,
                    i = o.child;
                  if (0 !== (16 & Zi.flags)) {
                    var u = o.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Zi = c; null !== Zi; ) {
                          var d = Zi;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, d, o);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zi = f);
                          else
                            for (; null !== Zi; ) {
                              var p = (d = Zi).sibling,
                                h = d.return;
                              if ((lu(d), d === c)) {
                                Zi = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zi = p);
                                break;
                              }
                              Zi = h;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Zi = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== i)
                    (i.return = o), (Zi = i);
                  else
                    e: for (; null !== Zi; ) {
                      if (0 !== (2048 & (o = Zi).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Zi = y);
                        break e;
                      }
                      Zi = o.return;
                    }
                }
                var b = e.current;
                for (Zi = b; null !== Zi; ) {
                  var w = (i = Zi).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== w)
                    (w.return = i), (Zi = w);
                  else
                    e: for (i = b; null !== Zi; ) {
                      if (0 !== (2048 & (u = Zi).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u);
                          }
                        } catch (k) {
                          xs(u, u.return, k);
                        }
                      if (u === i) {
                        Zi = null;
                        break e;
                      }
                      var _ = u.sibling;
                      if (null !== _) {
                        (_.return = u.return), (Zi = _);
                        break e;
                      }
                      Zi = u.return;
                    }
                }
                if (
                  ((Pu = a),
                  Ba(),
                  lt && "function" === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Nu.transition = t);
            }
          }
          return !1;
        }
        function Ss(e, t, n) {
          (e = Ul(e, (t = pi(0, (t = si(n, t)), 1)), 1)),
            (t = es()),
            null !== e && (gt(e, 1, t), rs(e, t));
        }
        function xs(e, t, n) {
          if (3 === e.tag) Ss(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Ss(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === $u || !$u.has(r)))
                ) {
                  (t = Ul(t, (e = hi(t, (e = si(n, e)), 1)), 1)),
                    (e = es()),
                    null !== t && (gt(t, 1, e), rs(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = es()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Lu === e &&
              (Ru & n) === n &&
              (4 === Iu ||
              (3 === Iu && (130023424 & Ru) === Ru && 500 > Ge() - Hu)
                ? fs(e, 0)
                : (Du |= n)),
            rs(e, t);
        }
        function Es(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = es();
          null !== (e = Il(e, t)) && (gt(e, t, n), rs(e, n));
        }
        function Ns(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Es(e, n);
        }
        function Ps(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Es(e, n);
        }
        function Ls(e, t) {
          return qe(e, t);
        }
        function zs(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Rs(e, t, n, r) {
          return new zs(e, t, n, r);
        }
        function Ts(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function js(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Rs(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Is(e, t, n, r, a, o) {
          var i = 2;
          if (((r = e), "function" === typeof e)) Ts(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case S:
                return Os(n.children, a, o, t);
              case x:
                (i = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Rs(12, n, t, 2 | a)).elementType = C), (e.lanes = o), e
                );
              case L:
                return (
                  ((e = Rs(13, n, t, a)).elementType = L), (e.lanes = o), e
                );
              case z:
                return (
                  ((e = Rs(19, n, t, a)).elementType = z), (e.lanes = o), e
                );
              case j:
                return Ms(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case E:
                      i = 10;
                      break e;
                    case N:
                      i = 9;
                      break e;
                    case P:
                      i = 11;
                      break e;
                    case R:
                      i = 14;
                      break e;
                    case T:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Rs(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Os(e, t, n, r) {
          return ((e = Rs(7, e, r, t)).lanes = n), e;
        }
        function Ms(e, t, n, r) {
          return (
            ((e = Rs(22, e, r, t)).elementType = j),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fs(e, t, n) {
          return ((e = Rs(6, e, null, t)).lanes = n), e;
        }
        function Ds(e, t, n) {
          return (
            ((t = Rs(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Us(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function As(e, t, n, r, a, l, o, i, u) {
          return (
            (e = new Us(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Rs(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ml(l),
            e
          );
        }
        function Hs(e) {
          if (!e) return Na;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ta(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ta(n)) return Oa(e, n, t);
          }
          return t;
        }
        function Bs(e, t, n, r, a, l, o, i, u) {
          return (
            ((e = As(n, r, !0, e, 0, l, 0, i, u)).context = Hs(null)),
            (n = e.current),
            ((l = Dl((r = es()), (a = ts(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ul(n, l, a),
            (e.current.lanes = a),
            gt(e, a, r),
            rs(e, r),
            e
          );
        }
        function Vs(e, t, n, r) {
          var a = t.current,
            l = es(),
            o = ts(a);
          return (
            (n = Hs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Dl(l, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ul(a, t, o)) && (ns(e, a, o, l), Al(e, a, o)),
            o
          );
        }
        function Ws(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function $s(e, t) {
          Qs(e, t), (e = e.alternate) && Qs(e, t);
        }
        Su = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || La.current) bi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Li(t), pl();
                        break;
                      case 5:
                        Gl(t);
                        break;
                      case 1:
                        Ta(t.type) && Ma(t);
                        break;
                      case 4:
                        Yl(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ea(kl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ea(Jl, 1 & Jl.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Fi(e, t, n)
                              : (Ea(Jl, 1 & Jl.current),
                                null !== (e = Wi(e, t, n)) ? e.sibling : null);
                        Ea(Jl, 1 & Jl.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Bi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ea(Jl, Jl.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), xi(e, t, n);
                    }
                    return Wi(e, t, n);
                  })(e, t, n)
                );
              bi = 0 !== (131072 & e.flags);
            }
          else (bi = !1), al && 0 !== (1048576 & t.flags) && Ja(t, $a, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vi(e, t), (e = t.pendingProps);
              var a = Ra(t, Pa.current);
              Ll(t, n), (a = vo(null, t, r, e, a, n));
              var o = go();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ta(r) ? ((o = !0), Ma(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ml(t),
                    (a.updater = ai),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    ui(t, r, e, n),
                    (t = Pi(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    al && o && el(t),
                    wi(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ts(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === R) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ni(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ei(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ni(null, t, r, e, n);
                    break e;
                  case 11:
                    t = _i(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ki(null, t, r, ni(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ei(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ni(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 3:
              e: {
                if ((Li(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Fl(e, t),
                  Bl(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = zi(e, t, r, n, (a = si(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = zi(e, t, r, n, (a = si(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = sa(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = _l(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Wi(e, t, n);
                    break e;
                  }
                  wi(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Gl(t),
                null === e && sl(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Ci(e, t),
                wi(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && sl(t), null;
            case 13:
              return Fi(e, t, n);
            case 4:
              return (
                Yl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = wl(t, null, r, n)) : wi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _i(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 7:
              return wi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (i = a.value),
                  Ea(kl, r._currentValue),
                  (r._currentValue = i),
                  null !== o)
                )
                  if (ir(o.value, i)) {
                    if (o.children === a.children && !La.current) {
                      t = Wi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var u = o.dependencies;
                      if (null !== u) {
                        i = o.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === o.tag) {
                              (s = Dl(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (s.next = s)
                                  : ((s.next = d.next), (d.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (o.lanes |= n),
                              null !== (s = o.alternate) && (s.lanes |= n),
                              Pl(o.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === o.tag)
                        i = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (i = o.return)) throw Error(l(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Pl(i, n, t),
                          (i = o.sibling);
                      } else i = o.child;
                      if (null !== i) i.return = o;
                      else
                        for (i = o; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (o = i.sibling)) {
                            (o.return = i.return), (i = o);
                            break;
                          }
                          i = i.return;
                        }
                      o = i;
                    }
                wi(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Ll(t, n),
                (r = r((a = zl(a)))),
                (t.flags |= 1),
                wi(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = ni((r = t.type), t.pendingProps)),
                ki(e, t, r, (a = ni(r.type, a)), n)
              );
            case 15:
              return Si(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : ni(r, a)),
                Vi(e, t),
                (t.tag = 1),
                Ta(r) ? ((e = !0), Ma(t)) : (e = !1),
                Ll(t, n),
                oi(t, r, a),
                ui(t, r, a, n),
                Pi(null, t, r, !0, e, n)
              );
            case 19:
              return Bi(e, t, n);
            case 22:
              return xi(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var qs =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ks(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          this._internalRoot = e;
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Gs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zs() {}
        function Js(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var o = l;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Ws(o);
                i.call(e);
              };
            }
            Vs(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Ws(o);
                    l.call(e);
                  };
                }
                var o = Bs(t, r, e, 0, null, !1, 0, "", Zs);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  cs(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Ws(u);
                  i.call(e);
                };
              }
              var u = As(e, 0, !1, null, 0, !1, 0, "", Zs);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                cs(function () {
                  Vs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Ws(o);
        }
        (Ys.prototype.render = Ks.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Vs(e, t, null, null);
          }),
          (Ys.prototype.unmount = Ks.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cs(function () {
                  Vs(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ys.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = xt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < jt.length && 0 !== t && t < jt[n].priority;
                n++
              );
              jt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (_t = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    rs(t, Ge()),
                    0 === (6 & Pu) && ((Bu = Ge() + 500), Ba()));
                }
                break;
              case 13:
                cs(function () {
                  var t = Il(e, 1);
                  if (null !== t) {
                    var n = es();
                    ns(t, e, 1, n);
                  }
                }),
                  $s(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Il(e, 134217728);
              if (null !== t) ns(t, e, 134217728, es());
              $s(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ts(e),
                n = Il(e, t);
              if (null !== n) ns(n, e, t, es());
              $s(e, t);
            }
          }),
          (xt = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = _a(r);
                      if (!a) throw Error(l(90));
                      q(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = ss),
          (Le = cs);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, _a, Ee, Ne, ss],
          },
          tc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Qe(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (at = rc.inject(nc)), (lt = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xs(t)) throw Error(l(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xs(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = qs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = As(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Ks(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = Qe(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Gs(t)) throw Error(l(200));
            return Js(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xs(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              i = qs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Bs(t, null, e, 1, null != n ? n : null, a, 0, o, i)),
              (e[ha] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ys(t);
          }),
          (t.render = function (e, t, n) {
            if (!Gs(t)) throw Error(l(200));
            return Js(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Gs(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (cs(function () {
                Js(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ss),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Gs(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return Js(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        "use strict";
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        "use strict";
        var r = n(43),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            l = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: l,
            _owner: i.current,
          };
        }
        (t.Fragment = l), (t.jsx = s), (t.jsxs = s);
      },
      202: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, g.prototype), (w.isPureReactComponent = !0);
        var _ = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            l = {},
            o = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              k.call(t, a) && !x.hasOwnProperty(a) && (l[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) l.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            l.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === l[a] && (l[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: S.current,
          };
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function L(e, t, a, l, o) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === l ? "." + P(u, 0) : l),
              _(o)
                ? ((a = ""),
                  null != e && (a = e.replace(N, "$&/") + "/"),
                  L(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (E(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(N, "$&/") + "/") +
                        e,
                    )),
                  t.push(o)),
              1
            );
          if (((u = 0), (l = "" === l ? "." : l + ":"), _(e)))
            for (var s = 0; s < e.length; s++) {
              var c = l + P((i = e[s]), s);
              u += L(i, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += L((i = i.value), t, a, (c = l + P(i, s++)), o);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return u;
        }
        function z(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            L(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function R(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var T = { current: null },
          j = { transition: null },
          I = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: j,
            ReactCurrentOwner: S,
          };
        function O() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: z,
          forEach: function (e, t, n) {
            z(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              z(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              z(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
          (t.act = O),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var a = m({}, e.props),
              l = e.key,
              o = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (i = S.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                k.call(t, s) &&
                  !x.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: o,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: R,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = j.transition;
            j.transition = {};
            try {
              e();
            } finally {
              j.transition = t;
            }
          }),
          (t.unstable_act = O),
          (t.useCallback = function (e, t) {
            return T.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return T.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return T.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return T.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return T.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return T.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return T.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return T.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return T.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return T.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return T.current.useRef(e);
          }),
          (t.useState = function (e) {
            return T.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return T.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return T.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        "use strict";
        e.exports = n(202);
      },
      579: (e, t, n) => {
        "use strict";
        e.exports = n(153);
      },
      234: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > l(u, n))
                s < a && 0 > l(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function _(e) {
          if (((v = !1), w(e), !m))
            if (null !== r(s)) (m = !0), j(k);
            else {
              var t = r(c);
              null !== t && I(_, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), v && ((v = !1), y(E), (E = -1)), (h = !0);
          var l = p;
          try {
            for (
              w(n), f = r(s);
              null !== f && (!(f.expirationTime > n) || (e && !L()));

            ) {
              var o = f.callback;
              if ("function" === typeof o) {
                (f.callback = null), (p = f.priorityLevel);
                var i = o(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (f.callback = i)
                    : f === r(s) && a(s),
                  w(n);
              } else a(s);
              f = r(s);
            }
            if (null !== f) var u = !0;
            else {
              var d = r(c);
              null !== d && I(_, d.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (f = null), (p = l), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          x = !1,
          C = null,
          E = -1,
          N = 5,
          P = -1;
        function L() {
          return !(t.unstable_now() - P < N);
        }
        function z() {
          if (null !== C) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((x = !1), (C = null));
            }
          } else x = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(z);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var R = new MessageChannel(),
            T = R.port2;
          (R.port1.onmessage = z),
            (S = function () {
              T.postMessage(null);
            });
        } else
          S = function () {
            g(z, 0);
          };
        function j(e) {
          (C = e), x || ((x = !0), S());
        }
        function I(e, n) {
          E = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), j(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (v ? (y(E), (E = -1)) : (v = !0), I(_, l - o)))
                : ((e.sortIndex = i), n(s, e), m || h || ((m = !0), j(k))),
              e
            );
          }),
          (t.unstable_shouldYield = L),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        "use strict";
        e.exports = n(234);
      },
      139: (e, t) => {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function a() {
            for (var e = "", t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              n && (e = o(e, l(n)));
            }
            return e;
          }
          function l(e) {
            if ("string" === typeof e || "number" === typeof e) return e;
            if ("object" !== typeof e) return "";
            if (Array.isArray(e)) return a.apply(null, e);
            if (
              e.toString !== Object.prototype.toString &&
              !e.toString.toString().includes("[native code]")
            )
              return e.toString();
            var t = "";
            for (var n in e) r.call(e, n) && e[n] && (t = o(t, n));
            return t;
          }
          function o(e, t) {
            return t ? (e ? e + " " + t : e + t) : e;
          }
          e.exports
            ? ((a.default = a), (e.exports = a))
            : void 0 ===
                (n = function () {
                  return a;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = n(391),
        t = n(139),
        r = n.n(t);
      const a = "Home_homeWrapper__rXqFv",
        l = "Home_backgroundImage__XCpHf",
        o = "Home_home__dPAOF",
        i = "Home_breakpoint1__jimL7",
        u = "Home_breakpoint2__4Vi0A",
        s = "Home_breakpoint3__1Fnqf",
        c = "Home_intro__hHZJB",
        d = "Home_defaultPaddingTop__8HWPn",
        f = "Home_smallPaddingTop__XMwXW",
        p = "Home_about__ont4m",
        h = "Home_links__IN-iT",
        m = "Home_link__Cbp6n",
        v = "Home_caseStudies__-3Q7F",
        g = "Home_otherWorkPage__mHPk3",
        y = "Home_footer__95J4G",
        b = "Home_footer1__-mob8",
        w = "Home_footer2__QpZIH";
      var _ = n(43);
      const k = () => {
          const [e, t] = (0, _.useState)(window.innerWidth),
            [n, r] = (0, _.useState)(window.innerHeight),
            a = () => {
              t(window.innerWidth), r(window.innerHeight);
            };
          return (
            (0, _.useEffect)(
              () => (
                window.addEventListener("resize", a),
                () => window.removeEventListener("resize", a)
              ),
              [],
            ),
            { width: e, height: n }
          );
        },
        S = {
          prompt: "IntroLayout1_prompt__R1RQr",
          bluePrompt: "IntroLayout1_bluePrompt__InRWA",
          row: "IntroLayout1_row__OMcy8",
          lastRow: "IntroLayout1_lastRow__oqzT7",
          name: "IntroLayout1_name__yR6k4",
          role: "IntroLayout1_role__ektCn",
          do: "IntroLayout1_do__UiAUl",
          dropdown: "IntroLayout1_dropdown__S58Q9",
          dropdownSelected: "IntroLayout1_dropdownSelected__tEhh3",
          orange: "IntroLayout1_orange__na7rO",
          purple: "IntroLayout1_purple__H-IRA",
          dropdownOptions: "IntroLayout1_dropdownOptions__cbJzM",
          dropdownOption: "IntroLayout1_dropdownOption__fj-09",
        },
        x = "NameBox_name__hkqcW";
      var C = n(579);
      const E = (e) => {
          const { name: t, className: n } = null !== e && void 0 !== e ? e : {};
          return (0, C.jsx)("div", { className: r()(x, n), children: t });
        },
        N = {
          dropdown: "Dropdown_dropdown__FhLog",
          selected: "Dropdown_selected__AYzF1",
          isDropdownOpen: "Dropdown_isDropdownOpen__xiOKi",
          arrow: "Dropdown_arrow__XFmcJ",
          inverted: "Dropdown_inverted__qLyTn",
          orange: "Dropdown_orange__jzxbb",
          options: "Dropdown_options__+0VMf",
          option: "Dropdown_option__wx3aH",
        },
        P = (e) => {
          const { color: t, className: n } = e;
          return (0, C.jsx)("svg", {
            className: n,
            width: "17",
            height: "9",
            viewBox: "0 0 17 9",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, C.jsx)("path", {
              d: "M8.5 8.5L0 0.5H17L8.5 8.5Z",
              fill: t,
            }),
          });
        },
        L = (e) => {
          const {
              wrapperClassName: t,
              selectedClassName: n,
              optionsClassName: a,
              optionClassName: l,
              arrowColor: o,
              options: i,
              size: u = "default",
              dropdownZIndex: s = 0,
            } = null !== e && void 0 !== e ? e : {},
            [c, d] = (0, _.useState)(i[0]),
            [f, p] = (0, _.useState)(!1),
            h = ((e, t) => {
              const n = [];
              for (const r of e) r.value !== t.value && n.push(r);
              return n;
            })(i, c),
            m = (0, _.useRef)(null),
            v = (0, _.useRef)(null),
            g = (e) => {
              var t, n;
              (null !== (t = m.current) &&
                void 0 !== t &&
                t.contains(e.target)) ||
                (null !== (n = v.current) &&
                  void 0 !== n &&
                  n.contains(e.target)) ||
                p(!1);
            };
          return (
            (0, _.useEffect)(
              () => (
                window.addEventListener("click", g),
                () => window.removeEventListener("click", g)
              ),
              [],
            ),
            (0, C.jsx)("div", {
              className: r()(N.dropdown, t),
              children: (0, C.jsxs)("div", {
                className: r()(N.selected, n, { [N.isDropdownOpen]: f }),
                onClick: () => p(!f),
                onMouseEnter: () => p(!0),
                onMouseLeave: () => p(!1),
                ref: m,
                children: [
                  (0, C.jsx)("div", { className: N.label, children: c.label }),
                  (0, C.jsx)(P, {
                    color: o,
                    className: r()(N.arrow, { [N.inverted]: f }),
                  }),
                  f &&
                    (0, C.jsx)("div", {
                      className: r()(N.options, a),
                      ref: v,
                      style: { zIndex: s },
                      children: h.map((e) => {
                        let { label: t, value: n } = e;
                        return (0, C.jsx)("div", {
                          className: r()(N.option, l),
                          onClick: () => {
                            d({ label: t, value: n }), p(!1);
                          },
                          children: t,
                        });
                      }),
                    }),
                ],
              }),
            })
          );
        },
        z = [
          { label: "Product Designer", value: "product_designer" },
          { label: "Team Player", value: "team_player" },
          { label: "Problem-Solver", value: "problem_solver" },
        ],
        R = [
          { label: "Advocates for user-centered design", value: "advocate" },
          { label: "Balances user and business goals", value: "balance" },
          { label: "Creates delightful user experiences", value: "create" },
        ],
        T = () => {
          const { width: e } = k();
          return (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsx)("div", {
                className: r()(S.prompt, S.bluePrompt),
                children: "Hello! My name is...",
              }),
              (0, C.jsxs)("div", {
                className: S.row,
                children: [
                  (0, C.jsx)(E, { name: "Sophia", className: r()(S.name) }),
                  (0, C.jsx)(E, { name: "Liu", className: S.name }),
                ],
              }),
              (0, C.jsxs)("div", {
                className: r()(S.row, S.lastRow),
                children: [
                  (0, C.jsxs)("div", {
                    className: r()(S.role, S.leftColumn),
                    children: [
                      (0, C.jsx)("div", {
                        className: r()(S.prompt),
                        children: "I am a...",
                      }),
                      (0, C.jsx)(L, {
                        options: z,
                        wrapperClassName: r()(S.dropdown),
                        selectedClassName: r()(S.dropdownSelected, S.orange),
                        optionsClassName: r()(S.dropdownOptions, S.orange),
                        optionClassName: r()(S.dropdownOption, S.orange),
                        arrowColor: "rgba(255, 92, 4, 1)",
                      }),
                    ],
                  }),
                  (0, C.jsxs)("div", {
                    className: S.do,
                    children: [
                      (0, C.jsx)("div", {
                        className: r()(S.prompt),
                        children: "who...",
                      }),
                      (0, C.jsx)(L, {
                        options: R,
                        wrapperClassName: r()(S.dropdown),
                        selectedClassName: r()(S.dropdownSelected, S.purple),
                        optionsClassName: r()(S.dropdownOptions, S.purple),
                        optionClassName: r()(S.dropdownOption, S.purple),
                        arrowColor: "rgba(164, 0, 234, 1)",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        j = "IntroLayout2_prompt__0+mZ1",
        I = "IntroLayout2_bluePrompt__xB4-K",
        O = "IntroLayout2_row__Kds8R",
        M = "IntroLayout2_lastRow__gjBAK",
        F = "IntroLayout2_name__nrphV",
        D = "IntroLayout2_role__vtaCn",
        U = "IntroLayout2_do__Xcz7V",
        A = "IntroLayout2_dropdown__nTzDh",
        H = "IntroLayout2_dropdownSelected__baHzq",
        B = "IntroLayout2_orange__spUJ+",
        V = "IntroLayout2_purple__NV9o3",
        W = "IntroLayout2_dropdownOptions__xxBAH",
        Q = "IntroLayout2_dropdownOption__4czpy",
        $ = () => {
          const { width: e } = k();
          return (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsx)("div", {
                className: r()(j, I),
                children: "Hello! My name is...",
              }),
              (0, C.jsxs)("div", {
                className: O,
                children: [
                  (0, C.jsx)(E, { name: "Sophia", className: r()(F) }),
                  (0, C.jsx)(E, { name: "Liu", className: r()(F) }),
                ],
              }),
              (0, C.jsx)("div", {
                className: r()(O, { [M]: e <= 624 }),
                children: (0, C.jsxs)("div", {
                  className: r()(D),
                  children: [
                    (0, C.jsx)("div", {
                      className: r()(j),
                      children: "I am a...",
                    }),
                    (0, C.jsx)(L, {
                      options: z,
                      wrapperClassName: r()(A),
                      selectedClassName: r()(H, B),
                      optionsClassName: r()(W, B),
                      optionClassName: r()(Q, B),
                      arrowColor: "rgba(255, 92, 4, 1)",
                    }),
                  ],
                }),
              }),
              e > 624 &&
                (0, C.jsx)("div", {
                  className: r()(O, M),
                  children: (0, C.jsxs)("div", {
                    className: U,
                    children: [
                      (0, C.jsx)("div", {
                        className: r()(j),
                        children: "who...",
                      }),
                      (0, C.jsx)(L, {
                        options: R,
                        wrapperClassName: r()(A),
                        selectedClassName: r()(H, V),
                        optionsClassName: r()(W, V),
                        optionClassName: r()(Q, V),
                        arrowColor: "rgba(164, 0, 234, 1)",
                      }),
                    ],
                  }),
                }),
            ],
          });
        };
      var q = Object.freeze({
          Linear: Object.freeze({
            None: function (e) {
              return e;
            },
            In: function (e) {
              return e;
            },
            Out: function (e) {
              return e;
            },
            InOut: function (e) {
              return e;
            },
          }),
          Quadratic: Object.freeze({
            In: function (e) {
              return e * e;
            },
            Out: function (e) {
              return e * (2 - e);
            },
            InOut: function (e) {
              return (e *= 2) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
            },
          }),
          Cubic: Object.freeze({
            In: function (e) {
              return e * e * e;
            },
            Out: function (e) {
              return --e * e * e + 1;
            },
            InOut: function (e) {
              return (e *= 2) < 1
                ? 0.5 * e * e * e
                : 0.5 * ((e -= 2) * e * e + 2);
            },
          }),
          Quartic: Object.freeze({
            In: function (e) {
              return e * e * e * e;
            },
            Out: function (e) {
              return 1 - --e * e * e * e;
            },
            InOut: function (e) {
              return (e *= 2) < 1
                ? 0.5 * e * e * e * e
                : -0.5 * ((e -= 2) * e * e * e - 2);
            },
          }),
          Quintic: Object.freeze({
            In: function (e) {
              return e * e * e * e * e;
            },
            Out: function (e) {
              return --e * e * e * e * e + 1;
            },
            InOut: function (e) {
              return (e *= 2) < 1
                ? 0.5 * e * e * e * e * e
                : 0.5 * ((e -= 2) * e * e * e * e + 2);
            },
          }),
          Sinusoidal: Object.freeze({
            In: function (e) {
              return 1 - Math.sin(((1 - e) * Math.PI) / 2);
            },
            Out: function (e) {
              return Math.sin((e * Math.PI) / 2);
            },
            InOut: function (e) {
              return 0.5 * (1 - Math.sin(Math.PI * (0.5 - e)));
            },
          }),
          Exponential: Object.freeze({
            In: function (e) {
              return 0 === e ? 0 : Math.pow(1024, e - 1);
            },
            Out: function (e) {
              return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
            },
            InOut: function (e) {
              return 0 === e
                ? 0
                : 1 === e
                  ? 1
                  : (e *= 2) < 1
                    ? 0.5 * Math.pow(1024, e - 1)
                    : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
            },
          }),
          Circular: Object.freeze({
            In: function (e) {
              return 1 - Math.sqrt(1 - e * e);
            },
            Out: function (e) {
              return Math.sqrt(1 - --e * e);
            },
            InOut: function (e) {
              return (e *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
            },
          }),
          Elastic: Object.freeze({
            In: function (e) {
              return 0 === e
                ? 0
                : 1 === e
                  ? 1
                  : -Math.pow(2, 10 * (e - 1)) *
                    Math.sin(5 * (e - 1.1) * Math.PI);
            },
            Out: function (e) {
              return 0 === e
                ? 0
                : 1 === e
                  ? 1
                  : Math.pow(2, -10 * e) * Math.sin(5 * (e - 0.1) * Math.PI) +
                    1;
            },
            InOut: function (e) {
              return 0 === e
                ? 0
                : 1 === e
                  ? 1
                  : (e *= 2) < 1
                    ? -0.5 *
                      Math.pow(2, 10 * (e - 1)) *
                      Math.sin(5 * (e - 1.1) * Math.PI)
                    : 0.5 *
                        Math.pow(2, -10 * (e - 1)) *
                        Math.sin(5 * (e - 1.1) * Math.PI) +
                      1;
            },
          }),
          Back: Object.freeze({
            In: function (e) {
              var t = 1.70158;
              return 1 === e ? 1 : e * e * ((t + 1) * e - t);
            },
            Out: function (e) {
              var t = 1.70158;
              return 0 === e ? 0 : --e * e * ((t + 1) * e + t) + 1;
            },
            InOut: function (e) {
              var t = 2.5949095;
              return (e *= 2) < 1
                ? e * e * ((t + 1) * e - t) * 0.5
                : 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
            },
          }),
          Bounce: Object.freeze({
            In: function (e) {
              return 1 - q.Bounce.Out(1 - e);
            },
            Out: function (e) {
              return e < 1 / 2.75
                ? 7.5625 * e * e
                : e < 2 / 2.75
                  ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                  : e < 2.5 / 2.75
                    ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                    : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
            },
            InOut: function (e) {
              return e < 0.5
                ? 0.5 * q.Bounce.In(2 * e)
                : 0.5 * q.Bounce.Out(2 * e - 1) + 0.5;
            },
          }),
          generatePow: function (e) {
            return (
              void 0 === e && (e = 4),
              (e =
                (e = e < Number.EPSILON ? Number.EPSILON : e) > 1e4 ? 1e4 : e),
              {
                In: function (t) {
                  return Math.pow(t, e);
                },
                Out: function (t) {
                  return 1 - Math.pow(1 - t, e);
                },
                InOut: function (t) {
                  return t < 0.5
                    ? Math.pow(2 * t, e) / 2
                    : (1 - Math.pow(2 - 2 * t, e)) / 2 + 0.5;
                },
              }
            );
          },
        }),
        K = function () {
          return performance.now();
        },
        Y = (function () {
          function e() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            (this._tweens = {}),
              (this._tweensAddedDuringUpdate = {}),
              this.add.apply(this, e);
          }
          return (
            (e.prototype.getAll = function () {
              var e = this;
              return Object.keys(this._tweens).map(function (t) {
                return e._tweens[t];
              });
            }),
            (e.prototype.removeAll = function () {
              this._tweens = {};
            }),
            (e.prototype.add = function () {
              for (var e, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              for (var r = 0, a = t; r < a.length; r++) {
                var l = a[r];
                null === (e = l._group) || void 0 === e || e.remove(l),
                  (l._group = this),
                  (this._tweens[l.getId()] = l),
                  (this._tweensAddedDuringUpdate[l.getId()] = l);
              }
            }),
            (e.prototype.remove = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              for (var n = 0, r = e; n < r.length; n++) {
                var a = r[n];
                (a._group = void 0),
                  delete this._tweens[a.getId()],
                  delete this._tweensAddedDuringUpdate[a.getId()];
              }
            }),
            (e.prototype.allStopped = function () {
              return this.getAll().every(function (e) {
                return !e.isPlaying();
              });
            }),
            (e.prototype.update = function (e, t) {
              void 0 === e && (e = K()), void 0 === t && (t = !0);
              var n = Object.keys(this._tweens);
              if (0 !== n.length)
                for (; n.length > 0; ) {
                  this._tweensAddedDuringUpdate = {};
                  for (var r = 0; r < n.length; r++) {
                    var a = this._tweens[n[r]],
                      l = !t;
                    a && !1 === a.update(e, l) && !t && this.remove(a);
                  }
                  n = Object.keys(this._tweensAddedDuringUpdate);
                }
            }),
            e
          );
        })(),
        X = {
          Linear: function (e, t) {
            var n = e.length - 1,
              r = n * t,
              a = Math.floor(r),
              l = X.Utils.Linear;
            return t < 0
              ? l(e[0], e[1], r)
              : t > 1
                ? l(e[n], e[n - 1], n - r)
                : l(e[a], e[a + 1 > n ? n : a + 1], r - a);
          },
          Bezier: function (e, t) {
            for (
              var n = 0,
                r = e.length - 1,
                a = Math.pow,
                l = X.Utils.Bernstein,
                o = 0;
              o <= r;
              o++
            )
              n += a(1 - t, r - o) * a(t, o) * e[o] * l(r, o);
            return n;
          },
          CatmullRom: function (e, t) {
            var n = e.length - 1,
              r = n * t,
              a = Math.floor(r),
              l = X.Utils.CatmullRom;
            return e[0] === e[n]
              ? (t < 0 && (a = Math.floor((r = n * (1 + t)))),
                l(
                  e[(a - 1 + n) % n],
                  e[a],
                  e[(a + 1) % n],
                  e[(a + 2) % n],
                  r - a,
                ))
              : t < 0
                ? e[0] - (l(e[0], e[0], e[1], e[1], -r) - e[0])
                : t > 1
                  ? e[n] - (l(e[n], e[n], e[n - 1], e[n - 1], r - n) - e[n])
                  : l(
                      e[a ? a - 1 : 0],
                      e[a],
                      e[n < a + 1 ? n : a + 1],
                      e[n < a + 2 ? n : a + 2],
                      r - a,
                    );
          },
          Utils: {
            Linear: function (e, t, n) {
              return (t - e) * n + e;
            },
            Bernstein: function (e, t) {
              var n = X.Utils.Factorial;
              return n(e) / n(t) / n(e - t);
            },
            Factorial: (function () {
              var e = [1];
              return function (t) {
                var n = 1;
                if (e[t]) return e[t];
                for (var r = t; r > 1; r--) n *= r;
                return (e[t] = n), n;
              };
            })(),
            CatmullRom: function (e, t, n, r, a) {
              var l = 0.5 * (n - e),
                o = 0.5 * (r - t),
                i = a * a;
              return (
                (2 * t - 2 * n + l + o) * (a * i) +
                (-3 * t + 3 * n - 2 * l - o) * i +
                l * a +
                t
              );
            },
          },
        },
        G = (function () {
          function e() {}
          return (
            (e.nextId = function () {
              return e._nextId++;
            }),
            (e._nextId = 0),
            e
          );
        })(),
        Z = new Y(),
        J = (function () {
          function e(e, t) {
            (this._isPaused = !1),
              (this._pauseStart = 0),
              (this._valuesStart = {}),
              (this._valuesEnd = {}),
              (this._valuesStartRepeat = {}),
              (this._duration = 1e3),
              (this._isDynamic = !1),
              (this._initialRepeat = 0),
              (this._repeat = 0),
              (this._yoyo = !1),
              (this._isPlaying = !1),
              (this._reversed = !1),
              (this._delayTime = 0),
              (this._startTime = 0),
              (this._easingFunction = q.Linear.None),
              (this._interpolationFunction = X.Linear),
              (this._chainedTweens = []),
              (this._onStartCallbackFired = !1),
              (this._onEveryStartCallbackFired = !1),
              (this._id = G.nextId()),
              (this._isChainStopped = !1),
              (this._propertiesAreSetUp = !1),
              (this._goToEnd = !1),
              (this._object = e),
              "object" === typeof t
                ? ((this._group = t), t.add(this))
                : !0 === t && ((this._group = Z), Z.add(this));
          }
          return (
            (e.prototype.getId = function () {
              return this._id;
            }),
            (e.prototype.isPlaying = function () {
              return this._isPlaying;
            }),
            (e.prototype.isPaused = function () {
              return this._isPaused;
            }),
            (e.prototype.getDuration = function () {
              return this._duration;
            }),
            (e.prototype.to = function (e, t) {
              if ((void 0 === t && (t = 1e3), this._isPlaying))
                throw new Error(
                  "Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.",
                );
              return (
                (this._valuesEnd = e),
                (this._propertiesAreSetUp = !1),
                (this._duration = t < 0 ? 0 : t),
                this
              );
            }),
            (e.prototype.duration = function (e) {
              return (
                void 0 === e && (e = 1e3),
                (this._duration = e < 0 ? 0 : e),
                this
              );
            }),
            (e.prototype.dynamic = function (e) {
              return void 0 === e && (e = !1), (this._isDynamic = e), this;
            }),
            (e.prototype.start = function (e, t) {
              if (
                (void 0 === e && (e = K()),
                void 0 === t && (t = !1),
                this._isPlaying)
              )
                return this;
              if (((this._repeat = this._initialRepeat), this._reversed))
                for (var n in ((this._reversed = !1), this._valuesStartRepeat))
                  this._swapEndStartRepeatValues(n),
                    (this._valuesStart[n] = this._valuesStartRepeat[n]);
              if (
                ((this._isPlaying = !0),
                (this._isPaused = !1),
                (this._onStartCallbackFired = !1),
                (this._onEveryStartCallbackFired = !1),
                (this._isChainStopped = !1),
                (this._startTime = e),
                (this._startTime += this._delayTime),
                !this._propertiesAreSetUp || t)
              ) {
                if (((this._propertiesAreSetUp = !0), !this._isDynamic)) {
                  var r = {};
                  for (var a in this._valuesEnd) r[a] = this._valuesEnd[a];
                  this._valuesEnd = r;
                }
                this._setupProperties(
                  this._object,
                  this._valuesStart,
                  this._valuesEnd,
                  this._valuesStartRepeat,
                  t,
                );
              }
              return this;
            }),
            (e.prototype.startFromCurrentValues = function (e) {
              return this.start(e, !0);
            }),
            (e.prototype._setupProperties = function (e, t, n, r, a) {
              for (var l in n) {
                var o = e[l],
                  i = Array.isArray(o),
                  u = i ? "array" : typeof o,
                  s = !i && Array.isArray(n[l]);
                if ("undefined" !== u && "function" !== u) {
                  if (s) {
                    if (0 === (v = n[l]).length) continue;
                    for (var c = [o], d = 0, f = v.length; d < f; d += 1) {
                      var p = this._handleRelativeValue(o, v[d]);
                      if (isNaN(p)) {
                        (s = !1),
                          console.warn(
                            "Found invalid interpolation list. Skipping.",
                          );
                        break;
                      }
                      c.push(p);
                    }
                    s && (n[l] = c);
                  }
                  if (("object" !== u && !i) || !o || s)
                    ("undefined" === typeof t[l] || a) && (t[l] = o),
                      i || (t[l] *= 1),
                      (r[l] = s ? n[l].slice().reverse() : t[l] || 0);
                  else {
                    t[l] = i ? [] : {};
                    var h = o;
                    for (var m in h) t[l][m] = h[m];
                    r[l] = i ? [] : {};
                    var v = n[l];
                    if (!this._isDynamic) {
                      var g = {};
                      for (var m in v) g[m] = v[m];
                      n[l] = v = g;
                    }
                    this._setupProperties(h, t[l], v, r[l], a);
                  }
                }
              }
            }),
            (e.prototype.stop = function () {
              return (
                this._isChainStopped ||
                  ((this._isChainStopped = !0), this.stopChainedTweens()),
                this._isPlaying
                  ? ((this._isPlaying = !1),
                    (this._isPaused = !1),
                    this._onStopCallback && this._onStopCallback(this._object),
                    this)
                  : this
              );
            }),
            (e.prototype.end = function () {
              return (
                (this._goToEnd = !0),
                this.update(this._startTime + this._duration),
                this
              );
            }),
            (e.prototype.pause = function (e) {
              return (
                void 0 === e && (e = K()),
                this._isPaused ||
                  !this._isPlaying ||
                  ((this._isPaused = !0), (this._pauseStart = e)),
                this
              );
            }),
            (e.prototype.resume = function (e) {
              return (
                void 0 === e && (e = K()),
                this._isPaused && this._isPlaying
                  ? ((this._isPaused = !1),
                    (this._startTime += e - this._pauseStart),
                    (this._pauseStart = 0),
                    this)
                  : this
              );
            }),
            (e.prototype.stopChainedTweens = function () {
              for (var e = 0, t = this._chainedTweens.length; e < t; e++)
                this._chainedTweens[e].stop();
              return this;
            }),
            (e.prototype.group = function (e) {
              return e
                ? (e.add(this), this)
                : (console.warn(
                    "tween.group() without args has been removed, use group.add(tween) instead.",
                  ),
                  this);
            }),
            (e.prototype.remove = function () {
              var e;
              return (
                null === (e = this._group) || void 0 === e || e.remove(this),
                this
              );
            }),
            (e.prototype.delay = function (e) {
              return void 0 === e && (e = 0), (this._delayTime = e), this;
            }),
            (e.prototype.repeat = function (e) {
              return (
                void 0 === e && (e = 0),
                (this._initialRepeat = e),
                (this._repeat = e),
                this
              );
            }),
            (e.prototype.repeatDelay = function (e) {
              return (this._repeatDelayTime = e), this;
            }),
            (e.prototype.yoyo = function (e) {
              return void 0 === e && (e = !1), (this._yoyo = e), this;
            }),
            (e.prototype.easing = function (e) {
              return (
                void 0 === e && (e = q.Linear.None),
                (this._easingFunction = e),
                this
              );
            }),
            (e.prototype.interpolation = function (e) {
              return (
                void 0 === e && (e = X.Linear),
                (this._interpolationFunction = e),
                this
              );
            }),
            (e.prototype.chain = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return (this._chainedTweens = e), this;
            }),
            (e.prototype.onStart = function (e) {
              return (this._onStartCallback = e), this;
            }),
            (e.prototype.onEveryStart = function (e) {
              return (this._onEveryStartCallback = e), this;
            }),
            (e.prototype.onUpdate = function (e) {
              return (this._onUpdateCallback = e), this;
            }),
            (e.prototype.onRepeat = function (e) {
              return (this._onRepeatCallback = e), this;
            }),
            (e.prototype.onComplete = function (e) {
              return (this._onCompleteCallback = e), this;
            }),
            (e.prototype.onStop = function (e) {
              return (this._onStopCallback = e), this;
            }),
            (e.prototype.update = function (t, n) {
              var r,
                a,
                l = this;
              if (
                (void 0 === t && (t = K()),
                void 0 === n && (n = e.autoStartOnUpdate),
                this._isPaused)
              )
                return !0;
              if (!this._goToEnd && !this._isPlaying) {
                if (!n) return !1;
                this.start(t, !0);
              }
              if (((this._goToEnd = !1), t < this._startTime)) return !0;
              !1 === this._onStartCallbackFired &&
                (this._onStartCallback && this._onStartCallback(this._object),
                (this._onStartCallbackFired = !0)),
                !1 === this._onEveryStartCallbackFired &&
                  (this._onEveryStartCallback &&
                    this._onEveryStartCallback(this._object),
                  (this._onEveryStartCallbackFired = !0));
              var o = t - this._startTime,
                i =
                  this._duration +
                  (null !== (r = this._repeatDelayTime) && void 0 !== r
                    ? r
                    : this._delayTime),
                u = this._duration + this._repeat * i,
                s = (function () {
                  if (0 === l._duration) return 1;
                  if (o > u) return 1;
                  var e = Math.trunc(o / i),
                    t = o - e * i,
                    n = Math.min(t / l._duration, 1);
                  return 0 === n && o === l._duration ? 1 : n;
                })(),
                c = this._easingFunction(s);
              if (
                (this._updateProperties(
                  this._object,
                  this._valuesStart,
                  this._valuesEnd,
                  c,
                ),
                this._onUpdateCallback &&
                  this._onUpdateCallback(this._object, s),
                0 === this._duration || o >= this._duration)
              ) {
                if (this._repeat > 0) {
                  var d = Math.min(
                    Math.trunc((o - this._duration) / i) + 1,
                    this._repeat,
                  );
                  for (a in (isFinite(this._repeat) && (this._repeat -= d),
                  this._valuesStartRepeat))
                    this._yoyo ||
                      "string" !== typeof this._valuesEnd[a] ||
                      (this._valuesStartRepeat[a] =
                        this._valuesStartRepeat[a] +
                        parseFloat(this._valuesEnd[a])),
                      this._yoyo && this._swapEndStartRepeatValues(a),
                      (this._valuesStart[a] = this._valuesStartRepeat[a]);
                  return (
                    this._yoyo && (this._reversed = !this._reversed),
                    (this._startTime += i * d),
                    this._onRepeatCallback &&
                      this._onRepeatCallback(this._object),
                    (this._onEveryStartCallbackFired = !1),
                    !0
                  );
                }
                this._onCompleteCallback &&
                  this._onCompleteCallback(this._object);
                for (var f = 0, p = this._chainedTweens.length; f < p; f++)
                  this._chainedTweens[f].start(
                    this._startTime + this._duration,
                    !1,
                  );
                return (this._isPlaying = !1), !1;
              }
              return !0;
            }),
            (e.prototype._updateProperties = function (e, t, n, r) {
              for (var a in n)
                if (void 0 !== t[a]) {
                  var l = t[a] || 0,
                    o = n[a],
                    i = Array.isArray(e[a]),
                    u = Array.isArray(o);
                  !i && u
                    ? (e[a] = this._interpolationFunction(o, r))
                    : "object" === typeof o && o
                      ? this._updateProperties(e[a], l, o, r)
                      : "number" ===
                          typeof (o = this._handleRelativeValue(l, o)) &&
                        (e[a] = l + (o - l) * r);
                }
            }),
            (e.prototype._handleRelativeValue = function (e, t) {
              return "string" !== typeof t
                ? t
                : "+" === t.charAt(0) || "-" === t.charAt(0)
                  ? e + parseFloat(t)
                  : parseFloat(t);
            }),
            (e.prototype._swapEndStartRepeatValues = function (e) {
              var t = this._valuesStartRepeat[e],
                n = this._valuesEnd[e];
              (this._valuesStartRepeat[e] =
                "string" === typeof n
                  ? this._valuesStartRepeat[e] + parseFloat(n)
                  : this._valuesEnd[e]),
                (this._valuesEnd[e] = t);
            }),
            (e.autoStartOnUpdate = !1),
            e
          );
        })(),
        ee = (G.nextId, Z);
      ee.getAll.bind(ee),
        ee.removeAll.bind(ee),
        ee.add.bind(ee),
        ee.remove.bind(ee),
        ee.update.bind(ee);
      const te = "CaseStudiesLayout1_sectionTitle__p0-Z-",
        ne = "CaseStudiesLayout1_breakpoint1__NIp4z",
        re = "CaseStudiesLayout1_breakpoint2__SQX0S",
        ae = "CaseStudiesLayout1_breakpoint3__5XGOV",
        le = "CaseStudiesLayout1_caseStudy__YRdIV",
        oe = "CaseStudiesLayout1_info__5yoiu",
        ie = "CaseStudiesLayout1_caseTitle__hY7z9",
        ue = "CaseStudiesLayout1_caseDescription__lvBRd",
        se = "CaseStudiesLayout1_caseTimeline__-Rr7b",
        ce = "CaseStudiesLayout1_imageWrapper__eJ6QD",
        de = "CaseStudiesLayout1_image__iNlLs",
        fe = () => {
          const { width: e } = k(),
            t = (0, _.useRef)(null),
            n = (0, _.useRef)(0.1),
            a = (0, _.useRef)(100),
            l = (0, _.useRef)({ r: 0, g: 0, b: 0, a: 1 }),
            o = (0, _.useRef)(null),
            i = (0, _.useRef)(null),
            u = (0, _.useRef)(0.1),
            s = (0, _.useRef)(100),
            c = (0, _.useRef)({ r: 0, g: 0, b: 0, a: 1 }),
            d = (0, _.useRef)(null),
            f = (0, _.useRef)(null),
            p = (0, _.useRef)(0.1),
            h = (0, _.useRef)(100),
            m = (0, _.useRef)({ r: 0, g: 0, b: 0, a: 1 }),
            v = (0, _.useRef)(null),
            g = () => (e > 900 ? ne : e > 724 ? re : ae),
            y = (t, n) =>
              e > 724
                ? (0, C.jsxs)(C.Fragment, { children: [t, n] })
                : (0, C.jsxs)(C.Fragment, { children: [n, t] }),
            b = (e, t, n, r, a, l) => {
              if (!e) return;
              let o = -1;
              const i = new J({
                  boxShadowOpacity: t.current,
                  width: n.current,
                  r: a.current.r,
                  g: a.current.g,
                  b: a.current.b,
                  a: a.current.a,
                })
                  .to(
                    {
                      boxShadowOpacity: 0.2,
                      width: 104,
                      r: l.r,
                      g: l.g,
                      b: l.b,
                      a: l.a,
                    },
                    100,
                  )
                  .easing(q.Quadratic.In)
                  .onUpdate((l) => {
                    let {
                      boxShadowOpacity: o,
                      width: i,
                      r: u,
                      g: s,
                      b: c,
                      a: d,
                    } = l;
                    e.current &&
                      ((e.current.style.boxShadow =
                        "1.93px 9.65px 19.3px 0.97px rgba(126, 126, 126, ".concat(
                          o,
                          ")",
                        )),
                      (e.current.style.width = "".concat(i, "%")),
                      (r.current.style.color = "rgba("
                        .concat(u, ", ")
                        .concat(s, ", ")
                        .concat(c, ", ")
                        .concat(d, ")")),
                      (t.current = o),
                      (n.current = i),
                      (a.current = { r: u, g: s, b: c, a: d }));
                  })
                  .start(),
                u = () => {
                  o = window.requestAnimationFrame(u);
                  i.update() || window.cancelAnimationFrame(o);
                };
              u();
            },
            w = (e, t, n, r, a) => {
              if (!e) return;
              let l = -1;
              const o = new J({
                  boxShadowOpacity: t.current,
                  width: n.current,
                  r: a.current.r,
                  g: a.current.g,
                  b: a.current.b,
                  a: a.current.a,
                })
                  .to(
                    {
                      boxShadowOpacity: 0.1,
                      width: 100,
                      r: 0,
                      g: 0,
                      b: 0,
                      a: 1,
                    },
                    100,
                  )
                  .easing(q.Quadratic.In)
                  .onUpdate((l) => {
                    let {
                      boxShadowOpacity: o,
                      width: i,
                      r: u,
                      g: s,
                      b: c,
                      a: d,
                    } = l;
                    e.current &&
                      ((e.current.style.boxShadow =
                        "1.93px 9.65px 19.3px 0.97px rgba(126, 126, 126, ".concat(
                          o,
                          ")",
                        )),
                      (e.current.style.width = "".concat(i, "%")),
                      (r.current.style.color = "rgba("
                        .concat(u, ", ")
                        .concat(s, ", ")
                        .concat(c, ", ")
                        .concat(d, ")")),
                      (t.current = o),
                      (n.current = i),
                      (a.current = { r: u, g: s, b: c, a: d }));
                  })
                  .start(),
                i = () => {
                  l = window.requestAnimationFrame(i);
                  o.update() || window.cancelAnimationFrame(l);
                };
              i();
            };
          return (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsx)("div", {
                className: r()(te, g()),
                children: "Case Studies",
              }),
              (0, C.jsx)("div", {
                className: r()(le, g()),
                children: y(
                  (0, C.jsxs)("div", {
                    className: r()(oe, g()),
                    children: [
                      (0, C.jsx)("div", {
                        className: r()(ie),
                        children: (0, C.jsx)("span", {
                          children:
                            "Start-up / AI co-pilot / Low-code platform / SaaS tool",
                        }),
                      }),
                      (0, C.jsx)("div", {
                        className: r()(ue),
                        ref: o,
                        children: (0, C.jsx)("a", {
                          href: "https://sophiaa-liu.webflow.io/tempo-ai",
                          onMouseEnter: () =>
                            b(t, n, a, o, l, { r: 109, g: 25, b: 204, a: 1 }),
                          onMouseLeave: () => w(t, n, a, o, l),
                          children:
                            "AI-aided product development dashboard that streamlines idea \u2192 MVP",
                        }),
                      }),
                      (0, C.jsx)("div", {
                        className: r()(se),
                        children: (0, C.jsx)("span", {
                          children: "10-week Internship @ Tempo Labs (YC S23)",
                        }),
                      }),
                    ],
                  }),
                  (0, C.jsx)("a", {
                    className: r()(ce, g()),
                    href: "https://sophiaa-liu.webflow.io/tempo-ai",
                    children: (0, C.jsx)("img", {
                      src: "./images/tempo.png",
                      className: r()(de),
                      ref: t,
                      onMouseEnter: () =>
                        b(t, n, a, o, l, { r: 109, g: 25, b: 204, a: 1 }),
                      onMouseLeave: () => w(t, n, a, o, l),
                    }),
                  }),
                ),
              }),
              (0, C.jsx)("div", {
                className: r()(le, g()),
                children: y(
                  (0, C.jsxs)("div", {
                    className: r()(oe, g()),
                    children: [
                      (0, C.jsx)("div", {
                        className: r()(ie),
                        children: (0, C.jsx)("span", {
                          children:
                            "EdTech / Mental health / Conversational UX / Mobile",
                        }),
                      }),
                      (0, C.jsx)("div", {
                        className: r()(ue),
                        ref: d,
                        children: (0, C.jsx)("a", {
                          href: "https://sophiaa-liu.webflow.io/develop-for-good",
                          onMouseEnter: () =>
                            b(i, u, s, d, c, { r: 1, g: 90, b: 83, a: 1 }),
                          onMouseLeave: () => w(i, u, s, d, c),
                          children:
                            "Horizon: a mentoring app that prioritizes engagement and flexibility",
                        }),
                      }),
                      (0, C.jsx)("div", {
                        className: r()(se),
                        children: (0, C.jsx)("span", {
                          children: "16-week client project @ Develop for Good",
                        }),
                      }),
                    ],
                  }),
                  (0, C.jsx)("a", {
                    className: r()(ce, g()),
                    href: "https://sophiaa-liu.webflow.io/develop-for-good",
                    children: (0, C.jsx)("img", {
                      src: "./images/develop_for_good.png",
                      className: r()(de),
                      ref: i,
                      onMouseEnter: () =>
                        b(i, u, s, d, c, { r: 1, g: 90, b: 83, a: 1 }),
                      onMouseLeave: () => w(i, u, s, d, c),
                    }),
                  }),
                ),
              }),
              (0, C.jsx)("div", {
                className: r()(le, g()),
                children: y(
                  (0, C.jsxs)("div", {
                    className: r()(oe, g()),
                    children: [
                      (0, C.jsx)("div", {
                        className: r()(ie),
                        children: (0, C.jsx)("span", {
                          children:
                            "AI tool / Mobile app design / Accessibility",
                        }),
                      }),
                      (0, C.jsx)("div", {
                        className: r()(ue),
                        ref: v,
                        children: (0, C.jsx)("a", {
                          href: "https://sophiaa-liu.webflow.io/wayfarer",
                          onMouseEnter: () =>
                            b(f, p, h, v, m, { r: 176, g: 0, b: 173, a: 1 }),
                          onMouseLeave: () => w(f, p, h, v, m),
                          children:
                            "AI trip-planning tool that combines search and plan for last-minute changes",
                        }),
                      }),
                      (0, C.jsx)("div", {
                        className: r()(se),
                        children: (0, C.jsx)("span", {
                          children: "14-week independent project",
                        }),
                      }),
                    ],
                  }),
                  (0, C.jsx)("a", {
                    className: r()(ce, g()),
                    href: "https://sophiaa-liu.webflow.io/wayfarer",
                    children: (0, C.jsx)("img", {
                      src: "./images/wayfarer.png",
                      className: r()(de),
                      ref: f,
                      onMouseEnter: () =>
                        b(f, p, h, v, m, { r: 176, g: 0, b: 173, a: 1 }),
                      onMouseLeave: () => w(f, p, h, v, m),
                    }),
                  }),
                ),
              }),
            ],
          });
        },
        pe = "OtherWorkLayout1_sectionTitle__2c70I",
        he = "OtherWorkLayout1_breakpoint1__U+XZh",
        me = "OtherWorkLayout1_breakpoint2__wUeKf",
        ve = "OtherWorkLayout1_breakpoint3__X1HOx",
        ge = "OtherWorkLayout1_works__k4dM6",
        ye = "OtherWorkLayout1_work__8HY0a",
        be = "OtherWorkLayout1_imageWrapper__DAV60",
        we = "OtherWorkLayout1_image__eDzLL",
        _e = "OtherWorkLayout1_title__Ytw6n",
        ke = "OtherWorkLayout1_description__pPYDs",
        Se = () => {
          const { width: e } = k(),
            t = (0, _.useRef)(null),
            n = (0, _.useRef)(0.1),
            a = (0, _.useRef)(100),
            l = (0, _.useRef)({ r: 0, g: 0, b: 0, a: 1 }),
            o = (0, _.useRef)(null),
            i = (0, _.useRef)(null),
            u = (0, _.useRef)(0.1),
            s = (0, _.useRef)(100),
            c = (0, _.useRef)({ r: 0, g: 0, b: 0, a: 1 }),
            d = (0, _.useRef)(null),
            f = (0, _.useRef)(null),
            p = (0, _.useRef)(0.1),
            h = (0, _.useRef)(100),
            m = (0, _.useRef)({ r: 0, g: 0, b: 0, a: 1 }),
            v = (0, _.useRef)(null),
            g = (0, _.useRef)(null),
            y = (0, _.useRef)(0.1),
            b = (0, _.useRef)(100),
            w = (0, _.useRef)({ r: 0, g: 0, b: 0, a: 1 }),
            S = (0, _.useRef)(null),
            x = () => (e > 900 ? he : e > 724 ? me : ve),
            E = (e, t, n, r, a, l) => {
              if (!e) return;
              let o = -1;
              const i = new J({
                  color: t.current,
                  width: n.current,
                  r: a.current.r,
                  g: a.current.g,
                  b: a.current.b,
                  a: a.current.a,
                })
                  .to(
                    { color: 0.2, width: 104, r: l.r, g: l.g, b: l.b, a: l.a },
                    100,
                  )
                  .easing(q.Quadratic.In)
                  .onUpdate((l) => {
                    let { color: o, width: i, r: u, g: s, b: c, a: d } = l;
                    e.current &&
                      ((e.current.style.boxShadow =
                        "1.93px 9.65px 19.3px 0.97px rgba(126, 126, 126, ".concat(
                          o,
                          ")",
                        )),
                      (e.current.style.width = "".concat(i, "%")),
                      (r.current.style.color = "rgba("
                        .concat(u, ", ")
                        .concat(s, ", ")
                        .concat(c, ", ")
                        .concat(d, ")")),
                      (t.current = o),
                      (n.current = i),
                      (a.current = { r: u, g: s, b: c, a: d }));
                  })
                  .start(),
                u = () => {
                  o = window.requestAnimationFrame(u);
                  i.update() || window.cancelAnimationFrame(o);
                };
              u();
            },
            N = (e, t, n, r, a) => {
              if (!e) return;
              let l = -1;
              const o = new J({
                  color: t.current,
                  width: n.current,
                  r: a.current.r,
                  g: a.current.g,
                  b: a.current.b,
                  a: a.current.a,
                })
                  .to({ color: 0.1, width: 100, r: 0, g: 0, b: 0, a: 1 }, 100)
                  .easing(q.Quadratic.In)
                  .onUpdate((l) => {
                    let { color: o, width: i, r: u, g: s, b: c, a: d } = l;
                    e.current &&
                      ((e.current.style.boxShadow =
                        "1.93px 9.65px 19.3px 0.97px rgba(126, 126, 126, ".concat(
                          o,
                          ")",
                        )),
                      (e.current.style.width = "".concat(i, "%")),
                      (r.current.style.color = "rgba("
                        .concat(u, ", ")
                        .concat(s, ", ")
                        .concat(c, ", ")
                        .concat(d, ")")),
                      (t.current = o),
                      (n.current = i),
                      (a.current = { r: u, g: s, b: c, a: d }));
                  })
                  .start(),
                i = () => {
                  l = window.requestAnimationFrame(i);
                  o.update() || window.cancelAnimationFrame(l);
                };
              i();
            };
          return (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsx)("div", {
                className: r()(pe, x()),
                children: "Other work",
              }),
              (0, C.jsxs)("div", {
                className: r()(ge, x()),
                children: [
                  (0, C.jsxs)("div", {
                    className: r()(ye, x()),
                    children: [
                      (0, C.jsx)("a", {
                        className: be,
                        href: "https://ixd.prattsi.org/2024/09/redesigning-zooms-invitation-flow/",
                        children: (0, C.jsx)("img", {
                          src: "./images/zoom_redesign.png",
                          className: we,
                          ref: t,
                          onMouseEnter: () =>
                            E(t, n, a, o, l, { r: 19, g: 102, b: 255, a: 1 }),
                          onMouseLeave: () => N(t, n, a, o, l),
                        }),
                      }),
                      (0, C.jsx)("div", {
                        className: r()(_e),
                        children: (0, C.jsx)("span", {
                          children:
                            "Design Critique / Usability Evaluation / App Redesign",
                        }),
                      }),
                      (0, C.jsx)("div", {
                        className: r()(ke),
                        ref: o,
                        children: (0, C.jsx)("a", {
                          href: "https://ixd.prattsi.org/2024/09/redesigning-zooms-invitation-flow/",
                          onMouseEnter: () =>
                            E(t, n, a, o, l, { r: 19, g: 102, b: 255, a: 1 }),
                          onMouseLeave: () => N(t, n, a, o, l),
                          children:
                            "Redesigning Zoom\u2019s Invitation flow to improve usability and success rate",
                        }),
                      }),
                    ],
                  }),
                  (0, C.jsxs)("div", {
                    className: r()(ye, x()),
                    children: [
                      (0, C.jsx)("a", {
                        className: be,
                        href: "https://www.figma.com/deck/8qZnYJvXw3LAnzPvQdnnYI/Redesigning-Film-Forum's-Conversion-Funnel?node-id=1-660&node-type=canvas&viewport=25%2C340%2C0.04&t=4ey1CQk18oNL83RS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
                        children: (0, C.jsx)("img", {
                          src: "./images/film_forum.png",
                          className: we,
                          ref: i,
                          onMouseEnter: () =>
                            E(i, u, s, d, c, { r: 19, g: 102, b: 255, a: 1 }),
                          onMouseLeave: () => N(i, u, s, d, c),
                        }),
                      }),
                      (0, C.jsx)("div", {
                        className: r()(_e),
                        children: (0, C.jsx)("span", {
                          children:
                            "Research Method Design / Heuristic Evaluation / App Redesign",
                        }),
                      }),
                      (0, C.jsx)("div", {
                        className: r()(ke),
                        ref: d,
                        children: (0, C.jsx)("a", {
                          href: "https://www.figma.com/deck/8qZnYJvXw3LAnzPvQdnnYI/Redesigning-Film-Forum's-Conversion-Funnel?node-id=1-660&node-type=canvas&viewport=25%2C340%2C0.04&t=4ey1CQk18oNL83RS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
                          onMouseEnter: () =>
                            E(i, u, s, d, c, { r: 19, g: 102, b: 255, a: 1 }),
                          onMouseLeave: () => N(i, u, s, d, c),
                          children:
                            "Redesigning Film Forum\u2019s conversion funnel to increase ticket sales",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, C.jsxs)("div", {
                className: r()(ge, x()),
                children: [
                  (0, C.jsxs)("div", {
                    className: r()(ye, x()),
                    children: [
                      (0, C.jsx)("a", {
                        className: be,
                        href: "https://sophialiu1.notion.site/Designing-a-digital-workspace-for-reading-creative-idiosyncratic-books-0fe53e50f2ea48bcb5f9e8f43ff858a1?pvs=4",
                        children: (0, C.jsx)("img", {
                          src: "./images/dictee.png",
                          className: we,
                          ref: f,
                          onMouseEnter: () =>
                            E(f, p, h, v, m, { r: 19, g: 102, b: 255, a: 1 }),
                          onMouseLeave: () => N(f, p, h, v, m),
                        }),
                      }),
                      (0, C.jsx)("div", {
                        className: r()(_e),
                        children: (0, C.jsx)("span", {
                          children: "Speculative Design / UI Design",
                        }),
                      }),
                      (0, C.jsx)("div", {
                        className: r()(ke),
                        ref: v,
                        children: (0, C.jsx)("a", {
                          href: "https://sophialiu1.notion.site/Designing-a-digital-workspace-for-reading-creative-idiosyncratic-books-0fe53e50f2ea48bcb5f9e8f43ff858a1?pvs=4",
                          onMouseEnter: () =>
                            E(f, p, h, v, m, { r: 19, g: 102, b: 255, a: 1 }),
                          onMouseLeave: () => N(f, p, h, v, m),
                          children:
                            "Dictee: a digital workspace for material texts",
                        }),
                      }),
                    ],
                  }),
                  (0, C.jsxs)("div", {
                    className: r()(ye, x()),
                    children: [
                      (0, C.jsx)("a", {
                        className: be,
                        href: "https://sophialiu1.notion.site/Two-Projects-using-ArcGIS-5e7f5a61558c472f84ab1f87a0c4b390?pvs=4",
                        children: (0, C.jsx)("img", {
                          src: "./images/gis.png",
                          className: we,
                          ref: g,
                          onMouseEnter: () =>
                            E(g, y, b, S, w, { r: 19, g: 102, b: 255, a: 1 }),
                          onMouseLeave: () => N(g, y, b, S, w),
                        }),
                      }),
                      (0, C.jsx)("div", {
                        className: r()(_e),
                        children: (0, C.jsx)("span", {
                          children:
                            "Data Visualization / Data Analysis / Mapping",
                        }),
                      }),
                      (0, C.jsx)("div", {
                        className: r()(ke),
                        ref: S,
                        children: (0, C.jsx)("a", {
                          href: "https://sophialiu1.notion.site/Two-Projects-using-ArcGIS-5e7f5a61558c472f84ab1f87a0c4b390?pvs=4",
                          onMouseEnter: () =>
                            E(g, y, b, S, w, { r: 19, g: 102, b: 255, a: 1 }),
                          onMouseLeave: () => N(g, y, b, S, w),
                          children:
                            "Two studies mapping spatial data with ArcGIS",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        xe = {
          navBar: "NavigationBar_navBar__WdJDb",
          breakpoint1: "NavigationBar_breakpoint1__f7trv",
          logo: "NavigationBar_logo__CTR6J",
          link: "NavigationBar_link__166wV",
          menu: "NavigationBar_menu__Suxex",
          links: "NavigationBar_links__Rg1n8",
        },
        Ce = () => {
          const { width: e } = k(),
            [t, n] = (0, _.useState)(!1),
            a = ((0, _.useRef)(!0), (0, _.useRef)(0), (0, _.useRef)(null));
          (0, _.useRef)(0), (0, _.useRef)(-1);
          (0, _.useEffect)(() => {
            "#case-studies" === window.location.hash && l();
          }, []);
          const l = () => {
            const e = document.getElementById("case-studies");
            e && e.scrollIntoView({ behavior: "smooth" });
          };
          return (
            (0, _.useEffect)(() => {
              e >= 650 && n(!1);
            }, [e]),
            (0, C.jsx)(C.Fragment, {
              children: (0, C.jsxs)("div", {
                className: r()(xe.navBar, { [xe.breakpoint1]: e < 1e3 }),
                ref: a,
                children: [
                  (0, C.jsx)("img", {
                    src: "./images/logo.png",
                    className: xe.logo,
                  }),
                  e >= 650 &&
                    (0, C.jsxs)(C.Fragment, {
                      children: [
                        (0, C.jsx)("a", {
                          className: r()(xe.link),
                          onClick: () => l(),
                          children: (0, C.jsx)("span", { children: "WORK" }),
                        }),
                        (0, C.jsx)("a", {
                          className: r()(xe.link),
                          href: "https://sophiaa-liu.webflow.io/",
                          children: (0, C.jsx)("span", { children: "ABOUT" }),
                        }),
                        (0, C.jsx)("a", {
                          className: r()(xe.link),
                          href: "https://drive.google.com/file/d/1R7hDOouuHvIUphKNlzFBxL5tgAX0H25D/view?usp=sharing",
                          children: (0, C.jsx)("span", { children: "RESUME" }),
                        }),
                      ],
                    }),
                  e < 650 &&
                    (0, C.jsx)("img", {
                      src: "./svgs/menu.svg",
                      className: xe.menu,
                      onClick: () => n(!t),
                    }),
                  t &&
                    (0, C.jsxs)("div", {
                      className: xe.links,
                      children: [
                        (0, C.jsx)("a", {
                          className: r()(xe.link, {
                            [xe.smallMarginRightLink]: e < 1e3,
                          }),
                          onClick: () => {
                            l(), n(!1);
                          },
                          children: "WORK",
                        }),
                        (0, C.jsx)("a", {
                          className: r()(xe.link, {
                            [xe.smallMarginRightLink]: e < 1e3,
                          }),
                          href: "https://sophiaa-liu.webflow.io/",
                          children: (0, C.jsx)("span", { children: "ABOUT" }),
                        }),
                        (0, C.jsx)("a", {
                          className: r()(xe.link, {
                            [xe.smallMarginRightLink]: e < 1e3,
                          }),
                          href: "https://drive.google.com/file/d/1R7hDOouuHvIUphKNlzFBxL5tgAX0H25D/view?usp=sharing",
                          children: "RESUME",
                        }),
                      ],
                    }),
                ],
              }),
            })
          );
        },
        Ee = () => {
          const { width: e } = k();
          return (0, C.jsxs)("div", {
            className: a,
            children: [
              (0, C.jsx)(Ce, {}),
              (0, C.jsx)("div", { className: l }),
              (0, C.jsxs)("div", {
                className: r()(o, {
                  [i]: e > 1260,
                  [u]: e > 900 && e <= 1260,
                  [s]: e <= 900,
                }),
                children: [
                  (0, C.jsxs)("div", {
                    className: r()(c, e >= 800 ? d : f),
                    children: [
                      e > 1260 ? (0, C.jsx)(T, {}) : (0, C.jsx)($, {}),
                      (0, C.jsxs)("div", {
                        className: r()(p, { [i]: e > 1260, [u]: e <= 1260 }),
                        children: [
                          (0, C.jsx)("div", {
                            children:
                              "\ud83d\udc69\u200d\ud83d\udcbb Studying Design and Human-Computer Interaction at Pratt Institute in NYC.",
                          }),
                          (0, C.jsx)("div", {
                            children:
                              "\ud83d\udddd\ufe0f Solving complex problems with simple\u2014but not simplistic\u2014solutions .",
                          }),
                          (0, C.jsx)("div", {
                            children: "\u2615\ufe0f Let\u2019s chat-",
                          }),
                        ],
                      }),
                      (0, C.jsxs)("div", {
                        className: h,
                        children: [
                          (0, C.jsx)("div", {
                            className: m,
                            onClick: () =>
                              window.open("mailto:sliu56@pratt.edu"),
                            children: "Email",
                          }),
                          (0, C.jsx)("div", {
                            className: m,
                            onClick: () =>
                              window.open(
                                "https://www.linkedin.com/in/sophia-liu-designs/",
                              ),
                            children: "Linkedin",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, C.jsxs)("div", {
                    className: r()(v, { [i]: e > 800, [u]: e <= 800 }),
                    id: "case-studies",
                    children: [(0, C.jsx)("a", {}), (0, C.jsx)(fe, {})],
                  }),
                  (0, C.jsx)("div", {
                    className: r()(g, { [i]: e > 800, [u]: e <= 800 }),
                    children: (0, C.jsx)(Se, {}),
                  }),
                  (0, C.jsxs)("div", {
                    className: y,
                    children: [
                      (0, C.jsx)("div", {
                        className: b,
                        children: "Designed and coded by Sophia Liu.",
                      }),
                      (0, C.jsx)("div", {
                        className: w,
                        onClick: () => {
                          let e = -1;
                          const t = new J({ scrollTop: window.scrollY })
                              .to({ scrollTop: 0 }, 500)
                              .easing(q.Quadratic.In)
                              .onUpdate((e) => {
                                var t;
                                let { scrollTop: n } = e;
                                null === (t = window) ||
                                  void 0 === t ||
                                  t.scrollTo(0, n);
                              })
                              .start(),
                            n = () => {
                              e = window.requestAnimationFrame(n);
                              t.update() || window.cancelAnimationFrame(e);
                            };
                          n();
                        },
                        children: "Back to top",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      e.createRoot(document.getElementById("root")).render((0, C.jsx)(Ee, {}));
    })();
})();
//# sourceMappingURL=main.e23c1639.js.map
