/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(C, e) { "use strict"; var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) { return t.flat.call(e) } : function(e) { return t.concat.apply([], e) },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        x = function(e) { return null != e && e === e.window },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) { var r, i, o = (n = n || E).createElement("script"); if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o) }

    function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e } var f = "3.5.1",
        S = function(e, t) { return new S.fn.init(e, t) };

    function p(e) { var t = !!e && "length" in e && e.length,
            n = w(e); return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) }
    S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function() { return s.call(this) }, get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var t = S.merge(this.constructor(), e); return t.prevObject = this, t }, each: function(e) { return S.each(this, e) }, map: function(n) { return this.pushStack(S.map(this, function(e, t) { return n.call(e, t, e) })) }, slice: function() { return this.pushStack(s.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, even: function() { return this.pushStack(S.grep(this, function(e, t) { return (t + 1) % 2 })) }, odd: function() { return this.pushStack(S.grep(this, function(e, t) { return t % 2 })) }, eq: function(e) { var t = this.length,
                n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function() { var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, globalEval: function(e, t, n) { b(e, { nonce: t && t.nonce }, n) }, each: function(e, t) { var n, r = 0; if (p(e)) { for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e }, makeArray: function(e, t) { var n = t || []; return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n }, inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) }, merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e }, grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r }, map: function(e, t, n) { var r, i, o = 0,
                a = []; if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g(a) }, guid: 1, support: y }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var d = function(n) { var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function(e, t) { return e === t && (l = !0), 0 },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) { for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1 },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            oe = function() { T() },
            ae = be(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType } catch (e) { H = { apply: t.length ? function(e, t) { L.apply(e, O.call(t)) } : function(e, t) { var n = e.length,
                        r = 0; while (e[n++] = t[r++]);
                    e.length = n - 1 } } }

        function se(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && (T(e), e = e || C, E)) { if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) { if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length; while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",") } try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { N(t, !0) } finally { s === S && e.removeAttribute("id") } } } return g(t.replace($, "$1"), e, n, r) }

        function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function le(e) { return e[S] = !0, e }

        function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) { var n = e.split("|"),
                r = n.length; while (r--) b.attrHandle[n[r]] = t }

        function pe(e, t) { var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1 }

        function de(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function he(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function ge(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function ve(a) { return le(function(o) { return o = +o, le(function(e, t) { var n, r = a([], e.length, o),
                        i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) }

        function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e } for (e in d = se.support = {}, i = se.isXML = function(e) { var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement; return !Y.test(t || n && n.nodeName || "HTML") }, T = se.setDocument = function(e) { var t, n, r = e ? e.ownerDocument || e : p; return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) { return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), d.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function(e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) { return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), d.getById ? (b.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function(e) { var n = e.replace(te, ne); return function(e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0; while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = d.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, b.find.CLASS = d.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) { var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]") }), ce(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:") })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function(e, t) { if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1 }, D = t ? function(e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) { if (e === t) return l = !0, 0; var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t]; if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0; if (i === o) return pe(e, t);
                    n = e; while (n = n.parentNode) a.unshift(n);
                    n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0 }), C }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) { if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { N(t, !0) }
                return 0 < se(t, C, null, [e]).length }, se.contains = function(e, t) { return (e.ownerDocument || e) != C && T(e), y(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e); var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0; return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) { var t, n = [],
                    r = 0,
                    i = 0; if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) } return u = null, e }, o = se.getText = function(e) { var t, n = "",
                    r = 0,
                    i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    while (t = e[r++]) n += o(t); return n }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = m[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(n, r, i) { return function(e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(h, e, t, g, v) { var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e; return 1 === g && 0 === v ? function(e) { return !!e.parentNode } : function(e, t, n) { var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1; if (c) { if (y) { while (l) { a = e; while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling" } return !0 } if (u = [m ? c.firstChild : c.lastChild], m && p) { d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) { i[h] = [k, s, d]; break } } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g } } }, PSEUDO: function(e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) { var n, r = a(e, o),
                                i = r.length; while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]) }) : function(e) { return a(e, 0, t) }) : a } }, pseudos: { not: le(function(e) { var r = [],
                            i = [],
                            s = f(e.replace($, "$1")); return s[S] ? le(function(e, t, n, r) { var i, o = s(e, null, r, []),
                                a = e.length; while (a--)(i = o[a]) && (e[a] = !(t[a] = i)) }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: le(function(t) { return function(e) { return 0 < se(t, e).length } }), contains: le(function(t) { return t = t.replace(te, ne),
                            function(e) { return -1 < (e.textContent || o(e)).indexOf(t) } }), lang: le(function(n) { return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) { var t;
                                do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id }, root: function(e) { return e === a }, focus: function(e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ge(!1), disabled: ge(!0), checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0 }, parent: function(e) { return !b.pseudos.empty(e) }, header: function(e) { return J.test(e.nodeName) }, input: function(e) { return Q.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: ve(function() { return [0] }), last: ve(function(e, t) { return [t - 1] }), eq: ve(function(e, t, n) { return [n < 0 ? n + t : n] }), even: ve(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: ve(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }), gt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function be(s, e, t) { var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++; return e.first ? function(e, t, n) { while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1 } : function(e, t, n) { var r, i, o, a = [k, p]; if (n) { while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0 } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else { if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1 } }

        function we(i) { return 1 < i.length ? function(e, t, n) { var r = i.length; while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0 } : i[0] }

        function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Ce(d, h, g, v, y, e) { return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) { var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f; if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = p.length; while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r) }
                        o = p.length; while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a)) } } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p) }) }

        function Ee(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) { return e === i }, a, !0), l = be(function(e) { return -1 < P(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) { for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e)) }
                    c.push(t) }
            return we(c) } return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) { var n, r, i, o, a, s, u, l = x[e + " "]; if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? se.error(e) : x(e, s).slice(0) }, f = se.compile = function(e, t) { var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "]; if (!a) { t || (t = h(e)), n = t.length; while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) { var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length; for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument == C || (T(o), n = !E); while (s = v[a++])
                                if (s(o, t || C, n)) { r.push(o); break }
                            i && (k = h) }
                        m && ((o = !s && o) && u--, e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = y[a++]) s(c, f, t, n); if (e) { if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f) }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r) } return i && (k = h, w = p), c }, m ? le(r) : r))).selector = e } return a }, g = se.select = function(e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length) }
                i = G.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } } } return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(R, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape; var h = function(e, t, n) { var r = [],
                i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) { if (i && S(e).is(n)) break;
                    r.push(e) }
            return r },
        T = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        k = S.expr.match.needsContext;

    function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) { return m(n) ? S.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? S.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? S.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : S.filter(n, e, r) }
    S.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) { return 1 === e.nodeType })) }, S.fn.extend({ find: function(e) { var t, n, r = this.length,
                i = this; if ("string" != typeof e) return this.pushStack(S(e).filter(function() { for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n); return 1 < r ? S.uniqueSort(n) : n }, filter: function(e) { return this.pushStack(D(this, e || [], !1)) }, not: function(e) { return this.pushStack(D(this, e || [], !0)) }, is: function(e) { return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length } }); var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) { var r, i; if (!e) return this; if (n = n || j, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this) }).prototype = S.fn, j = S(E); var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };

    function O(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    S.fn.extend({ has: function(e) { var t = S(e, this),
                n = t.length; return this.filter(function() { for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0 }) }, closest: function(e, t) { var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e); if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o) }, index: function(e) { return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), S.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return h(e, "parentNode") }, parentsUntil: function(e, t, n) { return h(e, "parentNode", n) }, next: function(e) { return O(e, "nextSibling") }, prev: function(e) { return O(e, "previousSibling") }, nextAll: function(e) { return h(e, "nextSibling") }, prevAll: function(e) { return h(e, "previousSibling") }, nextUntil: function(e, t, n) { return h(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return h(e, "previousSibling", n) }, siblings: function(e) { return T((e.parentNode || {}).firstChild, e) }, children: function(e) { return T(e.firstChild) }, contents: function(e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes)) } }, function(r, i) { S.fn[r] = function(e, t) { var n = S.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } }); var P = /[^\x20\t\r\n\f]+/g;

    function R(e) { return e }

    function M(e) { throw e }

    function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    S.Callbacks = function(r) { var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) { n[t] = !0 }), n) : S.extend({}, r); var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "") },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { S.each(e, function(e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return S.each(arguments, function(e, t) { var n; while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < S.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } }; return f }, S.extend({ Deferred: function(e) { var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = { state: function() { return i }, always: function() { return s.done(arguments).fail(arguments), this }, "catch": function(e) { return a.then(null, e) }, pipe: function() { var i = arguments; return S.Deferred(function(r) { S.each(o, function(e, t) { var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() { var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function(t, n, r) { var u = 0;

                        function l(i, o, a, s) { return function() { var n = this,
                                    r = arguments,
                                    e = function() { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } },
                                    t = s ? e : function() { try { e() } catch (e) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t)) } } return S.Deferred(function(e) { o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M)) }).promise() }, promise: function(e) { return null != e ? S.extend(e, a) : a } },
                s = {}; return S.each(o, function(e, t) { var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function(e) { var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then(); while (t--) I(i[t], a(t), o.reject); return o.promise() } }); var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) { C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, S.readyException = function(e) { C.setTimeout(function() { throw e }) }; var F = S.Deferred();

    function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready() }
    S.fn.ready = function(e) { return F.then(e)["catch"](function(e) { S.readyException(e) }), this }, S.extend({ isReady: !1, readyWait: 1, ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]) } }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B)); var $ = function(e, t, n, r, i, o, a) { var s = 0,
                u = e.length,
                l = null == n; if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(S(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) { return t.toUpperCase() }

    function X(e) { return e.replace(_, "ms-").replace(z, U) } var V = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function G() { this.expando = S.expando + G.uid++ }
    G.uid = 1, G.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r]; return i }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length; while (n--) delete r[t[n]] }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !S.isEmptyObject(t) } }; var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) {}
                Q.set(e, t, n) } else n = void 0;
        return n }
    S.extend({ hasData: function(e) { return Q.hasData(e) || Y.hasData(e) }, data: function(e, t, n) { return Q.access(e, t, n) }, removeData: function(e, t) { Q.remove(e, t) }, _data: function(e, t, n) { return Y.access(e, t, n) }, _removeData: function(e, t) { Y.remove(e, t) } }), S.fn.extend({ data: function(n, e) { var t, r, i, o = this[0],
                a = o && o.attributes; if (void 0 === n) { if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function() { Q.set(this, n) }) : $(this, function(e) { var t; if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() { Q.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function(e) { return this.each(function() { Q.remove(this, e) }) } }), S.extend({ queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [] }, dequeue: function(e, t) { t = t || "fx"; var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { S.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: S.Callbacks("once memory").add(function() { Y.remove(e, [t + "queue", n]) }) }) } }), S.fn.extend({ queue: function(t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() { var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t) }) }, dequeue: function(e) { return this.each(function() { S.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) { return S.contains(e.ownerDocument, e) },
        oe = { composed: !0 };
    re.getRootNode && (ie = function(e) { return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument }); var ae = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display") };

    function se(e, t, n, r) { var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return S.css(e, t, "") },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ue = {};

    function le(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }
    S.fn.extend({ show: function() { return le(this, !0) }, hide: function() { return le(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ae(this) ? S(this).show() : S(this).hide() }) } }); var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild; var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n }

    function ye(e, t) { for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]); var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0; while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() { return !0 }

    function Ee() { return !1 }

    function Se(e, t) { return e === function() { try { return E.activeElement } catch (e) {} }() == ("focus" === t) }

    function ke(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e; return 1 === o && (a = i, (i = function(e) { return S().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = S.guid++)), e.each(function() { S.event.add(this, t, i, r, n) }) }

    function Ae(e, i, o) { o ? (Y.set(e, i, !1), S.event.add(e, i, { namespace: !1, handler: function(e) { var t, n, r = Y.get(this, i); if (1 & e.isTrigger && this[i]) { if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce) }
    S.event = { global: {}, add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t); if (V(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) { return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0) } }, remove: function(e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(P) || [""]).length; while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]) } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events") } }, dispatch: function(e) { var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {}; for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t]; if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = S.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result } }, handlers: function(e, t) { var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o }) }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function(t, e) { Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function(e) { return e[S.expando] ? e : new S.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1 }, trigger: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0 }, _default: function(e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, S.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, S.Event = function(e, t) { if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0 }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Ee, isPropagationStopped: Ee, isImmediatePropagationStopped: Ee, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e, t) { S.event.special[e] = { setup: function() { return Ae(this, e, Se), !1 }, trigger: function() { return Ae(this, e), !0 }, delegateType: t } }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) { S.event.special[e] = { delegateType: i, bindType: i, handle: function(e) { var t, n = e.relatedTarget,
                    r = e.handleObj; return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), S.fn.extend({ on: function(e, t, n, r) { return ke(this, e, t, n, r) }, one: function(e, t, n, r) { return ke(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() { S.event.remove(this, e, n, t) }) } }); var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e }

    function Le(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function He(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Oe(e, t) { var n, r, i, o, a, s; if (1 === t.nodeType) { if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a)) } }

    function Pe(n, r, i, o) { r = g(r); var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d); if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function(e) { var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o) }); if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c); if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(je, ""), u, l)) } return n }

    function Re(e, t, n) { for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e }
    S.extend({ htmlPrefilter: function(e) { return e }, clone: function(e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e); if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c }, cleanData: function(e) { for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) { if (t = n[Y.expando]) { if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0 }
                    n[Q.expando] && (n[Q.expando] = void 0) } } }), S.fn.extend({ detach: function(e) { return Re(this, e, !0) }, remove: function(e) { return Re(this, e) }, text: function(e) { return $(this, function(e) { return void 0 === e ? S.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return Pe(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e) }) }, prepend: function() { return Pe(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = qe(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() { return Pe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return Pe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = ""); return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return S.clone(this, e, t) }) }, html: function(e) { return $(this, function(e) { var t = this[0] || {},
                    n = 0,
                    r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = S.htmlPrefilter(e); try { for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0 } catch (e) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var n = []; return Pe(this, arguments, function(e) { var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this)) }, n) } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { S.fn[e] = function(e) { for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } }); var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) },
        We = function(e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r },
        Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function $e(e, t) { return { get: function() { if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get } } }! function() {
        function e() { if (l) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l); var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null } }

        function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), s }, scrollboxSize: function() { return e(), i }, reliableTrDimensions: function() { var e, t, n, r; return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a } })) }(); var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};

    function Xe(e) { var t = S.cssProps[e] || Ue[e]; return t || (e in ze ? e : Ue[e] = function(e) { var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length; while (n--)
                if ((e = _e[n] + t) in ze) return e }(e) || e) } var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Qe = { letterSpacing: "0", fontWeight: "400" };

    function Je(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function Ke(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u }

    function Ze(e, t, n) { var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1); if (Me.test(a)) { if (!n) return a;
            a = "auto" } return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px" }

    function et(e, t, n, r, i) { return new et.prototype.init(e, t, n, r, i) }
    S.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Be(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function(e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = X(t),
                    u = Ge.test(t),
                    l = e.style; if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function(e, t, n, r) { var i, o, a, s = X(t); return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), S.each(["height", "width"], function(e, u) { S.cssHooks[u] = { get: function(e, t, n) { if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() { return Ze(e, u, n) }) }, set: function(e, t, n) { var r, i = Ie(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s) } } }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function(i, o) { S.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (S.cssHooks[i + o].set = Je) }), S.fn.extend({ css: function(e, t) { return $(this, function(e, t, n) { var r, i, o = {},
                    a = 0; if (Array.isArray(t)) { for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r); return o } return void 0 !== n ? S.style(e, t, n) : S.css(e, t) }, e, t, 1 < arguments.length) } }), ((S.Tween = et).prototype = { constructor: et, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px") }, cur: function() { var e = et.propHooks[this.prop]; return e && e.get ? e.get(this) : et.propHooks._default.get(this) }, run: function(e) { var t, n = et.propHooks[this.prop]; return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this } }).init.prototype = et.prototype, (et.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = et.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, S.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, S.fx = et.prototype.init, S.fx.step = {}; var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() { nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick()) }

    function ut() { return C.setTimeout(function() { tt = void 0 }), tt = Date.now() }

    function lt(e, t) { var n, r = 0,
            i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i }

    function ct(e, t, n) { for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r }

    function ft(o, e, t) { var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() { delete u.elem }),
            u = function() { if (a) return !1; for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
            l = s.promise({ elem: o, props: S.extend({}, e), opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t), originalProperties: e, originalOptions: t, startTime: tt || ut(), duration: t.duration, tweens: [], createTween: function(e, t) { var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function(e) { var t = 0,
                        n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++) l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }),
            c = l.props; for (! function(e, t) { var n, r, i, o, a; for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l }
    S.Animation = S.extend(ft, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] }, tweener: function(e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(P); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t) }, prefilters: [function(e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow"); for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, S.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (i = t[r], ot.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0 }
                    d[r] = v && v[r] || S.style(e, r) }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && le([e], !0), p.done(function() { for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]) })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function(e, t) { t ? ft.prefilters.unshift(e) : ft.prefilters.push(e) } }), S.speed = function(e, t, n) { var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue) }, r }, S.fn.extend({ fadeTo: function(e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function(t, e, n, r) { var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() { var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function(i, e, o) { var a = function(e) { var t = e.stop;
                delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() { var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this); if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]); for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));!e && o || S.dequeue(this, i) }) }, finish: function(a) { return !1 !== a && (a = a || "fx"), this.each(function() { var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0; for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish }) } }), S.each(["toggle", "show", "hide"], function(e, r) { var i = S.fn[r];
        S.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n) } }), S.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { S.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), S.timers = [], S.fx.tick = function() { var e, t = 0,
            n = S.timers; for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0 }, S.fx.timer = function(e) { S.timers.push(e), S.fx.start() }, S.fx.interval = 13, S.fx.start = function() { nt || (nt = !0, st()) }, S.fx.stop = function() { nt = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r, e) { return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) { var n = C.setTimeout(e, r);
            t.stop = function() { C.clearTimeout(n) } }) }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value; var pt, dt = S.expr.attrHandle;
    S.fn.extend({ attr: function(e, t) { return $(this, S.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { S.removeAttr(this, e) }) } }), S.extend({ attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, r = 0,
                i = t && t.match(P); if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n) } }), pt = { set: function(e, t, n) { return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) { var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r } }); var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) { return (e.match(P) || []).join(" ") }

    function yt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function mt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] }
    S.fn.extend({ prop: function(e, t) { return $(this, S.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[S.propFix[e] || e] }) } }), S.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = S.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { S.propFix[this.toLowerCase()] = this }), S.fn.extend({ addClass: function(t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function(e) { S(this).addClass(t.call(this, e, yt(this))) }); if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") { a = 0; while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s) }
            return this }, removeClass: function(t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function(e) { S(this).removeClass(t.call(this, e, yt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") { a = 0; while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s) }
            return this }, toggleClass: function(i, t) { var o = typeof i,
                a = "string" === o || Array.isArray(i); return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) { S(this).toggleClass(i.call(this, e, yt(this), t), t) }) : this.each(function() { var e, t, n, r; if (a) { t = 0, n = S(this), r = mt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || "")) }) }, hasClass: function(e) { var t, n, r = 0;
            t = " " + e + " "; while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1 } }); var xt = /\r/g;
    S.fn.extend({ val: function(n) { var r, e, i, t = this[0]; return arguments.length ? (i = m(n), this.each(function(e) { var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) { return null == e ? "" : e + "" })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0 } }), S.extend({ valHooks: { option: { get: function(e) { var t = S.find.attr(e, "value"); return null != t ? t : vt(S.text(e)) } }, select: { get: function(e) { var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) { if (t = S(n).val(), a) return t;
                            s.push(t) }
                    return s }, set: function(e, t) { var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length; while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), S.each(["radio", "checkbox"], function() { S.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t) } }, y.checkOn || (S.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C; var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) { e.stopPropagation() };
    S.extend(S.event, { trigger: function(e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !x(n)) { for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C) }
                i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function(e, t, n) { var r = S.extend(new S.Event, n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t) } }), S.fn.extend({ trigger: function(e, t) { return this.each(function() { S.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return S.event.trigger(e, t, n, !0) } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n, r) { var i = function(e) { S.event.simulate(r, e.target, S.event.fix(e)) };
        S.event.special[r] = { setup: function() { var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1) }, teardown: function() { var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r)) } } }); var Tt = C.location,
        Ct = { guid: Date.now() },
        Et = /\?/;
    S.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t }; var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) { var t; if (Array.isArray(e)) S.each(e, function(e, t) { r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i) }
    S.param = function(e, t) { var n, r = [],
            i = function(e, t) { var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) Dt(n, e[n], t, i); return r.join("&") }, S.fn.extend({ serialize: function() { return S.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = S.prop(this, "elements"); return e ? S.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var n = S(this).val(); return null == n ? null : Array.isArray(n) ? S.map(n, function(e) { return { name: t.name, value: e.replace(kt, "\r\n") } }) : { name: t.name, value: n.replace(kt, "\r\n") } }).get() } }); var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) { return function(e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0,
                i = e.toLowerCase().match(P) || []; if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } }

    function Bt(t, i, o, a) { var s = {},
            u = t === Mt;

        function l(e) { var r; return s[e] = !0, S.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") }

    function $t(e, t) { var n, r, i = S.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && S.extend(!0, e, r), e }
    Wt.href = Tt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e) }, ajaxPrefilter: Ft(Rt), ajaxTransport: Ft(Mt), ajax: function(e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = { readyState: 0, getResponseHeader: function(e) { var t; if (h) { if (!n) { n = {}; while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) }
                            t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function() { return h ? p : null }, setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function(e) { return null == h && (v.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this }, abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T; for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e;
                    l(-1, e) } } else l(-1, "No Transport");

            function l(e, t, n, r) { var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) { var r, i, o, a, s = e.contents,
                        u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i) }
                        o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}), s = function(e, t, n, r) { var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice(); if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift(); while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop"))) } return T }, getJSON: function(e, t, n) { return S.get(e, t, n, "json") }, getScript: function(e, t) { return S.get(e, void 0, t, "script") } }), S.each(["get", "post"], function(e, i) { S[i] = function(e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e)) } }), S.ajaxPrefilter(function(e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), S._evalUrl = function(e, t, n) { return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { S.globalEval(e, t, n) } }) }, S.fn.extend({ wrapAll: function(e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(n) { return m(n) ? this.each(function(e) { S(this).wrapInner(n.call(this, e)) }) : this.each(function() { var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function(t) { var n = m(t); return this.each(function(e) { S(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { S(this).replaceWith(this.childNodes) }), this } }), S.expr.pseudos.hidden = function(e) { return !S.expr.pseudos.visible(e) }, S.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, S.ajaxSettings.xhr = function() { try { return new C.XMLHttpRequest } catch (e) {} }; var _t = { 0: 200, 1223: 204 },
        zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i) { var o, a; if (y.cors || zt && !i.crossDomain) return { send: function(e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() { 4 === r.readyState && C.setTimeout(function() { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function() { o && o() } } }), S.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return S.globalEval(e), e } } }), S.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), S.ajaxTransport("script", function(n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function(e, t) { r = S("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function() { i && i() } } }); var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Xt.pop() || S.expando + "_" + Ct.guid++; return this[e] = !0, e } }), S.ajaxPrefilter("json jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || S.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function() { o = arguments }, n.always(function() { void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes))); var r, i, o }, S.fn.load = function(e, t, n) { var r, i, o, a = this,
            s = e.indexOf(" "); return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this }, S.expr.pseudos.animated = function(t) { return S.grep(S.timers, function(e) { return t === e.elem }).length }, S.offset = { setOffset: function(e, t, n) { var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f)) } }, S.fn.extend({ offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { S.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var e, t, n, r = this[0],
                    i = { top: 0, left: 0 }; if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === S.css(e, "position")) e = e.offsetParent; return e || re }) } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) { var o = "pageYOffset" === i;
        S.fn[t] = function(e) { return $(this, function(e, t, n) { var r; if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), S.each(["top", "left"], function(e, n) { S.cssHooks[n] = $e(y.pixelPosition, function(e, t) { if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t }) }), S.each({ Height: "height", Width: "width" }, function(a, s) { S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) { S.fn[o] = function(e, t) { var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border"); return $(this, function(e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { S.fn[t] = function(e) { return this.on(t, e) } }), S.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { S.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }); var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || S.guid++, i }, S.holdReady = function(e) { e ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) { var t = S.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, S.trim = function(e) { return null == e ? "" : (e + "").replace(Gt, "") }, "function" == typeof define && define.amd && define("jquery", [], function() { return S }); var Yt = C.jQuery,
        Qt = C.$; return S.noConflict = function(e) { return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S }, "undefined" == typeof e && (C.jQuery = C.$ = S), S });

/*!
 * Bootstrap v4.5.3 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery) }(this, (function(t, e) { "use strict";

    function n(t) { return t && "object" == typeof t && "default" in t ? t : { default: t } } var i = n(e);

    function o(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } }

    function r(t, e, n) { return e && o(t.prototype, e), n && o(t, n), t }

    function a() { return (a = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t }).apply(this, arguments) }

    function s(t) { var e = this,
            n = !1; return i.default(this).one(l.TRANSITION_END, (function() { n = !0 })), setTimeout((function() { n || l.triggerTransitionEnd(e) }), t), this } var l = { TRANSITION_END: "bsTransitionEnd", getUID: function(t) { do { t += ~~(1e6 * Math.random()) } while (document.getElementById(t)); return t }, getSelectorFromElement: function(t) { var e = t.getAttribute("data-target"); if (!e || "#" === e) { var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "" } try { return document.querySelector(e) ? e : null } catch (t) { return null } }, getTransitionDurationFromElement: function(t) { if (!t) return 0; var e = i.default(t).css("transition-duration"),
                n = i.default(t).css("transition-delay"),
                o = parseFloat(e),
                r = parseFloat(n); return o || r ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0 }, reflow: function(t) { return t.offsetHeight }, triggerTransitionEnd: function(t) { i.default(t).trigger("transitionend") }, supportsTransitionEnd: function() { return Boolean("transitionend") }, isElement: function(t) { return (t[0] || t).nodeType }, typeCheckConfig: function(t, e, n) { for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) { var o = n[i],
                        r = e[i],
                        a = r && l.isElement(r) ? "element" : null === (s = r) || "undefined" == typeof s ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase(); if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".') }
            var s }, findShadowRoot: function(t) { if (!document.documentElement.attachShadow) return null; if ("function" == typeof t.getRootNode) { var e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } return t instanceof ShadowRoot ? t : t.parentNode ? l.findShadowRoot(t.parentNode) : null }, jQueryDetection: function() { if ("undefined" == typeof i.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var t = i.default.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") } };
    l.jQueryDetection(), i.default.fn.emulateTransitionEnd = s, i.default.event.special[l.TRANSITION_END] = { bindType: "transitionend", delegateType: "transitionend", handle: function(t) { if (i.default(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }; var u = "alert",
        f = i.default.fn[u],
        d = function() {
            function t(t) { this._element = t } var e = t.prototype; return e.close = function(t) { var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, e.dispose = function() { i.default.removeData(this._element, "bs.alert"), this._element = null }, e._getRootElement = function(t) { var e = l.getSelectorFromElement(t),
                    n = !1; return e && (n = document.querySelector(e)), n || (n = i.default(t).closest(".alert")[0]), n }, e._triggerCloseEvent = function(t) { var e = i.default.Event("close.bs.alert"); return i.default(t).trigger(e), e }, e._removeElement = function(t) { var e = this; if (i.default(t).removeClass("show"), i.default(t).hasClass("fade")) { var n = l.getTransitionDurationFromElement(t);
                    i.default(t).one(l.TRANSITION_END, (function(n) { return e._destroyElement(t, n) })).emulateTransitionEnd(n) } else this._destroyElement(t) }, e._destroyElement = function(t) { i.default(t).detach().trigger("closed.bs.alert").remove() }, t._jQueryInterface = function(e) { return this.each((function() { var n = i.default(this),
                        o = n.data("bs.alert");
                    o || (o = new t(this), n.data("bs.alert", o)), "close" === e && o[e](this) })) }, t._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }]), t }();
    i.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', d._handleDismiss(new d)), i.default.fn[u] = d._jQueryInterface, i.default.fn[u].Constructor = d, i.default.fn[u].noConflict = function() { return i.default.fn[u] = f, d._jQueryInterface }; var c = i.default.fn.button,
        h = function() {
            function t(t) { this._element = t, this.shouldAvoidTriggerChange = !1 } var e = t.prototype; return e.toggle = function() { var t = !0,
                    e = !0,
                    n = i.default(this._element).closest('[data-toggle="buttons"]')[0]; if (n) { var o = this._element.querySelector('input:not([type="hidden"])'); if (o) { if ("radio" === o.type)
                            if (o.checked && this._element.classList.contains("active")) t = !1;
                            else { var r = n.querySelector(".active");
                                r && i.default(r).removeClass("active") }
                        t && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || i.default(o).trigger("change")), o.focus(), e = !1 } }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && i.default(this._element).toggleClass("active")) }, e.dispose = function() { i.default.removeData(this._element, "bs.button"), this._element = null }, t._jQueryInterface = function(e, n) { return this.each((function() { var o = i.default(this),
                        r = o.data("bs.button");
                    r || (r = new t(this), o.data("bs.button", r)), r.shouldAvoidTriggerChange = n, "toggle" === e && r[e]() })) }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }]), t }();
    i.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(t) { var e = t.target,
            n = e; if (i.default(e).hasClass("btn") || (e = i.default(e).closest(".btn")[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();
        else { var o = e.querySelector('input:not([type="hidden"])'); if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void t.preventDefault(); "INPUT" !== n.tagName && "LABEL" === e.tagName || h._jQueryInterface.call(i.default(e), "toggle", "INPUT" === n.tagName) } })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(t) { var e = i.default(t.target).closest(".btn")[0];
        i.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type)) })), i.default(window).on("load.bs.button.data-api", (function() { for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) { var i = t[e],
                o = i.querySelector('input:not([type="hidden"])');
            o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active") } for (var r = 0, a = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < a; r++) { var s = t[r]; "true" === s.getAttribute("aria-pressed") ? s.classList.add("active") : s.classList.remove("active") } })), i.default.fn.button = h._jQueryInterface, i.default.fn.button.Constructor = h, i.default.fn.button.noConflict = function() { return i.default.fn.button = c, h._jQueryInterface }; var p = "carousel",
        m = ".bs.carousel",
        g = i.default.fn[p],
        v = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        _ = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        b = { TOUCH: "touch", PEN: "pen" },
        y = function() {
            function t(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() } var e = t.prototype; return e.next = function() { this._isSliding || this._slide("next") }, e.nextWhenVisible = function() { var t = i.default(this._element);!document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next() }, e.prev = function() { this._isSliding || this._slide("prev") }, e.pause = function(t) { t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (l.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, e.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, e.to = function(t) { var e = this;
                this._activeElement = this._element.querySelector(".active.carousel-item"); var n = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) i.default(this._element).one("slid.bs.carousel", (function() { return e.to(t) }));
                    else { if (n === t) return this.pause(), void this.cycle(); var o = t > n ? "next" : "prev";
                        this._slide(o, this._items[t]) } }, e.dispose = function() { i.default(this._element).off(m), i.default.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, e._getConfig = function(t) { return t = a({}, v, t), l.typeCheckConfig(p, t, _), t }, e._handleSwipe = function() { var t = Math.abs(this.touchDeltaX); if (!(t <= 40)) { var e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next() } }, e._addEventListeners = function() { var t = this;
                this._config.keyboard && i.default(this._element).on("keydown.bs.carousel", (function(e) { return t._keydown(e) })), "hover" === this._config.pause && i.default(this._element).on("mouseenter.bs.carousel", (function(e) { return t.pause(e) })).on("mouseleave.bs.carousel", (function(e) { return t.cycle(e) })), this._config.touch && this._addTouchEventListeners() }, e._addTouchEventListeners = function() { var t = this; if (this._touchSupported) { var e = function(e) { t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX) },
                        n = function(e) { t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) { return t.cycle(e) }), 500 + t._config.interval)) };
                    i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(t) { return t.preventDefault() })), this._pointerEvent ? (i.default(this._element).on("pointerdown.bs.carousel", (function(t) { return e(t) })), i.default(this._element).on("pointerup.bs.carousel", (function(t) { return n(t) })), this._element.classList.add("pointer-event")) : (i.default(this._element).on("touchstart.bs.carousel", (function(t) { return e(t) })), i.default(this._element).on("touchmove.bs.carousel", (function(e) { return function(e) { e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX }(e) })), i.default(this._element).on("touchend.bs.carousel", (function(t) { return n(t) }))) } }, e._keydown = function(t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev(); break;
                    case 39:
                        t.preventDefault(), this.next() } }, e._getItemIndex = function(t) { return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t) }, e._getItemByDirection = function(t, e) { var n = "next" === t,
                    i = "prev" === t,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1; if ((i && 0 === o || n && o === r) && !this._config.wrap) return e; var a = (o + ("prev" === t ? -1 : 1)) % this._items.length; return -1 === a ? this._items[this._items.length - 1] : this._items[a] }, e._triggerSlideEvent = function(t, e) { var n = this._getItemIndex(t),
                    o = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                    r = i.default.Event("slide.bs.carousel", { relatedTarget: t, direction: e, from: o, to: n }); return i.default(this._element).trigger(r), r }, e._setActiveIndicatorElement = function(t) { if (this._indicatorsElement) { var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    i.default(e).removeClass("active"); var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && i.default(n).addClass("active") } }, e._slide = function(t, e) { var n, o, r, a = this,
                    s = this._element.querySelector(".active.carousel-item"),
                    u = this._getItemIndex(s),
                    f = e || s && this._getItemByDirection(t, s),
                    d = this._getItemIndex(f),
                    c = Boolean(this._interval); if ("next" === t ? (n = "carousel-item-left", o = "carousel-item-next", r = "left") : (n = "carousel-item-right", o = "carousel-item-prev", r = "right"), f && i.default(f).hasClass("active")) this._isSliding = !1;
                else if (!this._triggerSlideEvent(f, r).isDefaultPrevented() && s && f) { this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(f); var h = i.default.Event("slid.bs.carousel", { relatedTarget: f, direction: r, from: u, to: d }); if (i.default(this._element).hasClass("slide")) { i.default(f).addClass(o), l.reflow(f), i.default(s).addClass(n), i.default(f).addClass(n); var p = parseInt(f.getAttribute("data-interval"), 10);
                        p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval; var m = l.getTransitionDurationFromElement(s);
                        i.default(s).one(l.TRANSITION_END, (function() { i.default(f).removeClass(n + " " + o).addClass("active"), i.default(s).removeClass("active " + o + " " + n), a._isSliding = !1, setTimeout((function() { return i.default(a._element).trigger(h) }), 0) })).emulateTransitionEnd(m) } else i.default(s).removeClass("active"), i.default(f).addClass("active"), this._isSliding = !1, i.default(this._element).trigger(h);
                    c && this.cycle() } }, t._jQueryInterface = function(e) { return this.each((function() { var n = i.default(this).data("bs.carousel"),
                        o = a({}, v, i.default(this).data()); "object" == typeof e && (o = a({}, o, e)); var r = "string" == typeof e ? e : o.slide; if (n || (n = new t(this, o), i.default(this).data("bs.carousel", n)), "number" == typeof e) n.to(e);
                    else if ("string" == typeof r) { if ("undefined" == typeof n[r]) throw new TypeError('No method named "' + r + '"');
                        n[r]() } else o.interval && o.ride && (n.pause(), n.cycle()) })) }, t._dataApiClickHandler = function(e) { var n = l.getSelectorFromElement(this); if (n) { var o = i.default(n)[0]; if (o && i.default(o).hasClass("carousel")) { var r = a({}, i.default(o).data(), i.default(this).data()),
                            s = this.getAttribute("data-slide-to");
                        s && (r.interval = !1), t._jQueryInterface.call(i.default(o), r), s && i.default(o).data("bs.carousel").to(s), e.preventDefault() } } }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return v } }]), t }();
    i.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", y._dataApiClickHandler), i.default(window).on("load.bs.carousel.data-api", (function() { for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++) { var o = i.default(t[e]);
            y._jQueryInterface.call(o, o.data()) } })), i.default.fn[p] = y._jQueryInterface, i.default.fn[p].Constructor = y, i.default.fn[p].noConflict = function() { return i.default.fn[p] = g, y._jQueryInterface }; var w = "collapse",
        E = i.default.fn[w],
        T = { toggle: !0, parent: "" },
        C = { toggle: "boolean", parent: "(string|element)" },
        S = function() {
            function t(t, e) { this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')); for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) { var r = n[i],
                        a = l.getSelectorFromElement(r),
                        s = [].slice.call(document.querySelectorAll(a)).filter((function(e) { return e === t }));
                    null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(r)) }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var e = t.prototype; return e.toggle = function() { i.default(this._element).hasClass("show") ? this.hide() : this.show() }, e.show = function() { var e, n, o = this; if (!this._isTransitioning && !i.default(this._element).hasClass("show") && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t) { return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains("collapse") }))).length && (e = null), !(e && (n = i.default(e).not(this._selector).data("bs.collapse")) && n._isTransitioning))) { var r = i.default.Event("show.bs.collapse"); if (i.default(this._element).trigger(r), !r.isDefaultPrevented()) { e && (t._jQueryInterface.call(i.default(e).not(this._selector), "hide"), n || i.default(e).data("bs.collapse", null)); var a = this._getDimension();
                        i.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[a] = 0, this._triggerArray.length && i.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0); var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                            u = l.getTransitionDurationFromElement(this._element);
                        i.default(this._element).one(l.TRANSITION_END, (function() { i.default(o._element).removeClass("collapsing").addClass("collapse show"), o._element.style[a] = "", o.setTransitioning(!1), i.default(o._element).trigger("shown.bs.collapse") })).emulateTransitionEnd(u), this._element.style[a] = this._element[s] + "px" } } }, e.hide = function() { var t = this; if (!this._isTransitioning && i.default(this._element).hasClass("show")) { var e = i.default.Event("hide.bs.collapse"); if (i.default(this._element).trigger(e), !e.isDefaultPrevented()) { var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", l.reflow(this._element), i.default(this._element).addClass("collapsing").removeClass("collapse show"); var o = this._triggerArray.length; if (o > 0)
                            for (var r = 0; r < o; r++) { var a = this._triggerArray[r],
                                    s = l.getSelectorFromElement(a); if (null !== s) i.default([].slice.call(document.querySelectorAll(s))).hasClass("show") || i.default(a).addClass("collapsed").attr("aria-expanded", !1) }
                        this.setTransitioning(!0);
                        this._element.style[n] = ""; var u = l.getTransitionDurationFromElement(this._element);
                        i.default(this._element).one(l.TRANSITION_END, (function() { t.setTransitioning(!1), i.default(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") })).emulateTransitionEnd(u) } } }, e.setTransitioning = function(t) { this._isTransitioning = t }, e.dispose = function() { i.default.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, e._getConfig = function(t) { return (t = a({}, T, t)).toggle = Boolean(t.toggle), l.typeCheckConfig(w, t, C), t }, e._getDimension = function() { return i.default(this._element).hasClass("width") ? "width" : "height" }, e._getParent = function() { var e, n = this;
                l.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent); var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    r = [].slice.call(e.querySelectorAll(o)); return i.default(r).each((function(e, i) { n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]) })), e }, e._addAriaAndCollapsedClass = function(t, e) { var n = i.default(t).hasClass("show");
                e.length && i.default(e).toggleClass("collapsed", !n).attr("aria-expanded", n) }, t._getTargetFromElement = function(t) { var e = l.getSelectorFromElement(t); return e ? document.querySelector(e) : null }, t._jQueryInterface = function(e) { return this.each((function() { var n = i.default(this),
                        o = n.data("bs.collapse"),
                        r = a({}, T, n.data(), "object" == typeof e && e ? e : {}); if (!o && r.toggle && "string" == typeof e && /show|hide/.test(e) && (r.toggle = !1), o || (o = new t(this, r), n.data("bs.collapse", o)), "string" == typeof e) { if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e]() } })) }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return T } }]), t }();
    i.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(t) { "A" === t.currentTarget.tagName && t.preventDefault(); var e = i.default(this),
            n = l.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(n));
        i.default(o).each((function() { var t = i.default(this),
                n = t.data("bs.collapse") ? "toggle" : e.data();
            S._jQueryInterface.call(t, n) })) })), i.default.fn[w] = S._jQueryInterface, i.default.fn[w].Constructor = S, i.default.fn[w].noConflict = function() { return i.default.fn[w] = E, S._jQueryInterface }; var D = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        N = function() { for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
                if (D && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
            return 0 }(); var k = D && window.Promise ? function(t) { var e = !1; return function() { e || (e = !0, window.Promise.resolve().then((function() { e = !1, t() }))) } } : function(t) { var e = !1; return function() { e || (e = !0, setTimeout((function() { e = !1, t() }), N)) } };

    function A(t) { return t && "[object Function]" === {}.toString.call(t) }

    function I(t, e) { if (1 !== t.nodeType) return []; var n = t.ownerDocument.defaultView.getComputedStyle(t, null); return e ? n[e] : n }

    function O(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host }

    function x(t) { if (!t) return document.body; switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body } var e = I(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY; return /(auto|scroll|overlay)/.test(n + o + i) ? t : x(O(t)) }

    function j(t) { return t && t.referenceNode ? t.referenceNode : t } var L = D && !(!window.MSInputMethodContext || !document.documentMode),
        P = D && /MSIE 10/.test(navigator.userAgent);

    function F(t) { return 11 === t ? L : 10 === t ? P : L || P }

    function R(t) { if (!t) return document.documentElement; for (var e = F(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === I(n, "position") ? R(n) : n : t ? t.ownerDocument.documentElement : document.documentElement }

    function H(t) { return null !== t.parentNode ? H(t.parentNode) : t }

    function M(t, e) { if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement; var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            o = n ? e : t,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0); var a, s, l = r.commonAncestorContainer; if (t !== l && e !== l || i.contains(o)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && R(a.firstElementChild) !== a ? R(l) : l; var u = H(t); return u.host ? M(u.host, e) : M(t, H(e).host) }

    function B(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === e ? "scrollTop" : "scrollLeft",
            i = t.nodeName; if ("BODY" === i || "HTML" === i) { var o = t.ownerDocument.documentElement,
                r = t.ownerDocument.scrollingElement || o; return r[n] } return t[n] }

    function q(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = B(e, "top"),
            o = B(e, "left"),
            r = n ? -1 : 1; return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t }

    function Q(t, e) { var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom"; return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"]) }

    function W(t, e, n, i) { return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], F(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0) }

    function U(t) { var e = t.body,
            n = t.documentElement,
            i = F(10) && getComputedStyle(n); return { height: W("Height", e, n, i), width: W("Width", e, n, i) } } var V = function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") },
        Y = function() {
            function t(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e } }(),
        z = function(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t },
        X = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t };

    function K(t) { return X({}, t, { right: t.left + t.width, bottom: t.top + t.height }) }

    function G(t) { var e = {}; try { if (F(10)) { e = t.getBoundingClientRect(); var n = B(t, "top"),
                    i = B(t, "left");
                e.top += n, e.left += i, e.bottom += n, e.right += i } else e = t.getBoundingClientRect() } catch (t) {} var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
            r = "HTML" === t.nodeName ? U(t.ownerDocument) : {},
            a = r.width || t.clientWidth || o.width,
            s = r.height || t.clientHeight || o.height,
            l = t.offsetWidth - a,
            u = t.offsetHeight - s; if (l || u) { var f = I(t);
            l -= Q(f, "x"), u -= Q(f, "y"), o.width -= l, o.height -= u } return K(o) }

    function $(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = F(10),
            o = "HTML" === e.nodeName,
            r = G(t),
            a = G(e),
            s = x(t),
            l = I(e),
            u = parseFloat(l.borderTopWidth),
            f = parseFloat(l.borderLeftWidth);
        n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0)); var d = K({ top: r.top - a.top - u, left: r.left - a.left - f, width: r.width, height: r.height }); if (d.marginTop = 0, d.marginLeft = 0, !i && o) { var c = parseFloat(l.marginTop),
                h = parseFloat(l.marginLeft);
            d.top -= u - c, d.bottom -= u - c, d.left -= f - h, d.right -= f - h, d.marginTop = c, d.marginLeft = h } return (i && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (d = q(d, e)), d }

    function J(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = t.ownerDocument.documentElement,
            i = $(t, n),
            o = Math.max(n.clientWidth, window.innerWidth || 0),
            r = Math.max(n.clientHeight, window.innerHeight || 0),
            a = e ? 0 : B(n),
            s = e ? 0 : B(n, "left"),
            l = { top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: o, height: r }; return K(l) }

    function Z(t) { var e = t.nodeName; if ("BODY" === e || "HTML" === e) return !1; if ("fixed" === I(t, "position")) return !0; var n = O(t); return !!n && Z(n) }

    function tt(t) { if (!t || !t.parentElement || F()) return document.documentElement; for (var e = t.parentElement; e && "none" === I(e, "transform");) e = e.parentElement; return e || document.documentElement }

    function et(t, e, n, i) { var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = { top: 0, left: 0 },
            a = o ? tt(t) : M(t, j(e)); if ("viewport" === i) r = J(a, o);
        else { var s = void 0; "scrollParent" === i ? "BODY" === (s = x(O(e))).nodeName && (s = t.ownerDocument.documentElement) : s = "window" === i ? t.ownerDocument.documentElement : i; var l = $(s, a, o); if ("HTML" !== s.nodeName || Z(a)) r = l;
            else { var u = U(t.ownerDocument),
                    f = u.height,
                    d = u.width;
                r.top += l.top - l.marginTop, r.bottom = f + l.top, r.left += l.left - l.marginLeft, r.right = d + l.left } } var c = "number" == typeof(n = n || 0); return r.left += c ? n : n.left || 0, r.top += c ? n : n.top || 0, r.right -= c ? n : n.right || 0, r.bottom -= c ? n : n.bottom || 0, r }

    function nt(t) { return t.width * t.height }

    function it(t, e, n, i, o) { var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === t.indexOf("auto")) return t; var a = et(n, i, r, o),
            s = { top: { width: a.width, height: e.top - a.top }, right: { width: a.right - e.right, height: a.height }, bottom: { width: a.width, height: a.bottom - e.bottom }, left: { width: e.left - a.left, height: a.height } },
            l = Object.keys(s).map((function(t) { return X({ key: t }, s[t], { area: nt(s[t]) }) })).sort((function(t, e) { return e.area - t.area })),
            u = l.filter((function(t) { var e = t.width,
                    i = t.height; return e >= n.clientWidth && i >= n.clientHeight })),
            f = u.length > 0 ? u[0].key : l[0].key,
            d = t.split("-")[1]; return f + (d ? "-" + d : "") }

    function ot(t, e, n) { var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            o = i ? tt(e) : M(e, j(n)); return $(n, o, i) }

    function rt(t) { var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0); return { width: t.offsetWidth + i, height: t.offsetHeight + n } }

    function at(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, (function(t) { return e[t] })) }

    function st(t, e, n) { n = n.split("-")[0]; var i = rt(t),
            o = { width: i.width, height: i.height },
            r = -1 !== ["right", "left"].indexOf(n),
            a = r ? "top" : "left",
            s = r ? "left" : "top",
            l = r ? "height" : "width",
            u = r ? "width" : "height"; return o[a] = e[a] + e[l] / 2 - i[l] / 2, o[s] = n === s ? e[s] - i[u] : e[at(s)], o }

    function lt(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] }

    function ut(t, e, n) { return (void 0 === n ? t : t.slice(0, function(t, e, n) { if (Array.prototype.findIndex) return t.findIndex((function(t) { return t[e] === n })); var i = lt(t, (function(t) { return t[e] === n })); return t.indexOf(i) }(t, "name", n))).forEach((function(t) { t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!"); var n = t.function || t.fn;
            t.enabled && A(n) && (e.offsets.popper = K(e.offsets.popper), e.offsets.reference = K(e.offsets.reference), e = n(e, t)) })), e }

    function ft() { if (!this.state.isDestroyed) { var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
            t.offsets.reference = ot(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = it(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = st(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = ut(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t)) } }

    function dt(t, e) { return t.some((function(t) { var n = t.name; return t.enabled && n === e })) }

    function ct(t) { for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) { var o = e[i],
                r = o ? "" + o + n : t; if ("undefined" != typeof document.body.style[r]) return r } return null }

    function ht() { return this.state.isDestroyed = !0, dt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ct("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }

    function pt(t) { var e = t.ownerDocument; return e ? e.defaultView : window }

    function mt(t, e, n, i) { n.updateBound = i, pt(t).addEventListener("resize", n.updateBound, { passive: !0 }); var o = x(t); return function t(e, n, i, o) { var r = "BODY" === e.nodeName,
                a = r ? e.ownerDocument.defaultView : e;
            a.addEventListener(n, i, { passive: !0 }), r || t(x(a.parentNode), n, i, o), o.push(a) }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n }

    function gt() { this.state.eventsEnabled || (this.state = mt(this.reference, this.options, this.state, this.scheduleUpdate)) }

    function vt() { var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, pt(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function(t) { t.removeEventListener("scroll", e.updateBound) })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e)) }

    function _t(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) }

    function bt(t, e) { Object.keys(e).forEach((function(n) { var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && _t(e[n]) && (i = "px"), t.style[n] = e[n] + i })) } var yt = D && /Firefox/i.test(navigator.userAgent);

    function wt(t, e, n) { var i = lt(t, (function(t) { return t.name === e })),
            o = !!i && t.some((function(t) { return t.name === n && t.enabled && t.order < i.order })); if (!o) { var r = "`" + e + "`",
                a = "`" + n + "`";
            console.warn(a + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!") } return o } var Et = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Tt = Et.slice(3);

    function Ct(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Tt.indexOf(t),
            i = Tt.slice(n + 1).concat(Tt.slice(0, n)); return e ? i.reverse() : i } var St = "flip",
        Dt = "clockwise",
        Nt = "counterclockwise";

    function kt(t, e, n, i) { var o = [0, 0],
            r = -1 !== ["right", "left"].indexOf(i),
            a = t.split(/(\+|\-)/).map((function(t) { return t.trim() })),
            s = a.indexOf(lt(a, (function(t) { return -1 !== t.search(/,|\s/) })));
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."); var l = /\s*,\s*|\s+/,
            u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a]; return (u = u.map((function(t, i) { var o = (1 === i ? !r : r) ? "height" : "width",
                a = !1; return t.reduce((function(t, e) { return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e) }), []).map((function(t) { return function(t, e, n, i) { var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        r = +o[1],
                        a = o[2]; if (!r) return t; if (0 === a.indexOf("%")) { var s = void 0; switch (a) {
                            case "%p":
                                s = n; break;
                            case "%":
                            case "%r":
                            default:
                                s = i } return K(s)[e] / 100 * r } if ("vh" === a || "vw" === a) { return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r } return r }(t, o, e, n) })) }))).forEach((function(t, e) { t.forEach((function(n, i) { _t(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1)) })) })), o } var At = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function() {}, onUpdate: function() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function(t) { var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1]; if (i) { var o = t.offsets,
                                r = o.reference,
                                a = o.popper,
                                s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top",
                                u = s ? "width" : "height",
                                f = { start: z({}, l, r[l]), end: z({}, l, r[l] + r[u] - a[u]) };
                            t.offsets.popper = X({}, a, f[i]) } return t } }, offset: { order: 200, enabled: !0, fn: function(t, e) { var n = e.offset,
                            i = t.placement,
                            o = t.offsets,
                            r = o.popper,
                            a = o.reference,
                            s = i.split("-")[0],
                            l = void 0; return l = _t(+n) ? [+n, 0] : kt(n, r, a, s), "left" === s ? (r.top += l[0], r.left -= l[1]) : "right" === s ? (r.top += l[0], r.left += l[1]) : "top" === s ? (r.left += l[0], r.top -= l[1]) : "bottom" === s && (r.left += l[0], r.top += l[1]), t.popper = r, t }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function(t, e) { var n = e.boundariesElement || R(t.instance.popper);
                        t.instance.reference === n && (n = R(n)); var i = ct("transform"),
                            o = t.instance.popper.style,
                            r = o.top,
                            a = o.left,
                            s = o[i];
                        o.top = "", o.left = "", o[i] = ""; var l = et(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                        o.top = r, o.left = a, o[i] = s, e.boundaries = l; var u = e.priority,
                            f = t.offsets.popper,
                            d = { primary: function(t) { var n = f[t]; return f[t] < l[t] && !e.escapeWithReference && (n = Math.max(f[t], l[t])), z({}, t, n) }, secondary: function(t) { var n = "right" === t ? "left" : "top",
                                        i = f[n]; return f[t] > l[t] && !e.escapeWithReference && (i = Math.min(f[n], l[t] - ("right" === t ? f.width : f.height))), z({}, n, i) } }; return u.forEach((function(t) { var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            f = X({}, f, d[e](t)) })), t.offsets.popper = f, t }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function(t) { var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            o = t.placement.split("-")[0],
                            r = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(o),
                            s = a ? "right" : "bottom",
                            l = a ? "left" : "top",
                            u = a ? "width" : "height"; return n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]), n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])), t } }, arrow: { order: 500, enabled: !0, fn: function(t, e) { var n; if (!wt(t.instance.modifiers, "arrow", "keepTogether")) return t; var i = e.element; if ("string" == typeof i) { if (!(i = t.instance.popper.querySelector(i))) return t } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t; var o = t.placement.split("-")[0],
                            r = t.offsets,
                            a = r.popper,
                            s = r.reference,
                            l = -1 !== ["left", "right"].indexOf(o),
                            u = l ? "height" : "width",
                            f = l ? "Top" : "Left",
                            d = f.toLowerCase(),
                            c = l ? "left" : "top",
                            h = l ? "bottom" : "right",
                            p = rt(i)[u];
                        s[h] - p < a[d] && (t.offsets.popper[d] -= a[d] - (s[h] - p)), s[d] + p > a[h] && (t.offsets.popper[d] += s[d] + p - a[h]), t.offsets.popper = K(t.offsets.popper); var m = s[d] + s[u] / 2 - p / 2,
                            g = I(t.instance.popper),
                            v = parseFloat(g["margin" + f]),
                            _ = parseFloat(g["border" + f + "Width"]),
                            b = m - t.offsets.popper[d] - v - _; return b = Math.max(Math.min(a[u] - p, b), 0), t.arrowElement = i, t.offsets.arrow = (z(n = {}, d, Math.round(b)), z(n, c, ""), n), t }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function(t, e) { if (dt(t.instance.modifiers, "inner")) return t; if (t.flipped && t.placement === t.originalPlacement) return t; var n = et(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            i = t.placement.split("-")[0],
                            o = at(i),
                            r = t.placement.split("-")[1] || "",
                            a = []; switch (e.behavior) {
                            case St:
                                a = [i, o]; break;
                            case Dt:
                                a = Ct(i); break;
                            case Nt:
                                a = Ct(i, !0); break;
                            default:
                                a = e.behavior } return a.forEach((function(s, l) { if (i !== s || a.length === l + 1) return t;
                            i = t.placement.split("-")[0], o = at(i); var u = t.offsets.popper,
                                f = t.offsets.reference,
                                d = Math.floor,
                                c = "left" === i && d(u.right) > d(f.left) || "right" === i && d(u.left) < d(f.right) || "top" === i && d(u.bottom) > d(f.top) || "bottom" === i && d(u.top) < d(f.bottom),
                                h = d(u.left) < d(n.left),
                                p = d(u.right) > d(n.right),
                                m = d(u.top) < d(n.top),
                                g = d(u.bottom) > d(n.bottom),
                                v = "left" === i && h || "right" === i && p || "top" === i && m || "bottom" === i && g,
                                _ = -1 !== ["top", "bottom"].indexOf(i),
                                b = !!e.flipVariations && (_ && "start" === r && h || _ && "end" === r && p || !_ && "start" === r && m || !_ && "end" === r && g),
                                y = !!e.flipVariationsByContent && (_ && "start" === r && p || _ && "end" === r && h || !_ && "start" === r && g || !_ && "end" === r && m),
                                w = b || y;
                            (c || v || w) && (t.flipped = !0, (c || v) && (i = a[l + 1]), w && (r = function(t) { return "end" === t ? "start" : "start" === t ? "end" : t }(r)), t.placement = i + (r ? "-" + r : ""), t.offsets.popper = X({}, t.offsets.popper, st(t.instance.popper, t.offsets.reference, t.placement)), t = ut(t.instance.modifiers, t, "flip")) })), t }, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: !1, flipVariationsByContent: !1 }, inner: { order: 700, enabled: !1, fn: function(t) { var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            o = i.popper,
                            r = i.reference,
                            a = -1 !== ["left", "right"].indexOf(n),
                            s = -1 === ["top", "left"].indexOf(n); return o[a ? "left" : "top"] = r[n] - (s ? o[a ? "width" : "height"] : 0), t.placement = at(e), t.offsets.popper = K(o), t } }, hide: { order: 800, enabled: !0, fn: function(t) { if (!wt(t.instance.modifiers, "hide", "preventOverflow")) return t; var e = t.offsets.reference,
                            n = lt(t.instance.modifiers, (function(t) { return "preventOverflow" === t.name })).boundaries; if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) { if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = "" } else { if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1 } return t } }, computeStyle: { order: 850, enabled: !0, fn: function(t, e) { var n = e.x,
                            i = e.y,
                            o = t.offsets.popper,
                            r = lt(t.instance.modifiers, (function(t) { return "applyStyle" === t.name })).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"); var a = void 0 !== r ? r : e.gpuAcceleration,
                            s = R(t.instance.popper),
                            l = G(s),
                            u = { position: o.position },
                            f = function(t, e) { var n = t.offsets,
                                    i = n.popper,
                                    o = n.reference,
                                    r = Math.round,
                                    a = Math.floor,
                                    s = function(t) { return t },
                                    l = r(o.width),
                                    u = r(i.width),
                                    f = -1 !== ["left", "right"].indexOf(t.placement),
                                    d = -1 !== t.placement.indexOf("-"),
                                    c = e ? f || d || l % 2 == u % 2 ? r : a : s,
                                    h = e ? r : s; return { left: c(l % 2 == 1 && u % 2 == 1 && !d && e ? i.left - 1 : i.left), top: h(i.top), bottom: h(i.bottom), right: c(i.right) } }(t, window.devicePixelRatio < 2 || !yt),
                            d = "bottom" === n ? "top" : "bottom",
                            c = "right" === i ? "left" : "right",
                            h = ct("transform"),
                            p = void 0,
                            m = void 0; if (m = "bottom" === d ? "HTML" === s.nodeName ? -s.clientHeight + f.bottom : -l.height + f.bottom : f.top, p = "right" === c ? "HTML" === s.nodeName ? -s.clientWidth + f.right : -l.width + f.right : f.left, a && h) u[h] = "translate3d(" + p + "px, " + m + "px, 0)", u[d] = 0, u[c] = 0, u.willChange = "transform";
                        else { var g = "bottom" === d ? -1 : 1,
                                v = "right" === c ? -1 : 1;
                            u[d] = m * g, u[c] = p * v, u.willChange = d + ", " + c } var _ = { "x-placement": t.placement }; return t.attributes = X({}, _, t.attributes), t.styles = X({}, u, t.styles), t.arrowStyles = X({}, t.offsets.arrow, t.arrowStyles), t }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function(t) { var e, n; return bt(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach((function(t) {!1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t) })), t.arrowElement && Object.keys(t.arrowStyles).length && bt(t.arrowElement, t.arrowStyles), t }, onLoad: function(t, e, n, i, o) { var r = ot(o, e, t, n.positionFixed),
                            a = it(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding); return e.setAttribute("x-placement", a), bt(e, { position: n.positionFixed ? "fixed" : "absolute" }), n }, gpuAcceleration: void 0 } } },
        It = function() {
            function t(e, n) { var i = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                V(this, t), this.scheduleUpdate = function() { return requestAnimationFrame(i.update) }, this.update = k(this.update.bind(this)), this.options = X({}, t.Defaults, o), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(X({}, t.Defaults.modifiers, o.modifiers)).forEach((function(e) { i.options.modifiers[e] = X({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {}) })), this.modifiers = Object.keys(this.options.modifiers).map((function(t) { return X({ name: t }, i.options.modifiers[t]) })).sort((function(t, e) { return t.order - e.order })), this.modifiers.forEach((function(t) { t.enabled && A(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state) })), this.update(); var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r } return Y(t, [{ key: "update", value: function() { return ft.call(this) } }, { key: "destroy", value: function() { return ht.call(this) } }, { key: "enableEventListeners", value: function() { return gt.call(this) } }, { key: "disableEventListeners", value: function() { return vt.call(this) } }]), t }();
    It.Utils = ("undefined" != typeof window ? window : global).PopperUtils, It.placements = Et, It.Defaults = At; var Ot = "dropdown",
        xt = i.default.fn[Ot],
        jt = new RegExp("38|40|27"),
        Lt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
        Pt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
        Ft = function() {
            function t(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var e = t.prototype; return e.toggle = function() { if (!this._element.disabled && !i.default(this._element).hasClass("disabled")) { var e = i.default(this._menu).hasClass("show");
                    t._clearMenus(), e || this.show(!0) } }, e.show = function(e) { if (void 0 === e && (e = !1), !(this._element.disabled || i.default(this._element).hasClass("disabled") || i.default(this._menu).hasClass("show"))) { var n = { relatedTarget: this._element },
                        o = i.default.Event("show.bs.dropdown", n),
                        r = t._getParentFromElement(this._element); if (i.default(r).trigger(o), !o.isDefaultPrevented()) { if (!this._inNavbar && e) { if ("undefined" == typeof It) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var a = this._element; "parent" === this._config.reference ? a = r : l.isElement(this._config.reference) && (a = this._config.reference, "undefined" != typeof this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && i.default(r).addClass("position-static"), this._popper = new It(a, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === i.default(r).closest(".navbar-nav").length && i.default(document.body).children().on("mouseover", null, i.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), i.default(this._menu).toggleClass("show"), i.default(r).toggleClass("show").trigger(i.default.Event("shown.bs.dropdown", n)) } } }, e.hide = function() { if (!this._element.disabled && !i.default(this._element).hasClass("disabled") && i.default(this._menu).hasClass("show")) { var e = { relatedTarget: this._element },
                        n = i.default.Event("hide.bs.dropdown", e),
                        o = t._getParentFromElement(this._element);
                    i.default(o).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), i.default(this._menu).toggleClass("show"), i.default(o).toggleClass("show").trigger(i.default.Event("hidden.bs.dropdown", e))) } }, e.dispose = function() { i.default.removeData(this._element, "bs.dropdown"), i.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null) }, e.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, e._addEventListeners = function() { var t = this;
                i.default(this._element).on("click.bs.dropdown", (function(e) { e.preventDefault(), e.stopPropagation(), t.toggle() })) }, e._getConfig = function(t) { return t = a({}, this.constructor.Default, i.default(this._element).data(), t), l.typeCheckConfig(Ot, t, this.constructor.DefaultType), t }, e._getMenuElement = function() { if (!this._menu) { var e = t._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(".dropdown-menu")) } return this._menu }, e._getPlacement = function() { var t = i.default(this._element.parentNode),
                    e = "bottom-start"; return t.hasClass("dropup") ? e = i.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : i.default(this._menu).hasClass("dropdown-menu-right") && (e = "bottom-end"), e }, e._detectNavbar = function() { return i.default(this._element).closest(".navbar").length > 0 }, e._getOffset = function() { var t = this,
                    e = {}; return "function" == typeof this._config.offset ? e.fn = function(e) { return e.offsets = a({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e } : e.offset = this._config.offset, e }, e._getPopperConfig = function() { var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), a({}, t, this._config.popperConfig) }, t._jQueryInterface = function(e) { return this.each((function() { var n = i.default(this).data("bs.dropdown"); if (n || (n = new t(this, "object" == typeof e ? e : null), i.default(this).data("bs.dropdown", n)), "string" == typeof e) { if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]() } })) }, t._clearMenus = function(e) { if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, r = n.length; o < r; o++) { var a = t._getParentFromElement(n[o]),
                            s = i.default(n[o]).data("bs.dropdown"),
                            l = { relatedTarget: n[o] }; if (e && "click" === e.type && (l.clickEvent = e), s) { var u = s._menu; if (i.default(a).hasClass("show") && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && i.default.contains(a, e.target))) { var f = i.default.Event("hide.bs.dropdown", l);
                                i.default(a).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), n[o].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), i.default(u).removeClass("show"), i.default(a).removeClass("show").trigger(i.default.Event("hidden.bs.dropdown", l))) } } } }, t._getParentFromElement = function(t) { var e, n = l.getSelectorFromElement(t); return n && (e = document.querySelector(n)), e || t.parentNode }, t._dataApiKeydownHandler = function(e) { if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || i.default(e.target).closest(".dropdown-menu").length) : !jt.test(e.which)) && !this.disabled && !i.default(this).hasClass("disabled")) { var n = t._getParentFromElement(this),
                        o = i.default(n).hasClass("show"); if (o || 27 !== e.which) { if (e.preventDefault(), e.stopPropagation(), !o || 27 === e.which || 32 === e.which) return 27 === e.which && i.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void i.default(this).trigger("click"); var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t) { return i.default(t).is(":visible") })); if (0 !== r.length) { var a = r.indexOf(e.target);
                            38 === e.which && a > 0 && a--, 40 === e.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus() } } } }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return Lt } }, { key: "DefaultType", get: function() { return Pt } }]), t }();
    i.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', Ft._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Ft._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Ft._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function(t) { t.preventDefault(), t.stopPropagation(), Ft._jQueryInterface.call(i.default(this), "toggle") })).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) { t.stopPropagation() })), i.default.fn[Ot] = Ft._jQueryInterface, i.default.fn[Ot].Constructor = Ft, i.default.fn[Ot].noConflict = function() { return i.default.fn[Ot] = xt, Ft._jQueryInterface }; var Rt = i.default.fn.modal,
        Ht = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        Mt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        Bt = function() {
            function t(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 } var e = t.prototype; return e.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, e.show = function(t) { var e = this; if (!this._isShown && !this._isTransitioning) { i.default(this._element).hasClass("fade") && (this._isTransitioning = !0); var n = i.default.Event("show.bs.modal", { relatedTarget: t });
                    i.default(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), i.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function(t) { return e.hide(t) })), i.default(this._dialog).on("mousedown.dismiss.bs.modal", (function() { i.default(e._element).one("mouseup.dismiss.bs.modal", (function(t) { i.default(t.target).is(e._element) && (e._ignoreBackdropClick = !0) })) })), this._showBackdrop((function() { return e._showElement(t) }))) } }, e.hide = function(t) { var e = this; if (t && t.preventDefault(), this._isShown && !this._isTransitioning) { var n = i.default.Event("hide.bs.modal"); if (i.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) { this._isShown = !1; var o = i.default(this._element).hasClass("fade"); if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), i.default(document).off("focusin.bs.modal"), i.default(this._element).removeClass("show"), i.default(this._element).off("click.dismiss.bs.modal"), i.default(this._dialog).off("mousedown.dismiss.bs.modal"), o) { var r = l.getTransitionDurationFromElement(this._element);
                            i.default(this._element).one(l.TRANSITION_END, (function(t) { return e._hideModal(t) })).emulateTransitionEnd(r) } else this._hideModal() } } }, e.dispose = function() {
                [window, this._element, this._dialog].forEach((function(t) { return i.default(t).off(".bs.modal") })), i.default(document).off("focusin.bs.modal"), i.default.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null }, e.handleUpdate = function() { this._adjustDialog() }, e._getConfig = function(t) { return t = a({}, Ht, t), l.typeCheckConfig("modal", t, Mt), t }, e._triggerBackdropTransition = function() { var t = this; if ("static" === this._config.backdrop) { var e = i.default.Event("hidePrevented.bs.modal"); if (i.default(this._element).trigger(e), e.isDefaultPrevented()) return; var n = this._element.scrollHeight > document.documentElement.clientHeight;
                    n || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static"); var o = l.getTransitionDurationFromElement(this._dialog);
                    i.default(this._element).off(l.TRANSITION_END), i.default(this._element).one(l.TRANSITION_END, (function() { t._element.classList.remove("modal-static"), n || i.default(t._element).one(l.TRANSITION_END, (function() { t._element.style.overflowY = "" })).emulateTransitionEnd(t._element, o) })).emulateTransitionEnd(o), this._element.focus() } else this.hide() }, e._showElement = function(t) { var e = this,
                    n = i.default(this._element).hasClass("fade"),
                    o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), i.default(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, n && l.reflow(this._element), i.default(this._element).addClass("show"), this._config.focus && this._enforceFocus(); var r = i.default.Event("shown.bs.modal", { relatedTarget: t }),
                    a = function() { e._config.focus && e._element.focus(), e._isTransitioning = !1, i.default(e._element).trigger(r) }; if (n) { var s = l.getTransitionDurationFromElement(this._dialog);
                    i.default(this._dialog).one(l.TRANSITION_END, a).emulateTransitionEnd(s) } else a() }, e._enforceFocus = function() { var t = this;
                i.default(document).off("focusin.bs.modal").on("focusin.bs.modal", (function(e) { document !== e.target && t._element !== e.target && 0 === i.default(t._element).has(e.target).length && t._element.focus() })) }, e._setEscapeEvent = function() { var t = this;
                this._isShown ? i.default(this._element).on("keydown.dismiss.bs.modal", (function(e) { t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition() })) : this._isShown || i.default(this._element).off("keydown.dismiss.bs.modal") }, e._setResizeEvent = function() { var t = this;
                this._isShown ? i.default(window).on("resize.bs.modal", (function(e) { return t.handleUpdate(e) })) : i.default(window).off("resize.bs.modal") }, e._hideModal = function() { var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() { i.default(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), i.default(t._element).trigger("hidden.bs.modal") })) }, e._removeBackdrop = function() { this._backdrop && (i.default(this._backdrop).remove(), this._backdrop = null) }, e._showBackdrop = function(t) { var e = this,
                    n = i.default(this._element).hasClass("fade") ? "fade" : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), i.default(this._backdrop).appendTo(document.body), i.default(this._element).on("click.dismiss.bs.modal", (function(t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition() })), n && l.reflow(this._backdrop), i.default(this._backdrop).addClass("show"), !t) return; if (!n) return void t(); var o = l.getTransitionDurationFromElement(this._backdrop);
                    i.default(this._backdrop).one(l.TRANSITION_END, t).emulateTransitionEnd(o) } else if (!this._isShown && this._backdrop) { i.default(this._backdrop).removeClass("show"); var r = function() { e._removeBackdrop(), t && t() }; if (i.default(this._element).hasClass("fade")) { var a = l.getTransitionDurationFromElement(this._backdrop);
                        i.default(this._backdrop).one(l.TRANSITION_END, r).emulateTransitionEnd(a) } else r() } else t && t() }, e._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, e._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, e._checkScrollbar = function() { var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, e._setScrollbar = function() { var t = this; if (this._isBodyOverflowing) { var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                        n = [].slice.call(document.querySelectorAll(".sticky-top"));
                    i.default(e).each((function(e, n) { var o = n.style.paddingRight,
                            r = i.default(n).css("padding-right");
                        i.default(n).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px") })), i.default(n).each((function(e, n) { var o = n.style.marginRight,
                            r = i.default(n).css("margin-right");
                        i.default(n).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px") })); var o = document.body.style.paddingRight,
                        r = i.default(document.body).css("padding-right");
                    i.default(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px") }
                i.default(document.body).addClass("modal-open") }, e._resetScrollbar = function() { var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                i.default(t).each((function(t, e) { var n = i.default(e).data("padding-right");
                    i.default(e).removeData("padding-right"), e.style.paddingRight = n || "" })); var e = [].slice.call(document.querySelectorAll(".sticky-top"));
                i.default(e).each((function(t, e) { var n = i.default(e).data("margin-right"); "undefined" != typeof n && i.default(e).css("margin-right", n).removeData("margin-right") })); var n = i.default(document.body).data("padding-right");
                i.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "" }, e._getScrollbarWidth = function() { var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, t._jQueryInterface = function(e, n) { return this.each((function() { var o = i.default(this).data("bs.modal"),
                        r = a({}, Ht, i.default(this).data(), "object" == typeof e && e ? e : {}); if (o || (o = new t(this, r), i.default(this).data("bs.modal", o)), "string" == typeof e) { if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e](n) } else r.show && o.show(n) })) }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return Ht } }]), t }();
    i.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(t) { var e, n = this,
            o = l.getSelectorFromElement(this);
        o && (e = document.querySelector(o)); var r = i.default(e).data("bs.modal") ? "toggle" : a({}, i.default(e).data(), i.default(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(); var s = i.default(e).one("show.bs.modal", (function(t) { t.isDefaultPrevented() || s.one("hidden.bs.modal", (function() { i.default(n).is(":visible") && n.focus() })) }));
        Bt._jQueryInterface.call(i.default(e), r, this) })), i.default.fn.modal = Bt._jQueryInterface, i.default.fn.modal.Constructor = Bt, i.default.fn.modal.noConflict = function() { return i.default.fn.modal = Rt, Bt._jQueryInterface }; var qt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Qt = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        Wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        Ut = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function Vt(t, e, n) { if (0 === t.length) return t; if (n && "function" == typeof n) return n(t); for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), a = function(t, n) { var i = r[t],
                    a = i.nodeName.toLowerCase(); if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue"; var s = [].slice.call(i.attributes),
                    l = [].concat(e["*"] || [], e[a] || []);
                s.forEach((function(t) {
                    (function(t, e) { var n = t.nodeName.toLowerCase(); if (-1 !== e.indexOf(n)) return -1 === qt.indexOf(n) || Boolean(t.nodeValue.match(Wt) || t.nodeValue.match(Ut)); for (var i = e.filter((function(t) { return t instanceof RegExp })), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1 })(t, l) || i.removeAttribute(t.nodeName) })) }, s = 0, l = r.length; s < l; s++) a(s); return i.body.innerHTML } var Yt = "tooltip",
        zt = i.default.fn[Yt],
        Xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Kt = ["sanitize", "whiteList", "sanitizeFn"],
        Gt = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" },
        $t = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        Jt = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Qt, popperConfig: null },
        Zt = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" },
        te = function() {
            function t(t, e) { if ("undefined" == typeof It) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() } var e = t.prototype; return e.enable = function() { this._isEnabled = !0 }, e.disable = function() { this._isEnabled = !1 }, e.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, e.toggle = function(t) { if (this._isEnabled)
                    if (t) { var e = this.constructor.DATA_KEY,
                            n = i.default(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), i.default(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (i.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                        this._enter(null, this) } }, e.dispose = function() { clearTimeout(this._timeout), i.default.removeData(this.element, this.constructor.DATA_KEY), i.default(this.element).off(this.constructor.EVENT_KEY), i.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && i.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, e.show = function() { var t = this; if ("none" === i.default(this.element).css("display")) throw new Error("Please use show on visible elements"); var e = i.default.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { i.default(this.element).trigger(e); var n = l.findShadowRoot(this.element),
                        o = i.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element); if (e.isDefaultPrevented() || !o) return; var r = this.getTipElement(),
                        a = l.getUID(this.constructor.NAME);
                    r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && i.default(r).addClass("fade"); var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        u = this._getAttachment(s);
                    this.addAttachmentClass(u); var f = this._getContainer();
                    i.default(r).data(this.constructor.DATA_KEY, this), i.default.contains(this.element.ownerDocument.documentElement, this.tip) || i.default(r).appendTo(f), i.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new It(this.element, r, this._getPopperConfig(u)), i.default(r).addClass("show"), "ontouchstart" in document.documentElement && i.default(document.body).children().on("mouseover", null, i.default.noop); var d = function() { t.config.animation && t._fixTransition(); var e = t._hoverState;
                        t._hoverState = null, i.default(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t) }; if (i.default(this.tip).hasClass("fade")) { var c = l.getTransitionDurationFromElement(this.tip);
                        i.default(this.tip).one(l.TRANSITION_END, d).emulateTransitionEnd(c) } else d() } }, e.hide = function(t) { var e = this,
                    n = this.getTipElement(),
                    o = i.default.Event(this.constructor.Event.HIDE),
                    r = function() { "show" !== e._hoverState && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), i.default(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() }; if (i.default(this.element).trigger(o), !o.isDefaultPrevented()) { if (i.default(n).removeClass("show"), "ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, i.default(this.tip).hasClass("fade")) { var a = l.getTransitionDurationFromElement(n);
                        i.default(n).one(l.TRANSITION_END, r).emulateTransitionEnd(a) } else r();
                    this._hoverState = "" } }, e.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, e.isWithContent = function() { return Boolean(this.getTitle()) }, e.addAttachmentClass = function(t) { i.default(this.getTipElement()).addClass("bs-tooltip-" + t) }, e.getTipElement = function() { return this.tip = this.tip || i.default(this.config.template)[0], this.tip }, e.setContent = function() { var t = this.getTipElement();
                this.setElementContent(i.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()), i.default(t).removeClass("fade show") }, e.setElementContent = function(t, e) { "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Vt(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? i.default(e).parent().is(t) || t.empty().append(e) : t.text(i.default(e).text()) }, e.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, e._getPopperConfig = function(t) { var e = this; return a({}, { placement: t, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function(t) { return e._handlePopperPlacementChange(t) } }, this.config.popperConfig) }, e._getOffset = function() { var t = this,
                    e = {}; return "function" == typeof this.config.offset ? e.fn = function(e) { return e.offsets = a({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e } : e.offset = this.config.offset, e }, e._getContainer = function() { return !1 === this.config.container ? document.body : l.isElement(this.config.container) ? i.default(this.config.container) : i.default(document).find(this.config.container) }, e._getAttachment = function(t) { return $t[t.toUpperCase()] }, e._setListeners = function() { var t = this;
                this.config.trigger.split(" ").forEach((function(e) { if ("click" === e) i.default(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) { return t.toggle(e) }));
                    else if ("manual" !== e) { var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            o = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        i.default(t.element).on(n, t.config.selector, (function(e) { return t._enter(e) })).on(o, t.config.selector, (function(e) { return t._leave(e) })) } })), this._hideModalHandler = function() { t.element && t.hide() }, i.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, e._fixTitle = function() { var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, e._enter = function(t, e) { var n = this.constructor.DATA_KEY;
                (e = e || i.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), i.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), i.default(e.getTipElement()).hasClass("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() { "show" === e._hoverState && e.show() }), e.config.delay.show) : e.show()) }, e._leave = function(t, e) { var n = this.constructor.DATA_KEY;
                (e = e || i.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), i.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() { "out" === e._hoverState && e.hide() }), e.config.delay.hide) : e.hide()) }, e._isWithActiveTrigger = function() { for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1 }, e._getConfig = function(t) { var e = i.default(this.element).data(); return Object.keys(e).forEach((function(t) {-1 !== Kt.indexOf(t) && delete e[t] })), "number" == typeof(t = a({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l.typeCheckConfig(Yt, t, this.constructor.DefaultType), t.sanitize && (t.template = Vt(t.template, t.whiteList, t.sanitizeFn)), t }, e._getDelegateConfig = function() { var t = {}; if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, e._cleanTipClass = function() { var t = i.default(this.getTipElement()),
                    e = t.attr("class").match(Xt);
                null !== e && e.length && t.removeClass(e.join("")) }, e._handlePopperPlacementChange = function(t) { this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, e._fixTransition = function() { var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (i.default(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e) }, t._jQueryInterface = function(e) { return this.each((function() { var n = i.default(this),
                        o = n.data("bs.tooltip"),
                        r = "object" == typeof e && e; if ((o || !/dispose|hide/.test(e)) && (o || (o = new t(this, r), n.data("bs.tooltip", o)), "string" == typeof e)) { if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e]() } })) }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return Jt } }, { key: "NAME", get: function() { return Yt } }, { key: "DATA_KEY", get: function() { return "bs.tooltip" } }, { key: "Event", get: function() { return Zt } }, { key: "EVENT_KEY", get: function() { return ".bs.tooltip" } }, { key: "DefaultType", get: function() { return Gt } }]), t }();
    i.default.fn[Yt] = te._jQueryInterface, i.default.fn[Yt].Constructor = te, i.default.fn[Yt].noConflict = function() { return i.default.fn[Yt] = zt, te._jQueryInterface }; var ee = "popover",
        ne = i.default.fn[ee],
        ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        oe = a({}, te.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        re = a({}, te.DefaultType, { content: "(string|element|function)" }),
        ae = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" },
        se = function(t) { var e, n;

            function o() { return t.apply(this, arguments) || this }
            n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n; var a = o.prototype; return a.isWithContent = function() { return this.getTitle() || this._getContent() }, a.addAttachmentClass = function(t) { i.default(this.getTipElement()).addClass("bs-popover-" + t) }, a.getTipElement = function() { return this.tip = this.tip || i.default(this.config.template)[0], this.tip }, a.setContent = function() { var t = i.default(this.getTipElement());
                this.setElementContent(t.find(".popover-header"), this.getTitle()); var e = this._getContent(); "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show") }, a._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, a._cleanTipClass = function() { var t = i.default(this.getTipElement()),
                    e = t.attr("class").match(ie);
                null !== e && e.length > 0 && t.removeClass(e.join("")) }, o._jQueryInterface = function(t) { return this.each((function() { var e = i.default(this).data("bs.popover"),
                        n = "object" == typeof t ? t : null; if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, n), i.default(this).data("bs.popover", e)), "string" == typeof t)) { if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]() } })) }, r(o, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return oe } }, { key: "NAME", get: function() { return ee } }, { key: "DATA_KEY", get: function() { return "bs.popover" } }, { key: "Event", get: function() { return ae } }, { key: "EVENT_KEY", get: function() { return ".bs.popover" } }, { key: "DefaultType", get: function() { return re } }]), o }(te);
    i.default.fn[ee] = se._jQueryInterface, i.default.fn[ee].Constructor = se, i.default.fn[ee].noConflict = function() { return i.default.fn[ee] = ne, se._jQueryInterface }; var le = "scrollspy",
        ue = i.default.fn[le],
        fe = { offset: 10, method: "auto", target: "" },
        de = { offset: "number", method: "string", target: "(string|element)" },
        ce = function() {
            function t(t, e) { var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, i.default(this._scrollElement).on("scroll.bs.scrollspy", (function(t) { return n._process(t) })), this.refresh(), this._process() } var e = t.prototype; return e.refresh = function() { var t = this,
                    e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    n = "auto" === this._config.method ? e : this._config.method,
                    o = "position" === n ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(t) { var e, r = l.getSelectorFromElement(t); if (r && (e = document.querySelector(r)), e) { var a = e.getBoundingClientRect(); if (a.width || a.height) return [i.default(e)[n]().top + o, r] } return null })).filter((function(t) { return t })).sort((function(t, e) { return t[0] - e[0] })).forEach((function(e) { t._offsets.push(e[0]), t._targets.push(e[1]) })) }, e.dispose = function() { i.default.removeData(this._element, "bs.scrollspy"), i.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, e._getConfig = function(t) { if ("string" != typeof(t = a({}, fe, "object" == typeof t && t ? t : {})).target && l.isElement(t.target)) { var e = i.default(t.target).attr("id");
                    e || (e = l.getUID(le), i.default(t.target).attr("id", e)), t.target = "#" + e } return l.typeCheckConfig(le, t, de), t }, e._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, e._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, e._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, e._process = function() { var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), t >= n) { var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (var o = this._offsets.length; o--;) { this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]) } } }, e._activate = function(t) { this._activeTarget = t, this._clear(); var e = this._selector.split(",").map((function(e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' })),
                    n = i.default([].slice.call(document.querySelectorAll(e.join(","))));
                n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) : (n.addClass("active"), n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), i.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t }) }, e._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter((function(t) { return t.classList.contains("active") })).forEach((function(t) { return t.classList.remove("active") })) }, t._jQueryInterface = function(e) { return this.each((function() { var n = i.default(this).data("bs.scrollspy"); if (n || (n = new t(this, "object" == typeof e && e), i.default(this).data("bs.scrollspy", n)), "string" == typeof e) { if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]() } })) }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return fe } }]), t }();
    i.default(window).on("load.bs.scrollspy.data-api", (function() { for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;) { var n = i.default(t[e]);
            ce._jQueryInterface.call(n, n.data()) } })), i.default.fn[le] = ce._jQueryInterface, i.default.fn[le].Constructor = ce, i.default.fn[le].noConflict = function() { return i.default.fn[le] = ue, ce._jQueryInterface }; var he = i.default.fn.tab,
        pe = function() {
            function t(t) { this._element = t } var e = t.prototype; return e.show = function() { var t = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && i.default(this._element).hasClass("active") || i.default(this._element).hasClass("disabled"))) { var e, n, o = i.default(this._element).closest(".nav, .list-group")[0],
                        r = l.getSelectorFromElement(this._element); if (o) { var a = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
                        n = (n = i.default.makeArray(i.default(o).find(a)))[n.length - 1] } var s = i.default.Event("hide.bs.tab", { relatedTarget: this._element }),
                        u = i.default.Event("show.bs.tab", { relatedTarget: n }); if (n && i.default(n).trigger(s), i.default(this._element).trigger(u), !u.isDefaultPrevented() && !s.isDefaultPrevented()) { r && (e = document.querySelector(r)), this._activate(this._element, o); var f = function() { var e = i.default.Event("hidden.bs.tab", { relatedTarget: t._element }),
                                o = i.default.Event("shown.bs.tab", { relatedTarget: n });
                            i.default(n).trigger(e), i.default(t._element).trigger(o) };
                        e ? this._activate(e, e.parentNode, f) : f() } } }, e.dispose = function() { i.default.removeData(this._element, "bs.tab"), this._element = null }, e._activate = function(t, e, n) { var o = this,
                    r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i.default(e).children(".active") : i.default(e).find("> li > .active"))[0],
                    a = n && r && i.default(r).hasClass("fade"),
                    s = function() { return o._transitionComplete(t, r, n) }; if (r && a) { var u = l.getTransitionDurationFromElement(r);
                    i.default(r).removeClass("show").one(l.TRANSITION_END, s).emulateTransitionEnd(u) } else s() }, e._transitionComplete = function(t, e, n) { if (e) { i.default(e).removeClass("active"); var o = i.default(e.parentNode).find("> .dropdown-menu .active")[0];
                    o && i.default(o).removeClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) } if (i.default(t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), l.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && i.default(t.parentNode).hasClass("dropdown-menu")) { var r = i.default(t).closest(".dropdown")[0]; if (r) { var a = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                        i.default(a).addClass("active") }
                    t.setAttribute("aria-expanded", !0) }
                n && n() }, t._jQueryInterface = function(e) { return this.each((function() { var n = i.default(this),
                        o = n.data("bs.tab"); if (o || (o = new t(this), n.data("bs.tab", o)), "string" == typeof e) { if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e]() } })) }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }]), t }();
    i.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(t) { t.preventDefault(), pe._jQueryInterface.call(i.default(this), "show") })), i.default.fn.tab = pe._jQueryInterface, i.default.fn.tab.Constructor = pe, i.default.fn.tab.noConflict = function() { return i.default.fn.tab = he, pe._jQueryInterface }; var me = i.default.fn.toast,
        ge = { animation: "boolean", autohide: "boolean", delay: "number" },
        ve = { animation: !0, autohide: !0, delay: 500 },
        _e = function() {
            function t(t, e) { this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners() } var e = t.prototype; return e.show = function() { var t = this,
                    e = i.default.Event("show.bs.toast"); if (i.default(this._element).trigger(e), !e.isDefaultPrevented()) { this._clearTimeout(), this._config.animation && this._element.classList.add("fade"); var n = function() { t._element.classList.remove("showing"), t._element.classList.add("show"), i.default(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function() { t.hide() }), t._config.delay)) }; if (this._element.classList.remove("hide"), l.reflow(this._element), this._element.classList.add("showing"), this._config.animation) { var o = l.getTransitionDurationFromElement(this._element);
                        i.default(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(o) } else n() } }, e.hide = function() { if (this._element.classList.contains("show")) { var t = i.default.Event("hide.bs.toast");
                    i.default(this._element).trigger(t), t.isDefaultPrevented() || this._close() } }, e.dispose = function() { this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), i.default(this._element).off("click.dismiss.bs.toast"), i.default.removeData(this._element, "bs.toast"), this._element = null, this._config = null }, e._getConfig = function(t) { return t = a({}, ve, i.default(this._element).data(), "object" == typeof t && t ? t : {}), l.typeCheckConfig("toast", t, this.constructor.DefaultType), t }, e._setListeners = function() { var t = this;
                i.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function() { return t.hide() })) }, e._close = function() { var t = this,
                    e = function() { t._element.classList.add("hide"), i.default(t._element).trigger("hidden.bs.toast") }; if (this._element.classList.remove("show"), this._config.animation) { var n = l.getTransitionDurationFromElement(this._element);
                    i.default(this._element).one(l.TRANSITION_END, e).emulateTransitionEnd(n) } else e() }, e._clearTimeout = function() { clearTimeout(this._timeout), this._timeout = null }, t._jQueryInterface = function(e) { return this.each((function() { var n = i.default(this),
                        o = n.data("bs.toast"); if (o || (o = new t(this, "object" == typeof e && e), n.data("bs.toast", o)), "string" == typeof e) { if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e](this) } })) }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "DefaultType", get: function() { return ge } }, { key: "Default", get: function() { return ve } }]), t }();
    i.default.fn.toast = _e._jQueryInterface, i.default.fn.toast.Constructor = _e, i.default.fn.toast.noConflict = function() { return i.default.fn.toast = me, _e._jQueryInterface }, t.Alert = d, t.Button = h, t.Carousel = y, t.Collapse = S, t.Dropdown = Ft, t.Modal = Bt, t.Popover = se, t.Scrollspy = ce, t.Tab = pe, t.Toast = _e, t.Tooltip = te, t.Util = l, Object.defineProperty(t, "__esModule", { value: !0 }) }));
//# sourceMappingURL=bootstrap.bundle.min.js.map

// Jquery easing
(function(factory) { if (typeof define === "function" && define.amd) { define(["jquery"], function($) { return factory($) }) } else if (typeof module === "object" && typeof module.exports === "object") { exports = factory(require("jquery")) } else { factory(jQuery) } })(function($) { $.easing.jswing = $.easing.swing; var pow = Math.pow,
        sqrt = Math.sqrt,
        sin = Math.sin,
        cos = Math.cos,
        PI = Math.PI,
        c1 = 1.70158,
        c2 = c1 * 1.525,
        c3 = c1 + 1,
        c4 = 2 * PI / 3,
        c5 = 2 * PI / 4.5;

    function bounceOut(x) { var n1 = 7.5625,
            d1 = 2.75; if (x < 1 / d1) { return n1 * x * x } else if (x < 2 / d1) { return n1 * (x -= 1.5 / d1) * x + .75 } else if (x < 2.5 / d1) { return n1 * (x -= 2.25 / d1) * x + .9375 } else { return n1 * (x -= 2.625 / d1) * x + .984375 } }
    $.extend($.easing, { def: "easeOutQuad", swing: function(x) { return $.easing[$.easing.def](x) }, easeInQuad: function(x) { return x * x }, easeOutQuad: function(x) { return 1 - (1 - x) * (1 - x) }, easeInOutQuad: function(x) { return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2 }, easeInCubic: function(x) { return x * x * x }, easeOutCubic: function(x) { return 1 - pow(1 - x, 3) }, easeInOutCubic: function(x) { return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2 }, easeInQuart: function(x) { return x * x * x * x }, easeOutQuart: function(x) { return 1 - pow(1 - x, 4) }, easeInOutQuart: function(x) { return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2 }, easeInQuint: function(x) { return x * x * x * x * x }, easeOutQuint: function(x) { return 1 - pow(1 - x, 5) }, easeInOutQuint: function(x) { return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2 }, easeInSine: function(x) { return 1 - cos(x * PI / 2) }, easeOutSine: function(x) { return sin(x * PI / 2) }, easeInOutSine: function(x) { return -(cos(PI * x) - 1) / 2 }, easeInExpo: function(x) { return x === 0 ? 0 : pow(2, 10 * x - 10) }, easeOutExpo: function(x) { return x === 1 ? 1 : 1 - pow(2, -10 * x) }, easeInOutExpo: function(x) { return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2 }, easeInCirc: function(x) { return 1 - sqrt(1 - pow(x, 2)) }, easeOutCirc: function(x) { return sqrt(1 - pow(x - 1, 2)) }, easeInOutCirc: function(x) { return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2 }, easeInElastic: function(x) { return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4) }, easeOutElastic: function(x) { return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1 }, easeInOutElastic: function(x) { return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1 }, easeInBack: function(x) { return c3 * x * x * x - c1 * x * x }, easeOutBack: function(x) { return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2) }, easeInOutBack: function(x) { return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2 }, easeInBounce: function(x) { return 1 - bounceOut(1 - x) }, easeOutBounce: bounceOut, easeInOutBounce: function(x) { return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2 } }) });

/*!
 * SB Admin 2 v4.1.3 (https://startbootstrap.com/theme/sb-admin-2)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin-2/blob/master/LICENSE)
 */

! function(s) { "use strict";
    s("#sidebarToggle, #sidebarToggleTop").on("click", function(e) { s("body").toggleClass("sidebar-toggled"), s(".sidebar").toggleClass("toggled"), s(".sidebar").hasClass("toggled") && s(".sidebar .collapse").collapse("hide") }), s(window).resize(function() { s(window).width() < 768 && s(".sidebar .collapse").collapse("hide"), s(window).width() < 480 && !s(".sidebar").hasClass("toggled") && (s("body").addClass("sidebar-toggled"), s(".sidebar").addClass("toggled"), s(".sidebar .collapse").collapse("hide")) }), s("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function(e) { if (768 < s(window).width()) { var o = e.originalEvent,
                l = o.wheelDelta || -o.detail;
            this.scrollTop += 30 * (l < 0 ? 1 : -1), e.preventDefault() } }), s(document).on("scroll", function() { 100 < s(this).scrollTop() ? s(".scroll-to-top").fadeIn() : s(".scroll-to-top").fadeOut() }), s(document).on("click", "a.scroll-to-top", function(e) { var o = s(this);
        s("html, body").stop().animate({ scrollTop: s(o.attr("href")).offset().top }, 1e3, "easeInOutExpo"), e.preventDefault() }) }(jQuery);

/*!
 * Chart.js v2.9.4
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e(function() { try { return require("moment") } catch (t) {} }()) : "function" == typeof define && define.amd ? define(["require"], (function(t) { return e(function() { try { return t("moment") } catch (t) {} }()) })) : (t = t || self).Chart = e(t.moment) }(this, (function(t) { "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t; var e = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
        n = function(t, e) { return t(e = { exports: {} }, e.exports), e.exports }((function(t) { var n = {}; for (var i in e) e.hasOwnProperty(i) && (n[e[i]] = i); var a = t.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } }; for (var r in a)
                if (a.hasOwnProperty(r)) { if (!("channels" in a[r])) throw new Error("missing channels property: " + r); if (!("labels" in a[r])) throw new Error("missing channel labels property: " + r); if (a[r].labels.length !== a[r].channels) throw new Error("channel and label counts mismatch: " + r); var o = a[r].channels,
                        s = a[r].labels;
                    delete a[r].channels, delete a[r].labels, Object.defineProperty(a[r], "channels", { value: o }), Object.defineProperty(a[r], "labels", { value: s }) }
            a.rgb.hsl = function(t) { var e, n, i = t[0] / 255,
                    a = t[1] / 255,
                    r = t[2] / 255,
                    o = Math.min(i, a, r),
                    s = Math.max(i, a, r),
                    l = s - o; return s === o ? e = 0 : i === s ? e = (a - r) / l : a === s ? e = 2 + (r - i) / l : r === s && (e = 4 + (i - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (o + s) / 2, [e, 100 * (s === o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * n] }, a.rgb.hsv = function(t) { var e, n, i, a, r, o = t[0] / 255,
                    s = t[1] / 255,
                    l = t[2] / 255,
                    u = Math.max(o, s, l),
                    d = u - Math.min(o, s, l),
                    h = function(t) { return (u - t) / 6 / d + .5 }; return 0 === d ? a = r = 0 : (r = d / u, e = h(o), n = h(s), i = h(l), o === u ? a = i - n : s === u ? a = 1 / 3 + e - i : l === u && (a = 2 / 3 + n - e), a < 0 ? a += 1 : a > 1 && (a -= 1)), [360 * a, 100 * r, 100 * u] }, a.rgb.hwb = function(t) { var e = t[0],
                    n = t[1],
                    i = t[2]; return [a.rgb.hsl(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, i))), 100 * (i = 1 - 1 / 255 * Math.max(e, Math.max(n, i)))] }, a.rgb.cmyk = function(t) { var e, n = t[0] / 255,
                    i = t[1] / 255,
                    a = t[2] / 255; return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - a))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e] }, a.rgb.keyword = function(t) { var i = n[t]; if (i) return i; var a, r, o, s = 1 / 0; for (var l in e)
                    if (e.hasOwnProperty(l)) { var u = e[l],
                            d = (r = t, o = u, Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2) + Math.pow(r[2] - o[2], 2));
                        d < s && (s = d, a = l) }
                return a }, a.keyword.rgb = function(t) { return e[t] }, a.rgb.xyz = function(t) { var e = t[0] / 255,
                    n = t[1] / 255,
                    i = t[2] / 255; return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)] }, a.rgb.lab = function(t) { var e = a.rgb.xyz(t),
                    n = e[0],
                    i = e[1],
                    r = e[2]; return i /= 100, r /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))] }, a.hsl.rgb = function(t) { var e, n, i, a, r, o = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100; if (0 === s) return [r = 255 * l, r, r];
                e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0]; for (var u = 0; u < 3; u++)(i = o + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, r = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, a[u] = 255 * r; return a }, a.hsl.hsv = function(t) { var e = t[0],
                    n = t[1] / 100,
                    i = t[2] / 100,
                    a = n,
                    r = Math.max(i, .01); return n *= (i *= 2) <= 1 ? i : 2 - i, a *= r <= 1 ? r : 2 - r, [e, 100 * (0 === i ? 2 * a / (r + a) : 2 * n / (i + n)), 100 * ((i + n) / 2)] }, a.hsv.rgb = function(t) { var e = t[0] / 60,
                    n = t[1] / 100,
                    i = t[2] / 100,
                    a = Math.floor(e) % 6,
                    r = e - Math.floor(e),
                    o = 255 * i * (1 - n),
                    s = 255 * i * (1 - n * r),
                    l = 255 * i * (1 - n * (1 - r)); switch (i *= 255, a) {
                    case 0:
                        return [i, l, o];
                    case 1:
                        return [s, i, o];
                    case 2:
                        return [o, i, l];
                    case 3:
                        return [o, s, i];
                    case 4:
                        return [l, o, i];
                    case 5:
                        return [i, o, s] } }, a.hsv.hsl = function(t) { var e, n, i, a = t[0],
                    r = t[1] / 100,
                    o = t[2] / 100,
                    s = Math.max(o, .01); return i = (2 - r) * o, n = r * s, [a, 100 * (n = (n /= (e = (2 - r) * s) <= 1 ? e : 2 - e) || 0), 100 * (i /= 2)] }, a.hwb.rgb = function(t) { var e, n, i, a, r, o, s, l = t[0] / 360,
                    u = t[1] / 100,
                    d = t[2] / 100,
                    h = u + d; switch (h > 1 && (u /= h, d /= h), i = 6 * l - (e = Math.floor(6 * l)), 0 != (1 & e) && (i = 1 - i), a = u + i * ((n = 1 - d) - u), e) { default:
                        case 6:
                        case 0:
                        r = n, o = a, s = u; break;
                    case 1:
                            r = a, o = n, s = u; break;
                    case 2:
                            r = u, o = n, s = a; break;
                    case 3:
                            r = u, o = a, s = n; break;
                    case 4:
                            r = a, o = u, s = n; break;
                    case 5:
                            r = n, o = u, s = a } return [255 * r, 255 * o, 255 * s] }, a.cmyk.rgb = function(t) { var e = t[0] / 100,
                    n = t[1] / 100,
                    i = t[2] / 100,
                    a = t[3] / 100; return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a))] }, a.xyz.rgb = function(t) { var e, n, i, a = t[0] / 100,
                    r = t[1] / 100,
                    o = t[2] / 100; return n = -.9689 * a + 1.8758 * r + .0415 * o, i = .0557 * a + -.204 * r + 1.057 * o, e = (e = 3.2406 * a + -1.5372 * r + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))] }, a.xyz.lab = function(t) { var e = t[0],
                    n = t[1],
                    i = t[2]; return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))] }, a.lab.xyz = function(t) { var e, n, i, a = t[0];
                e = t[1] / 500 + (n = (a + 16) / 116), i = n - t[2] / 200; var r = Math.pow(n, 3),
                    o = Math.pow(e, 3),
                    s = Math.pow(i, 3); return n = r > .008856 ? r : (n - 16 / 116) / 7.787, e = o > .008856 ? o : (e - 16 / 116) / 7.787, i = s > .008856 ? s : (i - 16 / 116) / 7.787, [e *= 95.047, n *= 100, i *= 108.883] }, a.lab.lch = function(t) { var e, n = t[0],
                    i = t[1],
                    a = t[2]; return (e = 360 * Math.atan2(a, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + a * a), e] }, a.lch.lab = function(t) { var e, n = t[0],
                    i = t[1]; return e = t[2] / 360 * 2 * Math.PI, [n, i * Math.cos(e), i * Math.sin(e)] }, a.rgb.ansi16 = function(t) { var e = t[0],
                    n = t[1],
                    i = t[2],
                    r = 1 in arguments ? arguments[1] : a.rgb.hsv(t)[2]; if (0 === (r = Math.round(r / 50))) return 30; var o = 30 + (Math.round(i / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255)); return 2 === r && (o += 60), o }, a.hsv.ansi16 = function(t) { return a.rgb.ansi16(a.hsv.rgb(t), t[2]) }, a.rgb.ansi256 = function(t) { var e = t[0],
                    n = t[1],
                    i = t[2]; return e === n && n === i ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(i / 255 * 5) }, a.ansi16.rgb = function(t) { var e = t % 10; if (0 === e || 7 === e) return t > 50 && (e += 3.5), [e = e / 10.5 * 255, e, e]; var n = .5 * (1 + ~~(t > 50)); return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255] }, a.ansi256.rgb = function(t) { if (t >= 232) { var e = 10 * (t - 232) + 8; return [e, e, e] } var n; return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255] }, a.rgb.hex = function(t) { var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase(); return "000000".substring(e.length) + e }, a.hex.rgb = function(t) { var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i); if (!e) return [0, 0, 0]; var n = e[0];
                3 === e[0].length && (n = n.split("").map((function(t) { return t + t })).join("")); var i = parseInt(n, 16); return [i >> 16 & 255, i >> 8 & 255, 255 & i] }, a.rgb.hcg = function(t) { var e, n = t[0] / 255,
                    i = t[1] / 255,
                    a = t[2] / 255,
                    r = Math.max(Math.max(n, i), a),
                    o = Math.min(Math.min(n, i), a),
                    s = r - o; return e = s <= 0 ? 0 : r === n ? (i - a) / s % 6 : r === i ? 2 + (a - n) / s : 4 + (n - i) / s + 4, e /= 6, [360 * (e %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)] }, a.hsl.hcg = function(t) { var e = t[1] / 100,
                    n = t[2] / 100,
                    i = 1,
                    a = 0; return (i = n < .5 ? 2 * e * n : 2 * e * (1 - n)) < 1 && (a = (n - .5 * i) / (1 - i)), [t[0], 100 * i, 100 * a] }, a.hsv.hcg = function(t) { var e = t[1] / 100,
                    n = t[2] / 100,
                    i = e * n,
                    a = 0; return i < 1 && (a = (n - i) / (1 - i)), [t[0], 100 * i, 100 * a] }, a.hcg.rgb = function(t) { var e = t[0] / 360,
                    n = t[1] / 100,
                    i = t[2] / 100; if (0 === n) return [255 * i, 255 * i, 255 * i]; var a, r = [0, 0, 0],
                    o = e % 1 * 6,
                    s = o % 1,
                    l = 1 - s; switch (Math.floor(o)) {
                    case 0:
                        r[0] = 1, r[1] = s, r[2] = 0; break;
                    case 1:
                        r[0] = l, r[1] = 1, r[2] = 0; break;
                    case 2:
                        r[0] = 0, r[1] = 1, r[2] = s; break;
                    case 3:
                        r[0] = 0, r[1] = l, r[2] = 1; break;
                    case 4:
                        r[0] = s, r[1] = 0, r[2] = 1; break;
                    default:
                        r[0] = 1, r[1] = 0, r[2] = l } return a = (1 - n) * i, [255 * (n * r[0] + a), 255 * (n * r[1] + a), 255 * (n * r[2] + a)] }, a.hcg.hsv = function(t) { var e = t[1] / 100,
                    n = e + t[2] / 100 * (1 - e),
                    i = 0; return n > 0 && (i = e / n), [t[0], 100 * i, 100 * n] }, a.hcg.hsl = function(t) { var e = t[1] / 100,
                    n = t[2] / 100 * (1 - e) + .5 * e,
                    i = 0; return n > 0 && n < .5 ? i = e / (2 * n) : n >= .5 && n < 1 && (i = e / (2 * (1 - n))), [t[0], 100 * i, 100 * n] }, a.hcg.hwb = function(t) { var e = t[1] / 100,
                    n = e + t[2] / 100 * (1 - e); return [t[0], 100 * (n - e), 100 * (1 - n)] }, a.hwb.hcg = function(t) { var e = t[1] / 100,
                    n = 1 - t[2] / 100,
                    i = n - e,
                    a = 0; return i < 1 && (a = (n - i) / (1 - i)), [t[0], 100 * i, 100 * a] }, a.apple.rgb = function(t) { return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255] }, a.rgb.apple = function(t) { return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535] }, a.gray.rgb = function(t) { return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255] }, a.gray.hsl = a.gray.hsv = function(t) { return [0, 0, t[0]] }, a.gray.hwb = function(t) { return [0, 100, t[0]] }, a.gray.cmyk = function(t) { return [0, 0, 0, t[0]] }, a.gray.lab = function(t) { return [t[0], 0, 0] }, a.gray.hex = function(t) { var e = 255 & Math.round(t[0] / 100 * 255),
                    n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase(); return "000000".substring(n.length) + n }, a.rgb.gray = function(t) { return [(t[0] + t[1] + t[2]) / 3 / 255 * 100] } }));
    n.rgb, n.hsl, n.hsv, n.hwb, n.cmyk, n.xyz, n.lab, n.lch, n.hex, n.keyword, n.ansi16, n.ansi256, n.hcg, n.apple, n.gray;

    function i(t) { var e = function() { for (var t = {}, e = Object.keys(n), i = e.length, a = 0; a < i; a++) t[e[a]] = { distance: -1, parent: null }; return t }(),
            i = [t]; for (e[t].distance = 0; i.length;)
            for (var a = i.pop(), r = Object.keys(n[a]), o = r.length, s = 0; s < o; s++) { var l = r[s],
                    u = e[l]; - 1 === u.distance && (u.distance = e[a].distance + 1, u.parent = a, i.unshift(l)) }
        return e }

    function a(t, e) { return function(n) { return e(t(n)) } }

    function r(t, e) { for (var i = [e[t].parent, t], r = n[e[t].parent][t], o = e[t].parent; e[o].parent;) i.unshift(e[o].parent), r = a(n[e[o].parent][o], r), o = e[o].parent; return r.conversion = i, r } var o = {};
    Object.keys(n).forEach((function(t) { o[t] = {}, Object.defineProperty(o[t], "channels", { value: n[t].channels }), Object.defineProperty(o[t], "labels", { value: n[t].labels }); var e = function(t) { for (var e = i(t), n = {}, a = Object.keys(e), o = a.length, s = 0; s < o; s++) { var l = a[s];
                null !== e[l].parent && (n[l] = r(l, e)) } return n }(t);
        Object.keys(e).forEach((function(n) { var i = e[n];
            o[t][n] = function(t) { var e = function(e) { if (null == e) return e;
                    arguments.length > 1 && (e = Array.prototype.slice.call(arguments)); var n = t(e); if ("object" == typeof n)
                        for (var i = n.length, a = 0; a < i; a++) n[a] = Math.round(n[a]); return n }; return "conversion" in t && (e.conversion = t.conversion), e }(i), o[t][n].raw = function(t) { var e = function(e) { return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e)) }; return "conversion" in t && (e.conversion = t.conversion), e }(i) })) })); var s = o,
        l = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
        u = { getRgba: d, getHsla: h, getRgb: function(t) { var e = d(t); return e && e.slice(0, 3) }, getHsl: function(t) { var e = h(t); return e && e.slice(0, 3) }, getHwb: c, getAlpha: function(t) { var e = d(t); if (e) return e[3]; if (e = h(t)) return e[3]; if (e = c(t)) return e[3] }, hexString: function(t, e) { e = void 0 !== e && 3 === t.length ? e : t[3]; return "#" + v(t[0]) + v(t[1]) + v(t[2]) + (e >= 0 && e < 1 ? v(Math.round(255 * e)) : "") }, rgbString: function(t, e) { if (e < 1 || t[3] && t[3] < 1) return f(t, e); return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")" }, rgbaString: f, percentString: function(t, e) { if (e < 1 || t[3] && t[3] < 1) return g(t, e); var n = Math.round(t[0] / 255 * 100),
                    i = Math.round(t[1] / 255 * 100),
                    a = Math.round(t[2] / 255 * 100); return "rgb(" + n + "%, " + i + "%, " + a + "%)" }, percentaString: g, hslString: function(t, e) { if (e < 1 || t[3] && t[3] < 1) return p(t, e); return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" }, hslaString: p, hwbString: function(t, e) { void 0 === e && (e = void 0 !== t[3] ? t[3] : 1); return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")" }, keyword: function(t) { return b[t.slice(0, 3)] } };

    function d(t) { if (t) { var e = [0, 0, 0],
                n = 1,
                i = t.match(/^#([a-fA-F0-9]{3,4})$/i),
                a = ""; if (i) { a = (i = i[1])[3]; for (var r = 0; r < e.length; r++) e[r] = parseInt(i[r] + i[r], 16);
                a && (n = Math.round(parseInt(a + a, 16) / 255 * 100) / 100) } else if (i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) { a = i[2], i = i[1]; for (r = 0; r < e.length; r++) e[r] = parseInt(i.slice(2 * r, 2 * r + 2), 16);
                a && (n = Math.round(parseInt(a, 16) / 255 * 100) / 100) } else if (i = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) { for (r = 0; r < e.length; r++) e[r] = parseInt(i[r + 1]);
                n = parseFloat(i[4]) } else if (i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) { for (r = 0; r < e.length; r++) e[r] = Math.round(2.55 * parseFloat(i[r + 1]));
                n = parseFloat(i[4]) } else if (i = t.match(/(\w+)/)) { if ("transparent" == i[1]) return [0, 0, 0, 0]; if (!(e = l[i[1]])) return } for (r = 0; r < e.length; r++) e[r] = m(e[r], 0, 255); return n = n || 0 == n ? m(n, 0, 1) : 1, e[3] = n, e } }

    function h(t) { if (t) { var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (e) { var n = parseFloat(e[4]); return [m(parseInt(e[1]), 0, 360), m(parseFloat(e[2]), 0, 100), m(parseFloat(e[3]), 0, 100), m(isNaN(n) ? 1 : n, 0, 1)] } } }

    function c(t) { if (t) { var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/); if (e) { var n = parseFloat(e[4]); return [m(parseInt(e[1]), 0, 360), m(parseFloat(e[2]), 0, 100), m(parseFloat(e[3]), 0, 100), m(isNaN(n) ? 1 : n, 0, 1)] } } }

    function f(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")" }

    function g(t, e) { return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")" }

    function p(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")" }

    function m(t, e, n) { return Math.min(Math.max(e, t), n) }

    function v(t) { var e = t.toString(16).toUpperCase(); return e.length < 2 ? "0" + e : e } var b = {}; for (var x in l) b[l[x]] = x; var y = function(t) { return t instanceof y ? t : this instanceof y ? (this.valid = !1, this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 }, void("string" == typeof t ? (e = u.getRgba(t)) ? this.setValues("rgb", e) : (e = u.getHsla(t)) ? this.setValues("hsl", e) : (e = u.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new y(t); var e };
    y.prototype = { isValid: function() { return this.valid }, rgb: function() { return this.setSpace("rgb", arguments) }, hsl: function() { return this.setSpace("hsl", arguments) }, hsv: function() { return this.setSpace("hsv", arguments) }, hwb: function() { return this.setSpace("hwb", arguments) }, cmyk: function() { return this.setSpace("cmyk", arguments) }, rgbArray: function() { return this.values.rgb }, hslArray: function() { return this.values.hsl }, hsvArray: function() { return this.values.hsv }, hwbArray: function() { var t = this.values; return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb }, cmykArray: function() { return this.values.cmyk }, rgbaArray: function() { var t = this.values; return t.rgb.concat([t.alpha]) }, hslaArray: function() { var t = this.values; return t.hsl.concat([t.alpha]) }, alpha: function(t) { return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this) }, red: function(t) { return this.setChannel("rgb", 0, t) }, green: function(t) { return this.setChannel("rgb", 1, t) }, blue: function(t) { return this.setChannel("rgb", 2, t) }, hue: function(t) { return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t) }, saturation: function(t) { return this.setChannel("hsl", 1, t) }, lightness: function(t) { return this.setChannel("hsl", 2, t) }, saturationv: function(t) { return this.setChannel("hsv", 1, t) }, whiteness: function(t) { return this.setChannel("hwb", 1, t) }, blackness: function(t) { return this.setChannel("hwb", 2, t) }, value: function(t) { return this.setChannel("hsv", 2, t) }, cyan: function(t) { return this.setChannel("cmyk", 0, t) }, magenta: function(t) { return this.setChannel("cmyk", 1, t) }, yellow: function(t) { return this.setChannel("cmyk", 2, t) }, black: function(t) { return this.setChannel("cmyk", 3, t) }, hexString: function() { return u.hexString(this.values.rgb) }, rgbString: function() { return u.rgbString(this.values.rgb, this.values.alpha) }, rgbaString: function() { return u.rgbaString(this.values.rgb, this.values.alpha) }, percentString: function() { return u.percentString(this.values.rgb, this.values.alpha) }, hslString: function() { return u.hslString(this.values.hsl, this.values.alpha) }, hslaString: function() { return u.hslaString(this.values.hsl, this.values.alpha) }, hwbString: function() { return u.hwbString(this.values.hwb, this.values.alpha) }, keyword: function() { return u.keyword(this.values.rgb, this.values.alpha) }, rgbNumber: function() { var t = this.values.rgb; return t[0] << 16 | t[1] << 8 | t[2] }, luminosity: function() { for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) { var i = t[n] / 255;
                e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4) } return .2126 * e[0] + .7152 * e[1] + .0722 * e[2] }, contrast: function(t) { var e = this.luminosity(),
                n = t.luminosity(); return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05) }, level: function(t) { var e = this.contrast(t); return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "" }, dark: function() { var t = this.values.rgb; return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128 }, light: function() { return !this.dark() }, negate: function() { for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e]; return this.setValues("rgb", t), this }, lighten: function(t) { var e = this.values.hsl; return e[2] += e[2] * t, this.setValues("hsl", e), this }, darken: function(t) { var e = this.values.hsl; return e[2] -= e[2] * t, this.setValues("hsl", e), this }, saturate: function(t) { var e = this.values.hsl; return e[1] += e[1] * t, this.setValues("hsl", e), this }, desaturate: function(t) { var e = this.values.hsl; return e[1] -= e[1] * t, this.setValues("hsl", e), this }, whiten: function(t) { var e = this.values.hwb; return e[1] += e[1] * t, this.setValues("hwb", e), this }, blacken: function(t) { var e = this.values.hwb; return e[2] += e[2] * t, this.setValues("hwb", e), this }, greyscale: function() { var t = this.values.rgb,
                e = .3 * t[0] + .59 * t[1] + .11 * t[2]; return this.setValues("rgb", [e, e, e]), this }, clearer: function(t) { var e = this.values.alpha; return this.setValues("alpha", e - e * t), this }, opaquer: function(t) { var e = this.values.alpha; return this.setValues("alpha", e + e * t), this }, rotate: function(t) { var e = this.values.hsl,
                n = (e[0] + t) % 360; return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this }, mix: function(t, e) { var n = t,
                i = void 0 === e ? .5 : e,
                a = 2 * i - 1,
                r = this.alpha() - n.alpha(),
                o = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
                s = 1 - o; return this.rgb(o * this.red() + s * n.red(), o * this.green() + s * n.green(), o * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i)) }, toJSON: function() { return this.rgb() }, clone: function() { var t, e, n = new y,
                i = this.values,
                a = n.values; for (var r in i) i.hasOwnProperty(r) && (t = i[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t)); return n } }, y.prototype.spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, y.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, y.prototype.getValues = function(t) { for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i]; return 1 !== e.alpha && (n.a = e.alpha), n }, y.prototype.setValues = function(t, e) { var n, i, a = this.values,
            r = this.spaces,
            o = this.maxes,
            l = 1; if (this.valid = !0, "alpha" === t) l = e;
        else if (e.length) a[t] = e.slice(0, t.length), l = e[t.length];
        else if (void 0 !== e[t.charAt(0)]) { for (n = 0; n < t.length; n++) a[t][n] = e[t.charAt(n)];
            l = e.a } else if (void 0 !== e[r[t][0]]) { var u = r[t]; for (n = 0; n < t.length; n++) a[t][n] = e[u[n]];
            l = e.alpha } if (a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l)), "alpha" === t) return !1; for (n = 0; n < t.length; n++) i = Math.max(0, Math.min(o[t][n], a[t][n])), a[t][n] = Math.round(i); for (var d in r) d !== t && (a[d] = s[t][d](a[t])); return !0 }, y.prototype.setSpace = function(t, e) { var n = e[0]; return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this) }, y.prototype.setChannel = function(t, e, n) { var i = this.values[t]; return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this) }, "undefined" != typeof window && (window.Color = y); var _ = y;

    function k(t) { return -1 === ["__proto__", "prototype", "constructor"].indexOf(t) } var w, M = { noop: function() {}, uid: (w = 0, function() { return w++ }), isNullOrUndef: function(t) { return null == t }, isArray: function(t) { if (Array.isArray && Array.isArray(t)) return !0; var e = Object.prototype.toString.call(t); return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6) }, isObject: function(t) { return null !== t && "[object Object]" === Object.prototype.toString.call(t) }, isFinite: function(t) { return ("number" == typeof t || t instanceof Number) && isFinite(t) }, valueOrDefault: function(t, e) { return void 0 === t ? e : t }, valueAtIndexOrDefault: function(t, e, n) { return M.valueOrDefault(M.isArray(t) ? t[e] : t, n) }, callback: function(t, e, n) { if (t && "function" == typeof t.call) return t.apply(n, e) }, each: function(t, e, n, i) { var a, r, o; if (M.isArray(t))
                    if (r = t.length, i)
                        for (a = r - 1; a >= 0; a--) e.call(n, t[a], a);
                    else
                        for (a = 0; a < r; a++) e.call(n, t[a], a);
                else if (M.isObject(t))
                    for (r = (o = Object.keys(t)).length, a = 0; a < r; a++) e.call(n, t[o[a]], o[a]) }, arrayEquals: function(t, e) { var n, i, a, r; if (!t || !e || t.length !== e.length) return !1; for (n = 0, i = t.length; n < i; ++n)
                    if (a = t[n], r = e[n], a instanceof Array && r instanceof Array) { if (!M.arrayEquals(a, r)) return !1 } else if (a !== r) return !1; return !0 }, clone: function(t) { if (M.isArray(t)) return t.map(M.clone); if (M.isObject(t)) { for (var e = Object.create(t), n = Object.keys(t), i = n.length, a = 0; a < i; ++a) e[n[a]] = M.clone(t[n[a]]); return e } return t }, _merger: function(t, e, n, i) { if (k(t)) { var a = e[t],
                        r = n[t];
                    M.isObject(a) && M.isObject(r) ? M.merge(a, r, i) : e[t] = M.clone(r) } }, _mergerIf: function(t, e, n) { if (k(t)) { var i = e[t],
                        a = n[t];
                    M.isObject(i) && M.isObject(a) ? M.mergeIf(i, a) : e.hasOwnProperty(t) || (e[t] = M.clone(a)) } }, merge: function(t, e, n) { var i, a, r, o, s, l = M.isArray(e) ? e : [e],
                    u = l.length; if (!M.isObject(t)) return t; for (i = (n = n || {}).merger || M._merger, a = 0; a < u; ++a)
                    if (e = l[a], M.isObject(e))
                        for (s = 0, o = (r = Object.keys(e)).length; s < o; ++s) i(r[s], t, e, n);
                return t }, mergeIf: function(t, e) { return M.merge(t, e, { merger: M._mergerIf }) }, extend: Object.assign || function(t) { return M.merge(t, [].slice.call(arguments, 1), { merger: function(t, e, n) { e[t] = n[t] } }) }, inherits: function(t) { var e = this,
                    n = t && t.hasOwnProperty("constructor") ? t.constructor : function() { return e.apply(this, arguments) },
                    i = function() { this.constructor = n }; return i.prototype = e.prototype, n.prototype = new i, n.extend = M.inherits, t && M.extend(n.prototype, t), n.__super__ = e.prototype, n }, _deprecated: function(t, e, n, i) { void 0 !== e && console.warn(t + ': "' + n + '" is deprecated. Please use "' + i + '" instead') } },
        S = M;
    M.callCallback = M.callback, M.indexOf = function(t, e, n) { return Array.prototype.indexOf.call(t, e, n) }, M.getValueOrDefault = M.valueOrDefault, M.getValueAtIndexOrDefault = M.valueAtIndexOrDefault; var C = { linear: function(t) { return t }, easeInQuad: function(t) { return t * t }, easeOutQuad: function(t) { return -t * (t - 2) }, easeInOutQuad: function(t) { return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1) }, easeInCubic: function(t) { return t * t * t }, easeOutCubic: function(t) { return (t -= 1) * t * t + 1 }, easeInOutCubic: function(t) { return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2) }, easeInQuart: function(t) { return t * t * t * t }, easeOutQuart: function(t) { return -((t -= 1) * t * t * t - 1) }, easeInOutQuart: function(t) { return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2) }, easeInQuint: function(t) { return t * t * t * t * t }, easeOutQuint: function(t) { return (t -= 1) * t * t * t * t + 1 }, easeInOutQuint: function(t) { return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2) }, easeInSine: function(t) { return 1 - Math.cos(t * (Math.PI / 2)) }, easeOutSine: function(t) { return Math.sin(t * (Math.PI / 2)) }, easeInOutSine: function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) }, easeInExpo: function(t) { return 0 === t ? 0 : Math.pow(2, 10 * (t - 1)) }, easeOutExpo: function(t) { return 1 === t ? 1 : 1 - Math.pow(2, -10 * t) }, easeInOutExpo: function(t) { return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t)) }, easeInCirc: function(t) { return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1) }, easeOutCirc: function(t) { return Math.sqrt(1 - (t -= 1) * t) }, easeInOutCirc: function(t) { return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) }, easeInElastic: function(t) { var e = 1.70158,
                    n = 0,
                    i = 1; return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) }, easeOutElastic: function(t) { var e = 1.70158,
                    n = 0,
                    i = 1; return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1) }, easeInOutElastic: function(t) { var e = 1.70158,
                    n = 0,
                    i = 1; return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1) }, easeInBack: function(t) { var e = 1.70158; return t * t * ((e + 1) * t - e) }, easeOutBack: function(t) { var e = 1.70158; return (t -= 1) * t * ((e + 1) * t + e) + 1 }, easeInOutBack: function(t) { var e = 1.70158; return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2) }, easeInBounce: function(t) { return 1 - C.easeOutBounce(1 - t) }, easeOutBounce: function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }, easeInOutBounce: function(t) { return t < .5 ? .5 * C.easeInBounce(2 * t) : .5 * C.easeOutBounce(2 * t - 1) + .5 } },
        P = { effects: C };
    S.easingEffects = C; var A = Math.PI,
        D = A / 180,
        T = 2 * A,
        I = A / 2,
        F = A / 4,
        O = 2 * A / 3,
        L = { clear: function(t) { t.ctx.clearRect(0, 0, t.width, t.height) }, roundedRect: function(t, e, n, i, a, r) { if (r) { var o = Math.min(r, a / 2, i / 2),
                        s = e + o,
                        l = n + o,
                        u = e + i - o,
                        d = n + a - o;
                    t.moveTo(e, l), s < u && l < d ? (t.arc(s, l, o, -A, -I), t.arc(u, l, o, -I, 0), t.arc(u, d, o, 0, I), t.arc(s, d, o, I, A)) : s < u ? (t.moveTo(s, n), t.arc(u, l, o, -I, I), t.arc(s, l, o, I, A + I)) : l < d ? (t.arc(s, l, o, -A, 0), t.arc(s, d, o, 0, A)) : t.arc(s, l, o, -A, A), t.closePath(), t.moveTo(e, n) } else t.rect(e, n, i, a) }, drawPoint: function(t, e, n, i, a, r) { var o, s, l, u, d, h = (r || 0) * D; if (e && "object" == typeof e && ("[object HTMLImageElement]" === (o = e.toString()) || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, a), t.rotate(h), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore(); if (!(isNaN(n) || n <= 0)) { switch (t.beginPath(), e) { default: t.arc(i, a, n, 0, T), t.closePath(); break;
                        case "triangle":
                                t.moveTo(i + Math.sin(h) * n, a - Math.cos(h) * n), h += O, t.lineTo(i + Math.sin(h) * n, a - Math.cos(h) * n), h += O, t.lineTo(i + Math.sin(h) * n, a - Math.cos(h) * n), t.closePath(); break;
                        case "rectRounded":
                                u = n - (d = .516 * n), s = Math.cos(h + F) * u, l = Math.sin(h + F) * u, t.arc(i - s, a - l, d, h - A, h - I), t.arc(i + l, a - s, d, h - I, h), t.arc(i + s, a + l, d, h, h + I), t.arc(i - l, a + s, d, h + I, h + A), t.closePath(); break;
                        case "rect":
                                if (!r) { u = Math.SQRT1_2 * n, t.rect(i - u, a - u, 2 * u, 2 * u); break }h += F;
                        case "rectRot":
                                s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + l, a - s), t.lineTo(i + s, a + l), t.lineTo(i - l, a + s), t.closePath(); break;
                        case "crossRot":
                                h += F;
                        case "cross":
                                s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s); break;
                        case "star":
                                s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s), h += F, s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s); break;
                        case "line":
                                s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l); break;
                        case "dash":
                                t.moveTo(i, a), t.lineTo(i + Math.cos(h) * n, a + Math.sin(h) * n) }
                    t.fill(), t.stroke() } }, _isPointInArea: function(t, e) { return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6 }, clipArea: function(t, e) { t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip() }, unclipArea: function(t) { t.restore() }, lineTo: function(t, e, n, i) { var a = n.steppedLine; if (a) { if ("middle" === a) { var r = (e.x + n.x) / 2;
                        t.lineTo(r, i ? n.y : e.y), t.lineTo(r, i ? e.y : n.y) } else "after" === a && !i || "after" !== a && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
                    t.lineTo(n.x, n.y) } else n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y) } },
        R = L;
    S.clear = L.clear, S.drawRoundedRectangle = function(t) { t.beginPath(), L.roundedRect.apply(L, arguments) }; var z = { _set: function(t, e) { return S.merge(this[t] || (this[t] = {}), e) } };
    z._set("global", { defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", defaultLineHeight: 1.2, showLines: !0 }); var N = z,
        B = S.valueOrDefault; var E = { toLineHeight: function(t, e) { var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/); if (!n || "normal" === n[1]) return 1.2 * e; switch (t = +n[2], n[3]) {
                    case "px":
                        return t;
                    case "%":
                        t /= 100 } return e * t }, toPadding: function(t) { var e, n, i, a; return S.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, i = +t.bottom || 0, a = +t.left || 0) : e = n = i = a = +t || 0, { top: e, right: n, bottom: i, left: a, height: e + i, width: a + n } }, _parseFont: function(t) { var e = N.global,
                    n = B(t.fontSize, e.defaultFontSize),
                    i = { family: B(t.fontFamily, e.defaultFontFamily), lineHeight: S.options.toLineHeight(B(t.lineHeight, e.defaultLineHeight), n), size: n, style: B(t.fontStyle, e.defaultFontStyle), weight: null, string: "" }; return i.string = function(t) { return !t || S.isNullOrUndef(t.size) || S.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family }(i), i }, resolve: function(t, e, n, i) { var a, r, o, s = !0; for (a = 0, r = t.length; a < r; ++a)
                    if (void 0 !== (o = t[a]) && (void 0 !== e && "function" == typeof o && (o = o(e), s = !1), void 0 !== n && S.isArray(o) && (o = o[n], s = !1), void 0 !== o)) return i && !s && (i.cacheable = !1), o } },
        W = { _factorize: function(t) { var e, n = [],
                    i = Math.sqrt(t); for (e = 1; e < i; e++) t % e == 0 && (n.push(e), n.push(t / e)); return i === (0 | i) && n.push(i), n.sort((function(t, e) { return t - e })).pop(), n }, log10: Math.log10 || function(t) { var e = Math.log(t) * Math.LOG10E,
                    n = Math.round(e); return t === Math.pow(10, n) ? n : e } },
        V = W;
    S.log10 = W.log10; var H = S,
        j = P,
        q = R,
        U = E,
        Y = V,
        G = { getRtlAdapter: function(t, e, n) { return t ? function(t, e) { return { x: function(n) { return t + t + e - n }, setWidth: function(t) { e = t }, textAlign: function(t) { return "center" === t ? t : "right" === t ? "left" : "right" }, xPlus: function(t, e) { return t - e }, leftForLtr: function(t, e) { return t - e } } }(e, n) : { x: function(t) { return t }, setWidth: function(t) {}, textAlign: function(t) { return t }, xPlus: function(t, e) { return t + e }, leftForLtr: function(t, e) { return t } } }, overrideTextDirection: function(t, e) { var n, i; "ltr" !== e && "rtl" !== e || (i = [(n = t.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = i) }, restoreTextDirection: function(t) { var e = t.prevTextDirection;
                void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1])) } };
    H.easing = j, H.canvas = q, H.options = U, H.math = Y, H.rtl = G; var X = function(t) { H.extend(this, t), this.initialize.apply(this, arguments) };
    H.extend(X.prototype, { _type: void 0, initialize: function() { this.hidden = !1 }, pivot: function() { var t = this; return t._view || (t._view = H.extend({}, t._model)), t._start = {}, t }, transition: function(t) { var e = this,
                n = e._model,
                i = e._start,
                a = e._view; return n && 1 !== t ? (a || (a = e._view = {}), i || (i = e._start = {}), function(t, e, n, i) { var a, r, o, s, l, u, d, h, c, f = Object.keys(n); for (a = 0, r = f.length; a < r; ++a)
                    if (u = n[o = f[a]], e.hasOwnProperty(o) || (e[o] = u), (s = e[o]) !== u && "_" !== o[0]) { if (t.hasOwnProperty(o) || (t[o] = s), (d = typeof u) === typeof(l = t[o]))
                            if ("string" === d) { if ((h = _(l)).valid && (c = _(u)).valid) { e[o] = c.mix(h, i).rgbString(); continue } } else if (H.isFinite(l) && H.isFinite(u)) { e[o] = l + (u - l) * i; continue }
                        e[o] = u } }(i, a, n, t), e) : (e._view = H.extend({}, n), e._start = null, e) }, tooltipPosition: function() { return { x: this._model.x, y: this._model.y } }, hasValue: function() { return H.isNumber(this._model.x) && H.isNumber(this._model.y) } }), X.extend = H.inherits; var K = X,
        Z = K.extend({ chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }),
        $ = Z;
    Object.defineProperty(Z.prototype, "animationObject", { get: function() { return this } }), Object.defineProperty(Z.prototype, "chartInstance", { get: function() { return this.chart }, set: function(t) { this.chart = t } }), N._set("global", { animation: { duration: 1e3, easing: "easeOutQuart", onProgress: H.noop, onComplete: H.noop } }); var J = { animations: [], request: null, addAnimation: function(t, e, n, i) { var a, r, o = this.animations; for (e.chart = t, e.startTime = Date.now(), e.duration = n, i || (t.animating = !0), a = 0, r = o.length; a < r; ++a)
                    if (o[a].chart === t) return void(o[a] = e);
                o.push(e), 1 === o.length && this.requestAnimationFrame() }, cancelAnimation: function(t) { var e = H.findIndex(this.animations, (function(e) { return e.chart === t })); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1) }, requestAnimationFrame: function() { var t = this;
                null === t.request && (t.request = H.requestAnimFrame.call(window, (function() { t.request = null, t.startDigest() }))) }, startDigest: function() { this.advance(), this.animations.length > 0 && this.requestAnimationFrame() }, advance: function() { for (var t, e, n, i, a = this.animations, r = 0; r < a.length;) e = (t = a[r]).chart, n = t.numSteps, i = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1, t.currentStep = Math.min(i, n), H.callback(t.render, [e, t], e), H.callback(t.onAnimationProgress, [t], e), t.currentStep >= n ? (H.callback(t.onAnimationComplete, [t], e), e.animating = !1, a.splice(r, 1)) : ++r } },
        Q = H.options.resolve,
        tt = ["push", "pop", "shift", "splice", "unshift"];

    function et(t, e) { var n = t._chartjs; if (n) { var i = n.listeners,
                a = i.indexOf(e); - 1 !== a && i.splice(a, 1), i.length > 0 || (tt.forEach((function(e) { delete t[e] })), delete t._chartjs) } } var nt = function(t, e) { this.initialize(t, e) };
    H.extend(nt.prototype, { datasetElementType: null, dataElementType: null, _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"], _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"], initialize: function(t, e) { var n = this;
            n.chart = t, n.index = e, n.linkScales(), n.addElements(), n._type = n.getMeta().type }, updateIndex: function(t) { this.index = t }, linkScales: function() { var t = this.getMeta(),
                e = this.chart,
                n = e.scales,
                i = this.getDataset(),
                a = e.options.scales;
            null !== t.xAxisID && t.xAxisID in n && !i.xAxisID || (t.xAxisID = i.xAxisID || a.xAxes[0].id), null !== t.yAxisID && t.yAxisID in n && !i.yAxisID || (t.yAxisID = i.yAxisID || a.yAxes[0].id) }, getDataset: function() { return this.chart.data.datasets[this.index] }, getMeta: function() { return this.chart.getDatasetMeta(this.index) }, getScaleForId: function(t) { return this.chart.scales[t] }, _getValueScaleId: function() { return this.getMeta().yAxisID }, _getIndexScaleId: function() { return this.getMeta().xAxisID }, _getValueScale: function() { return this.getScaleForId(this._getValueScaleId()) }, _getIndexScale: function() { return this.getScaleForId(this._getIndexScaleId()) }, reset: function() { this._update(!0) }, destroy: function() { this._data && et(this._data, this) }, createMetaDataset: function() { var t = this.datasetElementType; return t && new t({ _chart: this.chart, _datasetIndex: this.index }) }, createMetaData: function(t) { var e = this.dataElementType; return e && new e({ _chart: this.chart, _datasetIndex: this.index, _index: t }) }, addElements: function() { var t, e, n = this.getMeta(),
                i = this.getDataset().data || [],
                a = n.data; for (t = 0, e = i.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
            n.dataset = n.dataset || this.createMetaDataset() }, addElementAndReset: function(t) { var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0) }, buildOrUpdateElements: function() { var t, e, n = this,
                i = n.getDataset(),
                a = i.data || (i.data = []);
            n._data !== a && (n._data && et(n._data, n), a && Object.isExtensible(a) && (e = n, (t = a)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [e] } }), tt.forEach((function(e) { var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                    i = t[e];
                Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: function() { var e = Array.prototype.slice.call(arguments),
                            a = i.apply(this, e); return H.each(t._chartjs.listeners, (function(t) { "function" == typeof t[n] && t[n].apply(t, e) })), a } }) })))), n._data = a), n.resyncElements() }, _configure: function() { this._config = H.merge(Object.create(null), [this.chart.options.datasets[this._type], this.getDataset()], { merger: function(t, e, n) { "_meta" !== t && "data" !== t && H._merger(t, e, n) } }) }, _update: function(t) { this._configure(), this._cachedDataOpts = null, this.update(t) }, update: H.noop, transition: function(t) { for (var e = this.getMeta(), n = e.data || [], i = n.length, a = 0; a < i; ++a) n[a].transition(t);
            e.dataset && e.dataset.transition(t) }, draw: function() { var t = this.getMeta(),
                e = t.data || [],
                n = e.length,
                i = 0; for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw() }, getStyle: function(t) { var e, n = this.getMeta(),
                i = n.dataset; return this._configure(), i && void 0 === t ? e = this._resolveDatasetElementOptions(i || {}) : (t = t || 0, e = this._resolveDataElementOptions(n.data[t] || {}, t)), !1 !== e.fill && null !== e.fill || (e.backgroundColor = e.borderColor), e }, _resolveDatasetElementOptions: function(t, e) { var n, i, a, r, o = this,
                s = o.chart,
                l = o._config,
                u = t.custom || {},
                d = s.options.elements[o.datasetElementType.prototype._type] || {},
                h = o._datasetElementOptions,
                c = {},
                f = { chart: s, dataset: o.getDataset(), datasetIndex: o.index, hover: e }; for (n = 0, i = h.length; n < i; ++n) a = h[n], r = e ? "hover" + a.charAt(0).toUpperCase() + a.slice(1) : a, c[a] = Q([u[r], l[r], d[r]], f); return c }, _resolveDataElementOptions: function(t, e) { var n = this,
                i = t && t.custom,
                a = n._cachedDataOpts; if (a && !i) return a; var r, o, s, l, u = n.chart,
                d = n._config,
                h = u.options.elements[n.dataElementType.prototype._type] || {},
                c = n._dataElementOptions,
                f = {},
                g = { chart: u, dataIndex: e, dataset: n.getDataset(), datasetIndex: n.index },
                p = { cacheable: !i }; if (i = i || {}, H.isArray(c))
                for (o = 0, s = c.length; o < s; ++o) f[l = c[o]] = Q([i[l], d[l], h[l]], g, e, p);
            else
                for (o = 0, s = (r = Object.keys(c)).length; o < s; ++o) f[l = r[o]] = Q([i[l], d[c[l]], d[l], h[l]], g, e, p); return p.cacheable && (n._cachedDataOpts = Object.freeze(f)), f }, removeHoverStyle: function(t) { H.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle }, setHoverStyle: function(t) { var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                i = t.custom || {},
                a = t._model,
                r = H.getHoverColor;
            t.$previousStyle = { backgroundColor: a.backgroundColor, borderColor: a.borderColor, borderWidth: a.borderWidth }, a.backgroundColor = Q([i.hoverBackgroundColor, e.hoverBackgroundColor, r(a.backgroundColor)], void 0, n), a.borderColor = Q([i.hoverBorderColor, e.hoverBorderColor, r(a.borderColor)], void 0, n), a.borderWidth = Q([i.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth], void 0, n) }, _removeDatasetHoverStyle: function() { var t = this.getMeta().dataset;
            t && this.removeHoverStyle(t) }, _setDatasetHoverStyle: function() { var t, e, n, i, a, r, o = this.getMeta().dataset,
                s = {}; if (o) { for (r = o._model, a = this._resolveDatasetElementOptions(o, !0), t = 0, e = (i = Object.keys(a)).length; t < e; ++t) s[n = i[t]] = r[n], r[n] = a[n];
                o.$previousStyle = s } }, resyncElements: function() { var t = this.getMeta(),
                e = this.getDataset().data,
                n = t.data.length,
                i = e.length;
            i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n) }, insertElements: function(t, e) { for (var n = 0; n < e; ++n) this.addElementAndReset(t + n) }, onDataPush: function() { var t = arguments.length;
            this.insertElements(this.getDataset().data.length - t, t) }, onDataPop: function() { this.getMeta().data.pop() }, onDataShift: function() { this.getMeta().data.shift() }, onDataSplice: function(t, e) { this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2) }, onDataUnshift: function() { this.insertElements(0, arguments.length) } }), nt.extend = H.inherits; var it = nt,
        at = 2 * Math.PI;

    function rt(t, e) { var n = e.startAngle,
            i = e.endAngle,
            a = e.pixelMargin,
            r = a / e.outerRadius,
            o = e.x,
            s = e.y;
        t.beginPath(), t.arc(o, s, e.outerRadius, n - r, i + r), e.innerRadius > a ? (r = a / e.innerRadius, t.arc(o, s, e.innerRadius - a, i + r, n - r, !0)) : t.arc(o, s, a, i + Math.PI / 2, n - Math.PI / 2), t.closePath(), t.clip() }

    function ot(t, e, n) { var i = "inner" === e.borderAlign;
        i ? (t.lineWidth = 2 * e.borderWidth, t.lineJoin = "round") : (t.lineWidth = e.borderWidth, t.lineJoin = "bevel"), n.fullCircles && function(t, e, n, i) { var a, r = n.endAngle; for (i && (n.endAngle = n.startAngle + at, rt(t, n), n.endAngle = r, n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += at, n.fullCircles--)), t.beginPath(), t.arc(n.x, n.y, n.innerRadius, n.startAngle + at, n.startAngle, !0), a = 0; a < n.fullCircles; ++a) t.stroke(); for (t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + at), a = 0; a < n.fullCircles; ++a) t.stroke() }(t, e, n, i), i && rt(t, n), t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle), t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0), t.closePath(), t.stroke() }
    N._set("global", { elements: { arc: { backgroundColor: N.global.defaultColor, borderColor: "#fff", borderWidth: 2, borderAlign: "center" } } }); var st = K.extend({ _type: "arc", inLabelRange: function(t) { var e = this._view; return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2) }, inRange: function(t, e) { var n = this._view; if (n) { for (var i = H.getAngleFromPoint(n, { x: t, y: e }), a = i.angle, r = i.distance, o = n.startAngle, s = n.endAngle; s < o;) s += at; for (; a > s;) a -= at; for (; a < o;) a += at; var l = a >= o && a <= s,
                        u = r >= n.innerRadius && r <= n.outerRadius; return l && u } return !1 }, getCenterPoint: function() { var t = this._view,
                    e = (t.startAngle + t.endAngle) / 2,
                    n = (t.innerRadius + t.outerRadius) / 2; return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n } }, getArea: function() { var t = this._view; return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2)) }, tooltipPosition: function() { var t = this._view,
                    e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                    n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius; return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n } }, draw: function() { var t, e = this._chart.ctx,
                    n = this._view,
                    i = "inner" === n.borderAlign ? .33 : 0,
                    a = { x: n.x, y: n.y, innerRadius: n.innerRadius, outerRadius: Math.max(n.outerRadius - i, 0), pixelMargin: i, startAngle: n.startAngle, endAngle: n.endAngle, fullCircles: Math.floor(n.circumference / at) }; if (e.save(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, a.fullCircles) { for (a.endAngle = a.startAngle + at, e.beginPath(), e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), t = 0; t < a.fullCircles; ++t) e.fill();
                    a.endAngle = a.startAngle + n.circumference % at }
                e.beginPath(), e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), e.fill(), n.borderWidth && ot(e, n, a), e.restore() } }),
        lt = H.valueOrDefault,
        ut = N.global.defaultColor;
    N._set("global", { elements: { line: { tension: .4, backgroundColor: ut, borderWidth: 3, borderColor: ut, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 } } }); var dt = K.extend({ _type: "line", draw: function() { var t, e, n, i = this,
                    a = i._view,
                    r = i._chart.ctx,
                    o = a.spanGaps,
                    s = i._children.slice(),
                    l = N.global,
                    u = l.elements.line,
                    d = -1,
                    h = i._loop; if (s.length) { if (i._loop) { for (t = 0; t < s.length; ++t)
                            if (e = H.previousItem(s, t), !s[t]._view.skip && e._view.skip) { s = s.slice(t).concat(s.slice(0, t)), h = o; break }
                        h && s.push(s[0]) } for (r.save(), r.lineCap = a.borderCapStyle || u.borderCapStyle, r.setLineDash && r.setLineDash(a.borderDash || u.borderDash), r.lineDashOffset = lt(a.borderDashOffset, u.borderDashOffset), r.lineJoin = a.borderJoinStyle || u.borderJoinStyle, r.lineWidth = lt(a.borderWidth, u.borderWidth), r.strokeStyle = a.borderColor || l.defaultColor, r.beginPath(), (n = s[0]._view).skip || (r.moveTo(n.x, n.y), d = 0), t = 1; t < s.length; ++t) n = s[t]._view, e = -1 === d ? H.previousItem(s, t) : s[d], n.skip || (d !== t - 1 && !o || -1 === d ? r.moveTo(n.x, n.y) : H.canvas.lineTo(r, e._view, n), d = t);
                    h && r.closePath(), r.stroke(), r.restore() } } }),
        ht = H.valueOrDefault,
        ct = N.global.defaultColor;

    function ft(t) { var e = this._view; return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius }
    N._set("global", { elements: { point: { radius: 3, pointStyle: "circle", backgroundColor: ct, borderColor: ct, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 } } }); var gt = K.extend({ _type: "point", inRange: function(t, e) { var n = this._view; return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2) }, inLabelRange: ft, inXRange: ft, inYRange: function(t) { var e = this._view; return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius }, getCenterPoint: function() { var t = this._view; return { x: t.x, y: t.y } }, getArea: function() { return Math.PI * Math.pow(this._view.radius, 2) }, tooltipPosition: function() { var t = this._view; return { x: t.x, y: t.y, padding: t.radius + t.borderWidth } }, draw: function(t) { var e = this._view,
                    n = this._chart.ctx,
                    i = e.pointStyle,
                    a = e.rotation,
                    r = e.radius,
                    o = e.x,
                    s = e.y,
                    l = N.global,
                    u = l.defaultColor;
                e.skip || (void 0 === t || H.canvas._isPointInArea(e, t)) && (n.strokeStyle = e.borderColor || u, n.lineWidth = ht(e.borderWidth, l.elements.point.borderWidth), n.fillStyle = e.backgroundColor || u, H.canvas.drawPoint(n, i, r, o, s, a)) } }),
        pt = N.global.defaultColor;

    function mt(t) { return t && void 0 !== t.width }

    function vt(t) { var e, n, i, a, r; return mt(t) ? (r = t.width / 2, e = t.x - r, n = t.x + r, i = Math.min(t.y, t.base), a = Math.max(t.y, t.base)) : (r = t.height / 2, e = Math.min(t.x, t.base), n = Math.max(t.x, t.base), i = t.y - r, a = t.y + r), { left: e, top: i, right: n, bottom: a } }

    function bt(t, e, n) { return t === e ? n : t === n ? e : t }

    function xt(t, e, n) { var i, a, r, o, s = t.borderWidth,
            l = function(t) { var e = t.borderSkipped,
                    n = {}; return e ? (t.horizontal ? t.base > t.x && (e = bt(e, "left", "right")) : t.base < t.y && (e = bt(e, "bottom", "top")), n[e] = !0, n) : n }(t); return H.isObject(s) ? (i = +s.top || 0, a = +s.right || 0, r = +s.bottom || 0, o = +s.left || 0) : i = a = r = o = +s || 0, { t: l.top || i < 0 ? 0 : i > n ? n : i, r: l.right || a < 0 ? 0 : a > e ? e : a, b: l.bottom || r < 0 ? 0 : r > n ? n : r, l: l.left || o < 0 ? 0 : o > e ? e : o } }

    function yt(t, e, n) { var i = null === e,
            a = null === n,
            r = !(!t || i && a) && vt(t); return r && (i || e >= r.left && e <= r.right) && (a || n >= r.top && n <= r.bottom) }
    N._set("global", { elements: { rectangle: { backgroundColor: pt, borderColor: pt, borderSkipped: "bottom", borderWidth: 0 } } }); var _t = K.extend({ _type: "rectangle", draw: function() { var t = this._chart.ctx,
                    e = this._view,
                    n = function(t) { var e = vt(t),
                            n = e.right - e.left,
                            i = e.bottom - e.top,
                            a = xt(t, n / 2, i / 2); return { outer: { x: e.left, y: e.top, w: n, h: i }, inner: { x: e.left + a.l, y: e.top + a.t, w: n - a.l - a.r, h: i - a.t - a.b } } }(e),
                    i = n.outer,
                    a = n.inner;
                t.fillStyle = e.backgroundColor, t.fillRect(i.x, i.y, i.w, i.h), i.w === a.w && i.h === a.h || (t.save(), t.beginPath(), t.rect(i.x, i.y, i.w, i.h), t.clip(), t.fillStyle = e.borderColor, t.rect(a.x, a.y, a.w, a.h), t.fill("evenodd"), t.restore()) }, height: function() { var t = this._view; return t.base - t.y }, inRange: function(t, e) { return yt(this._view, t, e) }, inLabelRange: function(t, e) { var n = this._view; return mt(n) ? yt(n, t, null) : yt(n, null, e) }, inXRange: function(t) { return yt(this._view, t, null) }, inYRange: function(t) { return yt(this._view, null, t) }, getCenterPoint: function() { var t, e, n = this._view; return mt(n) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), { x: t, y: e } }, getArea: function() { var t = this._view; return mt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base) }, tooltipPosition: function() { var t = this._view; return { x: t.x, y: t.y } } }),
        kt = {},
        wt = st,
        Mt = dt,
        St = gt,
        Ct = _t;
    kt.Arc = wt, kt.Line = Mt, kt.Point = St, kt.Rectangle = Ct; var Pt = H._deprecated,
        At = H.valueOrDefault;

    function Dt(t, e, n) { var i, a, r = n.barThickness,
            o = e.stackCount,
            s = e.pixels[t],
            l = H.isNullOrUndef(r) ? function(t, e) { var n, i, a, r, o = t._length; for (a = 1, r = e.length; a < r; ++a) o = Math.min(o, Math.abs(e[a] - e[a - 1])); for (a = 0, r = t.getTicks().length; a < r; ++a) i = t.getPixelForTick(a), o = a > 0 ? Math.min(o, Math.abs(i - n)) : o, n = i; return o }(e.scale, e.pixels) : -1; return H.isNullOrUndef(r) ? (i = l * n.categoryPercentage, a = n.barPercentage) : (i = r * o, a = 1), { chunk: i / o, ratio: a, start: s - i / 2 } }
    N._set("bar", { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", offset: !0, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } }), N._set("global", { datasets: { bar: { categoryPercentage: .8, barPercentage: .9 } } }); var Tt = it.extend({ dataElementType: kt.Rectangle, _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"], initialize: function() { var t, e, n = this;
                it.prototype.initialize.apply(n, arguments), (t = n.getMeta()).stack = n.getDataset().stack, t.bar = !0, e = n._getIndexScale().options, Pt("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), Pt("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), Pt("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), Pt("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), Pt("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness") }, update: function(t) { var e, n, i = this.getMeta().data; for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) this.updateElement(i[e], e, t) }, updateElement: function(t, e, n) { var i = this,
                    a = i.getMeta(),
                    r = i.getDataset(),
                    o = i._resolveDataElementOptions(t, e);
                t._xScale = i.getScaleForId(a.xAxisID), t._yScale = i.getScaleForId(a.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = { backgroundColor: o.backgroundColor, borderColor: o.borderColor, borderSkipped: o.borderSkipped, borderWidth: o.borderWidth, datasetLabel: r.label, label: i.chart.data.labels[e] }, H.isArray(r.data[e]) && (t._model.borderSkipped = null), i._updateElementGeometry(t, e, n, o), t.pivot() }, _updateElementGeometry: function(t, e, n, i) { var a = this,
                    r = t._model,
                    o = a._getValueScale(),
                    s = o.getBasePixel(),
                    l = o.isHorizontal(),
                    u = a._ruler || a.getRuler(),
                    d = a.calculateBarValuePixels(a.index, e, i),
                    h = a.calculateBarIndexPixels(a.index, e, u, i);
                r.horizontal = l, r.base = n ? s : d.base, r.x = l ? n ? s : d.head : h.center, r.y = l ? h.center : n ? s : d.head, r.height = l ? h.size : void 0, r.width = l ? void 0 : h.size }, _getStacks: function(t) { var e, n, i = this._getIndexScale(),
                    a = i._getMatchingVisibleMetas(this._type),
                    r = i.options.stacked,
                    o = a.length,
                    s = []; for (e = 0; e < o && (n = a[e], (!1 === r || -1 === s.indexOf(n.stack) || void 0 === r && void 0 === n.stack) && s.push(n.stack), n.index !== t); ++e); return s }, getStackCount: function() { return this._getStacks().length }, getStackIndex: function(t, e) { var n = this._getStacks(t),
                    i = void 0 !== e ? n.indexOf(e) : -1; return -1 === i ? n.length - 1 : i }, getRuler: function() { var t, e, n = this._getIndexScale(),
                    i = []; for (t = 0, e = this.getMeta().data.length; t < e; ++t) i.push(n.getPixelForValue(null, t, this.index)); return { pixels: i, start: n._startPixel, end: n._endPixel, stackCount: this.getStackCount(), scale: n } }, calculateBarValuePixels: function(t, e, n) { var i, a, r, o, s, l, u, d = this.chart,
                    h = this._getValueScale(),
                    c = h.isHorizontal(),
                    f = d.data.datasets,
                    g = h._getMatchingVisibleMetas(this._type),
                    p = h._parseValue(f[t].data[e]),
                    m = n.minBarLength,
                    v = h.options.stacked,
                    b = this.getMeta().stack,
                    x = void 0 === p.start ? 0 : p.max >= 0 && p.min >= 0 ? p.min : p.max,
                    y = void 0 === p.start ? p.end : p.max >= 0 && p.min >= 0 ? p.max - p.min : p.min - p.max,
                    _ = g.length; if (v || void 0 === v && void 0 !== b)
                    for (i = 0; i < _ && (a = g[i]).index !== t; ++i) a.stack === b && (r = void 0 === (u = h._parseValue(f[a.index].data[e])).start ? u.end : u.min >= 0 && u.max >= 0 ? u.max : u.min, (p.min < 0 && r < 0 || p.max >= 0 && r > 0) && (x += r)); return o = h.getPixelForValue(x), l = (s = h.getPixelForValue(x + y)) - o, void 0 !== m && Math.abs(l) < m && (l = m, s = y >= 0 && !c || y < 0 && c ? o - m : o + m), { size: l, base: o, head: s, center: s + l / 2 } }, calculateBarIndexPixels: function(t, e, n, i) { var a = "flex" === i.barThickness ? function(t, e, n) { var i, a = e.pixels,
                            r = a[t],
                            o = t > 0 ? a[t - 1] : null,
                            s = t < a.length - 1 ? a[t + 1] : null,
                            l = n.categoryPercentage; return null === o && (o = r - (null === s ? e.end - e.start : s - r)), null === s && (s = r + r - o), i = r - (r - Math.min(o, s)) / 2 * l, { chunk: Math.abs(s - o) / 2 * l / e.stackCount, ratio: n.barPercentage, start: i } }(e, n, i) : Dt(e, n, i),
                    r = this.getStackIndex(t, this.getMeta().stack),
                    o = a.start + a.chunk * r + a.chunk / 2,
                    s = Math.min(At(i.maxBarThickness, 1 / 0), a.chunk * a.ratio); return { base: o - s / 2, head: o + s / 2, center: o, size: s } }, draw: function() { var t = this.chart,
                    e = this._getValueScale(),
                    n = this.getMeta().data,
                    i = this.getDataset(),
                    a = n.length,
                    r = 0; for (H.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) { var o = e._parseValue(i.data[r]);
                    isNaN(o.min) || isNaN(o.max) || n[r].draw() }
                H.canvas.unclipArea(t.ctx) }, _resolveDataElementOptions: function() { var t = this,
                    e = H.extend({}, it.prototype._resolveDataElementOptions.apply(t, arguments)),
                    n = t._getIndexScale().options,
                    i = t._getValueScale().options; return e.barPercentage = At(n.barPercentage, e.barPercentage), e.barThickness = At(n.barThickness, e.barThickness), e.categoryPercentage = At(n.categoryPercentage, e.categoryPercentage), e.maxBarThickness = At(n.maxBarThickness, e.maxBarThickness), e.minBarLength = At(i.minBarLength, e.minBarLength), e } }),
        It = H.valueOrDefault,
        Ft = H.options.resolve;
    N._set("bubble", { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] }, tooltips: { callbacks: { title: function() { return "" }, label: function(t, e) { var n = e.datasets[t.datasetIndex].label || "",
                        i = e.datasets[t.datasetIndex].data[t.index]; return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")" } } } }); var Ot = it.extend({ dataElementType: kt.Point, _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"], update: function(t) { var e = this,
                    n = e.getMeta().data;
                H.each(n, (function(n, i) { e.updateElement(n, i, t) })) }, updateElement: function(t, e, n) { var i = this,
                    a = i.getMeta(),
                    r = t.custom || {},
                    o = i.getScaleForId(a.xAxisID),
                    s = i.getScaleForId(a.yAxisID),
                    l = i._resolveDataElementOptions(t, e),
                    u = i.getDataset().data[e],
                    d = i.index,
                    h = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof u ? u : NaN, e, d),
                    c = n ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = { backgroundColor: l.backgroundColor, borderColor: l.borderColor, borderWidth: l.borderWidth, hitRadius: l.hitRadius, pointStyle: l.pointStyle, rotation: l.rotation, radius: n ? 0 : l.radius, skip: r.skip || isNaN(h) || isNaN(c), x: h, y: c }, t.pivot() }, setHoverStyle: function(t) { var e = t._model,
                    n = t._options,
                    i = H.getHoverColor;
                t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = It(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = It(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = It(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius }, _resolveDataElementOptions: function(t, e) { var n = this,
                    i = n.chart,
                    a = n.getDataset(),
                    r = t.custom || {},
                    o = a.data[e] || {},
                    s = it.prototype._resolveDataElementOptions.apply(n, arguments),
                    l = { chart: i, dataIndex: e, dataset: a, datasetIndex: n.index }; return n._cachedDataOpts === s && (s = H.extend({}, s)), s.radius = Ft([r.radius, o.r, n._config.radius, i.options.elements.point.radius], l, e), s } }),
        Lt = H.valueOrDefault,
        Rt = Math.PI,
        zt = 2 * Rt,
        Nt = Rt / 2;
    N._set("doughnut", { animation: { animateRotate: !0, animateScale: !1 }, hover: { mode: "single" }, legendCallback: function(t) { var e, n, i, a = document.createElement("ul"),
                r = t.data,
                o = r.datasets,
                s = r.labels; if (a.setAttribute("class", t.id + "-legend"), o.length)
                for (e = 0, n = o[0].data.length; e < n; ++e)(i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e])); return a.outerHTML }, legend: { labels: { generateLabels: function(t) { var e = t.data; return e.labels.length && e.datasets.length ? e.labels.map((function(n, i) { var a = t.getDatasetMeta(0),
                            r = a.controller.getStyle(i); return { text: n, fillStyle: r.backgroundColor, strokeStyle: r.borderColor, lineWidth: r.borderWidth, hidden: isNaN(e.datasets[0].data[i]) || a.data[i].hidden, index: i } })) : [] } }, onClick: function(t, e) { var n, i, a, r = e.index,
                    o = this.chart; for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(a = o.getDatasetMeta(n)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
                o.update() } }, cutoutPercentage: 50, rotation: -Nt, circumference: zt, tooltips: { callbacks: { title: function() { return "" }, label: function(t, e) { var n = e.labels[t.index],
                        i = ": " + e.datasets[t.datasetIndex].data[t.index]; return H.isArray(n) ? (n = n.slice())[0] += i : n += i, n } } } }); var Bt = it.extend({ dataElementType: kt.Arc, linkScales: H.noop, _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"], getRingIndex: function(t) { for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e; return e }, update: function(t) { var e, n, i, a, r = this,
                o = r.chart,
                s = o.chartArea,
                l = o.options,
                u = 1,
                d = 1,
                h = 0,
                c = 0,
                f = r.getMeta(),
                g = f.data,
                p = l.cutoutPercentage / 100 || 0,
                m = l.circumference,
                v = r._getRingWeight(r.index); if (m < zt) { var b = l.rotation % zt,
                    x = (b += b >= Rt ? -zt : b < -Rt ? zt : 0) + m,
                    y = Math.cos(b),
                    _ = Math.sin(b),
                    k = Math.cos(x),
                    w = Math.sin(x),
                    M = b <= 0 && x >= 0 || x >= zt,
                    S = b <= Nt && x >= Nt || x >= zt + Nt,
                    C = b <= -Nt && x >= -Nt || x >= Rt + Nt,
                    P = b === -Rt || x >= Rt ? -1 : Math.min(y, y * p, k, k * p),
                    A = C ? -1 : Math.min(_, _ * p, w, w * p),
                    D = M ? 1 : Math.max(y, y * p, k, k * p),
                    T = S ? 1 : Math.max(_, _ * p, w, w * p);
                u = (D - P) / 2, d = (T - A) / 2, h = -(D + P) / 2, c = -(T + A) / 2 } for (i = 0, a = g.length; i < a; ++i) g[i]._options = r._resolveDataElementOptions(g[i], i); for (o.borderWidth = r.getMaxBorderWidth(), e = (s.right - s.left - o.borderWidth) / u, n = (s.bottom - s.top - o.borderWidth) / d, o.outerRadius = Math.max(Math.min(e, n) / 2, 0), o.innerRadius = Math.max(o.outerRadius * p, 0), o.radiusLength = (o.outerRadius - o.innerRadius) / (r._getVisibleDatasetWeightTotal() || 1), o.offsetX = h * o.outerRadius, o.offsetY = c * o.outerRadius, f.total = r.calculateTotal(), r.outerRadius = o.outerRadius - o.radiusLength * r._getRingWeightOffset(r.index), r.innerRadius = Math.max(r.outerRadius - o.radiusLength * v, 0), i = 0, a = g.length; i < a; ++i) r.updateElement(g[i], i, t) }, updateElement: function(t, e, n) { var i = this,
                a = i.chart,
                r = a.chartArea,
                o = a.options,
                s = o.animation,
                l = (r.left + r.right) / 2,
                u = (r.top + r.bottom) / 2,
                d = o.rotation,
                h = o.rotation,
                c = i.getDataset(),
                f = n && s.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(c.data[e]) * (o.circumference / zt),
                g = n && s.animateScale ? 0 : i.innerRadius,
                p = n && s.animateScale ? 0 : i.outerRadius,
                m = t._options || {};
            H.extend(t, { _datasetIndex: i.index, _index: e, _model: { backgroundColor: m.backgroundColor, borderColor: m.borderColor, borderWidth: m.borderWidth, borderAlign: m.borderAlign, x: l + a.offsetX, y: u + a.offsetY, startAngle: d, endAngle: h, circumference: f, outerRadius: p, innerRadius: g, label: H.valueAtIndexOrDefault(c.label, e, a.data.labels[e]) } }); var v = t._model;
            n && s.animateRotate || (v.startAngle = 0 === e ? o.rotation : i.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot() }, calculateTotal: function() { var t, e = this.getDataset(),
                n = this.getMeta(),
                i = 0; return H.each(n.data, (function(n, a) { t = e.data[a], isNaN(t) || n.hidden || (i += Math.abs(t)) })), i }, calculateCircumference: function(t) { var e = this.getMeta().total; return e > 0 && !isNaN(t) ? zt * (Math.abs(t) / e) : 0 }, getMaxBorderWidth: function(t) { var e, n, i, a, r, o, s, l, u = 0,
                d = this.chart; if (!t)
                for (e = 0, n = d.data.datasets.length; e < n; ++e)
                    if (d.isDatasetVisible(e)) { t = (i = d.getDatasetMeta(e)).data, e !== this.index && (r = i.controller); break }
            if (!t) return 0; for (e = 0, n = t.length; e < n; ++e) a = t[e], r ? (r._configure(), o = r._resolveDataElementOptions(a, e)) : o = a._options, "inner" !== o.borderAlign && (s = o.borderWidth, u = (l = o.hoverBorderWidth) > (u = s > u ? s : u) ? l : u); return u }, setHoverStyle: function(t) { var e = t._model,
                n = t._options,
                i = H.getHoverColor;
            t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth }, e.backgroundColor = Lt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Lt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Lt(n.hoverBorderWidth, n.borderWidth) }, _getRingWeightOffset: function(t) { for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n)); return e }, _getRingWeight: function(t) { return Math.max(Lt(this.chart.data.datasets[t].weight, 1), 0) }, _getVisibleDatasetWeightTotal: function() { return this._getRingWeightOffset(this.chart.data.datasets.length) } });
    N._set("horizontalBar", { hover: { mode: "index", axis: "y" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ type: "category", position: "left", offset: !0, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { mode: "index", axis: "y" } }), N._set("global", { datasets: { horizontalBar: { categoryPercentage: .8, barPercentage: .9 } } }); var Et = Tt.extend({ _getValueScaleId: function() { return this.getMeta().xAxisID }, _getIndexScaleId: function() { return this.getMeta().yAxisID } }),
        Wt = H.valueOrDefault,
        Vt = H.options.resolve,
        Ht = H.canvas._isPointInArea;

    function jt(t, e) { var n = t && t.options.ticks || {},
            i = n.reverse,
            a = void 0 === n.min ? e : 0,
            r = void 0 === n.max ? e : 0; return { start: i ? r : a, end: i ? a : r } }

    function qt(t, e, n) { var i = n / 2,
            a = jt(t, i),
            r = jt(e, i); return { top: r.end, right: a.end, bottom: r.start, left: a.start } }

    function Ut(t) { var e, n, i, a; return H.isObject(t) ? (e = t.top, n = t.right, i = t.bottom, a = t.left) : e = n = i = a = t, { top: e, right: n, bottom: i, left: a } }
    N._set("line", { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } }); var Yt = it.extend({ datasetElementType: kt.Line, dataElementType: kt.Point, _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"], _dataElementOptions: { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" }, update: function(t) { var e, n, i = this,
                    a = i.getMeta(),
                    r = a.dataset,
                    o = a.data || [],
                    s = i.chart.options,
                    l = i._config,
                    u = i._showLine = Wt(l.showLine, s.showLines); for (i._xScale = i.getScaleForId(a.xAxisID), i._yScale = i.getScaleForId(a.yAxisID), u && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = i._yScale, r._datasetIndex = i.index, r._children = o, r._model = i._resolveDatasetElementOptions(r), r.pivot()), e = 0, n = o.length; e < n; ++e) i.updateElement(o[e], e, t); for (u && 0 !== r._model.tension && i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e) o[e].pivot() }, updateElement: function(t, e, n) { var i, a, r = this,
                    o = r.getMeta(),
                    s = t.custom || {},
                    l = r.getDataset(),
                    u = r.index,
                    d = l.data[e],
                    h = r._xScale,
                    c = r._yScale,
                    f = o.dataset._model,
                    g = r._resolveDataElementOptions(t, e);
                i = h.getPixelForValue("object" == typeof d ? d : NaN, e, u), a = n ? c.getBasePixel() : r.calculatePointY(d, e, u), t._xScale = h, t._yScale = c, t._options = g, t._datasetIndex = u, t._index = e, t._model = { x: i, y: a, skip: s.skip || isNaN(i) || isNaN(a), radius: g.radius, pointStyle: g.pointStyle, rotation: g.rotation, backgroundColor: g.backgroundColor, borderColor: g.borderColor, borderWidth: g.borderWidth, tension: Wt(s.tension, f ? f.tension : 0), steppedLine: !!f && f.steppedLine, hitRadius: g.hitRadius } }, _resolveDatasetElementOptions: function(t) { var e = this,
                    n = e._config,
                    i = t.custom || {},
                    a = e.chart.options,
                    r = a.elements.line,
                    o = it.prototype._resolveDatasetElementOptions.apply(e, arguments); return o.spanGaps = Wt(n.spanGaps, a.spanGaps), o.tension = Wt(n.lineTension, r.tension), o.steppedLine = Vt([i.steppedLine, n.steppedLine, r.stepped]), o.clip = Ut(Wt(n.clip, qt(e._xScale, e._yScale, o.borderWidth))), o }, calculatePointY: function(t, e, n) { var i, a, r, o, s, l, u, d = this.chart,
                    h = this._yScale,
                    c = 0,
                    f = 0; if (h.options.stacked) { for (s = +h.getRightValue(t), u = (l = d._getSortedVisibleDatasetMetas()).length, i = 0; i < u && (r = l[i]).index !== n; ++i) a = d.data.datasets[r.index], "line" === r.type && r.yAxisID === h.id && ((o = +h.getRightValue(a.data[e])) < 0 ? f += o || 0 : c += o || 0); return s < 0 ? h.getPixelForValue(f + s) : h.getPixelForValue(c + s) } return h.getPixelForValue(t) }, updateBezierControlPoints: function() { var t, e, n, i, a = this.chart,
                    r = this.getMeta(),
                    o = r.dataset._model,
                    s = a.chartArea,
                    l = r.data || [];

                function u(t, e, n) { return Math.max(Math.min(t, n), e) } if (o.spanGaps && (l = l.filter((function(t) { return !t._model.skip }))), "monotone" === o.cubicInterpolationMode) H.splineCurveMonotone(l);
                else
                    for (t = 0, e = l.length; t < e; ++t) n = l[t]._model, i = H.splineCurve(H.previousItem(l, t)._model, n, H.nextItem(l, t)._model, o.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y; if (a.options.elements.line.capBezierPoints)
                    for (t = 0, e = l.length; t < e; ++t) n = l[t]._model, Ht(n, s) && (t > 0 && Ht(l[t - 1]._model, s) && (n.controlPointPreviousX = u(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = u(n.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && Ht(l[t + 1]._model, s) && (n.controlPointNextX = u(n.controlPointNextX, s.left, s.right), n.controlPointNextY = u(n.controlPointNextY, s.top, s.bottom))) }, draw: function() { var t, e = this.chart,
                    n = this.getMeta(),
                    i = n.data || [],
                    a = e.chartArea,
                    r = e.canvas,
                    o = 0,
                    s = i.length; for (this._showLine && (t = n.dataset._model.clip, H.canvas.clipArea(e.ctx, { left: !1 === t.left ? 0 : a.left - t.left, right: !1 === t.right ? r.width : a.right + t.right, top: !1 === t.top ? 0 : a.top - t.top, bottom: !1 === t.bottom ? r.height : a.bottom + t.bottom }), n.dataset.draw(), H.canvas.unclipArea(e.ctx)); o < s; ++o) i[o].draw(a) }, setHoverStyle: function(t) { var e = t._model,
                    n = t._options,
                    i = H.getHoverColor;
                t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = Wt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Wt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Wt(n.hoverBorderWidth, n.borderWidth), e.radius = Wt(n.hoverRadius, n.radius) } }),
        Gt = H.options.resolve;
    N._set("polarArea", { scale: { type: "radialLinear", angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 } }, animation: { animateRotate: !0, animateScale: !0 }, startAngle: -.5 * Math.PI, legendCallback: function(t) { var e, n, i, a = document.createElement("ul"),
                r = t.data,
                o = r.datasets,
                s = r.labels; if (a.setAttribute("class", t.id + "-legend"), o.length)
                for (e = 0, n = o[0].data.length; e < n; ++e)(i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e])); return a.outerHTML }, legend: { labels: { generateLabels: function(t) { var e = t.data; return e.labels.length && e.datasets.length ? e.labels.map((function(n, i) { var a = t.getDatasetMeta(0),
                            r = a.controller.getStyle(i); return { text: n, fillStyle: r.backgroundColor, strokeStyle: r.borderColor, lineWidth: r.borderWidth, hidden: isNaN(e.datasets[0].data[i]) || a.data[i].hidden, index: i } })) : [] } }, onClick: function(t, e) { var n, i, a, r = e.index,
                    o = this.chart; for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(a = o.getDatasetMeta(n)).data[r].hidden = !a.data[r].hidden;
                o.update() } }, tooltips: { callbacks: { title: function() { return "" }, label: function(t, e) { return e.labels[t.index] + ": " + t.yLabel } } } }); var Xt = it.extend({ dataElementType: kt.Arc, linkScales: H.noop, _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"], _getIndexScaleId: function() { return this.chart.scale.id }, _getValueScaleId: function() { return this.chart.scale.id }, update: function(t) { var e, n, i, a = this,
                r = a.getDataset(),
                o = a.getMeta(),
                s = a.chart.options.startAngle || 0,
                l = a._starts = [],
                u = a._angles = [],
                d = o.data; for (a._updateRadius(), o.count = a.countVisibleElements(), e = 0, n = r.data.length; e < n; e++) l[e] = s, i = a._computeAngle(e), u[e] = i, s += i; for (e = 0, n = d.length; e < n; ++e) d[e]._options = a._resolveDataElementOptions(d[e], e), a.updateElement(d[e], e, t) }, _updateRadius: function() { var t = this,
                e = t.chart,
                n = e.chartArea,
                i = e.options,
                a = Math.min(n.right - n.left, n.bottom - n.top);
            e.outerRadius = Math.max(a / 2, 0), e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength }, updateElement: function(t, e, n) { var i = this,
                a = i.chart,
                r = i.getDataset(),
                o = a.options,
                s = o.animation,
                l = a.scale,
                u = a.data.labels,
                d = l.xCenter,
                h = l.yCenter,
                c = o.startAngle,
                f = t.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
                g = i._starts[e],
                p = g + (t.hidden ? 0 : i._angles[e]),
                m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
                v = t._options || {};
            H.extend(t, { _datasetIndex: i.index, _index: e, _scale: l, _model: { backgroundColor: v.backgroundColor, borderColor: v.borderColor, borderWidth: v.borderWidth, borderAlign: v.borderAlign, x: d, y: h, innerRadius: 0, outerRadius: n ? m : f, startAngle: n && s.animateRotate ? c : g, endAngle: n && s.animateRotate ? c : p, label: H.valueAtIndexOrDefault(u, e, u[e]) } }), t.pivot() }, countVisibleElements: function() { var t = this.getDataset(),
                e = this.getMeta(),
                n = 0; return H.each(e.data, (function(e, i) { isNaN(t.data[i]) || e.hidden || n++ })), n }, setHoverStyle: function(t) { var e = t._model,
                n = t._options,
                i = H.getHoverColor,
                a = H.valueOrDefault;
            t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth }, e.backgroundColor = a(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = a(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = a(n.hoverBorderWidth, n.borderWidth) }, _computeAngle: function(t) { var e = this,
                n = this.getMeta().count,
                i = e.getDataset(),
                a = e.getMeta(); if (isNaN(i.data[t]) || a.data[t].hidden) return 0; var r = { chart: e.chart, dataIndex: t, dataset: i, datasetIndex: e.index }; return Gt([e.chart.options.elements.arc.angle, 2 * Math.PI / n], r, t) } });
    N._set("pie", H.clone(N.doughnut)), N._set("pie", { cutoutPercentage: 0 }); var Kt = Bt,
        Zt = H.valueOrDefault;
    N._set("radar", { spanGaps: !1, scale: { type: "radialLinear" }, elements: { line: { fill: "start", tension: 0 } } }); var $t = it.extend({ datasetElementType: kt.Line, dataElementType: kt.Point, linkScales: H.noop, _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"], _dataElementOptions: { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" }, _getIndexScaleId: function() { return this.chart.scale.id }, _getValueScaleId: function() { return this.chart.scale.id }, update: function(t) { var e, n, i = this,
                a = i.getMeta(),
                r = a.dataset,
                o = a.data || [],
                s = i.chart.scale,
                l = i._config; for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = s, r._datasetIndex = i.index, r._children = o, r._loop = !0, r._model = i._resolveDatasetElementOptions(r), r.pivot(), e = 0, n = o.length; e < n; ++e) i.updateElement(o[e], e, t); for (i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e) o[e].pivot() }, updateElement: function(t, e, n) { var i = this,
                a = t.custom || {},
                r = i.getDataset(),
                o = i.chart.scale,
                s = o.getPointPositionForValue(e, r.data[e]),
                l = i._resolveDataElementOptions(t, e),
                u = i.getMeta().dataset._model,
                d = n ? o.xCenter : s.x,
                h = n ? o.yCenter : s.y;
            t._scale = o, t._options = l, t._datasetIndex = i.index, t._index = e, t._model = { x: d, y: h, skip: a.skip || isNaN(d) || isNaN(h), radius: l.radius, pointStyle: l.pointStyle, rotation: l.rotation, backgroundColor: l.backgroundColor, borderColor: l.borderColor, borderWidth: l.borderWidth, tension: Zt(a.tension, u ? u.tension : 0), hitRadius: l.hitRadius } }, _resolveDatasetElementOptions: function() { var t = this,
                e = t._config,
                n = t.chart.options,
                i = it.prototype._resolveDatasetElementOptions.apply(t, arguments); return i.spanGaps = Zt(e.spanGaps, n.spanGaps), i.tension = Zt(e.lineTension, n.elements.line.tension), i }, updateBezierControlPoints: function() { var t, e, n, i, a = this.getMeta(),
                r = this.chart.chartArea,
                o = a.data || [];

            function s(t, e, n) { return Math.max(Math.min(t, n), e) } for (a.dataset._model.spanGaps && (o = o.filter((function(t) { return !t._model.skip }))), t = 0, e = o.length; t < e; ++t) n = o[t]._model, i = H.splineCurve(H.previousItem(o, t, !0)._model, n, H.nextItem(o, t, !0)._model, n.tension), n.controlPointPreviousX = s(i.previous.x, r.left, r.right), n.controlPointPreviousY = s(i.previous.y, r.top, r.bottom), n.controlPointNextX = s(i.next.x, r.left, r.right), n.controlPointNextY = s(i.next.y, r.top, r.bottom) }, setHoverStyle: function(t) { var e = t._model,
                n = t._options,
                i = H.getHoverColor;
            t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = Zt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Zt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Zt(n.hoverBorderWidth, n.borderWidth), e.radius = Zt(n.hoverRadius, n.radius) } });
    N._set("scatter", { hover: { mode: "single" }, scales: { xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }], yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }] }, tooltips: { callbacks: { title: function() { return "" }, label: function(t) { return "(" + t.xLabel + ", " + t.yLabel + ")" } } } }), N._set("global", { datasets: { scatter: { showLine: !1 } } }); var Jt = { bar: Tt, bubble: Ot, doughnut: Bt, horizontalBar: Et, line: Yt, polarArea: Xt, pie: Kt, radar: $t, scatter: Yt };

    function Qt(t, e) { return t.native ? { x: t.x, y: t.y } : H.getRelativePosition(t, e) }

    function te(t, e) { var n, i, a, r, o, s, l = t._getSortedVisibleDatasetMetas(); for (i = 0, r = l.length; i < r; ++i)
            for (a = 0, o = (n = l[i].data).length; a < o; ++a)(s = n[a])._view.skip || e(s) }

    function ee(t, e) { var n = []; return te(t, (function(t) { t.inRange(e.x, e.y) && n.push(t) })), n }

    function ne(t, e, n, i) { var a = Number.POSITIVE_INFINITY,
            r = []; return te(t, (function(t) { if (!n || t.inRange(e.x, e.y)) { var o = t.getCenterPoint(),
                    s = i(e, o);
                s < a ? (r = [t], a = s) : s === a && r.push(t) } })), r }

    function ie(t) { var e = -1 !== t.indexOf("x"),
            n = -1 !== t.indexOf("y"); return function(t, i) { var a = e ? Math.abs(t.x - i.x) : 0,
                r = n ? Math.abs(t.y - i.y) : 0; return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2)) } }

    function ae(t, e, n) { var i = Qt(e, t);
        n.axis = n.axis || "x"; var a = ie(n.axis),
            r = n.intersect ? ee(t, i) : ne(t, i, !1, a),
            o = []; return r.length ? (t._getSortedVisibleDatasetMetas().forEach((function(t) { var e = t.data[r[0]._index];
            e && !e._view.skip && o.push(e) })), o) : [] } var re = { modes: { single: function(t, e) { var n = Qt(e, t),
                        i = []; return te(t, (function(t) { if (t.inRange(n.x, n.y)) return i.push(t), i })), i.slice(0, 1) }, label: ae, index: ae, dataset: function(t, e, n) { var i = Qt(e, t);
                    n.axis = n.axis || "xy"; var a = ie(n.axis),
                        r = n.intersect ? ee(t, i) : ne(t, i, !1, a); return r.length > 0 && (r = t.getDatasetMeta(r[0]._datasetIndex).data), r }, "x-axis": function(t, e) { return ae(t, e, { intersect: !1 }) }, point: function(t, e) { return ee(t, Qt(e, t)) }, nearest: function(t, e, n) { var i = Qt(e, t);
                    n.axis = n.axis || "xy"; var a = ie(n.axis); return ne(t, i, n.intersect, a) }, x: function(t, e, n) { var i = Qt(e, t),
                        a = [],
                        r = !1; return te(t, (function(t) { t.inXRange(i.x) && a.push(t), t.inRange(i.x, i.y) && (r = !0) })), n.intersect && !r && (a = []), a }, y: function(t, e, n) { var i = Qt(e, t),
                        a = [],
                        r = !1; return te(t, (function(t) { t.inYRange(i.y) && a.push(t), t.inRange(i.x, i.y) && (r = !0) })), n.intersect && !r && (a = []), a } } },
        oe = H.extend;

    function se(t, e) { return H.where(t, (function(t) { return t.pos === e })) }

    function le(t, e) { return t.sort((function(t, n) { var i = e ? n : t,
                a = e ? t : n; return i.weight === a.weight ? i.index - a.index : i.weight - a.weight })) }

    function ue(t, e, n, i) { return Math.max(t[n], e[n]) + Math.max(t[i], e[i]) }

    function de(t, e, n) { var i, a, r = n.box,
            o = t.maxPadding; if (n.size && (t[n.pos] -= n.size), n.size = n.horizontal ? r.height : r.width, t[n.pos] += n.size, r.getPadding) { var s = r.getPadding();
            o.top = Math.max(o.top, s.top), o.left = Math.max(o.left, s.left), o.bottom = Math.max(o.bottom, s.bottom), o.right = Math.max(o.right, s.right) } if (i = e.outerWidth - ue(o, t, "left", "right"), a = e.outerHeight - ue(o, t, "top", "bottom"), i !== t.w || a !== t.h) { t.w = i, t.h = a; var l = n.horizontal ? [i, t.w] : [a, t.h]; return !(l[0] === l[1] || isNaN(l[0]) && isNaN(l[1])) } }

    function he(t, e) { var n = e.maxPadding;

        function i(t) { var i = { left: 0, top: 0, right: 0, bottom: 0 }; return t.forEach((function(t) { i[t] = Math.max(e[t], n[t]) })), i } return i(t ? ["left", "right"] : ["top", "bottom"]) }

    function ce(t, e, n) { var i, a, r, o, s, l, u = []; for (i = 0, a = t.length; i < a; ++i)(o = (r = t[i]).box).update(r.width || e.w, r.height || e.h, he(r.horizontal, e)), de(e, n, r) && (l = !0, u.length && (s = !0)), o.fullWidth || u.push(r); return s && ce(u, e, n) || l }

    function fe(t, e, n) { var i, a, r, o, s = n.padding,
            l = e.x,
            u = e.y; for (i = 0, a = t.length; i < a; ++i) o = (r = t[i]).box, r.horizontal ? (o.left = o.fullWidth ? s.left : e.left, o.right = o.fullWidth ? n.outerWidth - s.right : e.left + e.w, o.top = u, o.bottom = u + o.height, o.width = o.right - o.left, u = o.bottom) : (o.left = l, o.right = l + o.width, o.top = e.top, o.bottom = e.top + e.h, o.height = o.bottom - o.top, l = o.right);
        e.x = l, e.y = u }
    N._set("global", { layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } } }); var ge, pe = { defaults: {}, addBox: function(t, e) { t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() { return [{ z: 0, draw: function() { e.draw.apply(e, arguments) } }] }, t.boxes.push(e) }, removeBox: function(t, e) { var n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1) }, configure: function(t, e, n) { for (var i, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) i = a[o], n.hasOwnProperty(i) && (e[i] = n[i]) }, update: function(t, e, n) { if (t) { var i = t.options.layout || {},
                        a = H.options.toPadding(i.padding),
                        r = e - a.width,
                        o = n - a.height,
                        s = function(t) { var e = function(t) { var e, n, i, a = []; for (e = 0, n = (t || []).length; e < n; ++e) i = t[e], a.push({ index: e, box: i, pos: i.position, horizontal: i.isHorizontal(), weight: i.weight }); return a }(t),
                                n = le(se(e, "left"), !0),
                                i = le(se(e, "right")),
                                a = le(se(e, "top"), !0),
                                r = le(se(e, "bottom")); return { leftAndTop: n.concat(a), rightAndBottom: i.concat(r), chartArea: se(e, "chartArea"), vertical: n.concat(i), horizontal: a.concat(r) } }(t.boxes),
                        l = s.vertical,
                        u = s.horizontal,
                        d = Object.freeze({ outerWidth: e, outerHeight: n, padding: a, availableWidth: r, vBoxMaxWidth: r / 2 / l.length, hBoxMaxHeight: o / 2 }),
                        h = oe({ maxPadding: oe({}, a), w: r, h: o, x: a.left, y: a.top }, a);! function(t, e) { var n, i, a; for (n = 0, i = t.length; n < i; ++n)(a = t[n]).width = a.horizontal ? a.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, a.height = a.horizontal && e.hBoxMaxHeight }(l.concat(u), d), ce(l, h, d), ce(u, h, d) && ce(l, h, d),
                        function(t) { var e = t.maxPadding;

                            function n(n) { var i = Math.max(e[n] - t[n], 0); return t[n] += i, i }
                            t.y += n("top"), t.x += n("left"), n("right"), n("bottom") }(h), fe(s.leftAndTop, h, d), h.x += h.w, h.y += h.h, fe(s.rightAndBottom, h, d), t.chartArea = { left: h.left, top: h.top, right: h.left + h.w, bottom: h.top + h.h }, H.each(s.chartArea, (function(e) { var n = e.box;
                            oe(n, t.chartArea), n.update(h.w, h.h) })) } } },
        me = (ge = Object.freeze({ __proto__: null, default: "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}" })) && ge.default || ge,
        ve = "$chartjs",
        be = "chartjs-size-monitor",
        xe = "chartjs-render-monitor",
        ye = "chartjs-render-animation",
        _e = ["animationstart", "webkitAnimationStart"],
        ke = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };

    function we(t, e) { var n = H.getStyle(t, e),
            i = n && n.match(/^(\d+)(\.\d+)?px$/); return i ? Number(i[1]) : void 0 } var Me = !! function() { var t = !1; try { var e = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
            window.addEventListener("e", null, e) } catch (t) {} return t }() && { passive: !0 };

    function Se(t, e, n) { t.addEventListener(e, n, Me) }

    function Ce(t, e, n) { t.removeEventListener(e, n, Me) }

    function Pe(t, e, n, i, a) { return { type: t, chart: e, native: a || null, x: void 0 !== n ? n : null, y: void 0 !== i ? i : null } }

    function Ae(t) { var e = document.createElement("div"); return e.className = t || "", e }

    function De(t, e, n) { var i, a, r, o, s = t[ve] || (t[ve] = {}),
            l = s.resizer = function(t) { var e = Ae(be),
                    n = Ae(be + "-expand"),
                    i = Ae(be + "-shrink");
                n.appendChild(Ae()), i.appendChild(Ae()), e.appendChild(n), e.appendChild(i), e._reset = function() { n.scrollLeft = 1e6, n.scrollTop = 1e6, i.scrollLeft = 1e6, i.scrollTop = 1e6 }; var a = function() { e._reset(), t() }; return Se(n, "scroll", a.bind(n, "expand")), Se(i, "scroll", a.bind(i, "shrink")), e }((i = function() { if (s.resizer) { var i = n.options.maintainAspectRatio && t.parentNode,
                        a = i ? i.clientWidth : 0;
                    e(Pe("resize", n)), i && i.clientWidth < a && n.canvas && e(Pe("resize", n)) } }, r = !1, o = [], function() { o = Array.prototype.slice.call(arguments), a = a || this, r || (r = !0, H.requestAnimFrame.call(window, (function() { r = !1, i.apply(a, o) }))) }));! function(t, e) { var n = t[ve] || (t[ve] = {}),
                i = n.renderProxy = function(t) { t.animationName === ye && e() };
            H.each(_e, (function(e) { Se(t, e, i) })), n.reflow = !!t.offsetParent, t.classList.add(xe) }(t, (function() { if (s.resizer) { var e = t.parentNode;
                e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset() } })) }

    function Te(t) { var e = t[ve] || {},
            n = e.resizer;
        delete e.resizer,
            function(t) { var e = t[ve] || {},
                    n = e.renderProxy;
                n && (H.each(_e, (function(e) { Ce(t, e, n) })), delete e.renderProxy), t.classList.remove(xe) }(t), n && n.parentNode && n.parentNode.removeChild(n) } var Ie = { disableCSSInjection: !1, _enabled: "undefined" != typeof window && "undefined" != typeof document, _ensureLoaded: function(t) { if (!this.disableCSSInjection) { var e = t.getRootNode ? t.getRootNode() : document;! function(t, e) { var n = t[ve] || (t[ve] = {}); if (!n.containsStyles) { n.containsStyles = !0, e = "/* Chart.js */\n" + e; var i = document.createElement("style");
                        i.setAttribute("type", "text/css"), i.appendChild(document.createTextNode(e)), t.appendChild(i) } }(e.host ? e : document.head, me) } }, acquireContext: function(t, e) { "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas); var n = t && t.getContext && t.getContext("2d"); return n && n.canvas === t ? (this._ensureLoaded(t), function(t, e) { var n = t.style,
                    i = t.getAttribute("height"),
                    a = t.getAttribute("width"); if (t[ve] = { initial: { height: i, width: a, style: { display: n.display, height: n.height, width: n.width } } }, n.display = n.display || "block", null === a || "" === a) { var r = we(t, "width");
                    void 0 !== r && (t.width = r) } if (null === i || "" === i)
                    if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                    else { var o = we(t, "height");
                        void 0 !== r && (t.height = o) } }(t, e), n) : null }, releaseContext: function(t) { var e = t.canvas; if (e[ve]) { var n = e[ve].initial;
                ["height", "width"].forEach((function(t) { var i = n[t];
                    H.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i) })), H.each(n.style || {}, (function(t, n) { e.style[n] = t })), e.width = e.width, delete e[ve] } }, addEventListener: function(t, e, n) { var i = t.canvas; if ("resize" !== e) { var a = n[ve] || (n[ve] = {});
                Se(i, e, (a.proxies || (a.proxies = {}))[t.id + "_" + e] = function(e) { n(function(t, e) { var n = ke[t.type] || t.type,
                            i = H.getRelativePosition(t, e); return Pe(n, e, i.x, i.y, t) }(e, t)) }) } else De(i, n, t) }, removeEventListener: function(t, e, n) { var i = t.canvas; if ("resize" !== e) { var a = ((n[ve] || {}).proxies || {})[t.id + "_" + e];
                a && Ce(i, e, a) } else Te(i) } };
    H.addEvent = Se, H.removeEvent = Ce; var Fe = Ie._enabled ? Ie : { acquireContext: function(t) { return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null } },
        Oe = H.extend({ initialize: function() {}, acquireContext: function() {}, releaseContext: function() {}, addEventListener: function() {}, removeEventListener: function() {} }, Fe);
    N._set("global", { plugins: {} }); var Le = { _plugins: [], _cacheId: 0, register: function(t) { var e = this._plugins;
                [].concat(t).forEach((function(t) {-1 === e.indexOf(t) && e.push(t) })), this._cacheId++ }, unregister: function(t) { var e = this._plugins;
                [].concat(t).forEach((function(t) { var n = e.indexOf(t); - 1 !== n && e.splice(n, 1) })), this._cacheId++ }, clear: function() { this._plugins = [], this._cacheId++ }, count: function() { return this._plugins.length }, getAll: function() { return this._plugins }, notify: function(t, e, n) { var i, a, r, o, s, l = this.descriptors(t),
                    u = l.length; for (i = 0; i < u; ++i)
                    if ("function" == typeof(s = (r = (a = l[i]).plugin)[e]) && ((o = [t].concat(n || [])).push(a.options), !1 === s.apply(r, o))) return !1;
                return !0 }, descriptors: function(t) { var e = t.$plugins || (t.$plugins = {}); if (e.id === this._cacheId) return e.descriptors; var n = [],
                    i = [],
                    a = t && t.config || {},
                    r = a.options && a.options.plugins || {}; return this._plugins.concat(a.plugins || []).forEach((function(t) { if (-1 === n.indexOf(t)) { var e = t.id,
                            a = r[e];!1 !== a && (!0 === a && (a = H.clone(N.global.plugins[e])), n.push(t), i.push({ plugin: t, options: a || {} })) } })), e.descriptors = i, e.id = this._cacheId, i }, _invalidate: function(t) { delete t.$plugins } },
        Re = { constructors: {}, defaults: {}, registerScaleType: function(t, e, n) { this.constructors[t] = e, this.defaults[t] = H.clone(n) }, getScaleConstructor: function(t) { return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0 }, getScaleDefaults: function(t) { return this.defaults.hasOwnProperty(t) ? H.merge(Object.create(null), [N.scale, this.defaults[t]]) : {} }, updateScaleDefaults: function(t, e) { this.defaults.hasOwnProperty(t) && (this.defaults[t] = H.extend(this.defaults[t], e)) }, addScalesToLayout: function(t) { H.each(t.scales, (function(e) { e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, pe.addBox(t, e) })) } },
        ze = H.valueOrDefault,
        Ne = H.rtl.getRtlAdapter;
    N._set("global", { tooltips: { enabled: !0, custom: null, mode: "nearest", position: "average", intersect: !0, backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleFontColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyFontColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerFontColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", displayColors: !0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, callbacks: { beforeTitle: H.noop, title: function(t, e) { var n = "",
                        i = e.labels,
                        a = i ? i.length : 0; if (t.length > 0) { var r = t[0];
                        r.label ? n = r.label : r.xLabel ? n = r.xLabel : a > 0 && r.index < a && (n = i[r.index]) } return n }, afterTitle: H.noop, beforeBody: H.noop, beforeLabel: H.noop, label: function(t, e) { var n = e.datasets[t.datasetIndex].label || ""; return n && (n += ": "), H.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value, n }, labelColor: function(t, e) { var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view; return { borderColor: n.borderColor, backgroundColor: n.backgroundColor } }, labelTextColor: function() { return this._options.bodyFontColor }, afterLabel: H.noop, afterBody: H.noop, beforeFooter: H.noop, footer: H.noop, afterFooter: H.noop } } }); var Be = { average: function(t) { if (!t.length) return !1; var e, n, i = 0,
                a = 0,
                r = 0; for (e = 0, n = t.length; e < n; ++e) { var o = t[e]; if (o && o.hasValue()) { var s = o.tooltipPosition();
                    i += s.x, a += s.y, ++r } } return { x: i / r, y: a / r } }, nearest: function(t, e) { var n, i, a, r = e.x,
                o = e.y,
                s = Number.POSITIVE_INFINITY; for (n = 0, i = t.length; n < i; ++n) { var l = t[n]; if (l && l.hasValue()) { var u = l.getCenterPoint(),
                        d = H.distanceBetweenPoints(e, u);
                    d < s && (s = d, a = l) } } if (a) { var h = a.tooltipPosition();
                r = h.x, o = h.y } return { x: r, y: o } } };

    function Ee(t, e) { return e && (H.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t }

    function We(t) { return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t }

    function Ve(t) { var e = N.global; return { xPadding: t.xPadding, yPadding: t.yPadding, xAlign: t.xAlign, yAlign: t.yAlign, rtl: t.rtl, textDirection: t.textDirection, bodyFontColor: t.bodyFontColor, _bodyFontFamily: ze(t.bodyFontFamily, e.defaultFontFamily), _bodyFontStyle: ze(t.bodyFontStyle, e.defaultFontStyle), _bodyAlign: t.bodyAlign, bodyFontSize: ze(t.bodyFontSize, e.defaultFontSize), bodySpacing: t.bodySpacing, titleFontColor: t.titleFontColor, _titleFontFamily: ze(t.titleFontFamily, e.defaultFontFamily), _titleFontStyle: ze(t.titleFontStyle, e.defaultFontStyle), titleFontSize: ze(t.titleFontSize, e.defaultFontSize), _titleAlign: t.titleAlign, titleSpacing: t.titleSpacing, titleMarginBottom: t.titleMarginBottom, footerFontColor: t.footerFontColor, _footerFontFamily: ze(t.footerFontFamily, e.defaultFontFamily), _footerFontStyle: ze(t.footerFontStyle, e.defaultFontStyle), footerFontSize: ze(t.footerFontSize, e.defaultFontSize), _footerAlign: t.footerAlign, footerSpacing: t.footerSpacing, footerMarginTop: t.footerMarginTop, caretSize: t.caretSize, cornerRadius: t.cornerRadius, backgroundColor: t.backgroundColor, opacity: 0, legendColorBackground: t.multiKeyBackground, displayColors: t.displayColors, borderColor: t.borderColor, borderWidth: t.borderWidth } }

    function He(t, e) { return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding }

    function je(t) { return Ee([], We(t)) } var qe = K.extend({ initialize: function() { this._model = Ve(this._options), this._lastActive = [] }, getTitle: function() { var t = this,
                    e = t._options,
                    n = e.callbacks,
                    i = n.beforeTitle.apply(t, arguments),
                    a = n.title.apply(t, arguments),
                    r = n.afterTitle.apply(t, arguments),
                    o = []; return o = Ee(o, We(i)), o = Ee(o, We(a)), o = Ee(o, We(r)) }, getBeforeBody: function() { return je(this._options.callbacks.beforeBody.apply(this, arguments)) }, getBody: function(t, e) { var n = this,
                    i = n._options.callbacks,
                    a = []; return H.each(t, (function(t) { var r = { before: [], lines: [], after: [] };
                    Ee(r.before, We(i.beforeLabel.call(n, t, e))), Ee(r.lines, i.label.call(n, t, e)), Ee(r.after, We(i.afterLabel.call(n, t, e))), a.push(r) })), a }, getAfterBody: function() { return je(this._options.callbacks.afterBody.apply(this, arguments)) }, getFooter: function() { var t = this,
                    e = t._options.callbacks,
                    n = e.beforeFooter.apply(t, arguments),
                    i = e.footer.apply(t, arguments),
                    a = e.afterFooter.apply(t, arguments),
                    r = []; return r = Ee(r, We(n)), r = Ee(r, We(i)), r = Ee(r, We(a)) }, update: function(t) { var e, n, i, a, r, o, s, l, u, d, h = this,
                    c = h._options,
                    f = h._model,
                    g = h._model = Ve(c),
                    p = h._active,
                    m = h._data,
                    v = { xAlign: f.xAlign, yAlign: f.yAlign },
                    b = { x: f.x, y: f.y },
                    x = { width: f.width, height: f.height },
                    y = { x: f.caretX, y: f.caretY }; if (p.length) { g.opacity = 1; var _ = [],
                        k = [];
                    y = Be[c.position].call(h, p, h._eventPosition); var w = []; for (e = 0, n = p.length; e < n; ++e) w.push((i = p[e], a = void 0, r = void 0, o = void 0, s = void 0, l = void 0, u = void 0, d = void 0, a = i._xScale, r = i._yScale || i._scale, o = i._index, s = i._datasetIndex, l = i._chart.getDatasetMeta(s).controller, u = l._getIndexScale(), d = l._getValueScale(), { xLabel: a ? a.getLabelForIndex(o, s) : "", yLabel: r ? r.getLabelForIndex(o, s) : "", label: u ? "" + u.getLabelForIndex(o, s) : "", value: d ? "" + d.getLabelForIndex(o, s) : "", index: o, datasetIndex: s, x: i._model.x, y: i._model.y }));
                    c.filter && (w = w.filter((function(t) { return c.filter(t, m) }))), c.itemSort && (w = w.sort((function(t, e) { return c.itemSort(t, e, m) }))), H.each(w, (function(t) { _.push(c.callbacks.labelColor.call(h, t, h._chart)), k.push(c.callbacks.labelTextColor.call(h, t, h._chart)) })), g.title = h.getTitle(w, m), g.beforeBody = h.getBeforeBody(w, m), g.body = h.getBody(w, m), g.afterBody = h.getAfterBody(w, m), g.footer = h.getFooter(w, m), g.x = y.x, g.y = y.y, g.caretPadding = c.caretPadding, g.labelColors = _, g.labelTextColors = k, g.dataPoints = w, x = function(t, e) { var n = t._chart.ctx,
                            i = 2 * e.yPadding,
                            a = 0,
                            r = e.body,
                            o = r.reduce((function(t, e) { return t + e.before.length + e.lines.length + e.after.length }), 0);
                        o += e.beforeBody.length + e.afterBody.length; var s = e.title.length,
                            l = e.footer.length,
                            u = e.titleFontSize,
                            d = e.bodyFontSize,
                            h = e.footerFontSize;
                        i += s * u, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += o * d, i += o ? (o - 1) * e.bodySpacing : 0, i += l ? e.footerMarginTop : 0, i += l * h, i += l ? (l - 1) * e.footerSpacing : 0; var c = 0,
                            f = function(t) { a = Math.max(a, n.measureText(t).width + c) }; return n.font = H.fontString(u, e._titleFontStyle, e._titleFontFamily), H.each(e.title, f), n.font = H.fontString(d, e._bodyFontStyle, e._bodyFontFamily), H.each(e.beforeBody.concat(e.afterBody), f), c = e.displayColors ? d + 2 : 0, H.each(r, (function(t) { H.each(t.before, f), H.each(t.lines, f), H.each(t.after, f) })), c = 0, n.font = H.fontString(h, e._footerFontStyle, e._footerFontFamily), H.each(e.footer, f), { width: a += 2 * e.xPadding, height: i } }(this, g), b = function(t, e, n, i) { var a = t.x,
                            r = t.y,
                            o = t.caretSize,
                            s = t.caretPadding,
                            l = t.cornerRadius,
                            u = n.xAlign,
                            d = n.yAlign,
                            h = o + s,
                            c = l + s; return "right" === u ? a -= e.width : "center" === u && ((a -= e.width / 2) + e.width > i.width && (a = i.width - e.width), a < 0 && (a = 0)), "top" === d ? r += h : r -= "bottom" === d ? e.height + h : e.height / 2, "center" === d ? "left" === u ? a += h : "right" === u && (a -= h) : "left" === u ? a -= c : "right" === u && (a += c), { x: a, y: r } }(g, x, v = function(t, e) { var n, i, a, r, o, s = t._model,
                            l = t._chart,
                            u = t._chart.chartArea,
                            d = "center",
                            h = "center";
                        s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom"); var c = (u.left + u.right) / 2,
                            f = (u.top + u.bottom) / 2; "center" === h ? (n = function(t) { return t <= c }, i = function(t) { return t > c }) : (n = function(t) { return t <= e.width / 2 }, i = function(t) { return t >= l.width - e.width / 2 }), a = function(t) { return t + e.width + s.caretSize + s.caretPadding > l.width }, r = function(t) { return t - e.width - s.caretSize - s.caretPadding < 0 }, o = function(t) { return t <= f ? "top" : "bottom" }, n(s.x) ? (d = "left", a(s.x) && (d = "center", h = o(s.y))) : i(s.x) && (d = "right", r(s.x) && (d = "center", h = o(s.y))); var g = t._options; return { xAlign: g.xAlign ? g.xAlign : d, yAlign: g.yAlign ? g.yAlign : h } }(this, x), h._chart) } else g.opacity = 0; return g.xAlign = v.xAlign, g.yAlign = v.yAlign, g.x = b.x, g.y = b.y, g.width = x.width, g.height = x.height, g.caretX = y.x, g.caretY = y.y, h._model = g, t && c.custom && c.custom.call(h, g), h }, drawCaret: function(t, e) { var n = this._chart.ctx,
                    i = this._view,
                    a = this.getCaretPosition(t, e, i);
                n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3) }, getCaretPosition: function(t, e, n) { var i, a, r, o, s, l, u = n.caretSize,
                    d = n.cornerRadius,
                    h = n.xAlign,
                    c = n.yAlign,
                    f = t.x,
                    g = t.y,
                    p = e.width,
                    m = e.height; if ("center" === c) s = g + m / 2, "left" === h ? (a = (i = f) - u, r = i, o = s + u, l = s - u) : (a = (i = f + p) + u, r = i, o = s - u, l = s + u);
                else if ("left" === h ? (i = (a = f + d + u) - u, r = a + u) : "right" === h ? (i = (a = f + p - d - u) - u, r = a + u) : (i = (a = n.caretX) - u, r = a + u), "top" === c) s = (o = g) - u, l = o;
                else { s = (o = g + m) + u, l = o; var v = r;
                    r = i, i = v } return { x1: i, x2: a, x3: r, y1: o, y2: s, y3: l } }, drawTitle: function(t, e, n) { var i, a, r, o = e.title,
                    s = o.length; if (s) { var l = Ne(e.rtl, e.x, e.width); for (t.x = He(e, e._titleAlign), n.textAlign = l.textAlign(e._titleAlign), n.textBaseline = "middle", i = e.titleFontSize, a = e.titleSpacing, n.fillStyle = e.titleFontColor, n.font = H.fontString(i, e._titleFontStyle, e._titleFontFamily), r = 0; r < s; ++r) n.fillText(o[r], l.x(t.x), t.y + i / 2), t.y += i + a, r + 1 === s && (t.y += e.titleMarginBottom - a) } }, drawBody: function(t, e, n) { var i, a, r, o, s, l, u, d, h = e.bodyFontSize,
                    c = e.bodySpacing,
                    f = e._bodyAlign,
                    g = e.body,
                    p = e.displayColors,
                    m = 0,
                    v = p ? He(e, "left") : 0,
                    b = Ne(e.rtl, e.x, e.width),
                    x = function(e) { n.fillText(e, b.x(t.x + m), t.y + h / 2), t.y += h + c },
                    y = b.textAlign(f); for (n.textAlign = f, n.textBaseline = "middle", n.font = H.fontString(h, e._bodyFontStyle, e._bodyFontFamily), t.x = He(e, y), n.fillStyle = e.bodyFontColor, H.each(e.beforeBody, x), m = p && "right" !== y ? "center" === f ? h / 2 + 1 : h + 2 : 0, s = 0, u = g.length; s < u; ++s) { for (i = g[s], a = e.labelTextColors[s], r = e.labelColors[s], n.fillStyle = a, H.each(i.before, x), l = 0, d = (o = i.lines).length; l < d; ++l) { if (p) { var _ = b.x(v);
                            n.fillStyle = e.legendColorBackground, n.fillRect(b.leftForLtr(_, h), t.y, h, h), n.lineWidth = 1, n.strokeStyle = r.borderColor, n.strokeRect(b.leftForLtr(_, h), t.y, h, h), n.fillStyle = r.backgroundColor, n.fillRect(b.leftForLtr(b.xPlus(_, 1), h - 2), t.y + 1, h - 2, h - 2), n.fillStyle = a }
                        x(o[l]) }
                    H.each(i.after, x) }
                m = 0, H.each(e.afterBody, x), t.y -= c }, drawFooter: function(t, e, n) { var i, a, r = e.footer,
                    o = r.length; if (o) { var s = Ne(e.rtl, e.x, e.width); for (t.x = He(e, e._footerAlign), t.y += e.footerMarginTop, n.textAlign = s.textAlign(e._footerAlign), n.textBaseline = "middle", i = e.footerFontSize, n.fillStyle = e.footerFontColor, n.font = H.fontString(i, e._footerFontStyle, e._footerFontFamily), a = 0; a < o; ++a) n.fillText(r[a], s.x(t.x), t.y + i / 2), t.y += i + e.footerSpacing } }, drawBackground: function(t, e, n, i) { n.fillStyle = e.backgroundColor, n.strokeStyle = e.borderColor, n.lineWidth = e.borderWidth; var a = e.xAlign,
                    r = e.yAlign,
                    o = t.x,
                    s = t.y,
                    l = i.width,
                    u = i.height,
                    d = e.cornerRadius;
                n.beginPath(), n.moveTo(o + d, s), "top" === r && this.drawCaret(t, i), n.lineTo(o + l - d, s), n.quadraticCurveTo(o + l, s, o + l, s + d), "center" === r && "right" === a && this.drawCaret(t, i), n.lineTo(o + l, s + u - d), n.quadraticCurveTo(o + l, s + u, o + l - d, s + u), "bottom" === r && this.drawCaret(t, i), n.lineTo(o + d, s + u), n.quadraticCurveTo(o, s + u, o, s + u - d), "center" === r && "left" === a && this.drawCaret(t, i), n.lineTo(o, s + d), n.quadraticCurveTo(o, s, o + d, s), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke() }, draw: function() { var t = this._chart.ctx,
                    e = this._view; if (0 !== e.opacity) { var n = { width: e.width, height: e.height },
                        i = { x: e.x, y: e.y },
                        a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                        r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                    this._options.enabled && r && (t.save(), t.globalAlpha = a, this.drawBackground(i, e, t, n), i.y += e.yPadding, H.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(i, e, t), this.drawBody(i, e, t), this.drawFooter(i, e, t), H.rtl.restoreTextDirection(t, e.textDirection), t.restore()) } }, handleEvent: function(t) { var e, n = this,
                    i = n._options; return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : (n._active = n._chart.getElementsAtEventForMode(t, i.mode, i), i.reverse && n._active.reverse()), (e = !H.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = { x: t.x, y: t.y }, n.update(!0), n.pivot())), e } }),
        Ue = Be,
        Ye = qe;
    Ye.positioners = Ue; var Ge = H.valueOrDefault;

    function Xe() { return H.merge(Object.create(null), [].slice.call(arguments), { merger: function(t, e, n, i) { if ("xAxes" === t || "yAxes" === t) { var a, r, o, s = n[t].length; for (e[t] || (e[t] = []), a = 0; a < s; ++a) o = n[t][a], r = Ge(o.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || o.type && o.type !== e[t][a].type ? H.merge(e[t][a], [Re.getScaleDefaults(r), o]) : H.merge(e[t][a], o) } else H._merger(t, e, n, i) } }) }

    function Ke() { return H.merge(Object.create(null), [].slice.call(arguments), { merger: function(t, e, n, i) { var a = e[t] || Object.create(null),
                    r = n[t]; "scales" === t ? e[t] = Xe(a, r) : "scale" === t ? e[t] = H.merge(a, [Re.getScaleDefaults(r.type), r]) : H._merger(t, e, n, i) } }) }

    function Ze(t) { var e = t.options;
        H.each(t.scales, (function(e) { pe.removeBox(t, e) })), e = Ke(N.global, N[t.config.type], e), t.options = t.config.options = e, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e.tooltips, t.tooltip.initialize() }

    function $e(t, e, n) { var i, a = function(t) { return t.id === i };
        do { i = e + n++ } while (H.findIndex(t, a) >= 0); return i }

    function Je(t) { return "top" === t || "bottom" === t }

    function Qe(t, e) { return function(n, i) { return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t] } }
    N._set("global", { elements: {}, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, maintainAspectRatio: !0, responsive: !0, responsiveAnimationDuration: 0 }); var tn = function(t, e) { return this.construct(t, e), this };
    H.extend(tn.prototype, { construct: function(t, e) { var n = this;
            e = function(t) { var e = (t = t || Object.create(null)).data = t.data || {}; return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = Ke(N.global, N[t.type], t.options || {}), t }(e); var i = Oe.acquireContext(t, e),
                a = i && i.canvas,
                r = a && a.height,
                o = a && a.width;
            n.id = H.uid(), n.ctx = i, n.canvas = a, n.config = e, n.width = o, n.height = r, n.aspectRatio = r ? o / r : null, n.options = e.options, n._bufferedRender = !1, n._layers = [], n.chart = n, n.controller = n, tn.instances[n.id] = n, Object.defineProperty(n, "data", { get: function() { return n.config.data }, set: function(t) { n.config.data = t } }), i && a ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item") }, initialize: function() { var t = this; return Le.notify(t, "beforeInit"), H.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), Le.notify(t, "afterInit"), t }, clear: function() { return H.canvas.clear(this), this }, stop: function() { return J.cancelAnimation(this), this }, resize: function(t) { var e = this,
                n = e.options,
                i = e.canvas,
                a = n.maintainAspectRatio && e.aspectRatio || null,
                r = Math.max(0, Math.floor(H.getMaximumWidth(i))),
                o = Math.max(0, Math.floor(a ? r / a : H.getMaximumHeight(i))); if ((e.width !== r || e.height !== o) && (i.width = e.width = r, i.height = e.height = o, i.style.width = r + "px", i.style.height = o + "px", H.retinaScale(e, n.devicePixelRatio), !t)) { var s = { width: r, height: o };
                Le.notify(e, "resize", [s]), n.onResize && n.onResize(e, s), e.stop(), e.update({ duration: n.responsiveAnimationDuration }) } }, ensureScalesHaveIDs: function() { var t = this.options,
                e = t.scales || {},
                n = t.scale;
            H.each(e.xAxes, (function(t, n) { t.id || (t.id = $e(e.xAxes, "x-axis-", n)) })), H.each(e.yAxes, (function(t, n) { t.id || (t.id = $e(e.yAxes, "y-axis-", n)) })), n && (n.id = n.id || "scale") }, buildOrUpdateScales: function() { var t = this,
                e = t.options,
                n = t.scales || {},
                i = [],
                a = Object.keys(n).reduce((function(t, e) { return t[e] = !1, t }), {});
            e.scales && (i = i.concat((e.scales.xAxes || []).map((function(t) { return { options: t, dtype: "category", dposition: "bottom" } })), (e.scales.yAxes || []).map((function(t) { return { options: t, dtype: "linear", dposition: "left" } })))), e.scale && i.push({ options: e.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea" }), H.each(i, (function(e) { var i = e.options,
                    r = i.id,
                    o = Ge(i.type, e.dtype);
                Je(i.position) !== Je(e.dposition) && (i.position = e.dposition), a[r] = !0; var s = null; if (r in n && n[r].type === o)(s = n[r]).options = i, s.ctx = t.ctx, s.chart = t;
                else { var l = Re.getScaleConstructor(o); if (!l) return;
                    s = new l({ id: r, type: o, options: i, ctx: t.ctx, chart: t }), n[s.id] = s }
                s.mergeTicksOptions(), e.isDefault && (t.scale = s) })), H.each(a, (function(t, e) { t || delete n[e] })), t.scales = n, Re.addScalesToLayout(this) }, buildOrUpdateControllers: function() { var t, e, n = this,
                i = [],
                a = n.data.datasets; for (t = 0, e = a.length; t < e; t++) { var r = a[t],
                    o = n.getDatasetMeta(t),
                    s = r.type || n.config.type; if (o.type && o.type !== s && (n.destroyDatasetMeta(t), o = n.getDatasetMeta(t)), o.type = s, o.order = r.order || 0, o.index = t, o.controller) o.controller.updateIndex(t), o.controller.linkScales();
                else { var l = Jt[o.type]; if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.');
                    o.controller = new l(n, t), i.push(o.controller) } } return i }, resetElements: function() { var t = this;
            H.each(t.data.datasets, (function(e, n) { t.getDatasetMeta(n).controller.reset() }), t) }, reset: function() { this.resetElements(), this.tooltip.initialize() }, update: function(t) { var e, n, i = this; if (t && "object" == typeof t || (t = { duration: t, lazy: arguments[1] }), Ze(i), Le._invalidate(i), !1 !== Le.notify(i, "beforeUpdate")) { i.tooltip._data = i.data; var a = i.buildOrUpdateControllers(); for (e = 0, n = i.data.datasets.length; e < n; e++) i.getDatasetMeta(e).controller.buildOrUpdateElements();
                i.updateLayout(), i.options.animation && i.options.animation.duration && H.each(a, (function(t) { t.reset() })), i.updateDatasets(), i.tooltip.initialize(), i.lastActive = [], Le.notify(i, "afterUpdate"), i._layers.sort(Qe("z", "_idx")), i._bufferedRender ? i._bufferedRequest = { duration: t.duration, easing: t.easing, lazy: t.lazy } : i.render(t) } }, updateLayout: function() { var t = this;!1 !== Le.notify(t, "beforeLayout") && (pe.update(this, this.width, this.height), t._layers = [], H.each(t.boxes, (function(e) { e._configure && e._configure(), t._layers.push.apply(t._layers, e._layers()) }), t), t._layers.forEach((function(t, e) { t._idx = e })), Le.notify(t, "afterScaleUpdate"), Le.notify(t, "afterLayout")) }, updateDatasets: function() { if (!1 !== Le.notify(this, "beforeDatasetsUpdate")) { for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                Le.notify(this, "afterDatasetsUpdate") } }, updateDataset: function(t) { var e = this.getDatasetMeta(t),
                n = { meta: e, index: t };!1 !== Le.notify(this, "beforeDatasetUpdate", [n]) && (e.controller._update(), Le.notify(this, "afterDatasetUpdate", [n])) }, render: function(t) { var e = this;
            t && "object" == typeof t || (t = { duration: t, lazy: arguments[1] }); var n = e.options.animation,
                i = Ge(t.duration, n && n.duration),
                a = t.lazy; if (!1 !== Le.notify(e, "beforeRender")) { var r = function(t) { Le.notify(e, "afterRender"), H.callback(n && n.onComplete, [t], e) }; if (n && i) { var o = new $({ numSteps: i / 16.66, easing: t.easing || n.easing, render: function(t, e) { var n = H.easing.effects[e.easing],
                                i = e.currentStep,
                                a = i / e.numSteps;
                            t.draw(n(a), a, i) }, onAnimationProgress: n.onProgress, onAnimationComplete: r });
                    J.addAnimation(e, o, i, a) } else e.draw(), r(new $({ numSteps: 0, chart: e })); return e } }, draw: function(t) { var e, n, i = this; if (i.clear(), H.isNullOrUndef(t) && (t = 1), i.transition(t), !(i.width <= 0 || i.height <= 0) && !1 !== Le.notify(i, "beforeDraw", [t])) { for (n = i._layers, e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(i.chartArea); for (i.drawDatasets(t); e < n.length; ++e) n[e].draw(i.chartArea);
                i._drawTooltip(t), Le.notify(i, "afterDraw", [t]) } }, transition: function(t) { for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            this.tooltip.transition(t) }, _getSortedDatasetMetas: function(t) { var e, n, i = []; for (e = 0, n = (this.data.datasets || []).length; e < n; ++e) t && !this.isDatasetVisible(e) || i.push(this.getDatasetMeta(e)); return i.sort(Qe("order", "index")), i }, _getSortedVisibleDatasetMetas: function() { return this._getSortedDatasetMetas(!0) }, drawDatasets: function(t) { var e, n; if (!1 !== Le.notify(this, "beforeDatasetsDraw", [t])) { for (n = (e = this._getSortedVisibleDatasetMetas()).length - 1; n >= 0; --n) this.drawDataset(e[n], t);
                Le.notify(this, "afterDatasetsDraw", [t]) } }, drawDataset: function(t, e) { var n = { meta: t, index: t.index, easingValue: e };!1 !== Le.notify(this, "beforeDatasetDraw", [n]) && (t.controller.draw(e), Le.notify(this, "afterDatasetDraw", [n])) }, _drawTooltip: function(t) { var e = this.tooltip,
                n = { tooltip: e, easingValue: t };!1 !== Le.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), Le.notify(this, "afterTooltipDraw", [n])) }, getElementAtEvent: function(t) { return re.modes.single(this, t) }, getElementsAtEvent: function(t) { return re.modes.label(this, t, { intersect: !0 }) }, getElementsAtXAxis: function(t) { return re.modes["x-axis"](this, t, { intersect: !0 }) }, getElementsAtEventForMode: function(t, e, n) { var i = re.modes[e]; return "function" == typeof i ? i(this, t, n) : [] }, getDatasetAtEvent: function(t) { return re.modes.dataset(this, t, { intersect: !0 }) }, getDatasetMeta: function(t) { var e = this.data.datasets[t];
            e._meta || (e._meta = {}); var n = e._meta[this.id]; return n || (n = e._meta[this.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: e.order || 0, index: t }), n }, getVisibleDatasetCount: function() { for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++; return t }, isDatasetVisible: function(t) { var e = this.getDatasetMeta(t); return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden }, generateLegend: function() { return this.options.legendCallback(this) }, destroyDatasetMeta: function(t) { var e = this.id,
                n = this.data.datasets[t],
                i = n._meta && n._meta[e];
            i && (i.controller.destroy(), delete n._meta[e]) }, destroy: function() { var t, e, n = this,
                i = n.canvas; for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t) n.destroyDatasetMeta(t);
            i && (n.unbindEvents(), H.canvas.clear(n), Oe.releaseContext(n.ctx), n.canvas = null, n.ctx = null), Le.notify(n, "destroy"), delete tn.instances[n.id] }, toBase64Image: function() { return this.canvas.toDataURL.apply(this.canvas, arguments) }, initToolTip: function() { var t = this;
            t.tooltip = new Ye({ _chart: t, _chartInstance: t, _data: t.data, _options: t.options.tooltips }, t) }, bindEvents: function() { var t = this,
                e = t._listeners = {},
                n = function() { t.eventHandler.apply(t, arguments) };
            H.each(t.options.events, (function(i) { Oe.addEventListener(t, i, n), e[i] = n })), t.options.responsive && (n = function() { t.resize() }, Oe.addEventListener(t, "resize", n), e.resize = n) }, unbindEvents: function() { var t = this,
                e = t._listeners;
            e && (delete t._listeners, H.each(e, (function(e, n) { Oe.removeEventListener(t, n, e) }))) }, updateHoverStyle: function(t, e, n) { var i, a, r, o = n ? "set" : "remove"; for (a = 0, r = t.length; a < r; ++a)(i = t[a]) && this.getDatasetMeta(i._datasetIndex).controller[o + "HoverStyle"](i); "dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + o + "DatasetHoverStyle"]() }, eventHandler: function(t) { var e = this,
                n = e.tooltip; if (!1 !== Le.notify(e, "beforeEvent", [t])) { e._bufferedRender = !0, e._bufferedRequest = null; var i = e.handleEvent(t);
                n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), Le.notify(e, "afterEvent", [t]); var a = e._bufferedRequest; return a ? e.render(a) : i && !e.animating && (e.stop(), e.render({ duration: e.options.hover.animationDuration, lazy: !0 })), e._bufferedRender = !1, e._bufferedRequest = null, e } }, handleEvent: function(t) { var e, n = this,
                i = n.options || {},
                a = i.hover; return n.lastActive = n.lastActive || [], "mouseout" === t.type ? n.active = [] : n.active = n.getElementsAtEventForMode(t, a.mode, a), H.callback(i.onHover || i.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, a.mode, !1), n.active.length && a.mode && n.updateHoverStyle(n.active, a.mode, !0), e = !H.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e } }), tn.instances = {}; var en = tn;
    tn.Controller = tn, tn.types = {}, H.configMerge = Ke, H.scaleMerge = Xe;

    function nn() { throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.") }

    function an(t) { this.options = t || {} }
    H.extend(an.prototype, { formats: nn, parse: nn, format: nn, add: nn, diff: nn, startOf: nn, endOf: nn, _create: function(t) { return t } }), an.override = function(t) { H.extend(an.prototype, t) }; var rn = { _date: an },
        on = { formatters: { values: function(t) { return H.isArray(t) ? t : "" + t }, linear: function(t, e, n) { var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                    Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t)); var a = H.log10(Math.abs(i)),
                        r = ""; if (0 !== t)
                        if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) { var o = H.log10(Math.abs(t)),
                                s = Math.floor(o) - Math.floor(a);
                            s = Math.max(Math.min(s, 20), 0), r = t.toExponential(s) } else { var l = -1 * Math.floor(a);
                            l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l) }
                    else r = "0"; return r }, logarithmic: function(t, e, n) { var i = t / Math.pow(10, Math.floor(H.log10(t))); return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ? t.toExponential() : "" } } },
        sn = H.isArray,
        ln = H.isNullOrUndef,
        un = H.valueOrDefault,
        dn = H.valueAtIndexOrDefault;

    function hn(t, e, n) { var i, a = t.getTicks().length,
            r = Math.min(e, a - 1),
            o = t.getPixelForTick(r),
            s = t._startPixel,
            l = t._endPixel; if (!(n && (i = 1 === a ? Math.max(o - s, l - o) : 0 === e ? (t.getPixelForTick(1) - o) / 2 : (o - t.getPixelForTick(r - 1)) / 2, (o += r < e ? i : -i) < s - 1e-6 || o > l + 1e-6))) return o }

    function cn(t, e, n, i) { var a, r, o, s, l, u, d, h, c, f, g, p, m, v = n.length,
            b = [],
            x = [],
            y = [],
            _ = 0,
            k = 0; for (a = 0; a < v; ++a) { if (s = n[a].label, l = n[a].major ? e.major : e.minor, t.font = u = l.string, d = i[u] = i[u] || { data: {}, gc: [] }, h = l.lineHeight, c = f = 0, ln(s) || sn(s)) { if (sn(s))
                    for (r = 0, o = s.length; r < o; ++r) g = s[r], ln(g) || sn(g) || (c = H.measureText(t, d.data, d.gc, c, g), f += h) } else c = H.measureText(t, d.data, d.gc, c, s), f = h;
            b.push(c), x.push(f), y.push(h / 2), _ = Math.max(c, _), k = Math.max(f, k) }

        function w(t) { return { width: b[t] || 0, height: x[t] || 0, offset: y[t] || 0 } } return function(t, e) { H.each(t, (function(t) { var n, i = t.gc,
                    a = i.length / 2; if (a > e) { for (n = 0; n < a; ++n) delete t.data[i[n]];
                    i.splice(0, a) } })) }(i, v), p = b.indexOf(_), m = x.indexOf(k), { first: w(0), last: w(v - 1), widest: w(p), highest: w(m) } }

    function fn(t) { return t.drawTicks ? t.tickMarkLength : 0 }

    function gn(t) { var e, n; return t.display ? (e = H.options._parseFont(t), n = H.options.toPadding(t.padding), e.lineHeight + n.height) : 0 }

    function pn(t, e) { return H.extend(H.options._parseFont({ fontFamily: un(e.fontFamily, t.fontFamily), fontSize: un(e.fontSize, t.fontSize), fontStyle: un(e.fontStyle, t.fontStyle), lineHeight: un(e.lineHeight, t.lineHeight) }), { color: H.options.resolve([e.fontColor, t.fontColor, N.global.defaultFontColor]) }) }

    function mn(t) { var e = pn(t, t.minor); return { minor: e, major: t.major.enabled ? pn(t, t.major) : e } }

    function vn(t) { var e, n, i, a = []; for (n = 0, i = t.length; n < i; ++n) void 0 !== (e = t[n])._index && a.push(e); return a }

    function bn(t, e, n, i) { var a, r, o, s, l = un(n, 0),
            u = Math.min(un(i, t.length), t.length),
            d = 0; for (e = Math.ceil(e), i && (e = (a = i - n) / Math.floor(a / e)), s = l; s < 0;) d++, s = Math.round(l + d * e); for (r = Math.max(l, 0); r < u; r++) o = t[r], r === s ? (o._index = r, d++, s = Math.round(l + d * e)) : delete o.label }
    N._set("scale", { display: !0, position: "left", offset: !1, gridLines: { display: !0, color: "rgba(0,0,0,0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { display: !1, labelString: "", padding: { top: 4, bottom: 4 } }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: on.formatters.values, minor: {}, major: {} } }); var xn = K.extend({ zeroLineIndex: 0, getPadding: function() { return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 } }, getTicks: function() { return this._ticks }, _getLabels: function() { var t = this.chart.data; return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [] }, mergeTicksOptions: function() {}, beforeUpdate: function() { H.callback(this.options.beforeUpdate, [this]) }, update: function(t, e, n) { var i, a, r, o, s, l = this,
                u = l.options.ticks,
                d = u.sampleSize; if (l.beforeUpdate(), l.maxWidth = t, l.maxHeight = e, l.margins = H.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), o = l.buildTicks() || [], (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks)
                for (o = [], i = 0, a = l.ticks.length; i < a; ++i) o.push({ value: l.ticks[i], major: !1 }); return l._ticks = o, s = d < o.length, r = l._convertTicksToLabels(s ? function(t, e) { for (var n = [], i = t.length / e, a = 0, r = t.length; a < r; a += i) n.push(t[Math.floor(a)]); return n }(o, d) : o), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = u.display && (u.autoSkip || "auto" === u.source) ? l._autoSkip(o) : o, s && (r = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = r, l.afterUpdate(), l.minSize }, _configure: function() { var t, e, n = this,
                i = n.options.ticks.reverse;
            n.isHorizontal() ? (t = n.left, e = n.right) : (t = n.top, e = n.bottom, i = !i), n._startPixel = t, n._endPixel = e, n._reversePixels = i, n._length = e - t }, afterUpdate: function() { H.callback(this.options.afterUpdate, [this]) }, beforeSetDimensions: function() { H.callback(this.options.beforeSetDimensions, [this]) }, setDimensions: function() { var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0 }, afterSetDimensions: function() { H.callback(this.options.afterSetDimensions, [this]) }, beforeDataLimits: function() { H.callback(this.options.beforeDataLimits, [this]) }, determineDataLimits: H.noop, afterDataLimits: function() { H.callback(this.options.afterDataLimits, [this]) }, beforeBuildTicks: function() { H.callback(this.options.beforeBuildTicks, [this]) }, buildTicks: H.noop, afterBuildTicks: function(t) { var e = this; return sn(t) && t.length ? H.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = H.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t) }, beforeTickToLabelConversion: function() { H.callback(this.options.beforeTickToLabelConversion, [this]) }, convertTicksToLabels: function() { var t = this.options.ticks;
            this.ticks = this.ticks.map(t.userCallback || t.callback, this) }, afterTickToLabelConversion: function() { H.callback(this.options.afterTickToLabelConversion, [this]) }, beforeCalculateTickRotation: function() { H.callback(this.options.beforeCalculateTickRotation, [this]) }, calculateTickRotation: function() { var t, e, n, i, a, r, o, s = this,
                l = s.options,
                u = l.ticks,
                d = s.getTicks().length,
                h = u.minRotation || 0,
                c = u.maxRotation,
                f = h;!s._isVisible() || !u.display || h >= c || d <= 1 || !s.isHorizontal() ? s.labelRotation = h : (e = (t = s._getLabelSizes()).widest.width, n = t.highest.height - t.highest.offset, i = Math.min(s.maxWidth, s.chart.width - e), e + 6 > (a = l.offset ? s.maxWidth / d : i / (d - 1)) && (a = i / (d - (l.offset ? .5 : 1)), r = s.maxHeight - fn(l.gridLines) - u.padding - gn(l.scaleLabel), o = Math.sqrt(e * e + n * n), f = H.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / a, 1)), Math.asin(Math.min(r / o, 1)) - Math.asin(n / o))), f = Math.max(h, Math.min(c, f))), s.labelRotation = f) }, afterCalculateTickRotation: function() { H.callback(this.options.afterCalculateTickRotation, [this]) }, beforeFit: function() { H.callback(this.options.beforeFit, [this]) }, fit: function() { var t = this,
                e = t.minSize = { width: 0, height: 0 },
                n = t.chart,
                i = t.options,
                a = i.ticks,
                r = i.scaleLabel,
                o = i.gridLines,
                s = t._isVisible(),
                l = "bottom" === i.position,
                u = t.isHorizontal(); if (u ? e.width = t.maxWidth : s && (e.width = fn(o) + gn(r)), u ? s && (e.height = fn(o) + gn(r)) : e.height = t.maxHeight, a.display && s) { var d = mn(a),
                    h = t._getLabelSizes(),
                    c = h.first,
                    f = h.last,
                    g = h.widest,
                    p = h.highest,
                    m = .4 * d.minor.lineHeight,
                    v = a.padding; if (u) { var b = 0 !== t.labelRotation,
                        x = H.toRadians(t.labelRotation),
                        y = Math.cos(x),
                        _ = Math.sin(x),
                        k = _ * g.width + y * (p.height - (b ? p.offset : 0)) + (b ? 0 : m);
                    e.height = Math.min(t.maxHeight, e.height + k + v); var w, M, S = t.getPixelForTick(0) - t.left,
                        C = t.right - t.getPixelForTick(t.getTicks().length - 1);
                    b ? (w = l ? y * c.width + _ * c.offset : _ * (c.height - c.offset), M = l ? _ * (f.height - f.offset) : y * f.width + _ * f.offset) : (w = c.width / 2, M = f.width / 2), t.paddingLeft = Math.max((w - S) * t.width / (t.width - S), 0) + 3, t.paddingRight = Math.max((M - C) * t.width / (t.width - C), 0) + 3 } else { var P = a.mirror ? 0 : g.width + v + m;
                    e.width = Math.min(t.maxWidth, e.width + P), t.paddingTop = c.height / 2, t.paddingBottom = f.height / 2 } }
            t.handleMargins(), u ? (t.width = t._length = n.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = n.height - t.margins.top - t.margins.bottom) }, handleMargins: function() { var t = this;
            t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom)) }, afterFit: function() { H.callback(this.options.afterFit, [this]) }, isHorizontal: function() { var t = this.options.position; return "top" === t || "bottom" === t }, isFullWidth: function() { return this.options.fullWidth }, getRightValue: function(t) { if (ln(t)) return NaN; if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN; if (t)
                if (this.isHorizontal()) { if (void 0 !== t.x) return this.getRightValue(t.x) } else if (void 0 !== t.y) return this.getRightValue(t.y); return t }, _convertTicksToLabels: function(t) { var e, n, i, a = this; for (a.ticks = t.map((function(t) { return t.value })), a.beforeTickToLabelConversion(), e = a.convertTicksToLabels(t) || a.ticks, a.afterTickToLabelConversion(), n = 0, i = t.length; n < i; ++n) t[n].label = e[n]; return e }, _getLabelSizes: function() { var t = this,
                e = t._labelSizes; return e || (t._labelSizes = e = cn(t.ctx, mn(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e }, _parseValue: function(t) { var e, n, i, a; return sn(t) ? (e = +this.getRightValue(t[0]), n = +this.getRightValue(t[1]), i = Math.min(e, n), a = Math.max(e, n)) : (e = void 0, n = t = +this.getRightValue(t), i = t, a = t), { min: i, max: a, start: e, end: n } }, _getScaleLabel: function(t) { var e = this._parseValue(t); return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t) }, getLabelForIndex: H.noop, getPixelForValue: H.noop, getValueForPixel: H.noop, getPixelForTick: function(t) { var e = this.options.offset,
                n = this._ticks.length,
                i = 1 / Math.max(n - (e ? 0 : 1), 1); return t < 0 || t > n - 1 ? null : this.getPixelForDecimal(t * i + (e ? i / 2 : 0)) }, getPixelForDecimal: function(t) { return this._reversePixels && (t = 1 - t), this._startPixel + t * this._length }, getDecimalForPixel: function(t) { var e = (t - this._startPixel) / this._length; return this._reversePixels ? 1 - e : e }, getBasePixel: function() { return this.getPixelForValue(this.getBaseValue()) }, getBaseValue: function() { var t = this.min,
                e = this.max; return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0 }, _autoSkip: function(t) { var e, n, i, a, r = this.options.ticks,
                o = this._length,
                s = r.maxTicksLimit || o / this._tickSize() + 1,
                l = r.major.enabled ? function(t) { var e, n, i = []; for (e = 0, n = t.length; e < n; e++) t[e].major && i.push(e); return i }(t) : [],
                u = l.length,
                d = l[0],
                h = l[u - 1]; if (u > s) return function(t, e, n) { var i, a, r = 0,
                    o = e[0]; for (n = Math.ceil(n), i = 0; i < t.length; i++) a = t[i], i === o ? (a._index = i, o = e[++r * n]) : delete a.label }(t, l, u / s), vn(t); if (i = function(t, e, n, i) { var a, r, o, s, l = function(t) { var e, n, i = t.length; if (i < 2) return !1; for (n = t[0], e = 1; e < i; ++e)
                                if (t[e] - t[e - 1] !== n) return !1;
                            return n }(t),
                        u = (e.length - 1) / i; if (!l) return Math.max(u, 1); for (o = 0, s = (a = H.math._factorize(l)).length - 1; o < s; o++)
                        if ((r = a[o]) > u) return r;
                    return Math.max(u, 1) }(l, t, 0, s), u > 0) { for (e = 0, n = u - 1; e < n; e++) bn(t, i, l[e], l[e + 1]); return a = u > 1 ? (h - d) / (u - 1) : null, bn(t, i, H.isNullOrUndef(a) ? 0 : d - a, d), bn(t, i, h, H.isNullOrUndef(a) ? t.length : h + a), vn(t) } return bn(t, i), vn(t) }, _tickSize: function() { var t = this.options.ticks,
                e = H.toRadians(this.labelRotation),
                n = Math.abs(Math.cos(e)),
                i = Math.abs(Math.sin(e)),
                a = this._getLabelSizes(),
                r = t.autoSkipPadding || 0,
                o = a ? a.widest.width + r : 0,
                s = a ? a.highest.height + r : 0; return this.isHorizontal() ? s * n > o * i ? o / n : s / i : s * i < o * n ? s / n : o / i }, _isVisible: function() { var t, e, n, i = this.chart,
                a = this.options.display; if ("auto" !== a) return !!a; for (t = 0, e = i.data.datasets.length; t < e; ++t)
                if (i.isDatasetVisible(t) && ((n = i.getDatasetMeta(t)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
            return !1 }, _computeGridLineItems: function(t) { var e, n, i, a, r, o, s, l, u, d, h, c, f, g, p, m, v, b = this,
                x = b.chart,
                y = b.options,
                _ = y.gridLines,
                k = y.position,
                w = _.offsetGridLines,
                M = b.isHorizontal(),
                S = b._ticksToDraw,
                C = S.length + (w ? 1 : 0),
                P = fn(_),
                A = [],
                D = _.drawBorder ? dn(_.lineWidth, 0, 0) : 0,
                T = D / 2,
                I = H._alignPixel,
                F = function(t) { return I(x, t, D) }; for ("top" === k ? (e = F(b.bottom), s = b.bottom - P, u = e - T, h = F(t.top) + T, f = t.bottom) : "bottom" === k ? (e = F(b.top), h = t.top, f = F(t.bottom) - T, s = e + T, u = b.top + P) : "left" === k ? (e = F(b.right), o = b.right - P, l = e - T, d = F(t.left) + T, c = t.right) : (e = F(b.left), d = t.left, c = F(t.right) - T, o = e + T, l = b.left + P), n = 0; n < C; ++n) i = S[n] || {}, ln(i.label) && n < S.length || (n === b.zeroLineIndex && y.offset === w ? (g = _.zeroLineWidth, p = _.zeroLineColor, m = _.zeroLineBorderDash || [], v = _.zeroLineBorderDashOffset || 0) : (g = dn(_.lineWidth, n, 1), p = dn(_.color, n, "rgba(0,0,0,0.1)"), m = _.borderDash || [], v = _.borderDashOffset || 0), void 0 !== (a = hn(b, i._index || n, w)) && (r = I(x, a, g), M ? o = l = d = c = r : s = u = h = f = r, A.push({ tx1: o, ty1: s, tx2: l, ty2: u, x1: d, y1: h, x2: c, y2: f, width: g, color: p, borderDash: m, borderDashOffset: v }))); return A.ticksLength = C, A.borderValue = e, A }, _computeLabelItems: function() { var t, e, n, i, a, r, o, s, l, u, d, h, c = this,
                f = c.options,
                g = f.ticks,
                p = f.position,
                m = g.mirror,
                v = c.isHorizontal(),
                b = c._ticksToDraw,
                x = mn(g),
                y = g.padding,
                _ = fn(f.gridLines),
                k = -H.toRadians(c.labelRotation),
                w = []; for ("top" === p ? (r = c.bottom - _ - y, o = k ? "left" : "center") : "bottom" === p ? (r = c.top + _ + y, o = k ? "right" : "center") : "left" === p ? (a = c.right - (m ? 0 : _) - y, o = m ? "left" : "right") : (a = c.left + (m ? 0 : _) + y, o = m ? "right" : "left"), t = 0, e = b.length; t < e; ++t) i = (n = b[t]).label, ln(i) || (s = c.getPixelForTick(n._index || t) + g.labelOffset, u = (l = n.major ? x.major : x.minor).lineHeight, d = sn(i) ? i.length : 1, v ? (a = s, h = "top" === p ? ((k ? 1 : .5) - d) * u : (k ? 0 : .5) * u) : (r = s, h = (1 - d) * u / 2), w.push({ x: a, y: r, rotation: k, label: i, font: l, textOffset: h, textAlign: o })); return w }, _drawGrid: function(t) { var e = this,
                n = e.options.gridLines; if (n.display) { var i, a, r, o, s, l = e.ctx,
                    u = e.chart,
                    d = H._alignPixel,
                    h = n.drawBorder ? dn(n.lineWidth, 0, 0) : 0,
                    c = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t)); for (r = 0, o = c.length; r < o; ++r) i = (s = c[r]).width, a = s.color, i && a && (l.save(), l.lineWidth = i, l.strokeStyle = a, l.setLineDash && (l.setLineDash(s.borderDash), l.lineDashOffset = s.borderDashOffset), l.beginPath(), n.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)), n.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)), l.stroke(), l.restore()); if (h) { var f, g, p, m, v = h,
                        b = dn(n.lineWidth, c.ticksLength - 1, 1),
                        x = c.borderValue;
                    e.isHorizontal() ? (f = d(u, e.left, v) - v / 2, g = d(u, e.right, b) + b / 2, p = m = x) : (p = d(u, e.top, v) - v / 2, m = d(u, e.bottom, b) + b / 2, f = g = x), l.lineWidth = h, l.strokeStyle = dn(n.color, 0), l.beginPath(), l.moveTo(f, p), l.lineTo(g, m), l.stroke() } } }, _drawLabels: function() { var t = this; if (t.options.ticks.display) { var e, n, i, a, r, o, s, l, u = t.ctx,
                    d = t._labelItems || (t._labelItems = t._computeLabelItems()); for (e = 0, i = d.length; e < i; ++e) { if (o = (r = d[e]).font, u.save(), u.translate(r.x, r.y), u.rotate(r.rotation), u.font = o.string, u.fillStyle = o.color, u.textBaseline = "middle", u.textAlign = r.textAlign, s = r.label, l = r.textOffset, sn(s))
                        for (n = 0, a = s.length; n < a; ++n) u.fillText("" + s[n], 0, l), l += o.lineHeight;
                    else u.fillText(s, 0, l);
                    u.restore() } } }, _drawTitle: function() { var t = this,
                e = t.ctx,
                n = t.options,
                i = n.scaleLabel; if (i.display) { var a, r, o = un(i.fontColor, N.global.defaultFontColor),
                    s = H.options._parseFont(i),
                    l = H.options.toPadding(i.padding),
                    u = s.lineHeight / 2,
                    d = n.position,
                    h = 0; if (t.isHorizontal()) a = t.left + t.width / 2, r = "bottom" === d ? t.bottom - u - l.bottom : t.top + u + l.top;
                else { var c = "left" === d;
                    a = c ? t.left + u + l.top : t.right - u - l.top, r = t.top + t.height / 2, h = c ? -.5 * Math.PI : .5 * Math.PI }
                e.save(), e.translate(a, r), e.rotate(h), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = o, e.font = s.string, e.fillText(i.labelString, 0, 0), e.restore() } }, draw: function(t) { this._isVisible() && (this._drawGrid(t), this._drawTitle(), this._drawLabels()) }, _layers: function() { var t = this,
                e = t.options,
                n = e.ticks && e.ticks.z || 0,
                i = e.gridLines && e.gridLines.z || 0; return t._isVisible() && n !== i && t.draw === t._draw ? [{ z: i, draw: function() { t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments) } }, { z: n, draw: function() { t._drawLabels.apply(t, arguments) } }] : [{ z: n, draw: function() { t.draw.apply(t, arguments) } }] }, _getMatchingVisibleMetas: function(t) { var e = this,
                n = e.isHorizontal(); return e.chart._getSortedVisibleDatasetMetas().filter((function(i) { return (!t || i.type === t) && (n ? i.xAxisID === e.id : i.yAxisID === e.id) })) } });
    xn.prototype._draw = xn.prototype.draw; var yn = xn,
        _n = H.isNullOrUndef,
        kn = yn.extend({ determineDataLimits: function() { var t, e = this,
                    n = e._getLabels(),
                    i = e.options.ticks,
                    a = i.min,
                    r = i.max,
                    o = 0,
                    s = n.length - 1;
                void 0 !== a && (t = n.indexOf(a)) >= 0 && (o = t), void 0 !== r && (t = n.indexOf(r)) >= 0 && (s = t), e.minIndex = o, e.maxIndex = s, e.min = n[o], e.max = n[s] }, buildTicks: function() { var t = this._getLabels(),
                    e = this.minIndex,
                    n = this.maxIndex;
                this.ticks = 0 === e && n === t.length - 1 ? t : t.slice(e, n + 1) }, getLabelForIndex: function(t, e) { var n = this.chart; return n.getDatasetMeta(e).controller._getValueScaleId() === this.id ? this.getRightValue(n.data.datasets[e].data[t]) : this._getLabels()[t] }, _configure: function() { var t = this,
                    e = t.options.offset,
                    n = t.ticks;
                yn.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), n && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(n.length - (e ? 0 : 1), 1)) }, getPixelForValue: function(t, e, n) { var i, a, r, o = this; return _n(e) || _n(n) || (t = o.chart.data.datasets[n].data[e]), _n(t) || (i = o.isHorizontal() ? t.x : t.y), (void 0 !== i || void 0 !== t && isNaN(e)) && (a = o._getLabels(), t = H.valueOrDefault(i, t), e = -1 !== (r = a.indexOf(t)) ? r : e, isNaN(e) && (e = t)), o.getPixelForDecimal((e - o._startValue) / o._valueRange) }, getPixelForTick: function(t) { var e = this.ticks; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex) }, getValueForPixel: function(t) { var e = Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange); return Math.min(Math.max(e, 0), this.ticks.length - 1) }, getBasePixel: function() { return this.bottom } }),
        wn = { position: "bottom" };
    kn._defaults = wn; var Mn = H.noop,
        Sn = H.isNullOrUndef; var Cn = yn.extend({ getRightValue: function(t) { return "string" == typeof t ? +t : yn.prototype.getRightValue.call(this, t) }, handleTickRangeOptions: function() { var t = this,
                    e = t.options.ticks; if (e.beginAtZero) { var n = H.sign(t.min),
                        i = H.sign(t.max);
                    n < 0 && i < 0 ? t.max = 0 : n > 0 && i > 0 && (t.min = 0) } var a = void 0 !== e.min || void 0 !== e.suggestedMin,
                    r = void 0 !== e.max || void 0 !== e.suggestedMax;
                void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a !== r && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--) }, getTickLimit: function() { var t, e = this.options.ticks,
                    n = e.stepSize,
                    i = e.maxTicksLimit; return n ? t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (t = this._computeTickLimit(), i = i || 11), i && (t = Math.min(i, t)), t }, _computeTickLimit: function() { return Number.POSITIVE_INFINITY }, handleDirectionalChanges: Mn, buildTicks: function() { var t = this,
                    e = t.options.ticks,
                    n = t.getTickLimit(),
                    i = { maxTicks: n = Math.max(2, n), min: e.min, max: e.max, precision: e.precision, stepSize: H.valueOrDefault(e.fixedStepSize, e.stepSize) },
                    a = t.ticks = function(t, e) { var n, i, a, r, o = [],
                            s = t.stepSize,
                            l = s || 1,
                            u = t.maxTicks - 1,
                            d = t.min,
                            h = t.max,
                            c = t.precision,
                            f = e.min,
                            g = e.max,
                            p = H.niceNum((g - f) / u / l) * l; if (p < 1e-14 && Sn(d) && Sn(h)) return [f, g];
                        (r = Math.ceil(g / p) - Math.floor(f / p)) > u && (p = H.niceNum(r * p / u / l) * l), s || Sn(c) ? n = Math.pow(10, H._decimalPlaces(p)) : (n = Math.pow(10, c), p = Math.ceil(p * n) / n), i = Math.floor(f / p) * p, a = Math.ceil(g / p) * p, s && (!Sn(d) && H.almostWhole(d / p, p / 1e3) && (i = d), !Sn(h) && H.almostWhole(h / p, p / 1e3) && (a = h)), r = (a - i) / p, r = H.almostEquals(r, Math.round(r), p / 1e3) ? Math.round(r) : Math.ceil(r), i = Math.round(i * n) / n, a = Math.round(a * n) / n, o.push(Sn(d) ? i : d); for (var m = 1; m < r; ++m) o.push(Math.round((i + m * p) * n) / n); return o.push(Sn(h) ? a : h), o }(i, t);
                t.handleDirectionalChanges(), t.max = H.max(a), t.min = H.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max) }, convertTicksToLabels: function() { var t = this;
                t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), yn.prototype.convertTicksToLabels.call(t) }, _configure: function() { var t, e = this,
                    n = e.getTicks(),
                    i = e.min,
                    a = e.max;
                yn.prototype._configure.call(e), e.options.offset && n.length && (i -= t = (a - i) / Math.max(n.length - 1, 1) / 2, a += t), e._startValue = i, e._endValue = a, e._valueRange = a - i } }),
        Pn = { position: "left", ticks: { callback: on.formatters.linear } };

    function An(t, e, n, i) { var a, r, o = t.options,
            s = function(t, e, n) { var i = [n.type, void 0 === e && void 0 === n.stack ? n.index : "", n.stack].join("."); return void 0 === t[i] && (t[i] = { pos: [], neg: [] }), t[i] }(e, o.stacked, n),
            l = s.pos,
            u = s.neg,
            d = i.length; for (a = 0; a < d; ++a) r = t._parseValue(i[a]), isNaN(r.min) || isNaN(r.max) || n.data[a].hidden || (l[a] = l[a] || 0, u[a] = u[a] || 0, o.relativePoints ? l[a] = 100 : r.min < 0 || r.max < 0 ? u[a] += r.min : l[a] += r.max) }

    function Dn(t, e, n) { var i, a, r = n.length; for (i = 0; i < r; ++i) a = t._parseValue(n[i]), isNaN(a.min) || isNaN(a.max) || e.data[i].hidden || (t.min = Math.min(t.min, a.min), t.max = Math.max(t.max, a.max)) } var Tn = Cn.extend({ determineDataLimits: function() { var t, e, n, i, a = this,
                    r = a.options,
                    o = a.chart.data.datasets,
                    s = a._getMatchingVisibleMetas(),
                    l = r.stacked,
                    u = {},
                    d = s.length; if (a.min = Number.POSITIVE_INFINITY, a.max = Number.NEGATIVE_INFINITY, void 0 === l)
                    for (t = 0; !l && t < d; ++t) l = void 0 !== (e = s[t]).stack; for (t = 0; t < d; ++t) n = o[(e = s[t]).index].data, l ? An(a, u, e, n) : Dn(a, e, n);
                H.each(u, (function(t) { i = t.pos.concat(t.neg), a.min = Math.min(a.min, H.min(i)), a.max = Math.max(a.max, H.max(i)) })), a.min = H.isFinite(a.min) && !isNaN(a.min) ? a.min : 0, a.max = H.isFinite(a.max) && !isNaN(a.max) ? a.max : 1, a.handleTickRangeOptions() }, _computeTickLimit: function() { var t; return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = H.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight)) }, handleDirectionalChanges: function() { this.isHorizontal() || this.ticks.reverse() }, getLabelForIndex: function(t, e) { return this._getScaleLabel(this.chart.data.datasets[e].data[t]) }, getPixelForValue: function(t) { return this.getPixelForDecimal((+this.getRightValue(t) - this._startValue) / this._valueRange) }, getValueForPixel: function(t) { return this._startValue + this.getDecimalForPixel(t) * this._valueRange }, getPixelForTick: function(t) { var e = this.ticksAsNumbers; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t]) } }),
        In = Pn;
    Tn._defaults = In; var Fn = H.valueOrDefault,
        On = H.math.log10; var Ln = { position: "left", ticks: { callback: on.formatters.logarithmic } };

    function Rn(t, e) { return H.isFinite(t) && t >= 0 ? t : e } var zn = yn.extend({ determineDataLimits: function() { var t, e, n, i, a, r, o = this,
                    s = o.options,
                    l = o.chart,
                    u = l.data.datasets,
                    d = o.isHorizontal();

                function h(t) { return d ? t.xAxisID === o.id : t.yAxisID === o.id }
                o.min = Number.POSITIVE_INFINITY, o.max = Number.NEGATIVE_INFINITY, o.minNotZero = Number.POSITIVE_INFINITY; var c = s.stacked; if (void 0 === c)
                    for (t = 0; t < u.length; t++)
                        if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && h(e) && void 0 !== e.stack) { c = !0; break }
                if (s.stacked || c) { var f = {}; for (t = 0; t < u.length; t++) { var g = [(e = l.getDatasetMeta(t)).type, void 0 === s.stacked && void 0 === e.stack ? t : "", e.stack].join("."); if (l.isDatasetVisible(t) && h(e))
                            for (void 0 === f[g] && (f[g] = []), a = 0, r = (i = u[t].data).length; a < r; a++) { var p = f[g];
                                n = o._parseValue(i[a]), isNaN(n.min) || isNaN(n.max) || e.data[a].hidden || n.min < 0 || n.max < 0 || (p[a] = p[a] || 0, p[a] += n.max) } }
                    H.each(f, (function(t) { if (t.length > 0) { var e = H.min(t),
                                n = H.max(t);
                            o.min = Math.min(o.min, e), o.max = Math.max(o.max, n) } })) } else
                    for (t = 0; t < u.length; t++)
                        if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && h(e))
                            for (a = 0, r = (i = u[t].data).length; a < r; a++) n = o._parseValue(i[a]), isNaN(n.min) || isNaN(n.max) || e.data[a].hidden || n.min < 0 || n.max < 0 || (o.min = Math.min(n.min, o.min), o.max = Math.max(n.max, o.max), 0 !== n.min && (o.minNotZero = Math.min(n.min, o.minNotZero)));
                o.min = H.isFinite(o.min) ? o.min : null, o.max = H.isFinite(o.max) ? o.max : null, o.minNotZero = H.isFinite(o.minNotZero) ? o.minNotZero : null, this.handleTickRangeOptions() }, handleTickRangeOptions: function() { var t = this,
                    e = t.options.ticks;
                t.min = Rn(e.min, t.min), t.max = Rn(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(On(t.min)) - 1), t.max = Math.pow(10, Math.floor(On(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(On(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(On(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(On(t.max))) : t.minNotZero = 1) }, buildTicks: function() { var t = this,
                    e = t.options.ticks,
                    n = !t.isHorizontal(),
                    i = { min: Rn(e.min), max: Rn(e.max) },
                    a = t.ticks = function(t, e) { var n, i, a = [],
                            r = Fn(t.min, Math.pow(10, Math.floor(On(e.min)))),
                            o = Math.floor(On(e.max)),
                            s = Math.ceil(e.max / Math.pow(10, o));
                        0 === r ? (n = Math.floor(On(e.minNotZero)), i = Math.floor(e.minNotZero / Math.pow(10, n)), a.push(r), r = i * Math.pow(10, n)) : (n = Math.floor(On(r)), i = Math.floor(r / Math.pow(10, n))); var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                        do { a.push(r), 10 === ++i && (i = 1, l = ++n >= 0 ? 1 : l), r = Math.round(i * Math.pow(10, n) * l) / l } while (n < o || n === o && i < s); var u = Fn(t.max, r); return a.push(u), a }(i, t);
                t.max = H.max(a), t.min = H.min(a), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && a.reverse() }, convertTicksToLabels: function() { this.tickValues = this.ticks.slice(), yn.prototype.convertTicksToLabels.call(this) }, getLabelForIndex: function(t, e) { return this._getScaleLabel(this.chart.data.datasets[e].data[t]) }, getPixelForTick: function(t) { var e = this.tickValues; return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t]) }, _getFirstTickValue: function(t) { var e = Math.floor(On(t)); return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e) }, _configure: function() { var t = this,
                    e = t.min,
                    n = 0;
                yn.prototype._configure.call(t), 0 === e && (e = t._getFirstTickValue(t.minNotZero), n = Fn(t.options.ticks.fontSize, N.global.defaultFontSize) / t._length), t._startValue = On(e), t._valueOffset = n, t._valueRange = (On(t.max) - On(e)) / (1 - n) }, getPixelForValue: function(t) { var e = this,
                    n = 0; return (t = +e.getRightValue(t)) > e.min && t > 0 && (n = (On(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(n) }, getValueForPixel: function(t) { var e = this,
                    n = e.getDecimalForPixel(t); return 0 === n && 0 === e.min ? 0 : Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange) } }),
        Nn = Ln;
    zn._defaults = Nn; var Bn = H.valueOrDefault,
        En = H.valueAtIndexOrDefault,
        Wn = H.options.resolve,
        Vn = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, color: "rgba(0,0,0,0.1)", lineWidth: 1, borderDash: [], borderDashOffset: 0 }, gridLines: { circular: !1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: on.formatters.linear }, pointLabels: { display: !0, fontSize: 10, callback: function(t) { return t } } };

    function Hn(t) { var e = t.ticks; return e.display && t.display ? Bn(e.fontSize, N.global.defaultFontSize) + 2 * e.backdropPaddingY : 0 }

    function jn(t, e, n, i, a) { return t === i || t === a ? { start: e - n / 2, end: e + n / 2 } : t < i || t > a ? { start: e - n, end: e } : { start: e, end: e + n } }

    function qn(t) { return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right" }

    function Un(t, e, n, i) { var a, r, o = n.y + i / 2; if (H.isArray(e))
            for (a = 0, r = e.length; a < r; ++a) t.fillText(e[a], n.x, o), o += i;
        else t.fillText(e, n.x, o) }

    function Yn(t, e, n) { 90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h) }

    function Gn(t) { return H.isNumber(t) ? t : 0 } var Xn = Cn.extend({ setDimensions: function() { var t = this;
                t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Hn(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2 }, determineDataLimits: function() { var t = this,
                    e = t.chart,
                    n = Number.POSITIVE_INFINITY,
                    i = Number.NEGATIVE_INFINITY;
                H.each(e.data.datasets, (function(a, r) { if (e.isDatasetVisible(r)) { var o = e.getDatasetMeta(r);
                        H.each(a.data, (function(e, a) { var r = +t.getRightValue(e);
                            isNaN(r) || o.data[a].hidden || (n = Math.min(r, n), i = Math.max(r, i)) })) } })), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions() }, _computeTickLimit: function() { return Math.ceil(this.drawingArea / Hn(this.options)) }, convertTicksToLabels: function() { var t = this;
                Cn.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map((function() { var e = H.callback(t.options.pointLabels.callback, arguments, t); return e || 0 === e ? e : "" })) }, getLabelForIndex: function(t, e) { return +this.getRightValue(this.chart.data.datasets[e].data[t]) }, fit: function() { var t = this.options;
                t.display && t.pointLabels.display ? function(t) { var e, n, i, a = H.options._parseFont(t.options.pointLabels),
                        r = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
                        o = {};
                    t.ctx.font = a.string, t._pointLabelSizes = []; var s, l, u, d = t.chart.data.labels.length; for (e = 0; e < d; e++) { i = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = a.lineHeight, u = t.pointLabels[e], n = H.isArray(u) ? { w: H.longestText(s, s.font, u), h: u.length * l } : { w: s.measureText(u).width, h: l }, t._pointLabelSizes[e] = n; var h = t.getIndexAngle(e),
                            c = H.toDegrees(h) % 360,
                            f = jn(c, i.x, n.w, 0, 180),
                            g = jn(c, i.y, n.h, 90, 270);
                        f.start < r.l && (r.l = f.start, o.l = h), f.end > r.r && (r.r = f.end, o.r = h), g.start < r.t && (r.t = g.start, o.t = h), g.end > r.b && (r.b = g.end, o.b = h) }
                    t.setReductions(t.drawingArea, r, o) }(this) : this.setCenterPoint(0, 0, 0, 0) }, setReductions: function(t, e, n) { var i = this,
                    a = e.l / Math.sin(n.l),
                    r = Math.max(e.r - i.width, 0) / Math.sin(n.r),
                    o = -e.t / Math.cos(n.t),
                    s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);
                a = Gn(a), r = Gn(r), o = Gn(o), s = Gn(s), i.drawingArea = Math.min(Math.floor(t - (a + r) / 2), Math.floor(t - (o + s) / 2)), i.setCenterPoint(a, r, o, s) }, setCenterPoint: function(t, e, n, i) { var a = this,
                    r = a.width - e - a.drawingArea,
                    o = t + a.drawingArea,
                    s = n + a.drawingArea,
                    l = a.height - a.paddingTop - i - a.drawingArea;
                a.xCenter = Math.floor((o + r) / 2 + a.left), a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop) }, getIndexAngle: function(t) { var e = this.chart,
                    n = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360; return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360 }, getDistanceFromCenterForValue: function(t) { var e = this; if (H.isNullOrUndef(t)) return NaN; var n = e.drawingArea / (e.max - e.min); return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n }, getPointPosition: function(t, e) { var n = this.getIndexAngle(t) - Math.PI / 2; return { x: Math.cos(n) * e + this.xCenter, y: Math.sin(n) * e + this.yCenter } }, getPointPositionForValue: function(t, e) { return this.getPointPosition(t, this.getDistanceFromCenterForValue(e)) }, getBasePosition: function(t) { var e = this.min,
                    n = this.max; return this.getPointPositionForValue(t || 0, this.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0) }, _drawGrid: function() { var t, e, n, i = this,
                    a = i.ctx,
                    r = i.options,
                    o = r.gridLines,
                    s = r.angleLines,
                    l = Bn(s.lineWidth, o.lineWidth),
                    u = Bn(s.color, o.color); if (r.pointLabels.display && function(t) { var e = t.ctx,
                            n = t.options,
                            i = n.pointLabels,
                            a = Hn(n),
                            r = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                            o = H.options._parseFont(i);
                        e.save(), e.font = o.string, e.textBaseline = "middle"; for (var s = t.chart.data.labels.length - 1; s >= 0; s--) { var l = 0 === s ? a / 2 : 0,
                                u = t.getPointPosition(s, r + l + 5),
                                d = En(i.fontColor, s, N.global.defaultFontColor);
                            e.fillStyle = d; var h = t.getIndexAngle(s),
                                c = H.toDegrees(h);
                            e.textAlign = qn(c), Yn(c, t._pointLabelSizes[s], u), Un(e, t.pointLabels[s], u, o.lineHeight) }
                        e.restore() }(i), o.display && H.each(i.ticks, (function(t, n) { 0 !== n && (e = i.getDistanceFromCenterForValue(i.ticksAsNumbers[n]), function(t, e, n, i) { var a, r = t.ctx,
                                o = e.circular,
                                s = t.chart.data.labels.length,
                                l = En(e.color, i - 1),
                                u = En(e.lineWidth, i - 1); if ((o || s) && l && u) { if (r.save(), r.strokeStyle = l, r.lineWidth = u, r.setLineDash && (r.setLineDash(e.borderDash || []), r.lineDashOffset = e.borderDashOffset || 0), r.beginPath(), o) r.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                                else { a = t.getPointPosition(0, n), r.moveTo(a.x, a.y); for (var d = 1; d < s; d++) a = t.getPointPosition(d, n), r.lineTo(a.x, a.y) }
                                r.closePath(), r.stroke(), r.restore() } }(i, o, e, n)) })), s.display && l && u) { for (a.save(), a.lineWidth = l, a.strokeStyle = u, a.setLineDash && (a.setLineDash(Wn([s.borderDash, o.borderDash, []])), a.lineDashOffset = Wn([s.borderDashOffset, o.borderDashOffset, 0])), t = i.chart.data.labels.length - 1; t >= 0; t--) e = i.getDistanceFromCenterForValue(r.ticks.reverse ? i.min : i.max), n = i.getPointPosition(t, e), a.beginPath(), a.moveTo(i.xCenter, i.yCenter), a.lineTo(n.x, n.y), a.stroke();
                    a.restore() } }, _drawLabels: function() { var t = this,
                    e = t.ctx,
                    n = t.options.ticks; if (n.display) { var i, a, r = t.getIndexAngle(0),
                        o = H.options._parseFont(n),
                        s = Bn(n.fontColor, N.global.defaultFontColor);
                    e.save(), e.font = o.string, e.translate(t.xCenter, t.yCenter), e.rotate(r), e.textAlign = "center", e.textBaseline = "middle", H.each(t.ticks, (function(r, l) {
                        (0 !== l || n.reverse) && (i = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]), n.showLabelBackdrop && (a = e.measureText(r).width, e.fillStyle = n.backdropColor, e.fillRect(-a / 2 - n.backdropPaddingX, -i - o.size / 2 - n.backdropPaddingY, a + 2 * n.backdropPaddingX, o.size + 2 * n.backdropPaddingY)), e.fillStyle = s, e.fillText(r, 0, -i)) })), e.restore() } }, _drawTitle: H.noop }),
        Kn = Vn;
    Xn._defaults = Kn; var Zn = H._deprecated,
        $n = H.options.resolve,
        Jn = H.valueOrDefault,
        Qn = Number.MIN_SAFE_INTEGER || -9007199254740991,
        ti = Number.MAX_SAFE_INTEGER || 9007199254740991,
        ei = { millisecond: { common: !0, size: 1, steps: 1e3 }, second: { common: !0, size: 1e3, steps: 60 }, minute: { common: !0, size: 6e4, steps: 60 }, hour: { common: !0, size: 36e5, steps: 24 }, day: { common: !0, size: 864e5, steps: 30 }, week: { common: !1, size: 6048e5, steps: 4 }, month: { common: !0, size: 2628e6, steps: 12 }, quarter: { common: !1, size: 7884e6, steps: 4 }, year: { common: !0, size: 3154e7 } },
        ni = Object.keys(ei);

    function ii(t, e) { return t - e }

    function ai(t) { return H.valueOrDefault(t.time.min, t.ticks.min) }

    function ri(t) { return H.valueOrDefault(t.time.max, t.ticks.max) }

    function oi(t, e, n, i) { var a = function(t, e, n) { for (var i, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s;) { if (a = t[(i = o + s >> 1) - 1] || null, r = t[i], !a) return { lo: null, hi: r }; if (r[e] < n) o = i + 1;
                    else { if (!(a[e] > n)) return { lo: a, hi: r };
                        s = i - 1 } } return { lo: r, hi: null } }(t, e, n),
            r = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
            o = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
            s = o[e] - r[e],
            l = s ? (n - r[e]) / s : 0,
            u = (o[i] - r[i]) * l; return r[i] + u }

    function si(t, e) { var n = t._adapter,
            i = t.options.time,
            a = i.parser,
            r = a || i.format,
            o = e; return "function" == typeof a && (o = a(o)), H.isFinite(o) || (o = "string" == typeof r ? n.parse(o, r) : n.parse(o)), null !== o ? +o : (a || "function" != typeof r || (o = r(e), H.isFinite(o) || (o = n.parse(o))), o) }

    function li(t, e) { if (H.isNullOrUndef(e)) return null; var n = t.options.time,
            i = si(t, t.getRightValue(e)); return null === i ? i : (n.round && (i = +t._adapter.startOf(i, n.round)), i) }

    function ui(t, e, n, i) { var a, r, o, s = ni.length; for (a = ni.indexOf(t); a < s - 1; ++a)
            if (o = (r = ei[ni[a]]).steps ? r.steps : ti, r.common && Math.ceil((n - e) / (o * r.size)) <= i) return ni[a];
        return ni[s - 1] }

    function di(t, e, n) { var i, a, r = [],
            o = {},
            s = e.length; for (i = 0; i < s; ++i) o[a = e[i]] = i, r.push({ value: a, major: !1 }); return 0 !== s && n ? function(t, e, n, i) { var a, r, o = t._adapter,
                s = +o.startOf(e[0].value, i),
                l = e[e.length - 1].value; for (a = s; a <= l; a = +o.add(a, 1, i))(r = n[a]) >= 0 && (e[r].major = !0); return e }(t, r, o, n) : r } var hi = yn.extend({ initialize: function() { this.mergeTicksOptions(), yn.prototype.initialize.call(this) }, update: function() { var t = this,
                    e = t.options,
                    n = e.time || (e.time = {}),
                    i = t._adapter = new rn._date(e.adapters.date); return Zn("time scale", n.format, "time.format", "time.parser"), Zn("time scale", n.min, "time.min", "ticks.min"), Zn("time scale", n.max, "time.max", "ticks.max"), H.mergeIf(n.displayFormats, i.formats()), yn.prototype.update.apply(t, arguments) }, getRightValue: function(t) { return t && void 0 !== t.t && (t = t.t), yn.prototype.getRightValue.call(this, t) }, determineDataLimits: function() { var t, e, n, i, a, r, o, s = this,
                    l = s.chart,
                    u = s._adapter,
                    d = s.options,
                    h = d.time.unit || "day",
                    c = ti,
                    f = Qn,
                    g = [],
                    p = [],
                    m = [],
                    v = s._getLabels(); for (t = 0, n = v.length; t < n; ++t) m.push(li(s, v[t])); for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
                    if (l.isDatasetVisible(t))
                        if (a = l.data.datasets[t].data, H.isObject(a[0]))
                            for (p[t] = [], e = 0, i = a.length; e < i; ++e) r = li(s, a[e]), g.push(r), p[t][e] = r;
                        else p[t] = m.slice(0), o || (g = g.concat(m), o = !0);
                else p[t] = [];
                m.length && (c = Math.min(c, m[0]), f = Math.max(f, m[m.length - 1])), g.length && (g = n > 1 ? function(t) { var e, n, i, a = {},
                        r = []; for (e = 0, n = t.length; e < n; ++e) a[i = t[e]] || (a[i] = !0, r.push(i)); return r }(g).sort(ii) : g.sort(ii), c = Math.min(c, g[0]), f = Math.max(f, g[g.length - 1])), c = li(s, ai(d)) || c, f = li(s, ri(d)) || f, c = c === ti ? +u.startOf(Date.now(), h) : c, f = f === Qn ? +u.endOf(Date.now(), h) + 1 : f, s.min = Math.min(c, f), s.max = Math.max(c + 1, f), s._table = [], s._timestamps = { data: g, datasets: p, labels: m } }, buildTicks: function() { var t, e, n, i = this,
                    a = i.min,
                    r = i.max,
                    o = i.options,
                    s = o.ticks,
                    l = o.time,
                    u = i._timestamps,
                    d = [],
                    h = i.getLabelCapacity(a),
                    c = s.source,
                    f = o.distribution; for (u = "data" === c || "auto" === c && "series" === f ? u.data : "labels" === c ? u.labels : function(t, e, n, i) { var a, r = t._adapter,
                            o = t.options,
                            s = o.time,
                            l = s.unit || ui(s.minUnit, e, n, i),
                            u = $n([s.stepSize, s.unitStepSize, 1]),
                            d = "week" === l && s.isoWeekday,
                            h = e,
                            c = []; if (d && (h = +r.startOf(h, "isoWeek", d)), h = +r.startOf(h, d ? "day" : l), r.diff(n, e, l) > 1e5 * u) throw e + " and " + n + " are too far apart with stepSize of " + u + " " + l; for (a = h; a < n; a = +r.add(a, u, l)) c.push(a); return a !== n && "ticks" !== o.bounds || c.push(a), c }(i, a, r, h), "ticks" === o.bounds && u.length && (a = u[0], r = u[u.length - 1]), a = li(i, ai(o)) || a, r = li(i, ri(o)) || r, t = 0, e = u.length; t < e; ++t)(n = u[t]) >= a && n <= r && d.push(n); return i.min = a, i.max = r, i._unit = l.unit || (s.autoSkip ? ui(l.minUnit, i.min, i.max, h) : function(t, e, n, i, a) { var r, o; for (r = ni.length - 1; r >= ni.indexOf(n); r--)
                        if (o = ni[r], ei[o].common && t._adapter.diff(a, i, o) >= e - 1) return o;
                    return ni[n ? ni.indexOf(n) : 0] }(i, d.length, l.minUnit, i.min, i.max)), i._majorUnit = s.major.enabled && "year" !== i._unit ? function(t) { for (var e = ni.indexOf(t) + 1, n = ni.length; e < n; ++e)
                        if (ei[ni[e]].common) return ni[e] }(i._unit) : void 0, i._table = function(t, e, n, i) { if ("linear" === i || !t.length) return [{ time: e, pos: 0 }, { time: n, pos: 1 }]; var a, r, o, s, l, u = [],
                        d = [e]; for (a = 0, r = t.length; a < r; ++a)(s = t[a]) > e && s < n && d.push(s); for (d.push(n), a = 0, r = d.length; a < r; ++a) l = d[a + 1], o = d[a - 1], s = d[a], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({ time: s, pos: a / (r - 1) }); return u }(i._timestamps.data, a, r, f), i._offsets = function(t, e, n, i, a) { var r, o, s = 0,
                        l = 0; return a.offset && e.length && (r = oi(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - r : (oi(t, "time", e[1], "pos") - r) / 2, o = oi(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? o : (o - oi(t, "time", e[e.length - 2], "pos")) / 2), { start: s, end: l, factor: 1 / (s + 1 + l) } }(i._table, d, 0, 0, o), s.reverse && d.reverse(), di(i, d, i._majorUnit) }, getLabelForIndex: function(t, e) { var n = this,
                    i = n._adapter,
                    a = n.chart.data,
                    r = n.options.time,
                    o = a.labels && t < a.labels.length ? a.labels[t] : "",
                    s = a.datasets[e].data[t]; return H.isObject(s) && (o = n.getRightValue(s)), r.tooltipFormat ? i.format(si(n, o), r.tooltipFormat) : "string" == typeof o ? o : i.format(si(n, o), r.displayFormats.datetime) }, tickFormatFunction: function(t, e, n, i) { var a = this._adapter,
                    r = this.options,
                    o = r.time.displayFormats,
                    s = o[this._unit],
                    l = this._majorUnit,
                    u = o[l],
                    d = n[e],
                    h = r.ticks,
                    c = l && u && d && d.major,
                    f = a.format(t, i || (c ? u : s)),
                    g = c ? h.major : h.minor,
                    p = $n([g.callback, g.userCallback, h.callback, h.userCallback]); return p ? p(f, e, n) : f }, convertTicksToLabels: function(t) { var e, n, i = []; for (e = 0, n = t.length; e < n; ++e) i.push(this.tickFormatFunction(t[e].value, e, t)); return i }, getPixelForOffset: function(t) { var e = this._offsets,
                    n = oi(this._table, "time", t, "pos"); return this.getPixelForDecimal((e.start + n) * e.factor) }, getPixelForValue: function(t, e, n) { var i = null; if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = li(this, t)), null !== i) return this.getPixelForOffset(i) }, getPixelForTick: function(t) { var e = this.getTicks(); return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null }, getValueForPixel: function(t) { var e = this._offsets,
                    n = this.getDecimalForPixel(t) / e.factor - e.end,
                    i = oi(this._table, "pos", n, "time"); return this._adapter._create(i) }, _getLabelSize: function(t) { var e = this.options.ticks,
                    n = this.ctx.measureText(t).width,
                    i = H.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation),
                    a = Math.cos(i),
                    r = Math.sin(i),
                    o = Jn(e.fontSize, N.global.defaultFontSize); return { w: n * a + o * r, h: n * r + o * a } }, getLabelWidth: function(t) { return this._getLabelSize(t).w }, getLabelCapacity: function(t) { var e = this,
                    n = e.options.time,
                    i = n.displayFormats,
                    a = i[n.unit] || i.millisecond,
                    r = e.tickFormatFunction(t, 0, di(e, [t], e._majorUnit), a),
                    o = e._getLabelSize(r),
                    s = Math.floor(e.isHorizontal() ? e.width / o.w : e.height / o.h); return e.options.offset && s--, s > 0 ? s : 1 } }),
        ci = { position: "bottom", distribution: "linear", bounds: "data", adapters: {}, time: { parser: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } } };
    hi._defaults = ci; var fi = { category: kn, linear: Tn, logarithmic: zn, radialLinear: Xn, time: hi },
        gi = { datetime: "MMM D, YYYY, h:mm:ss a", millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" };
    rn._date.override("function" == typeof t ? { _id: "moment", formats: function() { return gi }, parse: function(e, n) { return "string" == typeof e && "string" == typeof n ? e = t(e, n) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null }, format: function(e, n) { return t(e).format(n) }, add: function(e, n, i) { return t(e).add(n, i).valueOf() }, diff: function(e, n, i) { return t(e).diff(t(n), i) }, startOf: function(e, n, i) { return e = t(e), "isoWeek" === n ? e.isoWeekday(i).valueOf() : e.startOf(n).valueOf() }, endOf: function(e, n) { return t(e).endOf(n).valueOf() }, _create: function(e) { return t(e) } } : {}), N._set("global", { plugins: { filler: { propagate: !0 } } }); var pi = { dataset: function(t) { var e = t.fill,
                n = t.chart,
                i = n.getDatasetMeta(e),
                a = i && n.isDatasetVisible(e) && i.dataset._children || [],
                r = a.length || 0; return r ? function(t, e) { return e < r && a[e]._view || null } : null }, boundary: function(t) { var e = t.boundary,
                n = e ? e.x : null,
                i = e ? e.y : null; return H.isArray(e) ? function(t, n) { return e[n] } : function(t) { return { x: null === n ? t.x : n, y: null === i ? t.y : i } } } };

    function mi(t, e, n) { var i, a = t._model || {},
            r = a.fill; if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1; if (!0 === r) return "origin"; if (i = parseFloat(r, 10), isFinite(i) && Math.floor(i) === i) return "-" !== r[0] && "+" !== r[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i; switch (r) {
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return r;
            default:
                return !1 } }

    function vi(t) { return (t.el._scale || {}).getPointPositionForValue ? function(t) { var e, n, i, a, r, o = t.el._scale,
                s = o.options,
                l = o.chart.data.labels.length,
                u = t.fill,
                d = []; if (!l) return null; for (e = s.ticks.reverse ? o.max : o.min, n = s.ticks.reverse ? o.min : o.max, i = o.getPointPositionForValue(0, e), a = 0; a < l; ++a) r = "start" === u || "end" === u ? o.getPointPositionForValue(a, "start" === u ? e : n) : o.getBasePosition(a), s.gridLines.circular && (r.cx = i.x, r.cy = i.y, r.angle = o.getIndexAngle(a) - Math.PI / 2), d.push(r); return d }(t) : function(t) { var e, n = t.el._model || {},
                i = t.el._scale || {},
                a = t.fill,
                r = null; if (isFinite(a)) return null; if ("start" === a ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === a ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePixel && (r = i.getBasePixel()), null != r) { if (void 0 !== r.x && void 0 !== r.y) return r; if (H.isFinite(r)) return { x: (e = i.isHorizontal()) ? r : null, y: e ? null : r } } return null }(t) }

    function bi(t, e, n) { var i, a = t[e].fill,
            r = [e]; if (!n) return a; for (; !1 !== a && -1 === r.indexOf(a);) { if (!isFinite(a)) return a; if (!(i = t[a])) return !1; if (i.visible) return a;
            r.push(a), a = i.fill } return !1 }

    function xi(t) { var e = t.fill,
            n = "dataset"; return !1 === e ? null : (isFinite(e) || (n = "boundary"), pi[n](t)) }

    function yi(t) { return t && !t.skip }

    function _i(t, e, n, i, a) { var r, o, s, l; if (i && a) { for (t.moveTo(e[0].x, e[0].y), r = 1; r < i; ++r) H.canvas.lineTo(t, e[r - 1], e[r]); if (void 0 === n[0].angle)
                for (t.lineTo(n[a - 1].x, n[a - 1].y), r = a - 1; r > 0; --r) H.canvas.lineTo(t, n[r], n[r - 1], !0);
            else
                for (o = n[0].cx, s = n[0].cy, l = Math.sqrt(Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)), r = a - 1; r > 0; --r) t.arc(o, s, l, n[r].angle, n[r - 1].angle, !0) } }

    function ki(t, e, n, i, a, r) { var o, s, l, u, d, h, c, f, g = e.length,
            p = i.spanGaps,
            m = [],
            v = [],
            b = 0,
            x = 0; for (t.beginPath(), o = 0, s = g; o < s; ++o) d = n(u = e[l = o % g]._view, l, i), h = yi(u), c = yi(d), r && void 0 === f && h && (s = g + (f = o + 1)), h && c ? (b = m.push(u), x = v.push(d)) : b && x && (p ? (h && m.push(u), c && v.push(d)) : (_i(t, m, v, b, x), b = x = 0, m = [], v = []));
        _i(t, m, v, b, x), t.closePath(), t.fillStyle = a, t.fill() } var wi = { id: "filler", afterDatasetsUpdate: function(t, e) { var n, i, a, r, o = (t.data.datasets || []).length,
                    s = e.propagate,
                    l = []; for (i = 0; i < o; ++i) r = null, (a = (n = t.getDatasetMeta(i)).dataset) && a._model && a instanceof kt.Line && (r = { visible: t.isDatasetVisible(i), fill: mi(a, i, o), chart: t, el: a }), n.$filler = r, l.push(r); for (i = 0; i < o; ++i)(r = l[i]) && (r.fill = bi(l, i, s), r.boundary = vi(r), r.mapper = xi(r)) }, beforeDatasetsDraw: function(t) { var e, n, i, a, r, o, s, l = t._getSortedVisibleDatasetMetas(),
                    u = t.ctx; for (n = l.length - 1; n >= 0; --n)(e = l[n].$filler) && e.visible && (a = (i = e.el)._view, r = i._children || [], o = e.mapper, s = a.backgroundColor || N.global.defaultColor, o && s && r.length && (H.canvas.clipArea(u, t.chartArea), ki(u, r, o, a, s, i._loop), H.canvas.unclipArea(u))) } },
        Mi = H.rtl.getRtlAdapter,
        Si = H.noop,
        Ci = H.valueOrDefault;

    function Pi(t, e) { return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth }
    N._set("global", { legend: { display: !0, position: "top", align: "center", fullWidth: !0, reverse: !1, weight: 1e3, onClick: function(t, e) { var n = e.datasetIndex,
                    i = this.chart,
                    a = i.getDatasetMeta(n);
                a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null, i.update() }, onHover: null, onLeave: null, labels: { boxWidth: 40, padding: 10, generateLabels: function(t) { var e = t.data.datasets,
                        n = t.options.legend || {},
                        i = n.labels && n.labels.usePointStyle; return t._getSortedDatasetMetas().map((function(n) { var a = n.controller.getStyle(i ? 0 : void 0); return { text: e[n.index].label, fillStyle: a.backgroundColor, hidden: !t.isDatasetVisible(n.index), lineCap: a.borderCapStyle, lineDash: a.borderDash, lineDashOffset: a.borderDashOffset, lineJoin: a.borderJoinStyle, lineWidth: a.borderWidth, strokeStyle: a.borderColor, pointStyle: a.pointStyle, rotation: a.rotation, datasetIndex: n.index } }), this) } } }, legendCallback: function(t) { var e, n, i, a = document.createElement("ul"),
                r = t.data.datasets; for (a.setAttribute("class", t.id + "-legend"), e = 0, n = r.length; e < n; e++)(i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = r[e].backgroundColor, r[e].label && i.appendChild(document.createTextNode(r[e].label)); return a.outerHTML } }); var Ai = K.extend({ initialize: function(t) { H.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1 }, beforeUpdate: Si, update: function(t, e, n) { var i = this; return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize }, afterUpdate: Si, beforeSetDimensions: Si, setDimensions: function() { var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 } }, afterSetDimensions: Si, beforeBuildLabels: Si, buildLabels: function() { var t = this,
                e = t.options.labels || {},
                n = H.callback(e.generateLabels, [t.chart], t) || [];
            e.filter && (n = n.filter((function(n) { return e.filter(n, t.chart.data) }))), t.options.reverse && n.reverse(), t.legendItems = n }, afterBuildLabels: Si, beforeFit: Si, fit: function() { var t = this,
                e = t.options,
                n = e.labels,
                i = e.display,
                a = t.ctx,
                r = H.options._parseFont(n),
                o = r.size,
                s = t.legendHitBoxes = [],
                l = t.minSize,
                u = t.isHorizontal(); if (u ? (l.width = t.maxWidth, l.height = i ? 10 : 0) : (l.width = i ? 10 : 0, l.height = t.maxHeight), i) { if (a.font = r.string, u) { var d = t.lineWidths = [0],
                        h = 0;
                    a.textAlign = "left", a.textBaseline = "middle", H.each(t.legendItems, (function(t, e) { var i = Pi(n, o) + o / 2 + a.measureText(t.text).width;
                        (0 === e || d[d.length - 1] + i + 2 * n.padding > l.width) && (h += o + n.padding, d[d.length - (e > 0 ? 0 : 1)] = 0), s[e] = { left: 0, top: 0, width: i, height: o }, d[d.length - 1] += i + n.padding })), l.height += h } else { var c = n.padding,
                        f = t.columnWidths = [],
                        g = t.columnHeights = [],
                        p = n.padding,
                        m = 0,
                        v = 0;
                    H.each(t.legendItems, (function(t, e) { var i = Pi(n, o) + o / 2 + a.measureText(t.text).width;
                        e > 0 && v + o + 2 * c > l.height && (p += m + n.padding, f.push(m), g.push(v), m = 0, v = 0), m = Math.max(m, i), v += o + c, s[e] = { left: 0, top: 0, width: i, height: o } })), p += m, f.push(m), g.push(v), l.width += p }
                t.width = l.width, t.height = l.height } else t.width = l.width = t.height = l.height = 0 }, afterFit: Si, isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position }, draw: function() { var t = this,
                e = t.options,
                n = e.labels,
                i = N.global,
                a = i.defaultColor,
                r = i.elements.line,
                o = t.height,
                s = t.columnHeights,
                l = t.width,
                u = t.lineWidths; if (e.display) { var d, h = Mi(e.rtl, t.left, t.minSize.width),
                    c = t.ctx,
                    f = Ci(n.fontColor, i.defaultFontColor),
                    g = H.options._parseFont(n),
                    p = g.size;
                c.textAlign = h.textAlign("left"), c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = g.string; var m = Pi(n, p),
                    v = t.legendHitBoxes,
                    b = function(t, i) { switch (e.align) {
                            case "start":
                                return n.padding;
                            case "end":
                                return t - i;
                            default:
                                return (t - i + n.padding) / 2 } },
                    x = t.isHorizontal();
                d = x ? { x: t.left + b(l, u[0]), y: t.top + n.padding, line: 0 } : { x: t.left + n.padding, y: t.top + b(o, s[0]), line: 0 }, H.rtl.overrideTextDirection(t.ctx, e.textDirection); var y = p + n.padding;
                H.each(t.legendItems, (function(e, i) { var f = c.measureText(e.text).width,
                        g = m + p / 2 + f,
                        _ = d.x,
                        k = d.y;
                    h.setWidth(t.minSize.width), x ? i > 0 && _ + g + n.padding > t.left + t.minSize.width && (k = d.y += y, d.line++, _ = d.x = t.left + b(l, u[d.line])) : i > 0 && k + y > t.top + t.minSize.height && (_ = d.x = _ + t.columnWidths[d.line] + n.padding, d.line++, k = d.y = t.top + b(o, s[d.line])); var w = h.x(_);! function(t, e, i) { if (!(isNaN(m) || m <= 0)) { c.save(); var o = Ci(i.lineWidth, r.borderWidth); if (c.fillStyle = Ci(i.fillStyle, a), c.lineCap = Ci(i.lineCap, r.borderCapStyle), c.lineDashOffset = Ci(i.lineDashOffset, r.borderDashOffset), c.lineJoin = Ci(i.lineJoin, r.borderJoinStyle), c.lineWidth = o, c.strokeStyle = Ci(i.strokeStyle, a), c.setLineDash && c.setLineDash(Ci(i.lineDash, r.borderDash)), n && n.usePointStyle) { var s = m * Math.SQRT2 / 2,
                                    l = h.xPlus(t, m / 2),
                                    u = e + p / 2;
                                H.canvas.drawPoint(c, i.pointStyle, s, l, u, i.rotation) } else c.fillRect(h.leftForLtr(t, m), e, m, p), 0 !== o && c.strokeRect(h.leftForLtr(t, m), e, m, p);
                            c.restore() } }(w, k, e), v[i].left = h.leftForLtr(w, v[i].width), v[i].top = k,
                        function(t, e, n, i) { var a = p / 2,
                                r = h.xPlus(t, m + a),
                                o = e + a;
                            c.fillText(n.text, r, o), n.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(r, o), c.lineTo(h.xPlus(r, i), o), c.stroke()) }(w, k, e, f), x ? d.x += g + n.padding : d.y += y })), H.rtl.restoreTextDirection(t.ctx, e.textDirection) } }, _getLegendItemAt: function(t, e) { var n, i, a, r = this; if (t >= r.left && t <= r.right && e >= r.top && e <= r.bottom)
                for (a = r.legendHitBoxes, n = 0; n < a.length; ++n)
                    if (t >= (i = a[n]).left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height) return r.legendItems[n];
            return null }, handleEvent: function(t) { var e, n = this,
                i = n.options,
                a = "mouseup" === t.type ? "click" : t.type; if ("mousemove" === a) { if (!i.onHover && !i.onLeave) return } else { if ("click" !== a) return; if (!i.onClick) return }
            e = n._getLegendItemAt(t.x, t.y), "click" === a ? e && i.onClick && i.onClick.call(n, t.native, e) : (i.onLeave && e !== n._hoveredItem && (n._hoveredItem && i.onLeave.call(n, t.native, n._hoveredItem), n._hoveredItem = e), i.onHover && e && i.onHover.call(n, t.native, e)) } });

    function Di(t, e) { var n = new Ai({ ctx: t.ctx, options: e, chart: t });
        pe.configure(t, n, e), pe.addBox(t, n), t.legend = n } var Ti = { id: "legend", _element: Ai, beforeInit: function(t) { var e = t.options.legend;
                e && Di(t, e) }, beforeUpdate: function(t) { var e = t.options.legend,
                    n = t.legend;
                e ? (H.mergeIf(e, N.global.legend), n ? (pe.configure(t, n, e), n.options = e) : Di(t, e)) : n && (pe.removeBox(t, n), delete t.legend) }, afterEvent: function(t, e) { var n = t.legend;
                n && n.handleEvent(e) } },
        Ii = H.noop;
    N._set("global", { title: { display: !1, fontStyle: "bold", fullWidth: !0, padding: 10, position: "top", text: "", weight: 2e3 } }); var Fi = K.extend({ initialize: function(t) { H.extend(this, t), this.legendHitBoxes = [] }, beforeUpdate: Ii, update: function(t, e, n) { var i = this; return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize }, afterUpdate: Ii, beforeSetDimensions: Ii, setDimensions: function() { var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 } }, afterSetDimensions: Ii, beforeBuildLabels: Ii, buildLabels: Ii, afterBuildLabels: Ii, beforeFit: Ii, fit: function() { var t, e = this,
                n = e.options,
                i = e.minSize = {},
                a = e.isHorizontal();
            n.display ? (t = (H.isArray(n.text) ? n.text.length : 1) * H.options._parseFont(n).lineHeight + 2 * n.padding, e.width = i.width = a ? e.maxWidth : t, e.height = i.height = a ? t : e.maxHeight) : e.width = i.width = e.height = i.height = 0 }, afterFit: Ii, isHorizontal: function() { var t = this.options.position; return "top" === t || "bottom" === t }, draw: function() { var t = this,
                e = t.ctx,
                n = t.options; if (n.display) { var i, a, r, o = H.options._parseFont(n),
                    s = o.lineHeight,
                    l = s / 2 + n.padding,
                    u = 0,
                    d = t.top,
                    h = t.left,
                    c = t.bottom,
                    f = t.right;
                e.fillStyle = H.valueOrDefault(n.fontColor, N.global.defaultFontColor), e.font = o.string, t.isHorizontal() ? (a = h + (f - h) / 2, r = d + l, i = f - h) : (a = "left" === n.position ? h + l : f - l, r = d + (c - d) / 2, i = c - d, u = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(a, r), e.rotate(u), e.textAlign = "center", e.textBaseline = "middle"; var g = n.text; if (H.isArray(g))
                    for (var p = 0, m = 0; m < g.length; ++m) e.fillText(g[m], 0, p, i), p += s;
                else e.fillText(g, 0, 0, i);
                e.restore() } } });

    function Oi(t, e) { var n = new Fi({ ctx: t.ctx, options: e, chart: t });
        pe.configure(t, n, e), pe.addBox(t, n), t.titleBlock = n } var Li = {},
        Ri = wi,
        zi = Ti,
        Ni = { id: "title", _element: Fi, beforeInit: function(t) { var e = t.options.title;
                e && Oi(t, e) }, beforeUpdate: function(t) { var e = t.options.title,
                    n = t.titleBlock;
                e ? (H.mergeIf(e, N.global.title), n ? (pe.configure(t, n, e), n.options = e) : Oi(t, e)) : n && (pe.removeBox(t, n), delete t.titleBlock) } }; for (var Bi in Li.filler = Ri, Li.legend = zi, Li.title = Ni, en.helpers = H,
            function() {
                function t(t, e, n) { var i; return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i }

                function e(t) { return null != t && "none" !== t }

                function n(n, i, a) { var r = document.defaultView,
                        o = H._getParentNode(n),
                        s = r.getComputedStyle(n)[i],
                        l = r.getComputedStyle(o)[i],
                        u = e(s),
                        d = e(l),
                        h = Number.POSITIVE_INFINITY; return u || d ? Math.min(u ? t(s, n, a) : h, d ? t(l, o, a) : h) : "none" }
                H.where = function(t, e) { if (H.isArray(t) && Array.prototype.filter) return t.filter(e); var n = []; return H.each(t, (function(t) { e(t) && n.push(t) })), n }, H.findIndex = Array.prototype.findIndex ? function(t, e, n) { return t.findIndex(e, n) } : function(t, e, n) { n = void 0 === n ? t : n; for (var i = 0, a = t.length; i < a; ++i)
                        if (e.call(n, t[i], i, t)) return i;
                    return -1 }, H.findNextWhere = function(t, e, n) { H.isNullOrUndef(n) && (n = -1); for (var i = n + 1; i < t.length; i++) { var a = t[i]; if (e(a)) return a } }, H.findPreviousWhere = function(t, e, n) { H.isNullOrUndef(n) && (n = t.length); for (var i = n - 1; i >= 0; i--) { var a = t[i]; if (e(a)) return a } }, H.isNumber = function(t) { return !isNaN(parseFloat(t)) && isFinite(t) }, H.almostEquals = function(t, e, n) { return Math.abs(t - e) < n }, H.almostWhole = function(t, e) { var n = Math.round(t); return n - e <= t && n + e >= t }, H.max = function(t) { return t.reduce((function(t, e) { return isNaN(e) ? t : Math.max(t, e) }), Number.NEGATIVE_INFINITY) }, H.min = function(t) { return t.reduce((function(t, e) { return isNaN(e) ? t : Math.min(t, e) }), Number.POSITIVE_INFINITY) }, H.sign = Math.sign ? function(t) { return Math.sign(t) } : function(t) { return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1 }, H.toRadians = function(t) { return t * (Math.PI / 180) }, H.toDegrees = function(t) { return t * (180 / Math.PI) }, H._decimalPlaces = function(t) { if (H.isFinite(t)) { for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++; return n } }, H.getAngleFromPoint = function(t, e) { var n = e.x - t.x,
                        i = e.y - t.y,
                        a = Math.sqrt(n * n + i * i),
                        r = Math.atan2(i, n); return r < -.5 * Math.PI && (r += 2 * Math.PI), { angle: r, distance: a } }, H.distanceBetweenPoints = function(t, e) { return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) }, H.aliasPixel = function(t) { return t % 2 == 0 ? 0 : .5 }, H._alignPixel = function(t, e, n) { var i = t.currentDevicePixelRatio,
                        a = n / 2; return Math.round((e - a) * i) / i + a }, H.splineCurve = function(t, e, n, i) { var a = t.skip ? e : t,
                        r = e,
                        o = n.skip ? e : n,
                        s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
                        l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                        u = s / (s + l),
                        d = l / (s + l),
                        h = i * (u = isNaN(u) ? 0 : u),
                        c = i * (d = isNaN(d) ? 0 : d); return { previous: { x: r.x - h * (o.x - a.x), y: r.y - h * (o.y - a.y) }, next: { x: r.x + c * (o.x - a.x), y: r.y + c * (o.y - a.y) } } }, H.EPSILON = Number.EPSILON || 1e-14, H.splineCurveMonotone = function(t) { var e, n, i, a, r, o, s, l, u, d = (t || []).map((function(t) { return { model: t._model, deltaK: 0, mK: 0 } })),
                        h = d.length; for (e = 0; e < h; ++e)
                        if (!(i = d[e]).model.skip) { if (n = e > 0 ? d[e - 1] : null, (a = e < h - 1 ? d[e + 1] : null) && !a.model.skip) { var c = a.model.x - i.model.x;
                                i.deltaK = 0 !== c ? (a.model.y - i.model.y) / c : 0 }!n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2 }
                    for (e = 0; e < h - 1; ++e) i = d[e], a = d[e + 1], i.model.skip || a.model.skip || (H.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (r = i.mK / i.deltaK, o = a.mK / i.deltaK, (l = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = r * s * i.deltaK, a.mK = o * s * i.deltaK))); for (e = 0; e < h; ++e)(i = d[e]).model.skip || (n = e > 0 ? d[e - 1] : null, a = e < h - 1 ? d[e + 1] : null, n && !n.model.skip && (u = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - u, i.model.controlPointPreviousY = i.model.y - u * i.mK), a && !a.model.skip && (u = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + u, i.model.controlPointNextY = i.model.y + u * i.mK)) }, H.nextItem = function(t, e, n) { return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1] }, H.previousItem = function(t, e, n) { return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1] }, H.niceNum = function(t, e) { var n = Math.floor(H.log10(t)),
                        i = t / Math.pow(10, n); return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n) }, H.requestAnimFrame = "undefined" == typeof window ? function(t) { t() } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) { return window.setTimeout(t, 1e3 / 60) }, H.getRelativePosition = function(t, e) { var n, i, a = t.originalEvent || t,
                        r = t.target || t.srcElement,
                        o = r.getBoundingClientRect(),
                        s = a.touches;
                    s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = a.clientX, i = a.clientY); var l = parseFloat(H.getStyle(r, "padding-left")),
                        u = parseFloat(H.getStyle(r, "padding-top")),
                        d = parseFloat(H.getStyle(r, "padding-right")),
                        h = parseFloat(H.getStyle(r, "padding-bottom")),
                        c = o.right - o.left - l - d,
                        f = o.bottom - o.top - u - h; return { x: n = Math.round((n - o.left - l) / c * r.width / e.currentDevicePixelRatio), y: i = Math.round((i - o.top - u) / f * r.height / e.currentDevicePixelRatio) } }, H.getConstraintWidth = function(t) { return n(t, "max-width", "clientWidth") }, H.getConstraintHeight = function(t) { return n(t, "max-height", "clientHeight") }, H._calculatePadding = function(t, e, n) { return (e = H.getStyle(t, e)).indexOf("%") > -1 ? n * parseInt(e, 10) / 100 : parseInt(e, 10) }, H._getParentNode = function(t) { var e = t.parentNode; return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e }, H.getMaximumWidth = function(t) { var e = H._getParentNode(t); if (!e) return t.clientWidth; var n = e.clientWidth,
                        i = n - H._calculatePadding(e, "padding-left", n) - H._calculatePadding(e, "padding-right", n),
                        a = H.getConstraintWidth(t); return isNaN(a) ? i : Math.min(i, a) }, H.getMaximumHeight = function(t) { var e = H._getParentNode(t); if (!e) return t.clientHeight; var n = e.clientHeight,
                        i = n - H._calculatePadding(e, "padding-top", n) - H._calculatePadding(e, "padding-bottom", n),
                        a = H.getConstraintHeight(t); return isNaN(a) ? i : Math.min(i, a) }, H.getStyle = function(t, e) { return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e) }, H.retinaScale = function(t, e) { var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1; if (1 !== n) { var i = t.canvas,
                            a = t.height,
                            r = t.width;
                        i.height = a * n, i.width = r * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = a + "px", i.style.width = r + "px") } }, H.fontString = function(t, e, n) { return e + " " + t + "px " + n }, H.longestText = function(t, e, n, i) { var a = (i = i || {}).data = i.data || {},
                        r = i.garbageCollect = i.garbageCollect || [];
                    i.font !== e && (a = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e; var o, s, l, u, d, h = 0,
                        c = n.length; for (o = 0; o < c; o++)
                        if (null != (u = n[o]) && !0 !== H.isArray(u)) h = H.measureText(t, a, r, h, u);
                        else if (H.isArray(u))
                        for (s = 0, l = u.length; s < l; s++) null == (d = u[s]) || H.isArray(d) || (h = H.measureText(t, a, r, h, d)); var f = r.length / 2; if (f > n.length) { for (o = 0; o < f; o++) delete a[r[o]];
                        r.splice(0, f) } return h }, H.measureText = function(t, e, n, i, a) { var r = e[a]; return r || (r = e[a] = t.measureText(a).width, n.push(a)), r > i && (i = r), i }, H.numberOfLabelLines = function(t) { var e = 1; return H.each(t, (function(t) { H.isArray(t) && t.length > e && (e = t.length) })), e }, H.color = _ ? function(t) { return t instanceof CanvasGradient && (t = N.global.defaultColor), _(t) } : function(t) { return console.error("Color.js not found!"), t }, H.getHoverColor = function(t) { return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : H.color(t).saturate(.5).darken(.1).rgbString() } }(), en._adapters = rn, en.Animation = $, en.animationService = J, en.controllers = Jt, en.DatasetController = it, en.defaults = N, en.Element = K, en.elements = kt, en.Interaction = re, en.layouts = pe, en.platform = Oe, en.plugins = Le, en.Scale = yn, en.scaleService = Re, en.Ticks = on, en.Tooltip = Ye, en.helpers.each(fi, (function(t, e) { en.scaleService.registerScaleType(e, t, t._defaults) })), Li) Li.hasOwnProperty(Bi) && en.plugins.register(Li[Bi]);
    en.platform.initialize(); var Ei = en; return "undefined" != typeof window && (window.Chart = en), en.Chart = en, en.Legend = Li.legend._element, en.Title = Li.title._element, en.pluginService = en.plugins, en.PluginBase = en.Element.extend({}), en.canvasHelpers = en.helpers.canvas, en.layoutService = en.layouts, en.LinearScaleBase = Cn, en.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function(t) { en[t] = function(e, n) { return new en(e, en.helpers.merge(n || {}, { type: t.charAt(0).toLowerCase() + t.slice(1) })) } })), Ei }));



// Auto active link of sidebar
window.onload = (event) => {
    var pageName = getFileName();
    $.each($('.nav-item'), function() {
        var parent = $(this);

        if (parent.find('.nav-link').attr('href') == pageName) {
            parent.addClass('active');
            return;
        }

        $.each(parent.find('.collapse-item'), function() {
            if ($(this).attr('href') == pageName) {
                parent.addClass('active');
                return;
            }
        });
    });
};

function getFileName() {
    var url = window.location.pathname;
    var lastUri = url.substring(url.lastIndexOf('/') + 1);
    if (lastUri.indexOf('?') != -1)
        return lastUri.substring(0, lastUri.indexOf('?'));
    else
        return lastUri;
}