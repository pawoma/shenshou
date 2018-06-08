var Laya = window.Laya = function(t, e) {
    var i = {
        __internals: [],
        __packages: {},
        __classmap: {
            Object: Object,
            Function: Function,
            Array: Array,
            String: String
        },
        __sysClass: {
            object: "Object",
            array: "Array",
            string: "String",
            dictionary: "Dictionary"
        },
        __propun: {
            writable: !0,
            enumerable: !1,
            configurable: !0
        },
        __presubstr: String.prototype.substr,
        __substr: function(t, e) {
            return 1 == arguments.length ? i.__presubstr.call(this, t) : i.__presubstr.call(this, t, e > 0 ? e : this.length + e);
        },
        __init: function(t) {
            t.forEach(function(t) {
                t.__init$ && t.__init$();
            });
        },
        __isClass: function(t) {
            return t && (t.__isclass || t == Object || t == String || t == Array);
        },
        __newvec: function(t, e) {
            var i = [];
            i.length = t;
            for (var s = 0; s < t; s++) i[s] = e;
            return i;
        },
        __extend: function(t, e) {
            function s() {
                i.un(this, "constructor", t);
            }
            for (var n in e) if (e.hasOwnProperty(n)) {
                var r = Object.getOwnPropertyDescriptor(e, n), a = r.get, o = r.set;
                a || o ? a && o ? Object.defineProperty(t, n, r) : (a && Object.defineProperty(t, n, a), 
                o && Object.defineProperty(t, n, o)) : t[n] = e[n];
            }
            s.prototype = e.prototype, t.prototype = new s(), i.un(t.prototype, "__imps", i.__copy({}, e.prototype.__imps));
        },
        __copy: function(t, e) {
            if (!e) return null;
            t = t || {};
            for (var i in e) t[i] = e[i];
            return t;
        },
        __package: function(e, s) {
            if (!i.__packages[e]) {
                i.__packages[e] = !0;
                var n = t, r = e.split(".");
                if (r.length > 1) for (var a = 0, o = r.length - 1; a < o; a++) n = n[r[a]] || (n[r[a]] = {});
                n[r[r.length - 1]] || (n[r[r.length - 1]] = s || {});
            }
        },
        __hasOwnProperty: function(t, e) {
            function i(t, e) {
                if (Object.hasOwnProperty.call(e.prototype, t)) return !0;
                var s = e.prototype.__super;
                return null == s ? null : i(t, s);
            }
            return e = e || this, Object.hasOwnProperty.call(e, t) || i(t, e.__class);
        },
        __typeof: function(t, e) {
            if (!t || !e) return !1;
            if (e === String) return "string" == typeof t;
            if (e === Number) return "number" == typeof t;
            if (e.__interface__) e = e.__interface__; else if ("string" != typeof e) return t instanceof e;
            return t.__imps && t.__imps[e] || t.__class == e;
        },
        __as: function(t, e) {
            return this.__typeof(t, e) ? t : null;
        },
        __int: function(t) {
            return t ? parseInt(t) : 0;
        },
        interface: function(e, s) {
            i.__package(e, {});
            var n = i.__internals, r = n[e] = n[e] || {
                self: e
            };
            if (s) {
                var a = s.split(",");
                for (r.extend = [], u = 0; u < a.length; u++) {
                    var o = a[u];
                    n[o] = n[o] || {
                        self: o
                    }, r.extend.push(n[o]);
                }
            }
            for (var h = t, l = e.split("."), u = 0; u < l.length - 1; u++) h = h[l[u]];
            h[l[l.length - 1]] = {
                __interface__: e
            };
        },
        class: function(e, s, n, r) {
            if (n && i.__extend(e, n), s) if (i.__package(s, e), i.__classmap[s] = e, s.indexOf(".") > 0) {
                if (0 == s.indexOf("laya.")) {
                    var a = s.split(".");
                    r = r || a[a.length - 1], i[r] && console.log("Warning!,this class[" + r + "] already exist:", i[r]), 
                    i[r] = e;
                }
            } else "Main" == s ? t.Main = e : (i[s] && console.log("Error!,this class[" + s + "] already exist:", i[s]), 
            i[s] = e);
            var o = i.un, h = e.prototype;
            o(h, "hasOwnProperty", i.__hasOwnProperty), o(h, "__class", e), o(h, "__super", n), 
            o(h, "__className", s), o(e, "__super", n), o(e, "__className", s), o(e, "__isclass", !0), 
            o(e, "super", function(t) {
                this.__super.call(t);
            });
        },
        imps: function(t, e) {
            function s(t) {
                var e, r;
                if ((e = i.__internals[t]) && (n[t] = !0, r = e.extend)) for (var a = 0; a < r.length; a++) s(r[a].self);
            }
            if (!e) return null;
            var n = t.__imps || i.un(t, "__imps", {});
            for (var r in e) s(r);
        },
        superSet: function(t, e, i, s) {
            var n = t.prototype["_$set_" + i];
            n && n.call(e, s);
        },
        superGet: function(t, e, i) {
            var s = t.prototype["_$get_" + i];
            return s ? s.call(e) : null;
        },
        getset: function(t, e, s, n, r) {
            t ? (n && (e["_$GET_" + s] = n), r && (e["_$SET_" + s] = r)) : (n && i.un(e, "_$get_" + s, n), 
            r && i.un(e, "_$set_" + s, r)), n && r ? Object.defineProperty(e, s, {
                get: n,
                set: r,
                enumerable: !1,
                configurable: !0
            }) : (n && Object.defineProperty(e, s, {
                get: n,
                enumerable: !1,
                configurable: !0
            }), r && Object.defineProperty(e, s, {
                set: r,
                enumerable: !1,
                configurable: !0
            }));
        },
        static: function(t, e) {
            for (var i = 0, s = e.length; i < s; i += 2) "length" == e[i] ? t.length = e[i + 1].call(t) : function() {
                var s = e[i], n = e[i + 1];
                Object.defineProperty(t, s, {
                    get: function() {
                        return delete this[s], this[s] = n.call(this);
                    },
                    set: function(t) {
                        delete this[s], this[s] = t;
                    },
                    enumerable: !0,
                    configurable: !0
                });
            }();
        },
        un: function(t, e, s) {
            return s || (s = t[e]), i.__propun.value = s, Object.defineProperty(t, e, i.__propun), 
            s;
        },
        uns: function(t, e) {
            e.forEach(function(e) {
                i.un(t, e);
            });
        }
    };
    return t.console = t.console || {
        log: function() {}
    }, t.trace = t.console.log, Error.prototype.throwError = function() {
        throw arguments;
    }, Object.defineProperty(Array.prototype, "fixed", {
        enumerable: !1
    }), i;
}(window, document);

!function(t, e, i) {
    i.un, i.uns, i.static, i.class, i.getset, i.__newvec;
}(window, document, Laya), function(window, document, Laya) {
    var __un = Laya.un, __uns = Laya.uns, __static = Laya.static, __class = Laya.class, __getset = Laya.getset, __newvec = Laya.__newvec;
    Laya.interface("laya.runtime.IMarket"), Laya.interface("laya.filters.IFilter"), 
    Laya.interface("laya.display.ILayout"), Laya.interface("laya.resource.IDispose"), 
    Laya.interface("laya.runtime.IPlatform"), Laya.interface("laya.resource.IDestroy"), 
    Laya.interface("laya.runtime.IConchNode"), Laya.interface("laya.filters.IFilterAction"), 
    Laya.interface("laya.runtime.ICPlatformClass"), Laya.interface("laya.resource.ICreateResource"), 
    Laya.interface("laya.runtime.IConchRenderObject"), Laya.interface("laya.runtime.IPlatformClass", "laya.runtime.IPlatform");
    var RunDriver = function() {
        function t() {}
        return __class(t, "laya.utils.RunDriver"), t.FILTER_ACTIONS = [], t.pixelRatio = -1, 
        t._charSizeTestDiv = null, t.now = function() {
            return Date.now();
        }, t.getWindow = function() {
            return window;
        }, t.getPixelRatio = function() {
            if (t.pixelRatio < 0) {
                var e = Browser.context, i = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
                (t.pixelRatio = (Browser.window.devicePixelRatio || 1) / i) < 1 && (t.pixelRatio = 1);
            }
            return t.pixelRatio;
        }, t.getIncludeStr = function(t) {
            return null;
        }, t.createShaderCondition = function(t) {
            var e = "(function() {return " + t + ";})";
            return Browser.window.eval(e);
        }, t.fontMap = [], t.measureText = function(e, i) {
            var s = t.hanzi.test(e);
            if (s && t.fontMap[i]) return t.fontMap[i];
            var n = Browser.context;
            n.font = i;
            var r = n.measureText(e);
            return s && (t.fontMap[i] = r), r;
        }, t.getWebGLContext = function(t) {}, t.beginFlush = function() {}, t.endFinish = function() {}, 
        t.addToAtlas = null, t.flashFlushImage = function(t) {}, t.drawToCanvas = function(t, e, i, s, n, r) {
            var a = HTMLCanvas.create("2D"), o = new RenderContext(i, s, a);
            return RenderSprite.renders[e]._fun(t, o, n, r), a;
        }, t.createParticleTemplate2D = null, t.createGLTextur = null, t.createWebGLContext2D = null, 
        t.changeWebGLSize = function(t, e) {}, t.createRenderSprite = function(t, e) {
            return new RenderSprite(t, e);
        }, t.createFilterAction = function(t) {
            return new ColorFilterAction();
        }, t.createGraphics = function() {
            return new Graphics();
        }, t.clear = function(t) {
            Render._context.ctx.clear();
        }, t.cancelLoadByUrl = function(t) {}, t.clearAtlas = function(t) {}, t.isAtlas = function(t) {
            return !1;
        }, t.addTextureToAtlas = function(t) {}, t.getTexturePixels = function(t, e, i, s, n) {
            return null;
        }, t.skinAniSprite = function() {
            return null;
        }, t.update3DLoop = function() {}, __static(t, [ "hanzi", function() {
            return this.hanzi = new RegExp("^[一-龥]$");
        } ]), t;
    }(), ___Laya = (__getset(1, Laya, "alertGlobalError", null, function(t) {
        var e = 0;
        Browser.window.onerror = t ? function(t, i, s, n, r) {
            e++ < 5 && r && alert("出错啦，请把此信息截图给研发商\n" + t + "\n" + r.stack || r);
        } : null;
    }), Laya.init = function(t, e, i) {
        for (var s = [], n = 2, r = arguments.length; n < r; n++) s.push(arguments[n]);
        if (!Laya._isinit) {
            ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = Laya._arrayBufferSlice), 
            Laya._isinit = !0, Browser.__init__(), Context.__init__(), Graphics.__init__(), 
            Laya.timer = new Timer(), Laya.scaleTimer = new Timer(), Laya.loader = new LoaderManager(), 
            WeakObject.__init__();
            for (var n = 0, a = s.length; n < a; n++) s[n].enable && s[n].enable();
            return Font.__init__(), Style.__init__(), ResourceManager.__init__(), CacheManager.beginCheck(), 
            Laya._currentStage = Laya.stage = new Stage(), Laya.stage.conchModel && Laya.stage.conchModel.setRootNode(), 
            Laya.getUrlPath(), Laya.render = new Render(0, 0), Laya.stage.size(t, e), RenderSprite.__init__(), 
            KeyBoardManager.__init__(), MouseManager.instance.__init__(Laya.stage, Render.canvas), 
            Input.__init__(), SoundManager.autoStopMusic = !0, LocalStorage.__init__(), Render.canvas;
        }
    }, Laya.getUrlPath = function() {
        var t = Browser.window.location, e = t.pathname;
        e = ":" == e.charAt(2) ? e.substring(1) : e, URL.rootPath = URL.basePath = URL.getPath("file:" == t.protocol ? e : t.protocol + "//" + t.host + t.pathname);
    }, Laya._arrayBufferSlice = function(t, e) {
        var i = new Uint8Array(this, t, e - t), s = new Uint8Array(i.length);
        return s.set(i), s.buffer;
    }, Laya.stage = null, Laya.timer = null, Laya.scaleTimer = null, Laya.loader = null, 
    Laya.version = "1.7.17beta", Laya.render = null, Laya._currentStage = null, Laya._isinit = !1, 
    Laya.MiniAdpter = {
        init: function() {
            window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MiniGame") > -1 && console.error("请先引用小游戏适配库laya.wxmini.js,详细教程：https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0");
        }
    }, __static(Laya, [ "conchMarket", function() {
        return this.conchMarket = window.conch ? conchMarket : null;
    }, "PlatformClass", function() {
        return this.PlatformClass = window.PlatformClass;
    } ]), Laya), Config = function() {
        function t() {}
        return __class(t, "Config"), t.WebGLTextCacheCount = 500, t.atlasEnable = !1, t.showCanvasMark = !1, 
        t.animationInterval = 50, t.isAntialias = !1, t.isAlpha = !1, t.premultipliedAlpha = !0, 
        t.isStencil = !0, t.preserveDrawingBuffer = !1, t;
    }(), EventDispatcher = function() {
        function t() {
            this._events = null;
        }
        var e;
        __class(t, "laya.events.EventDispatcher");
        var i = t.prototype;
        return i.hasListener = function(t) {
            return !(!this._events || !this._events[t]);
        }, i.event = function(t, e) {
            if (!this._events || !this._events[t]) return !1;
            var i = this._events[t];
            if (i.run) i.once && delete this._events[t], null != e ? i.runWith(e) : i.run(); else {
                for (var s = 0, n = i.length; s < n; s++) {
                    var r = i[s];
                    r && (null != e ? r.runWith(e) : r.run()), r && !r.once || (i.splice(s, 1), s--, 
                    n--);
                }
                0 === i.length && this._events && delete this._events[t];
            }
            return !0;
        }, i.on = function(t, e, i, s) {
            return this._createListener(t, e, i, s, !1);
        }, i.once = function(t, e, i, s) {
            return this._createListener(t, e, i, s, !0);
        }, i._createListener = function(t, i, s, n, r, a) {
            void 0 === a && (a = !0), a && this.off(t, i, s, r);
            var o = e.create(i || this, s, n, r);
            this._events || (this._events = {});
            var h = this._events;
            return h[t] ? h[t].run ? h[t] = [ h[t], o ] : h[t].push(o) : h[t] = o, this;
        }, i.off = function(t, e, i, s) {
            if (void 0 === s && (s = !1), !this._events || !this._events[t]) return this;
            var n = this._events[t];
            if (null != i) if (n.run) e && n.caller !== e || n.method !== i || s && !n.once || (delete this._events[t], 
            n.recover()); else {
                for (var r = 0, a = 0, o = n.length; a < o; a++) {
                    var h = n[a];
                    !h || e && h.caller !== e || h.method !== i || s && !h.once || (r++, n[a] = null, 
                    h.recover());
                }
                r === o && delete this._events[t];
            }
            return this;
        }, i.offAll = function(t) {
            var e = this._events;
            if (!e) return this;
            if (t) this._recoverHandlers(e[t]), delete e[t]; else {
                for (var i in e) this._recoverHandlers(e[i]);
                this._events = null;
            }
            return this;
        }, i._recoverHandlers = function(t) {
            if (t) if (t.run) t.recover(); else for (var e = t.length - 1; e > -1; e--) t[e] && (t[e].recover(), 
            t[e] = null);
        }, i.isMouseEvent = function(e) {
            return t.MOUSE_EVENTS[e];
        }, t.MOUSE_EVENTS = {
            rightmousedown: !0,
            rightmouseup: !0,
            rightclick: !0,
            mousedown: !0,
            mouseup: !0,
            mousemove: !0,
            mouseover: !0,
            mouseout: !0,
            click: !0,
            doubleclick: !0
        }, t.__init$ = function() {
            Object.defineProperty(laya.events.EventDispatcher.prototype, "_events", {
                enumerable: !1,
                writable: !0
            }), e = function(t) {
                function e(t, i, s, n) {
                    e.__super.call(this, t, i, s, n);
                }
                return __class(e, "", Handler), e.prototype.recover = function() {
                    this._id > 0 && (this._id = 0, e._pool.push(this.clear()));
                }, e.create = function(t, i, s, n) {
                    return void 0 === n && (n = !0), e._pool.length ? e._pool.pop().setTo(t, i, s, n) : new e(t, i, s, n);
                }, e._pool = [], e;
            }();
        }, t;
    }(), Handler = function() {
        function t(t, e, i, s) {
            this.once = !1, this._id = 0, void 0 === s && (s = !1), this.setTo(t, e, i, s);
        }
        __class(t, "laya.utils.Handler");
        var e = t.prototype;
        return e.setTo = function(e, i, s, n) {
            return this._id = t._gid++, this.caller = e, this.method = i, this.args = s, this.once = n, 
            this;
        }, e.run = function() {
            if (null == this.method) return null;
            var t = this._id, e = this.method.apply(this.caller, this.args);
            return this._id === t && this.once && this.recover(), e;
        }, e.runWith = function(t) {
            if (null == this.method) return null;
            var e = this._id;
            if (null == t) var i = this.method.apply(this.caller, this.args); else i = this.args || t.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(t)) : this.method.apply(this.caller, t) : this.method.call(this.caller, t);
            return this._id === e && this.once && this.recover(), i;
        }, e.clear = function() {
            return this.caller = null, this.method = null, this.args = null, this;
        }, e.recover = function() {
            this._id > 0 && (this._id = 0, t._pool.push(this.clear()));
        }, t.create = function(e, i, s, n) {
            return void 0 === n && (n = !0), t._pool.length ? t._pool.pop().setTo(e, i, s, n) : new t(e, i, s, n);
        }, t._pool = [], t._gid = 1, t;
    }(), BitmapFont = function() {
        function t() {
            this._texture = null, this._fontCharDic = {}, this._fontWidthMap = {}, this._complete = null, 
            this._path = null, this._maxWidth = 0, this._spaceWidth = 10, this._padding = null, 
            this.fontSize = 12, this.autoScaleSize = !1, this.letterSpacing = 0;
        }
        __class(t, "laya.display.BitmapFont");
        var e = t.prototype;
        return e.loadFont = function(t, e) {
            this._path = t, this._complete = e, Laya.loader.load([ {
                url: this._path,
                type: "xml"
            }, {
                url: this._path.replace(".fnt", ".png"),
                type: "image"
            } ], Handler.create(this, this.onLoaded));
        }, e.onLoaded = function() {
            this.parseFont(Loader.getRes(this._path), Loader.getRes(this._path.replace(".fnt", ".png"))), 
            this._complete && this._complete.runWith(this._texture ? this : null);
        }, e.parseFont = function(t, e) {
            if (null != t && null != e) {
                this._texture = e;
                var i = t.getElementsByTagName("info");
                if (!i[0].getAttributeNode) return this.parseFont2(t, e);
                this.fontSize = parseInt(i[0].getAttributeNode("size").nodeValue);
                var s = i[0].getAttributeNode("padding").nodeValue.split(",");
                this._padding = [ parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3]) ];
                var n;
                n = t.getElementsByTagName("char");
                var r = 0;
                for (r = 0; r < n.length; r++) {
                    var a = n[r], o = parseInt(a.getAttributeNode("id").nodeValue), h = parseInt(a.getAttributeNode("xoffset").nodeValue) / 1, l = parseInt(a.getAttributeNode("yoffset").nodeValue) / 1, u = parseInt(a.getAttributeNode("xadvance").nodeValue) / 1, c = new Rectangle();
                    c.x = parseInt(a.getAttributeNode("x").nodeValue), c.y = parseInt(a.getAttributeNode("y").nodeValue), 
                    c.width = parseInt(a.getAttributeNode("width").nodeValue), c.height = parseInt(a.getAttributeNode("height").nodeValue);
                    var _ = Texture.create(e, c.x, c.y, c.width, c.height, h, l);
                    this._maxWidth = Math.max(this._maxWidth, u + this.letterSpacing), this._fontCharDic[o] = _, 
                    this._fontWidthMap[o] = u;
                }
            }
        }, e.parseFont2 = function(t, e) {
            if (null != t && null != e) {
                this._texture = e;
                var i = t.getElementsByTagName("info");
                this.fontSize = parseInt(i[0].attributes.size.nodeValue);
                var s = i[0].attributes.padding.nodeValue.split(",");
                this._padding = [ parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3]) ];
                var n = t.getElementsByTagName("char"), r = 0;
                for (r = 0; r < n.length; r++) {
                    var a = n[r].attributes, o = parseInt(a.id.nodeValue), h = parseInt(a.xoffset.nodeValue) / 1, l = parseInt(a.yoffset.nodeValue) / 1, u = parseInt(a.xadvance.nodeValue) / 1, c = new Rectangle();
                    c.x = parseInt(a.x.nodeValue), c.y = parseInt(a.y.nodeValue), c.width = parseInt(a.width.nodeValue), 
                    c.height = parseInt(a.height.nodeValue);
                    var _ = Texture.create(e, c.x, c.y, c.width, c.height, h, l);
                    this._maxWidth = Math.max(this._maxWidth, u + this.letterSpacing), this._fontCharDic[o] = _, 
                    this._fontWidthMap[o] = u;
                }
            }
        }, e.getCharTexture = function(t) {
            return this._fontCharDic[t.charCodeAt(0)];
        }, e.destroy = function() {
            if (this._texture) {
                for (var t in this._fontCharDic) {
                    var e = this._fontCharDic[t];
                    e && e.destroy();
                }
                this._texture.destroy(), this._fontCharDic = null, this._fontWidthMap = null, this._texture = null;
            }
        }, e.setSpaceWidth = function(t) {
            this._spaceWidth = t;
        }, e.getCharWidth = function(t) {
            var e = t.charCodeAt(0);
            return this._fontWidthMap[e] ? this._fontWidthMap[e] + this.letterSpacing : " " == t ? this._spaceWidth + this.letterSpacing : 0;
        }, e.getTextWidth = function(t) {
            for (var e = 0, i = 0, s = t.length; i < s; i++) e += this.getCharWidth(t.charAt(i));
            return e;
        }, e.getMaxWidth = function() {
            return this._maxWidth;
        }, e.getMaxHeight = function() {
            return this.fontSize;
        }, e.drawText = function(t, e, i, s, n, r) {
            var a, o = this.getTextWidth(t), h = 0;
            "center" === n && (h = (r - o) / 2), "right" === n && (h = r - o);
            for (var l = 0, u = 0, c = t.length; u < c; u++) (a = this.getCharTexture(t.charAt(u))) && (e.graphics.drawTexture(a, i + l + h, s), 
            l += this.getCharWidth(t.charAt(u)));
        }, t;
    }(), Style = function() {
        function t() {
            this.alpha = 1, this.visible = !0, this.scrollRect = null, this.blendMode = null, 
            this._type = 0, this._tf = t._TF_EMPTY;
        }
        __class(t, "laya.display.css.Style");
        var e = t.prototype;
        return e.getTransform = function() {
            return this._tf;
        }, e.setTransform = function(e) {
            this._tf = "none" !== e && e ? e : t._TF_EMPTY;
        }, e.setTranslateX = function(e) {
            this._tf === t._TF_EMPTY && (this._tf = new TransformInfo()), this._tf.translateX = e;
        }, e.setTranslateY = function(e) {
            this._tf === t._TF_EMPTY && (this._tf = new TransformInfo()), this._tf.translateY = e;
        }, e.setScaleX = function(e) {
            this._tf === t._TF_EMPTY && (this._tf = new TransformInfo()), this._tf.scaleX = e;
        }, e.setScale = function(e, i) {
            this._tf === t._TF_EMPTY && (this._tf = new TransformInfo()), this._tf.scaleX = e, 
            this._tf.scaleY = i;
        }, e.setScaleY = function(e) {
            this._tf === t._TF_EMPTY && (this._tf = new TransformInfo()), this._tf.scaleY = e;
        }, e.setRotate = function(e) {
            this._tf === t._TF_EMPTY && (this._tf = new TransformInfo()), this._tf.rotate = e;
        }, e.setSkewX = function(e) {
            this._tf === t._TF_EMPTY && (this._tf = new TransformInfo()), this._tf.skewX = e;
        }, e.setSkewY = function(e) {
            this._tf === t._TF_EMPTY && (this._tf = new TransformInfo()), this._tf.skewY = e;
        }, e.destroy = function() {
            this.scrollRect = null;
        }, e.render = function(t, e, i, s) {}, e.getCSSStyle = function() {
            return CSSStyle.EMPTY;
        }, e._enableLayout = function() {
            return !1;
        }, __getset(0, e, "scaleX", function() {
            return this._tf.scaleX;
        }, function(t) {
            this.setScaleX(t);
        }), __getset(0, e, "transform", function() {
            return this.getTransform();
        }, function(t) {
            this.setTransform(t);
        }), __getset(0, e, "translateX", function() {
            return this._tf.translateX;
        }, function(t) {
            this.setTranslateX(t);
        }), __getset(0, e, "translateY", function() {
            return this._tf.translateY;
        }, function(t) {
            this.setTranslateY(t);
        }), __getset(0, e, "scaleY", function() {
            return this._tf.scaleY;
        }, function(t) {
            this.setScaleY(t);
        }), __getset(0, e, "block", function() {
            return 0 != (1 & this._type);
        }), __getset(0, e, "skewY", function() {
            return this._tf.skewY;
        }, function(t) {
            this.setSkewY(t);
        }), __getset(0, e, "rotate", function() {
            return this._tf.rotate;
        }, function(t) {
            this.setRotate(t);
        }), __getset(0, e, "skewX", function() {
            return this._tf.skewX;
        }, function(t) {
            this.setSkewX(t);
        }), __getset(0, e, "paddingLeft", function() {
            return 0;
        }), __getset(0, e, "paddingTop", function() {
            return 0;
        }), __getset(0, e, "absolute", function() {
            return !0;
        }), t.__init__ = function() {
            t._TF_EMPTY = new TransformInfo(), t.EMPTY = new t();
        }, t.EMPTY = null, t._TF_EMPTY = null, t;
    }(), Font = function() {
        function t(e) {
            this._type = 0, this._weight = 0, this._decoration = null, this._text = null, this.indent = 0, 
            this._color = Color.create(t.defaultColor), this.family = t.defaultFamily, this.stroke = t._STROKE, 
            this.size = t.defaultSize, e && e !== t.EMPTY && e.copyTo(this);
        }
        __class(t, "laya.display.css.Font");
        var e = t.prototype;
        return e.set = function(t) {
            this._text = null;
            for (var e = t.split(" "), i = 0, s = e.length; i < s; i++) {
                var n = e[i];
                switch (n) {
                  case "italic":
                    this.italic = !0;
                    continue;

                  case "bold":
                    this.bold = !0;
                    continue;
                }
                n.indexOf("px") > 0 && (this.size = parseInt(n), this.family = e[i + 1], i++);
            }
        }, e.toString = function() {
            return this._text = "", this.italic && (this._text += "italic "), this.bold && (this._text += "bold "), 
            this._text += this.size + "px " + this.family;
        }, e.copyTo = function(e) {
            e._type = this._type, e._text = this._text, e._weight = this._weight, e._color = this._color, 
            e.family = this.family, e.stroke = this.stroke != t._STROKE ? this.stroke.slice() : t._STROKE, 
            e.indent = this.indent, e.size = this.size;
        }, __getset(0, e, "password", function() {
            return 0 != (1024 & this._type);
        }, function(t) {
            t ? this._type |= 1024 : this._type &= -1025;
        }), __getset(0, e, "color", function() {
            return this._color.strColor;
        }, function(t) {
            this._color = Color.create(t);
        }), __getset(0, e, "italic", function() {
            return 0 != (512 & this._type);
        }, function(t) {
            t ? this._type |= 512 : this._type &= -513;
        }), __getset(0, e, "bold", function() {
            return 0 != (2048 & this._type);
        }, function(t) {
            t ? this._type |= 2048 : this._type &= -2049;
        }), __getset(0, e, "weight", function() {
            return "" + this._weight;
        }, function(t) {
            var e = 0;
            switch (t) {
              case "normal":
                break;

              case "bold":
                this.bold = !0, e = 700;
                break;

              case "bolder":
                e = 800;
                break;

              case "lighter":
                e = 100;
                break;

              default:
                e = parseInt(t);
            }
            this._weight = e, this._text = null;
        }), __getset(0, e, "decoration", function() {
            return this._decoration ? this._decoration.value : "none";
        }, function(t) {
            var e = t.split(" ");
            switch (this._decoration || (this._decoration = {}), e[0]) {
              case "_":
                this._decoration.type = "underline";
                break;

              case "-":
                this._decoration.type = "line-through";
                break;

              case "overline":
                this._decoration.type = "overline";
                break;

              default:
                this._decoration.type = e[0];
            }
            e[1] && (this._decoration.color = Color.create(e)), this._decoration.value = t;
        }), t.__init__ = function() {
            t.EMPTY = new t(null);
        }, t.EMPTY = null, t.defaultColor = "#000000", t.defaultSize = 12, t.defaultFamily = "Arial", 
        t.defaultFont = "12px Arial", t._STROKE = [ 0, "#000000" ], t._ITALIC = 512, t._PASSWORD = 1024, 
        t._BOLD = 2048, t;
    }(), TransformInfo = function() {
        function t() {
            this.translateX = 0, this.translateY = 0, this.scaleX = 1, this.scaleY = 1, this.rotate = 0, 
            this.skewX = 0, this.skewY = 0;
        }
        return __class(t, "laya.display.css.TransformInfo"), t;
    }(), Graphics = function() {
        function t() {
            this._one = null, this._cmds = null, this._render = this._renderEmpty, Render.isConchNode && (this._nativeObj = new window._conchGraphics(), 
            this.id = this._nativeObj.conchID);
        }
        __class(t, "laya.display.Graphics");
        var e = t.prototype;
        return e.destroy = function() {
            this.clear(), this._graphicBounds && this._graphicBounds.destroy(), this._graphicBounds = null, 
            this._vectorgraphArray = null, this._sp && (this._sp._renderType = 0), this._sp = null;
        }, e.clear = function(e) {
            void 0 === e && (e = !1);
            var i = 0, s = 0;
            if (e) {
                var n = this._one;
                if (this._cmds) {
                    for (s = this._cmds.length, i = 0; i < s; i++) !(n = this._cmds[i]) || n.callee !== Render._context._drawTexture && n.callee !== Render._context._drawTextureWithTransform || (n[0] = null, 
                    t._cache.push(n));
                    this._cmds.length = 0;
                } else n && (!n || n.callee !== Render._context._drawTexture && n.callee !== Render._context._drawTextureWithTransform || (n[0] = null, 
                t._cache.push(n)));
            } else this._cmds = null;
            if (this._one = null, this._render = this._renderEmpty, this._sp && (this._sp._renderType &= -514), 
            this._repaint(), this._vectorgraphArray) {
                for (i = 0, s = this._vectorgraphArray.length; i < s; i++) VectorGraphManager.getInstance().deleteShape(this._vectorgraphArray[i]);
                this._vectorgraphArray.length = 0;
            }
        }, e._clearBoundsCache = function() {
            this._graphicBounds && this._graphicBounds.reset();
        }, e._initGraphicBounds = function() {
            this._graphicBounds || (this._graphicBounds = new GraphicsBounds(), this._graphicBounds._graphics = this);
        }, e._repaint = function() {
            this._clearBoundsCache(), this._sp && this._sp.repaint();
        }, e._isOnlyOne = function() {
            return !this._cmds || 0 === this._cmds.length;
        }, e.getBounds = function(t) {
            return void 0 === t && (t = !1), this._initGraphicBounds(), this._graphicBounds.getBounds(t);
        }, e.getBoundPoints = function(t) {
            return void 0 === t && (t = !1), this._initGraphicBounds(), this._graphicBounds.getBoundPoints(t);
        }, e._addCmd = function(t) {
            this._cmds = this._cmds || [], t.callee = t.shift(), this._cmds.push(t);
        }, e.setFilters = function(t) {
            this._saveToCmd(Render._context._setFilters, t);
        }, e.drawTexture = function(e, i, s, n, r, a, o) {
            if (void 0 === i && (i = 0), void 0 === s && (s = 0), void 0 === n && (n = 0), void 0 === r && (r = 0), 
            void 0 === o && (o = 1), !e || o < .01) return null;
            n || (n = e.sourceWidth), r || (r = e.sourceHeight), o = o < 0 ? 0 : o > 1 ? 1 : o;
            var h = !Render.isWebGL && (Browser.onFirefox || Browser.onEdge || Browser.onIE) ? .5 : 0, l = n / e.sourceWidth, u = r / e.sourceHeight;
            if (n = e.width * l, r = e.height * u, e.loaded && (n <= 0 || r <= 0)) return null;
            i += e.offsetX * l, s += e.offsetY * u, this._sp && (this._sp._renderType |= 512);
            var c;
            return i -= h, s -= h, n += 2 * h, r += 2 * h, t._cache.length ? ((c = t._cache.pop())[0] = e, 
            c[1] = i, c[2] = s, c[3] = n, c[4] = r, c[5] = a, c[6] = o) : c = [ e, i, s, n, r, a, o ], 
            c.callee = a || 1 != o ? Render._context._drawTextureWithTransform : Render._context._drawTexture, 
            null != this._one || a || 1 != o ? this._saveToCmd(c.callee, c) : (this._one = c, 
            this._render = this._renderOneImg), e.loaded || e.once("loaded", this, this._textureLoaded, [ e, c ]), 
            this._repaint(), c;
        }, e.cleanByTexture = function(t, e, i, s, n) {
            if (void 0 === s && (s = 0), void 0 === n && (n = 0), !t) return this.clear();
            if (this._one && this._render === this._renderOneImg) {
                s || (s = t.sourceWidth), n || (n = t.sourceHeight);
                var r = s / t.sourceWidth, a = n / t.sourceHeight;
                s = t.width * r, n = t.height * a, e += t.offsetX * r, i += t.offsetY * a, this._one[0] = t, 
                this._one[1] = e, this._one[2] = i, this._one[3] = s, this._one[4] = n;
            } else this.clear(), t && this.drawTexture(t, e, i, s, n);
        }, e.drawTextures = function(t, e) {
            t && this._saveToCmd(Render._context._drawTextures, [ t, e ]);
        }, e.fillTexture = function(t, e, i, s, n, r, a) {
            if (void 0 === s && (s = 0), void 0 === n && (n = 0), void 0 === r && (r = "repeat"), 
            t) {
                var o = [ t, e, i, s, n, r, a || Point.EMPTY, {} ];
                t.loaded || t.once("loaded", this, this._textureLoaded, [ t, o ]), this._saveToCmd(Render._context._fillTexture, o);
            }
        }, e._textureLoaded = function(t, e) {
            e[3] = e[3] || t.width, e[4] = e[4] || t.height, this._repaint();
        }, e.fillCircle = function(t, e, i, s, n, r, a) {
            i.bitmap.enableMerageInAtlas = !1;
            var o = new Float32Array(2 * (a + 1)), h = new Float32Array(2 * (a + 1)), l = new Uint16Array(3 * a), u = 2 * Math.PI / a, c = 0;
            o[0] = s, o[1] = n, h[0] = s / i.width, h[1] = n / i.height;
            for (var _ = 2, d = 0; d < a; d++) {
                var f = r * Math.cos(c) + s, p = r * Math.sin(c) + n;
                o[_] = f, o[_ + 1] = p, h[_] = f / i.width, h[_ + 1] = p / i.height, c += u, _ += 2;
            }
            for (_ = 0, d = 0; d < a; d++) l[_++] = 0, l[_++] = d + 1, l[_++] = d + 2 >= a + 1 ? 1 : d + 2;
            this.drawTriangles(i, t, e, o, h, l);
        }, e.drawTriangles = function(t, e, i, s, n, r, a, o, h, l) {
            void 0 === o && (o = 1), this._saveToCmd(Render._context.drawTriangles, [ t, e, i, s, n, r, a, o, h, l ]);
        }, e._saveToCmd = function(t, e) {
            return this._sp && (this._sp._renderType |= 512), null == this._one ? (this._one = e, 
            this._render = this._renderOne) : (this._sp && (this._sp._renderType &= -2), this._render = this._renderAll, 
            0 === (this._cmds || (this._cmds = [])).length && this._cmds.push(this._one), this._cmds.push(e)), 
            e.callee = t, this._repaint(), e;
        }, e.clipRect = function(t, e, i, s) {
            this._saveToCmd(Render._context._clipRect, [ t, e, i, s ]);
        }, e.fillText = function(t, e, i, s, n, r, a) {
            void 0 === a && (a = 0), this._saveToCmd(Render._context._fillText, [ t, e, i, s || Font.defaultFont, n, r ]);
        }, e.fillBorderText = function(t, e, i, s, n, r, a, o) {
            this._saveToCmd(Render._context._fillBorderText, [ t, e, i, s || Font.defaultFont, n, r, a, o ]);
        }, e.strokeText = function(t, e, i, s, n, r, a) {
            this._saveToCmd(Render._context._strokeText, [ t, e, i, s || Font.defaultFont, n, r, a ]);
        }, e.alpha = function(t) {
            t = t < 0 ? 0 : t > 1 ? 1 : t, this._saveToCmd(Render._context._alpha, [ t ]);
        }, e.setAlpha = function(t) {
            t = t < 0 ? 0 : t > 1 ? 1 : t, this._saveToCmd(Render._context._setAlpha, [ t ]);
        }, e.transform = function(t, e, i) {
            void 0 === e && (e = 0), void 0 === i && (i = 0), this._saveToCmd(Render._context._transform, [ t, e, i ]);
        }, e.rotate = function(t, e, i) {
            void 0 === e && (e = 0), void 0 === i && (i = 0), this._saveToCmd(Render._context._rotate, [ t, e, i ]);
        }, e.scale = function(t, e, i, s) {
            void 0 === i && (i = 0), void 0 === s && (s = 0), this._saveToCmd(Render._context._scale, [ t, e, i, s ]);
        }, e.translate = function(t, e) {
            this._saveToCmd(Render._context._translate, [ t, e ]);
        }, e.save = function() {
            this._saveToCmd(Render._context._save, []);
        }, e.restore = function() {
            this._saveToCmd(Render._context._restore, []);
        }, e.replaceText = function(t) {
            this._repaint();
            var e = this._cmds;
            if (e) {
                for (var i = e.length - 1; i > -1; i--) if (this._isTextCmd(e[i].callee)) return e[i][0].toUpperCase ? e[i][0] = t : e[i][0].setText(t), 
                !0;
            } else if (this._one && this._isTextCmd(this._one.callee)) return this._one[0].toUpperCase ? this._one[0] = t : this._one[0].setText(t), 
            !0;
            return !1;
        }, e._isTextCmd = function(t) {
            return t === Render._context._fillText || t === Render._context._fillBorderText || t === Render._context._strokeText;
        }, e.replaceTextColor = function(t) {
            this._repaint();
            var e = this._cmds;
            if (e) for (var i = e.length - 1; i > -1; i--) this._isTextCmd(e[i].callee) && (e[i][4] = t, 
            e[i][0].toUpperCase || (e[i][0].changed = !0)); else this._one && this._isTextCmd(this._one.callee) && (this._one[4] = t, 
            this._one[0].toUpperCase || (this._one[0].changed = !0));
        }, e.loadImage = function(t, e, i, s, n, r) {
            function a(t) {
                t && (o.drawTexture(t, e, i, s, n), null != r && r.call(o._sp, t));
            }
            var o = this;
            void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === s && (s = 0), void 0 === n && (n = 0);
            var h = Loader.getRes(t);
            h ? a(h) : Laya.loader.load(t, Handler.create(null, a), null, "image");
        }, e._renderEmpty = function(t, e, i, s) {}, e._renderAll = function(t, e, i, s) {
            for (var n, r = this._cmds, a = 0, o = r.length; a < o; a++) (n = r[a]).callee.call(e, i, s, n);
        }, e._renderOne = function(t, e, i, s) {
            this._one.callee.call(e, i, s, this._one);
        }, e._renderOneImg = function(t, e, i, s) {
            this._one.callee.call(e, i, s, this._one), 2305 !== t._renderType && (t._renderType |= 1);
        }, e.drawLine = function(t, e, i, s, n, r) {
            void 0 === r && (r = 1);
            var a = 0;
            Render.isWebGL && (a = VectorGraphManager.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), 
            this._vectorgraphArray.push(a));
            var o = r % 2 == 0 ? 0 : .5, h = [ t + o, e + o, i + o, s + o, n, r, a ];
            this._saveToCmd(Render._context._drawLine, h);
        }, e.drawLines = function(t, e, i, s, n) {
            void 0 === n && (n = 1);
            var r = 0;
            if (i && !(i.length < 4)) {
                Render.isWebGL && (r = VectorGraphManager.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), 
                this._vectorgraphArray.push(r));
                var a = n % 2 == 0 ? 0 : .5, o = [ t + a, e + a, i, s, n, r ];
                this._saveToCmd(Render._context._drawLines, o);
            }
        }, e.drawCurves = function(t, e, i, s, n) {
            void 0 === n && (n = 1);
            var r = [ t, e, i, s, n ];
            this._saveToCmd(Render._context._drawCurves, r);
        }, e.drawRect = function(t, e, i, s, n, r, a) {
            void 0 === a && (a = 1);
            var o = r ? a / 2 : 0, h = r ? a : 0, l = [ t + o, e + o, i - h, s - h, n, r, a ];
            this._saveToCmd(Render._context._drawRect, l);
        }, e.drawCircle = function(t, e, i, s, n, r) {
            void 0 === r && (r = 1);
            var a = n ? r / 2 : 0, o = 0;
            Render.isWebGL && (o = VectorGraphManager.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), 
            this._vectorgraphArray.push(o));
            var h = [ t, e, i - a, s, n, r, o ];
            this._saveToCmd(Render._context._drawCircle, h);
        }, e.drawPie = function(t, e, i, s, n, r, a, o) {
            void 0 === o && (o = 1);
            var h = a ? o / 2 : 0, l = a ? o : 0, u = 0;
            Render.isWebGL && (u = VectorGraphManager.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), 
            this._vectorgraphArray.push(u));
            var c = [ t + h, e + h, i - l, s, n, r, a, o, u ];
            c[3] = Utils.toRadian(s), c[4] = Utils.toRadian(n), this._saveToCmd(Render._context._drawPie, c);
        }, e.drawPoly = function(t, e, i, s, n, r) {
            void 0 === r && (r = 1);
            var a = 0, o = !1;
            Render.isWebGL && (a = VectorGraphManager.getInstance().getId(), null == this._vectorgraphArray && (this._vectorgraphArray = []), 
            this._vectorgraphArray.push(a), o = !(i.length > 6));
            var h = n ? r % 2 == 0 ? 0 : .5 : 0, l = [ t + h, e + h, i, s, n, r, a, o ];
            this._saveToCmd(Render._context._drawPoly, l);
        }, e.drawPath = function(t, e, i, s, n) {
            var r = [ t, e, i, s, n ];
            this._saveToCmd(Render._context._drawPath, r);
        }, __getset(0, e, "cmds", function() {
            return this._cmds;
        }, function(t) {
            this._sp && (this._sp._renderType |= 512), this._cmds = t, this._render = this._renderAll, 
            this._repaint();
        }), t.__init__ = function() {
            if (Render.isConchNode) {
                for (var t = laya.display.Graphics.prototype, e = Browser.window.ConchGraphics.prototype, i = [ "clear", "destroy", "alpha", "rotate", "transform", "scale", "translate", "save", "restore", "clipRect", "blendMode", "fillText", "fillBorderText", "_fands", "drawRect", "drawCircle", "drawPie", "drawPoly", "drawPath", "drawImageM", "drawLine", "drawLines", "_drawPs", "drawCurves", "replaceText", "replaceTextColor", "_fillImage", "fillTexture", "setSkinMesh", "drawParticle", "drawImageS" ], s = 0, n = i.length; s <= n; s++) {
                    var r = i[s];
                    t[r] = e[r];
                }
                t._saveToCmd = null, e.drawImageS && (t.drawTextures = function(t, e) {
                    if (t && t.loaded && t.bitmap && t.source) {
                        var i = t.uv, s = t.bitmap.width, n = t.bitmap.height;
                        this.drawImageS(t.bitmap.source, i[0] * s, i[1] * n, (i[2] - i[0]) * s, (i[5] - i[3]) * n, t.offsetX, t.offsetY, t.width, t.height, e);
                    }
                }), t.drawTexture = function(t, e, i, s, n, r, a) {
                    if (void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === s && (s = 0), void 0 === n && (n = 0), 
                    void 0 === a && (a = 1), t) if (t.loaded) {
                        if (t.loaded && t.bitmap && t.source && (s || (s = t.sourceWidth), n || (n = t.sourceHeight), 
                        a = a < 0 ? 0 : a > 1 ? 1 : a, s = s - t.sourceWidth + t.width, n = n - t.sourceHeight + t.height, 
                        !(s <= 0 || n <= 0))) {
                            e += t.offsetX, i += t.offsetY;
                            var o = t.uv, h = t.bitmap.width, l = t.bitmap.height;
                            this.drawImageM(t.bitmap.source, o[0] * h, o[1] * l, (o[2] - o[0]) * h, (o[5] - o[3]) * l, e, i, s, n, r, a), 
                            this._repaint();
                        }
                    } else t.once("loaded", this, function() {
                        this.drawTexture(t, e, i, s, n, r);
                    });
                }, t.fillTexture = function(t, e, i, s, n, r, a) {
                    if (void 0 === s && (s = 0), void 0 === n && (n = 0), void 0 === r && (r = "repeat"), 
                    t && t.loaded) {
                        var o, h = Render._context.ctx, l = t.bitmap.width, u = t.bitmap.height, c = t.uv;
                        o = t.uv != Texture.DEF_UV ? h.createPattern(t.bitmap.source, r, c[0] * l, c[1] * u, (c[2] - c[0]) * l, (c[5] - c[3]) * u) : h.createPattern(t.bitmap.source, r);
                        var _ = 0, d = 0;
                        a && (e += a.x % t.width, i += a.y % t.height, _ -= a.x % t.width, d -= a.y % t.height), 
                        this._fillImage(o, e, i, _, d, s, n);
                    }
                };
            }
        }, t._cache = [], t;
    }(), GraphicsBounds = function() {
        function t() {
            this._cacheBoundsType = !1;
        }
        __class(t, "laya.display.GraphicsBounds");
        var e = t.prototype;
        return e.destroy = function() {
            this._graphics = null, this._temp = null, this._rstBoundPoints = null, this._bounds = null;
        }, e.reset = function() {
            this._temp && (this._temp.length = 0);
        }, e.getBounds = function(t) {
            return void 0 === t && (t = !1), (!this._bounds || !this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._bounds = Rectangle._getWrapRec(this.getBoundPoints(t), this._bounds)), 
            this._cacheBoundsType = t, this._bounds;
        }, e.getBoundPoints = function(t) {
            return void 0 === t && (t = !1), (!this._temp || this._temp.length < 1 || t != this._cacheBoundsType) && (this._temp = this._getCmdPoints(t)), 
            this._cacheBoundsType = t, this._rstBoundPoints = Utils.copyArray(this._rstBoundPoints, this._temp);
        }, e._getCmdPoints = function(e) {
            void 0 === e && (e = !1);
            var i, s = Render._context, n = this._graphics.cmds;
            if (i = this._temp || (this._temp = []), i.length = 0, n || null == this._graphics._one || (t._tempCmds.length = 0, 
            t._tempCmds.push(this._graphics._one), n = t._tempCmds), !n) return i;
            var r;
            (r = t._tempMatrixArrays).length = 0;
            var a = t._initMatrix;
            a.identity();
            for (var o, h, l = t._tempMatrix, u = NaN, c = NaN, _ = NaN, d = NaN, f = NaN, p = NaN, g = 0, m = n.length; g < m; g++) if ((o = n[g]).callee) switch (o.callee) {
              case s._save:
              case 7:
                r.push(a), a = a.clone();
                break;

              case s._restore:
              case 8:
                a = r.pop();
                break;

              case s._scale:
              case 5:
                l.identity(), l.translate(-o[2], -o[3]), l.scale(o[0], o[1]), l.translate(o[2], o[3]), 
                this._switchMatrix(a, l);
                break;

              case s._rotate:
              case 3:
                l.identity(), l.translate(-o[1], -o[2]), l.rotate(o[0]), l.translate(o[1], o[2]), 
                this._switchMatrix(a, l);
                break;

              case s._translate:
              case 6:
                l.identity(), l.translate(o[0], o[1]), this._switchMatrix(a, l);
                break;

              case s._transform:
              case 4:
                l.identity(), l.translate(-o[1], -o[2]), l.concat(o[0]), l.translate(o[1], o[2]), 
                this._switchMatrix(a, l);
                break;

              case 16:
              case 24:
                t._addPointArrToRst(i, Rectangle._getBoundPointS(o[0], o[1], o[2], o[3]), a);
                break;

              case 17:
                a.copyTo(l), l.concat(o[4]), t._addPointArrToRst(i, Rectangle._getBoundPointS(o[0], o[1], o[2], o[3]), l);
                break;

              case s._drawTexture:
                h = o[0], e ? o[3] && o[4] ? t._addPointArrToRst(i, Rectangle._getBoundPointS(o[1], o[2], o[3], o[4]), a) : (h = o[0], 
                t._addPointArrToRst(i, Rectangle._getBoundPointS(o[1], o[2], h.width, h.height), a)) : (u = (o[3] || h.sourceWidth) / h.width, 
                c = (o[4] || h.sourceHeight) / h.height, _ = u * h.sourceWidth, d = c * h.sourceHeight, 
                f = h.offsetX > 0 ? h.offsetX : 0, p = h.offsetY > 0 ? h.offsetY : 0, f *= u, p *= c, 
                t._addPointArrToRst(i, Rectangle._getBoundPointS(o[1] - f, o[2] - p, _, d), a));
                break;

              case s._fillTexture:
                o[3] && o[4] ? t._addPointArrToRst(i, Rectangle._getBoundPointS(o[1], o[2], o[3], o[4]), a) : (h = o[0], 
                t._addPointArrToRst(i, Rectangle._getBoundPointS(o[1], o[2], h.width, h.height), a));
                break;

              case s._drawTextureWithTransform:
                var v;
                o[5] ? (a.copyTo(l), l.concat(o[5]), v = l) : v = a, e ? o[3] && o[4] ? t._addPointArrToRst(i, Rectangle._getBoundPointS(o[1], o[2], o[3], o[4]), v) : (h = o[0], 
                t._addPointArrToRst(i, Rectangle._getBoundPointS(o[1], o[2], h.width, h.height), v)) : (h = o[0], 
                u = (o[3] || h.sourceWidth) / h.width, c = (o[4] || h.sourceHeight) / h.height, 
                _ = u * h.sourceWidth, d = c * h.sourceHeight, f = h.offsetX > 0 ? h.offsetX : 0, 
                p = h.offsetY > 0 ? h.offsetY : 0, f *= u, p *= c, t._addPointArrToRst(i, Rectangle._getBoundPointS(o[1] - f, o[2] - p, _, d), v));
                break;

              case s._drawRect:
              case 13:
                t._addPointArrToRst(i, Rectangle._getBoundPointS(o[0], o[1], o[2], o[3]), a);
                break;

              case s._drawCircle:
              case s._fillCircle:
              case 14:
                t._addPointArrToRst(i, Rectangle._getBoundPointS(o[0] - o[2], o[1] - o[2], o[2] + o[2], o[2] + o[2]), a);
                break;

              case s._drawLine:
              case 20:
                t._tempPoints.length = 0;
                var y = NaN;
                y = .5 * o[5], o[0] == o[2] ? t._tempPoints.push(o[0] + y, o[1], o[2] + y, o[3], o[0] - y, o[1], o[2] - y, o[3]) : o[1] == o[3] ? t._tempPoints.push(o[0], o[1] + y, o[2], o[3] + y, o[0], o[1] - y, o[2], o[3] - y) : t._tempPoints.push(o[0], o[1], o[2], o[3]), 
                t._addPointArrToRst(i, t._tempPoints, a);
                break;

              case s._drawCurves:
              case 22:
                t._addPointArrToRst(i, Bezier.I.getBezierPoints(o[2]), a, o[0], o[1]);
                break;

              case s._drawPoly:
              case s._drawLines:
              case 18:
                t._addPointArrToRst(i, o[2], a, o[0], o[1]);
                break;

              case s._drawPath:
              case 19:
                t._addPointArrToRst(i, this._getPathPoints(o[2]), a, o[0], o[1]);
                break;

              case s._drawPie:
              case 15:
                t._addPointArrToRst(i, this._getPiePoints(o[0], o[1], o[2], o[3], o[4]), a);
            }
            return i.length > 200 ? i = Utils.copyArray(i, Rectangle._getWrapRec(i)._getBoundPoints()) : i.length > 8 && (i = GrahamScan.scanPList(i)), 
            i;
        }, e._switchMatrix = function(t, e) {
            e.concat(t), e.copyTo(t);
        }, e._getPiePoints = function(e, i, s, n, r) {
            var a = t._tempPoints;
            t._tempPoints.length = 0, a.push(e, i);
            var o = (r - n) % (2 * Math.PI) / 10, h = NaN, l = n;
            for (h = 0; h <= 10; h++) a.push(e + s * Math.cos(l), i + s * Math.sin(l)), l += o;
            return a;
        }, e._getPathPoints = function(e) {
            var i = 0, s = 0, n = t._tempPoints;
            n.length = 0, s = e.length;
            var r;
            for (i = 0; i < s; i++) (r = e[i]).length > 1 && (n.push(r[1], r[2]), r.length > 3 && n.push(r[3], r[4]));
            return n;
        }, t._addPointArrToRst = function(e, i, s, n, r) {
            void 0 === n && (n = 0), void 0 === r && (r = 0);
            var a = 0, o = 0;
            for (o = i.length, a = 0; a < o; a += 2) t._addPointToRst(e, i[a] + n, i[a + 1] + r, s);
        }, t._addPointToRst = function(t, e, i, s) {
            var n = Point.TEMP;
            n.setTo(e || 0, i || 0), s.transformPoint(n), t.push(n.x, n.y);
        }, t._tempPoints = [], t._tempMatrixArrays = [], t._tempCmds = [], __static(t, [ "_tempMatrix", function() {
            return this._tempMatrix = new Matrix();
        }, "_initMatrix", function() {
            return this._initMatrix = new Matrix();
        } ]), t;
    }(), Event = function() {
        function t() {}
        __class(t, "laya.events.Event");
        var e = t.prototype;
        return e.setTo = function(t, e, i) {
            return this.type = t, this.currentTarget = e, this.target = i, this;
        }, e.stopPropagation = function() {
            this._stoped = !0;
        }, __getset(0, e, "stageY", function() {
            return Laya.stage.mouseY;
        }), __getset(0, e, "charCode", function() {
            return this.nativeEvent.charCode;
        }), __getset(0, e, "touches", function() {
            var t = this.nativeEvent.touches;
            if (t) for (var e = Laya.stage, i = 0, s = t.length; i < s; i++) {
                var n = t[i], r = Point.TEMP;
                r.setTo(n.clientX, n.clientY), e._canvasTransform.invertTransformPoint(r), e.transform.invertTransformPoint(r), 
                n.stageX = r.x, n.stageY = r.y;
            }
            return t;
        }), __getset(0, e, "keyLocation", function() {
            return this.nativeEvent.keyLocation;
        }), __getset(0, e, "ctrlKey", function() {
            return this.nativeEvent.ctrlKey;
        }), __getset(0, e, "altKey", function() {
            return this.nativeEvent.altKey;
        }), __getset(0, e, "shiftKey", function() {
            return this.nativeEvent.shiftKey;
        }), __getset(0, e, "stageX", function() {
            return Laya.stage.mouseX;
        }), t.EMPTY = new t(), t.MOUSE_DOWN = "mousedown", t.MOUSE_UP = "mouseup", t.CLICK = "click", 
        t.RIGHT_MOUSE_DOWN = "rightmousedown", t.RIGHT_MOUSE_UP = "rightmouseup", t.RIGHT_CLICK = "rightclick", 
        t.MOUSE_MOVE = "mousemove", t.MOUSE_OVER = "mouseover", t.MOUSE_OUT = "mouseout", 
        t.MOUSE_WHEEL = "mousewheel", t.ROLL_OVER = "mouseover", t.ROLL_OUT = "mouseout", 
        t.DOUBLE_CLICK = "doubleclick", t.CHANGE = "change", t.CHANGED = "changed", t.RESIZE = "resize", 
        t.ADDED = "added", t.REMOVED = "removed", t.DISPLAY = "display", t.UNDISPLAY = "undisplay", 
        t.ERROR = "error", t.COMPLETE = "complete", t.LOADED = "loaded", t.PROGRESS = "progress", 
        t.INPUT = "input", t.RENDER = "render", t.OPEN = "open", t.MESSAGE = "message", 
        t.CLOSE = "close", t.KEY_DOWN = "keydown", t.KEY_PRESS = "keypress", t.KEY_UP = "keyup", 
        t.FRAME = "enterframe", t.DRAG_START = "dragstart", t.DRAG_MOVE = "dragmove", t.DRAG_END = "dragend", 
        t.ENTER = "enter", t.SELECT = "select", t.BLUR = "blur", t.FOCUS = "focus", t.VISIBILITY_CHANGE = "visibilitychange", 
        t.FOCUS_CHANGE = "focuschange", t.PLAYED = "played", t.PAUSED = "paused", t.STOPPED = "stopped", 
        t.START = "start", t.END = "end", t.ENABLE_CHANGED = "enablechanged", t.ACTIVE_IN_HIERARCHY_CHANGED = "activeinhierarchychanged", 
        t.COMPONENT_ADDED = "componentadded", t.COMPONENT_REMOVED = "componentremoved", 
        t.LAYER_CHANGED = "layerchanged", t.HIERARCHY_LOADED = "hierarchyloaded", t.RECOVERED = "recovered", 
        t.RELEASED = "released", t.LINK = "link", t.LABEL = "label", t.FULL_SCREEN_CHANGE = "fullscreenchange", 
        t.DEVICE_LOST = "devicelost", t.MESH_CHANGED = "meshchanged", t.MATERIAL_CHANGED = "materialchanged", 
        t.WORLDMATRIX_NEEDCHANGE = "worldmatrixneedchanged", t.ANIMATION_CHANGED = "animationchanged", 
        t.TRIGGER_ENTER = "triggerenter", t.TRIGGER_STAY = "triggerstay", t.TRIGGER_EXIT = "triggerexit", 
        t.TRAIL_FILTER_CHANGE = "trailfilterchange", t.DOMINO_FILTER_CHANGE = "dominofilterchange", 
        t;
    }(), Keyboard = function() {
        function t() {}
        return __class(t, "laya.events.Keyboard"), t.NUMBER_0 = 48, t.NUMBER_1 = 49, t.NUMBER_2 = 50, 
        t.NUMBER_3 = 51, t.NUMBER_4 = 52, t.NUMBER_5 = 53, t.NUMBER_6 = 54, t.NUMBER_7 = 55, 
        t.NUMBER_8 = 56, t.NUMBER_9 = 57, t.A = 65, t.B = 66, t.C = 67, t.D = 68, t.E = 69, 
        t.F = 70, t.G = 71, t.H = 72, t.I = 73, t.J = 74, t.K = 75, t.L = 76, t.M = 77, 
        t.N = 78, t.O = 79, t.P = 80, t.Q = 81, t.R = 82, t.S = 83, t.T = 84, t.U = 85, 
        t.V = 86, t.W = 87, t.X = 88, t.Y = 89, t.Z = 90, t.F1 = 112, t.F2 = 113, t.F3 = 114, 
        t.F4 = 115, t.F5 = 116, t.F6 = 117, t.F7 = 118, t.F8 = 119, t.F9 = 120, t.F10 = 121, 
        t.F11 = 122, t.F12 = 123, t.F13 = 124, t.F14 = 125, t.F15 = 126, t.NUMPAD = 21, 
        t.NUMPAD_0 = 96, t.NUMPAD_1 = 97, t.NUMPAD_2 = 98, t.NUMPAD_3 = 99, t.NUMPAD_4 = 100, 
        t.NUMPAD_5 = 101, t.NUMPAD_6 = 102, t.NUMPAD_7 = 103, t.NUMPAD_8 = 104, t.NUMPAD_9 = 105, 
        t.NUMPAD_ADD = 107, t.NUMPAD_DECIMAL = 110, t.NUMPAD_DIVIDE = 111, t.NUMPAD_ENTER = 108, 
        t.NUMPAD_MULTIPLY = 106, t.NUMPAD_SUBTRACT = 109, t.SEMICOLON = 186, t.EQUAL = 187, 
        t.COMMA = 188, t.MINUS = 189, t.PERIOD = 190, t.SLASH = 191, t.BACKQUOTE = 192, 
        t.LEFTBRACKET = 219, t.BACKSLASH = 220, t.RIGHTBRACKET = 221, t.QUOTE = 222, t.ALTERNATE = 18, 
        t.BACKSPACE = 8, t.CAPS_LOCK = 20, t.COMMAND = 15, t.CONTROL = 17, t.DELETE = 46, 
        t.ENTER = 13, t.ESCAPE = 27, t.PAGE_UP = 33, t.PAGE_DOWN = 34, t.END = 35, t.HOME = 36, 
        t.LEFT = 37, t.UP = 38, t.RIGHT = 39, t.DOWN = 40, t.SHIFT = 16, t.SPACE = 32, t.TAB = 9, 
        t.INSERT = 45, t;
    }(), KeyBoardManager = function() {
        function t() {}
        return __class(t, "laya.events.KeyBoardManager"), t.__init__ = function() {
            t._addEvent("keydown"), t._addEvent("keypress"), t._addEvent("keyup");
        }, t._addEvent = function(t) {
            Browser.document.addEventListener(t, function(e) {
                laya.events.KeyBoardManager._dispatch(e, t);
            }, !0);
        }, t._dispatch = function(e, i) {
            if (t.enabled) {
                t._event._stoped = !1, t._event.nativeEvent = e, t._event.keyCode = e.keyCode || e.which || e.charCode, 
                "keydown" === i ? t._pressKeys[t._event.keyCode] = !0 : "keyup" === i && (t._pressKeys[t._event.keyCode] = null);
                for (var s = Laya.stage.focus && null != Laya.stage.focus.event && Laya.stage.focus.displayedInStage ? Laya.stage.focus : Laya.stage, n = s; n; ) n.event(i, t._event.setTo(i, n, s)), 
                n = n.parent;
            }
        }, t.hasKeyDown = function(e) {
            return t._pressKeys[e];
        }, t._pressKeys = {}, t.enabled = !0, __static(t, [ "_event", function() {
            return this._event = new Event();
        } ]), t;
    }(), KeyLocation = function() {
        function t() {}
        return __class(t, "laya.events.KeyLocation"), t.STANDARD = 0, t.LEFT = 1, t.RIGHT = 2, 
        t.NUM_PAD = 3, t;
    }(), MouseManager = function() {
        function t() {
            this.mouseX = 0, this.mouseY = 0, this.disableMouseEvent = !1, this.mouseDownTime = 0, 
            this.mouseMoveAccuracy = 2, this._stage = null, this._target = null, this._lastMoveTimer = 0, 
            this._isLeftMouse = !1, this._eventList = [], this._touchIDs = {}, this._id = 1, 
            this._tTouchID = 0, this._event = new Event(), this._matrix = new Matrix(), this._point = new Point(), 
            this._rect = new Rectangle(), this._prePoint = new Point(), this._curTouchID = NaN;
        }
        __class(t, "laya.events.MouseManager");
        var e = t.prototype;
        return e.__init__ = function(e, i) {
            var s = this;
            this._stage = e;
            var n = this, r = this._eventList;
            i.oncontextmenu = function(e) {
                if (t.enabled) return !1;
            }, i.addEventListener("mousedown", function(e) {
                t.enabled && (Browser.onIE || e.preventDefault(), r.push(e), n.mouseDownTime = Browser.now());
            }), i.addEventListener("mouseup", function(e) {
                t.enabled && (e.preventDefault(), r.push(e), n.mouseDownTime = -Browser.now());
            }, !0), i.addEventListener("mousemove", function(e) {
                if (t.enabled) {
                    e.preventDefault();
                    var i = Browser.now();
                    if (i - n._lastMoveTimer < 10) return;
                    n._lastMoveTimer = i, r.push(e);
                }
            }, !0), i.addEventListener("mouseout", function(e) {
                t.enabled && r.push(e);
            }), i.addEventListener("mouseover", function(e) {
                t.enabled && r.push(e);
            }), i.addEventListener("touchstart", function(e) {
                t.enabled && (r.push(e), t._isFirstTouch || Input.isInputting || e.preventDefault(), 
                n.mouseDownTime = Browser.now());
            }), i.addEventListener("touchend", function(e) {
                t.enabled ? (t._isFirstTouch || Input.isInputting || e.preventDefault(), t._isFirstTouch = !1, 
                r.push(e), n.mouseDownTime = -Browser.now()) : s._curTouchID = NaN;
            }, !0), i.addEventListener("touchmove", function(e) {
                t.enabled && (e.preventDefault(), r.push(e));
            }, !0), i.addEventListener("touchcancel", function(e) {
                t.enabled ? (e.preventDefault(), r.push(e)) : s._curTouchID = NaN;
            }, !0), i.addEventListener("mousewheel", function(e) {
                t.enabled && r.push(e);
            }), i.addEventListener("DOMMouseScroll", function(e) {
                t.enabled && r.push(e);
            });
        }, e.initEvent = function(t, e) {
            this._event._stoped = !1, this._event.nativeEvent = e || t, this._target = null, 
            this._point.setTo(t.pageX || t.clientX, t.pageY || t.clientY), this._stage._canvasTransform.invertTransformPoint(this._point), 
            this.mouseX = this._point.x, this.mouseY = this._point.y, this._event.touchId = t.identifier || 0, 
            this._tTouchID = this._event.touchId;
            var i;
            (i = TouchManager.I._event)._stoped = !1, i.nativeEvent = this._event.nativeEvent, 
            i.touchId = this._event.touchId;
        }, e.checkMouseWheel = function(t) {
            this._event.delta = t.wheelDelta ? .025 * t.wheelDelta : -t.detail;
            for (var e = TouchManager.I.getLastOvers(), i = 0, s = e.length; i < s; i++) {
                var n = e[i];
                n.event("mousewheel", this._event.setTo("mousewheel", n, this._target));
            }
        }, e.onMouseMove = function(t) {
            TouchManager.I.onMouseMove(t, this._tTouchID);
        }, e.onMouseDown = function(t) {
            if (Input.isInputting && Laya.stage.focus && Laya.stage.focus.focus && !Laya.stage.focus.contains(this._target)) {
                var e = Laya.stage.focus._tf || Laya.stage.focus, i = t._tf || t;
                i instanceof laya.display.Input && i.multiline == e.multiline ? e._focusOut() : e.focus = !1;
            }
            TouchManager.I.onMouseDown(t, this._tTouchID, this._isLeftMouse);
        }, e.onMouseUp = function(t) {
            TouchManager.I.onMouseUp(t, this._tTouchID, this._isLeftMouse);
        }, e.check = function(t, e, i, s) {
            this._point.setTo(e, i), t.fromParentPoint(this._point), e = this._point.x, i = this._point.y;
            var n = t.scrollRect;
            if (n && (this._rect.setTo(n.x, n.y, n.width, n.height), !this._rect.contains(e, i))) return !1;
            if (!this.disableMouseEvent) {
                if (t.hitTestPrior && !t.mouseThrough && !this.hitTest(t, e, i)) return !1;
                for (var r = t._childs.length - 1; r > -1; r--) {
                    var a = t._childs[r];
                    if (!a.destroyed && a.mouseEnabled && a.visible && this.check(a, e, i, s)) return !0;
                }
            }
            var o = !(!t.hitTestPrior || t.mouseThrough || this.disableMouseEvent) || this.hitTest(t, e, i);
            return o ? (this._target = t, s.call(this, t)) : s === this.onMouseUp && t === this._stage && (this._target = this._stage, 
            s.call(this, this._target)), o;
        }, e.hitTest = function(t, e, i) {
            var s = !1;
            if (t.scrollRect && (e -= t.scrollRect.x, i -= t.scrollRect.y), t.hitArea instanceof laya.utils.HitArea) return t.hitArea.isHit(e, i);
            if (t.width > 0 && t.height > 0 || t.mouseThrough || t.hitArea) if (t.mouseThrough) s = t.getGraphicBounds().contains(e, i); else {
                var n = this._rect;
                t.hitArea ? n = t.hitArea : n.setTo(0, 0, t.width, t.height), s = n.contains(e, i);
            }
            return s;
        }, e.runEvent = function() {
            var e = this._eventList.length;
            if (e) {
                for (var i, s = 0, n = 0, r = 0; s < e; ) {
                    var a = this._eventList[s];
                    switch ("mousemove" !== a.type && (this._prePoint.x = this._prePoint.y = -1e6), 
                    a.type) {
                      case "mousedown":
                        this._touchIDs[0] = this._id++, t._isTouchRespond ? t._isTouchRespond = !1 : (this._isLeftMouse = 0 === a.button, 
                        this.initEvent(a), this.check(this._stage, this.mouseX, this.mouseY, this.onMouseDown));
                        break;

                      case "mouseup":
                        this._isLeftMouse = 0 === a.button, this.initEvent(a), this.check(this._stage, this.mouseX, this.mouseY, this.onMouseUp);
                        break;

                      case "mousemove":
                        Math.abs(this._prePoint.x - a.clientX) + Math.abs(this._prePoint.y - a.clientY) >= this.mouseMoveAccuracy && (this._prePoint.x = a.clientX, 
                        this._prePoint.y = a.clientY, this.initEvent(a), this.check(this._stage, this.mouseX, this.mouseY, this.onMouseMove));
                        break;

                      case "touchstart":
                        t._isTouchRespond = !0, this._isLeftMouse = !0;
                        var o = a.changedTouches;
                        for (n = 0, r = o.length; n < r; n++) i = o[n], (t.multiTouchEnabled || isNaN(this._curTouchID)) && (this._curTouchID = i.identifier, 
                        this._id % 200 == 0 && (this._touchIDs = {}), this._touchIDs[i.identifier] = this._id++, 
                        this.initEvent(i, a), this.check(this._stage, this.mouseX, this.mouseY, this.onMouseDown));
                        break;

                      case "touchend":
                      case "touchcancel":
                        t._isTouchRespond = !0, this._isLeftMouse = !0;
                        var h = a.changedTouches;
                        for (n = 0, r = h.length; n < r; n++) i = h[n], (t.multiTouchEnabled || i.identifier == this._curTouchID) && (this._curTouchID = NaN, 
                        this.initEvent(i, a), this.check(this._stage, this.mouseX, this.mouseY, this.onMouseUp) || this.onMouseUp(null));
                        break;

                      case "touchmove":
                        var l = a.changedTouches;
                        for (n = 0, r = l.length; n < r; n++) i = l[n], (t.multiTouchEnabled || i.identifier == this._curTouchID) && (this.initEvent(i, a), 
                        this.check(this._stage, this.mouseX, this.mouseY, this.onMouseMove));
                        break;

                      case "wheel":
                      case "mousewheel":
                      case "DOMMouseScroll":
                        this.checkMouseWheel(a);
                        break;

                      case "mouseout":
                        TouchManager.I.stageMouseOut();
                        break;

                      case "mouseover":
                        this._stage.event("mouseover", this._event.setTo("mouseover", this._stage, this._stage));
                    }
                    s++;
                }
                this._eventList.length = 0;
            }
        }, t.enabled = !0, t.multiTouchEnabled = !0, t._isTouchRespond = !1, t._isFirstTouch = !0, 
        __static(t, [ "instance", function() {
            return this.instance = new t();
        } ]), t;
    }(), TouchManager = function() {
        function t() {
            this.preOvers = [], this.preDowns = [], this.preRightDowns = [], this.enable = !0, 
            this._lastClickTime = 0, this._event = new Event();
        }
        __class(t, "laya.events.TouchManager");
        var e = t.prototype;
        return e._clearTempArrs = function() {
            t._oldArr.length = 0, t._newArr.length = 0, t._tEleArr.length = 0;
        }, e.getTouchFromArr = function(t, e) {
            var i = 0, s = 0;
            s = e.length;
            var n;
            for (i = 0; i < s; i++) if ((n = e[i]).id == t) return n;
            return null;
        }, e.removeTouchFromArr = function(t, e) {
            var i = 0;
            for (i = e.length - 1; i >= 0; i--) e[i].id == t && e.splice(i, 1);
        }, e.createTouchO = function(t, e) {
            var i;
            return i = Pool.getItem("TouchData") || {}, i.id = e, i.tar = t, i;
        }, e.onMouseDown = function(e, i, s) {
            if (void 0 === s && (s = !1), this.enable) {
                var n, r, a;
                n = this.getTouchFromArr(i, this.preOvers), a = this.getEles(e, null, t._tEleArr), 
                n ? n.tar = e : (r = this.createTouchO(e, i), this.preOvers.push(r)), Browser.onMobile && this.sendEvents(a, "mouseover", i);
                var o;
                o = s ? this.preDowns : this.preRightDowns, (n = this.getTouchFromArr(i, o)) ? n.tar = e : (r = this.createTouchO(e, i), 
                o.push(r)), this.sendEvents(a, s ? "mousedown" : "rightmousedown", i), this._clearTempArrs();
            }
        }, e.sendEvents = function(t, e, i) {
            void 0 === i && (i = 0);
            var s = 0, n = 0;
            n = t.length, this._event._stoped = !1;
            var r;
            r = t[0];
            var a;
            for (s = 0; s < n; s++) {
                if ((a = t[s]).destroyed) return;
                if (a.event(e, this._event.setTo(e, a, r)), this._event._stoped) break;
            }
        }, e.getEles = function(t, e, i) {
            for (i ? i.length = 0 : i = []; t && t != e; ) i.push(t), t = t.parent;
            return i;
        }, e.checkMouseOutAndOverOfMove = function(e, i, s) {
            if (void 0 === s && (s = 0), i != e) {
                var n, r, a = 0, o = 0;
                if (i.contains(e)) r = this.getEles(e, i, t._tEleArr), this.sendEvents(r, "mouseover", s); else if (e.contains(i)) r = this.getEles(i, e, t._tEleArr), 
                this.sendEvents(r, "mouseout", s); else {
                    (r = t._tEleArr).length = 0;
                    var h;
                    h = this.getEles(i, null, t._oldArr);
                    var l;
                    l = this.getEles(e, null, t._newArr), o = h.length;
                    var u = 0;
                    for (a = 0; a < o; a++) {
                        if (n = h[a], (u = l.indexOf(n)) >= 0) {
                            l.splice(u, l.length - u);
                            break;
                        }
                        r.push(n);
                    }
                    r.length > 0 && this.sendEvents(r, "mouseout", s), l.length > 0 && this.sendEvents(l, "mouseover", s);
                }
            }
        }, e.onMouseMove = function(e, i) {
            if (this.enable) {
                var s, n;
                (s = this.getTouchFromArr(i, this.preOvers)) ? (this.checkMouseOutAndOverOfMove(e, s.tar), 
                s.tar = e, n = this.getEles(e, null, t._tEleArr)) : (n = this.getEles(e, null, t._tEleArr), 
                this.sendEvents(n, "mouseover", i), this.preOvers.push(this.createTouchO(e, i))), 
                this.sendEvents(n, "mousemove", i), this._clearTempArrs();
            }
        }, e.getLastOvers = function() {
            return t._tEleArr.length = 0, this.preOvers.length > 0 && this.preOvers[0].tar ? this.getEles(this.preOvers[0].tar, null, t._tEleArr) : (t._tEleArr.push(Laya.stage), 
            t._tEleArr);
        }, e.stageMouseOut = function() {
            var t;
            t = this.getLastOvers(), this.preOvers.length = 0, this.sendEvents(t, "mouseout", 0);
        }, e.onMouseUp = function(e, i, s) {
            if (void 0 === s && (s = !1), this.enable) {
                var n, r, a, o, h, l = 0, u = 0, c = Browser.onMobile;
                r = this.getEles(e, null, t._tEleArr), this.sendEvents(r, s ? "mouseup" : "rightmouseup", i);
                var _;
                if (_ = s ? this.preDowns : this.preRightDowns, n = this.getTouchFromArr(i, _)) {
                    var d = !1, f = Browser.now();
                    if (d = f - this._lastClickTime < 300, this._lastClickTime = f, e == n.tar) h = r; else for (a = this.getEles(n.tar, null, t._oldArr), 
                    (h = t._newArr).length = 0, u = a.length, l = 0; l < u; l++) o = a[l], r.indexOf(o) >= 0 && h.push(o);
                    h.length > 0 && this.sendEvents(h, s ? "click" : "rightclick", i), s && d && this.sendEvents(h, "doubleclick", i), 
                    this.removeTouchFromArr(i, _), n.tar = null, Pool.recover("TouchData", n);
                }
                (n = this.getTouchFromArr(i, this.preOvers)) && c && ((h = this.getEles(n.tar, null, h)) && h.length > 0 && this.sendEvents(h, "mouseout", i), 
                this.removeTouchFromArr(i, this.preOvers), n.tar = null, Pool.recover("TouchData", n)), 
                this._clearTempArrs();
            }
        }, t._oldArr = [], t._newArr = [], t._tEleArr = [], __static(t, [ "I", function() {
            return this.I = new t();
        } ]), t;
    }(), Filter = function() {
        function t() {
            this._action = null;
        }
        __class(t, "laya.filters.Filter");
        var e = t.prototype;
        return Laya.imps(e, {
            "laya.filters.IFilter": !0
        }), e.callNative = function(t) {}, __getset(0, e, "type", function() {
            return -1;
        }), __getset(0, e, "action", function() {
            return this._action;
        }), t.BLUR = 16, t.COLOR = 32, t.GLOW = 8, t._filterStart = null, t._filterEnd = null, 
        t._EndTarget = null, t._recycleScope = null, t._filter = null, t._useSrc = null, 
        t._endSrc = null, t._useOut = null, t._endOut = null, t;
    }(), ColorFilterAction = function() {
        function t() {
            this.data = null;
        }
        __class(t, "laya.filters.ColorFilterAction");
        var e = t.prototype;
        return Laya.imps(e, {
            "laya.filters.IFilterAction": !0
        }), e.apply = function(t) {
            var e = t.ctx.ctx, i = t.ctx.ctx.canvas;
            if (0 == i.width || 0 == i.height) return i;
            for (var s, n = e.getImageData(0, 0, i.width, i.height), r = n.data, a = 0, o = r.length; a < o; a += 4) s = this.getColor(r[a], r[a + 1], r[a + 2], r[a + 3]), 
            0 != r[a + 3] && (r[a] = s[0], r[a + 1] = s[1], r[a + 2] = s[2], r[a + 3] = s[3]);
            return e.putImageData(n, 0, 0), t;
        }, e.getColor = function(t, e, i, s) {
            var n = [];
            if (this.data._mat && this.data._alpha) {
                var r = this.data._mat, a = this.data._alpha;
                n[0] = r[0] * t + r[1] * e + r[2] * i + r[3] * s + a[0], n[1] = r[4] * t + r[5] * e + r[6] * i + r[7] * s + a[1], 
                n[2] = r[8] * t + r[9] * e + r[10] * i + r[11] * s + a[2], n[3] = r[12] * t + r[13] * e + r[14] * i + r[15] * s + a[3];
            }
            return n;
        }, t;
    }(), Arith = function() {
        function t() {}
        return __class(t, "laya.maths.Arith"), t.formatR = function(t) {
            return t > Math.PI && (t -= 2 * Math.PI), t < -Math.PI && (t += 2 * Math.PI), t;
        }, t.isPOT = function(t, e) {
            return t > 0 && 0 == (t & t - 1) && e > 0 && 0 == (e & e - 1);
        }, t.setMatToArray = function(t, e) {
            t.a, t.b, t.c, t.d, t.tx, t.ty, e[0] = t.a, e[1] = t.b, e[4] = t.c, e[5] = t.d, 
            e[12] = t.tx, e[13] = t.ty;
        }, t;
    }(), Bezier = function() {
        function t() {
            this._controlPoints = [ new Point(), new Point(), new Point() ], this._calFun = this.getPoint2;
        }
        __class(t, "laya.maths.Bezier");
        var e = t.prototype;
        return e._switchPoint = function(t, e) {
            var i = this._controlPoints.shift();
            i.setTo(t, e), this._controlPoints.push(i);
        }, e.getPoint2 = function(t, e) {
            var i = this._controlPoints[0], s = this._controlPoints[1], n = this._controlPoints[2], r = Math.pow(1 - t, 2) * i.x + 2 * t * (1 - t) * s.x + Math.pow(t, 2) * n.x, a = Math.pow(1 - t, 2) * i.y + 2 * t * (1 - t) * s.y + Math.pow(t, 2) * n.y;
            e.push(r, a);
        }, e.getPoint3 = function(t, e) {
            var i = this._controlPoints[0], s = this._controlPoints[1], n = this._controlPoints[2], r = this._controlPoints[3], a = Math.pow(1 - t, 3) * i.x + 3 * s.x * t * (1 - t) * (1 - t) + 3 * n.x * t * t * (1 - t) + r.x * Math.pow(t, 3), o = Math.pow(1 - t, 3) * i.y + 3 * s.y * t * (1 - t) * (1 - t) + 3 * n.y * t * t * (1 - t) + r.y * Math.pow(t, 3);
            e.push(a, o);
        }, e.insertPoints = function(t, e) {
            var i = NaN, s = NaN;
            for (s = 1 / (t = t > 0 ? t : 5), i = 0; i <= 1; i += s) this._calFun(i, e);
        }, e.getBezierPoints = function(t, e, i) {
            void 0 === e && (e = 5), void 0 === i && (i = 2);
            var s = 0, n = 0;
            if ((n = t.length) < 2 * (i + 1)) return [];
            var r;
            switch (r = [], i) {
              case 2:
                this._calFun = this.getPoint2;
                break;

              case 3:
                this._calFun = this.getPoint3;
                break;

              default:
                return [];
            }
            for (;this._controlPoints.length <= i; ) this._controlPoints.push(new Point());
            for (s = 0; s < 2 * i; s += 2) this._switchPoint(t[s], t[s + 1]);
            for (s = 2 * i; s < n; s += 2) this._switchPoint(t[s], t[s + 1]), s / 2 % i == 0 && this.insertPoints(e, r);
            return r;
        }, __static(t, [ "I", function() {
            return this.I = new t();
        } ]), t;
    }(), GrahamScan = function() {
        function t() {}
        return __class(t, "laya.maths.GrahamScan"), t.multiply = function(t, e, i) {
            return (t.x - i.x) * (e.y - i.y) - (e.x - i.x) * (t.y - i.y);
        }, t.dis = function(t, e) {
            return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y);
        }, t._getPoints = function(e, i, s) {
            for (void 0 === i && (i = !1), t._mPointList || (t._mPointList = []); t._mPointList.length < e; ) t._mPointList.push(new Point());
            return s || (s = []), s.length = 0, i ? t.getFrom(s, t._mPointList, e) : t.getFromR(s, t._mPointList, e), 
            s;
        }, t.getFrom = function(t, e, i) {
            var s = 0;
            for (s = 0; s < i; s++) t.push(e[s]);
            return t;
        }, t.getFromR = function(t, e, i) {
            var s = 0;
            for (s = 0; s < i; s++) t.push(e.pop());
            return t;
        }, t.pListToPointList = function(e, i) {
            void 0 === i && (i = !1);
            var s = 0, n = e.length / 2, r = t._getPoints(n, i, t._tempPointList);
            for (s = 0; s < n; s++) r[s].setTo(e[s + s], e[s + s + 1]);
            return r;
        }, t.pointListToPlist = function(e) {
            var i, s = 0, n = e.length, r = t._temPList;
            for (r.length = 0, s = 0; s < n; s++) i = e[s], r.push(i.x, i.y);
            return r;
        }, t.scanPList = function(e) {
            return Utils.copyArray(e, t.pointListToPlist(t.scan(t.pListToPointList(e, !0))));
        }, t.scan = function(e) {
            var i, s, n, r = 0, a = 0, o = 0, h = e.length, l = {};
            for ((s = t._temArr).length = 0, r = (h = e.length) - 1; r >= 0; r--) n = (i = e[r]).x + "_" + i.y, 
            l.hasOwnProperty(n) || (l[n] = !0, s.push(i));
            for (h = s.length, Utils.copyArray(e, s), r = 1; r < h; r++) (e[r].y < e[o].y || e[r].y == e[o].y && e[r].x < e[o].x) && (o = r);
            for (i = e[0], e[0] = e[o], e[o] = i, r = 1; r < h - 1; r++) {
                for (o = r, a = r + 1; a < h; a++) (t.multiply(e[a], e[o], e[0]) > 0 || 0 == t.multiply(e[a], e[o], e[0]) && t.dis(e[0], e[a]) < t.dis(e[0], e[o])) && (o = a);
                i = e[r], e[r] = e[o], e[o] = i;
            }
            if (s = t._temArr, s.length = 0, e.length < 3) return Utils.copyArray(s, e);
            for (s.push(e[0], e[1], e[2]), r = 3; r < h; r++) {
                for (;s.length >= 2 && t.multiply(e[r], s[s.length - 1], s[s.length - 2]) >= 0; ) s.pop();
                e[r] && s.push(e[r]);
            }
            return s;
        }, t._mPointList = null, t._tempPointList = [], t._temPList = [], t._temArr = [], 
        t;
    }(), MathUtil = function() {
        function t() {}
        return __class(t, "laya.maths.MathUtil"), t.subtractVector3 = function(t, e, i) {
            i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2];
        }, t.lerp = function(t, e, i) {
            return t * (1 - i) + e * i;
        }, t.scaleVector3 = function(t, e, i) {
            i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e;
        }, t.lerpVector3 = function(t, e, i, s) {
            var n = t[0], r = t[1], a = t[2];
            s[0] = n + i * (e[0] - n), s[1] = r + i * (e[1] - r), s[2] = a + i * (e[2] - a);
        }, t.lerpVector4 = function(t, e, i, s) {
            var n = t[0], r = t[1], a = t[2], o = t[3];
            s[0] = n + i * (e[0] - n), s[1] = r + i * (e[1] - r), s[2] = a + i * (e[2] - a), 
            s[3] = o + i * (e[3] - o);
        }, t.slerpQuaternionArray = function(t, e, i, s, n, r, a) {
            var o, h, l, u, c, _ = t[e + 0], d = t[e + 1], f = t[e + 2], p = t[e + 3], g = i[s + 0], m = i[s + 1], v = i[s + 2], y = i[s + 3];
            return (h = _ * g + d * m + f * v + p * y) < 0 && (h = -h, g = -g, m = -m, v = -v, 
            y = -y), 1 - h > 1e-6 ? (o = Math.acos(h), l = Math.sin(o), u = Math.sin((1 - n) * o) / l, 
            c = Math.sin(n * o) / l) : (u = 1 - n, c = n), r[a + 0] = u * _ + c * g, r[a + 1] = u * d + c * m, 
            r[a + 2] = u * f + c * v, r[a + 3] = u * p + c * y, r;
        }, t.getRotation = function(t, e, i, s) {
            return Math.atan2(s - e, i - t) / Math.PI * 180;
        }, t.sortBigFirst = function(t, e) {
            return t == e ? 0 : e > t ? 1 : -1;
        }, t.sortSmallFirst = function(t, e) {
            return t == e ? 0 : e > t ? -1 : 1;
        }, t.sortNumBigFirst = function(t, e) {
            return parseFloat(e) - parseFloat(t);
        }, t.sortNumSmallFirst = function(t, e) {
            return parseFloat(t) - parseFloat(e);
        }, t.sortByKey = function(e, i, s) {
            void 0 === i && (i = !1), void 0 === s && (s = !0);
            var n;
            return n = i ? s ? t.sortNumBigFirst : t.sortBigFirst : s ? t.sortNumSmallFirst : t.sortSmallFirst, 
            function(t, i) {
                return n(t[e], i[e]);
            };
        }, t;
    }(), Matrix = function() {
        function t(t, e, i, s, n, r) {
            this.inPool = !1, this.bTransform = !1, void 0 === t && (t = 1), void 0 === e && (e = 0), 
            void 0 === i && (i = 0), void 0 === s && (s = 1), void 0 === n && (n = 0), void 0 === r && (r = 0), 
            this.a = t, this.b = e, this.c = i, this.d = s, this.tx = n, this.ty = r, this._checkTransform();
        }
        __class(t, "laya.maths.Matrix");
        var e = t.prototype;
        return e.identity = function() {
            return this.a = this.d = 1, this.b = this.tx = this.ty = this.c = 0, this.bTransform = !1, 
            this;
        }, e._checkTransform = function() {
            return this.bTransform = 1 !== this.a || 0 !== this.b || 0 !== this.c || 1 !== this.d;
        }, e.setTranslate = function(t, e) {
            return this.tx = t, this.ty = e, this;
        }, e.translate = function(t, e) {
            return this.tx += t, this.ty += e, this;
        }, e.scale = function(t, e) {
            this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, 
            this.bTransform = !0;
        }, e.rotate = function(t) {
            var e = Math.cos(t), i = Math.sin(t), s = this.a, n = this.c, r = this.tx;
            this.a = s * e - this.b * i, this.b = s * i + this.b * e, this.c = n * e - this.d * i, 
            this.d = n * i + this.d * e, this.tx = r * e - this.ty * i, this.ty = r * i + this.ty * e, 
            this.bTransform = !0;
        }, e.skew = function(t, e) {
            var i = Math.tan(t), s = Math.tan(e), n = this.a, r = this.b;
            return this.a += s * this.c, this.b += s * this.d, this.c += i * n, this.d += i * r, 
            this;
        }, e.invertTransformPoint = function(t) {
            var e = this.a, i = this.b, s = this.c, n = this.d, r = this.tx, a = e * n - i * s, o = n / a, h = -i / a, l = -s / a, u = e / a, c = (s * this.ty - n * r) / a, _ = -(e * this.ty - i * r) / a;
            return t.setTo(o * t.x + l * t.y + c, h * t.x + u * t.y + _);
        }, e.transformPoint = function(t) {
            return t.setTo(this.a * t.x + this.c * t.y + this.tx, this.b * t.x + this.d * t.y + this.ty);
        }, e.transformPointN = function(t) {
            return t.setTo(this.a * t.x + this.c * t.y, this.b * t.x + this.d * t.y);
        }, e.transformPointArray = function(t, e) {
            for (var i = t.length, s = 0; s < i; s += 2) {
                var n = t[s], r = t[s + 1];
                e[s] = this.a * n + this.c * r + this.tx, e[s + 1] = this.b * n + this.d * r + this.ty;
            }
            return e;
        }, e.transformPointArrayScale = function(t, e) {
            for (var i = t.length, s = 0; s < i; s += 2) {
                var n = t[s], r = t[s + 1];
                e[s] = this.a * n + this.c * r, e[s + 1] = this.b * n + this.d * r;
            }
            return e;
        }, e.getScaleX = function() {
            return 0 === this.b ? this.a : Math.sqrt(this.a * this.a + this.b * this.b);
        }, e.getScaleY = function() {
            return 0 === this.c ? this.d : Math.sqrt(this.c * this.c + this.d * this.d);
        }, e.invert = function() {
            var t = this.a, e = this.b, i = this.c, s = this.d, n = this.tx, r = t * s - e * i;
            return this.a = s / r, this.b = -e / r, this.c = -i / r, this.d = t / r, this.tx = (i * this.ty - s * n) / r, 
            this.ty = -(t * this.ty - e * n) / r, this;
        }, e.setTo = function(t, e, i, s, n, r) {
            return this.a = t, this.b = e, this.c = i, this.d = s, this.tx = n, this.ty = r, 
            this;
        }, e.concat = function(t) {
            var e = this.a, i = this.c, s = this.tx;
            return this.a = e * t.a + this.b * t.c, this.b = e * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, 
            this.d = i * t.b + this.d * t.d, this.tx = s * t.a + this.ty * t.c + t.tx, this.ty = s * t.b + this.ty * t.d + t.ty, 
            this;
        }, e.scaleEx = function(t, e) {
            var i = this.a, s = this.b, n = this.c, r = this.d;
            0 !== s || 0 !== n ? (this.a = t * i, this.b = t * s, this.c = e * n, this.d = e * r) : (this.a = t * i, 
            this.b = 0 * r, this.c = 0 * i, this.d = e * r), this.bTransform = !0;
        }, e.rotateEx = function(t) {
            var e = Math.cos(t), i = Math.sin(t), s = this.a, n = this.b, r = this.c, a = this.d;
            0 !== n || 0 !== r ? (this.a = e * s + i * r, this.b = e * n + i * a, this.c = -i * s + e * r, 
            this.d = -i * n + e * a) : (this.a = e * s, this.b = i * a, this.c = -i * s, this.d = e * a), 
            this.bTransform = !0;
        }, e.clone = function() {
            var e = t.create();
            return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, 
            e.bTransform = this.bTransform, e;
        }, e.copyTo = function(t) {
            return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, 
            t.bTransform = this.bTransform, t;
        }, e.toString = function() {
            return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty;
        }, e.destroy = function() {
            if (!this.inPool) {
                var e = t._cache;
                this.inPool = !0, e._length || (e._length = 0), e[e._length++] = this, this.a = this.d = 1, 
                this.b = this.c = this.tx = this.ty = 0, this.bTransform = !1;
            }
        }, t.mul = function(t, e, i) {
            var s = t.a, n = t.b, r = t.c, a = t.d, o = t.tx, h = t.ty, l = e.a, u = e.b, c = e.c, _ = e.d, d = e.tx, f = e.ty;
            return 0 !== u || 0 !== c ? (i.a = s * l + n * c, i.b = s * u + n * _, i.c = r * l + a * c, 
            i.d = r * u + a * _, i.tx = l * o + c * h + d, i.ty = u * o + _ * h + f) : (i.a = s * l, 
            i.b = n * _, i.c = r * l, i.d = a * _, i.tx = l * o + d, i.ty = _ * h + f), i;
        }, t.mul16 = function(t, e, i) {
            var s = t.a, n = t.b, r = t.c, a = t.d, o = t.tx, h = t.ty, l = e.a, u = e.b, c = e.c, _ = e.d, d = e.tx, f = e.ty;
            return 0 !== u || 0 !== c ? (i[0] = s * l + n * c, i[1] = s * u + n * _, i[4] = r * l + a * c, 
            i[5] = r * u + a * _, i[12] = l * o + c * h + d, i[13] = u * o + _ * h + f) : (i[0] = s * l, 
            i[1] = n * _, i[4] = r * l, i[5] = a * _, i[12] = l * o + d, i[13] = _ * h + f), 
            i;
        }, t.mulPre = function(t, e, i, s, n, r, a, o) {
            var h = t.a, l = t.b, u = t.c, c = t.d, _ = t.tx, d = t.ty;
            return 0 !== i || 0 !== s ? (o.a = h * e + l * s, o.b = h * i + l * n, o.c = u * e + c * s, 
            o.d = u * i + c * n, o.tx = e * _ + s * d + r, o.ty = i * _ + n * d + a) : (o.a = h * e, 
            o.b = l * n, o.c = u * e, o.d = c * n, o.tx = e * _ + r, o.ty = n * d + a), o;
        }, t.mulPos = function(t, e, i, s, n, r, a, o) {
            var h = t.a, l = t.b, u = t.c, c = t.d, _ = t.tx, d = t.ty;
            return 0 !== l || 0 !== u ? (o.a = e * h + i * u, o.b = e * l + i * c, o.c = s * h + n * u, 
            o.d = s * l + n * c, o.tx = h * r + u * a + _, o.ty = l * r + c * a + d) : (o.a = e * h, 
            o.b = i * c, o.c = s * h, o.d = n * c, o.tx = h * r + _, o.ty = c * a + d), o;
        }, t.preMul = function(t, e, i) {
            var s = t.a, n = t.b, r = t.c, a = t.d, o = e.a, h = e.b, l = e.c, u = e.d, c = e.tx, _ = e.ty;
            return i.a = o * s, i.b = i.c = 0, i.d = u * a, i.tx = c * s + t.tx, i.ty = _ * a + t.ty, 
            0 === h && 0 === l && 0 === n && 0 === r || (i.a += h * r, i.d += l * n, i.b += o * n + h * a, 
            i.c += l * s + u * r, i.tx += _ * r, i.ty += c * n), i;
        }, t.preMulXY = function(t, e, i, s) {
            var n = t.a, r = t.b, a = t.c, o = t.d;
            return s.a = n, s.b = r, s.c = a, s.d = o, s.tx = e * n + t.tx + i * a, s.ty = i * o + t.ty + e * r, 
            s;
        }, t.create = function() {
            var e = t._cache, i = e._length ? e[--e._length] : new t();
            return i.inPool = !1, i;
        }, t.EMPTY = new t(), t.TEMP = new t(), t._cache = [], t;
    }(), Point = function() {
        function t(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e;
        }
        __class(t, "laya.maths.Point");
        var e = t.prototype;
        return e.setTo = function(t, e) {
            return this.x = t, this.y = e, this;
        }, e.distance = function(t, e) {
            return Math.sqrt((this.x - t) * (this.x - t) + (this.y - e) * (this.y - e));
        }, e.toString = function() {
            return this.x + "," + this.y;
        }, e.normalize = function() {
            var t = Math.sqrt(this.x * this.x + this.y * this.y);
            if (t > 0) {
                var e = 1 / t;
                this.x *= e, this.y *= e;
            }
        }, t.TEMP = new t(), t.EMPTY = new t(), t;
    }(), Rectangle = function() {
        function t(t, e, i, s) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === s && (s = 0), 
            this.x = t, this.y = e, this.width = i, this.height = s;
        }
        __class(t, "laya.maths.Rectangle");
        var e = t.prototype;
        return e.setTo = function(t, e, i, s) {
            return this.x = t, this.y = e, this.width = i, this.height = s, this;
        }, e.copyFrom = function(t) {
            return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, 
            this;
        }, e.contains = function(t, e) {
            return !(this.width <= 0 || this.height <= 0) && t >= this.x && t < this.right && e >= this.y && e < this.bottom;
        }, e.intersects = function(t) {
            return !(t.x > this.x + this.width || t.x + t.width < this.x || t.y > this.y + this.height || t.y + t.height < this.y);
        }, e.intersection = function(e, i) {
            return this.intersects(e) ? (i || (i = new t()), i.x = Math.max(this.x, e.x), i.y = Math.max(this.y, e.y), 
            i.width = Math.min(this.right, e.right) - i.x, i.height = Math.min(this.bottom, e.bottom) - i.y, 
            i) : null;
        }, e.union = function(e, i) {
            return i || (i = new t()), this.clone(i), e.width <= 0 || e.height <= 0 ? i : (i.addPoint(e.x, e.y), 
            i.addPoint(e.right, e.bottom), this);
        }, e.clone = function(e) {
            return e || (e = new t()), e.x = this.x, e.y = this.y, e.width = this.width, e.height = this.height, 
            e;
        }, e.toString = function() {
            return this.x + "," + this.y + "," + this.width + "," + this.height;
        }, e.equals = function(t) {
            return !(!t || t.x !== this.x || t.y !== this.y || t.width !== this.width || t.height !== this.height);
        }, e.addPoint = function(t, e) {
            return this.x > t && (this.width += this.x - t, this.x = t), this.y > e && (this.height += this.y - e, 
            this.y = e), this.width < t - this.x && (this.width = t - this.x), this.height < e - this.y && (this.height = e - this.y), 
            this;
        }, e._getBoundPoints = function() {
            var e = t._temB;
            return e.length = 0, 0 == this.width || 0 == this.height ? e : (e.push(this.x, this.y, this.x + this.width, this.y, this.x, this.y + this.height, this.x + this.width, this.y + this.height), 
            e);
        }, e.isEmpty = function() {
            return this.width <= 0 || this.height <= 0;
        }, __getset(0, e, "right", function() {
            return this.x + this.width;
        }), __getset(0, e, "bottom", function() {
            return this.y + this.height;
        }), t._getBoundPointS = function(e, i, s, n) {
            var r = t._temA;
            return r.length = 0, 0 == s || 0 == n ? r : (r.push(e, i, e + s, i, e, i + n, e + s, i + n), 
            r);
        }, t._getWrapRec = function(e, i) {
            if (!e || e.length < 1) return i ? i.setTo(0, 0, 0, 0) : t.TEMP.setTo(0, 0, 0, 0);
            i = i || new t();
            var s, n, r, a, o, h = e.length, l = Point.TEMP;
            for (r = o = -(n = a = 99999), s = 0; s < h; s += 2) l.x = e[s], l.y = e[s + 1], 
            n = n < l.x ? n : l.x, a = a < l.y ? a : l.y, r = r > l.x ? r : l.x, o = o > l.y ? o : l.y;
            return i.setTo(n, a, r - n, o - a);
        }, t.EMPTY = new t(), t.TEMP = new t(), t._temB = [], t._temA = [], t;
    }(), SoundManager = function() {
        function t() {}
        return __class(t, "laya.media.SoundManager"), __getset(1, t, "useAudioMusic", function() {
            return t._useAudioMusic;
        }, function(e) {
            t._useAudioMusic = e, e && (t._musicClass = AudioSound);
        }), __getset(1, t, "autoStopMusic", function() {
            return t._autoStopMusic;
        }, function(e) {
            Laya.stage.off("blur", null, t._stageOnBlur), Laya.stage.off("focus", null, t._stageOnFocus), 
            Laya.stage.off("visibilitychange", null, t._visibilityChange), t._autoStopMusic = e, 
            e && (Laya.stage.on("blur", null, t._stageOnBlur), Laya.stage.on("focus", null, t._stageOnFocus), 
            Laya.stage.on("visibilitychange", null, t._visibilityChange));
        }), __getset(1, t, "muted", function() {
            return t._muted;
        }, function(e) {
            e != t._muted && (e && t.stopAllSound(), t.musicMuted = e, t._muted = e);
        }), __getset(1, t, "musicMuted", function() {
            return t._musicMuted;
        }, function(e) {
            e != t._musicMuted && (e ? (t._tMusic && t._musicChannel && !t._musicChannel.isStopped ? t._musicChannel.pause() : t._musicChannel = null, 
            t._musicMuted = e) : (t._musicMuted = e, t._tMusic && t._musicChannel && t._musicChannel.resume()));
        }), __getset(1, t, "soundMuted", function() {
            return t._soundMuted;
        }, function(e) {
            t._soundMuted = e;
        }), t.addChannel = function(e) {
            t._channels.indexOf(e) >= 0 || t._channels.push(e);
        }, t.removeChannel = function(e) {
            var i = 0;
            for (i = t._channels.length - 1; i >= 0; i--) t._channels[i] == e && t._channels.splice(i, 1);
        }, t.disposeSoundIfNotUsed = function(e) {
            var i = 0;
            for (i = t._channels.length - 1; i >= 0; i--) if (t._channels[i].url == e) return;
            t.destroySound(e);
        }, t._visibilityChange = function() {
            Laya.stage.isVisibility ? t._stageOnFocus() : t._stageOnBlur();
        }, t._stageOnBlur = function() {
            t._isActive = !1, t._musicChannel && (t._musicChannel.isStopped || (t._blurPaused = !0, 
            t._musicChannel.pause(), Laya.stage.once("mousedown", null, t._stageOnFocus))), 
            t.stopAllSound();
        }, t._stageOnFocus = function() {
            t._isActive = !0, Laya.stage.off("mousedown", null, t._stageOnFocus), t._blurPaused && t._musicChannel && t._musicChannel.isStopped && (t._blurPaused = !1, 
            t._musicChannel.resume());
        }, t.playSound = function(e, i, s, n, r) {
            if (void 0 === i && (i = 1), void 0 === r && (r = 0), !t._isActive || !e) return null;
            if (t._muted) return null;
            if ((e = URL.formatURL(e)) == t._tMusic) {
                if (t._musicMuted) return null;
            } else {
                if (Render.isConchApp) {
                    var a = Utils.getFileExtension(e);
                    if ("wav" != a && "ogg" != a) return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."), 
                    null;
                }
                if (t._soundMuted) return null;
            }
            var o;
            Browser.onMiniGame || (o = Laya.loader.getRes(e)), n || (n = t._soundClass), o || ((o = new n()).load(e), 
            Loader.cacheRes(e, o));
            var h;
            return (h = o.play(r, i)) ? (h.url = e, h.volume = e == t._tMusic ? t.musicVolume : t.soundVolume, 
            h.completeHandler = s, h) : null;
        }, t.destroySound = function(t) {
            var e = Laya.loader.getRes(t);
            e && (Loader.clearRes(t), e.dispose());
        }, t.playMusic = function(e, i, s, n) {
            return void 0 === i && (i = 0), void 0 === n && (n = 0), e = URL.formatURL(e), t._tMusic = e, 
            t._musicChannel && t._musicChannel.stop(), t._musicChannel = t.playSound(e, i, s, t._musicClass, n);
        }, t.stopSound = function(e) {
            e = URL.formatURL(e);
            var i, s = 0;
            for (s = t._channels.length - 1; s >= 0; s--) (i = t._channels[s]).url == e && i.stop();
        }, t.stopAll = function() {
            t._tMusic = null;
            var e = 0;
            for (e = t._channels.length - 1; e >= 0; e--) t._channels[e].stop();
        }, t.stopAllSound = function() {
            var e, i = 0;
            for (i = t._channels.length - 1; i >= 0; i--) (e = t._channels[i]).url != t._tMusic && e.stop();
        }, t.stopMusic = function() {
            t._musicChannel && t._musicChannel.stop(), t._tMusic = null;
        }, t.setSoundVolume = function(e, i) {
            if (i) i = URL.formatURL(i), t._setVolume(i, e); else {
                t.soundVolume = e;
                var s, n = 0;
                for (n = t._channels.length - 1; n >= 0; n--) (s = t._channels[n]).url != t._tMusic && (s.volume = e);
            }
        }, t.setMusicVolume = function(e) {
            t.musicVolume = e, t._setVolume(t._tMusic, e);
        }, t._setVolume = function(e, i) {
            e = URL.formatURL(e);
            var s, n = 0;
            for (n = t._channels.length - 1; n >= 0; n--) (s = t._channels[n]).url == e && (s.volume = i);
        }, t.musicVolume = 1, t.soundVolume = 1, t.playbackRate = 1, t._useAudioMusic = !0, 
        t._muted = !1, t._soundMuted = !1, t._musicMuted = !1, t._tMusic = null, t._musicChannel = null, 
        t._channels = [], t._autoStopMusic = !1, t._blurPaused = !1, t._isActive = !0, t._soundClass = null, 
        t._musicClass = null, t.autoReleaseSound = !0, t;
    }(), LocalStorage = function() {
        function t() {}
        var e;
        return __class(t, "laya.net.LocalStorage"), t.__init__ = function() {
            t._baseClass || (t._baseClass = e, e.init()), t.items = t._baseClass.items, t.support = t._baseClass.support;
        }, t.setItem = function(e, i) {
            t._baseClass.setItem(e, i);
        }, t.getItem = function(e) {
            return t._baseClass.getItem(e);
        }, t.setJSON = function(e, i) {
            t._baseClass.setJSON(e, i);
        }, t.getJSON = function(e) {
            return t._baseClass.getJSON(e);
        }, t.removeItem = function(e) {
            t._baseClass.removeItem(e);
        }, t.clear = function() {
            t._baseClass.clear();
        }, t._baseClass = null, t.items = null, t.support = !1, t.__init$ = function() {
            e = function() {
                function t() {}
                return __class(t, ""), t.init = function() {
                    try {
                        t.items = window.localStorage, t.setItem("laya", "1"), t.removeItem("laya"), t.support = !0;
                    } catch (t) {}
                    t.support || console.log("LocalStorage is not supprot or browser is private mode.");
                }, t.setItem = function(e, i) {
                    try {
                        t.support && t.items.setItem(e, i);
                    } catch (t) {
                        console.warn("set localStorage failed", t);
                    }
                }, t.getItem = function(e) {
                    return t.support ? t.items.getItem(e) : null;
                }, t.setJSON = function(e, i) {
                    try {
                        t.support && t.items.setItem(e, JSON.stringify(i));
                    } catch (t) {
                        console.warn("set localStorage failed", t);
                    }
                }, t.getJSON = function(e) {
                    return JSON.parse(t.support ? t.items.getItem(e) : null);
                }, t.removeItem = function(e) {
                    t.support && t.items.removeItem(e);
                }, t.clear = function() {
                    t.support && t.items.clear();
                }, t.items = null, t.support = !1, t;
            }();
        }, t;
    }(), ResourceVersion = function() {
        function t() {}
        return __class(t, "laya.net.ResourceVersion"), t.enable = function(e, i, s) {
            void 0 === s && (s = 2), laya.net.ResourceVersion.type = s, Laya.loader.load(e, Handler.create(null, t.onManifestLoaded, [ i ]), null, "json"), 
            URL.customFormat = t.addVersionPrefix;
        }, t.onManifestLoaded = function(e, i) {
            t.manifest = i, e.run(), i || console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。");
        }, t.addVersionPrefix = function(e) {
            return t.manifest && t.manifest[e] ? 2 == t.type ? t.manifest[e] : t.manifest[e] + "/" + e : e;
        }, t.FOLDER_VERSION = 1, t.FILENAME_VERSION = 2, t.manifest = null, t.type = 1, 
        t;
    }(), TTFLoader = function() {
        function t() {
            this.fontName = null, this.complete = null, this.err = null, this._fontTxt = null, 
            this._url = null, this._div = null, this._txtWidth = NaN, this._http = null;
        }
        __class(t, "laya.net.TTFLoader");
        var e = t.prototype;
        return e.load = function(t) {
            this._url = t;
            var e = t.split(".ttf")[0].split("/");
            this.fontName = e[e.length - 1], Browser.window.conch ? this._loadConch() : Browser.window.FontFace ? this._loadWithFontFace() : this._loadWithCSS();
        }, e._loadConch = function() {
            this._http = new HttpRequest(), this._http.on("error", this, this._onErr), this._http.on("complete", this, this._onHttpLoaded), 
            this._http.send(this._url, null, "get", "arraybuffer");
        }, e._onHttpLoaded = function(t) {
            Browser.window.conch.setFontFaceFromBuffer(this.fontName, t), this._clearHttp(), 
            this._complete();
        }, e._clearHttp = function() {
            this._http && (this._http.off("error", this, this._onErr), this._http.off("complete", this, this._onHttpLoaded), 
            this._http = null);
        }, e._onErr = function() {
            this._clearHttp(), this.err && (this.err.runWith("fail:" + this._url), this.err = null);
        }, e._complete = function() {
            Laya.timer.clear(this, this._complete), Laya.timer.clear(this, this._checkComplete), 
            this._div && this._div.parentNode && (this._div.parentNode.removeChild(this._div), 
            this._div = null), this.complete && (this.complete.runWith(this), this.complete = null);
        }, e._checkComplete = function() {
            RunDriver.measureText("LayaTTFFont", this._fontTxt).width != this._txtWidth && this._complete();
        }, e._loadWithFontFace = function() {
            var t = new Browser.window.FontFace(this.fontName, "url('" + this._url + "')");
            Browser.window.document.fonts.add(t);
            var e = this;
            t.loaded.then(function() {
                e._complete();
            }), t.load();
        }, e._createDiv = function() {
            this._div = Browser.createElement("div"), this._div.innerHTML = "laya";
            var t = this._div.style;
            t.fontFamily = this.fontName, t.position = "absolute", t.left = "-100px", t.top = "-100px", 
            Browser.document.body.appendChild(this._div);
        }, e._loadWithCSS = function() {
            var t = this, e = Browser.createElement("style");
            e.type = "text/css", Browser.document.body.appendChild(e), e.textContent = "@font-face { font-family:'" + this.fontName + "'; src:url('" + this._url + "');}", 
            this._fontTxt = "40px " + this.fontName, this._txtWidth = RunDriver.measureText("LayaTTFFont", this._fontTxt).width;
            var i = this;
            e.onload = function() {
                Laya.timer.once(1e4, i, t._complete);
            }, Laya.timer.loop(20, this, this._checkComplete), this._createDiv();
        }, t._testString = "LayaTTFFont", t;
    }(), URL = function() {
        function t(e) {
            this._url = null, this._path = null, this._url = t.formatURL(e), this._path = t.getPath(e);
        }
        __class(t, "laya.net.URL");
        var e = t.prototype;
        return __getset(0, e, "path", function() {
            return this._path;
        }), __getset(0, e, "url", function() {
            return this._url;
        }), t.formatURL = function(e, i) {
            if (!e) return "null path";
            if (e.indexOf(":") > 0) return e;
            null != t.customFormat && (e = t.customFormat(e, i));
            var s = e.charAt(0);
            if ("." === s) return t.formatRelativePath((i || t.basePath) + e);
            if ("~" === s) return t.rootPath + e.substring(1);
            if ("d" === s) {
                if (0 === e.indexOf("data:image")) return e;
            } else if ("/" === s) return e;
            return (i || t.basePath) + e;
        }, t.formatRelativePath = function(t) {
            for (var e = t.split("/"), i = 0, s = e.length; i < s; i++) ".." == e[i] && (e.splice(i - 1, 2), 
            i -= 2);
            return e.join("/");
        }, t.isAbsolute = function(t) {
            return t.indexOf(":") > 0 || "/" == t.charAt(0);
        }, t.getPath = function(t) {
            var e = t.lastIndexOf("/");
            return e > 0 ? t.substr(0, e + 1) : "";
        }, t.getFileName = function(t) {
            var e = t.lastIndexOf("/");
            return e > 0 ? t.substr(e + 1) : t;
        }, t.version = {}, t.basePath = "", t.rootPath = "", t.customFormat = function(e) {
            var i = t.version[e];
            return !Render.isConchApp && i && (e += "?v=" + i), e;
        }, t;
    }(), Render = function() {
        function t(e, i) {
            function s() {
                Laya.stage._loop(), Browser.window.requestAnimationFrame(s);
            }
            this._timeId = 0;
            var n = t._mainCanvas.source.style;
            n.position = "absolute", n.top = n.left = "0px", n.background = "#000000", t._mainCanvas.source.id = "layaCanvas";
            var r = laya.renders.Render.isWebGL;
            t._mainCanvas.source.width = e, t._mainCanvas.source.height = i, r && t.WebGL.init(t._mainCanvas, e, i), 
            Browser.container.appendChild(t._mainCanvas.source), (t._context = new RenderContext(e, i, r ? null : t._mainCanvas)).ctx.setIsMainContext(), 
            Browser.window.requestAnimationFrame(s), Laya.stage.on("visibilitychange", this, this._onVisibilitychange);
        }
        __class(t, "laya.renders.Render");
        var e = t.prototype;
        return e._onVisibilitychange = function() {
            Laya.stage.isVisibility ? 0 != this._timeId && Browser.window.clearInterval(this._timeId) : this._timeId = Browser.window.setInterval(this._enterFrame, 1e3);
        }, e._enterFrame = function(t) {
            Laya.stage._loop();
        }, __getset(1, t, "context", function() {
            return t._context;
        }), __getset(1, t, "canvas", function() {
            return t._mainCanvas.source;
        }), t._context = null, t._mainCanvas = null, t.WebGL = null, t.isConchNode = !1, 
        t.isConchApp = !1, t.isConchWebGL = !1, t.isWebGL = !1, t.is3DMode = !1, t.optimizeTextureMemory = function(t, e) {
            return !0;
        }, t.__init$ = function() {
            window.ConchRenderType = window.ConchRenderType || 1, window.ConchRenderType |= window.conch ? 4 : 0, 
            t.isConchNode = 5 == (5 & window.ConchRenderType), t.isConchApp = 4 == (4 & window.ConchRenderType), 
            t.isConchWebGL = 6 == window.ConchRenderType;
        }, t;
    }(), RenderContext = function() {
        function t(e, i, s) {
            this.x = 0, this.y = 0, this._drawTexture = function(t, e, i) {
                i[0].loaded && this.ctx.drawTexture(i[0], i[1], i[2], i[3], i[4], t, e);
            }, this._fillTexture = function(t, e, i) {
                i[0].loaded && this.ctx.fillTexture(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5], i[6], i[7]);
            }, this._drawTextureWithTransform = function(t, e, i) {
                i[0].loaded && this.ctx.drawTextureWithTransform(i[0], i[1], i[2], i[3], i[4], i[5], t, e, i[6]);
            }, this._fillQuadrangle = function(t, e, i) {
                this.ctx.fillQuadrangle(i[0], i[1], i[2], i[3], i[4]);
            }, this._drawRect = function(t, e, i) {
                var s = this.ctx;
                null != i[4] && (s.fillStyle = i[4], s.fillRect(t + i[0], e + i[1], i[2], i[3], null)), 
                null != i[5] && (s.strokeStyle = i[5], s.lineWidth = i[6], s.strokeRect(t + i[0], e + i[1], i[2], i[3], i[6]));
            }, this._drawPie = function(t, e, i) {
                var s = this.ctx;
                Render.isWebGL && s.setPathId(i[8]), s.beginPath(), Render.isWebGL ? (s.movePath(i[0] + t, i[1] + e), 
                s.moveTo(0, 0)) : s.moveTo(t + i[0], e + i[1]), s.arc(t + i[0], e + i[1], i[2], i[3], i[4]), 
                s.closePath(), this._fillAndStroke(i[5], i[6], i[7], !0);
            }, this._clipRect = function(t, e, i) {
                this.ctx.clipRect(t + i[0], e + i[1], i[2], i[3]);
            }, this._fillRect = function(t, e, i) {
                this.ctx.fillRect(t + i[0], e + i[1], i[2], i[3], i[4]);
            }, this._drawCircle = function(e, i, s) {
                var n = this.ctx;
                Render.isWebGL && n.setPathId(s[6]), Stat.drawCall++, n.beginPath(), Render.isWebGL && n.movePath(s[0] + e, s[1] + i), 
                n.arc(s[0] + e, s[1] + i, s[2], 0, t.PI2), n.closePath(), this._fillAndStroke(s[3], s[4], s[5], !0);
            }, this._fillCircle = function(e, i, s) {
                Stat.drawCall++;
                var n = this.ctx;
                n.beginPath(), n.fillStyle = s[3], n.arc(s[0] + e, s[1] + i, s[2], 0, t.PI2), n.fill();
            }, this._setShader = function(t, e, i) {
                this.ctx.setShader(i[0]);
            }, this._drawLine = function(t, e, i) {
                var s = this.ctx;
                Render.isWebGL && s.setPathId(i[6]), s.beginPath(), s.strokeStyle = i[4], s.lineWidth = i[5], 
                Render.isWebGL ? (s.movePath(t, e), s.moveTo(i[0], i[1]), s.lineTo(i[2], i[3])) : (s.moveTo(t + i[0], e + i[1]), 
                s.lineTo(t + i[2], e + i[3])), s.stroke();
            }, this._drawLines = function(t, e, i) {
                var s = this.ctx;
                Render.isWebGL && s.setPathId(i[5]), s.beginPath(), t += i[0], e += i[1], Render.isWebGL && s.movePath(t, e), 
                s.strokeStyle = i[3], s.lineWidth = i[4];
                var n = i[2], r = 2, a = n.length;
                if (Render.isWebGL) for (s.moveTo(n[0], n[1]); r < a; ) s.lineTo(n[r++], n[r++]); else for (s.moveTo(t + n[0], e + n[1]); r < a; ) s.lineTo(t + n[r++], e + n[r++]);
                s.stroke();
            }, this._drawLinesWebGL = function(t, e, i) {
                this.ctx.drawLines(t + this.x + i[0], e + this.y + i[1], i[2], i[3], i[4]);
            }, this._drawCurves = function(t, e, i) {
                this.ctx.drawCurves(t, e, i);
            }, this._draw = function(t, e, i) {
                i[0].call(null, this, t, e);
            }, this._transformByMatrix = function(t, e, i) {
                this.ctx.transformByMatrix(i[0]);
            }, this._setTransform = function(t, e, i) {
                this.ctx.setTransform(i[0], i[1], i[2], i[3], i[4], i[5]);
            }, this._setTransformByMatrix = function(t, e, i) {
                this.ctx.setTransformByMatrix(i[0]);
            }, this._save = function(t, e, i) {
                this.ctx.save();
            }, this._restore = function(t, e, i) {
                this.ctx.restore();
            }, this._translate = function(t, e, i) {
                this.ctx.translate(i[0], i[1]);
            }, this._transform = function(t, e, i) {
                this.ctx.translate(i[1] + t, i[2] + e);
                var s = i[0];
                this.ctx.transform(s.a, s.b, s.c, s.d, s.tx, s.ty), this.ctx.translate(-t - i[1], -e - i[2]);
            }, this._rotate = function(t, e, i) {
                this.ctx.translate(i[1] + t, i[2] + e), this.ctx.rotate(i[0]), this.ctx.translate(-t - i[1], -e - i[2]);
            }, this._scale = function(t, e, i) {
                this.ctx.translate(i[2] + t, i[3] + e), this.ctx.scale(i[0], i[1]), this.ctx.translate(-t - i[2], -e - i[3]);
            }, this._alpha = function(t, e, i) {
                this.ctx.globalAlpha *= i[0];
            }, this._setAlpha = function(t, e, i) {
                this.ctx.globalAlpha = i[0];
            }, this._fillText = function(t, e, i) {
                this.ctx.fillText(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5]);
            }, this._strokeText = function(t, e, i) {
                this.ctx.strokeText(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5], i[6]);
            }, this._fillBorderText = function(t, e, i) {
                this.ctx.fillBorderText(i[0], i[1] + t, i[2] + e, i[3], i[4], i[5], i[6], i[7]);
            }, this._blendMode = function(t, e, i) {
                this.ctx.globalCompositeOperation = i[0];
            }, this._beginClip = function(t, e, i) {
                this.ctx.beginClip && this.ctx.beginClip(t + i[0], e + i[1], i[2], i[3]);
            }, this._setIBVB = function(t, e, i) {
                this.ctx.setIBVB(i[0] + t, i[1] + e, i[2], i[3], i[4], i[5], i[6], i[7]);
            }, this._fillTrangles = function(t, e, i) {
                this.ctx.fillTrangles(i[0], i[1] + t, i[2] + e, i[3], i[4]);
            }, this._drawPath = function(t, e, i) {
                var s = this.ctx;
                Render.isWebGL && s.setPathId(-1), s.beginPath(), t += i[0], e += i[1], Render.isWebGL && s.movePath(t, e);
                for (var n = i[2], r = 0, a = n.length; r < a; r++) {
                    var o = n[r];
                    switch (o[0]) {
                      case "moveTo":
                        Render.isWebGL ? s.moveTo(o[1], o[2]) : s.moveTo(t + o[1], e + o[2]);
                        break;

                      case "lineTo":
                        Render.isWebGL ? s.lineTo(o[1], o[2]) : s.lineTo(t + o[1], e + o[2]);
                        break;

                      case "arcTo":
                        Render.isWebGL ? s.arcTo(o[1], o[2], o[3], o[4], o[5]) : s.arcTo(t + o[1], e + o[2], t + o[3], e + o[4], o[5]);
                        break;

                      case "closePath":
                        s.closePath();
                    }
                }
                var h = i[3];
                null != h && (s.fillStyle = h.fillStyle, s.fill());
                var l = i[4];
                null != l && (s.strokeStyle = l.strokeStyle, s.lineWidth = l.lineWidth || 1, s.lineJoin = l.lineJoin, 
                s.lineCap = l.lineCap, s.miterLimit = l.miterLimit, s.stroke());
            }, this.drawPoly = function(t, e, i) {
                this.ctx.drawPoly(t + this.x + i[0], e + this.y + i[1], i[2], i[3], i[4], i[5], i[6]);
            }, this._drawPoly = function(t, e, i) {
                var s = this.ctx, n = i[2], r = 2, a = n.length;
                if (Render.isWebGL) for (s.setPathId(i[6]), s.beginPath(), t += i[0], e += i[1], 
                s.movePath(t, e), s.moveTo(n[0], n[1]); r < a; ) s.lineTo(n[r++], n[r++]); else for (s.beginPath(), 
                t += i[0], e += i[1], s.moveTo(t + n[0], e + n[1]); r < a; ) s.lineTo(t + n[r++], e + n[r++]);
                s.closePath(), this._fillAndStroke(i[3], i[4], i[5], i[7]);
            }, this._drawSkin = function(t, e, i) {
                var s = i[0];
                if (s) {
                    var n = this.ctx;
                    s.render(n, t, e);
                }
            }, this._drawParticle = function(t, e, i) {
                this.ctx.drawParticle(t + this.x, e + this.y, i[0]);
            }, this._setFilters = function(t, e, i) {
                this.ctx.setFilters(i);
            }, s ? this.ctx = s.getContext("2d") : (s = HTMLCanvas.create("3D"), this.ctx = RunDriver.createWebGLContext2D(s), 
            s._setContext(this.ctx)), s.size(e, i), this.canvas = s;
        }
        __class(t, "laya.renders.RenderContext");
        var e = t.prototype;
        return e.destroy = function() {
            this.canvas && (this.canvas.destroy(), this.canvas = null, this.ctx = null), this.ctx && (this.ctx.destroy(), 
            this.ctx = null);
        }, e.drawTexture = function(t, e, i, s, n) {
            t.loaded && this.ctx.drawTexture(t, e, i, s, n, this.x, this.y);
        }, e._drawTextures = function(t, e, i) {
            i[0].loaded && this.ctx.drawTextures(i[0], i[1], t + this.x, e + this.y);
        }, e.drawTextureWithTransform = function(t, e, i, s, n, r, a) {
            t.loaded && this.ctx.drawTextureWithTransform(t, e, i, s, n, r, this.x, this.y, a);
        }, e.fillQuadrangle = function(t, e, i, s, n) {
            this.ctx.fillQuadrangle(t, e, i, s, n);
        }, e.drawCanvas = function(t, e, i, s, n) {
            this.ctx.drawCanvas(t, e + this.x, i + this.y, s, n);
        }, e.drawRect = function(t, e, i, s, n, r) {
            void 0 === r && (r = 1);
            var a = this.ctx;
            a.strokeStyle = n, a.lineWidth = r, a.strokeRect(t + this.x, e + this.y, i, s, r);
        }, e._fillAndStroke = function(t, e, i, s) {
            void 0 === s && (s = !1);
            var n = this.ctx;
            null != t && (n.fillStyle = t, Render.isWebGL ? n.fill(s) : n.fill()), null != e && i > 0 && (n.strokeStyle = e, 
            n.lineWidth = i, n.stroke());
        }, e.clipRect = function(t, e, i, s) {
            this.ctx.clipRect(t + this.x, e + this.y, i, s);
        }, e.fillRect = function(t, e, i, s, n) {
            this.ctx.fillRect(t + this.x, e + this.y, i, s, n);
        }, e.drawCircle = function(e, i, s, n, r) {
            void 0 === r && (r = 1), Stat.drawCall++;
            var a = this.ctx;
            a.beginPath(), a.strokeStyle = n, a.lineWidth = r, a.arc(e + this.x, i + this.y, s, 0, t.PI2), 
            a.stroke();
        }, e.drawTriangles = function(t, e, i) {
            if (Render.isWebGL) this.ctx.drawTriangles(i[0], t + i[1], e + i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9]); else {
                var s = i[5], n = 0, r = s.length, a = this.ctx;
                for (n = 0; n < r; n += 3) {
                    var o = 2 * s[n], h = 2 * s[n + 1], l = 2 * s[n + 2];
                    a.drawTriangle(i[0], i[3], i[4], o, h, l, i[6], !0);
                }
            }
        }, e.fillCircle = function(e, i, s, n) {
            Stat.drawCall++;
            var r = this.ctx;
            r.beginPath(), r.fillStyle = n, r.arc(e + this.x, i + this.y, s, 0, t.PI2), r.fill();
        }, e.setShader = function(t) {
            this.ctx.setShader(t);
        }, e.drawLine = function(t, e, i, s, n, r) {
            void 0 === r && (r = 1);
            var a = this.ctx;
            a.beginPath(), a.strokeStyle = n, a.lineWidth = r, a.moveTo(this.x + t, this.y + e), 
            a.lineTo(this.x + i, this.y + s), a.stroke();
        }, e.clear = function() {
            this.ctx.clear();
        }, e.transformByMatrix = function(t) {
            this.ctx.transformByMatrix(t);
        }, e.setTransform = function(t, e, i, s, n, r) {
            this.ctx.setTransform(t, e, i, s, n, r);
        }, e.setTransformByMatrix = function(t) {
            this.ctx.setTransformByMatrix(t);
        }, e.save = function() {
            this.ctx.save();
        }, e.restore = function() {
            this.ctx.restore();
        }, e.translate = function(t, e) {
            this.ctx.translate(t, e);
        }, e.transform = function(t, e, i, s, n, r) {
            this.ctx.transform(t, e, i, s, n, r);
        }, e.rotate = function(t) {
            this.ctx.rotate(t);
        }, e.scale = function(t, e) {
            this.ctx.scale(t, e);
        }, e.alpha = function(t) {
            this.ctx.globalAlpha *= t;
        }, e.setAlpha = function(t) {
            this.ctx.globalAlpha = t;
        }, e.fillWords = function(t, e, i, s, n, r) {
            void 0 === r && (r = 0), this.ctx.fillWords(t, e, i, s, n, r);
        }, e.fillBorderWords = function(t, e, i, s, n, r, a) {
            this.ctx.fillBorderWords(t, e, i, s, n, r, a);
        }, e.fillText = function(t, e, i, s, n, r) {
            this.ctx.fillText(t, e + this.x, i + this.y, s, n, r);
        }, e.strokeText = function(t, e, i, s, n, r, a) {
            this.ctx.strokeText(t, e + this.x, i + this.y, s, n, r, a);
        }, e.blendMode = function(t) {
            this.ctx.globalCompositeOperation = t;
        }, e.flush = function() {
            this.ctx.flush && this.ctx.flush();
        }, e.addRenderObject = function(t) {
            this.ctx.addRenderObject(t);
        }, e.beginClip = function(t, e, i, s) {
            this.ctx.beginClip && this.ctx.beginClip(t, e, i, s);
        }, e.endClip = function() {
            this.ctx.endClip && this.ctx.endClip();
        }, e.fillTrangles = function(t, e, i) {
            this.ctx.fillTrangles(i[0], i[1], i[2], i[3], i.length > 4 ? i[4] : null);
        }, t.PI2 = 2 * Math.PI, t;
    }(), RenderSprite = function() {
        function t(e, i) {
            switch (this._next = i || t.NORENDER, e) {
              case 0:
                return void (this._fun = this._no);

              case 1:
                return void (this._fun = this._image);

              case 2:
                return void (this._fun = this._alpha);

              case 4:
                return void (this._fun = this._transform);

              case 8:
                return void (this._fun = this._blend);

              case 16:
                return void (this._fun = this._canvas);

              case 64:
                return void (this._fun = this._mask);

              case 128:
                return void (this._fun = this._clip);

              case 256:
                return void (this._fun = this._style);

              case 512:
                return void (this._fun = this._graphics);

              case 2048:
                return void (this._fun = this._childs);

              case 1024:
                return void (this._fun = this._custom);

              case 513:
              case 517:
                return void (this._fun = this._image2);

              case 32:
                return void (this._fun = Filter._filter);

              case 69905:
                return void (this._fun = t._initRenderFun);
            }
            this.onCreate(e);
        }
        __class(t, "laya.renders.RenderSprite");
        var e = t.prototype;
        return e.onCreate = function(t) {}, e._style = function(t, e, i, s) {
            t._style.render(t, e, i, s);
            var n = this._next;
            n._fun.call(n, t, e, i, s);
        }, e._no = function(t, e, i, s) {}, e._custom = function(t, e, i, s) {
            t.customRender(e, i, s);
            var n = t._style._tf;
            this._next._fun.call(this._next, t, e, i - n.translateX, s - n.translateY);
        }, e._clip = function(e, i, s, n) {
            var r = this._next;
            if (r != t.NORENDER) {
                var a = e._style.scrollRect;
                i.ctx.save(), i.ctx.clipRect(s, n, a.width, a.height), r._fun.call(r, e, i, s - a.x, n - a.y), 
                i.ctx.restore();
            }
        }, e._blend = function(t, e, i, s) {
            var n = t._style;
            n.blendMode && (e.ctx.globalCompositeOperation = n.blendMode);
            var r = this._next;
            r._fun.call(r, t, e, i, s), e.ctx.globalCompositeOperation = "source-over";
        }, e._mask = function(t, e, i, s) {
            var n = this._next;
            n._fun.call(n, t, e, i, s);
            var r = t.mask;
            r && (e.ctx.globalCompositeOperation = "destination-in", (r.numChildren > 0 || !r.graphics._isOnlyOne()) && (r.cacheAsBitmap = !0), 
            r.render(e, i - t.pivotX, s - t.pivotY)), e.ctx.globalCompositeOperation = "source-over";
        }, e._graphics = function(t, e, i, s) {
            var n = t._style._tf;
            t._graphics && t._graphics._render(t, e, i - n.translateX, s - n.translateY);
            var r = this._next;
            r._fun.call(r, t, e, i, s);
        }, e._image = function(t, e, i, s) {
            var n = t._style;
            e.ctx.drawTexture2(i, s, n._tf.translateX, n._tf.translateY, t.transform, n.alpha, n.blendMode, t._graphics._one);
        }, e._image2 = function(t, e, i, s) {
            var n = t._style._tf;
            e.ctx.drawTexture2(i, s, n.translateX, n.translateY, t.transform, 1, null, t._graphics._one);
        }, e._alpha = function(t, e, i, s) {
            var n;
            if ((n = t._style.alpha) > .01 || t._needRepaint()) {
                var r = e.ctx.globalAlpha;
                e.ctx.globalAlpha *= n;
                var a = this._next;
                a._fun.call(a, t, e, i, s), e.ctx.globalAlpha = r;
            }
        }, e._transform = function(e, i, s, n) {
            var r = e.transform, a = this._next;
            r && a != t.NORENDER ? (i.save(), i.transform(r.a, r.b, r.c, r.d, r.tx + s, r.ty + n), 
            a._fun.call(a, e, i, 0, 0), i.restore()) : a._fun.call(a, e, i, s, n);
        }, e._childs = function(t, e, i, s) {
            var n = t._style, r = n._tf;
            if (i = i - r.translateX + n.paddingLeft, s = s - r.translateY + n.paddingTop, n._calculation) {
                var a = t._getWords();
                if (a) {
                    var o = n;
                    o && (o.stroke ? e.fillBorderWords(a, i, s, o.font, o.color, o.strokeColor, o.stroke) : e.fillWords(a, i, s, o.font, o.color, o.underLine));
                }
            }
            var h, l = t._childs, u = l.length;
            if (t.viewport || t.optimizeScrollRect && t._style.scrollRect) {
                var c = t.viewport || t._style.scrollRect, _ = c.x, d = c.y, f = c.right, p = c.bottom, g = NaN, m = NaN;
                for (v = 0; v < u; ++v) (h = l[v]).visible && (g = h._x) < f && g + h.width > _ && (m = h._y) < p && m + h.height > d && h.render(e, i, s);
            } else for (var v = 0; v < u; ++v) (h = l[v])._style.visible && h.render(e, i, s);
        }, e._canvas = function(t, e, i, s) {
            var n = t._$P.cacheCanvas;
            if (n) {
                "bitmap" === n.type ? Stat.canvasBitmap++ : Stat.canvasNormal++;
                var r = n.ctx;
                if (t._needRepaint() || !r) this._canvas_repaint(t, e, i, s); else {
                    var a = n._cacheRec;
                    e.drawCanvas(r.canvas, i + a.x, s + a.y, a.width, a.height);
                }
            } else this._next._fun.call(this._next, t, e, i, s);
        }, e._canvas_repaint = function(t, e, i, s) {
            var n = t._$P.cacheCanvas, r = this._next;
            if (n) {
                var a, o, h, l, u = n.ctx, c = t._needRepaint() || !u, _ = n.type;
                if ("bitmap" === _ ? Stat.canvasBitmap++ : Stat.canvasNormal++, c) {
                    n._cacheRec || (n._cacheRec = new Rectangle());
                    var d, f;
                    Render.isWebGL && "bitmap" !== _ ? n._cacheRec.setTo(-t.pivotX, -t.pivotY, 1, 1) : ((l = t.getSelfBounds()).x = l.x - t.pivotX, 
                    l.y = l.y - t.pivotY, l.x = l.x - 16, l.y = l.y - 16, l.width = l.width + 32, l.height = l.height + 32, 
                    l.x = Math.floor(l.x + i) - i, l.y = Math.floor(l.y + s) - s, l.width = Math.floor(l.width), 
                    l.height = Math.floor(l.height), n._cacheRec.copyFrom(l)), l = n._cacheRec;
                    var p = Render.isWebGL ? 1 : Browser.pixelRatio * Laya.stage.clientScaleX, g = Render.isWebGL ? 1 : Browser.pixelRatio * Laya.stage.clientScaleY;
                    if (!Render.isWebGL) {
                        var m, v = 1, y = 1;
                        for (m = t; m && m != Laya.stage; ) v *= m.scaleX, y *= m.scaleY, m = m.parent;
                        Render.isWebGL ? (v < 1 && (p *= v), y < 1 && (g *= y)) : (v > 1 && (p *= v), y > 1 && (g *= y));
                    }
                    if (t.scrollRect) {
                        var w = t.scrollRect;
                        l.x -= w.x, l.y -= w.y;
                    }
                    if (d = l.width * p, f = l.height * g, o = l.x, h = l.y, Render.isWebGL && "bitmap" === _ && (d > 2048 || f > 2048)) return console.warn("cache bitmap size larger than 2048,cache ignored"), 
                    n.ctx && (Pool.recover("RenderContext", n.ctx), n.ctx.canvas.size(0, 0), n.ctx = null), 
                    void r._fun.call(r, t, e, i, s);
                    u || (u = n.ctx = Pool.getItem("RenderContext") || new RenderContext(d, f, HTMLCanvas.create("AUTO"))), 
                    u.ctx.sprite = t, (a = u.canvas).clear(), (a.width != d || a.height != f) && a.size(d, f), 
                    "bitmap" === _ ? a.context.asBitmap = !0 : "normal" === _ && (a.context.asBitmap = !1);
                    var x;
                    if (1 != p || 1 != g) {
                        var b = u.ctx;
                        b.save(), b.scale(p, g), !Render.isConchWebGL && Render.isConchApp && (x = t._$P.cf) && b.setFilterMatrix && b.setFilterMatrix(x._mat, x._alpha), 
                        r._fun.call(r, t, u, -o, -h), b.restore(), Render.isConchApp && !Render.isConchWebGL || t._applyFilters();
                    } else b = u.ctx, !Render.isConchWebGL && Render.isConchApp && (x = t._$P.cf) && b.setFilterMatrix && b.setFilterMatrix(x._mat, x._alpha), 
                    r._fun.call(r, t, u, -o, -h), Render.isConchApp && !Render.isConchWebGL || t._applyFilters();
                    t._$P.staticCache && (n.reCache = !1), Stat.canvasReCache++;
                } else o = (l = n._cacheRec).x, h = l.y, a = u.canvas;
                e.drawCanvas(a, i + o, s + h, l.width, l.height);
            } else r._fun.call(r, t, u, i, s);
        }, t.__init__ = function() {
            var e, i = 0, s = 0;
            for (e = RunDriver.createRenderSprite(69905, null), s = t.renders.length = 4096, 
            i = 0; i < s; i++) t.renders[i] = e;
            t.renders[0] = RunDriver.createRenderSprite(0, null), function(e, i) {
                for (var s = 0, n = 0; n < e.length; n++) s |= e[n], t.renders[s] = i;
            }([ 1, 512, 4, 2 ], new t(1, null)), t.renders[513] = RunDriver.createRenderSprite(513, null), 
            t.renders[517] = new t(517, null);
        }, t._initRenderFun = function(e, i, s, n) {
            var r = e._renderType;
            (t.renders[r] = t._getTypeRender(r))._fun(e, i, s, n);
        }, t._getTypeRender = function(t) {
            for (var e = null, i = 2048; i > 1; ) i & t && (e = RunDriver.createRenderSprite(i, e)), 
            i >>= 1;
            return e;
        }, t.IMAGE = 1, t.ALPHA = 2, t.TRANSFORM = 4, t.BLEND = 8, t.CANVAS = 16, t.FILTERS = 32, 
        t.MASK = 64, t.CLIP = 128, t.STYLE = 256, t.GRAPHICS = 512, t.CUSTOM = 1024, t.CHILDS = 2048, 
        t.INIT = 69905, t.renders = [], t.NORENDER = new t(0, null), t;
    }(), Context = function() {
        function t() {
            this._repaint = !1;
        }
        __class(t, "laya.resource.Context");
        var e = t.prototype;
        return e.replaceReset = function() {
            var e = 0, i = 0;
            i = t.replaceKeys.length;
            var s;
            for (e = 0; e < i; e++) s = t.replaceKeys[e], this[t.newKeys[e]] = this[s];
        }, e.replaceResotre = function() {
            this.__restore(), this.__reset();
        }, e.setIsMainContext = function() {}, e.drawTextures = function(t, e, i, s) {
            Stat.drawCall += e.length / 2;
            for (var n = t.width, r = t.height, a = 0, o = e.length; a < o; a += 2) this.drawTexture(t, e[a], e[a + 1], n, r, i, s);
        }, e.drawCanvas = function(t, e, i, s, n) {
            Stat.drawCall++, this.drawImage(t.source, e, i, s, n);
        }, e.fillRect = function(t, e, i, s, n) {
            Stat.drawCall++, n && (this.fillStyle = n), this.__fillRect(t, e, i, s);
        }, e.fillText = function(t, e, i, s, n, r) {
            Stat.drawCall++, arguments.length > 3 && null != s && (this.font = s, this.fillStyle = n, 
            this.textAlign = r, this.textBaseline = "top"), this.__fillText(t, e, i);
        }, e.fillBorderText = function(t, e, i, s, n, r, a, o) {
            Stat.drawCall++, this.font = s, this.fillStyle = n, this.textBaseline = "top", this.strokeStyle = r, 
            this.lineWidth = a, this.textAlign = o, this.__strokeText(t, e, i), this.__fillText(t, e, i);
        }, e.strokeText = function(t, e, i, s, n, r, a) {
            Stat.drawCall++, arguments.length > 3 && null != s && (this.font = s, this.strokeStyle = n, 
            this.lineWidth = r, this.textAlign = a, this.textBaseline = "top"), this.__strokeText(t, e, i);
        }, e.transformByMatrix = function(t) {
            this.transform(t.a, t.b, t.c, t.d, t.tx, t.ty);
        }, e.setTransformByMatrix = function(t) {
            this.setTransform(t.a, t.b, t.c, t.d, t.tx, t.ty);
        }, e.clipRect = function(t, e, i, s) {
            Stat.drawCall++, this.beginPath(), this.rect(t, e, i, s), this.clip();
        }, e.drawTexture = function(t, e, i, s, n, r, a) {
            Stat.drawCall++;
            var o = t.uv, h = t.bitmap.width, l = t.bitmap.height;
            this.drawImage(t.source, o[0] * h, o[1] * l, (o[2] - o[0]) * h, (o[5] - o[3]) * l, e + r, i + a, s, n);
        }, e.drawTextureWithTransform = function(t, e, i, s, n, r, a, o, h) {
            Stat.drawCall++;
            var l = t.uv, u = t.bitmap.width, c = t.bitmap.height;
            this.save(), 1 != h && (this.globalAlpha *= h), r ? (this.transform(r.a, r.b, r.c, r.d, r.tx + a, r.ty + o), 
            this.drawImage(t.source, l[0] * u, l[1] * c, (l[2] - l[0]) * u, (l[5] - l[3]) * c, e, i, s, n)) : this.drawImage(t.source, l[0] * u, l[1] * c, (l[2] - l[0]) * u, (l[5] - l[3]) * c, e + a, i + o, s, n), 
            this.restore();
        }, e.drawTexture2 = function(t, e, i, s, n, r, a, o) {
            var h = o[0];
            if (h.loaded && h.bitmap && h.source) {
                Stat.drawCall++;
                var l = 1 !== r;
                if (l) {
                    var u = this.globalAlpha;
                    this.globalAlpha *= r;
                }
                var c = h.uv, _ = h.bitmap.width, d = h.bitmap.height;
                n ? (this.save(), this.transform(n.a, n.b, n.c, n.d, n.tx + t, n.ty + e), this.drawImage(h.source, c[0] * _, c[1] * d, (c[2] - c[0]) * _, (c[5] - c[3]) * d, o[1] - i, o[2] - s, o[3], o[4]), 
                this.restore()) : this.drawImage(h.source, c[0] * _, c[1] * d, (c[2] - c[0]) * _, (c[5] - c[3]) * d, o[1] - i + t, o[2] - s + e, o[3], o[4]), 
                l && (this.globalAlpha = u);
            }
        }, e.fillTexture = function(t, e, i, s, n, r, a, o) {
            if (!o.pat) {
                if (t.uv != Texture.DEF_UV) {
                    var h = new HTMLCanvas("2D");
                    h.getContext("2d"), h.size(t.width, t.height), h.context.drawTexture(t, 0, 0, t.width, t.height, 0, 0), 
                    t = new Texture(h);
                }
                o.pat = this.createPattern(t.bitmap.source, r);
            }
            var l = e, u = i, c = 0, _ = 0;
            a && (l += a.x % t.width, u += a.y % t.height, c -= a.x % t.width, _ -= a.y % t.height), 
            this.translate(l, u), this.fillRect(c, _, s, n, o.pat), this.translate(-l, -u);
        }, e.drawTriangle = function(t, e, i, s, n, r, a, o) {
            var h = t.bitmap, l = h.source, u = t.width, c = t.height, _ = h.width, d = h.height, f = i[s] * _, p = i[n] * _, g = i[r] * _, m = i[s + 1] * d, v = i[n + 1] * d, y = i[r + 1] * d, w = e[s], x = e[n], b = e[r], C = e[s + 1], S = e[n + 1], T = e[r + 1];
            if (o) {
                var M = (w + x + b) / 3, L = (C + S + T) / 3, I = w - M, P = C - L, k = Math.sqrt(I * I + P * P);
                w = M + I / k * (k + 1), C = L + P / k * (k + 1), P = S - L, x = M + (I = x - M) / (k = Math.sqrt(I * I + P * P)) * (k + 1), 
                S = L + P / k * (k + 1), P = T - L, b = M + (I = b - M) / (k = Math.sqrt(I * I + P * P)) * (k + 1), 
                T = L + P / k * (k + 1);
            }
            this.save(), a && this.transform(a.a, a.b, a.c, a.d, a.tx, a.ty), this.beginPath(), 
            this.moveTo(w, C), this.lineTo(x, S), this.lineTo(b, T), this.closePath(), this.clip();
            var R = 1 / (f * v + m * g + p * y - v * g - m * p - f * y), B = w * v + m * b + x * y - v * b - m * x - w * y, E = f * x + w * g + p * b - x * g - w * p - f * b, D = f * v * b + m * x * g + w * p * y - w * v * g - m * p * b - f * x * y, A = C * v + m * T + S * y - v * T - m * S - C * y, N = f * S + C * g + p * T - S * g - C * p - f * T, F = f * v * T + m * S * g + C * p * y - C * v * g - m * p * T - f * S * y;
            this.transform(B * R, A * R, E * R, N * R, D * R, F * R), this.drawImage(l, t.uv[0] * _, t.uv[1] * d, u, c, t.uv[0] * _, t.uv[1] * d, u, c), 
            this.restore();
        }, e.flush = function() {
            return 0;
        }, e.fillWords = function(t, e, i, s, n, r) {
            s && (this.font = s), n && (this.fillStyle = n), this.textBaseline = "top", this.textAlign = "left";
            for (var a = 0, o = t.length; a < o; a++) {
                var h = t[a];
                if (this.__fillText(h.char, h.x + e, h.y + i), 1 === r) {
                    var l = h.height, u = .5 * h.style.letterSpacing;
                    u || (u = 0), this.beginPath(), this.strokeStyle = n, this.lineWidth = 1, this.moveTo(e + h.x - u + .5, i + h.y + l + .5), 
                    this.lineTo(e + h.x + h.width + u + .5, i + h.y + l + .5), this.stroke();
                }
            }
        }, e.fillBorderWords = function(t, e, i, s, n, r, a) {
            s && (this.font = s), n && (this.fillStyle = n), this.textBaseline = "top", this.lineWidth = a, 
            this.textAlign = "left", this.strokeStyle = r;
            for (var o = 0, h = t.length; o < h; o++) {
                var l = t[o];
                this.__strokeText(l.char, l.x + e, l.y + i), this.__fillText(l.char, l.x + e, l.y + i);
            }
        }, e.destroy = function() {
            this.canvas.width = this.canvas.height = 0;
        }, e.clear = function() {
            this.clearRect(0, 0, this._canvas.width, this._canvas.height), this._repaint = !1;
        }, e.drawCurves = function(t, e, i) {
            this.beginPath(), this.strokeStyle = i[3], this.lineWidth = i[4];
            var s = i[2];
            t += i[0], e += i[1], this.moveTo(t + s[0], e + s[1]);
            for (var n = 2, r = s.length; n < r; ) this.quadraticCurveTo(t + s[n++], e + s[n++], t + s[n++], e + s[n++]);
            this.stroke();
        }, t.__init__ = function(t) {
            var e = laya.resource.Context.prototype;
            (t = t || CanvasRenderingContext2D.prototype).inited || (t.inited = !0, t.__fillText = t.fillText, 
            t.__fillRect = t.fillRect, t.__strokeText = t.strokeText, [ "drawTextures", "drawTriangle", "fillWords", "fillBorderWords", "setIsMainContext", "fillRect", "strokeText", "fillTexture", "fillText", "transformByMatrix", "setTransformByMatrix", "clipRect", "drawTexture", "drawTexture2", "drawTextureWithTransform", "flush", "clear", "destroy", "drawCanvas", "fillBorderText", "drawCurves" ].forEach(function(i) {
                t[i] = e[i];
            }));
        }, t.replaceCanvasGetSet = function(t, e) {
            var i = Object.getOwnPropertyDescriptor(t, e);
            if (!i || !i.configurable) return !1;
            var s, n = {};
            for (s in i) "set" != s && (n[s] = i[s]);
            var r = i.set;
            return n.set = function(t) {
                r.call(this, t);
                var e = this.getContext("2d");
                e && "__reset" in e && e.__reset();
            }, Object.defineProperty(t, e, n), !0;
        }, t.replaceGetSet = function(e, i) {
            var s = Object.getOwnPropertyDescriptor(e, i);
            if (!s || !s.configurable) return !1;
            var n, r = {};
            for (n in s) "set" != n && (r[n] = s[n]);
            var a = s.set, o = "___" + i + "__";
            return t.newKeys.push(o), r.set = function(t) {
                t != this[o] && (this[o] = t, a.call(this, t));
            }, Object.defineProperty(e, i, r), !0;
        }, t._default = new t(), t.newKeys = [], __static(t, [ "replaceKeys", function() {
            return this.replaceKeys = [ "font", "fillStyle", "textBaseline" ];
        } ]), t;
    }(), ResourceManager = function() {
        function t(e) {
            this._id = 0, this._name = null, this._resources = null, this._memorySize = 0, this._garbageCollectionRate = NaN, 
            this._isOverflow = !1, this.autoRelease = !1, this.autoReleaseMaxSize = 0, this._id = ++t._uniqueIDCounter, 
            this._name = e || "Content Manager", t._isResourceManagersSorted = !1, this._memorySize = 0, 
            this._isOverflow = !1, this.autoRelease = !1, this.autoReleaseMaxSize = 536870912, 
            this._garbageCollectionRate = .2, t._resourceManagers.push(this), this._resources = [];
        }
        __class(t, "laya.resource.ResourceManager");
        var e = t.prototype;
        return Laya.imps(e, {
            "laya.resource.IDispose": !0
        }), e.getResourceByIndex = function(t) {
            return this._resources[t];
        }, e.getResourcesLength = function() {
            return this._resources.length;
        }, e.addResource = function(t) {
            return t.resourceManager && t.resourceManager.removeResource(t), -1 === this._resources.indexOf(t) && (t._resourceManager = this, 
            this._resources.push(t), this.addSize(t.memorySize), !0);
        }, e.removeResource = function(t) {
            var e = this._resources.indexOf(t);
            return -1 !== e && (this._resources.splice(e, 1), t._resourceManager = null, this._memorySize -= t.memorySize, 
            !0);
        }, e.unload = function() {
            for (var t = this._resources.slice(0, this._resources.length), e = 0; e < t.length; e++) t[e].destroy();
            t.length = 0;
        }, e.dispose = function() {
            if (this === t._systemResourceManager) throw new Error("systemResourceManager不能被释放！");
            t._resourceManagers.splice(t._resourceManagers.indexOf(this), 1), t._isResourceManagersSorted = !1;
            for (var e = this._resources.slice(0, this._resources.length), i = 0; i < e.length; i++) {
                var s = e[i];
                s.resourceManager.removeResource(s), s.destroy();
            }
            e.length = 0;
        }, e.addSize = function(t) {
            t && (this.autoRelease && t > 0 && this._memorySize + t > this.autoReleaseMaxSize && this.garbageCollection((1 - this._garbageCollectionRate) * this.autoReleaseMaxSize), 
            this._memorySize += t);
        }, e.garbageCollection = function(t) {
            var e = this._resources;
            (e = e.slice()).sort(function(t, e) {
                if (!t || !e) throw new Error("a或b不能为空！");
                return t.released && e.released ? 0 : t.released ? 1 : e.released ? -1 : t._lastUseFrameCount - e._lastUseFrameCount;
            });
            for (var i = Stat.loopCount, s = 0, n = e.length; s < n; s++) {
                var r = e[s];
                if (!(i - r._lastUseFrameCount > 1)) return void (this._memorySize >= t && (this._isOverflow = !0));
                if (r.releaseResource(), this._memorySize < t) return void (this._isOverflow = !1);
            }
        }, __getset(0, e, "id", function() {
            return this._id;
        }), __getset(0, e, "name", function() {
            return this._name;
        }, function(e) {
            !e && "" === e || this._name === e || (this._name = e, t._isResourceManagersSorted = !1);
        }), __getset(0, e, "memorySize", function() {
            return this._memorySize;
        }), __getset(1, t, "systemResourceManager", function() {
            return t._systemResourceManager;
        }), t.__init__ = function() {
            t.currentResourceManager = t.systemResourceManager;
        }, t.getLoadedResourceManagerByIndex = function(e) {
            return t._resourceManagers[e];
        }, t.getLoadedResourceManagersCount = function() {
            return t._resourceManagers.length;
        }, t.recreateContentManagers = function(e) {
            void 0 === e && (e = !1);
            for (var i = t.currentResourceManager, s = 0; s < t._resourceManagers.length; s++) {
                t.currentResourceManager = t._resourceManagers[s];
                for (var n = 0; n < t.currentResourceManager._resources.length; n++) t.currentResourceManager._resources[n].releaseResource(e), 
                t.currentResourceManager._resources[n].activeResource(e);
            }
            t.currentResourceManager = i;
        }, t.releaseContentManagers = function(e) {
            void 0 === e && (e = !1);
            for (var i = t.currentResourceManager, s = 0; s < t._resourceManagers.length; s++) {
                t.currentResourceManager = t._resourceManagers[s];
                for (var n = 0; n < t.currentResourceManager._resources.length; n++) {
                    var r = t.currentResourceManager._resources[n];
                    !r.released && r.releaseResource(e);
                }
            }
            t.currentResourceManager = i;
        }, t._uniqueIDCounter = 0, t._isResourceManagersSorted = !1, t._resourceManagers = [], 
        __static(t, [ "_systemResourceManager", function() {
            return this._systemResourceManager = new t("System Resource Manager");
        }, "currentResourceManager", function() {
            return this.currentResourceManager = t._systemResourceManager;
        } ]), t;
    }(), System = function() {
        function System() {}
        return __class(System, "laya.system.System"), System.changeDefinition = function(name, classObj) {
            Laya[name] = classObj;
            var str = name + "=classObj";
            eval(str);
        }, System.__init__ = function() {
            Render.isConchApp && (conch.disableConchResManager(), conch.disableConchAutoRestoreLostedDevice());
        }, System;
    }(), Browser = function() {
        function t() {}
        return __class(t, "laya.utils.Browser"), __getset(1, t, "pixelRatio", function() {
            return t.__init__(), t.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)") > -1 ? 2 : RunDriver.getPixelRatio();
        }), __getset(1, t, "height", function() {
            return t.__init__(), (Laya.stage && Laya.stage.canvasRotation ? t.clientWidth : t.clientHeight) * t.pixelRatio;
        }), __getset(1, t, "clientWidth", function() {
            return t.__init__(), t.window.innerWidth || t.document.body.clientWidth;
        }), __getset(1, t, "window", function() {
            return t.__init__(), t._window;
        }), __getset(1, t, "clientHeight", function() {
            return t.__init__(), t.window.innerHeight || t.document.body.clientHeight || t.document.documentElement.clientHeight;
        }), __getset(1, t, "width", function() {
            return t.__init__(), (Laya.stage && Laya.stage.canvasRotation ? t.clientHeight : t.clientWidth) * t.pixelRatio;
        }), __getset(1, t, "container", function() {
            return t.__init__(), t._container || ((t._container = t.createElement("div")).id = "layaContainer", 
            t.document.body.appendChild(t._container)), t._container;
        }, function(e) {
            t._container = e;
        }), __getset(1, t, "document", function() {
            return t.__init__(), t._document;
        }), t.__init__ = function() {
            t._window || (t._window = RunDriver.getWindow(), t._document = t.window.document, 
            t._window.addEventListener("message", function(t) {
                laya.utils.Browser._onMessage(t);
            }, !1), t.document.__createElement = t.document.createElement, window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                return window.setTimeout(t, 1e3 / 60);
            }, t.userAgent = t.window.navigator.userAgent, t.onIOS = !!(t.u = t.userAgent).match(/\(i[^;]+;(U;)? CPU.+Mac OS X/), 
            t.onMobile = t.u.indexOf("Mobile") > -1, t.onIPhone = t.u.indexOf("iPhone") > -1, 
            t.onMac = t.u.indexOf("Mac OS X") > -1, t.onIPad = t.u.indexOf("iPad") > -1, t.onAndriod = t.u.indexOf("Android") > -1 || t.u.indexOf("Adr") > -1, 
            t.onWP = t.u.indexOf("Windows Phone") > -1, t.onQQBrowser = t.u.indexOf("QQBrowser") > -1, 
            t.onMQQBrowser = t.u.indexOf("MQQBrowser") > -1 || t.u.indexOf("Mobile") > -1 && t.u.indexOf("QQ") > -1, 
            t.onIE = !!t.window.ActiveXObject || "ActiveXObject" in t.window, t.onWeiXin = t.u.indexOf("MicroMessenger") > -1, 
            t.onPC = !t.onMobile, t.onSafari = !!t.u.match(/Version\/\d+\.\d\x20Mobile\/\S+\x20Safari/), 
            t.onFirefox = t.u.indexOf("Firefox") > -1, t.onEdge = t.u.indexOf("Edge") > -1, 
            t.onMiniGame = t.u.indexOf("MiniGame") > -1, t.onLimixiu = t.u.indexOf("limixiu") > -1, 
            t.httpProtocol = "http:" == t.window.location.protocol, t.onMiniGame && null == t.window.focus && console.error("请先初始化小游戏适配库，详细教程https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0"), 
            t.webAudioEnabled = !!(t.window.AudioContext || t.window.webkitAudioContext || t.window.mozAudioContext), 
            t.soundType = t.webAudioEnabled ? "WEBAUDIOSOUND" : "AUDIOSOUND", Sound = t.webAudioEnabled ? WebAudioSound : AudioSound, 
            t.webAudioEnabled && WebAudioSound.initWebAudio(), AudioSound._initMusicAudio(), 
            t.enableTouch = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch, 
            window.focus(), SoundManager._soundClass = Sound, Render._mainCanvas = Render._mainCanvas || HTMLCanvas.create("2D"), 
            t.canvas || (t.canvas = HTMLCanvas.create("2D"), t.context = t.canvas.getContext("2d")));
        }, t._onMessage = function(e) {
            if (e.data && "size" == e.data.name) {
                if (t.window.innerWidth = e.data.width, t.window.innerHeight = e.data.height, t.window.__innerHeight = e.data.clientHeight, 
                !t.document.createEvent) return void console.warn("no document.createEvent");
                var i = t.document.createEvent("HTMLEvents");
                return i.initEvent("resize", !1, !1), void t.window.dispatchEvent(i);
            }
        }, t.createElement = function(e) {
            return t.__init__(), t.document.__createElement(e);
        }, t.getElementById = function(e) {
            return t.__init__(), t.document.getElementById(e);
        }, t.removeElement = function(t) {
            t && t.parentNode && t.parentNode.removeChild(t);
        }, t.now = function() {
            return RunDriver.now();
        }, t._window = null, t._document = null, t._container = null, t.userAgent = null, 
        t.u = null, t.onIOS = !1, t.onMac = !1, t.onMobile = !1, t.onIPhone = !1, t.onIPad = !1, 
        t.onAndriod = !1, t.onAndroid = !1, t.onWP = !1, t.onQQBrowser = !1, t.onMQQBrowser = !1, 
        t.onSafari = !1, t.onFirefox = !1, t.onEdge = !1, t.onIE = !1, t.onWeiXin = !1, 
        t.onMiniGame = !1, t.onLimixiu = !1, t.onPC = !1, t.httpProtocol = !1, t.webAudioEnabled = !1, 
        t.soundType = null, t.enableTouch = !1, t.canvas = null, t.context = null, t.__init$ = function() {}, 
        t;
    }(), Byte = function() {
        function t(t) {
            this._xd_ = !0, this._allocated_ = 8, this._pos_ = 0, this._length = 0, t ? (this._u8d_ = new Uint8Array(t), 
            this._d_ = new DataView(this._u8d_.buffer), this._length = this._d_.byteLength) : this.___resizeBuffer(this._allocated_);
        }
        __class(t, "laya.utils.Byte");
        var e = t.prototype;
        return e.___resizeBuffer = function(t) {
            try {
                var e = new Uint8Array(t);
                null != this._u8d_ && (this._u8d_.length <= t ? e.set(this._u8d_) : e.set(this._u8d_.subarray(0, t))), 
                this._u8d_ = e, this._d_ = new DataView(e.buffer);
            } catch (e) {
                throw "___resizeBuffer err:" + t;
            }
        }, e.getString = function() {
            return this.rUTF(this.getUint16());
        }, e.getFloat32Array = function(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var s = new Float32Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i, s;
        }, e.getUint8Array = function(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var s = new Uint8Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i, s;
        }, e.getInt16Array = function(t, e) {
            var i = t + e;
            i = i > this._length ? this._length : i;
            var s = new Int16Array(this._d_.buffer.slice(t, i));
            return this._pos_ = i, s;
        }, e.getFloat32 = function() {
            if (this._pos_ + 4 > this._length) throw "getFloat32 error - Out of bounds";
            var t = this._d_.getFloat32(this._pos_, this._xd_);
            return this._pos_ += 4, t;
        }, e.getFloat64 = function() {
            if (this._pos_ + 8 > this._length) throw "getFloat64 error - Out of bounds";
            var t = this._d_.getFloat64(this._pos_, this._xd_);
            return this._pos_ += 8, t;
        }, e.writeFloat32 = function(t) {
            this.ensureWrite(this._pos_ + 4), this._d_.setFloat32(this._pos_, t, this._xd_), 
            this._pos_ += 4;
        }, e.writeFloat64 = function(t) {
            this.ensureWrite(this._pos_ + 8), this._d_.setFloat64(this._pos_, t, this._xd_), 
            this._pos_ += 8;
        }, e.getInt32 = function() {
            if (this._pos_ + 4 > this._length) throw "getInt32 error - Out of bounds";
            var t = this._d_.getInt32(this._pos_, this._xd_);
            return this._pos_ += 4, t;
        }, e.getUint32 = function() {
            if (this._pos_ + 4 > this._length) throw "getUint32 error - Out of bounds";
            var t = this._d_.getUint32(this._pos_, this._xd_);
            return this._pos_ += 4, t;
        }, e.writeInt32 = function(t) {
            this.ensureWrite(this._pos_ + 4), this._d_.setInt32(this._pos_, t, this._xd_), this._pos_ += 4;
        }, e.writeUint32 = function(t) {
            this.ensureWrite(this._pos_ + 4), this._d_.setUint32(this._pos_, t, this._xd_), 
            this._pos_ += 4;
        }, e.getInt16 = function() {
            if (this._pos_ + 2 > this._length) throw "getInt16 error - Out of bounds";
            var t = this._d_.getInt16(this._pos_, this._xd_);
            return this._pos_ += 2, t;
        }, e.getUint16 = function() {
            if (this._pos_ + 2 > this._length) throw "getUint16 error - Out of bounds";
            var t = this._d_.getUint16(this._pos_, this._xd_);
            return this._pos_ += 2, t;
        }, e.writeUint16 = function(t) {
            this.ensureWrite(this._pos_ + 2), this._d_.setUint16(this._pos_, t, this._xd_), 
            this._pos_ += 2;
        }, e.writeInt16 = function(t) {
            this.ensureWrite(this._pos_ + 2), this._d_.setInt16(this._pos_, t, this._xd_), this._pos_ += 2;
        }, e.getUint8 = function() {
            if (this._pos_ + 1 > this._length) throw "getUint8 error - Out of bounds";
            return this._d_.getUint8(this._pos_++);
        }, e.writeUint8 = function(t) {
            this.ensureWrite(this._pos_ + 1), this._d_.setUint8(this._pos_, t), this._pos_++;
        }, e._getUInt8 = function(t) {
            return this._d_.getUint8(t);
        }, e._getUint16 = function(t) {
            return this._d_.getUint16(t, this._xd_);
        }, e._getMatrix = function() {
            return new Matrix(this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32());
        }, e.rUTF = function(t) {
            for (var e = "", i = this._pos_ + t, s = 0, n = String.fromCharCode, r = this._u8d_; this._pos_ < i; ) (s = r[this._pos_++]) < 128 ? 0 != s && (e += n(s)) : e += n(s < 224 ? (63 & s) << 6 | 127 & r[this._pos_++] : s < 240 ? (31 & s) << 12 | (127 & r[this._pos_++]) << 6 | 127 & r[this._pos_++] : (15 & s) << 18 | (127 & r[this._pos_++]) << 12 | r[this._pos_++] << 6 & 127 | 127 & r[this._pos_++]);
            return e;
        }, e.getCustomString = function(t) {
            for (var e = "", i = 0, s = 0, n = String.fromCharCode, r = this._u8d_; t > 0; ) if ((s = r[this._pos_]) < 128) e += n(s), 
            this._pos_++, t--; else for (i = s - 128, this._pos_++, t -= i; i > 0; ) s = r[this._pos_++], 
            e += n(r[this._pos_++] << 8 | s), i--;
            return e;
        }, e.clear = function() {
            this._pos_ = 0, this.length = 0;
        }, e.__getBuffer = function() {
            return this._d_.buffer;
        }, e.writeUTFBytes = function(t) {
            for (var e = 0, i = (t += "").length; e < i; e++) {
                var s = t.charCodeAt(e);
                s <= 127 ? this.writeByte(s) : s <= 2047 ? (this.ensureWrite(this._pos_ + 2), this._u8d_.set([ 192 | s >> 6, 128 | 63 & s ], this._pos_), 
                this._pos_ += 2) : s <= 65535 ? (this.ensureWrite(this._pos_ + 3), this._u8d_.set([ 224 | s >> 12, 128 | s >> 6 & 63, 128 | 63 & s ], this._pos_), 
                this._pos_ += 3) : (this.ensureWrite(this._pos_ + 4), this._u8d_.set([ 240 | s >> 18, 128 | s >> 12 & 63, 128 | s >> 6 & 63, 128 | 63 & s ], this._pos_), 
                this._pos_ += 4);
            }
        }, e.writeUTFString = function(t) {
            var e = this.pos;
            this.writeUint16(1), this.writeUTFBytes(t);
            var i = this.pos - e - 2;
            if (i >= 65536) throw "writeUTFString byte len more than 65536";
            this._d_.setUint16(e, i, this._xd_);
        }, e.readUTFString = function() {
            return this.readUTFBytes(this.getUint16());
        }, e.getUTFString = function() {
            return this.readUTFString();
        }, e.readUTFBytes = function(t) {
            if (void 0 === t && (t = -1), 0 == t) return "";
            var e = this.bytesAvailable;
            if (t > e) throw "readUTFBytes error - Out of bounds";
            return t = t > 0 ? t : e, this.rUTF(t);
        }, e.getUTFBytes = function(t) {
            return void 0 === t && (t = -1), this.readUTFBytes(t);
        }, e.writeByte = function(t) {
            this.ensureWrite(this._pos_ + 1), this._d_.setInt8(this._pos_, t), this._pos_ += 1;
        }, e.readByte = function() {
            if (this._pos_ + 1 > this._length) throw "readByte error - Out of bounds";
            return this._d_.getInt8(this._pos_++);
        }, e.getByte = function() {
            return this.readByte();
        }, e.ensureWrite = function(t) {
            this._length < t && (this._length = t), this._allocated_ < t && (this.length = t);
        }, e.writeArrayBuffer = function(t, e, i) {
            if (void 0 === e && (e = 0), void 0 === i && (i = 0), e < 0 || i < 0) throw "writeArrayBuffer error - Out of bounds";
            0 == i && (i = t.byteLength - e), this.ensureWrite(this._pos_ + i);
            var s = new Uint8Array(t);
            this._u8d_.set(s.subarray(e, e + i), this._pos_), this._pos_ += i;
        }, __getset(0, e, "buffer", function() {
            var t = this._d_.buffer;
            return t.byteLength == this.length ? t : t.slice(0, this.length);
        }), __getset(0, e, "endian", function() {
            return this._xd_ ? "littleEndian" : "bigEndian";
        }, function(t) {
            this._xd_ = "littleEndian" == t;
        }), __getset(0, e, "length", function() {
            return this._length;
        }, function(t) {
            this._allocated_ < t ? this.___resizeBuffer(this._allocated_ = Math.floor(Math.max(t, 2 * this._allocated_))) : this._allocated_ > t && this.___resizeBuffer(this._allocated_ = t), 
            this._length = t;
        }), __getset(0, e, "pos", function() {
            return this._pos_;
        }, function(t) {
            this._pos_ = t;
        }), __getset(0, e, "bytesAvailable", function() {
            return this._length - this._pos_;
        }), t.getSystemEndian = function() {
            if (!t._sysEndian) {
                var e = new ArrayBuffer(2);
                new DataView(e).setInt16(0, 256, !0), t._sysEndian = 256 === new Int16Array(e)[0] ? "littleEndian" : "bigEndian";
            }
            return t._sysEndian;
        }, t.BIG_ENDIAN = "bigEndian", t.LITTLE_ENDIAN = "littleEndian", t._sysEndian = null, 
        t;
    }(), CacheManager = function() {
        function t() {}
        return __class(t, "laya.utils.CacheManager"), t.regCacheByFunction = function(e, i) {
            t.unRegCacheByFunction(e, i);
            var s;
            s = {
                tryDispose: e,
                getCacheList: i
            }, t._cacheList.push(s);
        }, t.unRegCacheByFunction = function(e, i) {
            var s = 0, n = 0;
            for (n = t._cacheList.length, s = 0; s < n; s++) if (t._cacheList[s].tryDispose == e && t._cacheList[s].getCacheList == i) return void t._cacheList.splice(s, 1);
        }, t.forceDispose = function() {
            var e = 0, i = t._cacheList.length;
            for (e = 0; e < i; e++) t._cacheList[e].tryDispose(!0);
        }, t.beginCheck = function(e) {
            void 0 === e && (e = 15e3), Laya.timer.loop(e, null, t._checkLoop);
        }, t.stopCheck = function() {
            Laya.timer.clear(null, t._checkLoop);
        }, t._checkLoop = function() {
            var e = t._cacheList;
            if (!(e.length < 1)) {
                var i = Browser.now(), s = 0, n = 0;
                for (n = s = e.length; s > 0 && (t._index++, t._index = t._index % n, e[t._index].tryDispose(!1), 
                !(Browser.now() - i > t.loopTimeLimit)); ) s--;
            }
        }, t.loopTimeLimit = 2, t._cacheList = [], t._index = 0, t;
    }(), ClassUtils = function() {
        function t() {}
        return __class(t, "laya.utils.ClassUtils"), t.regClass = function(e, i) {
            t._classMap[e] = i;
        }, t.getRegClass = function(e) {
            return t._classMap[e];
        }, t.getInstance = function(e) {
            var i = t.getClass(e);
            return i ? new i() : (console.warn("[error] Undefined class:", e), null);
        }, t.createByJson = function(e, i, s, n, r) {
            "string" == typeof e && (e = JSON.parse(e));
            var a = e.props;
            if (!i && !(i = r ? r.runWith(e) : t.getInstance(a.runtime || e.type))) return null;
            var o = e.child;
            if (o) for (var h = 0, l = o.length; h < l; h++) {
                var u = o[h];
                if ("render" !== u.props.name && "render" !== u.props.renderType || !i._$set_itemRender) if ("Graphic" == u.type) t.addGraphicsToSprite(u, i); else if (t.isDrawType(u.type)) t.addGraphicToSprite(u, i, !0); else {
                    var c = t.createByJson(u, null, s, n, r);
                    "Script" == u.type ? c.hasOwnProperty("owner") ? c.owner = i : c.hasOwnProperty("target") && (c.target = i) : "mask" == u.props.renderType ? i.mask = c : i.addChild(c);
                } else i.itemRender = u;
            }
            if (a) for (var _ in a) {
                var d = a[_];
                "var" === _ && s ? s[d] = i : d instanceof Array && "function" == typeof i[_] ? i[_].apply(i, d) : i[_] = d;
            }
            return n && e.customProps && n.runWith([ i, e ]), i.created && i.created(), i;
        }, t.addGraphicsToSprite = function(e, i) {
            var s;
            if ((s = e.child) && !(s.length < 1)) {
                var n;
                n = t._getGraphicsFromSprite(e, i);
                var r = 0, a = 0;
                e.props && (r = t._getObjVar(e.props, "x", 0), a = t._getObjVar(e.props, "y", 0)), 
                0 != r && 0 != a && n.translate(r, a);
                var o = 0, h = 0;
                for (h = s.length, o = 0; o < h; o++) t._addGraphicToGraphics(s[o], n);
                0 != r && 0 != a && n.translate(-r, -a);
            }
        }, t.addGraphicToSprite = function(e, i, s) {
            void 0 === s && (s = !1);
            var n;
            n = s ? t._getGraphicsFromSprite(e, i) : i.graphics, t._addGraphicToGraphics(e, n);
        }, t._getGraphicsFromSprite = function(t, e) {
            var i;
            if (!t || !t.props) return e.graphics;
            var s;
            switch (s = t.props.renderType) {
              case "hit":
              case "unHit":
                var n;
                e.hitArea || (e.hitArea = new HitArea()), (n = e.hitArea)[s] || (n[s] = new Graphics()), 
                i = n[s];
            }
            return i || (i = e.graphics), i;
        }, t._getTransformData = function(e) {
            var i;
            (e.hasOwnProperty("pivotX") || e.hasOwnProperty("pivotY")) && (i = i || new Matrix()).translate(-t._getObjVar(e, "pivotX", 0), -t._getObjVar(e, "pivotY", 0));
            var s = t._getObjVar(e, "scaleX", 1), n = t._getObjVar(e, "scaleY", 1), r = t._getObjVar(e, "rotation", 0);
            return t._getObjVar(e, "skewX", 0), t._getObjVar(e, "skewY", 0), 1 == s && 1 == n && 0 == r || ((i = i || new Matrix()).scale(s, n), 
            i.rotate(.0174532922222222 * r)), i;
        }, t._addGraphicToGraphics = function(e, i) {
            var s;
            if (s = e.props) {
                var n;
                if (n = t.DrawTypeDic[e.type]) {
                    var r;
                    r = i;
                    var a, o = t._getParams(s, n[1], n[2], n[3]);
                    ((a = t._tM) || 1 != t._alpha) && (r.save(), a && r.transform(a), 1 != t._alpha && r.alpha(t._alpha)), 
                    r[n[0]].apply(r, o), (a || 1 != t._alpha) && r.restore();
                }
            }
        }, t._adptLineData = function(t) {
            return t[2] = parseFloat(t[0]) + parseFloat(t[2]), t[3] = parseFloat(t[1]) + parseFloat(t[3]), 
            t;
        }, t._adptTextureData = function(t) {
            return t[0] = Loader.getRes(t[0]), t;
        }, t._adptLinesData = function(e) {
            return e[2] = t._getPointListByStr(e[2]), e;
        }, t.isDrawType = function(e) {
            return "Image" != e && t.DrawTypeDic.hasOwnProperty(e);
        }, t._getParams = function(e, i, s, n) {
            void 0 === s && (s = 0);
            var r;
            (r = t._temParam).length = i.length;
            var a = 0, o = 0;
            for (o = i.length, a = 0; a < o; a++) r[a] = t._getObjVar(e, i[a][0], i[a][1]);
            t._alpha = t._getObjVar(e, "alpha", 1);
            var h;
            return (h = t._getTransformData(e)) ? (s || (s = 0), h.translate(r[s], r[s + 1]), 
            r[s] = r[s + 1] = 0, t._tM = h) : t._tM = null, n && t[n] && (r = t[n](r)), r;
        }, t._getPointListByStr = function(t) {
            var e, i = 0, s = 0;
            for (s = (e = t.split(",")).length, i = 0; i < s; i++) e[i] = parseFloat(e[i]);
            return e;
        }, t._getObjVar = function(t, e, i) {
            return t.hasOwnProperty(e) ? t[e] : i;
        }, t._temParam = [], t._classMap = {
            Sprite: "laya.display.Sprite",
            Text: "laya.display.Text",
            Animation: "laya.display.Animation",
            Skeleton: "laya.ani.bone.Skeleton",
            Particle2D: "laya.particle.Particle2D",
            div: "laya.html.dom.HTMLDivElement",
            p: "laya.html.dom.HTMLElement",
            img: "laya.html.dom.HTMLImageElement",
            span: "laya.html.dom.HTMLElement",
            br: "laya.html.dom.HTMLBrElement",
            style: "laya.html.dom.HTMLStyleElement",
            font: "laya.html.dom.HTMLElement",
            a: "laya.html.dom.HTMLElement",
            "#text": "laya.html.dom.HTMLElement"
        }, t.getClass = function(e) {
            var i = t._classMap[e] || e;
            return "string" == typeof i ? Laya.__classmap[i] : i;
        }, t._tM = null, t._alpha = NaN, __static(t, [ "DrawTypeDic", function() {
            return this.DrawTypeDic = {
                Rect: [ "drawRect", [ [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ] ],
                Circle: [ "drawCircle", [ [ "x", 0 ], [ "y", 0 ], [ "radius", 0 ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ] ],
                Pie: [ "drawPie", [ [ "x", 0 ], [ "y", 0 ], [ "radius", 0 ], [ "startAngle", 0 ], [ "endAngle", 0 ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ] ],
                Image: [ "drawTexture", [ [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ] ] ],
                Texture: [ "drawTexture", [ [ "skin", null ], [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ] ], 1, "_adptTextureData" ],
                FillTexture: [ "fillTexture", [ [ "skin", null ], [ "x", 0 ], [ "y", 0 ], [ "width", 0 ], [ "height", 0 ], [ "repeat", null ] ], 1, "_adptTextureData" ],
                FillText: [ "fillText", [ [ "text", "" ], [ "x", 0 ], [ "y", 0 ], [ "font", null ], [ "color", null ], [ "textAlign", null ] ], 1 ],
                Line: [ "drawLine", [ [ "x", 0 ], [ "y", 0 ], [ "toX", 0 ], [ "toY", 0 ], [ "lineColor", null ], [ "lineWidth", 0 ] ], 0, "_adptLineData" ],
                Lines: [ "drawLines", [ [ "x", 0 ], [ "y", 0 ], [ "points", "" ], [ "lineColor", null ], [ "lineWidth", 0 ] ], 0, "_adptLinesData" ],
                Curves: [ "drawCurves", [ [ "x", 0 ], [ "y", 0 ], [ "points", "" ], [ "lineColor", null ], [ "lineWidth", 0 ] ], 0, "_adptLinesData" ],
                Poly: [ "drawPoly", [ [ "x", 0 ], [ "y", 0 ], [ "points", "" ], [ "fillColor", null ], [ "lineColor", null ], [ "lineWidth", 1 ] ], 0, "_adptLinesData" ]
            };
        } ]), t;
    }(), Color = function() {
        function t(e) {
            if (this._color = [], "string" == typeof e) {
                this.strColor = e, null === e && (e = "#000000"), "#" == e.charAt(0) && (e = e.substr(1));
                var i = e.length;
                if (3 == i || 4 == i) {
                    for (var s = "", n = 0; n < i; n++) s += e[n] + e[n];
                    e = s;
                }
                var r = this.numColor = parseInt(e, 16);
                if (8 == e.length) return void (this._color = [ parseInt(e.substr(0, 2), 16) / 255, ((16711680 & r) >> 16) / 255, ((65280 & r) >> 8) / 255, (255 & r) / 255 ]);
            } else r = this.numColor = e, this.strColor = Utils.toHexColor(r);
            this._color = [ ((16711680 & r) >> 16) / 255, ((65280 & r) >> 8) / 255, (255 & r) / 255, 1 ], 
            this._color.__id = ++t._COLODID;
        }
        return __class(t, "laya.utils.Color"), t._initDefault = function() {
            t._DEFAULT = {};
            for (var e in t._COLOR_MAP) t._SAVE[e] = t._DEFAULT[e] = new t(t._COLOR_MAP[e]);
            return t._DEFAULT;
        }, t._initSaveMap = function() {
            t._SAVE_SIZE = 0, t._SAVE = {};
            for (var e in t._DEFAULT) t._SAVE[e] = t._DEFAULT[e];
        }, t.create = function(e) {
            var i = t._SAVE[e + ""];
            return null != i ? i : (t._SAVE_SIZE < 1e3 || t._initSaveMap(), t._SAVE[e + ""] = new t(e));
        }, t._SAVE = {}, t._SAVE_SIZE = 0, t._COLOR_MAP = {
            white: "#FFFFFF",
            red: "#FF0000",
            green: "#00FF00",
            blue: "#0000FF",
            black: "#000000",
            yellow: "#FFFF00",
            gray: "#AAAAAA"
        }, t._DEFAULT = t._initDefault(), t._COLODID = 1, t;
    }(), Dictionary = function() {
        function t() {
            this._values = [], this._keys = [];
        }
        __class(t, "laya.utils.Dictionary");
        var e = t.prototype;
        return e.set = function(t, e) {
            var i = this.indexOf(t);
            i >= 0 ? this._values[i] = e : (this._keys.push(t), this._values.push(e));
        }, e.indexOf = function(t) {
            var e = this._keys.indexOf(t);
            return e >= 0 ? e : (t = "string" == typeof t ? Number(t) : "number" == typeof t ? t.toString() : t, 
            this._keys.indexOf(t));
        }, e.get = function(t) {
            var e = this.indexOf(t);
            return e < 0 ? null : this._values[e];
        }, e.remove = function(t) {
            var e = this.indexOf(t);
            return e >= 0 && (this._keys.splice(e, 1), this._values.splice(e, 1), !0);
        }, e.clear = function() {
            this._values.length = 0, this._keys.length = 0;
        }, __getset(0, e, "values", function() {
            return this._values;
        }), __getset(0, e, "keys", function() {
            return this._keys;
        }), t;
    }(), Dragging = function() {
        function t() {
            this.ratio = .92, this.maxOffset = 60, this._dragging = !1, this._clickOnly = !0;
        }
        __class(t, "laya.utils.Dragging");
        var e = t.prototype;
        return e.start = function(t, e, i, s, n, r, a, o) {
            void 0 === o && (o = .92), this.clearTimer(), this.target = t, this.area = e, this.hasInertia = i, 
            this.elasticDistance = e ? s : 0, this.elasticBackTime = n, this.data = r, this._disableMouseEvent = a, 
            this.ratio = o, 1 != t.globalScaleX || 1 != t.globalScaleY ? this._parent = t.parent : this._parent = Laya.stage, 
            this._clickOnly = !0, this._dragging = !0, this._elasticRateX = this._elasticRateY = 1, 
            this._lastX = this._parent.mouseX, this._lastY = this._parent.mouseY, Laya.stage.on("mouseup", this, this.onStageMouseUp), 
            Laya.stage.on("mouseout", this, this.onStageMouseUp), Laya.timer.frameLoop(1, this, this.loop);
        }, e.clearTimer = function() {
            Laya.timer.clear(this, this.loop), Laya.timer.clear(this, this.tweenMove), this._tween && (this._tween.recover(), 
            this._tween = null);
        }, e.stop = function() {
            this._dragging && (MouseManager.instance.disableMouseEvent = !1, Laya.stage.off("mouseup", this, this.onStageMouseUp), 
            Laya.stage.off("mouseout", this, this.onStageMouseUp), this._dragging = !1, this.target && this.area && this.backToArea(), 
            this.clear());
        }, e.loop = function() {
            var t = this._parent.getMousePoint(), e = t.x, i = t.y, s = e - this._lastX, n = i - this._lastY;
            if (this._clickOnly) {
                if (!(Math.abs(s * Laya.stage._canvasTransform.getScaleX()) > 1 || Math.abs(n * Laya.stage._canvasTransform.getScaleY()) > 1)) return;
                this._clickOnly = !1, this._offsets || (this._offsets = []), this._offsets.length = 0, 
                this.target.event("dragstart", this.data), MouseManager.instance.disableMouseEvent = this._disableMouseEvent, 
                this.target._set$P("$_MOUSEDOWN", !1);
            } else this._offsets.push(s, n);
            0 === s && 0 === n || (this._lastX = e, this._lastY = i, this.target.x += s * this._elasticRateX, 
            this.target.y += n * this._elasticRateY, this.area && this.checkArea(), this.target.event("dragmove", this.data));
        }, e.checkArea = function() {
            if (this.elasticDistance <= 0) this.backToArea(); else {
                if (this.target.x < this.area.x) var t = this.area.x - this.target.x; else t = this.target.x > this.area.x + this.area.width ? this.target.x - this.area.x - this.area.width : 0;
                if (this._elasticRateX = Math.max(0, 1 - t / this.elasticDistance), this.target.y < this.area.y) var e = this.area.y - this.target.y; else e = this.target.y > this.area.y + this.area.height ? this.target.y - this.area.y - this.area.height : 0;
                this._elasticRateY = Math.max(0, 1 - e / this.elasticDistance);
            }
        }, e.backToArea = function() {
            this.target.x = Math.min(Math.max(this.target.x, this.area.x), this.area.x + this.area.width), 
            this.target.y = Math.min(Math.max(this.target.y, this.area.y), this.area.y + this.area.height);
        }, e.onStageMouseUp = function(t) {
            if (MouseManager.instance.disableMouseEvent = !1, Laya.stage.off("mouseup", this, this.onStageMouseUp), 
            Laya.stage.off("mouseout", this, this.onStageMouseUp), Laya.timer.clear(this, this.loop), 
            !this._clickOnly && this.target) if (this.hasInertia) {
                this._offsets.length < 1 && this._offsets.push(this._parent.mouseX - this._lastX, this._parent.mouseY - this._lastY), 
                this._offsetX = this._offsetY = 0;
                for (var e = this._offsets.length, i = Math.min(e, 6), s = this._offsets.length - i, n = e - 1; n > s; n--) this._offsetY += this._offsets[n--], 
                this._offsetX += this._offsets[n];
                this._offsetX = this._offsetX / i * 2, this._offsetY = this._offsetY / i * 2, Math.abs(this._offsetX) > this.maxOffset && (this._offsetX = this._offsetX > 0 ? this.maxOffset : -this.maxOffset), 
                Math.abs(this._offsetY) > this.maxOffset && (this._offsetY = this._offsetY > 0 ? this.maxOffset : -this.maxOffset), 
                Laya.timer.frameLoop(1, this, this.tweenMove);
            } else this.elasticDistance > 0 ? this.checkElastic() : this.clear();
        }, e.checkElastic = function() {
            var t = NaN, e = NaN;
            if (this.target.x < this.area.x ? t = this.area.x : this.target.x > this.area.x + this.area.width && (t = this.area.x + this.area.width), 
            this.target.y < this.area.y ? e = this.area.y : this.target.y > this.area.y + this.area.height && (e = this.area.y + this.area.height), 
            isNaN(t) && isNaN(e)) this.clear(); else {
                var i = {};
                isNaN(t) || (i.x = t), isNaN(e) || (i.y = e), this._tween = Tween.to(this.target, i, this.elasticBackTime, Ease.sineOut, Handler.create(this, this.clear), 0, !1, !1);
            }
        }, e.tweenMove = function() {
            this._offsetX *= this.ratio * this._elasticRateX, this._offsetY *= this.ratio * this._elasticRateY, 
            this.target.x += this._offsetX, this.target.y += this._offsetY, this.area && this.checkArea(), 
            this.target.event("dragmove", this.data), (Math.abs(this._offsetX) < 1 && Math.abs(this._offsetY) < 1 || this._elasticRateX < .5 || this._elasticRateY < .5) && (Laya.timer.clear(this, this.tweenMove), 
            this.elasticDistance > 0 ? this.checkElastic() : this.clear());
        }, e.clear = function() {
            if (this.target) {
                this.clearTimer();
                var t = this.target;
                this.target = null, this._parent = null, t.event("dragend", this.data);
            }
        }, t;
    }(), Ease = function() {
        function t() {}
        return __class(t, "laya.utils.Ease"), t.linearNone = function(t, e, i, s) {
            return i * t / s + e;
        }, t.linearIn = function(t, e, i, s) {
            return i * t / s + e;
        }, t.linearInOut = function(t, e, i, s) {
            return i * t / s + e;
        }, t.linearOut = function(t, e, i, s) {
            return i * t / s + e;
        }, t.bounceIn = function(e, i, s, n) {
            return s - t.bounceOut(n - e, 0, s, n) + i;
        }, t.bounceInOut = function(e, i, s, n) {
            return e < .5 * n ? .5 * t.bounceIn(2 * e, 0, s, n) + i : .5 * t.bounceOut(2 * e - n, 0, s, n) + .5 * s + i;
        }, t.bounceOut = function(t, e, i, s) {
            return (t /= s) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e;
        }, t.backIn = function(t, e, i, s, n) {
            return void 0 === n && (n = 1.70158), i * (t /= s) * t * ((n + 1) * t - n) + e;
        }, t.backInOut = function(t, e, i, s, n) {
            return void 0 === n && (n = 1.70158), (t /= .5 * s) < 1 ? .5 * i * (t * t * ((1 + (n *= 1.525)) * t - n)) + e : i / 2 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + e;
        }, t.backOut = function(t, e, i, s, n) {
            return void 0 === n && (n = 1.70158), i * ((t = t / s - 1) * t * ((n + 1) * t + n) + 1) + e;
        }, t.elasticIn = function(e, i, s, n, r, a) {
            void 0 === r && (r = 0), void 0 === a && (a = 0);
            var o;
            return 0 == e ? i : 1 == (e /= n) ? i + s : (a || (a = .3 * n), !r || s > 0 && r < s || s < 0 && r < -s ? (r = s, 
            o = a / 4) : o = a / t.PI2 * Math.asin(s / r), -r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - o) * t.PI2 / a) + i);
        }, t.elasticInOut = function(e, i, s, n, r, a) {
            void 0 === r && (r = 0), void 0 === a && (a = 0);
            var o;
            return 0 == e ? i : 2 == (e /= .5 * n) ? i + s : (a || (a = n * (.3 * 1.5)), !r || s > 0 && r < s || s < 0 && r < -s ? (r = s, 
            o = a / 4) : o = a / t.PI2 * Math.asin(s / r), e < 1 ? r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - o) * t.PI2 / a) * -.5 + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - o) * t.PI2 / a) * .5 + s + i);
        }, t.elasticOut = function(e, i, s, n, r, a) {
            void 0 === r && (r = 0), void 0 === a && (a = 0);
            var o;
            return 0 == e ? i : 1 == (e /= n) ? i + s : (a || (a = .3 * n), !r || s > 0 && r < s || s < 0 && r < -s ? (r = s, 
            o = a / 4) : o = a / t.PI2 * Math.asin(s / r), r * Math.pow(2, -10 * e) * Math.sin((e * n - o) * t.PI2 / a) + s + i);
        }, t.strongIn = function(t, e, i, s) {
            return i * (t /= s) * t * t * t * t + e;
        }, t.strongInOut = function(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e;
        }, t.strongOut = function(t, e, i, s) {
            return i * ((t = t / s - 1) * t * t * t * t + 1) + e;
        }, t.sineInOut = function(t, e, i, s) {
            return .5 * -i * (Math.cos(Math.PI * t / s) - 1) + e;
        }, t.sineIn = function(e, i, s, n) {
            return -s * Math.cos(e / n * t.HALF_PI) + s + i;
        }, t.sineOut = function(e, i, s, n) {
            return s * Math.sin(e / n * t.HALF_PI) + i;
        }, t.quintIn = function(t, e, i, s) {
            return i * (t /= s) * t * t * t * t + e;
        }, t.quintInOut = function(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t * t + e : .5 * i * ((t -= 2) * t * t * t * t + 2) + e;
        }, t.quintOut = function(t, e, i, s) {
            return i * ((t = t / s - 1) * t * t * t * t + 1) + e;
        }, t.quartIn = function(t, e, i, s) {
            return i * (t /= s) * t * t * t + e;
        }, t.quartInOut = function(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t * t * t + e : .5 * -i * ((t -= 2) * t * t * t - 2) + e;
        }, t.quartOut = function(t, e, i, s) {
            return -i * ((t = t / s - 1) * t * t * t - 1) + e;
        }, t.cubicIn = function(t, e, i, s) {
            return i * (t /= s) * t * t + e;
        }, t.cubicInOut = function(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t * t + e : .5 * i * ((t -= 2) * t * t + 2) + e;
        }, t.cubicOut = function(t, e, i, s) {
            return i * ((t = t / s - 1) * t * t + 1) + e;
        }, t.quadIn = function(t, e, i, s) {
            return i * (t /= s) * t + e;
        }, t.quadInOut = function(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * i * t * t + e : .5 * -i * (--t * (t - 2) - 1) + e;
        }, t.quadOut = function(t, e, i, s) {
            return -i * (t /= s) * (t - 2) + e;
        }, t.expoIn = function(t, e, i, s) {
            return 0 == t ? e : i * Math.pow(2, 10 * (t / s - 1)) + e - .001 * i;
        }, t.expoInOut = function(t, e, i, s) {
            return 0 == t ? e : t == s ? e + i : (t /= .5 * s) < 1 ? .5 * i * Math.pow(2, 10 * (t - 1)) + e : .5 * i * (2 - Math.pow(2, -10 * --t)) + e;
        }, t.expoOut = function(t, e, i, s) {
            return t == s ? e + i : i * (1 - Math.pow(2, -10 * t / s)) + e;
        }, t.circIn = function(t, e, i, s) {
            return -i * (Math.sqrt(1 - (t /= s) * t) - 1) + e;
        }, t.circInOut = function(t, e, i, s) {
            return (t /= .5 * s) < 1 ? .5 * -i * (Math.sqrt(1 - t * t) - 1) + e : .5 * i * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
        }, t.circOut = function(t, e, i, s) {
            return i * Math.sqrt(1 - (t = t / s - 1) * t) + e;
        }, t.HALF_PI = .5 * Math.PI, t.PI2 = 2 * Math.PI, t;
    }(), HitArea = function() {
        function t() {
            this._hit = null, this._unHit = null;
        }
        __class(t, "laya.utils.HitArea");
        var e = t.prototype;
        return e.isHit = function(e, i) {
            return !!t.isHitGraphic(e, i, this.hit) && !t.isHitGraphic(e, i, this.unHit);
        }, e.contains = function(t, e) {
            return this.isHit(t, e);
        }, __getset(0, e, "hit", function() {
            return this._hit || (this._hit = new Graphics()), this._hit;
        }, function(t) {
            this._hit = t;
        }), __getset(0, e, "unHit", function() {
            return this._unHit || (this._unHit = new Graphics()), this._unHit;
        }, function(t) {
            this._unHit = t;
        }), t.isHitGraphic = function(e, i, s) {
            if (!s) return !1;
            var n;
            if (!(n = s.cmds) && s._one && ((n = t._cmds).length = 1, n[0] = s._one), !n) return !1;
            var r = 0, a = 0;
            a = n.length;
            var o;
            for (r = 0; r < a; r++) if (o = n[r]) {
                var h = Render._context;
                switch (o.callee) {
                  case h._translate:
                  case 6:
                    e -= o[0], i -= o[1];
                }
                if (t.isHitCmd(e, i, o)) return !0;
            }
            return !1;
        }, t.isHitCmd = function(e, i, s) {
            if (!s) return !1;
            var n = Render._context, r = !1;
            switch (s.callee) {
              case n._drawRect:
              case 13:
                t._rec.setTo(s[0], s[1], s[2], s[3]), r = t._rec.contains(e, i);
                break;

              case n._drawCircle:
              case n._fillCircle:
              case 14:
                r = (e -= s[0]) * e + (i -= s[1]) * i < s[2] * s[2];
                break;

              case n._drawPoly:
              case 18:
                e -= s[0], i -= s[1], r = t.ptInPolygon(e, i, s[2]);
            }
            return r;
        }, t.ptInPolygon = function(e, i, s) {
            var n;
            (n = t._ptPoint).setTo(e, i);
            var r = 0, a = NaN, o = NaN, h = NaN, l = NaN, u = 0;
            u = s.length;
            for (var c = 0; c < u; c += 2) a = s[c], o = s[c + 1], h = s[(c + 2) % u], o == (l = s[(c + 3) % u]) || n.y < Math.min(o, l) || n.y >= Math.max(o, l) || (n.y - o) * (h - a) / (l - o) + a > n.x && r++;
            return r % 2 == 1;
        }, t._cmds = [], __static(t, [ "_rec", function() {
            return this._rec = new Rectangle();
        }, "_ptPoint", function() {
            return this._ptPoint = new Point();
        } ]), t;
    }(), HTMLChar = function() {
        function t(e, i, s, n) {
            this.char = e, this.charNum = e.charCodeAt(0), this._x = this._y = 0, this.width = i, 
            this.height = s, this.style = n, this.isWord = !t._isWordRegExp.test(e);
        }
        __class(t, "laya.utils.HTMLChar");
        var e = t.prototype;
        return Laya.imps(e, {
            "laya.display.ILayout": !0
        }), e.setSprite = function(t) {
            this._sprite = t;
        }, e.getSprite = function() {
            return this._sprite;
        }, e._isChar = function() {
            return !0;
        }, e._getCSSStyle = function() {
            return this.style;
        }, __getset(0, e, "width", function() {
            return this._w;
        }, function(t) {
            this._w = t;
        }), __getset(0, e, "x", function() {
            return this._x;
        }, function(t) {
            this._sprite && (this._sprite.x = t), this._x = t;
        }), __getset(0, e, "y", function() {
            return this._y;
        }, function(t) {
            this._sprite && (this._sprite.y = t), this._y = t;
        }), __getset(0, e, "height", function() {
            return this._h;
        }, function(t) {
            this._h = t;
        }), t._isWordRegExp = new RegExp("[\\w.]", ""), t;
    }(), Log = function() {
        function t() {}
        return __class(t, "laya.utils.Log"), t.enable = function() {
            t._logdiv || (t._logdiv = Browser.window.document.createElement("div"), Browser.window.document.body.appendChild(t._logdiv), 
            t._logdiv.style.cssText = "pointer-events:none;border:white;overflow:hidden;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;");
        }, t.toggle = function() {
            var e = t._logdiv.style;
            "1px" == e.width ? e.width = e.height = "50%" : e.width = e.height = "1px";
        }, t.print = function(e) {
            t._logdiv && (t._count >= t.maxCount && t.clear(), t._count++, t._logdiv.innerText += e + "\n", 
            t._logdiv.scrollTop = t._logdiv.scrollHeight);
        }, t.clear = function() {
            t._logdiv.innerText = "", t._count = 0;
        }, t._logdiv = null, t._count = 0, t.maxCount = 20, t;
    }(), Mouse = function() {
        function t() {}
        return __class(t, "laya.utils.Mouse"), __getset(1, t, "cursor", function() {
            return t._style.cursor;
        }, function(e) {
            t._style.cursor = e;
        }), t.hide = function() {
            "none" != t.cursor && (t._preCursor = t.cursor, t.cursor = "none");
        }, t.show = function() {
            "none" == t.cursor && (t.cursor = t._preCursor ? t._preCursor : "auto");
        }, t._preCursor = null, __static(t, [ "_style", function() {
            return this._style = Browser.document.body.style;
        } ]), t;
    }(), Pool = function() {
        function t() {}
        return __class(t, "laya.utils.Pool"), t.getPoolBySign = function(e) {
            return t._poolDic[e] || (t._poolDic[e] = []);
        }, t.clearBySign = function(e) {
            t._poolDic[e] && (t._poolDic[e].length = 0);
        }, t.recover = function(e, i) {
            i.__InPool || (i.__InPool = !0, t.getPoolBySign(e).push(i));
        }, t.getItemByClass = function(e, i) {
            var s = t.getPoolBySign(e), n = s.length ? s.pop() : new i();
            return n.__InPool = !1, n;
        }, t.getItemByCreateFun = function(e, i) {
            var s = t.getPoolBySign(e), n = s.length ? s.pop() : i();
            return n.__InPool = !1, n;
        }, t.getItem = function(e) {
            var i = t.getPoolBySign(e), s = i.length ? i.pop() : null;
            return s && (s.__InPool = !1), s;
        }, t._poolDic = {}, t.InPoolSign = "__InPool", t;
    }(), PoolCache = function() {
        function t() {
            this.sign = null, this.maxCount = 1e3;
        }
        __class(t, "laya.utils.PoolCache");
        var e = t.prototype;
        return e.getCacheList = function() {
            return Pool.getPoolBySign(this.sign);
        }, e.tryDispose = function(t) {
            var e;
            (e = Pool.getPoolBySign(this.sign)).length > this.maxCount && e.splice(this.maxCount, e.length - this.maxCount);
        }, t.addPoolCacheManager = function(e, i) {
            void 0 === i && (i = 100);
            var s;
            (s = new t()).sign = e, s.maxCount = i, CacheManager.regCacheByFunction(Utils.bind(s.tryDispose, s), Utils.bind(s.getCacheList, s));
        }, t;
    }(), Stat = function() {
        function t() {}
        return __class(t, "laya.utils.Stat"), __getset(1, t, "onclick", null, function(e) {
            t._sp && t._sp.on("click", t._sp, e), t._canvas && (t._canvas.source.onclick = e, 
            t._canvas.source.style.pointerEvents = "");
        }), t.show = function(e, i) {
            void 0 === e && (e = 0), void 0 === i && (i = 0), Render.isConchApp ? Browser.window.conch.showFPS && Browser.window.conch.showFPS(e, i) : (Browser.onMiniGame || Browser.onLimixiu || (t._useCanvas = !0), 
            t._show = !0, t._fpsData.length = 60, t._view[0] = {
                title: "FPS(Canvas)",
                value: "_fpsStr",
                color: "yellow",
                units: "int"
            }, t._view[1] = {
                title: "Sprite",
                value: "_spriteStr",
                color: "white",
                units: "int"
            }, t._view[2] = {
                title: "DrawCall",
                value: "drawCall",
                color: "white",
                units: "int"
            }, t._view[3] = {
                title: "CurMem",
                value: "currentMemorySize",
                color: "yellow",
                units: "M"
            }, Render.isWebGL ? (t._view[4] = {
                title: "Shader",
                value: "shaderCall",
                color: "white",
                units: "int"
            }, Render.is3DMode ? (t._view[0].title = "FPS(3D)", t._view[5] = {
                title: "TriFaces",
                value: "trianglesFaces",
                color: "white",
                units: "int"
            }, t._view[6] = {
                title: "treeNodeColl",
                value: "treeNodeCollision",
                color: "white",
                units: "int"
            }, t._view[7] = {
                title: "treeSpriteColl",
                value: "treeSpriteCollision",
                color: "white",
                units: "int"
            }) : (t._view[0].title = "FPS(WebGL)", t._view[5] = {
                title: "Canvas",
                value: "_canvasStr",
                color: "white",
                units: "int"
            })) : t._view[4] = {
                title: "Canvas",
                value: "_canvasStr",
                color: "white",
                units: "int"
            }, t._useCanvas ? t.createUIPre(e, i) : t.createUI(e, i), t.enable());
        }, t.createUIPre = function(e, i) {
            var s = Browser.pixelRatio;
            t._width = 130 * s, t._vx = 75 * s, t._height = s * (12 * t._view.length + 3 * s) + 4, 
            t._fontSize = 12 * s;
            for (var n = 0; n < t._view.length; n++) t._view[n].x = 4, t._view[n].y = n * t._fontSize + 2 * s;
            t._canvas || ((t._canvas = new HTMLCanvas("2D")).size(t._width, t._height), (t._ctx = t._canvas.getContext("2d")).textBaseline = "top", 
            t._ctx.font = t._fontSize + "px Sans-serif", t._canvas.source.style.cssText = "pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:" + e + "px;top:" + i + "px;width:" + t._width / s + "px;height:" + t._height / s + "px;"), 
            t._first = !0, t.loop(), t._first = !1, Browser.container.appendChild(t._canvas.source);
        }, t.createUI = function(e, i) {
            var s = t._sp, n = Browser.pixelRatio;
            s || (s = new Sprite(), (t._leftText = new Text()).pos(5, 5), t._leftText.color = "#ffffff", 
            s.addChild(t._leftText), (t._txt = new Text()).pos(80 * n, 5), t._txt.color = "#ffffff", 
            s.addChild(t._txt), t._sp = s), s.pos(e, i);
            for (var r = "", a = 0; a < t._view.length; a++) r += t._view[a].title + "\n";
            t._leftText.text = r;
            var o = 138 * n, h = n * (12 * t._view.length + 3 * n) + 4;
            t._txt.fontSize = t._fontSize * n, t._leftText.fontSize = t._fontSize * n, s.size(o, h), 
            s.graphics.clear(), s.graphics.setAlpha(.5), s.graphics.drawRect(0, 0, o, h, "#999999"), 
            s.graphics.setAlpha(1), t.loop();
        }, t.enable = function() {
            Laya.timer.frameLoop(1, t, t.loop);
        }, t.hide = function() {
            t._show = !1, Laya.timer.clear(t, t.loop), t._canvas && Browser.removeElement(t._canvas.source);
        }, t.clear = function() {
            t.trianglesFaces = t.drawCall = t.shaderCall = t.spriteCount = t.spriteRenderUseCacheCount = t.treeNodeCollision = t.treeSpriteCollision = t.canvasNormal = t.canvasBitmap = t.canvasReCache = 0;
        }, t.loop = function() {
            t._count++;
            var e = Browser.now();
            if (!(e - t._timer < 1e3)) {
                var i = t._count;
                if (t.FPS = Math.round(1e3 * i / (e - t._timer)), t._show) {
                    t.trianglesFaces = Math.round(t.trianglesFaces / i), t._useCanvas ? (t.drawCall = Math.round(t.drawCall / i) - 2, 
                    t.shaderCall = Math.round(t.shaderCall / i), t.spriteCount = Math.round(t.spriteCount / i) - 1) : (t.drawCall = Math.round(t.drawCall / i) - 2, 
                    t.shaderCall = Math.round(t.shaderCall / i) - 4, t.spriteCount = Math.round(t.spriteCount / i) - 4), 
                    t.spriteRenderUseCacheCount = Math.round(t.spriteRenderUseCacheCount / i), t.canvasNormal = Math.round(t.canvasNormal / i), 
                    t.canvasBitmap = Math.round(t.canvasBitmap / i), t.canvasReCache = Math.ceil(t.canvasReCache / i), 
                    t.treeNodeCollision = Math.round(t.treeNodeCollision / i), t.treeSpriteCollision = Math.round(t.treeSpriteCollision / i);
                    var s = t.FPS > 0 ? Math.floor(1e3 / t.FPS).toString() : " ";
                    t._fpsStr = t.FPS + (t.renderSlow ? " slow" : "") + " " + s, t._spriteStr = t.spriteCount + (t.spriteRenderUseCacheCount ? "/" + t.spriteRenderUseCacheCount : ""), 
                    t._canvasStr = t.canvasReCache + "/" + t.canvasNormal + "/" + t.canvasBitmap, t.currentMemorySize = ResourceManager.systemResourceManager.memorySize, 
                    t._useCanvas ? t.renderInfoPre() : t.renderInfo(), t.clear();
                }
                t._count = 0, t._timer = e;
            }
        }, t.renderInfoPre = function() {
            if (t._canvas) {
                var e = t._ctx;
                e.clearRect(t._first ? 0 : t._vx, 0, t._width, t._height);
                for (var i = 0; i < t._view.length; i++) {
                    var s = t._view[i];
                    t._first && (e.fillStyle = "white", e.fillText(s.title, s.x, s.y, null, null, null)), 
                    e.fillStyle = s.color;
                    var n = t[s.value];
                    "M" == s.units && (n = Math.floor(n / 1048576 * 100) / 100 + " M"), e.fillText(n + "", s.x + t._vx, s.y, null, null, null);
                }
            }
        }, t.renderInfo = function() {
            for (var e = "", i = 0; i < t._view.length; i++) {
                var s = t._view[i], n = t[s.value];
                "M" == s.units && (n = Math.floor(n / 1048576 * 100) / 100 + " M"), "K" == s.units && (n = Math.floor(n / 1024 * 100) / 100 + " K"), 
                e += n + "\n";
            }
            t._txt.text = e;
        }, t.FPS = 0, t.loopCount = 0, t.shaderCall = 0, t.drawCall = 0, t.trianglesFaces = 0, 
        t.spriteCount = 0, t.spriteRenderUseCacheCount = 0, t.treeNodeCollision = 0, t.treeSpriteCollision = 0, 
        t.canvasNormal = 0, t.canvasBitmap = 0, t.canvasReCache = 0, t.renderSlow = !1, 
        t.currentMemorySize = 0, t._fpsStr = null, t._canvasStr = null, t._spriteStr = null, 
        t._fpsData = [], t._timer = 0, t._count = 0, t._view = [], t._fontSize = 12, t._txt = null, 
        t._leftText = null, t._sp = null, t._show = !1, t._useCanvas = !1, t._canvas = null, 
        t._ctx = null, t._first = !1, t._vx = NaN, t._width = 0, t._height = 100, t;
    }(), StringKey = function() {
        function t() {
            this._strsToID = {}, this._idToStrs = [], this._length = 0;
        }
        __class(t, "laya.utils.StringKey");
        var e = t.prototype;
        return e.add = function(t) {
            var e = this._strsToID[t];
            return null != e ? e : (this._idToStrs[this._length] = t, this._strsToID[t] = this._length++);
        }, e.getID = function(t) {
            var e = this._strsToID[t];
            return null == e ? -1 : e;
        }, e.getName = function(t) {
            var e = this._idToStrs[t];
            return null == e ? void 0 : e;
        }, t;
    }(), Timer = function() {
        function t() {
            this._delta = 0, this.scale = 1, this.currFrame = 0, this._mid = 1, this._map = [], 
            this._laters = [], this._handlers = [], this._temp = [], this._count = 0, this.currTimer = this._now(), 
            this._lastTimer = this._now(), this._init();
        }
        var e;
        __class(t, "laya.utils.Timer");
        var i = t.prototype;
        return i._init = function() {
            Laya.timer && Laya.timer.frameLoop(1, this, this._update);
        }, i._now = function() {
            return Date.now();
        }, i._update = function() {
            if (this.scale <= 0) this._lastTimer = this._now(); else {
                var t = this.currFrame = this.currFrame + this.scale, e = this._now();
                this._delta = (e - this._lastTimer) * this.scale;
                var i = this.currTimer = this.currTimer + this._delta;
                this._lastTimer = e;
                var s = this._handlers;
                for (this._count = 0, a = 0, o = s.length; a < o; a++) if (null !== (h = s[a]).method) {
                    var n = h.userFrame ? t : i;
                    if (n >= h.exeTime) if (h.repeat) if (h.jumpFrame) for (;n >= h.exeTime; ) h.exeTime += h.delay, 
                    h.run(!1); else h.exeTime += h.delay, h.run(!1), n > h.exeTime && (h.exeTime += Math.ceil((n - h.exeTime) / h.delay) * h.delay); else h.run(!0);
                } else this._count++;
                (this._count > 30 || t % 200 == 0) && this._clearHandlers();
                for (var r = this._laters, a = 0, o = r.length - 1; a <= o; a++) {
                    var h = r[a];
                    null !== h.method && (this._map[h.key] = null, h.run(!1)), this._recoverHandler(h), 
                    a === o && (o = r.length - 1);
                }
                r.length = 0;
            }
        }, i._clearHandlers = function() {
            for (var t = this._handlers, e = 0, i = t.length; e < i; e++) {
                var s = t[e];
                null !== s.method ? this._temp.push(s) : this._recoverHandler(s);
            }
            this._handlers = this._temp, this._temp = t, this._temp.length = 0;
        }, i._recoverHandler = function(e) {
            this._map[e.key] == e && (this._map[e.key] = null), e.clear(), t._pool.push(e);
        }, i._create = function(i, s, n, r, a, o, h) {
            if (!n) return a.apply(r, o), null;
            if (h) {
                var l = this._getHandler(r, a);
                if (l) return l.repeat = s, l.userFrame = i, l.delay = n, l.caller = r, l.method = a, 
                l.args = o, l.exeTime = n + (i ? this.currFrame : this.currTimer + this._now() - this._lastTimer), 
                l;
            }
            return l = t._pool.length > 0 ? t._pool.pop() : new e(), l.repeat = s, l.userFrame = i, 
            l.delay = n, l.caller = r, l.method = a, l.args = o, l.exeTime = n + (i ? this.currFrame : this.currTimer + this._now() - this._lastTimer) + 1, 
            this._indexHandler(l), this._handlers.push(l), l;
        }, i._indexHandler = function(t) {
            var e = t.caller, i = t.method, s = e ? e.$_GID || (e.$_GID = Utils.getGID()) : 0, n = i.$_TID || (i.$_TID = 1e5 * this._mid++);
            t.key = s + n, this._map[t.key] = t;
        }, i.once = function(t, e, i, s, n) {
            void 0 === n && (n = !0), this._create(!1, !1, t, e, i, s, n);
        }, i.loop = function(t, e, i, s, n, r) {
            void 0 === n && (n = !0), void 0 === r && (r = !1);
            var a = this._create(!1, !0, t, e, i, s, n);
            a && (a.jumpFrame = r);
        }, i.frameOnce = function(t, e, i, s, n) {
            void 0 === n && (n = !0), this._create(!0, !1, t, e, i, s, n);
        }, i.frameLoop = function(t, e, i, s, n) {
            void 0 === n && (n = !0), this._create(!0, !0, t, e, i, s, n);
        }, i.toString = function() {
            return "callLater:" + this._laters.length + " handlers:" + this._handlers.length + " pool:" + t._pool.length;
        }, i.clear = function(t, e) {
            var i = this._getHandler(t, e);
            i && (this._map[i.key] = null, i.key = 0, i.clear());
        }, i.clearAll = function(t) {
            if (t) for (var e = 0, i = this._handlers.length; e < i; e++) {
                var s = this._handlers[e];
                s.caller === t && (this._map[s.key] = null, s.key = 0, s.clear());
            }
        }, i._getHandler = function(t, e) {
            var i = t ? t.$_GID || (t.$_GID = Utils.getGID()) : 0, s = e.$_TID || (e.$_TID = 1e5 * this._mid++);
            return this._map[i + s];
        }, i.callLater = function(i, s, n) {
            if (null == this._getHandler(i, s)) {
                if (t._pool.length) var r = t._pool.pop(); else r = new e();
                r.caller = i, r.method = s, r.args = n, this._indexHandler(r), this._laters.push(r);
            }
        }, i.runCallLater = function(t, e) {
            var i = this._getHandler(t, e);
            i && null != i.method && (this._map[i.key] = null, i.run(!0));
        }, i.runTimer = function(t, e) {
            this.runCallLater(t, e);
        }, __getset(0, i, "delta", function() {
            return this._delta;
        }), t._pool = [], t.__init$ = function() {
            e = function() {
                function t() {
                    this.key = 0, this.repeat = !1, this.delay = 0, this.userFrame = !1, this.exeTime = 0, 
                    this.caller = null, this.method = null, this.args = null, this.jumpFrame = !1;
                }
                __class(t, "");
                var e = t.prototype;
                return e.clear = function() {
                    this.caller = null, this.method = null, this.args = null;
                }, e.run = function(t) {
                    var e = this.caller;
                    if (e && e.destroyed) return this.clear();
                    var i = this.method, s = this.args;
                    t && this.clear(), null != i && (s ? i.apply(e, s) : i.call(e));
                }, t;
            }();
        }, t;
    }(), Tween = function() {
        function t() {
            this.gid = 0;
        }
        __class(t, "laya.utils.Tween");
        var e = t.prototype;
        return e.to = function(t, e, i, s, n, r, a) {
            return void 0 === r && (r = 0), void 0 === a && (a = !1), this._create(t, e, i, s, n, r, a, !0, !1, !0);
        }, e.from = function(t, e, i, s, n, r, a) {
            return void 0 === r && (r = 0), void 0 === a && (a = !1), this._create(t, e, i, s, n, r, a, !1, !1, !0);
        }, e._create = function(e, i, s, n, r, a, o, h, l, u) {
            if (!e) throw new Error("Tween:target is null");
            this._target = e, this._duration = s, this._ease = n || i.ease || t.easeNone, this._complete = r || i.complete, 
            this._delay = a, this._props = [], this._usedTimer = 0, this._startTimer = Browser.now(), 
            this._usedPool = l, this._delayParam = null, this.update = i.update;
            var c = e.$_GID || (e.$_GID = Utils.getGID());
            return t.tweenMap[c] ? (o && t.clearTween(e), t.tweenMap[c].push(this)) : t.tweenMap[c] = [ this ], 
            u ? a <= 0 ? this.firstStart(e, i, h) : (this._delayParam = [ e, i, h ], Laya.scaleTimer.once(a, this, this.firstStart, this._delayParam)) : this._initProps(e, i, h), 
            this;
        }, e.firstStart = function(t, e, i) {
            this._delayParam = null, t.destroyed ? this.clear() : (this._initProps(t, e, i), 
            this._beginLoop());
        }, e._initProps = function(t, e, i) {
            for (var s in e) if ("number" == typeof t[s]) {
                var n = i ? t[s] : e[s], r = i ? e[s] : t[s];
                this._props.push([ s, n, r - n ]), i || (t[s] = n);
            }
        }, e._beginLoop = function() {
            Laya.scaleTimer.frameLoop(1, this, this._doEase);
        }, e._doEase = function() {
            this._updateEase(Browser.now());
        }, e._updateEase = function(e) {
            var i = this._target;
            if (i) {
                if (i.destroyed) return t.clearTween(i);
                var s = this._usedTimer = e - this._startTimer - this._delay;
                if (!(s < 0)) {
                    if (s >= this._duration) return this.complete();
                    for (var n = s > 0 ? this._ease(s, 0, 1, this._duration) : 0, r = this._props, a = 0, o = r.length; a < o; a++) {
                        var h = r[a];
                        i[h[0]] = h[1] + n * h[2];
                    }
                    this.update && this.update.run();
                }
            }
        }, e.complete = function() {
            if (this._target) {
                Laya.scaleTimer.runTimer(this, this.firstStart);
                for (var t = this._target, e = this._props, i = this._complete, s = 0, n = e.length; s < n; s++) {
                    var r = e[s];
                    t[r[0]] = r[1] + r[2];
                }
                this.update && this.update.run(), this.clear(), i && i.run();
            }
        }, e.pause = function() {
            Laya.scaleTimer.clear(this, this._beginLoop), Laya.scaleTimer.clear(this, this._doEase), 
            Laya.scaleTimer.clear(this, this.firstStart);
            var t = NaN;
            (t = Browser.now() - this._startTimer - this._delay) < 0 && (this._usedTimer = t);
        }, e.setStartTime = function(t) {
            this._startTimer = t;
        }, e.clear = function() {
            this._target && (this._remove(), this._clear());
        }, e._clear = function() {
            this.pause(), Laya.scaleTimer.clear(this, this.firstStart), this._complete = null, 
            this._target = null, this._ease = null, this._props = null, this._delayParam = null, 
            this._usedPool && (this.update = null, Pool.recover("tween", this));
        }, e.recover = function() {
            this._usedPool = !0, this._clear();
        }, e._remove = function() {
            var e = t.tweenMap[this._target.$_GID];
            if (e) for (var i = 0, s = e.length; i < s; i++) if (e[i] === this) {
                e.splice(i, 1);
                break;
            }
        }, e.restart = function() {
            if (this.pause(), this._usedTimer = 0, this._startTimer = Browser.now(), this._delayParam) Laya.scaleTimer.once(this._delay, this, this.firstStart, this._delayParam); else {
                for (var t = this._props, e = 0, i = t.length; e < i; e++) {
                    var s = t[e];
                    this._target[s[0]] = s[1];
                }
                Laya.scaleTimer.once(this._delay, this, this._beginLoop);
            }
        }, e.resume = function() {
            this._usedTimer >= this._duration || (this._startTimer = Browser.now() - this._usedTimer - this._delay, 
            this._delayParam ? this._usedTimer < 0 ? Laya.scaleTimer.once(-this._usedTimer, this, this.firstStart, this._delayParam) : this.firstStart.apply(this, this._delayParam) : this._beginLoop());
        }, __getset(0, e, "progress", null, function(t) {
            var e = t * this._duration;
            this._startTimer = Browser.now() - this._delay - e;
        }), t.to = function(e, i, s, n, r, a, o, h) {
            return void 0 === a && (a = 0), void 0 === o && (o = !1), void 0 === h && (h = !0), 
            Pool.getItemByClass("tween", t)._create(e, i, s, n, r, a, o, !0, h, !0);
        }, t.from = function(e, i, s, n, r, a, o, h) {
            return void 0 === a && (a = 0), void 0 === o && (o = !1), void 0 === h && (h = !0), 
            Pool.getItemByClass("tween", t)._create(e, i, s, n, r, a, o, !1, h, !0);
        }, t.clearAll = function(e) {
            if (e && e.$_GID) {
                var i = t.tweenMap[e.$_GID];
                if (i) {
                    for (var s = 0, n = i.length; s < n; s++) i[s]._clear();
                    i.length = 0;
                }
            }
        }, t.clear = function(t) {
            t.clear();
        }, t.clearTween = function(e) {
            t.clearAll(e);
        }, t.easeNone = function(t, e, i, s) {
            return i * t / s + e;
        }, t.tweenMap = {}, t;
    }(), Utils = function() {
        function t() {}
        return __class(t, "laya.utils.Utils"), t.toRadian = function(e) {
            return e * t._pi2;
        }, t.toAngle = function(e) {
            return e * t._pi;
        }, t.toHexColor = function(t) {
            if (t < 0 || isNaN(t)) return null;
            for (var e = t.toString(16); e.length < 6; ) e = "0" + e;
            return "#" + e;
        }, t.getGID = function() {
            return t._gid++;
        }, t.concatArray = function(t, e) {
            if (!e) return t;
            if (!t) return e;
            var i = 0, s = e.length;
            for (i = 0; i < s; i++) t.push(e[i]);
            return t;
        }, t.clearArray = function(t) {
            return t ? (t.length = 0, t) : t;
        }, t.copyArray = function(t, e) {
            if (t || (t = []), !e) return t;
            t.length = e.length;
            var i = 0, s = e.length;
            for (i = 0; i < s; i++) t[i] = e[i];
            return t;
        }, t.getGlobalRecByPoints = function(t, e, i, s, n) {
            var r;
            r = new Point(e, i), r = t.localToGlobal(r);
            var a;
            return a = new Point(s, n), a = t.localToGlobal(a), Rectangle._getWrapRec([ r.x, r.y, a.x, a.y ]);
        }, t.getGlobalPosAndScale = function(e) {
            return t.getGlobalRecByPoints(e, 0, 0, 1, 1);
        }, t.bind = function(t, e) {
            return t.bind(e);
        }, t.measureText = function(t, e) {
            return RunDriver.measureText(t, e);
        }, t.updateOrder = function(t) {
            if (!t || t.length < 2) return !1;
            for (var e, i = 1, s = 0, n = t.length, r = NaN; i < n; ) {
                for (e = t[s = i], r = t[s]._zOrder; --s > -1 && t[s]._zOrder > r; ) t[s + 1] = t[s];
                t[s + 1] = e, i++;
            }
            var a = e.parent.conchModel;
            if (a) if (null != a.updateZOrder) a.updateZOrder(); else {
                for (i = 0; i < n; i++) a.removeChild(t[i].conchModel);
                for (i = 0; i < n; i++) a.addChildAt(t[i].conchModel, i);
            }
            return !0;
        }, t.transPointList = function(t, e, i) {
            var s = 0, n = t.length;
            for (s = 0; s < n; s += 2) t[s] += e, t[s + 1] += i;
        }, t.parseInt = function(t, e) {
            void 0 === e && (e = 0);
            var i = Browser.window.parseInt(t, e);
            return isNaN(i) ? 0 : i;
        }, t.getFileExtension = function(e) {
            t._extReg.lastIndex = e.lastIndexOf(".");
            var i = t._extReg.exec(e);
            return i && i.length > 1 ? i[1].toLowerCase() : null;
        }, t.getTransformRelativeToWindow = function(t, e, i) {
            var s = Laya.stage, n = laya.utils.Utils.getGlobalPosAndScale(t), r = s._canvasTransform.clone(), a = r.tx, o = r.ty;
            r.rotate(-Math.PI / 180 * Laya.stage.canvasDegree), r.scale(Laya.stage.clientScaleX, Laya.stage.clientScaleY);
            var h = Laya.stage.canvasDegree % 180 != 0, l = NaN, u = NaN;
            h ? (l = i + n.y, u = e + n.x, l *= r.d, u *= r.a, 90 == Laya.stage.canvasDegree ? (l = a - l, 
            u += o) : (l += a, u = o - u)) : (l = e + n.x, u = i + n.y, l *= r.a, u *= r.d, 
            l += a, u += o);
            var c = NaN, _ = NaN;
            return h ? (c = r.d * n.height, _ = r.a * n.width) : (c = r.a * n.width, _ = r.d * n.height), 
            {
                x: l,
                y: u,
                scaleX: c,
                scaleY: _
            };
        }, t.fitDOMElementInArea = function(e, i, s, n, r, a) {
            e._fitLayaAirInitialized || (e._fitLayaAirInitialized = !0, e.style.transformOrigin = e.style.webKittransformOrigin = "left top", 
            e.style.position = "absolute");
            var o = t.getTransformRelativeToWindow(i, s, n);
            e.style.transform = e.style.webkitTransform = "scale(" + o.scaleX + "," + o.scaleY + ") rotate(" + Laya.stage.canvasDegree + "deg)", 
            e.style.width = r + "px", e.style.height = a + "px", e.style.left = o.x + "px", 
            e.style.top = o.y + "px";
        }, t.isOkTextureList = function(t) {
            if (!t) return !1;
            var e, i = 0, s = t.length;
            for (i = 0; i < s; i++) if (!(e = t[i]) || !e.source) return !1;
            return !0;
        }, t.isOKCmdList = function(t) {
            if (!t) return !1;
            var e, i, s = 0, n = t.length, r = Render._context;
            for (s = 0; s < n; s++) switch ((e = t[s]).callee) {
              case r._drawTexture:
              case r._fillTexture:
              case r._drawTextureWithTransform:
                if (!(i = e[0]) || !i.source) return !1;
            }
            return !0;
        }, t._gid = 1, t._pi = 180 / Math.PI, t._pi2 = Math.PI / 180, t._extReg = /\.(\w+)\??/g, 
        t.parseXMLFromString = function(t) {
            var e;
            if (t = t.replace(/>\s+</g, "><"), (e = new DOMParser().parseFromString(t, "text/xml")).firstChild.textContent.indexOf("This page contains the following errors") > -1) throw new Error(e.firstChild.firstChild.textContent);
            return e;
        }, t;
    }(), VectorGraphManager = function() {
        function t() {
            this.useDic = {}, this.shapeDic = {}, this.shapeLineDic = {}, this._id = 0, this._checkKey = !1, 
            this._freeIdArray = [], Render.isWebGL && CacheManager.regCacheByFunction(Utils.bind(this.startDispose, this), Utils.bind(this.getCacheList, this));
        }
        __class(t, "laya.utils.VectorGraphManager");
        var e = t.prototype;
        return e.getId = function() {
            return this._id++;
        }, e.addShape = function(t, e) {
            this.shapeDic[t] = e, this.useDic[t] || (this.useDic[t] = !0);
        }, e.addLine = function(t, e) {
            this.shapeLineDic[t] = e, this.shapeLineDic[t] || (this.shapeLineDic[t] = !0);
        }, e.getShape = function(t) {
            this._checkKey && null != this.useDic[t] && (this.useDic[t] = !0);
        }, e.deleteShape = function(t) {
            this.shapeDic[t] && (this.shapeDic[t] = null, delete this.shapeDic[t]), this.shapeLineDic[t] && (this.shapeLineDic[t] = null, 
            delete this.shapeLineDic[t]), null != this.useDic[t] && delete this.useDic[t];
        }, e.getCacheList = function() {
            var t, e = [];
            for (t in this.shapeDic) e.push(this.shapeDic[t]);
            for (t in this.shapeLineDic) e.push(this.shapeLineDic[t]);
            return e;
        }, e.startDispose = function(t) {
            var e;
            for (e in this.useDic) this.useDic[e] = !1;
            this._checkKey = !0;
        }, e.endDispose = function() {
            if (this._checkKey) {
                var t;
                for (t in this.useDic) this.useDic[t] || this.deleteShape(t);
                this._checkKey = !1;
            }
        }, t.getInstance = function() {
            return t.instance = t.instance || new t();
        }, t.instance = null, t;
    }(), WeakObject = function() {
        function t() {
            this._obj = null, this._obj = t.supportWeakMap ? new Browser.window.WeakMap() : {}, 
            t.supportWeakMap || t._maps.push(this);
        }
        __class(t, "laya.utils.WeakObject");
        var e = t.prototype;
        return e.set = function(e, i) {
            if (null != e) if (t.supportWeakMap) {
                var s = e;
                "string" != typeof e && "number" != typeof e || (s = t._keys[e]) || (s = t._keys[e] = {
                    k: e
                }), this._obj.set(s, i);
            } else "string" == typeof e || "number" == typeof e ? this._obj[e] = i : (e.$_GID || (e.$_GID = Utils.getGID()), 
            this._obj[e.$_GID] = i);
        }, e.get = function(e) {
            if (null == e) return null;
            if (t.supportWeakMap) {
                var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
                return i ? this._obj.get(i) : null;
            }
            return "string" == typeof e || "number" == typeof e ? this._obj[e] : this._obj[e.$_GID];
        }, e.del = function(e) {
            if (null != e) if (t.supportWeakMap) {
                var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
                if (!i) return;
                this._obj.delete(i);
            } else "string" == typeof e || "number" == typeof e ? delete this._obj[e] : delete this._obj[this._obj.$_GID];
        }, e.has = function(e) {
            if (null == e) return !1;
            if (t.supportWeakMap) {
                var i = "string" == typeof e || "number" == typeof e ? t._keys[e] : e;
                return this._obj.has(i);
            }
            return "string" == typeof e || "number" == typeof e ? null != this._obj[e] : null != this._obj[this._obj.$_GID];
        }, t.__init__ = function() {
            (t.supportWeakMap = null != Browser.window.WeakMap) || Laya.timer.loop(t.delInterval, null, t.clearCache);
        }, t.clearCache = function() {
            for (var e = 0, i = t._maps.length; e < i; e++) t._maps[e]._obj = {};
        }, t.supportWeakMap = !1, t.delInterval = 3e5, t._keys = {}, t._maps = [], __static(t, [ "I", function() {
            return this.I = new t();
        } ]), t;
    }(), WordText = function() {
        function t() {
            this.id = NaN, this.save = [], this.toUpperCase = null, this.changed = !1, this._text = null;
        }
        __class(t, "laya.utils.WordText");
        var e = t.prototype;
        return e.setText = function(t) {
            this.changed = !0, this._text = t;
        }, e.toString = function() {
            return this._text;
        }, e.charCodeAt = function(t) {
            return this._text ? this._text.charCodeAt(t) : NaN;
        }, e.charAt = function(t) {
            return this._text ? this._text.charAt(t) : null;
        }, __getset(0, e, "length", function() {
            return this._text ? this._text.length : 0;
        }), t;
    }(), Node = function(t) {
        function e() {
            this._bits = 0, this._displayedInStage = !1, this._parent = null, this.conchModel = null, 
            this.name = "", this._destroyed = !1, e.__super.call(this), this._childs = e.ARRAY_EMPTY, 
            this._$P = e.PROP_EMPTY, this.timer = Laya.scaleTimer, this.conchModel = Render.isConchNode ? this.createConchModel() : null;
        }
        __class(e, "laya.display.Node", EventDispatcher);
        var i = e.prototype;
        return i._setBit = function(t, e) {
            1 == t && this._getBit(t) != e && this._updateDisplayedInstage(), e ? this._bits |= t : this._bits &= ~t;
        }, i._getBit = function(t) {
            return 0 != (this._bits & t);
        }, i._setUpNoticeChain = function() {
            this._getBit(1) && this._setUpNoticeType(1);
        }, i._setUpNoticeType = function(t) {
            var e = this;
            for (e._setBit(t, !0), e = e.parent; e; ) {
                if (e._getBit(t)) return;
                e._setBit(t, !0), e = e.parent;
            }
        }, i.on = function(t, e, i, s) {
            return "display" !== t && "undisplay" !== t || this._getBit(1) || this._setUpNoticeType(1), 
            this._createListener(t, e, i, s, !1);
        }, i.once = function(t, e, i, s) {
            return "display" !== t && "undisplay" !== t || this._getBit(1) || this._setUpNoticeType(1), 
            this._createListener(t, e, i, s, !0);
        }, i.createConchModel = function() {
            return null;
        }, i.destroy = function(t) {
            void 0 === t && (t = !0), this._destroyed = !0, this._parent && this._parent.removeChild(this), 
            this._childs && (t ? this.destroyChildren() : this.removeChildren()), this._childs = null, 
            this._$P = null, this.offAll(), this.timer.clearAll(this);
        }, i.destroyChildren = function() {
            if (this._childs) for (var t = this._childs.length - 1; t > -1; t--) this._childs[t].destroy(!0);
        }, i.addChild = function(t) {
            if (!t || this.destroyed || t === this) return t;
            if (t.zOrder && this._set$P("hasZorder", !0), t._parent === this) {
                var i = this.getChildIndex(t);
                i !== this._childs.length - 1 && (this._childs.splice(i, 1), this._childs.push(t), 
                this.conchModel && (this.conchModel.removeChild(t.conchModel), this.conchModel.addChildAt(t.conchModel, this._childs.length - 1)), 
                this._childChanged());
            } else t.parent && t.parent.removeChild(t), this._childs === e.ARRAY_EMPTY && (this._childs = []), 
            this._childs.push(t), this.conchModel && this.conchModel.addChildAt(t.conchModel, this._childs.length - 1), 
            t.parent = this, this._childChanged();
            return t;
        }, i.addChildren = function(t) {
            for (var e = arguments, i = 0, s = e.length; i < s; ) this.addChild(e[i++]);
        }, i.addChildAt = function(t, i) {
            if (!t || this.destroyed || t === this) return t;
            if (t.zOrder && this._set$P("hasZorder", !0), i >= 0 && i <= this._childs.length) {
                if (t._parent === this) {
                    var s = this.getChildIndex(t);
                    this._childs.splice(s, 1), this._childs.splice(i, 0, t), this.conchModel && (this.conchModel.removeChild(t.conchModel), 
                    this.conchModel.addChildAt(t.conchModel, i)), this._childChanged();
                } else t.parent && t.parent.removeChild(t), this._childs === e.ARRAY_EMPTY && (this._childs = []), 
                this._childs.splice(i, 0, t), this.conchModel && this.conchModel.addChildAt(t.conchModel, i), 
                t.parent = this;
                return t;
            }
            throw new Error("appendChildAt:The index is out of bounds");
        }, i.getChildIndex = function(t) {
            return this._childs.indexOf(t);
        }, i.getChildByName = function(t) {
            var e = this._childs;
            if (e) for (var i = 0, s = e.length; i < s; i++) {
                var n = e[i];
                if (n.name === t) return n;
            }
            return null;
        }, i._get$P = function(t) {
            return this._$P[t];
        }, i._set$P = function(t, i) {
            return this.destroyed || (this._$P === e.PROP_EMPTY && (this._$P = {}), this._$P[t] = i), 
            i;
        }, i.getChildAt = function(t) {
            return this._childs[t];
        }, i.setChildIndex = function(t, e) {
            var i = this._childs;
            if (e < 0 || e >= i.length) throw new Error("setChildIndex:The index is out of bounds.");
            var s = this.getChildIndex(t);
            if (s < 0) throw new Error("setChildIndex:node is must child of this object.");
            return i.splice(s, 1), i.splice(e, 0, t), this.conchModel && (this.conchModel.removeChild(t.conchModel), 
            this.conchModel.addChildAt(t.conchModel, e)), this._childChanged(), t;
        }, i._childChanged = function(t) {}, i.removeChild = function(t) {
            if (!this._childs) return t;
            var e = this._childs.indexOf(t);
            return this.removeChildAt(e);
        }, i.removeSelf = function() {
            return this._parent && this._parent.removeChild(this), this;
        }, i.removeChildByName = function(t) {
            var e = this.getChildByName(t);
            return e && this.removeChild(e), e;
        }, i.removeChildAt = function(t) {
            var e = this.getChildAt(t);
            return e && (this._childs.splice(t, 1), this.conchModel && this.conchModel.removeChild(e.conchModel), 
            e.parent = null), e;
        }, i.removeChildren = function(t, i) {
            if (void 0 === t && (t = 0), void 0 === i && (i = 2147483647), this._childs && this._childs.length > 0) {
                var s = this._childs;
                if (0 === t && i >= a) {
                    var n = s;
                    this._childs = e.ARRAY_EMPTY;
                } else n = s.splice(t, i - t);
                for (var r = 0, a = n.length; r < a; r++) n[r].parent = null, this.conchModel && this.conchModel.removeChild(n[r].conchModel);
            }
            return this;
        }, i.replaceChild = function(t, e) {
            var i = this._childs.indexOf(e);
            return i > -1 ? (this._childs.splice(i, 1, t), this.conchModel && (this.conchModel.removeChild(e.conchModel), 
            this.conchModel.addChildAt(t.conchModel, i)), e.parent = null, t.parent = this, 
            t) : null;
        }, i._updateDisplayedInstage = function() {
            var t;
            t = this;
            var e = Laya.stage;
            for (this._displayedInStage = !1; t; ) {
                if (t._getBit(1)) {
                    this._displayedInStage = t._displayedInStage;
                    break;
                }
                if (t == e || t._displayedInStage) {
                    this._displayedInStage = !0;
                    break;
                }
                t = t.parent;
            }
        }, i._setDisplay = function(t) {
            this._displayedInStage !== t && (this._displayedInStage = t, t ? this.event("display") : this.event("undisplay"));
        }, i._displayChild = function(t, e) {
            var i = t._childs;
            if (i) for (var s = 0, n = i.length; s < n; s++) {
                var r = i[s];
                r._getBit(1) && (r._childs.length > 0 ? this._displayChild(r, e) : r._setDisplay(e));
            }
            t._setDisplay(e);
        }, i.contains = function(t) {
            if (t === this) return !0;
            for (;t; ) {
                if (t.parent === this) return !0;
                t = t.parent;
            }
            return !1;
        }, i.timerLoop = function(t, e, i, s, n, r) {
            void 0 === n && (n = !0), void 0 === r && (r = !1), this.timer.loop(t, e, i, s, n, r);
        }, i.timerOnce = function(t, e, i, s, n) {
            void 0 === n && (n = !0), this.timer._create(!1, !1, t, e, i, s, n);
        }, i.frameLoop = function(t, e, i, s, n) {
            void 0 === n && (n = !0), this.timer._create(!0, !0, t, e, i, s, n);
        }, i.frameOnce = function(t, e, i, s, n) {
            void 0 === n && (n = !0), this.timer._create(!0, !1, t, e, i, s, n);
        }, i.clearTimer = function(t, e) {
            this.timer.clear(t, e);
        }, __getset(0, i, "numChildren", function() {
            return this._childs.length;
        }), __getset(0, i, "destroyed", function() {
            return this._destroyed;
        }), __getset(0, i, "parent", function() {
            return this._parent;
        }, function(t) {
            this._parent !== t && (t ? (this._parent = t, this.event("added"), this._getBit(1) && (this._setUpNoticeChain(), 
            t.displayedInStage && this._displayChild(this, !0)), t._childChanged(this)) : (this.event("removed"), 
            this._parent._childChanged(), this._getBit(1) && this._displayChild(this, !1), this._parent = t));
        }), __getset(0, i, "displayedInStage", function() {
            return this._getBit(1) ? this._displayedInStage : (this._setUpNoticeType(1), this._displayedInStage);
        }), e.ARRAY_EMPTY = [], e.PROP_EMPTY = {}, e.NOTICE_DISPLAY = 1, e.MOUSEENABLE = 2, 
        e;
    }(), CSSStyle = function(t) {
        function e(t) {
            this._bgground = null, this._border = null, this._rect = null, this.underLine = 0, 
            this.lineHeight = 0, e.__super.call(this), this._padding = e._PADDING, this._spacing = e._SPACING, 
            this._aligns = e._ALIGNS, this._font = Font.EMPTY, this._ower = t;
        }
        __class(e, "laya.display.css.CSSStyle", t);
        var i = e.prototype;
        return i.destroy = function() {
            this._ower = null, this._font = null, this._rect = null;
        }, i.inherit = function(t) {
            this._font = t._font, this._spacing = t._spacing === e._SPACING ? e._SPACING : t._spacing.slice(), 
            this.lineHeight = t.lineHeight;
        }, i._widthAuto = function() {
            return 0 != (262144 & this._type);
        }, i.widthed = function(t) {
            return 0 != (8 & this._type);
        }, i._calculation = function(t, e) {
            function i(t, e, i) {
                return t * i[0] + e * i[1] + i[2];
            }
            function s(t) {
                var e = r.width, s = n.width;
                a.width && (n.width = i(e, s, a.width)), a.height && (n.height = i(e, s, a.height)), 
                a.left && (n.x = i(e, s, a.left)), a.top && (n.y = i(e, s, a.top));
            }
            if (e.indexOf("%") < 0) return !1;
            var n = this._ower, r = n.parent, a = this._rect;
            null === a && (r._getCSSStyle()._type |= 524288, r.on("resize", this, s), this._rect = a = {
                input: {}
            });
            var o = e.split(" ");
            return o[0] = parseFloat(o[0]) / 100, 1 == o.length ? o[1] = o[2] = 0 : (o[1] = parseFloat(o[1]) / 100, 
            o[2] = parseFloat(o[2])), a[t] = o, a.input[t] = e, s(), !0;
        }, i.heighted = function(t) {
            return 0 != (8192 & this._type);
        }, i.size = function(t, e) {
            var i = this._ower, s = !1;
            -1 !== t && t != this._ower.width && (this._type |= 8, this._ower.width = t, s = !0), 
            -1 !== e && e != this._ower.height && (this._type |= 8192, this._ower.height = e, 
            s = !0), s && (i._layoutLater(), 524288 & this._type && i.event("resize", this));
        }, i._getAlign = function() {
            return this._aligns[0];
        }, i._getValign = function() {
            return this._aligns[1];
        }, i._getCssFloat = function() {
            return 0 != (32768 & this._type) ? 32768 : 0;
        }, i._createFont = function() {
            return 4096 & this._type ? this._font : (this._type |= 4096, this._font = new Font(this._font));
        }, i.render = function(t, e, i, s) {
            var n = t.width, r = t.height;
            i -= t.pivotX, s -= t.pivotY, this._bgground && null != this._bgground.color && e.ctx.fillRect(i, s, n, r, this._bgground.color), 
            this._border && this._border.color && e.drawRect(i, s, n, r, this._border.color.strColor, this._border.size);
        }, i.getCSSStyle = function() {
            return this;
        }, i.cssText = function(t) {
            this.attrs(e.parseOneCSS(t, ";"));
        }, i.attrs = function(t) {
            if (t) for (var e = 0, i = t.length; e < i; e++) {
                var s = t[e];
                this[s[0]] = s[1];
            }
        }, i.setTransform = function(t) {
            "none" === t ? this._tf = Style._TF_EMPTY : this.attrs(e.parseOneCSS(t, ","));
        }, i.translate = function(t, e) {
            this._tf === Style._TF_EMPTY && (this._tf = new TransformInfo()), this._tf.translateX = t, 
            this._tf.translateY = e;
        }, i.scale = function(t, e) {
            this._tf === Style._TF_EMPTY && (this._tf = new TransformInfo()), this._tf.scaleX = t, 
            this._tf.scaleY = e;
        }, i._enableLayout = function() {
            return 0 == (2 & this._type) && 0 == (4 & this._type);
        }, __getset(0, i, "block", t.prototype._$get_block, function(t) {
            t ? this._type |= 1 : this._type &= -2;
        }), __getset(0, i, "valign", function() {
            return e._valigndef[this._aligns[1]];
        }, function(t) {
            this._aligns === e._ALIGNS && (this._aligns = [ 0, 0, 0 ]), this._aligns[1] = e._valigndef[t];
        }), __getset(0, i, "height", null, function(t) {
            if (this._type |= 8192, "string" == typeof t) {
                if (this._calculation("height", t)) return;
                t = parseInt(t);
            }
            this.size(-1, t);
        }), __getset(0, i, "width", null, function(t) {
            if (this._type |= 8, "string" == typeof t) {
                var e = t.indexOf("auto");
                if (e >= 0 && (this._type |= 262144, t = t.substr(0, e)), this._calculation("width", t)) return;
                t = parseInt(t);
            }
            this.size(t, -1);
        }), __getset(0, i, "fontWeight", function() {
            return this._font.weight;
        }, function(t) {
            this._createFont().weight = t;
        }), __getset(0, i, "left", null, function(t) {
            var e = this._ower;
            if ("string" == typeof t) {
                if ("center" === t ? t = "50% -50% 0" : "right" === t && (t = "100% -100% 0"), this._calculation("left", t)) return;
                t = parseInt(t);
            }
            e.x = t;
        }), __getset(0, i, "_translate", null, function(t) {
            this.translate(t[0], t[1]);
        }), __getset(0, i, "absolute", function() {
            return 0 != (4 & this._type);
        }), __getset(0, i, "top", null, function(t) {
            var e = this._ower;
            if ("string" == typeof t) {
                if ("middle" === t ? t = "50% -50% 0" : "bottom" === t && (t = "100% -100% 0"), 
                this._calculation("top", t)) return;
                t = parseInt(t);
            }
            e.y = t;
        }), __getset(0, i, "align", function() {
            return e._aligndef[this._aligns[0]];
        }, function(t) {
            this._aligns === e._ALIGNS && (this._aligns = [ 0, 0, 0 ]), this._aligns[0] = e._aligndef[t];
        }), __getset(0, i, "bold", function() {
            return this._font.bold;
        }, function(t) {
            this._createFont().bold = t;
        }), __getset(0, i, "padding", function() {
            return this._padding;
        }, function(t) {
            this._padding = t;
        }), __getset(0, i, "leading", function() {
            return this._spacing[1];
        }, function(t) {
            "string" == typeof t && (t = parseInt(t + "")), this._spacing === e._SPACING && (this._spacing = [ 0, 0 ]), 
            this._spacing[1] = t;
        }), __getset(0, i, "lineElement", function() {
            return 0 != (65536 & this._type);
        }, function(t) {
            t ? this._type |= 65536 : this._type &= -65537;
        }), __getset(0, i, "cssFloat", function() {
            return 0 != (32768 & this._type) ? "right" : "left";
        }, function(t) {
            this.lineElement = !1, "right" === t ? this._type |= 32768 : this._type &= -32769;
        }), __getset(0, i, "textDecoration", function() {
            return this._font.decoration;
        }, function(t) {
            this._createFont().decoration = t;
        }), __getset(0, i, "whiteSpace", function() {
            return 131072 & this._type ? "nowrap" : "";
        }, function(t) {
            "nowrap" === t && (this._type |= 131072), "none" === t && (this._type &= -131073);
        }), __getset(0, i, "background", null, function(t) {
            t ? (this._bgground || (this._bgground = {}), this._bgground.color = t, this._ower.conchModel && this._ower.conchModel.bgColor(t), 
            this._type |= 16384, this._ower._renderType |= 256) : this._bgground = null;
        }), __getset(0, i, "wordWrap", function() {
            return 0 == (131072 & this._type);
        }, function(t) {
            t ? this._type &= -131073 : this._type |= 131072;
        }), __getset(0, i, "color", function() {
            return this._font.color;
        }, function(t) {
            this._createFont().color = t;
        }), __getset(0, i, "password", function() {
            return this._font.password;
        }, function(t) {
            this._createFont().password = t;
        }), __getset(0, i, "backgroundColor", function() {
            return this._bgground ? this._bgground.color : null;
        }, function(t) {
            "none" === t ? this._bgground = null : (this._bgground || (this._bgground = {}), 
            this._bgground.color = t), this._ower.conchModel && this._ower.conchModel.bgColor(t), 
            this._ower._renderType |= 256;
        }), __getset(0, i, "font", function() {
            return this._font.toString();
        }, function(t) {
            this._createFont().set(t);
        }), __getset(0, i, "weight", null, function(t) {
            this._createFont().weight = t;
        }), __getset(0, i, "letterSpacing", function() {
            return this._spacing[0];
        }, function(t) {
            "string" == typeof t && (t = parseInt(t + "")), this._spacing === e._SPACING && (this._spacing = [ 0, 0 ]), 
            this._spacing[0] = t;
        }), __getset(0, i, "fontSize", function() {
            return this._font.size;
        }, function(t) {
            this._createFont().size = t;
        }), __getset(0, i, "italic", function() {
            return this._font.italic;
        }, function(t) {
            this._createFont().italic = t;
        }), __getset(0, i, "fontFamily", function() {
            return this._font.family;
        }, function(t) {
            this._createFont().family = t;
        }), __getset(0, i, "stroke", function() {
            return this._font.stroke[0];
        }, function(t) {
            this._createFont().stroke === Font._STROKE && (this._font.stroke = [ 0, "#000000" ]), 
            this._font.stroke[0] = t;
        }), __getset(0, i, "strokeColor", function() {
            return this._font.stroke[1];
        }, function(t) {
            this._createFont().stroke === Font._STROKE && (this._font.stroke = [ 0, "#000000" ]), 
            this._font.stroke[1] = t;
        }), __getset(0, i, "border", function() {
            return this._border ? this._border.value : "";
        }, function(t) {
            if ("none" != t) {
                this._border || (this._border = {}), this._border.value = t;
                var e = t.split(" ");
                if (this._border.color = Color.create(e[e.length - 1]), 1 == e.length) return this._border.size = 1, 
                void (this._border.type = "solid");
                var i = 0;
                e[0].indexOf("px") > 0 ? (this._border.size = parseInt(e[0]), i++) : this._border.size = 1, 
                this._border.type = e[i], this._ower._renderType |= 256;
            } else this._border = null;
        }), __getset(0, i, "borderColor", function() {
            return this._border && this._border.color ? this._border.color.strColor : null;
        }, function(t) {
            t ? (this._border || (this._border = {
                size: 1,
                type: "solid"
            }), this._border.color = null == t ? null : Color.create(t), this._ower.conchModel && this._ower.conchModel.border(this._border.color.strColor), 
            this._ower._renderType |= 256) : this._border = null;
        }), __getset(0, i, "position", function() {
            return 4 & this._type ? "absolute" : "";
        }, function(t) {
            "absolute" == t ? this._type |= 4 : this._type &= -5;
        }), __getset(0, i, "display", null, function(t) {
            switch (t) {
              case "":
                this._type &= -3, this.visible = !0;
                break;

              case "none":
                this._type |= 2, this.visible = !1, this._ower._layoutLater();
            }
        }), __getset(0, i, "paddingLeft", function() {
            return this.padding[3];
        }), __getset(0, i, "paddingTop", function() {
            return this.padding[0];
        }), __getset(0, i, "_scale", null, function(t) {
            this._ower.scale(t[0], t[1]);
        }), __getset(0, i, "_rotate", null, function(t) {
            this._ower.rotation = t;
        }), e.parseOneCSS = function(t, i) {
            for (var s, n = [], r = t.split(i), a = 0, o = r.length; a < o; a++) {
                var h = r[a], l = h.indexOf(":"), u = h.substr(0, l).replace(/^\s+|\s+$/g, "");
                if (0 != u.length) {
                    var c = h.substr(l + 1).replace(/^\s+|\s+$/g, ""), _ = [ u, c ];
                    switch (u) {
                      case "italic":
                      case "bold":
                        _[1] = "true" == c;
                        break;

                      case "line-height":
                        _[0] = "lineHeight", _[1] = parseInt(c);
                        break;

                      case "font-size":
                        _[0] = "fontSize", _[1] = parseInt(c);
                        break;

                      case "padding":
                        (s = c.split(" ")).length > 1 || (s[1] = s[2] = s[3] = s[0]), _[1] = [ parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3]) ];
                        break;

                      case "rotate":
                        _[0] = "_rotate", _[1] = parseFloat(c);
                        break;

                      case "scale":
                        s = c.split(" "), _[0] = "_scale", _[1] = [ parseFloat(s[0]), parseFloat(s[1]) ];
                        break;

                      case "translate":
                        s = c.split(" "), _[0] = "_translate", _[1] = [ parseInt(s[0]), parseInt(s[1]) ];
                        break;

                      default:
                        (_[0] = e._CSSTOVALUE[u]) || (_[0] = u);
                    }
                    n.push(_);
                }
            }
            return n;
        }, e.parseCSS = function(t, i) {
            for (var s; null != (s = e._parseCSSRegExp.exec(t)); ) e.styleSheets[s[1]] = e.parseOneCSS(s[2], ";");
        }, e.EMPTY = new e(null), e._CSSTOVALUE = {
            "letter-spacing": "letterSpacing",
            "line-spacing": "lineSpacing",
            "white-space": "whiteSpace",
            "line-height": "lineHeight",
            "scale-x": "scaleX",
            "scale-y": "scaleY",
            "translate-x": "translateX",
            "translate-y": "translateY",
            "font-family": "fontFamily",
            "font-weight": "fontWeight",
            "vertical-align": "valign",
            "text-decoration": "textDecoration",
            "background-color": "backgroundColor",
            "border-color": "borderColor",
            float: "cssFloat"
        }, e._parseCSSRegExp = new RegExp("([.#]\\w+)\\s*{([\\s\\S]*?)}", "g"), e._aligndef = {
            left: 0,
            center: 1,
            right: 2,
            0: "left",
            1: "center",
            2: "right"
        }, e._valigndef = {
            top: 0,
            middle: 1,
            bottom: 2,
            0: "top",
            1: "middle",
            2: "bottom"
        }, e.styleSheets = {}, e.ALIGN_CENTER = 1, e.ALIGN_RIGHT = 2, e.VALIGN_MIDDLE = 1, 
        e.VALIGN_BOTTOM = 2, e._CSS_BLOCK = 1, e._DISPLAY_NONE = 2, e._ABSOLUTE = 4, e._WIDTH_SET = 8, 
        e._PADDING = [ 0, 0, 0, 0 ], e._RECT = [ -1, -1, -1, -1 ], e._SPACING = [ 0, 0 ], 
        e._ALIGNS = [ 0, 0, 0 ], e.ADDLAYOUTED = 512, e._NEWFONT = 4096, e._HEIGHT_SET = 8192, 
        e._BACKGROUND_SET = 16384, e._FLOAT_RIGHT = 32768, e._LINE_ELEMENT = 65536, e._NOWARP = 131072, 
        e._WIDTHAUTO = 262144, e._LISTERRESZIE = 524288, e;
    }(Style), AudioSound = function(t) {
        function e() {
            this.url = null, this.audio = null, this.loaded = !1, e.__super.call(this);
        }
        __class(e, "laya.media.h5audio.AudioSound", EventDispatcher);
        var i = e.prototype;
        return i.dispose = function() {
            var t = e._audioCache[this.url];
            t && (t.src = "", delete e._audioCache[this.url]);
        }, i.load = function(t) {
            function i() {
                n(), a.loaded = !0, a.event("complete");
            }
            function s() {
                r.load = null, n(), a.event("error");
            }
            function n() {
                r.removeEventListener("canplaythrough", i), r.removeEventListener("error", s);
            }
            t = URL.formatURL(t), this.url = t;
            var r;
            if (t == SoundManager._tMusic ? (e._initMusicAudio(), (r = e._musicAudio).src != t && (e._audioCache[r.src] = null, 
            r = null)) : r = e._audioCache[t], r && r.readyState >= 2) this.event("complete"); else {
                r || (t == SoundManager._tMusic ? (e._initMusicAudio(), r = e._musicAudio) : r = Browser.createElement("audio"), 
                e._audioCache[t] = r, r.src = t), r.addEventListener("canplaythrough", i), r.addEventListener("error", s);
                var a = this;
                this.audio = r, r.load ? r.load() : s();
            }
        }, i.play = function(t, i) {
            if (void 0 === t && (t = 0), void 0 === i && (i = 0), !this.url) return null;
            var s;
            if (!(s = this.url == SoundManager._tMusic ? e._musicAudio : e._audioCache[this.url])) return null;
            var n;
            n = Pool.getItem("audio:" + this.url), Render.isConchApp ? n || ((n = Browser.createElement("audio")).src = this.url) : this.url == SoundManager._tMusic ? (e._initMusicAudio(), 
            (n = e._musicAudio).src = this.url) : n = n || s.cloneNode(!0);
            var r = new AudioSoundChannel(n);
            return r.url = this.url, r.loops = i, r.startTime = t, r.play(), SoundManager.addChannel(r), 
            r;
        }, __getset(0, i, "duration", function() {
            var t;
            return (t = e._audioCache[this.url]) ? t.duration : 0;
        }), e._initMusicAudio = function() {
            e._musicAudio || (e._musicAudio || (e._musicAudio = Browser.createElement("audio")), 
            Render.isConchApp || Browser.document.addEventListener("mousedown", e._makeMusicOK));
        }, e._makeMusicOK = function() {
            Browser.document.removeEventListener("mousedown", e._makeMusicOK), e._musicAudio.src ? e._musicAudio.play() : (e._musicAudio.src = "", 
            e._musicAudio.load());
        }, e._audioCache = {}, e._musicAudio = null, e;
    }(), SoundChannel = function(t) {
        function e() {
            this.url = null, this.loops = 0, this.startTime = NaN, this.isStopped = !1, this.completeHandler = null, 
            e.__super.call(this);
        }
        __class(e, "laya.media.SoundChannel", EventDispatcher);
        var i = e.prototype;
        return i.play = function() {}, i.stop = function() {}, i.pause = function() {}, 
        i.resume = function() {}, i.__runComplete = function(t) {
            t && t.run();
        }, __getset(0, i, "volume", function() {
            return 1;
        }, function(t) {}), __getset(0, i, "position", function() {
            return 0;
        }), __getset(0, i, "duration", function() {
            return 0;
        }), e;
    }(), Sound = function(t) {
        function e() {
            e.__super.call(this);
        }
        __class(e, "laya.media.Sound", EventDispatcher);
        var i = e.prototype;
        return i.load = function(t) {}, i.play = function(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), null;
        }, i.dispose = function() {}, __getset(0, i, "duration", function() {
            return 0;
        }), e;
    }(), WebAudioSound = function(t) {
        function e() {
            this.url = null, this.loaded = !1, this.data = null, this.audioBuffer = null, this.__toPlays = null, 
            e.__super.call(this);
        }
        __class(e, "laya.media.webaudio.WebAudioSound", EventDispatcher);
        var i = e.prototype;
        return i.load = function(t) {
            var i = this;
            if (t = URL.formatURL(t), this.url = t, this.audioBuffer = e._dataCache[t], this.audioBuffer) this._loaded(this.audioBuffer); else if (e.e.on("loaded:" + t, this, this._loaded), 
            e.e.on("err:" + t, this, this._err), !e.__loadingSound[t]) {
                e.__loadingSound[t] = !0;
                var s = new Browser.window.XMLHttpRequest();
                s.open("GET", t, !0), s.responseType = "arraybuffer", s.onload = function() {
                    i.data = s.response, e.buffs.push({
                        buffer: i.data,
                        url: i.url
                    }), e.decode();
                }, s.onerror = function(t) {
                    i._err();
                }, s.send();
            }
        }, i._err = function() {
            this._removeLoadEvents(), e.__loadingSound[this.url] = !1, this.event("error");
        }, i._loaded = function(t) {
            this._removeLoadEvents(), this.audioBuffer = t, e._dataCache[this.url] = this.audioBuffer, 
            this.loaded = !0, this.event("complete");
        }, i._removeLoadEvents = function() {
            e.e.off("loaded:" + this.url, this, this._loaded), e.e.off("err:" + this.url, this, this._err);
        }, i.__playAfterLoaded = function() {
            if (this.__toPlays) {
                var t, e = 0, i = 0;
                i = (t = this.__toPlays).length;
                var s;
                for (e = 0; e < i; e++) (s = t[e])[2] && !s[2].isStopped && this.play(s[0], s[1], s[2]);
                this.__toPlays.length = 0;
            }
        }, i.play = function(t, e, i) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), i = i || new WebAudioSoundChannel(), 
            this.audioBuffer || this.url && (this.__toPlays || (this.__toPlays = []), this.__toPlays.push([ t, e, i ]), 
            this.once("complete", this, this.__playAfterLoaded), this.load(this.url)), i.url = this.url, 
            i.loops = e, i.audioBuffer = this.audioBuffer, i.startTime = t, i.play(), SoundManager.addChannel(i), 
            i;
        }, i.dispose = function() {
            delete e._dataCache[this.url], delete e.__loadingSound[this.url], this.audioBuffer = null, 
            this.data = null, this.__toPlays = [];
        }, __getset(0, i, "duration", function() {
            return this.audioBuffer ? this.audioBuffer.duration : 0;
        }), e.decode = function() {
            e.buffs.length <= 0 || e.isDecoding || (e.isDecoding = !0, e.tInfo = e.buffs.shift(), 
            e.ctx.decodeAudioData(e.tInfo.buffer, e._done, e._fail));
        }, e._done = function(t) {
            e.e.event("loaded:" + e.tInfo.url, t), e.isDecoding = !1, e.decode();
        }, e._fail = function() {
            e.e.event("err:" + e.tInfo.url, null), e.isDecoding = !1, e.decode();
        }, e._playEmptySound = function() {
            if (null != e.ctx) {
                var t = e.ctx.createBufferSource();
                t.buffer = e._miniBuffer, t.connect(e.ctx.destination), t.start(0, 0, 0);
            }
        }, e._unlock = function() {
            e._unlocked || (e._playEmptySound(), "running" == e.ctx.state && (Browser.document.removeEventListener("mousedown", e._unlock, !0), 
            Browser.document.removeEventListener("touchend", e._unlock, !0), e._unlocked = !0));
        }, e.initWebAudio = function() {
            "running" != e.ctx.state && (e._unlock(), Browser.document.addEventListener("mousedown", e._unlock, !0), 
            Browser.document.addEventListener("touchend", e._unlock, !0));
        }, e._dataCache = {}, e.buffs = [], e.isDecoding = !1, e._unlocked = !1, e.tInfo = null, 
        e.__loadingSound = {}, __static(e, [ "window", function() {
            return this.window = Browser.window;
        }, "webAudioEnabled", function() {
            return this.webAudioEnabled = e.window.AudioContext || e.window.webkitAudioContext || e.window.mozAudioContext;
        }, "ctx", function() {
            return this.ctx = e.webAudioEnabled ? new (e.window.AudioContext || e.window.webkitAudioContext || e.window.mozAudioContext)() : void 0;
        }, "_miniBuffer", function() {
            return this._miniBuffer = e.ctx.createBuffer(1, 1, 22050);
        }, "e", function() {
            return this.e = new EventDispatcher();
        } ]), e;
    }(), HttpRequest = function(t) {
        function e() {
            this._responseType = null, this._data = null, e.__super.call(this), this._http = new Browser.window.XMLHttpRequest();
        }
        __class(e, "laya.net.HttpRequest", EventDispatcher);
        var i = e.prototype;
        return i.send = function(t, e, i, s, n) {
            void 0 === i && (i = "get"), void 0 === s && (s = "text"), this._responseType = s, 
            this._data = null;
            var r = this, a = this._http;
            if (a.open(i, t, !0), n) for (var o = 0; o < n.length; o++) a.setRequestHeader(n[o++], n[o]); else Render.isConchApp || (e && "string" != typeof e ? a.setRequestHeader("Content-Type", "application/json") : a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
            a.responseType = "arraybuffer" !== s ? "text" : "arraybuffer", a.onerror = function(t) {
                r._onError(t);
            }, a.onabort = function(t) {
                r._onAbort(t);
            }, a.onprogress = function(t) {
                r._onProgress(t);
            }, a.onload = function(t) {
                r._onLoad(t);
            }, a.send(e);
        }, i._onProgress = function(t) {
            t && t.lengthComputable && this.event("progress", t.loaded / t.total);
        }, i._onAbort = function(t) {
            this.error("Request was aborted by user");
        }, i._onError = function(t) {
            this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
        }, i._onLoad = function(t) {
            var e = this._http, i = void 0 !== e.status ? e.status : 200;
            200 === i || 204 === i || 0 === i ? this.complete() : this.error("[" + e.status + "]" + e.statusText + ":" + e.responseURL);
        }, i.error = function(t) {
            this.clear(), this.event("error", t);
        }, i.complete = function() {
            this.clear();
            var t = !0;
            try {
                "json" === this._responseType ? this._data = JSON.parse(this._http.responseText) : "xml" === this._responseType ? this._data = Utils.parseXMLFromString(this._http.responseText) : this._data = this._http.response || this._http.responseText;
            } catch (e) {
                t = !1, this.error(e.message);
            }
            t && this.event("complete", this._data instanceof Array ? [ this._data ] : this._data);
        }, i.clear = function() {
            var t = this._http;
            t.onerror = t.onabort = t.onprogress = t.onload = null;
        }, __getset(0, i, "url", function() {
            return this._http.responseURL;
        }), __getset(0, i, "http", function() {
            return this._http;
        }), __getset(0, i, "data", function() {
            return this._data;
        }), e;
    }(), Loader = function(t) {
        function e() {
            this._data = null, this._class = null, this._url = null, this._type = null, this._cache = !1, 
            this._http = null, this._customParse = !1, e.__super.call(this);
        }
        __class(e, "laya.net.Loader", EventDispatcher);
        var i = e.prototype;
        return i.load = function(t, i, s, n, r) {
            if (void 0 === s && (s = !0), void 0 === r && (r = !1), this._url = t, 0 === t.indexOf("data:image") ? this._type = i = "image" : (this._type = i || (i = this.getTypeFromUrl(t)), 
            t = URL.formatURL(t)), this._cache = s, this._data = null, !r && e.loadedMap[t]) return this._data = e.loadedMap[t], 
            this.event("progress", 1), void this.event("complete", this._data);
            if (n && e.setGroup(t, n), null != e.parserMap[i]) return this._customParse = !0, 
            void (e.parserMap[i] instanceof laya.utils.Handler ? e.parserMap[i].runWith(this) : e.parserMap[i].call(null, this));
            if ("image" === i || "htmlimage" === i || "nativeimage" === i) return this._loadImage(t);
            if ("sound" === i) return this._loadSound(t);
            if ("ttf" === i) return this._loadTTF(t);
            if ("atlas" == i && e.preLoadedAtlasConfigMap[t]) return this.onLoaded(e.preLoadedAtlasConfigMap[t]), 
            void delete e.preLoadedAtlasConfigMap[t];
            this._http || (this._http = new HttpRequest(), this._http.on("progress", this, this.onProgress), 
            this._http.on("error", this, this.onError), this._http.on("complete", this, this.onLoaded));
            var a;
            switch (i) {
              case "atlas":
                a = "json";
                break;

              case "font":
                a = "xml";
                break;

              case "pkm":
                a = "arraybuffer";
                break;

              default:
                a = i;
            }
            this._http.send(t, null, "get", a);
        }, i.getTypeFromUrl = function(t) {
            var i = Utils.getFileExtension(t);
            return i ? e.typeMap[i] : (console.warn("Not recognize the resources suffix", t), 
            "text");
        }, i._loadTTF = function(t) {
            t = URL.formatURL(t);
            var e = new TTFLoader();
            e.complete = Handler.create(this, this.onLoaded), e.load(t);
        }, i._loadImage = function(t) {
            function i() {
                s.onload = null, s.onerror = null, delete e.imgCache[t];
            }
            t = URL.formatURL(t);
            var s, n = this, r = function() {
                i(), n.onLoaded(s);
            }, a = function() {
                i(), n.event("error", "Load image failed");
            };
            "nativeimage" === this._type ? ((s = new Browser.window.Image()).crossOrigin = "", 
            s.onload = r, s.onerror = a, s.src = t, e.imgCache[t] = s) : new HTMLImage.create(t, {
                onload: r,
                onerror: a,
                onCreate: function(i) {
                    s = i, e.imgCache[t] = i;
                }
            });
        }, i._loadSound = function(t) {
            function e() {
                i.offAll();
            }
            var i = new SoundManager._soundClass(), s = this;
            i.on("complete", this, function() {
                e(), s.onLoaded(i);
            }), i.on("error", this, function() {
                e(), i.dispose(), s.event("error", "Load sound failed");
            }), i.load(t);
        }, i.onProgress = function(t) {
            "atlas" === this._type ? this.event("progress", .3 * t) : this.event("progress", t);
        }, i.onError = function(t) {
            this.event("error", t);
        }, i.onLoaded = function(t) {
            var i = this._type;
            if ("image" === i) {
                var s = new Texture(t);
                s.url = this._url, this.complete(s);
            } else if ("sound" === i || "htmlimage" === i || "nativeimage" === i) this.complete(t); else if ("atlas" === i) {
                if (!t.src && !t._setContext) {
                    if (!this._data) {
                        if (this._data = t, t.meta && t.meta.image) for (var n = t.meta.image.split(","), r = this._url.indexOf("/") >= 0 ? "/" : "\\", a = this._url.lastIndexOf(r), o = a >= 0 ? this._url.substr(0, a + 1) : "", h = 0, l = n.length; h < l; h++) n[h] = o + n[h]; else n = [ this._url.replace(".json", ".png") ];
                        n.reverse(), t.toLoads = n, t.pics = [];
                    }
                    return this.event("progress", .3 + 1 / n.length * .6), this._loadImage(n.pop());
                }
                if (this._data.pics.push(t), this._data.toLoads.length > 0) return this.event("progress", .3 + 1 / this._data.toLoads.length * .6), 
                this._loadImage(this._data.toLoads.pop());
                var u = this._data.frames, c = this._url.split("?")[0], _ = this._data.meta && this._data.meta.prefix ? this._data.meta.prefix : c.substring(0, c.lastIndexOf(".")) + "/", d = this._data.pics, f = URL.formatURL(this._url), p = e.atlasMap[f] || (e.atlasMap[f] = []);
                p.dir = _;
                var g = 1;
                if (this._data.meta && this._data.meta.scale && 1 != this._data.meta.scale) {
                    g = parseFloat(this._data.meta.scale);
                    for (var m in u) {
                        var v = u[m], y = d[v.frame.idx ? v.frame.idx : 0], w = URL.formatURL(_ + m);
                        y.scaleRate = g, e.cacheRes(w, Texture.create(y, v.frame.x, v.frame.y, v.frame.w, v.frame.h, v.spriteSourceSize.x, v.spriteSourceSize.y, v.sourceSize.w, v.sourceSize.h)), 
                        e.loadedMap[w].url = w, p.push(w);
                    }
                } else for (m in u) y = d[(v = u[m]).frame.idx ? v.frame.idx : 0], w = URL.formatURL(_ + m), 
                e.cacheRes(w, Texture.create(y, v.frame.x, v.frame.y, v.frame.w, v.frame.h, v.spriteSourceSize.x, v.spriteSourceSize.y, v.sourceSize.w, v.sourceSize.h)), 
                e.loadedMap[w].url = w, p.push(w);
                delete this._data.pics, this.complete(this._data);
            } else if ("font" == i) {
                if (!t.src) return this._data = t, this.event("progress", .5), this._loadImage(this._url.replace(".fnt", ".png"));
                var x = new BitmapFont();
                x.parseFont(this._data, t);
                var b = this._url.split(".fnt")[0].split("/"), C = b[b.length - 1];
                Text.registerBitmapFont(C, x), this._data = x, this.complete(this._data);
            } else if ("pkm" == i) {
                var S = HTMLImage.create(t, this._url), T = new Texture(S);
                T.url = this._url, this.complete(T);
            } else this.complete(t);
        }, i.complete = function(t) {
            this._data = t, this._customParse ? this.event("loaded", t instanceof Array ? [ t ] : t) : (e._loaders.push(this), 
            e._isWorking || e.checkNext());
        }, i.endLoad = function(t) {
            t && (this._data = t), this._cache && e.cacheRes(this._url, this._data), this._customParse = !1, 
            this.event("progress", 1), this.event("complete", this.data instanceof Array ? [ this.data ] : this.data);
        }, __getset(0, i, "url", function() {
            return this._url;
        }), __getset(0, i, "data", function() {
            return this._data;
        }), __getset(0, i, "cache", function() {
            return this._cache;
        }), __getset(0, i, "type", function() {
            return this._type;
        }), e.checkNext = function() {
            e._isWorking = !0;
            for (var t = Browser.now(); e._startIndex < e._loaders.length; ) if (Browser.now(), 
            e._loaders[e._startIndex].endLoad(), e._startIndex++, Browser.now() - t > e.maxTimeOut) return console.warn("loader callback cost a long time:" + (Browser.now() - t) + " url=" + e._loaders[e._startIndex - 1].url), 
            void Laya.timer.frameOnce(1, null, e.checkNext);
            e._loaders.length = 0, e._startIndex = 0, e._isWorking = !1;
        }, e.clearRes = function(t, i) {
            void 0 === i && (i = !1), t = URL.formatURL(t);
            var s = e.getAtlas(t);
            if (s) {
                for (var n = 0, r = s.length; n < r; n++) {
                    var a = s[n], o = e.getRes(a);
                    delete e.loadedMap[a], o && o.destroy(i);
                }
                s.length = 0, delete e.atlasMap[t], delete e.loadedMap[t];
            } else {
                var h = e.loadedMap[t];
                h && (delete e.loadedMap[t], h instanceof laya.resource.Texture && h.bitmap && h.destroy(i));
            }
        }, e.clearTextureRes = function(t) {
            t = URL.formatURL(t);
            var e = laya.net.Loader.getAtlas(t), i = e && e.length > 0 ? laya.net.Loader.getRes(e[0]) : laya.net.Loader.getRes(t);
            i && i.bitmap && (Render.isConchApp ? i.bitmap.source.releaseTexture && i.bitmap.source.releaseTexture() : null == i.bitmap._atlaser && i.bitmap.releaseResource(!0));
        }, e.setAtlasConfigs = function(t, i) {
            e.preLoadedAtlasConfigMap[URL.formatURL(t)] = i;
        }, e.getRes = function(t) {
            return e.loadedMap[URL.formatURL(t)];
        }, e.getAtlas = function(t) {
            return e.atlasMap[URL.formatURL(t)];
        }, e.cacheRes = function(t, i) {
            t = URL.formatURL(t), null != e.loadedMap[t] ? console.warn("Resources already exist,is repeated loading:", t) : e.loadedMap[t] = i;
        }, e.setGroup = function(t, i) {
            e.groupMap[i] || (e.groupMap[i] = []), e.groupMap[i].push(t);
        }, e.clearResByGroup = function(t) {
            if (e.groupMap[t]) {
                var i = e.groupMap[t], s = 0, n = i.length;
                for (s = 0; s < n; s++) e.clearRes(i[s]);
                i.length = 0;
            }
        }, e.TEXT = "text", e.JSON = "json", e.XML = "xml", e.BUFFER = "arraybuffer", e.IMAGE = "image", 
        e.SOUND = "sound", e.ATLAS = "atlas", e.FONT = "font", e.TTF = "ttf", e.PKM = "pkm", 
        e.typeMap = {
            png: "image",
            jpg: "image",
            jpeg: "image",
            txt: "text",
            json: "json",
            xml: "xml",
            als: "atlas",
            atlas: "atlas",
            mp3: "sound",
            ogg: "sound",
            wav: "sound",
            part: "json",
            fnt: "font",
            pkm: "pkm",
            ttf: "ttf"
        }, e.parserMap = {}, e.groupMap = {}, e.maxTimeOut = 100, e.loadedMap = {}, e.preLoadedAtlasConfigMap = {}, 
        e.atlasMap = {}, e._loaders = [], e._isWorking = !1, e._startIndex = 0, e.imgCache = {}, 
        e;
    }(), LoaderManager = function(t) {
        function e() {
            this.retryNum = 1, this.retryDelay = 0, this.maxLoader = 5, this._loaders = [], 
            this._loaderCount = 0, this._resInfos = [], this._infoPool = [], this._maxPriority = 5, 
            this._failRes = {}, e.__super.call(this);
            for (var t = 0; t < this._maxPriority; t++) this._resInfos[t] = [];
        }
        var i;
        __class(e, "laya.net.LoaderManager", EventDispatcher);
        var s = e.prototype;
        return s.create = function(t, e, i, s, n, r, a, o) {
            if (void 0 === r && (r = 1), void 0 === a && (a = !0), t instanceof Array) {
                var h = t, l = h.length, u = 0;
                if (i) var c = Handler.create(i.caller, i.method, i.args, !1);
                for (var _ = 0; _ < l; _++) {
                    var d = h[_];
                    "string" == typeof d && (d = h[_] = {
                        url: d
                    }), d.progress = 0;
                    var f = i ? Handler.create(null, function(t, e) {
                        t.progress = e;
                        for (var i = 0, s = 0; s < l; s++) i += h[s].progress;
                        var n = i / l;
                        c.runWith(n);
                    }, [ d ], !1) : null, p = i || e ? Handler.create(null, function(t, i) {
                        u++, t.progress = 1, u === l && e && e.run();
                    }, [ d ]) : null;
                    this._create(d.url, p, f, d.clas || s, d.params || n, d.priority || r, a, d.group || o);
                }
                return !0;
            }
            return this._create(t, e, i, s, n, r, a, o);
        }, s._create = function(t, i, s, n, r, a, o, h) {
            void 0 === a && (a = 1), void 0 === o && (o = !0);
            var l = URL.formatURL(t), u = this.getRes(l);
            if (u) !u.hasOwnProperty("loaded") || u.loaded ? (s && s.runWith(1), i && i.run()) : i && Laya.loader._createListener(t, i.caller, i.method, i.args, !0, !1); else {
                var c = Utils.getFileExtension(t), _ = e.createMap[c];
                if (!_) throw new Error("LoaderManager:unknown file(" + t + ") extension with: " + c + ".");
                n || (n = _[0]);
                var d = _[1];
                "atlas" == c ? this.load(t, i, s, d, a, o) : (n === Texture && (d = "htmlimage"), 
                (u = n ? new n() : null).hasOwnProperty("_loaded") && (u._loaded = !1), u._setUrl(t), 
                h && u._setGroup(h), this._createLoad(u, t, Handler.create(null, function(e) {
                    u && !u.destroyed && e && u.onAsynLoaded.call(u, t, e, r), i && i.run(), Laya.loader.event(t);
                }), s, d, a, !1, h, !0), o && this.cacheRes(l, u));
            }
            return u;
        }, s.load = function(t, s, n, r, a, o, h, l) {
            var u = this;
            if (void 0 === a && (a = 1), void 0 === o && (o = !0), void 0 === l && (l = !1), 
            t instanceof Array) return this._loadAssets(t, s, n, r, a, o, h);
            var c = Loader.getRes(t);
            if (null != c) Laya.timer.frameOnce(1, null, function() {
                n && n.runWith(1), s && s.runWith(c), u._loaderCount || u.event("complete");
            }); else {
                var _ = e._resMap[t];
                _ ? (s && _._createListener("complete", s.caller, s.method, s.args, !1, !1), n && _._createListener("progress", n.caller, n.method, n.args, !1, !1)) : ((_ = this._infoPool.length ? this._infoPool.pop() : new i()).url = t, 
                _.type = r, _.cache = o, _.group = h, _.ignoreCache = l, s && _.on("complete", s.caller, s.method, s.args), 
                n && _.on("progress", n.caller, n.method, n.args), e._resMap[t] = _, a = a < this._maxPriority ? a : this._maxPriority - 1, 
                this._resInfos[a].push(_), this._next());
            }
            return this;
        }, s._createLoad = function(t, s, n, r, a, o, h, l, u) {
            var c = this;
            if (void 0 === o && (o = 1), void 0 === h && (h = !0), void 0 === u && (u = !1), 
            s instanceof Array) return this._loadAssets(s, n, r, a, o, h, l);
            var _ = Loader.getRes(s);
            if (null != _) Laya.timer.frameOnce(1, null, function() {
                r && r.runWith(1), n && n.runWith(_), c._loaderCount || c.event("complete");
            }); else {
                var d = e._resMap[s];
                d ? (n && d._createListener("complete", n.caller, n.method, n.args, !1, !1), r && d._createListener("progress", r.caller, r.method, r.args, !1, !1)) : ((d = this._infoPool.length ? this._infoPool.pop() : new i()).url = s, 
                d.clas = t, d.type = a, d.cache = h, d.group = l, d.ignoreCache = u, n && d.on("complete", n.caller, n.method, n.args), 
                r && d.on("progress", r.caller, r.method, r.args), e._resMap[s] = d, o = o < this._maxPriority ? o : this._maxPriority - 1, 
                this._resInfos[o].push(d), this._next());
            }
            return this;
        }, s._next = function() {
            if (!(this._loaderCount >= this.maxLoader)) {
                for (var t = 0; t < this._maxPriority; t++) for (var e = this._resInfos[t]; e.length > 0; ) {
                    var i = e.shift();
                    if (i) return this._doLoad(i);
                }
                this._loaderCount || this.event("complete");
            }
        }, s._doLoad = function(t) {
            function e(e) {
                i.offAll(), i._data = null, s._loaders.push(i), s._endLoad(t, e instanceof Array ? [ e ] : e), 
                s._loaderCount--, s._next();
            }
            this._loaderCount++;
            var i = this._loaders.length ? this._loaders.pop() : new Loader();
            i.on("complete", null, e), i.on("progress", null, function(e) {
                t.event("progress", e);
            }), i.on("error", null, function(t) {
                e(null);
            });
            var s = this;
            i._class = t.clas, i.load(t.url, t.type, t.cache, t.group, t.ignoreCache);
        }, s._endLoad = function(t, i) {
            var s = t.url;
            if (null == i) {
                var n = this._failRes[s] || 0;
                if (n < this.retryNum) return console.warn("[warn]Retry to load:", s), this._failRes[s] = n + 1, 
                void Laya.timer.once(this.retryDelay, this, this._addReTry, [ t ], !1);
                console.warn("[error]Failed to load:", s), this.event("error", s);
            }
            this._failRes[s] && (this._failRes[s] = 0), delete e._resMap[s], t.event("complete", i), 
            t.offAll(), this._infoPool.push(t);
        }, s._addReTry = function(t) {
            this._resInfos[this._maxPriority - 1].push(t), this._next();
        }, s.clearRes = function(t, e) {
            void 0 === e && (e = !1), Loader.clearRes(t, e);
        }, s.getRes = function(t) {
            return Loader.getRes(t);
        }, s.cacheRes = function(t, e) {
            Loader.cacheRes(t, e);
        }, s.clearTextureRes = function(t) {
            Loader.clearTextureRes(t);
        }, s.setGroup = function(t, e) {
            Loader.setGroup(t, e);
        }, s.clearResByGroup = function(t) {
            Loader.clearResByGroup(t);
        }, s.clearUnLoaded = function() {
            for (var t = 0; t < this._maxPriority; t++) {
                for (var i = this._resInfos[t], s = i.length - 1; s > -1; s--) {
                    var n = i[s];
                    n && (n.offAll(), this._infoPool.push(n));
                }
                i.length = 0;
            }
            this._loaderCount = 0, e._resMap = {};
        }, s.cancelLoadByUrls = function(t) {
            if (t) for (var e = 0, i = t.length; e < i; e++) this.cancelLoadByUrl(t[e]);
        }, s.cancelLoadByUrl = function(t) {
            for (var i = 0; i < this._maxPriority; i++) for (var s = this._resInfos[i], n = s.length - 1; n > -1; n--) {
                var r = s[n];
                r && r.url === t && (s[n] = null, r.offAll(), this._infoPool.push(r));
            }
            e._resMap[t] && delete e._resMap[t];
        }, s._loadAssets = function(t, e, i, s, n, r, a) {
            void 0 === n && (n = 1), void 0 === r && (r = !0);
            for (var o = t.length, h = 0, l = 0, u = [], c = !0, _ = 0; _ < o; _++) {
                var d = t[_];
                "string" == typeof d && (d = {
                    url: d,
                    type: s,
                    size: 1,
                    priority: n
                }), d.size || (d.size = 1), d.progress = 0, l += d.size, u.push(d);
                var f = i ? Handler.create(null, function(t, e) {
                    if (null != i) {
                        t.progress = e;
                        for (var s = 0, n = 0; n < u.length; n++) {
                            var r = u[n];
                            s += r.size * r.progress;
                        }
                        var a = s / l;
                        i.runWith(a);
                    }
                }, [ d ], !1) : null, p = e || i ? Handler.create(null, function(t, i) {
                    h++, t.progress = 1, i || (c = !1), h === o && e && e.runWith(c);
                }, [ d ]) : null;
                this.load(d.url, p, f, d.type, d.priority || 1, r, d.group || a);
            }
            return this;
        }, e.cacheRes = function(t, e) {
            Loader.cacheRes(t, e);
        }, e._resMap = {}, __static(e, [ "createMap", function() {
            return this.createMap = {
                atlas: [ null, "atlas" ]
            };
        } ]), e.__init$ = function() {
            i = function(t) {
                function e() {
                    this.url = null, this.type = null, this.cache = !1, this.group = null, this.ignoreCache = !1, 
                    this.clas = null, e.__super.call(this);
                }
                return __class(e, "", EventDispatcher), e;
            }();
        }, e;
    }(), ColorFilter = function(t) {
        function e(t) {
            e.__super.call(this), t || (t = [ .3, .59, .11, 0, 0, .3, .59, .11, 0, 0, .3, .59, .11, 0, 0, 0, 0, 0, 1, 0 ]), 
            this._mat = new Float32Array(16), this._alpha = new Float32Array(4);
            for (var i = 0, s = 0, n = 0; n < 20; n++) n % 5 != 4 ? this._mat[i++] = t[n] : this._alpha[s++] = t[n];
            this._action = RunDriver.createFilterAction(32), this._action.data = this;
        }
        __class(e, "laya.filters.ColorFilter", Filter);
        var i = e.prototype;
        return Laya.imps(i, {
            "laya.filters.IFilter": !0
        }), i.callNative = function(t) {
            t._$P.cf = this, t.conchModel && t.conchModel.setFilterMatrix && t.conchModel.setFilterMatrix(this._mat, this._alpha);
        }, __getset(0, i, "type", function() {
            return 32;
        }), __getset(0, i, "action", function() {
            return this._action;
        }), e;
    }(), Socket = function(t) {
        function e(t, i, s) {
            this._endian = null, this._stamp = NaN, this._socket = null, this._connected = !1, 
            this._addInputPosition = 0, this._input = null, this._output = null, this.timeout = 0, 
            this.objectEncoding = 0, this.disableInput = !1, this._byteClass = null, this.protocols = [], 
            void 0 === i && (i = 0), e.__super.call(this), this._byteClass = s || Byte, this.endian = "bigEndian", 
            this.timeout = 2e4, this._addInputPosition = 0, t && i > 0 && i < 65535 && this.connect(t, i);
        }
        __class(e, "laya.net.Socket", EventDispatcher);
        var i = e.prototype;
        return i.connect = function(t, e) {
            var i = "ws://" + t + ":" + e;
            i = "https:" == Browser.window.location.protocol ? "wss://" + t + ":" + e : "ws://" + t + ":" + e, 
            this.connectByUrl(i);
        }, i.connectByUrl = function(t) {
            var e = this;
            null != this._socket && this.close(), this._socket && this.cleanSocket(), this.protocols && 0 != this.protocols.length ? this._socket = new Browser.window.WebSocket(t, this.protocols) : this._socket = new Browser.window.WebSocket(t), 
            this._socket.binaryType = "arraybuffer", this._output = new this._byteClass(), this._output.endian = this.endian, 
            this._input = new this._byteClass(), this._input.endian = this.endian, this._addInputPosition = 0, 
            this._socket.onopen = function(t) {
                e._onOpen(t);
            }, this._socket.onmessage = function(t) {
                e._onMessage(t);
            }, this._socket.onclose = function(t) {
                e._onClose(t);
            }, this._socket.onerror = function(t) {
                e._onError(t);
            };
        }, i.cleanSocket = function() {
            try {
                this._socket.close();
            } catch (t) {}
            this._connected = !1, this._socket.onopen = null, this._socket.onmessage = null, 
            this._socket.onclose = null, this._socket.onerror = null, this._socket = null;
        }, i.close = function() {
            if (null != this._socket) try {
                this._socket.close();
            } catch (t) {}
        }, i._onOpen = function(t) {
            this._connected = !0, this.event("open", t);
        }, i._onMessage = function(t) {
            if (t && t.data) {
                var e = t.data;
                if (this.disableInput && e) this.event("message", e); else {
                    this._input.length > 0 && this._input.bytesAvailable < 1 && (this._input.clear(), 
                    this._addInputPosition = 0);
                    var i = this._input.pos;
                    !this._addInputPosition && (this._addInputPosition = 0), this._input.pos = this._addInputPosition, 
                    e && ("string" == typeof e ? this._input.writeUTFBytes(e) : this._input.writeArrayBuffer(e), 
                    this._addInputPosition = this._input.pos, this._input.pos = i), this.event("message", e);
                }
            }
        }, i._onClose = function(t) {
            this._connected = !1, this.event("close", t);
        }, i._onError = function(t) {
            this.event("error", t);
        }, i.send = function(t) {
            this._socket.send(t);
        }, i.flush = function() {
            if (this._output && this._output.length > 0) {
                var t;
                try {
                    this._socket && this._socket.send(this._output.__getBuffer().slice(0, this._output.length));
                } catch (e) {
                    t = e;
                }
                this._output.endian = this.endian, this._output.clear(), t && this.event("error", t);
            }
        }, __getset(0, i, "input", function() {
            return this._input;
        }), __getset(0, i, "output", function() {
            return this._output;
        }), __getset(0, i, "connected", function() {
            return this._connected;
        }), __getset(0, i, "endian", function() {
            return this._endian;
        }, function(t) {
            this._endian = t, null != this._input && (this._input.endian = t), null != this._output && (this._output.endian = t);
        }), e.LITTLE_ENDIAN = "littleEndian", e.BIG_ENDIAN = "bigEndian", e;
    }(), WorkerLoader = function(t) {
        function e() {
            this.worker = null, e.__super.call(this);
            var t = this;
            this.worker = new Browser.window.Worker(e.workerPath), this.worker.onmessage = function(e) {
                t.workerMessage(e.data);
            };
        }
        __class(e, "laya.net.WorkerLoader", EventDispatcher);
        var i = e.prototype;
        return i.workerMessage = function(t) {
            if (t) switch (t.type) {
              case "Image":
                this.imageLoaded(t);
                break;

              case "Msg":
                this.event("image_msg", t.msg);
            }
        }, i.imageLoaded = function(t) {
            if (t && t.buffer && t.buffer.length < 10) return e._enable = !1, this._myTrace("buffer lost when postmessage ,disable workerloader"), 
            this.event(t.url, null), void this.event("image_err", t.url + "\n" + t.msg);
            if (!t.dataType) return this.event(t.url, null), void this.event("image_err", t.url + "\n" + t.msg);
            var i, s, n;
            switch (t.dataType) {
              case "buffer":
                (n = (s = (i = new HTMLCanvas("2D")).source.getContext("2d")).createImageData(t.width, t.height)).data.set(t.buffer), 
                i.size(n.width, n.height), s.putImageData(n, 0, 0), i.memorySize = 0;
                break;

              case "imagedata":
                s = (i = new HTMLCanvas("2D")).source.getContext("2d"), n = t.imagedata, i.size(n.width, n.height), 
                s.putImageData(n, 0, 0), n = t.imagedata, i.memorySize = 0;
                break;

              case "imageBitmap":
                n = t.imageBitmap, Render.isWebGL ? i = n : (s = (i = new HTMLCanvas("2D")).source.getContext("2d"), 
                i.size(n.width, n.height), s.drawImage(n, 0, 0), i.src = t.url);
            }
            Render.isWebGL && (i = new laya.webgl.resource.WebGLImage(i, t.url)), this.event(t.url, i);
        }, i._myTrace = function(t) {
            var e = arguments, i = [], s = 0, n = e.length;
            for (s = 0; s < n; s++) i.push(e[s]);
            this.event("image_msg", i.join(" "));
        }, i.loadImage = function(t) {
            var e;
            (e = {}).type = "load", e.url = t, this.worker.postMessage(e);
        }, i._loadImage = function(t) {
            var i = this;
            if (!e._enable || t.toLowerCase().indexOf(".png") < 0) e._preLoadFun.call(i, t); else {
                t = URL.formatURL(t);
                laya.net.WorkerLoader.I.on(t, i, function s(n) {
                    laya.net.WorkerLoader.I.off(t, i, s), n ? i.onLoaded(n) : e._preLoadFun.call(i, t);
                }), laya.net.WorkerLoader.I.loadImage(t);
            }
        }, __getset(1, e, "enable", function() {
            return e._enable;
        }, function(t) {
            e.disableJSDecode && !Browser.window.createImageBitmap || (e._enable = t) && null == e._preLoadFun && (e._enable = e.__init__());
        }), e.__init__ = function() {
            return null == e._preLoadFun && !!Browser.window.Worker && (e._preLoadFun = Loader.prototype._loadImage, 
            Loader.prototype._loadImage = e.prototype._loadImage, e.I || (e.I = new e()), !0);
        }, e.workerSupported = function() {
            return !!Browser.window.Worker;
        }, e.IMAGE_LOADED = "image_loaded", e.IMAGE_ERR = "image_err", e.IMAGE_MSG = "image_msg", 
        e.I = null, e._preLoadFun = null, e._enable = !1, e.workerPath = "libs/worker.js", 
        e.disableJSDecode = !0, e;
    }(), Resource = function(t) {
        function e() {
            e.__super.call(this), this._$1__id = ++e._uniqueIDCounter, this.__loaded = !0, this._destroyed = !1, 
            this._referenceCount = 0, e._idResourcesMap[this.id] = this, this._released = !0, 
            this.lock = !1, this._memorySize = 0, this._lastUseFrameCount = -1, ResourceManager.currentResourceManager && ResourceManager.currentResourceManager.addResource(this);
        }
        __class(e, "laya.resource.Resource", EventDispatcher);
        var i = e.prototype;
        return Laya.imps(i, {
            "laya.resource.ICreateResource": !0,
            "laya.resource.IDispose": !0
        }), i._setUrl = function(t) {
            if (this._url !== t) {
                var i;
                this._url && ((i = e._urlResourcesMap[this._url]).splice(i.indexOf(this), 1), 0 === i.length && delete e._urlResourcesMap[this._url]), 
                t && ((i = e._urlResourcesMap[t]) || (e._urlResourcesMap[t] = i = []), i.push(this)), 
                this._url = t;
            }
        }, i._getGroup = function() {
            return this._group;
        }, i._setGroup = function(t) {
            if (this._group !== t) {
                var i;
                this._group && ((i = e._groupResourcesMap[this._group]).splice(i.indexOf(this), 1), 
                0 === i.length && delete e._groupResourcesMap[this._group]), t && ((i = e._groupResourcesMap[t]) || (e._groupResourcesMap[t] = i = []), 
                i.push(this)), this._group = t;
            }
        }, i._addReference = function() {
            this._referenceCount++;
        }, i._removeReference = function() {
            this._referenceCount--;
        }, i._clearReference = function() {
            this._referenceCount = 0;
        }, i._endLoaded = function() {
            this.__loaded = !0, this.event("loaded", this);
        }, i.recreateResource = function() {
            this.completeCreate();
        }, i.disposeResource = function() {}, i.activeResource = function(t) {
            void 0 === t && (t = !1), this._lastUseFrameCount = Stat.loopCount, !this._destroyed && this.__loaded && (this._released || t) && this.recreateResource();
        }, i.releaseResource = function(t) {
            return void 0 === t && (t = !1), !(!t && this.lock || this._released && !t || (this.disposeResource(), 
            this._released = !0, this._lastUseFrameCount = -1, this.event("released", this), 
            0));
        }, i.onAsynLoaded = function(t, e, i) {
            throw new Error("Resource: must override this function!");
        }, i.destroy = function() {
            if (!this._destroyed) {
                null !== this._resourceManager && this._resourceManager.removeResource(this), this._destroyed = !0, 
                this.lock = !1, this.releaseResource(), delete e._idResourcesMap[this.id];
                var t;
                this._url && ((t = e._urlResourcesMap[this._url]) && (t.splice(t.indexOf(this), 1), 
                0 === t.length && delete e._urlResourcesMap[this.url]), Loader.clearRes(this._url), 
                this.__loaded || RunDriver.cancelLoadByUrl(this._url)), this._group && ((t = e._groupResourcesMap[this._group]).splice(t.indexOf(this), 1), 
                0 === t.length && delete e._groupResourcesMap[this.url]);
            }
        }, i.completeCreate = function() {
            this._released = !1, this.event("recovered", this);
        }, i.dispose = function() {
            this.destroy();
        }, __getset(0, i, "memorySize", function() {
            return this._memorySize;
        }, function(t) {
            var e = t - this._memorySize;
            this._memorySize = t, this.resourceManager && this.resourceManager.addSize(e);
        }), __getset(0, i, "_loaded", null, function(t) {
            this.__loaded = t;
        }), __getset(0, i, "loaded", function() {
            return this.__loaded;
        }), __getset(0, i, "id", function() {
            return this._$1__id;
        }), __getset(0, i, "destroyed", function() {
            return this._destroyed;
        }), __getset(0, i, "group", function() {
            return this._getGroup();
        }, function(t) {
            this._setGroup(t);
        }), __getset(0, i, "resourceManager", function() {
            return this._resourceManager;
        }), __getset(0, i, "url", function() {
            return this._url;
        }), __getset(0, i, "released", function() {
            return this._released;
        }), __getset(0, i, "referenceCount", function() {
            return this._referenceCount;
        }), e.getResourceByID = function(t) {
            return e._idResourcesMap[t];
        }, e.getResourceByURL = function(t, i) {
            return void 0 === i && (i = 0), e._urlResourcesMap[t][i];
        }, e.getResourceCountByURL = function(t) {
            return e._urlResourcesMap[t].length;
        }, e.destroyUnusedResources = function(t) {
            var i;
            if (t) {
                var s = e._groupResourcesMap[t];
                if (s) for (var n = s.slice(), r = 0, a = n.length; r < a; r++) (i = n[r]).lock || 0 !== i._referenceCount || i.destroy();
            } else for (var o in e._idResourcesMap) (i = e._idResourcesMap[o]).lock || 0 !== i._referenceCount || i.destroy();
        }, e._uniqueIDCounter = 0, e._idResourcesMap = {}, e._urlResourcesMap = {}, e._groupResourcesMap = {}, 
        e;
    }(), Texture = function(t) {
        function e(t, i) {
            this.offsetX = 0, this.offsetY = 0, this.sourceWidth = 0, this.sourceHeight = 0, 
            this._w = 0, this._h = 0, this._uvID = 0, this._atlasID = -1, this.scaleRate = 1, 
            e.__super.call(this), t && t._addReference && t._addReference(), this.setTo(t, i);
        }
        __class(e, "laya.resource.Texture", EventDispatcher);
        var i = e.prototype;
        return i._setUrl = function(t) {
            this.url = t;
        }, i.setTo = function(t, i) {
            if (t instanceof window.HTMLElement) {
                var s = HTMLCanvas.create("2D", t);
                this.bitmap = s;
            } else this.bitmap = t;
            if (this.uv = i || e.DEF_UV, t) {
                this._w = t.width, this._h = t.height, this.sourceWidth = this.sourceWidth || this._w, 
                this.sourceHeight = this.sourceHeight || this._h, this._loaded = this._w > 0;
                var n = this;
                if (this._loaded) RunDriver.addToAtlas && RunDriver.addToAtlas(n); else {
                    var r = t;
                    r instanceof laya.resource.HTMLImage && r.image && r.image.addEventListener("load", function(t) {
                        RunDriver.addToAtlas && RunDriver.addToAtlas(n);
                    }, !1);
                }
            }
        }, i.active = function() {
            this.bitmap && this.bitmap.activeResource();
        }, i.destroy = function(t) {
            if (void 0 === t && (t = !1), this.bitmap && this.bitmap.referenceCount > 0) {
                var e = this.bitmap;
                t ? (Render.isConchApp && e.source && e.source.conchDestroy && this.bitmap.source.conchDestroy(), 
                this.bitmap = null, e.dispose(), e._clearReference()) : (e._removeReference(), 0 == e.referenceCount && (Render.isConchApp && e.source && e.source.conchDestroy && this.bitmap.source.conchDestroy(), 
                this.bitmap = null, e.dispose())), this.url && this === Laya.loader.getRes(this.url) && Laya.loader.clearRes(this.url, t), 
                this._loaded = !1;
            }
        }, i.load = function(t) {
            var e = this;
            this._loaded = !1, t = URL.customFormat(t);
            var i = this.bitmap || (this.bitmap = HTMLImage.create(t));
            i && i._addReference();
            var s = this;
            i.onload = function() {
                i.onload = null, s._loaded = !0, e.sourceWidth = e._w = i.width, e.sourceHeight = e._h = i.height, 
                s.event("loaded", this), RunDriver.addToAtlas && RunDriver.addToAtlas(s);
            };
        }, i.addTextureToAtlas = function(t) {
            RunDriver.addTextureToAtlas(this);
        }, i.getPixels = function(t, e, i, s) {
            if (Render.isConchApp) {
                var n = this.bitmap;
                if (n.source && n.source.getImageData) {
                    var r = n.source.getImageData(t, e, i, s), a = new Uint8Array(r);
                    return Array.from(a);
                }
                return null;
            }
            return Render.isWebGL ? RunDriver.getTexturePixels(this, t, e, i, s) : (Browser.canvas.size(i, s), 
            Browser.canvas.clear(), Browser.context.drawTexture(this, -t, -e, this.width, this.height, 0, 0), 
            Browser.context.getImageData(0, 0, i, s).data);
        }, i.onAsynLoaded = function(t, e) {
            e && e._addReference(), this.setTo(e, this.uv);
        }, __getset(0, i, "source", function() {
            return this.bitmap ? (this.bitmap.activeResource(), this.bitmap.source) : null;
        }), __getset(0, i, "loaded", function() {
            return this._loaded;
        }), __getset(0, i, "released", function() {
            return !this.bitmap || this.bitmap.released;
        }), __getset(0, i, "width", function() {
            return this._w ? this._w : this.uv && this.uv !== e.DEF_UV ? (this.uv[2] - this.uv[0]) * this.bitmap.width : this.bitmap.width;
        }, function(t) {
            this._w = t, this.sourceWidth || (this.sourceWidth = t);
        }), __getset(0, i, "repeat", function() {
            return !Render.isWebGL || !this.bitmap || this.bitmap.repeat;
        }, function(t) {
            t && Render.isWebGL && this.bitmap && (this.bitmap.repeat = t, t && (this.bitmap.enableMerageInAtlas = !1));
        }), __getset(0, i, "height", function() {
            return this._h ? this._h : this.uv && this.uv !== e.DEF_UV ? (this.uv[5] - this.uv[1]) * this.bitmap.height : this.bitmap.height;
        }, function(t) {
            this._h = t, this.sourceHeight || (this.sourceHeight = t);
        }), __getset(0, i, "isLinearSampling", function() {
            return !Render.isWebGL || 9728 != this.bitmap.minFifter;
        }, function(t) {
            !t && Render.isWebGL && (t || -1 != this.bitmap.minFifter || -1 != this.bitmap.magFifter || (this.bitmap.minFifter = 9728, 
            this.bitmap.magFifter = 9728, this.bitmap.enableMerageInAtlas = !1));
        }), e.moveUV = function(t, e, i) {
            for (var s = 0; s < 8; s += 2) i[s] += t, i[s + 1] += e;
            return i;
        }, e.create = function(t, i, s, n, r, a, o, h, l) {
            void 0 === a && (a = 0), void 0 === o && (o = 0), void 0 === h && (h = 0), void 0 === l && (l = 0);
            var u = t instanceof laya.resource.Texture, c = u ? t.uv : e.DEF_UV, _ = u ? t.bitmap : t, d = RunDriver.isAtlas(_);
            if (d) {
                var f = _._atlaser, p = t._atlasID;
                if (-1 == p) throw new Error("create texture error");
                _ = f._inAtlasTextureBitmapValue[p], c = f._inAtlasTextureOriUVValue[p];
            }
            var g = new e(_, null);
            _.width && i + n > _.width && (n = _.width - i), _.height && s + r > _.height && (r = _.height - s), 
            g.width = n, g.height = r, g.offsetX = a, g.offsetY = o, g.sourceWidth = h || n, 
            g.sourceHeight = l || r;
            var m = 1 / _.width, v = 1 / _.height;
            i *= m, s *= v, n *= m, r *= v;
            var y = g.uv[0], w = g.uv[1], x = g.uv[4], b = g.uv[5], C = x - y, S = b - w, T = e.moveUV(c[0], c[1], [ i, s, i + n, s, i + n, s + r, i, s + r ]);
            g.uv = [ y + T[0] * C, w + T[1] * S, x - (1 - T[2]) * C, w + T[3] * S, x - (1 - T[4]) * C, b - (1 - T[5]) * S, y + T[6] * C, b - (1 - T[7]) * S ], 
            d && g.addTextureToAtlas();
            var M = _.scaleRate;
            return M && 1 != M ? (g.sourceWidth /= M, g.sourceHeight /= M, g.width /= M, g.height /= M, 
            g.scaleRate = M, g.offsetX /= M, g.offsetY /= M) : g.scaleRate = 1, g;
        }, e.createFromTexture = function(t, i, s, n, r) {
            var a = t.scaleRate;
            1 != a && (i *= a, s *= a, n *= a, r *= a);
            var o = Rectangle.TEMP.setTo(i - t.offsetX, s - t.offsetY, n, r), h = o.intersection(e._rect1.setTo(0, 0, t.width, t.height), e._rect2);
            if (!h) return null;
            var l = e.create(t, h.x, h.y, h.width, h.height, h.x - o.x, h.y - o.y, n, r);
            return l.bitmap._removeReference(), l;
        }, e.DEF_UV = [ 0, 0, 1, 0, 1, 1, 0, 1 ], e.INV_UV = [ 0, 1, 1, 1, 1, 0, 0, 0 ], 
        e._rect1 = new Rectangle(), e._rect2 = new Rectangle(), e;
    }(), TimeLine = function(t) {
        function e() {
            this._labelDic = null, this._tweenDic = {}, this._tweenDataList = [], this._endTweenDataList = null, 
            this._currTime = 0, this._lastTime = 0, this._startTime = 0, this._index = 0, this._gidIndex = 0, 
            this._firstTweenDic = {}, this._startTimeSort = !1, this._endTimeSort = !1, this._loopKey = !1, 
            this.scale = 1, this._frameRate = 60, this._frameIndex = 0, this._total = 0, e.__super.call(this);
        }
        var i;
        __class(e, "laya.utils.TimeLine", EventDispatcher);
        var s = e.prototype;
        return s.to = function(t, e, i, s, n) {
            return void 0 === n && (n = 0), this._create(t, e, i, s, n, !0);
        }, s.from = function(t, e, i, s, n) {
            return void 0 === n && (n = 0), this._create(t, e, i, s, n, !1);
        }, s._create = function(t, e, s, n, r, a) {
            var o = Pool.getItemByClass("tweenData", i);
            return o.isTo = a, o.type = 0, o.target = t, o.duration = s, o.data = e, o.startTime = this._startTime + r, 
            o.endTime = o.startTime + o.duration, o.ease = n, this._startTime = Math.max(o.endTime, this._startTime), 
            this._tweenDataList.push(o), this._startTimeSort = !0, this._endTimeSort = !0, this;
        }, s.addLabel = function(t, e) {
            var s = Pool.getItemByClass("tweenData", i);
            return s.type = 1, s.data = t, s.endTime = s.startTime = this._startTime + e, this._labelDic || (this._labelDic = {}), 
            this._labelDic[t] = s, this._tweenDataList.push(s), this;
        }, s.removeLabel = function(t) {
            if (this._labelDic && this._labelDic[t]) {
                var e = this._labelDic[t];
                if (e) {
                    var i = this._tweenDataList.indexOf(e);
                    i > -1 && this._tweenDataList.splice(i, 1);
                }
                delete this._labelDic[t];
            }
        }, s.gotoTime = function(t) {
            if (null != this._tweenDataList && 0 != this._tweenDataList.length) {
                var e, i;
                for (var s in this._firstTweenDic) if (i = this._firstTweenDic[s]) for (var n in i) i.diyTarget.hasOwnProperty(n) && (i.diyTarget[n] = i[n]);
                for (s in this._tweenDic) (e = this._tweenDic[s]).clear(), delete this._tweenDic[s];
                this._index = 0, this._gidIndex = 0, this._currTime = t, this._lastTime = Browser.now();
                var r;
                null == this._endTweenDataList || this._endTimeSort ? (this._endTimeSort = !1, this._endTweenDataList = r = this._tweenDataList.concat(), 
                r.sort(function(t, e) {
                    return t.endTime > e.endTime ? 1 : t.endTime < e.endTime ? -1 : 0;
                })) : r = this._endTweenDataList;
                for (var a, o = 0, h = r.length; o < h; o++) if (0 == (a = r[o]).type) {
                    if (!(t >= a.endTime)) break;
                    this._index = Math.max(this._index, o + 1);
                    var l = a.data;
                    if (a.isTo) for (var u in l) a.target[u] = l[u];
                }
                for (o = 0, h = this._tweenDataList.length; o < h; o++) 0 == (a = this._tweenDataList[o]).type && t >= a.startTime && t < a.endTime && (this._index = Math.max(this._index, o + 1), 
                this._gidIndex++, (e = Pool.getItemByClass("tween", Tween))._create(a.target, a.data, a.duration, a.ease, Handler.create(this, this._animComplete, [ this._gidIndex ]), 0, !1, a.isTo, !0, !1), 
                e.setStartTime(this._currTime - (t - a.startTime)), e._updateEase(this._currTime), 
                e.gid = this._gidIndex, this._tweenDic[this._gidIndex] = e);
            }
        }, s.gotoLabel = function(t) {
            if (null != this._labelDic) {
                var e = this._labelDic[t];
                e && this.gotoTime(e.startTime);
            }
        }, s.pause = function() {
            Laya.timer.clear(this, this._update);
        }, s.resume = function() {
            this.play(this._currTime, this._loopKey);
        }, s.play = function(t, e) {
            if (void 0 === t && (t = 0), void 0 === e && (e = !1), this._tweenDataList) {
                if (this._startTimeSort) {
                    this._startTimeSort = !1, this._tweenDataList.sort(function(t, e) {
                        return t.startTime > e.startTime ? 1 : t.startTime < e.startTime ? -1 : 0;
                    });
                    for (var i = 0, s = this._tweenDataList.length; i < s; i++) {
                        var n = this._tweenDataList[i];
                        if (null != n && 0 == n.type) {
                            var r = n.target, a = r.$_GID || (r.$_GID = Utils.getGID()), o = null;
                            null == this._firstTweenDic[a] ? ((o = {}).diyTarget = r, this._firstTweenDic[a] = o) : o = this._firstTweenDic[a];
                            for (var h in n.data) null == o[h] && (o[h] = r[h]);
                        }
                    }
                }
                "string" == typeof t ? this.gotoLabel(t) : this.gotoTime(t), this._loopKey = e, 
                this._lastTime = Browser.now(), Laya.timer.frameLoop(1, this, this._update);
            }
        }, s._update = function() {
            if (this._currTime >= this._startTime) {
                if (!this._loopKey) {
                    for (var t in this._tweenDic) (n = this._tweenDic[t]).complete();
                    return this._complete(), void this.pause();
                }
                if (this._complete(), !this._tweenDataList) return;
                this.gotoTime(0);
            }
            var e = Browser.now(), i = e - this._lastTime, s = this._currTime += i * this.scale;
            this._lastTime = e;
            for (t in this._tweenDic) (n = this._tweenDic[t])._updateEase(s);
            var n;
            if (0 != this._tweenDataList.length && this._index < this._tweenDataList.length) {
                var r = this._tweenDataList[this._index];
                s >= r.startTime && (this._index++, 0 == r.type ? (this._gidIndex++, (n = Pool.getItemByClass("tween", Tween))._create(r.target, r.data, r.duration, r.ease, Handler.create(this, this._animComplete, [ this._gidIndex ]), 0, !1, r.isTo, !0, !1), 
                n.setStartTime(s), n.gid = this._gidIndex, this._tweenDic[this._gidIndex] = n, n._updateEase(s)) : this.event("label", r.data));
            }
        }, s._animComplete = function(t) {
            this._tweenDic[t] && delete this._tweenDic[t];
        }, s._complete = function() {
            this.event("complete");
        }, s.reset = function() {
            var t;
            if (this._labelDic) for (t in this._labelDic) delete this._labelDic[t];
            for (t in this._tweenDic) this._tweenDic[t].clear(), delete this._tweenDic[t];
            for (t in this._firstTweenDic) delete this._firstTweenDic[t];
            if (this._endTweenDataList = null, this._tweenDataList && this._tweenDataList.length) {
                var e = 0, i = 0;
                for (i = this._tweenDataList.length, e = 0; e < i; e++) this._tweenDataList[e] && this._tweenDataList[e].destroy();
            }
            this._tweenDataList.length = 0, this._currTime = 0, this._lastTime = 0, this._startTime = 0, 
            this._index = 0, this._gidIndex = 0, this.scale = 1, Laya.timer.clear(this, this._update);
        }, s.destroy = function() {
            this.reset(), this._labelDic = null, this._tweenDic = null, this._tweenDataList = null, 
            this._firstTweenDic = null;
        }, __getset(0, s, "index", function() {
            return this._frameIndex;
        }, function(t) {
            this._frameIndex = t, this.gotoTime(this._frameIndex / this._frameRate * 1e3);
        }), __getset(0, s, "total", function() {
            return this._total = Math.floor(this._startTime / 1e3 * this._frameRate), this._total;
        }), e.to = function(t, i, s, n, r) {
            return void 0 === r && (r = 0), new e().to(t, i, s, n, r);
        }, e.from = function(t, i, s, n, r) {
            return void 0 === r && (r = 0), new e().from(t, i, s, n, r);
        }, e.__init$ = function() {
            i = function() {
                function t() {
                    this.type = 0, this.isTo = !0, this.startTime = NaN, this.endTime = NaN, this.target = null, 
                    this.duration = NaN, this.ease = null, this.data = null;
                }
                return __class(t, ""), t.prototype.destroy = function() {
                    this.target = null, this.ease = null, this.data = null, this.isTo = !0, this.type = 0, 
                    Pool.recover("tweenData", this);
                }, t;
            }();
        }, e;
    }(), Sprite = function(t) {
        function e() {
            this._transform = null, this._tfChanged = !1, this._x = 0, this._y = 0, this._width = 0, 
            this._height = 0, this._repaint = 1, this._mouseEnableState = 0, this._zOrder = 0, 
            this._graphics = null, this._renderType = 0, this._optimizeScrollRect = !1, this._texture = null, 
            this.mouseThrough = !1, this.autoSize = !1, this.hitTestPrior = !1, this.viewport = null, 
            e.__super.call(this), this._style = Style.EMPTY;
        }
        __class(e, "laya.display.Sprite", t);
        var i = e.prototype;
        return Laya.imps(i, {
            "laya.display.ILayout": !0
        }), i.createConchModel = function() {
            return new ConchNode();
        }, i.destroy = function(e) {
            void 0 === e && (e = !0), this._releaseMem(), t.prototype.destroy.call(this, e), 
            this._style && this._style.destroy(), this._transform && this._transform.destroy(), 
            this._transform = null, this._style = null, this._graphics = null;
        }, i.updateZOrder = function() {
            Utils.updateOrder(this._childs) && this.repaint();
        }, i.reCache = function() {
            this._$P.cacheCanvas && (this._$P.cacheCanvas.reCache = !0), this._repaint = 1;
        }, i.setBounds = function(t) {
            this._set$P("uBounds", t);
        }, i.getBounds = function() {
            return this._$P.mBounds || this._set$P("mBounds", new Rectangle()), Rectangle._getWrapRec(this._boundPointsToParent(), this._$P.mBounds);
        }, i.getSelfBounds = function() {
            return this._$P.uBounds ? this._$P.uBounds : (this._$P.mBounds || this._set$P("mBounds", new Rectangle()), 
            Rectangle._getWrapRec(this._getBoundPointsM(!1), this._$P.mBounds));
        }, i._boundPointsToParent = function(t) {
            void 0 === t && (t = !1);
            var e = 0, i = 0;
            this._style && (e = this._style._tf.translateX, i = this._style._tf.translateY, 
            t = t || 0 !== this._style._tf.rotate, this._style.scrollRect && (e += this._style.scrollRect.x, 
            i += this._style.scrollRect.y));
            var s = this._getBoundPointsM(t);
            if (!s || s.length < 1) return s;
            if (8 != s.length && (s = t ? GrahamScan.scanPList(s) : Rectangle._getWrapRec(s, Rectangle.TEMP)._getBoundPoints()), 
            !this.transform) return Utils.transPointList(s, this._x - e, this._y - i), s;
            var n = Point.TEMP, r = 0, a = s.length;
            for (r = 0; r < a; r += 2) n.x = s[r], n.y = s[r + 1], this.toParentPoint(n), s[r] = n.x, 
            s[r + 1] = n.y;
            return s;
        }, i.getGraphicBounds = function(t) {
            return void 0 === t && (t = !1), this._graphics ? this._graphics.getBounds(t) : Rectangle.TEMP.setTo(0, 0, 0, 0);
        }, i._getBoundPointsM = function(t) {
            if (void 0 === t && (t = !1), this._$P.uBounds) return this._$P.uBounds._getBoundPoints();
            if (this._$P.temBM || this._set$P("temBM", []), this.scrollRect) {
                var e = Utils.clearArray(this._$P.temBM), i = Rectangle.TEMP;
                return i.copyFrom(this.scrollRect), Utils.concatArray(e, i._getBoundPoints()), e;
            }
            for (var s, n, r, a = this._graphics ? this._graphics.getBoundPoints() : Utils.clearArray(this._$P.temBM), o = 0, h = (r = this._childs).length; o < h; o++) (s = r[o]) instanceof laya.display.Sprite && 1 == s.visible && (n = s._boundPointsToParent(t)) && (a = a ? Utils.concatArray(a, n) : n);
            return a;
        }, i.getStyle = function() {
            return this._style === Style.EMPTY && (this._style = new Style()), this._style;
        }, i.setStyle = function(t) {
            this._style = t;
        }, i._adjustTransform = function() {
            this._tfChanged = !1;
            var t, e = this._style._tf, i = e.scaleX, s = e.scaleY;
            if (e.rotate || 1 !== i || 1 !== s || e.skewX || e.skewY) {
                (t = this._transform || (this._transform = Matrix.create())).bTransform = !0;
                var n = .0174532922222222 * (e.rotate - e.skewX), r = .0174532922222222 * (e.rotate + e.skewY), a = Math.cos(r), o = Math.sin(r), h = Math.sin(n), l = Math.cos(n);
                return t.a = i * a, t.b = i * o, t.c = -s * h, t.d = s * l, t.tx = t.ty = 0, t;
            }
            return this._transform && this._transform.destroy(), this._transform = null, this._renderType &= -5, 
            t;
        }, i.pos = function(t, e, i) {
            if (void 0 === i && (i = !1), this._x !== t || this._y !== e) {
                if (this.destroyed) return this;
                if (i) {
                    this._x = t, this._y = e, this.conchModel && this.conchModel.pos(this._x, this._y);
                    var s = this._parent;
                    s && 0 === s._repaint && (s._repaint = 1, s.parentRepaint()), this._$P.maskParent && 0 === this._$P.maskParent._repaint && (this._$P.maskParent._repaint = 1, 
                    this._$P.maskParent.parentRepaint());
                } else this.x = t, this.y = e;
            }
            return this;
        }, i.pivot = function(t, e) {
            return this.pivotX = t, this.pivotY = e, this;
        }, i.size = function(t, e) {
            return this.width = t, this.height = e, this;
        }, i.scale = function(t, e, i) {
            void 0 === i && (i = !1);
            var s = this.getStyle(), n = s._tf;
            if (n.scaleX != t || n.scaleY != e) {
                if (this.destroyed) return this;
                if (i) {
                    s.setScale(t, e), this._tfChanged = !0, this.conchModel && this.conchModel.scale(t, e), 
                    this._renderType |= 4;
                    var r = this._parent;
                    r && 0 === r._repaint && (r._repaint = 1, r.parentRepaint());
                } else this.scaleX = t, this.scaleY = e;
            }
            return this;
        }, i.skew = function(t, e) {
            return this.skewX = t, this.skewY = e, this;
        }, i.render = function(t, e, i) {
            Stat.spriteCount++, RenderSprite.renders[this._renderType]._fun(this, t, e + this._x, i + this._y), 
            this._repaint = 0;
        }, i.drawToCanvas = function(t, e, i, s) {
            if (Render.isConchNode) {
                var n = HTMLCanvas.create("2D");
                return new RenderContext(t, e, n).ctx.setCanvasType(1), this.conchModel.drawToCanvas(n.source, i, s), 
                n;
            }
            return RunDriver.drawToCanvas(this, this._renderType, t, e, i, s);
        }, i.customRender = function(t, e, i) {
            this._renderType |= 1024;
        }, i._applyFilters = function() {
            if (!Render.isWebGL) {
                var t;
                if ((t = this._$P.filters) && !(t.length < 1)) for (var e = 0, i = t.length; e < i; e++) t[e].action.apply(this._$P.cacheCanvas);
            }
        }, i._isHaveGlowFilter = function() {
            var t = 0, e = 0;
            if (this.filters) for (t = 0; t < this.filters.length; t++) if (8 == this.filters[t].type) return !0;
            for (t = 0, e = this._childs.length; t < e; t++) if (this._childs[t]._isHaveGlowFilter()) return !0;
            return !1;
        }, i.localToGlobal = function(t, e) {
            void 0 === e && (e = !1), !0 === e && (t = new Point(t.x, t.y));
            for (var i = this; i && i != Laya.stage; ) t = i.toParentPoint(t), i = i.parent;
            return t;
        }, i.globalToLocal = function(t, e) {
            void 0 === e && (e = !1), e && (t = new Point(t.x, t.y));
            for (var i = this, s = []; i && i != Laya.stage; ) s.push(i), i = i.parent;
            for (var n = s.length - 1; n >= 0; ) t = (i = s[n]).fromParentPoint(t), n--;
            return t;
        }, i.toParentPoint = function(t) {
            if (!t) return t;
            t.x -= this.pivotX, t.y -= this.pivotY, this.transform && this._transform.transformPoint(t), 
            t.x += this._x, t.y += this._y;
            var e = this._style.scrollRect;
            return e && (t.x -= e.x, t.y -= e.y), t;
        }, i.fromParentPoint = function(t) {
            if (!t) return t;
            t.x -= this._x, t.y -= this._y;
            var e = this._style.scrollRect;
            return e && (t.x += e.x, t.y += e.y), this.transform && this._transform.invertTransformPoint(t), 
            t.x += this.pivotX, t.y += this.pivotY, t;
        }, i.on = function(e, i, s, n) {
            return 1 !== this._mouseEnableState && this.isMouseEvent(e) ? (this.mouseEnabled = !0, 
            this._setBit(2, !0), this._parent && this._$2__onDisplay(), this._createListener(e, i, s, n, !1)) : t.prototype.on.call(this, e, i, s, n);
        }, i.once = function(e, i, s, n) {
            return 1 !== this._mouseEnableState && this.isMouseEvent(e) ? (this.mouseEnabled = !0, 
            this._setBit(2, !0), this._parent && this._$2__onDisplay(), this._createListener(e, i, s, n, !0)) : t.prototype.once.call(this, e, i, s, n);
        }, i._$2__onDisplay = function() {
            if (1 !== this._mouseEnableState) {
                var t = this;
                for (t = t.parent; t && 1 !== t._mouseEnableState && !t._getBit(2); ) t.mouseEnabled = !0, 
                t._setBit(2, !0), t = t.parent;
            }
        }, i.loadImage = function(t, e, i, s, n, r) {
            var a = this;
            return void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === s && (s = 0), 
            void 0 === n && (n = 0), this.graphics.loadImage(t, e, i, s, n, function(t) {
                a.destroyed || (a.size(e + (s || t.width), i + (n || t.height)), a.repaint(), r && r.runWith(t));
            }), this;
        }, i.repaint = function() {
            this.conchModel && this.conchModel.repaint && this.conchModel.repaint(), 0 === this._repaint && (this._repaint = 1, 
            this.parentRepaint()), this._$P && this._$P.maskParent && this._$P.maskParent.repaint();
        }, i._needRepaint = function() {
            return 0 !== this._repaint && this._$P.cacheCanvas && this._$P.cacheCanvas.reCache;
        }, i._childChanged = function(t) {
            this._childs.length ? this._renderType |= 2048 : this._renderType &= -2049, t && this._get$P("hasZorder") && Laya.timer.callLater(this, this.updateZOrder), 
            this.repaint();
        }, i.parentRepaint = function() {
            var t = this._parent;
            t && 0 === t._repaint && (t._repaint = 1, t.parentRepaint());
        }, i.startDrag = function(t, e, i, s, n, r, a) {
            void 0 === e && (e = !1), void 0 === i && (i = 0), void 0 === s && (s = 300), void 0 === r && (r = !1), 
            void 0 === a && (a = .92), this._$P.dragging || this._set$P("dragging", new Dragging()), 
            this._$P.dragging.start(this, t, e, i, s, n, r, a);
        }, i.stopDrag = function() {
            this._$P.dragging && this._$P.dragging.stop();
        }, i._releaseMem = function() {
            if (this._$P) {
                var t = this._$P.cacheCanvas;
                t && t.ctx && (Pool.recover("RenderContext", t.ctx), t.ctx.canvas.size(0, 0), t.ctx = null);
                var e = this._$P._filterCache;
                e && (e.destroy(), e.recycle(), this._set$P("_filterCache", null)), this._$P._isHaveGlowFilter && this._set$P("_isHaveGlowFilter", !1), 
                this._$P._isHaveGlowFilter = null;
            }
        }, i._setDisplay = function(e) {
            e || this._releaseMem(), t.prototype._setDisplay.call(this, e);
        }, i.hitTestPoint = function(t, e) {
            var i = this.globalToLocal(Point.TEMP.setTo(t, e));
            return t = i.x, e = i.y, (this._$P.hitArea ? this._$P.hitArea : this._width > 0 && this._height > 0 ? Rectangle.TEMP.setTo(0, 0, this._width, this._height) : this.getSelfBounds()).contains(t, e);
        }, i.getMousePoint = function() {
            return this.globalToLocal(Point.TEMP.setTo(Laya.stage.mouseX, Laya.stage.mouseY));
        }, i._getWords = function() {
            return null;
        }, i._addChildsToLayout = function(t) {
            var e = this._getWords();
            if (null == e && 0 == this._childs.length) return !1;
            if (e) for (var i = 0, s = e.length; i < s; i++) t.push(e[i]);
            return this._childs.forEach(function(e, i, s) {
                e._style._enableLayout() && e._addToLayout(t);
            }), !0;
        }, i._addToLayout = function(t) {
            this._style.absolute || (this._style.block ? t.push(this) : this._addChildsToLayout(t) && (this.x = this.y = 0));
        }, i._isChar = function() {
            return !1;
        }, i._getCSSStyle = function() {
            return this._style.getCSSStyle();
        }, i._setAttributes = function(t, e) {
            switch (t) {
              case "x":
                this.x = parseFloat(e);
                break;

              case "y":
                this.y = parseFloat(e);
                break;

              case "width":
                this.width = parseFloat(e);
                break;

              case "height":
                this.height = parseFloat(e);
                break;

              default:
                this[t] = e;
            }
        }, i._layoutLater = function() {
            this.parent && this.parent._layoutLater();
        }, __getset(0, i, "optimizeScrollRect", function() {
            return this._optimizeScrollRect;
        }, function(t) {
            this._optimizeScrollRect != t && (this._optimizeScrollRect = t, this.conchModel && this.conchModel.optimizeScrollRect(t));
        }), __getset(0, i, "customRenderEnable", null, function(t) {
            if (t && (this._renderType |= 1024, Render.isConchNode)) {
                e.CustomList.push(this);
                var i = new HTMLCanvas("2d");
                i._setContext(new CanvasRenderingContext2D()), this.customContext = new RenderContext(0, 0, i), 
                i.context.setCanvasType && i.context.setCanvasType(2), this.conchModel.custom(i.context);
            }
        }), __getset(0, i, "cacheAsBitmap", function() {
            return "none" !== this.cacheAs;
        }, function(t) {
            this.cacheAs = t ? this._$P.hasFilter ? "none" : "normal" : "none";
        }), __getset(0, i, "cacheAs", function() {
            return null == this._$P.cacheCanvas ? "none" : this._$P.cacheCanvas.type;
        }, function(t) {
            var e = this._$P.cacheCanvas;
            if (t !== (e ? e.type : "none")) {
                if ("none" !== t) this._getBit(1) || this._setUpNoticeType(1), e || (e = this._set$P("cacheCanvas", Pool.getItemByClass("cacheCanvas", Object))), 
                e.type = t, e.reCache = !0, this._renderType |= 16, "bitmap" == t && this.conchModel && this.conchModel.cacheAs(1), 
                this._set$P("cacheForFilters", !1); else if (this._$P.hasFilter) this._set$P("cacheForFilters", !0); else {
                    if (e) {
                        var i = e;
                        i && i.ctx && (Pool.recover("RenderContext", i.ctx), i.ctx.canvas.size(0, 0), i.ctx = null), 
                        Pool.recover("cacheCanvas", e);
                    }
                    this._$P.cacheCanvas = null, this._renderType &= -17, this.conchModel && this.conchModel.cacheAs(0);
                }
                this.repaint();
            }
        }), __getset(0, i, "zOrder", function() {
            return this._zOrder;
        }, function(t) {
            this._zOrder != t && (this._zOrder = t, this.conchModel && this.conchModel.setZOrder && this.conchModel.setZOrder(t), 
            this._parent && (t && this._parent._set$P("hasZorder", !0), Laya.timer.callLater(this._parent, this.updateZOrder)));
        }), __getset(0, i, "rotation", function() {
            return this._style._tf.rotate;
        }, function(t) {
            var e = this.getStyle();
            if (e._tf.rotate !== t) {
                e.setRotate(t), this._tfChanged = !0, this.conchModel && this.conchModel.rotate(t), 
                this._renderType |= 4;
                var i = this._parent;
                i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint());
            }
        }), __getset(0, i, "width", function() {
            return this.autoSize ? this.getSelfBounds().width : this._width;
        }, function(t) {
            this._width !== t && (this._width = t, this.conchModel && this.conchModel.size(t, this._height), 
            this.repaint());
        }), __getset(0, i, "x", function() {
            return this._x;
        }, function(t) {
            if (this._x !== t) {
                if (this.destroyed) return;
                this._x = t, this.conchModel && this.conchModel.pos(t, this._y);
                var e = this._parent;
                e && 0 === e._repaint && (e._repaint = 1, e.parentRepaint()), this._$P.maskParent && 0 === this._$P.maskParent._repaint && (this._$P.maskParent._repaint = 1, 
                this._$P.maskParent.parentRepaint());
            }
        }), __getset(0, i, "globalScaleY", function() {
            for (var t = 1, e = this; e && e !== Laya.stage; ) t *= e.scaleY, e = e.parent;
            return t;
        }), __getset(0, i, "hitArea", function() {
            return this._$P.hitArea;
        }, function(t) {
            this._set$P("hitArea", t);
        }), __getset(0, i, "staticCache", function() {
            return this._$P.staticCache;
        }, function(t) {
            this._set$P("staticCache", t), t || this.reCache();
        }), __getset(0, i, "texture", function() {
            return this._texture;
        }, function(t) {
            this._texture != t && (this._texture = t, this.graphics.cleanByTexture(t, 0, 0));
        }), __getset(0, i, "y", function() {
            return this._y;
        }, function(t) {
            if (this._y !== t) {
                if (this.destroyed) return;
                this._y = t, this.conchModel && this.conchModel.pos(this._x, t);
                var e = this._parent;
                e && 0 === e._repaint && (e._repaint = 1, e.parentRepaint()), this._$P.maskParent && 0 === this._$P.maskParent._repaint && (this._$P.maskParent._repaint = 1, 
                this._$P.maskParent.parentRepaint());
            }
        }), __getset(0, i, "height", function() {
            return this.autoSize ? this.getSelfBounds().height : this._height;
        }, function(t) {
            this._height !== t && (this._height = t, this.conchModel && this.conchModel.size(this._width, t), 
            this.repaint());
        }), __getset(0, i, "blendMode", function() {
            return this._style.blendMode;
        }, function(t) {
            this.getStyle().blendMode = t, this.conchModel && this.conchModel.blendMode(t), 
            t && "source-over" != t ? this._renderType |= 8 : this._renderType &= -9, this.parentRepaint();
        }), __getset(0, i, "scaleX", function() {
            return this._style._tf.scaleX;
        }, function(t) {
            var e = this.getStyle();
            if (e._tf.scaleX !== t) {
                e.setScaleX(t), this._tfChanged = !0, this.conchModel && this.conchModel.scale(t, e._tf.scaleY), 
                this._renderType |= 4;
                var i = this._parent;
                i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint());
            }
        }), __getset(0, i, "scaleY", function() {
            return this._style._tf.scaleY;
        }, function(t) {
            var e = this.getStyle();
            if (e._tf.scaleY !== t) {
                e.setScaleY(t), this._tfChanged = !0, this.conchModel && this.conchModel.scale(e._tf.scaleX, t), 
                this._renderType |= 4;
                var i = this._parent;
                i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint());
            }
        }), __getset(0, i, "stage", function() {
            return Laya.stage;
        }), __getset(0, i, "skewX", function() {
            return this._style._tf.skewX;
        }, function(t) {
            var e = this.getStyle();
            if (e._tf.skewX !== t) {
                e.setSkewX(t), this._tfChanged = !0, this.conchModel && this.conchModel.skew(t, e._tf.skewY), 
                this._renderType |= 4;
                var i = this._parent;
                i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint());
            }
        }), __getset(0, i, "scrollRect", function() {
            return this._style.scrollRect;
        }, function(t) {
            this.getStyle().scrollRect = t, this.repaint(), t ? (this._renderType |= 128, this.conchModel && this.conchModel.scrollRect(t.x, t.y, t.width, t.height)) : (this._renderType &= -129, 
            this.conchModel && (e.RUNTIMEVERION < "0.9.1" ? this.conchModel.removeType(64) : this.conchModel.removeType(128)));
        }), __getset(0, i, "skewY", function() {
            return this._style._tf.skewY;
        }, function(t) {
            var e = this.getStyle();
            if (e._tf.skewY !== t) {
                e.setSkewY(t), this._tfChanged = !0, this.conchModel && this.conchModel.skew(e._tf.skewX, t), 
                this._renderType |= 4;
                var i = this._parent;
                i && 0 === i._repaint && (i._repaint = 1, i.parentRepaint());
            }
        }), __getset(0, i, "transform", function() {
            return this._tfChanged ? this._adjustTransform() : this._transform;
        }, function(t) {
            this._tfChanged = !1, this._transform = t, t && (this._x = t.tx, this._y = t.ty, 
            t.tx = t.ty = 0, this.conchModel && this.conchModel.transform(t.a, t.b, t.c, t.d, this._x, this._y)), 
            t ? this._renderType |= 4 : (this._renderType &= -5, this.conchModel && this.conchModel.removeType(4)), 
            this.parentRepaint();
        }), __getset(0, i, "pivotX", function() {
            return this._style._tf.translateX;
        }, function(t) {
            this.getStyle().setTranslateX(t), this.conchModel && this.conchModel.pivot(t, this._style._tf.translateY), 
            this.repaint();
        }), __getset(0, i, "pivotY", function() {
            return this._style._tf.translateY;
        }, function(t) {
            this.getStyle().setTranslateY(t), this.conchModel && this.conchModel.pivot(this._style._tf.translateX, t), 
            this.repaint();
        }), __getset(0, i, "alpha", function() {
            return this._style.alpha;
        }, function(t) {
            this._style && this._style.alpha !== t && (t = t < 0 ? 0 : t > 1 ? 1 : t, this.getStyle().alpha = t, 
            this.conchModel && this.conchModel.alpha(t), 1 !== t ? this._renderType |= 2 : this._renderType &= -3, 
            this.parentRepaint());
        }), __getset(0, i, "visible", function() {
            return this._style.visible;
        }, function(t) {
            this._style && this._style.visible !== t && (this.getStyle().visible = t, this.conchModel && this.conchModel.visible(t), 
            this.parentRepaint());
        }), __getset(0, i, "graphics", function() {
            return this._graphics || (this.graphics = RunDriver.createGraphics());
        }, function(t) {
            this._graphics && (this._graphics._sp = null), this._graphics = t, t ? (this._renderType &= -2, 
            this._renderType |= 512, t._sp = this, this.conchModel && this.conchModel.graphics(this._graphics)) : (this._renderType &= -513, 
            this._renderType &= -2, this.conchModel && (e.RUNTIMEVERION < "0.9.1" ? this.conchModel.removeType(256) : this.conchModel.removeType(512))), 
            this.repaint();
        }), __getset(0, i, "filters", function() {
            return this._$P.filters;
        }, function(t) {
            t && 0 === t.length && (t = null), this._$P.filters != t && (this._set$P("filters", t ? t.slice() : null), 
            Render.isConchApp && (this.conchModel && (e.RUNTIMEVERION < "0.9.1" ? this.conchModel.removeType(16) : this.conchModel.removeType(32)), 
            this._$P.filters && 1 == this._$P.filters.length && this._$P.filters[0].callNative(this)), 
            Render.isWebGL && (t && t.length ? this._renderType |= 32 : this._renderType &= -33), 
            t && t.length > 0 ? (this._getBit(1) || this._setUpNoticeType(1), Render.isWebGL && 1 == t.length && t[0] instanceof laya.filters.ColorFilter || ("bitmap" != this.cacheAs && (Render.isConchNode || (this.cacheAs = "bitmap"), 
            this._set$P("cacheForFilters", !0)), this._set$P("hasFilter", !0))) : (this._set$P("hasFilter", !1), 
            this._$P.cacheForFilters && "bitmap" == this.cacheAs && (this.cacheAs = "none")), 
            this.repaint());
        }), __getset(0, i, "parent", t.prototype._$get_parent, function(t) {
            Laya.superSet(Node, this, "parent", t), t && this._getBit(2) && this._$2__onDisplay();
        }), __getset(0, i, "mask", function() {
            return this._$P._mask;
        }, function(t) {
            t && this.mask && this.mask._$P.maskParent || (t ? (this.cacheAs = "bitmap", this._set$P("_mask", t), 
            t._set$P("maskParent", this)) : (this.cacheAs = "none", this.mask && this.mask._set$P("maskParent", null), 
            this._set$P("_mask", t)), this.conchModel && this.conchModel.mask(t ? t.conchModel : null), 
            this._renderType |= 64, this.parentRepaint());
        }), __getset(0, i, "mouseEnabled", function() {
            return this._mouseEnableState > 1;
        }, function(t) {
            this._mouseEnableState = t ? 2 : 1;
        }), __getset(0, i, "globalScaleX", function() {
            for (var t = 1, e = this; e && e !== Laya.stage; ) t *= e.scaleX, e = e.parent;
            return t;
        }), __getset(0, i, "mouseX", function() {
            return this.getMousePoint().x;
        }), __getset(0, i, "mouseY", function() {
            return this.getMousePoint().y;
        }), e.fromImage = function(t) {
            return new e().loadImage(t);
        }, e.CustomList = [], __static(e, [ "RUNTIMEVERION", function() {
            return this.RUNTIMEVERION = window.conch ? conchConfig.getRuntimeVersion().substr(conchConfig.getRuntimeVersion().lastIndexOf("-") + 1) : "";
        } ]), e;
    }(Node), AudioSoundChannel = function(t) {
        function e(t) {
            this._audio = null, this._onEnd = null, this._resumePlay = null, e.__super.call(this), 
            this._onEnd = Utils.bind(this.__onEnd, this), this._resumePlay = Utils.bind(this.__resumePlay, this), 
            t.addEventListener("ended", this._onEnd), this._audio = t;
        }
        __class(e, "laya.media.h5audio.AudioSoundChannel", SoundChannel);
        var i = e.prototype;
        return i.__onEnd = function() {
            if (1 == this.loops) return this.completeHandler && (Laya.timer.once(10, this, this.__runComplete, [ this.completeHandler ], !1), 
            this.completeHandler = null), this.stop(), void this.event("complete");
            this.loops > 0 && this.loops--, this.startTime = 0, this.play();
        }, i.__resumePlay = function() {
            this._audio && this._audio.removeEventListener("canplay", this._resumePlay);
            try {
                this._audio.currentTime = this.startTime, Browser.container.appendChild(this._audio), 
                this._audio.play();
            } catch (t) {
                this.event("error");
            }
        }, i.play = function() {
            this.isStopped = !1;
            try {
                this._audio.playbackRate = SoundManager.playbackRate, this._audio.currentTime = this.startTime;
            } catch (t) {
                return void this._audio.addEventListener("canplay", this._resumePlay);
            }
            SoundManager.addChannel(this), Browser.container.appendChild(this._audio), "play" in this._audio && this._audio.play();
        }, i.stop = function() {
            this.isStopped = !0, SoundManager.removeChannel(this), this.completeHandler = null, 
            this._audio && ("pause" in this._audio && Render.isConchApp && this._audio.stop(), 
            this._audio.pause(), this._audio.removeEventListener("ended", this._onEnd), this._audio.removeEventListener("canplay", this._resumePlay), 
            Browser.onIE || this._audio != AudioSound._musicAudio && Pool.recover("audio:" + this.url, this._audio), 
            Browser.removeElement(this._audio), this._audio = null);
        }, i.pause = function() {
            this.isStopped = !0, SoundManager.removeChannel(this), "pause" in this._audio && this._audio.pause();
        }, i.resume = function() {
            this._audio && (this.isStopped = !1, SoundManager.addChannel(this), "play" in this._audio && this._audio.play());
        }, __getset(0, i, "position", function() {
            return this._audio ? this._audio.currentTime : 0;
        }), __getset(0, i, "duration", function() {
            return this._audio ? this._audio.duration : 0;
        }), __getset(0, i, "volume", function() {
            return this._audio ? this._audio.volume : 1;
        }, function(t) {
            this._audio && (this._audio.volume = t);
        }), e;
    }(), WebAudioSoundChannel = function(t) {
        function e() {
            this.audioBuffer = null, this.gain = null, this.bufferSource = null, this._currentTime = 0, 
            this._volume = 1, this._startTime = 0, this._pauseTime = 0, this._onPlayEnd = null, 
            this.context = WebAudioSound.ctx, e.__super.call(this), this._onPlayEnd = Utils.bind(this.__onPlayEnd, this), 
            this.context.createGain ? this.gain = this.context.createGain() : this.gain = this.context.createGainNode();
        }
        __class(e, "laya.media.webaudio.WebAudioSoundChannel", SoundChannel);
        var i = e.prototype;
        return i.play = function() {
            if (SoundManager.addChannel(this), this.isStopped = !1, this._clearBufferSource(), 
            this.audioBuffer) {
                var t = this.context, e = this.gain, i = t.createBufferSource();
                this.bufferSource = i, i.buffer = this.audioBuffer, i.connect(e), e && e.disconnect(), 
                e.connect(t.destination), i.onended = this._onPlayEnd, this.startTime >= this.duration && (this.startTime = 0), 
                this._startTime = Browser.now(), this.gain.gain.value = this._volume, 0 == this.loops && (i.loop = !0), 
                i.playbackRate.value = SoundManager.playbackRate, i.start(0, this.startTime), this._currentTime = 0;
            }
        }, i.__onPlayEnd = function() {
            if (1 == this.loops) return this.completeHandler && (Laya.timer.once(10, this, this.__runComplete, [ this.completeHandler ], !1), 
            this.completeHandler = null), this.stop(), void this.event("complete");
            this.loops > 0 && this.loops--, this.startTime = 0, this.play();
        }, i._clearBufferSource = function() {
            if (this.bufferSource) {
                var t = this.bufferSource;
                t.stop ? t.stop(0) : t.noteOff(0), t.disconnect(0), t.onended = null, e._tryCleanFailed || this._tryClearBuffer(t), 
                this.bufferSource = null;
            }
        }, i._tryClearBuffer = function(t) {
            if (Browser.onMac) try {
                t.buffer = WebAudioSound._miniBuffer;
            } catch (t) {
                e._tryCleanFailed = !0;
            } else try {
                t.buffer = null;
            } catch (t) {
                e._tryCleanFailed = !0;
            }
        }, i.stop = function() {
            this._clearBufferSource(), this.audioBuffer = null, this.gain && this.gain.disconnect(), 
            this.isStopped = !0, SoundManager.removeChannel(this), this.completeHandler = null, 
            SoundManager.autoReleaseSound && Laya.timer.once(5e3, null, SoundManager.disposeSoundIfNotUsed, [ this.url ], !1);
        }, i.pause = function() {
            this.isStopped || (this._pauseTime = this.position), this._clearBufferSource(), 
            this.gain && this.gain.disconnect(), this.isStopped = !0, SoundManager.removeChannel(this), 
            SoundManager.autoReleaseSound && Laya.timer.once(5e3, null, SoundManager.disposeSoundIfNotUsed, [ this.url ], !1);
        }, i.resume = function() {
            this.startTime = this._pauseTime, this.play();
        }, __getset(0, i, "position", function() {
            return this.bufferSource ? (Browser.now() - this._startTime) / 1e3 + this.startTime : 0;
        }), __getset(0, i, "duration", function() {
            return this.audioBuffer ? this.audioBuffer.duration : 0;
        }), __getset(0, i, "volume", function() {
            return this._volume;
        }, function(t) {
            this.isStopped || (this._volume = t, this.gain.gain.value = t);
        }), e._tryCleanFailed = !1, e;
    }(), Bitmap = function(t) {
        function e() {
            e.__super.call(this), this._w = 0, this._h = 0;
        }
        __class(e, "laya.resource.Bitmap", Resource);
        var i = e.prototype;
        return __getset(0, i, "width", function() {
            return this._w;
        }), __getset(0, i, "height", function() {
            return this._h;
        }), __getset(0, i, "source", function() {
            return this._source;
        }), e;
    }(), AnimationPlayerBase = function(t) {
        function e() {
            this.loop = !1, this.wrapMode = 0, this._index = 0, this._count = 0, this._isPlaying = !1, 
            this._labels = null, this._isReverse = !1, this._frameRateChanged = !1, this._controlNode = null, 
            this._actionName = null, e.__super.call(this), this._interval = Config.animationInterval, 
            this._setUpNoticeType(1);
        }
        __class(e, "laya.display.AnimationPlayerBase", t);
        var i = e.prototype;
        return i.play = function(t, e, i, s) {
            void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), void 0 === s && (s = !0), 
            this._isPlaying = !0, this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, 
            this.loop = e, this._actionName = i, this._isReverse = 1 == this.wrapMode, this.interval > 0 && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0);
        }, i._getFrameByLabel = function(t) {
            var e = 0;
            for (e = 0; e < this._count; e++) if (this._labels[e] && this._labels[e].indexOf(t) >= 0) return e;
            return 0;
        }, i._frameLoop = function() {
            if (this._isReverse) {
                if (--this._index < 0) {
                    if (!this.loop) return this._index = 0, this.stop(), void this.event("complete");
                    2 == this.wrapMode ? (this._index = this._count > 0 ? 1 : 0, this._isReverse = !1) : this._index = this._count - 1, 
                    this.event("complete");
                }
            } else if (++this._index >= this._count) {
                if (!this.loop) return this._index--, this.stop(), void this.event("complete");
                2 == this.wrapMode ? (this._index = this._count - 2 >= 0 ? this._count - 2 : 0, 
                this._isReverse = !0) : this._index = 0, this.event("complete");
            }
            this.index = this._index;
        }, i._setControlNode = function(t) {
            this._controlNode && (this._controlNode.off("display", this, this._checkResumePlaying), 
            this._controlNode.off("undisplay", this, this._checkResumePlaying)), this._controlNode = t, 
            t && t != this && (t.on("display", this, this._checkResumePlaying), t.on("undisplay", this, this._checkResumePlaying));
        }, i._setDisplay = function(e) {
            t.prototype._setDisplay.call(this, e), this._checkResumePlaying();
        }, i._checkResumePlaying = function() {
            this._isPlaying && (this._controlNode.displayedInStage ? this.play(this._index, this.loop, this._actionName) : this.clearTimer(this, this._frameLoop));
        }, i.stop = function() {
            this._isPlaying = !1, this.clearTimer(this, this._frameLoop);
        }, i.addLabel = function(t, e) {
            this._labels || (this._labels = {}), this._labels[e] || (this._labels[e] = []), 
            this._labels[e].push(t);
        }, i.removeLabel = function(t) {
            if (t) {
                if (this._labels) for (var e in this._labels) this._removeLabelFromLabelList(this._labels[e], t);
            } else this._labels = null;
        }, i._removeLabelFromLabelList = function(t, e) {
            if (t) for (var i = t.length - 1; i >= 0; i--) t[i] == e && t.splice(i, 1);
        }, i.gotoAndStop = function(t) {
            this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, this.stop();
        }, i._displayToIndex = function(t) {}, i.clear = function() {
            this.stop(), this._labels = null;
        }, __getset(0, i, "interval", function() {
            return this._interval;
        }, function(t) {
            this._interval != t && (this._frameRateChanged = !0, this._interval = t, this._isPlaying && t > 0 && this.timerLoop(t, this, this._frameLoop, null, !0, !0));
        }), __getset(0, i, "isPlaying", function() {
            return this._isPlaying;
        }), __getset(0, i, "index", function() {
            return this._index;
        }, function(t) {
            if (this._index = t, this._displayToIndex(t), this._labels && this._labels[t]) for (var e = this._labels[t], i = 0, s = e.length; i < s; i++) this.event("label", e[i]);
        }), __getset(0, i, "count", function() {
            return this._count;
        }), e.WRAP_POSITIVE = 0, e.WRAP_REVERSE = 1, e.WRAP_PINGPONG = 2, e;
    }(Sprite), Text = function(t) {
        function e() {
            this._clipPoint = null, this._currBitmapFont = null, this._text = null, this._isChanged = !1, 
            this._textWidth = 0, this._textHeight = 0, this._lines = [], this._lineWidths = [], 
            this._startX = NaN, this._startY = NaN, this._lastVisibleLineIndex = -1, this._words = null, 
            this._charSize = {}, this.underline = !1, this._underlineColor = null, e.__super.call(this), 
            this.overflow = e.VISIBLE, this._style = new CSSStyle(this), this._style.wordWrap = !1;
        }
        __class(e, "laya.display.Text", t);
        var i = e.prototype;
        return i.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._lines = null, 
            this._words && (this._words.length = 0, this._words = null);
        }, i._getBoundPointsM = function(t) {
            void 0 === t && (t = !1);
            var e = Rectangle.TEMP;
            return e.setTo(0, 0, this.width, this.height), e._getBoundPoints();
        }, i.getGraphicBounds = function(t) {
            void 0 === t && (t = !1);
            var e = Rectangle.TEMP;
            return e.setTo(0, 0, this.width, this.height), e;
        }, i._getCSSStyle = function() {
            return this._style;
        }, i.lang = function(t, i, s, n, r, a, o, h, l, u, c) {
            if (t = e.langPacks && e.langPacks[t] ? e.langPacks[t] : t, arguments.length < 2) this._text = t; else {
                for (var _ = 0, d = arguments.length; _ < d; _++) t = t.replace("{" + _ + "}", arguments[_ + 1]);
                this._text = t;
            }
        }, i._isPassWordMode = function() {
            var t = this._style.password;
            return "prompt" in this && this.prompt == this._text && (t = !1), t;
        }, i._getPassWordTxt = function(t) {
            var e;
            e = "";
            for (var i = t.length; i > 0; i--) e += "●";
            return e;
        }, i.renderText = function(t, e) {
            var i = this.graphics;
            i.clear(!0);
            var s = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + (Browser.onIPhone ? laya.display.Text._fontFamilyMap[this.font] || this.font : this.font);
            Browser.context.font = s;
            var n = this.padding, r = n[3], a = "left", o = this._lines, h = this.leading + this._charSize.height, l = this._currBitmapFont;
            l && (h = this.leading + l.getMaxHeight());
            var u = n[0];
            if (!l && this._width > 0 && this._textWidth <= this._width && ("right" == this.align ? (a = "right", 
            r = this._width - n[1]) : "center" == this.align && (a = "center", r = .5 * this._width + n[3] - n[1])), 
            this._height > 0) {
                var c = this._textHeight > this._height ? "top" : this.valign;
                "middle" === c ? u = .5 * (this._height - e * h) + n[0] - n[2] : "bottom" === c && (u = this._height - e * h - n[2]);
            }
            var _ = this._style;
            if (l && l.autoScaleSize) var d = l.fontSize / this.fontSize;
            if (this._clipPoint) if (i.save(), l && l.autoScaleSize) {
                var f = 0, p = 0;
                f = this._width ? this._width - n[3] - n[1] : this._textWidth, p = this._height ? this._height - n[0] - n[2] : this._textHeight, 
                f *= d, p *= d, i.clipRect(n[3], n[0], f, p);
            } else i.clipRect(n[3], n[0], this._width ? this._width - n[3] - n[1] : this._textWidth, this._height ? this._height - n[0] - n[2] : this._textHeight);
            var g = _.password;
            "prompt" in this && this.prompt == this._text && (g = !1);
            for (var m = 0, v = 0, y = Math.min(this._lines.length, e + t) || 1, w = t; w < y; w++) {
                var x, b = o[w];
                if (g) {
                    var C = b.length;
                    b = "";
                    for (var S = C; S > 0; S--) b += "●";
                }
                if (m = r - (this._clipPoint ? this._clipPoint.x : 0), v = u + h * w - (this._clipPoint ? this._clipPoint.y : 0), 
                this.underline && this.drawUnderline(a, m, v, w), l) {
                    var T = this.width;
                    l.autoScaleSize && (T = this.width * d), l.drawText(b, this, m, v, this.align, T);
                } else Render.isWebGL ? (this._words || (this._words = []), (x = this._words.length > w - t ? this._words[w - t] : new WordText()).setText(b)) : x = b, 
                _.stroke ? i.fillBorderText(x, m, v, s, this.color, _.strokeColor, _.stroke, a) : i.fillText(x, m, v, s, this.color, a);
            }
            if (l && l.autoScaleSize) {
                var M = 1 / d;
                this.scale(M, M);
            }
            this._clipPoint && i.restore(), this._startX = r, this._startY = u;
        }, i.drawUnderline = function(t, e, i, s) {
            var n = this._lineWidths[s];
            switch (t) {
              case "center":
                e -= n / 2;
                break;

              case "right":
                e -= n;
            }
            i += this._charSize.height, this._graphics.drawLine(e, i, e + n, i, this.underlineColor || this.color, 1);
        }, i.typeset = function() {
            if (this._isChanged = !1, !this._text) return this._clipPoint = null, this._textWidth = this._textHeight = 0, 
            void this.graphics.clear(!0);
            Browser.context.font = this._getCSSStyle().font, this._lines.length = 0, this._lineWidths.length = 0, 
            this._isPassWordMode() ? this.parseLines(this._getPassWordTxt(this._text)) : this.parseLines(this._text), 
            this.evalTextSize(), this.checkEnabledViewportOrNot() ? this._clipPoint || (this._clipPoint = new Point(0, 0)) : this._clipPoint = null;
            var t = this._lines.length;
            if (this.overflow != e.VISIBLE) {
                var i = this.overflow == e.HIDDEN ? Math.floor : Math.ceil;
                t = Math.min(t, i((this.height - this.padding[0] - this.padding[2]) / (this.leading + this._charSize.height)));
            }
            var s = this.scrollY / (this._charSize.height + this.leading) | 0;
            this.renderText(s, t), this.repaint();
        }, i.evalTextSize = function() {
            var t = NaN, e = NaN;
            t = Math.max.apply(this, this._lineWidths), e = this._currBitmapFont ? this._lines.length * (this._currBitmapFont.getMaxHeight() + this.leading) + this.padding[0] + this.padding[2] : this._lines.length * (this._charSize.height + this.leading) + this.padding[0] + this.padding[2], 
            t == this._textWidth && e == this._textHeight || (this._textWidth = t, this._textHeight = e, 
            this._width && this._height || this.conchModel && this.conchModel.size(this._width || this._textWidth, this._height || this._textHeight));
        }, i.checkEnabledViewportOrNot = function() {
            return this.overflow == e.SCROLL && (this._width > 0 && this._textWidth > this._width || this._height > 0 && this._textHeight > this._height);
        }, i.changeText = function(t) {
            this._text !== t && (this.lang(t + ""), this._graphics && this._graphics.replaceText(this._text) || this.typeset());
        }, i.parseLines = function(t) {
            var i = this.wordWrap || this.overflow == e.HIDDEN;
            if (i) var s = this.getWordWrapWidth();
            if (this._currBitmapFont) this._charSize.width = this._currBitmapFont.getMaxWidth(), 
            this._charSize.height = this._currBitmapFont.getMaxHeight(); else {
                var n = Browser.context.measureText(e._testWord);
                this._charSize.width = n.width, this._charSize.height = n.height || this.fontSize;
            }
            for (var r = t.replace(/\r\n/g, "\n").split("\n"), a = 0, o = r.length; a < o; a++) {
                var h = r[a];
                i ? this.parseLine(h, s) : (this._lineWidths.push(this.getTextWidth(h)), this._lines.push(h));
            }
        }, i.parseLine = function(t, i) {
            Browser.context;
            var s, n = this._lines, r = 0, a = NaN, o = NaN, h = 0;
            if ((a = this.getTextWidth(t)) <= i) return n.push(t), void this._lineWidths.push(a);
            a = this._charSize.width, 0 == (r = Math.floor(i / a)) && (r = 1), o = a = this.getTextWidth(t.substring(0, r));
            for (var l = r, u = t.length; l < u; l++) if (a = this.getTextWidth(t.charAt(l)), 
            (o += a) > i) if (this.wordWrap) {
                var c = t.substring(h, l);
                if (c.charCodeAt(c.length - 1) < 255 ? (s = /(?:\w|-)+$/.exec(c)) && (l = s.index + h, 
                0 == s.index ? l += c.length : c = t.substring(h, l)) : e.RightToLeft && (s = /([\u0600-\u06FF])+$/.exec(c)) && (l = s.index + h, 
                0 == s.index ? l += c.length : c = t.substring(h, l)), n.push(c), this._lineWidths.push(o - a), 
                h = l, !(l + r < u)) {
                    n.push(t.substring(h, u)), this._lineWidths.push(this.getTextWidth(n[n.length - 1])), 
                    h = -1;
                    break;
                }
                l += r, o = a = this.getTextWidth(t.substring(h, l)), l--;
            } else if (this.overflow == e.HIDDEN) return n.push(t.substring(0, l)), void this._lineWidths.push(this.getTextWidth(n[n.length - 1]));
            this.wordWrap && -1 != h && (n.push(t.substring(h, u)), this._lineWidths.push(this.getTextWidth(n[n.length - 1])));
        }, i.getTextWidth = function(t) {
            return this._currBitmapFont ? this._currBitmapFont.getTextWidth(t) : Browser.context.measureText(t).width;
        }, i.getWordWrapWidth = function() {
            var t = this.padding, e = NaN;
            return (e = this._currBitmapFont && this._currBitmapFont.autoScaleSize ? this._width * (this._currBitmapFont.fontSize / this.fontSize) : this._width) <= 0 && (e = this.wordWrap ? 100 : Browser.width), 
            e <= 0 && (e = 100), e - t[3] - t[1];
        }, i.getCharPoint = function(t, e) {
            this._isChanged && Laya.timer.runCallLater(this, this.typeset);
            for (var i = 0, s = this._lines, n = 0, r = 0, a = s.length; r < a; r++) {
                if (i += s[r].length, t < i) {
                    var o = r;
                    break;
                }
                n = i;
            }
            var h = (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + this.fontSize + "px " + this.font;
            Browser.context.font = h;
            var l = this.getTextWidth(this._text.substring(n, t));
            return (e || new Point()).setTo(this._startX + l - (this._clipPoint ? this._clipPoint.x : 0), this._startY + o * (this._charSize.height + this.leading) - (this._clipPoint ? this._clipPoint.y : 0));
        }, __getset(0, i, "width", function() {
            return this._width ? this._width : this.textWidth + this.padding[1] + this.padding[3];
        }, function(t) {
            t != this._width && (Laya.superSet(Sprite, this, "width", t), this.isChanged = !0);
        }), __getset(0, i, "textWidth", function() {
            return this._isChanged && Laya.timer.runCallLater(this, this.typeset), this._textWidth;
        }), __getset(0, i, "height", function() {
            return this._height ? this._height : this.textHeight + this.padding[0] + this.padding[2];
        }, function(t) {
            t != this._height && (Laya.superSet(Sprite, this, "height", t), this.isChanged = !0);
        }), __getset(0, i, "textHeight", function() {
            return this._isChanged && Laya.timer.runCallLater(this, this.typeset), this._textHeight;
        }), __getset(0, i, "padding", function() {
            return this._getCSSStyle().padding;
        }, function(t) {
            this._getCSSStyle().padding = t, this.isChanged = !0;
        }), __getset(0, i, "bold", function() {
            return this._getCSSStyle().bold;
        }, function(t) {
            this._getCSSStyle().bold = t, this.isChanged = !0;
        }), __getset(0, i, "text", function() {
            return this._text || "";
        }, function(t) {
            this._text !== t && (this.lang(t + ""), this.isChanged = !0, this.event("change"));
        }), __getset(0, i, "color", function() {
            return this._getCSSStyle().color;
        }, function(t) {
            this._getCSSStyle().color != t && (this._getCSSStyle().color = t, !this._isChanged && this._graphics ? this._graphics.replaceTextColor(this.color) : this.isChanged = !0);
        }), __getset(0, i, "font", function() {
            return this._getCSSStyle().fontFamily;
        }, function(t) {
            this._currBitmapFont && (this._currBitmapFont = null, this.scale(1, 1)), e._bitmapFonts && e._bitmapFonts[t] && (this._currBitmapFont = e._bitmapFonts[t]), 
            this._getCSSStyle().fontFamily = t, this.isChanged = !0;
        }), __getset(0, i, "fontSize", function() {
            return this._getCSSStyle().fontSize;
        }, function(t) {
            this._getCSSStyle().fontSize = t, this.isChanged = !0;
        }), __getset(0, i, "italic", function() {
            return this._getCSSStyle().italic;
        }, function(t) {
            this._getCSSStyle().italic = t, this.isChanged = !0;
        }), __getset(0, i, "align", function() {
            return this._getCSSStyle().align;
        }, function(t) {
            this._getCSSStyle().align = t, this.isChanged = !0;
        }), __getset(0, i, "valign", function() {
            return this._getCSSStyle().valign;
        }, function(t) {
            this._getCSSStyle().valign = t, this.isChanged = !0;
        }), __getset(0, i, "wordWrap", function() {
            return this._getCSSStyle().wordWrap;
        }, function(t) {
            this._getCSSStyle().wordWrap = t, this.isChanged = !0;
        }), __getset(0, i, "leading", function() {
            return this._getCSSStyle().leading;
        }, function(t) {
            this._getCSSStyle().leading = t, this.isChanged = !0;
        }), __getset(0, i, "bgColor", function() {
            return this._getCSSStyle().backgroundColor;
        }, function(t) {
            this._getCSSStyle().backgroundColor = t, this.isChanged = !0;
        }), __getset(0, i, "borderColor", function() {
            return this._getCSSStyle().borderColor;
        }, function(t) {
            this._getCSSStyle().borderColor = t, this.isChanged = !0;
        }), __getset(0, i, "stroke", function() {
            return this._getCSSStyle().stroke;
        }, function(t) {
            this._getCSSStyle().stroke = t, this.isChanged = !0;
        }), __getset(0, i, "strokeColor", function() {
            return this._getCSSStyle().strokeColor;
        }, function(t) {
            this._getCSSStyle().strokeColor = t, this.isChanged = !0;
        }), __getset(0, i, "isChanged", null, function(t) {
            this._isChanged !== t && (this._isChanged = t, t && Laya.timer.callLater(this, this.typeset));
        }), __getset(0, i, "scrollX", function() {
            return this._clipPoint ? this._clipPoint.x : 0;
        }, function(t) {
            if (!(this.overflow != e.SCROLL || this.textWidth < this._width) && this._clipPoint) {
                t = t < this.padding[3] ? this.padding[3] : t;
                var i = this._textWidth - this._width;
                t = t > i ? i : t;
                var s = this._height / (this._charSize.height + this.leading) | 1;
                this._clipPoint.x = t, this.renderText(this._lastVisibleLineIndex, s);
            }
        }), __getset(0, i, "scrollY", function() {
            return this._clipPoint ? this._clipPoint.y : 0;
        }, function(t) {
            if (!(this.overflow != e.SCROLL || this.textHeight < this._height) && this._clipPoint) {
                t = t < this.padding[0] ? this.padding[0] : t;
                var i = this._textHeight - this._height, s = (t = t > i ? i : t) / (this._charSize.height + this.leading) | 0;
                this._lastVisibleLineIndex = s;
                var n = 1 + (this._height / (this._charSize.height + this.leading) | 0);
                this._clipPoint.y = t, this.renderText(s, n);
            }
        }), __getset(0, i, "maxScrollX", function() {
            return this.textWidth < this._width ? 0 : this._textWidth - this._width;
        }), __getset(0, i, "maxScrollY", function() {
            return this.textHeight < this._height ? 0 : this._textHeight - this._height;
        }), __getset(0, i, "lines", function() {
            return this._isChanged && this.typeset(), this._lines;
        }), __getset(0, i, "underlineColor", function() {
            return this._underlineColor;
        }, function(t) {
            this._underlineColor = t, this._isChanged = !0, this.typeset();
        }), e.registerBitmapFont = function(t, i) {
            e._bitmapFonts || (e._bitmapFonts = {}), e._bitmapFonts[t] = i;
        }, e.unregisterBitmapFont = function(t, i) {
            if (void 0 === i && (i = !0), e._bitmapFonts && e._bitmapFonts[t]) {
                var s = e._bitmapFonts[t];
                i && s.destroy(), delete e._bitmapFonts[t];
            }
        }, e.setTextRightToLeft = function() {
            var t;
            (t = Browser.canvas.source.style).display = "none", t.position = "absolute", t.direction = "rtl", 
            Render._mainCanvas.source.style.direction = "rtl", laya.display.Text.RightToLeft = !0, 
            Browser.document.body.appendChild(Browser.canvas.source);
        }, e.supportFont = function(t) {
            Browser.context.font = "10px sans-serif";
            var e = Browser.context.measureText("abcji").width;
            Browser.context.font = "10px " + t;
            var i = Browser.context.measureText("abcji").width;
            return console.log(e, i), e !== i;
        }, e._testWord = "游", e.langPacks = null, e.VISIBLE = "visible", e.SCROLL = "scroll", 
        e.HIDDEN = "hidden", e.CharacterCache = !0, e.RightToLeft = !1, e._bitmapFonts = null, 
        __static(e, [ "_fontFamilyMap", function() {
            return this._fontFamilyMap = {
                "报隶": "报隶-简",
                "黑体": "黑体-简",
                "楷体": "楷体-简",
                "兰亭黑": "兰亭黑-简",
                "隶变": "隶变-简",
                "凌慧体": "凌慧体-简",
                "翩翩体": "翩翩体-简",
                "苹方": "苹方-简",
                "手札体": "手札体-简",
                "宋体": "宋体-简",
                "娃娃体": "娃娃体-简",
                "魏碑": "魏碑-简",
                "行楷": "行楷-简",
                "雅痞": "雅痞-简",
                "圆体": "圆体-简"
            };
        } ]), e;
    }(Sprite), Stage = function(t) {
        function e() {
            this.focus = null, this.designWidth = 0, this.designHeight = 0, this.canvasRotation = !1, 
            this.canvasDegree = 0, this.renderingEnabled = !0, this.screenAdaptationEnabled = !0, 
            this._screenMode = "none", this._scaleMode = "noscale", this._alignV = "top", this._alignH = "left", 
            this._bgColor = "black", this._mouseMoveTime = 0, this._renderCount = 0, this._frameStartTime = NaN, 
            this._isFocused = !1, this._isVisibility = !1, this._scenes = null, this._frameRate = "fast", 
            e.__super.call(this), this.offset = new Point(), this._canvasTransform = new Matrix(), 
            this._previousOrientation = Browser.window.orientation;
            var t = this;
            this.transform = Matrix.create(), this._scenes = [], this.mouseEnabled = !0, this.hitTestPrior = !0, 
            this.autoSize = !1, this._displayedInStage = !0, this._isFocused = !0, this._isVisibility = !0;
            var i = Browser.window, s = this;
            i.addEventListener("focus", function() {
                t._isFocused = !0, s.event("focus"), s.event("focuschange");
            }), i.addEventListener("blur", function() {
                t._isFocused = !1, s.event("blur"), s.event("focuschange"), s._isInputting() && (Input.inputElement.target.focus = !1);
            });
            var n = "visibilityState", r = "visibilitychange", a = i.document;
            void 0 !== a.hidden ? (r = "visibilitychange", n = "visibilityState") : void 0 !== a.mozHidden ? (r = "mozvisibilitychange", 
            n = "mozVisibilityState") : void 0 !== a.msHidden ? (r = "msvisibilitychange", n = "msVisibilityState") : void 0 !== a.webkitHidden && (r = "webkitvisibilitychange", 
            n = "webkitVisibilityState"), i.document.addEventListener(r, function() {
                "hidden" == Browser.document[n] ? s._setStageVisible(!1) : s._setStageVisible(!0);
            }), i.document.addEventListener("qbrowserVisibilityChange", function(t) {
                s._setStageVisible(!t.hidden);
            }), i.addEventListener("resize", function() {
                var e = Browser.window.orientation;
                null != e && e != t._previousOrientation && s._isInputting() && (Input.inputElement.target.focus = !1), 
                t._previousOrientation = e, s._isInputting() || s._resetCanvas();
            }), i.addEventListener("orientationchange", function(t) {
                s._resetCanvas();
            }), this.on("mousemove", this, this._onmouseMove), Browser.onMobile && this.on("mousedown", this, this._onmouseMove);
        }
        __class(e, "laya.display.Stage", t);
        var i = e.prototype;
        return i._setStageVisible = function(t) {
            this._isVisibility != t && (this._isVisibility = t, this._isVisibility || this._isInputting() && (Input.inputElement.target.focus = !1), 
            this.event("visibilitychange"));
        }, i._isInputting = function() {
            return Browser.onMobile && Input.isInputting;
        }, i._changeCanvasSize = function() {
            this.setScreenSize(Browser.clientWidth * Browser.pixelRatio, Browser.clientHeight * Browser.pixelRatio);
        }, i._resetCanvas = function() {
            if (this.screenAdaptationEnabled) {
                var t = Render._mainCanvas;
                t.source.style, t.size(1, 1), Laya.timer.once(100, this, this._changeCanvasSize);
            }
        }, i.setScreenSize = function(t, e) {
            var i = !1;
            if ("none" !== this._screenMode && (i = (t / e < 1 ? "vertical" : "horizontal") !== this._screenMode)) {
                var s = e;
                e = t, t = s;
            }
            this.canvasRotation = i;
            var n = Render._mainCanvas, r = n.source.style, a = this._canvasTransform.identity(), o = this._scaleMode, h = t / this.designWidth, l = e / this.designHeight, u = this.designWidth, c = this.designHeight, _ = t, d = e, f = Browser.pixelRatio;
            switch (this._width = this.designWidth, this._height = this.designHeight, o) {
              case "noscale":
                h = l = 1, _ = this.designWidth, d = this.designHeight;
                break;

              case "showall":
                h = l = Math.min(h, l), u = _ = Math.round(this.designWidth * h), c = d = Math.round(this.designHeight * l);
                break;

              case "noborder":
                h = l = Math.max(h, l), _ = Math.round(this.designWidth * h), d = Math.round(this.designHeight * l);
                break;

              case "full":
                h = l = 1, this._width = u = t, this._height = c = e;
                break;

              case "fixedwidth":
                l = h, this._height = c = Math.round(e / h);
                break;

              case "fixedheight":
                h = l, this._width = u = Math.round(t / l);
                break;

              case "fixedauto":
                t / e < this.designWidth / this.designHeight ? (l = h, this._height = c = Math.round(e / h)) : (h = l, 
                this._width = u = Math.round(t / l));
            }
            this.conchModel && this.conchModel.size(this._width, this._height), h *= this.scaleX, 
            l *= this.scaleY, 1 === h && 1 === l ? this.transform.identity() : (this.transform.a = this._formatData(h / (_ / u)), 
            this.transform.d = this._formatData(l / (d / c)), this.conchModel && this.conchModel.scale(this.transform.a, this.transform.d)), 
            n.size(u, c), RunDriver.changeWebGLSize(u, c), a.scale(_ / u / f, d / c / f), "left" === this._alignH ? this.offset.x = 0 : "right" === this._alignH ? this.offset.x = t - _ : this.offset.x = .5 * (t - _) / f, 
            "top" === this._alignV ? this.offset.y = 0 : "bottom" === this._alignV ? this.offset.y = e - d : this.offset.y = .5 * (e - d) / f, 
            this.offset.x = Math.round(this.offset.x), this.offset.y = Math.round(this.offset.y), 
            a.translate(this.offset.x, this.offset.y), this.canvasDegree = 0, i && ("horizontal" === this._screenMode ? (a.rotate(Math.PI / 2), 
            a.translate(e / f, 0), this.canvasDegree = 90) : (a.rotate(-Math.PI / 2), a.translate(0, t / f), 
            this.canvasDegree = -90)), a.a = this._formatData(a.a), a.d = this._formatData(a.d), 
            a.tx = this._formatData(a.tx), a.ty = this._formatData(a.ty), r.transformOrigin = r.webkitTransformOrigin = r.msTransformOrigin = r.mozTransformOrigin = r.oTransformOrigin = "0px 0px 0px", 
            r.transform = r.webkitTransform = r.msTransform = r.mozTransform = r.oTransform = "matrix(" + a.toString() + ")", 
            a.translate(parseInt(r.left) || 0, parseInt(r.top) || 0), this.visible = !0, this._repaint = 1, 
            this.event("resize");
        }, i._formatData = function(t) {
            return Math.abs(t) < 1e-6 ? 0 : Math.abs(1 - t) < .001 ? t > 0 ? 1 : -1 : t;
        }, i.getMousePoint = function() {
            return Point.TEMP.setTo(this.mouseX, this.mouseY);
        }, i.repaint = function() {
            this._repaint = 1;
        }, i.parentRepaint = function() {}, i._loop = function() {
            return this.render(Render.context, 0, 0), !0;
        }, i._onmouseMove = function(t) {
            this._mouseMoveTime = Browser.now();
        }, i.getTimeFromFrameStart = function() {
            return Browser.now() - this._frameStartTime;
        }, i.render = function(e, i, s) {
            if ("sleep" === this._frameRate && !Render.isConchApp) {
                var n = Browser.now();
                if (!(n - this._frameStartTime >= 1e3)) return;
                this._frameStartTime = n;
            }
            if (this._renderCount++, Render.isFlash && this.repaint(), this._style.visible) {
                this._frameStartTime = Browser.now();
                var r = "slow" !== ("mouse" === this._frameRate ? this._frameStartTime - this._mouseMoveTime < 2e3 ? "fast" : "slow" : this._frameRate), a = this._renderCount % 2 == 0;
                if (Stat.renderSlow = !r, r || a || Render.isConchApp) {
                    Stat.loopCount++, MouseManager.instance.runEvent(), Laya.timer._update(), RunDriver.update3DLoop();
                    var o, h = 0, l = 0;
                    if (Render.isConchNode) for (h = 0, l = this._scenes.length; h < l; h++) (o = this._scenes[h]) && o._updateSceneConch(); else for (h = 0, 
                    l = this._scenes.length; h < l; h++) (o = this._scenes[h]) && o._updateScene();
                    if (Render.isConchNode) {
                        var u = Sprite.CustomList;
                        for (h = 0, l = u.length; h < l; h++) {
                            var c = u[h];
                            c.customRender(c.customContext, 0, 0);
                        }
                        return;
                    }
                }
                Render.isConchNode || !this.renderingEnabled || !r && a || (Render.isWebGL ? (e.clear(), 
                t.prototype.render.call(this, e, i, s), Stat._show && Stat._sp && Stat._sp.render(e, i, s), 
                RunDriver.clear(this._bgColor), RunDriver.beginFlush(), e.flush(), RunDriver.endFinish(), 
                VectorGraphManager.instance && VectorGraphManager.getInstance().endDispose()) : (RunDriver.clear(this._bgColor), 
                t.prototype.render.call(this, e, i, s), Stat._show && Stat._sp && Stat._sp.render(e, i, s)));
            } else this._renderCount % 5 == 0 && (Stat.loopCount++, MouseManager.instance.runEvent(), 
            Laya.timer._update());
        }, i._requestFullscreen = function() {
            var t = Browser.document.documentElement;
            t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
        }, i._fullScreenChanged = function() {
            Laya.stage.event("fullscreenchange");
        }, i.exitFullscreen = function() {
            var t = Browser.document;
            t.exitFullscreen ? t.exitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen();
        }, __getset(0, i, "clientScaleX", function() {
            return this._transform ? this._transform.getScaleX() : 1;
        }), __getset(0, i, "desginHeight", function() {
            return console.debug("desginHeight已经弃用，请使用designHeight代替"), this.designHeight;
        }), __getset(0, i, "frameRate", function() {
            return this._frameRate;
        }, function(t) {
            if (this._frameRate = t, Render.isConchApp) switch (this._frameRate) {
              case "slow":
                Browser.window.conch && Browser.window.conchConfig.setSlowFrame && Browser.window.conchConfig.setSlowFrame(!0);
                break;

              case "fast":
                Browser.window.conch && Browser.window.conchConfig.setSlowFrame && Browser.window.conchConfig.setSlowFrame(!1);
                break;

              case "mouse":
                Browser.window.conch && Browser.window.conchConfig.setMouseFrame && Browser.window.conchConfig.setMouseFrame(2e3);
                break;

              case "sleep":
                Browser.window.conch && Browser.window.conchConfig.setLimitFPS && Browser.window.conchConfig.setLimitFPS(1);
                break;

              default:
                throw new Error("Stage:frameRate invalid.");
            }
        }), __getset(0, i, "clientScaleY", function() {
            return this._transform ? this._transform.getScaleY() : 1;
        }), __getset(0, i, "width", t.prototype._$get_width, function(t) {
            this.designWidth = t, Laya.superSet(Sprite, this, "width", t), Laya.timer.callLater(this, this._changeCanvasSize);
        }), __getset(0, i, "alignH", function() {
            return this._alignH;
        }, function(t) {
            this._alignH = t, Laya.timer.callLater(this, this._changeCanvasSize);
        }), __getset(0, i, "isFocused", function() {
            return this._isFocused;
        }), __getset(0, i, "height", t.prototype._$get_height, function(t) {
            this.designHeight = t, Laya.superSet(Sprite, this, "height", t), Laya.timer.callLater(this, this._changeCanvasSize);
        }), __getset(0, i, "transform", function() {
            return this._tfChanged && this._adjustTransform(), this._transform = this._transform || Matrix.create();
        }, t.prototype._$set_transform), __getset(0, i, "isVisibility", function() {
            return this._isVisibility;
        }), __getset(0, i, "desginWidth", function() {
            return console.debug("desginWidth已经弃用，请使用designWidth代替"), this.designWidth;
        }), __getset(0, i, "scaleMode", function() {
            return this._scaleMode;
        }, function(t) {
            this._scaleMode = t, Laya.timer.callLater(this, this._changeCanvasSize);
        }), __getset(0, i, "alignV", function() {
            return this._alignV;
        }, function(t) {
            this._alignV = t, Laya.timer.callLater(this, this._changeCanvasSize);
        }), __getset(0, i, "bgColor", function() {
            return this._bgColor;
        }, function(t) {
            this._bgColor = t, this.conchModel && this.conchModel.bgColor(t), Render.isWebGL && (t && "black" !== t && "#000000" !== t ? e._wgColor = Color.create(t)._color : Browser.onMiniGame || (e._wgColor = null)), 
            Browser.onLimixiu ? e._wgColor = Color.create(t)._color : Render.canvas.style.background = t || "none";
        }), __getset(0, i, "mouseX", function() {
            return Math.round(MouseManager.instance.mouseX / this.clientScaleX);
        }), __getset(0, i, "mouseY", function() {
            return Math.round(MouseManager.instance.mouseY / this.clientScaleY);
        }), __getset(0, i, "screenMode", function() {
            return this._screenMode;
        }, function(t) {
            this._screenMode = t;
        }), __getset(0, i, "visible", t.prototype._$get_visible, function(t) {
            this.visible !== t && (Laya.superSet(Sprite, this, "visible", t), Render._mainCanvas.source.style.visibility = t ? "visible" : "hidden");
        }), __getset(0, i, "fullScreenEnabled", null, function(t) {
            var e = Browser.document, i = Render.canvas;
            t ? (i.addEventListener("mousedown", this._requestFullscreen), i.addEventListener("touchstart", this._requestFullscreen), 
            e.addEventListener("fullscreenchange", this._fullScreenChanged), e.addEventListener("mozfullscreenchange", this._fullScreenChanged), 
            e.addEventListener("webkitfullscreenchange", this._fullScreenChanged), e.addEventListener("msfullscreenchange", this._fullScreenChanged)) : (i.removeEventListener("mousedown", this._requestFullscreen), 
            i.removeEventListener("touchstart", this._requestFullscreen), e.removeEventListener("fullscreenchange", this._fullScreenChanged), 
            e.removeEventListener("mozfullscreenchange", this._fullScreenChanged), e.removeEventListener("webkitfullscreenchange", this._fullScreenChanged), 
            e.removeEventListener("msfullscreenchange", this._fullScreenChanged));
        }), e.SCALE_NOSCALE = "noscale", e.SCALE_EXACTFIT = "exactfit", e.SCALE_SHOWALL = "showall", 
        e.SCALE_NOBORDER = "noborder", e.SCALE_FULL = "full", e.SCALE_FIXED_WIDTH = "fixedwidth", 
        e.SCALE_FIXED_HEIGHT = "fixedheight", e.SCALE_FIXED_AUTO = "fixedauto", e.ALIGN_LEFT = "left", 
        e.ALIGN_RIGHT = "right", e.ALIGN_CENTER = "center", e.ALIGN_TOP = "top", e.ALIGN_MIDDLE = "middle", 
        e.ALIGN_BOTTOM = "bottom", e.SCREEN_NONE = "none", e.SCREEN_HORIZONTAL = "horizontal", 
        e.SCREEN_VERTICAL = "vertical", e.FRAME_FAST = "fast", e.FRAME_SLOW = "slow", e.FRAME_MOUSE = "mouse", 
        e.FRAME_SLEEP = "sleep", e._wgColor = null, e.FRAME_MOUSE_THREDHOLD = 2e3, e;
    }(Sprite), SoundNode = function(t) {
        function e() {
            this.url = null, this._channel = null, this._tar = null, this._playEvents = null, 
            this._stopEvents = null, e.__super.call(this), this.visible = !1, this.on("added", this, this._onParentChange), 
            this.on("removed", this, this._onParentChange);
        }
        __class(e, "laya.media.SoundNode", Sprite);
        var i = e.prototype;
        return i._onParentChange = function() {
            this.target = this.parent;
        }, i.play = function(t, e) {
            void 0 === t && (t = 1), isNaN(t) && (t = 1), this.url && (this.stop(), this._channel = SoundManager.playSound(this.url, t, e));
        }, i.stop = function() {
            this._channel && !this._channel.isStopped && this._channel.stop(), this._channel = null;
        }, i._setPlayAction = function(t, e, i, s) {
            void 0 === s && (s = !0), this[i] && t && (s ? t.on(e, this, this[i]) : t.off(e, this, this[i]));
        }, i._setPlayActions = function(t, e, i, s) {
            if (void 0 === s && (s = !0), t && e) {
                var n = e.split(","), r = 0, a = 0;
                for (a = n.length, r = 0; r < a; r++) this._setPlayAction(t, n[r], i, s);
            }
        }, __getset(0, i, "playEvent", null, function(t) {
            this._playEvents = t, t && this._tar && this._setPlayActions(this._tar, t, "play");
        }), __getset(0, i, "target", null, function(t) {
            this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !1), this._setPlayActions(this._tar, this._stopEvents, "stop", !1)), 
            this._tar = t, this._tar && (this._setPlayActions(this._tar, this._playEvents, "play", !0), 
            this._setPlayActions(this._tar, this._stopEvents, "stop", !0));
        }), __getset(0, i, "stopEvent", null, function(t) {
            this._stopEvents = t, t && this._tar && this._setPlayActions(this._tar, t, "stop");
        }), e;
    }(), FileBitmap = function(t) {
        function e() {
            this._src = null, this._onload = null, this._onerror = null, e.__super.call(this);
        }
        __class(e, "laya.resource.FileBitmap", Bitmap);
        var i = e.prototype;
        return __getset(0, i, "src", function() {
            return this._src;
        }, function(t) {
            this._src = t;
        }), __getset(0, i, "onload", null, function(t) {}), __getset(0, i, "onerror", null, function(t) {}), 
        e;
    }(), HTMLCanvas = function(t) {
        function e(t, i) {
            this._is2D = !1, e.__super.call(this);
            var s = this;
            if (this._source = this, "2D" === t || "AUTO" === t && !Render.isWebGL) {
                this._is2D = !0, this._source = i || Browser.createElement("canvas"), this._w = this._source.width, 
                this._h = this._source.height;
                var n = this;
                n.getContext = function(t, e) {
                    if (s._ctx) return s._ctx;
                    var i = s._ctx = s._source.getContext(t, e);
                    return i && (i._canvas = n, Render.isFlash || Browser.onLimixiu || (i.size = function(t, e) {})), 
                    i;
                };
            }
            this.lock = !0;
        }
        __class(e, "laya.resource.HTMLCanvas", Bitmap);
        var i = e.prototype;
        return i.clear = function() {
            this._ctx && this._ctx.clear();
        }, i.destroy = function() {
            this._ctx && this._ctx.destroy(), this._ctx = null, laya.resource.Resource.prototype.destroy.call(this);
        }, i.release = function() {}, i._setContext = function(t) {
            this._ctx = t;
        }, i.getContext = function(t, i) {
            return this._ctx ? this._ctx : this._ctx = e._createContext(this);
        }, i.getMemSize = function() {
            return 0;
        }, i.size = function(t, e) {
            (this._w != t || this._h != e || this._source && (this._source.width != t || this._source.height != e)) && (this._w = t, 
            this._h = e, this.memorySize = this._w * this._h * 4, this._ctx && this._ctx.size(t, e), 
            this._source && (this._source.height = e, this._source.width = t));
        }, i.getCanvas = function() {
            return this._source;
        }, i.toBase64 = function(t, e, i) {
            if (this._source) if (Render.isConchApp && this._source.toBase64) this._source.toBase64(t, e, i); else {
                var s = this._source.toDataURL(t, e);
                i.call(this, s);
            }
        }, __getset(0, i, "context", function() {
            return this._ctx;
        }), __getset(0, i, "asBitmap", null, function(t) {}), e.create = function(t, i) {
            return new e(t, i);
        }, e.TYPE2D = "2D", e.TYPE3D = "3D", e.TYPEAUTO = "AUTO", e._createContext = null, 
        e;
    }(), HTMLSubImage = function(t) {
        function e(t, i, s, n, r, a, o, h) {
            throw e.__super.call(this), new Error("不允许new！");
        }
        return __class(e, "laya.resource.HTMLSubImage", Bitmap), e.create = function(t, i, s, n, r, a, o, h) {
            return void 0 === h && (h = !1), new e(t, i, s, n, r, a, o, h);
        }, e;
    }(), Animation = function(t) {
        function e() {
            this._frames = null, this._url = null, e.__super.call(this), this._setControlNode(this);
        }
        __class(e, "laya.display.Animation", t);
        var i = e.prototype;
        return i.destroy = function(t) {
            void 0 === t && (t = !0), this.stop(), laya.display.Sprite.prototype.destroy.call(this, t), 
            this._frames = null, this._labels = null;
        }, i.play = function(t, e, i, s) {
            void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), void 0 === s && (s = !0), 
            i && this._setFramesFromCache(i, s), this._isPlaying = !0, this.index = "string" == typeof t ? this._getFrameByLabel(t) : t, 
            this.loop = e, this._actionName = i, this._isReverse = 1 == this.wrapMode, this._frames && this.interval > 0 && this.timerLoop(this.interval, this, this._frameLoop, null, !0, !0);
        }, i._setFramesFromCache = function(t, i) {
            if (void 0 === i && (i = !1), this._url && (t = this._url + "#" + t), t && e.framesMap[t]) {
                var s;
                return (s = e.framesMap[t]) instanceof Array ? (this._frames = e.framesMap[t], this._count = this._frames.length) : (s.nodeRoot && (e.framesMap[t] = this._parseGraphicAnimationByData(s), 
                s = e.framesMap[t]), this._frames = s.frames, this._count = this._frames.length, 
                this._frameRateChanged || (this._interval = s.interval), this._labels = this._copyLabels(s.labels)), 
                !0;
            }
            return i && console.log("ani not found:", t), !1;
        }, i._copyLabels = function(t) {
            if (!t) return null;
            var e;
            e = {};
            var i;
            for (i in t) e[i] = Utils.copyArray([], t[i]);
            return e;
        }, i._frameLoop = function() {
            this._style.visible && this._style.alpha > .01 && t.prototype._frameLoop.call(this);
        }, i._displayToIndex = function(t) {
            this._frames && (this.graphics = this._frames[t]);
        }, i.clear = function() {
            this.stop(), this.graphics = null, this._frames = null, this._labels = null;
        }, i.loadImages = function(t, i) {
            return void 0 === i && (i = ""), this._url = "", this._setFramesFromCache(i) || (this.frames = e.framesMap[i] ? e.framesMap[i] : e.createFrames(t, i)), 
            this;
        }, i.loadAtlas = function(t, i, s) {
            function n(n) {
                t === n && (r.frames = e.framesMap[s] ? e.framesMap[s] : e.createFrames(t, s), i && i.run());
            }
            void 0 === s && (s = ""), this._url = "";
            var r = this;
            return r._setFramesFromCache(s) || (Loader.getAtlas(t) ? n(t) : Laya.loader.load(t, Handler.create(null, n, [ t ]), null, "atlas")), 
            this;
        }, i.loadAnimation = function(t, e, i) {
            return this._url = t, this._actionName || (this._actionName = ""), this._setFramesFromCache("") ? (this._setFramesFromCache(this._actionName, !0), 
            this.index = 0, e && e.run()) : !i || Loader.getAtlas(i) ? this._loadAnimationData(t, e, i) : Laya.loader.load(i, Handler.create(this, this._loadAnimationData, [ t, e, i ]), null, "atlas"), 
            this;
        }, i._loadAnimationData = function(t, i, s) {
            function n(s) {
                if (Loader.getRes(s) && t === s) {
                    var n;
                    if (e.framesMap[t + "#"]) a._setFramesFromCache(r._actionName, !0), r.index = 0, 
                    r._checkResumePlaying(); else {
                        var o = a._parseGraphicAnimation(Loader.getRes(t));
                        if (!o) return;
                        var h, l = o.animationList, u = 0, c = l.length;
                        for (u = 0; u < c; u++) n = l[u], e.framesMap[t + "#" + n.name] = n, h || (h = n);
                        h && (e.framesMap[t + "#"] = h, a._setFramesFromCache(r._actionName, !0), r.index = 0), 
                        r._checkResumePlaying();
                    }
                    i && i.run();
                }
            }
            var r = this;
            if (!s || Loader.getAtlas(s)) {
                var a = this;
                Loader.getRes(t) ? n(t) : Laya.loader.load(t, Handler.create(null, n, [ t ]), null, "json"), 
                Loader.clearRes(t);
            } else console.warn("atlas load fail:" + s);
        }, i._parseGraphicAnimation = function(t) {
            return GraphicAnimation.parseAnimationData(t);
        }, i._parseGraphicAnimationByData = function(t) {
            return GraphicAnimation.parseAnimationByData(t);
        }, __getset(0, i, "frames", function() {
            return this._frames;
        }, function(t) {
            this._frames = t, t && (this._count = t.length, this._isPlaying ? this.play(this._index, this.loop, this._actionName) : this.index = this._index);
        }), __getset(0, i, "autoPlay", null, function(t) {
            t ? this.play() : this.stop();
        }), __getset(0, i, "source", null, function(t) {
            t.indexOf(".ani") > -1 ? this.loadAnimation(t) : t.indexOf(".json") > -1 || t.indexOf("als") > -1 || t.indexOf("atlas") > -1 ? this.loadAtlas(t) : this.loadImages(t.split(","));
        }), __getset(0, i, "autoAnimation", null, function(t) {
            this.play(0, !0, t, !1);
        }), e.createFrames = function(t, i) {
            var s, n, r = 0, a = 0;
            if ("string" == typeof t) {
                var o = Loader.getAtlas(t);
                if (o && o.length) for (s = [], r = 0, a = o.length; r < a; r++) (n = new RunDriver.createGraphics()).drawTexture(Loader.getRes(o[r]), 0, 0), 
                s.push(n);
            } else if (t instanceof Array) for (s = [], r = 0, a = t.length; r < a; r++) (n = new RunDriver.createGraphics()).loadImage(t[r], 0, 0), 
            s.push(n);
            return i && (e.framesMap[i] = s), s;
        }, e.clearCache = function(t) {
            var i, s = e.framesMap, n = t + "#";
            for (i in s) i !== t && 0 != i.indexOf(n) || delete e.framesMap[i];
        }, e.framesMap = {}, e;
    }(AnimationPlayerBase), FrameAnimation = function(t) {
        function e() {
            this._targetDic = null, this._animationData = null, this._animationNewFrames = null, 
            e.__super.call(this), null == e._sortIndexFun && (e._sortIndexFun = MathUtil.sortByKey("index", !1, !0));
        }
        __class(e, "laya.display.FrameAnimation", t);
        var i = e.prototype;
        return i._setUp = function(t, e) {
            this._labels = null, this._animationNewFrames = null, this._targetDic = t, this._animationData = e, 
            this.interval = 1e3 / e.frameRate, e.parsed ? (this._count = e.count, this._labels = e.labels, 
            this._animationNewFrames = e.animationNewFrames) : (this._animationNewFrames = [], 
            this._calculateDatas()), e.parsed = !0, e.labels = this._labels, e.count = this._count, 
            e.animationNewFrames = this._animationNewFrames;
        }, i.clear = function() {
            t.prototype.clear.call(this), this._targetDic = null, this._animationData = null;
        }, i._displayToIndex = function(t) {
            if (this._animationData) {
                t < 0 && (t = 0), t > this._count && (t = this._count);
                var e = this._animationData.nodes, i = 0, s = e.length;
                for (i = 0; i < s; i++) this._displayNodeToFrame(e[i], t);
            }
        }, i._displayNodeToFrame = function(t, e, i) {
            i || (i = this._targetDic);
            var s = i[t.target];
            if (s) {
                var n, r, a, o = t.frames, h = t.keys, l = 0, u = h.length;
                for (l = 0; l < u; l++) a = (r = o[n = h[l]]).length > e ? r[e] : r[r.length - 1], 
                s[n] = a;
            }
        }, i._calculateDatas = function() {
            if (this._animationData) {
                var t, e = this._animationData.nodes, i = 0, s = e.length;
                for (this._count = 0, i = 0; i < s; i++) t = e[i], this._calculateNodeKeyFrames(t);
                this._count += 1;
            }
        }, i._calculateNodeKeyFrames = function(t) {
            var i, s, n = t.keyframes, r = t.target;
            t.frames || (t.frames = {}), t.keys ? t.keys.length = 0 : t.keys = [], t.initValues || (t.initValues = {});
            for (i in n) s = n[i], t.frames[i] || (t.frames[i] = []), this._targetDic && this._targetDic[r] && (t.initValues[i] = this._targetDic[r][i]), 
            s.sort(e._sortIndexFun), t.keys.push(i), this._calculateNodePropFrames(s, t.frames[i], i, r);
        }, i.resetToInitState = function() {
            if (this._targetDic && this._animationData) {
                var t, e, i = this._animationData.nodes, s = 0, n = i.length;
                for (s = 0; s < n; s++) if (t = i[s], e = t.initValues) {
                    var r = this._targetDic[t.target];
                    if (r) {
                        var a;
                        for (a in e) r[a] = e[a];
                    }
                }
            }
        }, i._calculateNodePropFrames = function(t, e, i, s) {
            var n = 0, r = t.length - 1;
            for (e.length = t[r].index + 1, n = 0; n < r; n++) this._dealKeyFrame(t[n]), this._calculateFrameValues(t[n], t[n + 1], e);
            0 == r && (e[0] = t[0].value, this._animationNewFrames && (this._animationNewFrames[t[0].index] = !0)), 
            this._dealKeyFrame(t[n]);
        }, i._dealKeyFrame = function(t) {
            t.label && "" != t.label && this.addLabel(t.label, t.index);
        }, i._calculateFrameValues = function(t, e, i) {
            var s, n = 0, r = t.index, a = e.index, o = t.value, h = e.value - t.value, l = a - r;
            if (a > this._count && (this._count = a), t.tween) for (null == (s = Ease[t.tweenMethod]) && (s = Ease.linearNone), 
            n = r; n < a; n++) i[n] = s(n - r, o, h, l), this._animationNewFrames && (this._animationNewFrames[n] = !0); else for (n = r; n < a; n++) i[n] = o;
            this._animationNewFrames && (this._animationNewFrames[t.index] = !0, this._animationNewFrames[e.index] = !0), 
            i[e.index] = e.value;
        }, e._sortIndexFun = null, e;
    }(AnimationPlayerBase), Input = function(t) {
        function e() {
            this._focus = !1, this._multiline = !1, this._editable = !0, this._restrictPattern = null, 
            this._type = "text", this._prompt = "", this._promptColor = "#A9A9A9", this._originColor = "#000000", 
            this._content = "", e.__super.call(this), this._maxChars = 1e5, this._width = 100, 
            this._height = 20, this.multiline = !1, this.overflow = Text.SCROLL, this.on("mousedown", this, this._onMouseDown), 
            this.on("undisplay", this, this._onUnDisplay);
        }
        __class(e, "laya.display.Input", t);
        var i = e.prototype;
        return i.setSelection = function(t, e) {
            this.focus = !0, laya.display.Input.inputElement.selectionStart = t, laya.display.Input.inputElement.selectionEnd = e;
        }, i._onUnDisplay = function(t) {
            this.focus = !1;
        }, i._onMouseDown = function(t) {
            this.focus = !0;
        }, i._syncInputTransform = function() {
            var t = this.nativeInput, i = Utils.getTransformRelativeToWindow(this, this.padding[3], this.padding[0]), s = this._width - this.padding[1] - this.padding[3], n = this._height - this.padding[0] - this.padding[2];
            Render.isConchApp ? (t.setScale(i.scaleX, i.scaleY), t.setSize(s, n), t.setPos(i.x, i.y)) : (e.inputContainer.style.transform = e.inputContainer.style.webkitTransform = "scale(" + i.scaleX + "," + i.scaleY + ") rotate(" + Laya.stage.canvasDegree + "deg)", 
            t.style.width = s + "px", t.style.height = n + "px", e.inputContainer.style.left = i.x + "px", 
            e.inputContainer.style.top = i.y + "px");
        }, i.select = function() {
            this.nativeInput.select();
        }, i._setInputMethod = function() {
            e.input.parentElement && e.inputContainer.removeChild(e.input), e.area.parentElement && e.inputContainer.removeChild(e.area), 
            e.inputElement = this._multiline ? e.area : e.input, e.inputContainer.appendChild(e.inputElement), 
            Text.RightToLeft && (e.inputElement.style.direction = "rtl");
        }, i._focusIn = function() {
            laya.display.Input.isInputting = !0;
            var t = this.nativeInput;
            this._focus = !0;
            var e = t.style;
            e.whiteSpace = this.wordWrap ? "pre-wrap" : "nowrap", this._setPromptColor(), t.readOnly = !this._editable, 
            Render.isConchApp && (t.setType(this._type), t.setForbidEdit(!this._editable)), 
            t.maxLength = this._maxChars, this.padding, t.type = this._type, t.value = this._content, 
            t.placeholder = this._prompt, Laya.stage.off("keydown", this, this._onKeyDown), 
            Laya.stage.on("keydown", this, this._onKeyDown), Laya.stage.focus = this, this.event("focus"), 
            Browser.onPC && t.focus(), Browser.onMiniGame || (this._text, this._text = null), 
            this.typeset(), t.setColor(this._originColor), t.setFontSize(this.fontSize), t.setFontFace(Browser.onIPhone ? Text._fontFamilyMap[this.font] || this.font : this.font), 
            Render.isConchApp && t.setMultiAble && t.setMultiAble(this._multiline), e.lineHeight = this.leading + this.fontSize + "px", 
            e.fontStyle = this.italic ? "italic" : "normal", e.fontWeight = this.bold ? "bold" : "normal", 
            e.textAlign = this.align, e.padding = "0 0", this._syncInputTransform(), !Render.isConchApp && Browser.onPC && Laya.timer.frameLoop(1, this, this._syncInputTransform);
        }, i._setPromptColor = function() {
            (e.promptStyleDOM = Browser.getElementById("promptStyle")) || ((e.promptStyleDOM = Browser.createElement("style")).setAttribute("id", "promptStyle"), 
            Browser.document.head.appendChild(e.promptStyleDOM)), e.promptStyleDOM.innerText = "input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:" + this._promptColor + "}input:-moz-placeholder, textarea:-moz-placeholder {color:" + this._promptColor + "}input::-moz-placeholder, textarea::-moz-placeholder {color:" + this._promptColor + "}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:" + this._promptColor + "}";
        }, i._focusOut = function() {
            laya.display.Input.isInputting = !1, this._focus = !1, this._text = null, this._content = this.nativeInput.value, 
            this._content ? (Laya.superSet(Text, this, "text", this._content), Laya.superSet(Text, this, "color", this._originColor)) : (Laya.superSet(Text, this, "text", this._prompt), 
            Laya.superSet(Text, this, "color", this._promptColor)), Laya.stage.off("keydown", this, this._onKeyDown), 
            Laya.stage.focus = null, this.event("blur"), Render.isConchApp && this.nativeInput.blur(), 
            Browser.onPC && Laya.timer.clear(this, this._syncInputTransform);
        }, i._onKeyDown = function(t) {
            13 === t.keyCode && (Browser.onMobile && !this._multiline && (this.focus = !1), 
            this.event("enter"));
        }, i.changeText = function(e) {
            this._content = e, this._focus ? (this.nativeInput.value = e || "", this.event("change")) : t.prototype.changeText.call(this, e);
        }, __getset(0, i, "color", t.prototype._$get_color, function(t) {
            this._focus && this.nativeInput.setColor(t), Laya.superSet(Text, this, "color", this._content ? t : this._promptColor), 
            this._originColor = t;
        }), __getset(0, i, "inputElementYAdjuster", function() {
            return console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementYAdjuster已弃用。"), 
            0;
        }, function(t) {
            console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementYAdjuster已弃用。");
        }), __getset(0, i, "multiline", function() {
            return this._multiline;
        }, function(t) {
            this._multiline = t, this.valign = t ? "top" : "middle";
        }), __getset(0, i, "maxChars", function() {
            return this._maxChars;
        }, function(t) {
            t <= 0 && (t = 1e5), this._maxChars = t;
        }), __getset(0, i, "text", function() {
            return this._focus ? this.nativeInput.value : this._content || "";
        }, function(t) {
            Laya.superSet(Text, this, "color", this._originColor), t += "", this._focus ? (this.nativeInput.value = t || "", 
            this.event("change")) : (this._multiline || (t = t.replace(/\r?\n/g, "")), this._content = t, 
            t ? Laya.superSet(Text, this, "text", t) : (Laya.superSet(Text, this, "text", this._prompt), 
            Laya.superSet(Text, this, "color", this.promptColor)));
        }), __getset(0, i, "nativeInput", function() {
            return this._multiline ? e.area : e.input;
        }), __getset(0, i, "prompt", function() {
            return this._prompt;
        }, function(t) {
            !this._text && t && Laya.superSet(Text, this, "color", this._promptColor), this.promptColor = this._promptColor, 
            this._text ? Laya.superSet(Text, this, "text", this._text == this._prompt ? t : this._text) : Laya.superSet(Text, this, "text", t), 
            this._prompt = Text.langPacks && Text.langPacks[t] ? Text.langPacks[t] : t;
        }), __getset(0, i, "focus", function() {
            return this._focus;
        }, function(t) {
            var i = this.nativeInput;
            this._focus !== t && (t ? (i.target ? i.target._focusOut() : this._setInputMethod(), 
            i.target = this, this._focusIn()) : (i.target = null, this._focusOut(), Browser.document.body.scrollTop = 0, 
            i.blur(), Render.isConchApp ? i.setPos(-1e4, -1e4) : e.inputContainer.contains(i) && e.inputContainer.removeChild(i)));
        }), __getset(0, i, "restrict", function() {
            return this._restrictPattern ? this._restrictPattern.source : "";
        }, function(t) {
            t ? ((t = "[^" + t + "]").indexOf("^^") > -1 && (t = t.replace("^^", "")), this._restrictPattern = new RegExp(t, "g")) : this._restrictPattern = null;
        }), __getset(0, i, "editable", function() {
            return this._editable;
        }, function(t) {
            this._editable = t, Render.isConchApp && e.input.setForbidEdit(!t);
        }), __getset(0, i, "promptColor", function() {
            return this._promptColor;
        }, function(t) {
            this._promptColor = t, this._content || Laya.superSet(Text, this, "color", t);
        }), __getset(0, i, "type", function() {
            return this._type;
        }, function(t) {
            this._getCSSStyle().password = "password" == t, this._type = t, Render.isConchApp && this.nativeInput.setType(t);
        }), __getset(0, i, "inputElementXAdjuster", function() {
            return console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementXAdjuster已弃用。"), 
            0;
        }, function(t) {
            console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementXAdjuster已弃用。");
        }), __getset(0, i, "asPassword", function() {
            return this._getCSSStyle().password;
        }, function(t) {
            this._getCSSStyle().password = t, this._type = "password", console.warn('deprecated: 使用type="password"替代设置asPassword, asPassword将在下次重大更新时删去'), 
            this.isChanged = !0;
        }), e.__init__ = function() {
            e._createInputElement(), Browser.onMobile && Render.canvas.addEventListener(e.IOS_IFRAME ? Browser.onMiniGame ? "touchend" : "click" : "touchend", e._popupInputMethod);
        }, e._popupInputMethod = function(t) {
            laya.display.Input.isInputting && laya.display.Input.inputElement.focus();
        }, e._createInputElement = function() {
            e._initInput(e.area = Browser.createElement("textarea")), e._initInput(e.input = Browser.createElement("input")), 
            (e.inputContainer = Browser.createElement("div")).style.position = "absolute", e.inputContainer.style.zIndex = 1e5, 
            Browser.container.appendChild(e.inputContainer), e.inputContainer.setPos = function(t, i) {
                e.inputContainer.style.left = t + "px", e.inputContainer.style.top = i + "px";
            };
        }, e._initInput = function(t) {
            var i = t.style;
            i.cssText = "position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;", 
            i.resize = "none", i.backgroundColor = "transparent", i.border = "none", i.outline = "none", 
            i.zIndex = 1, t.addEventListener("input", e._processInputting), t.addEventListener("mousemove", e._stopEvent), 
            t.addEventListener("mousedown", e._stopEvent), t.addEventListener("touchmove", e._stopEvent), 
            t.setFontFace = function(e) {
                t.style.fontFamily = e;
            }, Render.isConchApp || (t.setColor = function(e) {
                t.style.color = e;
            }, t.setFontSize = function(e) {
                t.style.fontSize = e + "px";
            });
        }, e._processInputting = function(t) {
            var e = laya.display.Input.inputElement.target;
            if (e) {
                var i = laya.display.Input.inputElement.value;
                e._restrictPattern && (i = i.replace(/\u2006|\x27/g, ""), e._restrictPattern.test(i) && (i = i.replace(e._restrictPattern, ""), 
                laya.display.Input.inputElement.value = i)), e._text = i, e.event("input");
            }
        }, e._stopEvent = function(t) {
            "touchmove" == t.type && t.preventDefault(), t.stopPropagation && t.stopPropagation();
        }, e.TYPE_TEXT = "text", e.TYPE_PASSWORD = "password", e.TYPE_EMAIL = "email", e.TYPE_URL = "url", 
        e.TYPE_NUMBER = "number", e.TYPE_RANGE = "range", e.TYPE_DATE = "date", e.TYPE_MONTH = "month", 
        e.TYPE_WEEK = "week", e.TYPE_TIME = "time", e.TYPE_DATE_TIME = "datetime", e.TYPE_DATE_TIME_LOCAL = "datetime-local", 
        e.TYPE_SEARCH = "search", e.input = null, e.area = null, e.inputElement = null, 
        e.inputContainer = null, e.confirmButton = null, e.promptStyleDOM = null, e.inputHeight = 45, 
        e.isInputting = !1, e.stageMatrix = null, __static(e, [ "IOS_IFRAME", function() {
            return this.IOS_IFRAME = Browser.onIOS && Browser.window.top != Browser.window.self;
        } ]), e;
    }(Text), HTMLImage = function(t) {
        function e(t, i) {
            this._recreateLock = !1, this._needReleaseAgain = !1, this._enableMerageInAtlas = !0, 
            e.__super.call(this), this._init_(t, i);
        }
        __class(e, "laya.resource.HTMLImage", FileBitmap);
        var i = e.prototype;
        return i._init_ = function(t, e) {
            this._src = t, this._source = new Browser.window.Image(), e && (e.onload && (this.onload = e.onload), 
            e.onerror && (this.onerror = e.onerror), e.onCreate && e.onCreate(this)), 0 != t.indexOf("data:image") && (this._source.crossOrigin = ""), 
            t && (this._source.src = t);
        }, i.recreateResource = function() {
            var t = this;
            if ("" === this._src) throw new Error("src no null！");
            if (this._needReleaseAgain = !1, this._source) {
                if (this._recreateLock) return;
                this.memorySize = this._w * this._h * 4, this._recreateLock = !1, this.completeCreate();
            } else {
                this._recreateLock = !0;
                var e = this;
                this._source = new Browser.window.Image(), this._source.crossOrigin = "", this._source.onload = function() {
                    if (e._needReleaseAgain) return e._needReleaseAgain = !1, e._source.onload = null, 
                    void (e._source = null);
                    e._source.onload = null, e.memorySize = t._w * t._h * 4, e._recreateLock = !1, e.completeCreate();
                }, this._source.src = this._src;
            }
        }, i.disposeResource = function() {
            this._recreateLock && (this._needReleaseAgain = !0), this._source && (this._source = null, 
            this.memorySize = 0);
        }, i.onresize = function() {
            this._w = this._source.width, this._h = this._source.height;
        }, __getset(0, i, "onload", null, function(t) {
            var e = this;
            this._onload = t, this._source && (this._source.onload = null != this._onload ? function() {
                e.onresize(), e._onload();
            } : null);
        }), __getset(0, i, "onerror", null, function(t) {
            var e = this;
            this._onerror = t, this._source && (this._source.onerror = null != this._onerror ? function() {
                e._onerror();
            } : null);
        }), __getset(0, i, "enableMerageInAtlas", function() {
            return this._enableMerageInAtlas;
        }, function(t) {
            this._enableMerageInAtlas = t, Render.isConchApp && this._source && (this._source.enableMerageInAtlas = t);
        }), e.create = function(t, i) {
            return new e(t, i);
        }, e;
    }(), EffectAnimation = function(t) {
        function e() {
            this._target = null, this._playEvents = null, this._initData = {}, this._aniKeys = null, 
            this._effectClass = null, e.__super.call(this);
        }
        __class(e, "laya.display.EffectAnimation", t);
        var i = e.prototype;
        return i._onOtherBegin = function(t) {
            t != this && this.stop();
        }, i.addEvent = function() {
            this._target && this._playEvents && (this._setControlNode(this._target), this._target.on(this._playEvents, this, this._onPlayAction));
        }, i._onPlayAction = function() {
            this.play(0, !1);
        }, i.play = function(t, e, i, s) {
            void 0 === t && (t = 0), void 0 === e && (e = !0), void 0 === i && (i = ""), void 0 === s && (s = !0), 
            this._target && (this._target.event("effectanimationbegin", [ this ]), this._recordInitData(), 
            laya.display.AnimationPlayerBase.prototype.play.call(this, t, e, i, s));
        }, i._recordInitData = function() {
            if (this._aniKeys) {
                var t = 0, e = 0;
                e = this._aniKeys.length;
                var i;
                for (t = 0; t < e; t++) i = this._aniKeys[t], this._initData[i] = this._target[i];
            }
        }, i._displayToIndex = function(t) {
            if (this._animationData) {
                t < 0 && (t = 0), t > this._count && (t = this._count);
                var e = this._animationData.nodes, i = 0, s = e.length;
                for (s = s > 1 ? 1 : s, i = 0; i < s; i++) this._displayNodeToFrame(e[i], t);
            }
        }, i._displayNodeToFrame = function(t, e, i) {
            if (this._target) {
                var s;
                s = this._target;
                var n, r, a, o, h = t.frames, l = t.keys, u = 0, c = l.length;
                o = t.secondFrames;
                var _, d, f, p, g = 0;
                for (u = 0; u < c; u++) r = h[n = l[u]], -1 == (g = o[n]) ? a = this._initData[n] : e < g ? (f = (d = t.keyframes[n])[0]).tween ? (null == (_ = Ease[f.tweenMethod]) && (_ = Ease.linearNone), 
                p = d[1], a = _(e, this._initData[n], p.value - this._initData[n], p.index)) : a = this._initData[n] : a = r.length > e ? r[e] : r[r.length - 1], 
                s[n] = a;
            }
        }, i._calculateNodeKeyFrames = function(e) {
            t.prototype._calculateNodeKeyFrames.call(this, e);
            var i, s, n, r = e.keyframes;
            e.target, n = {}, e.secondFrames = n;
            for (i in r) (s = r[i]).length <= 1 ? n[i] = -1 : n[i] = s[1].index;
        }, __getset(0, i, "target", function() {
            return this._target;
        }, function(t) {
            this._target && this._target.off("effectanimationbegin", this, this._onOtherBegin), 
            this._target = t, this._target && this._target.on("effectanimationbegin", this, this._onOtherBegin), 
            this.addEvent();
        }), __getset(0, i, "playEvent", null, function(t) {
            this._playEvents = t, t && this.addEvent();
        }), __getset(0, i, "effectData", null, function(t) {
            if (t) {
                var e;
                (e = t.animations) && e[0] && (this._setUp({}, e[0]), e[0].nodes && e[0].nodes[0] && (this._aniKeys = e[0].nodes[0].keys));
            }
        }), __getset(0, i, "effectClass", null, function(t) {
            if (this._effectClass = ClassUtils.getClass(t), this._effectClass) {
                var e;
                if (e = this._effectClass.uiView) {
                    var i;
                    (i = e.animations) && i[0] && (this._setUp({}, i[0]), i[0].nodes && i[0].nodes[0] && (this._aniKeys = i[0].nodes[0].keys));
                }
            }
        }), e.EffectAnimationBegin = "effectanimationbegin", e;
    }(FrameAnimation), GraphicAnimation = function(t) {
        function e() {
            this.animationList = null, this.animationDic = null, this._nodeList = null, this._nodeDefaultProps = null, 
            this._gList = null, this._nodeIDAniDic = {}, this._rootNode = null, this._nodeGDic = null, 
            e.__super.call(this);
        }
        var i;
        __class(e, "laya.utils.GraphicAnimation", t);
        var s = e.prototype;
        return s._parseNodeList = function(t) {
            this._nodeList || (this._nodeList = []), this._nodeDefaultProps[t.compId] = t.props, 
            t.compId && this._nodeList.push(t.compId);
            var e = t.child;
            if (e) {
                var i = 0, s = e.length;
                for (i = 0; i < s; i++) this._parseNodeList(e[i]);
            }
        }, s._calGraphicData = function(t) {
            if (this._setUp(null, t), this._createGraphicData(), this._nodeIDAniDic) {
                var e;
                for (e in this._nodeIDAniDic) this._nodeIDAniDic[e] = null;
            }
        }, s._createGraphicData = function() {
            var t = [], e = 0, i = this.count, s = this._animationNewFrames;
            s || (s = []);
            var n;
            for (e = 0; e < i; e++) !s[e] && n || (n = this._createFrameGraphic(e)), t.push(n);
            this._gList = t;
        }, s._createFrameGraphic = function(t) {
            var i = RunDriver.createGraphics();
            return e._rootMatrix || (e._rootMatrix = new Matrix()), this._updateNodeGraphic(this._rootNode, t, e._rootMatrix, i), 
            i;
        }, s._updateNodeGraphic = function(t, e, i, s, n) {
            void 0 === n && (n = 1);
            var r, a = (r = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId])).alpha * n;
            if (!(a < .01)) {
                r.resultTransform || (r.resultTransform = Matrix.create());
                var o;
                o = r.resultTransform, Matrix.mul(r.transform, i, o);
                var h;
                r.skin && (h = this._getTextureByUrl(r.skin)) && (o._checkTransform() ? (s.drawTexture(h, 0, 0, r.width, r.height, o, a), 
                r.resultTransform = null) : s.drawTexture(h, o.tx, o.ty, r.width, r.height, null, a));
                var l;
                if (l = t.child) {
                    var u = 0, c = 0;
                    for (c = l.length, u = 0; u < c; u++) this._updateNodeGraphic(l[u], e, o, s, a);
                }
            }
        }, s._updateNoChilds = function(t, e) {
            if (t.skin) {
                var i = this._getTextureByUrl(t.skin);
                if (i) {
                    var s = t.transform;
                    s._checkTransform(), s.bTransform ? e.drawTexture(i, 0, 0, t.width, t.height, s.clone(), t.alpha) : e.drawTexture(i, s.tx, s.ty, t.width, t.height, null, t.alpha);
                }
            }
        }, s._updateNodeGraphic2 = function(t, e, i) {
            var s;
            if (s = this._nodeGDic[t.compId] = this._getNodeGraphicData(t.compId, e, this._nodeGDic[t.compId]), 
            t.child) {
                var n = s.transform;
                n._checkTransform();
                var r = !1, a = !1;
                a = (r = !n.bTransform) && (0 != n.tx || 0 != n.ty);
                var o = !1;
                (o = n.bTransform || 1 != s.alpha) && i.save(), 1 != s.alpha && i.alpha(s.alpha), 
                r ? a && i.translate(n.tx, n.ty) : i.transform(n.clone());
                var h;
                h = t.child;
                var l;
                if (s.skin && (l = this._getTextureByUrl(s.skin)) && i.drawTexture(l, 0, 0, s.width, s.height), 
                h) {
                    var u = 0, c = 0;
                    for (c = h.length, u = 0; u < c; u++) this._updateNodeGraphic2(h[u], e, i);
                }
                o ? i.restore() : r ? a && i.translate(-n.tx, -n.ty) : i.transform(n.clone().invert());
            } else this._updateNoChilds(s, i);
        }, s._calculateNodeKeyFrames = function(e) {
            t.prototype._calculateNodeKeyFrames.call(this, e), this._nodeIDAniDic[e.target] = e;
        }, s.getNodeDataByID = function(t) {
            return this._nodeIDAniDic[t];
        }, s._getParams = function(t, i, s, n) {
            var r = e._temParam;
            r.length = i.length;
            var a = 0, o = i.length;
            for (a = 0; a < o; a++) r[a] = this._getObjVar(t, i[a][0], s, i[a][1], n);
            return r;
        }, s._getObjVar = function(t, e, i, s, n) {
            if (t.hasOwnProperty(e)) {
                var r = t[e];
                return i >= r.length && (i = r.length - 1), t[e][i];
            }
            return n.hasOwnProperty(e) ? n[e] : s;
        }, s._getNodeGraphicData = function(t, s, n) {
            n || (n = i.create()), n.transform ? n.transform.identity() : n.transform = Matrix.create();
            var r = this.getNodeDataByID(t);
            if (!r) return n;
            var a = r.frames, o = this._getParams(a, e._drawTextureCmd, s, this._nodeDefaultProps[t]), h = o[0], l = NaN, u = NaN, c = o[5], _ = o[6], d = o[13], f = o[14], p = o[7], g = o[8], m = o[9], v = o[11], y = o[12];
            l = o[3], u = o[4], 0 != l && 0 != u || (h = null), -1 == l && (l = 0), -1 == u && (u = 0);
            var w;
            n.skin = h, n.width = l, n.height = u, h && ((w = this._getTextureByUrl(h)) ? (l || (l = w.sourceWidth), 
            u || (u = w.sourceHeight)) : console.warn("lost skin:", h, ",you may load pics first")), 
            n.alpha = o[10];
            var x;
            x = n.transform, 0 != d && (c = d * l), 0 != f && (_ = f * u), 0 == c && 0 == _ || x.translate(-c, -_);
            var b = null;
            if (m || 1 !== p || 1 !== g || v || y) {
                (b = e._tempMt).identity(), b.bTransform = !0;
                var C = .0174532922222222 * (m - v), S = .0174532922222222 * (m + y), T = Math.cos(S), M = Math.sin(S), L = Math.sin(C), I = Math.cos(C);
                b.a = p * T, b.b = p * M, b.c = -g * L, b.d = g * I, b.tx = b.ty = 0;
            }
            return b && (x = Matrix.mul(x, b, x)), x.translate(o[1], o[2]), n;
        }, s._getTextureByUrl = function(t) {
            return Loader.getRes(t);
        }, s.setAniData = function(t, i) {
            if (t.animations) {
                this._nodeDefaultProps = {}, this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), 
                this._rootNode = t, this._parseNodeList(t);
                var s, n = {}, r = [], a = t.animations, o = 0, h = a.length;
                for (o = 0; o < h; o++) if (s = a[o], this._labels = null, (!i || i == s.name) && s) {
                    try {
                        this._calGraphicData(s);
                    } catch (t) {
                        console.warn("parse animation fail:" + s.name + ",empty animation created"), this._gList = [];
                    }
                    var l = {};
                    l.interval = 1e3 / s.frameRate, l.frames = this._gList, l.labels = this._labels, 
                    l.name = s.name, r.push(l), n[s.name] = l;
                }
                this.animationList = r, this.animationDic = n;
            }
            e._temParam.length = 0;
        }, s.parseByData = function(t) {
            var e, i;
            e = t.nodeRoot, i = t.aniO, delete t.nodeRoot, delete t.aniO, this._nodeDefaultProps = {}, 
            this._nodeGDic = {}, this._nodeList && (this._nodeList.length = 0), this._rootNode = e, 
            this._parseNodeList(e), this._labels = null;
            try {
                this._calGraphicData(i);
            } catch (t) {
                console.warn("parse animation fail:" + i.name + ",empty animation created"), this._gList = [];
            }
            var s = t;
            return s.interval = 1e3 / i.frameRate, s.frames = this._gList, s.labels = this._labels, 
            s.name = i.name, s;
        }, s.setUpAniData = function(t) {
            if (t.animations) {
                var e, i = {}, s = [], n = t.animations, r = 0, a = n.length;
                for (r = 0; r < a; r++) if (e = n[r]) {
                    var o = {};
                    o.name = e.name, o.aniO = e, o.nodeRoot = t, s.push(o), i[e.name] = o;
                }
                this.animationList = s, this.animationDic = i;
            }
        }, s._clear = function() {
            if (this.animationList = null, this.animationDic = null, this._gList = null, this._nodeGDic) {
                var t, e;
                for (t in this._nodeGDic) (e = this._nodeGDic[t]) && e.recover();
            }
            this._nodeGDic = null;
        }, e.parseAnimationByData = function(t) {
            e._I || (e._I = new e());
            var i;
            return i = e._I.parseByData(t), e._I._clear(), i;
        }, e.parseAnimationData = function(t) {
            e._I || (e._I = new e()), e._I.setUpAniData(t);
            var i;
            return i = {}, i.animationList = e._I.animationList, i.animationDic = e._I.animationDic, 
            e._I._clear(), i;
        }, e._drawTextureCmd = [ [ "skin", null ], [ "x", 0 ], [ "y", 0 ], [ "width", -1 ], [ "height", -1 ], [ "pivotX", 0 ], [ "pivotY", 0 ], [ "scaleX", 1 ], [ "scaleY", 1 ], [ "rotation", 0 ], [ "alpha", 1 ], [ "skewX", 0 ], [ "skewY", 0 ], [ "anchorX", 0 ], [ "anchorY", 0 ] ], 
        e._temParam = [], e._I = null, e._rootMatrix = null, __static(e, [ "_tempMt", function() {
            return this._tempMt = new Matrix();
        } ]), e.__init$ = function() {
            i = function() {
                function t() {
                    this.skin = null, this.transform = null, this.resultTransform = null, this.width = NaN, 
                    this.height = NaN, this.alpha = 1;
                }
                return __class(t, ""), t.prototype.recover = function() {
                    this.skin = null, this.width = 0, this.height = 0, this.alpha = 1, this.transform && (this.transform.destroy(), 
                    this.transform = null), this.resultTransform && (this.resultTransform.destroy(), 
                    this.resultTransform = null), Pool.recover("GraphicNode", this);
                }, t.create = function() {
                    return Pool.getItemByClass("GraphicNode", t);
                }, t;
            }();
        }, e;
    }(FrameAnimation);
    Laya.__init([ EventDispatcher, LoaderManager, Render, Browser, Timer, LocalStorage, TimeLine, GraphicAnimation ]);
}(window, document, Laya), function(t, e, i) {
    i.un, i.uns, i.static;
    var s = i.class;
    i.getset, i.__newvec, new (function() {
        function t() {}
        return s(t, "LayaMain"), t;
    }())();
}(window, document, Laya), "function" == typeof define && define.amd && define("laya.core", [ "require", "exports" ], function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    for (var i in Laya) {
        var s = Laya[i];
        s && s.__isclass && (e[i] = s);
    }
}), function(t, e, i) {
    i.un, i.uns;
    var s = i.static, n = i.class, r = i.getset, a = (i.__newvec, laya.utils.Browser), o = (laya.events.Event, 
    laya.events.EventDispatcher), h = laya.resource.HTMLImage, l = laya.utils.Handler, u = laya.display.Input, c = laya.net.Loader, _ = laya.net.LocalStorage, d = (laya.maths.Matrix, 
    laya.renders.Render), f = laya.utils.RunDriver, p = laya.media.SoundChannel, g = laya.media.SoundManager, m = laya.net.URL, v = laya.utils.Utils, y = function() {
        function e() {}
        return n(e, "laya.wx.mini.MiniAdpter"), e.getJson = function(t) {
            return JSON.parse(t);
        }, e.init = function(s, n) {
            void 0 === s && (s = !1), void 0 === n && (n = !1), e._inited || (e._inited = !0, 
            (e.window = t).navigator.userAgent.indexOf("MiniGame") < 0 || (e.isZiYu = n, e.isPosMsgYu = s, 
            e.EnvConfig = {}, e.isZiYu || (w.setNativeFileDir("/layaairGame"), w.existDir(w.fileNativeDir, l.create(e, e.onMkdirCallBack))), 
            e.systemInfo = wx.getSystemInfoSync(), e.window.focus = function() {}, i.getUrlPath = function() {}, 
            e.window.logtime = function(t) {}, e.window.alertTimeLog = function(t) {}, e.window.resetShareInfo = function() {}, 
            e.window.CanvasRenderingContext2D = function() {}, e.window.CanvasRenderingContext2D.prototype = e.window.wx.createCanvas().getContext("2d").__proto__, 
            e.window.document.body.appendChild = function() {}, e.EnvConfig.pixelRatioInt = 0, 
            f.getPixelRatio = e.pixelRatio, e._preCreateElement = a.createElement, a.createElement = e.createElement, 
            f.createShaderCondition = e.createShaderCondition, v.parseXMLFromString = e.parseXMLFromString, 
            u._createInputElement = b._createInputElement, e.EnvConfig.load = c.prototype.load, 
            c.prototype.load = S.prototype.load, c.prototype._loadImage = x.prototype._loadImage, 
            C.__init__(), _._baseClass = C));
        }, e.getUrlEncode = function(t, e) {
            return -1 != t.indexOf(".fnt") ? "utf8" : "arraybuffer" == e ? "" : "ascii";
        }, e.downLoadFile = function(t, e, i, s) {
            void 0 === e && (e = ""), void 0 === s && (s = "ascii"), w.getFileInfo(t) ? null != i && i.runWith([ 0 ]) : w.downLoadFile(t, e, i, s);
        }, e.remove = function(t, e) {
            w.deleteFile("", t, e, "", 0);
        }, e.removeAll = function() {
            w.deleteAll();
        }, e.hasNativeFile = function(t) {
            return w.isLocalNativeFile(t);
        }, e.getFileInfo = function(t) {
            return w.getFileInfo(t);
        }, e.getFileList = function() {
            return w.filesListObj;
        }, e.exitMiniProgram = function() {
            e.window.wx.exitMiniProgram();
        }, e.onMkdirCallBack = function(t, e) {
            t || (w.filesListObj = JSON.parse(e.data));
        }, e.pixelRatio = function() {
            if (!e.EnvConfig.pixelRatioInt) try {
                return e.EnvConfig.pixelRatioInt = e.systemInfo.pixelRatio, e.systemInfo.pixelRatio;
            } catch (t) {}
            return e.EnvConfig.pixelRatioInt;
        }, e.createElement = function(i) {
            if ("canvas" == i) {
                var s;
                return 1 == e.idx ? e.isZiYu ? (s = sharedCanvas).style = {} : s = t.canvas : s = t.wx.createCanvas(), 
                e.idx++, s;
            }
            if ("textarea" == i || "input" == i) return e.onCreateInput(i);
            if ("div" == i) {
                var n = e._preCreateElement(i);
                return n.contains = function(t) {
                    return null;
                }, n.removeChild = function(t) {}, n;
            }
            return e._preCreateElement(i);
        }, e.onCreateInput = function(t) {
            var i = e._preCreateElement(t);
            return i.focus = b.wxinputFocus, i.blur = b.wxinputblur, i.style = {}, i.value = 0, 
            i.parentElement = {}, i.placeholder = {}, i.type = {}, i.setColor = function(t) {}, 
            i.setType = function(t) {}, i.setFontFace = function(t) {}, i.addEventListener = function(t) {}, 
            i.contains = function(t) {
                return null;
            }, i.removeChild = function(t) {}, i;
        }, e.createShaderCondition = function(t) {
            var e = this;
            return function() {
                return e[t.replace("this.", "")];
            };
        }, e.EnvConfig = null, e.window = null, e._preCreateElement = null, e._inited = !1, 
        e.systemInfo = null, e.isZiYu = !1, e.isPosMsgYu = !1, e.autoCacheFile = !0, e.minClearSize = 5242880, 
        e.parseXMLFromString = function(e) {
            var i;
            e = e.replace(/>\s+</g, "><");
            try {
                i = new t.Parser.DOMParser().parseFromString(e, "text/xml");
            } catch (t) {
                throw "需要引入xml解析库文件";
            }
            return i;
        }, e.idx = 1, s(e, [ "nativefiles", function() {
            return this.nativefiles = [ "layaNativeDir", "wxlocal" ];
        } ]), e;
    }(), w = function() {
        function t() {}
        return n(t, "laya.wx.mini.MiniFileMgr"), t.isLocalNativeFile = function(t) {
            for (var e = 0, i = y.nativefiles.length; e < i; e++) if (-1 != t.indexOf(y.nativefiles[e])) return !0;
            return !1;
        }, t.getFileInfo = function(e) {
            var i = e.split("?")[0], s = t.filesListObj[i];
            return null == s ? null : s;
        }, t.read = function(e, i, s, n, r, a) {
            void 0 === i && (i = "ascill"), void 0 === n && (n = ""), void 0 === r && (r = !1), 
            void 0 === a && (a = "");
            var o;
            o = "" == n || -1 == n.indexOf("http://") && -1 == n.indexOf("https://") ? e : t.getFileNativePath(e), 
            t.fs.readFile({
                filePath: o,
                encoding: i,
                success: function(t) {
                    null != s && s.runWith([ 0, t ]);
                },
                fail: function(e) {
                    e && "" != n ? t.downFiles(n, i, s, n, r, a) : null != s && s.runWith([ 1 ]);
                }
            });
        }, t.downFiles = function(e, i, s, n, r, a) {
            void 0 === i && (i = "ascii"), void 0 === n && (n = ""), void 0 === r && (r = !1), 
            void 0 === a && (a = ""), t.wxdown({
                url: e,
                success: function(e) {
                    200 === e.statusCode && t.readFile(e.tempFilePath, i, s, n, r, a);
                },
                fail: function(t) {
                    null != s && s.runWith([ 1, t ]);
                }
            }).onProgressUpdate(function(t) {
                null != s && s.runWith([ 2, t.progress ]);
            });
        }, t.readFile = function(e, i, s, n, r, a) {
            void 0 === i && (i = "ascill"), void 0 === n && (n = ""), void 0 === r && (r = !1), 
            void 0 === a && (a = ""), t.fs.readFile({
                filePath: e,
                encoding: i,
                success: function(a) {
                    -1 != e.indexOf("http://") || -1 != e.indexOf("https://") ? (y.autoCacheFile || r) && t.copyFile(e, n, s, i) : null != s && s.runWith([ 0, a ]);
                },
                fail: function(t) {
                    t && null != s && s.runWith([ 1, t ]);
                }
            });
        }, t.downOtherFiles = function(e, i, s, n) {
            void 0 === s && (s = ""), void 0 === n && (n = !1), t.wxdown({
                url: e,
                success: function(e) {
                    200 === e.statusCode && ((y.autoCacheFile || n) && -1 == s.indexOf("wx.qlogo.cn") ? t.copyFile(e.tempFilePath, s, i) : null != i && i.runWith([ 0, e.tempFilePath ]));
                },
                fail: function(t) {
                    null != i && i.runWith([ 1, t ]);
                }
            });
        }, t.downLoadFile = function(e, i, s, n) {
            void 0 === i && (i = ""), void 0 === n && (n = "ascii"), "image" == i || "sound" == i ? t.downOtherFiles(e, s, e, !0) : t.downFiles(e, n, s, e, !0, i);
        }, t.copyFile = function(e, i, s, n) {
            void 0 === n && (n = "");
            var r = e.split("/"), a = r[r.length - 1], o = (i.split("?")[0], t.getFileInfo(i)), h = t.getFileNativePath(a), l = t.getCacheUseSize();
            o ? o.readyUrl != i ? t.fs.getFileInfo({
                filePath: e,
                success: function(e) {
                    l + 4194304 + e.size >= 52428800 && (e.size > y.minClearSize && (y.minClearSize = e.size), 
                    t.onClearCacheRes()), t.deleteFile(a, i, s, n, e.size);
                },
                fail: function(t) {
                    null != s && s.runWith([ 1, t ]);
                }
            }) : null != s && s.runWith([ 0 ]) : t.fs.getFileInfo({
                filePath: e,
                success: function(r) {
                    l + 4194304 + r.size >= 52428800 && (r.size > y.minClearSize && (y.minClearSize = r.size), 
                    t.onClearCacheRes()), t.fs.copyFile({
                        srcPath: e,
                        destPath: h,
                        success: function(e) {
                            t.onSaveFile(i, a, !0, n, s, r.size);
                        },
                        fail: function(t) {
                            null != s && s.runWith([ 1, t ]);
                        }
                    });
                },
                fail: function(t) {
                    null != s && s.runWith([ 1, t ]);
                }
            });
        }, t.onClearCacheRes = function() {
            var e = y.minClearSize, i = [];
            for (var s in t.filesListObj) i.push(t.filesListObj[s]);
            t.sortOn(i, "time", 16);
            for (var n = 0, r = 1, a = i.length; r < a; r++) {
                var o = i[r];
                if (n >= e) break;
                n += o.size, t.deleteFile("", o.readyUrl);
            }
        }, t.sortOn = function(t, e, i) {
            return void 0 === i && (i = 0), 16 == i ? t.sort(function(t, i) {
                return t[e] - i[e];
            }) : 18 == i ? t.sort(function(t, i) {
                return i[e] - t[e];
            }) : t.sort(function(t, i) {
                return t[e] - i[e];
            });
        }, t.getFileNativePath = function(t) {
            return laya.wx.mini.MiniFileMgr.fileNativeDir + "/" + t;
        }, t.deleteFile = function(e, i, s, n, r) {
            void 0 === i && (i = ""), void 0 === n && (n = ""), void 0 === r && (r = 0);
            var a = t.getFileInfo(i), o = t.getFileNativePath(a.md5);
            t.fs.unlink({
                filePath: o,
                success: function(a) {
                    var o = "" != e;
                    if ("" != e) {
                        var h = t.getFileNativePath(e);
                        t.fs.copyFile({
                            srcPath: e,
                            destPath: h,
                            success: function(r) {
                                t.onSaveFile(i, e, o, n, s, r.size);
                            },
                            fail: function(t) {
                                null != s && s.runWith([ 1, t ]);
                            }
                        });
                    } else t.onSaveFile(i, e, o, n, s, r);
                },
                fail: function(t) {}
            });
        }, t.deleteAll = function() {
            var e = [];
            for (var i in t.filesListObj) e.push(t.filesListObj[i]);
            for (var s = 1, n = e.length; s < n; s++) {
                var r = e[s];
                t.deleteFile("", r.readyUrl);
            }
        }, t.onSaveFile = function(e, i, s, n, r, o) {
            void 0 === s && (s = !0), void 0 === n && (n = ""), void 0 === o && (o = 0);
            var h = e.split("?")[0];
            if (null == t.filesListObj.fileUsedSize && (t.filesListObj.fileUsedSize = 0), s) t.getFileNativePath(i), 
            t.filesListObj[h] = {
                md5: i,
                readyUrl: e,
                size: o,
                times: a.now(),
                encoding: n
            }, t.filesListObj.fileUsedSize = parseInt(t.filesListObj.fileUsedSize) + o, t.writeFilesList(h, JSON.stringify(t.filesListObj), !0), 
            null != r && r.runWith([ 0 ]); else if (t.filesListObj[h]) {
                var l = parseInt(t.filesListObj[h].size);
                t.filesListObj.fileUsedSize = parseInt(t.filesListObj.fileUsedSize) - l, delete t.filesListObj[h], 
                t.writeFilesList(h, JSON.stringify(t.filesListObj), !1), null != r && r.runWith([ 0 ]);
            }
        }, t.writeFilesList = function(e, i, s) {
            var n = t.fileNativeDir + "/" + t.fileListName;
            t.fs.writeFile({
                filePath: n,
                encoding: "utf8",
                data: i,
                success: function(t) {},
                fail: function(t) {}
            }), !y.isZiYu && y.isPosMsgYu && wx.postMessage({
                url: e,
                data: t.filesListObj[e],
                isLoad: "filenative",
                isAdd: s
            });
        }, t.getCacheUseSize = function() {
            return t.filesListObj && t.filesListObj.fileUsedSize ? t.filesListObj.fileUsedSize : 0;
        }, t.existDir = function(e, i) {
            t.fs.mkdir({
                dirPath: e,
                success: function(t) {
                    null != i && i.runWith([ 0, {
                        data: JSON.stringify({})
                    } ]);
                },
                fail: function(e) {
                    -1 != e.errMsg.indexOf("file already exists") ? t.readSync(t.fileListName, "utf8", i) : null != i && i.runWith([ 1, e ]);
                }
            });
        }, t.readSync = function(e, i, s, n) {
            void 0 === i && (i = "ascill"), void 0 === n && (n = "");
            var r, a = t.getFileNativePath(e);
            try {
                r = t.fs.readFileSync(a, i), null != s && s.runWith([ 0, {
                    data: r
                } ]);
            } catch (t) {
                null != s && s.runWith([ 1 ]);
            }
        }, t.setNativeFileDir = function(e) {
            t.fileNativeDir = wx.env.USER_DATA_PATH + e;
        }, t.filesListObj = {}, t.fileNativeDir = null, t.fileListName = "layaairfiles.txt", 
        t.ziyuFileData = {}, t.loadPath = "", t.DESCENDING = 2, t.NUMERIC = 16, s(t, [ "fs", function() {
            return this.fs = wx.getFileSystemManager();
        }, "wxdown", function() {
            return this.wxdown = wx.downloadFile;
        } ]), t;
    }(), x = function() {
        function t() {}
        return n(t, "laya.wx.mini.MiniImage"), t.prototype._loadImage = function(e) {
            if (y.isZiYu) t.onCreateImage(e, this, !0); else {
                var i = !1;
                if (w.isLocalNativeFile(e)) {
                    if (-1 != e.indexOf("http://") || -1 != e.indexOf("https://")) if ("" != w.loadPath) e = e.split(w.loadPath)[1]; else {
                        var s = "" != m.rootPath ? m.rootPath : m.basePath;
                        "" != s && (e = e.split(s)[1]);
                    }
                } else i = !0, e = m.formatURL(e);
                w.getFileInfo(e) ? t.onCreateImage(e, this, !i) : -1 != e.indexOf("http://") || -1 != e.indexOf("https://") ? y.isZiYu ? t.onCreateImage(e, this, !0) : w.downOtherFiles(e, new l(t, t.onDownImgCallBack, [ e, this ]), e) : t.onCreateImage(e, this, !0);
            }
        }, t.onDownImgCallBack = function(e, i, s, n) {
            void 0 === n && (n = ""), s ? i.onError(null) : t.onCreateImage(e, i, !1, n);
        }, t.onCreateImage = function(t, e, i, s) {
            function n() {
                l.onload = null, l.onerror = null, delete e.imgCache[t];
            }
            void 0 === i && (i = !1), void 0 === s && (s = "");
            var r;
            if (y.autoCacheFile) if (i) r = t; else if ("" != s) r = s; else {
                var o = w.getFileInfo(t).md5;
                r = w.getFileNativePath(o);
            } else r = i ? t : s;
            null == e.imgCache && (e.imgCache = {});
            var l, u = function() {
                n(), e._url = m.formatURL(e._url), e.onLoaded(l);
            }, c = function() {
                n(), e.event("error", "Load image failed");
            };
            "nativeimage" == e._type ? ((l = new a.window.Image()).crossOrigin = "", l.onload = u, 
            l.onerror = c, l.src = r, e.imgCache[t] = l) : new h.create(r, {
                onload: u,
                onerror: c,
                onCreate: function(i) {
                    l = i, e.imgCache[t] = i;
                }
            });
        }, t;
    }(), b = function() {
        function e() {}
        return n(e, "laya.wx.mini.MiniInput"), e._createInputElement = function() {
            u._initInput(u.area = a.createElement("textarea")), u._initInput(u.input = a.createElement("input")), 
            u.inputContainer = a.createElement("div"), u.inputContainer.style.position = "absolute", 
            u.inputContainer.style.zIndex = 1e5, a.container.appendChild(u.inputContainer), 
            u.inputContainer.setPos = function(t, e) {
                u.inputContainer.style.left = t + "px", u.inputContainer.style.top = e + "px";
            }, i.stage.on("resize", null, e._onStageResize), wx.onWindowResize && wx.onWindowResize(function(e) {
                t.dispatchEvent && t.dispatchEvent("resize");
            }), g._soundClass = T, g._musicClass = T;
            var s = y.systemInfo.model, n = y.systemInfo.system;
            -1 != s.indexOf("iPhone") && (a.onIPhone = !0, a.onIOS = !0, a.onIPad = !0, a.onAndriod = !1), 
            -1 == n.indexOf("Android") && -1 == n.indexOf("Adr") || (a.onAndriod = !0, a.onIPhone = !1, 
            a.onIOS = !1, a.onIPad = !1);
        }, e._onStageResize = function() {
            i.stage._canvasTransform.identity().scale(a.width / d.canvas.width / f.getPixelRatio(), a.height / d.canvas.height / f.getPixelRatio());
        }, e.wxinputFocus = function(t) {
            var e = u.inputElement.target;
            e && !e.editable || (y.window.wx.offKeyboardConfirm(), y.window.wx.offKeyboardInput(), 
            y.window.wx.showKeyboard({
                defaultValue: e.text,
                maxLength: e.maxChars,
                multiple: e.multiline,
                confirmHold: !0,
                confirmType: "done",
                success: function(t) {},
                fail: function(t) {}
            }), y.window.wx.onKeyboardConfirm(function(t) {
                var i = t ? t.value : "";
                e.text = i, e.event("input"), laya.wx.mini.MiniInput.inputEnter();
            }), y.window.wx.onKeyboardInput(function(t) {
                var i = t ? t.value : "";
                e.multiline || -1 == i.indexOf("\n") ? (e.text = i, e.event("input")) : laya.wx.mini.MiniInput.inputEnter();
            }));
        }, e.inputEnter = function() {
            u.inputElement.target.focus = !1;
        }, e.wxinputblur = function() {
            e.hideKeyboard();
        }, e.hideKeyboard = function() {
            y.window.wx.offKeyboardConfirm(), y.window.wx.offKeyboardInput(), y.window.wx.hideKeyboard({
                success: function(t) {
                    console.log("隐藏键盘");
                },
                fail: function(t) {
                    console.log("隐藏键盘出错:" + (t ? t.errMsg : ""));
                }
            });
        }, e;
    }(), C = function() {
        function t() {}
        return n(t, "laya.wx.mini.MiniLocalStorage"), t.__init__ = function() {
            t.items = t;
        }, t.setItem = function(t, e) {
            wx.setStorageSync(t, e);
        }, t.getItem = function(t) {
            return wx.getStorageSync(t);
        }, t.setJSON = function(e, i) {
            t.setItem(e, i);
        }, t.getJSON = function(e) {
            return t.getItem(e);
        }, t.removeItem = function(t) {
            wx.removeStorageSync(t);
        }, t.clear = function() {
            wx.clearStorageSync();
        }, t.getStorageInfoSync = function() {
            try {
                var t = wx.getStorageInfoSync();
                return console.log(t.keys), console.log(t.currentSize), console.log(t.limitSize), 
                t;
            } catch (t) {}
            return null;
        }, t.support = !0, t.items = null, t;
    }(), S = (function() {
        function t() {}
        n(t, "laya.wx.mini.MiniLocation"), t.__init__ = function() {
            y.window.navigator.geolocation.getCurrentPosition = t.getCurrentPosition, y.window.navigator.geolocation.watchPosition = t.watchPosition, 
            y.window.navigator.geolocation.clearWatch = t.clearWatch;
        }, t.getCurrentPosition = function(t, e, i) {
            var s;
            (s = {}).success = function(e) {
                null != t && t(e);
            }, s.fail = e, y.window.wx.getLocation(s);
        }, t.watchPosition = function(e, s, n) {
            t._curID++;
            var r;
            return r = {}, r.success = e, r.error = s, t._watchDic[t._curID] = r, i.timer.loop(1e3, null, t._myLoop), 
            t._curID;
        }, t.clearWatch = function(e) {
            delete t._watchDic[e], t._hasWatch() || i.timer.clear(null, t._myLoop);
        }, t._hasWatch = function() {
            var e;
            for (e in t._watchDic) if (t._watchDic[e]) return !0;
            return !1;
        }, t._myLoop = function() {
            t.getCurrentPosition(t._mySuccess, t._myError);
        }, t._mySuccess = function(e) {
            var i = {};
            i.coords = e, i.timestamp = a.now();
            var s;
            for (s in t._watchDic) t._watchDic[s].success && t._watchDic[s].success(i);
        }, t._myError = function(e) {
            var i;
            for (i in t._watchDic) t._watchDic[i].error && t._watchDic[i].error(e);
        }, t._watchDic = {}, t._curID = 0;
    }(), function(t) {
        function e() {
            e.__super.call(this);
        }
        n(e, "laya.wx.mini.MiniAccelerator", t);
        var i = e.prototype;
        i.on = function(i, s, n, r) {
            return t.prototype.on.call(this, i, s, n, r), e.startListen(this.onDeviceOrientationChange), 
            this;
        }, i.off = function(i, s, n, r) {
            return void 0 === r && (r = !1), this.hasListener(i) || e.stopListen(), t.prototype.off.call(this, i, s, n, r);
        }, e.__init__ = function() {
            try {
                var t;
                if (!(t = laya.device.motion.Accelerator)) return;
                t.prototype.on = e.prototype.on, t.prototype.off = e.prototype.off;
            } catch (t) {}
        }, e.startListen = function(t) {
            if (e._callBack = t, !e._isListening) {
                e._isListening = !0;
                try {
                    wx.onAccelerometerChange(e.onAccelerometerChange);
                } catch (t) {}
            }
        }, e.stopListen = function() {
            e._isListening = !1;
            try {
                wx.stopAccelerometer({});
            } catch (t) {}
        }, e.onAccelerometerChange = function(t) {
            var i;
            (i = {}).acceleration = t, i.accelerationIncludingGravity = t, i.rotationRate = {}, 
            null != e._callBack && e._callBack(i);
        }, e._isListening = !1, e._callBack = null;
    }(o), function(t) {
        function e() {
            e.__super.call(this);
        }
        return n(e, "laya.wx.mini.MiniLoader", o), e.prototype.load = function(t, i, s, n, r) {
            if (void 0 === s && (s = !0), void 0 === r && (r = !1), this._url = t, 0 === t.indexOf("data:image") ? this._type = i = "image" : this._type = i || (i = this.getTypeFromUrl(t)), 
            this._cache = s, this._data = null, !r && c.loadedMap[m.formatURL(t)]) return this._data = c.loadedMap[m.formatURL(t)], 
            this.event("progress", 1), void this.event("complete", this._data);
            if (null != c.parserMap[i]) return this._customParse = !0, void (c.parserMap[i] instanceof laya.utils.Handler ? c.parserMap[i].runWith(this) : c.parserMap[i].call(null, this));
            var a = y.getUrlEncode(t, i), o = v.getFileExtension(t);
            if (-1 != e._fileTypeArr.indexOf(o)) y.EnvConfig.load.call(this, t, i, s, n, r); else {
                if (y.isZiYu && w.ziyuFileData[t]) {
                    var h = w.ziyuFileData[t];
                    return void this.onLoaded(h);
                }
                if (w.getFileInfo(t)) {
                    var u = w.getFileInfo(t);
                    u.encoding = null == u.encoding ? "ascii" : u.encoding, w.readFile(t, u.encoding, new l(e, e.onReadNativeCallBack, [ a, t, i, s, n, r, this ]), t);
                } else {
                    if (w.isLocalNativeFile(t)) return void w.read(t, a, new l(e, e.onReadNativeCallBack, [ a, t, i, s, n, r, this ]));
                    -1 != (t = m.formatURL(t)).indexOf("http://") || -1 != t.indexOf("https://") ? y.EnvConfig.load.call(this, t, i, s, n, r) : w.readFile(t, a, new l(e, e.onReadNativeCallBack, [ a, t, i, s, n, r, this ]), t);
                }
            }
        }, e.onReadNativeCallBack = function(t, e, i, s, n, r, a, o, h) {
            if (void 0 === s && (s = !0), void 0 === r && (r = !1), void 0 === o && (o = 0), 
            o) 1 == o && y.EnvConfig.load.call(a, e, i, s, n, r); else {
                var l;
                l = "json" == i || "atlas" == i ? y.getJson(h.data) : "xml" == i ? v.parseXMLFromString(h.data) : h.data, 
                !y.isZiYu && y.isPosMsgYu && "arraybuffer" != i && wx.postMessage({
                    url: e,
                    data: l,
                    isLoad: "filedata"
                }), a.onLoaded(l);
            }
        }, s(e, [ "_fileTypeArr", function() {
            return this._fileTypeArr = [ "png", "jpg", "bmp", "jpeg", "gif" ];
        } ]), e;
    }()), T = function(t) {
        function e() {
            this._sound = null, this.url = null, this.loaded = !1, this.readyUrl = null, e.__super.call(this);
        }
        n(e, "laya.wx.mini.MiniSound", o);
        var i = e.prototype;
        return i.load = function(t) {
            t = m.formatURL(t), this.url = t, this.readyUrl = t, e._audioCache[this.readyUrl] ? this.event("complete") : y.autoCacheFile && w.getFileInfo(t) ? this.onDownLoadCallBack(t, 0) : y.autoCacheFile ? w.downOtherFiles(t, l.create(this, this.onDownLoadCallBack, [ t ]), t) : this.onDownLoadCallBack(t, 0);
        }, i.onDownLoadCallBack = function(t, i) {
            if (i) this.event("error"); else {
                var s;
                if (y.autoCacheFile) {
                    var n = w.getFileInfo(t).md5;
                    s = w.getFileNativePath(n), this._sound = e._createSound(), this._sound.src = this.url = s;
                } else this._sound = e._createSound(), this._sound.src = t;
                this._sound.onCanplay(e.bindToThis(this.onCanPlay, this)), this._sound.onError(e.bindToThis(this.onError, this));
            }
        }, i.onError = function(t) {
            try {
                console.log("-----1---------------minisound-----id:" + e._id), console.log(t);
            } catch (t) {
                console.log("-----2---------------minisound-----id:" + e._id), console.log(t);
            }
            this.event("error"), this._sound.offError(null);
        }, i.onCanPlay = function() {
            this.loaded = !0, this.event("complete"), e._audioCache[this.readyUrl] = this, this._sound.offCanplay(null);
        }, i.play = function(t, i) {
            void 0 === t && (t = 0), void 0 === i && (i = 0);
            var s;
            if (this.url == g._tMusic ? (e._musicAudio || (e._musicAudio = e._createSound()), 
            s = e._musicAudio) : s = e._audioCache[this.readyUrl] ? e._audioCache[this.readyUrl]._sound : e._createSound(), 
            y.autoCacheFile && w.getFileInfo(this.url)) {
                var n = w.getFileInfo(this.url).md5;
                s.src = this.url = w.getFileNativePath(n);
            } else s.src = this.url;
            var r = new M(s, this);
            return r.url = this.url, r.loops = i, r.loop = 0 === i, r.startTime = t, r.play(), 
            g.addChannel(r), r;
        }, i.dispose = function() {
            var t = e._audioCache[this.readyUrl];
            t && (t.src = "", t._sound && (t._sound.destroy(), t._sound = null, t = null), delete e._audioCache[this.readyUrl]);
        }, r(0, i, "duration", function() {
            return this._sound.duration;
        }), e._createSound = function() {
            return e._id++, y.window.wx.createInnerAudioContext();
        }, e.bindToThis = function(t, e) {
            return t.bind(e);
        }, e._musicAudio = null, e._id = 0, e._audioCache = {}, e;
    }(), M = function(t) {
        function e(t, i) {
            this._audio = null, this._onEnd = null, this._miniSound = null, e.__super.call(this), 
            this._audio = t, this._miniSound = i, this._onEnd = e.bindToThis(this.__onEnd, this), 
            t.onEnded(this._onEnd);
        }
        n(e, "laya.wx.mini.MiniSoundChannel", p);
        var s = e.prototype;
        return s.__onEnd = function() {
            if (1 == this.loops) return this.completeHandler && (i.timer.once(10, this, this.__runComplete, [ this.completeHandler ], !1), 
            this.completeHandler = null), this.stop(), void this.event("complete");
            this.loops > 0 && this.loops--, this.startTime = 0, this.play();
        }, s.play = function() {
            this.isStopped = !1, g.addChannel(this), this._audio.play();
        }, s.stop = function() {
            this.isStopped = !0, g.removeChannel(this), this.completeHandler = null, this._audio && (this._audio.pause(), 
            this._audio.offEnded(null), this._audio = null, this._miniSound = null, this._onEnd = null);
        }, s.pause = function() {
            this.isStopped = !0, this._audio.pause();
        }, s.resume = function() {
            this._audio && (this.isStopped = !1, g.addChannel(this), this._audio.play());
        }, r(0, s, "autoplay", function() {
            return this._audio.autoplay;
        }, function(t) {
            this._audio.autoplay = t;
        }), r(0, s, "position", function() {
            return this._audio ? this._audio.currentTime : 0;
        }), r(0, s, "duration", function() {
            return this._audio ? this._audio.duration : 0;
        }), r(0, s, "loop", function() {
            return this._audio.loop;
        }, function(t) {
            this._audio.loop = t;
        }), r(0, s, "volume", function() {
            return this._audio ? this._audio.volume : 1;
        }, function(t) {
            this._audio && (this._audio.volume = t);
        }), e.bindToThis = function(t, e) {
            return t.bind(e);
        }, e;
    }();
}(window, document, Laya), "function" == typeof define && define.amd && define("laya.core", [ "require", "exports" ], function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    for (var i in Laya) {
        var s = Laya[i];
        s && s.__isclass && (e[i] = s);
    }
}), function(t, e, i) {
    i.un, i.uns;
    var s = i.static, n = i.class, r = i.getset, a = (i.__newvec, laya.display.Animation), o = laya.utils.Browser, h = laya.utils.ClassUtils, l = laya.filters.ColorFilter, u = laya.utils.Ease, c = laya.events.Event, _ = (laya.events.EventDispatcher, 
    laya.display.css.Font), d = laya.display.FrameAnimation, f = laya.display.Graphics, p = laya.utils.Handler, g = laya.display.Input, m = laya.net.Loader, v = (laya.display.Node, 
    laya.maths.Point), y = laya.maths.Rectangle, w = laya.renders.Render, x = laya.display.Sprite, b = laya.display.Text, C = laya.resource.Texture, S = laya.utils.Tween, T = laya.utils.Utils, M = laya.utils.WeakObject;
    i.interface("laya.ui.IItem"), i.interface("laya.ui.ISelect"), i.interface("laya.ui.IRender"), 
    i.interface("laya.ui.IComponent"), i.interface("laya.ui.IBox", "IComponent");
    var L = function() {
        function t() {
            this.enable = !1, this.top = NaN, this.bottom = NaN, this.left = NaN, this.right = NaN, 
            this.centerX = NaN, this.centerY = NaN, this.anchorX = NaN, this.anchorY = NaN;
        }
        return n(t, "laya.ui.LayoutStyle"), s(t, [ "EMPTY", function() {
            return this.EMPTY = new t();
        } ]), t;
    }(), I = function() {
        function t() {}
        return n(t, "laya.ui.Styles"), t.labelColor = "#000000", t.buttonStateNum = 3, t.scrollBarMinNum = 15, 
        t.scrollBarDelayTime = 500, s(t, [ "defaultSizeGrid", function() {
            return this.defaultSizeGrid = [ 4, 4, 4, 4, 0 ];
        }, "labelPadding", function() {
            return this.labelPadding = [ 2, 2, 2, 2 ];
        }, "inputLabelPadding", function() {
            return this.inputLabelPadding = [ 1, 1, 1, 3 ];
        }, "buttonLabelColors", function() {
            return this.buttonLabelColors = [ "#32556b", "#32cc6b", "#ff0000", "#C0C0C0" ];
        }, "comboBoxItemColors", function() {
            return this.comboBoxItemColors = [ "#5e95b6", "#ffffff", "#000000", "#8fa4b1", "#ffffff" ];
        } ]), t;
    }(), P = function() {
        function t() {}
        return n(t, "laya.ui.UIUtils"), t.fillArray = function(t, e, i) {
            var s = t.concat();
            if (e) for (var n = e.split(","), r = 0, a = Math.min(s.length, n.length); r < a; r++) {
                var o = n[r];
                s[r] = "true" == o || "false" != o && o, null != i && (s[r] = i(o));
            }
            return s;
        }, t.toColor = function(t) {
            return T.toHexColor(t);
        }, t.gray = function(e, i) {
            void 0 === i && (i = !0), i ? t.addFilter(e, t.grayFilter) : t.clearFilter(e, l);
        }, t.addFilter = function(t, e) {
            var i = t.filters || [];
            i.push(e), t.filters = i;
        }, t.clearFilter = function(t, e) {
            var s = t.filters;
            if (null != s && s.length > 0) {
                for (var n = s.length - 1; n > -1; n--) {
                    var r = s[n];
                    i.__typeof(r, e) && s.splice(n, 1);
                }
                t.filters = s;
            }
        }, t._getReplaceStr = function(e) {
            return t.escapeSequence[e];
        }, t.adptString = function(e) {
            return e.replace(/\\(\w)/g, t._getReplaceStr);
        }, t.getBindFun = function(e) {
            var i = t._funMap.get(e);
            if (null == i) {
                var s = '"' + e + '"', n = "(function(data){if(data==null)return;with(data){try{\nreturn " + (s = s.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
                i = o.window.eval(n), t._funMap.set(e, i);
            }
            return i;
        }, s(t, [ "grayFilter", function() {
            return this.grayFilter = new l([ .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0 ]);
        }, "escapeSequence", function() {
            return this.escapeSequence = {
                "\\n": "\n",
                "\\t": "\t"
            };
        }, "_funMap", function() {
            return this._funMap = new M();
        } ]), t;
    }(), k = function() {
        function t() {}
        return n(t, "UIConfig"), t.touchScrollEnable = !0, t.mouseWheelEnable = !0, t.showButtons = !0, 
        t.popupBgColor = "#000000", t.popupBgAlpha = .5, t.closeDialogOnSide = !0, t;
    }(), R = function(t) {
        function e() {
            this.autoCacheCmd = !0, this._width = 0, this._height = 0, this._source = null, 
            this._sizeGrid = null, this._isChanged = !1, this._offset = null, e.__super.call(this);
        }
        n(e, "laya.ui.AutoBitmap", t);
        var s = e.prototype;
        return s.destroy = function() {
            t.prototype.destroy.call(this), this._source = null, this._sizeGrid = null, this._offset = null;
        }, s._setChanged = function() {
            this._isChanged || (this._isChanged = !0, i.timer.callLater(this, this.changeSource));
        }, s.changeSource = function() {
            this._isChanged = !1;
            var t = this._source;
            if (t && t.bitmap) {
                var i = this.width, s = this.height, n = this._sizeGrid, r = t.sourceWidth, a = t.sourceHeight;
                if (!n || r === i && a === s) this.cleanByTexture(t, this._offset ? this._offset[0] : 0, this._offset ? this._offset[1] : 0, i, s); else {
                    t.$_GID || (t.$_GID = T.getGID());
                    var o = t.$_GID + "." + i + "." + s + "." + n.join(".");
                    if (T.isOKCmdList(M.I.get(o))) return void (this.cmds = M.I.get(o));
                    this.clear();
                    var h = n[0], l = n[1], u = n[2], c = n[3], _ = n[4], d = !1;
                    if (i == r && (c = l = 0), s == a && (h = u = 0), c + l > i) {
                        var f = i;
                        d = !0, i = c + l, this.save(), this.clipRect(0, 0, f, s);
                    }
                    c && h && this.drawTexture(e.getTexture(t, 0, 0, c, h), 0, 0, c, h), l && h && this.drawTexture(e.getTexture(t, r - l, 0, l, h), i - l, 0, l, h), 
                    c && u && this.drawTexture(e.getTexture(t, 0, a - u, c, u), 0, s - u, c, u), l && u && this.drawTexture(e.getTexture(t, r - l, a - u, l, u), i - l, s - u, l, u), 
                    h && this.drawBitmap(_, e.getTexture(t, c, 0, r - c - l, h), c, 0, i - c - l, h), 
                    u && this.drawBitmap(_, e.getTexture(t, c, a - u, r - c - l, u), c, s - u, i - c - l, u), 
                    c && this.drawBitmap(_, e.getTexture(t, 0, h, c, a - h - u), 0, h, c, s - h - u), 
                    l && this.drawBitmap(_, e.getTexture(t, r - l, h, l, a - h - u), i - l, h, l, s - h - u), 
                    this.drawBitmap(_, e.getTexture(t, c, h, r - c - l, a - h - u), c, h, i - c - l, s - h - u), 
                    d && this.restore(), this.autoCacheCmd && !w.isConchApp && M.I.set(o, this.cmds);
                }
                this._repaint();
            }
        }, s.drawBitmap = function(t, e, i, s, n, r) {
            void 0 === n && (n = 0), void 0 === r && (r = 0), n < .1 || r < .1 || (!t || e.width == n && e.height == r ? this.drawTexture(e, i, s, n, r) : this.fillTexture(e, i, s, n, r));
        }, s.clear = function(e) {
            void 0 === e && (e = !0), t.prototype.clear.call(this, !1);
        }, r(0, s, "sizeGrid", function() {
            return this._sizeGrid;
        }, function(t) {
            this._sizeGrid = t, this._setChanged();
        }), r(0, s, "width", function() {
            return this._width ? this._width : this._source ? this._source.sourceWidth : 0;
        }, function(t) {
            this._width != t && (this._width = t, this._setChanged());
        }), r(0, s, "height", function() {
            return this._height ? this._height : this._source ? this._source.sourceHeight : 0;
        }, function(t) {
            this._height != t && (this._height = t, this._setChanged());
        }), r(0, s, "source", function() {
            return this._source;
        }, function(t) {
            t ? (this._source = t, this._setChanged()) : (this._source = null, this.clear());
        }), e.getTexture = function(t, e, i, s, n) {
            s <= 0 && (s = 1), n <= 0 && (n = 1), t.$_GID || (t.$_GID = T.getGID());
            var r = t.$_GID + "." + e + "." + i + "." + s + "." + n, a = M.I.get(r);
            return a && a.source || (a = C.createFromTexture(t, e, i, s, n), M.I.set(r, a)), 
            a;
        }, e;
    }(f), B = (function(t) {
        function e() {
            e.__super.call(this);
        }
        n(e, "laya.ui.UIEvent", c), e.SHOW_TIP = "showtip", e.HIDE_TIP = "hidetip";
    }(), function(t) {
        function e() {
            this._comXml = null, this._dataSource = null, this._toolTip = null, this._tag = null, 
            this._disabled = !1, this._gray = !1, this.layoutEnabled = !0, e.__super.call(this), 
            this._layout = L.EMPTY, this.preinitialize(), this.createChildren(), this.initialize();
        }
        n(e, "laya.ui.Component", t);
        var s = e.prototype;
        return i.imps(s, {
            "laya.ui.IComponent": !0
        }), s.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._dataSource = this._layout = null, 
            this._tag = null, this._toolTip = null;
        }, s.preinitialize = function() {}, s.createChildren = function() {}, s.initialize = function() {}, 
        s.callLater = function(t, e) {
            i.timer.callLater(this, t, e);
        }, s.runCallLater = function(t) {
            i.timer.runCallLater(this, t);
        }, s.commitMeasure = function() {}, s.changeSize = function() {
            this.event("resize");
        }, s.getLayout = function() {
            return this._layout === L.EMPTY && (this._layout = new L()), this._layout;
        }, s._setLayoutEnabled = function(t) {
            this._layout && this._layout.enable != t && (this._layout.enable = t, this.on("added", this, this.onAdded), 
            this.on("removed", this, this.onRemoved), this.parent && this.onAdded());
        }, s.onRemoved = function() {
            this.parent.off("resize", this, this.onCompResize);
        }, s.onAdded = function() {
            this.parent.on("resize", this, this.onCompResize), this.resetLayoutX(), this.resetLayoutY();
        }, s.onCompResize = function() {
            this._layout && this._layout.enable && (this.resetLayoutX(), this.resetLayoutY());
        }, s.resetLayoutX = function() {
            var t = this._layout;
            if (isNaN(t.anchorX) || (this.pivotX = t.anchorX * this.width), this.layoutEnabled) {
                var e = this.parent;
                e && (isNaN(t.centerX) ? isNaN(t.left) ? isNaN(t.right) || (this.x = Math.round(e.width - this.displayWidth - t.right + this.pivotX * this.scaleX)) : (this.x = Math.round(t.left + this.pivotX * this.scaleX), 
                isNaN(t.right) || (this.width = (e._width - t.left - t.right) / (this.scaleX || .01))) : this.x = Math.round(.5 * (e.width - this.displayWidth) + t.centerX + this.pivotX * this.scaleX));
            }
        }, s.resetLayoutY = function() {
            var t = this._layout;
            if (isNaN(t.anchorY) || (this.pivotY = t.anchorY * this.height), this.layoutEnabled) {
                var e = this.parent;
                e && (isNaN(t.centerY) ? isNaN(t.top) ? isNaN(t.bottom) || (this.y = Math.round(e.height - this.displayHeight - t.bottom + this.pivotY * this.scaleY)) : (this.y = Math.round(t.top + this.pivotY * this.scaleY), 
                isNaN(t.bottom) || (this.height = (e._height - t.top - t.bottom) / (this.scaleY || .01))) : this.y = Math.round(.5 * (e.height - this.displayHeight) + t.centerY + this.pivotY * this.scaleY));
            }
        }, s.onMouseOver = function(t) {
            i.stage.event("showtip", this._toolTip);
        }, s.onMouseOut = function(t) {
            i.stage.event("hidetip", this._toolTip);
        }, r(0, s, "displayWidth", function() {
            return this.width * this.scaleX;
        }), r(0, s, "width", function() {
            return this._width ? this._width : this.measureWidth;
        }, function(t) {
            this._width != t && (this._width = t, this.conchModel && this.conchModel.size(this._width, this._height), 
            this.callLater(this.changeSize), !this._layout.enable || isNaN(this._layout.centerX) && isNaN(this._layout.right) && isNaN(this._layout.anchorX) || this.resetLayoutX());
        }), r(0, s, "measureWidth", function() {
            var t = 0;
            this.commitMeasure();
            for (var e = this.numChildren - 1; e > -1; e--) {
                var i = this.getChildAt(e);
                i.visible && (t = Math.max(i.x + i.width * i.scaleX, t));
            }
            return t;
        }), r(0, s, "displayHeight", function() {
            return this.height * this.scaleY;
        }), r(0, s, "height", function() {
            return this._height ? this._height : this.measureHeight;
        }, function(t) {
            this._height != t && (this._height = t, this.conchModel && this.conchModel.size(this._width, this._height), 
            this.callLater(this.changeSize), !this._layout.enable || isNaN(this._layout.centerY) && isNaN(this._layout.bottom) && isNaN(this._layout.anchorY) || this.resetLayoutY());
        }), r(0, s, "dataSource", function() {
            return this._dataSource;
        }, function(t) {
            this._dataSource = t;
            for (var e in this._dataSource) this.hasOwnProperty(e) && "function" != typeof this[e] && (this[e] = this._dataSource[e]);
        }), r(0, s, "scaleY", t.prototype._$get_scaleY, function(t) {
            i.superGet(x, this, "scaleY") != t && (i.superSet(x, this, "scaleY", t), this.callLater(this.changeSize), 
            this._layout.enable && this.resetLayoutY());
        }), r(0, s, "measureHeight", function() {
            var t = 0;
            this.commitMeasure();
            for (var e = this.numChildren - 1; e > -1; e--) {
                var i = this.getChildAt(e);
                i.visible && (t = Math.max(i.y + i.height * i.scaleY, t));
            }
            return t;
        }), r(0, s, "scaleX", t.prototype._$get_scaleX, function(t) {
            i.superGet(x, this, "scaleX") != t && (i.superSet(x, this, "scaleX", t), this.callLater(this.changeSize), 
            this._layout.enable && this.resetLayoutX());
        }), r(0, s, "top", function() {
            return this._layout.top;
        }, function(t) {
            t != this._layout.top && (this.getLayout().top = t, this._setLayoutEnabled(!0)), 
            this.resetLayoutY();
        }), r(0, s, "bottom", function() {
            return this._layout.bottom;
        }, function(t) {
            t != this._layout.bottom && (this.getLayout().bottom = t, this._setLayoutEnabled(!0)), 
            this.resetLayoutY();
        }), r(0, s, "left", function() {
            return this._layout.left;
        }, function(t) {
            t != this._layout.left && (this.getLayout().left = t, this._setLayoutEnabled(!0)), 
            this.resetLayoutX();
        }), r(0, s, "right", function() {
            return this._layout.right;
        }, function(t) {
            t != this._layout.right && (this.getLayout().right = t, this._setLayoutEnabled(!0)), 
            this.resetLayoutX();
        }), r(0, s, "centerX", function() {
            return this._layout.centerX;
        }, function(t) {
            t != this._layout.centerX && (this.getLayout().centerX = t, this._setLayoutEnabled(!0)), 
            this.resetLayoutX();
        }), r(0, s, "centerY", function() {
            return this._layout.centerY;
        }, function(t) {
            t != this._layout.centerY && (this.getLayout().centerY = t, this._setLayoutEnabled(!0)), 
            this.resetLayoutY();
        }), r(0, s, "anchorX", function() {
            return this._layout.anchorX;
        }, function(t) {
            t != this._layout.anchorX && (this.getLayout().anchorX = t, this._setLayoutEnabled(!0)), 
            this.resetLayoutX();
        }), r(0, s, "anchorY", function() {
            return this._layout.anchorY;
        }, function(t) {
            t != this._layout.anchorY && (this.getLayout().anchorY = t, this._setLayoutEnabled(!0)), 
            this.resetLayoutY();
        }), r(0, s, "tag", function() {
            return this._tag;
        }, function(t) {
            this._tag = t;
        }), r(0, s, "toolTip", function() {
            return this._toolTip;
        }, function(t) {
            this._toolTip != t && (this._toolTip = t, null != t ? (this.on("mouseover", this, this.onMouseOver), 
            this.on("mouseout", this, this.onMouseOut)) : (this.off("mouseover", this, this.onMouseOver), 
            this.off("mouseout", this, this.onMouseOut)));
        }), r(0, s, "comXml", function() {
            return this._comXml;
        }, function(t) {
            this._comXml = t;
        }), r(0, s, "gray", function() {
            return this._gray;
        }, function(t) {
            t !== this._gray && (this._gray = t, P.gray(this, t));
        }), r(0, s, "disabled", function() {
            return this._disabled;
        }, function(t) {
            t !== this._disabled && (this.gray = this._disabled = t, this.mouseEnabled = !t);
        }), e;
    }(x)), E = function(t) {
        function e() {
            this.lockLayer = null, this.popupEffect = function(t) {
                t.scale(1, 1), S.from(t, {
                    x: i.stage.width / 2,
                    y: i.stage.height / 2,
                    scaleX: 0,
                    scaleY: 0
                }, 300, u.backOut, p.create(this, this.doOpen, [ t ]));
            }, this.closeEffect = function(t, e) {
                S.to(t, {
                    x: i.stage.width / 2,
                    y: i.stage.height / 2,
                    scaleX: 0,
                    scaleY: 0
                }, 300, u.strongOut, p.create(this, this.doClose, [ t, e ]));
            }, e.__super.call(this), this.maskLayer = new x(), this.popupEffectHandler = new p(this, this.popupEffect), 
            this.closeEffectHandler = new p(this, this.closeEffect), this.mouseEnabled = this.maskLayer.mouseEnabled = !0, 
            this.zOrder = 1e3, i.stage.addChild(this), i.stage.on("resize", this, this._onResize), 
            k.closeDialogOnSide && this.maskLayer.on("click", this, this._closeOnSide), this._onResize(null);
        }
        n(e, "laya.ui.DialogManager", x);
        var s = e.prototype;
        return s._closeOnSide = function() {
            var t = this.getChildAt(this.numChildren - 1);
            t instanceof laya.ui.Dialog && t.close("side");
        }, s.setLockView = function(t) {
            this.lockLayer || (this.lockLayer = new D(), this.lockLayer.mouseEnabled = !0, this.lockLayer.size(i.stage.width, i.stage.height)), 
            this.lockLayer.removeChildren(), t && (t.centerX = t.centerY = 0, this.lockLayer.addChild(t));
        }, s._onResize = function(t) {
            var e = this.maskLayer.width = i.stage.width, s = this.maskLayer.height = i.stage.height;
            this.lockLayer && this.lockLayer.size(e, s), this.maskLayer.graphics.clear(), this.maskLayer.graphics.drawRect(0, 0, e, s, k.popupBgColor), 
            this.maskLayer.alpha = k.popupBgAlpha;
            for (var n = this.numChildren - 1; n > -1; n--) {
                var r = this.getChildAt(n);
                r.popupCenter && this._centerDialog(r);
            }
        }, s._centerDialog = function(t) {
            t.x = Math.round((i.stage.width - t.width >> 1) + t.pivotX), t.y = Math.round((i.stage.height - t.height >> 1) + t.pivotY);
        }, s.open = function(t, e, i) {
            void 0 === e && (e = !1), void 0 === i && (i = !1), e && this._closeAll(), t.popupCenter && this._centerDialog(t), 
            this.addChild(t), (t.isModal || this._$P.hasZorder) && this.timer.callLater(this, this._checkMask), 
            i && null != t.popupEffect ? t.popupEffect.runWith(t) : this.doOpen(t), this.event("open");
        }, s.doOpen = function(t) {
            t.onOpened();
        }, s.lock = function(t) {
            this.lockLayer && (t ? this.addChild(this.lockLayer) : this.lockLayer.removeSelf());
        }, s.close = function(t, e, i) {
            void 0 === i && (i = !1), i && null != t.closeEffect ? t.closeEffect.runWith([ t, e ]) : this.doClose(t, e), 
            this.event("close");
        }, s.doClose = function(t, e) {
            t.removeSelf(), t.isModal && this._checkMask(), t.closeHandler && t.closeHandler.runWith(e), 
            t.onClosed(e);
        }, s.closeAll = function() {
            this._closeAll(), this.event("close");
        }, s._closeAll = function() {
            for (var t = this.numChildren - 1; t > -1; t--) {
                var e = this.getChildAt(t);
                e && null != e.close && this.doClose(e);
            }
        }, s.getDialogsByGroup = function(t) {
            for (var e = [], i = this.numChildren - 1; i > -1; i--) {
                var s = this.getChildAt(i);
                s && s.group === t && e.push(s);
            }
            return e;
        }, s.closeByGroup = function(t) {
            for (var e = [], i = this.numChildren - 1; i > -1; i--) {
                var s = this.getChildAt(i);
                s && s.group === t && (s.close(), e.push(s));
            }
            return e;
        }, s._checkMask = function() {
            this.maskLayer.removeSelf();
            for (var t = this.numChildren - 1; t > -1; t--) {
                var e = this.getChildAt(t);
                if (e && e.isModal) return void this.addChildAt(this.maskLayer, t);
            }
        }, e;
    }(), D = function(t) {
        function e() {
            e.__super.call(this);
        }
        n(e, "laya.ui.Box", t);
        var s = e.prototype;
        return i.imps(s, {
            "laya.ui.IBox": !0
        }), r(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t;
            for (var e in t) {
                var i = this.getChildByName(e);
                i ? i.dataSource = t[e] : this.hasOwnProperty(e) && "function" != typeof this[e] && (this[e] = t[e]);
            }
        }), e;
    }(B), A = function(t) {
        function e(t, i) {
            this.toggle = !1, this._bitmap = null, this._text = null, this._strokeColors = null, 
            this._state = 0, this._selected = !1, this._skin = null, this._autoSize = !0, this._sources = null, 
            this._clickHandler = null, this._stateChanged = !1, e.__super.call(this), this._labelColors = I.buttonLabelColors, 
            this._stateNum = I.buttonStateNum, void 0 === i && (i = ""), this.skin = t, this.label = i;
        }
        n(e, "laya.ui.Button", t);
        var a = e.prototype;
        return i.imps(a, {
            "laya.ui.ISelect": !0
        }), a.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._bitmap && this._bitmap.destroy(), 
            this._text && this._text.destroy(e), this._bitmap = null, this._text = null, this._clickHandler = null, 
            this._labelColors = this._sources = this._strokeColors = null;
        }, a.createChildren = function() {
            this.graphics = this._bitmap = new R();
        }, a.createText = function() {
            this._text || (this._text = new b(), this._text.overflow = b.HIDDEN, this._text.align = "center", 
            this._text.valign = "middle", this._text.width = this._width, this._text.height = this._height);
        }, a.initialize = function() {
            1 !== this._mouseEnableState && (this.mouseEnabled = !0, this._setBit(2, !0)), this._createListener("mouseover", this, this.onMouse, null, !1, !1), 
            this._createListener("mouseout", this, this.onMouse, null, !1, !1), this._createListener("mousedown", this, this.onMouse, null, !1, !1), 
            this._createListener("mouseup", this, this.onMouse, null, !1, !1), this._createListener("click", this, this.onMouse, null, !1, !1);
        }, a.onMouse = function(t) {
            if (!1 !== this.toggle || !this._selected) return "click" === t.type ? (this.toggle && (this.selected = !this._selected), 
            void (this._clickHandler && this._clickHandler.run())) : void (!this._selected && (this.state = e.stateMap[t.type]));
        }, a.changeClips = function() {
            var t = m.getRes(this._skin);
            if (t) {
                var e = t.sourceWidth, i = t.sourceHeight / this._stateNum;
                t.$_GID || (t.$_GID = T.getGID());
                var s = t.$_GID + "-" + this._stateNum, n = M.I.get(s);
                if (T.isOkTextureList(n) || (n = null), n) this._sources = n; else {
                    if (this._sources = [], 1 === this._stateNum) this._sources.push(t); else for (var r = 0; r < this._stateNum; r++) this._sources.push(C.createFromTexture(t, 0, i * r, e, i));
                    M.I.set(s, this._sources);
                }
                this._autoSize ? (this._bitmap.width = this._width || e, this._bitmap.height = this._height || i, 
                this._text && (this._text.width = this._bitmap.width, this._text.height = this._bitmap.height)) : this._text && (this._text.x = e);
            } else console.log("lose skin", this._skin);
        }, a.changeState = function() {
            this._stateChanged = !1, this.runCallLater(this.changeClips);
            var t = this._state < this._stateNum ? this._state : this._stateNum - 1;
            this._sources && (this._bitmap.source = this._sources[t]), this.label && (this._text.color = this._labelColors[t], 
            this._strokeColors && (this._text.strokeColor = this._strokeColors[t]));
        }, a._setStateChanged = function() {
            this._stateChanged || (this._stateChanged = !0, this.callLater(this.changeState));
        }, r(0, a, "labelStrokeColor", function() {
            return this.createText(), this._text.strokeColor;
        }, function(t) {
            this.createText(), this._text.strokeColor = t;
        }), r(0, a, "measureHeight", function() {
            return this.runCallLater(this.changeClips), this._text ? Math.max(this._bitmap.height, this._text.height) : this._bitmap.height;
        }), r(0, a, "skin", function() {
            return this._skin;
        }, function(t) {
            this._skin != t && (this._skin = t, this.callLater(this.changeClips), this._setStateChanged());
        }), r(0, a, "state", function() {
            return this._state;
        }, function(t) {
            this._state != t && (this._state = t, this._setStateChanged());
        }), r(0, a, "text", function() {
            return this.createText(), this._text;
        }), r(0, a, "stateNum", function() {
            return this._stateNum;
        }, function(t) {
            "string" == typeof t && (t = parseInt(t)), this._stateNum != t && (this._stateNum = t < 1 ? 1 : t > 3 ? 3 : t, 
            this.callLater(this.changeClips));
        }), r(0, a, "strokeColors", function() {
            return this._strokeColors ? this._strokeColors.join(",") : "";
        }, function(t) {
            this._strokeColors = P.fillArray(I.buttonLabelColors, t, String), this._setStateChanged();
        }), r(0, a, "labelColors", function() {
            return this._labelColors.join(",");
        }, function(t) {
            this._labelColors = P.fillArray(I.buttonLabelColors, t, String), this._setStateChanged();
        }), r(0, a, "measureWidth", function() {
            return this.runCallLater(this.changeClips), this._autoSize ? this._bitmap.width : (this.runCallLater(this.changeState), 
            this._bitmap.width + (this._text ? this._text.width : 0));
        }), r(0, a, "label", function() {
            return this._text ? this._text.text : null;
        }, function(t) {
            (this._text || t) && (this.createText(), this._text.text != t && (t && !this._text.parent && this.addChild(this._text), 
            this._text.text = (t + "").replace(/\\n/g, "\n"), this._setStateChanged()));
        }), r(0, a, "selected", function() {
            return this._selected;
        }, function(t) {
            this._selected != t && (this._selected = t, this.state = this._selected ? 2 : 0, 
            this.event("change"));
        }), r(0, a, "labelPadding", function() {
            return this.createText(), this._text.padding.join(",");
        }, function(t) {
            this.createText(), this._text.padding = P.fillArray(I.labelPadding, t, Number);
        }), r(0, a, "labelSize", function() {
            return this.createText(), this._text.fontSize;
        }, function(t) {
            this.createText(), this._text.fontSize = t;
        }), r(0, a, "labelStroke", function() {
            return this.createText(), this._text.stroke;
        }, function(t) {
            this.createText(), this._text.stroke = t;
        }), r(0, a, "labelBold", function() {
            return this.createText(), this._text.bold;
        }, function(t) {
            this.createText(), this._text.bold = t;
        }), r(0, a, "labelFont", function() {
            return this.createText(), this._text.font;
        }, function(t) {
            this.createText(), this._text.font = t;
        }), r(0, a, "labelAlign", function() {
            return this.createText(), this._text.align;
        }, function(t) {
            this.createText(), this._text.align = t;
        }), r(0, a, "clickHandler", function() {
            return this._clickHandler;
        }, function(t) {
            this._clickHandler = t;
        }), r(0, a, "sizeGrid", function() {
            return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
        }, function(t) {
            this._bitmap.sizeGrid = P.fillArray(I.defaultSizeGrid, t, Number);
        }), r(0, a, "width", t.prototype._$get_width, function(t) {
            i.superSet(B, this, "width", t), this._autoSize && (this._bitmap.width = t, this._text && (this._text.width = t));
        }), r(0, a, "height", t.prototype._$get_height, function(t) {
            i.superSet(B, this, "height", t), this._autoSize && (this._bitmap.height = t, this._text && (this._text.height = t));
        }), r(0, a, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.label = t + "" : i.superSet(B, this, "dataSource", t);
        }), r(0, a, "iconOffset", function() {
            return this._bitmap._offset ? this._bitmap._offset.join(",") : null;
        }, function(t) {
            this._bitmap._offset = t ? P.fillArray([ 1, 1 ], t, Number) : [];
        }), s(e, [ "stateMap", function() {
            return this.stateMap = {
                mouseup: 0,
                mouseover: 1,
                mousedown: 2,
                mouseout: 0
            };
        } ]), e;
    }(B), N = function(t) {
        function e(t, i, s) {
            this._sources = null, this._bitmap = null, this._skin = null, this._clipX = 1, this._clipY = 1, 
            this._clipWidth = 0, this._clipHeight = 0, this._autoPlay = !1, this._interval = 50, 
            this._complete = null, this._isPlaying = !1, this._index = 0, this._clipChanged = !1, 
            this._group = null, this._toIndex = -1, e.__super.call(this), void 0 === i && (i = 1), 
            void 0 === s && (s = 1), this._clipX = i, this._clipY = s, this.skin = t;
        }
        n(e, "laya.ui.Clip", t);
        var s = e.prototype;
        return s.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, !0), this._bitmap && this._bitmap.destroy(), 
            this._bitmap = null, this._sources = null;
        }, s.dispose = function() {
            this.destroy(!0), i.loader.clearRes(this._skin);
        }, s.createChildren = function() {
            this.graphics = this._bitmap = new R();
        }, s._onDisplay = function(t) {
            this._isPlaying ? this._displayedInStage ? this.play() : this.stop() : this._autoPlay && this.play();
        }, s.changeClip = function() {
            if (this._clipChanged = !1, this._skin) {
                var t = m.getRes(this._skin);
                t ? this.loadComplete(this._skin, t) : i.loader.load(this._skin, p.create(this, this.loadComplete, [ this._skin ]));
            }
        }, s.loadComplete = function(t, e) {
            if (t === this._skin && e) {
                var i = this._clipWidth || Math.ceil(e.sourceWidth / this._clipX), s = this._clipHeight || Math.ceil(e.sourceHeight / this._clipY), n = this._skin + i + s, r = M.I.get(n);
                if (T.isOkTextureList(r) || (r = null), r) this._sources = r; else {
                    this._sources = [];
                    for (var a = 0; a < this._clipY; a++) for (var o = 0; o < this._clipX; o++) this._sources.push(C.createFromTexture(e, i * o, s * a, i, s));
                    M.I.set(n, this._sources);
                }
                this.index = this._index, this.event("loaded"), this.onCompResize();
            }
        }, s.play = function(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = -1), this._isPlaying = !0, this.index = t, 
            this._toIndex = e, this._index++, i.timer.loop(this.interval, this, this._loop), 
            this.on("display", this, this._onDisplay), this.on("undisplay", this, this._onDisplay);
        }, s._loop = function() {
            this._style.visible && this._sources && (this._index++, this._toIndex > -1 && this._index >= this._toIndex ? this.stop() : this._index >= this._sources.length && (this._index = 0), 
            this.index = this._index);
        }, s.stop = function() {
            this._isPlaying = !1, i.timer.clear(this, this._loop), this.event("complete");
        }, s._setClipChanged = function() {
            this._clipChanged || (this._clipChanged = !0, this.callLater(this.changeClip));
        }, r(0, s, "interval", function() {
            return this._interval;
        }, function(t) {
            this._interval != t && (this._interval = t, this._isPlaying && this.play());
        }), r(0, s, "skin", function() {
            return this._skin;
        }, function(t) {
            this._skin != t && (this._skin = t, t ? this._setClipChanged() : this._bitmap.source = null);
        }), r(0, s, "sources", function() {
            return this._sources;
        }, function(t) {
            this._sources = t, this.index = this._index, this.event("loaded");
        }), r(0, s, "clipX", function() {
            return this._clipX;
        }, function(t) {
            this._clipX = t || 1, this._setClipChanged();
        }), r(0, s, "clipY", function() {
            return this._clipY;
        }, function(t) {
            this._clipY = t || 1, this._setClipChanged();
        }), r(0, s, "total", function() {
            return this.runCallLater(this.changeClip), this._sources ? this._sources.length : 0;
        }), r(0, s, "clipWidth", function() {
            return this._clipWidth;
        }, function(t) {
            this._clipWidth = t, this._setClipChanged();
        }), r(0, s, "sizeGrid", function() {
            return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
        }, function(t) {
            this._bitmap.sizeGrid = P.fillArray(I.defaultSizeGrid, t, Number);
        }), r(0, s, "group", function() {
            return this._group;
        }, function(t) {
            t && this._skin && m.setGroup(this._skin, t), this._group = t;
        }), r(0, s, "clipHeight", function() {
            return this._clipHeight;
        }, function(t) {
            this._clipHeight = t, this._setClipChanged();
        }), r(0, s, "width", t.prototype._$get_width, function(t) {
            i.superSet(B, this, "width", t), this._bitmap.width = t;
        }), r(0, s, "height", t.prototype._$get_height, function(t) {
            i.superSet(B, this, "height", t), this._bitmap.height = t;
        }), r(0, s, "measureWidth", function() {
            return this.runCallLater(this.changeClip), this._bitmap.width;
        }), r(0, s, "measureHeight", function() {
            return this.runCallLater(this.changeClip), this._bitmap.height;
        }), r(0, s, "index", function() {
            return this._index;
        }, function(t) {
            this._index = t, this._bitmap && this._sources && (this._bitmap.source = this._sources[t]), 
            this.event("change");
        }), r(0, s, "autoPlay", function() {
            return this._autoPlay;
        }, function(t) {
            this._autoPlay != t && (this._autoPlay = t, t ? this.play() : this.stop());
        }), r(0, s, "isPlaying", function() {
            return this._isPlaying;
        }, function(t) {
            this._isPlaying = t;
        }), r(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.index = parseInt(t) : i.superSet(B, this, "dataSource", t);
        }), r(0, s, "bitmap", function() {
            return this._bitmap;
        }), e;
    }(B), F = function(t) {
        function e() {
            this.changeHandler = null, this._gridSize = 11, this._bgColor = "#ffffff", this._borderColor = "#000000", 
            this._inputColor = "#000000", this._inputBgColor = "#efefef", this._colorPanel = null, 
            this._colorTiles = null, this._colorBlock = null, this._colorInput = null, this._colorButton = null, 
            this._colors = [], this._selectedColor = "#000000", this._panelChanged = !1, e.__super.call(this);
        }
        n(e, "laya.ui.ColorPicker", t);
        var s = e.prototype;
        return s.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._colorPanel && this._colorPanel.destroy(e), 
            this._colorButton && this._colorButton.destroy(e), this._colorPanel = null, this._colorTiles = null, 
            this._colorBlock = null, this._colorInput = null, this._colorButton = null, this._colors = null, 
            this.changeHandler = null;
        }, s.createChildren = function() {
            this.addChild(this._colorButton = new A()), this._colorPanel = new D(), this._colorPanel.size(230, 166), 
            this._colorPanel.addChild(this._colorTiles = new x()), this._colorPanel.addChild(this._colorBlock = new x()), 
            this._colorPanel.addChild(this._colorInput = new g());
        }, s.initialize = function() {
            this._colorButton.on("click", this, this.onColorButtonClick), this._colorBlock.pos(5, 5), 
            this._colorInput.pos(60, 5), this._colorInput.size(60, 20), this._colorInput.on("change", this, this.onColorInputChange), 
            this._colorInput.on("keydown", this, this.onColorFieldKeyDown), this._colorTiles.pos(5, 30), 
            this._colorTiles.on("mousemove", this, this.onColorTilesMouseMove), this._colorTiles.on("click", this, this.onColorTilesClick), 
            this._colorTiles.size(20 * this._gridSize, 12 * this._gridSize), this._colorPanel.on("mousedown", this, this.onPanelMouseDown), 
            this.bgColor = this._bgColor;
        }, s.onPanelMouseDown = function(t) {
            t.stopPropagation();
        }, s.changePanel = function() {
            this._panelChanged = !1;
            var t = this._colorPanel.graphics;
            t.clear(), t.drawRect(0, 0, 230, 166, this._bgColor, this._borderColor), this.drawBlock(this._selectedColor), 
            this._colorInput.borderColor = this._borderColor, this._colorInput.bgColor = this._inputBgColor, 
            this._colorInput.color = this._inputColor, (t = this._colorTiles.graphics).clear();
            for (var e = [ 0, 3355443, 6710886, 10066329, 13421772, 16777215, 16711680, 65280, 255, 16776960, 65535, 16711935 ], i = 0; i < 12; i++) for (var s = 0; s < 20; s++) {
                var n = 0;
                n = 0 === s ? e[i] : 1 === s ? 0 : 51 * (((3 * i + s / 6) % 3 << 0) + 3 * (i / 6 << 0)) << 16 | s % 6 * 51 << 8 | (i << 0) % 6 * 51;
                var r = P.toColor(n);
                this._colors.push(r);
                var a = s * this._gridSize, o = i * this._gridSize;
                t.drawRect(a, o, this._gridSize, this._gridSize, r, "#000000");
            }
        }, s.onColorButtonClick = function(t) {
            this._colorPanel.parent ? this.close() : this.open();
        }, s.open = function() {
            var t = this.localToGlobal(new v()), e = t.x + this._colorPanel.width <= i.stage.width ? t.x : i.stage.width - this._colorPanel.width, s = t.y + this._colorButton.height;
            s = s + this._colorPanel.height <= i.stage.height ? s : t.y - this._colorPanel.height, 
            this._colorPanel.pos(e, s), this._colorPanel.zOrder = 1001, i._currentStage.addChild(this._colorPanel), 
            i.stage.on("mousedown", this, this.removeColorBox);
        }, s.close = function() {
            i.stage.off("mousedown", this, this.removeColorBox), this._colorPanel.removeSelf();
        }, s.removeColorBox = function(t) {
            this.close();
        }, s.onColorFieldKeyDown = function(t) {
            13 == t.keyCode && (this._colorInput.text ? this.selectedColor = this._colorInput.text : this.selectedColor = null, 
            this.close(), t.stopPropagation());
        }, s.onColorInputChange = function(t) {
            this._colorInput.text ? this.drawBlock(this._colorInput.text) : this.drawBlock("#FFFFFF");
        }, s.onColorTilesClick = function(t) {
            this.selectedColor = this.getColorByMouse(), this.close();
        }, s.onColorTilesMouseMove = function(t) {
            this._colorInput.focus = !1;
            var e = this.getColorByMouse();
            this._colorInput.text = e, this.drawBlock(e);
        }, s.getColorByMouse = function() {
            var t = this._colorTiles.getMousePoint(), e = Math.floor(t.x / this._gridSize), i = Math.floor(t.y / this._gridSize);
            return this._colors[20 * i + e];
        }, s.drawBlock = function(t) {
            var e = this._colorBlock.graphics;
            e.clear();
            var i = t || "#ffffff";
            e.drawRect(0, 0, 50, 20, i, this._borderColor), t || e.drawLine(0, 0, 50, 20, "#ff0000");
        }, s.changeColor = function() {
            var t = this.graphics;
            t.clear();
            var e = this._selectedColor || "#000000";
            t.drawRect(0, 0, this._colorButton.width, this._colorButton.height, e);
        }, s._setPanelChanged = function() {
            this._panelChanged || (this._panelChanged = !0, this.callLater(this.changePanel));
        }, r(0, s, "inputBgColor", function() {
            return this._inputBgColor;
        }, function(t) {
            this._inputBgColor = t, this._setPanelChanged();
        }), r(0, s, "selectedColor", function() {
            return this._selectedColor;
        }, function(t) {
            this._selectedColor != t && (this._selectedColor = this._colorInput.text = t, this.drawBlock(t), 
            this.changeColor(), this.changeHandler && this.changeHandler.runWith(this._selectedColor), 
            this.event("change", c.EMPTY.setTo("change", this, this)));
        }), r(0, s, "skin", function() {
            return this._colorButton.skin;
        }, function(t) {
            this._colorButton.skin = t, this.changeColor();
        }), r(0, s, "bgColor", function() {
            return this._bgColor;
        }, function(t) {
            this._bgColor = t, this._setPanelChanged();
        }), r(0, s, "borderColor", function() {
            return this._borderColor;
        }, function(t) {
            this._borderColor = t, this._setPanelChanged();
        }), r(0, s, "inputColor", function() {
            return this._inputColor;
        }, function(t) {
            this._inputColor = t, this._setPanelChanged();
        }), e;
    }(B), O = function(t) {
        function e(t, i) {
            this._visibleNum = 6, this._button = null, this._list = null, this._isOpen = !1, 
            this._itemSize = 12, this._labels = [], this._selectedIndex = -1, this._selectHandler = null, 
            this._itemHeight = NaN, this._listHeight = NaN, this._listChanged = !1, this._itemChanged = !1, 
            this._scrollBarSkin = null, this._isCustomList = !1, this.itemRender = null, e.__super.call(this), 
            this._itemColors = I.comboBoxItemColors, this.skin = t, this.labels = i;
        }
        n(e, "laya.ui.ComboBox", t);
        var s = e.prototype;
        return s.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._button && this._button.destroy(e), 
            this._list && this._list.destroy(e), this._button = null, this._list = null, this._itemColors = null, 
            this._labels = null, this._selectHandler = null;
        }, s.createChildren = function() {
            this.addChild(this._button = new A()), this._button.text.align = "left", this._button.labelPadding = "0,0,0,5", 
            this._button.on("mousedown", this, this.onButtonMouseDown);
        }, s._createList = function() {
            this._list = new j(), this._scrollBarSkin && (this._list.vScrollBarSkin = this._scrollBarSkin), 
            this._setListEvent(this._list);
        }, s._setListEvent = function(t) {
            this._list.selectEnable = !0, this._list.on("mousedown", this, this.onListDown), 
            this._list.mouseHandler = p.create(this, this.onlistItemMouse, null, !1), this._list.scrollBar && this._list.scrollBar.on("mousedown", this, this.onScrollBarDown);
        }, s.onListDown = function(t) {
            t.stopPropagation();
        }, s.onScrollBarDown = function(t) {
            t.stopPropagation();
        }, s.onButtonMouseDown = function(t) {
            this.callLater(this.switchTo, [ !this._isOpen ]);
        }, s.changeList = function() {
            this._listChanged = !1;
            var t = this.width - 2, e = this._itemColors[2];
            this._itemHeight = this._itemSize + 6, this._list.itemRender = this.itemRender || {
                type: "Box",
                child: [ {
                    type: "Label",
                    props: {
                        name: "label",
                        x: 1,
                        padding: "3,3,3,3",
                        width: t,
                        height: this._itemHeight,
                        fontSize: this._itemSize,
                        color: e
                    }
                } ]
            }, this._list.repeatY = this._visibleNum, this._list.refresh();
        }, s.onlistItemMouse = function(t, e) {
            var i = t.type;
            if ("mouseover" === i || "mouseout" === i) {
                if (this._isCustomList) return;
                var s = this._list.getCell(e);
                if (!s) return;
                var n = s.getChildByName("label");
                n && ("mouseover" === i ? (n.bgColor = this._itemColors[0], n.color = this._itemColors[1]) : (n.bgColor = null, 
                n.color = this._itemColors[2]));
            } else "click" === i && (this.selectedIndex = e, this.isOpen = !1);
        }, s.switchTo = function(t) {
            this.isOpen = t;
        }, s.changeOpen = function() {
            this.isOpen = !this._isOpen;
        }, s.changeItem = function() {
            if (this._itemChanged = !1, this._listHeight = this._labels.length > 0 ? Math.min(this._visibleNum, this._labels.length) * this._itemHeight : this._itemHeight, 
            !this._isCustomList) {
                var t = this._list.graphics;
                t.clear(), t.drawRect(0, 0, this.width - 1, this._listHeight, this._itemColors[4], this._itemColors[3]);
            }
            var e = this._list.array || [];
            e.length = 0;
            for (var i = 0, s = this._labels.length; i < s; i++) e.push({
                label: this._labels[i]
            });
            this._list.height = this._listHeight, this._list.array = e;
        }, s.changeSelected = function() {
            this._button.label = this.selectedLabel;
        }, s._onStageMouseWheel = function(t) {
            this._list && !this._list.contains(t.target) && this.removeList(null);
        }, s.removeList = function(t) {
            i.stage.off("mousedown", this, this.removeList), i.stage.off("mousewheel", this, this._onStageMouseWheel), 
            this.isOpen = !1;
        }, r(0, s, "selectedIndex", function() {
            return this._selectedIndex;
        }, function(t) {
            this._selectedIndex != t && (this._selectedIndex = t, this._labels.length > 0 ? this.changeSelected() : this.callLater(this.changeSelected), 
            this.event("change", [ c.EMPTY.setTo("change", this, this) ]), this._selectHandler && this._selectHandler.runWith(this._selectedIndex));
        }), r(0, s, "measureHeight", function() {
            return this._button.height;
        }), r(0, s, "skin", function() {
            return this._button.skin;
        }, function(t) {
            this._button.skin != t && (this._button.skin = t, this._listChanged = !0);
        }), r(0, s, "measureWidth", function() {
            return this._button.width;
        }), r(0, s, "width", t.prototype._$get_width, function(t) {
            i.superSet(B, this, "width", t), this._button.width = this._width, this._itemChanged = !0, 
            this._listChanged = !0;
        }), r(0, s, "selectedLabel", function() {
            return this._selectedIndex > -1 && this._selectedIndex < this._labels.length ? this._labels[this._selectedIndex] : null;
        }, function(t) {
            this.selectedIndex = this._labels.indexOf(t);
        }), r(0, s, "labels", function() {
            return this._labels.join(",");
        }, function(t) {
            this._labels.length > 0 && (this.selectedIndex = -1), t ? this._labels = t.split(",") : this._labels.length = 0, 
            this._itemChanged = !0;
        }), r(0, s, "height", t.prototype._$get_height, function(t) {
            i.superSet(B, this, "height", t), this._button.height = this._height;
        }), r(0, s, "selectHandler", function() {
            return this._selectHandler;
        }, function(t) {
            this._selectHandler = t;
        }), r(0, s, "visibleNum", function() {
            return this._visibleNum;
        }, function(t) {
            this._visibleNum = t, this._listChanged = !0;
        }), r(0, s, "labelBold", function() {
            return this._button.text.bold;
        }, function(t) {
            this._button.text.bold = t;
        }), r(0, s, "itemColors", function() {
            return String(this._itemColors);
        }, function(t) {
            this._itemColors = P.fillArray(this._itemColors, t, String), this._listChanged = !0;
        }), r(0, s, "itemSize", function() {
            return this._itemSize;
        }, function(t) {
            this._itemSize = t, this._listChanged = !0;
        }), r(0, s, "scrollBar", function() {
            return this.list.scrollBar;
        }), r(0, s, "isOpen", function() {
            return this._isOpen;
        }, function(t) {
            if (this._isOpen != t) if (this._isOpen = t, this._button.selected = this._isOpen, 
            this._isOpen) {
                this._list || this._createList(), this._listChanged && !this._isCustomList && this.changeList(), 
                this._itemChanged && this.changeItem();
                var e = this.localToGlobal(v.TEMP.setTo(0, 0)), s = e.y + this._button.height;
                s = s + this._listHeight <= i.stage.height ? s : e.y - this._listHeight, this._list.pos(e.x, s), 
                this._list.zOrder = 1001, i._currentStage.addChild(this._list), i.stage.once("mousedown", this, this.removeList), 
                i.stage.on("mousewheel", this, this._onStageMouseWheel), this._list.selectedIndex = this._selectedIndex;
            } else this._list && this._list.removeSelf();
        }), r(0, s, "scrollBarSkin", function() {
            return this._scrollBarSkin;
        }, function(t) {
            this._scrollBarSkin = t;
        }), r(0, s, "sizeGrid", function() {
            return this._button.sizeGrid;
        }, function(t) {
            this._button.sizeGrid = t;
        }), r(0, s, "button", function() {
            return this._button;
        }), r(0, s, "list", function() {
            return this._list || this._createList(), this._list;
        }, function(t) {
            t && (t.removeSelf(), this._isCustomList = !0, this._list = t, this._setListEvent(t), 
            this._itemHeight = t.getCell(0).height + t.spaceY);
        }), r(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.labels = t.join(",") : i.superSet(B, this, "dataSource", t);
        }), r(0, s, "labelColors", function() {
            return this._button.labelColors;
        }, function(t) {
            this._button.labelColors != t && (this._button.labelColors = t);
        }), r(0, s, "labelPadding", function() {
            return this._button.text.padding.join(",");
        }, function(t) {
            this._button.text.padding = P.fillArray(I.labelPadding, t, Number);
        }), r(0, s, "labelSize", function() {
            return this._button.text.fontSize;
        }, function(t) {
            this._button.text.fontSize = t;
        }), r(0, s, "labelFont", function() {
            return this._button.text.font;
        }, function(t) {
            this._button.text.font = t;
        }), r(0, s, "stateNum", function() {
            return this._button.stateNum;
        }, function(t) {
            this._button.stateNum = t;
        }), e;
    }(B), z = function(t) {
        function e(t) {
            this.rollRatio = .95, this.changeHandler = null, this.scaleBar = !0, this.autoHide = !1, 
            this.elasticDistance = 0, this.elasticBackTime = 500, this.upButton = null, this.downButton = null, 
            this.slider = null, this._scrollSize = 1, this._skin = null, this._thumbPercent = 1, 
            this._target = null, this._lastPoint = null, this._lastOffset = 0, this._checkElastic = !1, 
            this._isElastic = !1, this._value = NaN, this._hide = !1, this._clickOnly = !0, 
            this._offsets = null, e.__super.call(this), this._showButtons = k.showButtons, this._touchScrollEnable = k.touchScrollEnable, 
            this._mouseWheelEnable = k.mouseWheelEnable, this.skin = t, this.max = 1;
        }
        n(e, "laya.ui.ScrollBar", t);
        var s = e.prototype;
        return s.destroy = function(e) {
            void 0 === e && (e = !0), this.stopScroll(), this.target = null, t.prototype.destroy.call(this, e), 
            this.upButton && this.upButton.destroy(e), this.downButton && this.downButton.destroy(e), 
            this.slider && this.slider.destroy(e), this.upButton = this.downButton = null, this.slider = null, 
            this.changeHandler = null, this._offsets = null;
        }, s.createChildren = function() {
            this.addChild(this.slider = new G()), this.addChild(this.upButton = new A()), this.addChild(this.downButton = new A());
        }, s.initialize = function() {
            this.slider.showLabel = !1, this.slider.on("change", this, this.onSliderChange), 
            this.slider.setSlider(0, 0, 0), this.upButton.on("mousedown", this, this.onButtonMouseDown), 
            this.downButton.on("mousedown", this, this.onButtonMouseDown);
        }, s.onSliderChange = function() {
            this._value != this.slider.value && (this.value = this.slider.value);
        }, s.onButtonMouseDown = function(t) {
            var e = t.currentTarget === this.upButton;
            this.slide(e), i.timer.once(I.scrollBarDelayTime, this, this.startLoop, [ e ]), 
            i.stage.once("mouseup", this, this.onStageMouseUp);
        }, s.startLoop = function(t) {
            i.timer.frameLoop(1, this, this.slide, [ t ]);
        }, s.slide = function(t) {
            t ? this.value -= this._scrollSize : this.value += this._scrollSize;
        }, s.onStageMouseUp = function(t) {
            i.timer.clear(this, this.startLoop), i.timer.clear(this, this.slide);
        }, s.changeScrollBar = function() {
            this.upButton.visible = this._showButtons, this.downButton.visible = this._showButtons, 
            this._showButtons && (this.upButton.skin = this._skin.replace(".png", "$up.png"), 
            this.downButton.skin = this._skin.replace(".png", "$down.png")), this.slider.isVertical ? this.slider.y = this._showButtons ? this.upButton.height : 0 : this.slider.x = this._showButtons ? this.upButton.width : 0, 
            this.resetPositions(), this.repaint();
        }, s.changeSize = function() {
            t.prototype.changeSize.call(this), this.repaint(), this.resetPositions(), this.event("change"), 
            this.changeHandler && this.changeHandler.runWith(this.value);
        }, s.resetPositions = function() {
            this.slider.isVertical ? this.slider.height = this.height - (this._showButtons ? this.upButton.height + this.downButton.height : 0) : this.slider.width = this.width - (this._showButtons ? this.upButton.width + this.downButton.width : 0), 
            this.resetButtonPosition();
        }, s.resetButtonPosition = function() {
            this.slider.isVertical ? this.downButton.y = this.slider.y + this.slider.height : this.downButton.x = this.slider.x + this.slider.width;
        }, s.setScroll = function(t, e, i) {
            this.runCallLater(this.changeSize), this.slider.setSlider(t, e, i), this.slider.bar.visible = e > 0, 
            !this._hide && this.autoHide && (this.visible = !1);
        }, s.onTargetMouseWheel = function(t) {
            this.value -= t.delta * this._scrollSize, this.target = this._target;
        }, s.onTargetMouseDown = function(t) {
            this._clickOnly = !0, this._lastOffset = 0, this._checkElastic = !1, this._lastPoint || (this._lastPoint = new v()), 
            this._lastPoint.setTo(i.stage.mouseX, i.stage.mouseY), i.timer.clear(this, this.tweenMove), 
            S.clearTween(this), i.stage.once("mouseup", this, this.onStageMouseUp2), i.stage.once("mouseout", this, this.onStageMouseUp2), 
            i.timer.frameLoop(1, this, this.loop);
        }, s.loop = function() {
            var t = i.stage.mouseY, e = i.stage.mouseX;
            if (this._lastOffset = this.isVertical ? t - this._lastPoint.y : e - this._lastPoint.x, 
            this._clickOnly) {
                if (!(Math.abs(this._lastOffset * (this.isVertical ? i.stage._canvasTransform.getScaleY() : i.stage._canvasTransform.getScaleX())) > 1)) return;
                this._clickOnly = !1, this._offsets || (this._offsets = []), this._offsets.length = 0, 
                this._target.mouseEnabled = !1, !this.hide && this.autoHide && (this.alpha = 1, 
                this.visible = !0), this.event("start");
            }
            this._offsets.push(this._lastOffset), this._lastPoint.x = e, this._lastPoint.y = t, 
            0 !== this._lastOffset && (this._checkElastic || (this.elasticDistance > 0 ? this._checkElastic || 0 == this._lastOffset || (this._lastOffset > 0 && this._value <= this.min || this._lastOffset < 0 && this._value >= this.max ? (this._isElastic = !0, 
            this._checkElastic = !0) : this._isElastic = !1) : this._checkElastic = !0), this._isElastic ? this._value <= this.min ? this.value -= this._lastOffset * Math.max(0, 1 - (this.min - this._value) / this.elasticDistance) : this._value >= this.max && (this.value -= this._lastOffset * Math.max(0, 1 - (this._value - this.max) / this.elasticDistance)) : this.value -= this._lastOffset);
        }, s.onStageMouseUp2 = function(t) {
            if (i.stage.off("mouseup", this, this.onStageMouseUp2), i.stage.off("mouseout", this, this.onStageMouseUp2), 
            i.timer.clear(this, this.loop), !(this._clickOnly && this._value >= this.min && this._value <= this.max)) if (this._target.mouseEnabled = !0, 
            this._isElastic) this._value < this.min ? S.to(this, {
                value: this.min
            }, this.elasticBackTime, u.sineOut, p.create(this, this.elasticOver)) : this._value > this.max && S.to(this, {
                value: this.max
            }, this.elasticBackTime, u.sineOut, p.create(this, this.elasticOver)); else {
                if (!this._offsets) return;
                this._offsets.length < 1 && (this._offsets[0] = this.isVertical ? i.stage.mouseY - this._lastPoint.y : i.stage.mouseX - this._lastPoint.x);
                for (var e = 0, s = Math.min(this._offsets.length, 3), n = 0; n < s; n++) e += this._offsets[this._offsets.length - 1 - n];
                if (this._lastOffset = e / s, (e = Math.abs(this._lastOffset)) < 2) return void this.event("end");
                e > 60 && (this._lastOffset = this._lastOffset > 0 ? 60 : -60);
                var r = Math.round(Math.abs(this.elasticDistance * (this._lastOffset / 240)));
                i.timer.frameLoop(1, this, this.tweenMove, [ r ]);
            }
        }, s.elasticOver = function() {
            this._isElastic = !1, !this.hide && this.autoHide && S.to(this, {
                alpha: 0
            }, 500), this.event("end");
        }, s.tweenMove = function(t) {
            this._lastOffset *= this.rollRatio;
            var e = NaN;
            if (t > 0 && (this._lastOffset > 0 && this.value <= this.min ? (this._isElastic = !0, 
            e = .5 * -(this.min - t - this.value), this._lastOffset > e && (this._lastOffset = e)) : this._lastOffset < 0 && this.value >= this.max && (this._isElastic = !0, 
            e = .5 * -(this.max + t - this.value), this._lastOffset < e && (this._lastOffset = e))), 
            this.value -= this._lastOffset, Math.abs(this._lastOffset) < 1) {
                if (i.timer.clear(this, this.tweenMove), this._isElastic) return void (this._value < this.min ? S.to(this, {
                    value: this.min
                }, this.elasticBackTime, u.sineOut, p.create(this, this.elasticOver)) : this._value > this.max ? S.to(this, {
                    value: this.max
                }, this.elasticBackTime, u.sineOut, p.create(this, this.elasticOver)) : this.elasticOver());
                this.event("end"), !this.hide && this.autoHide && S.to(this, {
                    alpha: 0
                }, 500);
            }
        }, s.stopScroll = function() {
            this.onStageMouseUp2(null), i.timer.clear(this, this.tweenMove), S.clearTween(this);
        }, r(0, s, "measureHeight", function() {
            return this.slider.isVertical ? 100 : this.slider.height;
        }), r(0, s, "skin", function() {
            return this._skin;
        }, function(t) {
            this._skin != t && (this._skin = t, this.slider.skin = this._skin, this.callLater(this.changeScrollBar));
        }), r(0, s, "max", function() {
            return this.slider.max;
        }, function(t) {
            this.slider.max = t;
        }), r(0, s, "showButtons", function() {
            return this._showButtons;
        }, function(t) {
            this._showButtons = t, this.callLater(this.changeScrollBar);
        }), r(0, s, "measureWidth", function() {
            return this.slider.isVertical ? this.slider.width : 100;
        }), r(0, s, "min", function() {
            return this.slider.min;
        }, function(t) {
            this.slider.min = t;
        }), r(0, s, "value", function() {
            return this._value;
        }, function(t) {
            t !== this._value && (this._value = t, this._isElastic || (this.slider._value != t && (this.slider._value = t, 
            this.slider.changeValue()), this._value = this.slider._value), this.event("change"), 
            this.changeHandler && this.changeHandler.runWith(this._value));
        }), r(0, s, "isVertical", function() {
            return this.slider.isVertical;
        }, function(t) {
            this.slider.isVertical = t;
        }), r(0, s, "sizeGrid", function() {
            return this.slider.sizeGrid;
        }, function(t) {
            this.slider.sizeGrid = t;
        }), r(0, s, "scrollSize", function() {
            return this._scrollSize;
        }, function(t) {
            this._scrollSize = t;
        }), r(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : i.superSet(B, this, "dataSource", t);
        }), r(0, s, "thumbPercent", function() {
            return this._thumbPercent;
        }, function(t) {
            this.runCallLater(this.changeScrollBar), this.runCallLater(this.changeSize), t = t >= 1 ? .99 : t, 
            this._thumbPercent = t, this.scaleBar && (this.slider.isVertical ? this.slider.bar.height = Math.max(this.slider.height * t, I.scrollBarMinNum) : this.slider.bar.width = Math.max(this.slider.width * t, I.scrollBarMinNum));
        }), r(0, s, "target", function() {
            return this._target;
        }, function(t) {
            this._target && (this._target.off("mousewheel", this, this.onTargetMouseWheel), 
            this._target.off("mousedown", this, this.onTargetMouseDown)), this._target = t, 
            t && (this._mouseWheelEnable && this._target.on("mousewheel", this, this.onTargetMouseWheel), 
            this._touchScrollEnable && this._target.on("mousedown", this, this.onTargetMouseDown));
        }), r(0, s, "hide", function() {
            return this._hide;
        }, function(t) {
            this._hide = t, this.visible = !t;
        }), r(0, s, "touchScrollEnable", function() {
            return this._touchScrollEnable;
        }, function(t) {
            this._touchScrollEnable = t, this.target = this._target;
        }), r(0, s, "mouseWheelEnable", function() {
            return this._mouseWheelEnable;
        }, function(t) {
            this._mouseWheelEnable = t;
        }), r(0, s, "tick", function() {
            return this.slider.tick;
        }, function(t) {
            this.slider.tick = t;
        }), e;
    }(B), G = function(t) {
        function e(t) {
            this.changeHandler = null, this.isVertical = !0, this.showLabel = !0, this._allowClickBack = !1, 
            this._max = 100, this._min = 0, this._tick = 1, this._value = 0, this._skin = null, 
            this._bg = null, this._progress = null, this._bar = null, this._tx = NaN, this._ty = NaN, 
            this._maxMove = NaN, this._globalSacle = null, e.__super.call(this), this.skin = t;
        }
        n(e, "laya.ui.Slider", t);
        var a = e.prototype;
        return a.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._bg && this._bg.destroy(e), 
            this._bar && this._bar.destroy(e), this._progress && this._progress.destroy(e), 
            this._bg = null, this._bar = null, this._progress = null, this.changeHandler = null;
        }, a.createChildren = function() {
            this.addChild(this._bg = new W()), this.addChild(this._bar = new A());
        }, a.initialize = function() {
            this._bar.on("mousedown", this, this.onBarMouseDown), this._bg.sizeGrid = this._bar.sizeGrid = "4,4,4,4,0", 
            this._progress && (this._progress.sizeGrid = this._bar.sizeGrid), this.allowClickBack = !0;
        }, a.onBarMouseDown = function(t) {
            this._globalSacle || (this._globalSacle = new v()), this._globalSacle.setTo(this.globalScaleX || .01, this.globalScaleY || .01), 
            this._maxMove = this.isVertical ? this.height - this._bar.height : this.width - this._bar.width, 
            this._tx = i.stage.mouseX, this._ty = i.stage.mouseY, i.stage.on("mousemove", this, this.mouseMove), 
            i.stage.once("mouseup", this, this.mouseUp), i.stage.once("mouseout", this, this.mouseUp), 
            this.showValueText();
        }, a.showValueText = function() {
            if (this.showLabel) {
                var t = laya.ui.Slider.label;
                this.addChild(t), t.textField.changeText(this._value + ""), this.isVertical ? (t.x = this._bar.x + 20, 
                t.y = .5 * (this._bar.height - t.height) + this._bar.y) : (t.y = this._bar.y - 20, 
                t.x = .5 * (this._bar.width - t.width) + this._bar.x);
            }
        }, a.hideValueText = function() {
            laya.ui.Slider.label && laya.ui.Slider.label.removeSelf();
        }, a.mouseUp = function(t) {
            i.stage.off("mousemove", this, this.mouseMove), i.stage.off("mouseup", this, this.mouseUp), 
            i.stage.off("mouseout", this, this.mouseUp), this.sendChangeEvent("changed"), this.hideValueText();
        }, a.mouseMove = function(t) {
            var e = this._value;
            this.isVertical ? (this._bar.y += (i.stage.mouseY - this._ty) / this._globalSacle.y, 
            this._bar.y > this._maxMove ? this._bar.y = this._maxMove : this._bar.y < 0 && (this._bar.y = 0), 
            this._value = this._bar.y / this._maxMove * (this._max - this._min) + this._min, 
            this._progress && (this._progress.height = this._bar.y + .5 * this._bar.height)) : (this._bar.x += (i.stage.mouseX - this._tx) / this._globalSacle.x, 
            this._bar.x > this._maxMove ? this._bar.x = this._maxMove : this._bar.x < 0 && (this._bar.x = 0), 
            this._value = this._bar.x / this._maxMove * (this._max - this._min) + this._min, 
            this._progress && (this._progress.width = this._bar.x + .5 * this._bar.width)), 
            this._tx = i.stage.mouseX, this._ty = i.stage.mouseY;
            var s = Math.pow(10, (this._tick + "").length - 1);
            this._value = Math.round(Math.round(this._value / this._tick) * this._tick * s) / s, 
            this._value != e && this.sendChangeEvent(), this.showValueText();
        }, a.sendChangeEvent = function(t) {
            void 0 === t && (t = "change"), this.event(t), this.changeHandler && this.changeHandler.runWith(this._value);
        }, a.setBarPoint = function() {
            this.isVertical ? this._bar.x = Math.round(.5 * (this._bg.width - this._bar.width)) : this._bar.y = Math.round(.5 * (this._bg.height - this._bar.height));
        }, a.changeSize = function() {
            t.prototype.changeSize.call(this), this.isVertical ? this._bg.height = this.height : this._bg.width = this.width, 
            this.setBarPoint(), this.changeValue();
        }, a.setSlider = function(t, e, i) {
            this._value = -1, this._min = t, this._max = e > t ? e : t, this.value = i < t ? t : i > e ? e : i;
        }, a.changeValue = function() {
            var t = Math.pow(10, (this._tick + "").length - 1);
            this._value = Math.round(Math.round(this._value / this._tick) * this._tick * t) / t, 
            this._value = this._value > this._max ? this._max : this._value < this._min ? this._min : this._value;
            var e = this._max - this._min;
            0 === e && (e = 1), this.isVertical ? (this._bar.y = (this._value - this._min) / e * (this.height - this._bar.height), 
            this._progress && (this._progress.height = this._bar.y + .5 * this._bar.height)) : (this._bar.x = (this._value - this._min) / e * (this.width - this._bar.width), 
            this._progress && (this._progress.width = this._bar.x + .5 * this._bar.width));
        }, a.onBgMouseDown = function(t) {
            var e = this._bg.getMousePoint();
            this.isVertical ? this.value = e.y / (this.height - this._bar.height) * (this._max - this._min) + this._min : this.value = e.x / (this.width - this._bar.width) * (this._max - this._min) + this._min;
        }, r(0, a, "measureHeight", function() {
            return Math.max(this._bg.height, this._bar.height);
        }), r(0, a, "skin", function() {
            return this._skin;
        }, function(t) {
            if (this._skin != t) {
                this._skin = t, this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png");
                var e = this._skin.replace(".png", "$progress.png");
                m.getRes(e) && (this._progress || (this.addChild(this._progress = new W()), this._progress.sizeGrid = this._bar.sizeGrid, 
                this.setChildIndex(this._progress, 1)), this._progress.skin = e), this.setBarPoint(), 
                this.callLater(this.changeValue);
            }
        }), r(0, a, "allowClickBack", function() {
            return this._allowClickBack;
        }, function(t) {
            this._allowClickBack != t && (this._allowClickBack = t, t ? this._bg.on("mousedown", this, this.onBgMouseDown) : this._bg.off("mousedown", this, this.onBgMouseDown));
        }), r(0, a, "max", function() {
            return this._max;
        }, function(t) {
            this._max != t && (this._max = t, this.callLater(this.changeValue));
        }), r(0, a, "measureWidth", function() {
            return Math.max(this._bg.width, this._bar.width);
        }), r(0, a, "tick", function() {
            return this._tick;
        }, function(t) {
            this._tick != t && (this._tick = t, this.callLater(this.changeValue));
        }), r(0, a, "sizeGrid", function() {
            return this._bg.sizeGrid;
        }, function(t) {
            this._bg.sizeGrid = t, this._bar.sizeGrid = t, this._progress && (this._progress.sizeGrid = this._bar.sizeGrid);
        }), r(0, a, "min", function() {
            return this._min;
        }, function(t) {
            this._min != t && (this._min = t, this.callLater(this.changeValue));
        }), r(0, a, "value", function() {
            return this._value;
        }, function(t) {
            if (this._value != t) {
                var e = this._value;
                this._value = t, this.changeValue(), this._value != e && this.sendChangeEvent();
            }
        }), r(0, a, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : i.superSet(B, this, "dataSource", t);
        }), r(0, a, "bar", function() {
            return this._bar;
        }), s(e, [ "label", function() {
            return this.label = new H();
        } ]), e;
    }(B), W = function(t) {
        function e(t) {
            this._bitmap = null, this._skin = null, this._group = null, e.__super.call(this), 
            this.skin = t;
        }
        n(e, "laya.ui.Image", t);
        var s = e.prototype;
        return s.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, !0), this._bitmap && this._bitmap.destroy(), 
            this._bitmap = null;
        }, s.dispose = function() {
            this.destroy(!0), i.loader.clearRes(this._skin);
        }, s.createChildren = function() {
            this.graphics = this._bitmap = new R(), this._bitmap.autoCacheCmd = !1;
        }, s.setSource = function(t, e) {
            t === this._skin && e && (this.source = e, this.onCompResize());
        }, r(0, s, "source", function() {
            return this._bitmap.source;
        }, function(t) {
            this._bitmap && (this._bitmap.source = t, this.event("loaded"), this.repaint());
        }), r(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "string" == typeof t ? this.skin = t : i.superSet(B, this, "dataSource", t);
        }), r(0, s, "measureHeight", function() {
            return this._bitmap.height;
        }), r(0, s, "skin", function() {
            return this._skin;
        }, function(t) {
            if (this._skin != t) if (this._skin = t, t) {
                var e = m.getRes(t);
                e ? (this.source = e, this.onCompResize()) : i.loader.load(this._skin, p.create(this, this.setSource, [ this._skin ]), null, "image", 1, !0, this._group);
            } else this.source = null;
        }), r(0, s, "group", function() {
            return this._group;
        }, function(t) {
            t && this._skin && m.setGroup(this._skin, t), this._group = t;
        }), r(0, s, "sizeGrid", function() {
            return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
        }, function(t) {
            this._bitmap.sizeGrid = P.fillArray(I.defaultSizeGrid, t, Number);
        }), r(0, s, "measureWidth", function() {
            return this._bitmap.width;
        }), r(0, s, "width", t.prototype._$get_width, function(t) {
            i.superSet(B, this, "width", t), this._bitmap.width = 0 == t ? 1e-7 : t;
        }), r(0, s, "height", t.prototype._$get_height, function(t) {
            i.superSet(B, this, "height", t), this._bitmap.height = 0 == t ? 1e-7 : t;
        }), e;
    }(B), H = function(t) {
        function e(t) {
            this._tf = null, e.__super.call(this), void 0 === t && (t = ""), _.defaultColor = I.labelColor, 
            this.text = t;
        }
        n(e, "laya.ui.Label", t);
        var s = e.prototype;
        return s.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._tf = null;
        }, s.createChildren = function() {
            this.addChild(this._tf = new b());
        }, s.changeText = function(t) {
            this._tf.changeText(t);
        }, r(0, s, "padding", function() {
            return this._tf.padding.join(",");
        }, function(t) {
            this._tf.padding = P.fillArray(I.labelPadding, t, Number);
        }), r(0, s, "bold", function() {
            return this._tf.bold;
        }, function(t) {
            this._tf.bold = t;
        }), r(0, s, "align", function() {
            return this._tf.align;
        }, function(t) {
            this._tf.align = t;
        }), r(0, s, "text", function() {
            return this._tf.text;
        }, function(t) {
            this._tf.text != t && (t && (t = P.adptString(t + "")), this._tf.text = t, this.event("change"), 
            this._width && this._height || this.onCompResize());
        }), r(0, s, "italic", function() {
            return this._tf.italic;
        }, function(t) {
            this._tf.italic = t;
        }), r(0, s, "wordWrap", function() {
            return this._tf.wordWrap;
        }, function(t) {
            this._tf.wordWrap = t;
        }), r(0, s, "font", function() {
            return this._tf.font;
        }, function(t) {
            this._tf.font = t;
        }), r(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.text = t + "" : i.superSet(B, this, "dataSource", t);
        }), r(0, s, "color", function() {
            return this._tf.color;
        }, function(t) {
            this._tf.color = t;
        }), r(0, s, "valign", function() {
            return this._tf.valign;
        }, function(t) {
            this._tf.valign = t;
        }), r(0, s, "leading", function() {
            return this._tf.leading;
        }, function(t) {
            this._tf.leading = t;
        }), r(0, s, "fontSize", function() {
            return this._tf.fontSize;
        }, function(t) {
            this._tf.fontSize = t;
        }), r(0, s, "bgColor", function() {
            return this._tf.bgColor;
        }, function(t) {
            this._tf.bgColor = t;
        }), r(0, s, "borderColor", function() {
            return this._tf.borderColor;
        }, function(t) {
            this._tf.borderColor = t;
        }), r(0, s, "stroke", function() {
            return this._tf.stroke;
        }, function(t) {
            this._tf.stroke = t;
        }), r(0, s, "strokeColor", function() {
            return this._tf.strokeColor;
        }, function(t) {
            this._tf.strokeColor = t;
        }), r(0, s, "textField", function() {
            return this._tf;
        }), r(0, s, "measureWidth", function() {
            return this._tf.width;
        }), r(0, s, "measureHeight", function() {
            return this._tf.height;
        }), r(0, s, "width", function() {
            return this._width || this._tf.text ? i.superGet(B, this, "width") : 0;
        }, function(t) {
            i.superSet(B, this, "width", t), this._tf.width = t;
        }), r(0, s, "height", function() {
            return this._height || this._tf.text ? i.superGet(B, this, "height") : 0;
        }, function(t) {
            i.superSet(B, this, "height", t), this._tf.height = t;
        }), r(0, s, "overflow", function() {
            return this._tf.overflow;
        }, function(t) {
            this._tf.overflow = t;
        }), r(0, s, "underline", function() {
            return this._tf.underline;
        }, function(t) {
            this._tf.underline = t;
        }), r(0, s, "underlineColor", function() {
            return this._tf.underlineColor;
        }, function(t) {
            this._tf.underlineColor = t;
        }), e;
    }(B), U = function(t) {
        function e(t) {
            this.changeHandler = null, this._bg = null, this._bar = null, this._skin = null, 
            this._value = .5, e.__super.call(this), this.skin = t;
        }
        n(e, "laya.ui.ProgressBar", t);
        var s = e.prototype;
        return s.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._bg && this._bg.destroy(e), 
            this._bar && this._bar.destroy(e), this._bg = this._bar = null, this.changeHandler = null;
        }, s.createChildren = function() {
            this.addChild(this._bg = new W()), this.addChild(this._bar = new W()), this._bar._bitmap.autoCacheCmd = !1;
        }, s.changeValue = function() {
            if (this.sizeGrid) {
                var t = this.sizeGrid.split(","), e = Number(t[3]), i = Number(t[1]), s = (this.width - e - i) * this._value;
                this._bar.width = e + i + s, this._bar.visible = this._bar.width > e + i;
            } else this._bar.width = this.width * this._value;
        }, r(0, s, "measureHeight", function() {
            return this._bg.height;
        }), r(0, s, "skin", function() {
            return this._skin;
        }, function(t) {
            this._skin != t && (this._skin = t, this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png"), 
            this.callLater(this.changeValue));
        }), r(0, s, "measureWidth", function() {
            return this._bg.width;
        }), r(0, s, "height", t.prototype._$get_height, function(t) {
            i.superSet(B, this, "height", t), this._bg.height = this._height, this._bar.height = this._height;
        }), r(0, s, "bar", function() {
            return this._bar;
        }), r(0, s, "value", function() {
            return this._value;
        }, function(t) {
            this._value != t && (t = t > 1 ? 1 : t < 0 ? 0 : t, this._value = t, this.callLater(this.changeValue), 
            this.event("change"), this.changeHandler && this.changeHandler.runWith(t));
        }), r(0, s, "bg", function() {
            return this._bg;
        }), r(0, s, "sizeGrid", function() {
            return this._bg.sizeGrid;
        }, function(t) {
            this._bg.sizeGrid = this._bar.sizeGrid = t;
        }), r(0, s, "width", t.prototype._$get_width, function(t) {
            i.superSet(B, this, "width", t), this._bg.width = this._width, this.callLater(this.changeValue);
        }), r(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : i.superSet(B, this, "dataSource", t);
        }), e;
    }(B), Y = (function(t) {
        function e() {
            this._tipBox = null, this._tipText = null, this._defaultTipHandler = null, e.__super.call(this), 
            this._tipBox = new B(), this._tipBox.addChild(this._tipText = new b()), this._tipText.x = this._tipText.y = 5, 
            this._tipText.color = e.tipTextColor, this._defaultTipHandler = this._showDefaultTip, 
            i.stage.on("showtip", this, this._onStageShowTip), i.stage.on("hidetip", this, this._onStageHideTip), 
            this.zOrder = 1100;
        }
        n(e, "laya.ui.TipManager", B);
        var s = e.prototype;
        s._onStageHideTip = function(t) {
            i.timer.clear(this, this._showTip), this.closeAll(), this.removeSelf();
        }, s._onStageShowTip = function(t) {
            i.timer.once(e.tipDelay, this, this._showTip, [ t ], !0);
        }, s._showTip = function(t) {
            if ("string" == typeof t) {
                var e = String(t);
                Boolean(e) && this._defaultTipHandler(e);
            } else t instanceof laya.utils.Handler ? t.run() : "function" == typeof t && t.apply();
            i.stage.on("mousemove", this, this._onStageMouseMove), i.stage.on("mousedown", this, this._onStageMouseDown), 
            this._onStageMouseMove(null);
        }, s._onStageMouseDown = function(t) {
            this.closeAll();
        }, s._onStageMouseMove = function(t) {
            this._showToStage(this, e.offsetX, e.offsetY);
        }, s._showToStage = function(t, e, s) {
            void 0 === e && (e = 0), void 0 === s && (s = 0);
            var n = t.getBounds();
            t.x = i.stage.mouseX + e, t.y = i.stage.mouseY + s, t.x + n.width > i.stage.width && (t.x -= n.width + e), 
            t.y + n.height > i.stage.height && (t.y -= n.height + s);
        }, s.closeAll = function() {
            i.timer.clear(this, this._showTip), i.stage.off("mousemove", this, this._onStageMouseMove), 
            i.stage.off("mousedown", this, this._onStageMouseDown), this.removeChildren();
        }, s.showDislayTip = function(t) {
            this.addChild(t), this._showToStage(this), i._currentStage.addChild(this);
        }, s._showDefaultTip = function(t) {
            this._tipText.text = t;
            var s = this._tipBox.graphics;
            s.clear(), s.drawRect(0, 0, this._tipText.width + 10, this._tipText.height + 10, e.tipBackColor), 
            this.addChild(this._tipBox), this._showToStage(this), i._currentStage.addChild(this);
        }, r(0, s, "defaultTipHandler", function() {
            return this._defaultTipHandler;
        }, function(t) {
            this._defaultTipHandler = t;
        }), e.offsetX = 10, e.offsetY = 15, e.tipTextColor = "#ffffff", e.tipBackColor = "#111111", 
        e.tipDelay = 200;
    }(), function(t) {
        function e() {
            this._idMap = null, this._aniList = null, this._watchMap = {}, e.__super.call(this);
        }
        var r;
        n(e, "laya.ui.View", D);
        var l = e.prototype;
        return l.createView = function(t) {
            if (t.animations && !this._idMap && (this._idMap = {}), e.createComp(t, this, this), 
            t.animations) {
                var i, s, n = [], r = t.animations, a = 0, o = r.length;
                for (a = 0; a < o; a++) {
                    switch (i = new d(), s = r[a], i._setUp(this._idMap, s), this[s.name] = i, i._setControlNode(this), 
                    s.action) {
                      case 1:
                        i.play(0, !1);
                        break;

                      case 2:
                        i.play(0, !0);
                    }
                    n.push(i);
                }
                this._aniList = n;
            }
            this._width > 0 && null == t.props.hitTestPrior && !this.mouseThrough && (this.hitTestPrior = !0);
        }, l.onEvent = function(t, e) {}, l.loadUI = function(t) {
            var i = e.uiMap[t];
            i && this.createView(i);
        }, l.destroy = function(t) {
            void 0 === t && (t = !0), this._aniList && (this._aniList.length = 0), this._idMap = null, 
            this._aniList = null, this._watchMap = null, laya.ui.Component.prototype.destroy.call(this, t);
        }, l.changeData = function(t) {
            var e = this._watchMap[t];
            if (e) {
                console.log("change", t);
                for (var i = 0, s = e.length; i < s; i++) e[i].exe(this);
            }
        }, e._regs = function() {
            for (var t in e.uiClassMap) h.regClass(t, e.uiClassMap[t]);
        }, e.createComp = function(t, s, n, r) {
            if (!(s = s || e.getCompInstance(t))) return console.warn("can not create:" + t.type), 
            null;
            var a = t.child;
            if (a) for (var o = s instanceof laya.ui.List, l = 0, u = a.length; l < u; l++) {
                var c = a[l];
                if (!s.hasOwnProperty("itemRender") || "render" != c.props.name && "render" !== c.props.renderType) if ("Graphic" == c.type) h.addGraphicsToSprite(c, s); else if (h.isDrawType(c.type)) h.addGraphicToSprite(c, s, !0); else {
                    if (o) {
                        var _ = [], d = e.createComp(c, null, n, _);
                        _.length && (d._$bindData = _);
                    } else d = e.createComp(c, null, n, r);
                    "Script" == c.type ? "owner" in d ? d.owner = s : "target" in d && (d.target = s) : "mask" == c.props.renderType || "mask" == c.props.name ? s.mask = d : d instanceof laya.display.Sprite && s.addChild(d);
                } else s.itemRender = c;
            }
            var f = t.props;
            for (var p in f) {
                var g = f[p];
                e.eventDic[p] ? g && n && s.on(p, n, n.onEvent, [ g ]) : e.setCompValue(s, p, g, n, r);
            }
            return i.__typeof(s, "laya.ui.IItem") && s.initItems(), t.compId && n && n._idMap && (n._idMap[t.compId] = s), 
            s;
        }, e.setCompValue = function(t, i, s, n, a) {
            if ("string" == typeof s && s.indexOf("${") > -1) {
                if (e._sheet || (e._sheet = h.getClass("laya.data.Table")), !e._sheet) return void console.warn("Can not find class Sheet");
                if (a) a.push(t, i, s); else if (n) {
                    -1 == s.indexOf("].") && (s = s.replace(".", "[0]."));
                    var l = new r(t, i, s);
                    l.exe(n);
                    for (var u, c, _ = s.replace(/\[.*?\]\./g, "."); null != (u = e._parseWatchData.exec(_)); ) {
                        for (var d = u[1]; null != (c = e._parseKeyWord.exec(d)); ) {
                            var f = c[0], p = n._watchMap[f] || (n._watchMap[f] = []);
                            p.push(l), e._sheet.I.notifer.on(f, n, n.changeData, [ f ]);
                        }
                        (p = n._watchMap[d] || (n._watchMap[d] = [])).push(l), e._sheet.I.notifer.on(d, n, n.changeData, [ d ]);
                    }
                }
            } else if ("var" === i && n) n[s] = t; else if ("onClick" == i) {
                var g = o.window.eval("(function(){" + s + "})");
                t.on("click", n, g);
            } else t[i] = "true" === s || "false" !== s && s;
        }, e.getCompInstance = function(t) {
            var s, n = t.props ? t.props.runtime : null;
            return s = n ? e.viewClassMap[n] || e.uiClassMap[n] || i.__classmap[n] : e.uiClassMap[t.type], 
            t.props && t.props.hasOwnProperty("renderType") && "instance" == t.props.renderType ? s.instance : s ? new s() : null;
        }, e.regComponent = function(t, i) {
            e.uiClassMap[t] = i, h.regClass(t, i);
        }, e.regViewRuntime = function(t, i) {
            e.viewClassMap[t] = i;
        }, e.uiMap = {}, e.viewClassMap = {}, e._sheet = null, s(e, [ "uiClassMap", function() {
            return this.uiClassMap = {
                ViewStack: et,
                LinkButton: A,
                TextArea: ut,
                ColorPicker: F,
                Box: D,
                Button: A,
                CheckBox: X,
                Clip: N,
                ComboBox: O,
                Component: B,
                HScrollBar: K,
                HSlider: J,
                Image: W,
                Label: H,
                List: j,
                Panel: q,
                ProgressBar: U,
                Radio: Q,
                RadioGroup: ht,
                ScrollBar: z,
                Slider: G,
                Tab: lt,
                TextInput: st,
                View: e,
                VScrollBar: it,
                VSlider: nt,
                Tree: tt,
                HBox: at,
                VBox: ot,
                Sprite: x,
                Animation: a,
                Text: b,
                FontClip: $
            };
        }, "eventDic", function() {
            return this.eventDic = {
                mousedown: !0,
                mouseup: !0,
                mousemove: !0,
                mouseover: !0,
                mouseout: !0,
                click: !0,
                doubleclick: !0,
                rightmousedown: !0,
                rightmouseup: !0,
                rightclick: !0
            };
        }, "_parseWatchData", function() {
            return this._parseWatchData = /\${(.*?)}/g;
        }, "_parseKeyWord", function() {
            return this._parseKeyWord = /[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g;
        } ]), e.__init$ = function() {
            e._regs(), r = function() {
                function t(t, e, i) {
                    this.comp = null, this.prop = null, this.value = null, this.comp = t, this.prop = e, 
                    this.value = i;
                }
                return n(t, ""), t.prototype.exe = function(t) {
                    var e = P.getBindFun(this.value);
                    this.comp[this.prop] = e.call(this, t);
                }, t;
            }();
        }, e;
    }()), X = function(t) {
        function e(t, i) {
            void 0 === i && (i = ""), e.__super.call(this, t, i);
        }
        n(e, "laya.ui.CheckBox", t);
        var s = e.prototype;
        return s.preinitialize = function() {
            laya.ui.Component.prototype.preinitialize.call(this), this.toggle = !0, this._autoSize = !1;
        }, s.initialize = function() {
            t.prototype.initialize.call(this), this.createText(), this._text.align = "left", 
            this._text.valign = "top", this._text.width = 0;
        }, r(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "boolean" == typeof t ? this.selected = t : "string" == typeof t ? this.selected = "true" === t : i.superSet(A, this, "dataSource", t);
        }), e;
    }(A), V = function(t) {
        function e() {
            this._space = 0, this._align = "none", this._itemChanged = !1, e.__super.call(this);
        }
        n(e, "laya.ui.LayoutBox", D);
        var i = e.prototype;
        return i.addChild = function(t) {
            return t.on("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.addChild.call(this, t);
        }, i.onResize = function(t) {
            this._setItemChanged();
        }, i.addChildAt = function(t, e) {
            return t.on("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.addChildAt.call(this, t, e);
        }, i.removeChild = function(t) {
            return t.off("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.removeChild.call(this, t);
        }, i.removeChildAt = function(t) {
            return this.getChildAt(t).off("resize", this, this.onResize), this._setItemChanged(), 
            laya.display.Node.prototype.removeChildAt.call(this, t);
        }, i.refresh = function() {
            this._setItemChanged();
        }, i.changeItems = function() {
            this._itemChanged = !1;
        }, i.sortItem = function(t) {
            t && t.sort(function(t, e) {
                return t.y - e.y;
            });
        }, i._setItemChanged = function() {
            this._itemChanged || (this._itemChanged = !0, this.callLater(this.changeItems));
        }, r(0, i, "space", function() {
            return this._space;
        }, function(t) {
            this._space = t, this._setItemChanged();
        }), r(0, i, "align", function() {
            return this._align;
        }, function(t) {
            this._align = t, this._setItemChanged();
        }), e;
    }(), $ = function(t) {
        function e(t, i) {
            this._valueArr = null, this._indexMap = null, this._sheet = null, this._direction = "horizontal", 
            this._spaceX = 0, this._spaceY = 0, this._align = "left", this._wordsW = 0, this._wordsH = 0, 
            e.__super.call(this), t && (this.skin = t), i && (this.sheet = i);
        }
        n(e, "laya.ui.FontClip", t);
        var s = e.prototype;
        return s.createChildren = function() {
            this._bitmap = new R(), this.on("loaded", this, this._onClipLoaded);
        }, s._onClipLoaded = function() {
            this.callLater(this.changeValue);
        }, s.changeValue = function() {
            if (this._sources && this._valueArr) {
                this.graphics.clear(!0);
                var t;
                if (t = this._sources[0]) {
                    var e = "horizontal" === this._direction;
                    e ? (this._wordsW = this._valueArr.length * (t.sourceWidth + this.spaceX), this._wordsH = t.sourceHeight) : (this._wordsW = t.sourceWidth, 
                    this._wordsH = (t.sourceHeight + this.spaceY) * this._valueArr.length);
                    var i = 0;
                    if (this._width) switch (this._align) {
                      case "center":
                        i = .5 * (this._width - this._wordsW);
                        break;

                      case "right":
                        i = this._width - this._wordsW;
                        break;

                      default:
                        i = 0;
                    }
                    for (var s = 0, n = this._valueArr.length; s < n; s++) {
                        var r = this._indexMap[this._valueArr.charAt(s)];
                        this.sources[r] && (t = this.sources[r], e ? this.graphics.drawTexture(t, i + s * (t.sourceWidth + this.spaceX), 0, t.sourceWidth, t.sourceHeight) : this.graphics.drawTexture(t, 0 + i, s * (t.sourceHeight + this.spaceY), t.sourceWidth, t.sourceHeight));
                    }
                    this._width || (this.resetLayoutX(), this.callLater(this.changeSize)), this._height || (this.resetLayoutY(), 
                    this.callLater(this.changeSize));
                }
            }
        }, s.destroy = function(e) {
            void 0 === e && (e = !0), this._valueArr = null, this._indexMap = null, this.graphics.clear(!0), 
            this.removeSelf(), this.off("loaded", this, this._onClipLoaded), t.prototype.destroy.call(this, e);
        }, r(0, s, "sheet", function() {
            return this._sheet;
        }, function(t) {
            t += "", this._sheet = t;
            var e = t.split(" ");
            this._clipX = String(e[0]).length, this.clipY = e.length, this._indexMap = {};
            for (var i = 0; i < this._clipY; i++) for (var s = e[i].split(""), n = 0, r = s.length; n < r; n++) this._indexMap[s[n]] = i * this._clipX + n;
        }), r(0, s, "height", t.prototype._$get_height, function(t) {
            i.superSet(N, this, "height", t), this.callLater(this.changeValue);
        }), r(0, s, "direction", function() {
            return this._direction;
        }, function(t) {
            this._direction = t, this.callLater(this.changeValue);
        }), r(0, s, "value", function() {
            return this._valueArr ? this._valueArr : "";
        }, function(t) {
            t += "", this._valueArr = t, this.callLater(this.changeValue);
        }), r(0, s, "width", t.prototype._$get_width, function(t) {
            i.superSet(N, this, "width", t), this.callLater(this.changeValue);
        }), r(0, s, "spaceX", function() {
            return this._spaceX;
        }, function(t) {
            this._spaceX = t, "horizontal" === this._direction && this.callLater(this.changeValue);
        }), r(0, s, "spaceY", function() {
            return this._spaceY;
        }, function(t) {
            this._spaceY = t, "horizontal" !== this._direction && this.callLater(this.changeValue);
        }), r(0, s, "align", function() {
            return this._align;
        }, function(t) {
            this._align = t, this.callLater(this.changeValue);
        }), r(0, s, "measureWidth", function() {
            return this._wordsW;
        }), r(0, s, "measureHeight", function() {
            return this._wordsH;
        }), e;
    }(N), j = function(t) {
        function e() {
            this.selectHandler = null, this.renderHandler = null, this.mouseHandler = null, 
            this.selectEnable = !1, this.totalPage = 0, this._content = null, this._scrollBar = null, 
            this._itemRender = null, this._repeatX = 0, this._repeatY = 0, this._repeatX2 = 0, 
            this._repeatY2 = 0, this._spaceX = 0, this._spaceY = 0, this._array = null, this._startIndex = 0, 
            this._selectedIndex = -1, this._page = 0, this._isVertical = !0, this._cellSize = 20, 
            this._cellOffset = 0, this._isMoved = !1, this.cacheContent = !1, this._createdLine = 0, 
            this._cellChanged = !1, e.__super.call(this), this._cells = [], this._offset = new v();
        }
        n(e, "laya.ui.List", t);
        var s = e.prototype;
        return i.imps(s, {
            "laya.ui.IRender": !0,
            "laya.ui.IItem": !0
        }), s.destroy = function(t) {
            void 0 === t && (t = !0), this._content && this._content.destroy(t), this._scrollBar && this._scrollBar.destroy(t), 
            laya.ui.Component.prototype.destroy.call(this, t), this._content = null, this._scrollBar = null, 
            this._itemRender = null, this._cells = null, this._array = null, this.selectHandler = this.renderHandler = this.mouseHandler = null;
        }, s.createChildren = function() {
            this.addChild(this._content = new D());
        }, s.onScrollStart = function() {
            this._$P.cacheAs || (this._$P.cacheAs = i.superGet(D, this, "cacheAs")), i.superSet(D, this, "cacheAs", "none"), 
            this._scrollBar.once("end", this, this.onScrollEnd);
        }, s.onScrollEnd = function() {
            i.superSet(D, this, "cacheAs", this._$P.cacheAs);
        }, s._removePreScrollBar = function() {
            var t = this.removeChildByName("scrollBar");
            t && t.destroy(!0);
        }, s.changeCells = function() {
            if (this._cellChanged = !1, this._itemRender) {
                this.scrollBar = this.getChildByName("scrollBar");
                var t = this._getOneCell(), e = t.width + this._spaceX || 1, i = t.height + this._spaceY || 1;
                this._width > 0 && (this._repeatX2 = this._isVertical ? Math.round(this._width / e) : Math.ceil(this._width / e)), 
                this._height > 0 && (this._repeatY2 = this._isVertical ? Math.ceil(this._height / i) : Math.round(this._height / i));
                var s = this._width ? this._width : e * this.repeatX - this._spaceX, n = this._height ? this._height : i * this.repeatY - this._spaceY;
                this._cellSize = this._isVertical ? i : e, this._cellOffset = this._isVertical ? i * Math.max(this._repeatY2, this._repeatY) - n - this._spaceY : e * Math.max(this._repeatX2, this._repeatX) - s - this._spaceX, 
                this._isVertical && this._scrollBar ? this._scrollBar.height = n : !this._isVertical && this._scrollBar && (this._scrollBar.width = s), 
                this.setContentSize(s, n);
                var r = this._isVertical ? this.repeatX : this.repeatY, a = (this._isVertical ? this.repeatY : this.repeatX) + (this._scrollBar ? 1 : 0);
                this._createItems(0, r, a), this._createdLine = a, this._array && (this.array = this._array, 
                this.runCallLater(this.renderItems));
            }
        }, s._getOneCell = function() {
            if (0 === this._cells.length) {
                var t = this.createItem();
                if (this._offset.setTo(t.x, t.y), this.cacheContent) return t;
                this._cells.push(t);
            }
            return this._cells[0];
        }, s._createItems = function(t, e, i) {
            var s = this._content, n = this._getOneCell(), r = n.width + this._spaceX, a = n.height + this._spaceY;
            if (this.cacheContent) {
                var o = new D();
                o.cacheAsBitmap = !0, o.pos((this._isVertical ? 0 : t) * r, (this._isVertical ? t : 0) * a), 
                this._content.addChild(o), this._content.optimizeScrollRect = !0, s = o;
            } else {
                for (var h = [], l = this._cells.length - 1; l > -1; l--) {
                    var u = this._cells[l];
                    u.removeSelf(), h.push(u);
                }
                this._cells.length = 0;
            }
            for (var c = t; c < i; c++) for (var _ = 0; _ < e; _++) (n = h && h.length ? h.pop() : this.createItem()).x = (this._isVertical ? _ : c) * r - s.x, 
            n.y = (this._isVertical ? c : _) * a - s.y, n.name = "item" + (c * e + _), s.addChild(n), 
            this.addCell(n);
        }, s.createItem = function() {
            var t = [];
            if ("function" == typeof this._itemRender) var e = new this._itemRender(); else e = Y.createComp(this._itemRender, null, null, t);
            if (0 == t.length && e._watchMap) {
                var i = e._watchMap;
                for (var s in i) for (var n = i[s], r = 0; r < n.length; r++) {
                    var a = n[r];
                    t.push(a.comp, a.prop, a.value);
                }
            }
            return t.length && (e._$bindData = t), e;
        }, s.addCell = function(t) {
            t.on("click", this, this.onCellMouse), t.on("rightclick", this, this.onCellMouse), 
            t.on("mouseover", this, this.onCellMouse), t.on("mouseout", this, this.onCellMouse), 
            t.on("mousedown", this, this.onCellMouse), t.on("mouseup", this, this.onCellMouse), 
            this._cells.push(t);
        }, s.initItems = function() {
            if (!this._itemRender && null != this.getChildByName("item0")) {
                this.repeatX = 1;
                var t = 0;
                t = 0;
                for (var e = 0; e < 1e4; e++) {
                    var i = this.getChildByName("item" + e);
                    if (!i) break;
                    this.addCell(i), t++;
                }
                this.repeatY = t;
            }
        }, s.setContentSize = function(t, e) {
            this._content.width = t, this._content.height = e, (this._scrollBar || 0 != this._offset.x || 0 != this._offset.y) && (this._content.scrollRect || (this._content.scrollRect = new y()), 
            this._content.scrollRect.setTo(-this._offset.x, -this._offset.y, t, e), this._content.scrollRect = this._content.scrollRect), 
            this.event("resize");
        }, s.onCellMouse = function(t) {
            "mousedown" === t.type && (this._isMoved = !1);
            var e = t.currentTarget, i = this._startIndex + this._cells.indexOf(e);
            i < 0 || ("click" === t.type || "rightclick" === t.type ? this.selectEnable && !this._isMoved ? this.selectedIndex = i : this.changeCellState(e, !0, 0) : "mouseover" !== t.type && "mouseout" !== t.type || this._selectedIndex === i || this.changeCellState(e, "mouseover" === t.type, 0), 
            this.mouseHandler && this.mouseHandler.runWith([ t, i ]));
        }, s.changeCellState = function(t, e, i) {
            var s = t.getChildByName("selectBox");
            s && (this.selectEnable = !0, s.visible = e, s.index = i);
        }, s.changeSize = function() {
            laya.ui.Component.prototype.changeSize.call(this), this.setContentSize(this.width, this.height), 
            this._scrollBar && this.callLater(this.onScrollBarChange);
        }, s.onScrollBarChange = function(t) {
            this.runCallLater(this.changeCells);
            var e = this._scrollBar.value, i = this._isVertical ? this.repeatX : this.repeatY, s = this._isVertical ? this.repeatY : this.repeatX, n = Math.floor(e / this._cellSize);
            if (this.cacheContent) a = s + 1, this._createdLine - n < a && (this._createItems(this._createdLine, i, this._createdLine + a), 
            this.renderItems(this._createdLine * i, 0), this._createdLine += a); else {
                var r = n * i, a = 0;
                if (r > this._startIndex) {
                    a = r - this._startIndex;
                    var o = !0, h = this._startIndex + i * (s + 1);
                    this._isMoved = !0;
                } else r < this._startIndex && (a = this._startIndex - r, o = !1, h = this._startIndex - 1, 
                this._isMoved = !0);
                for (var l = 0; l < a; l++) {
                    if (o) {
                        var u = this._cells.shift();
                        this._cells[this._cells.length] = u;
                        var c = h + l;
                    } else u = this._cells.pop(), this._cells.unshift(u), c = h - l;
                    var _ = Math.floor(c / i) * this._cellSize;
                    this._isVertical ? u.y = _ : u.x = _, this.renderItem(u, c);
                }
                this._startIndex = r, this.changeSelectStatus();
            }
            var d = this._content.scrollRect;
            this._isVertical ? (d.y = e - this._offset.y, d.x = -this._offset.x) : (d.y = -this._offset.y, 
            d.x = e - this._offset.x), this._content.scrollRect = d;
        }, s.posCell = function(t, e) {
            if (this._scrollBar) {
                var i = this._isVertical ? this.repeatX : this.repeatY, s = (this._isVertical ? this.repeatY : this.repeatX, 
                Math.floor(e / i) * this._cellSize);
                this._isVertical ? t.y = s : t.x = s;
            }
        }, s.changeSelectStatus = function() {
            for (var t = 0, e = this._cells.length; t < e; t++) this.changeCellState(this._cells[t], this._selectedIndex === this._startIndex + t, 1);
        }, s.renderItems = function(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0);
            for (var i = t, s = e || this._cells.length; i < s; i++) this.renderItem(this._cells[i], this._startIndex + i);
            this.changeSelectStatus();
        }, s.renderItem = function(t, e) {
            this._array && e >= 0 && e < this._array.length ? (t.visible = !0, t._$bindData ? (t._dataSource = this._array[e], 
            this._bindData(t, this._array[e])) : t.dataSource = this._array[e], this.cacheContent || this.posCell(t, e), 
            this.hasListener("render") && this.event("render", [ t, e ]), this.renderHandler && this.renderHandler.runWith([ t, e ])) : (t.visible = !1, 
            t.dataSource = null);
        }, s._bindData = function(t, e) {
            for (var i = t._$bindData, s = 0, n = i.length; s < n; s++) {
                var r = i[s++], a = i[s++], o = i[s], h = P.getBindFun(o);
                r[a] = h.call(this, e);
            }
        }, s.refresh = function() {
            this.array = this._array;
        }, s.getItem = function(t) {
            return t > -1 && t < this._array.length ? this._array[t] : null;
        }, s.changeItem = function(t, e) {
            t > -1 && t < this._array.length && (this._array[t] = e, t >= this._startIndex && t < this._startIndex + this._cells.length && this.renderItem(this.getCell(t), t));
        }, s.setItem = function(t, e) {
            this.changeItem(t, e);
        }, s.addItem = function(t) {
            this._array.push(t), this.array = this._array;
        }, s.addItemAt = function(t, e) {
            this._array.splice(e, 0, t), this.array = this._array;
        }, s.deleteItem = function(t) {
            this._array.splice(t, 1), this.array = this._array;
        }, s.getCell = function(t) {
            return this.runCallLater(this.changeCells), t > -1 && this._cells ? this._cells[(t - this._startIndex) % this._cells.length] : null;
        }, s.scrollTo = function(t) {
            if (this._scrollBar) {
                var e = this._isVertical ? this.repeatX : this.repeatY;
                this._scrollBar.value = Math.floor(t / e) * this._cellSize;
            } else this.startIndex = t;
        }, s.tweenTo = function(t, e, i) {
            if (void 0 === e && (e = 200), this._scrollBar) {
                var s = this._isVertical ? this.repeatX : this.repeatY;
                S.to(this._scrollBar, {
                    value: Math.floor(t / s) * this._cellSize
                }, e, null, i, 0, !0);
            } else this.startIndex = t, i && i.run();
        }, s._setCellChanged = function() {
            this._cellChanged || (this._cellChanged = !0, this.callLater(this.changeCells));
        }, s.commitMeasure = function() {
            this.runCallLater(this.changeCells);
        }, r(0, s, "cacheAs", t.prototype._$get_cacheAs, function(t) {
            i.superSet(D, this, "cacheAs", t), this._scrollBar && (this._$P.cacheAs = null, 
            "none" !== t ? this._scrollBar.on("start", this, this.onScrollStart) : this._scrollBar.off("start", this, this.onScrollStart));
        }), r(0, s, "content", function() {
            return this._content;
        }), r(0, s, "height", t.prototype._$get_height, function(t) {
            t != this._height && (i.superSet(D, this, "height", t), this._setCellChanged());
        }), r(0, s, "itemRender", function() {
            return this._itemRender;
        }, function(t) {
            if (this._itemRender != t) {
                this._itemRender = t;
                for (var e = this._cells.length - 1; e > -1; e--) this._cells[e].destroy();
                this._cells.length = 0, this._setCellChanged();
            }
        }), r(0, s, "vScrollBarSkin", function() {
            return this._scrollBar ? this._scrollBar.skin : null;
        }, function(t) {
            this._removePreScrollBar();
            var e = new it();
            e.name = "scrollBar", e.right = 0, t && " " != t && (e.skin = t), this.scrollBar = e, 
            this.addChild(e), this._setCellChanged();
        }), r(0, s, "page", function() {
            return this._page;
        }, function(t) {
            this._page = t, this._array && (this._page = t > 0 ? t : 0, this._page = this._page < this.totalPage ? this._page : this.totalPage - 1, 
            this.startIndex = this._page * this.repeatX * this.repeatY);
        }), r(0, s, "hScrollBarSkin", function() {
            return this._scrollBar ? this._scrollBar.skin : null;
        }, function(t) {
            this._removePreScrollBar();
            var e = new K();
            e.name = "scrollBar", e.bottom = 0, t && " " != t && (e.skin = t), this.scrollBar = e, 
            this.addChild(e), this._setCellChanged();
        }), r(0, s, "repeatX", function() {
            return this._repeatX > 0 ? this._repeatX : this._repeatX2 > 0 ? this._repeatX2 : 1;
        }, function(t) {
            this._repeatX = t, this._setCellChanged();
        }), r(0, s, "scrollBar", function() {
            return this._scrollBar;
        }, function(t) {
            this._scrollBar != t && (this._scrollBar = t, t && (this._isVertical = this._scrollBar.isVertical, 
            this.addChild(this._scrollBar), this._scrollBar.on("change", this, this.onScrollBarChange)));
        }), r(0, s, "width", t.prototype._$get_width, function(t) {
            t != this._width && (i.superSet(D, this, "width", t), this._setCellChanged());
        }), r(0, s, "repeatY", function() {
            return this._repeatY > 0 ? this._repeatY : this._repeatY2 > 0 ? this._repeatY2 : 1;
        }, function(t) {
            this._repeatY = t, this._setCellChanged();
        }), r(0, s, "spaceX", function() {
            return this._spaceX;
        }, function(t) {
            this._spaceX = t, this._setCellChanged();
        }), r(0, s, "spaceY", function() {
            return this._spaceY;
        }, function(t) {
            this._spaceY = t, this._setCellChanged();
        }), r(0, s, "selectedIndex", function() {
            return this._selectedIndex;
        }, function(t) {
            this._selectedIndex != t && (this._selectedIndex = t, this.changeSelectStatus(), 
            this.event("change"), this.selectHandler && this.selectHandler.runWith(t), this.startIndex = this._startIndex);
        }), r(0, s, "selectedItem", function() {
            return -1 != this._selectedIndex ? this._array[this._selectedIndex] : null;
        }, function(t) {
            this.selectedIndex = this._array.indexOf(t);
        }), r(0, s, "length", function() {
            return this._array ? this._array.length : 0;
        }), r(0, s, "selection", function() {
            return this.getCell(this._selectedIndex);
        }, function(t) {
            this.selectedIndex = this._startIndex + this._cells.indexOf(t);
        }), r(0, s, "startIndex", function() {
            return this._startIndex;
        }, function(t) {
            this._startIndex = t > 0 ? t : 0, this.callLater(this.renderItems);
        }), r(0, s, "array", function() {
            return this._array;
        }, function(t) {
            this.runCallLater(this.changeCells), this._array = t || [];
            var e = this._array.length;
            if (this.totalPage = Math.ceil(e / (this.repeatX * this.repeatY)), this._selectedIndex = this._selectedIndex < e ? this._selectedIndex : e - 1, 
            this.startIndex = this._startIndex, this._scrollBar) {
                this._scrollBar.stopScroll();
                var i = this._isVertical ? this.repeatX : this.repeatY, s = this._isVertical ? this.repeatY : this.repeatX, n = Math.ceil(e / i);
                (this._cellOffset > 0 ? this.totalPage + 1 : this.totalPage) > 1 ? (this._scrollBar.scrollSize = this._cellSize, 
                this._scrollBar.thumbPercent = s / n, this._scrollBar.setScroll(0, (n - s) * this._cellSize + this._cellOffset, this._scrollBar.value), 
                this._scrollBar.target = this._content) : (this._scrollBar.setScroll(0, 0, 0), this._scrollBar.target = this._content);
            }
        }), r(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.array = t : i.superSet(D, this, "dataSource", t);
        }), r(0, s, "cells", function() {
            return this.runCallLater(this.changeCells), this._cells;
        }), e;
    }(D), K = function(t) {
        function e() {
            e.__super.call(this);
        }
        return n(e, "laya.ui.HScrollBar", t), e.prototype.initialize = function() {
            t.prototype.initialize.call(this), this.slider.isVertical = !1;
        }, e;
    }(z), q = function(t) {
        function e() {
            this._content = null, this._vScrollBar = null, this._hScrollBar = null, this._scrollChanged = !1, 
            e.__super.call(this), this.width = this.height = 100;
        }
        n(e, "laya.ui.Panel", t);
        var s = e.prototype;
        return s.destroy = function(t) {
            void 0 === t && (t = !0), laya.ui.Component.prototype.destroy.call(this, t), this._content && this._content.destroy(t), 
            this._vScrollBar && this._vScrollBar.destroy(t), this._hScrollBar && this._hScrollBar.destroy(t), 
            this._vScrollBar = null, this._hScrollBar = null, this._content = null;
        }, s.destroyChildren = function() {
            this._content.destroyChildren();
        }, s.createChildren = function() {
            laya.display.Node.prototype.addChild.call(this, this._content = new D());
        }, s.addChild = function(t) {
            return t.on("resize", this, this.onResize), this._setScrollChanged(), this._content.addChild(t);
        }, s.onResize = function() {
            this._setScrollChanged();
        }, s.addChildAt = function(t, e) {
            return t.on("resize", this, this.onResize), this._setScrollChanged(), this._content.addChildAt(t, e);
        }, s.removeChild = function(t) {
            return t.off("resize", this, this.onResize), this._setScrollChanged(), this._content.removeChild(t);
        }, s.removeChildAt = function(t) {
            return this.getChildAt(t).off("resize", this, this.onResize), this._setScrollChanged(), 
            this._content.removeChildAt(t);
        }, s.removeChildren = function(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 2147483647);
            for (var i = this._content.numChildren - 1; i > -1; i--) this._content.removeChildAt(i);
            return this._setScrollChanged(), this;
        }, s.getChildAt = function(t) {
            return this._content.getChildAt(t);
        }, s.getChildByName = function(t) {
            return this._content.getChildByName(t);
        }, s.getChildIndex = function(t) {
            return this._content.getChildIndex(t);
        }, s.changeScroll = function() {
            this._scrollChanged = !1;
            var t = this.contentWidth || 1, e = this.contentHeight || 1, i = this._vScrollBar, s = this._hScrollBar, n = i && e > this._height, r = s && t > this._width, a = n ? this._width - i.width : this._width, o = r ? this._height - s.height : this._height;
            i && (i.x = this._width - i.width, i.y = 0, i.height = this._height - (r ? s.height : 0), 
            i.scrollSize = Math.max(.033 * this._height, 1), i.thumbPercent = o / e, i.setScroll(0, e - o, i.value)), 
            s && (s.x = 0, s.y = this._height - s.height, s.width = this._width - (n ? i.width : 0), 
            s.scrollSize = Math.max(.033 * this._width, 1), s.thumbPercent = a / t, s.setScroll(0, t - a, s.value));
        }, s.changeSize = function() {
            laya.ui.Component.prototype.changeSize.call(this), this.setContentSize(this._width, this._height);
        }, s.setContentSize = function(t, e) {
            var i = this._content;
            i.width = t, i.height = e, i.scrollRect || (i.scrollRect = new y()), i.scrollRect.setTo(0, 0, t, e), 
            i.scrollRect = i.scrollRect;
        }, s.onScrollBarChange = function(t) {
            var e = this._content.scrollRect;
            if (e) {
                var i = Math.round(t.value);
                t.isVertical ? e.y = i : e.x = i, this._content.scrollRect = e;
            }
        }, s.scrollTo = function(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this.vScrollBar && (this.vScrollBar.value = e), 
            this.hScrollBar && (this.hScrollBar.value = t);
        }, s.refresh = function() {
            this.changeScroll();
        }, s.onScrollStart = function() {
            this._$P.cacheAs || (this._$P.cacheAs = i.superGet(D, this, "cacheAs")), i.superSet(D, this, "cacheAs", "none"), 
            this._hScrollBar && this._hScrollBar.once("end", this, this.onScrollEnd), this._vScrollBar && this._vScrollBar.once("end", this, this.onScrollEnd);
        }, s.onScrollEnd = function() {
            i.superSet(D, this, "cacheAs", this._$P.cacheAs);
        }, s._setScrollChanged = function() {
            this._scrollChanged || (this._scrollChanged = !0, this.callLater(this.changeScroll));
        }, r(0, s, "numChildren", function() {
            return this._content.numChildren;
        }), r(0, s, "hScrollBarSkin", function() {
            return this._hScrollBar ? this._hScrollBar.skin : null;
        }, function(t) {
            null == this._hScrollBar && (laya.display.Node.prototype.addChild.call(this, this._hScrollBar = new K()), 
            this._hScrollBar.on("change", this, this.onScrollBarChange, [ this._hScrollBar ]), 
            this._hScrollBar.target = this._content, this._setScrollChanged()), this._hScrollBar.skin = t;
        }), r(0, s, "contentWidth", function() {
            for (var t = 0, e = this._content.numChildren - 1; e > -1; e--) {
                var i = this._content.getChildAt(e);
                t = Math.max(i.x + i.width * i.scaleX, t);
            }
            return t;
        }), r(0, s, "contentHeight", function() {
            for (var t = 0, e = this._content.numChildren - 1; e > -1; e--) {
                var i = this._content.getChildAt(e);
                t = Math.max(i.y + i.height * i.scaleY, t);
            }
            return t;
        }), r(0, s, "width", t.prototype._$get_width, function(t) {
            i.superSet(D, this, "width", t), this._setScrollChanged();
        }), r(0, s, "hScrollBar", function() {
            return this._hScrollBar;
        }), r(0, s, "content", function() {
            return this._content;
        }), r(0, s, "height", t.prototype._$get_height, function(t) {
            i.superSet(D, this, "height", t), this._setScrollChanged();
        }), r(0, s, "vScrollBarSkin", function() {
            return this._vScrollBar ? this._vScrollBar.skin : null;
        }, function(t) {
            null == this._vScrollBar && (laya.display.Node.prototype.addChild.call(this, this._vScrollBar = new it()), 
            this._vScrollBar.on("change", this, this.onScrollBarChange, [ this._vScrollBar ]), 
            this._vScrollBar.target = this._content, this._setScrollChanged()), this._vScrollBar.skin = t;
        }), r(0, s, "vScrollBar", function() {
            return this._vScrollBar;
        }), r(0, s, "cacheAs", t.prototype._$get_cacheAs, function(t) {
            i.superSet(D, this, "cacheAs", t), this._$P.cacheAs = null, "none" !== t ? (this._hScrollBar && this._hScrollBar.on("start", this, this.onScrollStart), 
            this._vScrollBar && this._vScrollBar.on("start", this, this.onScrollStart)) : (this._hScrollBar && this._hScrollBar.off("start", this, this.onScrollStart), 
            this._vScrollBar && this._vScrollBar.off("start", this, this.onScrollStart));
        }), e;
    }(D), Z = function(t) {
        function e(t, i) {
            this.selectHandler = null, this._items = null, this._selectedIndex = -1, this._skin = null, 
            this._direction = "horizontal", this._space = 0, this._labels = null, this._labelColors = null, 
            this._labelFont = null, this._labelStrokeColor = null, this._strokeColors = null, 
            this._labelStroke = NaN, this._labelSize = 0, this._labelBold = !1, this._labelPadding = null, 
            this._labelAlign = null, this._stateNum = 0, this._labelChanged = !1, e.__super.call(this), 
            this.skin = i, this.labels = t;
        }
        n(e, "laya.ui.UIGroup", t);
        var s = e.prototype;
        return i.imps(s, {
            "laya.ui.IItem": !0
        }), s.preinitialize = function() {
            this.mouseEnabled = !0;
        }, s.destroy = function(t) {
            void 0 === t && (t = !0), laya.ui.Component.prototype.destroy.call(this, t), this._items && (this._items.length = 0), 
            this._items = null, this.selectHandler = null;
        }, s.addItem = function(t, e) {
            void 0 === e && (e = !0);
            var i = t, s = this._items.length;
            if (i.name = "item" + s, this.addChild(i), this.initItems(), e && s > 0) {
                var n = this._items[s - 1];
                "horizontal" == this._direction ? i.x = n.x + n.width + this._space : i.y = n.y + n.height + this._space;
            } else e && (i.x = 0, i.y = 0);
            return s;
        }, s.delItem = function(t, e) {
            void 0 === e && (e = !0);
            var i = this._items.indexOf(t);
            if (-1 != i) {
                var s = t;
                this.removeChild(s);
                for (var n = i + 1, r = this._items.length; n < r; n++) {
                    var a = this._items[n];
                    a.name = "item" + (n - 1), e && ("horizontal" == this._direction ? a.x -= s.width + this._space : a.y -= s.height + this._space);
                }
                if (this.initItems(), this._selectedIndex > -1) {
                    var o = 0;
                    o = this._selectedIndex < this._items.length ? this._selectedIndex : this._selectedIndex - 1, 
                    this._selectedIndex = -1, this.selectedIndex = o;
                }
            }
        }, s.initItems = function() {
            this._items || (this._items = []), this._items.length = 0;
            for (var t = 0; t < 1e4; t++) {
                var e = this.getChildByName("item" + t);
                if (null == e) break;
                this._items.push(e), e.selected = t === this._selectedIndex, e.clickHandler = p.create(this, this.itemClick, [ t ], !1);
            }
        }, s.itemClick = function(t) {
            this.selectedIndex = t;
        }, s.setSelect = function(t, e) {
            this._items && t > -1 && t < this._items.length && (this._items[t].selected = e);
        }, s.createItem = function(t, e) {
            return null;
        }, s.changeLabels = function() {
            if (this._labelChanged = !1, this._items) for (var t = 0, e = 0, i = this._items.length; e < i; e++) {
                var s = this._items[e];
                this._skin && (s.skin = this._skin), this._labelColors && (s.labelColors = this._labelColors), 
                this._labelSize && (s.labelSize = this._labelSize), this._labelStroke && (s.labelStroke = this._labelStroke), 
                this._labelStrokeColor && (s.labelStrokeColor = this._labelStrokeColor), this._strokeColors && (s.strokeColors = this._strokeColors), 
                this._labelBold && (s.labelBold = this._labelBold), this._labelPadding && (s.labelPadding = this._labelPadding), 
                this._labelAlign && (s.labelAlign = this._labelAlign), this._stateNum && (s.stateNum = this._stateNum), 
                this._labelFont && (s.labelFont = this._labelFont), "horizontal" === this._direction ? (s.y = 0, 
                s.x = t, t += s.width + this._space) : (s.x = 0, s.y = t, t += s.height + this._space);
            }
            this.changeSize();
        }, s.commitMeasure = function() {
            this.runCallLater(this.changeLabels);
        }, s._setLabelChanged = function() {
            this._labelChanged || (this._labelChanged = !0, this.callLater(this.changeLabels));
        }, r(0, s, "labelStrokeColor", function() {
            return this._labelStrokeColor;
        }, function(t) {
            this._labelStrokeColor != t && (this._labelStrokeColor = t, this._setLabelChanged());
        }), r(0, s, "skin", function() {
            return this._skin;
        }, function(t) {
            this._skin != t && (this._skin = t, this._setLabelChanged());
        }), r(0, s, "selectedIndex", function() {
            return this._selectedIndex;
        }, function(t) {
            this._selectedIndex != t && (this.setSelect(this._selectedIndex, !1), this._selectedIndex = t, 
            this.setSelect(t, !0), this.event("change"), this.selectHandler && this.selectHandler.runWith(this._selectedIndex));
        }), r(0, s, "labels", function() {
            return this._labels;
        }, function(t) {
            if (this._labels != t) {
                if (this._labels = t, this.removeChildren(), this._setLabelChanged(), this._labels) for (var e = this._labels.split(","), i = 0, s = e.length; i < s; i++) {
                    var n = this.createItem(this._skin, e[i]);
                    n.name = "item" + i, this.addChild(n);
                }
                this.initItems();
            }
        }), r(0, s, "strokeColors", function() {
            return this._strokeColors;
        }, function(t) {
            this._strokeColors != t && (this._strokeColors = t, this._setLabelChanged());
        }), r(0, s, "labelColors", function() {
            return this._labelColors;
        }, function(t) {
            this._labelColors != t && (this._labelColors = t, this._setLabelChanged());
        }), r(0, s, "labelStroke", function() {
            return this._labelStroke;
        }, function(t) {
            this._labelStroke != t && (this._labelStroke = t, this._setLabelChanged());
        }), r(0, s, "labelSize", function() {
            return this._labelSize;
        }, function(t) {
            this._labelSize != t && (this._labelSize = t, this._setLabelChanged());
        }), r(0, s, "stateNum", function() {
            return this._stateNum;
        }, function(t) {
            this._stateNum != t && (this._stateNum = t, this._setLabelChanged());
        }), r(0, s, "labelBold", function() {
            return this._labelBold;
        }, function(t) {
            this._labelBold != t && (this._labelBold = t, this._setLabelChanged());
        }), r(0, s, "labelFont", function() {
            return this._labelFont;
        }, function(t) {
            this._labelFont != t && (this._labelFont = t, this._setLabelChanged());
        }), r(0, s, "labelPadding", function() {
            return this._labelPadding;
        }, function(t) {
            this._labelPadding != t && (this._labelPadding = t, this._setLabelChanged());
        }), r(0, s, "direction", function() {
            return this._direction;
        }, function(t) {
            this._direction = t, this._setLabelChanged();
        }), r(0, s, "space", function() {
            return this._space;
        }, function(t) {
            this._space = t, this._setLabelChanged();
        }), r(0, s, "items", function() {
            return this._items;
        }), r(0, s, "selection", function() {
            return this._selectedIndex > -1 && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null;
        }, function(t) {
            this.selectedIndex = this._items.indexOf(t);
        }), r(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.labels = t.join(",") : i.superSet(D, this, "dataSource", t);
        }), e;
    }(D), J = function(t) {
        function e(t) {
            e.__super.call(this, t), this.isVertical = !1;
        }
        return n(e, "laya.ui.HSlider", G), e;
    }(), Q = function(t) {
        function e(t, i) {
            this._value = null, void 0 === i && (i = ""), e.__super.call(this, t, i);
        }
        n(e, "laya.ui.Radio", t);
        var i = e.prototype;
        return i.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._value = null;
        }, i.preinitialize = function() {
            laya.ui.Component.prototype.preinitialize.call(this), this.toggle = !1, this._autoSize = !1;
        }, i.initialize = function() {
            t.prototype.initialize.call(this), this.createText(), this._text.align = "left", 
            this._text.valign = "top", this._text.width = 0, this.on("click", this, this.onClick);
        }, i.onClick = function(t) {
            this.selected = !0;
        }, r(0, i, "value", function() {
            return null != this._value ? this._value : this.label;
        }, function(t) {
            this._value = t;
        }), e;
    }(A), tt = function(t) {
        function e() {
            this._list = null, this._source = null, this._renderHandler = null, this._spaceLeft = 10, 
            this._spaceBottom = 0, this._keepStatus = !0, e.__super.call(this), this.width = this.height = 200;
        }
        n(e, "laya.ui.Tree", t);
        var s = e.prototype;
        return i.imps(s, {
            "laya.ui.IRender": !0
        }), s.destroy = function(t) {
            void 0 === t && (t = !0), laya.ui.Component.prototype.destroy.call(this, t), this._list && this._list.destroy(t), 
            this._list = null, this._source = null, this._renderHandler = null;
        }, s.createChildren = function() {
            this.addChild(this._list = new j()), this._list.renderHandler = p.create(this, this.renderItem, null, !1), 
            this._list.repeatX = 1, this._list.on("change", this, this.onListChange);
        }, s.onListChange = function(t) {
            this.event("change");
        }, s.getArray = function() {
            var t, e = [];
            for (var i in this._source) t = this._source[i], this.getParentOpenStatus(t) && (t.x = this._spaceLeft * this.getDepth(t), 
            e.push(t));
            return e;
        }, s.getDepth = function(t, e) {
            return void 0 === e && (e = 0), null == t.nodeParent ? e : this.getDepth(t.nodeParent, e + 1);
        }, s.getParentOpenStatus = function(t) {
            var e = t.nodeParent;
            return null == e || !!e.isOpen && (null == e.nodeParent || this.getParentOpenStatus(e));
        }, s.renderItem = function(t, e) {
            var i = t.dataSource;
            if (i) {
                t.left = i.x;
                var s = t.getChildByName("arrow");
                s && (i.hasChild ? (s.visible = !0, s.index = i.isOpen ? 1 : 0, s.tag = e, s.off("click", this, this.onArrowClick), 
                s.on("click", this, this.onArrowClick)) : s.visible = !1);
                var n = t.getChildByName("folder");
                n && (2 == n.clipY ? n.index = i.isDirectory ? 0 : 1 : n.index = i.isDirectory ? i.isOpen ? 1 : 0 : 2), 
                this._renderHandler && this._renderHandler.runWith([ t, e ]);
            }
        }, s.onArrowClick = function(t) {
            var e = t.currentTarget.tag;
            this._list.array[e].isOpen = !this._list.array[e].isOpen, this.event("open"), this._list.array = this.getArray();
        }, s.setItemState = function(t, e) {
            this._list.array[t] && (this._list.array[t].isOpen = e, this._list.array = this.getArray());
        }, s.fresh = function() {
            this._list.array = this.getArray(), this.repaint();
        }, s.parseXml = function(t, e, i, s) {
            var n, r = t.childNodes, a = r.length;
            if (!s) {
                n = {};
                var o, h = t.attributes;
                for (var l in h) {
                    var u = (o = h[l]).nodeName, c = o.nodeValue;
                    n[u] = "true" == c || "false" != c && c;
                }
                n.nodeParent = i, a > 0 && (n.isDirectory = !0), n.hasChild = a > 0, e.push(n);
            }
            for (var _ = 0; _ < a; _++) {
                var d = r[_];
                this.parseXml(d, e, n, !1);
            }
        }, s.parseOpenStatus = function(t, e) {
            for (var i = 0, s = e.length; i < s; i++) {
                var n = e[i];
                if (n.isDirectory) for (var r = 0, a = t.length; r < a; r++) {
                    var o = t[r];
                    if (o.isDirectory && this.isSameParent(o, n) && n.label == o.label) {
                        n.isOpen = o.isOpen;
                        break;
                    }
                }
            }
        }, s.isSameParent = function(t, e) {
            return null == t.nodeParent && null == e.nodeParent || null != t.nodeParent && null != e.nodeParent && t.nodeParent.label == e.nodeParent.label && this.isSameParent(t.nodeParent, e.nodeParent);
        }, s.filter = function(t) {
            if (Boolean(t)) {
                var e = [];
                this.getFilterSource(this._source, e, t), this._list.array = e;
            } else this._list.array = this.getArray();
        }, s.getFilterSource = function(t, e, i) {
            i = i.toLocaleLowerCase();
            var s;
            for (var n in t) !(s = t[n]).isDirectory && String(s.label).toLowerCase().indexOf(i) > -1 && (s.x = 0, 
            e.push(s)), s.child && s.child.length > 0 && this.getFilterSource(s.child, e, i);
        }, r(0, s, "spaceBottom", function() {
            return this._list.spaceY;
        }, function(t) {
            this._list.spaceY = t;
        }), r(0, s, "keepStatus", function() {
            return this._keepStatus;
        }, function(t) {
            this._keepStatus = t;
        }), r(0, s, "itemRender", function() {
            return this._list.itemRender;
        }, function(t) {
            this._list.itemRender = t;
        }), r(0, s, "array", function() {
            return this._list.array;
        }, function(t) {
            this._keepStatus && this._list.array && t && this.parseOpenStatus(this._list.array, t), 
            this._source = t, this._list.array = this.getArray();
        }), r(0, s, "mouseHandler", function() {
            return this._list.mouseHandler;
        }, function(t) {
            this._list.mouseHandler = t;
        }), r(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, i.superSet(D, this, "dataSource", t);
        }), r(0, s, "source", function() {
            return this._source;
        }), r(0, s, "scrollBar", function() {
            return this._list.scrollBar;
        }), r(0, s, "list", function() {
            return this._list;
        }), r(0, s, "scrollBarSkin", function() {
            return this._list.vScrollBarSkin;
        }, function(t) {
            this._list.vScrollBarSkin = t;
        }), r(0, s, "renderHandler", function() {
            return this._renderHandler;
        }, function(t) {
            this._renderHandler = t;
        }), r(0, s, "selectedIndex", function() {
            return this._list.selectedIndex;
        }, function(t) {
            this._list.selectedIndex = t;
        }), r(0, s, "spaceLeft", function() {
            return this._spaceLeft;
        }, function(t) {
            this._spaceLeft = t;
        }), r(0, s, "selectedItem", function() {
            return this._list.selectedItem;
        }, function(t) {
            this._list.selectedItem = t;
        }), r(0, s, "width", t.prototype._$get_width, function(t) {
            i.superSet(D, this, "width", t), this._list.width = t;
        }), r(0, s, "height", t.prototype._$get_height, function(t) {
            i.superSet(D, this, "height", t), this._list.height = t;
        }), r(0, s, "xml", null, function(t) {
            var e = [];
            this.parseXml(t.childNodes[0], e, null, !0), this.array = e;
        }), r(0, s, "selectedPath", function() {
            return this._list.selectedItem ? this._list.selectedItem.path : null;
        }), e;
    }(D), et = function(t) {
        function e() {
            this._items = null, this._selectedIndex = 0, e.__super.call(this), this._setIndexHandler = p.create(this, this.setIndex, null, !1);
        }
        n(e, "laya.ui.ViewStack", t);
        var s = e.prototype;
        return i.imps(s, {
            "laya.ui.IItem": !0
        }), s.setItems = function(t) {
            this.removeChildren();
            for (var e = 0, i = 0, s = t.length; i < s; i++) {
                var n = t[i];
                n && (n.name = "item" + e, this.addChild(n), e++);
            }
            this.initItems();
        }, s.addItem = function(t) {
            t.name = "item" + this._items.length, this.addChild(t), this.initItems();
        }, s.initItems = function() {
            this._items = [];
            for (var t = 0; t < 1e4; t++) {
                var e = this.getChildByName("item" + t);
                if (null == e) break;
                this._items.push(e), e.visible = t == this._selectedIndex;
            }
        }, s.setSelect = function(t, e) {
            this._items && t > -1 && t < this._items.length && (this._items[t].visible = e);
        }, s.setIndex = function(t) {
            this.selectedIndex = t;
        }, r(0, s, "dataSource", t.prototype._$get_dataSource, function(t) {
            if (this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t) this.selectedIndex = parseInt(t); else for (var e in this._dataSource) this.hasOwnProperty(e) && (this[e] = this._dataSource[e]);
        }), r(0, s, "selectedIndex", function() {
            return this._selectedIndex;
        }, function(t) {
            this._selectedIndex != t && (this.setSelect(this._selectedIndex, !1), this._selectedIndex = t, 
            this.setSelect(this._selectedIndex, !0));
        }), r(0, s, "selection", function() {
            return this._selectedIndex > -1 && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null;
        }, function(t) {
            this.selectedIndex = this._items.indexOf(t);
        }), r(0, s, "items", function() {
            return this._items;
        }), r(0, s, "setIndexHandler", function() {
            return this._setIndexHandler;
        }, function(t) {
            this._setIndexHandler = t;
        }), e;
    }(D), it = function(t) {
        function e() {
            e.__super.call(this);
        }
        return n(e, "laya.ui.VScrollBar", z), e;
    }(), st = function(t) {
        function e(t) {
            this._bg = null, this._skin = null, e.__super.call(this), void 0 === t && (t = ""), 
            this.text = t, this.skin = this.skin;
        }
        n(e, "laya.ui.TextInput", t);
        var s = e.prototype;
        return s.preinitialize = function() {
            this.mouseEnabled = !0;
        }, s.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._bg && this._bg.destroy(), 
            this._bg = null;
        }, s.createChildren = function() {
            this.addChild(this._tf = new g()), this._tf.padding = I.inputLabelPadding, this._tf.on("input", this, this._onInput), 
            this._tf.on("enter", this, this._onEnter), this._tf.on("blur", this, this._onBlur), 
            this._tf.on("focus", this, this._onFocus);
        }, s._onFocus = function() {
            this.event("focus", this);
        }, s._onBlur = function() {
            this.event("blur", this);
        }, s._onInput = function() {
            this.event("input", this);
        }, s._onEnter = function() {
            this.event("enter", this);
        }, s.initialize = function() {
            this.width = 128, this.height = 22;
        }, s.select = function() {
            this._tf.select();
        }, s.setSelection = function(t, e) {
            this._tf.setSelection(t, e);
        }, r(0, s, "text", t.prototype._$get_text, function(t) {
            this._tf.text != t && (t += "", this._tf.text = t, this.event("change"));
        }), r(0, s, "bg", function() {
            return this._bg;
        }, function(t) {
            this.graphics = this._bg = t;
        }), r(0, s, "inputElementYAdjuster", function() {
            return this._tf.inputElementYAdjuster;
        }, function(t) {
            this._tf.inputElementYAdjuster = t;
        }), r(0, s, "multiline", function() {
            return this._tf.multiline;
        }, function(t) {
            this._tf.multiline = t;
        }), r(0, s, "skin", function() {
            return this._skin;
        }, function(t) {
            this._skin != t && (this._skin = t, this._bg || (this.graphics = this._bg = new R()), 
            this._bg.source = m.getRes(this._skin), this._width && (this._bg.width = this._width), 
            this._height && (this._bg.height = this._height));
        }), r(0, s, "sizeGrid", function() {
            return this._bg && this._bg.sizeGrid ? this._bg.sizeGrid.join(",") : null;
        }, function(t) {
            this._bg || (this.graphics = this._bg = new R()), this._bg.sizeGrid = P.fillArray(I.defaultSizeGrid, t, Number);
        }), r(0, s, "inputElementXAdjuster", function() {
            return this._tf.inputElementXAdjuster;
        }, function(t) {
            this._tf.inputElementXAdjuster = t;
        }), r(0, s, "width", t.prototype._$get_width, function(t) {
            i.superSet(H, this, "width", t), this._bg && (this._bg.width = t);
        }), r(0, s, "height", t.prototype._$get_height, function(t) {
            i.superSet(H, this, "height", t), this._bg && (this._bg.height = t);
        }), r(0, s, "editable", function() {
            return this._tf.editable;
        }, function(t) {
            this._tf.editable = t;
        }), r(0, s, "restrict", function() {
            return this._tf.restrict;
        }, function(t) {
            this._tf.restrict = t;
        }), r(0, s, "prompt", function() {
            return this._tf.prompt;
        }, function(t) {
            this._tf.prompt = t;
        }), r(0, s, "promptColor", function() {
            return this._tf.promptColor;
        }, function(t) {
            this._tf.promptColor = t;
        }), r(0, s, "maxChars", function() {
            return this._tf.maxChars;
        }, function(t) {
            this._tf.maxChars = t;
        }), r(0, s, "focus", function() {
            return this._tf.focus;
        }, function(t) {
            this._tf.focus = t;
        }), r(0, s, "type", function() {
            return this._tf.type;
        }, function(t) {
            this._tf.type = t;
        }), r(0, s, "asPassword", function() {
            return this._tf.asPassword;
        }, function(t) {
            this._tf.asPassword = t;
        }), e;
    }(H), nt = function(t) {
        function e() {
            e.__super.call(this);
        }
        return n(e, "laya.ui.VSlider", G), e;
    }(), rt = function(t) {
        function e() {
            this.popupCenter = !0, this.closeHandler = null, this.popupEffect = null, this.closeEffect = null, 
            this.group = null, this.isModal = !1, this._dragArea = null, e.__super.call(this);
        }
        n(e, "laya.ui.Dialog", t);
        var s = e.prototype;
        return s.initialize = function() {
            this.popupEffect = e.manager.popupEffectHandler, this.closeEffect = e.manager.closeEffectHandler, 
            this._dealDragArea(), this.on("click", this, this._onClick);
        }, s._dealDragArea = function() {
            var t = this.getChildByName("drag");
            t && (this.dragArea = t.x + "," + t.y + "," + t.width + "," + t.height, t.removeSelf());
        }, s._onClick = function(t) {
            var e = t.target;
            if (e) switch (e.name) {
              case "close":
              case "cancel":
              case "sure":
              case "no":
              case "ok":
              case "yes":
                this.close(e.name);
            }
        }, s.show = function(t, e) {
            void 0 === t && (t = !1), void 0 === e && (e = !0), this._open(!1, t, e);
        }, s.popup = function(t, e) {
            void 0 === t && (t = !1), void 0 === e && (e = !0), this._open(!0, t, e);
        }, s._open = function(t, i, s) {
            e.manager.lock(!1), this.isModal = t, e.manager.open(this, i, s);
        }, s.onOpened = function() {}, s.close = function(t, i) {
            void 0 === i && (i = !0), e.manager.close(this, t, i);
        }, s.onClosed = function(t) {}, s._onMouseDown = function(t) {
            var e = this.getMousePoint();
            this._dragArea.contains(e.x, e.y) ? this.startDrag() : this.stopDrag();
        }, r(0, s, "dragArea", function() {
            return this._dragArea ? this._dragArea.toString() : null;
        }, function(t) {
            if (t) {
                var e = P.fillArray([ 0, 0, 0, 0 ], t, Number);
                this._dragArea = new y(e[0], e[1], e[2], e[3]), this.on("mousedown", this, this._onMouseDown);
            } else this._dragArea = null, this.off("mousedown", this, this._onMouseDown);
        }), r(0, s, "isPopup", function() {
            return null != this.parent;
        }), r(0, s, "zOrder", t.prototype._$get_zOrder, function(t) {
            i.superSet(Y, this, "zOrder", t), e.manager._checkMask();
        }), r(1, e, "manager", function() {
            return e._manager = e._manager || new E();
        }, function(t) {
            e._manager = t;
        }), e.setLockView = function(t) {
            e.manager.setLockView(t);
        }, e.lock = function(t) {
            e.manager.lock(t);
        }, e.closeAll = function() {
            e.manager.closeAll();
        }, e.getDialogsByGroup = function(t) {
            return e.manager.getDialogsByGroup(t);
        }, e.closeByGroup = function(t) {
            return e.manager.closeByGroup(t);
        }, e.CLOSE = "close", e.CANCEL = "cancel", e.SURE = "sure", e.NO = "no", e.OK = "ok", 
        e.YES = "yes", e._manager = null, e;
    }(Y), at = function(t) {
        function e() {
            e.__super.call(this);
        }
        n(e, "laya.ui.HBox", t);
        var s = e.prototype;
        return s.sortItem = function(t) {
            t && t.sort(function(t, e) {
                return t.x - e.x;
            });
        }, s.changeItems = function() {
            this._itemChanged = !1;
            for (var t = [], e = 0, i = 0, s = this.numChildren; i < s; i++) {
                var n = this.getChildAt(i);
                n && n.layoutEnabled && (t.push(n), e = this._height ? this._height : Math.max(e, n.height * n.scaleY));
            }
            this.sortItem(t);
            var r = 0;
            for (i = 0, s = t.length; i < s; i++) (n = t[i]).x = r, r += n.width * n.scaleX + this._space, 
            "top" == this._align ? n.y = 0 : "middle" == this._align ? n.y = .5 * (e - n.height * n.scaleY) : "bottom" == this._align && (n.y = e - n.height * n.scaleY);
            this.changeSize();
        }, r(0, s, "height", t.prototype._$get_height, function(t) {
            this._height != t && (i.superSet(V, this, "height", t), this.callLater(this.changeItems));
        }), e.NONE = "none", e.TOP = "top", e.MIDDLE = "middle", e.BOTTOM = "bottom", e;
    }(V), ot = function(t) {
        function e() {
            e.__super.call(this);
        }
        n(e, "laya.ui.VBox", t);
        var s = e.prototype;
        return s.changeItems = function() {
            this._itemChanged = !1;
            for (var t = [], e = 0, i = 0, s = this.numChildren; i < s; i++) {
                var n = this.getChildAt(i);
                n && n.layoutEnabled && (t.push(n), e = this._width ? this._width : Math.max(e, n.width * n.scaleX));
            }
            this.sortItem(t);
            var r = 0;
            for (i = 0, s = t.length; i < s; i++) (n = t[i]).y = r, r += n.height * n.scaleY + this._space, 
            "left" == this._align ? n.x = 0 : "center" == this._align ? n.x = .5 * (e - n.width * n.scaleX) : "right" == this._align && (n.x = e - n.width * n.scaleX);
            this.changeSize();
        }, r(0, s, "width", t.prototype._$get_width, function(t) {
            this._width != t && (i.superSet(V, this, "width", t), this.callLater(this.changeItems));
        }), e.NONE = "none", e.LEFT = "left", e.CENTER = "center", e.RIGHT = "right", e;
    }(V), ht = function(t) {
        function e() {
            e.__super.call(this);
        }
        return n(e, "laya.ui.RadioGroup", Z), e.prototype.createItem = function(t, e) {
            return new Q(t, e);
        }, e;
    }(), lt = function(t) {
        function e() {
            e.__super.call(this);
        }
        return n(e, "laya.ui.Tab", Z), e.prototype.createItem = function(t, e) {
            return new A(t, e);
        }, e;
    }(), ut = function(t) {
        function e(t) {
            this._vScrollBar = null, this._hScrollBar = null, void 0 === t && (t = ""), e.__super.call(this, t);
        }
        n(e, "laya.ui.TextArea", t);
        var s = e.prototype;
        return s.destroy = function(e) {
            void 0 === e && (e = !0), t.prototype.destroy.call(this, e), this._vScrollBar && this._vScrollBar.destroy(), 
            this._hScrollBar && this._hScrollBar.destroy(), this._vScrollBar = null, this._hScrollBar = null;
        }, s.initialize = function() {
            this.width = 180, this.height = 150, this._tf.wordWrap = !0, this.multiline = !0;
        }, s.onVBarChanged = function(t) {
            this._tf.scrollY != this._vScrollBar.value && (this._tf.scrollY = this._vScrollBar.value);
        }, s.onHBarChanged = function(t) {
            this._tf.scrollX != this._hScrollBar.value && (this._tf.scrollX = this._hScrollBar.value);
        }, s.changeScroll = function() {
            var t = this._vScrollBar && this._tf.maxScrollY > 0, e = this._hScrollBar && this._tf.maxScrollX > 0, i = t ? this._width - this._vScrollBar.width : this._width, s = e ? this._height - this._hScrollBar.height : this._height, n = this._tf.padding || I.labelPadding;
            this._tf.width = i, this._tf.height = s, this._vScrollBar && (this._vScrollBar.x = this._width - this._vScrollBar.width - n[2], 
            this._vScrollBar.y = n[1], this._vScrollBar.height = this._height - (e ? this._hScrollBar.height : 0) - n[1] - n[3], 
            this._vScrollBar.scrollSize = 1, this._vScrollBar.thumbPercent = s / Math.max(this._tf.textHeight, s), 
            this._vScrollBar.setScroll(1, this._tf.maxScrollY, this._tf.scrollY), this._vScrollBar.visible = t), 
            this._hScrollBar && (this._hScrollBar.x = n[0], this._hScrollBar.y = this._height - this._hScrollBar.height - n[3], 
            this._hScrollBar.width = this._width - (t ? this._vScrollBar.width : 0) - n[0] - n[2], 
            this._hScrollBar.scrollSize = Math.max(.033 * i, 1), this._hScrollBar.thumbPercent = i / Math.max(this._tf.textWidth, i), 
            this._hScrollBar.setScroll(0, this.maxScrollX, this.scrollX), this._hScrollBar.visible = e);
        }, s.scrollTo = function(t) {
            this.commitMeasure(), this._tf.scrollY = t;
        }, r(0, s, "scrollY", function() {
            return this._tf.scrollY;
        }), r(0, s, "width", t.prototype._$get_width, function(t) {
            i.superSet(st, this, "width", t), this.callLater(this.changeScroll);
        }), r(0, s, "hScrollBar", function() {
            return this._hScrollBar;
        }), r(0, s, "height", t.prototype._$get_height, function(t) {
            i.superSet(st, this, "height", t), this.callLater(this.changeScroll);
        }), r(0, s, "maxScrollX", function() {
            return this._tf.maxScrollX;
        }), r(0, s, "vScrollBarSkin", function() {
            return this._vScrollBar ? this._vScrollBar.skin : null;
        }, function(t) {
            null == this._vScrollBar && (this.addChild(this._vScrollBar = new it()), this._vScrollBar.on("change", this, this.onVBarChanged), 
            this._vScrollBar.target = this._tf, this.callLater(this.changeScroll)), this._vScrollBar.skin = t;
        }), r(0, s, "hScrollBarSkin", function() {
            return this._hScrollBar ? this._hScrollBar.skin : null;
        }, function(t) {
            null == this._hScrollBar && (this.addChild(this._hScrollBar = new K()), this._hScrollBar.on("change", this, this.onHBarChanged), 
            this._hScrollBar.mouseWheelEnable = !1, this._hScrollBar.target = this._tf, this.callLater(this.changeScroll)), 
            this._hScrollBar.skin = t;
        }), r(0, s, "vScrollBar", function() {
            return this._vScrollBar;
        }), r(0, s, "maxScrollY", function() {
            return this._tf.maxScrollY;
        }), r(0, s, "scrollX", function() {
            return this._tf.scrollX;
        }), e;
    }(st);
    !function(t) {
        function e() {
            this._uiView = null, this.isCloseOther = !1, e.__super.call(this);
        }
        n(e, "laya.ui.AsynDialog", rt);
        var i = e.prototype;
        i.createView = function(t) {
            this._uiView = t;
        }, i._open = function(t, e, i) {
            this.isModal = t, this.isCloseOther = e, rt.manager.lock(!0), this._uiView ? this.onCreated() : this.onOpen();
        }, i.onCreated = function() {
            this.createUI(), this.onOpen();
        }, i.createUI = function() {
            laya.ui.View.prototype.createView.call(this, this._uiView), this._uiView = null, 
            this._dealDragArea();
        }, i.onOpen = function() {
            rt.manager.open(this, this.isCloseOther), rt.manager.lock(!1);
        }, i.close = function(t, e) {
            void 0 === e && (e = !0), rt.manager.close(this), this.onClose();
        }, i.onClose = function() {}, i.destroy = function(t) {
            void 0 === t && (t = !0), laya.ui.View.prototype.destroy.call(this, t), this._uiView = null, 
            this.onDestroy();
        }, i.onDestroy = function() {};
    }(), i.__init([ Y ]);
}(window, document, Laya), "function" == typeof define && define.amd && define("laya.core", [ "require", "exports" ], function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    for (var i in Laya) {
        var s = Laya[i];
        s && s.__isclass && (e[i] = s);
    }
});

var __extends = function() {
    var t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    };
    return function(e, i) {
        function s() {
            this.constructor = e;
        }
        t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, 
        new s());
    };
}(), View = laya.ui.View, Dialog = laya.ui.Dialog, ui;

!function(t) {
    var e = function(e) {
        function i() {
            return e.call(this) || this;
        }
        return __extends(i, e), i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this), this.createView(t.gateUI.uiView);
        }, i.uiView = {
            type: "View",
            props: {
                width: 750,
                height: 562
            },
            child: [ {
                type: "List",
                props: {
                    y: 95,
                    x: 620,
                    width: 150,
                    var: "rank1",
                    repeatY: 1,
                    repeatX: 3,
                    height: 50,
                    anchorX: 1
                },
                child: [ {
                    type: "Box",
                    props: {
                        width: 50,
                        name: "render",
                        height: 50
                    },
                    child: [ {
                        type: "Image",
                        props: {
                            skin: "main/check/head_samll.png",
                            name: "bg"
                        },
                        child: [ {
                            type: "Image",
                            props: {
                                y: 3,
                                x: 3,
                                width: 44,
                                name: "face",
                                height: 44
                            },
                            child: [ {
                                type: "Image",
                                props: {
                                    width: 44,
                                    skin: "main/check/head_samll.png",
                                    renderType: "mask",
                                    height: 44
                                }
                            } ]
                        } ]
                    } ]
                } ]
            }, {
                type: "List",
                props: {
                    y: 295,
                    x: 620,
                    width: 150,
                    var: "rank2",
                    repeatY: 1,
                    repeatX: 3,
                    height: 50,
                    anchorX: 1
                },
                child: [ {
                    type: "Box",
                    props: {
                        width: 50,
                        name: "render",
                        height: 50
                    },
                    child: [ {
                        type: "Image",
                        props: {
                            skin: "main/check/head_samll.png",
                            name: "bg"
                        },
                        child: [ {
                            type: "Image",
                            props: {
                                y: 3,
                                x: 3,
                                width: 44,
                                name: "face",
                                height: 44
                            },
                            child: [ {
                                type: "Image",
                                props: {
                                    width: 44,
                                    skin: "main/check/head_samll.png",
                                    renderType: "mask",
                                    height: 44
                                }
                            } ]
                        } ]
                    } ]
                } ]
            }, {
                type: "List",
                props: {
                    y: 490,
                    x: 620,
                    width: 150,
                    visible: !1,
                    var: "rank3",
                    repeatY: 1,
                    repeatX: 3,
                    height: 50,
                    anchorX: 1
                },
                child: [ {
                    type: "Box",
                    props: {
                        width: 50,
                        name: "render",
                        height: 50
                    },
                    child: [ {
                        type: "Image",
                        props: {
                            skin: "main/check/head_samll.png",
                            name: "bg"
                        },
                        child: [ {
                            type: "Image",
                            props: {
                                y: 3,
                                x: 3,
                                width: 44,
                                name: "face",
                                height: 44
                            },
                            child: [ {
                                type: "Image",
                                props: {
                                    width: 44,
                                    skin: "main/check/head_samll.png",
                                    renderType: "mask",
                                    height: 44
                                }
                            } ]
                        } ]
                    } ]
                } ]
            } ]
        }, i;
    }(View);
    t.gateUI = e;
}(ui || (ui = {})), function(t) {
    var e = function(e) {
        function i() {
            return e.call(this) || this;
        }
        return __extends(i, e), i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this), this.createView(t.newRankUI.uiView);
        }, i.uiView = {
            type: "View",
            props: {
                width: 750,
                height: 1334
            },
            child: [ {
                type: "Image",
                props: {
                    y: 170,
                    x: 375,
                    width: 666,
                    skin: "main/groups/newbg.png",
                    height: 842,
                    anchorX: .5
                },
                child: [ {
                    type: "List",
                    props: {
                        y: 32,
                        x: 23,
                        width: 620,
                        var: "lists",
                        repeatY: 5,
                        repeatX: 1,
                        height: 650
                    },
                    child: [ {
                        type: "Box",
                        props: {
                            width: 620,
                            name: "render",
                            height: 130
                        },
                        child: [ {
                            type: "Image",
                            props: {
                                y: 1,
                                x: 0,
                                skin: "main/groups/ranktag.png"
                            }
                        }, {
                            type: "Label",
                            props: {
                                y: 3,
                                x: 3,
                                width: 50,
                                text: "1",
                                overflow: "hidden",
                                name: "rk",
                                fontSize: 20,
                                color: "#ffffff",
                                anchorX: 0,
                                align: "center"
                            }
                        }, {
                            type: "Image",
                            props: {
                                y: 26,
                                x: 51,
                                width: 78,
                                name: "fb",
                                height: 78,
                                anchorY: 0,
                                anchorX: 0
                            },
                            child: [ {
                                type: "Image",
                                props: {
                                    y: -1,
                                    x: -1,
                                    width: 80,
                                    skin: "main/groups/fbg.png",
                                    height: 80,
                                    anchorY: 0,
                                    anchorX: 0
                                }
                            } ]
                        }, {
                            type: "Label",
                            props: {
                                y: 34,
                                x: 159,
                                width: 300,
                                text: "测试用户",
                                overflow: "hidden",
                                name: "ne",
                                fontSize: 22,
                                color: "#ffffff",
                                align: "left"
                            }
                        }, {
                            type: "Image",
                            props: {
                                y: 69,
                                x: 150,
                                skin: "main/groups/rank_bg.png",
                                name: "ll"
                            }
                        }, {
                            type: "Label",
                            props: {
                                y: 87,
                                x: 220,
                                width: 140,
                                text: "灵犀一指",
                                name: "lv",
                                fontSize: 24,
                                color: "#000000",
                                bold: !0,
                                anchorY: .5,
                                anchorX: .5,
                                align: "center"
                            }
                        }, {
                            type: "Label",
                            props: {
                                y: 90,
                                x: 590,
                                width: 120,
                                text: "999米",
                                stroke: 2,
                                overflow: "hidden",
                                name: "mk",
                                fontSize: 30,
                                color: "#ffffff",
                                bold: !0,
                                anchorY: .5,
                                anchorX: 1,
                                align: "right"
                            }
                        }, {
                            type: "Image",
                            props: {
                                y: 130,
                                x: 160,
                                width: 420,
                                skin: "main/ver1001/aline.png"
                            }
                        }, {
                            type: "Image",
                            props: {
                                y: 30,
                                x: 590,
                                skin: "main/groups/star_0.png",
                                name: "map_1",
                                anchorX: 1
                            }
                        }, {
                            type: "Image",
                            props: {
                                y: 30,
                                x: 560,
                                skin: "main/groups/star_0.png",
                                name: "map_2",
                                anchorX: 1
                            }
                        }, {
                            type: "Image",
                            props: {
                                y: 30,
                                x: 530,
                                skin: "main/groups/star_0.png",
                                name: "map_3",
                                anchorX: 1
                            }
                        } ]
                    } ]
                }, {
                    type: "Box",
                    props: {
                        y: 700,
                        x: 333,
                        width: 620,
                        var: "mSelf",
                        height: 130,
                        anchorX: .5
                    },
                    child: [ {
                        type: "Image",
                        props: {
                            y: 0,
                            x: -20,
                            skin: "main/groups/myrankbg.png"
                        },
                        child: [ {
                            type: "Label",
                            props: {
                                y: 14,
                                x: 20,
                                width: 30,
                                var: "mRank",
                                text: 99,
                                overflow: "hidden",
                                fontSize: 24,
                                color: "#ffffff",
                                anchorY: .5,
                                anchorX: 0,
                                align: "center"
                            }
                        } ]
                    }, {
                        type: "Image",
                        props: {
                            y: 25,
                            x: 50,
                            width: 80,
                            skin: "main/ver1001/listhead.png",
                            height: 80,
                            anchorY: 0,
                            anchorX: 0
                        },
                        child: [ {
                            type: "Image",
                            props: {
                                y: 2,
                                x: 2,
                                width: 76,
                                var: "mFace",
                                height: 76,
                                anchorY: 0,
                                anchorX: 0
                            },
                            child: [ {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 76,
                                    skin: "main/ver1001/listhead.png",
                                    renderType: "mask",
                                    height: 76,
                                    anchorY: 0,
                                    anchorX: 0
                                }
                            } ]
                        } ]
                    }, {
                        type: "Label",
                        props: {
                            y: 34,
                            x: 159,
                            width: 260,
                            var: "mName",
                            text: "测试用户",
                            overflow: "hidden",
                            fontSize: 22,
                            color: "#000000",
                            align: "left"
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 69,
                            x: 150,
                            skin: "main/groups/rank_bg.png"
                        }
                    }, {
                        type: "Label",
                        props: {
                            y: 90,
                            x: 590,
                            width: 120,
                            var: "mMark",
                            text: "999米",
                            overflow: "hidden",
                            fontSize: 30,
                            color: "#000000",
                            bold: !0,
                            anchorY: .5,
                            anchorX: 1,
                            align: "right"
                        }
                    }, {
                        type: "Label",
                        props: {
                            y: 87,
                            x: 220,
                            width: 140,
                            var: "myLevel",
                            text: "灵犀一指",
                            fontSize: 24,
                            color: "#000000",
                            bold: !0,
                            anchorY: .5,
                            anchorX: .5,
                            align: "center"
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 30,
                            x: 590,
                            var: "mMap1",
                            skin: "main/groups/star_0.png",
                            anchorX: 1
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 30,
                            x: 560,
                            var: "mMap2",
                            skin: "main/groups/star_0.png",
                            anchorX: 1
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 30,
                            x: 530,
                            var: "mMap3",
                            skin: "main/groups/star_0.png",
                            anchorX: 1
                        }
                    } ]
                } ]
            } ]
        }, i;
    }(View);
    t.newRankUI = e;
}(ui || (ui = {})), function(t) {
    var e = function(e) {
        function i() {
            return e.call(this) || this;
        }
        return __extends(i, e), i.prototype.createChildren = function() {
            e.prototype.createChildren.call(this), this.createView(t.nextPlayerUI.uiView);
        }, i.uiView = {
            type: "View",
            props: {
                width: 750,
                height: 120
            },
            child: [ {
                type: "Image",
                props: {
                    y: 60,
                    x: 375,
                    skin: "main/check/nextbg.png",
                    sizeGrid: "0,0,0,0",
                    anchorY: .5,
                    anchorX: .5
                },
                child: [ {
                    type: "Image",
                    props: {
                        y: 60,
                        x: 387,
                        width: 74,
                        var: "face",
                        height: 74,
                        anchorY: .5,
                        anchorX: .5
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 60,
                        x: 52,
                        skin: "main/check/nextby.png",
                        anchorY: .5,
                        anchorX: 0
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 60,
                        x: 444,
                        var: "mark",
                        text: "90米",
                        fontSize: 36,
                        color: "#FFEA80",
                        bold: !0,
                        anchorY: .5,
                        align: "left"
                    }
                } ]
            } ]
        }, i;
    }(View);
    t.nextPlayerUI = e;
}(ui || (ui = {}));

var __extends = function() {
    var t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    };
    return function(e, i) {
        function s() {
            this.constructor = e;
        }
        t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, 
        new s());
    };
}(), nextPlayer = function(t) {
    function e() {
        return t.call(this) || this;
    }
    return __extends(e, t), e;
}(ui.nextPlayerUI), newRank = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.sOpenId = "", e.page = 1, e.pages = 0, e.mLevel = 0, e.mDate = [], e.page = 1, 
        e.pages = 0, e.sOpenId = "", e.mDate = [], e.lists.renderHandler = new Laya.Handler(e, e.updateUser), 
        e.lists.selectEnable = !1, e.lists.mouseEnabled = !1, e;
    }
    return __extends(e, t), e.prototype.show = function() {
        this.visible = !0;
    }, e.prototype.init = function(t) {
        var e = t.info;
        this.sOpenId = e.openid;
        var i = t.dir;
        if (console.log("dir here:" + i), "none" == i) {
            GameMain.app.sortData(t.level), this.mLevel = t.level;
            var s = 0;
            if (0 == this.mLevel) this.pages = Math.ceil(GameMain.app.mData.length / 5), s = GameMain.app.mData.length; else {
                for (r = 0; r < GameMain.app.mData.length; r++) 1 == this.mLevel && GameMain.app.mData[r].map1 > 0 && (s += 1), 
                2 == this.mLevel && GameMain.app.mData[r].map2 > 0 && (s += 1), 3 == this.mLevel && GameMain.app.mData[r].map3 > 0 && (s += 1);
                this.pages = Math.ceil(s / 5);
            }
            0 == this.pages && (this.pages = 1), console.log("pages:" + this.pages + "," + s + "," + this.mLevel);
            for (var n = !1, r = 0; r < GameMain.app.mData.length; r++) if (GameMain.app.mData[r].openid == this.sOpenId) {
                this.mRank.text = GameMain.app.mData[r].rank, this.mName.text = GameMain.app.mData[r].name, 
                this.myLevel.text = GameMain.app.mData[r].level, this.mFace.skin = GameMain.app.mData[r].avatar, 
                1 == this.mLevel ? this.mMark.text = Math.floor(GameMain.app.mData[r].map1 / 10) + "%" : 2 == this.mLevel ? this.mMark.text = Math.floor(GameMain.app.mData[r].map2 / 10) + "%" : 3 == this.mLevel ? this.mMark.text = Math.floor(GameMain.app.mData[r].map3 / 10) + "%" : this.mMark.text = Math.floor(GameMain.app.mData[r].mark / 10) + "米", 
                Number(GameMain.app.mData[r].map1) >= 1e3 ? this.mMap1.skin = "main/groups/star_1.png" : this.mMap1.skin = "main/groups/star_0.png", 
                Number(GameMain.app.mData[r].map2) >= 1e3 ? this.mMap2.skin = "main/groups/star_1.png" : this.mMap2.skin = "main/groups/star_0.png", 
                Number(GameMain.app.mData[r].map3) >= 1e3 ? this.mMap3.skin = "main/groups/star_1.png" : this.mMap3.skin = "main/groups/star_0.png", 
                this.mRank.text = GameMain.app.mData[r].rank, n = !0;
                break;
            }
            this.mSelf.visible = n;
        }
        this.onFlip(i, this.mLevel);
    }, e.prototype.initGroup = function(t) {
        var e = t.groupid;
        this.sOpenId = GameMain.app.mOpenID;
        var i = t.dir;
        if (console.log("dir:" + i), "none" == i) {
            if (GameMain.app.sortGroupData(e, t.level), this.mLevel = t.level, 0 == this.mLevel) this.pages = Math.ceil(GameMain.app.mGroups[e].length / 5); else {
                for (var s = 0, n = 0; n < GameMain.app.mGroups[e].length; n++) 1 == this.mLevel && GameMain.app.mGroups[e][n].map1 > 0 && (s += 1), 
                2 == this.mLevel && GameMain.app.mGroups[e][n].map2 > 0 && (s += 1), 3 == this.mLevel && GameMain.app.mGroups[e][n].map3 > 0 && (s += 1);
                this.pages = Math.ceil(s / 5), 0 == this.pages && (this.pages = 1), console.log("pages:" + this.pages + "," + s + "," + this.mLevel);
            }
            for (var r = !1, n = 0; n < GameMain.app.mGroups[e].length; n++) if (GameMain.app.mGroups[e][n].openid == this.sOpenId) {
                this.mRank.text = GameMain.app.mGroups[e][n].rank, this.mName.text = GameMain.app.mGroups[e][n].name, 
                this.myLevel.text = GameMain.app.mGroups[e][n].level, this.mFace.skin = GameMain.app.mGroups[e][n].avatar, 
                1 == this.mLevel ? this.mMark.text = Math.floor(GameMain.app.mGroups[e][n].map1 / 10) + "%" : 2 == this.mLevel ? this.mMark.text = Math.floor(GameMain.app.mGroups[e][n].map2 / 10) + "%" : 3 == this.mLevel ? this.mMark.text = Math.floor(GameMain.app.mGroups[e][n].map3 / 10) + "%" : this.mMark.text = Math.floor(GameMain.app.mGroups[e][n].mark / 10) + "米", 
                Number(GameMain.app.mGroups[e][n].map1) >= 1e3 ? this.mMap1.skin = "main/groups/star_1.png" : this.mMap1.skin = "main/groups/star_0.png", 
                Number(GameMain.app.mGroups[e][n].map2) >= 1e3 ? this.mMap2.skin = "main/groups/star_1.png" : this.mMap2.skin = "main/groups/star_0.png", 
                Number(GameMain.app.mGroups[e][n].map3) >= 1e3 ? this.mMap3.skin = "main/groups/star_1.png" : this.mMap3.skin = "main/groups/star_0.png", 
                this.mRank.text = GameMain.app.mGroups[e][n].rank, r = !0;
                break;
            }
            this.mSelf.visible = r;
        }
        this.onFlipGroup(e, i, this.mLevel);
    }, e.prototype.onFlip = function(t, e) {
        if ("previous" === t ? this.page-- : "next" === t ? this.page++ : this.page = 1, 
        this.page > this.pages) this.page = this.pages; else if (this.page < 1) this.page = 1; else {
            this.mDate.splice(0, this.mDate.length);
            for (var i = 5 * (this.page - 1), s = i; s < i + 5; s++) {
                var n = GameMain.app.mData[s];
                if (null == n || void 0 == n) break;
                n.map = e, 1 == e && n.map1 <= 0 || 2 == e && n.map2 <= 0 || 3 == e && n.map3 <= 0 || this.mDate.push(n);
            }
            if (0 == this.mDate.length) return this.lists.array = [], void this.page--;
            this.initData();
        }
    }, e.prototype.onFlipGroup = function(t, e, i) {
        if ("previous" === e ? this.page-- : "next" === e ? this.page++ : this.page = 1, 
        this.page > this.pages) this.page = this.pages; else if (this.page < 1) this.page = 1; else {
            this.mDate.splice(0, this.mDate.length);
            for (var s = 5 * (this.page - 1), n = s; n < s + 5; n++) {
                var r = GameMain.app.mGroups[t][n];
                if (null == r || void 0 == r) break;
                r.map = i, 1 == i && r.map1 <= 0 || 2 == i && r.map2 <= 0 || 3 == i && r.map3 <= 0 || this.mDate.push(r);
            }
            if (0 == this.mDate.length) return this.lists.array = [], void this.page--;
            this.initData();
        }
    }, e.prototype.initData = function() {
        this.lists.repeatY = this.mDate.length, this.lists.array = this.mDate;
    }, e.prototype.updateUser = function(t, e) {
        var i = t.getChildByName("fb"), s = t.getChildByName("ne"), n = t.getChildByName("rk"), r = t.getChildByName("lv"), a = t.getChildByName("mk");
        if (s.changeText(t.dataSource.name), i.skin = t.dataSource.avatar, n.text = t.dataSource.rank, 
        r.text = t.dataSource.level, 0 == t.dataSource.map) a.text = Math.floor(t.dataSource.mark / 10).toString() + "米"; else if (1 == t.dataSource.map) (o = Math.floor(t.dataSource.map1 / 10)) > 100 && (o = 100), 
        a.text = o.toString() + "%"; else if (2 == t.dataSource.map) (o = Math.floor(t.dataSource.map2 / 10)) > 100 && (o = 100), 
        a.text = o.toString() + "%"; else if (3 == t.dataSource.map) {
            var o = Math.floor(t.dataSource.map3 / 10);
            o > 100 && (o = 100), a.text = o.toString() + "%";
        }
        var h = t.getChildByName("map_1"), l = t.getChildByName("map_2"), u = t.getChildByName("map_3");
        Number(t.dataSource.map1) >= 1e3 ? h.skin = "main/groups/star_1.png" : h.skin = "main/groups/star_0.png", 
        Number(t.dataSource.map2) >= 1e3 ? l.skin = "main/groups/star_1.png" : l.skin = "main/groups/star_0.png", 
        Number(t.dataSource.map3) >= 1e3 ? u.skin = "main/groups/star_1.png" : u.skin = "main/groups/star_0.png";
    }, e;
}(ui.newRankUI), Gate = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.rank1.vScrollBarSkin = "", e.rank1.hScrollBarSkin = "", e.rank1.mouseEnabled = !1, 
        e.rank1.selectEnable = !1, e.rank1.renderHandler = new Laya.Handler(e, e.updateRank), 
        e.rank2.vScrollBarSkin = "", e.rank2.hScrollBarSkin = "", e.rank2.mouseEnabled = !1, 
        e.rank2.selectEnable = !1, e.rank2.renderHandler = new Laya.Handler(e, e.updateRank), 
        e.rank3.vScrollBarSkin = "", e.rank3.hScrollBarSkin = "", e.rank3.mouseEnabled = !1, 
        e.rank3.selectEnable = !1, e.rank3.renderHandler = new Laya.Handler(e, e.updateRank), 
        e;
    }
    return __extends(e, t), e.prototype.show = function() {
        this.visible = !0;
    }, e.prototype.showInfo = function(t) {
        this.rank3.visible = !1, GameMain.app.sortData(1);
        for (var e = [], i = 0; i < GameMain.app.mData.length && !(null == GameMain.app.mData[i].map1 || GameMain.app.mData[i].map1 <= 0) && ((r = {}).face = GameMain.app.mData[i].avatar, 
        e.push(r), !(e.length >= 3)); i++) ;
        for (this.rank1.visible = !0, i = e.length; i < 3; i++) e.push({
            face: ""
        });
        this.rank1.array = e, GameMain.app.sortData(2);
        for (var s = [], i = 0; i < GameMain.app.mData.length && !(null == GameMain.app.mData[i].map2 || GameMain.app.mData[i].map2 <= 0) && ((r = {}).face = GameMain.app.mData[i].avatar, 
        s.push(r), !(s.length >= 3)); i++) ;
        for (this.rank2.visible = !0, i = s.length; i < 3; i++) s.push({
            face: ""
        });
        this.rank2.array = s, GameMain.app.sortData(3);
        for (var n = [], i = 0; i < GameMain.app.mData.length && !(null == GameMain.app.mData[i].map3 || GameMain.app.mData[i].map3 <= 0); i++) {
            var r = {};
            if (r.face = GameMain.app.mData[i].avatar, n.push(r), n.length >= 3) break;
        }
        for (this.rank3.visible = !0, i = n.length; i < 3; i++) n.push({
            face: ""
        });
        this.rank3.array = n;
    }, e.prototype.updateRank = function(t, e) {
        t.getChildByName("bg").getChildByName("face").skin = t.dataSource.face;
    }, e;
}(ui.gateUI), GameMain = function() {
    function t() {
        this.mData = [], this.mLevel = [ 3, 5, 10, 18, 28, 40, 80, 180, 330, 530, 780, 1080, 1430, 2e3 ], 
        this.mLevelName = [ "手残党", "剁手天使", "鸡爪手", "滑不留手", "九阴白骨爪", "分筋错骨手", "葵花点穴手", "大触手", "一指禅", "弹指神通", "灵犀一指", "六脉神剑", "大力金刚指", "一阳指" ], 
        this.mGroups = {}, this.mShareTicket = "", this.mOpenID = "", t.app = this, Laya.init(750, 1334), 
        Laya.ResourceManager.systemResourceManager.autoRelease = !1;
    }
    return t.prototype.init = function(e) {
        Laya.stage.width = e.width, Laya.stage.height = e.height, wx.getFriendCloudStorage({
            keyList: [ "avatarUrl", "nickName", "city", "openId", "mark1", "map11", "map12", "map13" ],
            success: function(e) {
                console.log(e), t.app.initData(e.data);
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }, t.prototype.initData = function(t) {
        this.mData.splice(0, this.mData.length);
        for (var e = 0; e < t.length; e++) {
            var i = {};
            i.name = t[e].nickname;
            var s = t[e].avatarUrl;
            "0" == s.charAt(s.length - 1) && "/" == s.charAt(s.length - 2) && (s = s.substr(0, s.length - 2), 
            s += "/132"), i.avatar = s, i.openid = t[e].openid, i.mark = 0, i.map1 = 0, i.map2 = 0, 
            i.map3 = 0;
            for (var n = 0; n < t[e].KVDataList.length; n++) "mark1" == t[e].KVDataList[n].key && (i.mark = Math.floor(Number(t[e].KVDataList[n].value))), 
            "map11" == t[e].KVDataList[n].key && (i.map1 = Math.floor(Number(t[e].KVDataList[n].value))), 
            "map12" == t[e].KVDataList[n].key && (i.map2 = Math.floor(Number(t[e].KVDataList[n].value))), 
            "map13" == t[e].KVDataList[n].key && (i.map3 = Math.floor(Number(t[e].KVDataList[n].value)));
            for (var r = this.mLevel.length, a = 0; a < this.mLevel.length; a++) if (this.mLevel[a] > Math.floor(i.mark / 10)) {
                r = a + 1;
                break;
            }
            i.level = this.mLevelName[r - 1], this.mData.push(i);
        }
        console.log("initData ok");
    }, t.prototype.initGroupData = function(t) {
        null == this.mGroups[this.mShareTicket] && (this.mGroups[this.mShareTicket] = []);
        var e = this.mGroups[this.mShareTicket];
        e.splice(0, e.length);
        for (var i = 0; i < t.length; i++) {
            var s = {};
            s.name = t[i].nickname;
            var n = t[i].avatarUrl;
            "0" == n.charAt(n.length - 1) && "/" == n.charAt(n.length - 2) && (n = n.substr(0, n.length - 2), 
            n += "/132"), s.avatar = n, s.openid = t[i].openid, s.mark = 0, s.map1 = 0, s.map2 = 0, 
            s.map3 = 0;
            for (var r = 0; r < t[i].KVDataList.length; r++) "mark1" == t[i].KVDataList[r].key && (s.mark = Math.floor(Number(t[i].KVDataList[r].value))), 
            "map11" == t[i].KVDataList[r].key && (s.map1 = Math.floor(Number(t[i].KVDataList[r].value))), 
            "map12" == t[i].KVDataList[r].key && (s.map2 = Math.floor(Number(t[i].KVDataList[r].value))), 
            "map13" == t[i].KVDataList[r].key && (s.map3 = Math.floor(Number(t[i].KVDataList[r].value)));
            for (var a = this.mLevel.length, o = 0; o < this.mLevel.length; o++) if (this.mLevel[o] > Math.floor(s.mark / 10)) {
                a = o + 1;
                break;
            }
            s.level = this.mLevelName[a - 1], e.push(s);
        }
        console.log("initGroupData ok"), this.showGroupRank({
            show: 1,
            level: 0,
            groupid: this.mShareTicket,
            dir: "none"
        });
    }, t.prototype.sortData = function(t) {
        1 == t ? this.mData.sort(function(t, e) {
            return t.map1 < e.map1 ? 1 : -1;
        }) : 2 == t ? this.mData.sort(function(t, e) {
            return t.map2 < e.map2 ? 1 : -1;
        }) : 3 == t ? this.mData.sort(function(t, e) {
            return t.map3 < e.map3 ? 1 : -1;
        }) : this.mData.sort(function(t, e) {
            return t.mark < e.mark ? 1 : -1;
        });
        for (var e = 0; e < this.mData.length; e++) this.mData[e].rank = e + 1;
    }, t.prototype.sortGroupData = function(t, e) {
        1 == e ? this.mGroups[t].sort(function(t, e) {
            return t.map1 < e.map1 ? 1 : -1;
        }) : 2 == e ? this.mGroups[t].sort(function(t, e) {
            return t.map2 < e.map2 ? 1 : -1;
        }) : 3 == e ? this.mGroups[t].sort(function(t, e) {
            return t.map3 < e.map3 ? 1 : -1;
        }) : this.mGroups[t].sort(function(t, e) {
            return t.mark < e.mark ? 1 : -1;
        });
        for (var i = 0; i < this.mGroups[t].length; i++) this.mGroups[t][i].rank = i + 1;
    }, t.prototype.sendTencent = function(e) {
        var i = e.user, s = e.best, n = e.level;
        console.log("sendtencent"), console.log(e);
        for (var r = 0, a = 0; a < t.app.mData.length; a++) if (t.app.mData[a].openid == i.openid) {
            console.log(t.app.mData[a]), 0 == n ? (r = t.app.mData[a].mark, Number(e.mark) > Number(t.app.mData[a].mark) && (r = Number(e.mark), 
            wx.setUserCloudStorage({
                KVDataList: [ {
                    key: "mark1",
                    value: e.mark.toString()
                } ]
            }), t.app.mData[a].mark = Number(e.mark))) : 1 == n ? (r = t.app.mData[a].map1, 
            Number(e.mark) > Number(t.app.mData[a].map1) && (r = Number(e.mark), wx.setUserCloudStorage({
                KVDataList: [ {
                    key: "map11",
                    value: e.mark.toString()
                } ]
            }), t.app.mData[a].map1 = Number(e.mark))) : 2 == n ? (r = t.app.mData[a].map2, 
            Number(e.mark) > Number(t.app.mData[a].map2) && (r = Number(e.mark), wx.setUserCloudStorage({
                KVDataList: [ {
                    key: "map12",
                    value: e.mark.toString()
                } ]
            }), t.app.mData[a].map2 = Number(e.mark))) : 3 == n && (r = t.app.mData[a].map3, 
            Number(e.mark) > Number(t.app.mData[a].map3) && (r = Number(e.mark), wx.setUserCloudStorage({
                KVDataList: [ {
                    key: "map13",
                    value: e.mark.toString()
                } ]
            }), t.app.mData[a].map3 = Number(e.mark)));
            for (var o = this.mLevel.length, h = 0; h < this.mLevel.length; h++) if (this.mLevel[h] > Math.floor(t.app.mData[a].mark / 10)) {
                o = h + 1;
                break;
            }
            t.app.mData[a].level = this.mLevelName[o - 1];
            break;
        }
        if (0 == r && s <= Number(e.mark)) {
            console.log("best:" + s + "," + Number(e.mark));
            var l = {};
            if (l.name = i.nickName, l.avatar = i.avatarUrl, l.openid = i.openid, l.mark = 0, 
            l.map1 = 0, l.map2 = 0, l.map3 = 0, l.level = 0, 0 == n) {
                wx.setUserCloudStorage({
                    KVDataList: [ {
                        key: "mark1",
                        value: e.mark.toString()
                    } ]
                }), l.mark = e.mark;
                for (var o = this.mLevel.length, h = 0; h < this.mLevel.length; h++) if (this.mLevel[h] > Math.floor(l.mark / 10)) {
                    o = h + 1;
                    break;
                }
                l.level = this.mLevelName[o - 1];
            } else 1 == n ? (wx.setUserCloudStorage({
                KVDataList: [ {
                    key: "map11",
                    value: e.mark.toString()
                } ]
            }), l.map1 = e.mark) : 2 == n ? (wx.setUserCloudStorage({
                KVDataList: [ {
                    key: "map12",
                    value: e.mark.toString()
                } ]
            }), l.map2 = e.mark) : 3 == n && (wx.setUserCloudStorage({
                KVDataList: [ {
                    key: "map13",
                    value: e.mark.toString()
                } ]
            }), l.map3 = e.mark);
            t.app.mData.push(l), console.log(l), console.log(t.app.mData);
        }
    }, t.prototype.showRank = function(t) {
        var e = Laya.stage.getChildByName("rank");
        1 == t.show ? (null == e && ((e = new newRank()).centerX = 0, e.y = (Laya.stage.height - 1334) / 2, 
        e.name = "rank", Laya.stage.addChild(e)), e.show(), e.init(t)) : null != e && (e.visible = !1);
    }, t.prototype.showGroupRank = function(t) {
        var e = Laya.stage.getChildByName("rank");
        1 == t.show ? (null == e && ((e = new newRank()).centerX = 0, e.y = (Laya.stage.height - 1334) / 2, 
        e.name = "rank", Laya.stage.addChild(e)), e.show(), e.initGroup(t)) : null != e && (e.visible = !1);
    }, t.prototype.showGroup = function(e) {
        if (this.mOpenID = e.openid, 1 == e.show) {
            var i = e.groupid;
            null != this.mGroups[i] ? this.showGroupRank(e) : (this.mShareTicket = e.groupid, 
            wx.getGroupCloudStorage({
                shareTicket: e.groupid,
                keyList: [ "avatarUrl", "nickName", "openId", "mark1", "map11", "map12", "map13" ],
                success: function(e) {
                    console.log(e), t.app.initGroupData(e.data);
                },
                fail: function(t) {
                    console.log(t);
                }
            }));
        } else this.showGroupRank(e);
    }, t.prototype.showNextPlayer = function(t) {
        var e = Laya.stage.getChildByName("next");
        if (1 == t.show) {
            null == e && ((e = new nextPlayer()).centerX = 0, e.y = 1120 + (Laya.stage.height - 1334) / 2, 
            e.name = "next", Laya.stage.addChild(e)), e.visible = !0;
            var i = t.level;
            t.openid, this.sortData(i);
            for (var s = this.mData.length - 1, n = 0; n < this.mData.length; n++) if (this.mData[n].openid != t.openid) {
                if (0 == i && this.mData[n].mark <= Number(t.mark)) {
                    s = n - 1;
                    break;
                }
                if (1 == i && this.mData[n].map1 <= Number(t.mark)) {
                    s = n - 1;
                    break;
                }
                if (2 == i && this.mData[n].map2 <= Number(t.mark)) {
                    s = n - 1;
                    break;
                }
                if (3 == i && this.mData[n].map3 <= Number(t.mark)) {
                    s = n - 1;
                    break;
                }
            }
            if (s < 0) e.visible = !1; else {
                if (this.mData[s].openid == t.openid && (s -= 1) < 0) return void (e.visible = !1);
                0 == Number(t.level) && (e.mark.text = Math.floor(this.mData[s].mark / 10) + "米"), 
                1 == Number(t.level) && (e.mark.text = Math.floor(this.mData[s].map1 / 10) + "%"), 
                2 == Number(t.level) && (e.mark.text = Math.floor(this.mData[s].map2 / 10) + "%"), 
                3 == Number(t.level) && (e.mark.text = Math.floor(this.mData[s].map3 / 10) + "%"), 
                e.face.skin = this.mData[s].avatar;
            }
        } else null != e && (e.visible = !1);
    }, t.prototype.showGate = function(t) {
        var e = Laya.stage.getChildByName("gateInfo");
        1 == t.show ? (null == e && ((e = new Gate()).centerX = 0, e.y = 415 + (Laya.stage.height - 1334) / 2, 
        e.name = "gateInfo", Laya.stage.addChild(e)), e.show(), e.showInfo(t)) : null != e && (e.visible = !1);
    }, t.app = null, t;
}();

Laya.MiniAdpter.init(!0, !0), new GameMain(), wx.onMessage(function(t) {
    console.log(t), t.type && "init" == t.type && GameMain.app.init(t), t.type && "rank" == t.type && GameMain.app.showRank(t), 
    t.type && "send" == t.type && GameMain.app.sendTencent(t), t.type && "next" == t.type && GameMain.app.showNextPlayer(t), 
    t.type && "gateInfo" == t.type && GameMain.app.showGate(t), t.type && "group" == t.type && GameMain.app.showGroup(t), 
    "filedata" == t.isLoad && (laya.wx.mini.MiniFileMgr.ziyuFileData[t.url] = t.data);
});