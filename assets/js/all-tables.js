/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
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

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e }
    var f = "3.5.1",
        S = function(e, t) { return new S.fn.init(e, t) };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() { return s.call(this) },
        get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = S.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return S.each(this, e) },
        map: function(n) { return this.pushStack(S.map(this, function(e, t) { return n.call(e, t, e) })) },
        slice: function() { return this.pushStack(s.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        even: function() { return this.pushStack(S.grep(this, function(e, t) { return (t + 1) % 2 })) },
        odd: function() { return this.pushStack(S.grep(this, function(e, t) { return t % 2 })) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        globalEval: function(e, t, n) { b(e, { nonce: t && t.nonce }, n) },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        makeArray: function(e, t) { var n = t || []; return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
        grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
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
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
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
            ae = be(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
        try { H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType } catch (e) {
            H = {
                apply: t.length ? function(e, t) { L.apply(e, O.call(t)) } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { N(t, !0) } finally { s === S && e.removeAttribute("id") }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function le(e) { return e[S] = !0, e }

        function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function he(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function ge(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) { return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), d.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function(e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) { return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), d.getById ? (b.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function(e) { var n = e.replace(te, ne); return function(e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { N(t, !0) }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) { return (e.ownerDocument || e) != C && T(e), y(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = m[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(n, r, i) { return function(e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) { return !!e.parentNode } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) { i[h] = [k, s, d]; break }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) { return a(e, 0, t) }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() }
                    }),
                    has: le(function(t) { return function(e) { return 0 < se(t, e).length } }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) { return -1 < (e.textContent || o(e)).indexOf(t) }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id },
                    root: function(e) { return e === a },
                    focus: function(e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !b.pseudos.empty(e) },
                    header: function(e) { return J.test(e.nodeName) },
                    input: function(e) { return Q.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: ve(function() { return [0] }),
                    last: ve(function(e, t) { return [t - 1] }),
                    eq: ve(function(e, t, n) { return [n < 0 ? n + t : n] }),
                    even: ve(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                    odd: ve(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                    lt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }),
                    gt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
                }
            }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else { if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) { return e === i }, a, !0), l = be(function(e) { return -1 < P(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) { r.push(o); break }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(R, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        k = S.expr.match.needsContext;

    function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) { return m(n) ? S.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? S.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? S.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : S.filter(n, e, r) }
    S.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) { return 1 === e.nodeType })) }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(D(this, e || [], !1)) },
        not: function(e) { return this.pushStack(D(this, e || [], !0)) },
        is: function(e) { return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };

    function O(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), S.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return h(e, "parentNode") }, parentsUntil: function(e, t, n) { return h(e, "parentNode", n) }, next: function(e) { return O(e, "nextSibling") }, prev: function(e) { return O(e, "previousSibling") }, nextAll: function(e) { return h(e, "nextSibling") }, prevAll: function(e) { return h(e, "previousSibling") }, nextUntil: function(e, t, n) { return h(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return h(e, "previousSibling", n) }, siblings: function(e) { return T((e.parentNode || {}).firstChild, e) }, children: function(e) { return T(e.firstChild) }, contents: function(e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes)) } }, function(r, i) { S.fn[r] = function(e, t) { var n = S.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) { return e }

    function M(e) { throw e }

    function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) { n[t] = !0 }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { S.each(e, function(e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return S.each(arguments, function(e, t) { var n; while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < S.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } };
        return f
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() { return i },
                    always: function() { return s.done(arguments).fail(arguments), this },
                    "catch": function(e) { return a.then(null, e) },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() { try { e() } catch (e) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) { o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M)) }).promise()
                    },
                    promise: function(e) { return null != e ? S.extend(e, a) : a }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) { C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, S.readyException = function(e) { C.setTimeout(function() { throw e }) };
    var F = S.Deferred();

    function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready() }
    S.fn.ready = function(e) { return F.then(e)["catch"](function(e) { S.readyException(e) }), this }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(S(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) { return t.toUpperCase() }

    function X(e) { return e.replace(_, "ms-").replace(z, U) }
    var V = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function G() { this.expando = S.expando + G.uid++ }
    G.uid = 1, G.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length; while (n--) delete r[t[n]] }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !S.isEmptyObject(t) }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({ hasData: function(e) { return Q.hasData(e) || Y.hasData(e) }, data: function(e, t, n) { return Q.access(e, t, n) }, removeData: function(e, t) { Q.remove(e, t) }, _data: function(e, t, n) { return Y.access(e, t, n) }, _removeData: function(e, t) { Y.remove(e, t) } }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() { Q.set(this, n) }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() { Q.set(this, n, e) })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) { return this.each(function() { Q.remove(this, e) }) }
    }), S.extend({
        queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { S.dequeue(e, t) }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: S.Callbacks("once memory").add(function() { Y.remove(e, [t + "queue", n]) }) }) }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) { return this.each(function() { S.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) { return S.contains(e.ownerDocument, e) },
        oe = { composed: !0 };
    re.getRootNode && (ie = function(e) { return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument });
    var ae = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display") };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return S.css(e, t, "") },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }
    S.fn.extend({ show: function() { return le(this, !0) }, hide: function() { return le(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ae(this) ? S(this).show() : S(this).hide() }) } });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n }

    function ye(e, t) { for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) }
        return f
    }
    var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() { return !0 }

    function Ee() { return !1 }

    function Se(e, t) { return e === function() { try { return E.activeElement } catch (e) {} }() == ("focus" === t) }

    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) { return S().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = S.guid++)), e.each(function() { S.event.add(this, t, i, r, n) })
    }

    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t); if (V(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) { return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0) } },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = S.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o })
                    }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        },
        addProp: function(t, e) { Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
        fix: function(e) { return e[S.expando] ? e : new S.Event(e) },
        special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1 }, trigger: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0 }, _default: function(e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, S.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e, t) { S.event.special[e] = { setup: function() { return Ae(this, e, Se), !1 }, trigger: function() { return Ae(this, e), !0 }, delegateType: t } }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({ on: function(e, t, n, r) { return ke(this, e, t, n, r) }, one: function(e, t, n, r) { return ke(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() { S.event.remove(this, e, n, t) }) } });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e }

    function Le(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function He(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }

    function Re(e, t, n) { for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e }
    S.extend({
        htmlPrefilter: function(e) { return e },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) { return Re(this, e, !0) },
        remove: function(e) { return Re(this, e) },
        text: function(e) { return $(this, function(e) { return void 0 === e ? S.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return Pe(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e) }) },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return Pe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return Pe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return S.clone(this, e, t) }) },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { S.fn[e] = function(e) { for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) },
        We = function(e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r },
        Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function $e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) { return Math.round(parseFloat(e)) }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), s }, scrollboxSize: function() { return e(), i }, reliableTrDimensions: function() { var e, t, n, r; return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a } }))
    }();
    var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};

    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
            while (n--)
                if ((e = _e[n] + t) in ze) return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Qe = { letterSpacing: "0", fontWeight: "400" };

    function Je(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) { return new et.prototype.init(e, t, n, r, i) }
    S.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Be(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Ge.test(t),
                    l = e.style;
                if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = X(t); return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) { if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() { return Ze(e, u, n) }) },
            set: function(e, t, n) {
                var r, i = Ie(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function(i, o) { S.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (S.cssHooks[i + o].set = Je) }), S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) { for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r); return o }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = et).prototype = { constructor: et, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px") }, cur: function() { var e = et.propHooks[this.prop]; return e && e.get ? e.get(this) : et.propHooks._default.get(this) }, run: function(e) { var t, n = et.propHooks[this.prop]; return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this } }).init.prototype = et.prototype, (et.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = et.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, S.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() { nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick()) }

    function ut() { return C.setTimeout(function() { tt = void 0 }), tt = Date.now() }

    function lt(e, t) {
        var n, r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() { delete u.elem }),
            u = function() { if (a) return !1; for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) { var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l
    }
    S.Animation = S.extend(ft, {
        tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] },
        tweener: function(e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(P); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t) },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, S.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && le([e], !0), p.done(function() { for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]) })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) { t ? ft.prefilters.unshift(e) : ft.prefilters.push(e) }
    }), S.speed = function(e, t, n) { var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue) }, r }, S.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n) }
    }), S.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { S.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0
    }, S.fx.timer = function(e) { S.timers.push(e), S.fx.start() }, S.fx.interval = 13, S.fx.start = function() { nt || (nt = !0, st()) }, S.fx.stop = function() { nt = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() { C.clearTimeout(n) }
        })
    }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({ attr: function(e, t) { return $(this, S.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { S.removeAttr(this, e) }) } }), S.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r) },
        attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = { set: function(e, t, n) { return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) { return (e.match(P) || []).join(" ") }

    function yt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function mt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] }
    S.fn.extend({ prop: function(e, t) { return $(this, S.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[S.propFix[e] || e] }) } }), S.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = S.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { S.propFix[this.toLowerCase()] = this }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) { S(this).addClass(t.call(this, e, yt(this))) });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) { S(this).removeClass(t.call(this, e, yt(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) { S(this).toggleClass(i.call(this, e, yt(this), t), t) }) : this.each(function() { var e, t, n, r; if (a) { t = 0, n = S(this), r = mt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || "")) })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) { return null == e ? "" : e + "" })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: { get: function(e) { var t = S.find.attr(e, "value"); return null != t ? t : vt(S.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() { S.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t) } }, y.checkOn || (S.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) { e.stopPropagation() };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({ trigger: function(e, t) { return this.each(function() { S.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return S.event.trigger(e, t, n, !0) } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n, r) {
        var i = function(e) { S.event.simulate(r, e.target, S.event.fix(e)) };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location,
        Ct = { guid: Date.now() },
        Et = /\?/;
    S.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) { r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({ serialize: function() { return S.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = S.prop(this, "elements"); return e ? S.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var n = S(this).val(); return null == n ? null : Array.isArray(n) ? S.map(n, function(e) { return { name: t.name, value: e.replace(kt, "\r\n") } }) : { name: t.name, value: n.replace(kt, "\r\n") } }).get() } });
    var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Bt(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) { var r; return s[e] = !0, S.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function $t(e, t) { var n, r, i = S.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && S.extend(!0, e, r), e }
    Wt.href = Tt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e) },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) { n = {}; while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() { return h ? p : null },
                    setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this },
                    overrideMimeType: function(e) { return null == h && (v.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this }
                };
            if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() { T.abort("timeout") }, v.timeout));
                try { h = !1, c.send(a, l) } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
                    }
                    return { state: "success", data: t }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) { return S.get(e, t, n, "json") },
        getScript: function(e, t) { return S.get(e, void 0, t, "script") }
    }), S.each(["get", "post"], function(e, i) { S[i] = function(e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e)) } }), S.ajaxPrefilter(function(e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), S._evalUrl = function(e, t, n) { return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { S.globalEval(e, t, n) } }) }, S.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) { S(this).wrapInner(n.call(this, e)) }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) { var n = m(t); return this.each(function(e) { S(this).wrapAll(n ? t.call(this, e) : t) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { S(this).replaceWith(this.childNodes) }), this }
    }), S.expr.pseudos.hidden = function(e) { return !S.expr.pseudos.visible(e) }, S.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, S.ajaxSettings.xhr = function() { try { return new C.XMLHttpRequest } catch (e) {} };
    var _t = { 0: 200, 1223: 204 },
        zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() { 4 === r.readyState && C.setTimeout(function() { o && a() }) }, o = o("abort");
                try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e }
            },
            abort: function() { o && o() }
        }
    }), S.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return S.globalEval(e), e } } }), S.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), S.ajaxTransport("script", function(n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function(e, t) { r = S("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function() { i && i() } } });
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Xt.pop() || S.expando + "_" + Ct.guid++; return this[e] = !0, e } }), S.ajaxPrefilter("json jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || S.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function() { o = arguments }, n.always(function() { void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes))); var r, i, o }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, S.expr.pseudos.animated = function(t) { return S.grep(S.timers, function(e) { return t === e.elem }).length }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
    }, S.fn.extend({
        offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { S.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = { top: 0, left: 0 };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === S.css(e, "position")) e = e.offsetParent; return e || re }) }
    }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) { S.cssHooks[n] = $e(y.pixelPosition, function(e, t) { if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t }) }), S.each({ Height: "height", Width: "width" }, function(a, s) {
        S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i) }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { S.fn[t] = function(e) { return this.on(t, e) } }), S.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { S.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || S.guid++, i }, S.holdReady = function(e) { e ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) { var t = S.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, S.trim = function(e) { return null == e ? "" : (e + "").replace(Gt, "") }, "function" == typeof define && define.amd && define("jquery", [], function() { return S });
    var Yt = C.jQuery,
        Qt = C.$;
    return S.noConflict = function(e) { return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});

/*!
 * Bootstrap v4.5.3 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery) }(this, (function(t, e) {
    "use strict";

    function n(t) { return t && "object" == typeof t && "default" in t ? t : { default: t } }
    var i = n(e);

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function r(t, e, n) { return e && o(t.prototype, e), n && o(t, n), t }

    function a() { return (a = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t }).apply(this, arguments) }

    function s(t) {
        var e = this,
            n = !1;
        return i.default(this).one(l.TRANSITION_END, (function() { n = !0 })), setTimeout((function() { n || l.triggerTransitionEnd(e) }), t), this
    }
    var l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) { do { t += ~~(1e6 * Math.random()) } while (document.getElementById(t)); return t },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try { return document.querySelector(e) ? e : null } catch (t) { return null }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var e = i.default(t).css("transition-duration"),
                n = i.default(t).css("transition-delay"),
                o = parseFloat(e),
                r = parseFloat(n);
            return o || r ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) { return t.offsetHeight },
        triggerTransitionEnd: function(t) { i.default(t).trigger("transitionend") },
        supportsTransitionEnd: function() { return Boolean("transitionend") },
        isElement: function(t) { return (t[0] || t).nodeType },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        a = r && l.isElement(r) ? "element" : null === (s = r) || "undefined" == typeof s ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
                }
            var s
        },
        findShadowRoot: function(t) { if (!document.documentElement.attachShadow) return null; if ("function" == typeof t.getRootNode) { var e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } return t instanceof ShadowRoot ? t : t.parentNode ? l.findShadowRoot(t.parentNode) : null },
        jQueryDetection: function() { if ("undefined" == typeof i.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var t = i.default.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }
    };
    l.jQueryDetection(), i.default.fn.emulateTransitionEnd = s, i.default.event.special[l.TRANSITION_END] = { bindType: "transitionend", delegateType: "transitionend", handle: function(t) { if (i.default(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } };
    var u = "alert",
        f = i.default.fn[u],
        d = function() {
            function t(t) { this._element = t }
            var e = t.prototype;
            return e.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, e.dispose = function() { i.default.removeData(this._element, "bs.alert"), this._element = null }, e._getRootElement = function(t) {
                var e = l.getSelectorFromElement(t),
                    n = !1;
                return e && (n = document.querySelector(e)), n || (n = i.default(t).closest(".alert")[0]), n
            }, e._triggerCloseEvent = function(t) { var e = i.default.Event("close.bs.alert"); return i.default(t).trigger(e), e }, e._removeElement = function(t) {
                var e = this;
                if (i.default(t).removeClass("show"), i.default(t).hasClass("fade")) {
                    var n = l.getTransitionDurationFromElement(t);
                    i.default(t).one(l.TRANSITION_END, (function(n) { return e._destroyElement(t, n) })).emulateTransitionEnd(n)
                } else this._destroyElement(t)
            }, e._destroyElement = function(t) { i.default(t).detach().trigger("closed.bs.alert").remove() }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = i.default(this),
                        o = n.data("bs.alert");
                    o || (o = new t(this), n.data("bs.alert", o)), "close" === e && o[e](this)
                }))
            }, t._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }]), t
        }();
    i.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', d._handleDismiss(new d)), i.default.fn[u] = d._jQueryInterface, i.default.fn[u].Constructor = d, i.default.fn[u].noConflict = function() { return i.default.fn[u] = f, d._jQueryInterface };
    var c = i.default.fn.button,
        h = function() {
            function t(t) { this._element = t, this.shouldAvoidTriggerChange = !1 }
            var e = t.prototype;
            return e.toggle = function() {
                var t = !0,
                    e = !0,
                    n = i.default(this._element).closest('[data-toggle="buttons"]')[0];
                if (n) {
                    var o = this._element.querySelector('input:not([type="hidden"])');
                    if (o) {
                        if ("radio" === o.type)
                            if (o.checked && this._element.classList.contains("active")) t = !1;
                            else {
                                var r = n.querySelector(".active");
                                r && i.default(r).removeClass("active")
                            }
                        t && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || i.default(o).trigger("change")), o.focus(), e = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && i.default(this._element).toggleClass("active"))
            }, e.dispose = function() { i.default.removeData(this._element, "bs.button"), this._element = null }, t._jQueryInterface = function(e, n) {
                return this.each((function() {
                    var o = i.default(this),
                        r = o.data("bs.button");
                    r || (r = new t(this), o.data("bs.button", r)), r.shouldAvoidTriggerChange = n, "toggle" === e && r[e]()
                }))
            }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }]), t
        }();
    i.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(t) {
        var e = t.target,
            n = e;
        if (i.default(e).hasClass("btn") || (e = i.default(e).closest(".btn")[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();
        else { var o = e.querySelector('input:not([type="hidden"])'); if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void t.preventDefault(); "INPUT" !== n.tagName && "LABEL" === e.tagName || h._jQueryInterface.call(i.default(e), "toggle", "INPUT" === n.tagName) }
    })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(t) {
        var e = i.default(t.target).closest(".btn")[0];
        i.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
    })), i.default(window).on("load.bs.button.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
            var i = t[e],
                o = i.querySelector('input:not([type="hidden"])');
            o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
        }
        for (var r = 0, a = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < a; r++) { var s = t[r]; "true" === s.getAttribute("aria-pressed") ? s.classList.add("active") : s.classList.remove("active") }
    })), i.default.fn.button = h._jQueryInterface, i.default.fn.button.Constructor = h, i.default.fn.button.noConflict = function() { return i.default.fn.button = c, h._jQueryInterface };
    var p = "carousel",
        m = ".bs.carousel",
        g = i.default.fn[p],
        v = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        _ = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        b = { TOUCH: "touch", PEN: "pen" },
        y = function() {
            function t(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() }
            var e = t.prototype;
            return e.next = function() { this._isSliding || this._slide("next") }, e.nextWhenVisible = function() { var t = i.default(this._element);!document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next() }, e.prev = function() { this._isSliding || this._slide("prev") }, e.pause = function(t) { t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (l.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, e.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, e.to = function(t) {
                var e = this;
                this._activeElement = this._element.querySelector(".active.carousel-item");
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) i.default(this._element).one("slid.bs.carousel", (function() { return e.to(t) }));
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var o = t > n ? "next" : "prev";
                        this._slide(o, this._items[t])
                    }
            }, e.dispose = function() { i.default(this._element).off(m), i.default.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, e._getConfig = function(t) { return t = a({}, v, t), l.typeCheckConfig(p, t, _), t }, e._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
                }
            }, e._addEventListeners = function() {
                var t = this;
                this._config.keyboard && i.default(this._element).on("keydown.bs.carousel", (function(e) { return t._keydown(e) })), "hover" === this._config.pause && i.default(this._element).on("mouseenter.bs.carousel", (function(e) { return t.pause(e) })).on("mouseleave.bs.carousel", (function(e) { return t.cycle(e) })), this._config.touch && this._addTouchEventListeners()
            }, e._addTouchEventListeners = function() {
                var t = this;
                if (this._touchSupported) {
                    var e = function(e) { t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX) },
                        n = function(e) { t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) { return t.cycle(e) }), 500 + t._config.interval)) };
                    i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(t) { return t.preventDefault() })), this._pointerEvent ? (i.default(this._element).on("pointerdown.bs.carousel", (function(t) { return e(t) })), i.default(this._element).on("pointerup.bs.carousel", (function(t) { return n(t) })), this._element.classList.add("pointer-event")) : (i.default(this._element).on("touchstart.bs.carousel", (function(t) { return e(t) })), i.default(this._element).on("touchmove.bs.carousel", (function(e) { return function(e) { e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX }(e) })), i.default(this._element).on("touchend.bs.carousel", (function(t) { return n(t) })))
                }
            }, e._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, e._getItemIndex = function(t) { return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t) }, e._getItemByDirection = function(t, e) {
                var n = "next" === t,
                    i = "prev" === t,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var a = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                return -1 === a ? this._items[this._items.length - 1] : this._items[a]
            }, e._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    o = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                    r = i.default.Event("slide.bs.carousel", { relatedTarget: t, direction: e, from: o, to: n });
                return i.default(this._element).trigger(r), r
            }, e._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    i.default(e).removeClass("active");
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && i.default(n).addClass("active")
                }
            }, e._slide = function(t, e) {
                var n, o, r, a = this,
                    s = this._element.querySelector(".active.carousel-item"),
                    u = this._getItemIndex(s),
                    f = e || s && this._getItemByDirection(t, s),
                    d = this._getItemIndex(f),
                    c = Boolean(this._interval);
                if ("next" === t ? (n = "carousel-item-left", o = "carousel-item-next", r = "left") : (n = "carousel-item-right", o = "carousel-item-prev", r = "right"), f && i.default(f).hasClass("active")) this._isSliding = !1;
                else if (!this._triggerSlideEvent(f, r).isDefaultPrevented() && s && f) {
                    this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(f);
                    var h = i.default.Event("slid.bs.carousel", { relatedTarget: f, direction: r, from: u, to: d });
                    if (i.default(this._element).hasClass("slide")) {
                        i.default(f).addClass(o), l.reflow(f), i.default(s).addClass(n), i.default(f).addClass(n);
                        var p = parseInt(f.getAttribute("data-interval"), 10);
                        p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var m = l.getTransitionDurationFromElement(s);
                        i.default(s).one(l.TRANSITION_END, (function() { i.default(f).removeClass(n + " " + o).addClass("active"), i.default(s).removeClass("active " + o + " " + n), a._isSliding = !1, setTimeout((function() { return i.default(a._element).trigger(h) }), 0) })).emulateTransitionEnd(m)
                    } else i.default(s).removeClass("active"), i.default(f).addClass("active"), this._isSliding = !1, i.default(this._element).trigger(h);
                    c && this.cycle()
                }
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = i.default(this).data("bs.carousel"),
                        o = a({}, v, i.default(this).data());
                    "object" == typeof e && (o = a({}, o, e));
                    var r = "string" == typeof e ? e : o.slide;
                    if (n || (n = new t(this, o), i.default(this).data("bs.carousel", n)), "number" == typeof e) n.to(e);
                    else if ("string" == typeof r) {
                        if ("undefined" == typeof n[r]) throw new TypeError('No method named "' + r + '"');
                        n[r]()
                    } else o.interval && o.ride && (n.pause(), n.cycle())
                }))
            }, t._dataApiClickHandler = function(e) {
                var n = l.getSelectorFromElement(this);
                if (n) {
                    var o = i.default(n)[0];
                    if (o && i.default(o).hasClass("carousel")) {
                        var r = a({}, i.default(o).data(), i.default(this).data()),
                            s = this.getAttribute("data-slide-to");
                        s && (r.interval = !1), t._jQueryInterface.call(i.default(o), r), s && i.default(o).data("bs.carousel").to(s), e.preventDefault()
                    }
                }
            }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return v } }]), t
        }();
    i.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", y._dataApiClickHandler), i.default(window).on("load.bs.carousel.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++) {
            var o = i.default(t[e]);
            y._jQueryInterface.call(o, o.data())
        }
    })), i.default.fn[p] = y._jQueryInterface, i.default.fn[p].Constructor = y, i.default.fn[p].noConflict = function() { return i.default.fn[p] = g, y._jQueryInterface };
    var w = "collapse",
        E = i.default.fn[w],
        T = { toggle: !0, parent: "" },
        C = { toggle: "boolean", parent: "(string|element)" },
        S = function() {
            function t(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        a = l.getSelectorFromElement(r),
                        s = [].slice.call(document.querySelectorAll(a)).filter((function(e) { return e === t }));
                    null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = t.prototype;
            return e.toggle = function() { i.default(this._element).hasClass("show") ? this.hide() : this.show() }, e.show = function() {
                var e, n, o = this;
                if (!this._isTransitioning && !i.default(this._element).hasClass("show") && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t) { return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains("collapse") }))).length && (e = null), !(e && (n = i.default(e).not(this._selector).data("bs.collapse")) && n._isTransitioning))) {
                    var r = i.default.Event("show.bs.collapse");
                    if (i.default(this._element).trigger(r), !r.isDefaultPrevented()) {
                        e && (t._jQueryInterface.call(i.default(e).not(this._selector), "hide"), n || i.default(e).data("bs.collapse", null));
                        var a = this._getDimension();
                        i.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[a] = 0, this._triggerArray.length && i.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                        var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                            u = l.getTransitionDurationFromElement(this._element);
                        i.default(this._element).one(l.TRANSITION_END, (function() { i.default(o._element).removeClass("collapsing").addClass("collapse show"), o._element.style[a] = "", o.setTransitioning(!1), i.default(o._element).trigger("shown.bs.collapse") })).emulateTransitionEnd(u), this._element.style[a] = this._element[s] + "px"
                    }
                }
            }, e.hide = function() {
                var t = this;
                if (!this._isTransitioning && i.default(this._element).hasClass("show")) {
                    var e = i.default.Event("hide.bs.collapse");
                    if (i.default(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", l.reflow(this._element), i.default(this._element).addClass("collapsing").removeClass("collapse show");
                        var o = this._triggerArray.length;
                        if (o > 0)
                            for (var r = 0; r < o; r++) {
                                var a = this._triggerArray[r],
                                    s = l.getSelectorFromElement(a);
                                if (null !== s) i.default([].slice.call(document.querySelectorAll(s))).hasClass("show") || i.default(a).addClass("collapsed").attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var u = l.getTransitionDurationFromElement(this._element);
                        i.default(this._element).one(l.TRANSITION_END, (function() { t.setTransitioning(!1), i.default(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") })).emulateTransitionEnd(u)
                    }
                }
            }, e.setTransitioning = function(t) { this._isTransitioning = t }, e.dispose = function() { i.default.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, e._getConfig = function(t) { return (t = a({}, T, t)).toggle = Boolean(t.toggle), l.typeCheckConfig(w, t, C), t }, e._getDimension = function() { return i.default(this._element).hasClass("width") ? "width" : "height" }, e._getParent = function() {
                var e, n = this;
                l.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    r = [].slice.call(e.querySelectorAll(o));
                return i.default(r).each((function(e, i) { n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]) })), e
            }, e._addAriaAndCollapsedClass = function(t, e) {
                var n = i.default(t).hasClass("show");
                e.length && i.default(e).toggleClass("collapsed", !n).attr("aria-expanded", n)
            }, t._getTargetFromElement = function(t) { var e = l.getSelectorFromElement(t); return e ? document.querySelector(e) : null }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = i.default(this),
                        o = n.data("bs.collapse"),
                        r = a({}, T, n.data(), "object" == typeof e && e ? e : {});
                    if (!o && r.toggle && "string" == typeof e && /show|hide/.test(e) && (r.toggle = !1), o || (o = new t(this, r), n.data("bs.collapse", o)), "string" == typeof e) {
                        if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e]()
                    }
                }))
            }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return T } }]), t
        }();
    i.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var e = i.default(this),
            n = l.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(n));
        i.default(o).each((function() {
            var t = i.default(this),
                n = t.data("bs.collapse") ? "toggle" : e.data();
            S._jQueryInterface.call(t, n)
        }))
    })), i.default.fn[w] = S._jQueryInterface, i.default.fn[w].Constructor = S, i.default.fn[w].noConflict = function() { return i.default.fn[w] = E, S._jQueryInterface };
    var D = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        N = function() {
            for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
                if (D && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
            return 0
        }();
    var k = D && window.Promise ? function(t) { var e = !1; return function() { e || (e = !0, window.Promise.resolve().then((function() { e = !1, t() }))) } } : function(t) { var e = !1; return function() { e || (e = !0, setTimeout((function() { e = !1, t() }), N)) } };

    function A(t) { return t && "[object Function]" === {}.toString.call(t) }

    function I(t, e) { if (1 !== t.nodeType) return []; var n = t.ownerDocument.defaultView.getComputedStyle(t, null); return e ? n[e] : n }

    function O(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host }

    function x(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = I(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? t : x(O(t))
    }

    function j(t) { return t && t.referenceNode ? t.referenceNode : t }
    var L = D && !(!window.MSInputMethodContext || !document.documentMode),
        P = D && /MSIE 10/.test(navigator.userAgent);

    function F(t) { return 11 === t ? L : 10 === t ? P : L || P }

    function R(t) { if (!t) return document.documentElement; for (var e = F(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === I(n, "position") ? R(n) : n : t ? t.ownerDocument.documentElement : document.documentElement }

    function H(t) { return null !== t.parentNode ? H(t.parentNode) : t }

    function M(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            o = n ? e : t,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0);
        var a, s, l = r.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(o)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && R(a.firstElementChild) !== a ? R(l) : l;
        var u = H(t);
        return u.host ? M(u.host, e) : M(t, H(e).host)
    }

    function B(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === e ? "scrollTop" : "scrollLeft",
            i = t.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var o = t.ownerDocument.documentElement,
                r = t.ownerDocument.scrollingElement || o;
            return r[n]
        }
        return t[n]
    }

    function q(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = B(e, "top"),
            o = B(e, "left"),
            r = n ? -1 : 1;
        return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t
    }

    function Q(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"])
    }

    function W(t, e, n, i) { return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], F(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0) }

    function U(t) {
        var e = t.body,
            n = t.documentElement,
            i = F(10) && getComputedStyle(n);
        return { height: W("Height", e, n, i), width: W("Width", e, n, i) }
    }
    var V = function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") },
        Y = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
        }(),
        z = function(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t },
        X = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t };

    function K(t) { return X({}, t, { right: t.left + t.width, bottom: t.top + t.height }) }

    function G(t) {
        var e = {};
        try {
            if (F(10)) {
                e = t.getBoundingClientRect();
                var n = B(t, "top"),
                    i = B(t, "left");
                e.top += n, e.left += i, e.bottom += n, e.right += i
            } else e = t.getBoundingClientRect()
        } catch (t) {}
        var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
            r = "HTML" === t.nodeName ? U(t.ownerDocument) : {},
            a = r.width || t.clientWidth || o.width,
            s = r.height || t.clientHeight || o.height,
            l = t.offsetWidth - a,
            u = t.offsetHeight - s;
        if (l || u) {
            var f = I(t);
            l -= Q(f, "x"), u -= Q(f, "y"), o.width -= l, o.height -= u
        }
        return K(o)
    }

    function $(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = F(10),
            o = "HTML" === e.nodeName,
            r = G(t),
            a = G(e),
            s = x(t),
            l = I(e),
            u = parseFloat(l.borderTopWidth),
            f = parseFloat(l.borderLeftWidth);
        n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
        var d = K({ top: r.top - a.top - u, left: r.left - a.left - f, width: r.width, height: r.height });
        if (d.marginTop = 0, d.marginLeft = 0, !i && o) {
            var c = parseFloat(l.marginTop),
                h = parseFloat(l.marginLeft);
            d.top -= u - c, d.bottom -= u - c, d.left -= f - h, d.right -= f - h, d.marginTop = c, d.marginLeft = h
        }
        return (i && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (d = q(d, e)), d
    }

    function J(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = t.ownerDocument.documentElement,
            i = $(t, n),
            o = Math.max(n.clientWidth, window.innerWidth || 0),
            r = Math.max(n.clientHeight, window.innerHeight || 0),
            a = e ? 0 : B(n),
            s = e ? 0 : B(n, "left"),
            l = { top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: o, height: r };
        return K(l)
    }

    function Z(t) { var e = t.nodeName; if ("BODY" === e || "HTML" === e) return !1; if ("fixed" === I(t, "position")) return !0; var n = O(t); return !!n && Z(n) }

    function tt(t) { if (!t || !t.parentElement || F()) return document.documentElement; for (var e = t.parentElement; e && "none" === I(e, "transform");) e = e.parentElement; return e || document.documentElement }

    function et(t, e, n, i) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = { top: 0, left: 0 },
            a = o ? tt(t) : M(t, j(e));
        if ("viewport" === i) r = J(a, o);
        else {
            var s = void 0;
            "scrollParent" === i ? "BODY" === (s = x(O(e))).nodeName && (s = t.ownerDocument.documentElement) : s = "window" === i ? t.ownerDocument.documentElement : i;
            var l = $(s, a, o);
            if ("HTML" !== s.nodeName || Z(a)) r = l;
            else {
                var u = U(t.ownerDocument),
                    f = u.height,
                    d = u.width;
                r.top += l.top - l.marginTop, r.bottom = f + l.top, r.left += l.left - l.marginLeft, r.right = d + l.left
            }
        }
        var c = "number" == typeof(n = n || 0);
        return r.left += c ? n : n.left || 0, r.top += c ? n : n.top || 0, r.right -= c ? n : n.right || 0, r.bottom -= c ? n : n.bottom || 0, r
    }

    function nt(t) { return t.width * t.height }

    function it(t, e, n, i, o) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var a = et(n, i, r, o),
            s = { top: { width: a.width, height: e.top - a.top }, right: { width: a.right - e.right, height: a.height }, bottom: { width: a.width, height: a.bottom - e.bottom }, left: { width: e.left - a.left, height: a.height } },
            l = Object.keys(s).map((function(t) { return X({ key: t }, s[t], { area: nt(s[t]) }) })).sort((function(t, e) { return e.area - t.area })),
            u = l.filter((function(t) {
                var e = t.width,
                    i = t.height;
                return e >= n.clientWidth && i >= n.clientHeight
            })),
            f = u.length > 0 ? u[0].key : l[0].key,
            d = t.split("-")[1];
        return f + (d ? "-" + d : "")
    }

    function ot(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            o = i ? tt(e) : M(e, j(n));
        return $(n, o, i)
    }

    function rt(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return { width: t.offsetWidth + i, height: t.offsetHeight + n }
    }

    function at(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, (function(t) { return e[t] })) }

    function st(t, e, n) {
        n = n.split("-")[0];
        var i = rt(t),
            o = { width: i.width, height: i.height },
            r = -1 !== ["right", "left"].indexOf(n),
            a = r ? "top" : "left",
            s = r ? "left" : "top",
            l = r ? "height" : "width",
            u = r ? "width" : "height";
        return o[a] = e[a] + e[l] / 2 - i[l] / 2, o[s] = n === s ? e[s] - i[u] : e[at(s)], o
    }

    function lt(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] }

    function ut(t, e, n) {
        return (void 0 === n ? t : t.slice(0, function(t, e, n) { if (Array.prototype.findIndex) return t.findIndex((function(t) { return t[e] === n })); var i = lt(t, (function(t) { return t[e] === n })); return t.indexOf(i) }(t, "name", n))).forEach((function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && A(n) && (e.offsets.popper = K(e.offsets.popper), e.offsets.reference = K(e.offsets.reference), e = n(e, t))
        })), e
    }

    function ft() {
        if (!this.state.isDestroyed) {
            var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
            t.offsets.reference = ot(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = it(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = st(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = ut(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
        }
    }

    function dt(t, e) { return t.some((function(t) { var n = t.name; return t.enabled && n === e })) }

    function ct(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var o = e[i],
                r = o ? "" + o + n : t;
            if ("undefined" != typeof document.body.style[r]) return r
        }
        return null
    }

    function ht() { return this.state.isDestroyed = !0, dt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ct("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }

    function pt(t) { var e = t.ownerDocument; return e ? e.defaultView : window }

    function mt(t, e, n, i) {
        n.updateBound = i, pt(t).addEventListener("resize", n.updateBound, { passive: !0 });
        var o = x(t);
        return function t(e, n, i, o) {
            var r = "BODY" === e.nodeName,
                a = r ? e.ownerDocument.defaultView : e;
            a.addEventListener(n, i, { passive: !0 }), r || t(x(a.parentNode), n, i, o), o.push(a)
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }

    function gt() { this.state.eventsEnabled || (this.state = mt(this.reference, this.options, this.state, this.scheduleUpdate)) }

    function vt() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, pt(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function(t) { t.removeEventListener("scroll", e.updateBound) })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function _t(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) }

    function bt(t, e) { Object.keys(e).forEach((function(n) { var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && _t(e[n]) && (i = "px"), t.style[n] = e[n] + i })) }
    var yt = D && /Firefox/i.test(navigator.userAgent);

    function wt(t, e, n) {
        var i = lt(t, (function(t) { return t.name === e })),
            o = !!i && t.some((function(t) { return t.name === n && t.enabled && t.order < i.order }));
        if (!o) {
            var r = "`" + e + "`",
                a = "`" + n + "`";
            console.warn(a + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    var Et = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Tt = Et.slice(3);

    function Ct(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Tt.indexOf(t),
            i = Tt.slice(n + 1).concat(Tt.slice(0, n));
        return e ? i.reverse() : i
    }
    var St = "flip",
        Dt = "clockwise",
        Nt = "counterclockwise";

    function kt(t, e, n, i) {
        var o = [0, 0],
            r = -1 !== ["right", "left"].indexOf(i),
            a = t.split(/(\+|\-)/).map((function(t) { return t.trim() })),
            s = a.indexOf(lt(a, (function(t) { return -1 !== t.search(/,|\s/) })));
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
        return (u = u.map((function(t, i) {
            var o = (1 === i ? !r : r) ? "height" : "width",
                a = !1;
            return t.reduce((function(t, e) { return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e) }), []).map((function(t) {
                return function(t, e, n, i) {
                    var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        r = +o[1],
                        a = o[2];
                    if (!r) return t;
                    if (0 === a.indexOf("%")) {
                        var s = void 0;
                        switch (a) {
                            case "%p":
                                s = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                s = i
                        }
                        return K(s)[e] / 100 * r
                    }
                    if ("vh" === a || "vw" === a) { return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r }
                    return r
                }(t, o, e, n)
            }))
        }))).forEach((function(t, e) { t.forEach((function(n, i) { _t(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1)) })) })), o
    }
    var At = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var o = t.offsets,
                                r = o.reference,
                                a = o.popper,
                                s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top",
                                u = s ? "width" : "height",
                                f = { start: z({}, l, r[l]), end: z({}, l, r[l] + r[u] - a[u]) };
                            t.offsets.popper = X({}, a, f[i])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.offset,
                            i = t.placement,
                            o = t.offsets,
                            r = o.popper,
                            a = o.reference,
                            s = i.split("-")[0],
                            l = void 0;
                        return l = _t(+n) ? [+n, 0] : kt(n, r, a, s), "left" === s ? (r.top += l[0], r.left -= l[1]) : "right" === s ? (r.top += l[0], r.left += l[1]) : "top" === s ? (r.left += l[0], r.top -= l[1]) : "bottom" === s && (r.left += l[0], r.top += l[1]), t.popper = r, t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.boundariesElement || R(t.instance.popper);
                        t.instance.reference === n && (n = R(n));
                        var i = ct("transform"),
                            o = t.instance.popper.style,
                            r = o.top,
                            a = o.left,
                            s = o[i];
                        o.top = "", o.left = "", o[i] = "";
                        var l = et(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                        o.top = r, o.left = a, o[i] = s, e.boundaries = l;
                        var u = e.priority,
                            f = t.offsets.popper,
                            d = {
                                primary: function(t) { var n = f[t]; return f[t] < l[t] && !e.escapeWithReference && (n = Math.max(f[t], l[t])), z({}, t, n) },
                                secondary: function(t) {
                                    var n = "right" === t ? "left" : "top",
                                        i = f[n];
                                    return f[t] > l[t] && !e.escapeWithReference && (i = Math.min(f[n], l[t] - ("right" === t ? f.width : f.height))), z({}, n, i)
                                }
                            };
                        return u.forEach((function(t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            f = X({}, f, d[e](t))
                        })), t.offsets.popper = f, t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            o = t.placement.split("-")[0],
                            r = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(o),
                            s = a ? "right" : "bottom",
                            l = a ? "left" : "top",
                            u = a ? "width" : "height";
                        return n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]), n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])), t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        var n;
                        if (!wt(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var i = e.element;
                        if ("string" == typeof i) { if (!(i = t.instance.popper.querySelector(i))) return t } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var o = t.placement.split("-")[0],
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
                        s[h] - p < a[d] && (t.offsets.popper[d] -= a[d] - (s[h] - p)), s[d] + p > a[h] && (t.offsets.popper[d] += s[d] + p - a[h]), t.offsets.popper = K(t.offsets.popper);
                        var m = s[d] + s[u] / 2 - p / 2,
                            g = I(t.instance.popper),
                            v = parseFloat(g["margin" + f]),
                            _ = parseFloat(g["border" + f + "Width"]),
                            b = m - t.offsets.popper[d] - v - _;
                        return b = Math.max(Math.min(a[u] - p, b), 0), t.arrowElement = i, t.offsets.arrow = (z(n = {}, d, Math.round(b)), z(n, c, ""), n), t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(t, e) {
                        if (dt(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement) return t;
                        var n = et(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            i = t.placement.split("-")[0],
                            o = at(i),
                            r = t.placement.split("-")[1] || "",
                            a = [];
                        switch (e.behavior) {
                            case St:
                                a = [i, o];
                                break;
                            case Dt:
                                a = Ct(i);
                                break;
                            case Nt:
                                a = Ct(i, !0);
                                break;
                            default:
                                a = e.behavior
                        }
                        return a.forEach((function(s, l) {
                            if (i !== s || a.length === l + 1) return t;
                            i = t.placement.split("-")[0], o = at(i);
                            var u = t.offsets.popper,
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
                            (c || v || w) && (t.flipped = !0, (c || v) && (i = a[l + 1]), w && (r = function(t) { return "end" === t ? "start" : "start" === t ? "end" : t }(r)), t.placement = i + (r ? "-" + r : ""), t.offsets.popper = X({}, t.offsets.popper, st(t.instance.popper, t.offsets.reference, t.placement)), t = ut(t.instance.modifiers, t, "flip"))
                        })), t
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            o = i.popper,
                            r = i.reference,
                            a = -1 !== ["left", "right"].indexOf(n),
                            s = -1 === ["top", "left"].indexOf(n);
                        return o[a ? "left" : "top"] = r[n] - (s ? o[a ? "width" : "height"] : 0), t.placement = at(e), t.offsets.popper = K(o), t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!wt(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            n = lt(t.instance.modifiers, (function(t) { return "preventOverflow" === t.name })).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.x,
                            i = e.y,
                            o = t.offsets.popper,
                            r = lt(t.instance.modifiers, (function(t) { return "applyStyle" === t.name })).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a = void 0 !== r ? r : e.gpuAcceleration,
                            s = R(t.instance.popper),
                            l = G(s),
                            u = { position: o.position },
                            f = function(t, e) {
                                var n = t.offsets,
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
                                    h = e ? r : s;
                                return { left: c(l % 2 == 1 && u % 2 == 1 && !d && e ? i.left - 1 : i.left), top: h(i.top), bottom: h(i.bottom), right: c(i.right) }
                            }(t, window.devicePixelRatio < 2 || !yt),
                            d = "bottom" === n ? "top" : "bottom",
                            c = "right" === i ? "left" : "right",
                            h = ct("transform"),
                            p = void 0,
                            m = void 0;
                        if (m = "bottom" === d ? "HTML" === s.nodeName ? -s.clientHeight + f.bottom : -l.height + f.bottom : f.top, p = "right" === c ? "HTML" === s.nodeName ? -s.clientWidth + f.right : -l.width + f.right : f.left, a && h) u[h] = "translate3d(" + p + "px, " + m + "px, 0)", u[d] = 0, u[c] = 0, u.willChange = "transform";
                        else {
                            var g = "bottom" === d ? -1 : 1,
                                v = "right" === c ? -1 : 1;
                            u[d] = m * g, u[c] = p * v, u.willChange = d + ", " + c
                        }
                        var _ = { "x-placement": t.placement };
                        return t.attributes = X({}, _, t.attributes), t.styles = X({}, u, t.styles), t.arrowStyles = X({}, t.offsets.arrow, t.arrowStyles), t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) { var e, n; return bt(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach((function(t) {!1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t) })), t.arrowElement && Object.keys(t.arrowStyles).length && bt(t.arrowElement, t.arrowStyles), t },
                    onLoad: function(t, e, n, i, o) {
                        var r = ot(o, e, t, n.positionFixed),
                            a = it(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", a), bt(e, { position: n.positionFixed ? "fixed" : "absolute" }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        It = function() {
            function t(e, n) {
                var i = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                V(this, t), this.scheduleUpdate = function() { return requestAnimationFrame(i.update) }, this.update = k(this.update.bind(this)), this.options = X({}, t.Defaults, o), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(X({}, t.Defaults.modifiers, o.modifiers)).forEach((function(e) { i.options.modifiers[e] = X({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {}) })), this.modifiers = Object.keys(this.options.modifiers).map((function(t) { return X({ name: t }, i.options.modifiers[t]) })).sort((function(t, e) { return t.order - e.order })), this.modifiers.forEach((function(t) { t.enabled && A(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state) })), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return Y(t, [{ key: "update", value: function() { return ft.call(this) } }, { key: "destroy", value: function() { return ht.call(this) } }, { key: "enableEventListeners", value: function() { return gt.call(this) } }, { key: "disableEventListeners", value: function() { return vt.call(this) } }]), t
        }();
    It.Utils = ("undefined" != typeof window ? window : global).PopperUtils, It.placements = Et, It.Defaults = At;
    var Ot = "dropdown",
        xt = i.default.fn[Ot],
        jt = new RegExp("38|40|27"),
        Lt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
        Pt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
        Ft = function() {
            function t(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() }
            var e = t.prototype;
            return e.toggle = function() {
                if (!this._element.disabled && !i.default(this._element).hasClass("disabled")) {
                    var e = i.default(this._menu).hasClass("show");
                    t._clearMenus(), e || this.show(!0)
                }
            }, e.show = function(e) {
                if (void 0 === e && (e = !1), !(this._element.disabled || i.default(this._element).hasClass("disabled") || i.default(this._menu).hasClass("show"))) {
                    var n = { relatedTarget: this._element },
                        o = i.default.Event("show.bs.dropdown", n),
                        r = t._getParentFromElement(this._element);
                    if (i.default(r).trigger(o), !o.isDefaultPrevented()) { if (!this._inNavbar && e) { if ("undefined" == typeof It) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var a = this._element; "parent" === this._config.reference ? a = r : l.isElement(this._config.reference) && (a = this._config.reference, "undefined" != typeof this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && i.default(r).addClass("position-static"), this._popper = new It(a, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === i.default(r).closest(".navbar-nav").length && i.default(document.body).children().on("mouseover", null, i.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), i.default(this._menu).toggleClass("show"), i.default(r).toggleClass("show").trigger(i.default.Event("shown.bs.dropdown", n)) }
                }
            }, e.hide = function() {
                if (!this._element.disabled && !i.default(this._element).hasClass("disabled") && i.default(this._menu).hasClass("show")) {
                    var e = { relatedTarget: this._element },
                        n = i.default.Event("hide.bs.dropdown", e),
                        o = t._getParentFromElement(this._element);
                    i.default(o).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), i.default(this._menu).toggleClass("show"), i.default(o).toggleClass("show").trigger(i.default.Event("hidden.bs.dropdown", e)))
                }
            }, e.dispose = function() { i.default.removeData(this._element, "bs.dropdown"), i.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null) }, e.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, e._addEventListeners = function() {
                var t = this;
                i.default(this._element).on("click.bs.dropdown", (function(e) { e.preventDefault(), e.stopPropagation(), t.toggle() }))
            }, e._getConfig = function(t) { return t = a({}, this.constructor.Default, i.default(this._element).data(), t), l.typeCheckConfig(Ot, t, this.constructor.DefaultType), t }, e._getMenuElement = function() {
                if (!this._menu) {
                    var e = t._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(".dropdown-menu"))
                }
                return this._menu
            }, e._getPlacement = function() {
                var t = i.default(this._element.parentNode),
                    e = "bottom-start";
                return t.hasClass("dropup") ? e = i.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : i.default(this._menu).hasClass("dropdown-menu-right") && (e = "bottom-end"), e
            }, e._detectNavbar = function() { return i.default(this._element).closest(".navbar").length > 0 }, e._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) { return e.offsets = a({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e } : e.offset = this._config.offset, e
            }, e._getPopperConfig = function() { var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), a({}, t, this._config.popperConfig) }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = i.default(this).data("bs.dropdown");
                    if (n || (n = new t(this, "object" == typeof e ? e : null), i.default(this).data("bs.dropdown", n)), "string" == typeof e) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                }))
            }, t._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, r = n.length; o < r; o++) {
                        var a = t._getParentFromElement(n[o]),
                            s = i.default(n[o]).data("bs.dropdown"),
                            l = { relatedTarget: n[o] };
                        if (e && "click" === e.type && (l.clickEvent = e), s) {
                            var u = s._menu;
                            if (i.default(a).hasClass("show") && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && i.default.contains(a, e.target))) {
                                var f = i.default.Event("hide.bs.dropdown", l);
                                i.default(a).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), n[o].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), i.default(u).removeClass("show"), i.default(a).removeClass("show").trigger(i.default.Event("hidden.bs.dropdown", l)))
                            }
                        }
                    }
            }, t._getParentFromElement = function(t) { var e, n = l.getSelectorFromElement(t); return n && (e = document.querySelector(n)), e || t.parentNode }, t._dataApiKeydownHandler = function(e) {
                if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || i.default(e.target).closest(".dropdown-menu").length) : !jt.test(e.which)) && !this.disabled && !i.default(this).hasClass("disabled")) {
                    var n = t._getParentFromElement(this),
                        o = i.default(n).hasClass("show");
                    if (o || 27 !== e.which) {
                        if (e.preventDefault(), e.stopPropagation(), !o || 27 === e.which || 32 === e.which) return 27 === e.which && i.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void i.default(this).trigger("click");
                        var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t) { return i.default(t).is(":visible") }));
                        if (0 !== r.length) {
                            var a = r.indexOf(e.target);
                            38 === e.which && a > 0 && a--, 40 === e.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus()
                        }
                    }
                }
            }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return Lt } }, { key: "DefaultType", get: function() { return Pt } }]), t
        }();
    i.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', Ft._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Ft._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Ft._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function(t) { t.preventDefault(), t.stopPropagation(), Ft._jQueryInterface.call(i.default(this), "toggle") })).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) { t.stopPropagation() })), i.default.fn[Ot] = Ft._jQueryInterface, i.default.fn[Ot].Constructor = Ft, i.default.fn[Ot].noConflict = function() { return i.default.fn[Ot] = xt, Ft._jQueryInterface };
    var Rt = i.default.fn.modal,
        Ht = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        Mt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        Bt = function() {
            function t(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 }
            var e = t.prototype;
            return e.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, e.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    i.default(this._element).hasClass("fade") && (this._isTransitioning = !0);
                    var n = i.default.Event("show.bs.modal", { relatedTarget: t });
                    i.default(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), i.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function(t) { return e.hide(t) })), i.default(this._dialog).on("mousedown.dismiss.bs.modal", (function() { i.default(e._element).one("mouseup.dismiss.bs.modal", (function(t) { i.default(t.target).is(e._element) && (e._ignoreBackdropClick = !0) })) })), this._showBackdrop((function() { return e._showElement(t) })))
                }
            }, e.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = i.default.Event("hide.bs.modal");
                    if (i.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var o = i.default(this._element).hasClass("fade");
                        if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), i.default(document).off("focusin.bs.modal"), i.default(this._element).removeClass("show"), i.default(this._element).off("click.dismiss.bs.modal"), i.default(this._dialog).off("mousedown.dismiss.bs.modal"), o) {
                            var r = l.getTransitionDurationFromElement(this._element);
                            i.default(this._element).one(l.TRANSITION_END, (function(t) { return e._hideModal(t) })).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function() {
                [window, this._element, this._dialog].forEach((function(t) { return i.default(t).off(".bs.modal") })), i.default(document).off("focusin.bs.modal"), i.default.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, e.handleUpdate = function() { this._adjustDialog() }, e._getConfig = function(t) { return t = a({}, Ht, t), l.typeCheckConfig("modal", t, Mt), t }, e._triggerBackdropTransition = function() {
                var t = this;
                if ("static" === this._config.backdrop) {
                    var e = i.default.Event("hidePrevented.bs.modal");
                    if (i.default(this._element).trigger(e), e.isDefaultPrevented()) return;
                    var n = this._element.scrollHeight > document.documentElement.clientHeight;
                    n || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                    var o = l.getTransitionDurationFromElement(this._dialog);
                    i.default(this._element).off(l.TRANSITION_END), i.default(this._element).one(l.TRANSITION_END, (function() { t._element.classList.remove("modal-static"), n || i.default(t._element).one(l.TRANSITION_END, (function() { t._element.style.overflowY = "" })).emulateTransitionEnd(t._element, o) })).emulateTransitionEnd(o), this._element.focus()
                } else this.hide()
            }, e._showElement = function(t) {
                var e = this,
                    n = i.default(this._element).hasClass("fade"),
                    o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), i.default(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, n && l.reflow(this._element), i.default(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                var r = i.default.Event("shown.bs.modal", { relatedTarget: t }),
                    a = function() { e._config.focus && e._element.focus(), e._isTransitioning = !1, i.default(e._element).trigger(r) };
                if (n) {
                    var s = l.getTransitionDurationFromElement(this._dialog);
                    i.default(this._dialog).one(l.TRANSITION_END, a).emulateTransitionEnd(s)
                } else a()
            }, e._enforceFocus = function() {
                var t = this;
                i.default(document).off("focusin.bs.modal").on("focusin.bs.modal", (function(e) { document !== e.target && t._element !== e.target && 0 === i.default(t._element).has(e.target).length && t._element.focus() }))
            }, e._setEscapeEvent = function() {
                var t = this;
                this._isShown ? i.default(this._element).on("keydown.dismiss.bs.modal", (function(e) { t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition() })) : this._isShown || i.default(this._element).off("keydown.dismiss.bs.modal")
            }, e._setResizeEvent = function() {
                var t = this;
                this._isShown ? i.default(window).on("resize.bs.modal", (function(e) { return t.handleUpdate(e) })) : i.default(window).off("resize.bs.modal")
            }, e._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() { i.default(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), i.default(t._element).trigger("hidden.bs.modal") }))
            }, e._removeBackdrop = function() { this._backdrop && (i.default(this._backdrop).remove(), this._backdrop = null) }, e._showBackdrop = function(t) {
                var e = this,
                    n = i.default(this._element).hasClass("fade") ? "fade" : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), i.default(this._backdrop).appendTo(document.body), i.default(this._element).on("click.dismiss.bs.modal", (function(t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition() })), n && l.reflow(this._backdrop), i.default(this._backdrop).addClass("show"), !t) return;
                    if (!n) return void t();
                    var o = l.getTransitionDurationFromElement(this._backdrop);
                    i.default(this._backdrop).one(l.TRANSITION_END, t).emulateTransitionEnd(o)
                } else if (!this._isShown && this._backdrop) {
                    i.default(this._backdrop).removeClass("show");
                    var r = function() { e._removeBackdrop(), t && t() };
                    if (i.default(this._element).hasClass("fade")) {
                        var a = l.getTransitionDurationFromElement(this._backdrop);
                        i.default(this._backdrop).one(l.TRANSITION_END, r).emulateTransitionEnd(a)
                    } else r()
                } else t && t()
            }, e._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, e._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, e._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                        n = [].slice.call(document.querySelectorAll(".sticky-top"));
                    i.default(e).each((function(e, n) {
                        var o = n.style.paddingRight,
                            r = i.default(n).css("padding-right");
                        i.default(n).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                    })), i.default(n).each((function(e, n) {
                        var o = n.style.marginRight,
                            r = i.default(n).css("margin-right");
                        i.default(n).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                    }));
                    var o = document.body.style.paddingRight,
                        r = i.default(document.body).css("padding-right");
                    i.default(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                }
                i.default(document.body).addClass("modal-open")
            }, e._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                i.default(t).each((function(t, e) {
                    var n = i.default(e).data("padding-right");
                    i.default(e).removeData("padding-right"), e.style.paddingRight = n || ""
                }));
                var e = [].slice.call(document.querySelectorAll(".sticky-top"));
                i.default(e).each((function(t, e) { var n = i.default(e).data("margin-right"); "undefined" != typeof n && i.default(e).css("margin-right", n).removeData("margin-right") }));
                var n = i.default(document.body).data("padding-right");
                i.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, e._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, t._jQueryInterface = function(e, n) {
                return this.each((function() {
                    var o = i.default(this).data("bs.modal"),
                        r = a({}, Ht, i.default(this).data(), "object" == typeof e && e ? e : {});
                    if (o || (o = new t(this, r), i.default(this).data("bs.modal", o)), "string" == typeof e) {
                        if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e](n)
                    } else r.show && o.show(n)
                }))
            }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return Ht } }]), t
        }();
    i.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(t) {
        var e, n = this,
            o = l.getSelectorFromElement(this);
        o && (e = document.querySelector(o));
        var r = i.default(e).data("bs.modal") ? "toggle" : a({}, i.default(e).data(), i.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var s = i.default(e).one("show.bs.modal", (function(t) { t.isDefaultPrevented() || s.one("hidden.bs.modal", (function() { i.default(n).is(":visible") && n.focus() })) }));
        Bt._jQueryInterface.call(i.default(e), r, this)
    })), i.default.fn.modal = Bt._jQueryInterface, i.default.fn.modal.Constructor = Bt, i.default.fn.modal.noConflict = function() { return i.default.fn.modal = Rt, Bt._jQueryInterface };
    var qt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Qt = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        Wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        Ut = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function Vt(t, e, n) {
        if (0 === t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), a = function(t, n) {
                var i = r[t],
                    a = i.nodeName.toLowerCase();
                if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                var s = [].slice.call(i.attributes),
                    l = [].concat(e["*"] || [], e[a] || []);
                s.forEach((function(t) {
                    (function(t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(n)) return -1 === qt.indexOf(n) || Boolean(t.nodeValue.match(Wt) || t.nodeValue.match(Ut));
                        for (var i = e.filter((function(t) { return t instanceof RegExp })), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    })(t, l) || i.removeAttribute(t.nodeName)
                }))
            }, s = 0, l = r.length; s < l; s++) a(s);
        return i.body.innerHTML
    }
    var Yt = "tooltip",
        zt = i.default.fn[Yt],
        Xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Kt = ["sanitize", "whiteList", "sanitizeFn"],
        Gt = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" },
        $t = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        Jt = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Qt, popperConfig: null },
        Zt = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" },
        te = function() {
            function t(t, e) {
                if ("undefined" == typeof It) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var e = t.prototype;
            return e.enable = function() { this._isEnabled = !0 }, e.disable = function() { this._isEnabled = !1 }, e.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, e.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = i.default(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), i.default(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (i.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, e.dispose = function() { clearTimeout(this._timeout), i.default.removeData(this.element, this.constructor.DATA_KEY), i.default(this.element).off(this.constructor.EVENT_KEY), i.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && i.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, e.show = function() {
                var t = this;
                if ("none" === i.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e = i.default.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    i.default(this.element).trigger(e);
                    var n = l.findShadowRoot(this.element),
                        o = i.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !o) return;
                    var r = this.getTipElement(),
                        a = l.getUID(this.constructor.NAME);
                    r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && i.default(r).addClass("fade");
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        u = this._getAttachment(s);
                    this.addAttachmentClass(u);
                    var f = this._getContainer();
                    i.default(r).data(this.constructor.DATA_KEY, this), i.default.contains(this.element.ownerDocument.documentElement, this.tip) || i.default(r).appendTo(f), i.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new It(this.element, r, this._getPopperConfig(u)), i.default(r).addClass("show"), "ontouchstart" in document.documentElement && i.default(document.body).children().on("mouseover", null, i.default.noop);
                    var d = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, i.default(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                    };
                    if (i.default(this.tip).hasClass("fade")) {
                        var c = l.getTransitionDurationFromElement(this.tip);
                        i.default(this.tip).one(l.TRANSITION_END, d).emulateTransitionEnd(c)
                    } else d()
                }
            }, e.hide = function(t) {
                var e = this,
                    n = this.getTipElement(),
                    o = i.default.Event(this.constructor.Event.HIDE),
                    r = function() { "show" !== e._hoverState && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), i.default(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() };
                if (i.default(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (i.default(n).removeClass("show"), "ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, i.default(this.tip).hasClass("fade")) {
                        var a = l.getTransitionDurationFromElement(n);
                        i.default(n).one(l.TRANSITION_END, r).emulateTransitionEnd(a)
                    } else r();
                    this._hoverState = ""
                }
            }, e.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, e.isWithContent = function() { return Boolean(this.getTitle()) }, e.addAttachmentClass = function(t) { i.default(this.getTipElement()).addClass("bs-tooltip-" + t) }, e.getTipElement = function() { return this.tip = this.tip || i.default(this.config.template)[0], this.tip }, e.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(i.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()), i.default(t).removeClass("fade show")
            }, e.setElementContent = function(t, e) { "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Vt(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? i.default(e).parent().is(t) || t.empty().append(e) : t.text(i.default(e).text()) }, e.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, e._getPopperConfig = function(t) { var e = this; return a({}, { placement: t, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function(t) { return e._handlePopperPlacementChange(t) } }, this.config.popperConfig) }, e._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function(e) { return e.offsets = a({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e } : e.offset = this.config.offset, e
            }, e._getContainer = function() { return !1 === this.config.container ? document.body : l.isElement(this.config.container) ? i.default(this.config.container) : i.default(document).find(this.config.container) }, e._getAttachment = function(t) { return $t[t.toUpperCase()] }, e._setListeners = function() {
                var t = this;
                this.config.trigger.split(" ").forEach((function(e) {
                    if ("click" === e) i.default(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) { return t.toggle(e) }));
                    else if ("manual" !== e) {
                        var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            o = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        i.default(t.element).on(n, t.config.selector, (function(e) { return t._enter(e) })).on(o, t.config.selector, (function(e) { return t._leave(e) }))
                    }
                })), this._hideModalHandler = function() { t.element && t.hide() }, i.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
            }, e._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, e._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || i.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), i.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), i.default(e.getTipElement()).hasClass("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() { "show" === e._hoverState && e.show() }), e.config.delay.show) : e.show())
            }, e._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || i.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), i.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() { "out" === e._hoverState && e.hide() }), e.config.delay.hide) : e.hide())
            }, e._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, e._getConfig = function(t) { var e = i.default(this.element).data(); return Object.keys(e).forEach((function(t) {-1 !== Kt.indexOf(t) && delete e[t] })), "number" == typeof(t = a({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l.typeCheckConfig(Yt, t, this.constructor.DefaultType), t.sanitize && (t.template = Vt(t.template, t.whiteList, t.sanitizeFn)), t }, e._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, e._cleanTipClass = function() {
                var t = i.default(this.getTipElement()),
                    e = t.attr("class").match(Xt);
                null !== e && e.length && t.removeClass(e.join(""))
            }, e._handlePopperPlacementChange = function(t) { this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, e._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (i.default(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = i.default(this),
                        o = n.data("bs.tooltip"),
                        r = "object" == typeof e && e;
                    if ((o || !/dispose|hide/.test(e)) && (o || (o = new t(this, r), n.data("bs.tooltip", o)), "string" == typeof e)) {
                        if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e]()
                    }
                }))
            }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return Jt } }, { key: "NAME", get: function() { return Yt } }, { key: "DATA_KEY", get: function() { return "bs.tooltip" } }, { key: "Event", get: function() { return Zt } }, { key: "EVENT_KEY", get: function() { return ".bs.tooltip" } }, { key: "DefaultType", get: function() { return Gt } }]), t
        }();
    i.default.fn[Yt] = te._jQueryInterface, i.default.fn[Yt].Constructor = te, i.default.fn[Yt].noConflict = function() { return i.default.fn[Yt] = zt, te._jQueryInterface };
    var ee = "popover",
        ne = i.default.fn[ee],
        ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        oe = a({}, te.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        re = a({}, te.DefaultType, { content: "(string|element|function)" }),
        ae = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" },
        se = function(t) {
            var e, n;

            function o() { return t.apply(this, arguments) || this }
            n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
            var a = o.prototype;
            return a.isWithContent = function() { return this.getTitle() || this._getContent() }, a.addAttachmentClass = function(t) { i.default(this.getTipElement()).addClass("bs-popover-" + t) }, a.getTipElement = function() { return this.tip = this.tip || i.default(this.config.template)[0], this.tip }, a.setContent = function() {
                var t = i.default(this.getTipElement());
                this.setElementContent(t.find(".popover-header"), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show")
            }, a._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, a._cleanTipClass = function() {
                var t = i.default(this.getTipElement()),
                    e = t.attr("class").match(ie);
                null !== e && e.length > 0 && t.removeClass(e.join(""))
            }, o._jQueryInterface = function(t) {
                return this.each((function() {
                    var e = i.default(this).data("bs.popover"),
                        n = "object" == typeof t ? t : null;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, n), i.default(this).data("bs.popover", e)), "string" == typeof t)) {
                        if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, r(o, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return oe } }, { key: "NAME", get: function() { return ee } }, { key: "DATA_KEY", get: function() { return "bs.popover" } }, { key: "Event", get: function() { return ae } }, { key: "EVENT_KEY", get: function() { return ".bs.popover" } }, { key: "DefaultType", get: function() { return re } }]), o
        }(te);
    i.default.fn[ee] = se._jQueryInterface, i.default.fn[ee].Constructor = se, i.default.fn[ee].noConflict = function() { return i.default.fn[ee] = ne, se._jQueryInterface };
    var le = "scrollspy",
        ue = i.default.fn[le],
        fe = { offset: 10, method: "auto", target: "" },
        de = { offset: "number", method: "string", target: "(string|element)" },
        ce = function() {
            function t(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, i.default(this._scrollElement).on("scroll.bs.scrollspy", (function(t) { return n._process(t) })), this.refresh(), this._process()
            }
            var e = t.prototype;
            return e.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    n = "auto" === this._config.method ? e : this._config.method,
                    o = "position" === n ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(t) { var e, r = l.getSelectorFromElement(t); if (r && (e = document.querySelector(r)), e) { var a = e.getBoundingClientRect(); if (a.width || a.height) return [i.default(e)[n]().top + o, r] } return null })).filter((function(t) { return t })).sort((function(t, e) { return t[0] - e[0] })).forEach((function(e) { t._offsets.push(e[0]), t._targets.push(e[1]) }))
            }, e.dispose = function() { i.default.removeData(this._element, "bs.scrollspy"), i.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, e._getConfig = function(t) {
                if ("string" != typeof(t = a({}, fe, "object" == typeof t && t ? t : {})).target && l.isElement(t.target)) {
                    var e = i.default(t.target).attr("id");
                    e || (e = l.getUID(le), i.default(t.target).attr("id", e)), t.target = "#" + e
                }
                return l.typeCheckConfig(le, t, de), t
            }, e._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, e._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, e._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, e._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (var o = this._offsets.length; o--;) { this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]) } }
            }, e._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map((function(e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' })),
                    n = i.default([].slice.call(document.querySelectorAll(e.join(","))));
                n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) : (n.addClass("active"), n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), i.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t })
            }, e._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter((function(t) { return t.classList.contains("active") })).forEach((function(t) { return t.classList.remove("active") }))
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = i.default(this).data("bs.scrollspy");
                    if (n || (n = new t(this, "object" == typeof e && e), i.default(this).data("bs.scrollspy", n)), "string" == typeof e) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                }))
            }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "Default", get: function() { return fe } }]), t
        }();
    i.default(window).on("load.bs.scrollspy.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;) {
            var n = i.default(t[e]);
            ce._jQueryInterface.call(n, n.data())
        }
    })), i.default.fn[le] = ce._jQueryInterface, i.default.fn[le].Constructor = ce, i.default.fn[le].noConflict = function() { return i.default.fn[le] = ue, ce._jQueryInterface };
    var he = i.default.fn.tab,
        pe = function() {
            function t(t) { this._element = t }
            var e = t.prototype;
            return e.show = function() {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && i.default(this._element).hasClass("active") || i.default(this._element).hasClass("disabled"))) {
                    var e, n, o = i.default(this._element).closest(".nav, .list-group")[0],
                        r = l.getSelectorFromElement(this._element);
                    if (o) {
                        var a = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
                        n = (n = i.default.makeArray(i.default(o).find(a)))[n.length - 1]
                    }
                    var s = i.default.Event("hide.bs.tab", { relatedTarget: this._element }),
                        u = i.default.Event("show.bs.tab", { relatedTarget: n });
                    if (n && i.default(n).trigger(s), i.default(this._element).trigger(u), !u.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (e = document.querySelector(r)), this._activate(this._element, o);
                        var f = function() {
                            var e = i.default.Event("hidden.bs.tab", { relatedTarget: t._element }),
                                o = i.default.Event("shown.bs.tab", { relatedTarget: n });
                            i.default(n).trigger(e), i.default(t._element).trigger(o)
                        };
                        e ? this._activate(e, e.parentNode, f) : f()
                    }
                }
            }, e.dispose = function() { i.default.removeData(this._element, "bs.tab"), this._element = null }, e._activate = function(t, e, n) {
                var o = this,
                    r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i.default(e).children(".active") : i.default(e).find("> li > .active"))[0],
                    a = n && r && i.default(r).hasClass("fade"),
                    s = function() { return o._transitionComplete(t, r, n) };
                if (r && a) {
                    var u = l.getTransitionDurationFromElement(r);
                    i.default(r).removeClass("show").one(l.TRANSITION_END, s).emulateTransitionEnd(u)
                } else s()
            }, e._transitionComplete = function(t, e, n) {
                if (e) {
                    i.default(e).removeClass("active");
                    var o = i.default(e.parentNode).find("> .dropdown-menu .active")[0];
                    o && i.default(o).removeClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (i.default(t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), l.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && i.default(t.parentNode).hasClass("dropdown-menu")) {
                    var r = i.default(t).closest(".dropdown")[0];
                    if (r) {
                        var a = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                        i.default(a).addClass("active")
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = i.default(this),
                        o = n.data("bs.tab");
                    if (o || (o = new t(this), n.data("bs.tab", o)), "string" == typeof e) {
                        if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e]()
                    }
                }))
            }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }]), t
        }();
    i.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(t) { t.preventDefault(), pe._jQueryInterface.call(i.default(this), "show") })), i.default.fn.tab = pe._jQueryInterface, i.default.fn.tab.Constructor = pe, i.default.fn.tab.noConflict = function() { return i.default.fn.tab = he, pe._jQueryInterface };
    var me = i.default.fn.toast,
        ge = { animation: "boolean", autohide: "boolean", delay: "number" },
        ve = { animation: !0, autohide: !0, delay: 500 },
        _e = function() {
            function t(t, e) { this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners() }
            var e = t.prototype;
            return e.show = function() {
                var t = this,
                    e = i.default.Event("show.bs.toast");
                if (i.default(this._element).trigger(e), !e.isDefaultPrevented()) {
                    this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                    var n = function() { t._element.classList.remove("showing"), t._element.classList.add("show"), i.default(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function() { t.hide() }), t._config.delay)) };
                    if (this._element.classList.remove("hide"), l.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                        var o = l.getTransitionDurationFromElement(this._element);
                        i.default(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(o)
                    } else n()
                }
            }, e.hide = function() {
                if (this._element.classList.contains("show")) {
                    var t = i.default.Event("hide.bs.toast");
                    i.default(this._element).trigger(t), t.isDefaultPrevented() || this._close()
                }
            }, e.dispose = function() { this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), i.default(this._element).off("click.dismiss.bs.toast"), i.default.removeData(this._element, "bs.toast"), this._element = null, this._config = null }, e._getConfig = function(t) { return t = a({}, ve, i.default(this._element).data(), "object" == typeof t && t ? t : {}), l.typeCheckConfig("toast", t, this.constructor.DefaultType), t }, e._setListeners = function() {
                var t = this;
                i.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function() { return t.hide() }))
            }, e._close = function() {
                var t = this,
                    e = function() { t._element.classList.add("hide"), i.default(t._element).trigger("hidden.bs.toast") };
                if (this._element.classList.remove("show"), this._config.animation) {
                    var n = l.getTransitionDurationFromElement(this._element);
                    i.default(this._element).one(l.TRANSITION_END, e).emulateTransitionEnd(n)
                } else e()
            }, e._clearTimeout = function() { clearTimeout(this._timeout), this._timeout = null }, t._jQueryInterface = function(e) {
                return this.each((function() {
                    var n = i.default(this),
                        o = n.data("bs.toast");
                    if (o || (o = new t(this, "object" == typeof e && e), n.data("bs.toast", o)), "string" == typeof e) {
                        if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e](this)
                    }
                }))
            }, r(t, null, [{ key: "VERSION", get: function() { return "4.5.3" } }, { key: "DefaultType", get: function() { return ge } }, { key: "Default", get: function() { return ve } }]), t
        }();
    i.default.fn.toast = _e._jQueryInterface, i.default.fn.toast.Constructor = _e, i.default.fn.toast.noConflict = function() { return i.default.fn.toast = me, _e._jQueryInterface }, t.Alert = d, t.Button = h, t.Carousel = y, t.Collapse = S, t.Dropdown = Ft, t.Modal = Bt, t.Popover = se, t.Scrollspy = ce, t.Tab = pe, t.Toast = _e, t.Tooltip = te, t.Util = l, Object.defineProperty(t, "__esModule", { value: !0 })
}));
//# sourceMappingURL=bootstrap.bundle.min.js.map

// Jquery easing
(function(factory) { if (typeof define === "function" && define.amd) { define(["jquery"], function($) { return factory($) }) } else if (typeof module === "object" && typeof module.exports === "object") { exports = factory(require("jquery")) } else { factory(jQuery) } })(function($) {
    $.easing.jswing = $.easing.swing;
    var pow = Math.pow,
        sqrt = Math.sqrt,
        sin = Math.sin,
        cos = Math.cos,
        PI = Math.PI,
        c1 = 1.70158,
        c2 = c1 * 1.525,
        c3 = c1 + 1,
        c4 = 2 * PI / 3,
        c5 = 2 * PI / 4.5;

    function bounceOut(x) {
        var n1 = 7.5625,
            d1 = 2.75;
        if (x < 1 / d1) { return n1 * x * x } else if (x < 2 / d1) { return n1 * (x -= 1.5 / d1) * x + .75 } else if (x < 2.5 / d1) { return n1 * (x -= 2.25 / d1) * x + .9375 } else { return n1 * (x -= 2.625 / d1) * x + .984375 }
    }
    $.extend($.easing, { def: "easeOutQuad", swing: function(x) { return $.easing[$.easing.def](x) }, easeInQuad: function(x) { return x * x }, easeOutQuad: function(x) { return 1 - (1 - x) * (1 - x) }, easeInOutQuad: function(x) { return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2 }, easeInCubic: function(x) { return x * x * x }, easeOutCubic: function(x) { return 1 - pow(1 - x, 3) }, easeInOutCubic: function(x) { return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2 }, easeInQuart: function(x) { return x * x * x * x }, easeOutQuart: function(x) { return 1 - pow(1 - x, 4) }, easeInOutQuart: function(x) { return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2 }, easeInQuint: function(x) { return x * x * x * x * x }, easeOutQuint: function(x) { return 1 - pow(1 - x, 5) }, easeInOutQuint: function(x) { return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2 }, easeInSine: function(x) { return 1 - cos(x * PI / 2) }, easeOutSine: function(x) { return sin(x * PI / 2) }, easeInOutSine: function(x) { return -(cos(PI * x) - 1) / 2 }, easeInExpo: function(x) { return x === 0 ? 0 : pow(2, 10 * x - 10) }, easeOutExpo: function(x) { return x === 1 ? 1 : 1 - pow(2, -10 * x) }, easeInOutExpo: function(x) { return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2 }, easeInCirc: function(x) { return 1 - sqrt(1 - pow(x, 2)) }, easeOutCirc: function(x) { return sqrt(1 - pow(x - 1, 2)) }, easeInOutCirc: function(x) { return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2 }, easeInElastic: function(x) { return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4) }, easeOutElastic: function(x) { return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1 }, easeInOutElastic: function(x) { return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1 }, easeInBack: function(x) { return c3 * x * x * x - c1 * x * x }, easeOutBack: function(x) { return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2) }, easeInOutBack: function(x) { return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2 }, easeInBounce: function(x) { return 1 - bounceOut(1 - x) }, easeOutBounce: bounceOut, easeInOutBounce: function(x) { return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2 } })
});

/*!
 * SB Admin 2 v4.1.3 (https://startbootstrap.com/theme/sb-admin-2)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin-2/blob/master/LICENSE)
 */

! function(s) {
    "use strict";
    s("#sidebarToggle, #sidebarToggleTop").on("click", function(e) { s("body").toggleClass("sidebar-toggled"), s(".sidebar").toggleClass("toggled"), s(".sidebar").hasClass("toggled") && s(".sidebar .collapse").collapse("hide") }), s(window).resize(function() { s(window).width() < 768 && s(".sidebar .collapse").collapse("hide"), s(window).width() < 480 && !s(".sidebar").hasClass("toggled") && (s("body").addClass("sidebar-toggled"), s(".sidebar").addClass("toggled"), s(".sidebar .collapse").collapse("hide")) }), s("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function(e) {
        if (768 < s(window).width()) {
            var o = e.originalEvent,
                l = o.wheelDelta || -o.detail;
            this.scrollTop += 30 * (l < 0 ? 1 : -1), e.preventDefault()
        }
    }), s(document).on("scroll", function() { 100 < s(this).scrollTop() ? s(".scroll-to-top").fadeIn() : s(".scroll-to-top").fadeOut() }), s(document).on("click", "a.scroll-to-top", function(e) {
        var o = s(this);
        s("html, body").stop().animate({ scrollTop: s(o.attr("href")).offset().top }, 1e3, "easeInOutExpo"), e.preventDefault()
    })
}(jQuery);

/*!
 DataTables 1.10.22
 ©2008-2020 SpryMedia Ltd - datatables.net/license
*/
(function(h) {
    "function" === typeof define && define.amd ? define(["jquery"], function(E) { return h(E, window, document) }) : "object" === typeof exports ? module.exports = function(E, H) {
        E || (E = window);
        H || (H = "undefined" !== typeof window ? require("jquery") : require("jquery")(E));
        return h(H, E, E.document)
    } : h(jQuery, window, document)
})(function(h, E, H, k) {
    function $(a) {
        var b, c, d = {};
        h.each(a, function(e) {
            if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()),
                d[c] = e, "o" === b[1] && $(a[e])
        });
        a._hungarianMap = d
    }

    function J(a, b, c) {
        a._hungarianMap || $(a);
        var d;
        h.each(b, function(e) { d = a._hungarianMap[e]; if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), J(a[d], b[d], c)) : b[d] = b[e] })
    }

    function Ea(a) {
        var b = n.defaults.oLanguage,
            c = b.sDecimal;
        c && Fa(c);
        if (a) {
            var d = a.sZeroRecords;
            !a.sEmptyTable && (d && "No data available in table" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable");
            !a.sLoadingRecords && (d && "Loading..." === b.sLoadingRecords) && F(a,
                a, "sZeroRecords", "sLoadingRecords");
            a.sInfoThousands && (a.sThousands = a.sInfoThousands);
            (a = a.sDecimal) && c !== a && Fa(a)
        }
    }

    function gb(a) {
        A(a, "ordering", "bSort");
        A(a, "orderMulti", "bSortMulti");
        A(a, "orderClasses", "bSortClasses");
        A(a, "orderCellsTop", "bSortCellsTop");
        A(a, "order", "aaSorting");
        A(a, "orderFixed", "aaSortingFixed");
        A(a, "paging", "bPaginate");
        A(a, "pagingType", "sPaginationType");
        A(a, "pageLength", "iDisplayLength");
        A(a, "searching", "bFilter");
        "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" :
            "");
        "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
        if (a = a.aoSearchCols)
            for (var b = 0, c = a.length; b < c; b++) a[b] && J(n.models.oSearch, a[b])
    }

    function hb(a) {
        A(a, "orderable", "bSortable");
        A(a, "orderData", "aDataSort");
        A(a, "orderSequence", "asSorting");
        A(a, "orderDataType", "sortDataType");
        var b = a.aDataSort;
        "number" === typeof b && !Array.isArray(b) && (a.aDataSort = [b])
    }

    function ib(a) {
        if (!n.__browser) {
            var b = {};
            n.__browser = b;
            var c = h("<div/>").css({
                    position: "fixed",
                    top: 0,
                    left: -1 * h(E).scrollLeft(),
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                }).append(h("<div/>").css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" }).append(h("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"),
                d = c.children(),
                e = d.children();
            b.barWidth = d[0].offsetWidth - d[0].clientWidth;
            b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
            b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
            b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
            c.remove()
        }
        h.extend(a.oBrowser, n.__browser);
        a.oScroll.iBarWidth = n.__browser.barWidth
    }

    function jb(a, b, c, d, e, f) {
        var g, j = !1;
        c !== k && (g = c, j = !0);
        for (; d !== e;) a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f);
        return g
    }

    function Ga(a, b) {
        var c = n.defaults.column,
            d = a.aoColumns.length,
            c = h.extend({}, n.models.oColumn, c, { nTh: b ? b : H.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.mData : d, idx: d });
        a.aoColumns.push(c);
        c = a.aoPreSearchCols;
        c[d] = h.extend({}, n.models.oSearch, c[d]);
        la(a, d, h(b).data())
    }

    function la(a, b, c) {
        var b = a.aoColumns[b],
            d = a.oClasses,
            e = h(b.nTh);
        if (!b.sWidthOrig) {
            b.sWidthOrig = e.attr("width") || null;
            var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            f && (b.sWidthOrig = f[1])
        }
        c !== k && null !== c && (hb(c), J(n.defaults.column, c, !0), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort"));
        var g = b.mData,
            j = S(g),
            i =
            b.mRender ? S(b.mRender) : null,
            c = function(a) { return "string" === typeof a && -1 !== a.indexOf("@") };
        b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
        b._setter = null;
        b.fnGetData = function(a, b, c) { var d = j(a, b, k, c); return i && b ? i(d, b, a, c) : d };
        b.fnSetData = function(a, b, c) { return N(g)(a, b, c) };
        "number" !== typeof g && (a._rowReadObject = !0);
        a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
        a = -1 !== h.inArray("asc", b.asSorting);
        c = -1 !== h.inArray("desc", b.asSorting);
        !b.bSortable || !a && !c ? (b.sSortingClass =
            d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
    }

    function aa(a) {
        if (!1 !== a.oFeatures.bAutoWidth) {
            var b = a.aoColumns;
            Ha(a);
            for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth
        }
        b = a.oScroll;
        ("" !== b.sY || "" !== b.sX) && ma(a);
        t(a, null, "column-sizing", [a])
    }

    function ba(a, b) {
        var c = na(a, "bVisible");
        return "number" === typeof c[b] ? c[b] : null
    }

    function ca(a, b) {
        var c = na(a, "bVisible"),
            c = h.inArray(b, c);
        return -1 !== c ? c : null
    }

    function W(a) {
        var b = 0;
        h.each(a.aoColumns, function(a, d) { d.bVisible && "none" !== h(d.nTh).css("display") && b++ });
        return b
    }

    function na(a, b) {
        var c = [];
        h.map(a.aoColumns, function(a, e) { a[b] && c.push(e) });
        return c
    }

    function Ia(a) {
        var b = a.aoColumns,
            c = a.aoData,
            d = n.ext.type.detect,
            e, f, g, j, i, h, l, q, u;
        e = 0;
        for (f = b.length; e < f; e++)
            if (l = b[e], u = [], !l.sType && l._sManualType) l.sType = l._sManualType;
            else if (!l.sType) {
            g =
                0;
            for (j = d.length; g < j; g++) {
                i = 0;
                for (h = c.length; i < h; i++) {
                    u[i] === k && (u[i] = B(a, i, e, "type"));
                    q = d[g](u[i], a);
                    if (!q && g !== d.length - 1) break;
                    if ("html" === q) break
                }
                if (q) { l.sType = q; break }
            }
            l.sType || (l.sType = "string")
        }
    }

    function kb(a, b, c, d) {
        var e, f, g, j, i, m, l = a.aoColumns;
        if (b)
            for (e = b.length - 1; 0 <= e; e--) {
                m = b[e];
                var q = m.targets !== k ? m.targets : m.aTargets;
                Array.isArray(q) || (q = [q]);
                f = 0;
                for (g = q.length; f < g; f++)
                    if ("number" === typeof q[f] && 0 <= q[f]) {
                        for (; l.length <= q[f];) Ga(a);
                        d(q[f], m)
                    } else if ("number" === typeof q[f] && 0 > q[f]) d(l.length +
                    q[f], m);
                else if ("string" === typeof q[f]) { j = 0; for (i = l.length; j < i; j++)("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) && d(j, m) }
            }
        if (c) { e = 0; for (a = c.length; e < a; e++) d(e, c[e]) }
    }

    function O(a, b, c, d) {
        var e = a.aoData.length,
            f = h.extend(!0, {}, n.models.oRow, { src: c ? "dom" : "data", idx: e });
        f._aData = b;
        a.aoData.push(f);
        for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++) g[j].sType = null;
        a.aiDisplayMaster.push(e);
        b = a.rowIdFn(b);
        b !== k && (a.aIds[b] = f);
        (c || !a.oFeatures.bDeferRender) && Ja(a, e, c, d);
        return e
    }

    function oa(a, b) {
        var c;
        b instanceof
        h || (b = h(b));
        return b.map(function(b, e) { c = Ka(a, e); return O(a, c.data, e, c.cells) })
    }

    function B(a, b, c, d) {
        var e = a.iDraw,
            f = a.aoColumns[c],
            g = a.aoData[b]._aData,
            j = f.sDefaultContent,
            i = f.fnGetData(g, d, { settings: a, row: b, col: c });
        if (i === k) return a.iDrawError != e && null === j && (K(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), j;
        if ((i === g || null === i) && null !== j && d !== k) i = j;
        else if ("function" === typeof i) return i.call(g);
        return null ===
            i && "display" == d ? "" : i
    }

    function lb(a, b, c, d) { a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, { settings: a, row: b, col: c }) }

    function La(a) { return h.map(a.match(/(\\.|[^\.])+/g) || [""], function(a) { return a.replace(/\\\./g, ".") }) }

    function S(a) {
        if (h.isPlainObject(a)) {
            var b = {};
            h.each(a, function(a, c) { c && (b[a] = S(c)) });
            return function(a, c, f, g) { var j = b[c] || b._; return j !== k ? j(a, c, f, g) : a }
        }
        if (null === a) return function(a) { return a };
        if ("function" === typeof a) return function(b, c, f, g) { return a(b, c, f, g) };
        if ("string" === typeof a &&
            (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var c = function(a, b, f) {
                var g, j;
                if ("" !== f) {
                    j = La(f);
                    for (var i = 0, h = j.length; i < h; i++) {
                        f = j[i].match(da);
                        g = j[i].match(X);
                        if (f) {
                            j[i] = j[i].replace(da, "");
                            "" !== j[i] && (a = a[j[i]]);
                            g = [];
                            j.splice(0, i + 1);
                            j = j.join(".");
                            if (Array.isArray(a)) { i = 0; for (h = a.length; i < h; i++) g.push(c(a[i], b, j)) }
                            a = f[0].substring(1, f[0].length - 1);
                            a = "" === a ? g : g.join(a);
                            break
                        } else if (g) {
                            j[i] = j[i].replace(X, "");
                            a = a[j[i]]();
                            continue
                        }
                        if (null === a || a[j[i]] === k) return k;
                        a = a[j[i]]
                    }
                }
                return a
            };
            return function(b, e) { return c(b, e, a) }
        }
        return function(b) { return b[a] }
    }

    function N(a) {
        if (h.isPlainObject(a)) return N(a._);
        if (null === a) return function() {};
        if ("function" === typeof a) return function(b, d, e) { a(b, "set", d, e) };
        if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var b = function(a, d, e) {
                var e = La(e),
                    f;
                f = e[e.length - 1];
                for (var g, j, i = 0, h = e.length - 1; i < h; i++) {
                    if ("__proto__" === e[i]) throw Error("Cannot set prototype values");
                    g = e[i].match(da);
                    j = e[i].match(X);
                    if (g) {
                        e[i] =
                            e[i].replace(da, "");
                        a[e[i]] = [];
                        f = e.slice();
                        f.splice(0, i + 1);
                        g = f.join(".");
                        if (Array.isArray(d)) { j = 0; for (h = d.length; j < h; j++) f = {}, b(f, d[j], g), a[e[i]].push(f) } else a[e[i]] = d;
                        return
                    }
                    j && (e[i] = e[i].replace(X, ""), a = a[e[i]](d));
                    if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {};
                    a = a[e[i]]
                }
                if (f.match(X)) a[f.replace(X, "")](d);
                else a[f.replace(da, "")] = d
            };
            return function(c, d) { return b(c, d, a) }
        }
        return function(b, d) { b[a] = d }
    }

    function Ma(a) { return C(a.aoData, "_aData") }

    function pa(a) {
        a.aoData.length = 0;
        a.aiDisplayMaster.length =
            0;
        a.aiDisplay.length = 0;
        a.aIds = {}
    }

    function qa(a, b, c) { for (var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e]--; - 1 != d && c === k && a.splice(d, 1) }

    function ea(a, b, c, d) {
        var e = a.aoData[b],
            f, g = function(c, d) {
                for (; c.childNodes.length;) c.removeChild(c.firstChild);
                c.innerHTML = B(a, b, d, "display")
            };
        if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ka(a, e, d, d === k ? k : e._aData).data;
        else {
            var j = e.anCells;
            if (j)
                if (d !== k) g(j[d], d);
                else { c = 0; for (f = j.length; c < f; c++) g(j[c], c) }
        }
        e._aSortData = null;
        e._aFilterData = null;
        g =
            a.aoColumns;
        if (d !== k) g[d].sType = null;
        else {
            c = 0;
            for (f = g.length; c < f; c++) g[c].sType = null;
            Na(a, e)
        }
    }

    function Ka(a, b, c, d) {
        var e = [],
            f = b.firstChild,
            g, j, i = 0,
            h, l = a.aoColumns,
            q = a._rowReadObject,
            d = d !== k ? d : q ? {} : [],
            u = function(a, b) { if ("string" === typeof a) { var c = a.indexOf("@"); - 1 !== c && (c = a.substring(c + 1), N(a)(d, b.getAttribute(c))) } },
            G = function(a) {
                if (c === k || c === i) j = l[i], h = a.innerHTML.trim(), j && j._bAttrSrc ? (N(j.mData._)(d, h), u(j.mData.sort, a), u(j.mData.type, a), u(j.mData.filter, a)) : q ? (j._setter || (j._setter = N(j.mData)),
                    j._setter(d, h)) : d[i] = h;
                i++
            };
        if (f)
            for (; f;) {
                g = f.nodeName.toUpperCase();
                if ("TD" == g || "TH" == g) G(f), e.push(f);
                f = f.nextSibling
            } else {
                e = b.anCells;
                f = 0;
                for (g = e.length; f < g; f++) G(e[f])
            }
        if (b = b.firstChild ? b : b.nTr)(b = b.getAttribute("id")) && N(a.rowId)(d, b);
        return { data: d, cells: e }
    }

    function Ja(a, b, c, d) {
        var e = a.aoData[b],
            f = e._aData,
            g = [],
            j, i, m, l, q, k;
        if (null === e.nTr) {
            j = c || H.createElement("tr");
            e.nTr = j;
            e.anCells = g;
            j._DT_RowIndex = b;
            Na(a, e);
            l = 0;
            for (q = a.aoColumns.length; l < q; l++) {
                m = a.aoColumns[l];
                i = (k = c ? !1 : !0) ? H.createElement(m.sCellType) :
                    d[l];
                i._DT_CellIndex = { row: b, column: l };
                g.push(i);
                if (k || (!c || m.mRender || m.mData !== l) && (!h.isPlainObject(m.mData) || m.mData._ !== l + ".display")) i.innerHTML = B(a, b, l, "display");
                m.sClass && (i.className += " " + m.sClass);
                m.bVisible && !c ? j.appendChild(i) : !m.bVisible && c && i.parentNode.removeChild(i);
                m.fnCreatedCell && m.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l)
            }
            t(a, "aoRowCreatedCallback", null, [j, f, b, g])
        }
        e.nTr.setAttribute("role", "row")
    }

    function Na(a, b) {
        var c = b.nTr,
            d = b._aData;
        if (c) {
            var e = a.rowIdFn(d);
            e && (c.id =
                e);
            d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? ra(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
            d.DT_RowAttr && h(c).attr(d.DT_RowAttr);
            d.DT_RowData && h(c).data(d.DT_RowData)
        }
    }

    function mb(a) {
        var b, c, d, e, f, g = a.nTHead,
            j = a.nTFoot,
            i = 0 === h("th, td", g).length,
            m = a.oClasses,
            l = a.aoColumns;
        i && (e = h("<tr/>").appendTo(g));
        b = 0;
        for (c = l.length; b < c; b++) f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable &&
            (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Oa(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Pa(a, "header")(a, d, f, m);
        i && fa(a.aoHeader, g);
        h(g).children("tr").attr("role", "row");
        h(g).children("tr").children("th, td").addClass(m.sHeaderTH);
        h(j).children("tr").children("th, td").addClass(m.sFooterTH);
        if (null !== j) {
            a = a.aoFooter[0];
            b = 0;
            for (c = a.length; b < c; b++) f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass)
        }
    }

    function ga(a, b, c) {
        var d, e, f, g = [],
            j = [],
            i = a.aoColumns.length,
            m;
        if (b) {
            c === k && (c = !1);
            d = 0;
            for (e = b.length; d < e; d++) {
                g[d] = b[d].slice();
                g[d].nTr = b[d].nTr;
                for (f = i - 1; 0 <= f; f--) !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
                j.push([])
            }
            d = 0;
            for (e = g.length; d < e; d++) {
                if (a = g[d].nTr)
                    for (; f = a.firstChild;) a.removeChild(f);
                f = 0;
                for (b = g[d].length; f < b; f++)
                    if (m = i = 1, j[d][f] === k) {
                        a.appendChild(g[d][f].cell);
                        for (j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;) j[d + i][f] = 1, i++;
                        for (; g[d][f + m] !== k && g[d][f].cell == g[d][f + m].cell;) {
                            for (c = 0; c < i; c++) j[d + c][f + m] = 1;
                            m++
                        }
                        h(g[d][f].cell).attr("rowspan",
                            i).attr("colspan", m)
                    }
            }
        }
    }

    function P(a) {
        var b = t(a, "aoPreDrawCallback", "preDraw", [a]);
        if (-1 !== h.inArray(!1, b)) D(a, !1);
        else {
            var b = [],
                c = 0,
                d = a.asStripeClasses,
                e = d.length,
                f = a.oLanguage,
                g = a.iInitDisplayStart,
                j = "ssp" == y(a),
                i = a.aiDisplay;
            a.bDrawing = !0;
            g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
            var g = a._iDisplayStart,
                m = a.fnDisplayEnd();
            if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, D(a, !1);
            else if (j) { if (!a.bDestroying && !nb(a)) return } else a.iDraw++;
            if (0 !== i.length) {
                f =
                    j ? a.aoData.length : m;
                for (j = j ? 0 : g; j < f; j++) {
                    var l = i[j],
                        q = a.aoData[l];
                    null === q.nTr && Ja(a, l);
                    var u = q.nTr;
                    if (0 !== e) {
                        var G = d[c % e];
                        q._sRowStripe != G && (h(u).removeClass(q._sRowStripe).addClass(G), q._sRowStripe = G)
                    }
                    t(a, "aoRowCallback", null, [u, q._aData, c, j, l]);
                    b.push(u);
                    c++
                }
            } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", { "class": e ? d[0] : "" }).append(h("<td />", { valign: "top", colSpan: W(a), "class": a.oClasses.sRowEmpty }).html(c))[0];
            t(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ma(a), g, m, i]);
            t(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ma(a), g, m, i]);
            d = h(a.nTBody);
            d.children().detach();
            d.append(h(b));
            t(a, "aoDrawCallback", "draw", [a]);
            a.bSorted = !1;
            a.bFiltered = !1;
            a.bDrawing = !1
        }
    }

    function T(a, b) {
        var c = a.oFeatures,
            d = c.bFilter;
        c.bSort && ob(a);
        d ? ha(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
        !0 !== b && (a._iDisplayStart = 0);
        a._drawHold = b;
        P(a);
        a._drawHold = !1
    }

    function pb(a) {
        var b = a.oClasses,
            c = h(a.nTable),
            c = h("<div/>").insertBefore(c),
            d = a.oFeatures,
            e = h("<div/>", { id: a.sTableId + "_wrapper", "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter) });
        a.nHolding = c[0];
        a.nTableWrapper = e[0];
        a.nTableReinsertBefore = a.nTable.nextSibling;
        for (var f = a.sDom.split(""), g, j, i, m, l, q, k = 0; k < f.length; k++) {
            g = null;
            j = f[k];
            if ("<" == j) {
                i = h("<div/>")[0];
                m = f[k + 1];
                if ("'" == m || '"' == m) {
                    l = "";
                    for (q = 2; f[k + q] != m;) l += f[k + q], q++;
                    "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); - 1 != l.indexOf(".") ? (m = l.split("."), i.id = m[0].substr(1, m[0].length -
                        1), i.className = m[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l;
                    k += q
                }
                e.append(i);
                e = h(i)
            } else if (">" == j) e = e.parent();
            else if ("l" == j && d.bPaginate && d.bLengthChange) g = qb(a);
            else if ("f" == j && d.bFilter) g = rb(a);
            else if ("r" == j && d.bProcessing) g = sb(a);
            else if ("t" == j) g = tb(a);
            else if ("i" == j && d.bInfo) g = ub(a);
            else if ("p" == j && d.bPaginate) g = vb(a);
            else if (0 !== n.ext.feature.length) {
                i = n.ext.feature;
                q = 0;
                for (m = i.length; q < m; q++)
                    if (j == i[q].cFeature) { g = i[q].fnInit(a); break }
            }
            g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g))
        }
        c.replaceWith(e);
        a.nHolding = null
    }

    function fa(a, b) {
        var c = h(b).children("tr"),
            d, e, f, g, j, i, m, l, q, k;
        a.splice(0, a.length);
        f = 0;
        for (i = c.length; f < i; f++) a.push([]);
        f = 0;
        for (i = c.length; f < i; f++) {
            d = c[f];
            for (e = d.firstChild; e;) {
                if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
                    l = 1 * e.getAttribute("colspan");
                    q = 1 * e.getAttribute("rowspan");
                    l = !l || 0 === l || 1 === l ? 1 : l;
                    q = !q || 0 === q || 1 === q ? 1 : q;
                    g = 0;
                    for (j = a[f]; j[g];) g++;
                    m = g;
                    k = 1 === l ? !0 : !1;
                    for (j = 0; j < l; j++)
                        for (g = 0; g < q; g++) a[f + g][m + j] = { cell: e, unique: k }, a[f + g].nTr = d
                }
                e = e.nextSibling
            }
        }
    }

    function sa(a, b, c) {
        var d = [];
        c || (c = a.aoHeader, b && (c = [], fa(c, b)));
        for (var b = 0, e = c.length; b < e; b++)
            for (var f = 0, g = c[b].length; f < g; f++)
                if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
        return d
    }

    function ta(a, b, c) {
        t(a, "aoServerParams", "serverParams", [b]);
        if (b && Array.isArray(b)) {
            var d = {},
                e = /(.*?)\[\]$/;
            h.each(b, function(a, b) {
                var c = b.name.match(e);
                c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value
            });
            b = d
        }
        var f, g = a.ajax,
            j = a.oInstance,
            i = function(b) {
                t(a, null, "xhr", [a, b, a.jqXHR]);
                c(b)
            };
        if (h.isPlainObject(g) && g.data) {
            f = g.data;
            var m = "function" === typeof f ? f(b, a) : f,
                b = "function" === typeof f && m ? m : h.extend(!0, b, m);
            delete g.data
        }
        m = {
            data: b,
            success: function(b) {
                var c = b.error || b.sError;
                c && K(a, 0, c);
                a.json = b;
                i(b)
            },
            dataType: "json",
            cache: !1,
            type: a.sServerMethod,
            error: function(b, c) {
                var d = t(a, null, "xhr", [a, null, a.jqXHR]); - 1 === h.inArray(!0, d) && ("parsererror" == c ? K(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && K(a, 0, "Ajax error", 7));
                D(a, !1)
            }
        };
        a.oAjaxData =
            b;
        t(a, null, "preXhr", [a, b]);
        a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function(a, b) { return { name: b, value: a } }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(m, { url: g || a.sAjaxSource })) : "function" === typeof g ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(m, g)), g.data = f)
    }

    function nb(a) { return a.bAjaxDataGet ? (a.iDraw++, D(a, !0), ta(a, wb(a), function(b) { xb(a, b) }), !1) : !0 }

    function wb(a) {
        var b = a.aoColumns,
            c = b.length,
            d = a.oFeatures,
            e = a.oPreviousSearch,
            f = a.aoPreSearchCols,
            g, j = [],
            i, m, l, k = Y(a);
        g = a._iDisplayStart;
        i = !1 !== d.bPaginate ? a._iDisplayLength : -1;
        var u = function(a, b) { j.push({ name: a, value: b }) };
        u("sEcho", a.iDraw);
        u("iColumns", c);
        u("sColumns", C(b, "sName").join(","));
        u("iDisplayStart", g);
        u("iDisplayLength", i);
        var G = { draw: a.iDraw, columns: [], order: [], start: g, length: i, search: { value: e.sSearch, regex: e.bRegex } };
        for (g = 0; g < c; g++) m = b[g], l = f[g], i = "function" == typeof m.mData ? "function" : m.mData, G.columns.push({
            data: i,
            name: m.sName,
            searchable: m.bSearchable,
            orderable: m.bSortable,
            search: {
                value: l.sSearch,
                regex: l.bRegex
            }
        }), u("mDataProp_" + g, i), d.bFilter && (u("sSearch_" + g, l.sSearch), u("bRegex_" + g, l.bRegex), u("bSearchable_" + g, m.bSearchable)), d.bSort && u("bSortable_" + g, m.bSortable);
        d.bFilter && (u("sSearch", e.sSearch), u("bRegex", e.bRegex));
        d.bSort && (h.each(k, function(a, b) {
            G.order.push({ column: b.col, dir: b.dir });
            u("iSortCol_" + a, b.col);
            u("sSortDir_" + a, b.dir)
        }), u("iSortingCols", k.length));
        b = n.ext.legacy.ajax;
        return null === b ? a.sAjaxSource ? j : G : b ? j : G
    }

    function xb(a, b) {
        var c = ua(a, b),
            d = b.sEcho !== k ? b.sEcho : b.draw,
            e =
            b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
            f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered;
        if (d !== k) {
            if (1 * d < a.iDraw) return;
            a.iDraw = 1 * d
        }
        pa(a);
        a._iRecordsTotal = parseInt(e, 10);
        a._iRecordsDisplay = parseInt(f, 10);
        d = 0;
        for (e = c.length; d < e; d++) O(a, c[d]);
        a.aiDisplay = a.aiDisplayMaster.slice();
        a.bAjaxDataGet = !1;
        P(a);
        a._bInitComplete || va(a, b);
        a.bAjaxDataGet = !0;
        D(a, !1)
    }

    function ua(a, b) {
        var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp;
        return "data" === c ?
            b.aaData || b[c] : "" !== c ? S(c)(b) : b
    }

    function rb(a) {
        var b = a.oClasses,
            c = a.sTableId,
            d = a.oLanguage,
            e = a.oPreviousSearch,
            f = a.aanFeatures,
            g = '<input type="search" class="' + b.sFilterInput + '"/>',
            j = d.sSearch,
            j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g,
            b = h("<div/>", { id: !f.f ? c + "_filter" : null, "class": b.sFilter }).append(h("<label/>").append(j)),
            i = function() {
                var b = !this.value ? "" : this.value;
                b != e.sSearch && (ha(a, { sSearch: b, bRegex: e.bRegex, bSmart: e.bSmart, bCaseInsensitive: e.bCaseInsensitive }), a._iDisplayStart = 0, P(a))
            },
            f = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0,
            m = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", f ? Qa(i, f) : i).on("mouseup", function() { setTimeout(function() { i.call(m[0]) }, 10) }).on("keypress.DT", function(a) { if (13 == a.keyCode) return !1 }).attr("aria-controls", c);
        h(a.nTable).on("search.dt.DT", function(b, c) { if (a === c) try { m[0] !== H.activeElement && m.val(e.sSearch) } catch (d) {} });
        return b[0]
    }

    function ha(a, b, c) {
        var d = a.oPreviousSearch,
            e = a.aoPreSearchCols,
            f = function(a) {
                d.sSearch = a.sSearch;
                d.bRegex = a.bRegex;
                d.bSmart = a.bSmart;
                d.bCaseInsensitive = a.bCaseInsensitive
            };
        Ia(a);
        if ("ssp" != y(a)) {
            yb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
            f(b);
            for (b = 0; b < e.length; b++) zb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
            Ab(a)
        } else f(b);
        a.bFiltered = !0;
        t(a, null, "search", [a])
    }

    function Ab(a) {
        for (var b = n.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f <
            g; f++) {
            for (var j = [], i = 0, m = c.length; i < m; i++) e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
            c.length = 0;
            h.merge(c, j)
        }
    }

    function zb(a, b, c, d, e, f) {
        if ("" !== b) {
            for (var g = [], j = a.aiDisplay, d = Ra(b, d, e, f), e = 0; e < j.length; e++) b = a.aoData[j[e]]._aFilterData[c], d.test(b) && g.push(j[e]);
            a.aiDisplay = g
        }
    }

    function yb(a, b, c, d, e, f) {
        var e = Ra(b, d, e, f),
            g = a.oPreviousSearch.sSearch,
            j = a.aiDisplayMaster,
            i, f = [];
        0 !== n.ext.search.length && (c = !0);
        i = Bb(a);
        if (0 >= b.length) a.aiDisplay = j.slice();
        else {
            if (i || c || d || g.length >
                b.length || 0 !== b.indexOf(g) || a.bSorted) a.aiDisplay = j.slice();
            b = a.aiDisplay;
            for (c = 0; c < b.length; c++) e.test(a.aoData[b[c]]._sFilterRow) && f.push(b[c]);
            a.aiDisplay = f
        }
    }

    function Ra(a, b, c, d) {
        a = b ? a : Sa(a);
        c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function(a) {
            if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/),
                a = b ? b[1] : a;
            return a.replace('"', "")
        }).join(")(?=.*?") + ").*$");
        return RegExp(a, d ? "i" : "")
    }

    function Bb(a) {
        var b = a.aoColumns,
            c, d, e, f, g, j, i, h, l = n.ext.type.search;
        c = !1;
        d = 0;
        for (f = a.aoData.length; d < f; d++)
            if (h =
                a.aoData[d], !h._aFilterData) {
                j = [];
                e = 0;
                for (g = b.length; e < g; e++) c = b[e], c.bSearchable ? (i = B(a, d, e, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (wa.innerHTML = i, i = Zb ? wa.textContent : wa.innerText), i.replace && (i = i.replace(/[\r\n\u2028]/g, "")), j.push(i);
                h._aFilterData = j;
                h._sFilterRow = j.join("  ");
                c = !0
            }
        return c
    }

    function Cb(a) { return { search: a.sSearch, smart: a.bSmart, regex: a.bRegex, caseInsensitive: a.bCaseInsensitive } }

    function Db(a) { return { sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive } }

    function ub(a) {
        var b = a.sTableId,
            c = a.aanFeatures.i,
            d = h("<div/>", { "class": a.oClasses.sInfo, id: !c ? b + "_info" : null });
        c || (a.aoDrawCallback.push({ fn: Eb, sName: "information" }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info"));
        return d[0]
    }

    function Eb(a) {
        var b = a.aanFeatures.i;
        if (0 !== b.length) {
            var c = a.oLanguage,
                d = a._iDisplayStart + 1,
                e = a.fnDisplayEnd(),
                f = a.fnRecordsTotal(),
                g = a.fnRecordsDisplay(),
                j = g ? c.sInfo : c.sInfoEmpty;
            g !== f && (j += " " + c.sInfoFiltered);
            j += c.sInfoPostFix;
            j = Fb(a, j);
            c = c.fnInfoCallback;
            null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j));
            h(b).html(j)
        }
    }

    function Fb(a, b) {
        var c = a.fnFormatNumber,
            d = a._iDisplayStart + 1,
            e = a._iDisplayLength,
            f = a.fnRecordsDisplay(),
            g = -1 === e;
        return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d /
            e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)))
    }

    function ia(a) {
        var b, c, d = a.iInitDisplayStart,
            e = a.aoColumns,
            f;
        c = a.oFeatures;
        var g = a.bDeferLoading;
        if (a.bInitialised) {
            pb(a);
            mb(a);
            ga(a, a.aoHeader);
            ga(a, a.aoFooter);
            D(a, !0);
            c.bAutoWidth && Ha(a);
            b = 0;
            for (c = e.length; b < c; b++) f = e[b], f.sWidth && (f.nTh.style.width = w(f.sWidth));
            t(a, null, "preInit", [a]);
            T(a);
            e = y(a);
            if ("ssp" != e || g) "ajax" == e ? ta(a, [], function(c) {
                var f = ua(a, c);
                for (b = 0; b < f.length; b++) O(a, f[b]);
                a.iInitDisplayStart = d;
                T(a);
                D(a, !1);
                va(a, c)
            }, a) : (D(a, !1),
                va(a))
        } else setTimeout(function() { ia(a) }, 200)
    }

    function va(a, b) {
        a._bInitComplete = !0;
        (b || a.oInit.aaData) && aa(a);
        t(a, null, "plugin-init", [a, b]);
        t(a, "aoInitComplete", "init", [a, b])
    }

    function Ta(a, b) {
        var c = parseInt(b, 10);
        a._iDisplayLength = c;
        Ua(a);
        t(a, null, "length", [a, c])
    }

    function qb(a) {
        for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = Array.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", { name: c + "_length", "aria-controls": c, "class": b.sLengthSelect }), g = 0, j = f.length; g < j; g++) e[0][g] = new Option("number" ===
            typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], f[g]);
        var i = h("<div><label/></div>").addClass(b.sLength);
        a.aanFeatures.l || (i[0].id = c + "_length");
        i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
        h("select", i).val(a._iDisplayLength).on("change.DT", function() {
            Ta(a, h(this).val());
            P(a)
        });
        h(a.nTable).on("length.dt.DT", function(b, c, d) { a === c && h("select", i).val(d) });
        return i[0]
    }

    function vb(a) {
        var b = a.sPaginationType,
            c = n.ext.pager[b],
            d = "function" === typeof c,
            e = function(a) { P(a) },
            b = h("<div/>").addClass(a.oClasses.sPaging +
                b)[0],
            f = a.aanFeatures;
        d || c.fnInit(a, b, e);
        f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
            fn: function(a) {
                if (d) {
                    var b = a._iDisplayStart,
                        i = a._iDisplayLength,
                        h = a.fnRecordsDisplay(),
                        l = -1 === i,
                        b = l ? 0 : Math.ceil(b / i),
                        i = l ? 1 : Math.ceil(h / i),
                        h = c(b, i),
                        k, l = 0;
                    for (k = f.p.length; l < k; l++) Pa(a, "pageButton")(a, f.p[l], l, h, b, i)
                } else c.fnUpdate(a, e)
            },
            sName: "pagination"
        }));
        return b
    }

    function Va(a, b, c) {
        var d = a._iDisplayStart,
            e = a._iDisplayLength,
            f = a.fnRecordsDisplay();
        0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f &&
            (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : K(a, 0, "Unknown paging action: " + b, 5);
        b = a._iDisplayStart !== d;
        a._iDisplayStart = d;
        b && (t(a, null, "page", [a]), c && P(a));
        return b
    }

    function sb(a) { return h("<div/>", { id: !a.aanFeatures.r ? a.sTableId + "_processing" : null, "class": a.oClasses.sProcessing }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0] }

    function D(a, b) {
        a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none");
        t(a, null, "processing", [a, b])
    }

    function tb(a) {
        var b = h(a.nTable);
        b.attr("role", "grid");
        var c = a.oScroll;
        if ("" === c.sX && "" === c.sY) return a.nTable;
        var d = c.sX,
            e = c.sY,
            f = a.oClasses,
            g = b.children("caption"),
            j = g.length ? g[0]._captionSide : null,
            i = h(b[0].cloneNode(!1)),
            m = h(b[0].cloneNode(!1)),
            l = b.children("tfoot");
        l.length || (l = null);
        i = h("<div/>", { "class": f.sScrollWrapper }).append(h("<div/>", { "class": f.sScrollHead }).css({ overflow: "hidden", position: "relative", border: 0, width: d ? !d ? null : w(d) : "100%" }).append(h("<div/>", { "class": f.sScrollHeadInner }).css({ "box-sizing": "content-box", width: c.sXInner || "100%" }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", { "class": f.sScrollBody }).css({ position: "relative", overflow: "auto", width: !d ? null : w(d) }).append(b));
        l && i.append(h("<div/>", { "class": f.sScrollFoot }).css({ overflow: "hidden", border: 0, width: d ? !d ? null : w(d) : "100%" }).append(h("<div/>", { "class": f.sScrollFootInner }).append(m.removeAttr("id").css("margin-left",
            0).append("bottom" === j ? g : null).append(b.children("tfoot")))));
        var b = i.children(),
            k = b[0],
            f = b[1],
            u = l ? b[2] : null;
        if (d) h(f).on("scroll.DT", function() {
            var a = this.scrollLeft;
            k.scrollLeft = a;
            l && (u.scrollLeft = a)
        });
        h(f).css("max-height", e);
        c.bCollapse || h(f).css("height", e);
        a.nScrollHead = k;
        a.nScrollBody = f;
        a.nScrollFoot = u;
        a.aoDrawCallback.push({ fn: ma, sName: "scrolling" });
        return i[0]
    }

    function ma(a) {
        var b = a.oScroll,
            c = b.sX,
            d = b.sXInner,
            e = b.sY,
            b = b.iBarWidth,
            f = h(a.nScrollHead),
            g = f[0].style,
            j = f.children("div"),
            i = j[0].style,
            m = j.children("table"),
            j = a.nScrollBody,
            l = h(j),
            q = j.style,
            u = h(a.nScrollFoot).children("div"),
            n = u.children("table"),
            o = h(a.nTHead),
            p = h(a.nTable),
            r = p[0],
            t = r.style,
            s = a.nTFoot ? h(a.nTFoot) : null,
            U = a.oBrowser,
            V = U.bScrollOversize,
            $b = C(a.aoColumns, "nTh"),
            Q, L, R, xa, v = [],
            x = [],
            y = [],
            z = [],
            A, B = function(a) {
                a = a.style;
                a.paddingTop = "0";
                a.paddingBottom = "0";
                a.borderTopWidth = "0";
                a.borderBottomWidth = "0";
                a.height = 0
            };
        L = j.scrollHeight > j.clientHeight;
        if (a.scrollBarVis !== L && a.scrollBarVis !== k) a.scrollBarVis = L, aa(a);
        else {
            a.scrollBarVis =
                L;
            p.children("thead, tfoot").remove();
            s && (R = s.clone().prependTo(p), Q = s.find("tr"), R = R.find("tr"));
            xa = o.clone().prependTo(p);
            o = o.find("tr");
            L = xa.find("tr");
            xa.find("th, td").removeAttr("tabindex");
            c || (q.width = "100%", f[0].style.width = "100%");
            h.each(sa(a, xa), function(b, c) {
                A = ba(a, b);
                c.style.width = a.aoColumns[A].sWidth
            });
            s && I(function(a) { a.style.width = "" }, R);
            f = p.outerWidth();
            if ("" === c) {
                t.width = "100%";
                if (V && (p.find("tbody").height() > j.offsetHeight || "scroll" == l.css("overflow-y"))) t.width = w(p.outerWidth() -
                    b);
                f = p.outerWidth()
            } else "" !== d && (t.width = w(d), f = p.outerWidth());
            I(B, L);
            I(function(a) {
                y.push(a.innerHTML);
                v.push(w(h(a).css("width")))
            }, L);
            I(function(a, b) { if (h.inArray(a, $b) !== -1) a.style.width = v[b] }, o);
            h(L).height(0);
            s && (I(B, R), I(function(a) {
                z.push(a.innerHTML);
                x.push(w(h(a).css("width")))
            }, R), I(function(a, b) { a.style.width = x[b] }, Q), h(R).height(0));
            I(function(a, b) {
                a.innerHTML = '<div class="dataTables_sizing">' + y[b] + "</div>";
                a.childNodes[0].style.height = "0";
                a.childNodes[0].style.overflow = "hidden";
                a.style.width =
                    v[b]
            }, L);
            s && I(function(a, b) {
                a.innerHTML = '<div class="dataTables_sizing">' + z[b] + "</div>";
                a.childNodes[0].style.height = "0";
                a.childNodes[0].style.overflow = "hidden";
                a.style.width = x[b]
            }, R);
            if (p.outerWidth() < f) {
                Q = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f;
                if (V && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))) t.width = w(Q - b);
                ("" === c || "" !== d) && K(a, 1, "Possible column misalignment", 6)
            } else Q = "100%";
            q.width = w(Q);
            g.width = w(Q);
            s && (a.nScrollFoot.style.width = w(Q));
            !e && V && (q.height =
                w(r.offsetHeight + b));
            c = p.outerWidth();
            m[0].style.width = w(c);
            i.width = w(c);
            d = p.height() > j.clientHeight || "scroll" == l.css("overflow-y");
            e = "padding" + (U.bScrollbarLeft ? "Left" : "Right");
            i[e] = d ? b + "px" : "0px";
            s && (n[0].style.width = w(c), u[0].style.width = w(c), u[0].style[e] = d ? b + "px" : "0px");
            p.children("colgroup").insertBefore(p.children("thead"));
            l.trigger("scroll");
            if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0
        }
    }

    function I(a, b, c) {
        for (var d = 0, e = 0, f = b.length, g, j; e < f;) {
            g = b[e].firstChild;
            for (j = c ? c[e].firstChild :
                null; g;) 1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null;
            e++
        }
    }

    function Ha(a) {
        var b = a.nTable,
            c = a.aoColumns,
            d = a.oScroll,
            e = d.sY,
            f = d.sX,
            g = d.sXInner,
            j = c.length,
            i = na(a, "bVisible"),
            m = h("th", a.nTHead),
            l = b.getAttribute("width"),
            k = b.parentNode,
            u = !1,
            n, o, p = a.oBrowser,
            d = p.bScrollOversize;
        (n = b.style.width) && -1 !== n.indexOf("%") && (l = n);
        for (n = 0; n < i.length; n++) o = c[i[n]], null !== o.sWidth && (o.sWidth = Gb(o.sWidthOrig, k), u = !0);
        if (d || !u && !f && !e && j == W(a) && j == m.length)
            for (n = 0; n < j; n++) i = ba(a, n),
                null !== i && (c[i].sWidth = w(m.eq(n).width()));
        else {
            j = h(b).clone().css("visibility", "hidden").removeAttr("id");
            j.find("tbody tr").remove();
            var r = h("<tr/>").appendTo(j.find("tbody"));
            j.find("thead, tfoot").remove();
            j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
            j.find("tfoot th, tfoot td").css("width", "");
            m = sa(a, j.find("thead")[0]);
            for (n = 0; n < i.length; n++) o = c[i[n]], m[n].style.width = null !== o.sWidthOrig && "" !== o.sWidthOrig ? w(o.sWidthOrig) : "", o.sWidthOrig && f && h(m[n]).append(h("<div/>").css({
                width: o.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1
            }));
            if (a.aoData.length)
                for (n = 0; n < i.length; n++) u = i[n], o = c[u], h(Hb(a, u)).clone(!1).append(o.sContentPadding).appendTo(r);
            h("[name]", j).removeAttr("name");
            o = h("<div/>").css(f || e ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(j).appendTo(k);
            f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) : l && j.width(l);
            for (n = e = 0; n < i.length; n++) k = h(m[n]), g = k.outerWidth() -
                k.width(), k = p.bBounding ? Math.ceil(m[n].getBoundingClientRect().width) : k.outerWidth(), e += k, c[i[n]].sWidth = w(k - g);
            b.style.width = w(e);
            o.remove()
        }
        l && (b.style.width = w(l));
        if ((l || f) && !a._reszEvt) b = function() { h(E).on("resize.DT-" + a.sInstance, Qa(function() { aa(a) })) }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
    }

    function Gb(a, b) {
        if (!a) return 0;
        var c = h("<div/>").css("width", w(a)).appendTo(b || H.body),
            d = c[0].offsetWidth;
        c.remove();
        return d
    }

    function Hb(a, b) {
        var c = Ib(a, b);
        if (0 > c) return null;
        var d = a.aoData[c];
        return !d.nTr ?
            h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b]
    }

    function Ib(a, b) { for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) c = B(a, f, b, "display") + "", c = c.replace(ac, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f); return e }

    function w(a) { return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a }

    function Y(a) {
        var b, c, d = [],
            e = a.aoColumns,
            f, g, j, i;
        b = a.aaSortingFixed;
        c = h.isPlainObject(b);
        var m = [];
        f = function(a) { a.length && !Array.isArray(a[0]) ? m.push(a) : h.merge(m, a) };
        Array.isArray(b) &&
            f(b);
        c && b.pre && f(b.pre);
        f(a.aaSorting);
        c && b.post && f(b.post);
        for (a = 0; a < m.length; a++) {
            i = m[a][0];
            f = e[i].aDataSort;
            b = 0;
            for (c = f.length; b < c; b++) g = f[b], j = e[g].sType || "string", m[a]._idx === k && (m[a]._idx = h.inArray(m[a][1], e[g].asSorting)), d.push({ src: i, col: g, dir: m[a][1], index: m[a]._idx, type: j, formatter: n.ext.type.order[j + "-pre"] })
        }
        return d
    }

    function ob(a) {
        var b, c, d = [],
            e = n.ext.type.order,
            f = a.aoData,
            g = 0,
            j, i = a.aiDisplayMaster,
            h;
        Ia(a);
        h = Y(a);
        b = 0;
        for (c = h.length; b < c; b++) j = h[b], j.formatter && g++, Jb(a, j.col);
        if ("ssp" !=
            y(a) && 0 !== h.length) {
            b = 0;
            for (c = i.length; b < c; b++) d[i[b]] = b;
            g === h.length ? i.sort(function(a, b) {
                var c, e, g, j, i = h.length,
                    k = f[a]._aSortData,
                    n = f[b]._aSortData;
                for (g = 0; g < i; g++)
                    if (j = h[g], c = k[j.col], e = n[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === j.dir ? c : -c;
                c = d[a];
                e = d[b];
                return c < e ? -1 : c > e ? 1 : 0
            }) : i.sort(function(a, b) {
                var c, g, j, i, k = h.length,
                    n = f[a]._aSortData,
                    o = f[b]._aSortData;
                for (j = 0; j < k; j++)
                    if (i = h[j], c = n[i.col], g = o[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir], c = i(c, g), 0 !== c) return c;
                c = d[a];
                g = d[b];
                return c <
                    g ? -1 : c > g ? 1 : 0
            })
        }
        a.bSorted = !0
    }

    function Kb(a) {
        for (var b, c, d = a.aoColumns, e = Y(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) {
            c = d[f];
            var j = c.asSorting;
            b = c.sTitle.replace(/<.*?>/g, "");
            var i = c.nTh;
            i.removeAttribute("aria-sort");
            c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);
            i.setAttribute("aria-label", b)
        }
    }

    function Wa(a, b, c, d) {
        var e = a.aaSorting,
            f = a.aoColumns[b].asSorting,
            g = function(a, b) {
                var c = a._idx;
                c === k && (c = h.inArray(a[1], f));
                return c + 1 < f.length ? c + 1 : b ? null : 0
            };
        "number" === typeof e[0] && (e = a.aaSorting = [e]);
        c && a.oFeatures.bSortMulti ? (c = h.inArray(b, C(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);
        T(a);
        "function" == typeof d && d(a)
    }

    function Oa(a, b, c, d) {
        var e =
            a.aoColumns[c];
        Xa(b, {}, function(b) {!1 !== e.bSortable && (a.oFeatures.bProcessing ? (D(a, !0), setTimeout(function() { Wa(a, c, b.shiftKey, d); "ssp" !== y(a) && D(a, !1) }, 0)) : Wa(a, c, b.shiftKey, d)) })
    }

    function ya(a) {
        var b = a.aLastSort,
            c = a.oClasses.sSortColumn,
            d = Y(a),
            e = a.oFeatures,
            f, g;
        if (e.bSort && e.bSortClasses) {
            e = 0;
            for (f = b.length; e < f; e++) g = b[e].src, h(C(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
            e = 0;
            for (f = d.length; e < f; e++) g = d[e].src, h(C(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3))
        }
        a.aLastSort = d
    }

    function Jb(a,
        b) {
        var c = a.aoColumns[b],
            d = n.ext.order[c.sSortDataType],
            e;
        d && (e = d.call(a.oInstance, a, b, ca(a, b)));
        for (var f, g = n.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++)
            if (c = a.aoData[j], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[j] : B(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f
    }

    function za(a) {
        if (a.oFeatures.bStateSave && !a.bDestroying) {
            var b = {
                time: +new Date,
                start: a._iDisplayStart,
                length: a._iDisplayLength,
                order: h.extend(!0, [], a.aaSorting),
                search: Cb(a.oPreviousSearch),
                columns: h.map(a.aoColumns,
                    function(b, d) { return { visible: b.bVisible, search: Cb(a.aoPreSearchCols[d]) } })
            };
            t(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
            a.oSavedState = b;
            a.fnStateSaveCallback.call(a.oInstance, a, b)
        }
    }

    function Lb(a, b, c) {
        var d, e, f = a.aoColumns,
            b = function(b) {
                if (b && b.time) {
                    var g = t(a, "aoStateLoadParams", "stateLoadParams", [a, b]);
                    if (-1 === h.inArray(!1, g) && (g = a.iStateDuration, !(0 < g && b.time < +new Date - 1E3 * g) && !(b.columns && f.length !== b.columns.length))) {
                        a.oLoadedState = h.extend(!0, {}, b);
                        b.start !== k && (a._iDisplayStart = b.start,
                            a.iInitDisplayStart = b.start);
                        b.length !== k && (a._iDisplayLength = b.length);
                        b.order !== k && (a.aaSorting = [], h.each(b.order, function(b, c) { a.aaSorting.push(c[0] >= f.length ? [0, c[1]] : c) }));
                        b.search !== k && h.extend(a.oPreviousSearch, Db(b.search));
                        if (b.columns) { d = 0; for (e = b.columns.length; d < e; d++) g = b.columns[d], g.visible !== k && (f[d].bVisible = g.visible), g.search !== k && h.extend(a.aoPreSearchCols[d], Db(g.search)) }
                        t(a, "aoStateLoaded", "stateLoaded", [a, b])
                    }
                }
                c()
            };
        if (a.oFeatures.bStateSave) {
            var g = a.fnStateLoadCallback.call(a.oInstance,
                a, b);
            g !== k && b(g)
        } else c()
    }

    function Aa(a) {
        var b = n.settings,
            a = h.inArray(a, C(b, "nTable"));
        return -1 !== a ? b[a] : null
    }

    function K(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
        d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
        if (b) E.console && console.log && console.log(c);
        else if (b = n.ext, b = b.sErrMode || b.errMode, a && t(a, null, "error", [a, d, c]), "alert" == b) alert(c);
        else { if ("throw" == b) throw Error(c); "function" == typeof b && b(a, d, c) }
    }

    function F(a, b, c, d) {
        Array.isArray(c) ?
            h.each(c, function(c, d) { Array.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d) }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c]))
    }

    function Ya(a, b, c) { var d, e; for (e in b) b.hasOwnProperty(e) && (d = b[e], h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && Array.isArray(d) ? d.slice() : d); return a }

    function Xa(a, b, c) {
        h(a).on("click.DT", b, function(b) {
            h(a).trigger("blur");
            c(b)
        }).on("keypress.DT", b, function(a) { 13 === a.which && (a.preventDefault(), c(a)) }).on("selectstart.DT", function() { return !1 })
    }

    function z(a, b, c, d) { c && a[b].push({ fn: c, sName: d }) }

    function t(a, b, c, d) {
        var e = [];
        b && (e = h.map(a[b].slice().reverse(), function(b) { return b.fn.apply(a.oInstance, d) }));
        null !== c && (b = h.Event(c + ".dt"), h(a.nTable).trigger(b, d), e.push(b.result));
        return e
    }

    function Ua(a) {
        var b = a._iDisplayStart,
            c = a.fnDisplayEnd(),
            d = a._iDisplayLength;
        b >= c && (b = c - d);
        b -= b % d;
        if (-1 === d || 0 > b) b = 0;
        a._iDisplayStart = b
    }

    function Pa(a, b) {
        var c = a.renderer,
            d = n.ext.renderer[b];
        return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] ||
            d._ : d._
    }

    function y(a) { return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom" }

    function ja(a, b) {
        var c = [],
            c = Mb.numbers_length,
            d = Math.floor(c / 2);
        b <= c ? c = Z(0, b) : a <= d ? (c = Z(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = Z(b - (c - 2), b) : (c = Z(a - d + 2, a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
        c.DT_el = "span";
        return c
    }

    function Fa(a) {
        h.each({
            num: function(b) { return Ba(b, a) },
            "num-fmt": function(b) { return Ba(b, a, Za) },
            "html-num": function(b) { return Ba(b, a, Ca) },
            "html-num-fmt": function(b) {
                return Ba(b,
                    a, Ca, Za)
            }
        }, function(b, c) {
            v.type.order[b + a + "-pre"] = c;
            b.match(/^html\-/) && (v.type.search[b + a] = v.type.search.html)
        })
    }

    function Nb(a) { return function() { var b = [Aa(this[n.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments)); return n.ext.internal[a].apply(this, b) } }
    var n = function(a) {
            this.$ = function(a, b) { return this.api(!0).$(a, b) };
            this._ = function(a, b) { return this.api(!0).rows(a, b).data() };
            this.api = function(a) { return a ? new r(Aa(this[v.iApiIndex])) : new r(this) };
            this.fnAddData = function(a, b) {
                var c = this.api(!0),
                    d = Array.isArray(a) && (Array.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
                (b === k || b) && c.draw();
                return d.flatten().toArray()
            };
            this.fnAdjustColumnSizing = function(a) {
                var b = this.api(!0).columns.adjust(),
                    c = b.settings()[0],
                    d = c.oScroll;
                a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && ma(c)
            };
            this.fnClearTable = function(a) {
                var b = this.api(!0).clear();
                (a === k || a) && b.draw()
            };
            this.fnClose = function(a) { this.api(!0).row(a).child.hide() };
            this.fnDeleteRow = function(a, b, c) {
                var d = this.api(!0),
                    a = d.rows(a),
                    e =
                    a.settings()[0],
                    h = e.aoData[a[0][0]];
                a.remove();
                b && b.call(this, e, h);
                (c === k || c) && d.draw();
                return h
            };
            this.fnDestroy = function(a) { this.api(!0).destroy(a) };
            this.fnDraw = function(a) { this.api(!0).draw(a) };
            this.fnFilter = function(a, b, c, d, e, h) {
                e = this.api(!0);
                null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h);
                e.draw()
            };
            this.fnGetData = function(a, b) { var c = this.api(!0); if (a !== k) { var d = a.nodeName ? a.nodeName.toLowerCase() : ""; return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null } return c.data().toArray() };
            this.fnGetNodes = function(a) { var b = this.api(!0); return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray() };
            this.fnGetPosition = function(a) {
                var b = this.api(!0),
                    c = a.nodeName.toUpperCase();
                return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
            };
            this.fnIsOpen = function(a) { return this.api(!0).row(a).child.isShown() };
            this.fnOpen = function(a, b, c) { return this.api(!0).row(a).child(b, c).show().child()[0] };
            this.fnPageChange = function(a, b) {
                var c = this.api(!0).page(a);
                (b === k || b) && c.draw(!1)
            };
            this.fnSetColumnVis = function(a, b, c) {
                a = this.api(!0).column(a).visible(b);
                (c === k || c) && a.columns.adjust().draw()
            };
            this.fnSettings = function() { return Aa(this[v.iApiIndex]) };
            this.fnSort = function(a) { this.api(!0).order(a).draw() };
            this.fnSortListener = function(a, b, c) { this.api(!0).order.listener(a, b, c) };
            this.fnUpdate = function(a, b, c, d, e) {
                var h = this.api(!0);
                c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
                (e === k || e) && h.columns.adjust();
                (d === k || d) && h.draw();
                return 0
            };
            this.fnVersionCheck =
                v.fnVersionCheck;
            var b = this,
                c = a === k,
                d = this.length;
            c && (a = {});
            this.oApi = this.internal = v.internal;
            for (var e in n.ext.internal) e && (this[e] = Nb(e));
            this.each(function() {
                var e = {},
                    g = 1 < d ? Ya(e, a, !0) : a,
                    j = 0,
                    i, e = this.getAttribute("id"),
                    m = !1,
                    l = n.defaults,
                    q = h(this);
                if ("table" != this.nodeName.toLowerCase()) K(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    gb(l);
                    hb(l.column);
                    J(l, l, !0);
                    J(l.column, l.column, !0);
                    J(l, h.extend(g, q.data()), !0);
                    var u = n.settings,
                        j = 0;
                    for (i = u.length; j < i; j++) {
                        var o = u[j];
                        if (o.nTable ==
                            this || o.nTHead && o.nTHead.parentNode == this || o.nTFoot && o.nTFoot.parentNode == this) { var r = g.bRetrieve !== k ? g.bRetrieve : l.bRetrieve; if (c || r) return o.oInstance; if (g.bDestroy !== k ? g.bDestroy : l.bDestroy) { o.oInstance.fnDestroy(); break } else { K(o, 0, "Cannot reinitialise DataTable", 3); return } }
                        if (o.sTableId == this.id) { u.splice(j, 1); break }
                    }
                    if (null === e || "" === e) this.id = e = "DataTables_Table_" + n.ext._unique++;
                    var p = h.extend(!0, {}, n.models.oSettings, { sDestroyWidth: q[0].style.width, sInstance: e, sTableId: e });
                    p.nTable = this;
                    p.oApi =
                        b.internal;
                    p.oInit = g;
                    u.push(p);
                    p.oInstance = 1 === b.length ? b : q.dataTable();
                    gb(g);
                    Ea(g.oLanguage);
                    g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = Array.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
                    g = Ya(h.extend(!0, {}, l), g);
                    F(p.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                    F(p, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu",
                        "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"]
                    ]);
                    F(p.oScroll, g, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"]
                    ]);
                    F(p.oLanguage, g, "fnInfoCallback");
                    z(p, "aoDrawCallback", g.fnDrawCallback,
                        "user");
                    z(p, "aoServerParams", g.fnServerParams, "user");
                    z(p, "aoStateSaveParams", g.fnStateSaveParams, "user");
                    z(p, "aoStateLoadParams", g.fnStateLoadParams, "user");
                    z(p, "aoStateLoaded", g.fnStateLoaded, "user");
                    z(p, "aoRowCallback", g.fnRowCallback, "user");
                    z(p, "aoRowCreatedCallback", g.fnCreatedRow, "user");
                    z(p, "aoHeaderCallback", g.fnHeaderCallback, "user");
                    z(p, "aoFooterCallback", g.fnFooterCallback, "user");
                    z(p, "aoInitComplete", g.fnInitComplete, "user");
                    z(p, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
                    p.rowIdFn =
                        S(g.rowId);
                    ib(p);
                    var s = p.oClasses;
                    h.extend(s, n.ext.classes, g.oClasses);
                    q.addClass(s.sTable);
                    p.iInitDisplayStart === k && (p.iInitDisplayStart = g.iDisplayStart, p._iDisplayStart = g.iDisplayStart);
                    null !== g.iDeferLoading && (p.bDeferLoading = !0, e = Array.isArray(g.iDeferLoading), p._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, p._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);
                    var w = p.oLanguage;
                    h.extend(!0, w, g.oLanguage);
                    w.sUrl && (h.ajax({
                        dataType: "json",
                        url: w.sUrl,
                        success: function(a) {
                            Ea(a);
                            J(l.oLanguage,
                                a);
                            h.extend(true, w, a);
                            ia(p)
                        },
                        error: function() { ia(p) }
                    }), m = !0);
                    null === g.asStripeClasses && (p.asStripeClasses = [s.sStripeOdd, s.sStripeEven]);
                    var e = p.asStripeClasses,
                        v = q.children("tbody").find("tr").eq(0); - 1 !== h.inArray(!0, h.map(e, function(a) { return v.hasClass(a) })) && (h("tbody tr", this).removeClass(e.join(" ")), p.asDestroyStripes = e.slice());
                    e = [];
                    u = this.getElementsByTagName("thead");
                    0 !== u.length && (fa(p.aoHeader, u[0]), e = sa(p));
                    if (null === g.aoColumns) {
                        u = [];
                        j = 0;
                        for (i = e.length; j < i; j++) u.push(null)
                    } else u = g.aoColumns;
                    j = 0;
                    for (i = u.length; j < i; j++) Ga(p, e ? e[j] : null);
                    kb(p, g.aoColumnDefs, u, function(a, b) { la(p, a, b) });
                    if (v.length) {
                        var U = function(a, b) { return a.getAttribute("data-" + b) !== null ? b : null };
                        h(v[0]).children("th, td").each(function(a, b) {
                            var c = p.aoColumns[a];
                            if (c.mData === a) {
                                var d = U(b, "sort") || U(b, "order"),
                                    e = U(b, "filter") || U(b, "search");
                                if (d !== null || e !== null) {
                                    c.mData = { _: a + ".display", sort: d !== null ? a + ".@data-" + d : k, type: d !== null ? a + ".@data-" + d : k, filter: e !== null ? a + ".@data-" + e : k };
                                    la(p, a)
                                }
                            }
                        })
                    }
                    var V = p.oFeatures,
                        e = function() {
                            if (g.aaSorting ===
                                k) {
                                var a = p.aaSorting;
                                j = 0;
                                for (i = a.length; j < i; j++) a[j][1] = p.aoColumns[j].asSorting[0]
                            }
                            ya(p);
                            V.bSort && z(p, "aoDrawCallback", function() {
                                if (p.bSorted) {
                                    var a = Y(p),
                                        b = {};
                                    h.each(a, function(a, c) { b[c.src] = c.dir });
                                    t(p, null, "order", [p, a, b]);
                                    Kb(p)
                                }
                            });
                            z(p, "aoDrawCallback", function() {
                                (p.bSorted || y(p) === "ssp" || V.bDeferRender) && ya(p)
                            }, "sc");
                            var a = q.children("caption").each(function() { this._captionSide = h(this).css("caption-side") }),
                                b = q.children("thead");
                            b.length === 0 && (b = h("<thead/>").appendTo(q));
                            p.nTHead = b[0];
                            b = q.children("tbody");
                            b.length === 0 && (b = h("<tbody/>").appendTo(q));
                            p.nTBody = b[0];
                            b = q.children("tfoot");
                            if (b.length === 0 && a.length > 0 && (p.oScroll.sX !== "" || p.oScroll.sY !== "")) b = h("<tfoot/>").appendTo(q);
                            if (b.length === 0 || b.children().length === 0) q.addClass(s.sNoFooter);
                            else if (b.length > 0) {
                                p.nTFoot = b[0];
                                fa(p.aoFooter, p.nTFoot)
                            }
                            if (g.aaData)
                                for (j = 0; j < g.aaData.length; j++) O(p, g.aaData[j]);
                            else(p.bDeferLoading || y(p) == "dom") && oa(p, h(p.nTBody).children("tr"));
                            p.aiDisplay = p.aiDisplayMaster.slice();
                            p.bInitialised = true;
                            m === false && ia(p)
                        };
                    g.bStateSave ? (V.bStateSave = !0, z(p, "aoDrawCallback", za, "state_save"), Lb(p, g, e)) : e()
                }
            });
            b = null;
            return this
        },
        v, r, o, s, $a = {},
        Ob = /[\r\n\u2028]/g,
        Ca = /<.*?>/g,
        bc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
        cc = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
        Za = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
        M = function(a) { return !a || !0 === a || "-" === a ? !0 : !1 },
        Pb = function(a) { var b = parseInt(a, 10); return !isNaN(b) && isFinite(a) ? b : null },
        Qb =
        function(a, b) { $a[b] || ($a[b] = RegExp(Sa(b), "g")); return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace($a[b], ".") : a },
        ab = function(a, b, c) {
            var d = "string" === typeof a;
            if (M(a)) return !0;
            b && d && (a = Qb(a, b));
            c && d && (a = a.replace(Za, ""));
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        Rb = function(a, b, c) { return M(a) ? !0 : !(M(a) || "string" === typeof a) ? null : ab(a.replace(Ca, ""), b, c) ? !0 : null },
        C = function(a, b, c) {
            var d = [],
                e = 0,
                f = a.length;
            if (c !== k)
                for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
            else
                for (; e < f; e++) a[e] && d.push(a[e][b]);
            return d
        },
        ka = function(a, b, c, d) {
            var e = [],
                f = 0,
                g = b.length;
            if (d !== k)
                for (; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
            else
                for (; f < g; f++) e.push(a[b[f]][c]);
            return e
        },
        Z = function(a, b) {
            var c = [],
                d;
            b === k ? (b = 0, d = a) : (d = b, b = a);
            for (var e = b; e < d; e++) c.push(e);
            return c
        },
        Sb = function(a) { for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]); return b },
        ra = function(a) {
            var b;
            a: {
                if (!(2 > a.length)) {
                    b = a.slice().sort();
                    for (var c = b[0], d = 1, e = b.length; d < e; d++) {
                        if (b[d] === c) { b = !1; break a }
                        c = b[d]
                    }
                }
                b = !0
            }
            if (b) return a.slice();
            b = [];
            var e =
                a.length,
                f, g = 0,
                d = 0;
            a: for (; d < e; d++) {
                c = a[d];
                for (f = 0; f < g; f++)
                    if (b[f] === c) continue a;
                b.push(c);
                g++
            }
            return b
        },
        Tb = function(a, b) {
            if (Array.isArray(b))
                for (var c = 0; c < b.length; c++) Tb(a, b[c]);
            else a.push(b);
            return a
        };
    Array.isArray || (Array.isArray = function(a) { return "[object Array]" === Object.prototype.toString.call(a) });
    String.prototype.trim || (String.prototype.trim = function() { return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") });
    n.util = {
        throttle: function(a, b) {
            var c = b !== k ? b : 200,
                d, e;
            return function() {
                var b =
                    this,
                    g = +new Date,
                    j = arguments;
                if (d && g < d + c) {
                    clearTimeout(e);
                    e = setTimeout(function() {
                        d = k;
                        a.apply(b, j)
                    }, c)
                } else {
                    d = g;
                    a.apply(b, j)
                }
            }
        },
        escapeRegex: function(a) { return a.replace(cc, "\\$1") }
    };
    var A = function(a, b, c) { a[b] !== k && (a[c] = a[b]) },
        da = /\[.*?\]$/,
        X = /\(\)$/,
        Sa = n.util.escapeRegex,
        wa = h("<div>")[0],
        Zb = wa.textContent !== k,
        ac = /<.*?>/g,
        Qa = n.util.throttle,
        Ub = [],
        x = Array.prototype,
        dc = function(a) {
            var b, c, d = n.settings,
                e = h.map(d, function(a) { return a.nTable });
            if (a) {
                if (a.nTable && a.oApi) return [a];
                if (a.nodeName && a.nodeName.toLowerCase() ===
                    "table") { b = h.inArray(a, e); return b !== -1 ? [d[b]] : null }
                if (a && typeof a.settings === "function") return a.settings().toArray();
                typeof a === "string" ? c = h(a) : a instanceof h && (c = a)
            } else return [];
            if (c) return c.map(function() { b = h.inArray(this, e); return b !== -1 ? d[b] : null }).toArray()
        };
    r = function(a, b) {
        if (!(this instanceof r)) return new r(a, b);
        var c = [],
            d = function(a) {
                (a = dc(a)) && c.push.apply(c, a)
            };
        if (Array.isArray(a))
            for (var e = 0, f = a.length; e < f; e++) d(a[e]);
        else d(a);
        this.context = ra(c);
        b && h.merge(this, b);
        this.selector = {
            rows: null,
            cols: null,
            opts: null
        };
        r.extend(this, this, Ub)
    };
    n.Api = r;
    h.extend(r.prototype, {
        any: function() { return this.count() !== 0 },
        concat: x.concat,
        context: [],
        count: function() { return this.flatten().length },
        each: function(a) { for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this); return this },
        eq: function(a) { var b = this.context; return b.length > a ? new r(b[a], this[a]) : null },
        filter: function(a) {
            var b = [];
            if (x.filter) b = x.filter.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
            return new r(this.context, b)
        },
        flatten: function() { var a = []; return new r(this.context, a.concat.apply(a, this.toArray())) },
        join: x.join,
        indexOf: x.indexOf || function(a, b) {
            for (var c = b || 0, d = this.length; c < d; c++)
                if (this[c] === a) return c;
            return -1
        },
        iterator: function(a, b, c, d) {
            var e = [],
                f, g, j, i, h, l = this.context,
                n, o, s = this.selector;
            if (typeof a === "string") {
                d = c;
                c = b;
                b = a;
                a = false
            }
            g = 0;
            for (j = l.length; g < j; g++) {
                var t = new r(l[g]);
                if (b === "table") {
                    f = c.call(t, l[g], g);
                    f !== k && e.push(f)
                } else if (b === "columns" || b === "rows") {
                    f = c.call(t,
                        l[g], this[g], g);
                    f !== k && e.push(f)
                } else if (b === "column" || b === "column-rows" || b === "row" || b === "cell") {
                    o = this[g];
                    b === "column-rows" && (n = Da(l[g], s.opts));
                    i = 0;
                    for (h = o.length; i < h; i++) {
                        f = o[i];
                        f = b === "cell" ? c.call(t, l[g], f.row, f.column, g, i) : c.call(t, l[g], f, g, i, n);
                        f !== k && e.push(f)
                    }
                }
            }
            if (e.length || d) {
                a = new r(l, a ? e.concat.apply([], e) : e);
                b = a.selector;
                b.rows = s.rows;
                b.cols = s.cols;
                b.opts = s.opts;
                return a
            }
            return this
        },
        lastIndexOf: x.lastIndexOf || function(a, b) { return this.indexOf.apply(this.toArray.reverse(), arguments) },
        length: 0,
        map: function(a) {
            var b = [];
            if (x.map) b = x.map.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
            return new r(this.context, b)
        },
        pluck: function(a) { return this.map(function(b) { return b[a] }) },
        pop: x.pop,
        push: x.push,
        reduce: x.reduce || function(a, b) { return jb(this, a, b, 0, this.length, 1) },
        reduceRight: x.reduceRight || function(a, b) { return jb(this, a, b, this.length - 1, -1, -1) },
        reverse: x.reverse,
        selector: null,
        shift: x.shift,
        slice: function() { return new r(this.context, this) },
        sort: x.sort,
        splice: x.splice,
        toArray: function() { return x.slice.call(this) },
        to$: function() { return h(this) },
        toJQuery: function() { return h(this) },
        unique: function() { return new r(this.context, ra(this)) },
        unshift: x.unshift
    });
    r.extend = function(a, b, c) {
        if (c.length && b && (b instanceof r || b.__dt_wrapper)) {
            var d, e, f, g = function(a, b, c) {
                return function() {
                    var d = b.apply(a, arguments);
                    r.extend(d, d, c.methodExt);
                    return d
                }
            };
            d = 0;
            for (e = c.length; d < e; d++) {
                f = c[d];
                b[f.name] = f.type === "function" ? g(a, f.val, f) : f.type === "object" ? {} : f.val;
                b[f.name].__dt_wrapper =
                    true;
                r.extend(a, b[f.name], f.propExt)
            }
        }
    };
    r.register = o = function(a, b) {
        if (Array.isArray(a))
            for (var c = 0, d = a.length; c < d; c++) r.register(a[c], b);
        else
            for (var e = a.split("."), f = Ub, g, j, c = 0, d = e.length; c < d; c++) {
                g = (j = e[c].indexOf("()") !== -1) ? e[c].replace("()", "") : e[c];
                var i;
                a: {
                    i = 0;
                    for (var k = f.length; i < k; i++)
                        if (f[i].name === g) { i = f[i]; break a }
                    i = null
                }
                if (!i) {
                    i = { name: g, val: {}, methodExt: [], propExt: [], type: "object" };
                    f.push(i)
                }
                if (c === d - 1) {
                    i.val = b;
                    i.type = typeof b === "function" ? "function" : h.isPlainObject(b) ? "object" : "other"
                } else f =
                    j ? i.methodExt : i.propExt
            }
    };
    r.registerPlural = s = function(a, b, c) {
        r.register(a, c);
        r.register(b, function() { var a = c.apply(this, arguments); return a === this ? this : a instanceof r ? a.length ? Array.isArray(a[0]) ? new r(a.context, a[0]) : a[0] : k : a })
    };
    var Vb = function(a, b) { if (Array.isArray(a)) return h.map(a, function(a) { return Vb(a, b) }); if (typeof a === "number") return [b[a]]; var c = h.map(b, function(a) { return a.nTable }); return h(c).filter(a).map(function() { var a = h.inArray(this, c); return b[a] }).toArray() };
    o("tables()", function(a) {
        return a !==
            k && a !== null ? new r(Vb(a, this.context)) : this
    });
    o("table()", function(a) {
        var a = this.tables(a),
            b = a.context;
        return b.length ? new r(b[0]) : a
    });
    s("tables().nodes()", "table().node()", function() { return this.iterator("table", function(a) { return a.nTable }, 1) });
    s("tables().body()", "table().body()", function() { return this.iterator("table", function(a) { return a.nTBody }, 1) });
    s("tables().header()", "table().header()", function() { return this.iterator("table", function(a) { return a.nTHead }, 1) });
    s("tables().footer()", "table().footer()",
        function() { return this.iterator("table", function(a) { return a.nTFoot }, 1) });
    s("tables().containers()", "table().container()", function() { return this.iterator("table", function(a) { return a.nTableWrapper }, 1) });
    o("draw()", function(a) {
        return this.iterator("table", function(b) {
            if (a === "page") P(b);
            else {
                typeof a === "string" && (a = a === "full-hold" ? false : true);
                T(b, a === false)
            }
        })
    });
    o("page()", function(a) { return a === k ? this.page.info().page : this.iterator("table", function(b) { Va(b, a) }) });
    o("page.info()", function() {
        if (this.context.length ===
            0) return k;
        var a = this.context[0],
            b = a._iDisplayStart,
            c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
            d = a.fnRecordsDisplay(),
            e = c === -1;
        return { page: e ? 0 : Math.floor(b / c), pages: e ? 1 : Math.ceil(d / c), start: b, end: a.fnDisplayEnd(), length: c, recordsTotal: a.fnRecordsTotal(), recordsDisplay: d, serverSide: y(a) === "ssp" }
    });
    o("page.len()", function(a) { return a === k ? this.context.length !== 0 ? this.context[0]._iDisplayLength : k : this.iterator("table", function(b) { Ta(b, a) }) });
    var Wb = function(a, b, c) {
        if (c) {
            var d = new r(a);
            d.one("draw",
                function() { c(d.ajax.json()) })
        }
        if (y(a) == "ssp") T(a, b);
        else {
            D(a, true);
            var e = a.jqXHR;
            e && e.readyState !== 4 && e.abort();
            ta(a, [], function(c) {
                pa(a);
                for (var c = ua(a, c), d = 0, e = c.length; d < e; d++) O(a, c[d]);
                T(a, b);
                D(a, false)
            })
        }
    };
    o("ajax.json()", function() { var a = this.context; if (a.length > 0) return a[0].json });
    o("ajax.params()", function() { var a = this.context; if (a.length > 0) return a[0].oAjaxData });
    o("ajax.reload()", function(a, b) { return this.iterator("table", function(c) { Wb(c, b === false, a) }) });
    o("ajax.url()", function(a) {
        var b =
            this.context;
        if (a === k) {
            if (b.length === 0) return k;
            b = b[0];
            return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
        }
        return this.iterator("table", function(b) { h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a })
    });
    o("ajax.url().load()", function(a, b) { return this.iterator("table", function(c) { Wb(c, b === false, a) }) });
    var bb = function(a, b, c, d, e) {
            var f = [],
                g, j, h, m, l, n;
            h = typeof b;
            if (!b || h === "string" || h === "function" || b.length === k) b = [b];
            h = 0;
            for (m = b.length; h < m; h++) {
                j = b[h] && b[h].split && !b[h].match(/[\[\(:]/) ?
                    b[h].split(",") : [b[h]];
                l = 0;
                for (n = j.length; l < n; l++)(g = c(typeof j[l] === "string" ? j[l].trim() : j[l])) && g.length && (f = f.concat(g))
            }
            a = v.selector[a];
            if (a.length) { h = 0; for (m = a.length; h < m; h++) f = a[h](d, e, f) }
            return ra(f)
        },
        cb = function(a) { a || (a = {}); if (a.filter && a.search === k) a.search = a.filter; return h.extend({ search: "none", order: "current", page: "all" }, a) },
        db = function(a) {
            for (var b = 0, c = a.length; b < c; b++)
                if (a[b].length > 0) {
                    a[0] = a[b];
                    a[0].length = 1;
                    a.length = 1;
                    a.context = [a.context[b]];
                    return a
                }
            a.length = 0;
            return a
        },
        Da = function(a,
            b) {
            var c, d, e, f = [],
                g = a.aiDisplay;
            e = a.aiDisplayMaster;
            var j = b.search;
            c = b.order;
            d = b.page;
            if (y(a) == "ssp") return j === "removed" ? [] : Z(0, e.length);
            if (d == "current") { c = a._iDisplayStart; for (d = a.fnDisplayEnd(); c < d; c++) f.push(g[c]) } else if (c == "current" || c == "applied")
                if (j == "none") f = e.slice();
                else if (j == "applied") f = g.slice();
            else {
                if (j == "removed") {
                    var i = {};
                    c = 0;
                    for (d = g.length; c < d; c++) i[g[c]] = null;
                    f = h.map(e, function(a) { return !i.hasOwnProperty(a) ? a : null })
                }
            } else if (c == "index" || c == "original") {
                c = 0;
                for (d = a.aoData.length; c <
                    d; c++)
                    if (j == "none") f.push(c);
                    else {
                        e = h.inArray(c, g);
                        (e === -1 && j == "removed" || e >= 0 && j == "applied") && f.push(c)
                    }
            }
            return f
        };
    o("rows()", function(a, b) {
        if (a === k) a = "";
        else if (h.isPlainObject(a)) {
            b = a;
            a = ""
        }
        var b = cb(b),
            c = this.iterator("table", function(c) {
                var e = b,
                    f;
                return bb("row", a, function(a) {
                    var b = Pb(a),
                        i = c.aoData;
                    if (b !== null && !e) return [b];
                    f || (f = Da(c, e));
                    if (b !== null && h.inArray(b, f) !== -1) return [b];
                    if (a === null || a === k || a === "") return f;
                    if (typeof a === "function") return h.map(f, function(b) {
                        var c = i[b];
                        return a(b, c._aData,
                            c.nTr) ? b : null
                    });
                    if (a.nodeName) {
                        var b = a._DT_RowIndex,
                            m = a._DT_CellIndex;
                        if (b !== k) return i[b] && i[b].nTr === a ? [b] : [];
                        if (m) return i[m.row] && i[m.row].nTr === a.parentNode ? [m.row] : [];
                        b = h(a).closest("*[data-dt-row]");
                        return b.length ? [b.data("dt-row")] : []
                    }
                    if (typeof a === "string" && a.charAt(0) === "#") { b = c.aIds[a.replace(/^#/, "")]; if (b !== k) return [b.idx] }
                    b = Sb(ka(c.aoData, f, "nTr"));
                    return h(b).filter(a).map(function() { return this._DT_RowIndex }).toArray()
                }, c, e)
            }, 1);
        c.selector.rows = a;
        c.selector.opts = b;
        return c
    });
    o("rows().nodes()",
        function() { return this.iterator("row", function(a, b) { return a.aoData[b].nTr || k }, 1) });
    o("rows().data()", function() { return this.iterator(true, "rows", function(a, b) { return ka(a.aoData, b, "_aData") }, 1) });
    s("rows().cache()", "row().cache()", function(a) { return this.iterator("row", function(b, c) { var d = b.aoData[c]; return a === "search" ? d._aFilterData : d._aSortData }, 1) });
    s("rows().invalidate()", "row().invalidate()", function(a) { return this.iterator("row", function(b, c) { ea(b, c, a) }) });
    s("rows().indexes()", "row().index()",
        function() { return this.iterator("row", function(a, b) { return b }, 1) });
    s("rows().ids()", "row().id()", function(a) {
        for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
            for (var f = 0, g = this[d].length; f < g; f++) {
                var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
                b.push((a === true ? "#" : "") + h)
            }
        return new r(c, b)
    });
    s("rows().remove()", "row().remove()", function() {
        var a = this;
        this.iterator("row", function(b, c, d) {
            var e = b.aoData,
                f = e[c],
                g, h, i, m, l;
            e.splice(c, 1);
            g = 0;
            for (h = e.length; g < h; g++) {
                i = e[g];
                l = i.anCells;
                if (i.nTr !== null) i.nTr._DT_RowIndex =
                    g;
                if (l !== null) { i = 0; for (m = l.length; i < m; i++) l[i]._DT_CellIndex.row = g }
            }
            qa(b.aiDisplayMaster, c);
            qa(b.aiDisplay, c);
            qa(a[d], c, false);
            b._iRecordsDisplay > 0 && b._iRecordsDisplay--;
            Ua(b);
            c = b.rowIdFn(f._aData);
            c !== k && delete b.aIds[c]
        });
        this.iterator("table", function(a) { for (var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c });
        return this
    });
    o("rows.add()", function(a) {
        var b = this.iterator("table", function(b) {
                var c, f, g, h = [];
                f = 0;
                for (g = a.length; f < g; f++) {
                    c = a[f];
                    c.nodeName && c.nodeName.toUpperCase() === "TR" ? h.push(oa(b,
                        c)[0]) : h.push(O(b, c))
                }
                return h
            }, 1),
            c = this.rows(-1);
        c.pop();
        h.merge(c, b);
        return c
    });
    o("row()", function(a, b) { return db(this.rows(a, b)) });
    o("row().data()", function(a) {
        var b = this.context;
        if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
        var c = b[0].aoData[this[0]];
        c._aData = a;
        Array.isArray(a) && (c.nTr && c.nTr.id) && N(b[0].rowId)(a, c.nTr.id);
        ea(b[0], this[0], "data");
        return this
    });
    o("row().node()", function() { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null });
    o("row.add()", function(a) { a instanceof h && a.length && (a = a[0]); var b = this.iterator("table", function(b) { return a.nodeName && a.nodeName.toUpperCase() === "TR" ? oa(b, a)[0] : O(b, a) }); return this.row(b[0]) });
    var eb = function(a, b) {
            var c = a.context;
            if (c.length)
                if ((c = c[0].aoData[b !== k ? b : a[0]]) && c._details) {
                    c._details.remove();
                    c._detailsShow = k;
                    c._details = k
                }
        },
        Xb = function(a, b) {
            var c = a.context;
            if (c.length && a.length) {
                var d = c[0].aoData[a[0]];
                if (d._details) {
                    (d._detailsShow = b) ? d._details.insertAfter(d.nTr): d._details.detach();
                    var e = c[0],
                        f = new r(e),
                        g = e.aoData;
                    f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                    if (C(g, "_details").length > 0) {
                        f.on("draw.dt.DT_details", function(a, b) {
                            e === b && f.rows({ page: "current" }).eq(0).each(function(a) {
                                a = g[a];
                                a._detailsShow && a._details.insertAfter(a.nTr)
                            })
                        });
                        f.on("column-visibility.dt.DT_details", function(a, b) {
                            if (e === b)
                                for (var c, d = W(b), f = 0, h = g.length; f < h; f++) {
                                    c = g[f];
                                    c._details && c._details.children("td[colspan]").attr("colspan", d)
                                }
                        });
                        f.on("destroy.dt.DT_details",
                            function(a, b) {
                                if (e === b)
                                    for (var c = 0, d = g.length; c < d; c++) g[c]._details && eb(f, c)
                            })
                    }
                }
            }
        };
    o("row().child()", function(a, b) {
        var c = this.context;
        if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k;
        if (a === true) this.child.show();
        else if (a === false) eb(this);
        else if (c.length && this.length) {
            var d = c[0],
                c = c[0].aoData[this[0]],
                e = [],
                f = function(a, b) {
                    if (Array.isArray(a) || a instanceof h)
                        for (var c = 0, k = a.length; c < k; c++) f(a[c], b);
                    else if (a.nodeName && a.nodeName.toLowerCase() === "tr") e.push(a);
                    else {
                        c = h("<tr><td></td></tr>").addClass(b);
                        h("td", c).addClass(b).html(a)[0].colSpan = W(d);
                        e.push(c[0])
                    }
                };
            f(a, b);
            c._details && c._details.detach();
            c._details = h(e);
            c._detailsShow && c._details.insertAfter(c.nTr)
        }
        return this
    });
    o(["row().child.show()", "row().child().show()"], function() { Xb(this, true); return this });
    o(["row().child.hide()", "row().child().hide()"], function() { Xb(this, false); return this });
    o(["row().child.remove()", "row().child().remove()"], function() { eb(this); return this });
    o("row().child.isShown()", function() {
        var a = this.context;
        return a.length &&
            this.length ? a[0].aoData[this[0]]._detailsShow || false : false
    });
    var ec = /^([^:]+):(name|visIdx|visible)$/,
        Yb = function(a, b, c, d, e) { for (var c = [], d = 0, f = e.length; d < f; d++) c.push(B(a, e[d], b)); return c };
    o("columns()", function(a, b) {
        if (a === k) a = "";
        else if (h.isPlainObject(a)) {
            b = a;
            a = ""
        }
        var b = cb(b),
            c = this.iterator("table", function(c) {
                var e = a,
                    f = b,
                    g = c.aoColumns,
                    j = C(g, "sName"),
                    i = C(g, "nTh");
                return bb("column", e, function(a) {
                    var b = Pb(a);
                    if (a === "") return Z(g.length);
                    if (b !== null) return [b >= 0 ? b : g.length + b];
                    if (typeof a === "function") {
                        var e =
                            Da(c, f);
                        return h.map(g, function(b, f) { return a(f, Yb(c, f, 0, 0, e), i[f]) ? f : null })
                    }
                    var k = typeof a === "string" ? a.match(ec) : "";
                    if (k) switch (k[2]) {
                        case "visIdx":
                        case "visible":
                            b = parseInt(k[1], 10);
                            if (b < 0) { var n = h.map(g, function(a, b) { return a.bVisible ? b : null }); return [n[n.length + b]] }
                            return [ba(c, b)];
                        case "name":
                            return h.map(j, function(a, b) { return a === k[1] ? b : null });
                        default:
                            return []
                    }
                    if (a.nodeName && a._DT_CellIndex) return [a._DT_CellIndex.column];
                    b = h(i).filter(a).map(function() { return h.inArray(this, i) }).toArray();
                    if (b.length ||
                        !a.nodeName) return b;
                    b = h(a).closest("*[data-dt-column]");
                    return b.length ? [b.data("dt-column")] : []
                }, c, f)
            }, 1);
        c.selector.cols = a;
        c.selector.opts = b;
        return c
    });
    s("columns().header()", "column().header()", function() { return this.iterator("column", function(a, b) { return a.aoColumns[b].nTh }, 1) });
    s("columns().footer()", "column().footer()", function() { return this.iterator("column", function(a, b) { return a.aoColumns[b].nTf }, 1) });
    s("columns().data()", "column().data()", function() {
        return this.iterator("column-rows", Yb,
            1)
    });
    s("columns().dataSrc()", "column().dataSrc()", function() { return this.iterator("column", function(a, b) { return a.aoColumns[b].mData }, 1) });
    s("columns().cache()", "column().cache()", function(a) { return this.iterator("column-rows", function(b, c, d, e, f) { return ka(b.aoData, f, a === "search" ? "_aFilterData" : "_aSortData", c) }, 1) });
    s("columns().nodes()", "column().nodes()", function() { return this.iterator("column-rows", function(a, b, c, d, e) { return ka(a.aoData, e, "anCells", b) }, 1) });
    s("columns().visible()", "column().visible()",
        function(a, b) {
            var c = this,
                d = this.iterator("column", function(b, c) {
                    if (a === k) return b.aoColumns[c].bVisible;
                    var d = b.aoColumns,
                        j = d[c],
                        i = b.aoData,
                        m, l, n;
                    if (a !== k && j.bVisible !== a) {
                        if (a) {
                            var o = h.inArray(true, C(d, "bVisible"), c + 1);
                            m = 0;
                            for (l = i.length; m < l; m++) {
                                n = i[m].nTr;
                                d = i[m].anCells;
                                n && n.insertBefore(d[c], d[o] || null)
                            }
                        } else h(C(b.aoData, "anCells", c)).detach();
                        j.bVisible = a
                    }
                });
            a !== k && this.iterator("table", function(d) {
                ga(d, d.aoHeader);
                ga(d, d.aoFooter);
                d.aiDisplay.length || h(d.nTBody).find("td[colspan]").attr("colspan",
                    W(d));
                za(d);
                c.iterator("column", function(c, d) { t(c, null, "column-visibility", [c, d, a, b]) });
                (b === k || b) && c.columns.adjust()
            });
            return d
        });
    s("columns().indexes()", "column().index()", function(a) { return this.iterator("column", function(b, c) { return a === "visible" ? ca(b, c) : c }, 1) });
    o("columns.adjust()", function() { return this.iterator("table", function(a) { aa(a) }, 1) });
    o("column.index()", function(a, b) {
        if (this.context.length !== 0) {
            var c = this.context[0];
            if (a === "fromVisible" || a === "toData") return ba(c, b);
            if (a === "fromData" ||
                a === "toVisible") return ca(c, b)
        }
    });
    o("column()", function(a, b) { return db(this.columns(a, b)) });
    o("cells()", function(a, b, c) {
        if (h.isPlainObject(a))
            if (a.row === k) {
                c = a;
                a = null
            } else {
                c = b;
                b = null
            }
        if (h.isPlainObject(b)) {
            c = b;
            b = null
        }
        if (b === null || b === k) return this.iterator("table", function(b) {
            var d = a,
                e = cb(c),
                f = b.aoData,
                g = Da(b, e),
                j = Sb(ka(f, g, "anCells")),
                i = h(Tb([], j)),
                m, n = b.aoColumns.length,
                o, s, r, t, w, v;
            return bb("cell", d, function(a) {
                var c = typeof a === "function";
                if (a === null || a === k || c) {
                    o = [];
                    s = 0;
                    for (r = g.length; s < r; s++) {
                        m =
                            g[s];
                        for (t = 0; t < n; t++) {
                            w = { row: m, column: t };
                            if (c) {
                                v = f[m];
                                a(w, B(b, m, t), v.anCells ? v.anCells[t] : null) && o.push(w)
                            } else o.push(w)
                        }
                    }
                    return o
                }
                if (h.isPlainObject(a)) return a.column !== k && a.row !== k && h.inArray(a.row, g) !== -1 ? [a] : [];
                c = i.filter(a).map(function(a, b) { return { row: b._DT_CellIndex.row, column: b._DT_CellIndex.column } }).toArray();
                if (c.length || !a.nodeName) return c;
                v = h(a).closest("*[data-dt-row]");
                return v.length ? [{ row: v.data("dt-row"), column: v.data("dt-column") }] : []
            }, b, e)
        });
        var d = c ? {
                page: c.page,
                order: c.order,
                search: c.search
            } : {},
            e = this.columns(b, d),
            f = this.rows(a, d),
            g, j, i, m, d = this.iterator("table", function(a, b) {
                var c = [];
                g = 0;
                for (j = f[b].length; g < j; g++) { i = 0; for (m = e[b].length; i < m; i++) c.push({ row: f[b][g], column: e[b][i] }) }
                return c
            }, 1),
            d = c && c.selected ? this.cells(d, c) : d;
        h.extend(d.selector, { cols: b, rows: a, opts: c });
        return d
    });
    s("cells().nodes()", "cell().node()", function() { return this.iterator("cell", function(a, b, c) { return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : k }, 1) });
    o("cells().data()", function() {
        return this.iterator("cell",
            function(a, b, c) { return B(a, b, c) }, 1)
    });
    s("cells().cache()", "cell().cache()", function(a) { a = a === "search" ? "_aFilterData" : "_aSortData"; return this.iterator("cell", function(b, c, d) { return b.aoData[c][a][d] }, 1) });
    s("cells().render()", "cell().render()", function(a) { return this.iterator("cell", function(b, c, d) { return B(b, c, d, a) }, 1) });
    s("cells().indexes()", "cell().index()", function() { return this.iterator("cell", function(a, b, c) { return { row: b, column: c, columnVisible: ca(a, c) } }, 1) });
    s("cells().invalidate()", "cell().invalidate()",
        function(a) { return this.iterator("cell", function(b, c, d) { ea(b, c, a, d) }) });
    o("cell()", function(a, b, c) { return db(this.cells(a, b, c)) });
    o("cell().data()", function(a) {
        var b = this.context,
            c = this[0];
        if (a === k) return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;
        lb(b[0], c[0].row, c[0].column, a);
        ea(b[0], c[0].row, "data", c[0].column);
        return this
    });
    o("order()", function(a, b) {
        var c = this.context;
        if (a === k) return c.length !== 0 ? c[0].aaSorting : k;
        typeof a === "number" ? a = [
            [a, b]
        ] : a.length && !Array.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
        return this.iterator("table", function(b) { b.aaSorting = a.slice() })
    });
    o("order.listener()", function(a, b, c) { return this.iterator("table", function(d) { Oa(d, a, b, c) }) });
    o("order.fixed()", function(a) {
        if (!a) {
            var b = this.context,
                b = b.length ? b[0].aaSortingFixed : k;
            return Array.isArray(b) ? { pre: b } : b
        }
        return this.iterator("table", function(b) { b.aaSortingFixed = h.extend(true, {}, a) })
    });
    o(["columns().order()", "column().order()"], function(a) {
        var b = this;
        return this.iterator("table", function(c, d) {
            var e = [];
            h.each(b[d], function(b,
                c) { e.push([c, a]) });
            c.aaSorting = e
        })
    });
    o("search()", function(a, b, c, d) { var e = this.context; return a === k ? e.length !== 0 ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function(e) { e.oFeatures.bFilter && ha(e, h.extend({}, e.oPreviousSearch, { sSearch: a + "", bRegex: b === null ? false : b, bSmart: c === null ? true : c, bCaseInsensitive: d === null ? true : d }), 1) }) });
    s("columns().search()", "column().search()", function(a, b, c, d) {
        return this.iterator("column", function(e, f) {
            var g = e.aoPreSearchCols;
            if (a === k) return g[f].sSearch;
            if (e.oFeatures.bFilter) {
                h.extend(g[f], { sSearch: a + "", bRegex: b === null ? false : b, bSmart: c === null ? true : c, bCaseInsensitive: d === null ? true : d });
                ha(e, e.oPreviousSearch, 1)
            }
        })
    });
    o("state()", function() { return this.context.length ? this.context[0].oSavedState : null });
    o("state.clear()", function() { return this.iterator("table", function(a) { a.fnStateSaveCallback.call(a.oInstance, a, {}) }) });
    o("state.loaded()", function() { return this.context.length ? this.context[0].oLoadedState : null });
    o("state.save()", function() { return this.iterator("table", function(a) { za(a) }) });
    n.versionCheck = n.fnVersionCheck = function(a) {
        for (var b = n.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++) {
            c = parseInt(b[e], 10) || 0;
            d = parseInt(a[e], 10) || 0;
            if (c !== d) return c > d
        }
        return true
    };
    n.isDataTable = n.fnIsDataTable = function(a) {
        var b = h(a).get(0),
            c = false;
        if (a instanceof n.Api) return true;
        h.each(n.settings, function(a, e) {
            var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null,
                g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null;
            if (e.nTable === b || f === b || g === b) c = true
        });
        return c
    };
    n.tables = n.fnTables =
        function(a) {
            var b = false;
            if (h.isPlainObject(a)) {
                b = a.api;
                a = a.visible
            }
            var c = h.map(n.settings, function(b) { if (!a || a && h(b.nTable).is(":visible")) return b.nTable });
            return b ? new r(c) : c
        };
    n.camelToHungarian = J;
    o("$()", function(a, b) {
        var c = this.rows(b).nodes(),
            c = h(c);
        return h([].concat(c.filter(a).toArray(), c.find(a).toArray()))
    });
    h.each(["on", "one", "off"], function(a, b) {
        o(b + "()", function() {
            var a = Array.prototype.slice.call(arguments);
            a[0] = h.map(a[0].split(/\s/), function(a) { return !a.match(/\.dt\b/) ? a + ".dt" : a }).join(" ");
            var d = h(this.tables().nodes());
            d[b].apply(d, a);
            return this
        })
    });
    o("clear()", function() { return this.iterator("table", function(a) { pa(a) }) });
    o("settings()", function() { return new r(this.context, this.context) });
    o("init()", function() { var a = this.context; return a.length ? a[0].oInit : null });
    o("data()", function() { return this.iterator("table", function(a) { return C(a.aoData, "_aData") }).flatten() });
    o("destroy()", function(a) {
        a = a || false;
        return this.iterator("table", function(b) {
            var c = b.nTableWrapper.parentNode,
                d = b.oClasses,
                e = b.nTable,
                f = b.nTBody,
                g = b.nTHead,
                j = b.nTFoot,
                i = h(e),
                f = h(f),
                k = h(b.nTableWrapper),
                l = h.map(b.aoData, function(a) { return a.nTr }),
                o;
            b.bDestroying = true;
            t(b, "aoDestroyCallback", "destroy", [b]);
            a || (new r(b)).columns().visible(true);
            k.off(".DT").find(":not(tbody *)").off(".DT");
            h(E).off(".DT-" + b.sInstance);
            if (e != g.parentNode) {
                i.children("thead").detach();
                i.append(g)
            }
            if (j && e != j.parentNode) {
                i.children("tfoot").detach();
                i.append(j)
            }
            b.aaSorting = [];
            b.aaSortingFixed = [];
            ya(b);
            h(l).removeClass(b.asStripeClasses.join(" "));
            h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
            f.children().detach();
            f.append(l);
            g = a ? "remove" : "detach";
            i[g]();
            k[g]();
            if (!a && c) {
                c.insertBefore(e, b.nTableReinsertBefore);
                i.css("width", b.sDestroyWidth).removeClass(d.sTable);
                (o = b.asDestroyStripes.length) && f.children().each(function(a) { h(this).addClass(b.asDestroyStripes[a % o]) })
            }
            c = h.inArray(b, n.settings);
            c !== -1 && n.settings.splice(c, 1)
        })
    });
    h.each(["column", "row", "cell"], function(a, b) {
        o(b + "s().every()",
            function(a) {
                var d = this.selector.opts,
                    e = this;
                return this.iterator(b, function(f, g, h, i, m) { a.call(e[b](g, b === "cell" ? h : d, b === "cell" ? d : k), g, h, i, m) })
            })
    });
    o("i18n()", function(a, b, c) {
        var d = this.context[0],
            a = S(a)(d.oLanguage);
        a === k && (a = b);
        c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);
        return a.replace("%d", c)
    });
    n.version = "1.10.22";
    n.settings = [];
    n.models = {};
    n.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 };
    n.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1
    };
    n.models.oColumn = { idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: !1, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, nTh: null, nTf: null, sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null };
    n.defaults = {
        aaData: null,
        aaSorting: [
            [0, "asc"]
        ],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [5, 10, 15, 20, 25],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function(a) { return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands) },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function(a) { try { return JSON.parse((a.iStateDuration === -1 ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname)) } catch (b) { return {} } },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function(a, b) {
            try {
                (a.iStateDuration === -1 ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
            } catch (c) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 5,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" },
            oPaginate: { sFirst: "Đầu", sLast: "Cuối", sNext: "Sau", sPrevious: "Trước" },
            sEmptyTable: "Chưa có món nào được gọi!",
            sInfo: "Hiển thị _START_ - _END_ của _TOTAL_ dữ liệu",
            sInfoEmpty: "Dữ liệu rỗng",
            sInfoFiltered: "(Đã lọc từ _MAX_ dữ liệu)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Hiển thị _MENU_ dữ liệu",
            sLoadingRecords: "Đang tải...",
            sProcessing: "Đang xử lý...",
            sSearch: "Tìm kiếm:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "Không tìm thấy dữ iệu phù hợp"
        },
        oSearch: h.extend({}, n.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId"
    };
    $(n.defaults);
    n.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null
    };
    $(n.defaults.column);
    n.models.oSettings = {
        oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null },
        oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null
        },
        oLanguage: { fnInfoCallback: null },
        oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: k,
        oAjaxData: k,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 5,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function() { return y(this) == "ssp" ? this._iRecordsTotal * 1 : this.aiDisplayMaster.length },
        fnRecordsDisplay: function() { return y(this) == "ssp" ? this._iRecordsDisplay * 1 : this.aiDisplay.length },
        fnDisplayEnd: function() {
            var a = this._iDisplayLength,
                b = this._iDisplayStart,
                c = b + a,
                d = this.aiDisplay.length,
                e = this.oFeatures,
                f = e.bPaginate;
            return e.bServerSide ? f === false || a === -1 ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || a === -1 ? d : c
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    };
    n.ext = v = {
        buttons: {},
        classes: {},
        builder: "-source-",
        errMode: "alert",
        feature: [],
        search: [],
        selector: { cell: [], column: [], row: [] },
        internal: {},
        legacy: { ajax: null },
        pager: {},
        renderer: { pageButton: {}, header: {} },
        order: {},
        type: { detect: [], search: {}, order: {} },
        _unique: 0,
        fnVersionCheck: n.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: n.version
    };
    h.extend(v, { afnFiltering: v.search, aTypes: v.type.detect, ofnSearch: v.type.search, oSort: v.type.order, afnSortData: v.order, aoFeatures: v.feature, oApi: v.internal, oStdClasses: v.classes, oPagination: v.pager });
    h.extend(n.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: ""
    });
    var Mb = n.ext.pager;
    h.extend(Mb, {
        simple: function() { return ["previous", "next"] },
        full: function() { return ["first", "previous", "next", "last"] },
        numbers: function(a, b) { return [ja(a, b)] },
        simple_numbers: function(a, b) { return ["previous", ja(a, b), "next"] },
        full_numbers: function(a,
            b) { return ["first", "previous", ja(a, b), "next", "last"] },
        first_last_numbers: function(a, b) { return ["first", ja(a, b), "last"] },
        _numbers: ja,
        numbers_length: 7
    });
    h.extend(!0, n.ext.renderer, {
        pageButton: {
            _: function(a, b, c, d, e, f) {
                var g = a.oClasses,
                    j = a.oLanguage.oPaginate,
                    i = a.oLanguage.oAria.paginate || {},
                    m, l, n = 0,
                    o = function(b, d) {
                        var k, s, r, t, v = g.sPageButtonDisabled,
                            w = function(b) { Va(a, b.data.action, true) };
                        k = 0;
                        for (s = d.length; k < s; k++) {
                            t = d[k];
                            if (Array.isArray(t)) {
                                r = h("<" + (t.DT_el || "div") + "/>").appendTo(b);
                                o(r, t)
                            } else {
                                m = null;
                                l = t;
                                r = a.iTabIndex;
                                switch (t) {
                                    case "ellipsis":
                                        b.append('<span class="ellipsis">&#x2026;</span>');
                                        break;
                                    case "first":
                                        m = j.sFirst;
                                        if (e === 0) {
                                            r = -1;
                                            l = l + (" " + v)
                                        }
                                        break;
                                    case "previous":
                                        m = j.sPrevious;
                                        if (e === 0) {
                                            r = -1;
                                            l = l + (" " + v)
                                        }
                                        break;
                                    case "next":
                                        m = j.sNext;
                                        if (f === 0 || e === f - 1) {
                                            r = -1;
                                            l = l + (" " + v)
                                        }
                                        break;
                                    case "last":
                                        m = j.sLast;
                                        if (f === 0 || e === f - 1) {
                                            r = -1;
                                            l = l + (" " + v)
                                        }
                                        break;
                                    default:
                                        m = a.fnFormatNumber(t + 1);
                                        l = e === t ? g.sPageButtonActive : ""
                                }
                                if (m !== null) {
                                    r = h("<a>", {
                                        "class": g.sPageButton + " " + l,
                                        "aria-controls": a.sTableId,
                                        "aria-label": i[t],
                                        "data-dt-idx": n,
                                        tabindex: r,
                                        id: c === 0 && typeof t === "string" ? a.sTableId + "_" + t : null
                                    }).html(m).appendTo(b);
                                    Xa(r, { action: t }, w);
                                    n++
                                }
                            }
                        }
                    },
                    s;
                try { s = h(b).find(H.activeElement).data("dt-idx") } catch (r) {}
                o(h(b).empty(), d);
                s !== k && h(b).find("[data-dt-idx=" + s + "]").trigger("focus")
            }
        }
    });
    h.extend(n.ext.type.detect, [function(a, b) { var c = b.oLanguage.sDecimal; return ab(a, c) ? "num" + c : null }, function(a) { if (a && !(a instanceof Date) && !bc.test(a)) return null; var b = Date.parse(a); return b !== null && !isNaN(b) || M(a) ? "date" : null }, function(a,
        b) { var c = b.oLanguage.sDecimal; return ab(a, c, true) ? "num-fmt" + c : null }, function(a, b) { var c = b.oLanguage.sDecimal; return Rb(a, c) ? "html-num" + c : null }, function(a, b) { var c = b.oLanguage.sDecimal; return Rb(a, c, true) ? "html-num-fmt" + c : null }, function(a) { return M(a) || typeof a === "string" && a.indexOf("<") !== -1 ? "html" : null }]);
    h.extend(n.ext.type.search, { html: function(a) { return M(a) ? a : typeof a === "string" ? a.replace(Ob, " ").replace(Ca, "") : "" }, string: function(a) { return M(a) ? a : typeof a === "string" ? a.replace(Ob, " ") : a } });
    var Ba =
        function(a, b, c, d) {
            if (a !== 0 && (!a || a === "-")) return -Infinity;
            b && (a = Qb(a, b));
            if (a.replace) {
                c && (a = a.replace(c, ""));
                d && (a = a.replace(d, ""))
            }
            return a * 1
        };
    h.extend(v.type.order, {
        "date-pre": function(a) { a = Date.parse(a); return isNaN(a) ? -Infinity : a },
        "html-pre": function(a) { return M(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "" },
        "string-pre": function(a) { return M(a) ? "" : typeof a === "string" ? a.toLowerCase() : !a.toString ? "" : a.toString() },
        "string-asc": function(a, b) { return a < b ? -1 : a > b ? 1 : 0 },
        "string-desc": function(a,
            b) { return a < b ? 1 : a > b ? -1 : 0 }
    });
    Fa("");
    h.extend(!0, n.ext.renderer, {
        header: {
            _: function(a, b, c, d) {
                h(a.nTable).on("order.dt.DT", function(e, f, g, h) {
                    if (a === f) {
                        e = c.idx;
                        b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass)
                    }
                })
            },
            jqueryui: function(a, b, c, d) {
                h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                h(a.nTable).on("order.dt.DT", function(e,
                    f, g, h) {
                    if (a === f) {
                        e = c.idx;
                        b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);
                        b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] == "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
                    }
                })
            }
        }
    });
    var fb = function(a) {
        return typeof a === "string" ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") :
            a
    };
    n.render = {
        number: function(a, b, c, d, e) {
            return {
                display: function(f) {
                    if (typeof f !== "number" && typeof f !== "string") return f;
                    var g = f < 0 ? "-" : "",
                        h = parseFloat(f);
                    if (isNaN(h)) return fb(f);
                    h = h.toFixed(c);
                    f = Math.abs(h);
                    h = parseInt(f, 10);
                    f = c ? b + (f - h).toFixed(c).substring(2) : "";
                    return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "")
                }
            }
        },
        text: function() { return { display: fb, filter: fb } }
    };
    h.extend(n.ext.internal, {
        _fnExternApiFunc: Nb,
        _fnBuildAjax: ta,
        _fnAjaxUpdate: nb,
        _fnAjaxParameters: wb,
        _fnAjaxUpdateDraw: xb,
        _fnAjaxDataSrc: ua,
        _fnAddColumn: Ga,
        _fnColumnOptions: la,
        _fnAdjustColumnSizing: aa,
        _fnVisibleToColumnIndex: ba,
        _fnColumnIndexToVisible: ca,
        _fnVisbleColumns: W,
        _fnGetColumns: na,
        _fnColumnTypes: Ia,
        _fnApplyColumnDefs: kb,
        _fnHungarianMap: $,
        _fnCamelToHungarian: J,
        _fnLanguageCompat: Ea,
        _fnBrowserDetect: ib,
        _fnAddData: O,
        _fnAddTr: oa,
        _fnNodeToDataIndex: function(a, b) { return b._DT_RowIndex !== k ? b._DT_RowIndex : null },
        _fnNodeToColumnIndex: function(a, b, c) { return h.inArray(c, a.aoData[b].anCells) },
        _fnGetCellData: B,
        _fnSetCellData: lb,
        _fnSplitObjNotation: La,
        _fnGetObjectDataFn: S,
        _fnSetObjectDataFn: N,
        _fnGetDataMaster: Ma,
        _fnClearTable: pa,
        _fnDeleteIndex: qa,
        _fnInvalidate: ea,
        _fnGetRowElements: Ka,
        _fnCreateTr: Ja,
        _fnBuildHead: mb,
        _fnDrawHead: ga,
        _fnDraw: P,
        _fnReDraw: T,
        _fnAddOptionsHtml: pb,
        _fnDetectHeader: fa,
        _fnGetUniqueThs: sa,
        _fnFeatureHtmlFilter: rb,
        _fnFilterComplete: ha,
        _fnFilterCustom: Ab,
        _fnFilterColumn: zb,
        _fnFilter: yb,
        _fnFilterCreateSearch: Ra,
        _fnEscapeRegex: Sa,
        _fnFilterData: Bb,
        _fnFeatureHtmlInfo: ub,
        _fnUpdateInfo: Eb,
        _fnInfoMacros: Fb,
        _fnInitialise: ia,
        _fnInitComplete: va,
        _fnLengthChange: Ta,
        _fnFeatureHtmlLength: qb,
        _fnFeatureHtmlPaginate: vb,
        _fnPageChange: Va,
        _fnFeatureHtmlProcessing: sb,
        _fnProcessingDisplay: D,
        _fnFeatureHtmlTable: tb,
        _fnScrollDraw: ma,
        _fnApplyToChildren: I,
        _fnCalculateColumnWidths: Ha,
        _fnThrottle: Qa,
        _fnConvertToWidth: Gb,
        _fnGetWidestNode: Hb,
        _fnGetMaxLenString: Ib,
        _fnStringToCss: w,
        _fnSortFlatten: Y,
        _fnSort: ob,
        _fnSortAria: Kb,
        _fnSortListener: Wa,
        _fnSortAttachListener: Oa,
        _fnSortingClasses: ya,
        _fnSortData: Jb,
        _fnSaveState: za,
        _fnLoadState: Lb,
        _fnSettingsFromNode: Aa,
        _fnLog: K,
        _fnMap: F,
        _fnBindAction: Xa,
        _fnCallbackReg: z,
        _fnCallbackFire: t,
        _fnLengthOverflow: Ua,
        _fnRenderer: Pa,
        _fnDataSource: y,
        _fnRowAttributes: Na,
        _fnExtend: Ya,
        _fnCalculateEnd: function() {}
    });
    h.fn.dataTable = n;
    n.$ = h;
    h.fn.dataTableSettings = n.settings;
    h.fn.dataTableExt = n.ext;
    h.fn.DataTable = function(a) { return h(this).dataTable(a).api() };
    h.each(n, function(a, b) { h.fn.DataTable[a] = b });
    return h.fn.dataTable
});


/*! DataTables Bootstrap 4 integration
 * ©2011-2017 SpryMedia Ltd - datatables.net/license
 */

/**
 * DataTables integration for Bootstrap 4. This requires Bootstrap 4 and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using Bootstrap. See http://datatables.net/manual/styling/bootstrap
 * for further information.
 */
(function(a) { if (typeof define === "function" && define.amd) { define(["jquery", "datatables.net"], function(b) { return a(b, window, document) }) } else { if (typeof exports === "object") { module.exports = function(b, c) { if (!b) { b = window } if (!c || !c.fn.dataTable) { c = require("datatables.net")(b, c).$ } return a(c, b, b.document) } } else { a(jQuery, window, document) } } }(function(d, b, a, e) {
    var c = d.fn.dataTable;
    d.extend(true, c.defaults, { dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>", renderer: "bootstrap" });
    d.extend(c.ext.classes, { sWrapper: "dataTables_wrapper dt-bootstrap4", sFilterInput: "form-control form-control-sm", sLengthSelect: "custom-select custom-select-sm form-control form-control-sm", sProcessing: "dataTables_processing card", sPageButton: "paginate_button page-item" });
    c.ext.renderer.pageButton.bootstrap = function(l, u, t, r, q, j) {
        var o = new c.Api(l);
        var m = l.oClasses;
        var i = l.oLanguage.oPaginate;
        var s = l.oLanguage.oAria.paginate || {};
        var h, g, f = 0;
        var n = function(w, A) {
            var y, v, z, x;
            var B = function(C) { C.preventDefault(); if (!d(C.currentTarget).hasClass("disabled") && o.page() != C.data.action) { o.page(C.data.action).draw("page") } };
            for (y = 0, v = A.length; y < v; y++) {
                x = A[y];
                if (Array.isArray(x)) { n(w, x) } else {
                    h = "";
                    g = "";
                    switch (x) {
                        case "ellipsis":
                            h = "&#x2026;";
                            g = "disabled";
                            break;
                        case "first":
                            h = i.sFirst;
                            g = x + (q > 0 ? "" : " disabled");
                            break;
                        case "previous":
                            h = i.sPrevious;
                            g = x + (q > 0 ? "" : " disabled");
                            break;
                        case "next":
                            h = i.sNext;
                            g = x + (q < j - 1 ? "" : " disabled");
                            break;
                        case "last":
                            h = i.sLast;
                            g = x + (q < j - 1 ? "" : " disabled");
                            break;
                        default:
                            h = x + 1;
                            g = q === x ? "active" : "";
                            break
                    }
                    if (h) {
                        z = d("<li>", { "class": m.sPageButton + " " + g, id: t === 0 && typeof x === "string" ? l.sTableId + "_" + x : null }).append(d("<a>", { href: "#", "aria-controls": l.sTableId, "aria-label": s[x], "data-dt-idx": f, tabindex: l.iTabIndex, "class": "page-link" }).html(h)).appendTo(w);
                        l.oApi._fnBindAction(z, { action: x }, B);
                        f++
                    }
                }
            }
        };
        var k;
        try { k = d(u).find(a.activeElement).data("dt-idx") } catch (p) {}
        n(d(u).empty().html('<ul class="pagination"/>').children("ul"), r);
        if (k !== e) { d(u).find("[data-dt-idx=" + k + "]").trigger("focus") }
    };
    return c
}));

/*
 * Note that this is toastr v2.1.3, the "latest" version in url has no more maintenance,
 * please go to https://cdnjs.com/libraries/toastr.js and pick a certain version you want to use,
 * make sure you copy the url from the website since the url may change between versions.
 * */
! function(e) {
    e(["jquery"], function(e) {
        return function() {
            function t(e, t, n) { return g({ type: O.error, iconClass: m().iconClasses.error, message: e, optionsOverride: n, title: t }) }

            function n(t, n) { return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (n && (v = d(t)), v) }

            function o(e, t, n) { return g({ type: O.info, iconClass: m().iconClasses.info, message: e, optionsOverride: n, title: t }) }

            function s(e) { C = e }

            function i(e, t, n) { return g({ type: O.success, iconClass: m().iconClasses.success, message: e, optionsOverride: n, title: t }) }

            function a(e, t, n) { return g({ type: O.warning, iconClass: m().iconClasses.warning, message: e, optionsOverride: n, title: t }) }

            function r(e, t) {
                var o = m();
                v || n(o), u(e, o, t) || l(o)
            }

            function c(t) { var o = m(); return v || n(o), t && 0 === e(":focus", t).length ? void h(t) : void(v.children().length && v.remove()) }

            function l(t) { for (var n = v.children(), o = n.length - 1; o >= 0; o--) u(e(n[o]), t) }

            function u(t, n, o) { var s = !(!o || !o.force) && o.force; return !(!t || !s && 0 !== e(":focus", t).length) && (t[n.hideMethod]({ duration: n.hideDuration, easing: n.hideEasing, complete: function() { h(t) } }), !0) }

            function d(t) { return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v }

            function p() { return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, closeMethod: !1, closeDuration: !1, closeEasing: !1, closeOnHover: !0, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", escapeHtml: !1, target: "body", closeHtml: '<button type="button">&times;</button>', closeClass: "toast-close-button", newestOnTop: !0, preventDuplicates: !1, progressBar: !1, progressClass: "toast-progress", rtl: !1 } }

            function f(e) { C && C(e) }

            function g(t) {
                function o(e) { return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") }

                function s() { c(), u(), d(), p(), g(), C(), l(), i() }

                function i() {
                    var e = "";
                    switch (t.iconClass) {
                        case "toast-success":
                        case "toast-info":
                            e = "polite";
                            break;
                        default:
                            e = "assertive"
                    }
                    I.attr("aria-live", e)
                }

                function a() { E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function(e) { e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e), b(!0) }), E.onclick && I.click(function(e) { E.onclick(e), b() }) }

                function r() { I.hide(), I[E.showMethod]({ duration: E.showDuration, easing: E.showEasing, complete: E.onShown }), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = (new Date).getTime() + F.maxHideTime, E.progressBar && (F.intervalId = setInterval(x, 10))) }

                function c() { t.iconClass && I.addClass(E.toastClass).addClass(y) }

                function l() { E.newestOnTop ? v.prepend(I) : v.append(I) }

                function u() {
                    if (t.title) {
                        var e = t.title;
                        E.escapeHtml && (e = o(t.title)), M.append(e).addClass(E.titleClass), I.append(M)
                    }
                }

                function d() {
                    if (t.message) {
                        var e = t.message;
                        E.escapeHtml && (e = o(t.message)), B.append(e).addClass(E.messageClass), I.append(B)
                    }
                }

                function p() { E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j)) }

                function g() { E.progressBar && (q.addClass(E.progressClass), I.prepend(q)) }

                function C() { E.rtl && I.addClass("rtl") }

                function O(e, t) {
                    if (e.preventDuplicates) {
                        if (t.message === w) return !0;
                        w = t.message
                    }
                    return !1
                }

                function b(t) {
                    var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
                        o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
                        s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
                    if (!e(":focus", I).length || t) return clearTimeout(F.intervalId), I[n]({ duration: o, easing: s, complete: function() { h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date, f(P) } })
                }

                function D() {
                    (E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = (new Date).getTime() + F.maxHideTime)
                }

                function H() { clearTimeout(k), F.hideEta = 0, I.stop(!0, !0)[E.showMethod]({ duration: E.showDuration, easing: E.showEasing }) }

                function x() {
                    var e = (F.hideEta - (new Date).getTime()) / F.maxHideTime * 100;
                    q.width(e + "%")
                }
                var E = m(),
                    y = t.iconClass || E.iconClass;
                if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), y = t.optionsOverride.iconClass || y), !O(E, t)) {
                    T++, v = n(E, !0);
                    var k = null,
                        I = e("<div/>"),
                        M = e("<div/>"),
                        B = e("<div/>"),
                        q = e("<div/>"),
                        j = e(E.closeHtml),
                        F = { intervalId: null, hideEta: null, maxHideTime: null },
                        P = { toastId: T, state: "visible", startTime: new Date, options: E, map: t };
                    return s(), r(), a(), f(P), E.debug && console && console.log(P), I
                }
            }

            function m() { return e.extend({}, p(), b.options) }

            function h(e) { v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), w = void 0)) }
            var v, C, w, T = 0,
                O = { error: "error", info: "info", success: "success", warning: "warning" },
                b = { clear: r, remove: c, error: t, getContainer: n, info: o, options: {}, subscribe: s, success: i, version: "2.1.3", warning: a };
            return b
        }()
    })
}("function" == typeof define && define.amd ? define : function(e, t) { "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery) });
//# sourceMappingURL=toastr.js.map


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

// Ready when load full page
$(document).ready(function() {

    /*
      ////////////////////////////////////////////////
        Variables
      ////////////////////////////////////////////////
    */

    var blocks = $('.block-content');
    var foods = $("#food");
    var tablesToChange = $('#to-table');
    var tableFoods = $("#table-foods");
    var discount = $("#discount");
    var checkoutModal = $('#checkoutModal');
    var currentTable = $('.table-food.w-100.btn').first();

    var currentTableID = 1;
    var totalBillPrice = 0;

    /*
      ////////////////////////////////////////////////
        End Variables
      ////////////////////////////////////////////////
    */



    /*
      ////////////////////////////////////////////////
        Functions
      ////////////////////////////////////////////////
    */

    if (currentTable.text().match("Trống")) {
        currentTable.css({ "border": "8px solid #86f9d0", "padding": "8px" });
    } else {
        currentTable.css({ "border": "8px solid #ff8a8a", "padding": "8px" });
    }
    // Make round table was selected
    function roundTableSelect(table) {
        currentTable.css({ "border": "", "padding": "" });

        if (table.text().match("Trống")) {
            table.css({ "border": "8px solid #86f9d0", "padding": "8px" });
        } else {
            table.css({ "border": "8px solid #ff8a8a", "padding": "8px" });
        }
        currentTable = table;
    }

    // Find block has input search content
    function findBlock(inputContent) {
        $.each(blocks, function() {
            if ($(this).html().includes(inputContent)) {
                if ($(this).hasClass('d-none')) {
                    $(this).removeClass('d-none');
                    $(this).addClass('d-block');
                } else {
                    $(this).addClass('d-block');
                }
            } else if ($(this).hasClass('d-block')) {
                $(this).removeClass('d-block');
                $(this).addClass('d-none');
            } else {
                $(this).addClass('d-none');
            }
        });
    }

    // Update foods follow category
    function updateFoods(foodsData) {
        $(foods).find('option').remove();
        $.each(JSON.parse(foodsData), function() {
            $(foods).append($('<option></option>')
                .attr('value', this.id)
                .text(this.name));
        });
    }

    // Update tables to change
    function updateTablesToChange(tablesToChangeData) {
        $(tablesToChange).find('option').remove();
        $.each(JSON.parse(tablesToChangeData), function() {
            $(tablesToChange).append($('<option></option>')
                .attr('value', this.id)
                .text(this.name));
        });
    }

    // Update all tables
    function reloadAllTables(tableFoodsData) {
        var divTags = $(tableFoods).find('div');
        $.each(JSON.parse(tableFoodsData), function(i) {
            $(divTags[i]).attr('class', 'table-food w-100 btn ' + ((this.status == 'Trống') ? "btn-success" : "btn-danger"))
                .attr('data-table-id', this.id);
            $(divTags[i]).find('h5').text(this.name);
            $(divTags[i]).find('p').text(this.status);
        });
    }

    // Get total bill price
    function getTotalBillPrice(data) {
        var result = 0;
        data = JSON.parse(data).data;
        $.each(data, function(i) {
            // alert(this.total_price);
            result += parseInt(this.total_price);
        });
        return result;
    }

    function reloadPage() {
        // reload all tables
        $.ajax({
            url: 'inc/all-tables/data/get-all-tables.php',
            type: 'GET',
            success: function(response) {
                reloadAllTables(response);
            }
        });

        // reload bill datatable
        $('#bill-content').DataTable().ajax.reload();
    }

    /*
      ////////////////////////////////////////////////
        End Functions
      ////////////////////////////////////////////////
    */



    /*
      ////////////////////////////////////////////////
        Events  
      ////////////////////////////////////////////////
    */

    // Load foods when change category
    $('#category').on('change', function() {
        var value = $(this).val();

        $.ajax({
            url: 'inc/all-tables/data/get-foods-by-categoryID.php',
            data: { currentCategoryID: value },
            type: 'POST',
            success: function(response) {
                updateFoods(response);
            }
        })
    });

    // Load bill, change table when table was clicked
    $(".table-food").on('click', function() {
        roundTableSelect($(this));

        var tableID = $(this).data('table-id');
        currentTableID = tableID;

        // Reload bill datatable
        $('#bill-content').DataTable().ajax.reload();

        $.ajax({
            url: 'inc/all-tables/data/get-table-by-tableID.php',
            data: { currentTableID: currentTableID },
            type: 'POST',
            success: function(response) {
                // Update bill-title
                var tableInfo = JSON.parse(response);
                $('#bill-title').text("Hoá đơn của '" + tableInfo.name + "'");

                // Update change-table-description
                $('#change-table-description').text("Từ '" + tableInfo.name + "'");

                // Update tables to change except current table
                $.ajax({
                    url: 'inc/all-tables/data/get-tables-except-current.php',
                    data: { currentTableID: currentTableID },
                    type: 'POST',
                    success: function(response) {
                        updateTablesToChange(response);
                    }
                });
            }
        });

    });

    // Load bill datatable
    $('#bill-content').DataTable({
        ajax: {
            url: 'inc/all-tables/data/get-bill-by-tableID.php',
            data: {
                currentTableID: function getCurrentTableID() {
                    return currentTableID;
                }
            },
            type: 'POST'
        },
        columns: [
            { "data": "food_name" },
            { "data": "food_count" },
            { "data": "food_price" },
            { "data": "total_price" }
        ]
    });

    // Add food to table
    $('#btn-add-food').click(function() {
        // alert('Mã bàn: ' + currentTableID);
        // alert('Mã món ăn: ' + $('#food option:selected').val());
        // alert('Số lượng: ' + $('#count').val());

        var foodID = $('#food option:selected').val();
        var foodCount = $('#count').val();

        $.ajax({
            url: 'inc/all-tables/data/add-food-to-table.php',
            data: {
                currentTableID: currentTableID,
                foodID: foodID,
                foodCount: foodCount
            },
            type: 'POST',
            success: function(response) {
                // alert(response);
                if (response.indexOf("KHÔNG") != -1) {
                    toastr.error('Thêm món không thành công!');
                }
                reloadPage();
            },
            error: function() {
                toastr.error('Thêm món không thành công!');
            }
        });

    });

    // Change checkout popup content
    $('#btn-check-out').click(function() {
        var tableName = $(".wrap-table-food").find("[data-table-id='" + currentTableID + "'] h5").text();
        // alert(tableName);
        $.ajax({
            url: 'inc/all-tables/data/get-bill-by-tableID.php',
            data: {
                currentTableID: function getCurrentTableID() {
                    return currentTableID;
                }
            },
            type: 'POST',
            success: function(response) {
                totalBillPrice = getTotalBillPrice(response);

                var modalContent = "";
                var discount = $('#discount').val();
                if (totalBillPrice == 0) {
                    modalContent = "Bạn có chắc chắn muốn thanh toán cho '" + tableName + "'?<br>" +
                        "Số tiền cần phải thanh toán: 0 VNĐ";
                } else if (discount == 0) {
                    modalContent = "Bạn có chắc chắn muốn thanh toán cho '" + tableName + "'?<br>" +
                        "Số tiền cần phải thanh toán: " + totalBillPrice + " VNĐ";
                } else {
                    modalContent = "Bạn có chắc chắn muốn thanh toán cho '" + tableName + "'?<br>" +
                        "Số tiền cần phải thanh toán:<br>" +
                        totalBillPrice + " - " + totalBillPrice + " x " + discount + "% = " + totalBillPrice * (1 - discount / 100) + " VNĐ";
                }

                $(checkoutModal).find('.modal-body').html(modalContent);
            }
        });


    });

    // Checkout Table
    $('#btn-check-out-modal').click(function() {
        // alert($('.dataTables_empty').text());
        if ($('.dataTables_empty').text().indexOf('Chưa có món nào được gọi!') != -1) {
            toastr.warning('Đây là bàn trống, không thể thanh toán!');
        } else {
            $.ajax({
                url: 'inc/all-tables/data/check-out-table.php',
                data: {
                    currentTableID: function getCurrentTableID() {
                        return currentTableID;
                    },
                    discount: function getDiscount() {
                        return $(discount).val();
                    }
                },
                type: 'POST',
                success: function(response) {
                    // alert(response);
                    if (response.indexOf("KHÔNG") != -1) {
                        toastr.error('Thanh toán không thành công!');
                    } else {
                        toastr.success('Thanh toán thành công!');
                    }

                    reloadPage();
                },
                error: function() {
                    toastr.error('Thanh toán không thành công!');
                }
            });
        }
    });

    // Change table
    $('#btn-change-table').click(function() {
        var firstTableID = currentTableID;
        var secondTableID = $('#to-table option:selected').val();
        // alert(firstTableID + ' ' + secondTableID);

        if ($('.dataTables_empty').text().indexOf('Chưa có món nào được gọi!') != -1) {
            toastr.warning('Đây là bàn trống, không thể chuyển bàn!');
        } else {
            $.ajax({
                url: 'inc/all-tables/data/change-table-from-to.php',
                type: 'POST',
                data: {
                    firstTableID: firstTableID,
                    secondTableID: secondTableID
                },
                success: function(response) {
                    // alert(response);
                    if (response.indexOf("KHÔNG") != -1) {
                        toastr.error('Chuyển bàn không thành công!');
                    } else {
                        toastr.success('Chuyển bàn thành công!');
                    }

                    reloadPage();
                },
                error: function() {
                    toastr.error('Chuyển bàn không thành công!');
                }
            });
        }
    });

    // Find block content
    $('.input-search').keyup(function() {
        var inputContent = this.value;
        findBlock(inputContent);
    });


    /*
      ////////////////////////////////////////////////
        End Events
      ////////////////////////////////////////////////
    */



});