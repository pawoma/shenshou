laya.utils.Browser;

var t = Matter.Composite, e = (Matter.Events, Matter.Bounds), r = Matter.Common, n = (Matter.Vertices, 
Matter.Vector), o = (Matter.Sleeping, Matter.Axes, Matter.Body, Matter.SAT, Matter.Contact, 
Matter.Pair, Matter.Detector, Matter.Grid, {});

!function() {
    function a(t) {
        var e = t.container;
        l = new Laya.Sprite(), c = new Laya.Sprite(), t.spriteContainer = l, t.graphicsContainer = c, 
        e.addChild(l), e.addChild(c), p = c.graphics;
    }
    function i(t) {
        var e = t.options.background;
        7 == e.length && "#" == e[0] ? l.graphics.drawRect(0, 0, t.options.width, t.options.height, e) : l.loadImage(e);
    }
    function s() {
        Laya.Render.canvas.setAttribute("data-pixel-ratio", 1);
    }
    function d(t, e) {
        var r = new Laya.Sprite();
        return r.pivot(t, e), r.pos(-9999, -9999), l.addChild(r), r;
    }
    var p, l, c;
    o.create = function(t) {
        var e = {
            controller: o,
            element: null,
            canvas: null,
            mouse: null,
            options: {
                width: 800,
                height: 600,
                pixelRatio: 1,
                background: "#fafafa",
                wireframeBackground: "#222",
                hasBounds: !!t.bounds,
                enabled: !0,
                wireframes: !0,
                showSleeping: !0,
                showDebug: !1,
                showBroadphase: !1,
                showBounds: !1,
                showVelocity: !1,
                showCollisions: !1,
                showSeparations: !1,
                showAxes: !1,
                showPositions: !1,
                showAngleIndicator: !1,
                showIds: !1,
                showShadows: !1,
                showVertexNumbers: !1,
                showConvexHulls: !1,
                showInternalEdges: !1,
                showMousePosition: !1
            }
        }, n = r.extend(e, t);
        return n.canvas = laya.renders.Render.canvas, n.context = laya.renders.Render.context.ctx, 
        n.textures = {}, n.bounds = n.bounds || {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: Laya.stage.width,
                y: Laya.stage.height
            }
        }, a(n), i(n), s(), n;
    }, o.world = function(r) {
        var a, i = r.render, s = r.world, d = i.options, l = t.allConstraints(s), c = t.allBodies(s), h = [];
        if (d.hasBounds) {
            var u = i.bounds.max.x - i.bounds.min.x, v = i.bounds.max.y - i.bounds.min.y;
            d.width, d.height;
            for (a = 0; a < c.length; a++) {
                var y = c[a];
                y.render.sprite.visible = e.overlaps(y.bounds, i.bounds);
            }
            for (a = 0; a < l.length; a++) {
                var w = l[a], x = w.bodyA, f = w.bodyB, g = w.pointA, b = w.pointB;
                x && (g = n.add(x.position, w.pointA)), f && (b = n.add(f.position, w.pointB)), 
                g && b && ((e.contains(i.bounds, g) || e.contains(i.bounds, b)) && h.push(w));
            }
        } else h = l;
        for (p.clear(), a = 0; a < c.length; a++) o.body(r, c[a]);
        for (a = 0; a < h.length; a++) o.constraint(r, h[a]);
    }, o.body = function(t, e) {
        var r = t.render, n = e.render;
        if (n.visible) {
            var o = n.sprite, a = e.sprite;
            if (n.sprite && n.sprite.texture) a || (a = e.sprite = d(o.xOffset, o.yOffset)).loadImage(o.texture), 
            a.scale(o.xScale, o.yScale), a.pos(e.position.x, e.position.y), a.rotation = 180 * e.angle / Math.PI; else {
                var i = r.options;
                for (k = e.parts.length > 1 ? 1 : 0; k < e.parts.length; k++) if (part = e.parts[k], 
                part.render.visible) {
                    var s = i.wireframes ? null : part.render.fillStyle, l = part.render.lineWidth, c = part.render.strokeStyle;
                    if (part.circleRadius) p.drawCircle(part.position.x, part.position.y, part.circleRadius, s, c, l); else {
                        var h = [];
                        h.push(part.vertices[0].x, part.vertices[0].y);
                        for (var u = 1; u < part.vertices.length; u++) !part.vertices[u - 1].isInternal || showInternalEdges, 
                        h.push(part.vertices[u].x, part.vertices[u].y), part.vertices[u].isInternal && !showInternalEdges && h.push(part.vertices[(u + 1) % part.vertices.length].x, part.vertices[(u + 1) % part.vertices.length].y);
                        p.drawPoly(0, 0, h, s, c, l);
                    }
                }
            }
        }
    }, o.constraint = function(t, e) {
        var r, n, o, a;
        if (e.render.visible && e.pointA && e.pointB) {
            var i = e.bodyA, s = e.bodyB;
            i ? (r = i.position.x + e.pointA.x, n = i.position.y + e.pointA.y) : (r = e.pointA.x, 
            n = e.pointA.y), s ? (o = s.position.x + e.pointB.x, a = s.position.y + e.pointB.y) : (o = e.pointB.x, 
            a = e.pointB.y), p.drawLine(r, n, o, a, e.render.strokeStyle, e.render.lineWidth);
        }
    };
}();