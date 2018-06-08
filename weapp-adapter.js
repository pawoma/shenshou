var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports;
    }
    var n = {};
    t.m = e, t.c = n, t.p = "", t(0);
}([ function(e, t, n) {
    var o = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    }(n(1)), r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n(4)), i = GameGlobal;
    GameGlobal.__isAdapterInjected || (GameGlobal.__isAdapterInjected = !0, function() {
        o.addEventListener = function(e, t) {
            o.document.addEventListener(e, t);
        }, o.removeEventListener = function(e, t) {
            o.document.removeEventListener(e, t);
        }, o.canvas && (o.canvas.addEventListener = o.addEventListener, o.canvas.removeEventListener = o.removeEventListener), 
        i.sharedCanvas && (sharedCanvas.__proto__.__proto__ = new r.default("canvas"), sharedCanvas.addEventListener = o.addEventListener, 
        sharedCanvas.removeEventListener = o.removeEventListener);
        var e = wx.getSystemInfoSync().platform;
        if ("undefined" == typeof __devtoolssubcontext && "devtools" === e) {
            for (var t in o) {
                var n = Object.getOwnPropertyDescriptor(i, t);
                n && !0 !== n.configurable || Object.defineProperty(window, t, {
                    value: o[t]
                });
            }
            for (var a in o.document) {
                var u = Object.getOwnPropertyDescriptor(i.document, a);
                u && !0 !== u.configurable || Object.defineProperty(i.document, a, {
                    value: o.document[a]
                });
            }
            window.parent = window;
        } else {
            for (var c in o) i[c] = o[c];
            i.window = o, window = i, window.top = window.parent = window;
        }
    }());
}, function(e, t, n) {
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.cancelAnimationFrame = t.requestAnimationFrame = t.clearInterval = t.clearTimeout = t.setInterval = t.setTimeout = t.canvas = t.location = t.localStorage = t.HTMLElement = t.FileReader = t.Audio = t.Image = t.WebSocket = t.XMLHttpRequest = t.navigator = t.document = void 0;
    var r = n(2);
    Object.keys(r).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return r[e];
            }
        });
    });
    var i = n(3);
    Object.keys(i).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return i[e];
            }
        });
    });
    var a = o(n(9)), u = n(17), c = o(n(10)), l = o(n(18)), s = o(n(19)), f = o(n(20)), d = o(n(11)), p = o(n(12)), h = o(n(21)), y = o(n(4)), v = o(n(22)), b = o(n(23));
    t.document = c.default, t.navigator = l.default, t.XMLHttpRequest = s.default, t.WebSocket = f.default, 
    t.Image = d.default, t.Audio = p.default, t.FileReader = h.default, t.HTMLElement = y.default, 
    t.localStorage = v.default, t.location = b.default;
    var g = (0, u.isSubContext)() ? void 0 : new a.default();
    t.canvas = g, t.setTimeout = setTimeout, t.setInterval = setInterval, t.clearTimeout = clearTimeout, 
    t.clearInterval = clearInterval, t.requestAnimationFrame = requestAnimationFrame, 
    t.cancelAnimationFrame = cancelAnimationFrame;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = wx.getSystemInfoSync(), o = n.screenWidth, r = n.screenHeight, i = n.devicePixelRatio, a = t.innerWidth = o, u = t.innerHeight = r;
    t.devicePixelRatio = i;
    t.screen = {
        availWidth: a,
        availHeight: u
    }, t.performance = {
        now: function() {
            return Date.now() / 1e3;
        }
    }, t.ontouchstart = null, t.ontouchmove = null, t.ontouchend = null;
}, function(t, n, o) {
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t, n) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" !== (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
    }
    function a(t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
        t.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.HTMLCanvasElement = n.HTMLImageElement = void 0;
    var u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(o(4));
    n.HTMLImageElement = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "img"));
        }
        return a(t, u.default), t;
    }(), n.HTMLCanvasElement = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "canvas"));
        }
        return a(t, u.default), t;
    }();
}, function(t, n, o) {
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t, n) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" !== (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
    }
    function a(t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
        t.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), c = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(o(5)), l = o(8), s = o(2), f = function(e) {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            r(this, t);
            var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return n.className = "", n.childern = [], n.style = {
                width: s.innerWidth + "px",
                height: s.innerHeight + "px"
            }, n.insertBefore = l.noop, n.innerHTML = "", n.tagName = e.toUpperCase(), n;
        }
        return a(t, c.default), u(t, [ {
            key: "setAttribute",
            value: function(e, t) {
                this[e] = t;
            }
        }, {
            key: "getAttribute",
            value: function(e) {
                return this[e];
            }
        }, {
            key: "getBoundingClientRect",
            value: function() {
                return {
                    top: 0,
                    left: 0,
                    width: s.innerWidth,
                    height: s.innerHeight
                };
            }
        }, {
            key: "focus",
            value: function() {}
        }, {
            key: "clientWidth",
            get: function() {
                var e = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
                return Number.isNaN(e) ? 0 : e;
            }
        }, {
            key: "clientHeight",
            get: function() {
                var e = parseInt(this.style.fontSize, 10);
                return Number.isNaN(e) ? 0 : e;
            }
        } ]), t;
    }();
    n.default = f;
}, function(t, n, o) {
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t, n) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" !== (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
    }
    function a(t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
        t.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(o(6)), c = function(e) {
        function t() {
            r(this, t);
            var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.className = "", e.children = [], e;
        }
        return a(t, u.default), t;
    }();
    n.default = c;
}, function(t, n, o) {
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t, n) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" !== (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
    }
    function a(t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
        t.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), c = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(o(7)), l = function(e) {
        function t() {
            r(this, t);
            var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.childNodes = [], e;
        }
        return a(t, c.default), u(t, [ {
            key: "appendChild",
            value: function(e) {
                if (!(e instanceof t)) throw new TypeError("Failed to executed 'appendChild' on 'Node': parameter 1 is not of type 'Node'.");
                this.childNodes.push(e);
            }
        }, {
            key: "cloneNode",
            value: function() {
                var e = Object.create(this);
                return Object.assign(e, this), e;
            }
        }, {
            key: "removeChild",
            value: function(e) {
                var t = this.childNodes.findIndex(function(t) {
                    return t === e;
                });
                return t > -1 ? this.childNodes.splice(t, 1) : null;
            }
        } ]), t;
    }();
    n.default = l;
}, function(e, t) {
    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), r = new WeakMap(), i = function() {
        function e() {
            n(this, e), r.set(this, {});
        }
        return o(e, [ {
            key: "addEventListener",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = r.get(this);
                o || (o = {}, r.set(this, o)), o[e] || (o[e] = []), o[e].push(t), n.capture && console.warn("EventTarget.addEventListener: options.capture is not implemented."), 
                n.once && console.warn("EventTarget.addEventListener: options.once is not implemented."), 
                n.passive && console.warn("EventTarget.addEventListener: options.passive is not implemented.");
            }
        }, {
            key: "removeEventListener",
            value: function(e, t) {
                var n = r.get(this)[e];
                if (n && n.length > 0) for (var o = n.length; o--; o > 0) if (n[o] === t) {
                    n.splice(o, 1);
                    break;
                }
            }
        }, {
            key: "dispatchEvent",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = r.get(this)[e.type];
                if (t) for (var n = 0; n < t.length; n++) t[n](e);
            }
        } ]), e;
    }();
    t.default = i;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.noop = function() {}, t.isSubContext = function() {
        return "undefined" != typeof GameGlobal && !0 === GameGlobal.__isSubContext;
    };
}, function(e, t, n) {
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        var e = wx.createCanvas();
        e.type = "canvas", e.__proto__.__proto__ = new r.default("canvas");
        e.getContext;
        return e.getBoundingClientRect = function() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }, e;
    };
    n(3);
    var r = o(n(4));
    o(n(10));
}, function(e, t, n) {
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    }(n(1)), i = o(n(4)), a = o(n(11)), u = o(n(12)), c = o(n(9));
    n(15);
    var l = {}, s = {
        readyState: "complete",
        visibilityState: "visible",
        documentElement: r,
        hidden: !1,
        style: {},
        location: r.location,
        ontouchstart: null,
        ontouchmove: null,
        ontouchend: null,
        head: new i.default("head"),
        body: new i.default("body"),
        createElement: function(e) {
            return "canvas" === e ? new c.default() : "audio" === e ? new u.default() : "img" === e ? new a.default() : new i.default(e);
        },
        getElementById: function(e) {
            return e === r.canvas.id ? r.canvas : null;
        },
        getElementsByTagName: function(e) {
            return "head" === e ? [ s.head ] : "body" === e ? [ s.body ] : "canvas" === e ? [ r.canvas ] : [];
        },
        querySelector: function(e) {
            return "head" === e ? s.head : "body" === e ? s.body : "canvas" === e ? r.canvas : e === "#" + r.canvas.id ? r.canvas : null;
        },
        querySelectorAll: function(e) {
            return "head" === e ? [ s.head ] : "body" === e ? [ s.body ] : "canvas" === e ? [ r.canvas ] : [];
        },
        addEventListener: function(e, t) {
            l[e] || (l[e] = []), l[e].push(t);
        },
        removeEventListener: function(e, t) {
            var n = l[e];
            if (n && n.length > 0) for (var o = n.length; o--; o > 0) if (n[o] === t) {
                n.splice(o, 1);
                break;
            }
        },
        dispatchEvent: function(e) {
            var t = l[e.type];
            if (t) for (var n = 0; n < t.length; n++) t[n](e);
        }
    };
    t.default = s;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        return wx.createImage();
    };
}, function(t, n, o) {
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t, n) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" !== (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
    }
    function a(t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
        t.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), c = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(o(13)), l = o(8), s = 0, f = 1, d = 2, p = 3, h = 4, y = new WeakMap(), v = new WeakMap(), b = (new WeakMap(), 
    new WeakMap(), function(e) {
        function t(e) {
            r(this, t);
            var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            if (n.HAVE_NOTHING = s, n.HAVE_METADATA = f, n.HAVE_CURRENT_DATA = d, n.HAVE_FUTURE_DATA = p, 
            n.HAVE_ENOUGH_DATA = h, n.readyState = s, (0, l.isSubContext)()) return console.warn("HTMLAudioElement is not supported in SubContext."), 
            i(n);
            v.set(n, "");
            var o = wx.createInnerAudioContext();
            return y.set(n, o), o.onCanplay(function() {
                n.dispatchEvent({
                    type: "load"
                }), n.dispatchEvent({
                    type: "loadend"
                }), n.dispatchEvent({
                    type: "canplay"
                }), n.dispatchEvent({
                    type: "canplaythrough"
                }), n.dispatchEvent({
                    type: "loadedmetadata"
                }), n.readyState = d;
            }), o.onPlay(function() {
                n.dispatchEvent({
                    type: "play"
                });
            }), o.onPause(function() {
                n.dispatchEvent({
                    type: "pause"
                });
            }), o.onEnded(function() {
                n.dispatchEvent({
                    type: "ended"
                }), n.readyState = h;
            }), o.onError(function() {
                n.dispatchEvent({
                    type: "error"
                });
            }), e && (y.get(n).src = e), n;
        }
        return a(t, c.default), u(t, [ {
            key: "load",
            value: function() {
                console.warn("HTMLAudioElement.load() is not implemented.");
            }
        }, {
            key: "play",
            value: function() {
                (0, l.isSubContext)() || y.get(this).play();
            }
        }, {
            key: "pause",
            value: function() {
                (0, l.isSubContext)() || y.get(this).pause();
            }
        }, {
            key: "canPlayType",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return "string" != typeof e ? "" : e.indexOf("audio/mpeg") > -1 || e.indexOf("audio/mp4") ? "probably" : "";
            }
        }, {
            key: "cloneNode",
            value: function() {
                var e = new t();
                return (0, l.isSubContext)() || (e.loop = y.get(this).loop, e.autoplay = y.get(this).loop, 
                e.src = this.src), e;
            }
        }, {
            key: "currentTime",
            get: function() {
                return (0, l.isSubContext)() ? 0 : y.get(this).currentTime;
            },
            set: function(e) {
                (0, l.isSubContext)() || y.get(this).seek(e);
            }
        }, {
            key: "src",
            get: function() {
                return v.get(this);
            },
            set: function(e) {
                v.set(this, e), (0, l.isSubContext)() || (y.get(this).src = e);
            }
        }, {
            key: "loop",
            get: function() {
                return !(0, l.isSubContext)() && y.get(this).loop;
            },
            set: function(e) {
                (0, l.isSubContext)() || (y.get(this).loop = e);
            }
        }, {
            key: "autoplay",
            get: function() {
                return !(0, l.isSubContext)() && y.get(this).autoplay;
            },
            set: function(e) {
                (0, l.isSubContext)() || (y.get(this).autoplay = e);
            }
        }, {
            key: "paused",
            get: function() {
                return !(0, l.isSubContext)() && y.get(this).paused;
            }
        } ]), t;
    }());
    n.default = b;
}, function(t, n, o) {
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t, n) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" !== (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
    }
    function a(t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
        t.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(o(14)), c = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "audio"));
        }
        return a(t, u.default), t;
    }();
    n.default = c;
}, function(t, n, o) {
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t, n) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" !== (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
    }
    function a(t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
        t.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), c = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(o(4)), l = function(e) {
        function t(e) {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        }
        return a(t, c.default), u(t, [ {
            key: "addTextTrack",
            value: function() {}
        }, {
            key: "captureStream",
            value: function() {}
        }, {
            key: "fastSeek",
            value: function() {}
        }, {
            key: "load",
            value: function() {}
        }, {
            key: "pause",
            value: function() {}
        }, {
            key: "play",
            value: function() {}
        } ]), t;
    }();
    n.default = l;
}, function(e, t, n) {
    n(16);
}, function(e, t, n) {
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function r(e) {
        return function(t) {
            var n = new c(e);
            n.touches = t.touches, n.targetTouches = Array.prototype.slice.call(t.touches), 
            n.changedTouches = t.changedTouches, n.timeStamp = t.timeStamp, a.default.dispatchEvent(n);
        };
    }
    var i = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    }(n(1)), a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n(10)), u = n(8), c = function e(t) {
        o(this, e), this.target = i.canvas, this.currentTarget = i.canvas, this.touches = [], 
        this.targetTouches = [], this.changedTouches = [], this.preventDefault = u.noop, 
        this.stopPropagation = u.noop, this.type = t;
    };
    wx.onTouchStart(r("touchstart")), wx.onTouchMove(r("touchmove")), wx.onTouchEnd(r("touchend")), 
    wx.onTouchCancel(r("touchcancel"));
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.noop = function() {}, t.isSubContext = function() {
        return "undefined" != typeof GameGlobal && !0 === GameGlobal.__isSubContext;
    };
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(8), r = {
        platform: wx.getSystemInfoSync().platform,
        language: "zh-cn",
        appVersion: "5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN",
        onLine: !0,
        geolocation: {
            getCurrentPosition: o.noop,
            watchPosition: o.noop,
            clearWatch: o.noop
        }
    };
    t.default = r;
}, function(e, t) {
    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e) {
        if ("function" == typeof this["on" + e]) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            this["on" + e].apply(this, n);
        }
    }
    function r(e) {
        this.readyState = e, o.call(this, "readystatechange");
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), a = new WeakMap(), u = new WeakMap(), c = new WeakMap(), l = new WeakMap(), s = new WeakMap(), f = function() {
        function e() {
            n(this, e), this.onabort = null, this.onerror = null, this.onload = null, this.onloadstart = null, 
            this.onprogress = null, this.ontimeout = null, this.onloadend = null, this.onreadystatechange = null, 
            this.readyState = 0, this.response = null, this.responseText = null, this.responseType = "", 
            this.responseXML = null, this.status = 0, this.statusText = "", this.upload = {}, 
            this.withCredentials = !1, c.set(this, {
                "content-type": "application/x-www-form-urlencoded"
            }), l.set(this, {});
        }
        return i(e, [ {
            key: "abort",
            value: function() {
                var e = s.get(this);
                e && e.abort();
            }
        }, {
            key: "getAllResponseHeaders",
            value: function() {
                var e = l.get(this);
                return Object.keys(e).map(function(t) {
                    return t + ": " + e[t];
                }).join("\n");
            }
        }, {
            key: "getResponseHeader",
            value: function(e) {
                return l.get(this)[e];
            }
        }, {
            key: "open",
            value: function(t, n) {
                u.set(this, t), a.set(this, n), r.call(this, e.OPENED);
            }
        }, {
            key: "overrideMimeType",
            value: function() {}
        }, {
            key: "send",
            value: function() {
                var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if (this.readyState !== e.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
                wx.request({
                    data: n,
                    url: a.get(this),
                    method: u.get(this),
                    header: c.get(this),
                    responseType: this.responseType,
                    success: function(n) {
                        var i = n.data, a = n.statusCode, u = n.header;
                        if ("string" != typeof i && !(i instanceof ArrayBuffer)) try {
                            i = JSON.stringify(i);
                        } catch (e) {
                            i = i;
                        }
                        if (t.status = a, l.set(t, u), o.call(t, "loadstart"), r.call(t, e.HEADERS_RECEIVED), 
                        r.call(t, e.LOADING), t.response = i, i instanceof ArrayBuffer) {
                            t.responseText = "";
                            for (var c = new Uint8Array(i), s = c.byteLength, f = 0; f < s; f++) t.responseText += String.fromCharCode(c[f]);
                        } else t.responseText = i;
                        r.call(t, e.DONE), o.call(t, "load"), o.call(t, "loadend");
                    },
                    fail: function(e) {
                        var n = e.errMsg;
                        -1 !== n.indexOf("abort") ? o.call(t, "abort") : o.call(t, "error", n), o.call(t, "loadend");
                    }
                });
            }
        }, {
            key: "setRequestHeader",
            value: function(e, t) {
                var n = c.get(this);
                n[e] = t, c.set(this, n);
            }
        } ]), e;
    }();
    f.UNSEND = 0, f.OPENED = 1, f.HEADERS_RECEIVED = 2, f.LOADING = 3, f.DONE = 4, t.default = f;
}, function(e, t, n) {
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), i = n(8), a = new WeakMap(), u = function() {
        function e(t) {
            var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            if (o(this, e), this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", 
            this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, 
            this.protocol = "", this.readyState = 3, (0, i.isSubContext)()) throw new Error("WebSocket is not supported in SubContext.");
            if ("string" != typeof t || !/(^ws:\/\/)|(^wss:\/\/)/.test(t)) throw new TypeError("Failed to construct 'WebSocket': The URL '" + t + "' is invalid");
            this.url = t, this.readyState = e.CONNECTING;
            var u = wx.connectSocket({
                url: t,
                protocols: Array.isArray(r) ? r : [ r ]
            });
            return a.set(this, u), u.onClose(function(t) {
                n.readyState = e.CLOSED, "function" == typeof n.onclose && n.onclose(t);
            }), u.onMessage(function(e) {
                "function" == typeof n.onmessage && n.onmessage(e);
            }), u.onOpen(function() {
                n.readyState = e.OPEN, "function" == typeof n.onopen && n.onopen();
            }), u.onError(function(e) {
                "function" == typeof n.onerror && n.onerror(new Error(e.errMsg));
            }), this;
        }
        return r(e, [ {
            key: "close",
            value: function(t, n) {
                this.readyState = e.CLOSING, a.get(this).close({
                    code: t,
                    reason: n
                });
            }
        }, {
            key: "send",
            value: function(e) {
                if ("string" != typeof e && !(e instanceof ArrayBuffer)) throw new TypeError("Failed to send message: The data " + e + " is invalid");
                a.get(this).send({
                    data: e
                });
            }
        } ]), e;
    }();
    u.CONNECTING = 0, u.OPEN = 1, u.CLOSING = 2, u.CLOSED = 3, t.default = u;
}, function(e, t, n) {
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), i = n(8), a = function() {
        function e() {
            o(this, e);
        }
        return r(e, [ {
            key: "construct",
            value: function() {
                if ((0, i.isSubContext)()) throw new Error("FileReader is not supported in SubContext.");
            }
        } ]), e;
    }();
    t.default = a;
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = {
        get length() {
            return wx.getStorageInfoSync().keys.length;
        },
        key: function(e) {
            return wx.getStorageInfoSync().keys[e];
        },
        getItem: function(e) {
            return wx.getStorageSync(e);
        },
        setItem: function(e, t) {
            return wx.setStorageSync(e, t);
        },
        removeItem: function(e) {
            wx.removeStorageSync(e);
        },
        clear: function() {
            wx.clearStorageSync();
        }
    }, r = {}, i = {
        get length() {
            return Object.keys(r).length;
        },
        key: function(e) {
            return Object.keys(r)[e];
        },
        getItem: function(e) {
            return r[e];
        },
        setItem: function(e, t) {
            r[e] = t;
        },
        removeItem: function(e) {
            delete r[e];
        },
        clear: function() {
            r = {};
        }
    }, a = (0, n(8).isSubContext)() ? i : o;
    t.default = a;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        href: "game.js",
        reload: function() {}
    };
    t.default = n;
} ]);