!function (e, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((e = "undefined" != typeof globalThis ? globalThis : e || self).ThumbmarkJS = {})
}(this, (function (e) {
    "use strict";

    function n(e, n, r, t) {
        return new (r || (r = Promise))((function (o, a) {
            function i(e) {
                try {
                    c(t.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                try {
                    c(t.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                var n;
                e.done ? o(e.value) : (n = e.value, n instanceof r ? n : new r((function (e) {
                    e(n)
                }))).then(i, u)
            }

            c((t = t.apply(e, n || [])).next())
        }))
    }

    function r(e, n) {
        var r, t, o, a, i = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return a = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
            return this
        }), a;

        function u(u) {
            return function (c) {
                return function (u) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a && (a = 0, u[0] && (i = 0)), i;) try {
                        if (r = 1, t && (o = 2 & u[0] ? t.return : u[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, u[1])).done) return o;
                        switch (t = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                            case 0:
                            case 1:
                                o = u;
                                break;
                            case 4:
                                return i.label++, {value: u[1], done: !1};
                            case 5:
                                i.label++, t = u[1], u = [0];
                                continue;
                            case 7:
                                u = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                    i.label = u[1];
                                    break
                                }
                                if (6 === u[0] && i.label < o[1]) {
                                    i.label = o[1], o = u;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(u);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        u = n.call(e, i)
                    } catch (e) {
                        u = [6, e], t = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {value: u[0] ? u[1] : void 0, done: !0}
                }([u, c])
            }
        }
    }

    "function" == typeof SuppressedError && SuppressedError;
    var t = {exclude: [], include: [], logging: !0};
    var o = {}, a = {timeout: "true"}, i = function (e, n) {
        "undefined" != typeof window && (o[e] = n)
    }, u = function () {
        return Object.fromEntries(Object.entries(o).filter((function (e) {
            var n, r = e[0];
            return !(null === (n = null == t ? void 0 : t.exclude) || void 0 === n ? void 0 : n.includes(r))
        })).filter((function (e) {
            var n, r, o, a, i = e[0];
            return (null === (n = null == t ? void 0 : t.include) || void 0 === n ? void 0 : n.some((function (e) {
                return e.includes(".")
            }))) ? null === (r = null == t ? void 0 : t.include) || void 0 === r ? void 0 : r.some((function (e) {
                return e.startsWith(i)
            })) : 0 === (null === (o = null == t ? void 0 : t.include) || void 0 === o ? void 0 : o.length) || (null === (a = null == t ? void 0 : t.include) || void 0 === a ? void 0 : a.includes(i))
        })).map((function (e) {
            return [e[0], (0, e[1])()]
        })))
    };

    function c(e) {
        return e ^= e >>> 16, e = Math.imul(e, 2246822507), e ^= e >>> 13, e = Math.imul(e, 3266489909), (e ^= e >>> 16) >>> 0
    }

    var s = new Uint32Array([597399067, 2869860233, 951274213, 2716044179]);

    function l(e, n) {
        return e << n | e >>> 32 - n
    }

    function d(e, n) {
        var r;
        if (void 0 === n && (n = 0), n = n ? 0 | n : 0, "string" == typeof e && (r = e, e = (new TextEncoder).encode(r).buffer), !(e instanceof ArrayBuffer)) throw new TypeError("Expected key to be ArrayBuffer or string");
        var t = new Uint32Array([n, n, n, n]);
        !function (e, n) {
            for (var r = e.byteLength / 16 | 0, t = new Uint32Array(e, 0, 4 * r), o = 0; o < r; o++) {
                var a = t.subarray(4 * o, 4 * (o + 1));
                a[0] = Math.imul(a[0], s[0]), a[0] = l(a[0], 15), a[0] = Math.imul(a[0], s[1]), n[0] = n[0] ^ a[0], n[0] = l(n[0], 19), n[0] = n[0] + n[1], n[0] = Math.imul(n[0], 5) + 1444728091, a[1] = Math.imul(a[1], s[1]), a[1] = l(a[1], 16), a[1] = Math.imul(a[1], s[2]), n[1] = n[1] ^ a[1], n[1] = l(n[1], 17), n[1] = n[1] + n[2], n[1] = Math.imul(n[1], 5) + 197830471, a[2] = Math.imul(a[2], s[2]), a[2] = l(a[2], 17), a[2] = Math.imul(a[2], s[3]), n[2] = n[2] ^ a[2], n[2] = l(n[2], 15), n[2] = n[2] + n[3], n[2] = Math.imul(n[2], 5) + 2530024501, a[3] = Math.imul(a[3], s[3]), a[3] = l(a[3], 18), a[3] = Math.imul(a[3], s[0]), n[3] = n[3] ^ a[3], n[3] = l(n[3], 13), n[3] = n[3] + n[0], n[3] = Math.imul(n[3], 5) + 850148119
            }
        }(e, t), function (e, n) {
            var r = e.byteLength / 16 | 0, t = e.byteLength % 16, o = new Uint32Array(4),
                a = new Uint8Array(e, 16 * r, t);
            switch (t) {
                case 15:
                    o[3] = o[3] ^ a[14] << 16;
                case 14:
                    o[3] = o[3] ^ a[13] << 8;
                case 13:
                    o[3] = o[3] ^ a[12] << 0, o[3] = Math.imul(o[3], s[3]), o[3] = l(o[3], 18), o[3] = Math.imul(o[3], s[0]), n[3] = n[3] ^ o[3];
                case 12:
                    o[2] = o[2] ^ a[11] << 24;
                case 11:
                    o[2] = o[2] ^ a[10] << 16;
                case 10:
                    o[2] = o[2] ^ a[9] << 8;
                case 9:
                    o[2] = o[2] ^ a[8] << 0, o[2] = Math.imul(o[2], s[2]), o[2] = l(o[2], 17), o[2] = Math.imul(o[2], s[3]), n[2] = n[2] ^ o[2];
                case 8:
                    o[1] = o[1] ^ a[7] << 24;
                case 7:
                    o[1] = o[1] ^ a[6] << 16;
                case 6:
                    o[1] = o[1] ^ a[5] << 8;
                case 5:
                    o[1] = o[1] ^ a[4] << 0, o[1] = Math.imul(o[1], s[1]), o[1] = l(o[1], 16), o[1] = Math.imul(o[1], s[2]), n[1] = n[1] ^ o[1];
                case 4:
                    o[0] = o[0] ^ a[3] << 24;
                case 3:
                    o[0] = o[0] ^ a[2] << 16;
                case 2:
                    o[0] = o[0] ^ a[1] << 8;
                case 1:
                    o[0] = o[0] ^ a[0] << 0, o[0] = Math.imul(o[0], s[0]), o[0] = l(o[0], 15), o[0] = Math.imul(o[0], s[1]), n[0] = n[0] ^ o[0]
            }
        }(e, t), function (e, n) {
            n[0] = n[0] ^ e.byteLength, n[1] = n[1] ^ e.byteLength, n[2] = n[2] ^ e.byteLength, n[3] = n[3] ^ e.byteLength, n[0] = n[0] + n[1] | 0, n[0] = n[0] + n[2] | 0, n[0] = n[0] + n[3] | 0, n[1] = n[1] + n[0] | 0, n[2] = n[2] + n[0] | 0, n[3] = n[3] + n[0] | 0, n[0] = c(n[0]), n[1] = c(n[1]), n[2] = c(n[2]), n[3] = c(n[3]), n[0] = n[0] + n[1] | 0, n[0] = n[0] + n[2] | 0, n[0] = n[0] + n[3] | 0, n[1] = n[1] + n[0] | 0, n[2] = n[2] + n[0] | 0, n[3] = n[3] + n[0] | 0
        }(e, t);
        var o = new Uint8Array(t.buffer);
        return Array.from(o).map((function (e) {
            return e.toString(16).padStart(2, "0")
        })).join("")
    }

    function f(e, n) {
        return new Promise((function (r) {
            setTimeout((function () {
                return r(n)
            }), e)
        }))
    }

    function h(e, n, r) {
        return Promise.all(e.map((function (e) {
            var t = performance.now();
            return Promise.race([e.then((function (e) {
                return {value: e, elapsed: performance.now() - t}
            })), f(n, r).then((function (e) {
                return {value: e, elapsed: performance.now() - t}
            }))])
        })))
    }

    function m(e, n, r) {
        return Promise.all(e.map((function (e) {
            return Promise.race([e, f(n, r)])
        })))
    }

    var v = "0.19.1";

    function g() {
        return v
    }

    function p() {
        return n(this, void 0, void 0, (function () {
            var e, n, o, i, c;
            return r(this, (function (r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]), e = u(), n = Object.keys(e), [4, m(Object.values(e), (null == t ? void 0 : t.timeout) || 1e3, a)];
                    case 1:
                        return o = r.sent(), i = o.filter((function (e) {
                            return void 0 !== e
                        })), c = {}, i.forEach((function (e, r) {
                            c[n[r]] = e
                        })), [2, w(c, t.exclude || [], t.include || [], "")];
                    case 2:
                        throw r.sent();
                    case 3:
                        return [2]
                }
            }))
        }))
    }

    function w(e, n, r, t) {
        void 0 === t && (t = "");
        for (var o = {}, a = function (e, a) {
            var i = t + e + ".";
            if ("object" != typeof a || Array.isArray(a)) {
                var u = n.some((function (e) {
                    return i.startsWith(e)
                })), c = r.some((function (e) {
                    return i.startsWith(e)
                }));
                u && !c || (o[e] = a)
            } else {
                var s = w(a, n, r, i);
                Object.keys(s).length > 0 && (o[e] = s)
            }
        }, i = 0, u = Object.entries(e); i < u.length; i++) {
            var c = u[i];
            a(c[0], c[1])
        }
        return o
    }

    function y(e) {
        for (var n = 0, r = 0; r < e.length; ++r) n += Math.abs(e[r]);
        return n
    }

    function b(e, n, r) {
        for (var t = [], o = 0; o < e[0].data.length; o++) {
            for (var a = [], i = 0; i < e.length; i++) a.push(e[i].data[o]);
            t.push(S(a))
        }
        var u = new Uint8ClampedArray(t);
        return new ImageData(u, n, r)
    }

    function S(e) {
        if (0 === e.length) return 0;
        for (var n = {}, r = 0, t = e; r < t.length; r++) {
            n[a = t[r]] = (n[a] || 0) + 1
        }
        var o = e[0];
        for (var a in n) n[a] > n[o] && (o = parseInt(a, 10));
        return o
    }

    function M() {
        if ("undefined" == typeof navigator) return {name: "unknown", version: "unknown"};
        for (var e = navigator.userAgent, n = {
            Edg: "Edge",
            OPR: "Opera"
        }, r = 0, t = [/(?<name>Edge|Edg)\/(?<version>\d+(?:\.\d+)?)/, /(?<name>(?:Chrome|Chromium|OPR|Opera|Vivaldi|Brave))\/(?<version>\d+(?:\.\d+)?)/, /(?<name>(?:Firefox|Waterfox|Iceweasel|IceCat))\/(?<version>\d+(?:\.\d+)?)/, /(?<name>Safari)\/(?<version>\d+(?:\.\d+)?)/, /(?<name>MSIE|Trident|IEMobile).+?(?<version>\d+(?:\.\d+)?)/, /(?<name>[A-Za-z]+)\/(?<version>\d+(?:\.\d+)?)/, /(?<name>SamsungBrowser)\/(?<version>\d+(?:\.\d+)?)/]; r < t.length; r++) {
            var o = t[r], a = e.match(o);
            if (a && a.groups) return {name: n[a.groups.name] || a.groups.name, version: a.groups.version}
        }
        return {name: "unknown", version: "unknown"}
    }

    i("audio", (function () {
        return n(this, void 0, void 0, (function () {
            return r(this, (function (e) {
                return [2, new Promise((function (e, n) {
                    try {
                        var r = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 5e3, 44100),
                            t = r.createBufferSource(), o = r.createOscillator();
                        o.frequency.value = 1e3;
                        var a, i = r.createDynamicsCompressor();
                        i.threshold.value = -50, i.knee.value = 40, i.ratio.value = 12, i.attack.value = 0, i.release.value = .2, o.connect(i), i.connect(r.destination), o.start(), r.oncomplete = function (n) {
                            a = n.renderedBuffer.getChannelData(0), e({
                                sampleHash: y(a),
                                oscillator: o.type,
                                maxChannels: r.destination.maxChannelCount,
                                channelCountMode: t.channelCountMode
                            })
                        }, r.startRendering()
                    } catch (e) {
                        console.error("Error creating audio fingerprint:", e), n(e)
                    }
                }))]
            }))
        }))
    }));
    var E = "SamsungBrowser" !== M().name ? 1 : 3, P = 280, A = 20;
    "Firefox" != M().name && i("canvas", (function () {
        return document.createElement("canvas").getContext("2d"), new Promise((function (e) {
            var n = Array.from({length: E}, (function () {
                return function () {
                    var e = document.createElement("canvas"), n = e.getContext("2d");
                    if (!n) return new ImageData(1, 1);
                    e.width = P, e.height = A;
                    var r = n.createLinearGradient(0, 0, e.width, e.height);
                    r.addColorStop(0, "red"), r.addColorStop(1 / 6, "orange"), r.addColorStop(2 / 6, "yellow"), r.addColorStop(.5, "green"), r.addColorStop(4 / 6, "blue"), r.addColorStop(5 / 6, "indigo"), r.addColorStop(1, "violet"), n.fillStyle = r, n.fillRect(0, 0, e.width, e.height);
                    var t = "Random Text WMwmil10Oo";
                    n.font = "23.123px Arial", n.fillStyle = "black", n.fillText(t, -5, 15), n.fillStyle = "rgba(0, 0, 255, 0.5)", n.fillText(t, -3.3, 17.7), n.beginPath(), n.moveTo(0, 0), n.lineTo(2 * e.width / 7, e.height), n.strokeStyle = "white", n.lineWidth = 2, n.stroke();
                    var o = n.getImageData(0, 0, e.width, e.height);
                    return o
                }()
            }));
            e({commonImageDataHash: d(b(n, P, A).data.toString()).toString()})
        }))
    }));
    var C,
        x = ["Arial", "Arial Black", "Arial Narrow", "Arial Rounded MT", "Arimo", "Archivo", "Barlow", "Bebas Neue", "Bitter", "Bookman", "Calibri", "Cabin", "Candara", "Century", "Century Gothic", "Comic Sans MS", "Constantia", "Courier", "Courier New", "Crimson Text", "DM Mono", "DM Sans", "DM Serif Display", "DM Serif Text", "Dosis", "Droid Sans", "Exo", "Fira Code", "Fira Sans", "Franklin Gothic Medium", "Garamond", "Geneva", "Georgia", "Gill Sans", "Helvetica", "Impact", "Inconsolata", "Indie Flower", "Inter", "Josefin Sans", "Karla", "Lato", "Lexend", "Lucida Bright", "Lucida Console", "Lucida Sans Unicode", "Manrope", "Merriweather", "Merriweather Sans", "Montserrat", "Myriad", "Noto Sans", "Nunito", "Nunito Sans", "Open Sans", "Optima", "Orbitron", "Oswald", "Pacifico", "Palatino", "Perpetua", "PT Sans", "PT Serif", "Poppins", "Prompt", "Public Sans", "Quicksand", "Rajdhani", "Recursive", "Roboto", "Roboto Condensed", "Rockwell", "Rubik", "Segoe Print", "Segoe Script", "Segoe UI", "Sora", "Source Sans Pro", "Space Mono", "Tahoma", "Taviraj", "Times", "Times New Roman", "Titillium Web", "Trebuchet MS", "Ubuntu", "Varela Round", "Verdana", "Work Sans"],
        T = ["monospace", "sans-serif", "serif"];

    function k(e, n) {
        if (!e) throw new Error("Canvas context not supported");
        return e.font, e.font = "72px ".concat(n), e.measureText("WwMmLli0Oo").width
    }

    function R() {
        var e, n = document.createElement("canvas"),
            r = null !== (e = n.getContext("webgl")) && void 0 !== e ? e : n.getContext("experimental-webgl");
        if (r && "getParameter" in r) try {
            var t = (r.getParameter(r.VENDOR) || "").toString(), o = (r.getParameter(r.RENDERER) || "").toString(),
                a = {
                    vendor: t,
                    renderer: o,
                    version: (r.getParameter(r.VERSION) || "").toString(),
                    shadingLanguageVersion: (r.getParameter(r.SHADING_LANGUAGE_VERSION) || "").toString()
                };
            if (!o.length || !t.length) {
                var i = r.getExtension("WEBGL_debug_renderer_info");
                if (i) {
                    var u = (r.getParameter(i.UNMASKED_VENDOR_WEBGL) || "").toString(),
                        c = (r.getParameter(i.UNMASKED_RENDERER_WEBGL) || "").toString();
                    u && (a.vendorUnmasked = u), c && (a.rendererUnmasked = c)
                }
            }
            return a
        } catch (e) {
        }
        return "undefined"
    }

    function I() {
        var e = new Float32Array(1), n = new Uint8Array(e.buffer);
        return e[0] = 1 / 0, e[0] = e[0] - e[0], n[3]
    }

    function O(e, n) {
        var r = {};
        return n.forEach((function (n) {
            var t = function (e) {
                if (0 === e.length) return null;
                var n = {};
                e.forEach((function (e) {
                    var r = String(e);
                    n[r] = (n[r] || 0) + 1
                }));
                var r = e[0], t = 1;
                return Object.keys(n).forEach((function (e) {
                    n[e] > t && (r = e, t = n[e])
                })), r
            }(e.map((function (e) {
                return n in e ? e[n] : void 0
            })).filter((function (e) {
                return void 0 !== e
            })));
            t && (r[n] = t)
        })), r
    }

    function _() {
        var e = [], n = {
            "prefers-contrast": ["high", "more", "low", "less", "forced", "no-preference"],
            "any-hover": ["hover", "none"],
            "any-pointer": ["none", "coarse", "fine"],
            pointer: ["none", "coarse", "fine"],
            hover: ["hover", "none"],
            update: ["fast", "slow"],
            "inverted-colors": ["inverted", "none"],
            "prefers-reduced-motion": ["reduce", "no-preference"],
            "prefers-reduced-transparency": ["reduce", "no-preference"],
            scripting: ["none", "initial-only", "enabled"],
            "forced-colors": ["active", "none"]
        };
        return Object.keys(n).forEach((function (r) {
            n[r].forEach((function (n) {
                matchMedia("(".concat(r, ": ").concat(n, ")")).matches && e.push("".concat(r, ": ").concat(n))
            }))
        })), e
    }

    function L() {
        if ("https:" === window.location.protocol && "function" == typeof window.ApplePaySession) try {
            for (var e = window.ApplePaySession.supportsVersion, n = 15; n > 0; n--) if (e(n)) return n
        } catch (e) {
            return 0
        }
        return 0
    }

    "Firefox" != M().name && i("fonts", (function () {
        var e = this;
        return new Promise((function (t, o) {
            try {
                !function (e) {
                    var t;
                    n(this, void 0, void 0, (function () {
                        var n, o, a;
                        return r(this, (function (r) {
                            switch (r.label) {
                                case 0:
                                    return document.body ? [3, 2] : [4, (i = 50, new Promise((function (e) {
                                        return setTimeout(e, i, u)
                                    })))];
                                case 1:
                                    return r.sent(), [3, 0];
                                case 2:
                                    if ((n = document.createElement("iframe")).setAttribute("frameBorder", "0"), (o = n.style).setProperty("position", "fixed"), o.setProperty("display", "block", "important"), o.setProperty("visibility", "visible"), o.setProperty("border", "0"), o.setProperty("opacity", "0"), n.src = "about:blank", document.body.appendChild(n), !(a = n.contentDocument || (null === (t = n.contentWindow) || void 0 === t ? void 0 : t.document))) throw new Error("Iframe document is not accessible");
                                    return e({iframe: a}), setTimeout((function () {
                                        document.body.removeChild(n)
                                    }), 0), [2]
                            }
                            var i, u
                        }))
                    }))
                }((function (o) {
                    var a = o.iframe;
                    return n(e, void 0, void 0, (function () {
                        var e, n, o, i;
                        return r(this, (function (r) {
                            return "Hello, world!", e = a.createElement("canvas"), n = e.getContext("2d"), o = T.map((function (e) {
                                return k(n, e)
                            })), i = {}, x.forEach((function (e) {
                                var r = k(n, e);
                                o.includes(r) || (i[e] = r)
                            })), t(i), [2]
                        }))
                    }))
                }))
            } catch (e) {
                o({error: "unsupported"})
            }
        }))
    })), i("hardware", (function () {
        return new Promise((function (e, n) {
            var r = void 0 !== navigator.deviceMemory ? navigator.deviceMemory : 0,
                t = window.performance && window.performance.memory ? window.performance.memory : 0;
            e({
                videocard: R(),
                architecture: I(),
                deviceMemory: r.toString() || "undefined",
                jsHeapSizeLimit: t.jsHeapSizeLimit || 0
            })
        }))
    })), i("locales", (function () {
        return new Promise((function (e) {
            e({languages: navigator.language, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone})
        }))
    })), i("permissions", (function () {
        return n(this, void 0, void 0, (function () {
            var e;
            return r(this, (function (o) {
                return C = (null == t ? void 0 : t.permissions_to_check) || ["accelerometer", "accessibility", "accessibility-events", "ambient-light-sensor", "background-fetch", "background-sync", "bluetooth", "camera", "clipboard-read", "clipboard-write", "device-info", "display-capture", "gyroscope", "geolocation", "local-fonts", "magnetometer", "microphone", "midi", "nfc", "notifications", "payment-handler", "persistent-storage", "push", "speaker", "storage-access", "top-level-storage-access", "window-management", "query"], e = Array.from({length: (null == t ? void 0 : t.retries) || 3}, (function () {
                    return function () {
                        return n(this, void 0, void 0, (function () {
                            var e, n, t, o, a;
                            return r(this, (function (r) {
                                switch (r.label) {
                                    case 0:
                                        e = {}, n = 0, t = C, r.label = 1;
                                    case 1:
                                        if (!(n < t.length)) return [3, 6];
                                        o = t[n], r.label = 2;
                                    case 2:
                                        return r.trys.push([2, 4, , 5]), [4, navigator.permissions.query({name: o})];
                                    case 3:
                                        return a = r.sent(), e[o] = a.state.toString(), [3, 5];
                                    case 4:
                                        return r.sent(), [3, 5];
                                    case 5:
                                        return n++, [3, 1];
                                    case 6:
                                        return [2, e]
                                }
                            }))
                        }))
                    }()
                })), [2, Promise.all(e).then((function (e) {
                    return O(e, C)
                }))]
            }))
        }))
    })), i("plugins", (function () {
        var e = [];
        if (navigator.plugins) for (var n = 0; n < navigator.plugins.length; n++) {
            var r = navigator.plugins[n];
            e.push([r.name, r.filename, r.description].join("|"))
        }
        return new Promise((function (n) {
            n({plugins: e})
        }))
    })), i("screen", (function () {
        return new Promise((function (e) {
            e({
                is_touchscreen: navigator.maxTouchPoints > 0,
                maxTouchPoints: navigator.maxTouchPoints,
                colorDepth: screen.colorDepth,
                mediaMatches: _()
            })
        }))
    })), i("system", (function () {
        return new Promise((function (e) {
            var n = M();
            e({
                platform: window.navigator.platform,
                cookieEnabled: window.navigator.cookieEnabled,
                productSub: navigator.productSub,
                product: navigator.product,
                useragent: navigator.userAgent,
                hardwareConcurrency: navigator.hardwareConcurrency,
                browser: {name: n.name, version: n.version},
                applePayVersion: L()
            })
        }))
    }));
    var D, B = "SamsungBrowser" !== M().name ? 1 : 3, F = null;
    i("webgl", (function () {
        return n(this, void 0, void 0, (function () {
            var e;
            return r(this, (function (n) {
                "undefined" != typeof document && ((D = document.createElement("canvas")).width = 200, D.height = 100, F = D.getContext("webgl"));
                try {
                    if (!F) throw new Error("WebGL not supported");
                    return e = Array.from({length: B}, (function () {
                        return function () {
                            try {
                                if (!F) throw new Error("WebGL not supported");
                                var e = "\n          attribute vec2 position;\n          void main() {\n              gl_Position = vec4(position, 0.0, 1.0);\n          }\n      ",
                                    n = "\n          precision mediump float;\n          void main() {\n              gl_FragColor = vec4(0.812, 0.195, 0.553, 0.921); // Set line color\n          }\n      ",
                                    r = F.createShader(F.VERTEX_SHADER), t = F.createShader(F.FRAGMENT_SHADER);
                                if (!r || !t) throw new Error("Failed to create shaders");
                                if (F.shaderSource(r, e), F.shaderSource(t, n), F.compileShader(r), !F.getShaderParameter(r, F.COMPILE_STATUS)) throw new Error("Vertex shader compilation failed: " + F.getShaderInfoLog(r));
                                if (F.compileShader(t), !F.getShaderParameter(t, F.COMPILE_STATUS)) throw new Error("Fragment shader compilation failed: " + F.getShaderInfoLog(t));
                                var o = F.createProgram();
                                if (!o) throw new Error("Failed to create shader program");
                                if (F.attachShader(o, r), F.attachShader(o, t), F.linkProgram(o), !F.getProgramParameter(o, F.LINK_STATUS)) throw new Error("Shader program linking failed: " + F.getProgramInfoLog(o));
                                F.useProgram(o);
                                for (var a = 137, i = new Float32Array(4 * a), u = 2 * Math.PI / a, c = 0; c < a; c++) {
                                    var s = c * u;
                                    i[4 * c] = 0, i[4 * c + 1] = 0, i[4 * c + 2] = Math.cos(s) * (D.width / 2), i[4 * c + 3] = Math.sin(s) * (D.height / 2)
                                }
                                var l = F.createBuffer();
                                F.bindBuffer(F.ARRAY_BUFFER, l), F.bufferData(F.ARRAY_BUFFER, i, F.STATIC_DRAW);
                                var d = F.getAttribLocation(o, "position");
                                F.enableVertexAttribArray(d), F.vertexAttribPointer(d, 2, F.FLOAT, !1, 0, 0), F.viewport(0, 0, D.width, D.height), F.clearColor(0, 0, 0, 1), F.clear(F.COLOR_BUFFER_BIT), F.drawArrays(F.LINES, 0, 2 * a);
                                var f = new Uint8ClampedArray(D.width * D.height * 4);
                                return F.readPixels(0, 0, D.width, D.height, F.RGBA, F.UNSIGNED_BYTE, f), new ImageData(f, D.width, D.height)
                            } catch (e) {
                                return new ImageData(1, 1)
                            } finally {
                                F && (F.bindBuffer(F.ARRAY_BUFFER, null), F.useProgram(null), F.viewport(0, 0, F.drawingBufferWidth, F.drawingBufferHeight), F.clearColor(0, 0, 0, 0))
                            }
                        }()
                    })), [2, {commonImageHash: d(b(e, D.width, D.height).data.toString()).toString()}]
                } catch (e) {
                    return [2, {webgl: "unsupported"}]
                }
                return [2]
            }))
        }))
    }));
    var U = function (e, n, r, t) {
        for (var o = (r - n) / t, a = 0, i = 0; i < t; i++) {
            a += e(n + (i + .5) * o)
        }
        return a * o
    };
    i("math", (function () {
        return n(void 0, void 0, void 0, (function () {
            return r(this, (function (e) {
                return [2, {
                    acos: Math.acos(.5),
                    asin: U(Math.asin, -1, 1, 97),
                    atan: U(Math.atan, -1, 1, 97),
                    cos: U(Math.cos, 0, Math.PI, 97),
                    cosh: Math.cosh(9 / 7),
                    e: Math.E,
                    largeCos: Math.cos(1e20),
                    largeSin: Math.sin(1e20),
                    largeTan: Math.tan(1e20),
                    log: Math.log(1e3),
                    pi: Math.PI,
                    sin: U(Math.sin, -Math.PI, Math.PI, 97),
                    sinh: U(Math.sinh, -9 / 7, 7 / 9, 97),
                    sqrt: Math.sqrt(2),
                    tan: U(Math.tan, 0, 2 * Math.PI, 97),
                    tanh: U(Math.tanh, -9 / 7, 7 / 9, 97)
                }]
            }))
        }))
    })), e.getFingerprint = function (e) {
        return n(this, void 0, void 0, (function () {
            var o, a;
            return r(this, (function (i) {
                switch (i.label) {
                    case 0:
                        return i.trys.push([0, 2, , 3]), [4, p()];
                    case 1:
                        return o = i.sent(), a = d(JSON.stringify(o)), Math.random() < .001 && t.logging && function (e, t) {
                            n(this, void 0, void 0, (function () {
                                var n, o;
                                return r(this, (function (r) {
                                    switch (r.label) {
                                        case 0:
                                            if (n = "https://logging.thumbmarkjs.com/v1/log", o = {
                                                thumbmark: e,
                                                components: t,
                                                version: g()
                                            }, sessionStorage.getItem("_tmjs_l")) return [3, 4];
                                            sessionStorage.setItem("_tmjs_l", "1"), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, fetch(n, {
                                                method: "POST",
                                                headers: {"Content-Type": "application/json"},
                                                body: JSON.stringify(o)
                                            })];
                                        case 2:
                                        case 3:
                                            return r.sent(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }(a, o), e ? [2, {hash: a.toString(), data: o}] : [2, a.toString()];
                    case 2:
                        throw i.sent();
                    case 3:
                        return [2]
                }
            }))
        }))
    }, e.getFingerprintData = p, e.getFingerprintPerformance = function () {
        return n(this, void 0, void 0, (function () {
            var e, n, o, i;
            return r(this, (function (r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]), e = u(), n = Object.keys(e), [4, h(Object.values(e), (null == t ? void 0 : t.timeout) || 1e3, a)];
                    case 1:
                        return o = r.sent(), i = {elapsed: {}}, o.forEach((function (e, r) {
                            i[n[r]] = e.value, i.elapsed[n[r]] = e.elapsed
                        })), [2, i];
                    case 2:
                        throw r.sent();
                    case 3:
                        return [2]
                }
            }))
        }))
    }, e.getVersion = g, e.includeComponent = i, e.setOption = function (e, n) {
        if (!["include", "exclude", "permissions_to_check", "retries", "timeout", "logging"].includes(e)) throw new Error("Unknown option " + e);
        if (["include", "exclude", "permissions_to_check"].includes(e) && (!Array.isArray(n) || !n.every((function (e) {
            return "string" == typeof e
        })))) throw new Error("The value of the include, exclude and permissions_to_check must be an array of strings");
        if (["retries", "timeout"].includes(e) && "number" != typeof n) throw new Error("The value of retries must be a number");
        t[e] = n
    }
}));
//# sourceMappingURL=thumbmark.umd.js.map