/*
 * iosSlider - http://iosscripts.com/iosslider/
 * 
 * A jQuery Horizontal Slider for iPhone/iPad Safari 
 * This plugin turns any wide element into a touch enabled horizontal slider.
 * 
 * Copyright (c) 2012 Marc Whitbread
 * 
 * Version: v1.2.7 (04/11/2013)
 * Minimum requirements: jQuery v1.4+
 *
 * Advanced requirements:
 * 1) jQuery bind() click event override on slide requires jQuery v1.6+
 *
 * Terms of use:
 *
 * 1) iosSlider is licensed under the Creative Commons – Attribution-NonCommercial 3.0 License.
 * 2) You may use iosSlider free for personal or non-profit purposes, without restriction.
 *	  Attribution is not required but always appreciated. For commercial projects, you
 *	  must purchase a license. You may download and play with the script before deciding to
 *	  fully implement it in your project. Making sure you are satisfied, and knowing iosSlider
 *	  is the right script for your project is paramount.
 * 3) You are not permitted to make the resources found on iosscripts.com available for
 *    distribution elsewhere "as is" without prior consent. If you would like to feature
 *    iosSlider on your site, please do not link directly to the resource zip files. Please
 *    link to the appropriate page on iosscripts.com where users can find the download.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 */

(function(a) {
    var oa = 0, Y = 0, ba = 0, V = 0, Ca = "ontouchstart"in window, Da = "onorientationchange"in window, ca = !1, $ = !1, Z = !1, pa = !1, ha = "pointer", ua = "pointer", ia = [], N = [], va = [], da = [], I = [], aa = [], A = [], j = [], r = [], wa = [], ea = [], f = {showScrollbar: function(d, f) {
            d.scrollbarHide && a("." + f).css({opacity: d.scrollbarOpacity, filter: "alpha(opacity:" + 100 * d.scrollbarOpacity + ")"})
        }, hideScrollbar: function(a, g, b, w, c, k, j, r, G, v) {
            if (a.scrollbar && a.scrollbarHide)
                for (var A = b; A < b + 25; A++)
                    g[g.length] = f.hideScrollbarIntervalTimer(10 * A, w[b], (b + 24 - A) / 24, c, k, j, r, G, v, a)
        }, hideScrollbarInterval: function(d, g, b, w, c, k, j, A, G) {
            V = -1 * d / r[A] * (c - k - j - w);
            f.setSliderOffset("." + b, V);
            a("." + b).css({opacity: G.scrollbarOpacity * g, filter: "alpha(opacity:" + 100 * G.scrollbarOpacity * g + ")"})
        }, slowScrollHorizontalInterval: function(d, g, b, w, c, k, T, O, G, v, K, z, s, u, F, n, l, B, h) {
            if (h.infiniteSlider) {
                if (b <= -1 * r[n]) {
                    var x = a(d).width();
                    if (b <= -1 * wa[n]) {
                        var q = -1 * K[0];
                        a(g).each(function(b) {
                            f.setSliderOffset(a(g)[b], q + l);
                            b < z.length && (z[b] = -1 * q);
                            q += F[b]
                        });
                        b += -1 * z[0];
                        j[n] = -1 * z[0] + l;
                        r[n] = j[n] + x - k;
                        A[n] = 0
                    } else {
                        var p = 0, L = f.getSliderOffset(a(g[0]), "x");
                        a(g).each(function(b) {
                            f.getSliderOffset(this, "x") < L && (L = f.getSliderOffset(this, "x"), p = b)
                        });
                        s = j[n] + x;
                        f.setSliderOffset(a(g)[p], s);
                        j[n] = -1 * z[1] + l;
                        r[n] = j[n] + x - k;
                        z.splice(0, 1);
                        z.splice(z.length, 0, -1 * s + l);
                        A[n]++
                    }
                }
                if (b >= -1 * j[n] || 0 <= b) {
                    x = a(d).width();
                    if (0 <= b) {
                        q = -1 * K[0];
                        a(g).each(function(b) {
                            f.setSliderOffset(a(g)[b], q + l);
                            b < z.length && (z[b] = -1 * q);
                            q += F[b]
                        });
                        b -= -1 * z[0];
                        j[n] = -1 * z[0] + l;
                        r[n] = j[n] + x - k;
                        for (A[n] = u; 0 < -1 * z[0] - x + l; ) {
                            var t = 0, y = f.getSliderOffset(a(g[0]), "x");
                            a(g).each(function(b) {
                                f.getSliderOffset(this, "x") > y && (y = f.getSliderOffset(this, "x"), t = b)
                            });
                            s = j[n] - F[t];
                            f.setSliderOffset(a(g)[t], s);
                            z.splice(0, 0, -1 * s + l);
                            z.splice(z.length - 1, 1);
                            j[n] = -1 * z[0] + l;
                            r[n] = j[n] + x - k;
                            A[n]--;
                            I[n]++
                        }
                    }
                    0 > b && (t = 0, y = f.getSliderOffset(a(g[0]), "x"), a(g).each(function(b) {
                        f.getSliderOffset(this, "x") > y && (y = f.getSliderOffset(this, "x"), t = b)
                    }), s = j[n] - F[t], f.setSliderOffset(a(g)[t], s), z.splice(0, 0, -1 * s + l), z.splice(z.length - 1, 1), j[n] = -1 * z[0] + l, r[n] = j[n] + x - k, A[n]--)
                }
            }
            K = !1;
            k = f.calcActiveOffset(h, b, z, k, A[n], u, v, n);
            s = (k + A[n] + u) % u;
            h.infiniteSlider ? s != aa[n] && (K = !0) : k != I[n] && (K = !0);
            if (K && (u = new f.args("change", h, d, a(d).children(":eq(" + s + ")"), s, B), a(d).parent().data("args", u), "" != h.onSlideChange))
                h.onSlideChange(u);
            I[n] = k;
            aa[n] = s;
            b = Math.floor(b);
            f.setSliderOffset(d, b);
            h.scrollbar && (V = Math.floor((-1 * b - j[n] + l) / (r[n] - j[n] + l) * (T - O - c)), d = c - G, b >= -1 * j[n] + l ? (d = c - G - -1 * V, f.setSliderOffset(a("." + w), 0)) : (b <= -1 * r[n] + 1 && (d = T - O - G - V), f.setSliderOffset(a("." + w), V)), a("." + w).css({width: d + "px"}))
        }, slowScrollHorizontal: function(d, g, b, w, c, k, T, O, G, v, K, z, s, u, F, n, l, B, h, x, q) {
            k = [];
            var p = f.getSliderOffset(d, "x"), L = 0, t = 25 / 1024 * O;
            frictionCoefficient = q.frictionCoefficient;
            elasticFrictionCoefficient = q.elasticFrictionCoefficient;
            snapFrictionCoefficient = q.snapFrictionCoefficient;
            c > q.snapVelocityThreshold && q.snapToChildren && !h ? L = 1 : c < -1 * q.snapVelocityThreshold && (q.snapToChildren && !h) && (L = -1);
            c < -1 * t ? c = -1 * t : c > t && (c = t);
            a(d)[0] !== a(B)[0] && (L *= -1, c *= -2);
            B = A[F];
            if (q.infiniteSlider)
                var y = j[F], m = r[F];
            h = [];
            for (var t = [], D = 0; D < s.length; D++)
                h[D] = s[D], D < g.length && (t[D] = f.getSliderOffset(a(g[D]), "x"));
            for (; 1 < c || -1 > c; ) {
                c *= frictionCoefficient;
                p += c;
                if ((p > -1 * j[F] || p < -1 * r[F]) && !q.infiniteSlider)
                    c *= elasticFrictionCoefficient, p += c;
                if (q.infiniteSlider) {
                    if (p <= -1 * m) {
                        for (var m = a(d).width(), N = 0, P = t[0], D = 0; D < t.length; D++)
                            t[D] < P && (P = t[D], N = D);
                        D = y + m;
                        t[N] = D;
                        y = -1 * h[1] + x;
                        m = y + m - O;
                        h.splice(0, 1);
                        h.splice(h.length, 0, -1 * D + x);
                        B++
                    }
                    if (p >= -1 * y) {
                        m = a(d).width();
                        N = 0;
                        P = t[0];
                        for (D = 0; D < t.length; D++)
                            t[D] > P && (P = t[D], N = D);
                        D = y - u[N];
                        t[N] = D;
                        h.splice(0, 0, -1 * D + x);
                        h.splice(h.length - 1, 1);
                        y = -1 * h[0] + x;
                        m = y + m - O;
                        B--
                    }
                }
                k[k.length] = p
            }
            t = !1;
            c = f.calcActiveOffset(q, p, h, O, B, l, I[F], F);
            y = (c + B + l) % l;
            q.snapToChildren && (q.infiniteSlider ? y != aa[F] && (t = !0) : c != I[F] && (t = !0), 0 > L && !t ? (c++, c >= s.length && !q.infinteSlider && (c = s.length - 1)) : 0 < L && !t && (c--, 0 > c && !q.infinteSlider && (c = 0)));
            if (q.snapToChildren || (p > -1 * j[F] || p < -1 * r[F]) && !q.infiniteSlider) {
                for (k.splice(0, k.length); p < h[c] - 0.5 || p > h[c] + 0.5; )
                    p = (p - h[c]) * snapFrictionCoefficient + h[c], k[k.length] = p;
                k[k.length] = h[c]
            }
            L = 1;
            0 != k.length % 2 && (L = 0);
            for (p = 0; p < b.length; p++)
                clearTimeout(b[p]);
            B = (c + B + l) % l;
            y = 0;
            for (p = L; p < k.length; p += 2)
                if (p == L || 1 < Math.abs(k[p] - y) || p >= k.length - 2)
                    y = k[p], b[b.length] = f.slowScrollHorizontalIntervalTimer(10 * p, d, g, k[p], w, T, O, G, v, K, c, z, s, n, l, u, F, x, B, q);
            y = (c + A[F] + l) % l;
            "" != q.onSlideComplete && (b[b.length] = f.onSlideCompleteTimer(10 * (p + 1), q, d, a(d).children(":eq(" + y + ")"), y, F));
            da[F] = b;
            f.hideScrollbar(q, b, p, k, w, T, O, v, K, F)
        }, onSlideComplete: function(d, g, b, w) {
            b = new f.args("complete", d, a(g), b, w, w);
            a(g).parent().data("args", b);
            if ("" != d.onSlideComplete)
                d.onSlideComplete(b)
        }, getSliderOffset: function(d, f) {
            var b = 0;
            f = "x" == f ? 4 : 5;
            if (ca && !$ && !Z) {
                for (var b = ["-webkit-transform", "-moz-transform", "transform"], w = 0; w < b.length; w++)
                    if (void 0 != a(d).css(b[w]) && 0 < a(d).css(b[w]).length) {
                        var c = a(d).css(b[w]).split(",");
                        break
                    }
                b = parseInt(c[f], 10)
            } else
                b = parseInt(a(d).css("left"), 10);
            return b
        }, setSliderOffset: function(d, f) {
            ca && !$ && !Z ? a(d).css({webkitTransform: "matrix(1,0,0,1," + f + ",0)", MozTransform: "matrix(1,0,0,1," + f + ",0)", transform: "matrix(1,0,0,1," + f + ",0)"}) : a(d).css({left: f + "px"})
        }, setBrowserInfo: function() {
            null != navigator.userAgent.match("WebKit") ? (ha = "-webkit-grab", ua = "-webkit-grabbing") : null != navigator.userAgent.match("Gecko") ? (ha = "move", ua = "-moz-grabbing") : null != navigator.userAgent.match("MSIE 7") ? pa = $ = !0 : null != navigator.userAgent.match("MSIE 8") ? pa = Z = !0 : null != navigator.userAgent.match("MSIE 9") && (pa = !0)
        }, has3DTransform: function() {
            var d = !1, f = a("<div />").css({webkitTransform: "matrix(1,1,1,1,1,1)", MozTransform: "matrix(1,1,1,1,1,1)", transform: "matrix(1,1,1,1,1,1)"});
            "" == f.attr("style") ? d = !1 : void 0 != f.attr("style") && (d = !0);
            return d
        }, getSlideNumber: function(a, f, b) {
            return(a - A[f] + b) % b
        }, calcActiveOffset: function(a, f, b, w, c, k) {
            c = !1;
            a = [];
            var j;
            f > b[0] && (j = 0);
            f < b[b.length - 1] && (j = k - 1);
            for (k = 0; k < b.length; k++)
                b[k] <= f && b[k] > f - w && (!c && b[k] != f && (a[a.length] = b[k - 1]), a[a.length] = b[k], c = !0);
            0 == a.length && (a[0] = b[b.length - 1]);
            for (k = c = 0; k < a.length; k++) {
                var r = Math.abs(f - a[k]);
                r < w && (c = a[k], w = r)
            }
            for (k = 0; k < b.length; k++)
                c == b[k] && (j = k);
            return j
        }, changeSlide: function(d, g, b, w, c, k, j, r, G, v, K, z, s, u, F, n, l, B) {
            f.autoSlidePause(u);
            for (var h = 0; h < w.length; h++)
                clearTimeout(w[h]);
            var x = Math.ceil(B.autoSlideTransTimer / 10) + 1, q = f.getSliderOffset(g, "x"), p = z[d], L = p - q;
            if (B.infiniteSlider) {
                d = (d - A[u] + 2 * n) % n;
                h = !1;
                0 == d && 2 == n && (d = n, z[d] = z[d - 1] - a(b).eq(0).outerWidth(!0), h = !0);
                p = z[d];
                L = p - q;
                p = [z[d] - a(g).width(), z[d] + a(g).width()];
                h && z.splice(z.length - 1, 1);
                for (h = 0; h < p.length; h++)
                    Math.abs(p[h] - q) < Math.abs(L) && (L = p[h] - q)
            }
            var p = [], t;
            f.showScrollbar(B, c);
            for (h = 0; h <= x; h++)
                t = h, t /= x, t--, t = q + L * (Math.pow(t, 5) + 1), p[p.length] = t;
            for (h = q = 0; h < p.length; h++) {
                if (0 == h || 1 < Math.abs(p[h] - q) || h >= p.length - 2)
                    q = p[h], w[h] = f.slowScrollHorizontalIntervalTimer(10 * (h + 1), g, b, p[h], c, k, j, r, G, v, d, K, z, F, n, s, u, l, d, B);
                0 == h && "" != B.onSlideStart && (x = (I[u] + A[u] + n) % n, B.onSlideStart(new f.args("start", B, g, a(g).children(":eq(" + x + ")"), x, d)))
            }
            q = !1;
            x = (d + A[u] + n) % n;
            B.infiniteSlider ? x != aa[u] && (q = !0) : d != I[u] && (q = !0);
            q && "" != B.onSlideComplete && (w[w.length] = f.onSlideCompleteTimer(10 * (h + 1), B, g, a(g).children(":eq(" + x + ")"), x, u));
            da[u] = w;
            f.hideScrollbar(B, w, h, p, c, k, j, G, v, u);
            f.autoSlide(g, b, w, c, k, j, r, G, v, K, z, s, u, F, n, l, B)
        }, autoSlide: function(a, g, b, w, c, k, j, r, G, v, K, z, s, u, F, n, l) {
            if (!N[s].autoSlide)
                return!1;
            f.autoSlidePause(s);
            ia[s] = setTimeout(function() {
                !l.infiniteSlider && I[s] > K.length - 1 && (I[s] -= F);
                f.changeSlide((I[s] + A[s] + F + 1) % F, a, g, b, w, c, k, j, r, G, v, K, z, s, u, F, n, l);
                f.autoSlide(a, g, b, w, c, k, j, r, G, v, K, z, s, u, F, n, l)
            }, l.autoSlideTimer + l.autoSlideTransTimer)
        }, autoSlidePause: function(a) {
            clearTimeout(ia[a])
        }, isUnselectable: function(f, g) {
            return"" != g.unselectableSelector && 1 == a(f).closest(g.unselectableSelector).size() ? !0 : !1
        }, slowScrollHorizontalIntervalTimer: function(a, g, b, w, c, k, j, r, A, v, I, z, s, u, F, n, l, B, h, x) {
            return setTimeout(function() {
                f.slowScrollHorizontalInterval(g, b, w, c, k, j, r, A, v, I, z, s, u, F, n, l, B, h, x)
            }, a)
        }, onSlideCompleteTimer: function(a, g, b, w, c, k) {
            return setTimeout(function() {
                f.onSlideComplete(g, b, w, c, k)
            }, a)
        }, hideScrollbarIntervalTimer: function(a, g, b, w, c, k, j, r, A, v) {
            return setTimeout(function() {
                f.hideScrollbarInterval(g, b, w, c, k, j, r, A, v)
            }, a)
        }, args: function(d, g, b, j, c) {
            this.prevSlideNumber = void 0 == a(b).parent().data("args") ? void 0 : a(b).parent().data("args").prevSlideNumber;
            this.prevSlideObject = void 0 == a(b).parent().data("args") ? void 0 : a(b).parent().data("args").prevSlideObject;
            this.targetSlideObject = this.targetSlideNumber = void 0;
            this.slideChanged = !1;
            "load" != d && "start" != d && ("change" == d ? (this.slideChanged = !0, this.prevSlideNumber = void 0 == a(b).parent().data("args") ? g.startAtSlide : a(b).parent().data("args").currentSlideNumber, this.prevSlideObject = a(b).children(":eq(" + this.prevSlideNumber + ")")) : "complete" == d && (this.slideChanged = a(b).parent().data("args").slideChanged));
            this.settings = g;
            this.data = a(b).parent().data("iosslider");
            this.sliderObject = b;
            this.sliderContainerObject = a(b).parent();
            this.currentSlideObject = j;
            this.currentSlideNumber = c + 1;
            this.currentSliderOffset = -1 * f.getSliderOffset(b, "x")
        }, preventDrag: function(a) {
            a.preventDefault()
        }, preventClick: function(a) {
            a.stopImmediatePropagation();
            return!1
        }, enableClick: function() {
            return!0
        }};
    f.setBrowserInfo();
    var S = {init: function(d, g) {
            ca = f.has3DTransform();
            var b = a.extend(!0, {elasticPullResistance: 0.6, frictionCoefficient: 0.92, elasticFrictionCoefficient: 0.6, snapFrictionCoefficient: 0.92, snapToChildren: !1, snapSlideCenter: !1, startAtSlide: 1, scrollbar: !1, scrollbarDrag: !1, scrollbarHide: !0, scrollbarLocation: "top", scrollbarContainer: "", scrollbarOpacity: 0.4, scrollbarHeight: "4px", scrollbarBorder: "0", scrollbarMargin: "5px", scrollbarBackground: "#000", scrollbarBorderRadius: "100px", scrollbarShadow: "0 0 0 #000", scrollbarElasticPullResistance: 0.9, desktopClickDrag: !1, keyboardControls: !1, tabToAdvance: !1, responsiveSlideContainer: !0, responsiveSlides: !0, navSlideSelector: "", navPrevSelector: "", navNextSelector: "", autoSlideToggleSelector: "", autoSlide: !1, autoSlideTimer: 5E3, autoSlideTransTimer: 750, infiniteSlider: !1, snapVelocityThreshold: 5, slideStartVelocityThreshold: 0, horizontalSlideLockThreshold: 5, verticalSlideLockThreshold: 3, stageCSS: {position: "relative", top: "0", left: "0", overflow: "hidden", zIndex: 1}, unselectableSelector: "", onSliderLoaded: "", onSliderUpdate: "", onSliderResize: "", onSlideStart: "", onSlideChange: "", onSlideComplete: ""}, d);
            void 0 == g && (g = this);
            return a(g).each(function() {
                function d() {
                    f.autoSlidePause(c);
                    xa = a(E).find("a");
                    Aa = a(E).find("[onclick]");
                    qa = a(E).find("*");
                    a(B).css("width", "");
                    a(B).css("height", "");
                    a(E).css("width", "");
                    C = a(E).children().not("script").get();
                    ja = [];
                    M = [];
                    a(C).css("width", "");
                    r[c] = 0;
                    m = [];
                    F = a(B).parent().width();
                    h = a(B).outerWidth(!0);
                    b.responsiveSlideContainer && (h = a(B).outerWidth(!0) > F ? F : a(B).outerWidth(!0));
                    a(B).css({position: b.stageCSS.position, top: b.stageCSS.top, left: b.stageCSS.left, overflow: b.stageCSS.overflow, zIndex: b.stageCSS.zIndex, webkitPerspective: 1E3, webkitBackfaceVisibility: "hidden", "-ms-touch-action": "pan-y", width: h});
                    a(b.unselectableSelector).css({cursor: "default"});
                    for (var H = 0; H < C.length; H++) {
                        ja[H] = a(C[H]).width();
                        M[H] = a(C[H]).outerWidth(!0);
                        var w = M[H];
                        b.responsiveSlides && (w = M[H] > h ? h + -1 * (M[H] - ja[H]) : ja[H], a(C[H]).css({width: w}));
                        a(C[H]).css({webkitBackfaceVisibility: "hidden", position: "absolute", top: 0});
                        m[H] = -1 * r[c];
                        r[c] = r[c] + w + (M[H] - ja[H])
                    }
                    b.snapSlideCenter && (l = 0.5 * (h - M[0]), b.responsiveSlides && M[0] > h && (l = 0));
                    wa[c] = 2 * r[c];
                    for (H = 0; H < C.length; H++)
                        f.setSliderOffset(a(C[H]), -1 * m[H] + r[c] + l), m[H] -= r[c];
                    if (!b.infiniteSlider && !b.snapSlideCenter) {
                        for (H = 0; H < m.length && !(m[H] <= - 1 * (2 * r[c] - h)); H++)
                            ia = H;
                        m.splice(ia + 1, m.length);
                        m[m.length] = -1 * (2 * r[c] - h)
                    }
                    for (H = 0; H < m.length; H++)
                        D[H] = m[H];
                    t && (b.startAtSlide = N[c].startAtSlide > m.length ? m.length : N[c].startAtSlide, b.infiniteSlider ? (b.startAtSlide = (N[c].startAtSlide - 1 + J) % J, I[c] = N[c].startAtSlide) : (b.startAtSlide = 0 > N[c].startAtSlide - 1 ? m.length - 1 : N[c].startAtSlide, I[c] = N[c].startAtSlide - 1), aa[c] = I[c]);
                    j[c] = r[c] + l;
                    a(E).css({position: "relative", cursor: ha, webkitPerspective: "0", webkitBackfaceVisibility: "hidden", width: r[c] + "px"});
                    W = r[c];
                    r[c] = 2 * r[c] - h + 2 * l;
                    (U = W < h ? !0 : !1) && a(E).css({cursor: "default"});
                    n = a(B).parent().outerHeight(!0);
                    x = a(B).height();
                    b.responsiveSlideContainer && (x = x > n ? n : x);
                    a(B).css({height: x});
                    f.setSliderOffset(E, m[I[c]]);
                    if (b.infiniteSlider && !U) {
                        H = f.getSliderOffset(a(E), "x");
                        for (w = -1 * ((A[c] + J) % J); 0 > w; ) {
                            var y = 0, ka = f.getSliderOffset(a(C[0]), "x");
                            a(C).each(function(a) {
                                f.getSliderOffset(this, "x") < ka && (ka = f.getSliderOffset(this, "x"), y = a)
                            });
                            var L = j[c] + W;
                            f.setSliderOffset(a(C)[y], L);
                            j[c] = -1 * m[1] + l;
                            r[c] = j[c] + W - h;
                            m.splice(0, 1);
                            m.splice(m.length, 0, -1 * L + l);
                            w++
                        }
                        for (; 0 < -1 * m[0] - W + l && b.snapSlideCenter && t; ) {
                            var O = 0, P = f.getSliderOffset(a(C[0]), "x");
                            a(C).each(function(a) {
                                f.getSliderOffset(this, "x") > P && (P = f.getSliderOffset(this, "x"), O = a)
                            });
                            L = j[c] - M[O];
                            f.setSliderOffset(a(C)[O], L);
                            m.splice(0, 0, -1 * L + l);
                            m.splice(m.length - 1, 1);
                            j[c] = -1 * m[0] + l;
                            r[c] = j[c] + W - h;
                            A[c]--;
                            I[c]++
                        }
                        for (; H <= - 1 * r[c]; )
                            y = 0, ka = f.getSliderOffset(a(C[0]), "x"), a(C).each(function(a) {
                                f.getSliderOffset(this, "x") < ka && (ka = f.getSliderOffset(this, "x"), y = a)
                            }), L = j[c] + W, f.setSliderOffset(a(C)[y], L), j[c] = -1 * m[1] + l, r[c] = j[c] + W - h, m.splice(0, 1), m.splice(m.length, 0, -1 * L + l), A[c]++, I[c]--
                    }
                    f.setSliderOffset(E, m[I[c]]);
                    b.desktopClickDrag || a(E).css({cursor: "default"});
                    b.scrollbar && (a("." + G).css({margin: b.scrollbarMargin, overflow: "hidden", display: "none"}), a("." + G + " ." + v).css({border: b.scrollbarBorder}), q = parseInt(a("." + G).css("marginLeft")) + parseInt(a("." + G).css("marginRight")), p = parseInt(a("." + G + " ." + v).css("borderLeftWidth"), 10) + parseInt(a("." + G + " ." + v).css("borderRightWidth"), 10), s = "" != b.scrollbarContainer ? a(b.scrollbarContainer).width() : h, u = (s - q) / J, b.scrollbarHide || (S = b.scrollbarOpacity), a("." + G).css({position: "absolute", left: 0, width: s - q + "px", margin: b.scrollbarMargin}), "top" == b.scrollbarLocation ? a("." + G).css("top", "0") : a("." + G).css("bottom", "0"), a("." + G + " ." + v).css({borderRadius: b.scrollbarBorderRadius, background: b.scrollbarBackground, height: b.scrollbarHeight, width: u - p + "px", minWidth: b.scrollbarHeight, border: b.scrollbarBorder, webkitPerspective: 1E3, webkitBackfaceVisibility: "hidden", position: "relative", opacity: S, filter: "alpha(opacity:" + 100 * S + ")", boxShadow: b.scrollbarShadow}), f.setSliderOffset(a("." + G + " ." + v), Math.floor((-1 * m[I[c]] - j[c] + l) / (r[c] - j[c] + l) * (s - q - u))), a("." + G).css({display: "block"}), K = a("." + G + " ." + v), z = a("." + G));
                    b.scrollbarDrag && !U && a("." + G + " ." + v).css({cursor: ha});
                    b.infiniteSlider && (R = (r[c] + h) / 3);
                    "" != b.navSlideSelector && a(b.navSlideSelector).each(function(d) {
                        a(this).css({cursor: "pointer"});
                        a(this).unbind(Q).bind(Q, function(H) {
                            "touchstart" == H.type ? a(this).unbind("click.iosSliderEvent") : a(this).unbind("touchstart.iosSliderEvent");
                            Q = H.type + ".iosSliderEvent";
                            f.changeSlide(d, E, C, g, v, u, h, s, q, p, D, m, M, c, R, J, l, b)
                        })
                    });
                    "" != b.navPrevSelector && (a(b.navPrevSelector).css({cursor: "pointer"}), a(b.navPrevSelector).unbind(Q).bind(Q, function(d) {
                        "touchstart" == d.type ? a(this).unbind("click.iosSliderEvent") : a(this).unbind("touchstart.iosSliderEvent");
                        Q = d.type + ".iosSliderEvent";
                        d = (I[c] + A[c] + J) % J;
                        (0 < d || b.infiniteSlider) && f.changeSlide(d - 1, E, C, g, v, u, h, s, q, p, D, m, M, c, R, J, l, b)
                    }));
                    "" != b.navNextSelector && (a(b.navNextSelector).css({cursor: "pointer"}), a(b.navNextSelector).unbind(Q).bind(Q, function(d) {
                        "touchstart" == d.type ? a(this).unbind("click.iosSliderEvent") : a(this).unbind("touchstart.iosSliderEvent");
                        Q = d.type + ".iosSliderEvent";
                        d = (I[c] + A[c] + J) % J;
                        (d < m.length - 1 || b.infiniteSlider) && f.changeSlide(d + 1, E, C, g, v, u, h, s, q, p, D, m, M, c, R, J, l, b)
                    }));
                    b.autoSlide && !U && ("" != b.autoSlideToggleSelector && (a(b.autoSlideToggleSelector).css({cursor: "pointer"}), a(b.autoSlideToggleSelector).unbind(Q).bind(Q, function() {
                        "touchstart" == e.type ? a(this).unbind("click.iosSliderEvent") : a(this).unbind("touchstart.iosSliderEvent");
                        Q = e.type + ".iosSliderEvent";
                        fa ? (f.autoSlide(E, C, g, v, u, h, s, q, p, D, m, M, c, R, J, l, b), fa = !1, a(b.autoSlideToggleSelector).removeClass("on")) : (f.autoSlidePause(c), fa = !0, a(b.autoSlideToggleSelector).addClass("on"))
                    })), !fa && !U && f.autoSlide(E, C, g, v, u, h, s, q, p, D, m, M, c, R, J, l, b), a(B).bind("mouseenter.iosSliderEvent", function() {
                        f.autoSlidePause(c)
                    }), a(B).bind("mouseleave.iosSliderEvent", function() {
                        !fa && !U && f.autoSlide(E, C, g, v, u, h, s, q, p, D, m, M, c, R, J, l, b)
                    }), a(B).bind("touchend.iosSliderEvent", function() {
                        !fa && !U && f.autoSlide(E, C, g, v, u, h, s, q, p, D, m, M, c, R, J, l, b)
                    }));
                    a(B).data("iosslider", {obj: Ba, settings: b, scrollerNode: E, slideNodes: C, numberOfSlides: J, centeredSlideOffset: l, sliderNumber: c, originalOffsets: D, childrenOffsets: m, sliderMax: r[c], scrollbarClass: v, scrollbarWidth: u, scrollbarStageWidth: s, stageWidth: h, scrollMargin: q, scrollBorder: p, infiniteSliderOffset: A[c], infiniteSliderWidth: R, slideNodeOuterWidths: M});
                    t = !1;
                    return!0
                }
                oa++;
                var c = oa, g = [];
                N[c] = b;
                j[c] = 0;
                r[c] = 0;
                var T = [0, 0], O = [0, 0], G = "scrollbarBlock" + oa, v = "scrollbar" + oa, K, z, s, u, F, n, l = 0, B = a(this), h, x, q, p, L, t = !0, y = -1, m, D = [], S = 0, P = 0, ca = 0, E = a(this).children(":first-child"), C, ja, M, J = a(E).children().not("script").size(), X = !1, ia = 0, ya = !1, ra = void 0, R;
                A[c] = 0;
                var U = !1, fa = !1;
                va[c] = !1;
                var sa, ta = !1, la = !1, Q = "touchstart.iosSliderEvent click.iosSliderEvent", W, xa, Aa, qa;
                ea[c] = !1;
                da[c] = [];
                b.scrollbarDrag && (b.scrollbar = !0, b.scrollbarHide = !1);
                var Ba = a(this);
                if (void 0 != Ba.data("iosslider"))
                    return!0;
                a(this).find("img").bind("dragstart.iosSliderEvent", function(a) {
                    a.preventDefault()
                });
                b.infiniteSlider && (b.scrollbar = !1);
                b.scrollbar && ("" != b.scrollbarContainer ? a(b.scrollbarContainer).append("<div class = '" + G + "'><div class = '" + v + "'></div></div>") : a(E).parent().append("<div class = '" + G + "'><div class = '" + v + "'></div></div>"));
                if (!d())
                    return!0;
                a(this).find("a").bind("mousedown", f.preventDrag);
                a(this).find("[onclick]").bind("click", f.preventDrag).each(function() {
                    a(this).data("onclick", this.onclick)
                });
                y = f.calcActiveOffset(b, f.getSliderOffset(a(E), "x"), m, h, A[c], J, void 0, c);
                y = (y + A[c] + J) % J;
                y = new f.args("load", b, E, a(E).children(":eq(" + y + ")"), y, y);
                a(B).data("args", y);
                if ("" != b.onSliderLoaded)
                    b.onSliderLoaded(y);
                if (N[c].responsiveSlides || N[c].responsiveSlideContainer)
                    y = Da ? "orientationchange" : "resize", a(window).bind(y + ".iosSliderEvent", function() {
                        if (!d())
                            return!0;
                        var c = a(B).data("args");
                        if ("" != b.onSliderResize)
                            b.onSliderResize(c)
                    });
                (b.keyboardControls || b.tabToAdvance) && !U && a(document).bind("keydown.iosSliderEvent", function(a) {
                    !$ && !Z && (a = a.originalEvent);
                    if (37 == a.keyCode && b.keyboardControls)
                        a.preventDefault(), a = (I[c] + A[c] + J) % J, (0 < a || b.infiniteSlider) && f.changeSlide(a - 1, E, C, g, v, u, h, s, q, p, D, m, M, c, R, J, l, b);
                    else if (39 == a.keyCode && b.keyboardControls || 9 == a.keyCode && b.tabToAdvance)
                        a.preventDefault(), a = (I[c] + A[c] + J) % J, (a < m.length - 1 || b.infiniteSlider) && f.changeSlide(a + 1, E, C, g, v, u, h, s, q, p, D, m, M, c, R, J, l, b)
                });
                if (Ca || b.desktopClickDrag) {
                    var ga = !1, ma = a(E), na = a(E), za = !1;
                    b.scrollbarDrag && (ma = ma.add(K), na = na.add(z));
                    a(ma).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent", function(d) {
                        if (ga)
                            return!0;
                        ga = !0;
                        "touchstart" == d.type ? a(na).unbind("mousedown.iosSliderEvent") : a(na).unbind("touchstart.iosSliderEvent");
                        if (ea[c] || U)
                            return!0;
                        if (za = f.isUnselectable(d.target, b))
                            return X = ga = !1, !0;
                        sa = a(this)[0] === a(K)[0] ? K : E;
                        !$ && !Z && (d = d.originalEvent);
                        f.autoSlidePause(c);
                        qa.unbind(".disableClick");
                        if ("touchstart" == d.type)
                            eventX = d.touches[0].pageX, eventY = d.touches[0].pageY;
                        else {
                            if (window.getSelection)
                                window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges();
                            else if (document.selection)
                                if (Z)
                                    try {
                                        document.selection.empty()
                                    } catch (h) {
                                    }
                                else
                                    document.selection.empty();
                            eventX = d.pageX;
                            eventY = d.pageY;
                            ya = !0;
                            ra = E;
                            a(this).css({cursor: ua})
                        }
                        T = [0, 0];
                        O = [0, 0];
                        Y = 0;
                        X = !1;
                        for (d = 0; d < g.length; d++)
                            clearTimeout(g[d]);
                        d = f.getSliderOffset(E, "x");
                        d > -1 * j[c] + l + W ? (d = -1 * j[c] + l + W, f.setSliderOffset(a("." + v), d), a("." + v).css({width: u - p + "px"})) : d < -1 * r[c] && (f.setSliderOffset(a("." + v), s - q - u), a("." + v).css({width: u - p + "px"}));
                        d = a(this)[0] === a(K)[0] ? j[c] : 0;
                        P = -1 * (f.getSliderOffset(this, "x") - eventX - d);
                        f.getSliderOffset(this, "y");
                        T[1] = eventX;
                        O[1] = eventY;
                        la = !1
                    });
                    a(na).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent", function(d) {
                        !$ && !Z && (d = d.originalEvent);
                        if (ea[c] || U || za)
                            return!0;
                        var g = 0;
                        if ("touchmove" == d.type)
                            eventX = d.touches[0].pageX, eventY = d.touches[0].pageY;
                        else {
                            if (window.getSelection)
                                window.getSelection().empty || window.getSelection().removeAllRanges && window.getSelection().removeAllRanges();
                            else if (document.selection)
                                if (Z)
                                    try {
                                        document.selection.empty()
                                    } catch (w) {
                                    }
                                else
                                    document.selection.empty();
                            eventX = d.pageX;
                            eventY = d.pageY;
                            if (!ya || !pa && ("undefined" != typeof d.webkitMovementX || "undefined" != typeof d.webkitMovementY) && 0 === d.webkitMovementY && 0 === d.webkitMovementX)
                                return!0
                        }
                        T[0] = T[1];
                        T[1] = eventX;
                        Y = (T[1] - T[0]) / 2;
                        O[0] = O[1];
                        O[1] = eventY;
                        ba = (O[1] - O[0]) / 2;
                        if (!X) {
                            var k = (I[c] + A[c] + J) % J, k = new f.args("start", b, E, a(E).children(":eq(" + k + ")"), k, k);
                            a(B).data("args", k);
                            if ("" != b.onSlideStart)
                                b.onSlideStart(k)
                        }
                        if ((ba > b.verticalSlideLockThreshold || ba < -1 * b.verticalSlideLockThreshold) && "touchmove" == d.type && !X)
                            ta = !0;
                        (Y > b.horizontalSlideLockThreshold || Y < -1 * b.horizontalSlideLockThreshold) && "touchmove" == d.type && d.preventDefault();
                        if (Y > b.slideStartVelocityThreshold || Y < -1 * b.slideStartVelocityThreshold)
                            X = !0;
                        if (X && !ta) {
                            var k = f.getSliderOffset(E, "x"), n = a(this)[0] === a(z)[0] ? j[c] : l, y = a(this)[0] === a(z)[0] ? (j[c] - r[c] - l) / (s - q - u) : 1, t = a(this)[0] === a(z)[0] ? b.scrollbarElasticPullResistance : b.elasticPullResistance, F = b.snapSlideCenter && a(this)[0] === a(z)[0] ? 0 : l, G = b.snapSlideCenter && a(this)[0] === a(z)[0] ? l : 0;
                            "touchmove" == d.type && (ca != d.touches.length && (P = -1 * k + eventX), ca = d.touches.length);
                            if (b.infiniteSlider) {
                                if (k <= -1 * r[c]) {
                                    var x = a(E).width();
                                    if (k <= -1 * wa[c]) {
                                        var K = -1 * D[0];
                                        a(C).each(function(b) {
                                            f.setSliderOffset(a(C)[b], K + l);
                                            b < m.length && (m[b] = -1 * K);
                                            K += M[b]
                                        });
                                        P -= -1 * m[0];
                                        j[c] = -1 * m[0] + l;
                                        r[c] = j[c] + x - h;
                                        A[c] = 0
                                    } else {
                                        var N = 0, R = f.getSliderOffset(a(C[0]), "x");
                                        a(C).each(function(a) {
                                            f.getSliderOffset(this, "x") < R && (R = f.getSliderOffset(this, "x"), N = a)
                                        });
                                        t = j[c] + x;
                                        f.setSliderOffset(a(C)[N], t);
                                        j[c] = -1 * m[1] + l;
                                        r[c] = j[c] + x - h;
                                        m.splice(0, 1);
                                        m.splice(m.length, 0, -1 * t + l);
                                        A[c]++
                                    }
                                }
                                if (k >= -1 * j[c] || 0 <= k)
                                    if (x = a(E).width(), 0 <= k) {
                                        K = -1 * D[0];
                                        a(C).each(function(b) {
                                            f.setSliderOffset(a(C)[b], K + l);
                                            b < m.length && (m[b] = -1 * K);
                                            K += M[b]
                                        });
                                        P += -1 * m[0];
                                        j[c] = -1 * m[0] + l;
                                        r[c] = j[c] + x - h;
                                        for (A[c] = J; 0 < -1 * m[0] - x + l; ) {
                                            var Q = 0, S = f.getSliderOffset(a(C[0]), "x");
                                            a(C).each(function(a) {
                                                f.getSliderOffset(this, "x") > S && (S = f.getSliderOffset(this, "x"), Q = a)
                                            });
                                            t = j[c] - M[Q];
                                            f.setSliderOffset(a(C)[Q], t);
                                            m.splice(0, 0, -1 * t + l);
                                            m.splice(m.length - 1, 1);
                                            j[c] = -1 * m[0] + l;
                                            r[c] = j[c] + x - h;
                                            A[c]--;
                                            I[c]++
                                        }
                                    } else
                                        Q = 0, S = f.getSliderOffset(a(C[0]), "x"), a(C).each(function(a) {
                                            f.getSliderOffset(this, "x") > S && (S = f.getSliderOffset(this, "x"), Q = a)
                                        }), t = j[c] - M[Q], f.setSliderOffset(a(C)[Q], t), m.splice(0, 0, -1 * t + l), m.splice(m.length - 1, 1), j[c] = -1 * m[0] + l, r[c] = j[c] + x - h, A[c]--
                            } else
                                x = a(E).width(), k > -1 * j[c] + l && (g = -1 * (j[c] + -1 * (P - n - eventX + F) * y - n) * t / y), k < -1 * r[c] && (g = -1 * (r[c] + G + -1 * (P - n - eventX) * y - n) * t / y);
                            f.setSliderOffset(E, -1 * (P - n - eventX - g) * y - n + G);
                            b.scrollbar && (f.showScrollbar(b, v), V = Math.floor((P - eventX - g - j[c] + F) / (r[c] - j[c] + l) * (s - q - u) * y), n = u, k >= -1 * j[c] + F + x ? (n = u - p - -1 * V, f.setSliderOffset(a("." + v), 0), a("." + v).css({width: n + "px"})) : k <= -1 * r[c] + 1 ? (n = s - q - p - V, f.setSliderOffset(a("." + v), V), a("." + v).css({width: n + "px"})) : f.setSliderOffset(a("." + v), V));
                            "touchmove" == d.type && (L = d.touches[0].pageX);
                            d = !1;
                            g = f.calcActiveOffset(b, -1 * (P - eventX - g), m, h, A[c], J, void 0, c);
                            x = (g + A[c] + J) % J;
                            b.infiniteSlider ? x != aa[c] && (d = !0) : g != I[c] && (d = !0);
                            if (d && (I[c] = g, aa[c] = x, la = !0, k = new f.args("change", b, E, a(E).children(":eq(" + x + ")"), x, x), a(B).data("args", k), "" != b.onSlideChange))
                                b.onSlideChange(k)
                        }
                        ga = !1
                    });
                    y = a(window);
                    if (Z || $)
                        y = a(document);
                    a(ma).bind("touchend.iosSliderEvent", function(a) {
                        a = a.originalEvent;
                        if (ea[c] || U || za)
                            return!0;
                        if (0 != a.touches.length)
                            for (var d = 0; d < a.touches.length; d++)
                                a.touches[d].pageX == L && f.slowScrollHorizontal(E, C, g, v, Y, ba, u, h, s, q, p, D, m, M, c, R, J, sa, la, l, b);
                        else
                            f.slowScrollHorizontal(E, C, g, v, Y, ba, u, h, s, q, p, D, m, M, c, R, J, sa, la, l, b);
                        ga = ta = !1
                    });
                    a(y).bind("mouseup.iosSliderEvent" + c, function() {
                        X ? xa.unbind("click.disableClick").bind("click.disableClick", f.preventClick) : xa.unbind("click.disableClick").bind("click.disableClick", f.enableClick);
                        Aa.each(function() {
                            this.onclick = function(b) {
                                if (X)
                                    return!1;
                                a(this).data("onclick").call(this, b || window.event)
                            }
                        });
                        1.8 <= parseFloat(a().jquery) ? qa.each(function() {
                            var b = a._data(this, "events");
                            if (void 0 != b && void 0 != b.click && "iosSliderEvent" != b.click[0].namespace) {
                                if (!X)
                                    return!1;
                                a(this).one("click.disableClick", f.preventClick);
                                var b = a._data(this, "events").click, c = b.pop();
                                b.splice(0, 0, c)
                            }
                        }) : 1.6 <= parseFloat(a().jquery) && qa.each(function() {
                            var b = a(this).data("events");
                            if (void 0 != b && void 0 != b.click && "iosSliderEvent" != b.click[0].namespace) {
                                if (!X)
                                    return!1;
                                a(this).one("click.disableClick", f.preventClick);
                                var b = a(this).data("events").click, c = b.pop();
                                b.splice(0, 0, c)
                            }
                        });
                        if (!va[c]) {
                            if (U)
                                return!0;
                            a(ma).css({cursor: ha});
                            ya = !1;
                            if (void 0 == ra)
                                return!0;
                            f.slowScrollHorizontal(ra, C, g, v, Y, ba, u, h, s, q, p, D, m, M, c, R, J, sa, la, l, b);
                            ra = void 0
                        }
                        ga = ta = !1
                    })
                }
            })
        }, destroy: function(d, g) {
            void 0 == g && (g = this);
            return a(g).each(function() {
                var b = a(this), g = b.data("iosslider");
                if (void 0 == g)
                    return!1;
                void 0 == d && (d = !0);
                f.autoSlidePause(g.sliderNumber);
                va[g.sliderNumber] = !0;
                a(window).unbind(".iosSliderEvent-" + g.sliderNumber);
                a(window).unbind(".iosSliderEvent");
                a(document).unbind(".iosSliderEvent-" + g.sliderNumber);
                a(document).unbind("keydown.iosSliderEvent");
                a(this).unbind(".iosSliderEvent");
                a(this).children(":first-child").unbind(".iosSliderEvent");
                a(this).children(":first-child").children().unbind(".iosSliderEvent");
                d && (a(this).attr("style", ""), a(this).children(":first-child").attr("style", ""), a(this).children(":first-child").children().attr("style", ""), a(g.settings.navSlideSelector).attr("style", ""), a(g.settings.navPrevSelector).attr("style", ""), a(g.settings.navNextSelector).attr("style", ""), a(g.settings.autoSlideToggleSelector).attr("style", ""), a(g.settings.unselectableSelector).attr("style", ""));
                g.settings.scrollbar && a(".scrollbarBlock" + g.sliderNumber).remove();
                for (var g = da[g.sliderNumber], c = 0; c < g.length; c++)
                    clearTimeout(g[c]);
                b.removeData("iosslider");
                b.removeData("args")
            })
        }, update: function(d) {
            void 0 == d && (d = this);
            return a(d).each(function() {
                var d = a(this), b = d.data("iosslider");
                if (void 0 == b)
                    return!1;
                b.settings.startAtSlide = d.data("args").currentSlideNumber;
                S.destroy(!1, this);
                1 != b.numberOfSlides && b.settings.infiniteSlider && (b.settings.startAtSlide = (I[b.sliderNumber] + 1 + A[b.sliderNumber] + b.numberOfSlides) % b.numberOfSlides);
                S.init(b.settings, this);
                d = new f.args("update", b.settings, b.scrollerNode, a(b.scrollerNode).children(":eq(" + (b.settings.startAtSlide - 1) + ")"), b.settings.startAtSlide - 1, b.settings.startAtSlide - 1);
                a(b.stageNode).data("args", d);
                if ("" != b.settings.onSliderUpdate)
                    b.settings.onSliderUpdate(d)
            })
        }, addSlide: function(d, f) {
            return this.each(function() {
                var b = a(this), j = b.data("iosslider");
                if (void 0 == j)
                    return!1;
                0 == a(j.scrollerNode).children().size() ? (a(j.scrollerNode).append(d), b.data("args").currentSlideNumber = 1) : j.settings.infiniteSlider ? (1 == f ? a(j.scrollerNode).children(":eq(0)").before(d) : a(j.scrollerNode).children(":eq(" + (f - 2) + ")").after(d), -1 > A[j.sliderNumber] && I[j.sliderNumber]--, b.data("args").currentSlideNumber >= f && I[j.sliderNumber]++) : (f <= j.numberOfSlides ? a(j.scrollerNode).children(":eq(" + (f - 1) + ")").before(d) : a(j.scrollerNode).children(":eq(" + (f - 2) + ")").after(d), b.data("args").currentSlideNumber >= f && b.data("args").currentSlideNumber++);
                b.data("iosslider").numberOfSlides++;
                S.update(this)
            })
        }, removeSlide: function(d) {
            return this.each(function() {
                var f = a(this).data("iosslider");
                if (void 0 == f)
                    return!1;
                a(f.scrollerNode).children(":eq(" + (d - 1) + ")").remove();
                I[f.sliderNumber] > d - 1 && I[f.sliderNumber]--;
                S.update(this)
            })
        }, goToSlide: function(d, g) {
            void 0 == g && (g = this);
            return a(g).each(function() {
                var b = a(this).data("iosslider");
                if (void 0 == b)
                    return!1;
                d = d > b.childrenOffsets.length ? b.childrenOffsets.length - 1 : d - 1;
                f.changeSlide(d, a(b.scrollerNode), a(b.slideNodes), da[b.sliderNumber], b.scrollbarClass, b.scrollbarWidth, b.stageWidth, b.scrollbarStageWidth, b.scrollMargin, b.scrollBorder, b.originalOffsets, b.childrenOffsets, b.slideNodeOuterWidths, b.sliderNumber, b.infiniteSliderWidth, b.numberOfSlides, b.centeredSlideOffset, b.settings);
                I[b.sliderNumber] = d
            })
        }, lock: function() {
            return this.each(function() {
                var d = a(this).data("iosslider");
                if (void 0 == d)
                    return!1;
                ea[d.sliderNumber] = !0
            })
        }, unlock: function() {
            return this.each(function() {
                var d = a(this).data("iosslider");
                if (void 0 == d)
                    return!1;
                ea[d.sliderNumber] = !1
            })
        }, getData: function() {
            return this.each(function() {
                var d = a(this).data("iosslider");
                return void 0 == d ? !1 : d
            })
        }, autoSlidePause: function() {
            return this.each(function() {
                var d = a(this).data("iosslider");
                if (void 0 == d)
                    return!1;
                f.autoSlidePause(d.sliderNumber);
                return d
            })
        }, autoSlidePlay: function() {
            return this.each(function() {
                var d = a(this).data("iosslider");
                if (void 0 == d)
                    return!1;
                N[d.sliderNumber].autoSlide = !0;
                f.autoSlide(a(d.scrollerNode), a(d.slideNodes), da[d.sliderNumber], d.scrollbarClass, d.scrollbarWidth, d.stageWidth, d.scrollbarStageWidth, d.scrollMargin, d.scrollBorder, d.originalOffsets, d.childrenOffsets, d.slideNodeOuterWidths, d.sliderNumber, d.infiniteSliderWidth, d.numberOfSlides, d.centeredSlideOffset, d.settings);
                return d
            })
        }};
    a.fn.iosSlider = function(d) {
        if (S[d])
            return S[d].apply(this, Array.prototype.slice.call(arguments, 1));
        if ("object" === typeof d || !d)
            return S.init.apply(this, arguments);
        a.error("invalid method call!")
    }
})(jQuery);