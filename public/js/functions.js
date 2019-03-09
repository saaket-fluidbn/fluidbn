! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 1)
}({
    1: function (e, t, n) {
        e.exports = n("9TV/")
    },
    "7t+N": function (e, t, n) {
        var r;
        ! function (t, n) {
            "use strict";
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : this, function (n, o) {
            "use strict";
            var i = [],
                a = n.document,
                s = Object.getPrototypeOf,
                u = i.slice,
                l = i.concat,
                c = i.push,
                f = i.indexOf,
                d = {},
                p = d.toString,
                h = d.hasOwnProperty,
                g = h.toString,
                m = g.call(Object),
                v = {},
                y = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                x = function (e) {
                    return null != e && e === e.window
                },
                b = {
                    type: !0,
                    src: !0,
                    noModule: !0
                };

            function w(e, t, n) {
                var r, o = (t = t || a).createElement("script");
                if (o.text = e, n)
                    for (r in b) n[r] && (o[r] = n[r]);
                t.head.appendChild(o).parentNode.removeChild(o)
            }

            function k(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e
            }
            var T = function (e, t) {
                    return new T.fn.init(e, t)
                },
                C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            function E(e) {
                var t = !!e && "length" in e && e.length,
                    n = k(e);
                return !y(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            T.fn = T.prototype = {
                jquery: "3.3.1",
                constructor: T,
                length: 0,
                toArray: function () {
                    return u.call(this)
                },
                get: function (e) {
                    return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function (e) {
                    var t = T.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function (e) {
                    return T.each(this, e)
                },
                map: function (e) {
                    return this.pushStack(T.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function () {
                    return this.pushStack(u.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function () {
                    return this.prevObject || this.constructor()
                },
                push: c,
                sort: i.sort,
                splice: i.splice
            }, T.extend = T.fn.extend = function () {
                var e, t, n, r, o, i, a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (T.isPlainObject(r) || (o = Array.isArray(r))) ? (o ? (o = !1, i = n && Array.isArray(n) ? n : []) : i = n && T.isPlainObject(n) ? n : {}, a[t] = T.extend(l, i, r)) : void 0 !== r && (a[t] = r));
                return a
            }, T.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                },
                noop: function () {},
                isPlainObject: function (e) {
                    var t, n;
                    return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && g.call(n) === m)
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function (e) {
                    w(e)
                },
                each: function (e, t) {
                    var n, r = 0;
                    if (E(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                trim: function (e) {
                    return null == e ? "" : (e + "").replace(C, "")
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (E(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
                },
                inArray: function (e, t, n) {
                    return null == t ? -1 : f.call(t, e, n)
                },
                merge: function (e, t) {
                    for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                    return e.length = o, e
                },
                grep: function (e, t, n) {
                    for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
                    return r
                },
                map: function (e, t, n) {
                    var r, o, i = 0,
                        a = [];
                    if (E(e))
                        for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
                    else
                        for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                    return l.apply([], a)
                },
                guid: 1,
                support: v
            }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = i[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                d["[object " + t + "]"] = t.toLowerCase()
            });
            var S = function (e) {
                var t, n, r, o, i, a, s, u, l, c, f, d, p, h, g, m, v, y, x, b = "sizzle" + 1 * new Date,
                    w = e.document,
                    k = 0,
                    T = 0,
                    C = ae(),
                    E = ae(),
                    S = ae(),
                    D = function (e, t) {
                        return e === t && (f = !0), 0
                    },
                    N = {}.hasOwnProperty,
                    A = [],
                    j = A.pop,
                    q = A.push,
                    L = A.push,
                    H = A.slice,
                    O = function (e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    _ = "[\\x20\\t\\r\\n\\f]",
                    P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    R = "\\[" + _ + "*(" + P + ")(?:" + _ + "*([*^$|!~]?=)" + _ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + _ + "*\\]",
                    M = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                    B = new RegExp(_ + "+", "g"),
                    W = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
                    F = new RegExp("^" + _ + "*," + _ + "*"),
                    $ = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
                    U = new RegExp("=" + _ + "*([^\\]'\"]*?)" + _ + "*\\]", "g"),
                    z = new RegExp(M),
                    X = new RegExp("^" + P + "$"),
                    V = {
                        ID: new RegExp("^#(" + P + ")"),
                        CLASS: new RegExp("^\\.(" + P + ")"),
                        TAG: new RegExp("^(" + P + "|[*])"),
                        ATTR: new RegExp("^" + R),
                        PSEUDO: new RegExp("^" + M),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + I + ")$", "i"),
                        needsContext: new RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
                    },
                    G = /^(?:input|select|textarea|button)$/i,
                    Y = /^h\d$/i,
                    Q = /^[^{]+\{\s*\[native \w/,
                    K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    J = /[+~]/,
                    Z = new RegExp("\\\\([\\da-f]{1,6}" + _ + "?|(" + _ + ")|.)", "ig"),
                    ee = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ne = function (e, t) {
                        return t ? "\0" === e ? "?" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    re = function () {
                        d()
                    },
                    oe = ye(function (e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
                } catch (e) {
                    L = {
                        apply: A.length ? function (e, t) {
                            q.apply(e, H.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function ie(e, t, r, o) {
                    var i, s, l, c, f, h, v, y = t && t.ownerDocument,
                        k = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return r;
                    if (!o && ((t ? t.ownerDocument || t : w) !== p && d(t), t = t || p, g)) {
                        if (11 !== k && (f = K.exec(e)))
                            if (i = f[1]) {
                                if (9 === k) {
                                    if (!(l = t.getElementById(i))) return r;
                                    if (l.id === i) return r.push(l), r
                                } else if (y && (l = y.getElementById(i)) && x(t, l) && l.id === i) return r.push(l), r
                            } else {
                                if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                                if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(i)), r
                            } if (n.qsa && !S[e + " "] && (!m || !m.test(e))) {
                            if (1 !== k) y = t, v = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) h[s] = "#" + c + " " + ve(h[s]);
                                v = h.join(","), y = J.test(e) && ge(t.parentNode) || t
                            }
                            if (v) try {
                                return L.apply(r, y.querySelectorAll(v)), r
                            } catch (e) {} finally {
                                c === b && t.removeAttribute("id")
                            }
                        }
                    }
                    return u(e.replace(W, "$1"), t, r, o)
                }

                function ae() {
                    var e = [];
                    return function t(n, o) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o
                    }
                }

                function se(e) {
                    return e[b] = !0, e
                }

                function ue(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function le(e, t) {
                    for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
                }

                function ce(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function fe(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function de(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function pe(e) {
                    return function (t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function he(e) {
                    return se(function (t) {
                        return t = +t, se(function (n, r) {
                            for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                        })
                    })
                }

                function ge(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = ie.support = {}, i = ie.isXML = function (e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, d = ie.setDocument = function (e) {
                        var t, o, a = e ? e.ownerDocument || e : w;
                        return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, g = !i(p), w !== p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), n.getElementsByTagName = ue(function (e) {
                            return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                        }), n.getElementsByClassName = Q.test(p.getElementsByClassName), n.getById = ue(function (e) {
                            return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
                        }), n.getById ? (r.filter.ID = function (e) {
                            var t = e.replace(Z, ee);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function (e) {
                            var t = e.replace(Z, ee);
                            return function (e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n, r, o, i = t.getElementById(e);
                                if (i) {
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                    for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function (e, t) {
                            var n, r = [],
                                o = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return i
                        }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                        }, v = [], m = [], (n.qsa = Q.test(p.querySelectorAll)) && (ue(function (e) {
                            h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + _ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + _ + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                        }), ue(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = p.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + _ + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                        })), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", M)
                        }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function (e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, D = t ? function (e, t) {
                            if (e === t) return f = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && x(w, e) ? -1 : t === p || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
                        } : function (e, t) {
                            if (e === t) return f = !0, 0;
                            var n, r = 0,
                                o = e.parentNode,
                                i = t.parentNode,
                                a = [e],
                                s = [t];
                            if (!o || !i) return e === p ? -1 : t === p ? 1 : o ? -1 : i ? 1 : c ? O(c, e) - O(c, t) : 0;
                            if (o === i) return ce(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; a[r] === s[r];) r++;
                            return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                        }, p) : p
                    }, ie.matches = function (e, t) {
                        return ie(e, null, null, t)
                    }, ie.matchesSelector = function (e, t) {
                        if ((e.ownerDocument || e) !== p && d(e), t = t.replace(U, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                            var r = y.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {}
                        return ie(t, p, null, [e]).length > 0
                    }, ie.contains = function (e, t) {
                        return (e.ownerDocument || e) !== p && d(e), x(e, t)
                    }, ie.attr = function (e, t) {
                        (e.ownerDocument || e) !== p && d(e);
                        var o = r.attrHandle[t.toLowerCase()],
                            i = o && N.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                        return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, ie.escape = function (e) {
                        return (e + "").replace(te, ne)
                    }, ie.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ie.uniqueSort = function (e) {
                        var t, r = [],
                            o = 0,
                            i = 0;
                        if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                            for (; t = e[i++];) t === e[i] && (o = r.push(i));
                            for (; o--;) e.splice(r[o], 1)
                        }
                        return c = null, e
                    }, o = ie.getText = function (e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += o(t);
                        return n
                    }, (r = ie.selectors = {
                        cacheLength: 50,
                        createPseudo: se,
                        match: V,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                            },
                            PSEUDO: function (e) {
                                var t, n = !e[6] && e[2];
                                return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(Z, ee).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function (e) {
                                var t = C[e + " "];
                                return t || (t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && C(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function (e, t, n) {
                                return function (r) {
                                    var o = ie.attr(r, e);
                                    return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function (e, t, n, r, o) {
                                var i = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === o ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, u) {
                                    var l, c, f, d, p, h, g = i !== a ? "nextSibling" : "previousSibling",
                                        m = t.parentNode,
                                        v = s && t.nodeName.toLowerCase(),
                                        y = !u && !s,
                                        x = !1;
                                    if (m) {
                                        if (i) {
                                            for (; g;) {
                                                for (d = t; d = d[g];)
                                                    if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                h = g = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                            for (x = (p = (l = (c = (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === k && l[1]) && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop();)
                                                if (1 === d.nodeType && ++x && d === t) {
                                                    c[e] = [k, p, x];
                                                    break
                                                }
                                        } else if (y && (x = p = (l = (c = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === k && l[1]), !1 === x)
                                            for (;
                                                (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && ((c = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [k, x]), d !== t)););
                                        return (x -= o) === r || x % r == 0 && x / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function (e, t) {
                                var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                                return o[b] ? o(t) : o.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                                    for (var r, i = o(e, t), a = i.length; a--;) e[r = O(e, i[a])] = !(n[r] = i[a])
                                }) : function (e) {
                                    return o(e, 0, n)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: se(function (e) {
                                var t = [],
                                    n = [],
                                    r = s(e.replace(W, "$1"));
                                return r[b] ? se(function (e, t, n, o) {
                                    for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                                }) : function (e, o, i) {
                                    return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: se(function (e) {
                                return function (t) {
                                    return ie(e, t).length > 0
                                }
                            }),
                            contains: se(function (e) {
                                return e = e.replace(Z, ee),
                                    function (t) {
                                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                                    }
                            }),
                            lang: se(function (e) {
                                return X.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                                    function (t) {
                                        var n;
                                        do {
                                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function (t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function (e) {
                                return e === h
                            },
                            focus: function (e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: pe(!1),
                            disabled: pe(!0),
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function (e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function (e) {
                                return Y.test(e.nodeName)
                            },
                            input: function (e) {
                                return G.test(e.nodeName)
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: he(function () {
                                return [0]
                            }),
                            last: he(function (e, t) {
                                return [t - 1]
                            }),
                            eq: he(function (e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: he(function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: he(function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: he(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                                return e
                            }),
                            gt: he(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            })
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = fe(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = de(t);

                function me() {}

                function ve(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function ye(e, t, n) {
                    var r = t.dir,
                        o = t.next,
                        i = o || r,
                        a = n && "parentNode" === i,
                        s = T++;
                    return t.first ? function (t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || a) return e(t, n, o);
                        return !1
                    } : function (t, n, u) {
                        var l, c, f, d = [k, s];
                        if (u) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || a)
                                    if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((l = c[i]) && l[0] === k && l[1] === s) return d[2] = l[2];
                                        if (c[i] = d, d[2] = e(t, n, u)) return !0
                                    } return !1
                    }
                }

                function xe(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function be(e, t, n, r, o) {
                    for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
                    return a
                }

                function we(e, t, n, r, o, i) {
                    return r && !r[b] && (r = we(r)), o && !o[b] && (o = we(o, i)), se(function (i, a, s, u) {
                        var l, c, f, d = [],
                            p = [],
                            h = a.length,
                            g = i || function (e, t, n) {
                                for (var r = 0, o = t.length; r < o; r++) ie(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            m = !e || !i && t ? g : be(g, d, e, s, u),
                            v = n ? o || (i ? e : h || r) ? [] : a : m;
                        if (n && n(m, v, s, u), r)
                            for (l = be(v, p), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[p[c]] = !(m[p[c]] = f));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (l = [], c = v.length; c--;)(f = v[c]) && l.push(m[c] = f);
                                    o(null, v = [], l, u)
                                }
                                for (c = v.length; c--;)(f = v[c]) && (l = o ? O(i, f) : d[c]) > -1 && (i[l] = !(a[l] = f))
                            }
                        } else v = be(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, u) : L.apply(a, v)
                    })
                }

                function ke(e) {
                    for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = ye(function (e) {
                            return e === t
                        }, s, !0), f = ye(function (e) {
                            return O(t, e) > -1
                        }, s, !0), d = [function (e, n, r) {
                            var o = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return t = null, o
                        }]; u < i; u++)
                        if (n = r.relative[e[u].type]) d = [ye(xe(d), n)];
                        else {
                            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                                return we(u > 1 && xe(d), u > 1 && ve(e.slice(0, u - 1).concat({
                                    value: " " === e[u - 2].type ? "*" : ""
                                })).replace(W, "$1"), n, u < o && ke(e.slice(u, o)), o < i && ke(e = e.slice(o)), o < i && ve(e))
                            }
                            d.push(n)
                        } return xe(d)
                }
                return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = ie.tokenize = function (e, t) {
                    var n, o, i, a, s, u, l, c = E[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, u = [], l = r.preFilter; s;) {
                        for (a in n && !(o = F.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), n = !1, (o = $.exec(s)) && (n = o.shift(), i.push({
                                value: n,
                                type: o[0].replace(W, " ")
                            }), s = s.slice(n.length)), r.filter) !(o = V[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(), i.push({
                            value: n,
                            type: a,
                            matches: o
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? ie.error(e) : E(e, u).slice(0)
                }, s = ie.compile = function (e, t) {
                    var n, o = [],
                        i = [],
                        s = S[e + " "];
                    if (!s) {
                        for (t || (t = a(e)), n = t.length; n--;)(s = ke(t[n]))[b] ? o.push(s) : i.push(s);
                        (s = S(e, function (e, t) {
                            var n = t.length > 0,
                                o = e.length > 0,
                                i = function (i, a, s, u, c) {
                                    var f, h, m, v = 0,
                                        y = "0",
                                        x = i && [],
                                        b = [],
                                        w = l,
                                        T = i || o && r.find.TAG("*", c),
                                        C = k += null == w ? 1 : Math.random() || .1,
                                        E = T.length;
                                    for (c && (l = a === p || a || c); y !== E && null != (f = T[y]); y++) {
                                        if (o && f) {
                                            for (h = 0, a || f.ownerDocument === p || (d(f), s = !g); m = e[h++];)
                                                if (m(f, a || p, s)) {
                                                    u.push(f);
                                                    break
                                                } c && (k = C)
                                        }
                                        n && ((f = !m && f) && v--, i && x.push(f))
                                    }
                                    if (v += y, n && y !== v) {
                                        for (h = 0; m = t[h++];) m(x, b, a, s);
                                        if (i) {
                                            if (v > 0)
                                                for (; y--;) x[y] || b[y] || (b[y] = j.call(u));
                                            b = be(b)
                                        }
                                        L.apply(u, b), c && !i && b.length > 0 && v + t.length > 1 && ie.uniqueSort(u)
                                    }
                                    return c && (k = C, l = w), x
                                };
                            return n ? se(i) : i
                        }(i, o))).selector = e
                    }
                    return s
                }, u = ie.select = function (e, t, n, o) {
                    var i, u, l, c, f, d = "function" == typeof e && e,
                        p = !o && a(e = d.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                            if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                            d && (t = t.parentNode), e = e.slice(u.shift().value.length)
                        }
                        for (i = V.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i], !r.relative[c = l.type]);)
                            if ((f = r.find[c]) && (o = f(l.matches[0].replace(Z, ee), J.test(u[0].type) && ge(t.parentNode) || t))) {
                                if (u.splice(i, 1), !(e = o.length && ve(u))) return L.apply(n, o), n;
                                break
                            }
                    }
                    return (d || s(e, p))(o, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t), n
                }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, d(), n.sortDetached = ue(function (e) {
                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                }), ue(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || le("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && ue(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || le("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), ue(function (e) {
                    return null == e.getAttribute("disabled")
                }) || le(I, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), ie
            }(n);
            T.find = S, T.expr = S.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = S.uniqueSort, T.text = S.getText, T.isXMLDoc = S.isXML, T.contains = S.contains, T.escapeSelector = S.escape;
            var D = function (e, t, n) {
                    for (var r = [], o = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (o && T(e).is(n)) break;
                            r.push(e)
                        } return r
                },
                N = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                A = T.expr.match.needsContext;

            function j(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function L(e, t, n) {
                return y(t) ? T.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n
                }) : t.nodeType ? T.grep(e, function (e) {
                    return e === t !== n
                }) : "string" != typeof t ? T.grep(e, function (e) {
                    return f.call(t, e) > -1 !== n
                }) : T.filter(t, e, n)
            }
            T.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, T.fn.extend({
                find: function (e) {
                    var t, n, r = this.length,
                        o = this;
                    if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
                        for (t = 0; t < r; t++)
                            if (T.contains(o[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, o[t], n);
                    return r > 1 ? T.uniqueSort(n) : n
                },
                filter: function (e) {
                    return this.pushStack(L(this, e || [], !1))
                },
                not: function (e) {
                    return this.pushStack(L(this, e || [], !0))
                },
                is: function (e) {
                    return !!L(this, "string" == typeof e && A.test(e) ? T(e) : e || [], !1).length
                }
            });
            var H, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (T.fn.init = function (e, t, n) {
                var r, o;
                if (!e) return this;
                if (n = n || H, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), q.test(r[1]) && T.isPlainObject(t))
                            for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (o = a.getElementById(r[2])) && (this[0] = o, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
            }).prototype = T.fn, H = T(a);
            var I = /^(?:parents|prev(?:Until|All))/,
                _ = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function P(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            T.fn.extend({
                has: function (e) {
                    var t = T(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++)
                            if (T.contains(this, t[e])) return !0
                    })
                },
                closest: function (e, t) {
                    var n, r = 0,
                        o = this.length,
                        i = [],
                        a = "string" != typeof e && T(e);
                    if (!A.test(e))
                        for (; r < o; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                                    i.push(n);
                                    break
                                } return this.pushStack(i.length > 1 ? T.uniqueSort(i) : i)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? f.call(T(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (e, t) {
                    return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), T.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function (e) {
                    return D(e, "parentNode")
                },
                parentsUntil: function (e, t, n) {
                    return D(e, "parentNode", n)
                },
                next: function (e) {
                    return P(e, "nextSibling")
                },
                prev: function (e) {
                    return P(e, "previousSibling")
                },
                nextAll: function (e) {
                    return D(e, "nextSibling")
                },
                prevAll: function (e) {
                    return D(e, "previousSibling")
                },
                nextUntil: function (e, t, n) {
                    return D(e, "nextSibling", n)
                },
                prevUntil: function (e, t, n) {
                    return D(e, "previousSibling", n)
                },
                siblings: function (e) {
                    return N((e.parentNode || {}).firstChild, e)
                },
                children: function (e) {
                    return N(e.firstChild)
                },
                contents: function (e) {
                    return j(e, "iframe") ? e.contentDocument : (j(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
                }
            }, function (e, t) {
                T.fn[e] = function (n, r) {
                    var o = T.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = T.filter(r, o)), this.length > 1 && (_[e] || T.uniqueSort(o), I.test(e) && o.reverse()), this.pushStack(o)
                }
            });
            var R = /[^\x20\t\r\n\f]+/g;

            function M(e) {
                return e
            }

            function B(e) {
                throw e
            }

            function W(e, t, n, r) {
                var o;
                try {
                    e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            T.Callbacks = function (e) {
                e = "string" == typeof e ? function (e) {
                    var t = {};
                    return T.each(e.match(R) || [], function (e, n) {
                        t[n] = !0
                    }), t
                }(e) : T.extend({}, e);
                var t, n, r, o, i = [],
                    a = [],
                    s = -1,
                    u = function () {
                        for (o = o || e.once, r = t = !0; a.length; s = -1)
                            for (n = a.shift(); ++s < i.length;) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
                        e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
                    },
                    l = {
                        add: function () {
                            return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
                                T.each(n, function (n, r) {
                                    y(r) ? e.unique && l.has(r) || i.push(r) : r && r.length && "string" !== k(r) && t(r)
                                })
                            }(arguments), n && !t && u()), this
                        },
                        remove: function () {
                            return T.each(arguments, function (e, t) {
                                for (var n;
                                    (n = T.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= s && s--
                            }), this
                        },
                        has: function (e) {
                            return e ? T.inArray(e, i) > -1 : i.length > 0
                        },
                        empty: function () {
                            return i && (i = []), this
                        },
                        disable: function () {
                            return o = a = [], i = n = "", this
                        },
                        disabled: function () {
                            return !i
                        },
                        lock: function () {
                            return o = a = [], n || t || (i = n = ""), this
                        },
                        locked: function () {
                            return !!o
                        },
                        fireWith: function (e, n) {
                            return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                        },
                        fire: function () {
                            return l.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!r
                        }
                    };
                return l
            }, T.extend({
                Deferred: function (e) {
                    var t = [
                            ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                            ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        o = {
                            state: function () {
                                return r
                            },
                            always: function () {
                                return i.done(arguments).fail(arguments), this
                            },
                            catch: function (e) {
                                return o.then(null, e)
                            },
                            pipe: function () {
                                var e = arguments;
                                return T.Deferred(function (n) {
                                    T.each(t, function (t, r) {
                                        var o = y(e[r[4]]) && e[r[4]];
                                        i[r[1]](function () {
                                            var e = o && o.apply(this, arguments);
                                            e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function (e, r, o) {
                                var i = 0;

                                function a(e, t, r, o) {
                                    return function () {
                                        var s = this,
                                            u = arguments,
                                            l = function () {
                                                var n, l;
                                                if (!(e < i)) {
                                                    if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                    l = n && ("object" == typeof n || "function" == typeof n) && n.then, y(l) ? o ? l.call(n, a(i, t, M, o), a(i, t, B, o)) : (i++, l.call(n, a(i, t, M, o), a(i, t, B, o), a(i, t, M, t.notifyWith))) : (r !== M && (s = void 0, u = [n]), (o || t.resolveWith)(s, u))
                                                }
                                            },
                                            c = o ? l : function () {
                                                try {
                                                    l()
                                                } catch (n) {
                                                    T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= i && (r !== B && (s = void 0, u = [n]), t.rejectWith(s, u))
                                                }
                                            };
                                        e ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), n.setTimeout(c))
                                    }
                                }
                                return T.Deferred(function (n) {
                                    t[0][3].add(a(0, n, y(o) ? o : M, n.notifyWith)), t[1][3].add(a(0, n, y(e) ? e : M)), t[2][3].add(a(0, n, y(r) ? r : B))
                                }).promise()
                            },
                            promise: function (e) {
                                return null != e ? T.extend(e, o) : o
                            }
                        },
                        i = {};
                    return T.each(t, function (e, n) {
                        var a = n[2],
                            s = n[5];
                        o[n[1]] = a.add, s && a.add(function () {
                            r = s
                        }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), i[n[0]] = function () {
                            return i[n[0] + "With"](this === i ? void 0 : this, arguments), this
                        }, i[n[0] + "With"] = a.fireWith
                    }), o.promise(i), e && e.call(i, i), i
                },
                when: function (e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        o = u.call(arguments),
                        i = T.Deferred(),
                        a = function (e) {
                            return function (n) {
                                r[e] = this, o[e] = arguments.length > 1 ? u.call(arguments) : n, --t || i.resolveWith(r, o)
                            }
                        };
                    if (t <= 1 && (W(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || y(o[n] && o[n].then))) return i.then();
                    for (; n--;) W(o[n], a(n), i.reject);
                    return i.promise()
                }
            });
            var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            T.Deferred.exceptionHook = function (e, t) {
                n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, T.readyException = function (e) {
                n.setTimeout(function () {
                    throw e
                })
            };
            var $ = T.Deferred();

            function U() {
                a.removeEventListener("DOMContentLoaded", U), n.removeEventListener("load", U), T.ready()
            }
            T.fn.ready = function (e) {
                return $.then(e).catch(function (e) {
                    T.readyException(e)
                }), this
            }, T.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                    (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || $.resolveWith(a, [T]))
                }
            }), T.ready.then = $.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(T.ready) : (a.addEventListener("DOMContentLoaded", U), n.addEventListener("load", U));
            var z = function (e, t, n, r, o, i, a) {
                    var s = 0,
                        u = e.length,
                        l = null == n;
                    if ("object" === k(n))
                        for (s in o = !0, n) z(e, t, s, n[s], !0, i, a);
                    else if (void 0 !== r && (o = !0, y(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                            return l.call(T(e), n)
                        })), t))
                        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
                },
                X = /^-ms-/,
                V = /-([a-z])/g;

            function G(e, t) {
                return t.toUpperCase()
            }

            function Y(e) {
                return e.replace(X, "ms-").replace(V, G)
            }
            var Q = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function K() {
                this.expando = T.expando + K.uid++
            }
            K.uid = 1, K.prototype = {
                cache: function (e) {
                    var t = e[this.expando];
                    return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function (e, t, n) {
                    var r, o = this.cache(e);
                    if ("string" == typeof t) o[Y(t)] = n;
                    else
                        for (r in t) o[Y(r)] = t[r];
                    return o
                },
                get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
                },
                access: function (e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function (e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [t] : t.match(R) || []).length;
                            for (; n--;) delete r[t[n]]
                        }(void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !T.isEmptyObject(t)
                }
            };
            var J = new K,
                Z = new K,
                ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                te = /[A-Z]/g;

            function ne(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                        try {
                            n = function (e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (e) {}
                        Z.set(e, t, n)
                    } else n = void 0;
                return n
            }
            T.extend({
                hasData: function (e) {
                    return Z.hasData(e) || J.hasData(e)
                },
                data: function (e, t, n) {
                    return Z.access(e, t, n)
                },
                removeData: function (e, t) {
                    Z.remove(e, t)
                },
                _data: function (e, t, n) {
                    return J.access(e, t, n)
                },
                _removeData: function (e, t) {
                    J.remove(e, t)
                }
            }), T.fn.extend({
                data: function (e, t) {
                    var n, r, o, i = this[0],
                        a = i && i.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = Z.get(i), 1 === i.nodeType && !J.get(i, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Y(r.slice(5)), ne(i, r, o[r]));
                            J.set(i, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function () {
                        Z.set(this, e)
                    }) : z(this, function (t) {
                        var n;
                        if (i && void 0 === t) return void 0 !== (n = Z.get(i, e)) ? n : void 0 !== (n = ne(i, e)) ? n : void 0;
                        this.each(function () {
                            Z.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function (e) {
                    return this.each(function () {
                        Z.remove(this, e)
                    })
                }
            }), T.extend({
                queue: function (e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, T.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var n = T.queue(e, t),
                        r = n.length,
                        o = n.shift(),
                        i = T._queueHooks(e, t);
                    "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
                        T.dequeue(e, t)
                    }, i)), !r && i && i.empty.fire()
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return J.get(e, n) || J.access(e, n, {
                        empty: T.Callbacks("once memory").add(function () {
                            J.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), T.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = T.queue(this, e, t);
                        T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e)
                    })
                },
                dequeue: function (e) {
                    return this.each(function () {
                        T.dequeue(this, e)
                    })
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                },
                promise: function (e, t) {
                    var n, r = 1,
                        o = T.Deferred(),
                        i = this,
                        a = this.length,
                        s = function () {
                            --r || o.resolveWith(i, [i])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = J.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), o.promise(t)
                }
            });
            var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
                ie = ["Top", "Right", "Bottom", "Left"],
                ae = function (e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && T.contains(e.ownerDocument, e) && "none" === T.css(e, "display")
                },
                se = function (e, t, n, r) {
                    var o, i, a = {};
                    for (i in t) a[i] = e.style[i], e.style[i] = t[i];
                    for (i in o = n.apply(e, r || []), t) e.style[i] = a[i];
                    return o
                };

            function ue(e, t, n, r) {
                var o, i, a = 20,
                    s = r ? function () {
                        return r.cur()
                    } : function () {
                        return T.css(e, t, "")
                    },
                    u = s(),
                    l = n && n[3] || (T.cssNumber[t] ? "" : "px"),
                    c = (T.cssNumber[t] || "px" !== l && +u) && oe.exec(T.css(e, t));
                if (c && c[3] !== l) {
                    for (u /= 2, l = l || c[3], c = +u || 1; a--;) T.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), c /= i;
                    c *= 2, T.style(e, t, c + l), n = n || []
                }
                return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o
            }
            var le = {};

            function ce(e) {
                var t, n = e.ownerDocument,
                    r = e.nodeName,
                    o = le[r];
                return o || (t = n.body.appendChild(n.createElement(r)), o = T.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), le[r] = o, o)
            }

            function fe(e, t) {
                for (var n, r, o = [], i = 0, a = e.length; i < a; i++)(r = e[i]).style && (n = r.style.display, t ? ("none" === n && (o[i] = J.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && ae(r) && (o[i] = ce(r))) : "none" !== n && (o[i] = "none", J.set(r, "display", n)));
                for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
                return e
            }
            T.fn.extend({
                show: function () {
                    return fe(this, !0)
                },
                hide: function () {
                    return fe(this)
                },
                toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        ae(this) ? T(this).show() : T(this).hide()
                    })
                }
            });
            var de = /^(?:checkbox|radio)$/i,
                pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                he = /^$|^module$|\/(?:java|ecma)script/i,
                ge = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function me(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && j(e, t) ? T.merge([e], n) : n
            }

            function ve(e, t) {
                for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
            }
            ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
            var ye, xe, be = /<|&#?\w+;/;

            function we(e, t, n, r, o) {
                for (var i, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
                    if ((i = e[p]) || 0 === i)
                        if ("object" === k(i)) T.merge(d, i.nodeType ? [i] : i);
                        else if (be.test(i)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (pe.exec(i) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + T.htmlPrefilter(i) + u[2], c = u[0]; c--;) a = a.lastChild;
                    T.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
                } else d.push(t.createTextNode(i));
                for (f.textContent = "", p = 0; i = d[p++];)
                    if (r && T.inArray(i, r) > -1) o && o.push(i);
                    else if (l = T.contains(i.ownerDocument, i), a = me(f.appendChild(i), "script"), l && ve(a), n)
                    for (c = 0; i = a[c++];) he.test(i.type || "") && n.push(i);
                return f
            }
            ye = a.createDocumentFragment().appendChild(a.createElement("div")), (xe = a.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), ye.appendChild(xe), v.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
            var ke = a.documentElement,
                Te = /^key/,
                Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ee = /^([^.]*)(?:\.(.+)|)/;

            function Se() {
                return !0
            }

            function De() {
                return !1
            }

            function Ne() {
                try {
                    return a.activeElement
                } catch (e) {}
            }

            function Ae(e, t, n, r, o, i) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], i);
                    return e
                }
                if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = De;
                else if (!o) return e;
                return 1 === i && (a = o, (o = function (e) {
                    return T().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = T.guid++)), e.each(function () {
                    T.event.add(this, t, o, r, n)
                })
            }
            T.event = {
                global: {},
                add: function (e, t, n, r, o) {
                    var i, a, s, u, l, c, f, d, p, h, g, m = J.get(e);
                    if (m)
                        for (n.handler && (n = (i = n).handler, o = i.selector), o && T.find.matchesSelector(ke, o), n.guid || (n.guid = T.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
                                return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                            }), l = (t = (t || "").match(R) || [""]).length; l--;) p = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = T.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = T.event.special[p] || {}, c = T.extend({
                            type: p,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && T.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, i), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), T.event.global[p] = !0)
                },
                remove: function (e, t, n, r, o) {
                    var i, a, s, u, l, c, f, d, p, h, g, m = J.hasData(e) && J.get(e);
                    if (m && (u = m.events)) {
                        for (l = (t = (t || "").match(R) || [""]).length; l--;)
                            if (p = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                                for (f = T.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) c = d[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                                a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || T.removeEvent(e, p, m.handle), delete u[p])
                            } else
                                for (p in u) T.event.remove(e, p + t[l], n, r, !0);
                        T.isEmptyObject(u) && J.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    var t, n, r, o, i, a, s = T.event.fix(e),
                        u = new Array(arguments.length),
                        l = (J.get(this, "events") || {})[s.type] || [],
                        c = T.event.special[s.type] || {};
                    for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                    if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                        for (a = T.event.handlers.call(this, s, l), t = 0;
                            (o = a[t++]) && !s.isPropagationStopped();)
                            for (s.currentTarget = o.elem, n = 0;
                                (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((T.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, s), s.result
                    }
                },
                handlers: function (e, t) {
                    var n, r, o, i, a, s = [],
                        u = t.delegateCount,
                        l = e.target;
                    if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? T(o, this).index(l) > -1 : T.find(o, this, null, [l]).length), a[o] && i.push(r);
                                i.length && s.push({
                                    elem: l,
                                    handlers: i
                                })
                            } return l = this, u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }), s
                },
                addProp: function (e, t) {
                    Object.defineProperty(T.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(t) ? function () {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function (t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function (e) {
                    return e[T.expando] ? e : new T.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            if (this !== Ne() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            if (this === Ne() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && j(this, "input")) return this.click(), !1
                        },
                        _default: function (e) {
                            return j(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, T.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, T.Event = function (e, t) {
                if (!(this instanceof T.Event)) return new T.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : De, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
            }, T.Event.prototype = {
                constructor: T.Event,
                isDefaultPrevented: De,
                isPropagationStopped: De,
                isImmediatePropagationStopped: De,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, T.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, T.event.addProp), T.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, t) {
                T.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n, r = e.relatedTarget,
                            o = e.handleObj;
                        return r && (r === this || T.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), T.fn.extend({
                on: function (e, t, n, r) {
                    return Ae(this, e, t, n, r)
                },
                one: function (e, t, n, r) {
                    return Ae(this, e, t, n, r, 1)
                },
                off: function (e, t, n) {
                    var r, o;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, t, e[o]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = De), this.each(function () {
                        T.event.remove(this, e, n, t)
                    })
                }
            });
            var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                qe = /<script|<style|<link/i,
                Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
                He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Oe(e, t) {
                return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
            }

            function Ie(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function _e(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function Pe(e, t) {
                var n, r, o, i, a, s, u, l;
                if (1 === t.nodeType) {
                    if (J.hasData(e) && (i = J.access(e), a = J.set(t, i), l = i.events))
                        for (o in delete a.handle, a.events = {}, l)
                            for (n = 0, r = l[o].length; n < r; n++) T.event.add(t, o, l[o][n]);
                    Z.hasData(e) && (s = Z.access(e), u = T.extend({}, s), Z.set(t, u))
                }
            }

            function Re(e, t, n, r) {
                t = l.apply([], t);
                var o, i, a, s, u, c, f = 0,
                    d = e.length,
                    p = d - 1,
                    h = t[0],
                    g = y(h);
                if (g || d > 1 && "string" == typeof h && !v.checkClone && Le.test(h)) return e.each(function (o) {
                    var i = e.eq(o);
                    g && (t[0] = h.call(this, o, i.html())), Re(i, t, n, r)
                });
                if (d && (i = (o = we(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
                    for (s = (a = T.map(me(o, "script"), Ie)).length; f < d; f++) u = o, f !== p && (u = T.clone(u, !0, !0), s && T.merge(a, me(u, "script"))), n.call(e[f], u, f);
                    if (s)
                        for (c = a[a.length - 1].ownerDocument, T.map(a, _e), f = 0; f < s; f++) u = a[f], he.test(u.type || "") && !J.access(u, "globalEval") && T.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(u.src) : w(u.textContent.replace(He, ""), c, u))
                }
                return e
            }

            function Me(e, t, n) {
                for (var r, o = t ? T.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || T.cleanData(me(r)), r.parentNode && (n && T.contains(r.ownerDocument, r) && ve(me(r, "script")), r.parentNode.removeChild(r));
                return e
            }
            T.extend({
                htmlPrefilter: function (e) {
                    return e.replace(je, "<$1></$2>")
                },
                clone: function (e, t, n) {
                    var r, o, i, a, s, u, l, c = e.cloneNode(!0),
                        f = T.contains(e.ownerDocument, e);
                    if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                        for (a = me(c), r = 0, o = (i = me(e)).length; r < o; r++) s = i[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                    if (t)
                        if (n)
                            for (i = i || me(e), a = a || me(c), r = 0, o = i.length; r < o; r++) Pe(i[r], a[r]);
                        else Pe(e, c);
                    return (a = me(c, "script")).length > 0 && ve(a, !f && me(e, "script")), c
                },
                cleanData: function (e) {
                    for (var t, n, r, o = T.event.special, i = 0; void 0 !== (n = e[i]); i++)
                        if (Q(n)) {
                            if (t = n[J.expando]) {
                                if (t.events)
                                    for (r in t.events) o[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                                n[J.expando] = void 0
                            }
                            n[Z.expando] && (n[Z.expando] = void 0)
                        }
                }
            }), T.fn.extend({
                detach: function (e) {
                    return Me(this, e, !0)
                },
                remove: function (e) {
                    return Me(this, e)
                },
                text: function (e) {
                    return z(this, function (e) {
                        return void 0 === e ? T.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function () {
                    return Re(this, arguments, function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
                    })
                },
                prepend: function () {
                    return Re(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Oe(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function () {
                    return Re(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function () {
                    return Re(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(me(e, !1)), e.textContent = "");
                    return this
                },
                clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return T.clone(this, e, t)
                    })
                },
                html: function (e) {
                    return z(this, function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !qe.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = T.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(me(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function () {
                    var e = [];
                    return Re(this, arguments, function (t) {
                        var n = this.parentNode;
                        T.inArray(this, e) < 0 && (T.cleanData(me(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), T.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                T.fn[e] = function (e) {
                    for (var n, r = [], o = T(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), T(o[a])[t](n), c.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Be = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
                We = function (e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = n), t.getComputedStyle(e)
                },
                Fe = new RegExp(ie.join("|"), "i");

            function $e(e, t, n) {
                var r, o, i, a, s = e.style;
                return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || T.contains(e.ownerDocument, e) || (a = T.style(e, t)), !v.pixelBoxStyles() && Be.test(a) && Fe.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
            }

            function Ue(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function () {
                function e() {
                    if (c) {
                        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ke.appendChild(l).appendChild(c);
                        var e = n.getComputedStyle(c);
                        r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", s = 36 === t(e.right), o = 36 === t(e.width), c.style.position = "absolute", i = 36 === c.offsetWidth || "absolute", ke.removeChild(l), c = null
                    }
                }

                function t(e) {
                    return Math.round(parseFloat(e))
                }
                var r, o, i, s, u, l = a.createElement("div"),
                    c = a.createElement("div");
                c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(v, {
                    boxSizingReliable: function () {
                        return e(), o
                    },
                    pixelBoxStyles: function () {
                        return e(), s
                    },
                    pixelPosition: function () {
                        return e(), r
                    },
                    reliableMarginLeft: function () {
                        return e(), u
                    },
                    scrollboxSize: function () {
                        return e(), i
                    }
                }))
            }();
            var ze = /^(none|table(?!-c[ea]).+)/,
                Xe = /^--/,
                Ve = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Ge = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Ye = ["Webkit", "Moz", "ms"],
                Qe = a.createElement("div").style;

            function Ke(e) {
                var t = T.cssProps[e];
                return t || (t = T.cssProps[e] = function (e) {
                    if (e in Qe) return e;
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;)
                        if ((e = Ye[n] + t) in Qe) return e
                }(e) || e), t
            }

            function Je(e, t, n) {
                var r = oe.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function Ze(e, t, n, r, o, i) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === n && (u += T.css(e, n + ie[a], !0, o)), r ? ("content" === n && (u -= T.css(e, "padding" + ie[a], !0, o)), "margin" !== n && (u -= T.css(e, "border" + ie[a] + "Width", !0, o))) : (u += T.css(e, "padding" + ie[a], !0, o), "padding" !== n ? u += T.css(e, "border" + ie[a] + "Width", !0, o) : s += T.css(e, "border" + ie[a] + "Width", !0, o));
                return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5))), u
            }

            function et(e, t, n) {
                var r = We(e),
                    o = $e(e, t, r),
                    i = "border-box" === T.css(e, "boxSizing", !1, r),
                    a = i;
                if (Be.test(o)) {
                    if (!n) return o;
                    o = "auto"
                }
                return a = a && (v.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === T.css(e, "display", !1, r)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (o = parseFloat(o) || 0) + Ze(e, t, n || (i ? "border" : "content"), a, r, o) + "px"
            }

            function tt(e, t, n, r, o) {
                return new tt.prototype.init(e, t, n, r, o)
            }
            T.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = $e(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, i, a, s = Y(t),
                            u = Xe.test(t),
                            l = e.style;
                        if (u || (t = Ke(s)), a = T.cssHooks[t] || T.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                        "string" === (i = typeof n) && (o = oe.exec(n)) && o[1] && (n = ue(e, t, o), i = "number"), null != n && n == n && ("number" === i && (n += o && o[3] || (T.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                    }
                },
                css: function (e, t, n, r) {
                    var o, i, a, s = Y(t);
                    return Xe.test(t) || (t = Ke(s)), (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = $e(e, t, r)), "normal" === o && t in Ge && (o = Ge[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
                }
            }), T.each(["height", "width"], function (e, t) {
                T.cssHooks[t] = {
                    get: function (e, n, r) {
                        if (n) return !ze.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ve, function () {
                            return et(e, t, r)
                        })
                    },
                    set: function (e, n, r) {
                        var o, i = We(e),
                            a = "border-box" === T.css(e, "boxSizing", !1, i),
                            s = r && Ze(e, t, r, a, i);
                        return a && v.scrollboxSize() === i.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - Ze(e, t, "border", !1, i) - .5)), s && (o = oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = T.css(e, t)), Je(0, n, s)
                    }
                }
            }), T.cssHooks.marginLeft = Ue(v.reliableMarginLeft, function (e, t) {
                if (t) return (parseFloat($e(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                    marginLeft: 0
                }, function () {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), T.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (e, t) {
                T.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
                        return o
                    }
                }, "margin" !== e && (T.cssHooks[e + t].set = Je)
            }), T.fn.extend({
                css: function (e, t) {
                    return z(this, function (e, t, n) {
                        var r, o, i = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = We(e), o = t.length; a < o; a++) i[t[a]] = T.css(e, t[a], !1, r);
                            return i
                        }
                        return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }), T.Tween = tt, tt.prototype = {
                constructor: tt,
                init: function (e, t, n, r, o, i) {
                    this.elem = e, this.prop = n, this.easing = o || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (T.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var e = tt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
                },
                run: function (e) {
                    var t, n = tt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
                }
            }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function (e) {
                        T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, T.easing = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, T.fx = tt.prototype.init, T.fx.step = {};
            var nt, rt, ot = /^(?:toggle|show|hide)$/,
                it = /queueHooks$/;

            function at() {
                rt && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(at) : n.setTimeout(at, T.fx.interval), T.fx.tick())
            }

            function st() {
                return n.setTimeout(function () {
                    nt = void 0
                }), nt = Date.now()
            }

            function ut(e, t) {
                var n, r = 0,
                    o = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = ie[r])] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e), o
            }

            function lt(e, t, n) {
                for (var r, o = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                    if (r = o[i].call(n, t, e)) return r
            }

            function ct(e, t, n) {
                var r, o, i = 0,
                    a = ct.prefilters.length,
                    s = T.Deferred().always(function () {
                        delete u.elem
                    }),
                    u = function () {
                        if (o) return !1;
                        for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++) l.tweens[i].run(r);
                        return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                    },
                    l = s.promise({
                        elem: e,
                        props: T.extend({}, t),
                        opts: T.extend(!0, {
                            specialEasing: {},
                            easing: T.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: nt || st(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var r = T.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r), r
                        },
                        stop: function (t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; n < r; n++) l.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                        }
                    }),
                    c = l.props;
                for (! function (e, t) {
                        var n, r, o, i, a;
                        for (n in e)
                            if (o = t[r = Y(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = T.cssHooks[r]) && "expand" in a)
                                for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                            else t[r] = o
                    }(c, l.opts.specialEasing); i < a; i++)
                    if (r = ct.prefilters[i].call(l, e, c, l.opts)) return y(r.stop) && (T._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                return T.map(c, lt, l), y(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), T.fx.timer(T.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l
            }
            T.Animation = T.extend(ct, {
                    tweeners: {
                        "*": [function (e, t) {
                            var n = this.createTween(e, t);
                            return ue(n.elem, e, oe.exec(t), n), n
                        }]
                    },
                    tweener: function (e, t) {
                        y(e) ? (t = e, e = ["*"]) : e = e.match(R);
                        for (var n, r = 0, o = e.length; r < o; r++) n = e[r], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t)
                    },
                    prefilters: [function (e, t, n) {
                        var r, o, i, a, s, u, l, c, f = "width" in t || "height" in t,
                            d = this,
                            p = {},
                            h = e.style,
                            g = e.nodeType && ae(e),
                            m = J.get(e, "fxshow");
                        for (r in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                                a.unqueued || s()
                            }), a.unqueued++, d.always(function () {
                                d.always(function () {
                                    a.unqueued--, T.queue(e, "fx").length || a.empty.fire()
                                })
                            })), t)
                            if (o = t[r], ot.test(o)) {
                                if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
                                    if ("show" !== o || !m || void 0 === m[r]) continue;
                                    g = !0
                                }
                                p[r] = m && m[r] || T.style(e, r)
                            } if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(p))
                            for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = m && m.display) && (l = J.get(e, "display")), "none" === (c = T.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = T.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === T.css(e, "float") && (u || (d.done(function () {
                                    h.display = l
                                }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
                                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                })), u = !1, p) u || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", {
                                display: l
                            }), i && (m.hidden = !g), g && fe([e], !0), d.done(function () {
                                for (r in g || fe([e]), J.remove(e, "fxshow"), p) T.style(e, r, p[r])
                            })), u = lt(g ? m[r] : 0, r, d), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
                    }],
                    prefilter: function (e, t) {
                        t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
                    }
                }), T.speed = function (e, t, n) {
                    var r = e && "object" == typeof e ? T.extend({}, e) : {
                        complete: n || !n && t || y(e) && e,
                        duration: e,
                        easing: n && t || t && !y(t) && t
                    };
                    return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                        y(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue)
                    }, r
                }, T.fn.extend({
                    fadeTo: function (e, t, n, r) {
                        return this.filter(ae).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function (e, t, n, r) {
                        var o = T.isEmptyObject(e),
                            i = T.speed(t, n, r),
                            a = function () {
                                var t = ct(this, T.extend({}, e), i);
                                (o || J.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                    },
                    stop: function (e, t, n) {
                        var r = function (e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                            var t = !0,
                                o = null != e && e + "queueHooks",
                                i = T.timers,
                                a = J.get(this);
                            if (o) a[o] && a[o].stop && r(a[o]);
                            else
                                for (o in a) a[o] && a[o].stop && it.test(o) && r(a[o]);
                            for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                            !t && n || T.dequeue(this, e)
                        })
                    },
                    finish: function (e) {
                        return !1 !== e && (e = e || "fx"), this.each(function () {
                            var t, n = J.get(this),
                                r = n[e + "queue"],
                                o = n[e + "queueHooks"],
                                i = T.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, T.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), T.each(["toggle", "show", "hide"], function (e, t) {
                    var n = T.fn[t];
                    T.fn[t] = function (e, r, o) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, o)
                    }
                }), T.each({
                    slideDown: ut("show"),
                    slideUp: ut("hide"),
                    slideToggle: ut("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function (e, t) {
                    T.fn[e] = function (e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), T.timers = [], T.fx.tick = function () {
                    var e, t = 0,
                        n = T.timers;
                    for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || T.fx.stop(), nt = void 0
                }, T.fx.timer = function (e) {
                    T.timers.push(e), T.fx.start()
                }, T.fx.interval = 13, T.fx.start = function () {
                    rt || (rt = !0, at())
                }, T.fx.stop = function () {
                    rt = null
                }, T.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, T.fn.delay = function (e, t) {
                    return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
                        var o = n.setTimeout(t, e);
                        r.stop = function () {
                            n.clearTimeout(o)
                        }
                    })
                },
                function () {
                    var e = a.createElement("input"),
                        t = a.createElement("select").appendChild(a.createElement("option"));
                    e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = a.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
                }();
            var ft, dt = T.expr.attrHandle;
            T.fn.extend({
                attr: function (e, t) {
                    return z(this, T.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        T.removeAttr(this, e)
                    })
                }
            }), T.extend({
                attr: function (e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === i && T.isXMLDoc(e) || (o = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!v.radioValue && "radio" === t && j(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function (e, t) {
                    var n, r = 0,
                        o = t && t.match(R);
                    if (o && 1 === e.nodeType)
                        for (; n = o[r++];) e.removeAttribute(n)
                }
            }), ft = {
                set: function (e, t, n) {
                    return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = dt[t] || T.find.attr;
                dt[t] = function (e, t, r) {
                    var o, i, a = t.toLowerCase();
                    return r || (i = dt[a], dt[a] = o, o = null != n(e, t, r) ? a : null, dt[a] = i), o
                }
            });
            var pt = /^(?:input|select|textarea|button)$/i,
                ht = /^(?:a|area)$/i;

            function gt(e) {
                return (e.match(R) || []).join(" ")
            }

            function mt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function vt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
            }
            T.fn.extend({
                prop: function (e, t) {
                    return z(this, T.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[T.propFix[e] || e]
                    })
                }
            }), T.extend({
                prop: function (e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return 1 === i && T.isXMLDoc(e) || (t = T.propFix[t] || t, o = T.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = T.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : pt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), v.optSelected || (T.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                T.propFix[this.toLowerCase()] = this
            }), T.fn.extend({
                addClass: function (e) {
                    var t, n, r, o, i, a, s, u = 0;
                    if (y(e)) return this.each(function (t) {
                        T(this).addClass(e.call(this, t, mt(this)))
                    });
                    if ((t = vt(e)).length)
                        for (; n = this[u++];)
                            if (o = mt(n), r = 1 === n.nodeType && " " + gt(o) + " ") {
                                for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                o !== (s = gt(r)) && n.setAttribute("class", s)
                            } return this
                },
                removeClass: function (e) {
                    var t, n, r, o, i, a, s, u = 0;
                    if (y(e)) return this.each(function (t) {
                        T(this).removeClass(e.call(this, t, mt(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = vt(e)).length)
                        for (; n = this[u++];)
                            if (o = mt(n), r = 1 === n.nodeType && " " + gt(o) + " ") {
                                for (a = 0; i = t[a++];)
                                    for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                                o !== (s = gt(r)) && n.setAttribute("class", s)
                            } return this
                },
                toggleClass: function (e, t) {
                    var n = typeof e,
                        r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (n) {
                        T(this).toggleClass(e.call(this, n, mt(this), t), t)
                    }) : this.each(function () {
                        var t, o, i, a;
                        if (r)
                            for (o = 0, i = T(this), a = vt(e); t = a[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + gt(mt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var yt = /\r/g;
            T.fn.extend({
                val: function (e) {
                    var t, n, r, o = this[0];
                    return arguments.length ? (r = y(e), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (null == (o = r ? e.call(this, n, T(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = T.map(o, function (e) {
                            return null == e ? "" : e + ""
                        })), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    })) : o ? (t = T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
                }
            }), T.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = T.find.attr(e, "value");
                            return null != t ? t : gt(T.text(e))
                        }
                    },
                    select: {
                        get: function (e) {
                            var t, n, r, o = e.options,
                                i = e.selectedIndex,
                                a = "select-one" === e.type,
                                s = a ? null : [],
                                u = a ? i + 1 : o.length;
                            for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                                if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                                    if (t = T(n).val(), a) return t;
                                    s.push(t)
                                } return s
                        },
                        set: function (e, t) {
                            for (var n, r, o = e.options, i = T.makeArray(t), a = o.length; a--;)((r = o[a]).selected = T.inArray(T.valHooks.option.get(r), i) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), i
                        }
                    }
                }
            }), T.each(["radio", "checkbox"], function () {
                T.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1
                    }
                }, v.checkOn || (T.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), v.focusin = "onfocusin" in n;
            var xt = /^(?:focusinfocus|focusoutblur)$/,
                bt = function (e) {
                    e.stopPropagation()
                };
            T.extend(T.event, {
                trigger: function (e, t, r, o) {
                    var i, s, u, l, c, f, d, p, g = [r || a],
                        m = h.call(e, "type") ? e.type : e,
                        v = h.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = p = u = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(m + T.event.triggered) && (m.indexOf(".") > -1 && (m = (v = m.split(".")).shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[T.expando] ? e : new T.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : T.makeArray(t, [e]), d = T.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                        if (!o && !d.noBubble && !x(r)) {
                            for (l = d.delegateType || m, xt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) g.push(s), u = s;
                            u === (r.ownerDocument || a) && g.push(u.defaultView || u.parentWindow || n)
                        }
                        for (i = 0;
                            (s = g[i++]) && !e.isPropagationStopped();) p = s, e.type = i > 1 ? l : d.bindType || m, (f = (J.get(s, "events") || {})[e.type] && J.get(s, "handle")) && f.apply(s, t), (f = c && s[c]) && f.apply && Q(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
                        return e.type = m, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), t) || !Q(r) || c && y(r[m]) && !x(r) && ((u = r[c]) && (r[c] = null), T.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, bt), r[m](), e.isPropagationStopped() && p.removeEventListener(m, bt), T.event.triggered = void 0, u && (r[c] = u)), e.result
                    }
                },
                simulate: function (e, t, n) {
                    var r = T.extend(new T.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    T.event.trigger(r, null, t)
                }
            }), T.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        T.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return T.event.trigger(e, t, n, !0)
                }
            }), v.focusin || T.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                var n = function (e) {
                    T.event.simulate(t, e.target, T.event.fix(e))
                };
                T.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            o = J.access(r, t);
                        o || r.addEventListener(e, n, !0), J.access(r, t, (o || 0) + 1)
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            o = J.access(r, t) - 1;
                        o ? J.access(r, t, o) : (r.removeEventListener(e, n, !0), J.remove(r, t))
                    }
                }
            });
            var wt = n.location,
                kt = Date.now(),
                Tt = /\?/;
            T.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
            };
            var Ct = /\[\]$/,
                Et = /\r?\n/g,
                St = /^(?:submit|button|image|reset|file)$/i,
                Dt = /^(?:input|select|textarea|keygen)/i;

            function Nt(e, t, n, r) {
                var o;
                if (Array.isArray(t)) T.each(t, function (t, o) {
                    n || Ct.test(e) ? r(e, o) : Nt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
                });
                else if (n || "object" !== k(t)) r(e, t);
                else
                    for (o in t) Nt(e + "[" + o + "]", t[o], n, r)
            }
            T.param = function (e, t) {
                var n, r = [],
                    o = function (e, t) {
                        var n = y(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
                    o(this.name, this.value)
                });
                else
                    for (n in e) Nt(n, e[n], t, o);
                return r.join("&")
            }, T.fn.extend({
                serialize: function () {
                    return T.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = T.prop(this, "elements");
                        return e ? T.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !T(this).is(":disabled") && Dt.test(this.nodeName) && !St.test(e) && (this.checked || !de.test(e))
                    }).map(function (e, t) {
                        var n = T(this).val();
                        return null == n ? null : Array.isArray(n) ? T.map(n, function (e) {
                            return {
                                name: t.name,
                                value: e.replace(Et, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Et, "\r\n")
                        }
                    }).get()
                }
            });
            var At = /%20/g,
                jt = /#.*$/,
                qt = /([?&])_=[^&]*/,
                Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ht = /^(?:GET|HEAD)$/,
                Ot = /^\/\//,
                It = {},
                _t = {},
                Pt = "*/".concat("*"),
                Rt = a.createElement("a");

            function Mt(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, o = 0,
                        i = t.toLowerCase().match(R) || [];
                    if (y(n))
                        for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function Bt(e, t, n, r) {
                var o = {},
                    i = e === _t;

                function a(s) {
                    var u;
                    return o[s] = !0, T.each(e[s] || [], function (e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || i || o[l] ? i ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                    }), u
                }
                return a(t.dataTypes[0]) || !o["*"] && a("*")
            }

            function Wt(e, t) {
                var n, r, o = T.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                return r && T.extend(!0, e, r), e
            }
            Rt.href = wt.href, T.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: wt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Pt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": T.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (e, t) {
                    return t ? Wt(Wt(e, T.ajaxSettings), t) : Wt(T.ajaxSettings, e)
                },
                ajaxPrefilter: Mt(It),
                ajaxTransport: Mt(_t),
                ajax: function (e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, o, i, s, u, l, c, f, d, p, h = T.ajaxSetup({}, t),
                        g = h.context || h,
                        m = h.context && (g.nodeType || g.jquery) ? T(g) : T.event,
                        v = T.Deferred(),
                        y = T.Callbacks("once memory"),
                        x = h.statusCode || {},
                        b = {},
                        w = {},
                        k = "canceled",
                        C = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (c) {
                                    if (!s)
                                        for (s = {}; t = Lt.exec(i);) s[t[1].toLowerCase()] = t[2];
                                    t = s[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function () {
                                return c ? i : null
                            },
                            setRequestHeader: function (e, t) {
                                return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                            },
                            overrideMimeType: function (e) {
                                return null == c && (h.mimeType = e), this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (c) C.always(e[C.status]);
                                    else
                                        for (t in e) x[t] = [x[t], e[t]];
                                return this
                            },
                            abort: function (e) {
                                var t = e || k;
                                return r && r.abort(t), E(0, t), this
                            }
                        };
                    if (v.promise(C), h.url = ((e || h.url || wt.href) + "").replace(Ot, wt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""], null == h.crossDomain) {
                        l = a.createElement("a");
                        try {
                            l.href = h.url, l.href = l.href, h.crossDomain = Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host
                        } catch (e) {
                            h.crossDomain = !0
                        }
                    }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), Bt(It, h, t, C), c) return C;
                    for (d in (f = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ht.test(h.type), o = h.url.replace(jt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+")) : (p = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Tt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(qt, "$1"), p = (Tt.test(o) ? "&" : "?") + "_=" + kt++ + p), h.url = o + p), h.ifModified && (T.lastModified[o] && C.setRequestHeader("If-Modified-Since", T.lastModified[o]), T.etag[o] && C.setRequestHeader("If-None-Match", T.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : h.accepts["*"]), h.headers) C.setRequestHeader(d, h.headers[d]);
                    if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
                    if (k = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), r = Bt(_t, h, t, C)) {
                        if (C.readyState = 1, f && m.trigger("ajaxSend", [C, h]), c) return C;
                        h.async && h.timeout > 0 && (u = n.setTimeout(function () {
                            C.abort("timeout")
                        }, h.timeout));
                        try {
                            c = !1, r.send(b, E)
                        } catch (e) {
                            if (c) throw e;
                            E(-1, e)
                        }
                    } else E(-1, "No Transport");

                    function E(e, t, a, s) {
                        var l, d, p, b, w, k = t;
                        c || (c = !0, u && n.clearTimeout(u), r = void 0, i = s || "", C.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, a && (b = function (e, t, n) {
                            for (var r, o, i, a, s = e.contents, u = e.dataTypes;
                                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (o in s)
                                    if (s[o] && s[o].test(r)) {
                                        u.unshift(o);
                                        break
                                    } if (u[0] in n) i = u[0];
                            else {
                                for (o in n) {
                                    if (!u[0] || e.converters[o + " " + u[0]]) {
                                        i = o;
                                        break
                                    }
                                    a || (a = o)
                                }
                                i = i || a
                            }
                            if (i) return i !== u[0] && u.unshift(i), n[i]
                        }(h, C, a)), b = function (e, t, n, r) {
                            var o, i, a, s, u, l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            for (i = c.shift(); i;)
                                if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
                                    if ("*" === i) i = u;
                                    else if ("*" !== u && u !== i) {
                                if (!(a = l[u + " " + i] || l["* " + i]))
                                    for (o in l)
                                        if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], c.unshift(s[1]));
                                            break
                                        } if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + u + " to " + i
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(h, b, C, l), l ? (h.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (T.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (T.etag[o] = w)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, d = b.data, l = !(p = b.error))) : (p = k, !e && k || (k = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || k) + "", l ? v.resolveWith(g, [d, k, C]) : v.rejectWith(g, [C, k, p]), C.statusCode(x), x = void 0, f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? d : p]), y.fireWith(g, [C, k]), f && (m.trigger("ajaxComplete", [C, h]), --T.active || T.event.trigger("ajaxStop")))
                    }
                    return C
                },
                getJSON: function (e, t, n) {
                    return T.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return T.get(e, void 0, t, "script")
                }
            }), T.each(["get", "post"], function (e, t) {
                T[t] = function (e, n, r, o) {
                    return y(n) && (o = o || r, r = n, n = void 0), T.ajax(T.extend({
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: r
                    }, T.isPlainObject(e) && e))
                }
            }), T._evalUrl = function (e) {
                return T.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, T.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return this[0] && (y(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function (e) {
                    return y(e) ? this.each(function (t) {
                        T(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = T(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function (e) {
                    var t = y(e);
                    return this.each(function (n) {
                        T(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function (e) {
                    return this.parent(e).not("body").each(function () {
                        T(this).replaceWith(this.childNodes)
                    }), this
                }
            }), T.expr.pseudos.hidden = function (e) {
                return !T.expr.pseudos.visible(e)
            }, T.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, T.ajaxSettings.xhr = function () {
                try {
                    return new n.XMLHttpRequest
                } catch (e) {}
            };
            var Ft = {
                    0: 200,
                    1223: 204
                },
                $t = T.ajaxSettings.xhr();
            v.cors = !!$t && "withCredentials" in $t, v.ajax = $t = !!$t, T.ajaxTransport(function (e) {
                var t, r;
                if (v.cors || $t && !e.crossDomain) return {
                    send: function (o, i) {
                        var a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (a in e.xhrFields) s[a] = e.xhrFields[a];
                        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
                        t = function (e) {
                            return function () {
                                t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Ft[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                            4 === s.readyState && n.setTimeout(function () {
                                t && r()
                            })
                        }, t = t("abort");
                        try {
                            s.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t) throw e
                        }
                    },
                    abort: function () {
                        t && t()
                    }
                }
            }), T.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1)
            }), T.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function (e) {
                        return T.globalEval(e), e
                    }
                }
            }), T.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), T.ajaxTransport("script", function (e) {
                var t, n;
                if (e.crossDomain) return {
                    send: function (r, o) {
                        t = T("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                        }), a.head.appendChild(t[0])
                    },
                    abort: function () {
                        n && n()
                    }
                }
            });
            var Ut, zt = [],
                Xt = /(=)\?(?=&|$)|\?\?/;
            T.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = zt.pop() || T.expando + "_" + kt++;
                    return this[e] = !0, e
                }
            }), T.ajaxPrefilter("json jsonp", function (e, t, r) {
                var o, i, a, s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Xt, "$1" + o) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                    return a || T.error(o + " was not called"), a[0]
                }, e.dataTypes[0] = "json", i = n[o], n[o] = function () {
                    a = arguments
                }, r.always(function () {
                    void 0 === i ? T(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, zt.push(o)), a && y(i) && i(a[0]), a = i = void 0
                }), "script"
            }), v.createHTMLDocument = ((Ut = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), T.parseHTML = function (e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(r)) : t = a), o = q.exec(e), i = !n && [], o ? [t.createElement(o[1])] : (o = we([e], t, i), i && i.length && T(i).remove(), T.merge([], o.childNodes)));
                var r, o, i
            }, T.fn.load = function (e, t, n) {
                var r, o, i, a = this,
                    s = e.indexOf(" ");
                return s > -1 && (r = gt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && T.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    i = arguments, a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e)
                }).always(n && function (e, t) {
                    a.each(function () {
                        n.apply(this, i || [e.responseText, t, e])
                    })
                }), this
            }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                T.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), T.expr.pseudos.animated = function (e) {
                return T.grep(T.timers, function (t) {
                    return e === t.elem
                }).length
            }, T.offset = {
                setOffset: function (e, t, n) {
                    var r, o, i, a, s, u, l = T.css(e, "position"),
                        c = T(e),
                        f = {};
                    "static" === l && (e.style.position = "relative"), s = c.offset(), i = T.css(e, "top"), u = T.css(e, "left"), ("absolute" === l || "fixed" === l) && (i + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), y(t) && (t = t.call(e, n, T.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : c.css(f)
                }
            }, T.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                        T.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function () {
                    if (this[0]) {
                        var e, t, n, r = this[0],
                            o = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0), o.left += T.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - o.top - T.css(r, "marginTop", !0),
                            left: t.left - o.left - T.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                        return e || ke
                    })
                }
            }), T.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (e, t) {
                var n = "pageYOffset" === t;
                T.fn[e] = function (r) {
                    return z(this, function (e, r, o) {
                        var i;
                        if (x(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                        i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
                    }, e, r, arguments.length)
                }
            }), T.each(["top", "left"], function (e, t) {
                T.cssHooks[t] = Ue(v.pixelPosition, function (e, n) {
                    if (n) return n = $e(e, t), Be.test(n) ? T(e).position()[t] + "px" : n
                })
            }), T.each({
                Height: "height",
                Width: "width"
            }, function (e, t) {
                T.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function (n, r) {
                    T.fn[r] = function (o, i) {
                        var a = arguments.length && (n || "boolean" != typeof o),
                            s = n || (!0 === o || !0 === i ? "margin" : "border");
                        return z(this, function (t, n, o) {
                            var i;
                            return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? T.css(t, n, s) : T.style(t, n, o, s)
                        }, t, a ? o : void 0, a)
                    }
                })
            }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                T.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), T.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), T.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), T.proxy = function (e, t) {
                var n, r, o;
                if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = u.call(arguments, 2), (o = function () {
                    return e.apply(t || this, r.concat(u.call(arguments)))
                }).guid = e.guid = e.guid || T.guid++, o
            }, T.holdReady = function (e) {
                e ? T.readyWait++ : T.ready(!0)
            }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = j, T.isFunction = y, T.isWindow = x, T.camelCase = Y, T.type = k, T.now = Date.now, T.isNumeric = function (e) {
                var t = T.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, void 0 === (r = function () {
                return T
            }.apply(t, [])) || (e.exports = r);
            var Vt = n.jQuery,
                Gt = n.$;
            return T.noConflict = function (e) {
                return n.$ === T && (n.$ = Gt), e && n.jQuery === T && (n.jQuery = Vt), T
            }, o || (n.jQuery = n.$ = T), T
        })
    },
    "9TV/": function (e, t, n) {
        (function (e) {
            e.ajaxSetup({
                headers: {
                    "X-CSRF-TOKEN": e('meta[name="csrf-token"]').attr("content")
                }
            }), e(document).ready(function () {
                e("#unfinished").removeClass("col-lg-6"), e("#btn_unfinished").hide(), e("div.search-cat").hide()
            }), e(document).ready(function () {
                setTimeout(function () {
                    e("#msg").fadeOut("fast")
                }, 4e3)
            }), e(document).ready(function () {
                e("button.feed").on("click", function (t) {
                    t.preventDefault();
                    var n = e(this).attr("data-articleId"),
                        r = e(this).attr("id");
                    "Bookmark" == e("#" + r).text() ? e.post(urlBookmark, {
                        articleId: n,
                        _token: token
                    }, function () {
                        e("#" + r).text("Bookmarked !")
                    }) : "Bookmarked !" == e("#" + r).text() && e.post(urlUnmark, {
                        articleId: n,
                        _token: token
                    }, function () {
                        e("#" + r).text("Bookmark")
                    })
                })
            }), e(document).ready(function () {
                e("button.userbookmark").on("click", function (t) {
                    t.preventDefault();
                    var n = e(this).attr("id"),
                        r = e(this).attr("data-articleId"),
                        o = e("#bookmark-row").attr("data-count");
                    e.post(urlUnmark, {
                        articleId: r,
                        _token: token
                    }, function () {
                        e("#" + n).parents("div.bookmarked").hide(), o -= 1, e("#bookmark-row").attr("data-count", o), console.log(o), 0 == o && (e("div.nobook").css({
                            "margin-top": "22%",
                            "text-align": "center"
                        }), e("#nobookmark").text("No user story bookmarks left !"), e("#readnow").text("Read more"))
                    })
                })
            }), e(document).ready(function () {
                e("#save").on("click", function (t) {
                    t.preventDefault();
                    var n = e("#title").val(),
                        r = CKEDITOR.instances.editor.getData(),
                        o = e("#genre").val();
                    e.post(urlSave, {
                        title: n,
                        content: r,
                        genre: o,
                        _token: token
                    }, function (e) {
                        alert(e.message)
                    })
                })
            }), e(document).ready(function () {
                e("button.del_art").on("click", function () {
                    var t = e(this).attr("data-articleId");
                    e.post(urlDel, {
                        articleId: t,
                        _token: token
                    }, function (t) {
                        alert(t.msg), e(this).hide()
                    })
                })
            }), e(document).ready(function () {
                e("button.complete").on("click", function () {
                    var t;
                    t = e(this).attr("data-articleId"), e.post(urlComplete, {
                        articleId: t,
                        _token: token
                    }, function (t) {
                        e("#title").val(t.article_title), CKEDITOR.instances.content.setData(t.article_content), e("#genre").val(t.article_genre)
                    })
                })
            }), e(document).ready(function () {
                e("#commentSubmit").on("click", function (t) {
                    t.preventDefault();
                    var n = e("button.bookmark").attr("data-articleId"),
                        r = e("#commentarea").val();
                    e.post(urlComment, {
                        articleId: n,
                        comment: r,
                        _token: token
                    }, function (t) {
                        e("#user_pic").attr("src", t.profile_pic), e("#user").text(t.commented_by), e("#user_abt").text(t.about), e("#words").text(t.comment_content)
                    })
                })
            }), e(document).ready(function () {
                e("a.chooseGenre").on("click", function (t) {
                    t.preventDefault();
                    var n = e(this).attr("data-name"),
                        r = e(this).attr("data-genreId");
                    "someval" == e("#" + n).attr("data-val") ? (e("#" + n).addClass("w3-opacity-max"), e.post(urlGenre, {
                        genreId: r,
                        _token: token
                    }, function (t) {
                        var r = t.id;
                        e("#" + n).attr("data-val", "newval" + r)
                    })): e("#" + n).attr("data-val") == "newval" + r && (e("#" + n).removeClass("w3-opacity-max"), e.post(urlGenreRem, {
                        genreId: r,
                        _token: token
                    }, function (t) {
                        e("#" + n).attr("data-val", "someval")
                    }))
                })
            }), 
            // e(document).ready(function () {
            //     e("a.chooseGenre").dblclick(function (t) {
            //         t.preventDefault();
            //         var n = e(this).attr("data-name");
            //         e("#" + n).css("border", "none"), e.post(urlGenreRem, {
            //             genreId: genreId,
            //             _token: token
            //         })
            //     })
            // })
            e(document).ready(function () {
                e("#nextPage").on("click", function (t) {
                    t.preventDefault(), e.post(urlCreateProfile, {
                        _token: token
                    }, function (t) {
                        e("div.container").html(t.view)
                    })
                })
            }), e(document).ready(function () {
                e("#pro_update").on("click", function (t) {
                    t.preventDefault();
                    var n = e("#fname").val(),
                        r = e("#lname").val(),
                        o = e("#email").val(),
                        i = e("#about").val(),
                        a = e("#dob").val(),
                        s = e("#education").val(),
                        u = e("#yos").val(),
                        l = e("#college").val(),
                        c = e("#startup").val(),
                        f = e("#designation").val(),
                        d = e("#company").val();
                    e.post(urlUpdate, {
                        fname: n,
                        lname: r,
                        email: o,
                        about: i,
                        dob: a,
                        education: s,
                        yos: u,
                        college: l,
                        startup: c,
                        designation: f,
                        company: d,
                        _token: token
                    }, function (t) {
                        e("#nav_btn").text(t.fname), alert("profile updated !")
                    })
                })
            }), e(document).ready(function () {
                e("a.notify").on("click", function () {
                    var t = e(this).attr("data-m");
                    e.post(urlMark, {
                        id: t,
                        _token: token
                    }, function (n) {
                        var r = n.count;
                        r--, e("#" + t).hide(), e("#noti_count").text(r)
                    })
                })
            }), e(document).ready(function () {
                e(".search").on("keyup", function () {
                    var t = e(this).val();
                    e.get(urlSearchSug, {
                        query: t,
                        _token: token
                    }, function (t) {
                        t.output2 || t.output1 ? (e(".ur").html(t.output2), e(".sy").html(t.output1), e(".sys").html(t.output1)) : (e(".ur").html(t.nores), e(".sy").html(t.nores), e(".sys").html(t.nores))
                    })
                })
            });
            var t = 400,
                n = 400;
            e(document).on("click", ".social-share", function (r) {
                r.preventDefault();
                Math.floor((e(window).width() - t) / 2);
                var o = Math.floor((e(window).height() - n) / 2),
                    i = e(this).attr("href"),
                    a = window.open(i, "Social Share", "width=" + t + ",height=" + n + ",left=" + vpPsition + ",top=" + o + ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
                if (a) return a.focus(), !1
            }), e(document).ready(function () {
                e("#dedi_name").on("keyup", function () {
                    var t = e(this).val();
                    e.get(urlDedicate, {
                        name: t,
                        _token: token
                    }, function (t) {
                        e("#ur_dedi").html(t.output), e("a.name_dedi").on("click", function (t) {
                            t.preventDefault();
                            var n = e(this).attr("id"),
                                r = e("#" + n).text();
                            e("#dedi_name").val(r)
                        })
                    })
                })
            }), e(document).ready(function () {
                e("#s-f").on("click", function () {
                    "student" == e("#student-form").attr("class") ? (e("#student-form").removeClass("student"), e("#edu,#yos,#col").attr("required", "required")) : (e("#student-form").addClass("student"), e("#edu,#yos,#col").removeAttr("required", "required"))
                })
            }), e(document).ready(function () {
                e("#p-f").on("click", function () {
                    "professional" == e("#professional-form").attr("class") ? (e("#professional-form").removeClass("professional"), e("#desig,#comp").attr("required", "required")) : (e("#professional-form").addClass("professional"), e("#desig,#comp").removeAttr("required", "required"))
                })
            })
        }).call(t, n("7t+N"))
    }
});