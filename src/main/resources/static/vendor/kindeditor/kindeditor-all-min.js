/* KindEditor 4.1.7 (2013-04-21), Copyright (C) kindsoft.net, Licence: http://www.kindsoft.net/license.php */
(function (b, d) {
    function g(a) {
        if (!a) {
            return !1;
        }
        return Object.prototype.toString.call(a) === "[object Array]"
    }

    function l(a) {
        if (!a) {
            return !1;
        }
        return Object.prototype.toString.call(a) === "[object Function]"
    }

    function e(a, c) {
        for (var f = 0, b = c.length; f < b; f++) {
            if (a === c[f]) {
                return f;
            }
        }
        return -1
    }

    function h(a, c) {
        if (g(a)) {
            for (var f = 0, b = a.length; f < b; f++) {
                if (c.call(a[f], f, a[f]) === !1) {
                    break
                }
            }
        } else {
            for (f in a) {
                if (a.hasOwnProperty(f) && c.call(a[f], f, a[f])
                                           === !1) {
                    break
                }
            }
        }
    }

    function m(a) {
        return a.replace(/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g, "")
    }

    function n(a, c, f) {
        f = f === d ? "," : f;
        return (f + c + f).indexOf(f + a + f) >= 0
    }

    function j(a, c) {
        c = c || "px";
        return a && /^\d+$/.test(a) ? a + c : a
    }

    function o(a) {
        var c;
        return a && (c = /(\d+)/.exec(a)) ? parseInt(c[1], 10) : 0
    }

    function s(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;")
            .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }

    function t(a) {
        return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"').replace(/&amp;/g, "&")
    }

    function p(a) {
        var c = a.split("-"), a = "";
        h(c, function (c, b) {
            a += c > 0 ? b.charAt(0).toUpperCase() +
                         b.substr(1) : b
        });
        return a
    }

    function q(a) {
        function c(a) {
            a = parseInt(a, 10).toString(16).toUpperCase();
            return a.length > 1 ? a : "0" + a
        }

        return a.replace(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/ig,
                         function (a, b, d, k) {
                             return "#" + c(b) + c(d) + c(k)
                         })
    }

    function z(a, c) {
        var c = c === d ? "," : c, f = {}, b = g(a) ? a : a.split(c), u;
        h(b, function (a, c) {
            if (u = /^(\d+)\.\.(\d+)$/.exec(c)) {
                for (var b = parseInt(u[1], 10);
                     b <= parseInt(u[2], 10);
                     b++) {
                    f[b.toString()] =
                        !0;
                }
            } else {
                f[c] = !0
            }
        });
        return f
    }

    function D(a, c) {
        return Array.prototype.slice.call(a, c || 0)
    }

    function r(a,
               c) {
        return a === d ? c : a
    }

    function A(a, c, f) {
        f || (f = c, c = null);
        var b;
        if (c) {
            var d = function () {
            };
            d.prototype = c.prototype;
            b = new d;
            h(f, function (a, c) {
                b[a] = c
            })
        } else {
            b = f;
        }
        b.constructor = a;
        a.prototype = b;
        a.parent = c ? c.prototype : null
    }

    function w(a) {
        var c;
        if (c = /\{[\s\S]*\}|\[[\s\S]*\]/.exec(a)) {
            a = c[0];
        }
        c =
            /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        c.lastIndex = 0;
        c.test(a) && (a = a.replace(c, function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(
                a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(
                    /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
            return eval("("
                        + a
                        + ")");
        }
        throw"JSON parse error";
    }

    function H(a, c, f) {
        a.addEventListener ? a.addEventListener(c, f, db) : a.attachEvent
                                                            && a.attachEvent("on"
                                                                             + c,
                f)
    }

    function v(a, c, f) {
        a.removeEventListener ? a.removeEventListener(c, f, db) : a.detachEvent
                                                                  && a.detachEvent("on"
                                                                                   + c,
                f)
    }

    function E(a, c) {
        this.init(a, c)
    }

    function U(a) {
        try {
            delete a[la]
        } catch (c) {
            a.removeAttribute &&
            a.removeAttribute(la)
        }
    }

    function F(a, c, f) {
        if (c.indexOf(",") >= 0) {
            h(c.split(","), function () {
                F(a, this, f)
            });
        } else {
            var b = a[la] || null;
            b || (a[la] = ++eb, b = eb);
            L[b] === d && (L[b] = {});
            var u = L[b][c];
            u && u.length > 0 ? v(a, c, u[0]) : (L[b][c] = [], L[b].el = a);
            u = L[b][c];
            u.length === 0 && (u[0] = function (c) {
                var f = c ? new E(a, c) : d;
                h(u, function (c, b) {
                    c > 0 && b && b.call(a, f)
                })
            });
            e(f, u) < 0 && u.push(f);
            H(a, c, u[0])
        }
    }

    function N(a, c, f) {
        if (c && c.indexOf(",") >= 0) {
            h(c.split(","), function () {
                N(a, this, f)
            });
        } else {
            var b = a[la] || null;
            if (b) {
                if (c === d) {
                    b in L && (h(L[b],
                                 function (c, f) {
                                     c != "el" && f.length > 0 && v(
                                         a, c, f[0])
                                 }), delete L[b], U(
                        a));
                } else if (L[b]) {
                    var u = L[b][c];
                    if (u && u.length > 0) {
                        f === d ? (v(a, c, u[0]), delete L[b][c]) : (h(u,
                                                                       function (a,
                                                                                 c) {
                                                                           a > 0
                                                                           && c
                                                                              === f
                                                                           && u.splice(
                                                                               a,
                                                                               1)
                                                                       }), u.length
                                                                           == 1
                                                                           && (v(
                            a,
                            c,
                            u[0]), delete L[b][c]));
                        var k = 0;
                        h(L[b], function () {
                            k++
                        });
                        k < 2 && (delete L[b], U(a))
                    }
                }
            }
        }
    }

    function ea(a, c) {
        if (c.indexOf(",") >= 0) {
            h(c.split(","), function () {
                ea(a, this)
            });
        } else {
            var f = a[la] || null;
            if (f) {
                var b = L[f][c];
                if (L[f] && b && b.length > 0) {
                    b[0]()
                }
            }
        }
    }

    function V(a, c, f) {
        c = /^\d{2,}$/.test(c) ? c : c.toUpperCase().charCodeAt(0);
        F(a, "keydown", function (b) {
            b.ctrlKey && b.which == c && !b.shiftKey && !b.altKey && (f.call(
                a), b.stop())
        })
    }

    function Q(a) {
        for (var c = {}, f = /\s*([\w\-]+)\s*:([^;]*)(;|$)/g, b;
             b = f.exec(a);) {
            var d = m(b[1].toLowerCase());
            b = m(q(b[2]));
            c[d] = b
        }
        return c
    }

    function G(a) {
        for (var c = {},
                 f = /\s+(?:([\w\-:]+)|(?:([\w\-:]+)=([^\s"'<>]+))|(?:([\w\-:"]+)="([^"]*)")|(?:([\w\-:"]+)='([^']*)'))(?=(?:\s|\/|>)+)/g,
                 b; b = f.exec(a);) {
            var d = (b[1] || b[2] || b[4] || b[6]).toLowerCase();
            c[d] = (b[2] ? b[3] : b[4] ? b[5] : b[7]) || ""
        }
        return c
    }

    function S(a, c) {
        return a =
            /\s+class\s*=/.test(a) ? a.replace(
                /(\s+class=["']?)([^"']*)(["']?[\s>])/, function (a, b, d, k) {
                    return (" " + d + " ").indexOf(" " + c + " ") < 0 ? d === ""
                        ? b + c + k : b + d + " " + c + k : a
                }) : a.substr(0, a.length - 1) + ' class="' + c + '">'
    }

    function Y(a) {
        var c = "";
        h(Q(a), function (a, b) {
            c += a + ":" + b + ";"
        });
        return c
    }

    function M(a, c, f, b) {
        function u(a) {
            for (var a = a.split("/"), c = [], f = 0, b = a.length; f < b;
                 f++) {
                var d = a[f];
                d == ".." ? c.length > 0 && c.pop() : d !== "" && d != "."
                                                      && c.push(d)
            }
            return "/" + c.join("/")
        }

        function k(c, f) {
            if (a.substr(0, c.length) === c) {
                for (var d = [], u =
                    0; u < f; u++) {
                    d.push("..");
                }
                u = ".";
                d.length > 0 && (u += "/" + d.join("/"));
                b == "/" && (u += "/");
                return u + a.substr(c.length)
            } else if (i = /^(.*)\//.exec(c)) {
                return k(i[1], ++f)
            }
        }

        c = r(c, "").toLowerCase();
        a.substr(0, 5) != "data:" && (a = a.replace(/([^:])\/\//g, "$1/"));
        if (e(c, ["absolute", "relative", "domain"]) < 0) {
            return a;
        }
        f = f || location.protocol + "//" + location.host;
        if (b === d) {
            var B = location.pathname.match(/^(\/.*)\//),
                b = B ? B[1] : "";
        }
        var i;
        if (i = /^(\w+:\/\/[^\/]*)/.exec(a)) {
            if (i[1] !== f) {
                return a
            }
        } else if (/^\w+:/.test(a)) {
            return a;
        }
        /^\//.test(a) ? a = f + u(a.substr(1)) : /^\w+:\/\//.test(a) || (a =
            f + u(b + "/" + a));
        c === "relative" ? a = k(f + b, 0).substr(2) : c === "absolute"
                                                       && a.substr(0, f.length)
                                                       === f && (a =
                a.substr(f.length));
        return a
    }

    function J(a, c, f, b, d) {
        var f = f || "", b = r(b, !1), d = r(d, "\t"),
            k = "xx-small,x-small,small,medium,large,x-large,xx-large".split(
                ","),
            a = a.replace(/(<(?:pre|pre\s[^>]*)>)([\s\S]*?)(<\/pre>)/ig,
                          function (a, c, f, b) {
                              return c + f.replace(/<(?:br|br\s[^>]*)>/ig, "\n")
                                     + b
                          }),
            a = a.replace(/<(?:br|br\s[^>]*)\s*\/?>\s*<\/p>/ig, "</p>"),
            a = a.replace(/(<(?:p|p\s[^>]*)>)\s*(<\/p>)/ig,
                          "$1<br />$2"), a = a.replace(/\u200B/g, ""),
            a = a.replace(/\u00A9/g, "&copy;"), B = {};
        c && (h(c, function (a, c) {
            for (var f = a.split(","), b = 0, d = f.length; b < d;
                 b++) {
                B[f[b]] = z(c)
            }
        }), B.script || (a =
            a.replace(/(<(?:script|script\s[^>]*)>)([\s\S]*?)(<\/script>)/ig,
                      "")), B.style || (a =
            a.replace(/(<(?:style|style\s[^>]*)>)([\s\S]*?)(<\/style>)/ig,
                      "")));
        var i = [], a = a.replace(
            /([ \t\n\r]*)<(\/)?([\w\-:]+)((?:\s+|(?:\s+[\w\-:]+)|(?:\s+[\w\-:]+=[^\s"'<>]+)|(?:\s+[\w\-:"]+="[^"]*")|(?:\s+[\w\-:"]+='[^']*'))*)(\/)?>([ \t\n\r]*)/g,
            function (a,
                      g, j, n, o, s, l) {
                var g = g || "", j = j || "", m = n.toLowerCase(), q = o || "",
                    n = s ? " " + s : "", l = l || "";
                if (c && !B[m]) {
                    return "";
                }
                n === "" && fb[m] && (n = " /");
                gb[m] && (g && (g = " "), l && (l = " "));
                Ja[m] && (j ? l = "\n" : g = "\n");
                b && m == "br" && (l = "\n");
                if (hb[m] && !Ja[m]) {
                    if (b) {
                        j && i.length > 0 && i[i.length - 1] === m ? i.pop()
                            : i.push(m);
                        l = g = "\n";
                        o = 0;
                        for (s = j ? i.length : i.length - 1; o < s; o++) {
                            g += d, j
                                    || (l +=
                                d);
                        }
                        n ? i.pop() : j || (l += d)
                    } else {
                        g = l = "";
                    }
                }
                if (q !== "") {
                    var t = G(a);
                    if (m === "font") {
                        var p = {}, w = "";
                        h(t, function (a, c) {
                            if (a === "color") {
                                p.color = c, delete t[a];
                            }
                            a === "size" && (p["font-size"] =
                                k[parseInt(c, 10) - 1] || "", delete t[a]);
                            a === "face" && (p["font-family"] = c, delete t[a]);
                            a === "style" && (w = c)
                        });
                        w && !/;$/.test(w) && (w += ";");
                        h(p, function (a, c) {
                            c !== "" && (/\s/.test(c) && (c =
                                "'" + c + "'"), w += a + ":" + c + ";")
                        });
                        t.style = w
                    }
                    h(t, function (a, b) {
                        Jb[a] && (t[a] = a);
                        e(a, ["src", "href"]) >= 0 && (t[a] = M(b, f));
                        (c && a !== "style" && !B[m]["*"] && !B[m][a] || m
                         === "body" && a === "contenteditable"
                         || /^kindeditor_\d+$/.test(a)) && delete t[a];
                        if (a === "style" && b !== "") {
                            var d = Q(b);
                            h(d, function (a) {
                                c && !B[m].style && !B[m]["." + a]
                                && delete d[a]
                            });
                            var K =
                                "";
                            h(d, function (a, c) {
                                K += a + ":" + c + ";"
                            });
                            t.style = K
                        }
                    });
                    q = "";
                    h(t, function (a, c) {
                        a === "style" && c === "" || (c =
                            c.replace(/"/g, "&quot;"), q +=
                            " " + a + '="' + c + '"')
                    })
                }
                m === "font" && (m = "span");
                return g + "<" + j + m + q + n + ">" + l
            }), a = a.replace(/(<(?:pre|pre\s[^>]*)>)([\s\S]*?)(<\/pre>)/ig,
                              function (a, c, f, b) {
                                  return c + f.replace(/\n/g,
                                                       '<span id="__kindeditor_pre_newline__">\n')
                                         + b
                              }), a = a.replace(/\n\s*\n/g, "\n"),
            a = a.replace(/<span id="__kindeditor_pre_newline__">\n/g, "\n");
        return m(a)
    }

    function W(a, c) {
        a = a.replace(/<meta[\s\S]*?>/ig, "").replace(/<![\s\S]*?>/ig,
                                                      "")
            .replace(/<style[^>]*>[\s\S]*?<\/style>/ig, "")
            .replace(/<script[^>]*>[\s\S]*?<\/script>/ig, "")
            .replace(/<w:[^>]+>[\s\S]*?<\/w:[^>]+>/ig, "")
            .replace(/<o:[^>]+>[\s\S]*?<\/o:[^>]+>/ig, "")
            .replace(/<xml>[\s\S]*?<\/xml>/ig, "")
            .replace(/<(?:table|td)[^>]*>/ig, function (a) {
                return a.replace(/border-bottom:([#\w\s]+)/ig, "border:$1")
            });
        return J(a, c)
    }

    function T(a) {
        if (/\.(rm|rmvb)(\?|$)/i.test(a)) {
            return "audio/x-pn-realaudio-plugin";
        }
        if (/\.(swf|flv)(\?|$)/i.test(
                a)) {
            return "application/x-shockwave-flash";
        }
        return "video/x-ms-asf-plugin"
    }

    function fa(a) {
        return G(unescape(a))
    }

    function Ka(a) {
        var c = "<embed ";
        h(a, function (a, b) {
            c += a + '="' + b + '" '
        });
        c += "/>";
        return c
    }

    function ib(a, c) {
        var f = c.width, b = c.height, d = c.type || T(c.src), k = Ka(c),
            i = "";
        f > 0 && (i += "width:" + f + "px;");
        b > 0 && (i += "height:" + b + "px;");
        f =
            /realaudio/i.test(d) ? "ke-rm" : /flash/i.test(d) ? "ke-flash"
                : "ke-media";
        f = '<img class="' + f + '" src="' + a + '" ';
        i !== "" && (f += 'style="' + i + '" ');
        f += 'data-ke-tag="' + escape(k) + '" alt="" />';
        return f
    }

    function Ba(a, c) {
        if (a.nodeType == 9 && c.nodeType != 9) {
            return !0;
        }
        for (; c =
                   c.parentNode;) {
            if (c == a) {
                return !0;
            }
        }
        return !1
    }

    function Ca(a, c) {
        var c = c.toLowerCase(), f = null;
        if (!Kb && a.nodeName.toLowerCase() != "script") {
            var b = a.ownerDocument.createElement("div");
            b.appendChild(a.cloneNode(!1));
            b = G(t(b.innerHTML));
            c in b && (f = b[c])
        } else {
            try {
                f = a.getAttribute(c, 2)
            } catch (d) {
                f = a.getAttribute(c, 1)
            }
        }
        c === "style" && f !== null && (f = Y(f));
        return f
    }

    function Da(a, c) {
        function f(a) {
            if (typeof a != "string") {
                return a;
            }
            return a.replace(/([^\w\-])/g, "\\$1")
        }

        function b(a, c) {
            return a === "*" || a.toLowerCase() === f(c.toLowerCase())
        }

        function d(a, c, f) {
            var u = [];
            (a = (f.ownerDocument || f).getElementById(a.replace(/\\/g, "")))
            && b(c, a.nodeName) && Ba(f, a) && u.push(a);
            return u
        }

        function k(a, c, f) {
            var d = f.ownerDocument || f, u = [], k, i, B;
            if (f.getElementsByClassName) {
                d = f.getElementsByClassName(a.replace(/\\/g, ""));
                k = 0;
                for (i = d.length; k < i; k++) {
                    B = d[k], b(c, B.nodeName)
                              && u.push(B)
                }
            } else if (d.querySelectorAll) {
                d =
                    d.querySelectorAll((f.nodeName !== "#document" ? f.nodeName
                                       + " " : "") + c + "." + a);
                k = 0;
                for (i = d.length; k < i; k++) {
                    B = d[k], Ba(f, B) && u.push(B)
                }
            } else {
                d = f.getElementsByTagName(c);
                a = " " + a + " ";
                k = 0;
                for (i = d.length; k < i; k++) {
                    if (B = d[k], B.nodeType
                                  == 1) {
                        (c =
                            B.className) && (" " + c + " ").indexOf(a) > -1
                        && u.push(B)
                    }
                }
            }
            return u
        }

        function i(a, c, b, d) {
            for (var K = [], b = d.getElementsByTagName(b), u = 0, k = b.length;
                 u < k; u++) {
                d = b[u], d.nodeType == 1 && (c === null ? Ca(d, a)
                          !== null && K.push(d) : c === f(Ca(d, a))
                          && K.push(d));
            }
            return K
        }

        function g(a, c) {
            var f = [], e,
                P = (e = /^((?:\\.|[^.#\s\[<>])+)/.exec(a)) ? e[1] : "*";
            if (e = /#((?:[\w\-]|\\.)+)$/.exec(a)) {
                f =
                    d(e[1], P, c);
            } else if (e = /\.((?:[\w\-]|\\.)+)$/.exec(a)) {
                f =
                    k(e[1], P, c);
            } else if (e = /\[((?:[\w\-]|\\.)+)\]/.exec(a)) {
                f =
                    i(e[1].toLowerCase(), null, P, c);
            } else if (e =
                    /\[((?:[\w\-]|\\.)+)\s*=\s*['"]?((?:\\.|[^'"]+)+)['"]?\]/.exec(
                        a)) {
                f = e[1].toLowerCase();
                e = e[2];
                if (f === "id") {
                    P = d(e, P, c);
                } else if (f === "class") {
                    P =
                        k(e, P, c);
                } else if (f === "name") {
                    f = [];
                    e =
                        (c.ownerDocument || c).getElementsByName(
                            e.replace(/\\/g, ""));
                    for (var h, j = 0, o = e.length; j < o; j++) {
                        h = e[j], b(P,
                                    h.nodeName)
                                  && Ba(
                            c, h) && h.getAttributeNode("name") && f.push(h);
                    }
                    P = f
                } else {
                    P = i(f, e, P, c);
                }
                f = P
            } else {
                P = c.getElementsByTagName(P);
                h = 0;
                for (j = P.length; h < j; h++) {
                    e = P[h], e.nodeType == 1
                              && f.push(e)
                }
            }
            return f
        }

        var j = a.split(",");
        if (j.length > 1) {
            var n = [];
            h(j, function () {
                h(Da(this, c), function () {
                    e(this, n) < 0 && n.push(this)
                })
            });
            return n
        }
        for (var c = c || document, j = [], o, m = /((?:\\.|[^\s>])+|[\s>])/g;
             o = m.exec(a);) {
            o[1] !== " " && j.push(o[1]);
        }
        o = [];
        if (j.length == 1) {
            return g(j[0], c);
        }
        var m = !1, l, s, q, t, w, p, r, N, F, v;
        p = 0;
        for (lenth = j.length; p < lenth; p++) {
            if (l = j[p], l === ">") {
                m =
                    !0;
            } else {
                if (p > 0) {
                    s = [];
                    r = 0;
                    for (F = o.length; r < F; r++) {
                        t = o[r];
                        q = g(l, t);
                        N = 0;
                        for (v = q.length; N < v; N++) {
                            w = q[N], m ? t
                                          === w.parentNode
                                          && s.push(w)
                                : s.push(w)
                        }
                    }
                    o = s
                } else {
                    o = g(l, c);
                }
                if (o.length ===
                    0) {
                    return []
                }
            }
        }
        return o
    }

    function ga(a) {
        if (!a) {
            return document;
        }
        return a.ownerDocument || a.document || a
    }

    function ha(a) {
        if (!a) {
            return b;
        }
        a = ga(a);
        return a.parentWindow || a.defaultView
    }

    function Lb(a, c) {
        if (a.nodeType == 1) {
            var f = ga(a);
            try {
                a.innerHTML =
                    '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />'
                    + c;
                var b = f.getElementById("__kindeditor_temp_tag__");
                b.parentNode.removeChild(b)
            } catch (d) {
                i(a).empty(), i("@" + c, f).each(function () {
                    a.appendChild(this)
                })
            }
        }
    }

    function La(a, c, f) {
        C && O < 8 && c.toLowerCase() ==
                      "class" && (c = "className");
        a.setAttribute(c, "" + f)
    }

    function Ma(a) {
        if (!a || !a.nodeName) {
            return "";
        }
        return a.nodeName.toLowerCase()
    }

    function Mb(a, c) {
        var f = ha(a), b = p(c), d = "";
        f.getComputedStyle ? (f = f.getComputedStyle(a, null), d =
            f[b] || f.getPropertyValue(c) || a.style[b]) : a.currentStyle
                                                           && (d =
                a.currentStyle[b] || a.style[b]);
        return d
    }

    function X(a) {
        a = a || document;
        return aa ? a.body : a.documentElement
    }

    function ma(a) {
        var a = a || document, c;
        C || Na ? (c = X(a).scrollLeft, a = X(a).scrollTop) : (c =
            ha(a).scrollX, a = ha(a).scrollY);
        return {
            x: c,
            y: a
        }
    }

    function R(a) {
        this.init(a)
    }

    function jb(a) {
        a.collapsed =
            a.startContainer === a.endContainer && a.startOffset
            === a.endOffset;
        return a
    }

    function Oa(a, c, f) {
        function b(d, K, u) {
            var k = d.nodeValue.length, i;
            c && (i = d.cloneNode(!0), i = K > 0 ? i.splitText(K) : i, u < k
            && i.splitText(u - K));
            if (f) {
                var B = d;
                K > 0 && (B = d.splitText(K), a.setStart(d, K));
                u < k && (d = B.splitText(u - K), a.setEnd(d, 0));
                e.push(B)
            }
            return i
        }

        function d() {
            f && a.up().collapse(!0);
            for (var c = 0, b = e.length; c < b; c++) {
                var K = e[c];
                K.parentNode && K.parentNode.removeChild(K)
            }
        }

        function k(d,
                   u) {
            for (var m = d.firstChild, l; m;) {
                l = (new Z(i)).selectNode(m);
                h = l.compareBoundaryPoints(qa, a);
                h >= 0 && j <= 0 && (j = l.compareBoundaryPoints(ra, a));
                j >= 0 && o <= 0 && (o = l.compareBoundaryPoints(na, a));
                o >= 0 && n <= 0 && (n = l.compareBoundaryPoints(sa, a));
                if (n >= 0) {
                    return !1;
                }
                l = m.nextSibling;
                if (h > 0) {
                    if (m.nodeType == 1) {
                        if (j >= 0 && o <= 0) {
                            c
                            && u.appendChild(
                                m.cloneNode(!0)), f && e.push(m);
                        } else {
                            var s;
                            c && (s = m.cloneNode(!1), u.appendChild(s));
                            if (k(m, s) === !1) {
                                return !1
                            }
                        }
                    } else if (m.nodeType == 3 && (m =
                            m == g.startContainer ? b(m, g.startOffset,
                                                      m.nodeValue.length) : m
                                                                            == g.endContainer
                                ? b(m, 0, g.endOffset) : b(m, 0,
                                                           m.nodeValue.length), c)) {
                        try {
                            u.appendChild(m)
                        } catch (q) {
                        }
                    }
                }
                m = l
            }
        }

        var i = a.doc, e = [], g = a.cloneRange().down(), h = -1, j = -1,
            o = -1, n = -1, m = a.commonAncestor(),
            l = i.createDocumentFragment();
        if (m.nodeType == 3) {
            return m = b(m, a.startOffset, a.endOffset), c
                                                         && l.appendChild(
                m), d(), c ? l : a;
        }
        k(m, l);
        f && a.up().collapse(!0);
        for (var m = 0, s = e.length; m < s; m++) {
            var q = e[m];
            q.parentNode && q.parentNode.removeChild(q)
        }
        return c ? l : a
    }

    function ta(a, c) {
        for (var f = c; f;) {
            var b = i(f);
            if (b.name == "marquee" || b.name ==
                                       "select") {
                return;
            }
            f = f.parentNode
        }
        try {
            a.moveToElementText(c)
        } catch (d) {
        }
    }

    function kb(a, c) {
        var f = a.parentElement().ownerDocument, b = a.duplicate();
        b.collapse(c);
        var d = b.parentElement(), k = d.childNodes;
        if (k.length === 0) {
            return {node: d.parentNode, offset: i(d).index()};
        }
        var B = f, e = 0, g = -1, h = a.duplicate();
        ta(h, d);
        for (var j = 0, o = k.length; j < o; j++) {
            var n = k[j], g = h.compareEndPoints("StartToStart", b);
            if (g === 0) {
                return {node: n.parentNode, offset: j};
            }
            if (n.nodeType == 1) {
                var m = a.duplicate(), l, s = i(n), q = n;
                s.isControl() && (l = f.createElement("span"),
                    s.after(l), q = l, e +=
                    s.text().replace(/\r\n|\n|\r/g, "").length);
                ta(m, q);
                h.setEndPoint("StartToEnd", m);
                g > 0 ? e += m.text.replace(/\r\n|\n|\r/g, "").length : e = 0;
                l && i(l).remove()
            } else {
                n.nodeType == 3 && (h.moveStart("character",
                                                n.nodeValue.length), e +=
                    n.nodeValue.length);
            }
            g < 0 && (B = n)
        }
        if (g < 0 && B.nodeType == 1) {
            return {
                node: d,
                offset: i(d.lastChild).index() + 1
            };
        }
        if (g > 0) {
            for (; B.nextSibling && B.nodeType == 1;) {
                B = B.nextSibling;
            }
        }
        h = a.duplicate();
        ta(h, d);
        h.setEndPoint("StartToEnd", b);
        e -= h.text.replace(/\r\n|\n|\r/g, "").length;
        if (g > 0 && B.nodeType ==
                     3) {
            for (f = B.previousSibling; f && f.nodeType == 3;) {
                e -=
                    f.nodeValue.length, f = f.previousSibling;
            }
        }
        return {node: B, offset: e}
    }

    function lb(a, c) {
        var f = a.ownerDocument || a, b = f.body.createTextRange();
        if (f == a) {
            return b.collapse(!0), b;
        }
        if (a.nodeType == 1 && a.childNodes.length > 0) {
            var d = a.childNodes, k;
            c === 0 ? (k = d[0], d = !0) : (k = d[c - 1], d = !1);
            if (!k) {
                return b;
            }
            if (i(k).name === "head") {
                return c === 1 && (d = !0), c === 2
                                            && (d =
                    !1), b.collapse(d), b;
            }
            if (k.nodeType == 1) {
                var B = i(k), e;
                B.isControl() && (e = f.createElement("span"), d ? B.before(e)
                    : B.after(e), k = e);
                ta(b,
                   k);
                b.collapse(d);
                e && i(e).remove();
                return b
            }
            a = k;
            c = d ? 0 : k.nodeValue.length
        }
        f = f.createElement("span");
        i(a).before(f);
        ta(b, f);
        b.moveStart("character", c);
        i(f).remove();
        return b
    }

    function mb(a) {
        function c(a) {
            if (i(a.node).name == "tr") {
                a.node =
                    a.node.cells[a.offset], a.offset = 0
            }
        }

        var f;
        if (C) {
            if (a.item) {
                return f = ga(a.item(0)), f = new Z(f), f.selectNode(
                    a.item(0)), f;
            }
            f = a.parentElement().ownerDocument;
            var b = kb(a, !0), a = kb(a, !1);
            c(b);
            c(a);
            f = new Z(f);
            f.setStart(b.node, b.offset);
            f.setEnd(a.node, a.offset);
            return f
        }
        b = a.startContainer;
        f = b.ownerDocument || b;
        f = new Z(f);
        f.setStart(b, a.startOffset);
        f.setEnd(a.endContainer, a.endOffset);
        return f
    }

    function Z(a) {
        this.init(a)
    }

    function Pa(a) {
        if (!a.nodeName) {
            return a.constructor === Z ? a : mb(a);
        }
        return new Z(a)
    }

    function ba(a, c, f) {
        try {
            a.execCommand(c, !1, f)
        } catch (b) {
        }
    }

    function nb(a, c) {
        var f = "";
        try {
            f = a.queryCommandValue(c)
        } catch (b) {
        }
        typeof f !== "string" && (f = "");
        return f
    }

    function Qa(a) {
        var c = ha(a);
        return a.selection || c.getSelection()
    }

    function ob(a) {
        var c = {}, f, b;
        h(a, function (a, d) {
            f = a.split(",");
            for (var i =
                0, e = f.length; i < e; i++) {
                b = f[i], c[b] = d
            }
        });
        return c
    }

    function Ra(a, c) {
        return pb(a, c, "*") || pb(a, c)
    }

    function pb(a, c, f) {
        f = f || a.name;
        if (a.type !== 1) {
            return !1;
        }
        c = ob(c);
        if (!c[f]) {
            return !1;
        }
        for (var f = c[f].split(","), c = 0, b = f.length; c < b; c++) {
            var d = f[c];
            if (d === "*") {
                return !0;
            }
            var k = /^(\.?)([^=]+)(?:=([^=]*))?$/.exec(d),
                i = k[1] ? "css" : "attr", d = k[2], k = k[3] || "";
            if (k === "" && a[i](d) !== "") {
                return !0;
            }
            if (k !== "" && a[i](d) === k) {
                return !0
            }
        }
        return !1
    }

    function Sa(a, c) {
        a.type == 1 && (qb(a, c, "*"), qb(a, c))
    }

    function qb(a, c, f) {
        f = f || a.name;
        if (a.type ===
            1 && (c = ob(c), c[f])) {
            for (var f = c[f].split(","), c = !1, b = 0, d = f.length; b < d;
                 b++) {
                var k = f[b];
                if (k === "*") {
                    c = !0;
                    break
                }
                var i = /^(\.?)([^=]+)(?:=([^=]*))?$/.exec(k), k = i[2];
                i[1] ? (k = p(k), a[0].style[k] && (a[0].style[k] = ""))
                    : a.removeAttr(k)
            }
            c && a.remove(!0)
        }
    }

    function Ta(a) {
        for (; a.first();) {
            a = a.first();
        }
        return a
    }

    function oa(a) {
        if (a.type != 1 || a.isSingle()) {
            return !1;
        }
        return a.html().replace(/<[^>]+>/g, "") === ""
    }

    function Nb(a, c, f) {
        h(c, function (c, f) {
            c !== "style" && a.attr(c, f)
        });
        h(f, function (c, f) {
            a.css(c, f)
        })
    }

    function ua(a) {
        this.init(a)
    }

    function rb(a) {
        a.nodeName && (a = ga(a), a =
            Pa(a).selectNodeContents(a.body).collapse(!1));
        return new ua(a)
    }

    function Ua(a) {
        var c = a.moveEl, f = a.moveFn, b = a.clickEl || c, u = a.beforeDrag,
            k = [document];
        (a.iframeFix === d || a.iframeFix) && i("iframe").each(function () {
            if (!/^https?:\/\//.test(M(this.src || "", "absolute"))) {
                var a;
                try {
                    a = Va(this)
                } catch (c) {
                }
                if (a) {
                    var f = i(this).pos();
                    i(a).data("pos-x", f.x);
                    i(a).data("pos-y", f.y);
                    k.push(a)
                }
            }
        });
        b.mousedown(function (a) {
            function d(a) {
                a.preventDefault();
                var c = i(ga(a.target)), k = ca((c.data("pos-x") ||
                                                 0) + a.pageX - s),
                    a = ca((c.data("pos-y") || 0) + a.pageY - q);
                f.call(b, j, n, m, l, k, a)
            }

            function e(a) {
                a.preventDefault()
            }

            function g(a) {
                a.preventDefault();
                i(k).unbind("mousemove", d).unbind("mouseup", g)
                    .unbind("selectstart", e);
                h.releaseCapture && h.releaseCapture()
            }

            a.stopPropagation();
            var h = b.get(), j = o(c.css("left")), n = o(c.css("top")),
                m = c.width(), l = c.height(), s = a.pageX, q = a.pageY;
            u && u();
            i(k).mousemove(d).mouseup(g).bind("selectstart", e);
            h.setCapture && h.setCapture()
        })
    }

    function da(a) {
        this.init(a)
    }

    function Wa(a) {
        return new da(a)
    }

    function Va(a) {
        a = i(a)[0];
        return a.contentDocument || a.contentWindow.document
    }

    function Ob(a, c, f, b) {
        var d = [Xa === "" ? "<html>" : '<html dir="' + Xa + '">',
                 '<head><meta charset="utf-8" /><title></title>', "<style>",
                 "html {margin:0;padding:0;}", "body {margin:0;padding:5px;}",
                 'body, td {font:12px/1.5 "sans serif",tahoma,verdana,helvetica;}',
                 "body, p, div {word-wrap: break-word;}", "p {margin:5px 0;}",
                 "table {border-collapse:collapse;}", "img {border:0;}",
                 "noscript {display:none;}",
                 "table.ke-zeroborder td {border:1px dotted #AAA;}",
                 "img.ke-flash {", "\tborder:1px solid #AAA;",
                 "\tbackground-image:url(" + a + "common/flash.gif);",
                 "\tbackground-position:center center;",
                 "\tbackground-repeat:no-repeat;", "\twidth:100px;",
                 "\theight:100px;", "}", "img.ke-rm {",
                 "\tborder:1px solid #AAA;",
                 "\tbackground-image:url(" + a + "common/rm.gif);",
                 "\tbackground-position:center center;",
                 "\tbackground-repeat:no-repeat;", "\twidth:100px;",
                 "\theight:100px;", "}", "img.ke-media {",
                 "\tborder:1px solid #AAA;",
                 "\tbackground-image:url(" + a + "common/media.gif);",
                 "\tbackground-position:center center;",
                 "\tbackground-repeat:no-repeat;", "\twidth:100px;",
                 "\theight:100px;", "}", "img.ke-anchor {",
                 "\tborder:1px dashed #666;", "\twidth:16px;", "\theight:16px;",
                 "}", ".ke-script, .ke-noscript, .ke-display-none {",
                 "\tdisplay:none;", "\tfont-size:0;", "\twidth:0;",
                 "\theight:0;", "}", ".ke-pagebreak {",
                 "\tborder:1px dotted #AAA;", "\tfont-size:0;", "\theight:2px;",
                 "}", "</style>"];
        g(f) || (f = [f]);
        h(f, function (a, c) {
            c && d.push('<link href="' + c + '" rel="stylesheet" />')
        });
        b && d.push("<style>" + b + "</style>");
        d.push("</head><body " +
               (c ? 'class="' + c + '"' : "") + "></body></html>");
        return d.join("\n")
    }

    function va(a, c) {
        if (a.hasVal()) {
            if (c === d) {
                var f = a.val();
                return f = f.replace(/(<(?:p|p\s[^>]*)>) *(<\/p>)/ig, "")
            }
            return a.val(c)
        }
        return a.html(c)
    }

    function wa(a) {
        this.init(a)
    }

    function sb(a) {
        return new wa(a)
    }

    function tb(a, c) {
        var f = this.get(a);
        f && !f.hasClass("ke-disabled") && c(f)
    }

    function Ea(a) {
        this.init(a)
    }

    function ub(a) {
        return new Ea(a)
    }

    function xa(a) {
        this.init(a)
    }

    function Ya(a) {
        return new xa(a)
    }

    function ya(a) {
        this.init(a)
    }

    function vb(a) {
        return new ya(a)
    }

    function Za(a) {
        this.init(a)
    }

    function za(a) {
        this.init(a)
    }

    function wb(a) {
        return new za(a)
    }

    function $a(a, c) {
        var f = document.getElementsByTagName("head")[0] || (aa ? document.body
            : document.documentElement), b = document.createElement("script");
        f.appendChild(b);
        b.src = a;
        b.charset = "utf-8";
        b.onload = b.onreadystatechange = function () {
            if (!this.readyState || this.readyState === "loaded") {
                c
                && c(), b.onload =
                    b.onreadystatechange = null, f.removeChild(b)
            }
        }
    }

    function xb(a) {
        var c = a.indexOf("?");
        return c > 0 ? a.substr(0, c) : a
    }

    function ab(a) {
        for (var c =
            document.getElementsByTagName("head")[0] || (aa ? document.body
            : document.documentElement), f = document.createElement("link"),
                 b = xb(M(a, "absolute")), d = i('link[rel="stylesheet"]', c),
                 k = 0, e = d.length; k < e; k++) {
            if (xb(
                    M(d[k].href, "absolute")) === b) {
                return;
            }
        }
        c.appendChild(f);
        f.href = a;
        f.rel = "stylesheet"
    }

    function yb(a, c) {
        if (a === d) {
            return ia;
        }
        if (!c) {
            return ia[a];
        }
        ia[a] = c
    }

    function zb(a) {
        var c, f = "core";
        if (c = /^(\w+)\.(\w+)$/.exec(a)) {
            f = c[1], a = c[2];
        }
        return {ns: f, key: a}
    }

    function Ab(a, c) {
        c = c === d ? i.options.langType : c;
        if (typeof a === "string") {
            if (!$[c]) {
                return "no language";
            }
            var f = a.length - 1;
            if (a.substr(f) === ".") {
                return $[c][a.substr(0, f)];
            }
            f = zb(a);
            return $[c][f.ns][f.key]
        }
        h(a, function (a, f) {
            var b = zb(a);
            $[c] || ($[c] = {});
            $[c][b.ns] || ($[c][b.ns] = {});
            $[c][b.ns][b.key] = f
        })
    }

    function Fa(a, c) {
        if (!a.collapsed) {
            var a = a.cloneRange().up(), f = a.startContainer,
                b = a.startOffset;
            if (ja || a.isControl()) {
                if ((f = i(f.childNodes[b])) && f.name
                                                == "img"
                    && c(f)) {
                    return f
                }
            }
        }
    }

    function Pb() {
        var a = this;
        i(a.edit.doc).contextmenu(function (c) {
            a.menu && a.hideMenu();
            if (a.useContextmenu) {
                if (a._contextmenus.length !== 0) {
                    var f =
                        0, b = [];
                    for (h(a._contextmenus, function () {
                        if (this.title == "-") {
                            b.push(this);
                        } else if (this.cond
                                   && this.cond()
                                   && (b.push(
                                this), this.width && this.width > f)) {
                            f =
                                this.width
                        }
                    }); b.length > 0 && b[0].title == "-";) {
                        b.shift();
                    }
                    for (;
                        b.length > 0 && b[b.length - 1].title == "-";) {
                        b.pop();
                    }
                    var d = null;
                    h(b, function (a) {
                        this.title == "-" && d.title == "-" && delete b[a];
                        d = this
                    });
                    if (b.length > 0) {
                        c.preventDefault();
                        var k = i(a.edit.iframe).pos(), e = Ya({
                                                                   x: k.x
                                                                      + c.clientX,
                                                                   y: k.y
                                                                      + c.clientY,
                                                                   width: f,
                                                                   css: {visibility: "hidden"},
                                                                   shadowMode: a.shadowMode
                                                               });
                        h(b, function () {
                            this.title &&
                            e.addItem(this)
                        });
                        var k = X(e.doc), g = e.div.height();
                        c.clientY + g >= k.clientHeight - 100 && e.pos(e.x, o(
                            e.y) - g);
                        e.div.css("visibility", "visible");
                        a.menu = e
                    }
                }
            } else {
                c.preventDefault()
            }
        })
    }

    function Qb() {
        function a(a) {
            for (a = i(a.commonAncestor()); a;) {
                if (a.type == 1 && !a.isStyle()) {
                    break;
                }
                a = a.parent()
            }
            return a.name
        }

        var c = this, f = c.edit.doc, b = c.newlineTag;
        if (!(C && b !== "br") && (!pa || !(O < 3 && b !== "p")) && !(Na && O
            < 9)) {
            var d = z("h1,h2,h3,h4,h5,h6,pre,li"),
                k = z("p,h1,h2,h3,h4,h5,h6,pre,li,blockquote");
            i(f).keydown(function (i) {
                if (!(i.which !=
                      13 || i.shiftKey || i.ctrlKey || i.altKey)) {
                    c.cmd.selection();
                    var e = a(c.cmd.range);
                    e == "marquee" || e == "select" || (b === "br" && !d[e]
                        ? (i.preventDefault(), c.insertHtml("<br />" + (C && O
                                                                             < 9
                            ? "" : "\u200b"))) : k[e] || ba(f, "formatblock",
                                                            "<p>"))
                }
            });
            i(f).keyup(function (d) {
                if (!(d.which != 13 || d.shiftKey || d.ctrlKey || d.altKey) && b
                                                                               != "br") {
                    if (pa) {
                        var d = c.cmd.commonAncestor("p"),
                            u = c.cmd.commonAncestor("a");
                        u && u.text() == "" && (u.remove(
                            !0), c.cmd.range.selectNodeContents(d[0])
                            .collapse(!0), c.cmd.select())
                    } else if (c.cmd.selection(), d = a(c.cmd.range),
                            !(d == "marquee" || d == "select")) {
                        if (k[d] || ba(f,
                                       "formatblock",
                                       "<p>"), d =
                                c.cmd.commonAncestor("div")) {
                            for (var u = i("<p></p>"), e = d[0].firstChild;
                                 e;) {
                                var g = e.nextSibling;
                                u.append(e);
                                e = g
                            }
                            d.before(u);
                            d.remove();
                            c.cmd.range.selectNodeContents(u[0]);
                            c.cmd.select()
                        }
                    }
                }
            })
        }
    }

    function Rb() {
        var a = this, c = a.edit.doc;
        i(c).keydown(function (f) {
            if (f.which
                == 9) {
                if (f.preventDefault(), a.afterTab) {
                    a.afterTab.call(a,
                                    f);
                } else {
                    var f = a.cmd, b = f.range;
                    b.shrink();
                    b.collapsed && b.startContainer.nodeType == 1
                    && (b.insertNode(
                        i("@&nbsp;", c)[0]), f.select());
                    a.insertHtml("&nbsp;&nbsp;&nbsp;&nbsp;")
                }
            }
        })
    }

    function Sb() {
        var a = this;
        i(a.edit.textarea[0], a.edit.win).focus(function (c) {
            a.afterFocus && a.afterFocus.call(a, c)
        }).blur(function (c) {
            a.afterBlur && a.afterBlur.call(a, c)
        })
    }

    function ka(a) {
        return m(a.replace(
            /<span [^>]*id="?__kindeditor_bookmark_\w+_\d+__"?[^>]*><\/span>/ig,
            ""))
    }

    function bb(a) {
        return a.replace(
            /<div[^>]+class="?__kindeditor_paste__"?[^>]*>[\s\S]*?<\/div>/ig,
            "")
    }

    function Bb(a, c) {
        if (a.length === 0) {
            a.push(c);
        } else {
            var f = a[a.length - 1];
            ka(c.html) !==
            ka(f.html) && a.push(c)
        }
    }

    function Cb(a, c) {
        var f = this.edit, b = f.doc.body, d, k;
        if (a.length === 0) {
            return this;
        }
        f.designMode ? (d = this.cmd.range, k = d.createBookmark(!0), k.html =
            b.innerHTML) : k = {html: b.innerHTML};
        Bb(c, k);
        var e = a.pop();
        ka(k.html) === ka(e.html) && a.length > 0 && (e = a.pop());
        f.designMode ? (f.html(e.html), e.start && (d.moveToBookmark(
            e), this.select())) : i(b).html(ka(e.html));
        return this
    }

    function Aa(a) {
        function c(a, c) {
            Aa.prototype[a] === d && (f[a] = c);
            f.options[a] = c
        }

        var f = this;
        f.options = {};
        h(a, function (f) {
            c(f, a[f])
        });
        h(i.options, function (a, b) {
            f[a] === d && c(a, b)
        });
        var b = i(f.srcElement || "<textarea/>");
        if (!f.width) {
            f.width = b[0].style.width || b.width();
        }
        if (!f.height) {
            f.height = b[0].style.height || b.height();
        }
        c("width", r(f.width, f.minWidth));
        c("height", r(f.height, f.minHeight));
        c("width", j(f.width));
        c("height", j(f.height));
        if (Tb && (!Ub || O < 534)) {
            f.designMode = !1;
        }
        f.srcElement = b;
        f.initContent = "";
        f.plugin = {};
        f.isCreated = !1;
        f.isLoading = !1;
        f._handlers = {};
        f._contextmenus = [];
        f._undoStack = [];
        f._redoStack = [];
        f._calledPlugins = {};
        f._firstAddBookmark =
            !0;
        f.menu = f.contextmenu = null;
        f.dialogs = []
    }

    function Db(a, c) {
        function f(a) {
            h(ia, function (c, f) {
                f.call(a, KindEditor)
            });
            return a.create()
        }

        c = c || {};
        c.basePath = r(c.basePath, i.basePath);
        c.themesPath = r(c.themesPath, c.basePath + "themes/");
        c.langPath = r(c.langPath, c.basePath + "lang/");
        c.pluginsPath = r(c.pluginsPath, c.basePath + "plugins/");
        if (r(c.loadStyleMode, i.options.loadStyleMode)) {
            var b = r(c.themeType, i.options.themeType);
            ab(c.themesPath + "default/default.css");
            ab(c.themesPath + b + "/" + b + ".css")
        }
        if ((b = i(a)) && b.length !==
                          0) {
            if (b.length > 1) {
                return b.each(function () {
                    Db(this, c)
                }), _instances[0];
            }
            c.srcElement = b[0];
            var d = new Aa(c);
            _instances.push(d);
            if ($[d.langType]) {
                return f(d);
            }
            $a(d.langPath + d.langType + ".js?ver=" + encodeURIComponent(
                i.DEBUG ? Ga : Ha), function () {
                f(d)
            });
            return d
        }
    }

    function Eb(a, c) {
        i(a).each(function (a, b) {
            i.each(_instances, function (a, f) {
                if (f && f.srcElement[0] == b) {
                    return c.call(f, a, f), !1
                }
            })
        })
    }

    if (!b.KindEditor) {
        if (!b.console) {
            b.console = {};
        }
        if (!console.log) {
            console.log = function () {
            };
        }
        var Ha = "4.1.7 (2013-04-21)", I = navigator.userAgent.toLowerCase(),
            C = I.indexOf("msie") > -1 && I.indexOf("opera") == -1,
            pa = I.indexOf("gecko") > -1 && I.indexOf("khtml") == -1,
            ja = I.indexOf("applewebkit") > -1, Na = I.indexOf("opera") > -1,
            Tb = I.indexOf("mobile") > -1, Ub = /ipad|iphone|ipod/.test(I),
            aa = document.compatMode != "CSS1Compat",
            O = (I = /(?:msie|firefox|webkit|opera)[\/:\s](\d+)/.exec(I)) ? I[1]
                : "0", Ga = (new Date).getTime(), ca = Math.round, i = {
                DEBUG: !1,
                VERSION: Ha,
                IE: C,
                GECKO: pa,
                WEBKIT: ja,
                OPERA: Na,
                V: O,
                TIME: Ga,
                each: h,
                isArray: g,
                isFunction: l,
                inArray: e,
                inString: n,
                trim: m,
                addUnit: j,
                removeUnit: o,
                escape: s,
                unescape: t,
                toCamel: p,
                toHex: q,
                toMap: z,
                toArray: D,
                undef: r,
                invalidUrl: function (a) {
                    return !a || /[<>"]/.test(a)
                },
                addParam: function (a, c) {
                    return a.indexOf("?") >= 0 ? a + "&" + c : a + "?" + c
                },
                extend: A,
                json: w
            }, gb = z(
            "a,abbr,acronym,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,img,input,ins,kbd,label,map,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
            hb = z(
                "address,applet,blockquote,body,center,dd,dir,div,dl,dt,fieldset,form,frameset,h1,h2,h3,h4,h5,h6,head,hr,html,iframe,ins,isindex,li,map,menu,meta,noframes,noscript,object,ol,p,pre,script,style,table,tbody,td,tfoot,th,thead,title,tr,ul"),
            fb = z(
                "area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),
            Fb = z(
                "b,basefont,big,del,em,font,i,s,small,span,strike,strong,sub,sup,u"),
            Vb = z("img,table,input,textarea,button"),
            Ja = z("pre,style,script"),
            Ia = z("html,head,body,td,tr,table,ol,ul,li");
        z("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
        var Jb = z(
            "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),
            Gb = z("input,button,textarea,select");
        i.basePath = function () {
            for (var a =
                document.getElementsByTagName("script"), c, f = 0, b = a.length;
                 f < b; f++) {
                if (c =
                        a[f].src || "", /kindeditor[\w\-\.]*\.js/.test(
                        c)) {
                    return c.substring(0, c.lastIndexOf("/") + 1);
                }
            }
            return ""
        }();
        i.options = {
            designMode: !0,
            fullscreenMode: !1,
            filterMode: !0,
            wellFormatMode: !0,
            shadowMode: !0,
            loadStyleMode: !0,
            basePath: i.basePath,
            themesPath: i.basePath + "themes/",
            langPath: i.basePath + "lang/",
            pluginsPath: i.basePath + "plugins/",
            themeType: "default",
            langType: "zh_CN",
            urlType: "",
            newlineTag: "p",
            resizeType: 2,
            syncType: "form",
            pasteType: 2,
            dialogAlignType: "page",
            useContextmenu: !0,
            fullscreenShortcut: !1,
            bodyClass: "ke-content",
            indentChar: "\t",
            cssPath: "",
            cssData: "",
            minWidth: 650,
            minHeight: 100,
            minChangeSize: 50,
            zIndex: 811213,
            items: ["source", "|", "undo", "redo", "|", "preview", "print",
                    "template", "code", "cut", "copy", "paste", "plainpaste",
                    "wordpaste", "|", "justifyleft", "justifycenter",
                    "justifyright", "justifyfull", "insertorderedlist",
                    "insertunorderedlist", "indent", "outdent", "subscript",
                    "superscript", "clearhtml", "quickformat", "selectall", "|",
                    "fullscreen", "/", "formatblock",
                    "fontname", "fontsize", "|", "forecolor", "hilitecolor",
                    "bold", "italic", "underline", "strikethrough",
                    "lineheight", "removeformat", "|", "image", "multiimage",
                    "flash", "media", "insertfile", "table", "hr", "emoticons",
                    "baidumap", "pagebreak", "anchor", "link", "unlink", "|",
                    "about"],
            noDisableItems: ["source", "fullscreen"],
            colorTable: [["#E53333", "#E56600", "#FF9900", "#64451D", "#DFC5A4",
                          "#FFE500"],
                ["#009900", "#006600", "#99BB00", "#B8D100", "#60D978",
                 "#00D5FF"],
                ["#337FE5", "#003399", "#4C33E5", "#9933E5", "#CC33E5",
                 "#EE33EE"],
                ["#FFFFFF", "#CCCCCC", "#999999", "#666666", "#333333",
                 "#000000"]],
            fontSizeTable: ["9px", "10px", "12px", "14px", "16px", "18px",
                            "24px", "32px"],
            htmlTags: {
                font: ["id", "class", "color", "size", "face",
                       ".background-color"],
                span: ["id", "class", ".color", ".background-color",
                       ".font-size", ".font-family", ".background",
                       ".font-weight", ".font-style", ".text-decoration",
                       ".vertical-align", ".line-height"],
                div: ["id", "class", "align", ".border", ".margin", ".padding",
                      ".text-align", ".color", ".background-color",
                      ".font-size", ".font-family",
                      ".font-weight", ".background", ".font-style",
                      ".text-decoration", ".vertical-align", ".margin-left"],
                table: ["id", "class", "border", "cellspacing", "cellpadding",
                        "width", "height", "align", "bordercolor", ".padding",
                        ".margin", ".border", "bgcolor", ".text-align",
                        ".color", ".background-color", ".font-size",
                        ".font-family", ".font-weight", ".font-style",
                        ".text-decoration", ".background", ".width", ".height",
                        ".border-collapse"],
                "td,th": ["id", "class", "align", "valign", "width", "height",
                          "colspan", "rowspan", "bgcolor", ".text-align",
                          ".color", ".background-color", ".font-size",
                          ".font-family", ".font-weight", ".font-style",
                          ".text-decoration", ".vertical-align", ".background",
                          ".border"],
                a: ["id", "class", "href", "target", "name"],
                embed: ["id", "class", "src", "width", "height", "type", "loop",
                        "autostart", "quality", ".width", ".height", "align",
                        "allowscriptaccess"],
                img: ["id", "class", "src", "width", "height", "border", "alt",
                      "title", "align", ".width", ".height", ".border"],
                "p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6": ["id", "class",
                                                            "align",
                                                            ".text-align",
                                                            ".color",
                                                            ".background-color",
                                                            ".font-size",
                                                            ".font-family",
                                                            ".background",
                                                            ".font-weight",
                                                            ".font-style",
                                                            ".text-decoration",
                                                            ".vertical-align",
                                                            ".text-indent",
                                                            ".margin-left"],
                pre: ["id", "class"],
                hr: ["id", "class", ".page-break-after"],
                "br,tbody,tr,strong,b,sub,sup,em,i,u,strike,s,del": ["id",
                                                                     "class"],
                iframe: ["id", "class", "src", "frameborder", "width", "height",
                         ".width", ".height"]
            },
            layout: '<div class="container"><div class="toolbar"></div><div class="edit"></div><div class="statusbar"></div></div>'
        };
        var db = !1, Hb = z(
            "8,9,13,32,46,48..57,59,61,65..90,106,109..111,188,190..192,219..222"),
            I = z("33..40"), cb = {};
        h(Hb, function (a, c) {
            cb[a] = c
        });
        h(I, function (a, c) {
            cb[a] = c
        });
        var Wb = "altKey,attrChange,attrName,bubbles,button,cancelable,charCode,clientX,clientY,ctrlKey,currentTarget,data,detail,eventPhase,fromElement,handler,keyCode,metaKey,newValue,offsetX,offsetY,originalTarget,pageX,pageY,prevValue,relatedNode,relatedTarget,screenX,screenY,shiftKey,srcElement,target,toElement,view,wheelDelta,which".split(
            ",");
        A(E, {
            init: function (a, c) {
                var f = this, b = a.ownerDocument || a.document || a;
                f.event = c;
                h(Wb,
                  function (a, b) {
                      f[b] = c[b]
                  });
                if (!f.target) {
                    f.target = f.srcElement || b;
                }
                if (f.target.nodeType === 3) {
                    f.target = f.target.parentNode;
                }
                if (!f.relatedTarget && f.fromElement) {
                    f.relatedTarget =
                        f.fromElement === f.target ? f.toElement
                            : f.fromElement;
                }
                if (f.pageX == null && f.clientX != null) {
                    var i = b.documentElement, b = b.body;
                    f.pageX =
                        f.clientX + (i && i.scrollLeft || b && b.scrollLeft
                                     || 0) - (i && i.clientLeft || b
                                              && b.clientLeft || 0);
                    f.pageY =
                        f.clientY + (i && i.scrollTop || b && b.scrollTop || 0)
                        - (i && i.clientTop || b && b.clientTop || 0)
                }
                if (!f.which && (f.charCode || f.charCode ===
                                               0 ? f.charCode
                        : f.keyCode)) {
                    f.which = f.charCode || f.keyCode;
                }
                if (!f.metaKey && f.ctrlKey) {
                    f.metaKey = f.ctrlKey;
                }
                if (!f.which && f.button !== d) {
                    f.which =
                        f.button & 1 ? 1 : f.button & 2 ? 3 : f.button & 4 ? 2
                            : 0;
                }
                switch (f.which) {
                    case 186:
                        f.which = 59;
                        break;
                    case 187:
                    case 107:
                    case 43:
                        f.which = 61;
                        break;
                    case 189:
                    case 45:
                        f.which = 109;
                        break;
                    case 42:
                        f.which = 106;
                        break;
                    case 47:
                        f.which = 111;
                        break;
                    case 78:
                        f.which = 110
                }
                f.which >= 96 && f.which <= 105 && (f.which -= 48)
            }, preventDefault: function () {
                var a = this.event;
                a.preventDefault && a.preventDefault();
                a.returnValue =
                    !1
            }, stopPropagation: function () {
                var a = this.event;
                a.stopPropagation && a.stopPropagation();
                a.cancelBubble = !0
            }, stop: function () {
                this.preventDefault();
                this.stopPropagation()
            }
        });
        var la = "kindeditor_" + Ga, eb = 0, L = {};
        C && b.attachEvent("onunload", function () {
            h(L, function (a, c) {
                c.el && N(c.el)
            })
        });
        i.ctrl = V;
        i.ready = function (a) {
            function c() {
                i || (i = !0, a(KindEditor))
            }

            function f() {
                if (!i) {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(f, 100);
                        return
                    }
                    c()
                }
            }

            function d() {
                document.readyState === "complete" && c()
            }

            var i = !1;
            if (document.addEventListener) {
                F(document, "DOMContentLoaded",
                  c);
            } else if (document.attachEvent) {
                F(document, "readystatechange", d);
                var k = !1;
                try {
                    k = b.frameElement == null
                } catch (e) {
                }
                document.documentElement.doScroll && k && f()
            }
            F(b, "load", c)
        };
        i.formatUrl = M;
        i.formatHtml = J;
        i.getCssList = Q;
        i.getAttrList = G;
        i.mediaType = T;
        i.mediaAttrs = fa;
        i.mediaEmbed = Ka;
        i.mediaImg = ib;
        i.clearMsWord = W;
        i.tmpl = function (a, c) {
            var f = new Function(
                "obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"
                       + a.replace(/[\r\t\n]/g,
                                   " ").split("<%").join("\t")
                           .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                           .replace(/\t=(.*?)%>/g, "',$1,'").split("\t")
                           .join("');").split("%>").join("p.push('").split("\r")
                           .join("\\'") + "');}return p.join('');");
            return c ? f(c) : f
        };
        I = document.createElement("div");
        I.setAttribute("className", "t");
        var Kb = I.className !== "t";
        i.query = function (a, c) {
            var f = Da(a, c);
            return f.length > 0 ? f[0] : null
        };
        i.queryAll = Da;
        A(R, {
            init: function (a) {
                for (var a = g(a) ? a : [a], c = 0, f = 0, b = a.length; f < b;
                     f++) {
                    a[f] && (this[f] =
                        a[f].constructor === R ? a[f][0] : a[f],
                        c++);
                }
                this.length = c;
                this.doc = ga(this[0]);
                this.name = Ma(this[0]);
                this.type = this.length > 0 ? this[0].nodeType : null;
                this.win = ha(this[0])
            }, each: function (a) {
                for (var c = 0; c < this.length; c++) {
                    if (a.call(this[c], c,
                               this[c])
                        === !1) {
                        break;
                    }
                }
                return this
            }, bind: function (a, c) {
                this.each(function () {
                    F(this, a, c)
                });
                return this
            }, unbind: function (a, c) {
                this.each(function () {
                    N(this, a, c)
                });
                return this
            }, fire: function (a) {
                if (this.length < 1) {
                    return this;
                }
                ea(this[0], a);
                return this
            }, hasAttr: function (a) {
                if (this.length < 1) {
                    return !1;
                }
                return !!Ca(this[0],
                            a)
            }, attr: function (a, c) {
                var f = this;
                if (a === d) {
                    return G(f.outer());
                }
                if (typeof a === "object") {
                    return h(a, function (a, c) {
                        f.attr(a, c)
                    }), f;
                }
                if (c === d) {
                    return c = f.length < 1 ? null : Ca(f[0], a), c
                                                                  === null
                        ? "" : c;
                }
                f.each(function () {
                    La(this, a, c)
                });
                return f
            }, removeAttr: function (a) {
                this.each(function () {
                    var c = a;
                    C && O < 8 && c.toLowerCase() == "class" && (c =
                        "className");
                    La(this, c, "");
                    this.removeAttribute(c)
                });
                return this
            }, get: function (a) {
                if (this.length < 1) {
                    return null;
                }
                return this[a || 0]
            }, eq: function (a) {
                if (this.length < 1) {
                    return null;
                }
                return this[a] ? new R(this[a]) : null
            }, hasClass: function (a) {
                if (this.length < 1) {
                    return !1;
                }
                return n(a, this[0].className, " ")
            }, addClass: function (a) {
                this.each(function () {
                    if (!n(a, this.className, " ")) {
                        this.className =
                            m(this.className + " " + a)
                    }
                });
                return this
            }, removeClass: function (a) {
                this.each(function () {
                    if (n(a, this.className, " ")) {
                        this.className =
                            m(this.className.replace(
                                RegExp("(^|\\s)" + a + "(\\s|$)"), " "))
                    }
                });
                return this
            }, html: function (a) {
                if (a === d) {
                    if (this.length < 1 || this.type != 1) {
                        return "";
                    }
                    return J(this[0].innerHTML)
                }
                this.each(function () {
                    Lb(this,
                       a)
                });
                return this
            }, text: function () {
                if (this.length < 1) {
                    return "";
                }
                return C ? this[0].innerText : this[0].textContent
            }, hasVal: function () {
                if (this.length < 1) {
                    return !1;
                }
                return !!Gb[Ma(this[0])]
            }, val: function (a) {
                if (a === d) {
                    if (this.length < 1) {
                        return "";
                    }
                    return this.hasVal() ? this[0].value : this.attr("value")
                } else {
                    return this.each(function () {
                        Gb[Ma(this)] ? this.value = a : La(this, "value", a)
                    }), this
                }
            }, css: function (a, c) {
                var f = this;
                if (a === d) {
                    return Q(f.attr("style"));
                }
                if (typeof a === "object") {
                    return h(a, function (a, c) {
                        f.css(a, c)
                    }), f;
                }
                if (c ===
                    d) {
                    if (f.length < 1) {
                        return "";
                    }
                    return f[0].style[p(a)] || Mb(f[0], a) || ""
                }
                f.each(function () {
                    this.style[p(a)] = c
                });
                return f
            }, width: function (a) {
                if (a === d) {
                    if (this.length < 1) {
                        return 0;
                    }
                    return this[0].offsetWidth
                }
                return this.css("width", j(a))
            }, height: function (a) {
                if (a === d) {
                    if (this.length < 1) {
                        return 0;
                    }
                    return this[0].offsetHeight
                }
                return this.css("height", j(a))
            }, opacity: function (a) {
                this.each(function () {
                    this.style.opacity === d ? this.style.filter =
                                                 a == 1 ? "" : "alpha(opacity=" + a * 100 + ")"
                        : this.style.opacity = a == 1 ? "" : a
                });
                return this
            },
            data: function (a, c) {
                a = "kindeditor_data_" + a;
                if (c === d) {
                    if (this.length < 1) {
                        return null;
                    }
                    return this[0][a]
                }
                this.each(function () {
                    this[a] = c
                });
                return this
            }, pos: function () {
                var a = this[0], c = 0, f = 0;
                if (a) {
                    if (a.getBoundingClientRect) {
                        a =
                            a.getBoundingClientRect(), f = ma(this.doc), c =
                            a.left + f.x, f = a.top + f.y;
                    } else {
                        for (; a;) {
                            c +=
                                a.offsetLeft, f += a.offsetTop, a =
                                a.offsetParent;
                        }
                    }
                }
                return {x: ca(c), y: ca(f)}
            }, clone: function (a) {
                if (this.length < 1) {
                    return new R([]);
                }
                return new R(this[0].cloneNode(a))
            }, append: function (a) {
                this.each(function () {
                    this.appendChild &&
                    this.appendChild(i(a)[0])
                });
                return this
            }, appendTo: function (a) {
                this.each(function () {
                    i(a)[0].appendChild(this)
                });
                return this
            }, before: function (a) {
                this.each(function () {
                    this.parentNode.insertBefore(i(a)[0], this)
                });
                return this
            }, after: function (a) {
                this.each(function () {
                    this.nextSibling ? this.parentNode.insertBefore(i(a)[0],
                                                                    this.nextSibling)
                        : this.parentNode.appendChild(i(a)[0])
                });
                return this
            }, replaceWith: function (a) {
                var c = [];
                this.each(function (f, b) {
                    N(b);
                    var d = i(a)[0];
                    b.parentNode.replaceChild(d, b);
                    c.push(d)
                });
                return i(c)
            }, empty: function () {
                this.each(function (a, c) {
                    for (var f = c.firstChild; f;) {
                        if (!c.parentNode) {
                            break;
                        }
                        var b = f.nextSibling;
                        f.parentNode.removeChild(f);
                        f = b
                    }
                });
                return this
            }, remove: function (a) {
                var c = this;
                c.each(function (f, b) {
                    if (b.parentNode) {
                        N(b);
                        if (a) {
                            for (var d = b.firstChild; d;) {
                                var i = d.nextSibling;
                                b.parentNode.insertBefore(d, b);
                                d = i
                            }
                        }
                        b.parentNode.removeChild(b);
                        delete c[f]
                    }
                });
                c.length = 0;
                return c
            }, show: function (a) {
                a === d && (a = this._originDisplay || "");
                if (this.css("display") != "none") {
                    return this;
                }
                return this.css("display",
                                a)
            }, hide: function () {
                if (this.length < 1) {
                    return this;
                }
                this._originDisplay = this[0].style.display;
                return this.css("display", "none")
            }, outer: function () {
                if (this.length < 1) {
                    return "";
                }
                var a = this.doc.createElement("div");
                a.appendChild(this[0].cloneNode(!0));
                return J(a.innerHTML)
            }, isSingle: function () {
                return !!fb[this.name]
            }, isInline: function () {
                return !!gb[this.name]
            }, isBlock: function () {
                return !!hb[this.name]
            }, isStyle: function () {
                return !!Fb[this.name]
            }, isControl: function () {
                return !!Vb[this.name]
            }, contains: function (a) {
                if (this.length <
                    1) {
                    return !1;
                }
                return Ba(this[0], i(a)[0])
            }, parent: function () {
                if (this.length < 1) {
                    return null;
                }
                var a = this[0].parentNode;
                return a ? new R(a) : null
            }, children: function () {
                if (this.length < 1) {
                    return new R([]);
                }
                for (var a = [], c = this[0].firstChild; c;) {
                    (c.nodeType != 3
                     || m(c.nodeValue)
                     !== "") && a.push(
                        c), c = c.nextSibling;
                }
                return new R(a)
            }, first: function () {
                var a = this.children();
                return a.length > 0 ? a.eq(0) : null
            }, last: function () {
                var a = this.children();
                return a.length > 0 ? a.eq(a.length - 1) : null
            }, index: function () {
                if (this.length < 1) {
                    return -1;
                }
                for (var a =
                    -1, c = this[0]; c;) {
                    a++, c = c.previousSibling;
                }
                return a
            }, prev: function () {
                if (this.length < 1) {
                    return null;
                }
                var a = this[0].previousSibling;
                return a ? new R(a) : null
            }, next: function () {
                if (this.length < 1) {
                    return null;
                }
                var a = this[0].nextSibling;
                return a ? new R(a) : null
            }, scan: function (a, c) {
                function b(d) {
                    for (d = c ? d.firstChild : d.lastChild; d;) {
                        var i = c ? d.nextSibling : d.previousSibling;
                        if (a(d) === !1) {
                            return !1;
                        }
                        if (b(d) === !1) {
                            return !1;
                        }
                        d = i
                    }
                }

                if (!(this.length < 1)) {
                    return c = c === d ? !0 : c, b(
                        this[0]), this
                }
            }
        });
        h("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error,contextmenu".split(
            ","),
          function (a, c) {
              R.prototype[c] = function (a) {
                  return a ? this.bind(c, a) : this.fire(c)
              }
          });
        I = i;
        i = function (a, c) {
            function b(a) {
                a[0] || (a = []);
                return new R(a)
            }

            if (!(a === d || a === null)) {
                if (typeof a === "string") {
                    c && (c = i(c)[0]);
                    var e = a.length;
                    a.charAt(0) === "@" && (a = a.substr(1));
                    if (a.length !== e || /<.+>/.test(a)) {
                        var e = (c ? c.ownerDocument || c
                            : document).createElement("div"), u = [];
                        e.innerHTML =
                            '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />'
                            + a;
                        for (var k = 0, h = e.childNodes.length; k < h; k++) {
                            var j = e.childNodes[k];
                            j.id != "__kindeditor_temp_tag__" && u.push(j)
                        }
                        return b(u)
                    }
                    return b(Da(a, c))
                }
                if (a && a.constructor === R) {
                    return a;
                }
                a.toArray && (a = a.toArray());
                if (g(a)) {
                    return b(a);
                }
                return b(D(arguments))
            }
        };
        h(I, function (a, c) {
            i[a] = c
        });
        i.NodeClass = R;
        b.KindEditor = i;
        var ra = 0, qa = 1, na = 2, sa = 3, Ib = 0;
        A(Z, {
            init: function (a) {
                this.startContainer = a;
                this.startOffset = 0;
                this.endContainer = a;
                this.endOffset = 0;
                this.collapsed = !0;
                this.doc = a
            }, commonAncestor: function () {
                function a(a) {
                    for (var c = []; a;) {
                        c.push(a), a = a.parentNode;
                    }
                    return c
                }

                for (var c = a(this.startContainer),
                         b = a(this.endContainer), d = 0, i = c.length,
                         k = b.length, e, g; ++d;) {
                    if (e = c[i - d], g =
                            b[k - d], !e || !g || e !== g) {
                        break;
                    }
                }
                return c[i - d + 1]
            }, setStart: function (a, c) {
                var b = this.doc;
                this.startContainer = a;
                this.startOffset = c;
                if (this.endContainer === b) {
                    this.endContainer =
                        a, this.endOffset = c;
                }
                return jb(this)
            }, setEnd: function (a, c) {
                var b = this.doc;
                this.endContainer = a;
                this.endOffset = c;
                if (this.startContainer === b) {
                    this.startContainer =
                        a, this.startOffset = c;
                }
                return jb(this)
            }, setStartBefore: function (a) {
                return this.setStart(a.parentNode || this.doc,
                    i(a).index())
            }, setStartAfter: function (a) {
                return this.setStart(a.parentNode || this.doc, i(a).index() + 1)
            }, setEndBefore: function (a) {
                return this.setEnd(a.parentNode || this.doc, i(a).index())
            }, setEndAfter: function (a) {
                return this.setEnd(a.parentNode || this.doc, i(a).index() + 1)
            }, selectNode: function (a) {
                return this.setStartBefore(a).setEndAfter(a)
            }, selectNodeContents: function (a) {
                var c = i(a);
                if (c.type == 3 || c.isSingle()) {
                    return this.selectNode(a);
                }
                c = c.children();
                if (c.length > 0) {
                    return this.setStartBefore(c[0])
                        .setEndAfter(c[c.length -
                                       1]);
                }
                return this.setStart(a, 0).setEnd(a, 0)
            }, collapse: function (a) {
                if (a) {
                    return this.setEnd(this.startContainer,
                                       this.startOffset);
                }
                return this.setStart(this.endContainer, this.endOffset)
            }, compareBoundaryPoints: function (a, c) {
                var b = this.get(), d = c.get();
                if (C) {
                    var e = {};
                    e[ra] = "StartToStart";
                    e[qa] = "EndToStart";
                    e[na] = "EndToEnd";
                    e[sa] = "StartToEnd";
                    b = b.compareEndPoints(e[a], d);
                    if (b !== 0) {
                        return b;
                    }
                    var k, g, h, j;
                    if (a === ra || a === sa) {
                        k = this.startContainer, h =
                            this.startOffset;
                    }
                    if (a === qa || a === na) {
                        k = this.endContainer, h =
                            this.endOffset;
                    }
                    if (a === ra || a === qa) {
                        g = c.startContainer, j =
                            c.startOffset;
                    }
                    if (a === na || a === sa) {
                        g = c.endContainer, j =
                            c.endOffset;
                    }
                    if (k === g) {
                        return k = h - j, k > 0 ? 1 : k < 0 ? -1 : 0;
                    }
                    for (b = g; b && b.parentNode !== k;) {
                        b = b.parentNode;
                    }
                    if (b) {
                        return i(b).index() >= h ? -1 : 1;
                    }
                    for (b = k; b && b.parentNode !== g;) {
                        b = b.parentNode;
                    }
                    if (b) {
                        return i(b).index() >= j ? 1 : -1;
                    }
                    if ((b = i(g).next()) && b.contains(k)) {
                        return 1;
                    }
                    if ((b = i(k).next()) && b.contains(g)) {
                        return -1
                    }
                } else {
                    return b.compareBoundaryPoints(a, d)
                }
            }, cloneRange: function () {
                return (new Z(this.doc)).setStart(this.startContainer,
                                                  this.startOffset)
                    .setEnd(this.endContainer,
                            this.endOffset)
            }, toString: function () {
                var a = this.get();
                return (C ? a.text : a.toString()).replace(/\r\n|\n|\r/g, "")
            }, cloneContents: function () {
                return Oa(this, !0, !1)
            }, deleteContents: function () {
                return Oa(this, !1, !0)
            }, extractContents: function () {
                return Oa(this, !0, !0)
            }, insertNode: function (a) {
                var c = this.startContainer, b = this.startOffset,
                    d = this.endContainer, i = this.endOffset, k, e, g, h = 1;
                if (a.nodeName.toLowerCase() === "#document-fragment") {
                    k =
                        a.firstChild, e = a.lastChild, h = a.childNodes.length;
                }
                c.nodeType == 1 ? (g = c.childNodes[b]) ? (c.insertBefore(a,
                                                                          g), c
                                                                              === d
                                                                              && (i +=
                    h)) : c.appendChild(a) : c.nodeType == 3 && (b === 0
                    ? (c.parentNode.insertBefore(a, c), c.parentNode === d
                                             && (i += h)) : b
                                                            >= c.nodeValue.length
                                                                     ? c.nextSibling
                                                                ? c.parentNode.insertBefore(
                                a, c.nextSibling) : c.parentNode.appendChild(a)
                                                                     : (g =
                            b > 0 ? c.splitText(b)
                                : c, c.parentNode.insertBefore(a, g), c === d
                                             && (d = g, i -= b)));
                k ? this.setStartBefore(k).setEndAfter(e) : this.selectNode(a);
                if (this.compareBoundaryPoints(na,
                                               this.cloneRange().setEnd(d, i))
                    >= 1) {
                    return this;
                }
                return this.setEnd(d, i)
            }, surroundContents: function (a) {
                a.appendChild(this.extractContents());
                return this.insertNode(a).selectNode(a)
            }, isControl: function () {
                var a = this.startContainer, c = this.startOffset,
                    b = this.endContainer, d = this.endOffset;
                return a.nodeType == 1 && a === b && c + 1 === d && i(
                    a.childNodes[c]).isControl()
            }, get: function (a) {
                var c = this.doc;
                if (!C) {
                    c = c.createRange();
                    try {
                        c.setStart(this.startContainer,
                                   this.startOffset), c.setEnd(
                            this.endContainer, this.endOffset)
                    } catch (b) {
                    }
                    return c
                }
                if (a && this.isControl()) {
                    return c =
                        c.body.createControlRange(), c.addElement(
                        this.startContainer.childNodes[this.startOffset]),
                        c;
                }
                a = this.cloneRange().down();
                c = c.body.createTextRange();
                c.setEndPoint("StartToStart",
                              lb(a.startContainer, a.startOffset));
                c.setEndPoint("EndToStart", lb(a.endContainer, a.endOffset));
                return c
            }, html: function () {
                return i(this.cloneContents()).outer()
            }, down: function () {
                function a(a, b, d) {
                    if (a.nodeType == 1 && (a = i(a).children(), a.length
                                                                 !== 0)) {
                        var k, e, g, h;
                        b > 0 && (k = a.eq(b - 1));
                        b < a.length && (e = a.eq(b));
                        if (k && k.type == 3) {
                            g = k[0], h = g.nodeValue.length;
                        }
                        e && e.type == 3 && (g = e[0], h = 0);
                        g && (d ? c.setStart(g, h) : c.setEnd(g, h))
                    }
                }

                var c =
                    this;
                a(c.startContainer, c.startOffset, !0);
                a(c.endContainer, c.endOffset, !1);
                return c
            }, up: function () {
                function a(a, b, d) {
                    a.nodeType == 3 && (b === 0 ? d ? c.setStartBefore(a)
                        : c.setEndBefore(a) : b == a.nodeValue.length && (d
                        ? c.setStartAfter(a) : c.setEndAfter(a)))
                }

                var c = this;
                a(c.startContainer, c.startOffset, !0);
                a(c.endContainer, c.endOffset, !1);
                return c
            }, enlarge: function (a) {
                function c(c, d, k) {
                    c = i(c);
                    if (!(c.type == 3 || Ia[c.name] || !a && c.isBlock())) {
                        if (d
                            === 0) {
                            for (; !c.prev();) {
                                d = c.parent();
                                if (!d || Ia[d.name] || !a && d.isBlock()) {
                                    break;
                                }
                                c = d
                            }
                            k ? b.setStartBefore(c[0]) : b.setEndBefore(c[0])
                        } else if (d == c.children().length) {
                            for (; !c.next();) {
                                d = c.parent();
                                if (!d || Ia[d.name] || !a && d.isBlock()) {
                                    break;
                                }
                                c = d
                            }
                            k ? b.setStartAfter(c[0]) : b.setEndAfter(c[0])
                        }
                    }
                }

                var b = this;
                b.up();
                c(b.startContainer, b.startOffset, !0);
                c(b.endContainer, b.endOffset, !1);
                return b
            }, shrink: function () {
                for (var a, c = this.collapsed;
                     this.startContainer.nodeType == 1 && (a =
                         this.startContainer.childNodes[this.startOffset])
                     && a.nodeType == 1 && !i(a).isSingle();) {
                    this.setStart(a,
                                  0);
                }
                if (c) {
                    return this.collapse(c);
                }
                for (; this.endContainer.nodeType == 1 && this.endOffset > 0
                       && (a = this.endContainer.childNodes[this.endOffset - 1])
                       && a.nodeType == 1 && !i(a).isSingle();) {
                    this.setEnd(a,
                                a.childNodes.length);
                }
                return this
            }, createBookmark: function (a) {
                var c,
                    b = i('<span style="display:none;"></span>', this.doc)[0];
                b.id = "__kindeditor_bookmark_start_" + Ib++ + "__";
                if (!this.collapsed) {
                    c = b.cloneNode(!0), c.id =
                        "__kindeditor_bookmark_end_" + Ib++ + "__";
                }
                c && this.cloneRange().collapse(!1).insertNode(c)
                    .setEndBefore(c);
                this.insertNode(b).setStartAfter(b);
                return {
                    start: a ? "#" + b.id : b,
                    end: c ? a ? "#" + c.id : c : null
                }
            }, moveToBookmark: function (a) {
                var c = this.doc, b = i(a.start, c),
                    a = a.end ? i(a.end, c) : null;
                if (!b || b.length < 1) {
                    return this;
                }
                this.setStartBefore(b[0]);
                b.remove();
                a && a.length > 0 ? (this.setEndBefore(a[0]), a.remove())
                    : this.collapse(!0);
                return this
            }, dump: function () {
                console.log("--------------------");
                console.log(this.startContainer.nodeType == 3
                                ? this.startContainer.nodeValue
                                : this.startContainer, this.startOffset);
                console.log(this.endContainer.nodeType == 3
                                ? this.endContainer.nodeValue
                                : this.endContainer, this.endOffset)
            }
        });
        i.RangeClass = Z;
        i.range = Pa;
        i.START_TO_START = ra;
        i.START_TO_END = qa;
        i.END_TO_END = na;
        i.END_TO_START = sa;
        A(ua, {
            init: function (a) {
                var c = a.doc;
                this.doc = c;
                this.win = ha(c);
                this.sel = Qa(c);
                this.range = a
            }, selection: function (a) {
                var c = this.doc, b;
                b = Qa(c);
                var d;
                try {
                    d = b.rangeCount > 0 ? b.getRangeAt(0) : b.createRange()
                } catch (e) {
                }
                b =
                    C && (!d || !d.item && d.parentElement().ownerDocument
                          !== c) ? null : d;
                this.sel = Qa(c);
                if (b) {
                    return this.range = Pa(b), i(
                        this.range.startContainer).name == "html"
                                               && this.range.selectNodeContents(
                        c.body).collapse(!1),
                        this;
                }
                a && this.range.selectNodeContents(c.body).collapse(!1);
                return this
            }, select: function (a) {
                var a = r(a, !0), c = this.sel,
                    b = this.range.cloneRange().shrink(), d = b.startContainer,
                    e = b.startOffset, k = ga(d), g = this.win, h, j = !1;
                if (a && d.nodeType == 1 && b.collapsed) {
                    if (C) {
                        c = i("<span>&nbsp;</span>", k);
                        b.insertNode(c[0]);
                        h = k.body.createTextRange();
                        try {
                            h.moveToElementText(c[0])
                        } catch (n) {
                        }
                        h.collapse(!1);
                        h.select();
                        c.remove();
                        g.focus();
                        return this
                    }
                    if (ja && (a = d.childNodes, i(d).isInline() || e > 0 && i(
                            a[e - 1]).isInline() || a[e] && i(a[e])
                            .isInline())) {
                        b.insertNode(
                            k.createTextNode("\u200b")),
                            j = !0
                    }
                }
                if (C) {
                    try {
                        h = b.get(!0), h.select()
                    } catch (o) {
                    }
                } else {
                    j && b.collapse(!1), h =
                        b.get(!0), c.removeAllRanges(), c.addRange(h), k
                                                                       !== document
                                                                       && (b =
                        i(h.endContainer).pos(), g.scrollTo(b.x, b.y));
                }
                g.focus();
                return this
            }, wrap: function (a) {
                var c = this.range, b;
                b = i(a, this.doc);
                if (c.collapsed) {
                    return c.shrink(), c.insertNode(b[0])
                        .selectNodeContents(b[0]), this;
                }
                if (b.isBlock()) {
                    for (var d = a = b.clone(!0); d.first();) {
                        d = d.first();
                    }
                    d.append(c.extractContents());
                    c.insertNode(a[0]).selectNode(a[0]);
                    return this
                }
                c.enlarge();
                var e = c.createBookmark(),
                    a = c.commonAncestor(), k = !1;
                i(a).scan(function (a) {
                    if (!k && a == e.start) {
                        k = !0;
                    } else if (k) {
                        if (a == e.end) {
                            return !1;
                        }
                        var c = i(a), d;
                        a:{
                            for (d = c; d && d.name != "body";) {
                                if (Ja[d.name] || d.name == "div" && d.hasClass(
                                        "ke-script")) {
                                    d = !0;
                                    break a
                                }
                                d = d.parent()
                            }
                            d = !1
                        }
                        if (!d && c.type == 3 && m(a.nodeValue).length > 0) {
                            for (var g; (g = c.parent()) && g.isStyle()
                                        && g.children().length == 1;) {
                                c = g;
                            }
                            g = b;
                            g = g.clone(!0);
                            if (c.type == 3) {
                                Ta(g)
                                    .append(c.clone(!1)), c.replaceWith(g);
                            } else {
                                for (var a = c, h;
                                     (h = c.first()) && h.children().length
                                                        == 1;) {
                                    c = h;
                                }
                                h = c.first();
                                for (c = c.doc.createDocumentFragment();
                                     h;) {
                                    c.appendChild(h[0]),
                                        h = h.next();
                                }
                                h = a.clone(!0);
                                d = Ta(h);
                                for (var j = h, n = !1; g;) {
                                    for (; j;) {
                                        j.name === g.name && (Nb(j,
                                                                 g.attr(),
                                                                 g.css()), n =
                                            !0), j = j.first();
                                    }
                                    n || d.append(g.clone(!1));
                                    n = !1;
                                    g = g.first()
                                }
                                g = h;
                                c.firstChild && Ta(g).append(c);
                                a.replaceWith(g)
                            }
                        }
                    }
                });
                c.moveToBookmark(e);
                return this
            }, split: function (a, c) {
                for (var b = this.range, d = b.doc,
                         e = b.cloneRange().collapse(a), k = e.startContainer,
                         g = e.startOffset,
                         h = k.nodeType == 3 ? k.parentNode : k, j = !1, n;
                     h && h.parentNode;) {
                    n = i(h);
                    if (c) {
                        if (!n.isStyle()) {
                            break;
                        }
                        if (!Ra(n, c)) {
                            break
                        }
                    } else if (Ia[n.name]) {
                        break;
                    }
                    j =
                        !0;
                    h = h.parentNode
                }
                if (j) {
                    d = d.createElement("span"), b.cloneRange().collapse(!a)
                        .insertNode(d), a ? e.setStartBefore(h.firstChild)
                        .setEnd(k, g) : e.setStart(k, g)
                                            .setEndAfter(h.lastChild), k =
                        e.extractContents(), g = k.firstChild, j =
                        k.lastChild, a
                        ? (e.insertNode(k), b.setStartAfter(j).setEndBefore(d))
                        : (h.appendChild(k), b.setStartBefore(d)
                            .setEndBefore(g)), e = d.parentNode, e
                                                                 == b.endContainer
                                                                 && (h =
                        i(d).prev(), k = i(d).next(), h && k && h.type == 3
                                                                 && k.type == 3
                        ? b.setEnd(h[0], h[0].nodeValue.length) : a || b.setEnd(
                        b.endContainer, b.endOffset -
                                        1)), e.removeChild(d);
                }
                return this
            }, remove: function (a) {
                var c = this.doc, b = this.range;
                b.enlarge();
                if (b.startOffset === 0) {
                    for (var d = i(b.startContainer), e;
                         (e = d.parent()) && e.isStyle() && e.children().length
                                                            == 1;) {
                        d = e;
                    }
                    b.setStart(d[0], 0);
                    d = i(b.startContainer);
                    d.isBlock() && Sa(d, a);
                    (d = d.parent()) && d.isBlock() && Sa(d, a)
                }
                if (b.collapsed) {
                    this.split(!0, a);
                    c = b.startContainer;
                    d = b.startOffset;
                    if (d > 0 && (e = i(c.childNodes[d - 1])) && oa(
                            e)) {
                        e.remove(), b.setStart(c, d - 1);
                    }
                    (d = i(c.childNodes[d])) && oa(d) && d.remove();
                    oa(c) && (b.startBefore(c),
                        c.remove());
                    b.collapse(!0);
                    return this
                }
                this.split(!0, a);
                this.split(!1, a);
                var k = c.createElement("span"), g = c.createElement("span");
                b.cloneRange().collapse(!1).insertNode(g);
                b.cloneRange().collapse(!0).insertNode(k);
                var j = [], n = !1;
                i(b.commonAncestor()).scan(function (a) {
                    if (!n && a == k) {
                        n = !0;
                    } else {
                        if (a == g) {
                            return !1;
                        }
                        n && j.push(a)
                    }
                });
                i(k).remove();
                i(g).remove();
                c = b.startContainer;
                d = b.startOffset;
                e = b.endContainer;
                var o = b.endOffset;
                if (d > 0) {
                    var m = i(c.childNodes[d - 1]);
                    m && oa(m) && (m.remove(), b.setStart(c, d - 1), c == e
                    && b.setEnd(e,
                        o - 1));
                    if ((d = i(c.childNodes[d])) && oa(d)) {
                        d.remove(), c == e
                                    && b.setEnd(
                            e, o - 1)
                    }
                }
                (c = i(e.childNodes[b.endOffset])) && oa(c) && c.remove();
                c = b.createBookmark(!0);
                h(j, function (c, b) {
                    Sa(i(b), a)
                });
                b.moveToBookmark(c);
                return this
            }, commonNode: function (a) {
                function c(c) {
                    for (var b = c; c;) {
                        if (Ra(i(c), a)) {
                            return i(c);
                        }
                        c = c.parentNode
                    }
                    for (; b && (b = b.lastChild);) {
                        if (Ra(i(b), a)) {
                            return i(
                                b);
                        }
                    }
                    return null
                }

                var b = this.range, d = b.endContainer, b = b.endOffset,
                    e = d.nodeType == 3 || b === 0 ? d : d.childNodes[b - 1],
                    k = c(e);
                if (k) {
                    return k;
                }
                if (e.nodeType == 1 || d.nodeType ==
                                       3 && b === 0) {
                    if (d =
                            i(e).prev()) {
                        return c(d);
                    }
                }
                return null
            }, commonAncestor: function (a) {
                function c(c) {
                    for (; c;) {
                        if (c.nodeType == 1 && c.tagName.toLowerCase()
                                               === a) {
                            return c;
                        }
                        c = c.parentNode
                    }
                    return null
                }

                var b = this.range, d = b.startContainer, e = b.startOffset,
                    k = b.endContainer, b = b.endOffset,
                    k = k.nodeType == 3 || b === 0 ? k : k.childNodes[b - 1],
                    d = c(d.nodeType == 3 || e === 0 ? d : d.childNodes[e - 1]),
                    e = c(k);
                if (d && e && d === e) {
                    return i(d);
                }
                return null
            }, state: function (a) {
                var c = this.doc, b = !1;
                try {
                    b = c.queryCommandState(a)
                } catch (d) {
                }
                return b
            }, val: function (a) {
                var c =
                    this.doc, a = a.toLowerCase(), b = "";
                if (a === "fontfamily" || a === "fontname") {
                    return b =
                        nb(c, "fontname"), b =
                        b.replace(/['"]/g, ""), b.toLowerCase();
                }
                if (a === "formatblock") {
                    b = nb(c, a);
                    if (b === "" && (a =
                            this.commonNode(
                                {"h1,h2,h3,h4,h5,h6,p,div,pre,address": "*"}))) {
                        b =
                            a.name;
                    }
                    b === "Normal" && (b = "p");
                    return b.toLowerCase()
                }
                if (a === "fontsize") {
                    return (a =
                        this.commonNode({"*": ".font-size"})) && (b =
                        a.css("font-size")), b.toLowerCase();
                }
                if (a === "forecolor") {
                    return (a =
                        this.commonNode({"*": ".color"})) && (b =
                        a.css("color")), b = q(b), b === "" && (b = "default"),
                        b.toLowerCase();
                }
                if (a === "hilitecolor") {
                    return (a =
                        this.commonNode({"*": ".background-color"})) && (b =
                        a.css("background-color")), b = q(b), b === "" && (b =
                        "default"), b.toLowerCase();
                }
                return b
            }, toggle: function (a, c) {
                this.commonNode(c) ? this.remove(c) : this.wrap(a);
                return this.select()
            }, bold: function () {
                return this.toggle("<strong></strong>", {
                    span: ".font-weight=bold",
                    strong: "*",
                    b: "*"
                })
            }, italic: function () {
                return this.toggle("<em></em>", {
                    span: ".font-style=italic",
                    em: "*",
                    i: "*"
                })
            }, underline: function () {
                return this.toggle("<u></u>",
                                   {span: ".text-decoration=underline", u: "*"})
            }, strikethrough: function () {
                return this.toggle("<s></s>", {
                    span: ".text-decoration=line-through",
                    s: "*"
                })
            }, forecolor: function (a) {
                return this.toggle('<span style="color:' + a + ';"></span>',
                    {span: ".color=" + a, font: "color"})
            }, hilitecolor: function (a) {
                return this.toggle('<span style="background-color:' + a
                                   + ';"></span>',
                    {span: ".background-color=" + a})
            }, fontsize: function (a) {
                return this.toggle('<span style="font-size:' + a + ';"></span>',
                    {span: ".font-size=" + a, font: "size"})
            }, fontname: function (a) {
                return this.fontfamily(a)
            },
            fontfamily: function (a) {
                return this.toggle('<span style="font-family:' + a
                                   + ';"></span>',
                    {span: ".font-family=" + a, font: "face"})
            }, removeformat: function () {
                var a = {"*": ".font-weight,.font-style,.text-decoration,.color,.background-color,.font-size,.font-family,.text-indent"};
                h(Fb, function (c) {
                    a[c] = "*"
                });
                this.remove(a);
                return this.select()
            }, inserthtml: function (a, c) {
                function b(a, c) {
                    var c = '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />'
                            + c, d = a.get();
                    d.item ? d.item(0).outerHTML = c : d.pasteHTML(c);
                    var f = a.doc.getElementById("__kindeditor_temp_tag__");
                    f.parentNode.removeChild(f);
                    d = mb(d);
                    a.setEnd(d.endContainer, d.endOffset);
                    a.collapse(!1);
                    e.select(!1)
                }

                function d(a, c) {
                    var b = a.doc, f = b.createDocumentFragment();
                    i("@" + c, b).each(function () {
                        f.appendChild(this)
                    });
                    a.deleteContents();
                    a.insertNode(f);
                    a.collapse(!1);
                    e.select(!1)
                }

                var e = this, k = e.range;
                if (a === "") {
                    return e;
                }
                if (C && c) {
                    try {
                        b(k, a)
                    } catch (g) {
                        d(k, a)
                    }
                    return e
                }
                d(k, a);
                return e
            }, hr: function () {
                return this.inserthtml("<hr />")
            }, print: function () {
                this.win.print();
                return this
            }, insertimage: function (a, c, b, d, e, i) {
                c = r(c, "");
                r(e, 0);
                a = '<img src="' + s(a) + '" data-ke-src="' + s(a) + '" ';
                b && (a += 'width="' + s(b) + '" ');
                d && (a += 'height="' + s(d) + '" ');
                c && (a += 'title="' + s(c) + '" ');
                i && (a += 'align="' + s(i) + '" ');
                a += 'alt="' + s(c) + '" ';
                a += "/>";
                return this.inserthtml(a)
            }, createlink: function (a, c) {
                var b = this.doc, d = this.range;
                this.select();
                var e = this.commonNode({a: "*"});
                e && !d.isControl() && (d.selectNode(e.get()), this.select());
                e = '<a href="' + s(a) + '" data-ke-src="' + s(a) + '" ';
                c && (e += ' target="' +
                           s(c) + '"');
                if (d.collapsed) {
                    return e +=
                        ">" + s(a) + "</a>", this.inserthtml(e);
                }
                if (d.isControl()) {
                    var k = i(d.startContainer.childNodes[d.startOffset]);
                    e += "></a>";
                    k.after(i(e, b));
                    k.next().append(k);
                    d.selectNode(k[0]);
                    return this.select()
                }
                ba(b, "createlink", "__kindeditor_temp_url__");
                i('a[href="__kindeditor_temp_url__"]', b).each(function () {
                    i(this).attr("href", a).attr("data-ke-src", a);
                    c ? i(this).attr("target", c) : i(this).removeAttr("target")
                });
                return this
            }, unlink: function () {
                var a = this.doc, c = this.range;
                this.select();
                if (c.collapsed) {
                    var b = this.commonNode({a: "*"});
                    b && (c.selectNode(b.get()), this.select());
                    ba(a, "unlink", null);
                    ja && i(c.startContainer).name === "img" && (a =
                        i(c.startContainer).parent(), a.name === "a"
                    && a.remove(!0))
                } else {
                    ba(a, "unlink", null);
                }
                return this
            }
        });
        h("formatblock,selectall,justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,indent,outdent,subscript,superscript".split(
            ","), function (a, c) {
            ua.prototype[c] = function (a) {
                this.select();
                ba(this.doc, c, a);
                (!C || e(c,
                         "formatblock,selectall,insertorderedlist,insertunorderedlist".split(
                             ",")) >=
                 0) && this.selection();
                return this
            }
        });
        h("cut,copy,paste".split(","), function (a, c) {
            ua.prototype[c] = function () {
                if (!this.doc.queryCommandSupported(c)) {
                    throw"not supported";
                }
                this.select();
                ba(this.doc, c, null);
                return this
            }
        });
        i.CmdClass = ua;
        i.cmd = rb;
        A(da, {
            init: function (a) {
                var c = this;
                c.name = a.name || "";
                c.doc = a.doc || document;
                c.win = ha(c.doc);
                c.x = j(a.x);
                c.y = j(a.y);
                c.z = a.z;
                c.width = j(a.width);
                c.height = j(a.height);
                c.div = i('<div style="display:block;"></div>');
                c.options = a;
                c._alignEl = a.alignEl;
                c.width && c.div.css("width",
                                     c.width);
                c.height && c.div.css("height", c.height);
                c.z && c.div.css({
                                     position: "absolute",
                                     left: c.x,
                                     top: c.y,
                                     "z-index": c.z
                                 });
                c.z && (c.x === d || c.y === d) && c.autoPos(c.width, c.height);
                a.cls && c.div.addClass(a.cls);
                a.shadowMode && c.div.addClass("ke-shadow");
                a.css && c.div.css(a.css);
                a.src ? i(a.src).replaceWith(c.div) : i(c.doc.body)
                    .append(c.div);
                a.html && c.div.html(a.html);
                if (a.autoScroll) {
                    if (C && O < 7 || aa) {
                        var b = ma();
                        i(c.win).bind("scroll", function () {
                            var a = ma(), d = a.x - b.x, a = a.y - b.y;
                            c.pos(o(c.x) + d, o(c.y) + a, !1)
                        })
                    } else {
                        c.div.css("position",
                                  "fixed")
                    }
                }
            }, pos: function (a, c, b) {
                b = r(b, !0);
                if (a !== null && (a = a < 0 ? 0 : j(a), this.div.css("left",
                                                                      a), b)) {
                    this.x =
                        a;
                }
                if (c !== null && (c = c < 0 ? 0 : j(c), this.div.css("top",
                                                                      c), b)) {
                    this.y =
                        c;
                }
                return this
            }, autoPos: function (a, c) {
                var b = o(a) || 0, d = o(c) || 0, e = ma();
                if (this._alignEl) {
                    var k = i(this._alignEl), g = k.pos(),
                        b = ca(k[0].clientWidth / 2 - b / 2),
                        d = ca(k[0].clientHeight / 2 - d / 2);
                    x = b < 0 ? g.x : g.x + b;
                    y = d < 0 ? g.y : g.y + d
                } else {
                    g = X(this.doc), x =
                        ca(e.x + (g.clientWidth - b) / 2), y =
                        ca(e.y + (g.clientHeight - d) / 2);
                }
                C && O < 7 || aa || (x -= e.x, y -= e.y);
                return this.pos(x, y)
            },
            remove: function () {
                var a = this;
                (C && O < 7 || aa) && i(a.win).unbind("scroll");
                a.div.remove();
                h(a, function (c) {
                    a[c] = null
                });
                return this
            }, show: function () {
                this.div.show();
                return this
            }, hide: function () {
                this.div.hide();
                return this
            }, draggable: function (a) {
                var c = this, a = a || {};
                a.moveEl = c.div;
                a.moveFn = function (a, b, d, e, i, g) {
                    if ((a += i) < 0) {
                        a = 0;
                    }
                    if ((b += g) < 0) {
                        b = 0;
                    }
                    c.pos(a, b)
                };
                Ua(a);
                return c
            }
        });
        i.WidgetClass = da;
        i.widget = Wa;
        var Xa = "";
        if (I = document.getElementsByTagName("html")) {
            Xa = I[0].dir;
        }
        A(wa, da, {
            init: function (a) {
                function c() {
                    var c =
                        Va(b.iframe);
                    c.open();
                    if (h) {
                        c.domain = document.domain;
                    }
                    c.write(Ob(d, e, k, g));
                    c.close();
                    b.win = b.iframe[0].contentWindow;
                    b.doc = c;
                    var j = rb(c);
                    b.afterChange(function () {
                        j.selection()
                    });
                    ja && i(c).click(function (a) {
                        i(a.target).name === "img" && (j.selection(
                            !0), j.range.selectNode(a.target), j.select())
                    });
                    if (C) {
                        b._mousedownHandler = function () {
                            var a = j.range.cloneRange();
                            a.shrink();
                            a.isControl() && b.blur()
                        }, i(document).mousedown(b._mousedownHandler), i(c)
                            .keydown(function (a) {
                                if (a.which == 8) {
                                    j.selection();
                                    var c = j.range;
                                    c.isControl() &&
                                    (c.collapse(!0), i(
                                        c.startContainer.childNodes[c.startOffset])
                                        .remove(), a.preventDefault())
                                }
                            });
                    }
                    b.cmd = j;
                    b.html(va(b.srcElement));
                    C ? (c.body.disabled = !0, c.body.contentEditable =
                        !0, c.body.removeAttribute("disabled")) : c.designMode =
                        "on";
                    a.afterCreate && a.afterCreate.call(b)
                }

                var b = this;
                wa.parent.init.call(b, a);
                b.srcElement = i(a.srcElement);
                b.div.addClass("ke-edit");
                b.designMode = r(a.designMode, !0);
                b.beforeGetHtml = a.beforeGetHtml;
                b.beforeSetHtml = a.beforeSetHtml;
                b.afterSetHtml = a.afterSetHtml;
                var d = r(a.themesPath,
                          ""), e = a.bodyClass, k = a.cssPath, g = a.cssData,
                    h = location.host.replace(/:\d+/, "") !== document.domain,
                    j = "document.open();" + (h ? 'document.domain="'
                        + document.domain + '";' : "") + "document.close();",
                    j = C ? ' src="javascript:void(function(){'
                            + encodeURIComponent(j) + '}())"' : "";
                b.iframe =
                    i('<iframe class="ke-edit-iframe" hidefocus="true" frameborder="0"'
                      + j + "></iframe>").css("width", "100%");
                b.textarea =
                    i('<textarea class="ke-edit-textarea" hidefocus="true"></textarea>')
                        .css("width", "100%");
                b.width && b.setWidth(b.width);
                b.height &&
                b.setHeight(b.height);
                b.designMode ? b.textarea.hide() : b.iframe.hide();
                h && b.iframe.bind("load", function () {
                    b.iframe.unbind("load");
                    C ? c() : setTimeout(c, 0)
                });
                b.div.append(b.iframe);
                b.div.append(b.textarea);
                b.srcElement.hide();
                !h && c()
            }, setWidth: function (a) {
                this.div.css("width", j(a));
                return this
            }, setHeight: function (a) {
                a = j(a);
                this.div.css("height", a);
                this.iframe.css("height", a);
                if (C && O < 8 || aa) {
                    a = j(o(a) - 2);
                }
                this.textarea.css("height", a);
                return this
            }, remove: function () {
                var a = this.doc;
                i(a.body).unbind();
                i(a).unbind();
                i(this.win).unbind();
                this._mousedownHandler && i(document)
                    .unbind("mousedown", this._mousedownHandler);
                va(this.srcElement, this.html());
                this.srcElement.show();
                a.write("");
                this.iframe.unbind();
                this.textarea.unbind();
                wa.parent.remove.call(this)
            }, html: function (a, c) {
                var b = this.doc;
                if (this.designMode) {
                    b = b.body;
                    if (a === d) {
                        return a =
                            c ? "<!doctype html><html>" + b.parentNode.innerHTML
                                + "</html>" : b.innerHTML, this.beforeGetHtml
                                                           && (a =
                            this.beforeGetHtml(a)), pa && a == "<br />" && (a =
                            ""), a;
                    }
                    this.beforeSetHtml && (a = this.beforeSetHtml(a));
                    C && O >= 9 && (a =
                        a.replace(/(<.*?checked=")checked(".*>)/ig, "$1$2"));
                    i(b).html(a);
                    this.afterSetHtml && this.afterSetHtml();
                    return this
                }
                if (a === d) {
                    return this.textarea.val();
                }
                this.textarea.val(a);
                return this
            }, design: function (a) {
                if (a === d ? !this.designMode : a) {
                    if (!this.designMode) {
                        a = this.html(), this.designMode =
                            !0, this.html(
                            a), this.textarea.hide(), this.iframe.show()
                    }
                } else if (this.designMode) {
                    a = this.html(), this.designMode =
                        !1, this.html(
                        a), this.iframe.hide(), this.textarea.show();
                }
                return this.focus()
            }, focus: function () {
                this.designMode ? this.win.focus() : this.textarea[0].focus();
                return this
            }, blur: function () {
                if (C) {
                    var a = i(
                        '<input type="text" style="float:left;width:0;height:0;padding:0;margin:0;border:0;" value="" />',
                        this.div);
                    this.div.append(a);
                    a[0].focus();
                    a.remove()
                } else {
                    this.designMode ? this.win.blur()
                        : this.textarea[0].blur();
                }
                return this
            }, afterChange: function (a) {
                function c(c) {
                    setTimeout(function () {
                        a(c)
                    }, 1)
                }

                var b = this.doc, d = b.body;
                i(b).keyup(function (c) {
                    !c.ctrlKey && !c.altKey && cb[c.which] && a(c)
                });
                i(b).mouseup(a).contextmenu(a);
                i(this.win).blur(a);
                i(d).bind("paste", c);
                i(d).bind("cut", c);
                return this
            }
        });
        i.EditClass = wa;
        i.edit = sb;
        i.iframeDoc = Va;
        A(Ea, da, {
            init: function (a) {
                function c(a) {
                    a = i(a);
                    if (a.hasClass("ke-outline")) {
                        return a;
                    }
                    if (a.hasClass("ke-toolbar-icon")) {
                        return a.parent()
                    }
                }

                function b(a, d) {
                    var f = c(a.target);
                    if (f && !f.hasClass("ke-disabled") && !f.hasClass(
                            "ke-selected")) {
                        f[d]("ke-on")
                    }
                }

                var d = this;
                Ea.parent.init.call(d, a);
                d.disableMode = r(a.disableMode, !1);
                d.noDisableItemMap = z(r(a.noDisableItems, []));
                d._itemMap = {};
                d.div.addClass("ke-toolbar")
                    .bind("contextmenu,mousedown,mousemove",
                          function (a) {
                              a.preventDefault()
                          }).attr("unselectable", "on");
                d.div.mouseover(function (a) {
                    b(a, "addClass")
                }).mouseout(function (a) {
                    b(a, "removeClass")
                }).click(function (a) {
                    var b = c(a.target);
                    b && !b.hasClass("ke-disabled") && d.options.click.call(
                        this, a, b.attr("data-name"))
                })
            }, get: function (a) {
                if (this._itemMap[a]) {
                    return this._itemMap[a];
                }
                return this._itemMap[a] =
                    i("span.ke-icon-" + a, this.div).parent()
            }, select: function (a) {
                tb.call(this, a, function (a) {
                    a.addClass("ke-selected")
                });
                return self
            }, unselect: function (a) {
                tb.call(this,
                        a, function (a) {
                        a.removeClass("ke-selected").removeClass("ke-on")
                    });
                return self
            }, enable: function (a) {
                if (a = a.get ? a : this.get(a)) {
                    a.removeClass(
                        "ke-disabled"), a.opacity(1);
                }
                return this
            }, disable: function (a) {
                if (a = a.get ? a : this.get(a)) {
                    a.removeClass("ke-selected")
                        .addClass("ke-disabled"), a.opacity(0.5);
                }
                return this
            }, disableAll: function (a, c) {
                var b = this, e = b.noDisableItemMap;
                c && (e = z(c));
                (a === d ? !b.disableMode : a) ? (i("span.ke-outline", b.div)
                    .each(function () {
                        var a = i(this), c = a[0].getAttribute("data-name", 2);
                        e[c] || b.disable(a)
                    }),
                    b.disableMode = !0) : (i("span.ke-outline", b.div)
                    .each(function () {
                        var a = i(this), c = a[0].getAttribute("data-name", 2);
                        e[c] || b.enable(a)
                    }), b.disableMode = !1);
                return b
            }
        });
        i.ToolbarClass = Ea;
        i.toolbar = ub;
        A(xa, da, {
            init: function (a) {
                a.z = a.z || 811213;
                xa.parent.init.call(this, a);
                this.centerLineMode = r(a.centerLineMode, !0);
                this.div.addClass("ke-menu")
                    .bind("click,mousedown", function (a) {
                        a.stopPropagation()
                    }).attr("unselectable", "on")
            }, addItem: function (a) {
                if (a.title === "-") {
                    this.div.append(
                        i('<div class="ke-menu-separator"></div>'));
                } else {
                    var c = i(
                        '<div class="ke-menu-item" unselectable="on"></div>'),
                        b = i(
                            '<div class="ke-inline-block ke-menu-item-left"></div>'),
                        d = i(
                            '<div class="ke-inline-block ke-menu-item-right"></div>'),
                        e = j(a.height), k = r(a.iconClass, "");
                    this.div.append(c);
                    e && (c.css("height", e), d.css("line-height", e));
                    var g;
                    this.centerLineMode && (g =
                        i('<div class="ke-inline-block ke-menu-item-center"></div>'), e
                    && g.css("height", e));
                    c.mouseover(function () {
                        i(this).addClass("ke-menu-item-on");
                        g && g.addClass("ke-menu-item-center-on")
                    }).mouseout(function () {
                        i(this).removeClass("ke-menu-item-on");
                        g && g.removeClass("ke-menu-item-center-on")
                    }).click(function (c) {
                        a.click.call(i(this));
                        c.stopPropagation()
                    }).append(b);
                    g && c.append(g);
                    c.append(d);
                    a.checked && (k = "ke-icon-checked");
                    k !== ""
                    && b.html('<span class="ke-inline-block ke-toolbar-icon ke-toolbar-icon-url '
                              + k + '"></span>');
                    d.html(a.title);
                    return this
                }
            }, remove: function () {
                this.options.beforeRemove && this.options.beforeRemove.call(
                    this);
                i(".ke-menu-item", this.div[0]).unbind();
                xa.parent.remove.call(this);
                return this
            }
        });
        i.MenuClass = xa;
        i.menu = Ya;
        A(ya, da,
          {
              init: function (a) {
                  a.z = a.z || 811213;
                  ya.parent.init.call(this, a);
                  var c = a.colors || [["#E53333", "#E56600", "#FF9900",
                                        "#64451D", "#DFC5A4", "#FFE500"],
                      ["#009900", "#006600", "#99BB00", "#B8D100", "#60D978",
                       "#00D5FF"],
                      ["#337FE5", "#003399", "#4C33E5", "#9933E5", "#CC33E5",
                       "#EE33EE"],
                      ["#FFFFFF", "#CCCCCC", "#999999", "#666666", "#333333",
                       "#000000"]];
                  this.selectedColor = (a.selectedColor || "").toLowerCase();
                  this._cells = [];
                  this.div.addClass("ke-colorpicker")
                      .bind("click,mousedown", function (a) {
                          a.stopPropagation()
                      }).attr("unselectable",
                              "on");
                  a = this.doc.createElement("table");
                  this.div.append(a);
                  a.className = "ke-colorpicker-table";
                  a.cellPadding = 0;
                  a.cellSpacing = 0;
                  a.border = 0;
                  var b = a.insertRow(0), d = b.insertCell(0);
                  d.colSpan = c[0].length;
                  this._addAttr(d, "", "ke-colorpicker-cell-top");
                  for (var e = 0; e < c.length; e++) {
                      for (var b = a.insertRow(e
                                               + 1),
                               i = 0;
                           i < c[e].length;
                           i++) {
                          d =
                              b.insertCell(i), this._addAttr(d, c[e][i],
                                                             "ke-colorpicker-cell")
                      }
                  }
              }, _addAttr: function (a, c, b) {
              var d = this, a = i(a).addClass(b);
              d.selectedColor === c.toLowerCase() && a.addClass(
                  "ke-colorpicker-cell-selected");
              a.attr("title", c || d.options.noColor);
              a.mouseover(function () {
                  i(this).addClass("ke-colorpicker-cell-on")
              });
              a.mouseout(function () {
                  i(this).removeClass("ke-colorpicker-cell-on")
              });
              a.click(function (a) {
                  a.stop();
                  d.options.click.call(i(this), c)
              });
              c ? a.append(
                  i('<div class="ke-colorpicker-cell-color" unselectable="on"></div>')
                      .css("background-color", c)) : a.html(d.options.noColor);
              i(a).attr("unselectable", "on");
              d._cells.push(a)
          }, remove: function () {
              h(this._cells, function () {
                  this.unbind()
              });
              ya.parent.remove.call(this);
              return this
          }
          });
        i.ColorPickerClass = ya;
        i.colorpicker = vb;
        A(Za, {
            init: function (a) {
                var c = i(a.button), b = a.fieldName || "file", d = a.url || "",
                    e = c.val(), k = a.extraParams || {},
                    g = c[0].className || "",
                    h = a.target || "kindeditor_upload_iframe_"
                        + (new Date).getTime();
                a.afterError = a.afterError || function (a) {
                    alert(a)
                };
                var j = [], n;
                for (n in k) {
                    j.push('<input type="hidden" name="' + n
                           + '" value="' + k[n] + '" />');
                }
                b =
                    ['<div class="ke-inline-block ' + g + '">',
                     a.target ? "" : '<iframe name="' + h
                                     + '" style="display:none;"></iframe>',
                     a.form ? '<div class="ke-upload-area">'
                         : '<form class="ke-upload-area ke-form" method="post" enctype="multipart/form-data" target="'
                           + h + '" action="' + d + '">',
                     '<span class="ke-button-common">', j.join(""),
                     '<input type="button" class="ke-button-common ke-button" value="'
                     + e + '" />', "</span>",
                     '<input type="file" class="ke-upload-file" name="' + b
                     + '" tabindex="-1" />', a.form ? "</div>" : "</form>",
                     "</div>"].join("");
                b = i(b, c.doc);
                c.hide();
                c.before(b);
                this.div = b;
                this.button = c;
                this.iframe =
                    a.target ? i('iframe[name="' + h + '"]') : i("iframe", b);
                this.form = a.form ? i(a.form) : i("form", b);
                c = a.width || i(".ke-button-common", b).width();
                this.fileBox = i(".ke-upload-file", b).width(c);
                this.options = a
            }, submit: function () {
                var a = this, c = a.iframe;
                c.bind("load", function () {
                    c.unbind();
                    var b = document.createElement("form");
                    a.fileBox.before(b);
                    i(b).append(a.fileBox);
                    b.reset();
                    i(b).remove(!0);
                    var b = i.iframeDoc(c),
                        d = b.getElementsByTagName("pre")[0], e = "", k,
                        e = d ? d.innerHTML : b.body.innerHTML, e = t(e);
                    c[0].src = "javascript:false";
                    try {
                        k = i.json(e)
                    } catch (g) {
                        a.options.afterError.call(a, "<!doctype html><html>" +
                                                     b.body.parentNode.innerHTML
                                                     + "</html>")
                    }
                    k && a.options.afterUpload.call(a, k)
                });
                a.form[0].submit();
                return a
            }, remove: function () {
                this.fileBox && this.fileBox.unbind();
                this.iframe.remove();
                this.div.remove();
                this.button.show();
                return this
            }
        });
        i.UploadButtonClass = Za;
        i.uploadbutton = function (a) {
            return new Za(a)
        };
        A(za, da, {
            init: function (a) {
                var c = r(a.shadowMode, !0);
                a.z = a.z || 811213;
                a.shadowMode = !1;
                a.autoScroll = r(a.autoScroll, !0);
                za.parent.init.call(this, a);
                var b = a.title, d = i(a.body, this.doc), e = a.previewBtn,
                    k = a.yesBtn,
                    g = a.noBtn, j = a.closeBtn, n = r(a.showMask, !0);
                this.div.addClass("ke-dialog")
                    .bind("click,mousedown", function (a) {
                        a.stopPropagation()
                    });
                var m = i('<div class="ke-dialog-content"></div>')
                    .appendTo(this.div);
                C && O < 7 ? this.iframeMask =
                    i('<iframe src="about:blank" class="ke-dialog-shadow"></iframe>')
                        .appendTo(this.div) : c && i(
                    '<div class="ke-dialog-shadow"></div>').appendTo(this.div);
                c = i('<div class="ke-dialog-header"></div>');
                m.append(c);
                c.html(b);
                this.closeIcon =
                    i('<span class="ke-dialog-icon-close" title="' + j.name +
                      '"></span>').click(j.click);
                c.append(this.closeIcon);
                this.draggable({clickEl: c, beforeDrag: a.beforeDrag});
                a = i('<div class="ke-dialog-body"></div>');
                m.append(a);
                a.append(d);
                var l = i('<div class="ke-dialog-footer"></div>');
                (e || k || g) && m.append(l);
                h([{btn: e, name: "preview"}, {btn: k, name: "yes"},
                      {btn: g, name: "no"}], function () {
                    if (this.btn) {
                        var a = this.btn, a = a || {}, c = a.name || "",
                            b = i('<span class="ke-button-common ke-button-outer" title="'
                                  + c + '"></span>'),
                            c = i('<input class="ke-button-common ke-button" type="button" value="'
                                  +
                                  c + '" />');
                        a.click && c.click(a.click);
                        b.append(c);
                        b.addClass("ke-dialog-" + this.name);
                        l.append(b)
                    }
                });
                this.height && a.height(o(this.height) - c.height()
                                        - l.height());
                this.div.width(this.div.width());
                this.div.height(this.div.height());
                this.mask = null;
                if (n) {
                    d = X(this.doc), this.mask =
                        Wa({
                               x: 0,
                               y: 0,
                               z: this.z - 1,
                               cls: "ke-dialog-mask",
                               width: Math.max(d.scrollWidth, d.clientWidth),
                               height: Math.max(d.scrollHeight, d.clientHeight)
                           });
                }
                this.autoPos(this.div.width(), this.div.height());
                this.footerDiv = l;
                this.bodyDiv = a;
                this.headerDiv =
                    c;
                this.isLoading = !1
            }, setMaskIndex: function (a) {
                this.mask.div.css("z-index", a)
            }, showLoading: function (a) {
                var a = r(a, ""), c = this.bodyDiv;
                this.loading =
                    i('<div class="ke-dialog-loading"><div class="ke-inline-block ke-dialog-loading-content" style="margin-top:'
                      + Math.round(c.height() / 3) + 'px;">' + a
                      + "</div></div>").width(c.width()).height(c.height())
                        .css("top", this.headerDiv.height() + "px");
                c.css("visibility", "hidden").after(this.loading);
                this.isLoading = !0;
                return this
            }, hideLoading: function () {
                this.loading && this.loading.remove();
                this.bodyDiv.css("visibility", "visible");
                this.isLoading = !1;
                return this
            }, remove: function () {
                this.options.beforeRemove && this.options.beforeRemove.call(
                    this);
                this.mask && this.mask.remove();
                this.iframeMask && this.iframeMask.remove();
                this.closeIcon.unbind();
                i("input", this.div).unbind();
                i("button", this.div).unbind();
                this.footerDiv.unbind();
                this.bodyDiv.unbind();
                this.headerDiv.unbind();
                i("iframe", this.div).each(function () {
                    i(this).remove()
                });
                za.parent.remove.call(this);
                return this
            }
        });
        i.DialogClass = za;
        i.dialog =
            wb;
        i.tabs = function (a) {
            var c = Wa(a), b = c.remove, d = a.afterSelect, a = c.div, e = [];
            a.addClass("ke-tabs")
                .bind("contextmenu,mousedown,mousemove", function (a) {
                    a.preventDefault()
                });
            var g = i('<ul class="ke-tabs-ul ke-clearfix"></ul>');
            a.append(g);
            c.add = function (a) {
                var c = i('<li class="ke-tabs-li">' + a.title + "</li>");
                c.data("tab", a);
                e.push(c);
                g.append(c)
            };
            c.selectedIndex = 0;
            c.select = function (a) {
                c.selectedIndex = a;
                h(e, function (b, d) {
                    d.unbind();
                    b === a ? (d.addClass("ke-tabs-li-selected"), i(
                        d.data("tab").panel).show("")) : (d.removeClass(
                        "ke-tabs-li-selected").removeClass("ke-tabs-li-on")
                        .mouseover(function () {
                            i(this).addClass("ke-tabs-li-on")
                        }).mouseout(function () {
                            i(this).removeClass("ke-tabs-li-on")
                        }).click(function () {
                            c.select(b)
                        }),
                        i(d.data("tab").panel).hide())
                });
                d && d.call(c, a)
            };
            c.remove = function () {
                h(e, function () {
                    this.remove()
                });
                g.remove();
                b.call(c)
            };
            return c
        };
        i.loadScript = $a;
        i.loadStyle = ab;
        i.ajax = function (a, c, d, e, i) {
            var d = d || "GET", i = i || "json",
                g = b.XMLHttpRequest ? new b.XMLHttpRequest : new ActiveXObject(
                    "Microsoft.XMLHTTP");
            g.open(d, a, !0);
            g.onreadystatechange = function () {
                if (g.readyState == 4 && g.status == 200 && c) {
                    var a = m(g.responseText);
                    i == "json" && (a = w(a));
                    c(a)
                }
            };
            if (d == "POST") {
                var j = [];
                h(e, function (a, c) {
                    j.push(encodeURIComponent(a) +
                           "=" + encodeURIComponent(c))
                });
                try {
                    g.setRequestHeader("Content-Type",
                                       "application/x-www-form-urlencoded")
                } catch (n) {
                }
                g.send(j.join("&"))
            } else {
                g.send(null)
            }
        };
        var ia = {}, $ = {};
        Aa.prototype = {
            lang: function (a) {
                return Ab(a, this.langType)
            }, loadPlugin: function (a, c) {
                var b = this;
                if (ia[a]) {
                    if (b._calledPlugins[a]) {
                        return c && c.call(b), b;
                    }
                    ia[a].call(b, KindEditor);
                    c && c.call(b);
                    b._calledPlugins[a] = !0;
                    return b
                }
                if (b.isLoading) {
                    return b;
                }
                b.isLoading = !0;
                $a(b.pluginsPath + a + "/" + a + ".js?ver="
                   + encodeURIComponent(i.DEBUG ? Ga : Ha), function () {
                    b.isLoading =
                        !1;
                    ia[a] && b.loadPlugin(a, c)
                });
                return b
            }, handler: function (a, c) {
                var b = this;
                b._handlers[a] || (b._handlers[a] = []);
                if (l(c)) {
                    return b._handlers[a].push(c), b;
                }
                h(b._handlers[a], function () {
                    c = this.call(b, c)
                });
                return c
            }, clickToolbar: function (a, c) {
                var b = this, e = "clickToolbar" + a;
                if (c === d) {
                    if (b._handlers[e]) {
                        return b.handler(e);
                    }
                    b.loadPlugin(a, function () {
                        b.handler(e)
                    });
                    return b
                }
                return b.handler(e, c)
            }, updateState: function () {
                var a = this;
                h("justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,subscript,superscript,bold,italic,underline,strikethrough".split(
                    ","),
                  function (c, b) {
                      a.cmd.state(b) ? a.toolbar.select(b) : a.toolbar.unselect(
                          b)
                  });
                return a
            }, addContextmenu: function (a) {
                this._contextmenus.push(a);
                return this
            }, afterCreate: function (a) {
                return this.handler("afterCreate", a)
            }, beforeRemove: function (a) {
                return this.handler("beforeRemove", a)
            }, beforeGetHtml: function (a) {
                return this.handler("beforeGetHtml", a)
            }, beforeSetHtml: function (a) {
                return this.handler("beforeSetHtml", a)
            }, afterSetHtml: function (a) {
                return this.handler("afterSetHtml", a)
            }, create: function () {
                function a() {
                    m.height() ===
                    0 ? setTimeout(a, 100) : c.resize(e, g, !1)
                }

                var c = this, d = c.fullscreenMode;
                if (c.isCreated) {
                    return c;
                }
                if (c.srcElement.data("kindeditor")) {
                    return c;
                }
                c.srcElement.data("kindeditor", "true");
                d ? X().style.overflow = "hidden" : X().style.overflow = "";
                var e = d ? X().clientWidth + "px" : c.width,
                    g = d ? X().clientHeight + "px" : c.height;
                if (C && O < 8 || aa) {
                    g = j(o(g) + 2);
                }
                var k = c.container = i(c.layout);
                d ? i(document.body).append(k) : c.srcElement.before(k);
                var h = i(".toolbar", k), n = i(".edit", k),
                    m = c.statusbar = i(".statusbar", k);
                k.removeClass("container")
                    .addClass("ke-container ke-container-" +
                              c.themeType).css("width", e);
                if (d) {
                    k.css({
                              position: "absolute",
                              left: 0,
                              top: 0,
                              "z-index": 811211
                          });
                    if (!pa) {
                        c._scrollPos = ma();
                    }
                    b.scrollTo(0, 0);
                    i(document.body).css({height: "1px", overflow: "hidden"});
                    i(document.body.parentNode).css("overflow", "hidden");
                    c._fullscreenExecuted = !0
                } else {
                    c._fullscreenExecuted && (i(document.body)
                        .css({height: "", overflow: ""}), i(
                        document.body.parentNode)
                        .css("overflow", "")), c._scrollPos
                                               && b.scrollTo(
                        c._scrollPos.x, c._scrollPos.y);
                }
                var l = [];
                i.each(c.items, function (a, b) {
                    b == "|" ? l.push(
                        '<span class="ke-inline-block ke-separator"></span>')
                        : b == "/" ? l.push('<div class="ke-hr"></div>')
                        : (l.push('<span class="ke-outline" data-name="' + b
                                  + '" title="' + c.lang(b)
                                  + '" unselectable="on">'), l.push('<span class="ke-toolbar-icon ke-toolbar-icon-url ke-icon-'
                                                                    + b
                                                                    + '" unselectable="on"></span></span>'))
                });
                var h = c.toolbar =
                    ub({
                           src: h,
                           html: l.join(""),
                           noDisableItems: c.noDisableItems,
                           click: function (a, b) {
                               a.stop();
                               if (c.menu) {
                                   var d = c.menu.name;
                                   c.hideMenu();
                                   if (d === b) {
                                       return
                                   }
                               }
                               c.clickToolbar(b)
                           }
                       }), s = o(g) - h.div.height(), q = c.edit = sb({
                                                                          height: s
                                                                                  > 0
                                                                                  && o(
                                                                              g)
                                                                                     > c.minHeight
                                                                              ? s
                                                                              : c.minHeight,
                                                                          src: n,
                                                                          srcElement: c.srcElement,
                                                                          designMode: c.designMode,
                                                                          themesPath: c.themesPath,
                                                                          bodyClass: c.bodyClass,
                                                                          cssPath: c.cssPath,
                                                                          cssData: c.cssData,
                                                                          beforeGetHtml: function (a) {
                                                                              a =
                                                                                  c.beforeGetHtml(
                                                                                      a);
                                                                              return J(
                                                                                  a,
                                                                                  c.filterMode
                                                                                      ? c.htmlTags
                                                                                      : null,
                                                                                  c.urlType,
                                                                                  c.wellFormatMode,
                                                                                  c.indentChar)
                                                                          },
                                                                          beforeSetHtml: function (a) {
                                                                              a =
                                                                                  J(a,
                                                                                    c.filterMode
                                                                                        ? c.htmlTags
                                                                                        : null,
                                                                                    "",
                                                                                    !1);
                                                                              return c.beforeSetHtml(
                                                                                  a)
                                                                          },
                                                                          afterSetHtml: function () {
                                                                              c.edit =
                                                                                  q =
                                                                                      this;
                                                                              c.afterSetHtml()
                                                                          },
                                                                          afterCreate: function () {
                                                                              c.edit =
                                                                                  q =
                                                                                      this;
                                                                              c.cmd =
                                                                                  q.cmd;
                                                                              c._docMousedownFn =
                                                                                  function () {
                                                                                      c.menu
                                                                                      &&
                                                                                      c.hideMenu()
                                                                                  };
                                                                              i(q.doc,
                                                                                document)
                                                                                  .mousedown(
                                                                                      c._docMousedownFn);
                                                                              Pb.call(
                                                                                  c);
                                                                              Qb.call(
                                                                                  c);
                                                                              Rb.call(
                                                                                  c);
                                                                              Sb.call(
                                                                                  c);
                                                                              q.afterChange(
                                                                                  function () {
                                                                                      q.designMode
                                                                                      && (c.updateState(), c.addBookmark(), c.options.afterChange
                                                                                      && c.options.afterChange.call(
                                                                                          c))
                                                                                  });
                                                                              q.textarea.keyup(
                                                                                  function (a) {
                                                                                      !a.ctrlKey
                                                                                      && !a.altKey
                                                                                      && Hb[a.which]
                                                                                      && c.options.afterChange
                                                                                      && c.options.afterChange.call(
                                                                                          c)
                                                                                  });
                                                                              c.readonlyMode
                                                                              && c.readonly();
                                                                              c.isCreated =
                                                                                  !0;
                                                                              if (c.initContent
                                                                                  === "") {
                                                                                  c.initContent =
                                                                                      c.html();
                                                                              }
                                                                              c.afterCreate();
                                                                              c.options.afterCreate
                                                                              && c.options.afterCreate.call(
                                                                                  c)
                                                                          }
                                                                      });
                m.removeClass("statusbar").addClass("ke-statusbar").append(
                    '<span class="ke-inline-block ke-statusbar-center-icon"></span>')
                    .append(
                        '<span class="ke-inline-block ke-statusbar-right-icon"></span>');
                if (c._fullscreenResizeHandler) {
                    i(b).unbind("resize",
                                c._fullscreenResizeHandler), c._fullscreenResizeHandler =
                        null;
                }
                a();
                d ? (c._fullscreenResizeHandler = function () {
                    c.isCreated && c.resize(X().clientWidth, X().clientHeight,
                                            !1)
                }, i(b).bind("resize", c._fullscreenResizeHandler), h.select(
                    "fullscreen"), m.first().css("visibility",
                                                 "hidden"), m.last()
                    .css("visibility", "hidden")) : (pa && i(b)
                    .bind("scroll", function () {
                        c._scrollPos = ma()
                    }), c.resizeType > 0 ? Ua({
                                                  moveEl: k,
                                                  clickEl: m,
                                                  moveFn: function (a, b, d, f,
                                                                    e, i) {
                                                      f += i;
                                                      c.resize(null, f)
                                                  }
                                              }) : m.first()
                            .css("visibility", "hidden"), c.resizeType === 2
                    ? Ua({
                             moveEl: k,
                             clickEl: m.last(),
                             moveFn: function (a, b, d, f, e, i) {
                                 d += e;
                                 f += i;
                                 c.resize(d, f)
                             }
                         }) : m.last().css("visibility", "hidden"));
                return c
            }, remove: function () {
                var a = this;
                if (!a.isCreated) {
                    return a;
                }
                a.beforeRemove();
                a.srcElement.data("kindeditor", "");
                a.menu && a.hideMenu();
                h(a.dialogs, function () {
                    a.hideDialog()
                });
                i(document).unbind("mousedown", a._docMousedownFn);
                a.toolbar.remove();
                a.edit.remove();
                a.statusbar.last().unbind();
                a.statusbar.unbind();
                a.container.remove();
                a.container = a.toolbar = a.edit = a.menu = null;
                a.dialogs = [];
                a.isCreated = !1;
                return a
            }, resize: function (a, c, b) {
                b = r(b, !0);
                if (a && (/%/.test(a) || (a = o(a), a =
                        a < this.minWidth ? this.minWidth
                            : a), this.container.css("width",
                                                     j(a)), b)) {
                    this.width =
                        j(a);
                }
                if (c && (c = o(c), editHeight =
                        o(c) - this.toolbar.div.height()
                        - this.statusbar.height(),
                        editHeight =
                            editHeight < this.minHeight ? this.minHeight
                                : editHeight, this.edit.setHeight(
                        editHeight), b)) {
                    this.height = j(c);
                }
                return this
            }, select: function () {
                this.isCreated && this.cmd.select();
                return this
            }, html: function (a) {
                if (a === d) {
                    return this.isCreated ? this.edit.html() : va(
                        this.srcElement);
                }
                this.isCreated ? this.edit.html(a) : va(this.srcElement, a);
                this.isCreated && this.cmd.selection();
                return this
            }, fullHtml: function () {
                return this.isCreated ? this.edit.html(d, !0) : ""
            }, text: function (a) {
                return a === d ? m(this.html().replace(/<(?!img|embed).*?>/ig,
                                                       "")
                                       .replace(/&nbsp;/ig, " ")) : this.html(
                    s(a))
            }, isEmpty: function () {
                return m(this.text().replace(/\r\n|\n|\r/, "")) === ""
            }, isDirty: function () {
                return m(this.initContent.replace(/\r\n|\n|\r|t/g, "")) !== m(
                    this.html().replace(/\r\n|\n|\r|t/g, ""))
            }, selectedHtml: function () {
                return this.isCreated ? this.cmd.range.html() : ""
            }, count: function (a) {
                a = (a || "html").toLowerCase();
                if (a === "html") {
                    return ka(bb(this.html())).length;
                }
                if (a === "text") {
                    return this.text()
                        .replace(/<(?:img|embed).*?>/ig, "K")
                        .replace(/\r\n|\n|\r/g, "").length;
                }
                return 0
            }, exec: function (a) {
                var a = a.toLowerCase(), c = this.cmd,
                    b = e(a, "selectall,copy,paste,print".split(",")) < 0;
                b && this.addBookmark(!1);
                c[a].apply(c, D(arguments, 1));
                b && (this.updateState(), this.addBookmark(
                    !1), this.options.afterChange
                && this.options.afterChange.call(this));
                return this
            }, insertHtml: function (a, b) {
                if (!this.isCreated) {
                    return this;
                }
                a = this.beforeSetHtml(a);
                this.exec("inserthtml", a, b);
                return this
            }, appendHtml: function (a) {
                this.html(this.html() + a);
                if (this.isCreated) {
                    a = this.cmd, a.range.selectNodeContents(
                        a.doc.body).collapse(!1),
                        a.select();
                }
                return this
            }, sync: function () {
                va(this.srcElement, this.html());
                return this
            }, focus: function () {
                this.isCreated ? this.edit.focus() : this.srcElement[0].focus();
                return this
            }, blur: function () {
                this.isCreated ? this.edit.blur() : this.srcElement[0].blur();
                return this
            }, addBookmark: function (a) {
                var a = r(a, !0), b = this.edit, d = b.doc.body,
                    e = bb(d.innerHTML);
                if (a && this._undoStack.length > 0 && Math.abs(e.length - ka(
                        this._undoStack[this._undoStack.length
                                                                - 1].html).length)
                                                       < this.minChangeSize) {
                    return this;
                }
                b.designMode && !this._firstAddBookmark ? (b =
                    this.cmd.range, a = b.createBookmark(!0), a.html =
                    bb(d.innerHTML), b.moveToBookmark(a)) : a = {html: e};
                this._firstAddBookmark = !1;
                Bb(this._undoStack, a);
                return this
            }, undo: function () {
                return Cb.call(this, this._undoStack, this._redoStack)
            }, redo: function () {
                return Cb.call(this, this._redoStack, this._undoStack)
            }, fullscreen: function (a) {
                this.fullscreenMode = a === d ? !this.fullscreenMode : a;
                return this.remove().create()
            }, readonly: function (a) {
                var a = r(a, !0), b = this, d = b.edit, e = d.doc;
                b.designMode ? b.toolbar.disableAll(a, []) : h(b.noDisableItems,
                                                               function () {
                                                                   b.toolbar[a
                                                                       ? "disable"
                                                                       : "enable"](
                                                                       this)
                                                               });
                C ? e.body.contentEditable = !a : e.designMode =
                    a ? "off" : "on";
                d.textarea[0].disabled = a
            }, createMenu: function (a) {
                var b = this.toolbar.get(a.name), f = b.pos();
                a.x = f.x;
                a.y = f.y + b.height();
                a.z = this.options.zIndex;
                a.shadowMode = r(a.shadowMode, this.shadowMode);
                a.selectedColor !== d ? (a.cls =
                    "ke-colorpicker-" + this.themeType, a.noColor =
                    this.lang("noColor"), this.menu = vb(a)) : (a.cls =
                    "ke-menu-" + this.themeType, a.centerLineMode =
                    !1, this.menu = Ya(a));
                return this.menu
            }, hideMenu: function () {
                this.menu.remove();
                this.menu = null;
                return this
            }, hideContextmenu: function () {
                this.contextmenu.remove();
                this.contextmenu = null;
                return this
            }, createDialog: function (a) {
                var b = this;
                a.z = b.options.zIndex;
                a.shadowMode = r(a.shadowMode, b.shadowMode);
                a.closeBtn =
                    r(a.closeBtn, {
                        name: b.lang("close"), click: function () {
                            b.hideDialog();
                            C && b.cmd && b.cmd.select()
                        }
                    });
                a.noBtn =
                    r(a.noBtn, {
                        name: b.lang(a.yesBtn ? "no" : "close"),
                        click: function () {
                            b.hideDialog();
                            C && b.cmd && b.cmd.select()
                        }
                    });
                if (b.dialogAlignType != "page") {
                    a.alignEl = b.container;
                }
                a.cls = "ke-dialog-" +
                        b.themeType;
                if (b.dialogs.length > 0) {
                    var d = b.dialogs[b.dialogs.length - 1];
                    b.dialogs[0].setMaskIndex(d.z + 2);
                    a.z = d.z + 3;
                    a.showMask = !1
                }
                a = wb(a);
                b.dialogs.push(a);
                return a
            }, hideDialog: function () {
                this.dialogs.length > 0 && this.dialogs.pop().remove();
                this.dialogs.length > 0
                && this.dialogs[0].setMaskIndex(this.dialogs[this.dialogs.length
                                                - 1].z - 1);
                return this
            }, errorDialog: function (a) {
                var b = this.createDialog({
                                              width: 750,
                                              title: this.lang("uploadError"),
                                              body: '<div style="padding:10px 20px;"><iframe frameborder="0" style="width:708px;height:400px;"></iframe></div>'
                                          }),
                    b = i("iframe", b.div), d = i.iframeDoc(b);
                d.open();
                d.write(a);
                d.close();
                i(d.body).css("background-color", "#FFF");
                b[0].contentWindow.focus();
                return this
            }
        };
        _instances = [];
        i.remove = function (a) {
            Eb(a, function (a) {
                this.remove();
                _instances.splice(a, 1)
            })
        };
        i.sync = function (a) {
            Eb(a, function () {
                this.sync()
            })
        };
        C && O < 7 && ba(document, "BackgroundImageCache", !0);
        i.EditorClass = Aa;
        i.editor = function (a) {
            return new Aa(a)
        };
        i.create = Db;
        i.instances = _instances;
        i.plugin = yb;
        i.lang = Ab;
        yb("core", function (a) {
            var c = this, f = {
                undo: "Z",
                redo: "Y",
                bold: "B",
                italic: "I",
                underline: "U",
                print: "P",
                selectall: "A"
            };
            c.afterSetHtml(function () {
                c.options.afterChange && c.options.afterChange.call(c)
            });
            c.afterCreate(function () {
                if (c.syncType == "form") {
                    for (var d = a(c.srcElement), f = !1;
                         d = d.parent();) {
                        if (d.name == "form") {
                            f = !0;
                            break
                        }
                    }
                    if (f) {
                        d.bind("submit", function () {
                            c.sync();
                            a(b).bind("unload", function () {
                                c.edit.textarea.remove()
                            })
                        });
                        var e = a('[type="reset"]', d);
                        e.click(function () {
                            c.html(c.initContent);
                            c.cmd.selection()
                        });
                        c.beforeRemove(function () {
                            d.unbind();
                            e.unbind()
                        })
                    }
                }
            });
            c.clickToolbar("source", function () {
                c.edit.designMode ? (c.toolbar.disableAll(!0), c.edit.design(
                    !1), c.toolbar.select("source")) : (c.toolbar.disableAll(
                    !1), c.edit.design(!0), c.toolbar.unselect(
                    "source"), c.cmd.selection());
                c.designMode = c.edit.designMode
            });
            c.afterCreate(function () {
                c.designMode || c.toolbar.disableAll(!0).select("source")
            });
            c.clickToolbar("fullscreen", function () {
                c.fullscreen()
            });
            if (c.fullscreenShortcut) {
                var i = !1;
                c.afterCreate(function () {
                    a(c.edit.doc, c.edit.textarea).keyup(function (a) {
                        a.which ==
                        27 && setTimeout(function () {
                            c.fullscreen()
                        }, 0)
                    });
                    if (i) {
                        if (C && !c.designMode) {
                            return;
                        }
                        c.focus()
                    }
                    i || (i = !0)
                })
            }
            h("undo,redo".split(","), function (a, b) {
                f[b] && c.afterCreate(function () {
                    V(this.edit.doc, f[b], function () {
                        c.clickToolbar(b)
                    })
                });
                c.clickToolbar(b, function () {
                    c[b]()
                })
            });
            c.clickToolbar("formatblock", function () {
                var a = c.lang("formatblock.formatBlock"),
                    b = {h1: 28, h2: 24, h3: 18, H4: 14, p: 12},
                    d = c.cmd.val("formatblock"), f = c.createMenu({
                                                                       name: "formatblock",
                                                                       width: c.langType
                                                                              == "en"
                                                                           ? 200
                                                                           : 150
                                                                   });
                h(a, function (a, e) {
                    var i = "font-size:" +
                            b[a] + "px;";
                    a.charAt(0) === "h" && (i += "font-weight:bold;");
                    f.addItem({
                                  title: '<span style="' + i
                                         + '" unselectable="on">' + e
                                         + "</span>",
                                  height: b[a] + 12,
                                  checked: d === a || d === e,
                                  click: function () {
                                      c.select()
                                          .exec("formatblock", "<" + a + ">")
                                          .hideMenu()
                                  }
                              })
                })
            });
            c.clickToolbar("fontname", function () {
                var a = c.cmd.val("fontname"),
                    b = c.createMenu({name: "fontname", width: 150});
                h(c.lang("fontname.fontName"), function (d, f) {
                    b.addItem({
                                  title: '<span style="font-family: ' + d
                                         + ';" unselectable="on">' + f
                                         + "</span>",
                                  checked: a === d.toLowerCase() ||
                                           a === f.toLowerCase(),
                                  click: function () {
                                      c.exec("fontname", d).hideMenu()
                                  }
                              })
                })
            });
            c.clickToolbar("fontsize", function () {
                var a = c.cmd.val("fontsize"),
                    b = c.createMenu({name: "fontsize", width: 150});
                h(c.fontSizeTable, function (d, f) {
                    b.addItem({
                                  title: '<span style="font-size:' + f
                                         + ';" unselectable="on">' + f
                                         + "</span>",
                                  height: o(f) + 12,
                                  checked: a === f,
                                  click: function () {
                                      c.exec("fontsize", f).hideMenu()
                                  }
                              })
                })
            });
            h("forecolor,hilitecolor".split(","), function (a, b) {
                c.clickToolbar(b, function () {
                    c.createMenu({
                                     name: b,
                                     selectedColor: c.cmd.val(b) ||
                                                    "default",
                                     colors: c.colorTable,
                                     click: function (a) {
                                         c.exec(b, a).hideMenu()
                                     }
                                 })
                })
            });
            h("cut,copy,paste".split(","), function (a, b) {
                c.clickToolbar(b, function () {
                    c.focus();
                    try {
                        c.exec(b, null)
                    } catch (a) {
                        alert(c.lang(b + "Error"))
                    }
                })
            });
            c.clickToolbar("about", function () {
                var a = '<div style="margin:20px;"><div>KindEditor ' + Ha
                        + '</div><div>Copyright &copy; <a href="http://www.kindsoft.net/" target="_blank">kindsoft.net</a> All rights reserved.</div></div>';
                c.createDialog({
                                   name: "about",
                                   width: 350,
                                   title: c.lang("about"),
                                   body: a
                               })
            });
            c.plugin.getSelectedLink = function () {
                return c.cmd.commonAncestor("a")
            };
            c.plugin.getSelectedImage = function () {
                return Fa(c.edit.cmd.range, function (a) {
                    return !/^ke-\w+$/i.test(a[0].className)
                })
            };
            c.plugin.getSelectedFlash = function () {
                return Fa(c.edit.cmd.range, function (a) {
                    return a[0].className == "ke-flash"
                })
            };
            c.plugin.getSelectedMedia = function () {
                return Fa(c.edit.cmd.range, function (a) {
                    return a[0].className == "ke-media" || a[0].className
                           == "ke-rm"
                })
            };
            c.plugin.getSelectedAnchor = function () {
                return Fa(c.edit.cmd.range,
                          function (a) {
                              return a[0].className == "ke-anchor"
                          })
            };
            h("link,image,flash,media,anchor".split(","), function (a, b) {
                var f = b.charAt(0).toUpperCase() + b.substr(1);
                h("edit,delete".split(","), function (a, e) {
                    c.addContextmenu({
                                         title: c.lang(e + f),
                                         click: function () {
                                             c.loadPlugin(b, function () {
                                                 c.plugin[b][e]();
                                                 c.hideMenu()
                                             })
                                         },
                                         cond: c.plugin["getSelected" + f],
                                         width: 150,
                                         iconClass: e == "edit" ? "ke-icon-" + b
                                             : d
                                     })
                });
                c.addContextmenu({title: "-"})
            });
            c.plugin.getSelectedTable = function () {
                return c.cmd.commonAncestor("table")
            };
            c.plugin.getSelectedRow =
                function () {
                    return c.cmd.commonAncestor("tr")
                };
            c.plugin.getSelectedCell = function () {
                return c.cmd.commonAncestor("td")
            };
            h("prop,cellprop,colinsertleft,colinsertright,rowinsertabove,rowinsertbelow,rowmerge,colmerge,rowsplit,colsplit,coldelete,rowdelete,insert,delete".split(
                ","), function (a, b) {
                var d = e(b, ["prop", "delete"]) < 0 ? c.plugin.getSelectedCell
                    : c.plugin.getSelectedTable;
                c.addContextmenu({
                                     title: c.lang("table" + b),
                                     click: function () {
                                         c.loadPlugin("table", function () {
                                             c.plugin.table[b]();
                                             c.hideMenu()
                                         })
                                     },
                                     cond: d,
                                     width: 170,
                                     iconClass: "ke-icon-table" + b
                                 })
            });
            c.addContextmenu({title: "-"});
            h("selectall,justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,indent,outdent,subscript,superscript,hr,print,bold,italic,underline,strikethrough,removeformat,unlink".split(
                ","), function (a, b) {
                f[b] && c.afterCreate(function () {
                    V(this.edit.doc, f[b], function () {
                        c.cmd.selection();
                        c.clickToolbar(b)
                    })
                });
                c.clickToolbar(b, function () {
                    c.focus().exec(b, null)
                })
            });
            c.afterCreate(function () {
                function b() {
                    f.range.moveToBookmark(e);
                    f.select();
                    ja && (a("div." + g, i).each(function () {
                        a(this).after("<br />").remove(!0)
                    }), a("span.Apple-style-span", i).remove(!0), a(
                        "span.Apple-tab-span", i).remove(!0), a("span[style]",
                                                                i)
                        .each(function () {
                            a(this).css("white-space") == "nowrap" && a(this)
                                .remove(!0)
                        }), a("meta", i).remove());
                    var d = i[0].innerHTML;
                    i.remove();
                    d !== "" && (ja && (d =
                        d.replace(/(<br>)\1/ig, "$1")), c.pasteType === 2
                    && (d =
                        d.replace(/(<(?:p|p\s[^>]*)>) *(<\/p>)/ig,
                                  ""), /schemas-microsoft-com|worddocument|mso-\w+/i.test(
                        d) ? d =
                                           W(d, c.filterMode ? c.htmlTags
                                               : a.options.htmlTags) : (d =
                        J(d, c.filterMode ? c.htmlTags : null), d =
                        c.beforeSetHtml(d))), c.pasteType === 1 && (d =
                        d.replace(/&nbsp;/ig, " "), d =
                        d.replace(/\n\s*\n/g, "\n"), d =
                        d.replace(/<br[^>]*>/ig, "\n"), d =
                        d.replace(/<\/p><p[^>]*>/ig, "\n"), d =
                        d.replace(/<[^>]+>/g, ""), d =
                        d.replace(/ {2}/g, " &nbsp;"), c.newlineTag == "p"
                        ? /\n/.test(d) && (d =
                        d.replace(/^/, "<p>").replace(/$/, "<br /></p>")
                            .replace(/\n/g, "<br /></p><p>")) : d =
                                                           d.replace(/\n/g,
                                                                     "<br />$&")), c.insertHtml(
                        d, !0))
                }

                var d = c.edit.doc, f, e, i, g = "__kindeditor_paste__", h = !1;
                a(d.body).bind("paste",
                               function (j) {
                                   if (c.pasteType
                                       === 0) {
                                       j.stop();
                                   } else if (!h) {
                                       h = !0;
                                       a("div." + g, d).remove();
                                       f = c.cmd.selection();
                                       e = f.range.createBookmark();
                                       i =
                                           a('<div class="' + g + '"></div>', d)
                                               .css({
                                                        position: "absolute",
                                                        width: "1px",
                                                        height: "1px",
                                                        overflow: "hidden",
                                                        left: "-1981px",
                                                        top: a(e.start).pos().y
                                                             + "px",
                                                        "white-space": "nowrap"
                                                    });
                                       a(d.body).append(i);
                                       if (C) {
                                           var n = f.range.get(!0);
                                           n.moveToElementText(i[0]);
                                           n.select();
                                           n.execCommand("paste");
                                           j.preventDefault()
                                       } else {
                                           f.range.selectNodeContents(
                                               i[0]), f.select();
                                       }
                                       setTimeout(function () {
                                           b();
                                           h =
                                               !1
                                       }, 0)
                                   }
                               })
            });
            c.beforeGetHtml(function (a) {
                C && O <= 8 && (a =
                    a.replace(
                        /<div\s+[^>]*data-ke-input-tag="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig,
                        function (a, b) {
                            return unescape(b)
                        }), a =
                    a.replace(/(<input)((?:\s+[^>]*)?>)/ig, function (a, b, c) {
                        if (!/\s+type="[^"]+"/i.test(a)) {
                            return b
                                   + ' type="text"'
                                   + c;
                        }
                        return a
                    }));
                return a.replace(
                    /(<(?:noscript|noscript\s[^>]*)>)([\s\S]*?)(<\/noscript>)/ig,
                    function (a, b, c, d) {
                        return b + t(c).replace(/\s+/g, " ") + d
                    }).replace(/<img[^>]*class="?ke-(flash|rm|media)"?[^>]*>/ig,
                               function (a) {
                                   var a = G(a),
                                       b = Q(a.style || ""),
                                       c = fa(a["data-ke-tag"]);
                                   c.width = r(a.width, o(r(b.width, "")));
                                   c.height = r(a.height, o(r(b.height, "")));
                                   return Ka(c)
                               })
                    .replace(/<img[^>]*class="?ke-anchor"?[^>]*>/ig,
                             function (a) {
                                 a = G(a);
                                 return '<a name="' + unescape(
                                     a["data-ke-name"]) + '"></a>'
                             }).replace(
                        /<div\s+[^>]*data-ke-script-attr="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig,
                        function (a, b, c) {
                            return "<script" + unescape(b) + ">" + unescape(c)
                                   + "<\/script>"
                        }).replace(
                        /<div\s+[^>]*data-ke-noscript-attr="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig,
                        function (a, b, c) {
                            return "<noscript" +
                                   unescape(b) + ">" + unescape(c)
                                   + "</noscript>"
                        }).replace(/(<[^>]*)data-ke-src="([^"]*)"([^>]*>)/ig,
                                   function (a, b, c) {
                                       a =
                                           a.replace(
                                               /(\s+(?:href|src)=")[^"]*(")/i,
                                               function (a, b, d) {
                                                   return b + t(c) + d
                                               });
                                       return a =
                                           a.replace(/\s+data-ke-src="[^"]*"/i,
                                                     "")
                                   })
                    .replace(/(<[^>]+\s)data-ke-(on\w+="[^"]*"[^>]*>)/ig,
                             function (a, b, c) {
                                 return b + c
                             })
            });
            c.beforeSetHtml(function (a) {
                C && O <= 8 && (a =
                    a.replace(
                        /<input[^>]*>|<(select|button)[^>]*>[\s\S]*?<\/\1>/ig,
                        function (a) {
                            var b = G(a);
                            if (Q(b.style || "").display
                                == "none") {
                                return '<div class="ke-display-none" data-ke-input-tag="'
                                       +
                                       escape(a) + '"></div>';
                            }
                            return a
                        }));
                return a.replace(
                    /<embed[^>]*type="([^"]+)"[^>]*>(?:<\/embed>)?/ig,
                    function (a) {
                        a = G(a);
                        a.src = r(a.src, "");
                        a.width = r(a.width, 0);
                        a.height = r(a.height, 0);
                        return ib(c.themesPath + "common/blank.gif", a)
                    }).replace(/<a[^>]*name="([^"]+)"[^>]*>(?:<\/a>)?/ig,
                               function (a) {
                                   var b = G(a);
                                   if (b.href !== d) {
                                       return a;
                                   }
                                   return '<img class="ke-anchor" src="'
                                          + c.themesPath
                                          + 'common/anchor.gif" data-ke-name="'
                                          + escape(b.name) + '" />'
                               })
                    .replace(/<script([^>]*)>([\s\S]*?)<\/script>/ig,
                             function (a, b, c) {
                                 return '<div class="ke-script" data-ke-script-attr="'
                                        +
                                        escape(b) + '">' + escape(c) + "</div>"
                             })
                    .replace(/<noscript([^>]*)>([\s\S]*?)<\/noscript>/ig,
                             function (a, b, c) {
                                 return '<div class="ke-noscript" data-ke-noscript-attr="'
                                        + escape(b) + '">' + escape(c)
                                        + "</div>"
                             })
                    .replace(/(<[^>]*)(href|src)="([^"]*)"([^>]*>)/ig,
                             function (a, b, c, d, f) {
                                 if (a.match(
                                         /\sdata-ke-src="[^"]*"/i)) {
                                     return a;
                                 }
                                 return a =
                                     b + c + '="' + d + '" data-ke-src="' + s(d)
                                     + '"' + f
                             }).replace(/(<[^>]+\s)(on\w+="[^"]*"[^>]*>)/ig,
                                        function (a, b, c) {
                                            return b + "data-ke-" + c
                                        })
                    .replace(/<table[^>]*\s+border="0"[^>]*>/ig, function (a) {
                        if (a.indexOf("ke-zeroborder") >=
                            0) {
                            return a;
                        }
                        return S(a, "ke-zeroborder")
                    })
            })
        })
    }
})(window);
KindEditor.lang({
                    source: "HTML\u4ee3\u7801",
                    preview: "\u9884\u89c8",
                    undo: "\u540e\u9000(Ctrl+Z)",
                    redo: "\u524d\u8fdb(Ctrl+Y)",
                    cut: "\u526a\u5207(Ctrl+X)",
                    copy: "\u590d\u5236(Ctrl+C)",
                    paste: "\u7c98\u8d34(Ctrl+V)",
                    plainpaste: "\u7c98\u8d34\u4e3a\u65e0\u683c\u5f0f\u6587\u672c",
                    wordpaste: "\u4eceWord\u7c98\u8d34",
                    selectall: "\u5168\u9009(Ctrl+A)",
                    justifyleft: "\u5de6\u5bf9\u9f50",
                    justifycenter: "\u5c45\u4e2d",
                    justifyright: "\u53f3\u5bf9\u9f50",
                    justifyfull: "\u4e24\u7aef\u5bf9\u9f50",
                    insertorderedlist: "\u7f16\u53f7",
                    insertunorderedlist: "\u9879\u76ee\u7b26\u53f7",
                    indent: "\u589e\u52a0\u7f29\u8fdb",
                    outdent: "\u51cf\u5c11\u7f29\u8fdb",
                    subscript: "\u4e0b\u6807",
                    superscript: "\u4e0a\u6807",
                    formatblock: "\u6bb5\u843d",
                    fontname: "\u5b57\u4f53",
                    fontsize: "\u6587\u5b57\u5927\u5c0f",
                    forecolor: "\u6587\u5b57\u989c\u8272",
                    hilitecolor: "\u6587\u5b57\u80cc\u666f",
                    bold: "\u7c97\u4f53(Ctrl+B)",
                    italic: "\u659c\u4f53(Ctrl+I)",
                    underline: "\u4e0b\u5212\u7ebf(Ctrl+U)",
                    strikethrough: "\u5220\u9664\u7ebf",
                    removeformat: "\u5220\u9664\u683c\u5f0f",
                    image: "\u56fe\u7247",
                    multiimage: "\u6279\u91cf\u56fe\u7247\u4e0a\u4f20",
                    flash: "Flash",
                    media: "\u89c6\u97f3\u9891",
                    table: "\u8868\u683c",
                    tablecell: "\u5355\u5143\u683c",
                    hr: "\u63d2\u5165\u6a2a\u7ebf",
                    emoticons: "\u63d2\u5165\u8868\u60c5",
                    link: "\u8d85\u7ea7\u94fe\u63a5",
                    unlink: "\u53d6\u6d88\u8d85\u7ea7\u94fe\u63a5",
                    fullscreen: "\u5168\u5c4f\u663e\u793a",
                    about: "\u5173\u4e8e",
                    print: "\u6253\u5370(Ctrl+P)",
                    filemanager: "\u6587\u4ef6\u7a7a\u95f4",
                    code: "\u63d2\u5165\u7a0b\u5e8f\u4ee3\u7801",
                    map: "Google\u5730\u56fe",
                    baidumap: "\u767e\u5ea6\u5730\u56fe",
                    lineheight: "\u884c\u8ddd",
                    clearhtml: "\u6e05\u7406HTML\u4ee3\u7801",
                    pagebreak: "\u63d2\u5165\u5206\u9875\u7b26",
                    quickformat: "\u4e00\u952e\u6392\u7248",
                    insertfile: "\u63d2\u5165\u6587\u4ef6",
                    template: "\u63d2\u5165\u6a21\u677f",
                    anchor: "\u951a\u70b9",
                    yes: "\u786e\u5b9a",
                    no: "\u53d6\u6d88",
                    close: "\u5173\u95ed",
                    editImage: "\u56fe\u7247\u5c5e\u6027",
                    deleteImage: "\u5220\u9664\u56fe\u7247",
                    editFlash: "Flash\u5c5e\u6027",
                    deleteFlash: "\u5220\u9664Flash",
                    editMedia: "\u89c6\u97f3\u9891\u5c5e\u6027",
                    deleteMedia: "\u5220\u9664\u89c6\u97f3\u9891",
                    editLink: "\u8d85\u7ea7\u94fe\u63a5\u5c5e\u6027",
                    deleteLink: "\u53d6\u6d88\u8d85\u7ea7\u94fe\u63a5",
                    editAnchor: "\u951a\u70b9\u5c5e\u6027",
                    deleteAnchor: "\u5220\u9664\u951a\u70b9",
                    tableprop: "\u8868\u683c\u5c5e\u6027",
                    tablecellprop: "\u5355\u5143\u683c\u5c5e\u6027",
                    tableinsert: "\u63d2\u5165\u8868\u683c",
                    tabledelete: "\u5220\u9664\u8868\u683c",
                    tablecolinsertleft: "\u5de6\u4fa7\u63d2\u5165\u5217",
                    tablecolinsertright: "\u53f3\u4fa7\u63d2\u5165\u5217",
                    tablerowinsertabove: "\u4e0a\u65b9\u63d2\u5165\u884c",
                    tablerowinsertbelow: "\u4e0b\u65b9\u63d2\u5165\u884c",
                    tablerowmerge: "\u5411\u4e0b\u5408\u5e76\u5355\u5143\u683c",
                    tablecolmerge: "\u5411\u53f3\u5408\u5e76\u5355\u5143\u683c",
                    tablerowsplit: "\u62c6\u5206\u884c",
                    tablecolsplit: "\u62c6\u5206\u5217",
                    tablecoldelete: "\u5220\u9664\u5217",
                    tablerowdelete: "\u5220\u9664\u884c",
                    noColor: "\u65e0\u989c\u8272",
                    pleaseSelectFile: "\u8bf7\u9009\u62e9\u6587\u4ef6\u3002",
                    invalidImg: "\u8bf7\u8f93\u5165\u6709\u6548\u7684URL\u5730\u5740\u3002\n\u53ea\u5141\u8bb8jpg,gif,bmp,png\u683c\u5f0f\u3002",
                    invalidMedia: "\u8bf7\u8f93\u5165\u6709\u6548\u7684URL\u5730\u5740\u3002\n\u53ea\u5141\u8bb8swf,flv,mp3,wav,wma,wmv,mid,avi,mpg,asf,rm,rmvb\u683c\u5f0f\u3002",
                    invalidWidth: "\u5bbd\u5ea6\u5fc5\u987b\u4e3a\u6570\u5b57\u3002",
                    invalidHeight: "\u9ad8\u5ea6\u5fc5\u987b\u4e3a\u6570\u5b57\u3002",
                    invalidBorder: "\u8fb9\u6846\u5fc5\u987b\u4e3a\u6570\u5b57\u3002",
                    invalidUrl: "\u8bf7\u8f93\u5165\u6709\u6548\u7684URL\u5730\u5740\u3002",
                    invalidRows: "\u884c\u6570\u4e3a\u5fc5\u9009\u9879\uff0c\u53ea\u5141\u8bb8\u8f93\u5165\u5927\u4e8e0\u7684\u6570\u5b57\u3002",
                    invalidCols: "\u5217\u6570\u4e3a\u5fc5\u9009\u9879\uff0c\u53ea\u5141\u8bb8\u8f93\u5165\u5927\u4e8e0\u7684\u6570\u5b57\u3002",
                    invalidPadding: "\u8fb9\u8ddd\u5fc5\u987b\u4e3a\u6570\u5b57\u3002",
                    invalidSpacing: "\u95f4\u8ddd\u5fc5\u987b\u4e3a\u6570\u5b57\u3002",
                    invalidJson: "\u670d\u52a1\u5668\u53d1\u751f\u6545\u969c\u3002",
                    uploadSuccess: "\u4e0a\u4f20\u6210\u529f\u3002",
                    cutError: "\u60a8\u7684\u6d4f\u89c8\u5668\u5b89\u5168\u8bbe\u7f6e\u4e0d\u5141\u8bb8\u4f7f\u7528\u526a\u5207\u64cd\u4f5c\uff0c\u8bf7\u4f7f\u7528\u5feb\u6377\u952e(Ctrl+X)\u6765\u5b8c\u6210\u3002",
                    copyError: "\u60a8\u7684\u6d4f\u89c8\u5668\u5b89\u5168\u8bbe\u7f6e\u4e0d\u5141\u8bb8\u4f7f\u7528\u590d\u5236\u64cd\u4f5c\uff0c\u8bf7\u4f7f\u7528\u5feb\u6377\u952e(Ctrl+C)\u6765\u5b8c\u6210\u3002",
                    pasteError: "\u60a8\u7684\u6d4f\u89c8\u5668\u5b89\u5168\u8bbe\u7f6e\u4e0d\u5141\u8bb8\u4f7f\u7528\u7c98\u8d34\u64cd\u4f5c\uff0c\u8bf7\u4f7f\u7528\u5feb\u6377\u952e(Ctrl+V)\u6765\u5b8c\u6210\u3002",
                    ajaxLoading: "\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019 ...",
                    uploadLoading: "\u4e0a\u4f20\u4e2d\uff0c\u8bf7\u7a0d\u5019 ...",
                    uploadError: "\u4e0a\u4f20\u9519\u8bef",
                    "plainpaste.comment": "\u8bf7\u4f7f\u7528\u5feb\u6377\u952e(Ctrl+V)\u628a\u5185\u5bb9\u7c98\u8d34\u5230\u4e0b\u9762\u7684\u65b9\u6846\u91cc\u3002",
                    "wordpaste.comment": "\u8bf7\u4f7f\u7528\u5feb\u6377\u952e(Ctrl+V)\u628a\u5185\u5bb9\u7c98\u8d34\u5230\u4e0b\u9762\u7684\u65b9\u6846\u91cc\u3002",
                    "code.pleaseInput": "\u8bf7\u8f93\u5165\u7a0b\u5e8f\u4ee3\u7801\u3002",
                    "link.url": "URL",
                    "link.linkType": "\u6253\u5f00\u7c7b\u578b",
                    "link.newWindow": "\u65b0\u7a97\u53e3",
                    "link.selfWindow": "\u5f53\u524d\u7a97\u53e3",
                    "flash.url": "URL",
                    "flash.width": "\u5bbd\u5ea6",
                    "flash.height": "\u9ad8\u5ea6",
                    "flash.upload": "\u4e0a\u4f20",
                    "flash.viewServer": "\u6587\u4ef6\u7a7a\u95f4",
                    "media.url": "URL",
                    "media.width": "\u5bbd\u5ea6",
                    "media.height": "\u9ad8\u5ea6",
                    "media.autostart": "\u81ea\u52a8\u64ad\u653e",
                    "media.upload": "\u4e0a\u4f20",
                    "media.viewServer": "\u6587\u4ef6\u7a7a\u95f4",
                    "image.remoteImage": "\u7f51\u7edc\u56fe\u7247",
                    "image.localImage": "\u672c\u5730\u4e0a\u4f20",
                    "image.remoteUrl": "\u56fe\u7247\u5730\u5740",
                    "image.localUrl": "\u4e0a\u4f20\u6587\u4ef6",
                    "image.size": "\u56fe\u7247\u5927\u5c0f",
                    "image.width": "\u5bbd",
                    "image.height": "\u9ad8",
                    "image.resetSize": "\u91cd\u7f6e\u5927\u5c0f",
                    "image.align": "\u5bf9\u9f50\u65b9\u5f0f",
                    "image.defaultAlign": "\u9ed8\u8ba4\u65b9\u5f0f",
                    "image.leftAlign": "\u5de6\u5bf9\u9f50",
                    "image.rightAlign": "\u53f3\u5bf9\u9f50",
                    "image.imgTitle": "\u56fe\u7247\u8bf4\u660e",
                    "image.upload": "\u6d4f\u89c8...",
                    "image.viewServer": "\u56fe\u7247\u7a7a\u95f4",
                    "multiimage.uploadDesc": "\u5141\u8bb8\u7528\u6237\u540c\u65f6\u4e0a\u4f20<%=uploadLimit%>\u5f20\u56fe\u7247\uff0c\u5355\u5f20\u56fe\u7247\u5bb9\u91cf\u4e0d\u8d85\u8fc7<%=sizeLimit%>",
                    "multiimage.startUpload": "\u5f00\u59cb\u4e0a\u4f20",
                    "multiimage.clearAll": "\u5168\u90e8\u6e05\u7a7a",
                    "multiimage.insertAll": "\u5168\u90e8\u63d2\u5165",
                    "multiimage.queueLimitExceeded": "\u6587\u4ef6\u6570\u91cf\u8d85\u8fc7\u9650\u5236\u3002",
                    "multiimage.fileExceedsSizeLimit": "\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7\u9650\u5236\u3002",
                    "multiimage.zeroByteFile": "\u65e0\u6cd5\u4e0a\u4f20\u7a7a\u6587\u4ef6\u3002",
                    "multiimage.invalidFiletype": "\u6587\u4ef6\u7c7b\u578b\u4e0d\u6b63\u786e\u3002",
                    "multiimage.unknownError": "\u53d1\u751f\u5f02\u5e38\uff0c\u65e0\u6cd5\u4e0a\u4f20\u3002",
                    "multiimage.pending": "\u7b49\u5f85\u4e0a\u4f20",
                    "multiimage.uploadError": "\u4e0a\u4f20\u5931\u8d25",
                    "filemanager.emptyFolder": "\u7a7a\u6587\u4ef6\u5939",
                    "filemanager.moveup": "\u79fb\u5230\u4e0a\u4e00\u7ea7\u6587\u4ef6\u5939",
                    "filemanager.viewType": "\u663e\u793a\u65b9\u5f0f\uff1a",
                    "filemanager.viewImage": "\u7f29\u7565\u56fe",
                    "filemanager.listImage": "\u8be6\u7ec6\u4fe1\u606f",
                    "filemanager.orderType": "\u6392\u5e8f\u65b9\u5f0f\uff1a",
                    "filemanager.fileName": "\u540d\u79f0",
                    "filemanager.fileSize": "\u5927\u5c0f",
                    "filemanager.fileType": "\u7c7b\u578b",
                    "insertfile.url": "URL",
                    "insertfile.title": "\u6587\u4ef6\u8bf4\u660e",
                    "insertfile.upload": "\u4e0a\u4f20",
                    "insertfile.viewServer": "\u6587\u4ef6\u7a7a\u95f4",
                    "table.cells": "\u5355\u5143\u683c\u6570",
                    "table.rows": "\u884c\u6570",
                    "table.cols": "\u5217\u6570",
                    "table.size": "\u5927\u5c0f",
                    "table.width": "\u5bbd\u5ea6",
                    "table.height": "\u9ad8\u5ea6",
                    "table.percent": "%",
                    "table.px": "px",
                    "table.space": "\u8fb9\u8ddd\u95f4\u8ddd",
                    "table.padding": "\u8fb9\u8ddd",
                    "table.spacing": "\u95f4\u8ddd",
                    "table.align": "\u5bf9\u9f50\u65b9\u5f0f",
                    "table.textAlign": "\u6c34\u5e73\u5bf9\u9f50",
                    "table.verticalAlign": "\u5782\u76f4\u5bf9\u9f50",
                    "table.alignDefault": "\u9ed8\u8ba4",
                    "table.alignLeft": "\u5de6\u5bf9\u9f50",
                    "table.alignCenter": "\u5c45\u4e2d",
                    "table.alignRight": "\u53f3\u5bf9\u9f50",
                    "table.alignTop": "\u9876\u90e8",
                    "table.alignMiddle": "\u4e2d\u90e8",
                    "table.alignBottom": "\u5e95\u90e8",
                    "table.alignBaseline": "\u57fa\u7ebf",
                    "table.border": "\u8fb9\u6846",
                    "table.borderWidth": "\u8fb9\u6846",
                    "table.borderColor": "\u989c\u8272",
                    "table.backgroundColor": "\u80cc\u666f\u989c\u8272",
                    "map.address": "\u5730\u5740: ",
                    "map.search": "\u641c\u7d22",
                    "baidumap.address": "\u5730\u5740: ",
                    "baidumap.search": "\u641c\u7d22",
                    "baidumap.insertDynamicMap": "\u63d2\u5165\u52a8\u6001\u5730\u56fe",
                    "anchor.name": "\u951a\u70b9\u540d\u79f0",
                    "formatblock.formatBlock": {
                        h1: "\u6807\u9898 1",
                        h2: "\u6807\u9898 2",
                        h3: "\u6807\u9898 3",
                        h4: "\u6807\u9898 4",
                        p: "\u6b63 \u6587"
                    },
                    "fontname.fontName": {
                        SimSun: "\u5b8b\u4f53",
                        NSimSun: "\u65b0\u5b8b\u4f53",
                        FangSong_GB2312: "\u4eff\u5b8b_GB2312",
                        KaiTi_GB2312: "\u6977\u4f53_GB2312",
                        SimHei: "\u9ed1\u4f53",
                        "Microsoft YaHei": "\u5fae\u8f6f\u96c5\u9ed1",
                        Arial: "Arial",
                        "Arial Black": "Arial Black",
                        "Times New Roman": "Times New Roman",
                        "Courier New": "Courier New",
                        Tahoma: "Tahoma",
                        Verdana: "Verdana"
                    },
                    "lineheight.lineHeight": [{1: "\u5355\u500d\u884c\u8ddd"},
                        {"1.5": "1.5\u500d\u884c\u8ddd"},
                        {2: "2\u500d\u884c\u8ddd"},
                        {"2.5": "2.5\u500d\u884c\u8ddd"},
                        {3: "3\u500d\u884c\u8ddd"}],
                    "template.selectTemplate": "\u53ef\u9009\u6a21\u677f",
                    "template.replaceContent": "\u66ff\u6362\u5f53\u524d\u5185\u5bb9",
                    "template.fileList": {
                        "1.html": "\u56fe\u7247\u548c\u6587\u5b57",
                        "2.html": "\u8868\u683c",
                        "3.html": "\u9879\u76ee\u7f16\u53f7"
                    }
                }, "zh_CN");
KindEditor.plugin("anchor", function (b) {
    var d = this, g = d.lang("anchor.");
    d.plugin.anchor = {
        edit: function () {
            var l = ['<div style="padding:20px;"><div class="ke-dialog-row">',
                     '<label for="keName">' + g.name + "</label>",
                     '<input class="ke-input-text" type="text" id="keName" name="name" value="" style="width:100px;" /></div></div>'].join(
                ""), l = d.createDialog({
                                                name: "anchor",
                                                width: 300,
                                                title: d.lang("anchor"),
                                                body: l,
                                                yesBtn: {
                                                    name: d.lang("yes"),
                                                    click: function () {
                                                        d.insertHtml('<a name="'
                                                                     + e.val()
                                                                     + '">')
                                                            .hideDialog().focus()
                                                    }
                                                }
                                            }).div,
                e = b('input[name="name"]', l);
            (l = d.plugin.getSelectedAnchor()) && e.val(
                unescape(l.attr("data-ke-name")));
            e[0].focus();
            e[0].select()
        }, "delete": function () {
            d.plugin.getSelectedAnchor().remove()
        }
    };
    d.clickToolbar("anchor", d.plugin.anchor.edit)
});
KindEditor.plugin("baidumap", function (b) {
    var d = this, g = d.lang("baidumap."), l = b.undef(d.mapWidth, 558),
        e = b.undef(d.mapHeight, 360);
    d.clickToolbar("baidumap", function () {
        function h() {
            t = q[0].contentWindow;
            p = b.iframeDoc(q)
        }

        var m = ['<div style="padding:10px 20px;"><div class="ke-header"><div class="ke-left">',
                 g.address
                 + ' <input id="kindeditor_plugin_map_address" name="address" class="ke-input-text" value="" style="width:200px;" /> ',
                 '<span class="ke-button-common ke-button-outer">',
                 '<input type="button" name="searchBtn" class="ke-button-common ke-button" value="'
                 +
                 g.search + '" />', '</span></div><div class="ke-right">',
                 '<input type="checkbox" id="keInsertDynamicMap" name="insertDynamicMap" value="1" /> <label for="keInsertDynamicMap">'
                 + g.insertDynamicMap + "</label>",
                 '</div><div class="ke-clearfix"></div></div>',
                 '<div class="ke-map" style="width:' + l + "px;height:" + e
                 + 'px;"></div>', "</div>"].join(""), m = d.createDialog({
                                                                             name: "baidumap",
                                                                             width: l
                                                                                    + 42,
                                                                             title: d.lang(
                                                                                 "baidumap"),
                                                                             body: m,
                                                                             yesBtn: {
                                                                                 name: d.lang(
                                                                                     "yes"),
                                                                                 click: function () {
                                                                                     var b = t.map,
                                                                                         g = b.getCenter(),
                                                                                         g = g.lng
                                                                                             + ","
                                                                                             + g.lat,
                                                                                         b = b.getZoom(),
                                                                                         b = [s[0].checked
                                                                                                  ? d.pluginsPath
                                                                                                    + "baidumap/index.htmlbak"
                                                                                                  : "http://api.map.baidu.com/staticimage",
                                                                                              "?center="
                                                                                              + encodeURIComponent(
                                                                                                  g),
                                                                                              "&zoom="
                                                                                              + encodeURIComponent(
                                                                                                  b),
                                                                                              "&width="
                                                                                              + l,
                                                                                              "&height="
                                                                                              + e,
                                                                                              "&markers="
                                                                                              + encodeURIComponent(
                                                                                                  g),
                                                                                              "&markerStyles="
                                                                                              + encodeURIComponent(
                                                                                                  "l,A")].join(
                                                                                             "");
                                                                                     s[0].checked
                                                                                         ? d.insertHtml('<iframe src="'
                                                                                                        + b
                                                                                                        + '" frameborder="0" style="width:'
                                                                                                        + (l
                                                                                                        + 2)
                                                                                                        + "px;height:"
                                                                                                        + (e
                                                                                                        + 2)
                                                                                                        + 'px;"></iframe>')
                                                                                         : d.exec(
                                                                                         "insertimage",
                                                                                         b);
                                                                                     d.hideDialog()
                                                                                         .focus()
                                                                                 }
                                                                             },
                                                                             beforeRemove: function () {
                                                                                 o.remove();
                                                                                 p
                                                                                 && p.write(
                                                                                     "");
                                                                                 q.remove()
                                                                             }
                                                                         }),
            n = m.div, j = b('[name="address"]', n),
            o = b('[name="searchBtn"]', n),
            s = b('[name="insertDynamicMap"]', m.div), t, p,
            q = b('<iframe class="ke-textarea" frameborder="0" src="'
                  + d.pluginsPath + 'baidumap/map.html" style="width:' + l
                  + "px;height:" + e + 'px;"></iframe>');
        q.bind("load", function () {
            q.unbind("load");
            b.IE ? h() : setTimeout(h, 0)
        });
        b(".ke-map", n).replaceWith(q);
        o.click(function () {
            t.search(j.val())
        })
    })
});
KindEditor.plugin("clearhtml", function (b) {
    var d = this;
    d.clickToolbar("clearhtml", function () {
        d.focus();
        var g = d.html(),
            g = g.replace(/(<script[^>]*>)([\s\S]*?)(<\/script>)/ig, ""),
            g = g.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/ig, ""),
            g = b.formatHtml(g, {
                a: ["href", "target"],
                embed: ["src", "width", "height", "type", "loop", "autostart",
                        "quality", ".width", ".height", "align",
                        "allowscriptaccess"],
                img: ["src", "width", "height", "border", "alt", "title",
                      ".width", ".height"],
                table: ["border"],
                "td,th": ["rowspan", "colspan"],
                "div,hr,br,tbody,tr,p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6": []
            });
        d.html(g);
        d.cmd.selection(!0);
        d.addBookmark()
    })
});
KindEditor.plugin("code", function (b) {
    var d = this;
    d.clickToolbar("code", function () {
        var g = d.lang("code."), l = d.createDialog({
                                                        name: "code",
                                                        width: 450,
                                                        title: d.lang("code"),
                                                        body: '<div style="padding:10px 20px;"><div class="ke-dialog-row"><select class="ke-code-type"><option value="js">JavaScript</option><option value="html">HTML</option><option value="css">CSS</option><option value="php">PHP</option><option value="pl">Perl</option><option value="py">Python</option><option value="rb">Ruby</option><option value="java">Java</option><option value="vb">ASP/VB</option><option value="cpp">C/C++</option><option value="cs">C#</option><option value="xml">XML</option><option value="bsh">Shell</option><option value="">Other</option></select></div><textarea class="ke-textarea" style="width:408px;height:260px;"></textarea></div>',
                                                        yesBtn: {
                                                            name: d.lang("yes"),
                                                            click: function () {
                                                                var h = b(
                                                                    ".ke-code-type",
                                                                    l.div)
                                                                        .val(),
                                                                    m = e.val(),
                                                                    h = '<pre class="prettyprint'
                                                                        + (h
                                                                           === ""
                                                                            ? ""
                                                                            : " lang-"
                                                                        + h)
                                                                        + '">\n'
                                                                        + b.escape(
                                                                            m)
                                                                        + "</pre> ";
                                                                b.trim(m) === ""
                                                                    ? (alert(
                                                                    g.pleaseInput), e[0].focus())
                                                                    : d.insertHtml(
                                                                    h)
                                                                    .hideDialog()
                                                                    .focus()
                                                            }
                                                        }
                                                    }),
            e = b("textarea", l.div);
        e[0].focus()
    })
});
KindEditor.plugin("emoticons", function (b) {
    var d = this, g = d.emoticonsPath || d.pluginsPath + "emoticons/images/",
        l = d.allowPreviewEmoticons === void 0 ? !0 : d.allowPreviewEmoticons,
        e = 1;
    d.clickToolbar("emoticons", function () {
        function h(e, h, j) {
            w ? e.mouseover(function () {
                h > D ? (w.css("left", 0), w.css("right", "")) : (w.css("left",
                                                                        ""), w.css(
                    "right", 0));
                H.attr("src", g + j + ".gif");
                b(this).addClass("ke-on")
            }) : e.mouseover(function () {
                b(this).addClass("ke-on")
            });
            e.mouseout(function () {
                b(this).removeClass("ke-on")
            });
            e.click(function (b) {
                d.insertHtml('<img src="' +
                             g + j + '.gif" border="0" alt="" />').hideMenu()
                    .focus();
                b.stop()
            })
        }

        function m(d, e) {
            var j = document.createElement("table");
            e.append(j);
            w && (b(j).mouseover(function () {
                w.show("block")
            }), b(j).mouseout(function () {
                w.hide()
            }), A.push(b(j)));
            j.className = "ke-table";
            j.cellPadding = 0;
            j.cellSpacing = 0;
            j.border = 0;
            for (var n = (d - 1) * q + p, m = 0; m < s;
                 m++) {
                for (var o = j.insertRow(m), l = 0; l < t; l++) {
                    var r = b(o.insertCell(l));
                    r.addClass("ke-cell");
                    h(r, l, n);
                    var v = b('<span class="ke-img"></span>')
                        .css("background-position", "-" + 24 * n + "px 0px")
                        .css("background-image",
                            "url(" + g + "static.gif)");
                    r.append(v);
                    A.push(r);
                    n++
                }
            }
            return j
        }

        function n() {
            b.each(A, function () {
                this.unbind()
            })
        }

        function j(b, d) {
            b.click(function (b) {
                n();
                v.parentNode.removeChild(v);
                E.remove();
                v = m(d, r);
                o(d);
                e = d;
                b.stop()
            })
        }

        function o(d) {
            E = b('<div class="ke-page"></div>');
            r.append(E);
            for (var e = 1; e <= z; e++) {
                if (d !== e) {
                    var g = b('<a href="javascript:;">[' + e + "]</a>");
                    j(g, e);
                    E.append(g);
                    A.push(g)
                } else {
                    E.append(b("@[" + e + "]"));
                }
                E.append(b("@&nbsp;"))
            }
        }

        var s = 5, t = 9, p = 0, q = s * t, z = Math.ceil(135 / q),
            D = Math.floor(t / 2),
            r = b('<div class="ke-plugin-emoticons"></div>'),
            A = [];
        d.createMenu({
                         name: "emoticons", beforeRemove: function () {
                n()
            }
                     }).div.append(r);
        var w, H;
        l && (w = b('<div class="ke-preview"></div>').css("right", 0), H =
            b('<img class="ke-preview-img" src="' + g + p
              + '.gif" />'), r.append(w), w.append(H));
        var v = m(e, r), E;
        o(e)
    })
});
KindEditor.plugin("filemanager", function (b) {
    function d(b, d) {
        d.is_dir ? b.attr("title", d.filename) : b.attr("title", d.filename
                                                                 + " ("
                                                                 + Math.ceil(d.filesize
                                                                             / 1024)
                                                                 + "KB, "
                                                                 + d.datetime
                                                                 + ")")
    }

    var g = this, l = b.undef(g.fileManagerJson, g.basePath
                                                 + "php/file_manager_json.php"),
        e = g.pluginsPath + "filemanager/images/", h = g.lang("filemanager.");
    g.plugin.filemanagerDialog = function (m) {
        function n(d, e, h) {
            d = "path=" + d + "&order=" + e + "&dir=" + z;
            A.showLoading(g.lang("ajaxLoading"));
            b.ajax(b.addParam(l, d + "&" + (new Date).getTime()), function (b) {
                A.hideLoading();
                h(b)
            })
        }

        function j(d, e, g, h) {
            var j = b.formatUrl(e.current_url + g.filename, "absolute"),
                o = encodeURIComponent(e.current_dir_path + g.filename + "/");
            g.is_dir ? d.click(function () {
                n(o, E.val(), h)
            }) : g.is_photo ? d.click(function () {
                r.call(this, j, g.filename)
            }) : d.click(function () {
                r.call(this, j, g.filename)
            });
            U.push(d)
        }

        function o(d, e) {
            function g() {
                v.val() == "VIEW" ? n(d.current_dir_path, E.val(), t) : n(
                    d.current_dir_path, E.val(), s)
            }

            b.each(U, function () {
                this.unbind()
            });
            H.unbind();
            v.unbind();
            E.unbind();
            d.current_dir_path && H.click(function () {
                n(d.moveup_dir_path,
                  E.val(), e)
            });
            v.change(g);
            E.change(g);
            w.html("")
        }

        function s(d) {
            o(d, s);
            var g = document.createElement("table");
            g.className = "ke-table";
            g.cellPadding = 0;
            g.cellSpacing = 0;
            g.border = 0;
            w.append(g);
            for (var n = d.file_list, m = 0, l = n.length; m < l; m++) {
                var q = n[m], t = b(g.insertRow(m));
                t.mouseover(function () {
                    b(this).addClass("ke-on")
                }).mouseout(function () {
                    b(this).removeClass("ke-on")
                });
                var p = b('<img src="' + (e + (q.is_dir ? "folder-16.gif"
                    : "file-16.gif")) + '" width="16" height="16" alt="'
                          + q.filename + '" align="absmiddle" />'), p =
                    b(t[0].insertCell(0)).addClass("ke-cell ke-name").append(p)
                        .append(document.createTextNode(" " + q.filename));
                !q.is_dir || q.has_file ? (t.css("cursor", "pointer"), p.attr(
                    "title", q.filename), j(p, d, q, s)) : p.attr("title",
                                                                  h.emptyFolder);
                b(t[0].insertCell(1)).addClass("ke-cell ke-size")
                    .html(q.is_dir ? "-" : Math.ceil(q.filesize / 1024) + "KB");
                b(t[0].insertCell(2)).addClass("ke-cell ke-datetime")
                    .html(q.datetime)
            }
        }

        function t(g) {
            o(g, t);
            for (var n = g.file_list, m = 0, l = n.length; m < l; m++) {
                var s = n[m],
                    q = b('<div class="ke-inline-block ke-item"></div>');
                w.append(q);
                var p = b('<div class="ke-inline-block ke-photo"></div>')
                    .mouseover(function () {
                        b(this).addClass("ke-on")
                    }).mouseout(function () {
                        b(this).removeClass("ke-on")
                    });
                q.append(p);
                var r = g.current_url + s.filename,
                    r = b('<img src="' + (s.is_dir ? e + "folder-64.gif"
                        : s.is_photo ? r : e + "file-64.gif")
                          + '" width="80" height="80" alt="' + s.filename
                          + '" />');
                !s.is_dir || s.has_file ? (p.css("cursor", "pointer"), d(p,
                                                                         s), j(
                    p, g, s, t)) : p.attr("title", h.emptyFolder);
                p.append(r);
                q.append('<div class="ke-name" title="' + s.filename + '">' +
                         s.filename + "</div>")
            }
        }

        var p = b.undef(m.width, 650), q = b.undef(m.height, 510),
            z = b.undef(m.dirName, ""),
            D = b.undef(m.viewType, "VIEW").toUpperCase(), r = m.clickFn,
            m = ['<div style="padding:10px 20px;"><div class="ke-plugin-filemanager-header"><div class="ke-left">',
                 '<img class="ke-inline-block" name="moveupImg" src="' + e
                 + 'go-up.gif" width="16" height="16" border="0" alt="" /> ',
                 '<a class="ke-inline-block" name="moveupLink" href="javascript:;">'
                 + h.moveup + "</a>", '</div><div class="ke-right">', h.viewType
                                                                      + ' <select class="ke-inline-block" name="viewType">',
                 '<option value="VIEW">' + h.viewImage + "</option>",
                 '<option value="LIST">' + h.listImage + "</option>",
                 "</select> ", h.orderType
                               + ' <select class="ke-inline-block" name="orderType">',
                 '<option value="NAME">' + h.fileName + "</option>",
                 '<option value="SIZE">' + h.fileSize + "</option>",
                 '<option value="TYPE">' + h.fileType + "</option>",
                 '</select></div><div class="ke-clearfix"></div></div><div class="ke-plugin-filemanager-body"></div></div>'].join(
                ""), A = g.createDialog({
                                            name: "filemanager",
                                            width: p,
                                            height: q,
                                            title: g.lang("filemanager"),
                                            body: m
                                        }), p = A.div,
            w = b(".ke-plugin-filemanager-body", p);
        b('[name="moveupImg"]', p);
        var H = b('[name="moveupLink"]', p);
        b('[name="viewServer"]', p);
        var v = b('[name="viewType"]', p), E = b('[name="orderType"]', p),
            U = [];
        v.val(D);
        n("", E.val(), D == "VIEW" ? t : s);
        return A
    }
});
KindEditor.plugin("flash", function (b) {
    var d = this, g = d.lang("flash."), l = b.undef(d.allowFlashUpload, !0),
        e = b.undef(d.allowFileManager, !1), h = b.undef(d.formatUploadUrl, !0),
        m = b.undef(d.extraFileUploadParams, {}),
        n = b.undef(d.filePostName, "imgFile"),
        j = b.undef(d.uploadJson, d.basePath + "php/upload_json.php");
    d.plugin.flash = {
        edit: function () {
            var o = ['<div style="padding:20px;"><div class="ke-dialog-row">',
                     '<label for="keUrl" style="width:60px;">' + g.url
                     + "</label>",
                     '<input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:160px;" /> &nbsp;',
                     '<input type="button" class="ke-upload-button" value="'
                     + g.upload + '" /> &nbsp;',
                     '<span class="ke-button-common ke-button-outer">',
                     '<input type="button" class="ke-button-common ke-button" name="viewServer" value="'
                     + g.viewServer + '" />',
                     '</span></div><div class="ke-dialog-row">',
                     '<label for="keWidth" style="width:60px;">' + g.width
                     + "</label>",
                     '<input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="550" maxlength="4" /> </div><div class="ke-dialog-row">',
                     '<label for="keHeight" style="width:60px;">' +
                     g.height + "</label>",
                     '<input type="text" id="keHeight" class="ke-input-text ke-input-number" name="height" value="400" maxlength="4" /> </div></div>'].join(
                ""), s = d.createDialog({
                                                name: "flash",
                                                width: 450,
                                                title: d.lang("flash"),
                                                body: o,
                                                yesBtn: {
                                                    name: d.lang("yes"),
                                                    click: function () {
                                                        var e = b.trim(p.val()),
                                                            g = q.val(),
                                                            h = z.val();
                                                        e == "http://"
                                                        || b.invalidUrl(e) ? (alert(
                                                            d.lang(
                                                                "invalidUrl")), p[0].focus())
                                                            : /^\d*$/.test(g)
                                                            ? /^\d*$/.test(h) ? (e =
                                                                b.mediaImg(d.themesPath
                                                                           + "common/blank.gif",
                                                                    {
                                                                        src: e,
                                                                        type: b.mediaType(
                                                                            ".swf"),
                                                                        width: g,
                                                                        height: h,
                                                                        quality: "high"
                                                                    }), d.insertHtml(
                                                                e).hideDialog()
                                                                .focus()) : (alert(
                                                                d.lang(
                                                                    "invalidHeight")), z[0].focus())
                                                            : (alert(d.lang(
                                                                "invalidWidth")), q[0].focus())
                                                    }
                                                }
                                            }), t = s.div, p = b('[name="url"]', t),
                o = b('[name="viewServer"]', t), q = b('[name="width"]', t),
                z = b('[name="height"]', t);
            p.val("http://");
            if (l) {
                var D = b.uploadbutton({
                                           button: b(".ke-upload-button", t)[0],
                                           fieldName: n,
                                           extraParams: m,
                                           url: b.addParam(j, "dir=flash"),
                                           afterUpload: function (e) {
                                               s.hideLoading();
                                               if (e.error === 0) {
                                                   var g = e.url;
                                                   h && (g =
                                                       b.formatUrl(g,
                                                                   "absolute"));
                                                   p.val(g);
                                                   d.afterUpload
                                                   && d.afterUpload.call(d, g,
                                                                         e,
                                                                         "flash");
                                                   alert(
                                                       d.lang("uploadSuccess"))
                                               } else {
                                                   alert(e.message)
                                               }
                                           },
                                           afterError: function (b) {
                                               s.hideLoading();
                                               d.errorDialog(b)
                                           }
                                       });
                D.fileBox.change(function () {
                    s.showLoading(d.lang("uploadLoading"));
                    D.submit()
                })
            } else {
                b(".ke-upload-button", t).hide();
            }
            e ? o.click(function () {
                d.loadPlugin("filemanager", function () {
                    d.plugin.filemanagerDialog({
                                                   viewType: "LIST",
                                                   dirName: "flash",
                                                   clickFn: function (e) {
                                                       d.dialogs.length > 1
                                                       && (b('[name="url"]', t)
                                                           .val(
                                                               e), d.afterSelectFile
                                                       && d.afterSelectFile.call(
                                                           d,
                                                           e), d.hideDialog())
                                                   }
                                               })
                })
            }) : o.hide();
            if (o = d.plugin.getSelectedFlash()) {
                var r = b.mediaAttrs(o.attr("data-ke-tag"));
                p.val(r.src);
                q.val(b.removeUnit(o.css("width")) || r.width || 0);
                z.val(b.removeUnit(o.css("height")) || r.height || 0)
            }
            p[0].focus();
            p[0].select()
        }, "delete": function () {
            d.plugin.getSelectedFlash().remove();
            d.addBookmark()
        }
    };
    d.clickToolbar("flash", d.plugin.flash.edit)
});
KindEditor.plugin("image", function (b) {
    var d = this, g = b.undef(d.allowImageUpload, !0),
        l = b.undef(d.allowImageRemote, !0), e = b.undef(d.formatUploadUrl, !0),
        h = b.undef(d.allowFileManager, !1),
        m = b.undef(d.uploadJson, d.basePath + "php/upload_json.php"),
        n = b.undef(d.imageTabIndex, 0), j = d.pluginsPath + "image/images/",
        o = b.undef(d.extraFileUploadParams, {}),
        s = b.undef(d.filePostName, "imgFile"),
        t = b.undef(d.fillDescAfterUploadImage, !1), p = d.lang("image.");
    d.plugin.imageDialog = function (g) {
        function n(b, d) {
            Q.val(b);
            G.val(d);
            T =
                b;
            fa = d
        }

        b.undef(g.imageWidth, "");
        b.undef(g.imageHeight, "");
        b.undef(g.imageTitle, "");
        b.undef(g.imageAlign, "");
        var l = b.undef(g.showRemote, !0), r = b.undef(g.showLocal, !0),
            A = b.undef(g.tabIndex, 0), w = g.clickFn,
            H = "kindeditor_upload_iframe_" + (new Date).getTime(), v = [], E;
        for (E in o) {
            v.push('<input type="hidden" name="' + E + '" value="'
                   + o[E] + '" />');
        }
        var v = ['<div style="padding:20px;"><div class="tabs"></div><div class="tab1" style="display:none;"><div class="ke-dialog-row">',
                 '<label for="remoteUrl" style="width:60px;">' +
                 p.remoteUrl + "</label>",
                 '<input type="text" id="remoteUrl" class="ke-input-text" name="url" value="" style="width:200px;" /> &nbsp;<span class="ke-button-common ke-button-outer">',
                 '<input type="button" class="ke-button-common ke-button" name="viewServer" value="'
                 + p.viewServer + '" />',
                 '</span></div><div class="ke-dialog-row">',
                 '<label for="remoteWidth" style="width:60px;">' + p.size
                 + "</label>", p.width
                               + ' <input type="text" id="remoteWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> ',
                 p.height
                 + ' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> ',
                 '<img class="ke-refresh-btn" src="' + j
                 + 'refresh.png" width="16" height="16" alt="" style="cursor:pointer;" title="'
                 + p.resetSize + '" />', '</div><div class="ke-dialog-row">',
                 '<label style="width:60px;">' + p.align + "</label>",
                 '<input type="radio" name="align" class="ke-inline-block" value="" checked="checked" /> <img name="defaultImg" src="'
                 + j + 'align_top.gif" width="23" height="25" alt="" />',
                 ' <input type="radio" name="align" class="ke-inline-block" value="left" /> <img name="leftImg" src="'
                 +
                 j + 'align_left.gif" width="23" height="25" alt="" />',
                 ' <input type="radio" name="align" class="ke-inline-block" value="right" /> <img name="rightImg" src="'
                 + j + 'align_right.gif" width="23" height="25" alt="" />',
                 '</div><div class="ke-dialog-row">',
                 '<label for="remoteTitle" style="width:60px;">' + p.imgTitle
                 + "</label>",
                 '<input type="text" id="remoteTitle" class="ke-input-text" name="title" value="" style="width:200px;" /></div></div><div class="tab2" style="display:none;">',
                 '<iframe name="' + H + '" style="display:none;"></iframe>',
                 '<form class="ke-upload-area ke-form" method="post" enctype="multipart/form-data" target="'
                 + H + '" action="' + b.addParam(m, "dir=image") + '">',
                 '<div class="ke-dialog-row">', v.join(""),
                 '<label style="width:60px;">' + p.localUrl + "</label>",
                 '<input type="text" name="localUrl" class="ke-input-text" tabindex="-1" style="width:200px;" readonly="true" /> &nbsp;',
                 '<input type="button" class="ke-upload-button" value="'
                 + p.upload + '" />', "</div></form></div></div>"].join(""),
            U = d.createDialog({
                                   name: "image",
                                   width: r ||
                                          h ? 450 : 400,
                                   height: r && l ? 300 : 250,
                                   title: d.lang("image"),
                                   body: v,
                                   yesBtn: {
                                       name: d.lang("yes"), click: function () {
                                           if (!U.isLoading) {
                                               if (r && l && J
                                                   && J.selectedIndex
                                                      === 1
                                                   || !l) {
                                                   W.fileBox.val()
                                                   == ""
                                                       ? alert(
                                                       d.lang(
                                                           "pleaseSelectFile"))
                                                       : (U.showLoading(d.lang(
                                                       "uploadLoading")), W.submit(), ea.val(
                                                       ""));
                                               } else {
                                                   var e = b.trim(N.val()),
                                                       g = Q.val(), h = G.val(),
                                                       j = Y.val(), n = "";
                                                   M.each(function () {
                                                       if (this.checked) {
                                                           return n =
                                                               this.value, !1
                                                       }
                                                   });
                                                   e == "http://"
                                                   || b.invalidUrl(e)
                                                       ? (alert(d.lang(
                                                       "invalidUrl")), N[0].focus())
                                                       : /^\d*$/.test(g)
                                                       ? /^\d*$/.test(h)
                                                             ? w.call(d,
                                                                      e,
                                                                      j,
                                                                      g,
                                                                      h,
                                                                      0,
                                                                      n)
                                                             : (alert(d.lang(
                                                               "invalidHeight")), G[0].focus())
                                                       : (alert(d.lang(
                                                           "invalidWidth")), Q[0].focus())
                                               }
                                           }
                                       }
                                   },
                                   beforeRemove: function () {
                                       V.unbind();
                                       Q.unbind();
                                       G.unbind();
                                       S.unbind()
                                   }
                               }), F = U.div, N = b('[name="url"]', F),
            ea = b('[name="localUrl"]', F), V = b('[name="viewServer"]', F),
            Q = b('.tab1 [name="width"]', F), G = b('.tab1 [name="height"]', F),
            S = b(".ke-refresh-btn", F), Y = b('.tab1 [name="title"]', F),
            M = b('.tab1 [name="align"]', F), J;
        l && r ? (J = b.tabs({
                                 src: b(".tabs", F), afterSelect: function () {
            }
                             }), J.add({
                                           title: p.remoteImage,
                                           panel: b(".tab1",
                                                    F)
                                       }), J.add(
            {title: p.localImage, panel: b(".tab2", F)}), J.select(A)) : l ? b(
            ".tab1", F).show() : r && b(".tab2", F).show();
        var W = b.uploadbutton({
                                   button: b(".ke-upload-button", F)[0],
                                   fieldName: s,
                                   form: b(".ke-form", F),
                                   target: H,
                                   width: 60,
                                   afterUpload: function (g) {
                                       U.hideLoading();
                                       if (g.error === 0) {
                                           var h = g.url;
                                           e && (h =
                                               b.formatUrl(h, "absolute"));
                                           d.afterUpload && d.afterUpload.call(
                                               d, h, g, "image");
                                           t ? (b(".ke-dialog-row #remoteUrl",
                                                  F).val(h), b(".ke-tabs-li",
                                                               F)[0].click(), b(
                                               ".ke-refresh-btn", F).click())
                                               : w.call(d, h, g.title, g.width,
                                                        g.height,
                                                        g.border, g.align)
                                       } else {
                                           alert(g.message)
                                       }
                                   },
                                   afterError: function (b) {
                                       U.hideLoading();
                                       d.errorDialog(b)
                                   }
                               });
        W.fileBox.change(function () {
            ea.val(W.fileBox.val())
        });
        h ? V.click(function () {
            d.loadPlugin("filemanager", function () {
                d.plugin.filemanagerDialog({
                                               viewType: "VIEW",
                                               dirName: "image",
                                               clickFn: function (e) {
                                                   d.dialogs.length > 1 && (b(
                                                       '[name="url"]', F).val(
                                                       e), d.afterSelectFile
                                                   && d.afterSelectFile.call(d,
                                                                             e), d.hideDialog())
                                               }
                                           })
            })
        }) : V.hide();
        var T = 0, fa = 0;
        S.click(function () {
            var d = b('<img src="' + N.val() + '" />', document).css({
                                                                         position: "absolute",
                                                                         visibility: "hidden",
                                                                         top: 0,
                                                                         left: "-1000px"
                                                                     });
            d.bind("load", function () {
                n(d.width(), d.height());
                d.remove()
            });
            b(document.body).append(d)
        });
        Q.change(function () {
            T > 0 && G.val(Math.round(fa / T * parseInt(this.value, 10)))
        });
        G.change(function () {
            fa > 0 && Q.val(Math.round(T / fa * parseInt(this.value, 10)))
        });
        N.val(g.imageUrl);
        n(g.imageWidth, g.imageHeight);
        Y.val(g.imageTitle);
        M.each(function () {
            if (this.value === g.imageAlign) {
                return this.checked = !0, !1
            }
        });
        l && A === 0 && (N[0].focus(), N[0].select());
        return U
    };
    d.plugin.image = {
        edit: function () {
            var b =
                d.plugin.getSelectedImage();
            d.plugin.imageDialog({
                                     imageUrl: b ? b.attr("data-ke-src")
                                         : "http://",
                                     imageWidth: b ? b.width() : "",
                                     imageHeight: b ? b.height() : "",
                                     imageTitle: b ? b.attr("title") : "",
                                     imageAlign: b ? b.attr("align") : "",
                                     showRemote: l,
                                     showLocal: g,
                                     tabIndex: b ? 0 : n,
                                     clickFn: function (b, e, g, h, j, n) {
                                         d.exec("insertimage", b, e, g, h, j,
                                                n);
                                         setTimeout(function () {
                                             d.hideDialog().focus()
                                         }, 0)
                                     }
                                 })
        }, "delete": function () {
            var b = d.plugin.getSelectedImage();
            b.parent().name == "a" && (b = b.parent());
            b.remove();
            d.addBookmark()
        }
    };
    d.clickToolbar("image",
                   d.plugin.image.edit)
});
KindEditor.plugin("insertfile", function (b) {
    var d = this, g = b.undef(d.allowFileUpload, !0),
        l = b.undef(d.allowFileManager, !1), e = b.undef(d.formatUploadUrl, !0),
        h = b.undef(d.uploadJson, d.basePath + "php/upload_json.php"),
        m = b.undef(d.extraFileUploadParams, {}),
        n = b.undef(d.filePostName, "imgFile"), j = d.lang("insertfile.");
    d.plugin.fileDialog = function (o) {
        var s = b.undef(o.fileUrl, "http://"), t = b.undef(o.fileTitle, ""),
            p = o.clickFn,
            o = ['<div style="padding:20px;"><div class="ke-dialog-row">',
                 '<label for="keUrl" style="width:60px;">' + j.url +
                 "</label>",
                 '<input type="text" id="keUrl" name="url" class="ke-input-text" style="width:160px;" /> &nbsp;',
                 '<input type="button" class="ke-upload-button" value="'
                 + j.upload + '" /> &nbsp;',
                 '<span class="ke-button-common ke-button-outer">',
                 '<input type="button" class="ke-button-common ke-button" name="viewServer" value="'
                 + j.viewServer + '" />',
                 '</span></div><div class="ke-dialog-row">',
                 '<label for="keTitle" style="width:60px;">' + j.title
                 + "</label>",
                 '<input type="text" id="keTitle" class="ke-input-text" name="title" value="" style="width:160px;" /></div></div></form></div>'].join(
                ""),
            q = d.createDialog({
                                   name: "insertfile",
                                   width: 450,
                                   title: d.lang("insertfile"),
                                   body: o,
                                   yesBtn: {
                                       name: d.lang("yes"),
                                       click: function () {
                                           var e = b.trim(D.val()), g = r.val();
                                           e == "http://" || b.invalidUrl(e)
                                               ? (alert(d.lang(
                                               "invalidUrl")), D[0].focus())
                                               : (b.trim(g) === "" && (g =
                                                   e), p.call(d, e, g))
                                       }
                                   }
                               }), z = q.div, D = b('[name="url"]', z),
            o = b('[name="viewServer"]', z), r = b('[name="title"]', z);
        if (g) {
            var A = b.uploadbutton({
                                       button: b(".ke-upload-button", z)[0],
                                       fieldName: n,
                                       url: b.addParam(h, "dir=file"),
                                       extraParams: m,
                                       afterUpload: function (g) {
                                           q.hideLoading();
                                           if (g.error === 0) {
                                               var h = g.url;
                                               e && (h =
                                                   b.formatUrl(h, "absolute"));
                                               D.val(h);
                                               d.afterUpload
                                               && d.afterUpload.call(d, h, g,
                                                                     "insertfile");
                                               alert(d.lang("uploadSuccess"))
                                           } else {
                                               alert(g.message)
                                           }
                                       },
                                       afterError: function (b) {
                                           q.hideLoading();
                                           d.errorDialog(b)
                                       }
                                   });
            A.fileBox.change(function () {
                q.showLoading(d.lang("uploadLoading"));
                A.submit()
            })
        } else {
            b(".ke-upload-button", z).hide();
        }
        l ? o.click(function () {
            d.loadPlugin("filemanager", function () {
                d.plugin.filemanagerDialog({
                                               viewType: "LIST",
                                               dirName: "file",
                                               clickFn: function (e) {
                                                   d.dialogs.length >
                                                   1 && (b('[name="url"]', z)
                                                       .val(
                                                           e), d.afterSelectFile
                                                   && d.afterSelectFile.call(d,
                                                                             e), d.hideDialog())
                                               }
                                           })
            })
        }) : o.hide();
        D.val(s);
        r.val(t);
        D[0].focus();
        D[0].select()
    };
    d.clickToolbar("insertfile", function () {
        d.plugin.fileDialog({
                                clickFn: function (b, e) {
                                    d.insertHtml('<a class="ke-insertfile" href="'
                                                 + b + '" data-ke-src="' + b
                                                 + '" target="_blank">' + e
                                                 + "</a>").hideDialog().focus()
                                }
                            })
    })
});
KindEditor.plugin("lineheight", function (b) {
    var d = this, g = d.lang("lineheight.");
    d.clickToolbar("lineheight", function () {
        var l = "", e = d.cmd.commonNode({"*": ".line-height"});
        e && (l = e.css("line-height"));
        var h = d.createMenu({name: "lineheight", width: 150});
        b.each(g.lineHeight, function (e, g) {
            b.each(g, function (b, e) {
                h.addItem({
                              title: e, checked: l === b, click: function () {
                        d.cmd.toggle('<span style="line-height:' + b
                                     + ';"></span>',
                            {span: ".line-height=" + b});
                        d.updateState();
                        d.addBookmark();
                        d.hideMenu()
                    }
                          })
            })
        })
    })
});
KindEditor.plugin("link", function (b) {
    var d = this;
    d.plugin.link = {
        edit: function () {
            var g = d.lang("link."),
                l = '<div style="padding:20px;"><div class="ke-dialog-row"><label for="keUrl" style="width:60px;">'
                    + g.url
                    + '</label><input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:260px;" /></div><div class="ke-dialog-row""><label for="keType" style="width:60px;">'
                    + g.linkType
                    + '</label><select id="keType" name="type"></select></div></div>',
                l = d.createDialog({
                                       name: "link",
                                       width: 450,
                                       title: d.lang("link"),
                                       body: l,
                                       yesBtn: {
                                           name: d.lang("yes"),
                                           click: function () {
                                               var g = b.trim(e.val());
                                               g == "http://" || b.invalidUrl(g)
                                                   ? (alert(d.lang(
                                                   "invalidUrl")), e[0].focus())
                                                   : d.exec("createlink", g,
                                                            h.val())
                                                   .hideDialog().focus()
                                           }
                                       }
                                   }).div, e = b('input[name="url"]', l),
                h = b('select[name="type"]', l);
            e.val("http://");
            h[0].options[0] = new Option(g.newWindow, "_blank");
            h[0].options[1] = new Option(g.selfWindow, "");
            d.cmd.selection();
            if (g = d.plugin.getSelectedLink()) {
                d.cmd.range.selectNode(
                    g[0]), d.cmd.select(), e.val(g.attr("data-ke-src")), h.val(
                    g.attr("target"));
            }
            e[0].focus();
            e[0].select()
        }, "delete": function () {
            d.exec("unlink", null)
        }
    };
    d.clickToolbar("link", d.plugin.link.edit)
});
KindEditor.plugin("map", function (b) {
    var d = this, g = d.lang("map.");
    d.clickToolbar("map", function () {
        function l() {
            n = o[0].contentWindow;
            j = b.iframeDoc(o)
        }

        var e = ['<div style="padding:10px 20px;"><div class="ke-dialog-row">',
                 g.address
                 + ' <input id="kindeditor_plugin_map_address" name="address" class="ke-input-text" value="" style="width:200px;" /> ',
                 '<span class="ke-button-common ke-button-outer">',
                 '<input type="button" name="searchBtn" class="ke-button-common ke-button" value="'
                 + g.search + '" />',
                 '</span></div><div class="ke-map" style="width:558px;height:360px;"></div></div>'].join(
            ""),
            e = d.createDialog({
                                   name: "map",
                                   width: 600,
                                   title: d.lang("map"),
                                   body: e,
                                   yesBtn: {
                                       name: d.lang("yes"),
                                       click: function () {
                                           var b = n.map,
                                               e = b.getCenter().lat() + ","
                                                   + b.getCenter().lng(),
                                               g = b.getZoom(),
                                               b = b.getMapTypeId(),
                                               h = "http://maps.googleapis.com/maps/api/staticmap";
                                           h +=
                                               "?center=" + encodeURIComponent(
                                               e);
                                           h +=
                                               "&zoom=" + encodeURIComponent(g);
                                           h += "&size=558x360";
                                           h +=
                                               "&maptype=" + encodeURIComponent(
                                               b);
                                           h +=
                                               "&markers=" + encodeURIComponent(
                                               e);
                                           h += "&language=" + d.langType;
                                           h += "&sensor=false";
                                           d.exec("insertimage", h).hideDialog()
                                               .focus()
                                       }
                                   },
                                   beforeRemove: function () {
                                       m.remove();
                                       j && j.write("");
                                       o.remove()
                                   }
                               }).div, h = b('[name="address"]', e),
            m = b('[name="searchBtn"]', e), n, j;
        ['<!doctype html><html><head>\n<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />\n<style>\n\thtml { height: 100% }\n\tbody { height: 100%; margin: 0; padding: 0; background-color: #FFF }\n\t#map_canvas { height: 100% }\n</style>',
         '<script src="http://maps.googleapis.com/maps/api/js?sensor=false&language='
         + d.langType + '"><\/script>',
         '<script>\nvar map, geocoder;\nfunction initialize() {\n\tvar latlng = new google.maps.LatLng(31.230393, 121.473704);\n\tvar options = {\n\t\tzoom: 11,\n\t\tcenter: latlng,\n\t\tdisableDefaultUI: true,\n\t\tpanControl: true,\n\t\tzoomControl: true,\n\t\tmapTypeControl: true,\n\t\tscaleControl: true,\n\t\tstreetViewControl: false,\n\t\toverviewMapControl: true,\n\t\tmapTypeId: google.maps.MapTypeId.ROADMAP\n\t};\n\tmap = new google.maps.Map(document.getElementById("map_canvas"), options);\n\tgeocoder = new google.maps.Geocoder();\n\tgeocoder.geocode({latLng: latlng}, function(results, status) {\n\t\tif (status == google.maps.GeocoderStatus.OK) {\n\t\t\tif (results[3]) {\n\t\t\t\tparent.document.getElementById("kindeditor_plugin_map_address").value = results[3].formatted_address;\n\t\t\t}\n\t\t}\n\t});\n}\nfunction search(address) {\n\tif (!map) return;\n\tgeocoder.geocode({address : address}, function(results, status) {\n\t\tif (status == google.maps.GeocoderStatus.OK) {\n\t\t\tmap.setZoom(11);\n\t\t\tmap.setCenter(results[0].geometry.location);\n\t\t\tvar marker = new google.maps.Marker({\n\t\t\t\tmap: map,\n\t\t\t\tposition: results[0].geometry.location\n\t\t\t});\n\t\t} else {\n\t\t\talert("Invalid address: " + address);\n\t\t}\n\t});\n}\n<\/script>\n</head>\n<body onload="initialize();">\n<div id="map_canvas" style="width:100%; height:100%"></div>\n</body></html>'].join(
            "\n");
        var o = b('<iframe class="ke-textarea" frameborder="0" src="'
                  + d.pluginsPath
                  + 'map/map.html" style="width:558px;height:360px;"></iframe>');
        o.bind("load", function () {
            o.unbind("load");
            b.IE ? l() : setTimeout(l, 0)
        });
        b(".ke-map", e).replaceWith(o);
        m.click(function () {
            n.search(h.val())
        })
    })
});
KindEditor.plugin("media", function (b) {
    var d = this, g = d.lang("media."), l = b.undef(d.allowMediaUpload, !0),
        e = b.undef(d.allowFileManager, !1), h = b.undef(d.formatUploadUrl, !0),
        m = b.undef(d.extraFileUploadParams, {}),
        n = b.undef(d.filePostName, "imgFile"),
        j = b.undef(d.uploadJson, d.basePath + "php/upload_json.php");
    d.plugin.media = {
        edit: function () {
            var o = ['<div style="padding:20px;"><div class="ke-dialog-row">',
                     '<label for="keUrl" style="width:60px;">' + g.url
                     + "</label>",
                     '<input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:160px;" /> &nbsp;',
                     '<input type="button" class="ke-upload-button" value="'
                     + g.upload + '" /> &nbsp;',
                     '<span class="ke-button-common ke-button-outer">',
                     '<input type="button" class="ke-button-common ke-button" name="viewServer" value="'
                     + g.viewServer + '" />',
                     '</span></div><div class="ke-dialog-row">',
                     '<label for="keWidth" style="width:60px;">' + g.width
                     + "</label>",
                     '<input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="550" maxlength="4" /></div><div class="ke-dialog-row">',
                     '<label for="keHeight" style="width:60px;">' +
                     g.height + "</label>",
                     '<input type="text" id="keHeight" class="ke-input-text ke-input-number" name="height" value="400" maxlength="4" /></div><div class="ke-dialog-row">',
                     '<label for="keAutostart">' + g.autostart + "</label>",
                     '<input type="checkbox" id="keAutostart" name="autostart" value="" /> </div></div>'].join(
                ""), s = d.createDialog({
                                                name: "media",
                                                width: 450,
                                                height: 230,
                                                title: d.lang("media"),
                                                body: o,
                                                yesBtn: {
                                                    name: d.lang("yes"),
                                                    click: function () {
                                                        var e = b.trim(p.val()),
                                                            g = q.val(),
                                                            h = z.val();
                                                        e == "http://"
                                                        || b.invalidUrl(e) ? (alert(
                                                            d.lang(
                                                                "invalidUrl")), p[0].focus())
                                                            : /^\d*$/.test(g)
                                                            ? /^\d*$/.test(h) ? (e =
                                                                b.mediaImg(d.themesPath
                                                                           + "common/blank.gif",
                                                                    {
                                                                        src: e,
                                                                        type: b.mediaType(
                                                                            e),
                                                                        width: g,
                                                                        height: h,
                                                                        autostart: D[0].checked
                                                                            ? "true"
                                                                            : "false",
                                                                        loop: "true"
                                                                    }), d.insertHtml(
                                                                e).hideDialog()
                                                                .focus()) : (alert(
                                                                d.lang(
                                                                    "invalidHeight")), z[0].focus())
                                                            : (alert(d.lang(
                                                                "invalidWidth")), q[0].focus())
                                                    }
                                                }
                                            }), t = s.div, p = b('[name="url"]', t),
                o = b('[name="viewServer"]', t), q = b('[name="width"]', t),
                z = b('[name="height"]', t), D = b('[name="autostart"]', t);
            p.val("http://");
            if (l) {
                var r = b.uploadbutton({
                                           button: b(".ke-upload-button", t)[0],
                                           fieldName: n,
                                           extraParams: m,
                                           url: b.addParam(j, "dir=media"),
                                           afterUpload: function (e) {
                                               s.hideLoading();
                                               if (e.error === 0) {
                                                   var g = e.url;
                                                   h && (g =
                                                       b.formatUrl(g,
                                                                   "absolute"));
                                                   p.val(g);
                                                   d.afterUpload
                                                   && d.afterUpload.call(d, g,
                                                                         e,
                                                                         "media");
                                                   alert(
                                                       d.lang("uploadSuccess"))
                                               } else {
                                                   alert(e.message)
                                               }
                                           },
                                           afterError: function (b) {
                                               s.hideLoading();
                                               d.errorDialog(b)
                                           }
                                       });
                r.fileBox.change(function () {
                    s.showLoading(d.lang("uploadLoading"));
                    r.submit()
                })
            } else {
                b(".ke-upload-button", t).hide();
            }
            e ? o.click(function () {
                d.loadPlugin("filemanager", function () {
                    d.plugin.filemanagerDialog({
                                                   viewType: "LIST",
                                                   dirName: "media",
                                                   clickFn: function (e) {
                                                       d.dialogs.length > 1
                                                       && (b('[name="url"]', t)
                                                           .val(
                                                               e), d.afterSelectFile
                                                       && d.afterSelectFile.call(
                                                           d,
                                                           e), d.hideDialog())
                                                   }
                                               })
                })
            }) : o.hide();
            if (o = d.plugin.getSelectedMedia()) {
                var A = b.mediaAttrs(o.attr("data-ke-tag"));
                p.val(A.src);
                q.val(b.removeUnit(o.css("width")) || A.width || 0);
                z.val(b.removeUnit(o.css("height")) || A.height || 0);
                D[0].checked = A.autostart === "true"
            }
            p[0].focus();
            p[0].select()
        },
        "delete": function () {
            d.plugin.getSelectedMedia().remove();
            d.addBookmark()
        }
    };
    d.clickToolbar("media", d.plugin.media.edit)
});
(function (b) {
    function d(b) {
        this.init(b)
    }

    b.extend(d, {
        init: function (d) {
            function l(d, e) {
                b(".ke-status > div", d).hide();
                b(".ke-message", d).addClass("ke-error").show()
                    .html(b.escape(e))
            }

            var e = this;
            d.afterError = d.afterError || function (b) {
                alert(b)
            };
            e.options = d;
            e.progressbars = {};
            e.div =
                b(d.container).html(
                    ['<div class="ke-swfupload"><div class="ke-swfupload-top"><div class="ke-inline-block ke-swfupload-button"><input type="button" value="Browse" /></div>',
                     '<div class="ke-inline-block ke-swfupload-desc">'
                     + d.uploadDesc +
                     "</div>",
                     '<span class="ke-button-common ke-button-outer ke-swfupload-startupload">',
                     '<input type="button" class="ke-button-common ke-button" value="'
                     + d.startButtonValue + '" />',
                     '</span></div><div class="ke-swfupload-body"></div></div>'].join(
                        ""));
            e.bodyDiv = b(".ke-swfupload-body", e.div);
            var h = {
                debug: !1,
                upload_url: d.uploadUrl,
                flash_url: d.flashUrl,
                file_post_name: d.filePostName,
                button_placeholder: b(".ke-swfupload-button > input", e.div)[0],
                button_image_url: d.buttonImageUrl,
                button_width: d.buttonWidth,
                button_height: d.buttonHeight,
                button_cursor: SWFUpload.CURSOR.HAND,
                file_types: d.fileTypes,
                file_types_description: d.fileTypesDesc,
                file_upload_limit: d.fileUploadLimit,
                file_size_limit: d.fileSizeLimit,
                post_params: d.postParams,
                file_queued_handler: function (b) {
                    b.url = e.options.fileIconUrl;
                    e.appendFile(b)
                },
                file_queue_error_handler: function (e, h) {
                    var j = "";
                    switch (h) {
                        case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
                            j = d.queueLimitExceeded;
                            break;
                        case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                            j = d.fileExceedsSizeLimit;
                            break;
                        case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
                            j =
                                d.zeroByteFile;
                            break;
                        case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
                            j = d.invalidFiletype;
                            break;
                        default:
                            j = d.unknownError
                    }
                    b.DEBUG && alert(j)
                },
                upload_start_handler: function (d) {
                    d = b('div[data-id="' + d.id + '"]', this.bodyDiv);
                    b(".ke-status > div", d).hide();
                    b(".ke-progressbar", d).show()
                },
                upload_progress_handler: function (b, d, g) {
                    d = Math.round(d * 100 / g);
                    b = e.progressbars[b.id];
                    b.bar.css("width", Math.round(d * 80 / 100) + "px");
                    b.percent.html(d + "%")
                },
                upload_error_handler: function (d) {
                    d && d.filestatus == SWFUpload.FILE_STATUS.ERROR &&
                    (d = b('div[data-id="' + d.id + '"]', e.bodyDiv).eq(0), l(d,
                                                                              e.options.errorMessage))
                },
                upload_success_handler: function (d, g) {
                    var h = b('div[data-id="' + d.id + '"]', e.bodyDiv).eq(0),
                        o = {};
                    try {
                        o = b.json(g)
                    } catch (s) {
                        e.options.afterError.call(this, "<!doctype html><html>"
                                                        + g + "</html>")
                    }
                    o.error !== 0 ? l(h, b.DEBUG ? o.message
                        : e.options.errorMessage) : (d.url = o.url, b(".ke-img",
                                                                      h)
                        .attr("src", d.url).attr("data-status", d.filestatus)
                        .data("data", o), b(".ke-status > div", h).hide())
                }
            };
            e.swfu = new SWFUpload(h);
            b(".ke-swfupload-startupload input",
              e.div).click(function () {
                e.swfu.startUpload()
            })
        }, getUrlList: function () {
            var d = [];
            b(".ke-img", self.bodyDiv).each(function () {
                var l = b(this);
                l.attr("data-status") == SWFUpload.FILE_STATUS.COMPLETE
                && d.push(l.data("data"))
            });
            return d
        }, removeFile: function (d) {
            this.swfu.cancelUpload(d);
            d = b('div[data-id="' + d + '"]', this.bodyDiv);
            b(".ke-photo", d).unbind();
            b(".ke-delete", d).unbind();
            d.remove()
        }, removeFiles: function () {
            var d = this;
            b(".ke-item", d.bodyDiv).each(function () {
                d.removeFile(b(this).attr("data-id"))
            })
        }, appendFile: function (d) {
            var l =
                    this,
                e = b('<div class="ke-inline-block ke-item" data-id="' + d.id
                      + '"></div>');
            l.bodyDiv.append(e);
            var h = b('<div class="ke-inline-block ke-photo"></div>')
                .mouseover(function () {
                    b(this).addClass("ke-on")
                }).mouseout(function () {
                    b(this).removeClass("ke-on")
                });
            e.append(h);
            var m = b('<img src="' + d.url + '" class="ke-img" data-status="'
                      + d.filestatus + '" width="80" height="80" alt="' + d.name
                      + '" />');
            h.append(m);
            b('<span class="ke-delete"></span>').appendTo(h).click(function () {
                l.removeFile(d.id)
            });
            m = b('<div class="ke-status"></div>').appendTo(h);
            b('<div class="ke-progressbar"><div class="ke-progressbar-bar"><div class="ke-progressbar-bar-inner"></div></div><div class="ke-progressbar-percent">0%</div></div>')
                .hide().appendTo(m);
            b('<div class="ke-message">' + l.options.pendingMessage + "</div>")
                .appendTo(m);
            e.append('<div class="ke-name">' + d.name + "</div>");
            l.progressbars[d.id] =
                {
                    bar: b(".ke-progressbar-bar-inner", h),
                    percent: b(".ke-progressbar-percent", h)
                }
        }, remove: function () {
            this.removeFiles();
            this.swfu.destroy();
            this.div.html("")
        }
    });
    b.swfupload =
        function (b, l) {
            return new d(b, l)
        }
})(KindEditor);
KindEditor.plugin("multiimage", function (b) {
    var d = this;
    b.undef(d.formatUploadUrl, !0);
    var g = b.undef(d.uploadJson, d.basePath + "php/upload_json.php"),
        l = d.pluginsPath + "multiimage/images/",
        e = b.undef(d.imageSizeLimit, "1MB");
    b.undef(d.imageFileTypes, "*.jpg;*.gif;*.png");
    var h = b.undef(d.imageUploadLimit, 20),
        m = b.undef(d.filePostName, "imgFile"), n = d.lang("multiimage.");
    d.plugin.multiImageDialog = function (j) {
        var o = j.clickFn,
            j = b.tmpl(n.uploadDesc, {uploadLimit: h, sizeLimit: e}),
            s = d.createDialog({
                                   name: "multiimage",
                                   width: 650,
                                   height: 510,
                                   title: d.lang("multiimage"),
                                   body: '<div style="padding:20px;"><div class="swfupload"></div></div>',
                                   previewBtn: {
                                       name: n.insertAll,
                                       click: function () {
                                           o.call(d, t.getUrlList())
                                       }
                                   },
                                   yesBtn: {
                                       name: n.clearAll,
                                       click: function () {
                                           t.removeFiles()
                                       }
                                   },
                                   beforeRemove: function () {
                                       (!b.IE || b.V <= 8) && t.remove()
                                   }
                               }), t = b.swfupload({
                                                       container: b(
                                                           ".swfupload", s.div),
                                                       buttonImageUrl: l
                                                                       + (d.langType
                                                                          == "zh_CN"
                                                           ? "select-files-zh_CN.png"
                                                           : "select-files-en.png"),
                                                       buttonWidth: d.langType
                                                                    == "zh_CN"
                                                           ? 72 : 88,
                                                       buttonHeight: 23,
                                                       fileIconUrl: l
                                                                    + "image.png",
                                                       uploadDesc: j,
                                                       startButtonValue: n.startUpload,
                                                       uploadUrl: b.addParam(g,
                                                                             "dir=image"),
                                                       flashUrl: l
                                                                 + "swfupload.swf",
                                                       filePostName: m,
                                                       fileTypes: "*.jpg;*.jpeg;*.gif;*.png;*.bmp",
                                                       fileTypesDesc: "Image Files",
                                                       fileUploadLimit: h,
                                                       fileSizeLimit: e,
                                                       postParams: b.undef(
                                                           d.extraFileUploadParams,
                                                           {}),
                                                       queueLimitExceeded: n.queueLimitExceeded,
                                                       fileExceedsSizeLimit: n.fileExceedsSizeLimit,
                                                       zeroByteFile: n.zeroByteFile,
                                                       invalidFiletype: n.invalidFiletype,
                                                       unknownError: n.unknownError,
                                                       pendingMessage: n.pending,
                                                       errorMessage: n.uploadError,
                                                       afterError: function (b) {
                                                           d.errorDialog(b)
                                                       }
                                                   });
        return s
    };
    d.clickToolbar("multiimage", function () {
        d.plugin.multiImageDialog({
                                      clickFn: function (e) {
                                          e.length !== 0 && (b.each(e,
                                                                    function (b,
                                                                              e) {
                                                                        d.afterUpload
                                                                        && d.afterUpload.call(
                                                                            d,
                                                                            e.url,
                                                                            e,
                                                                            "multiimage");
                                                                        d.exec(
                                                                            "insertimage",
                                                                            e.url,
                                                                            e.title,
                                                                            e.width,
                                                                            e.height,
                                                                            e.border,
                                                                            e.align)
                                                                    }), setTimeout(
                                              function () {
                                                  d.hideDialog().focus()
                                              }, 0))
                                      }
                                  })
    })
});
(function () {
    if (!window.SWFUpload) {
        window.SWFUpload = function (b) {
            this.initSWFUpload(b)
        }, SWFUpload.prototype.initSWFUpload = function (b) {
            try {
                this.customSettings = {}, this.settings = b, this.eventQueue =
                    [], this.movieName =
                    "SWFUpload_" + SWFUpload.movieCount++, this.movieElement =
                    null, SWFUpload.instances[this.movieName] =
                    this, this.initSettings(), this.loadFlash(), this.displayDebugInfo()
            } catch (d) {
                throw delete SWFUpload.instances[this.movieName], d;
            }
        }, SWFUpload.instances = {}, SWFUpload.movieCount =
            0, SWFUpload.version =
            "2.2.0 2009-03-25",
            SWFUpload.QUEUE_ERROR =
                {
                    QUEUE_LIMIT_EXCEEDED: -100,
                    FILE_EXCEEDS_SIZE_LIMIT: -110,
                    ZERO_BYTE_FILE: -120,
                    INVALID_FILETYPE: -130
                }, SWFUpload.UPLOAD_ERROR =
            {
                HTTP_ERROR: -200,
                MISSING_UPLOAD_URL: -210,
                IO_ERROR: -220,
                SECURITY_ERROR: -230,
                UPLOAD_LIMIT_EXCEEDED: -240,
                UPLOAD_FAILED: -250,
                SPECIFIED_FILE_ID_NOT_FOUND: -260,
                FILE_VALIDATION_FAILED: -270,
                FILE_CANCELLED: -280,
                UPLOAD_STOPPED: -290
            }, SWFUpload.FILE_STATUS =
            {
                QUEUED: -1,
                IN_PROGRESS: -2,
                ERROR: -3,
                COMPLETE: -4,
                CANCELLED: -5
            }, SWFUpload.BUTTON_ACTION = {
            SELECT_FILE: -100, SELECT_FILES: -110,
            START_UPLOAD: -120
        }, SWFUpload.CURSOR = {ARROW: -1, HAND: -2}, SWFUpload.WINDOW_MODE =
            {
                WINDOW: "window",
                TRANSPARENT: "transparent",
                OPAQUE: "opaque"
            }, SWFUpload.completeURL = function (b) {
            if (typeof b !== "string" || b.match(/^https?:\/\//i) || b.match(
                    /^\//)) {
                return b;
            }
            var d = window.location.pathname.lastIndexOf("/");
            path = d <= 0 ? "/" : window.location.pathname.substr(0, d) + "/";
            return path + b
        }, SWFUpload.prototype.initSettings = function () {
            this.ensureDefault = function (b, d) {
                this.settings[b] =
                    this.settings[b] == void 0 ? d : this.settings[b]
            };
            this.ensureDefault("upload_url", "");
            this.ensureDefault("preserve_relative_urls", !1);
            this.ensureDefault("file_post_name", "Filedata");
            this.ensureDefault("post_params", {});
            this.ensureDefault("use_query_string", !1);
            this.ensureDefault("requeue_on_error", !1);
            this.ensureDefault("http_success", []);
            this.ensureDefault("assume_success_timeout", 0);
            this.ensureDefault("file_types", "*.*");
            this.ensureDefault("file_types_description", "All Files");
            this.ensureDefault("file_size_limit", 0);
            this.ensureDefault("file_upload_limit",
                               0);
            this.ensureDefault("file_queue_limit", 0);
            this.ensureDefault("flash_url", "swfupload.swf");
            this.ensureDefault("prevent_swf_caching", !0);
            this.ensureDefault("button_image_url", "");
            this.ensureDefault("button_width", 1);
            this.ensureDefault("button_height", 1);
            this.ensureDefault("button_text", "");
            this.ensureDefault("button_text_style",
                               "color: #000000; font-size: 16pt;");
            this.ensureDefault("button_text_top_padding", 0);
            this.ensureDefault("button_text_left_padding", 0);
            this.ensureDefault("button_action",
                               SWFUpload.BUTTON_ACTION.SELECT_FILES);
            this.ensureDefault("button_disabled", !1);
            this.ensureDefault("button_placeholder_id", "");
            this.ensureDefault("button_placeholder", null);
            this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW);
            this.ensureDefault("button_window_mode",
                               SWFUpload.WINDOW_MODE.WINDOW);
            this.ensureDefault("debug", !1);
            this.settings.debug_enabled = this.settings.debug;
            this.settings.return_upload_start_handler = this.returnUploadStart;
            this.ensureDefault("swfupload_loaded_handler", null);
            this.ensureDefault("file_dialog_start_handler",
                               null);
            this.ensureDefault("file_queued_handler", null);
            this.ensureDefault("file_queue_error_handler", null);
            this.ensureDefault("file_dialog_complete_handler", null);
            this.ensureDefault("upload_start_handler", null);
            this.ensureDefault("upload_progress_handler", null);
            this.ensureDefault("upload_error_handler", null);
            this.ensureDefault("upload_success_handler", null);
            this.ensureDefault("upload_complete_handler", null);
            this.ensureDefault("debug_handler", this.debugMessage);
            this.ensureDefault("custom_settings", {});
            this.customSettings = this.settings.custom_settings;
            if (this.settings.prevent_swf_caching) {
                this.settings.flash_url =
                    this.settings.flash_url + (this.settings.flash_url.indexOf(
                    "?") < 0
                    ? "?" : "&") + "preventswfcaching=" + (new Date).getTime();
            }
            if (!this.settings.preserve_relative_urls) {
                this.settings.upload_url =
                    SWFUpload.completeURL(
                        this.settings.upload_url), this.settings.button_image_url =
                    SWFUpload.completeURL(this.settings.button_image_url);
            }
            delete this.ensureDefault
        }, SWFUpload.prototype.loadFlash = function () {
            var b, d;
            if (document.getElementById(this.movieName) !== null) {
                throw"ID "
                     + this.movieName
                     + " is already in use. The Flash Object could not be added";
            }
            b =
                document.getElementById(this.settings.button_placeholder_id)
                || this.settings.button_placeholder;
            if (b == void 0) {
                throw"Could not find the placeholder element: "
                     + this.settings.button_placeholder_id;
            }
            d = document.createElement("div");
            d.innerHTML = this.getFlashHTML();
            b.parentNode.replaceChild(d.firstChild, b);
            window[this.movieName] == void 0 && (window[this.movieName] =
                this.getMovieElement())
        },
            SWFUpload.prototype.getFlashHTML = function () {
                var b = "";
                KindEditor.IE && KindEditor.V > 8 && (b =
                    ' classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"');
                return ['<object id="', this.movieName,
                        '"' + b
                        + ' type="application/x-shockwave-flash" data="',
                        this.settings.flash_url, '" width="',
                        this.settings.button_width, '" height="',
                        this.settings.button_height,
                        '" class="swfupload"><param name="wmode" value="',
                        this.settings.button_window_mode,
                        '" /><param name="movie" value="',
                        this.settings.flash_url,
                        '" /><param name="quality" value="high" /><param name="menu" value="false" /><param name="allowScriptAccess" value="always" />',
                        '<param name="flashvars" value="' + this.getFlashVars()
                        + '" />', "</object>"].join("")
            }, SWFUpload.prototype.getFlashVars = function () {
            var b = this.buildParamString(),
                d = this.settings.http_success.join(",");
            return ["movieName=", encodeURIComponent(this.movieName),
                    "&amp;uploadURL=",
                    encodeURIComponent(this.settings.upload_url),
                    "&amp;useQueryString=",
                    encodeURIComponent(this.settings.use_query_string),
                    "&amp;requeueOnError=",
                    encodeURIComponent(this.settings.requeue_on_error),
                    "&amp;httpSuccess=", encodeURIComponent(d),
                    "&amp;assumeSuccessTimeout=",
                    encodeURIComponent(this.settings.assume_success_timeout),
                    "&amp;params=", encodeURIComponent(b), "&amp;filePostName=",
                    encodeURIComponent(this.settings.file_post_name),
                    "&amp;fileTypes=",
                    encodeURIComponent(this.settings.file_types),
                    "&amp;fileTypesDescription=",
                    encodeURIComponent(this.settings.file_types_description),
                    "&amp;fileSizeLimit=",
                    encodeURIComponent(this.settings.file_size_limit),
                    "&amp;fileUploadLimit=",
                    encodeURIComponent(this.settings.file_upload_limit),
                    "&amp;fileQueueLimit=",
                    encodeURIComponent(this.settings.file_queue_limit),
                    "&amp;debugEnabled=",
                    encodeURIComponent(this.settings.debug_enabled),
                    "&amp;buttonImageURL=",
                    encodeURIComponent(this.settings.button_image_url),
                    "&amp;buttonWidth=",
                    encodeURIComponent(this.settings.button_width),
                    "&amp;buttonHeight=",
                    encodeURIComponent(this.settings.button_height),
                    "&amp;buttonText=",
                    encodeURIComponent(this.settings.button_text),
                    "&amp;buttonTextTopPadding=",
                    encodeURIComponent(this.settings.button_text_top_padding),
                    "&amp;buttonTextLeftPadding=",
                    encodeURIComponent(this.settings.button_text_left_padding),
                    "&amp;buttonTextStyle=",
                    encodeURIComponent(this.settings.button_text_style),
                    "&amp;buttonAction=",
                    encodeURIComponent(this.settings.button_action),
                    "&amp;buttonDisabled=",
                    encodeURIComponent(this.settings.button_disabled),
                    "&amp;buttonCursor=",
                    encodeURIComponent(this.settings.button_cursor)].join("")
        }, SWFUpload.prototype.getMovieElement = function () {
            if (this.movieElement == void 0) {
                this.movieElement =
                    document.getElementById(this.movieName);
            }
            if (this.movieElement ===
                null) {
                throw"Could not find Flash element";
            }
            return this.movieElement
        }, SWFUpload.prototype.buildParamString = function () {
            var b = this.settings.post_params, d = [];
            if (typeof b === "object") {
                for (var g in b) {
                    b.hasOwnProperty(g)
                    && d.push(encodeURIComponent(
                        g.toString()) + "=" + encodeURIComponent(
                        b[g].toString()));
                }
            }
            return d.join("&amp;")
        }, SWFUpload.prototype.destroy = function () {
            try {
                this.cancelUpload(null, !1);
                var b = null;
                if ((b = this.getMovieElement()) && typeof b.CallFunction
                                                    === "unknown") {
                    for (var d in b) {
                        try {
                            typeof b[d] === "function" &&
                            (b[d] = null)
                        } catch (g) {
                        }
                    }
                    try {
                        b.parentNode.removeChild(b)
                    } catch (l) {
                    }
                }
                window[this.movieName] = null;
                SWFUpload.instances[this.movieName] = null;
                delete SWFUpload.instances[this.movieName];
                this.movieName =
                    this.eventQueue =
                        this.customSettings =
                            this.settings = this.movieElement = null;
                return !0
            } catch (e) {
                return !1
            }
        }, SWFUpload.prototype.displayDebugInfo = function () {
            this.debug(
                ["---SWFUpload Instance Info---\nVersion: ", SWFUpload.version,
                 "\nMovie Name: ", this.movieName,
                 "\nSettings:\n\tupload_url:               ",
                 this.settings.upload_url,
                 "\n\tflash_url:                ", this.settings.flash_url,
                 "\n\tuse_query_string:         ",
                 this.settings.use_query_string.toString(),
                 "\n\trequeue_on_error:         ",
                 this.settings.requeue_on_error.toString(),
                 "\n\thttp_success:             ",
                 this.settings.http_success.join(", "),
                 "\n\tassume_success_timeout:   ",
                 this.settings.assume_success_timeout,
                 "\n\tfile_post_name:           ", this.settings.file_post_name,
                 "\n\tpost_params:              ",
                 this.settings.post_params.toString(),
                 "\n\tfile_types:               ",
                 this.settings.file_types, "\n\tfile_types_description:   ",
                 this.settings.file_types_description,
                 "\n\tfile_size_limit:          ",
                 this.settings.file_size_limit,
                 "\n\tfile_upload_limit:        ",
                 this.settings.file_upload_limit,
                 "\n\tfile_queue_limit:         ",
                 this.settings.file_queue_limit,
                 "\n\tdebug:                    ",
                 this.settings.debug.toString(),
                 "\n\tprevent_swf_caching:      ",
                 this.settings.prevent_swf_caching.toString(),
                 "\n\tbutton_placeholder_id:    ",
                 this.settings.button_placeholder_id.toString(),
                 "\n\tbutton_placeholder:       ",
                 this.settings.button_placeholder ? "Set" : "Not Set",
                 "\n\tbutton_image_url:         ",
                 this.settings.button_image_url.toString(),
                 "\n\tbutton_width:             ",
                 this.settings.button_width.toString(),
                 "\n\tbutton_height:            ",
                 this.settings.button_height.toString(),
                 "\n\tbutton_text:              ",
                 this.settings.button_text.toString(),
                 "\n\tbutton_text_style:        ",
                 this.settings.button_text_style.toString(),
                 "\n\tbutton_text_top_padding:  ",
                 this.settings.button_text_top_padding.toString(),
                 "\n\tbutton_text_left_padding: ",
                 this.settings.button_text_left_padding.toString(),
                 "\n\tbutton_action:            ",
                 this.settings.button_action.toString(),
                 "\n\tbutton_disabled:          ",
                 this.settings.button_disabled.toString(),
                 "\n\tcustom_settings:          ",
                 this.settings.custom_settings.toString(),
                 "\nEvent Handlers:\n\tswfupload_loaded_handler assigned:  ",
                 (typeof this.settings.swfupload_loaded_handler
                  === "function").toString(),
                 "\n\tfile_dialog_start_handler assigned: ",
                 (typeof this.settings.file_dialog_start_handler ===
                  "function").toString(),
                 "\n\tfile_queued_handler assigned:       ",
                 (typeof this.settings.file_queued_handler
                  === "function").toString(),
                 "\n\tfile_queue_error_handler assigned:  ",
                 (typeof this.settings.file_queue_error_handler
                  === "function").toString(),
                 "\n\tupload_start_handler assigned:      ",
                 (typeof this.settings.upload_start_handler
                  === "function").toString(),
                 "\n\tupload_progress_handler assigned:   ",
                 (typeof this.settings.upload_progress_handler
                  === "function").toString(),
                 "\n\tupload_error_handler assigned:      ",
                 (typeof this.settings.upload_error_handler
                  === "function").toString(),
                 "\n\tupload_success_handler assigned:    ",
                 (typeof this.settings.upload_success_handler
                  === "function").toString(),
                 "\n\tupload_complete_handler assigned:   ",
                 (typeof this.settings.upload_complete_handler
                  === "function").toString(),
                 "\n\tdebug_handler assigned:             ",
                 (typeof this.settings.debug_handler === "function").toString(),
                 "\n"].join(""))
        }, SWFUpload.prototype.addSetting = function (b, d, g) {
            return d == void 0 ? this.settings[b] = g : this.settings[b] =
                d
        }, SWFUpload.prototype.getSetting = function (b) {
            if (this.settings[b] != void 0) {
                return this.settings[b];
            }
            return ""
        }, SWFUpload.prototype.callFlash = function (b, d) {
            var d = d || [], g = this.getMovieElement(), l, e;
            try {
                e =
                    g.CallFunction('<invoke name="' + b
                                   + '" returntype="javascript">'
                                   + __flash__argumentsToXML(d, 0)
                                   + "</invoke>"), l = eval(e)
            } catch (h) {
                throw"Call to " + b + " failed";
            }
            l != void 0 && typeof l.post === "object" && (l =
                this.unescapeFilePostParams(l));
            return l
        }, SWFUpload.prototype.selectFile = function () {
            this.callFlash("SelectFile")
        },
            SWFUpload.prototype.selectFiles = function () {
                this.callFlash("SelectFiles")
            }, SWFUpload.prototype.startUpload = function (b) {
            this.callFlash("StartUpload", [b])
        }, SWFUpload.prototype.cancelUpload = function (b, d) {
            d !== !1 && (d = !0);
            this.callFlash("CancelUpload", [b, d])
        }, SWFUpload.prototype.stopUpload = function () {
            this.callFlash("StopUpload")
        }, SWFUpload.prototype.getStats = function () {
            return this.callFlash("GetStats")
        }, SWFUpload.prototype.setStats = function (b) {
            this.callFlash("SetStats", [b])
        }, SWFUpload.prototype.getFile =
            function (b) {
                return typeof b === "number" ? this.callFlash("GetFileByIndex",
                                                              [b])
                    : this.callFlash("GetFile", [b])
            }, SWFUpload.prototype.addFileParam = function (b, d, g) {
            return this.callFlash("AddFileParam", [b, d, g])
        }, SWFUpload.prototype.removeFileParam = function (b, d) {
            this.callFlash("RemoveFileParam", [b, d])
        }, SWFUpload.prototype.setUploadURL = function (b) {
            this.settings.upload_url = b.toString();
            this.callFlash("SetUploadURL", [b])
        }, SWFUpload.prototype.setPostParams = function (b) {
            this.settings.post_params = b;
            this.callFlash("SetPostParams",
                           [b])
        }, SWFUpload.prototype.addPostParam = function (b, d) {
            this.settings.post_params[b] = d;
            this.callFlash("SetPostParams", [this.settings.post_params])
        }, SWFUpload.prototype.removePostParam = function (b) {
            delete this.settings.post_params[b];
            this.callFlash("SetPostParams", [this.settings.post_params])
        }, SWFUpload.prototype.setFileTypes = function (b, d) {
            this.settings.file_types = b;
            this.settings.file_types_description = d;
            this.callFlash("SetFileTypes", [b, d])
        }, SWFUpload.prototype.setFileSizeLimit = function (b) {
            this.settings.file_size_limit =
                b;
            this.callFlash("SetFileSizeLimit", [b])
        }, SWFUpload.prototype.setFileUploadLimit = function (b) {
            this.settings.file_upload_limit = b;
            this.callFlash("SetFileUploadLimit", [b])
        }, SWFUpload.prototype.setFileQueueLimit = function (b) {
            this.settings.file_queue_limit = b;
            this.callFlash("SetFileQueueLimit", [b])
        }, SWFUpload.prototype.setFilePostName = function (b) {
            this.settings.file_post_name = b;
            this.callFlash("SetFilePostName", [b])
        }, SWFUpload.prototype.setUseQueryString = function (b) {
            this.settings.use_query_string = b;
            this.callFlash("SetUseQueryString",
                           [b])
        }, SWFUpload.prototype.setRequeueOnError = function (b) {
            this.settings.requeue_on_error = b;
            this.callFlash("SetRequeueOnError", [b])
        }, SWFUpload.prototype.setHTTPSuccess = function (b) {
            typeof b === "string" && (b = b.replace(" ", "").split(","));
            this.settings.http_success = b;
            this.callFlash("SetHTTPSuccess", [b])
        }, SWFUpload.prototype.setAssumeSuccessTimeout = function (b) {
            this.settings.assume_success_timeout = b;
            this.callFlash("SetAssumeSuccessTimeout", [b])
        }, SWFUpload.prototype.setDebugEnabled = function (b) {
            this.settings.debug_enabled =
                b;
            this.callFlash("SetDebugEnabled", [b])
        }, SWFUpload.prototype.setButtonImageURL = function (b) {
            b == void 0 && (b = "");
            this.settings.button_image_url = b;
            this.callFlash("SetButtonImageURL", [b])
        }, SWFUpload.prototype.setButtonDimensions = function (b, d) {
            this.settings.button_width = b;
            this.settings.button_height = d;
            var g = this.getMovieElement();
            if (g != void 0) {
                g.style.width = b + "px", g.style.height = d + "px";
            }
            this.callFlash("SetButtonDimensions", [b, d])
        }, SWFUpload.prototype.setButtonText = function (b) {
            this.settings.button_text = b;
            this.callFlash("SetButtonText",
                           [b])
        }, SWFUpload.prototype.setButtonTextPadding = function (b, d) {
            this.settings.button_text_top_padding = d;
            this.settings.button_text_left_padding = b;
            this.callFlash("SetButtonTextPadding", [b, d])
        }, SWFUpload.prototype.setButtonTextStyle = function (b) {
            this.settings.button_text_style = b;
            this.callFlash("SetButtonTextStyle", [b])
        }, SWFUpload.prototype.setButtonDisabled = function (b) {
            this.settings.button_disabled = b;
            this.callFlash("SetButtonDisabled", [b])
        }, SWFUpload.prototype.setButtonAction = function (b) {
            this.settings.button_action =
                b;
            this.callFlash("SetButtonAction", [b])
        }, SWFUpload.prototype.setButtonCursor = function (b) {
            this.settings.button_cursor = b;
            this.callFlash("SetButtonCursor", [b])
        }, SWFUpload.prototype.queueEvent = function (b, d) {
            d == void 0 ? d = [] : d instanceof Array || (d = [d]);
            var g = this;
            if (typeof this.settings[b] === "function") {
                this.eventQueue.push(
                    function () {
                        this.settings[b].apply(this, d)
                    }), setTimeout(function () {
                    g.executeNextEvent()
                }, 0);
            } else if (this.settings[b] !== null) {
                throw"Event handler " + b
                     + " is unknown or is not a function";
            }
        },
            SWFUpload.prototype.executeNextEvent = function () {
                var b = this.eventQueue ? this.eventQueue.shift() : null;
                typeof b === "function" && b.apply(this)
            }, SWFUpload.prototype.unescapeFilePostParams = function (b) {
            var d = /[$]([0-9a-f]{4})/i, g = {}, l;
            if (b != void 0) {
                for (var e in b.post) {
                    if (b.post.hasOwnProperty(e)) {
                        l = e;
                        for (var h; (h = d.exec(l)) !== null;) {
                            l =
                                l.replace(h[0],
                                          String.fromCharCode(
                                              parseInt("0x" + h[1], 16)));
                        }
                        g[l] = b.post[e]
                    }
                }
                b.post = g
            }
            return b
        }, SWFUpload.prototype.testExternalInterface = function () {
            try {
                return this.callFlash("TestExternalInterface")
            } catch (b) {
                return !1
            }
        },
            SWFUpload.prototype.flashReady = function () {
                var b = this.getMovieElement();
                b ? (this.cleanUp(b), this.queueEvent(
                    "swfupload_loaded_handler"))
                    : this.debug(
                    "Flash called back ready but the flash movie can't be found.")
            }, SWFUpload.prototype.cleanUp = function (b) {
            try {
                if (this.movieElement && typeof b.CallFunction === "unknown") {
                    this.debug(
                        "Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
                    for (var d in b) {
                        try {
                            typeof b[d] === "function" && (b[d] = null)
                        } catch (g) {
                        }
                    }
                }
            } catch (l) {
            }
            window.__flash__removeCallback =
                function (b, d) {
                    try {
                        b && (b[d] = null)
                    } catch (g) {
                    }
                }
        }, SWFUpload.prototype.fileDialogStart = function () {
            this.queueEvent("file_dialog_start_handler")
        }, SWFUpload.prototype.fileQueued = function (b) {
            b = this.unescapeFilePostParams(b);
            this.queueEvent("file_queued_handler", b)
        }, SWFUpload.prototype.fileQueueError = function (b, d, g) {
            b = this.unescapeFilePostParams(b);
            this.queueEvent("file_queue_error_handler", [b, d, g])
        }, SWFUpload.prototype.fileDialogComplete = function (b, d, g) {
            this.queueEvent("file_dialog_complete_handler", [b, d,
                                                             g])
        }, SWFUpload.prototype.uploadStart = function (b) {
            b = this.unescapeFilePostParams(b);
            this.queueEvent("return_upload_start_handler", b)
        }, SWFUpload.prototype.returnUploadStart = function (b) {
            var d;
            if (typeof this.settings.upload_start_handler === "function") {
                b =
                    this.unescapeFilePostParams(b), d =
                    this.settings.upload_start_handler.call(this,
                                                            b);
            } else if (this.settings.upload_start_handler
                       != void 0) {
                throw"upload_start_handler must be a function";
            }
            d === void 0 && (d = !0);
            this.callFlash("ReturnUploadStart", [!!d])
        }, SWFUpload.prototype.uploadProgress =
            function (b, d, g) {
                b = this.unescapeFilePostParams(b);
                this.queueEvent("upload_progress_handler", [b, d, g])
            }, SWFUpload.prototype.uploadError = function (b, d, g) {
            b = this.unescapeFilePostParams(b);
            this.queueEvent("upload_error_handler", [b, d, g])
        }, SWFUpload.prototype.uploadSuccess = function (b, d, g) {
            b = this.unescapeFilePostParams(b);
            this.queueEvent("upload_success_handler", [b, d, g])
        }, SWFUpload.prototype.uploadComplete = function (b) {
            b = this.unescapeFilePostParams(b);
            this.queueEvent("upload_complete_handler", b)
        }, SWFUpload.prototype.debug =
            function (b) {
                this.queueEvent("debug_handler", b)
            }, SWFUpload.prototype.debugMessage = function (b) {
            if (this.settings.debug) {
                var d = [];
                if (typeof b === "object" && typeof b.name === "string"
                    && typeof b.message === "string") {
                    for (var g in b) {
                        b.hasOwnProperty(g) && d.push(g + ": " + b[g]);
                    }
                    b = d.join("\n") || "";
                    d = b.split("\n");
                    b = "EXCEPTION: " + d.join("\nEXCEPTION: ")
                }
                SWFUpload.Console.writeLine(b)
            }
        }, SWFUpload.Console = {}, SWFUpload.Console.writeLine = function (b) {
            var d, g;
            try {
                d = document.getElementById("SWFUpload_Console");
                if (!d) {
                    g = document.createElement("form"),
                        document.getElementsByTagName("body")[0].appendChild(
                            g), d =
                        document.createElement("textarea"), d.id =
                        "SWFUpload_Console", d.style.fontFamily =
                        "monospace", d.setAttribute("wrap", "off"), d.wrap =
                        "off", d.style.overflow = "auto", d.style.width =
                        "700px", d.style.height = "350px", d.style.margin =
                        "5px", g.appendChild(d);
                }
                d.value += b + "\n";
                d.scrollTop = d.scrollHeight - d.clientHeight
            } catch (l) {
                alert("Exception: " + l.name + " Message: " + l.message)
            }
        }
    }
})();
(function () {
    if (typeof SWFUpload === "function") {
        SWFUpload.queue =
            {}, SWFUpload.prototype.initSettings = function (b) {
            return function () {
                typeof b === "function" && b.call(this);
                this.queueSettings = {};
                this.queueSettings.queue_cancelled_flag = !1;
                this.queueSettings.queue_upload_count = 0;
                this.queueSettings.user_upload_complete_handler =
                    this.settings.upload_complete_handler;
                this.queueSettings.user_upload_start_handler =
                    this.settings.upload_start_handler;
                this.settings.upload_complete_handler =
                    SWFUpload.queue.uploadCompleteHandler;
                this.settings.upload_start_handler =
                    SWFUpload.queue.uploadStartHandler;
                this.settings.queue_complete_handler =
                    this.settings.queue_complete_handler || null
            }
        }(SWFUpload.prototype.initSettings), SWFUpload.prototype.startUpload =
            function (b) {
                this.queueSettings.queue_cancelled_flag = !1;
                this.callFlash("StartUpload", [b])
            }, SWFUpload.prototype.cancelQueue = function () {
            this.queueSettings.queue_cancelled_flag = !0;
            this.stopUpload();
            for (var b = this.getStats();
                 b.files_queued > 0;) {
                this.cancelUpload(), b = this.getStats()
            }
        }, SWFUpload.queue.uploadStartHandler =
            function (b) {
                var d;
                typeof this.queueSettings.user_upload_start_handler
                === "function"
                && (d =
                    this.queueSettings.user_upload_start_handler.call(this, b));
                d = d === !1 ? !1 : !0;
                this.queueSettings.queue_cancelled_flag = !d;
                return d
            }, SWFUpload.queue.uploadCompleteHandler = function (b) {
            var d = this.queueSettings.user_upload_complete_handler;
            b.filestatus === SWFUpload.FILE_STATUS.COMPLETE
            && this.queueSettings.queue_upload_count++;
            if (typeof d === "function" ? d.call(this, b) !== !1 : b.filestatus
                                                                   !== SWFUpload.FILE_STATUS.QUEUED) {
                this.getStats().files_queued
                >
                0
                && this.queueSettings.queue_cancelled_flag
                   === !1
                    ? this.startUpload()
                    : (this.queueSettings.queue_cancelled_flag
                       === !1 ? this.queueEvent(
                    "queue_complete_handler",
                    [this.queueSettings.queue_upload_count])
                    : this.queueSettings.queue_cancelled_flag =
                           !1, this.queueSettings.queue_upload_count =
                        0)
            }
        }
    }
})();
KindEditor.plugin("pagebreak", function (b) {
    var d = this, g = b.undef(d.pagebreakHtml,
                              '<hr style="page-break-after: always;" class="ke-pagebreak" />');
    d.clickToolbar("pagebreak", function () {
        var l = d.cmd, e = l.range;
        d.focus();
        e.enlarge(!0);
        l.split(!0);
        var h = d.newlineTag == "br" || b.WEBKIT ? ""
            : '<p id="__kindeditor_tail_tag__"></p>';
        d.insertHtml(g + h);
        h !== "" && (h =
            b("#__kindeditor_tail_tag__", d.edit.doc), e.selectNodeContents(
            h[0]), h.removeAttr("id"), l.select())
    })
});
KindEditor.plugin("plainpaste", function (b) {
    var d = this;
    d.clickToolbar("plainpaste", function () {
        var g = '<div style="padding:10px 20px;"><div style="margin-bottom:10px;">'
                + d.lang("plainpaste.").comment
                + '</div><textarea class="ke-textarea" style="width:408px;height:260px;"></textarea></div>',
            g = d.createDialog({
                                   name: "plainpaste",
                                   width: 450,
                                   title: d.lang("plainpaste"),
                                   body: g,
                                   yesBtn: {
                                       name: d.lang("yes"), click: function () {
                                           var e = l.val(), e = b.escape(e),
                                               e = e.replace(/ {2}/g,
                                                             " &nbsp;"),
                                               e = d.newlineTag == "p"
                                                   ? e.replace(/^/,
                                                               "<p>")
                                                       .replace(/$/, "</p>")
                                                       .replace(/\n/g,
                                                                "</p><p>")
                                                   : e.replace(/\n/g,
                                                               "<br />$&");
                                           d.insertHtml(e).hideDialog().focus()
                                       }
                                   }
                               }), l = b("textarea", g.div);
        l[0].focus()
    })
});
KindEditor.plugin("preview", function (b) {
    var d = this;
    d.clickToolbar("preview", function () {
        d.lang("preview.");
        var g = d.createDialog({
                                   name: "preview",
                                   width: 750,
                                   title: d.lang("preview"),
                                   body: '<div style="padding:10px 20px;"><iframe class="ke-textarea" frameborder="0" style="width:708px;height:400px;"></iframe></div>'
                               }), g = b("iframe", g.div), l = b.iframeDoc(g);
        l.open();
        l.write(d.fullHtml());
        l.close();
        b(l.body).css("background-color", "#FFF");
        g[0].contentWindow.focus()
    })
});
KindEditor.plugin("quickformat", function (b) {
    function d(b) {
        for (b = b.first(); b && b.first();) {
            b = b.first();
        }
        return b
    }

    var g = this, l = b.toMap("blockquote,center,div,h1,h2,h3,h4,h5,h6,p");
    g.clickToolbar("quickformat", function () {
        g.focus();
        for (var e = g.edit.doc, h = g.cmd.range, m = b(e.body).first(), n,
                 j = [], o = [], s = h.createBookmark(!0); m;) {
            n = m.next();
            var t = d(m);
            if (!t || t.name != "img") {
                if (l[m.name] ? (m.html(
                        m.html().replace(/^(\s|&nbsp;|\u3000)+/ig, "")), m.css(
                        "text-indent", "2em")) : o.push(m), !n || l[n.name]
                                                            || l[m.name]
                                                               && !l[n.name]) {
                    o.length
                    >
                    0
                    && j.push(
                        o), o = [];
                }
            }
            m = n
        }
        b.each(j, function (d, g) {
            var h = b('<p style="text-indent:2em;"></p>', e);
            g[0].before(h);
            b.each(g, function (b, d) {
                h.append(d)
            })
        });
        h.moveToBookmark(s);
        g.addBookmark()
    })
});
KindEditor.plugin("table", function (b) {
    function d(b, d) {
        d = d.toUpperCase();
        b.css("background-color", d);
        b.css("color", d === "#000000" ? "#FFFFFF" : "#000000");
        b.html(d)
    }

    function g(g, h) {
        function o() {
            b.each(m, function () {
                this.remove()
            });
            m = [];
            b(document).unbind("click,mousedown", o);
            g.unbind("click,mousedown", o)
        }

        h.bind("click,mousedown", function (b) {
            b.stopPropagation()
        });
        h.click(function () {
            o();
            var h = b(this), j = h.pos(), j = b.colorpicker({
                                                                x: j.x,
                                                                y: j.y
                                                                   + h.height(),
                                                                z: 811214,
                                                                selectedColor: b(
                                                                    this)
                                                                    .html(),
                                                                colors: e.colorTable,
                                                                noColor: e.lang(
                                                                    "noColor"),
                                                                shadowMode: e.shadowMode,
                                                                click: function (b) {
                                                                    d(h, b);
                                                                    o()
                                                                }
                                                            });
            m.push(j);
            b(document).bind("click,mousedown", o);
            g.bind("click,mousedown", o)
        })
    }

    function l(b, d, e) {
        for (var g = b = 0, h = d.cells.length; g < h; g++) {
            if (d.cells[g] == e) {
                break;
            }
            b += d.cells[g].rowSpan - 1
        }
        return e.cellIndex - b
    }

    var e = this, h = e.lang("table."), m = [];
    e.plugin.table = {
        prop: function (n) {
            var j = ['<div style="padding:20px;"><div class="ke-dialog-row">',
                     '<label for="keRows" style="width:90px;">' + h.cells
                     + "</label>", h.rows
                                   + ' <input type="text" id="keRows" class="ke-input-text ke-input-number" name="rows" value="" maxlength="4" /> &nbsp; ',
                     h.cols
                     + ' <input type="text" class="ke-input-text ke-input-number" name="cols" value="" maxlength="4" />',
                     '</div><div class="ke-dialog-row">',
                     '<label for="keWidth" style="width:90px;">' + h.size
                     + "</label>", h.width
                                   + ' <input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> &nbsp; ',
                     '<select name="widthType">',
                     '<option value="%">' + h.percent + "</option>",
                     '<option value="px">' + h.px + "</option>",
                     "</select> &nbsp; ", h.height
                                          + ' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> &nbsp; ',
                     '<select name="heightType">',
                     '<option value="%">' + h.percent + "</option>",
                     '<option value="px">' + h.px + "</option>",
                     '</select></div><div class="ke-dialog-row">',
                     '<label for="kePadding" style="width:90px;">' + h.space
                     + "</label>", h.padding
                                   + ' <input type="text" id="kePadding" class="ke-input-text ke-input-number" name="padding" value="" maxlength="4" /> &nbsp; ',
                     h.spacing
                     + ' <input type="text" class="ke-input-text ke-input-number" name="spacing" value="" maxlength="4" />',
                     '</div><div class="ke-dialog-row">',
                     '<label for="keAlign" style="width:90px;">' + h.align
                     + "</label>", '<select id="keAlign" name="align">',
                     '<option value="">' + h.alignDefault + "</option>",
                     '<option value="left">' + h.alignLeft + "</option>",
                     '<option value="center">' + h.alignCenter + "</option>",
                     '<option value="right">' + h.alignRight + "</option>",
                     '</select></div><div class="ke-dialog-row">',
                     '<label for="keBorder" style="width:90px;">' + h.border
                     + "</label>", h.borderWidth
                                   + ' <input type="text" id="keBorder" class="ke-input-text ke-input-number" name="border" value="" maxlength="4" /> &nbsp; ',
                     h.borderColor
                     + ' <span class="ke-inline-block ke-input-color"></span>',
                     '</div><div class="ke-dialog-row">',
                     '<label for="keBgColor" style="width:90px;">'
                     + h.backgroundColor + "</label>",
                     '<span class="ke-inline-block ke-input-color"></span></div></div>'].join(
                ""), j = e.createDialog({
                                                name: "table",
                                                width: 500,
                                                title: e.lang("table"),
                                                body: j,
                                                beforeRemove: function () {
                                                    H.unbind()
                                                },
                                                yesBtn: {
                                                    name: e.lang("yes"),
                                                    click: function () {
                                                        var d = o.val(),
                                                            g = l.val(),
                                                            h = m.val(),
                                                            j = p.val(),
                                                            n = q.val(),
                                                            E = z.val(),
                                                            G = D.val(),
                                                            S = r.val(),
                                                            Y = A.val(),
                                                            M = w.val(),
                                                            J = b(H[0]).html()
                                                                || "",
                                                            W = b(H[1]).html()
                                                                || "";
                                                        if (d == 0 || !/^\d+$/.test(
                                                                d)) {
                                                            alert(e.lang(
                                                                "invalidRows")), o[0].focus();
                                                        } else if (g
                                                                   == 0
                                                                   || !/^\d+$/.test(
                                                                g)) {
                                                            alert(e.lang(
                                                                "invalidRows")), l[0].focus();
                                                        } else if (/^\d*$/.test(
                                                                h)) {
                                                            if (/^\d*$/.test(
                                                                    j)) {
                                                                if (/^\d*$/.test(
                                                                        G)) {
                                                                    if (/^\d*$/.test(
                                                                            S)) {
                                                                        if (/^\d*$/.test(
                                                                                M)) {
                                                                            if (v) {
                                                                                h
                                                                                !== ""
                                                                                    ? v.width(h
                                                                                              + n)
                                                                                    : v.css(
                                                                                    "width",
                                                                                    ""), v[0].width
                                                                                         !== void 0
                                                                                         && v.removeAttr(
                                                                                    "width"), j
                                                                                              !== ""
                                                                                    ? v.height(j
                                                                                               + E)
                                                                                    : v.css(
                                                                                        "height",
                                                                                        ""), v[0].height
                                                                                             !== void 0
                                                                                             && v.removeAttr(
                                                                                    "height"), v.css(
                                                                                    "background-color",
                                                                                    W), v[0].bgColor
                                                                                        !==
                                                                                        void 0
                                                                                        && v.removeAttr(
                                                                                    "bgColor"), G
                                                                                                !== ""
                                                                                    ? v[0].cellPadding =
                                                                                                    G
                                                                                    : v.removeAttr(
                                                                                        "cellPadding"), S
                                                                                                        !== ""
                                                                                    ? v[0].cellSpacing =
                                                                                                            S
                                                                                    : v.removeAttr(
                                                                                        "cellSpacing"), Y
                                                                                                        !== ""
                                                                                    ? v[0].align =
                                                                                                            Y
                                                                                    : v.removeAttr(
                                                                                        "align"), M
                                                                                                  !== ""
                                                                                    ? v.attr(
                                                                                        "border",
                                                                                        M)
                                                                                    : v.removeAttr(
                                                                                        "border"), M
                                                                                                   === ""
                                                                                                   || M
                                                                                                      === "0"
                                                                                    ? v.addClass(
                                                                                        "ke-zeroborder")
                                                                                    : v.removeClass(
                                                                                        "ke-zeroborder"), J
                                                                                                          !== ""
                                                                                    ? v.attr(
                                                                                        "borderColor",
                                                                                        J)
                                                                                    : v.removeAttr(
                                                                                        "borderColor"), e.hideDialog()
                                                                                    .focus();
                                                                            } else {
                                                                                var T = "";
                                                                                h
                                                                                !== ""
                                                                                && (T +=
                                                                                    "width:"
                                                                                    + h
                                                                                    + n
                                                                                    + ";");
                                                                                j
                                                                                !== ""
                                                                                && (T +=
                                                                                    "height:"
                                                                                    + j
                                                                                    + E
                                                                                    + ";");
                                                                                W
                                                                                !== ""
                                                                                && (T +=
                                                                                    "background-color:"
                                                                                    + W
                                                                                    + ";");
                                                                                h =
                                                                                    "<table";
                                                                                T
                                                                                !== ""
                                                                                && (h +=
                                                                                    ' style="'
                                                                                    + T
                                                                                    + '"');
                                                                                G
                                                                                !== ""
                                                                                && (h +=
                                                                                    ' cellpadding="'
                                                                                    + G
                                                                                    + '"');
                                                                                S
                                                                                !== ""
                                                                                && (h +=
                                                                                    ' cellspacing="'
                                                                                    + S
                                                                                    + '"');
                                                                                Y
                                                                                !== ""
                                                                                && (h +=
                                                                                    ' align="'
                                                                                    + Y
                                                                                    + '"');
                                                                                M
                                                                                !== ""
                                                                                && (h +=
                                                                                    ' border="'
                                                                                    + M
                                                                                    + '"');
                                                                                if (M
                                                                                    === ""
                                                                                    || M
                                                                                       === "0") {
                                                                                    h +=
                                                                                        ' class="ke-zeroborder"';
                                                                                }
                                                                                J
                                                                                !== ""
                                                                                && (h +=
                                                                                    ' bordercolor="'
                                                                                    + J
                                                                                    + '"');
                                                                                h +=
                                                                                    ">";
                                                                                for (G =
                                                                                         0;
                                                                                     G
                                                                                     < d;
                                                                                     G++) {
                                                                                    h +=
                                                                                        "<tr>";
                                                                                    for (S =
                                                                                             0;
                                                                                         S
                                                                                         < g;
                                                                                         S++) {
                                                                                        h +=
                                                                                            "<td>"
                                                                                            + (b.IE
                                                                                            ? "&nbsp;"
                                                                                            : "<br />")
                                                                                            + "</td>";
                                                                                    }
                                                                                    h +=
                                                                                        "</tr>"
                                                                                }
                                                                                h +=
                                                                                    "</table>";
                                                                                b.IE
                                                                                || (h +=
                                                                                    "<br />");
                                                                                e.insertHtml(
                                                                                    h);
                                                                                e.select()
                                                                                    .hideDialog()
                                                                                    .focus();
                                                                                e.addBookmark()
                                                                            }
                                                                        } else {
                                                                            alert(
                                                                                e.lang(
                                                                                    "invalidBorder")), w[0].focus();
                                                                        }
                                                                    } else {
                                                                        alert(
                                                                            e.lang(
                                                                                "invalidSpacing")), r[0].focus();
                                                                    }
                                                                } else {
                                                                    alert(
                                                                        e.lang(
                                                                            "invalidPadding")), D[0].focus();
                                                                }
                                                            } else {
                                                                alert(
                                                                    e.lang(
                                                                        "invalidHeight")), p[0].focus();
                                                            }
                                                        } else {
                                                            alert(
                                                                e.lang(
                                                                    "invalidWidth")), m[0].focus()
                                                        }
                                                    }
                                                }
                                            }).div,
                o = b('[name="rows"]', j).val(3),
                l = b('[name="cols"]', j).val(2),
                m = b('[name="width"]', j).val(100),
                p = b('[name="height"]', j), q = b('[name="widthType"]', j),
                z = b('[name="heightType"]', j),
                D = b('[name="padding"]', j).val(2),
                r = b('[name="spacing"]', j).val(0), A = b('[name="align"]', j),
                w = b('[name="border"]', j).val(1),
                H = b(".ke-input-color", j);
            g(j, H.eq(0));
            g(j, H.eq(1));
            d(H.eq(0), "#000000");
            d(H.eq(1), "");
            o[0].focus();
            o[0].select();
            var v;
            if (!n && (v = e.plugin.getSelectedTable())) {
                o.val(v[0].rows.length);
                l.val(v[0].rows.length > 0 ? v[0].rows[0].cells.length : 0);
                o.attr("disabled", !0);
                l.attr("disabled", !0);
                var E, n = v[0].style.width || v[0].width,
                    j = v[0].style.height || v[0].height;
                n !== void 0 && (E = /^(\d+)((?:px|%)*)$/.exec(n)) ? (m.val(
                    E[1]), q.val(E[2])) : m.val("");
                if (j !== void 0 && (E = /^(\d+)((?:px|%)*)$/.exec(j))) {
                    p.val(
                        E[1]), z.val(E[2]);
                }
                D.val(v[0].cellPadding || "");
                r.val(v[0].cellSpacing || "");
                A.val(v[0].align || "");
                w.val(v[0].border === void 0 ? "" : v[0].border);
                d(H.eq(0), b.toHex(v.attr("borderColor") || ""));
                d(H.eq(1),
                  b.toHex(v[0].style.backgroundColor || v[0].bgColor || ""));
                m[0].focus();
                m[0].select()
            }
        }, cellprop: function () {
            var n = ['<div style="padding:20px;"><div class="ke-dialog-row">',
                     '<label for="keWidth" style="width:90px;">' + h.size
                     + "</label>", h.width
                                   + ' <input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> &nbsp; ',
                     '<select name="widthType">',
                     '<option value="%">' + h.percent + "</option>",
                     '<option value="px">' + h.px + "</option>",
                     "</select> &nbsp; ", h.height
                                          + ' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> &nbsp; ',
                     '<select name="heightType">',
                     '<option value="%">' + h.percent + "</option>",
                     '<option value="px">' + h.px + "</option>",
                     '</select></div><div class="ke-dialog-row">',
                     '<label for="keAlign" style="width:90px;">' + h.align
                     + "</label>",
                     h.textAlign + ' <select id="keAlign" name="textAlign">',
                     '<option value="">' + h.alignDefault + "</option>",
                     '<option value="left">' + h.alignLeft + "</option>",
                     '<option value="center">' + h.alignCenter + "</option>",
                     '<option value="right">' + h.alignRight + "</option>",
                     "</select> ",
                     h.verticalAlign + ' <select name="verticalAlign">',
                     '<option value="">' + h.alignDefault + "</option>",
                     '<option value="top">' + h.alignTop + "</option>",
                     '<option value="middle">' + h.alignMiddle + "</option>",
                     '<option value="bottom">' + h.alignBottom + "</option>",
                     '<option value="baseline">' + h.alignBaseline
                     + "</option>",
                     '</select></div><div class="ke-dialog-row">',
                     '<label for="keBorder" style="width:90px;">' + h.border
                     + "</label>", h.borderWidth
                                   + ' <input type="text" id="keBorder" class="ke-input-text ke-input-number" name="border" value="" maxlength="4" /> &nbsp; ',
                     h.borderColor
                     + ' <span class="ke-inline-block ke-input-color"></span>',
                     '</div><div class="ke-dialog-row">',
                     '<label for="keBgColor" style="width:90px;">'
                     + h.backgroundColor + "</label>",
                     '<span class="ke-inline-block ke-input-color"></span></div></div>'].join(
                ""),
                n = e.createDialog({
                                       name: "table",
                                       width: 500,
                                       title: e.lang("tablecell"),
                                       body: n,
                                       beforeRemove: function () {
                                           A.unbind()
                                       },
                                       yesBtn: {
                                           name: e.lang("yes"),
                                           click: function () {
                                               var d = j.val(), g = o.val(),
                                                   h = l.val(), n = m.val();
                                               p.val();
                                               q.val();
                                               var H = z.val(), ea = D.val(),
                                                   V = r.val(),
                                                   Q = b(A[0]).html() || "",
                                                   G = b(A[1]).html() || "";
                                               /^\d*$/.test(d) ? /^\d*$/.test(g)
                                                   ? /^\d*$/.test(V) ? (w.css({
                                                                                  width: d
                                                                                         !== ""
                                                                                      ? d
                                                                                        + h
                                                                                      : "",
                                                                                  height: g
                                                                                          !== ""
                                                                                      ? g
                                                                                        + n
                                                                                      : "",
                                                                                  "background-color": G,
                                                                                  "text-align": H,
                                                                                  "vertical-align": ea,
                                                                                  "border-width": V,
                                                                                  "border-style": V
                                                                                                  !== ""
                                                                                      ? "solid"
                                                                                      : "",
                                                                                  "border-color": Q
                                                                              }),
                                                                         e.hideDialog()
                                                                             .focus(), e.addBookmark())
                                                                     : (alert(
                                                           e.lang(
                                                               "invalidBorder")), r[0].focus())
                                                   : (alert(e.lang(
                                                       "invalidHeight")), o[0].focus())
                                                   : (alert(e.lang(
                                                   "invalidWidth")), j[0].focus())
                                           }
                                       }
                                   }).div, j = b('[name="width"]', n).val(100),
                o = b('[name="height"]', n), l = b('[name="widthType"]', n),
                m = b('[name="heightType"]', n),
                p = b('[name="padding"]', n).val(2),
                q = b('[name="spacing"]', n).val(0),
                z = b('[name="textAlign"]', n),
                D = b('[name="verticalAlign"]', n),
                r = b('[name="border"]', n).val(1), A = b(".ke-input-color", n);
            g(n, A.eq(0));
            g(n, A.eq(1));
            d(A.eq(0), "#000000");
            d(A.eq(1), "");
            j[0].focus();
            j[0].select();
            var w = e.plugin.getSelectedCell(),
                H = w[0].style.height || w[0].height || "";
            (n =
                /^(\d+)((?:px|%)*)$/.exec(w[0].style.width || w[0].width || ""))
                ? (j.val(n[1]), l.val(n[2])) : j.val("");
            if (n = /^(\d+)((?:px|%)*)$/.exec(H)) {
                o.val(n[1]), m.val(n[2]);
            }
            z.val(w[0].style.textAlign || "");
            D.val(w[0].style.verticalAlign || "");
            (n = w[0].style.borderWidth || "") && (n = parseInt(n));
            r.val(n);
            d(A.eq(0), b.toHex(w[0].style.borderColor || ""));
            d(A.eq(1), b.toHex(w[0].style.backgroundColor ||
                               ""));
            j[0].focus();
            j[0].select()
        }, insert: function () {
            this.prop(!0)
        }, "delete": function () {
            var b = e.plugin.getSelectedTable();
            e.cmd.range.setStartBefore(b[0]).collapse(!0);
            e.cmd.select();
            b.remove();
            e.addBookmark()
        }, colinsert: function (d) {
            var g = e.plugin.getSelectedTable()[0],
                h = e.plugin.getSelectedRow()[0],
                m = e.plugin.getSelectedCell()[0], d = m.cellIndex + d;
            d += g.rows[0].cells.length - h.cells.length;
            for (var h = 0, t = g.rows.length; h < t; h++) {
                var p = g.rows[h], d = p.insertCell(d);
                d.innerHTML = b.IE ? "" : "<br />";
                d = l(g, p, d)
            }
            e.cmd.range.selectNodeContents(m).collapse(!0);
            e.cmd.select();
            e.addBookmark()
        }, colinsertleft: function () {
            this.colinsert(0)
        }, colinsertright: function () {
            this.colinsert(1)
        }, rowinsert: function (d) {
            var g = e.plugin.getSelectedTable()[0],
                h = e.plugin.getSelectedRow()[0],
                l = e.plugin.getSelectedCell()[0], m = h.rowIndex;
            d === 1 && (m = h.rowIndex + (l.rowSpan - 1) + d);
            for (var p = g.insertRow(m), q = 0, z = h.cells.length; q < z;
                 q++) {
                h.cells[q].rowSpan > 1 && (z -= h.cells[q].rowSpan - 1);
                var D = p.insertCell(q);
                if (d === 1 && h.cells[q].colSpan > 1) {
                    D.colSpan =
                        h.cells[q].colSpan;
                }
                D.innerHTML = b.IE ? "" : "<br />"
            }
            for (h =
                     m; h >= 0; h--) {
                if (d = g.rows[h].cells, d.length > q) {
                    for (g = l.cellIndex; g >= 0; g--) {
                        d[g].rowSpan > 1
                        && (d[g].rowSpan += 1);
                    }
                    break
                }
            }
            e.cmd.range.selectNodeContents(l).collapse(!0);
            e.cmd.select();
            e.addBookmark()
        }, rowinsertabove: function () {
            this.rowinsert(0)
        }, rowinsertbelow: function () {
            this.rowinsert(1)
        }, rowmerge: function () {
            var b = e.plugin.getSelectedTable()[0],
                d = e.plugin.getSelectedRow()[0],
                g = e.plugin.getSelectedCell()[0], h = d.rowIndex + g.rowSpan,
                d = b.rows[h];
            if (!(b.rows.length <= h)) {
                b = g.cellIndex, d.cells.length <= b
                                 || (h = d.cells[b],
                g.colSpan === h.colSpan && (g.rowSpan +=
                    h.rowSpan, d.deleteCell(
                    b), e.cmd.range.selectNodeContents(g)
                    .collapse(!0), e.cmd.select(), e.addBookmark()))
            }
        }, colmerge: function () {
            e.plugin.getSelectedTable();
            var b = e.plugin.getSelectedRow()[0],
                d = e.plugin.getSelectedCell()[0], g = d.cellIndex + 1;
            if (!(b.cells.length <= g)) {
                var h = b.cells[g];
                d.rowSpan === h.rowSpan && (d.colSpan +=
                    h.colSpan, b.deleteCell(g), e.cmd.range.selectNodeContents(
                    d).collapse(!0), e.cmd.select(), e.addBookmark())
            }
        }, rowsplit: function () {
            var d = e.plugin.getSelectedTable()[0],
                g = e.plugin.getSelectedRow()[0],
                h = e.plugin.getSelectedCell()[0], m = g.rowIndex;
            if (h.rowSpan !== 1) {
                for (var t = l(d, g, h), g = 1, p = h.rowSpan; g < p; g++) {
                    var q = d.rows[m + g], t = q.insertCell(t);
                    if (h.colSpan > 1) {
                        t.colSpan = h.colSpan;
                    }
                    t.innerHTML = b.IE ? "" : "<br />";
                    t = l(d, q, t)
                }
                b(h).removeAttr("rowSpan");
                e.cmd.range.selectNodeContents(h).collapse(!0);
                e.cmd.select();
                e.addBookmark()
            }
        }, colsplit: function () {
            e.plugin.getSelectedTable();
            var d = e.plugin.getSelectedRow()[0],
                g = e.plugin.getSelectedCell()[0], h = g.cellIndex;
            if (g.colSpan !== 1) {
                for (var l =
                    1, m = g.colSpan; l < m; l++) {
                    var p = d.insertCell(h + l);
                    if (g.rowSpan > 1) {
                        p.rowSpan = g.rowSpan;
                    }
                    p.innerHTML = b.IE ? "" : "<br />"
                }
                b(g).removeAttr("colSpan");
                e.cmd.range.selectNodeContents(g).collapse(!0);
                e.cmd.select();
                e.addBookmark()
            }
        }, coldelete: function () {
            for (var d = e.plugin.getSelectedTable()[0],
                     g = e.plugin.getSelectedRow()[0],
                     h = e.plugin.getSelectedCell()[0].cellIndex, l = 0,
                     m = d.rows.length; l < m; l++) {
                var p = d.rows[l], q = p.cells[h];
                q.colSpan > 1 ? (q.colSpan -= 1, q.colSpan === 1 && b(q)
                    .removeAttr("colSpan")) : p.deleteCell(h);
                q.rowSpan >
                1 && (l += q.rowSpan - 1)
            }
            g.cells.length === 0 ? (e.cmd.range.setStartBefore(d)
                .collapse(!0), e.cmd.select(), b(d).remove()) : e.cmd.selection(
                !0);
            e.addBookmark()
        }, rowdelete: function () {
            for (var d = e.plugin.getSelectedTable()[0],
                     g = e.plugin.getSelectedRow()[0],
                     h = e.plugin.getSelectedCell()[0], g = g.rowIndex,
                     h = h.rowSpan - 1; h >= 0; h--) {
                d.deleteRow(g + h);
            }
            d.rows.length === 0 ? (e.cmd.range.setStartBefore(d)
                .collapse(!0), e.cmd.select(), b(d).remove()) : e.cmd.selection(
                !0);
            e.addBookmark()
        }
    };
    e.clickToolbar("table", e.plugin.table.prop)
});
KindEditor.plugin("template", function (b) {
    function d(d) {
        return l + d + "?ver=" + encodeURIComponent(
            b.DEBUG ? b.TIME : b.VERSION)
    }

    var g = this;
    g.lang("template.");
    var l = g.pluginsPath + "template/html/";
    g.clickToolbar("template", function () {
        var e = g.lang("template."),
            h = ['<div style="padding:10px 20px;">', '<div class="ke-header">',
                 '<div class="ke-left">', e.selectTemplate + " <select>"];
        b.each(e.fileList, function (b, d) {
            h.push('<option value="' + b + '">' + d + "</option>")
        });
        html = [h.join(""), '</select></div><div class="ke-right">',
                '<input type="checkbox" id="keReplaceFlag" name="replaceFlag" value="1" /> <label for="keReplaceFlag">'
                + e.replaceContent + "</label>",
                '</div><div class="ke-clearfix"></div></div><iframe class="ke-textarea" frameborder="0" style="width:458px;height:260px;background-color:#FFF;"></iframe></div>'].join(
            "");
        var e = g.createDialog({
                                   name: "template",
                                   width: 500,
                                   title: g.lang("template"),
                                   body: html,
                                   yesBtn: {
                                       name: g.lang("yes"),
                                       click: function () {
                                           var d = b.iframeDoc(j);
                                           g[n[0].checked ? "html"
                                               : "insertHtml"](d.body.innerHTML)
                                               .hideDialog().focus()
                                       }
                                   }
                               }),
            l = b("select", e.div), n = b('[name="replaceFlag"]', e.div),
            j = b("iframe", e.div);
        n[0].checked = !0;
        j.attr("src", d(l.val()));
        l.change(function () {
            j.attr("src", d(this.value))
        })
    })
});
KindEditor.plugin("wordpaste", function (b) {
    var d = this;
    d.clickToolbar("wordpaste", function () {
        var g = '<div style="padding:10px 20px;"><div style="margin-bottom:10px;">'
                + d.lang("wordpaste.").comment
                + '</div><iframe class="ke-textarea" frameborder="0" style="width:408px;height:260px;"></iframe></div>',
            g = d.createDialog({
                                   name: "wordpaste",
                                   width: 450,
                                   title: d.lang("wordpaste"),
                                   body: g,
                                   yesBtn: {
                                       name: d.lang("yes"), click: function () {
                                           var e = l.body.innerHTML,
                                               e = b.clearMsWord(e, d.filterMode
                                                   ? d.htmlTags
                                                   : b.options.htmlTags);
                                           d.insertHtml(e).hideDialog().focus()
                                       }
                                   }
                               }).div, g = b("iframe", g), l = b.iframeDoc(g);
        if (!b.IE) {
            l.designMode = "on";
        }
        l.open();
        l.write("<!doctype html><html><head><title>WordPaste</title></head>");
        l.write(
            '<body style="background-color:#FFF;font-size:12px;margin:2px;">');
        b.IE || l.write("<br />");
        l.write("</body></html>");
        l.close();
        if (b.IE) {
            l.body.contentEditable = "true";
        }
        g[0].contentWindow.focus()
    })
});
