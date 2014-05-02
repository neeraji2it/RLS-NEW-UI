/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 3.0.55 (30.06.2013)
 * @requires jQuery v1.7 or later (tested on 2.0)
 * @author ThemePunch
 **************************************************************************/

function revslider_showDoubleJqueryError(e) {
    var t = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    t += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    t += "<br><br> To fix it you can:<br>    1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    t += "<br>    2. Find the double jquery.js include and remove it.";
    t = "<span style='font-size:16px;color:#BC0C06;'>" + t + "</span>";
    jQuery(e).show().html(t)
}
(function(e, t) {
    function n(e) {
        var t = [], n;
        var r = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_");
        for (var i = 0; i < r.length; i++) {
            r[i] = r[i].replace("%3D", "=");
            n = r[i].split("=");
            t.push(n[0]);
            t[n[0]] = n[1]
        }
        return t
    }
    function r(t, n) {
        t.find(".defaultimg").each(function(r) {
            v(e(this), n);
            n.height = Math.round(n.startheight * (n.width / n.startwidth));
            t.height(n.height);
            v(e(this), n);
            try {
                t.parent().find(".tp-bannershadow").css({width: n.width})
            } catch (s) {
            }
            var o = t.find(">ul >li:eq(" + n.act + ") .slotholder");
            var u = t.find(">ul >li:eq(" + n.next + ") .slotholder");
            w(t, n);
            u.find(".defaultimg").css({opacity: 0});
            o.find(".defaultimg").css({opacity: 1});
            E(t, n);
            var a = t.find(">ul >li:eq(" + n.next + ")");
            t.find(".tp-caption").each(function() {
                e(this).stop(true, true)
            });
            M(a, n);
            i(n, t)
        })
    }
    function i(e, t) {
        e.cd = 0;
        if (e.videoplaying != true) {
            var n = t.find(".tp-bannertimer");
            if (n.length > 0) {
                n.stop();
                n.css({width: "0%"});
                n.animate({width: "100%"}, {duration: e.delay - 100, queue: false, easing: "linear"})
            }
            clearTimeout(e.thumbtimer);
            e.thumbtimer = setTimeout(function() {
                a(t);
                d(t, e)
            }, 200)
        }
    }
    function s(e, t) {
        e.cd = 0;
        var n = t.find(".tp-bannertimer");
        if (n.length > 0) {
            n.stop(true, true);
            n.css({width: "0%"})
        }
        clearTimeout(e.thumbtimer)
    }
    function o(e, t) {
        e.cd = 0;
        S(t, e);
        var n = t.find(".tp-bannertimer");
        if (n.length > 0) {
            n.stop();
            n.css({width: "0%"});
            n.animate({width: "100%"}, {duration: e.delay - 100, queue: false, easing: "linear"})
        }
    }
    function u(n, r) {
        var i = n.parent();
        if (r.navigationType == "thumb" || r.navsecond == "both") {
            i.append('<div class="tp-bullets tp-thumbs ' + r.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>')
        }
        var s = i.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");
        var u = s.parent();
        u.width(r.thumbWidth * r.thumbAmount);
        u.height(r.thumbHeight);
        u.parent().width(r.thumbWidth * r.thumbAmount);
        u.parent().height(r.thumbHeight);
        n.find(">ul:first >li").each(function(e) {
            var r = n.find(">ul:first >li:eq(" + e + ")");
            if (r.data("thumb") != t)
                var i = r.data("thumb");
            else
                var i = r.find("img:first").attr("src");
            s.append('<div class="bullet thumb"><img src="' + i + '"></div>');
            var o = s.find(".bullet:first")
        });
        var l = 100;
        s.find(".bullet").each(function(t) {
            var i = e(this);
            if (t == r.slideamount - 1)
                i.addClass("last");
            if (t == 0)
                i.addClass("first");
            i.width(r.thumbWidth);
            i.height(r.thumbHeight);
            if (l > i.outerWidth(true))
                l = i.outerWidth(true);
            i.click(function() {
                if (r.transition == 0 && i.index() != r.act) {
                    r.next = i.index();
                    o(r, n)
                }
            })
        });
        var c = l * n.find(">ul:first >li").length;
        var h = s.parent().width();
        r.thumbWidth = l;
        if (h < c) {
            e(document).mousemove(function(t) {
                e("body").data("mousex", t.pageX)
            });
            s.parent().mouseenter(function() {
                var t = e(this);
                t.addClass("over");
                var r = t.offset();
                var i = e("body").data("mousex") - r.left;
                var s = t.width();
                var o = t.find(".bullet:first").outerWidth(true);
                var u = o * n.find(">ul:first >li").length;
                var a = u - s + 15;
                var l = a / s;
                i = i - 30;
                var c = 0 - i * l;
                if (c > 0)
                    c = 0;
                if (c < 0 - u + s)
                    c = 0 - u + s;
                f(t, c, 200)
            });
            s.parent().mousemove(function() {
                var t = e(this);
                var r = t.offset();
                var i = e("body").data("mousex") - r.left;
                var s = t.width();
                var o = t.find(".bullet:first").outerWidth(true);
                var u = o * n.find(">ul:first >li").length;
                var a = u - s + 15;
                var l = a / s;
                i = i - 30;
                var c = 0 - i * l;
                if (c > 0)
                    c = 0;
                if (c < 0 - u + s)
                    c = 0 - u + s;
                f(t, c, 0)
            });
            s.parent().mouseleave(function() {
                var t = e(this);
                t.removeClass("over");
                a(n)
            })
        }
    }
    function a(e) {
        var t = e.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");
        var n = t.parent();
        var r = n.offset();
        var i = n.find(".bullet:first").outerWidth(true);
        var s = n.find(".bullet.selected").index() * i;
        var o = n.width();
        var i = n.find(".bullet:first").outerWidth(true);
        var u = i * e.find(">ul:first >li").length;
        var a = u - o;
        var l = a / o;
        var c = 0 - s;
        if (c > 0)
            c = 0;
        if (c < 0 - u + o)
            c = 0 - u + o;
        if (!n.hasClass("over")) {
            f(n, c, 200)
        }
    }
    function f(e, t, n) {
        e.stop();
        e.find(".tp-thumbcontainer").animate({left: t + "px"}, {duration: n, queue: false})
    }
    function l(t, n) {
        if (n.navigationType == "bullet" || n.navigationType == "both") {
            t.parent().append('<div class="tp-bullets simplebullets ' + n.navigationStyle + '"></div>')
        }
        var r = t.parent().find(".tp-bullets");
        t.find(">ul:first >li").each(function(e) {
            var n = t.find(">ul:first >li:eq(" + e + ") img:first").attr("src");
            r.append('<div class="bullet"></div>');
            var i = r.find(".bullet:first")
        });
        r.find(".bullet").each(function(r) {
            var i = e(this);
            if (r == n.slideamount - 1)
                i.addClass("last");
            if (r == 0)
                i.addClass("first");
            i.click(function() {
                var e = false;
                if (n.navigationArrows == "withbullet" || n.navigationArrows == "nexttobullets") {
                    if (i.index() - 1 == n.act)
                        e = true
                } else {
                    if (i.index() == n.act)
                        e = true
                }
                if (n.transition == 0 && !e) {
                    if (n.navigationArrows == "withbullet" || n.navigationArrows == "nexttobullets") {
                        n.next = i.index() - 1
                    } else {
                        n.next = i.index()
                    }
                    o(n, t)
                }
            })
        });
        r.append('<div class="tpclear"></div>');
        d(t, n)
    }
    function c(e, n) {
        var r = e.find(".tp-bullets");
        var i = "";
        var s = n.navigationStyle;
        if (n.navigationArrows == "none")
            i = "visibility:none";
        n.soloArrowStyle = "default";
        if (n.navigationArrows != "none" && n.navigationArrows != "nexttobullets")
            s = n.soloArrowStyle;
        e.parent().append('<div style="' + i + '" class="tp-leftarrow tparrows ' + s + '"></div>');
        e.parent().append('<div style="' + i + '" class="tp-rightarrow tparrows ' + s + '"></div>');
        e.parent().find(".tp-rightarrow").click(function() {
            if (n.transition == 0) {
                if (e.data("showus") != t && e.data("showus") != -1)
                    n.next = e.data("showus") - 1;
                else
                    n.next = n.next + 1;
                e.data("showus", -1);
                if (n.next >= n.slideamount)
                    n.next = 0;
                if (n.next < 0)
                    n.next = 0;
                if (n.act != n.next)
                    o(n, e)
            }
        });
        e.parent().find(".tp-leftarrow").click(function() {
            if (n.transition == 0) {
                n.next = n.next - 1;
                n.leftarrowpressed = 1;
                if (n.next < 0)
                    n.next = n.slideamount - 1;
                o(n, e)
            }
        });
        d(e, n)
    }
    function h(e, t) {
        if (t.touchenabled == "on")
            e.swipe({data: e, swipeRight: function() {
                    if (t.transition == 0) {
                        t.next = t.next - 1;
                        t.leftarrowpressed = 1;
                        if (t.next < 0)
                            t.next = t.slideamount - 1;
                        o(t, e)
                    }
                }, swipeLeft: function() {
                    if (t.transition == 0) {
                        t.next = t.next + 1;
                        if (t.next == t.slideamount)
                            t.next = 0;
                        o(t, e)
                    }
                }, allowPageScroll: "auto"})
    }
    function p(e, t) {
        var n = e.parent().find(".tp-bullets");
        var r = e.parent().find(".tparrows");
        if (n == null) {
            e.append('<div class=".tp-bullets"></div>');
            var n = e.parent().find(".tp-bullets")
        }
        if (r == null) {
            e.append('<div class=".tparrows"></div>');
            var r = e.parent().find(".tparrows")
        }
        e.data("hidethumbs", t.hideThumbs);
        n.addClass("hidebullets");
        r.addClass("hidearrows");
        n.hover(function() {
            n.addClass("hovered");
            clearTimeout(e.data("hidethumbs"));
            n.removeClass("hidebullets");
            r.removeClass("hidearrows")
        }, function() {
            n.removeClass("hovered");
            if (!e.hasClass("hovered") && !n.hasClass("hovered"))
                e.data("hidethumbs", setTimeout(function() {
                    n.addClass("hidebullets");
                    r.addClass("hidearrows")
                }, t.hideThumbs))
        });
        r.hover(function() {
            n.addClass("hovered");
            clearTimeout(e.data("hidethumbs"));
            n.removeClass("hidebullets");
            r.removeClass("hidearrows")
        }, function() {
            n.removeClass("hovered")
        });
        e.on("mouseenter", function() {
            e.addClass("hovered");
            clearTimeout(e.data("hidethumbs"));
            n.removeClass("hidebullets");
            r.removeClass("hidearrows")
        });
        e.on("mouseleave", function() {
            e.removeClass("hovered");
            if (!e.hasClass("hovered") && !n.hasClass("hovered"))
                e.data("hidethumbs", setTimeout(function() {
                    n.addClass("hidebullets");
                    r.addClass("hidearrows")
                }, t.hideThumbs))
        })
    }
    function d(e, t) {
        var n = e.parent();
        var r = n.find(".tp-bullets");
        var i = n.find(".tp-leftarrow");
        var s = n.find(".tp-rightarrow");
        if (t.navigationType == "thumb" && t.navigationArrows == "nexttobullets")
            t.navigationArrows = "solo";
        if (t.navigationArrows == "nexttobullets") {
            i.prependTo(r).css({"float": "left"});
            s.insertBefore(r.find(".tpclear")).css({"float": "left"})
        }
        if (t.navigationArrows != "none" && t.navigationArrows != "nexttobullets") {
            i.css({position: "absolute"});
            s.css({position: "absolute"});
            if (t.soloArrowLeftValign == "center")
                i.css({top: "50%", marginTop: t.soloArrowLeftVOffset - Math.round(i.innerHeight() / 2) + "px"});
            if (t.soloArrowLeftValign == "bottom")
                i.css({bottom: 0 + t.soloArrowLeftVOffset + "px"});
            if (t.soloArrowLeftValign == "top")
                i.css({top: 0 + t.soloArrowLeftVOffset + "px"});
            if (t.soloArrowLeftHalign == "center")
                i.css({left: "50%", marginLeft: t.soloArrowLeftHOffset - Math.round(i.innerWidth() / 2) + "px"});
            if (t.soloArrowLeftHalign == "left")
                i.css({left: 0 + t.soloArrowLeftHOffset + "px"});
            if (t.soloArrowLeftHalign == "right")
                i.css({right: 0 + t.soloArrowLeftHOffset + "px"});
            if (t.soloArrowRightValign == "center")
                s.css({top: "50%", marginTop: t.soloArrowRightVOffset - Math.round(s.innerHeight() / 2) + "px"});
            if (t.soloArrowRightValign == "bottom")
                s.css({bottom: 0 + t.soloArrowRightVOffset + "px"});
            if (t.soloArrowRightValign == "top")
                s.css({top: 0 + t.soloArrowRightVOffset + "px"});
            if (t.soloArrowRightHalign == "center")
                s.css({left: "50%", marginLeft: t.soloArrowRightHOffset - Math.round(s.innerWidth() / 2) + "px"});
            if (t.soloArrowRightHalign == "left")
                s.css({left: 0 + t.soloArrowRightHOffset + "px"});
            if (t.soloArrowRightHalign == "right")
                s.css({right: 0 + t.soloArrowRightHOffset + "px"});
            if (i.position() != null)
                i.css({top: Math.round(parseInt(i.position().top, 0)) + "px"});
            if (s.position() != null)
                s.css({top: Math.round(parseInt(s.position().top, 0)) + "px"})
        }
        if (t.navigationArrows == "none") {
            i.css({visibility: "hidden"});
            s.css({visibility: "hidden"})
        }
        if (t.navigationVAlign == "center")
            r.css({top: "50%", marginTop: t.navigationVOffset - Math.round(r.innerHeight() / 2) + "px"});
        if (t.navigationVAlign == "bottom")
            r.css({bottom: 0 + t.navigationVOffset + "px"});
        if (t.navigationVAlign == "top")
            r.css({top: 0 + t.navigationVOffset + "px"});
        if (t.navigationHAlign == "center")
            r.css({left: "50%", marginLeft: t.navigationHOffset - Math.round(r.innerWidth() / 2) + "px"});
        if (t.navigationHAlign == "left")
            r.css({left: 0 + t.navigationHOffset + "px"});
        if (t.navigationHAlign == "right")
            r.css({right: 0 + t.navigationHOffset + "px"})
    }
    function v(n, r) {
        r.width = parseInt(r.container.width(), 0);
        r.height = parseInt(r.container.height(), 0);
        r.bw = r.width / r.startwidth;
        if (r.fullScreen == "on") {
            r.height = r.bw * r.startheight
        }
        r.bh = r.height / r.startheight;
        if (r.bh > 1) {
            r.bh = 1;
            r.bw = 1
        }
        if (n.data("lazyload") != t && n.data("lazydone") == 1 || n.data("lazyload") === t) {
            if (n.data("orgw") != t && n.data("orgw") != 0) {
                n.width(n.data("orgw"));
                n.height(n.data("orgh"))
            }
        }
        var i = r.width / n.width();
        var s = r.height / n.height();
        r.fw = i;
        r.fh = s;
        if (n.data("lazyload") != t && n.data("lazydone") == 1 || n.data("lazyload") === t) {
            if (n.data("orgw") == t || n.data("orgw") == 0) {
                n.data("orgw", n.width());
                n.data("orgh", n.height())
            }
        }
        if (r.fullWidth == "on" && r.fullScreen != "on") {
            var o = r.container.parent().width();
            var u = r.container.parent().height();
            var a = u / n.data("orgh");
            var f = o / n.data("orgw");
            if (n.data("lazyload") != t && n.data("lazydone") == 1 || n.data("lazyload") === t) {
                n.width(n.width() * a);
                n.height(u)
            }
            if (n.width() < o) {
                n.width(o + 50);
                var f = n.width() / n.data("orgw");
                n.height(n.data("orgh") * f)
            }
            if (n.width() > o) {
                n.data("fxof", o / 2 - n.width() / 2);
                n.css({position: "absolute", left: n.data("fxof") + "px"})
            }
            if (n.height() <= u) {
                n.data("fyof", 0);
                n.data("fxof", o / 2 - n.width() / 2);
                n.css({position: "absolute", top: n.data("fyof") + "px", left: n.data("fxof") + "px"})
            }
            if (n.height() > u && n.data("fullwidthcentering") == "on") {
                n.data("fyof", u / 2 - n.height() / 2);
                n.data("fxof", o / 2 - n.width() / 2);
                n.css({position: "absolute", top: n.data("fyof") + "px", left: n.data("fxof") + "px"})
            }
        } else if (r.fullScreen == "on") {
            var o = r.container.parent().width();
            var u = e(window).height();
            var l = u / 2 - r.startheight * r.bh / 2;
            if (l < 0)
                u = r.startheight * r.bh;
            if (r.fullScreenOffsetContainer != t) {
                try {
                    u = u - e(r.fullScreenOffsetContainer).outerHeight(true)
                } catch (c) {
                }
            }
            r.container.parent().height(u);
            r.container.css({height: "100%"});
            r.height = u;
            var a = u / n.data("orgh");
            var f = o / n.data("orgw");
            if (n.data("lazyload") != t && n.data("lazydone") == 1 || n.data("lazyload") === t) {
                n.width(n.width() * a);
                n.height(u)
            }
            if (n.width() < o) {
                n.width(o + 50);
                var f = n.width() / n.data("orgw");
                n.height(n.data("orgh") * f)
            }
            if (n.width() > o) {
                n.data("fxof", o / 2 - n.width() / 2);
                n.css({position: "absolute", left: n.data("fxof") + "px"})
            }
            if (n.height() <= u) {
                n.data("fyof", 0);
                n.data("fxof", o / 2 - n.width() / 2);
                n.css({position: "absolute", top: n.data("fyof") + "px", left: n.data("fxof") + "px"})
            }
            if (n.height() > u && n.data("fullwidthcentering") == "on") {
                n.data("fyof", u / 2 - n.height() / 2);
                n.data("fxof", o / 2 - n.width() / 2);
                n.css({position: "absolute", top: n.data("fyof") + "px", left: n.data("fxof") + "px"})
            }
        } else {
            if (n.data("lazyload") != t && n.data("lazydone") == 1 || n.data("lazyload") === t) {
                n.width(r.width);
                n.height(n.height() * i)
            }
            if (n.height() < r.height && n.height() != 0 && n.height() != null) {
                if (n.data("lazyload") != t && n.data("lazydone") == 1 || n.data("lazyload") === t) {
                    n.height(r.height);
                    n.width(n.data("orgw") * s)
                }
            }
        }
        n.data("neww", n.width());
        n.data("newh", n.height());
        if (r.fullWidth == "on") {
            r.slotw = Math.ceil(n.width() / r.slots)
        } else {
            r.slotw = Math.ceil(r.width / r.slots)
        }
        if (r.fullSreen == "on")
            r.sloth = Math.ceil(e(window).height() / r.slots);
        else
            r.sloth = Math.ceil(r.height / r.slots)
    }
    function m(n, r) {
        n.find(".tp-caption").each(function() {
            e(this).addClass(e(this).data("transition"));
            e(this).addClass("start")
        });
        n.find(">ul:first").css({overflow: "hidden", width: "100%", height: "100%", maxHeight: n.parent().css("maxHeight")});
        n.find(">ul:first >li").each(function(n) {
            var r = e(this);
            r.css({width: "100%", height: "100%", overflow: "hidden"});
            if (r.data("link") != t) {
                var i = r.data("link");
                var s = "_self";
                var o = 2;
                if (r.data("slideindex") == "back")
                    o = 0;
                var u = r.data("linktoslide");
                if (r.data("target") != t)
                    s = r.data("target");
                if (i == "slide") {
                    r.append('<div class="tp-caption sft slidelink" style="z-index:' + o + ';" data-x="0" data-y="0" data-linktoslide="' + u + '" data-start="0"><a><div></div></a></div>')
                } else {
                    u = "no";
                    r.append('<div class="tp-caption sft slidelink" style="z-index:' + o + ';" data-x="0" data-y="0" data-linktoslide="' + u + '" data-start="0"><a target="' + s + '" href="' + i + '"><div></div></a></div>')
                }
            }
        });
        n.parent().css({overflow: "visible"});
        n.find(">ul:first >li >img").each(function(n) {
            var i = e(this);
            i.addClass("defaultimg");
            if (i.data("lazyload") != t && i.data("lazydone") != 1) {
            } else {
                v(i, r);
                v(i, r)
            }
            i.wrap('<div class="slotholder"></div>');
            i.css({opacity: 0});
            i.data("li-id", n)
        })
    }
    function g(e, n, r) {
        var i = e;
        var s = i.find("img");
        v(s, n);
        var o = s.attr("src");
        var u = s.css("background-color");
        var a = s.data("neww");
        var f = s.data("newh");
        var l = s.data("fxof");
        if (l == t)
            l = 0;
        var c = s.data("fyof");
        if (s.data("fullwidthcentering") != "on" || c == t)
            c = 0;
        var h = 0;
        if (!r)
            var h = 0 - n.slotw;
        for (var p = 0; p < n.slots; p++)
            i.append('<div class="slot" style="position:absolute;top:' + (0 + c) + "px;left:" + (l + p * n.slotw) + "px;overflow:hidden;width:" + n.slotw + "px;height:" + f + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + h + "px;width:" + n.slotw + "px;height:" + f + 'px;overflow:hidden;"><img style="background-color:' + u + ";position:absolute;top:0px;left:" + (0 - p * n.slotw) + "px;width:" + a + "px;height:" + f + 'px" src="' + o + '"></div></div>')
    }
    function y(e, n, r) {
        var i = e;
        var s = i.find("img");
        v(s, n);
        var o = s.attr("src");
        var u = s.css("background-color");
        var a = s.data("neww");
        var f = s.data("newh");
        var l = s.data("fxof");
        if (l == t)
            l = 0;
        var c = s.data("fyof");
        if (s.data("fullwidthcentering") != "on" || c == t)
            c = 0;
        var h = 0;
        if (!r)
            var h = 0 - n.sloth;
        for (var p = 0; p < n.slots + 2; p++)
            i.append('<div class="slot" style="position:absolute;' + "top:" + (c + p * n.sloth) + "px;" + "left:" + l + "px;" + "overflow:hidden;" + "width:" + a + "px;" + "height:" + n.sloth + 'px"' + '><div class="slotslide" style="position:absolute;' + "top:" + h + "px;" + "left:0px;width:" + a + "px;" + "height:" + n.sloth + "px;" + 'overflow:hidden;"><img style="position:absolute;' + "background-color:" + u + ";" + "top:" + (0 - p * n.sloth) + "px;" + "left:0px;width:" + a + "px;" + "height:" + f + 'px" src="' + o + '"></div></div>')
    }
    function b(e, n, r) {
        var i = e;
        var s = i.find("img");
        v(s, n);
        var o = s.attr("src");
        var u = s.css("background-color");
        var a = s.data("neww");
        var f = s.data("newh");
        var l = s.data("fxof");
        if (l == t)
            l = 0;
        var c = s.data("fyof");
        if (s.data("fullwidthcentering") != "on" || c == t)
            c = 0;
        var h = 0;
        var p = 0;
        if (n.sloth > n.slotw)
            p = n.sloth;
        else
            p = n.slotw;
        if (!r) {
            var h = 0 - p
        }
        n.slotw = p;
        n.sloth = p;
        var d = 0;
        var m = 0;
        for (var g = 0; g < n.slots; g++) {
            m = 0;
            for (var y = 0; y < n.slots; y++) {
                i.append('<div class="slot" ' + 'style="position:absolute;' + "top:" + (c + m) + "px;" + "left:" + (l + d) + "px;" + "width:" + p + "px;" + "height:" + p + "px;" + 'overflow:hidden;">' + '<div class="slotslide" data-x="' + d + '" data-y="' + m + '" ' + 'style="position:absolute;' + "top:" + 0 + "px;" + "left:" + 0 + "px;" + "width:" + p + "px;" + "height:" + p + "px;" + 'overflow:hidden;">' + '<img style="position:absolute;' + "top:" + (0 - m) + "px;" + "left:" + (0 - d) + "px;" + "width:" + a + "px;" + "height:" + f + "px" + "background-color:" + u + ';"' + 'src="' + o + '"></div></div>');
                m = m + p
            }
            d = d + p
        }
    }
    function w(n, r, i) {
        if (i == t)
            i == 80;
        setTimeout(function() {
            n.find(".slotholder .slot").each(function() {
                clearTimeout(e(this).data("tout"));
                e(this).remove()
            });
            r.transition = 0
        }, i)
    }
    function E(e, t) {
        var n = e.find(">li:eq(" + t.act + ")");
        var r = e.find(">li:eq(" + t.next + ")");
        var i = r.find(".tp-caption");
        if (i.find("iframe") == 0) {
            if (i.hasClass("hcenter"))
                i.css({height: t.height + "px", top: "0px", left: t.width / 2 - i.outerWidth() / 2 + "px"});
            else if (i.hasClass("vcenter"))
                i.css({width: t.width + "px", left: "0px", top: t.height / 2 - i.outerHeight() / 2 + "px"})
        }
    }
    function S(e, n) {
        try {
            var r = e.find(">ul:first-child >li:eq(" + n.act + ")")
        } catch (o) {
            var r = e.find(">ul:first-child >li:eq(1)")
        }
        n.lastslide = n.act;
        var u = e.find(">ul:first-child >li:eq(" + n.next + ")");
        var a = u.find(".defaultimg");
        if (a.data("lazyload") != t && a.data("lazydone") != 1) {
            a.attr("src", u.find(".defaultimg").data("lazyload")), a.data("lazydone", 1);
            a.data("orgw", 0);
            e.find(".tp-loader").css({display: "block"}).transition({opacity: 1, duration: 300});
            setTimeout(function() {
                s(n, e)
            }, 180);
            u.waitForImages(function() {
                setTimeout(function() {
                    i(n, e)
                }, 190);
                v(a, n);
                d(e, n);
                v(a, n);
                x(e, n);
                e.find(".tp-loader").transition({opacity: 0, duration: 300});
                setTimeout(function() {
                    e.find(".tp-loader").css({display: "none"})
                }, 2200)
            })
        } else {
            x(e, n)
        }
    }
    function x(n, r) {
        n.trigger("revolution.slide.onbeforeswap");
        r.transition = 1;
        r.videoplaying = false;
        try {
            var i = n.find(">ul:first-child >li:eq(" + r.act + ")")
        } catch (s) {
            var i = n.find(">ul:first-child >li:eq(1)")
        }
        r.lastslide = r.act;
        var o = n.find(">ul:first-child >li:eq(" + r.next + ")");
        var u = i.find(".slotholder");
        var f = o.find(".slotholder");
        i.css({visibility: "visible"});
        o.css({visibility: "visible"});
        if (r.ie) {
            if (p == "boxfade")
                p = "boxslide";
            if (p == "slotfade-vertical")
                p = "slotzoom-vertical";
            if (p == "slotfade-horizontal")
                p = "slotzoom-horizontal"
        }
        if (o.data("delay") != t) {
            r.cd = 0;
            r.delay = o.data("delay")
        } else {
            r.delay = r.origcd
        }
        i.css({left: "0px", top: "0px"});
        o.css({left: "0px", top: "0px"});
        if (o.data("differentissplayed") == "prepared") {
            o.data("differentissplayed", "done");
            o.data("transition", o.data("savedtransition"));
            o.data("slotamount", o.data("savedslotamount"));
            o.data("masterspeed", o.data("savedmasterspeed"))
        }
        if (o.data("fstransition") != t && o.data("differentissplayed") != "done") {
            o.data("savedtransition", o.data("transition"));
            o.data("savedslotamount", o.data("slotamount"));
            o.data("savedmasterspeed", o.data("masterspeed"));
            o.data("transition", o.data("fstransition"));
            o.data("slotamount", o.data("fsslotamount"));
            o.data("masterspeed", o.data("fsmasterspeed"));
            o.data("differentissplayed", "prepared")
        }
        var l = 0;
        var c = o.data("transition").split(",");
        var h = o.data("nexttransid");
        if (h == t) {
            h = 0;
            o.data("nexttransid", h)
        } else {
            h = h + 1;
            if (h == c.length)
                h = 0;
            o.data("nexttransid", h)
        }
        var p = c[h];
        if (p == "boxslide")
            l = 0;
        else if (p == "boxfade")
            l = 1;
        else if (p == "slotslide-horizontal")
            l = 2;
        else if (p == "slotslide-vertical")
            l = 3;
        else if (p == "curtain-1")
            l = 4;
        else if (p == "curtain-2")
            l = 5;
        else if (p == "curtain-3")
            l = 6;
        else if (p == "slotzoom-horizontal")
            l = 7;
        else if (p == "slotzoom-vertical")
            l = 8;
        else if (p == "slotfade-horizontal")
            l = 9;
        else if (p == "slotfade-vertical")
            l = 10;
        else if (p == "fade")
            l = 11;
        else if (p == "slideleft")
            l = 12;
        else if (p == "slideup")
            l = 13;
        else if (p == "slidedown")
            l = 14;
        else if (p == "slideright")
            l = 15;
        else if (p == "papercut")
            l = 16;
        else if (p == "3dcurtain-horizontal")
            l = 17;
        else if (p == "3dcurtain-vertical")
            l = 18;
        else if (p == "cubic" || p == "cube")
            l = 19;
        else if (p == "flyin")
            l = 20;
        else if (p == "turnoff")
            l = 21;
        else {
            l = Math.round(Math.random() * 21);
            o.data("slotamount", Math.round(Math.random() * 12 + 4))
        }
        if (p == "random-static") {
            l = Math.round(Math.random() * 16);
            if (l > 15)
                l = 15;
            if (l < 0)
                l = 0
        }
        if (p == "random-premium") {
            l = Math.round(Math.random() * 6 + 16);
            if (l > 21)
                l = 21;
            if (l < 16)
                l = 16
        }
        var d = -1;
        if (r.leftarrowpressed == 1 || r.act > r.next)
            d = 1;
        if (p == "slidehorizontal") {
            l = 12;
            if (r.leftarrowpressed == 1)
                l = 15
        }
        if (p == "slidevertical") {
            l = 13;
            if (r.leftarrowpressed == 1)
                l = 14
        }
        r.leftarrowpressed = 0;
        if (l > 21)
            l = 21;
        if (l < 0)
            l = 0;
        if ((r.ie || r.ie9) && l > 18) {
            l = Math.round(Math.random() * 16);
            o.data("slotamount", Math.round(Math.random() * 12 + 4))
        }
        if (r.ie && (l == 17 || l == 16 || l == 2 || l == 3 || l == 9 || l == 10))
            l = Math.round(Math.random() * 3 + 12);
        if (r.ie9 && l == 3)
            l = 4;
        var v = 300;
        if (o.data("masterspeed") != t && o.data("masterspeed") > 99 && o.data("masterspeed") < 4001)
            v = o.data("masterspeed");
        n.parent().find(".bullet").each(function() {
            var t = e(this);
            t.removeClass("selected");
            if (r.navigationArrows == "withbullet" || r.navigationArrows == "nexttobullets") {
                if (t.index() - 1 == r.next)
                    t.addClass("selected")
            } else {
                if (t.index() == r.next)
                    t.addClass("selected")
            }
        });
        n.find(">li").each(function() {
            var t = e(this);
            if (t.index != r.act && t.index != r.next)
                t.css({"z-index": 16})
        });
        i.css({"z-index": 18});
        o.css({"z-index": 20});
        o.css({opacity: 0});
        if (i.index() != o.index()) {
            D(i, r)
        }
        M(o, r);
        if (o.data("slotamount") == t || o.data("slotamount") < 1) {
            r.slots = Math.round(Math.random() * 12 + 4);
            if (p == "boxslide")
                r.slots = Math.round(Math.random() * 6 + 3)
        } else {
            r.slots = o.data("slotamount")
        }
        if (o.data("rotate") == t)
            r.rotate = 0;
        else if (o.data("rotate") == 999)
            r.rotate = Math.round(Math.random() * 360);
        else
            r.rotate = o.data("rotate");
        if (!e.support.transition || r.ie || r.ie9)
            r.rotate = 0;
        if (r.firststart == 1) {
            i.css({opacity: 0});
            r.firststart = 0
        }
        if (l == 0) {
            v = v + 100;
            if (r.slots > 10)
                r.slots = 10;
            o.css({opacity: 1});
            b(u, r, true);
            b(f, r, false);
            f.find(".defaultimg").css({opacity: 0});
            f.find(".slotslide").each(function(t) {
                var s = e(this);
                if (r.ie9)
                    s.transition({top: 0 - r.sloth, left: 0 - r.slotw}, 0);
                else
                    s.transition({top: 0 - r.sloth, left: 0 - r.slotw, rotate: r.rotate}, 0);
                setTimeout(function() {
                    s.transition({top: 0, left: 0, scale: 1, rotate: 0}, v * 1.5, function() {
                        if (t == r.slots * r.slots - 1) {
                            w(n, r);
                            f.find(".defaultimg").css({opacity: 1});
                            if (o.index() != i.index())
                                u.find(".defaultimg").css({opacity: 0});
                            r.act = r.next;
                            a(n)
                        }
                    })
                }, t * 15)
            })
        }
        if (l == 1) {
            if (r.slots > 5)
                r.slots = 5;
            o.css({opacity: 1});
            b(f, r, false);
            f.find(".defaultimg").css({opacity: 0});
            f.find(".slotslide").each(function(t) {
                var s = e(this);
                s.css({opacity: 0});
                s.find("img").css({opacity: 0});
                if (r.ie9)
                    s.find("img").transition({top: Math.random() * r.slotw - r.slotw + "px", left: Math.random() * r.slotw - r.slotw + "px"}, 0);
                else
                    s.find("img").transition({top: Math.random() * r.slotw - r.slotw + "px", left: Math.random() * r.slotw - r.slotw + "px", rotate: r.rotate}, 0);
                var l = Math.random() * 1e3 + (v + 200);
                if (t == r.slots * r.slots - 1)
                    l = 1500;
                s.find("img").transition({opacity: 1, top: 0 - s.data("y") + "px", left: 0 - s.data("x") + "px", rotate: 0}, l);
                s.transition({opacity: 1}, l, function() {
                    if (t == r.slots * r.slots - 1) {
                        w(n, r);
                        f.find(".defaultimg").css({opacity: 1});
                        if (o.index() != i.index())
                            u.find(".defaultimg").css({opacity: 0});
                        r.act = r.next;
                        a(n)
                    }
                })
            })
        }
        if (l == 2) {
            v = v + 200;
            o.css({opacity: 1});
            g(u, r, true);
            g(f, r, false);
            f.find(".defaultimg").css({opacity: 0});
            u.find(".slotslide").each(function() {
                var t = e(this);
                t.transit({left: r.slotw + "px", rotate: 0 - r.rotate}, v, function() {
                    w(n, r);
                    f.find(".defaultimg").css({opacity: 1});
                    if (o.index() != i.index())
                        u.find(".defaultimg").css({opacity: 0});
                    r.act = r.next;
                    a(n)
                })
            });
            f.find(".slotslide").each(function() {
                var t = e(this);
                if (r.ie9)
                    t.transit({left: 0 - r.slotw + "px"}, 0);
                else
                    t.transit({left: 0 - r.slotw + "px", rotate: r.rotate}, 0);
                t.transit({left: "0px", rotate: 0}, v, function() {
                    w(n, r);
                    f.find(".defaultimg").css({opacity: 1});
                    if (o.index() != i.index())
                        u.find(".defaultimg").css({opacity: 0});
                    if (r.ie)
                        u.find(".defaultimg").css({opacity: 1});
                    r.act = r.next;
                    a(n)
                })
            })
        }
        if (l == 3) {
            v = v + 200;
            o.css({opacity: 1});
            y(u, r, true);
            y(f, r, false);
            f.find(".defaultimg").css({opacity: 0});
            u.find(".slotslide").each(function() {
                var t = e(this);
                t.transit({top: r.sloth + "px", rotate: r.rotate}, v, function() {
                    w(n, r);
                    f.find(".defaultimg").css({opacity: 1});
                    if (o.index() != i.index())
                        u.find(".defaultimg").css({opacity: 0});
                    r.act = r.next;
                    a(n)
                })
            });
            f.find(".slotslide").each(function() {
                var t = e(this);
                if (r.ie9)
                    t.transit({top: 0 - r.sloth + "px"}, 0);
                else
                    t.transit({top: 0 - r.sloth + "px", rotate: r.rotate}, 0);
                t.transit({top: "0px", rotate: 0}, v, function() {
                    w(n, r);
                    f.find(".defaultimg").css({opacity: 1});
                    if (o.index() != i.index())
                        u.find(".defaultimg").css({opacity: 0});
                    r.act = r.next;
                    a(n)
                })
            })
        }
        if (l == 4) {
            o.css({opacity: 1});
            g(u, r, true);
            g(f, r, true);
            f.find(".defaultimg").css({opacity: 0});
            u.find(".defaultimg").css({opacity: 0});
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                n.transit({top: 0 + r.height + "px", opacity: 1, rotate: r.rotate}, v + t * (70 - r.slots))
            });
            f.find(".slotslide").each(function(t) {
                var s = e(this);
                if (r.ie9)
                    s.transition({top: 0 - r.height + "px", opacity: 0}, 0);
                else
                    s.transition({top: 0 - r.height + "px", opacity: 0, rotate: r.rotate}, 0);
                s.transition({top: "0px", opacity: 1, rotate: 0}, v + t * (70 - r.slots), function() {
                    if (t == r.slots - 1) {
                        w(n, r);
                        f.find(".defaultimg").css({opacity: 1});
                        if (o.index() != i.index())
                            u.find(".defaultimg").css({opacity: 0});
                        r.act = r.next;
                        a(n)
                    }
                })
            })
        }
        if (l == 5) {
            o.css({opacity: 1});
            g(u, r, true);
            g(f, r, true);
            f.find(".defaultimg").css({opacity: 0});
            u.find(".defaultimg").css({opacity: 0});
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                n.transition({top: 0 + r.height + "px", opacity: 1, rotate: r.rotate}, v + (r.slots - t) * (70 - r.slots))
            });
            f.find(".slotslide").each(function(t) {
                var s = e(this);
                if (r.ie9)
                    s.transition({top: 0 - r.height + "px", opacity: 0}, 0);
                else
                    s.transition({top: 0 - r.height + "px", opacity: 0, rotate: r.rotate}, 0);
                s.transition({top: "0px", opacity: 1, rotate: 0}, v + (r.slots - t) * (70 - r.slots), function() {
                    if (t == 0) {
                        w(n, r);
                        f.find(".defaultimg").css({opacity: 1});
                        if (o.index() != i.index())
                            u.find(".defaultimg").css({opacity: 0});
                        r.act = r.next;
                        a(n)
                    }
                })
            })
        }
        if (l == 6) {
            o.css({opacity: 1});
            if (r.slots < 2)
                r.slots = 2;
            g(u, r, true);
            g(f, r, true);
            f.find(".defaultimg").css({opacity: 0});
            u.find(".defaultimg").css({opacity: 0});
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                if (t < r.slots / 2)
                    var i = (t + 2) * 60;
                else
                    var i = (2 + r.slots - t) * 60;
                n.transition({top: 0 + r.height + "px", opacity: 1}, v + i)
            });
            f.find(".slotslide").each(function(t) {
                var s = e(this);
                if (r.ie9)
                    s.transition({top: 0 - r.height + "px", opacity: 0}, 0);
                else
                    s.transition({top: 0 - r.height + "px", opacity: 0, rotate: r.rotate}, 0);
                if (t < r.slots / 2)
                    var l = (t + 2) * 60;
                else
                    var l = (2 + r.slots - t) * 60;
                s.transition({top: "0px", opacity: 1, rotate: 0}, v + l, function() {
                    if (t == Math.round(r.slots / 2)) {
                        w(n, r);
                        f.find(".defaultimg").css({opacity: 1});
                        if (o.index() != i.index())
                            u.find(".defaultimg").css({opacity: 0});
                        r.act = r.next;
                        a(n)
                    }
                })
            })
        }
        if (l == 7) {
            v = v * 3;
            o.css({opacity: 1});
            g(u, r, true);
            g(f, r, true);
            f.find(".defaultimg").css({opacity: 0});
            u.find(".slotslide").each(function() {
                var t = e(this).find("img");
                t.transition({left: 0 - r.slotw / 2 + "px", top: 0 - r.height / 2 + "px", width: r.slotw * 2 + "px", height: r.height * 2 + "px", opacity: 0, rotate: r.rotate}, v, function() {
                    w(n, r);
                    f.find(".defaultimg").css({opacity: 1});
                    if (o.index() != i.index())
                        u.find(".defaultimg").css({opacity: 0});
                    r.act = r.next;
                    a(n)
                })
            });
            /						/;
            f.find(".slotslide").each(function(t) {
                var s = e(this).find("img");
                if (r.ie9)
                    s.transition({left: 0 + "px", top: 0 + "px", opacity: 0}, 0);
                else
                    s.transition({left: 0 + "px", top: 0 + "px", opacity: 0, rotate: r.rotate}, 0);
                s.transition({left: 0 - t * r.slotw + "px", top: 0 + "px", width: f.find(".defaultimg").data("neww") + "px", height: f.find(".defaultimg").data("newh") + "px", opacity: 1, rotate: 0}, v, function() {
                    w(n, r);
                    f.find(".defaultimg").css({opacity: 1});
                    if (o.index() != i.index())
                        u.find(".defaultimg").css({opacity: 0});
                    r.act = r.next;
                    a(n)
                })
            })
        }
        if (l == 8) {
            v = v * 3;
            o.css({opacity: 1});
            y(u, r, true);
            y(f, r, true);
            f.find(".defaultimg").css({opacity: 0});
            u.find(".slotslide").each(function() {
                var t = e(this).find("img");
                t.transition({left: 0 - r.width / 2 + "px", top: 0 - r.sloth / 2 + "px", width: r.width * 2 + "px", height: r.sloth * 2 + "px", opacity: 0, rotate: r.rotate}, v, function() {
                    w(n, r);
                    f.find(".defaultimg").css({opacity: 1});
                    if (o.index() != i.index())
                        u.find(".defaultimg").css({opacity: 0});
                    r.act = r.next;
                    a(n)
                })
            });
            f.find(".slotslide").each(function(t) {
                var s = e(this).find("img");
                if (r.ie9)
                    s.transition({left: 0 + "px", top: 0 + "px", opacity: 0}, 0);
                else
                    s.transition({left: 0 + "px", top: 0 + "px", opacity: 0, rotate: r.rotate}, 0);
                s.transition({left: 0 + "px", top: 0 - t * r.sloth + "px", width: f.find(".defaultimg").data("neww") + "px", height: f.find(".defaultimg").data("newh") + "px", opacity: 1, rotate: 0}, v, function() {
                    w(n, r);
                    f.find(".defaultimg").css({opacity: 1});
                    if (o.index() != i.index())
                        u.find(".defaultimg").css({opacity: 0});
                    r.act = r.next;
                    a(n)
                })
            })
        }
        if (l == 9) {
            o.css({opacity: 1});
            r.slots = r.width / 20;
            g(f, r, true);
            f.find(".defaultimg").css({opacity: 0});
            var m = 0;
            f.find(".slotslide").each(function(t) {
                var n = e(this);
                m++;
                n.transition({opacity: 0, x: 0, y: 0}, 0);
                n.data("tout", setTimeout(function() {
                    n.transition({x: 0, y: 0, opacity: 1}, v)
                }, t * 4))
            });
            setTimeout(function() {
                w(n, r);
                f.find(".defaultimg").css({opacity: 1});
                if (o.index() != i.index())
                    u.find(".defaultimg").css({opacity: 0});
                if (r.ie)
                    u.find(".defaultimg").css({opacity: 1});
                r.act = r.next;
                a(n)
            }, v + m * 4)
        }
        if (l == 10) {
            o.css({opacity: 1});
            r.slots = r.height / 20;
            y(f, r, true);
            f.find(".defaultimg").css({opacity: 0});
            var m = 0;
            f.find(".slotslide").each(function(t) {
                var n = e(this);
                m++;
                n.transition({opacity: 0, x: 0, y: 0}, 0);
                n.data("tout", setTimeout(function() {
                    n.transition({x: 0, y: 0, opacity: 1}, v)
                }, t * 4))
            });
            setTimeout(function() {
                w(n, r);
                f.find(".defaultimg").css({opacity: 1});
                if (o.index() != i.index())
                    u.find(".defaultimg").css({opacity: 0});
                if (r.ie)
                    u.find(".defaultimg").css({opacity: 1});
                r.act = r.next;
                a(n)
            }, v + m * 4)
        }
        if (l == 11) {
            o.css({opacity: 1});
            r.slots = 1;
            g(f, r, true);
            f.find(".defaultimg").css({opacity: 0, position: "relative"});
            var m = 0;
            f.find(".slotslide").each(function(t) {
                var n = e(this);
                m++;
                if (r.ie9 || r.ie) {
                    if (r.ie)
                        o.css({opacity: "0"});
                    n.css({opacity: 0})
                } else
                    n.transition({opacity: 0, rotate: r.rotate}, 0);
                setTimeout(function() {
                    if (r.ie9 || r.ie) {
                        if (r.ie)
                            o.animate({opacity: 1}, {duration: v});
                        else
                            n.transition({opacity: 1}, v)
                    } else {
                        n.transition({opacity: 1, rotate: 0}, v)
                    }
                }, 10)
            });
            setTimeout(function() {
                w(n, r);
                f.find(".defaultimg").css({opacity: 1});
                if (o.index() != i.index())
                    u.find(".defaultimg").css({opacity: 0});
                if (r.ie)
                    u.find(".defaultimg").css({opacity: 1});
                r.act = r.next;
                a(n)
            }, v + 15)
        }
        if (l == 12 || l == 13 || l == 14 || l == 15) {
            v = v * 3;
            o.css({opacity: 1});
            r.slots = 1;
            g(f, r, true);
            g(u, r, true);
            u.find(".defaultimg").css({opacity: 0});
            f.find(".defaultimg").css({opacity: 0});
            var E = r.width;
            var S = r.height;
            var x = f.find(".slotslide");
            if (r.fullWidth == "on" || r.fullSreen == "on") {
                E = x.width();
                S = x.height()
            }
            if (l == 12)
                if (r.ie9) {
                    x.transition({left: E + "px"}, 0)
                } else {
                    x.transition({left: E + "px", rotate: r.rotate}, 0)
                }
            else if (l == 15)
                if (r.ie9)
                    x.transition({left: 0 - E + "px"}, 0);
                else
                    x.transition({left: 0 - E + "px", rotate: r.rotate}, 0);
            else if (l == 13)
                if (r.ie9)
                    x.transition({top: S + "px"}, 0);
                else
                    x.transition({top: S + "px", rotate: r.rotate}, 0);
            else if (l == 14)
                if (r.ie9)
                    x.transition({top: 0 - S + "px"}, 0);
                else
                    x.transition({top: 0 - S + "px", rotate: r.rotate}, 0);
            x.transition({left: "0px", top: "0px", opacity: 1, rotate: 0}, v, function() {
                w(n, r, 0);
                if (o.index() != i.index())
                    u.find(".defaultimg").css({opacity: 0});
                f.find(".defaultimg").css({opacity: 1});
                r.act = r.next;
                a(n)
            });
            var T = u.find(".slotslide");
            if (l == 12)
                T.transition({left: 0 - E + "px", opacity: 1, rotate: 0}, v);
            else if (l == 15)
                T.transition({left: E + "px", opacity: 1, rotate: 0}, v);
            else if (l == 13)
                T.transition({top: 0 - S + "px", opacity: 1, rotate: 0}, v);
            else if (l == 14)
                T.transition({top: S + "px", opacity: 1, rotate: 0}, v)
        }
        if (l == 16) {
            i.css({position: "absolute", "z-index": 20});
            o.css({position: "absolute", "z-index": 15});
            i.wrapInner('<div class="tp-half-one"></div>');
            i.find(".tp-half-one").clone(true).appendTo(i).addClass("tp-half-two");
            i.find(".tp-half-two").removeClass("tp-half-one");
            i.find(".tp-half-two").wrapInner('<div class="tp-offset"></div>');
            var E = r.width;
            var S = r.height;
            if (r.fullWidth == "on" || r.fullSreen == "on") {
                E = r.container.parent().width();
                S = r.container.parent().height()
            }
            var N = i.find(".defaultimg");
            if (N.length > 0 && N.data("fullwidthcentering") == "on") {
                var C = S / 2;
                var k = N.position().top
            } else {
                var C = S / 2;
                var k = 0
            }
            i.find(".tp-half-one").css({width: E + "px", height: k + C + "px", overflow: "hidden", position: "absolute", top: "0px", left: "0px"});
            i.find(".tp-half-two").css({width: E + "px", height: k + C + "px", overflow: "hidden", position: "absolute", top: k + C + "px", left: "0px"});
            i.find(".tp-half-two .tp-offset").css({position: "absolute", top: 0 - C - k + "px", left: "0px"});
            if (!e.support.transition) {
                i.find(".tp-half-one").animate({opacity: 0, top: 0 - S / 2 + "px"}, {duration: 500, queue: false});
                i.find(".tp-half-two").animate({opacity: 0, top: S + "px"}, {duration: 500, queue: false})
            } else {
                var L = Math.round(Math.random() * 40 - 20);
                var A = Math.round(Math.random() * 40 - 20);
                var O = Math.random() * 1 + 1;
                var _ = Math.random() * 1 + 1;
                i.find(".tp-half-one").transition({opacity: 1, scale: O, rotate: L, y: 0 - S / 1.4 + "px"}, 800, "in");
                i.find(".tp-half-two").transition({opacity: 1, scale: _, rotate: A, y: 0 + S / 1.4 + "px"}, 800, "in");
                if (i.html() != null)
                    o.transition({scale: .8, x: r.width * .1, y: S * .1, rotate: L}, 0).transition({rotate: 0, scale: 1, x: 0, y: 0}, 600, "snap")
            }
            f.find(".defaultimg").css({opacity: 1});
            setTimeout(function() {
                i.css({position: "absolute", "z-index": 18});
                o.css({position: "absolute", "z-index": 20});
                f.find(".defaultimg").css({opacity: 1});
                u.find(".defaultimg").css({opacity: 0});
                if (i.find(".tp-half-one").length > 0) {
                    i.find(".tp-half-one >img, .tp-half-one >div").unwrap()
                }
                i.find(".tp-half-two").remove();
                r.transition = 0;
                r.act = r.next
            }, 800);
            o.css({opacity: 1})
        }
        if (l == 17) {
            v = v + 100;
            if (r.slots > 10)
                r.slots = 10;
            o.css({opacity: 1});
            y(u, r, true);
            y(f, r, false);
            f.find(".defaultimg").css({opacity: 0});
            f.find(".slotslide").each(function(t) {
                var s = e(this);
                s.transition({opacity: 0, rotateY: 350, rotateX: 40, perspective: "1400px"}, 0);
                setTimeout(function() {
                    s.transition({opacity: 1, top: 0, left: 0, scale: 1, perspective: "150px", rotate: 0, rotateY: 0, rotateX: 0}, v * 2, function() {
                        if (t == r.slots - 1) {
                            w(n, r);
                            f.find(".defaultimg").css({opacity: 1});
                            if (o.index() != i.index())
                                u.find(".defaultimg").css({opacity: 0});
                            r.act = r.next;
                            a(n)
                        }
                    })
                }, t * 100)
            })
        }
        if (l == 18) {
            v = v + 100;
            if (r.slots > 10)
                r.slots = 10;
            o.css({opacity: 1});
            g(u, r, true);
            g(f, r, false);
            f.find(".defaultimg").css({opacity: 0});
            f.find(".slotslide").each(function(t) {
                var s = e(this);
                s.transition({rotateX: 10, rotateY: 310, perspective: "1400px", rotate: 0, opacity: 0}, 0);
                setTimeout(function() {
                    s.transition({top: 0, left: 0, scale: 1, perspective: "150px", rotate: 0, rotateY: 0, rotateX: 0, opacity: 1}, v * 2, function() {
                        if (t == r.slots - 1) {
                            w(n, r);
                            f.find(".defaultimg").css({opacity: 1});
                            if (o.index() != i.index())
                                u.find(".defaultimg").css({opacity: 0});
                            r.act = r.next;
                            a(n)
                        }
                    })
                }, t * 100)
            })
        }
        if (l == 19) {
            v = v + 100;
            if (r.slots > 10)
                r.slots = 10;
            o.css({opacity: 1});
            g(u, r, true);
            g(f, r, false);
            f.find(".defaultimg").css({opacity: 0});
            var P = o.css("z-index");
            var H = i.css("z-index");
            f.find(".slotslide").each(function(t) {
                var s = e(this);
                s.parent().css({overflow: "visible"});
                s.css({background: "#333"});
                if (d == 1)
                    s.transition({opacity: 0, left: 0, top: r.height / 2, rotate3d: "1, 0, 0, -90deg "}, 0);
                else
                    s.transition({opacity: 0, left: 0, top: 0 - r.height / 2, rotate3d: "1, 0, 0, 90deg "}, 0);
                setTimeout(function() {
                    s.transition({opacity: 1, top: 0, perspective: r.height * 2, rotate3d: " 1, 0, 0, 0deg "}, v * 2, function() {
                        if (t == r.slots - 1) {
                            w(n, r);
                            f.find(".defaultimg").css({opacity: 1});
                            if (o.index() != i.index())
                                u.find(".defaultimg").css({opacity: 0});
                            r.act = r.next;
                            a(n)
                        }
                    })
                }, t * 150)
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                n.parent().css({overflow: "visible"});
                n.css({background: "#333"});
                n.transition({top: 0, rotate3d: "1, 0, 0, 0deg"}, 0);
                u.find(".defaultimg").css({opacity: 0});
                setTimeout(function() {
                    if (d == 1)
                        n.transition({opacity: .6, left: 0, perspective: r.height * 2, top: 0 - r.height / 2, rotate3d: "1, 0, 0, 90deg"}, v * 2, function() {
                        });
                    else
                        n.transition({opacity: .6, left: 0, perspective: r.height * 2, top: 0 + r.height / 2, rotate3d: "1, 0, 0, -90deg"}, v * 2, function() {
                        })
                }, t * 150)
            })
        }
        if (l == 20) {
            v = v + 100;
            if (r.slots > 10)
                r.slots = 10;
            o.css({opacity: 1});
            y(u, r, true);
            y(f, r, false);
            f.find(".defaultimg").css({opacity: 0});
            f.find(".slotslide").each(function(t) {
                var s = e(this);
                s.parent().css({overflow: "visible"});
                if (d == 1)
                    s.transition({scale: .8, top: 0, left: 0 - r.width, rotate3d: "2, 5, 0, 110deg"}, 0);
                else
                    s.transition({scale: .8, top: 0, left: 0 + r.width, rotate3d: "2, 5, 0, -110deg"}, 0);
                setTimeout(function() {
                    s.transition({scale: .8, left: 0, perspective: r.width, rotate3d: "1, 5, 0, 0deg"}, v * 2, "ease").transition({scale: 1}, 200, "out", function() {
                        if (t == r.slots - 1) {
                            w(n, r);
                            f.find(".defaultimg").css({opacity: 1});
                            if (o.index() != i.index())
                                u.find(".defaultimg").css({opacity: 0});
                            r.act = r.next;
                            a(n)
                        }
                    })
                }, t * 100)
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                n.transition({scale: .5, left: 0, rotate3d: "1, 5, 0, 5deg"}, 300, "in-out");
                u.find(".defaultimg").css({opacity: 0});
                setTimeout(function() {
                    if (d == 1)
                        n.transition({top: 0, left: r.width / 2, perspective: r.width, rotate3d: "0, -3, 0, 70deg", opacity: 0}, v * 2, "out", function() {
                        });
                    else
                        n.transition({top: 0, left: 0 - r.width / 2, perspective: r.width, rotate3d: "0, -3, 0, -70deg", opacity: 0}, v * 2, "out", function() {
                        })
                }, t * 100)
            })
        }
        if (l == 21) {
            v = v + 100;
            if (r.slots > 10)
                r.slots = 10;
            o.css({opacity: 1});
            y(u, r, true);
            y(f, r, false);
            f.find(".defaultimg").css({opacity: 0});
            f.find(".slotslide").each(function(t) {
                var s = e(this);
                if (d == 1)
                    s.transition({top: 0, left: 0 - r.width, rotate3d: "0, 1, 0, 90deg"}, 0);
                else
                    s.transition({top: 0, left: 0 + r.width, rotate3d: "0, 1, 0, -90deg"}, 0);
                setTimeout(function() {
                    s.transition({left: 0, perspective: r.width * 2, rotate3d: "0, 0, 0, 0deg"}, v * 2, function() {
                        if (t == r.slots - 1) {
                            w(n, r);
                            f.find(".defaultimg").css({opacity: 1});
                            if (o.index() != i.index())
                                u.find(".defaultimg").css({opacity: 0});
                            r.act = r.next;
                            a(n)
                        }
                    })
                }, t * 100)
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                n.transition({left: 0, rotate3d: "0, 0, 0, 0deg"}, 0);
                u.find(".defaultimg").css({opacity: 0});
                setTimeout(function() {
                    if (d == 1)
                        n.transition({top: 0, left: r.width / 2, perspective: r.width, rotate3d: "0, 1, 0, -90deg"}, v * 1.5, function() {
                        });
                    else
                        n.transition({top: 0, left: 0 - r.width / 2, perspective: r.width, rotate3d: "0, 1, 0, +90deg"}, v * 1.5, function() {
                        })
                }, t * 100)
            })
        }
        var B = {};
        B.slideIndex = r.next + 1;
        n.trigger("revolution.slide.onchange", B);
        setTimeout(function() {
            n.trigger("revolution.slide.onafterswap")
        }, v);
        n.trigger("revolution.slide.onvideostop")
    }
    function T() {
    }
    function N(t) {
        var n = t.target.getVideoEmbedCode();
        var r = e("#" + n.split('id="')[1].split('"')[0]).closest(".tp-simpleresponsive");
        if (t.data == YT.PlayerState.PLAYING) {
            var i = r.find(".tp-bannertimer");
            var s = i.data("opt");
            i.stop();
            s.videoplaying = true;
            s.videostartednow = 1
        } else {
            var i = r.find(".tp-bannertimer");
            var s = i.data("opt");
            if (t.data != -1) {
                if (s.conthover == 0)
                    i.animate({width: "100%"}, {duration: s.delay - s.cd - 100, queue: false, easing: "linear"});
                s.videoplaying = false;
                s.videostoppednow = 1
            }
        }
        if (t.data == 0 && s.nextslideatend == true)
            s.container.revnext()
    }
    function C(e) {
        e.target.playVideo()
    }
    function k(e, t, n) {
        if (e.addEventListener) {
            e.addEventListener(t, n, false)
        } else {
            e.attachEvent(t, n, false)
        }
    }
    function L(t) {
        var n = $f(t);
        var r = e("#" + t).closest(".tp-simpleresponsive");
        n.addEvent("ready", function(e) {
            n.addEvent("play", function(e) {
                var t = r.find(".tp-bannertimer");
                var n = t.data("opt");
                t.stop();
                n.videoplaying = true
            });
            n.addEvent("finish", function(e) {
                var t = r.find(".tp-bannertimer");
                var n = t.data("opt");
                if (n.conthover == 0)
                    t.animate({width: "100%"}, {duration: n.delay - n.cd - 100, queue: false, easing: "linear"});
                n.videoplaying = false;
                n.videostartednow = 1;
                if (n.nextslideatend == true)
                    n.container.revnext()
            });
            n.addEvent("pause", function(e) {
                var t = r.find(".tp-bannertimer");
                var n = t.data("opt");
                if (n.conthover == 0)
                    t.animate({width: "100%"}, {duration: n.delay - n.cd - 100, queue: false, easing: "linear"});
                n.videoplaying = false;
                n.videostoppednow = 1
            })
        })
    }
    function A(t) {
        var n = $f(t);
        var r = e("#" + t).closest(".tp-simpleresponsive");
        n.addEvent("ready", function(e) {
            n.api("play")
        });
        n.addEvent("play", function(e) {
            var t = r.find(".tp-bannertimer");
            var n = t.data("opt");
            t.stop();
            n.videoplaying = true
        });
        n.addEvent("finish", function(e) {
            var t = r.find(".tp-bannertimer");
            var n = t.data("opt");
            if (n.conthover == 0)
                t.animate({width: "100%"}, {duration: n.delay - n.cd - 100, queue: false, easing: "linear"});
            n.videoplaying = false;
            n.videostartednow = 1;
            if (n.nextslideatend == true)
                n.container.revnext()
        });
        n.addEvent("pause", function(e) {
            var t = r.find(".tp-bannertimer");
            var n = t.data("opt");
            if (n.conthover == 0)
                t.animate({width: "100%"}, {duration: n.delay - n.cd - 100, queue: false, easing: "linear"});
            n.videoplaying = false;
            n.videostoppednow = 1
        })
    }
    function O(t) {
        t.on("play", function() {
            var t = e("body").find(".tp-bannertimer");
            var n = t.data("opt");
            t.stop();
            try {
                n.videoplaying = true
            } catch (r) {
            }
        });
        t.on("pause", function() {
            var t = e("body").find(".tp-bannertimer");
            var n = t.data("opt");
            if (n.conthover == 0)
                t.animate({width: "100%"}, {duration: n.delay - n.cd - 100, queue: false, easing: "linear"});
            n.videoplaying = false;
            n.videostoppednow = 1
        });
        t.on("ended", function() {
            var t = e("body").find(".tp-bannertimer");
            var n = t.data("opt");
            if (n.conthover == 0)
                t.animate({width: "100%"}, {duration: n.delay - n.cd - 100, queue: false, easing: "linear"});
            n.videoplaying = false;
            n.videostoppednow = 1;
            if (n.nextslideatend == true)
                n.container.revnext()
        })
    }
    function M(n, r, i) {
        var s = 0;
        var o = 0;
        n.find(".tp-caption").each(function(i) {
            s = r.width / 2 - r.startwidth / 2;
            if (r.bh > 1) {
                r.bw = 1;
                r.bh = 1
            }
            if (r.bw > 1) {
                r.bw = 1;
                r.bh = 1
            }
            var u = r.bw;
            var a = r.bh;
            if (r.fullScreen == "on")
                o = r.height / 2 - r.startheight * r.bh / 2;
            if (o < 0)
                o = 0;
            var f = n.find(".tp-caption:eq(" + i + ")");
            var l = 0;
            if (r.width < r.hideCaptionAtLimit && f.data("captionhidden") == "on") {
                f.addClass("tp-hidden-caption");
                l = 1
            } else {
                if (r.width < r.hideAllCaptionAtLilmit) {
                    f.addClass("tp-hidden-caption");
                    l = 1
                } else {
                    f.removeClass("tp-hidden-caption")
                }
            }
            f.stop(true, true);
            if (l == 0) {
                if (f.data("linktoslide") != t) {
                    f.css({cursor: "pointer"});
                    if (f.data("linktoslide") != "no") {
                        f.click(function() {
                            var t = e(this);
                            var n = t.data("linktoslide");
                            if (n != "next" && n != "prev") {
                                r.container.data("showus", n);
                                r.container.parent().find(".tp-rightarrow").click()
                            } else if (n == "next")
                                r.container.parent().find(".tp-rightarrow").click();
                            else if (n == "prev")
                                r.container.parent().find(".tp-leftarrow").click()
                        })
                    }
                }
                if (f.hasClass("coloredbg"))
                    s = 0;
                if (s < 0)
                    s = 0;
                clearTimeout(f.data("timer"));
                clearTimeout(f.data("timer-end"));
                var c = "iframe" + Math.round(Math.random() * 1e3 + 1);
                if (f.find("iframe").length > 0) {
                    f.find("iframe").each(function() {
                        var n = e(this);
                        if (n.attr("src").toLowerCase().indexOf("youtube") >= 0) {
                            r.nextslideatend = f.data("nextslideatend");
                            if (!n.hasClass("HasListener")) {
                                try {
                                    n.attr("id", c);
                                    var i;
                                    if (f.data("autoplay") == true)
                                        i = new YT.Player(c, {events: {onStateChange: N, onReady: C}});
                                    else
                                        i = new YT.Player(c, {events: {onStateChange: N}});
                                    n.addClass("HasListener");
                                    f.data("player", i);
                                    if (f.data("autoplay") == true) {
                                        var s = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
                                        setTimeout(function() {
                                            s.stop();
                                            r.videoplaying = true
                                        }, 200)
                                    }
                                } catch (o) {
                                }
                            } else {
                                if (f.data("autoplay") == true) {
                                    var i = f.data("player");
                                    f.data("timerplay", setTimeout(function() {
                                        i.playVideo()
                                    }, f.data("start")));
                                    var s = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
                                    setTimeout(function() {
                                        s.stop();
                                        r.videoplaying = true
                                    }, 200)
                                }
                            }
                        } else {
                            if (n.attr("src").toLowerCase().indexOf("vimeo") >= 0) {
                                r.nextslideatend = f.data("nextslideatend");
                                if (!n.hasClass("HasListener")) {
                                    n.addClass("HasListener");
                                    n.attr("id", c);
                                    var u = n.attr("src");
                                    var a = {}, l = u, h = /([^&=]+)=([^&]*)/g, p;
                                    while (p = h.exec(l)) {
                                        a[decodeURIComponent(p[1])] = decodeURIComponent(p[2])
                                    }
                                    if (a["player_id"] != t) {
                                        u = u.replace(a["player_id"], c)
                                    } else {
                                        u = u + "&player_id=" + c
                                    }
                                    try {
                                        u = u.replace("api=0", "api=1")
                                    } catch (o) {
                                    }
                                    u = u + "&api=1";
                                    n.attr("src", u);
                                    var i = f.find("iframe")[0];
                                    if (f.data("autoplay") == true) {
                                        $f(i).addEvent("ready", A);
                                        var s = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
                                        setTimeout(function() {
                                            s.stop();
                                            r.videoplaying = true
                                        }, 200)
                                    } else {
                                        $f(i).addEvent("ready", L)
                                    }
                                } else {
                                    if (f.data("autoplay") == true) {
                                        var n = f.find("iframe");
                                        var d = n.attr("id");
                                        var v = $f(d);
                                        f.data("timerplay", setTimeout(function() {
                                            v.api("play")
                                        }, f.data("start")));
                                        var s = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
                                        setTimeout(function() {
                                            s.stop();
                                            r.videoplaying = true
                                        }, 200)
                                    }
                                }
                            }
                        }
                    })
                }
                if (f.find("video").length > 0) {
                    f.find("video").each(function(n) {
                        var i = e(this).parent();
                        if (i.hasClass("video-js")) {
                            r.nextslideatend = f.data("nextslideatend");
                            if (!i.hasClass("HasListener")) {
                                i.addClass("HasListener");
                                var s = "videoid_" + Math.round(Math.random() * 1e3 + 1);
                                i.attr("id", s);
                                videojs(s).ready(function() {
                                    O(this)
                                })
                            } else {
                                s = i.attr("id")
                            }
                            if (f.data("autoplay") == true) {
                                var o = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
                                setTimeout(function() {
                                    o.stop();
                                    r.videoplaying = true
                                }, 200);
                                videojs(s).ready(function() {
                                    var e = this;
                                    i.data("timerplay", setTimeout(function() {
                                        e.play()
                                    }, f.data("start")))
                                })
                            }
                            if (i.data("ww") == t)
                                i.data("ww", i.width());
                            if (i.data("hh") == t)
                                i.data("hh", i.height());
                            videojs(s).ready(function() {
                                if (!f.hasClass("fullscreenvideo")) {
                                    var e = videojs(s);
                                    try {
                                        e.width(i.data("ww") * r.bw);
                                        e.height(i.data("hh") * r.bh)
                                    } catch (t) {
                                    }
                                }
                            })
                        }
                    })
                }
                if (f.hasClass("randomrotate") && (r.ie || r.ie9))
                    f.removeClass("randomrotate").addClass("sfb");
                f.removeClass("noFilterClass");
                var h = 0;
                var p = 0;
                if (f.find("img").length > 0) {
                    var d = f.find("img");
                    if (d.data("ww") == t)
                        d.data("ww", d.width());
                    if (d.data("hh") == t)
                        d.data("hh", d.height());
                    var v = d.data("ww");
                    var m = d.data("hh");
                    d.width(v * r.bw);
                    d.height(m * r.bh);
                    h = d.width();
                    p = d.height()
                } else {
                    if (f.find("iframe").length > 0) {
                        var d = f.find("iframe");
                        if (f.data("ww") == t) {
                            f.data("ww", d.width())
                        }
                        if (f.data("hh") == t)
                            f.data("hh", d.height());
                        var v = f.data("ww");
                        var m = f.data("hh");
                        var g = f;
                        if (g.data("fsize") == t)
                            g.data("fsize", parseInt(g.css("font-size"), 0) || 0);
                        if (g.data("pt") == t)
                            g.data("pt", parseInt(g.css("paddingTop"), 0) || 0);
                        if (g.data("pb") == t)
                            g.data("pb", parseInt(g.css("paddingBottom"), 0) || 0);
                        if (g.data("pl") == t)
                            g.data("pl", parseInt(g.css("paddingLeft"), 0) || 0);
                        if (g.data("pr") == t)
                            g.data("pr", parseInt(g.css("paddingRight"), 0) || 0);
                        if (g.data("mt") == t)
                            g.data("mt", parseInt(g.css("marginTop"), 0) || 0);
                        if (g.data("mb") == t)
                            g.data("mb", parseInt(g.css("marginBottom"), 0) || 0);
                        if (g.data("ml") == t)
                            g.data("ml", parseInt(g.css("marginLeft"), 0) || 0);
                        if (g.data("mr") == t)
                            g.data("mr", parseInt(g.css("marginRight"), 0) || 0);
                        if (g.data("bt") == t)
                            g.data("bt", parseInt(g.css("borderTop"), 0) || 0);
                        if (g.data("bb") == t)
                            g.data("bb", parseInt(g.css("borderBottom"), 0) || 0);
                        if (g.data("bl") == t)
                            g.data("bl", parseInt(g.css("borderLeft"), 0) || 0);
                        if (g.data("br") == t)
                            g.data("br", parseInt(g.css("borderRight"), 0) || 0);
                        if (g.data("lh") == t)
                            g.data("lh", parseInt(g.css("lineHeight"), 0) || 0);
                        var y = r.width;
                        var b = r.height;
                        if (y > r.startwidth)
                            y = r.startwidth;
                        if (b > r.startheight)
                            b = r.startheight;
                        if (!f.hasClass("fullscreenvideo"))
                            f.css({"font-size": g.data("fsize") * r.bw + "px", "padding-top": g.data("pt") * r.bh + "px", "padding-bottom": g.data("pb") * r.bh + "px", "padding-left": g.data("pl") * r.bw + "px", "padding-right": g.data("pr") * r.bw + "px", "margin-top": g.data("mt") * r.bh + "px", "margin-bottom": g.data("mb") * r.bh + "px", "margin-left": g.data("ml") * r.bw + "px", "margin-right": g.data("mr") * r.bw + "px", "border-top": g.data("bt") * r.bh + "px", "border-bottom": g.data("bb") * r.bh + "px", "border-left": g.data("bl") * r.bw + "px", "border-right": g.data("br") * r.bw + "px", "line-height": g.data("lh") * r.bh + "px", height: m * r.bh + "px", "white-space": "nowrap"});
                        else {
                            s = 0;
                            o = 0;
                            f.css({width: r.width, height: r.height})
                        }
                        d.width(v * r.bw);
                        d.height(m * r.bh);
                        h = d.width();
                        p = d.height()
                    } else {
                        f.find(".tp-resizeme, .tp-resizeme *").each(function() {
                            _(e(this), r)
                        });
                        if (f.hasClass("tp-resizeme")) {
                            f.find("*").each(function() {
                                _(e(this), r)
                            })
                        }
                        _(f, r);
                        p = f.outerHeight(true);
                        h = f.outerWidth(true);
                        var w = f.outerHeight();
                        var E = f.css("backgroundColor");
                        f.find(".frontcorner").css({borderWidth: w + "px", left: 0 - w + "px", borderRight: "0px solid transparent", borderTopColor: E});
                        f.find(".frontcornertop").css({borderWidth: w + "px", left: 0 - w + "px", borderRight: "0px solid transparent", borderBottomColor: E});
                        f.find(".backcorner").css({borderWidth: w + "px", right: 0 - w + "px", borderLeft: "0px solid transparent", borderBottomColor: E});
                        f.find(".backcornertop").css({borderWidth: w + "px", right: 0 - w + "px", borderLeft: "0px solid transparent", borderTopColor: E})
                    }
                }
                if (f.data("voffset") == t)
                    f.data("voffset", 0);
                if (f.data("hoffset") == t)
                    f.data("hoffset", 0);
                var S = f.data("voffset") * u;
                var x = f.data("hoffset") * u;
                var T = r.startwidth * u;
                var k = r.startheight * u;
                if (f.data("x") == "center" || f.data("xcenter") == "center") {
                    f.data("xcenter", "center");
                    f.data("x", (T / 2 - f.outerWidth(true) / 2) / u + x)
                }
                if (f.data("x") == "left" || f.data("xleft") == "left") {
                    f.data("xleft", "left");
                    f.data("x", 0 / u + x)
                }
                if (f.data("x") == "right" || f.data("xright") == "right") {
                    f.data("xright", "right");
                    f.data("x", (T - f.outerWidth(true) + x) / u)
                }
                if (f.data("y") == "center" || f.data("ycenter") == "center") {
                    f.data("ycenter", "center");
                    f.data("y", (k / 2 - f.outerHeight(true) / 2) / r.bh + S)
                }
                if (f.data("y") == "top" || f.data("ytop") == "top") {
                    f.data("ytop", "top");
                    f.data("y", 0 / r.bh + S)
                }
                if (f.data("y") == "bottom" || f.data("ybottom") == "bottom") {
                    f.data("ybottom", "bottom");
                    f.data("y", (k - f.outerHeight(true) + S) / u)
                }
                if (f.hasClass("fade")) {
                    f.css({opacity: 0, left: u * f.data("x") + s + "px", top: r.bh * f.data("y") + o + "px"})
                }
                if (f.hasClass("randomrotate")) {
                    f.css({left: u * f.data("x") + s + "px", top: a * f.data("y") + o + "px"});
                    var M = Math.random() * 2 + 1;
                    var D = Math.round(Math.random() * 200 - 100);
                    var H = Math.round(Math.random() * 200 - 100);
                    var B = Math.round(Math.random() * 200 - 100);
                    f.data("repx", H);
                    f.data("repy", B);
                    f.data("repo", f.css("opacity"));
                    f.data("rotate", D);
                    f.data("scale", M);
                    f.transition({opacity: 0, scale: M, rotate: D, x: H, y: B, duration: "0ms"})
                } else {
                    if (r.ie || r.ie9) {
                    } else {
                        if (f.find("iframe").length == 0)
                            f.transition({scale: 1, rotate: 0})
                    }
                }
                if (f.hasClass("lfr")) {
                    f.css({opacity: 1, left: 15 + r.width + "px", top: r.bh * f.data("y") + o + "px"})
                }
                if (f.hasClass("lfl")) {
                    f.css({opacity: 1, left: -15 - h + "px", top: r.bh * f.data("y") + o + "px"})
                }
                if (f.hasClass("sfl")) {
                    f.css({opacity: 0, left: u * f.data("x") - 50 + s + "px", top: r.bh * f.data("y") + o + "px"})
                }
                if (f.hasClass("sfr")) {
                    f.css({opacity: 0, left: u * f.data("x") + 50 + s + "px", top: r.bh * f.data("y") + o + "px"})
                }
                if (f.hasClass("lft")) {
                    f.css({opacity: 1, left: u * f.data("x") + s + "px", top: -25 - p + "px"})
                }
                if (f.hasClass("lfb")) {
                    f.css({opacity: 1, left: u * f.data("x") + s + "px", top: 25 + r.height + "px"})
                }
                if (f.hasClass("sft")) {
                    f.css({opacity: 0, left: u * f.data("x") + s + "px", top: r.bh * f.data("y") + o - 50 + "px"})
                }
                if (f.hasClass("sfb")) {
                    f.css({opacity: 0, left: u * f.data("x") + s + "px", top: r.bh * f.data("y") + o + 50 + "px"})
                }
                if (f.data("start") == t)
                    f.data("start", 1e3);
                f.data("timer", setTimeout(function() {
                    var n = f.data("easing");
                    if (n == t)
                        n = "linear";
                    if (f.hasClass("fullscreenvideo"))
                        f.css({display: "block"});
                    f.css({visibility: "visible"});
                    if (f.hasClass("fade")) {
                        f.data("repo", f.css("opacity"));
                        f.transition({opacity: 1, duration: f.data("speed")})
                    }
                    if (f.hasClass("randomrotate")) {
                        n = n.replace("Elastic", "Back");
                        n = n.replace("Bounce", "Back");
                        f.transition({opacity: 1, scale: 1, left: u * f.data("x") + s + "px", top: a * f.data("y") + o + "px", rotate: 0, x: 0, y: 0, duration: f.data("speed"), easing: n});
                        if (r.ie)
                            f.addClass("noFilterClass")
                    }
                    if (f.hasClass("lfr") || f.hasClass("lfl") || f.hasClass("sfr") || f.hasClass("sfl") || f.hasClass("lft") || f.hasClass("lfb") || f.hasClass("sft") || f.hasClass("sfb")) {
                        f.data("repx", f.position().left);
                        f.data("repy", f.position().top);
                        f.data("repo", f.css("opacity"));
                        if (n.indexOf("Bounce") >= 0 || n.indexOf("Elastic") >= 0)
                            f.animate({opacity: 1, left: u * f.data("x") + s + "px", top: r.bh * f.data("y") + o + "px"}, {duration: f.data("speed"), easing: n, complete: function() {
                                    if (r.ie)
                                        e(this).addClass("noFilterClass")
                                }});
                        else
                            f.transition({opacity: 1, left: u * f.data("x") + s + "px", top: r.bh * f.data("y") + o + "px", duration: f.data("speed"), easing: n})
                    }
                }, f.data("start")));
                if (f.data("end") != t)
                    f.data("timer-end", setTimeout(function() {
                        if ((r.ie || r.ie9) && (f.hasClass("randomrotate") || f.hasClass("randomrotateout"))) {
                            f.removeClass("randomrotate").removeClass("randomrotateout").addClass("fadeout")
                        }
                        P(f, r)
                    }, f.data("end")))
            }
        });
        var u = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
        u.data("opt", r)
    }
    function _(e, n) {
        if (e.data("fsize") == t)
            e.data("fsize", parseInt(e.css("font-size"), 0) || 0);
        if (e.data("pt") == t)
            e.data("pt", parseInt(e.css("paddingTop"), 0) || 0);
        if (e.data("pb") == t)
            e.data("pb", parseInt(e.css("paddingBottom"), 0) || 0);
        if (e.data("pl") == t)
            e.data("pl", parseInt(e.css("paddingLeft"), 0) || 0);
        if (e.data("pr") == t)
            e.data("pr", parseInt(e.css("paddingRight"), 0) || 0);
        if (e.data("mt") == t)
            e.data("mt", parseInt(e.css("marginTop"), 0) || 0);
        if (e.data("mb") == t)
            e.data("mb", parseInt(e.css("marginBottom"), 0) || 0);
        if (e.data("ml") == t)
            e.data("ml", parseInt(e.css("marginLeft"), 0) || 0);
        if (e.data("mr") == t)
            e.data("mr", parseInt(e.css("marginRight"), 0) || 0);
        if (e.data("bt") == t)
            e.data("bt", parseInt(e.css("borderTopWidth"), 0) || 0);
        if (e.data("bb") == t)
            e.data("bb", parseInt(e.css("borderBottomWidth"), 0) || 0);
        if (e.data("bl") == t)
            e.data("bl", parseInt(e.css("borderLeftWidth"), 0) || 0);
        if (e.data("br") == t)
            e.data("br", parseInt(e.css("borderRightWidth"), 0) || 0);
        if (e.data("lh") == t)
            e.data("lh", parseInt(e.css("lineHeight"), 0) || 0);
        if (e.data("minwidth") == t)
            e.data("minwidth", parseInt(e.css("minWidth"), 0) || 0);
        if (e.data("minheight") == t)
            e.data("minheight", parseInt(e.css("minHeight"), 0) || 0);
        if (e.data("maxwidth") == t)
            e.data("maxwidth", parseInt(e.css("maxWidth"), 0) || "none");
        if (e.data("maxheight") == t)
            e.data("maxheight", parseInt(e.css("maxHeight"), 0) || "none");
        e.css({"font-size": Math.round(e.data("fsize") * n.bw) + "px", "padding-top": Math.round(e.data("pt") * n.bh) + "px", "padding-bottom": Math.round(e.data("pb") * n.bh) + "px", "padding-left": Math.round(e.data("pl") * n.bw) + "px", "padding-right": Math.round(e.data("pr") * n.bw) + "px", "margin-top": e.data("mt") * n.bh + "px", "margin-bottom": e.data("mb") * n.bh + "px", "margin-left": e.data("ml") * n.bw + "px", "margin-right": e.data("mr") * n.bw + "px", borderTopWidth: Math.round(e.data("bt") * n.bh) + "px", borderBottomWidth: Math.round(e.data("bb") * n.bh) + "px", borderLeftWidth: Math.round(e.data("bl") * n.bw) + "px", borderRightWidth: Math.round(e.data("br") * n.bw) + "px", "line-height": Math.round(e.data("lh") * n.bh) + "px", "white-space": "nowrap", minWidth: e.data("minwidth") * n.bw + "px", minHeight: e.data("minheight") * n.bh + "px"});
        if (e.data("maxheight") != "none")
            e.css({maxHeight: e.data("maxheight") * n.bh + "px"});
        if (e.data("maxwidth") != "none")
            e.css({maxWidth: e.data("maxwidth") * n.bw + "px"})
    }
    function D(t, n) {
        t.find(".tp-caption").each(function(r) {
            var i = t.find(".tp-caption:eq(" + r + ")");
            i.stop(true, true);
            clearTimeout(i.data("timer"));
            clearTimeout(i.data("timer-end"));
            var s = i.data("easing");
            s = "easeInOutSine";
            var o = i.data("repx");
            var u = i.data("repy");
            var a = i.data("repo");
            var f = i.data("rotate");
            var l = i.data("scale");
            if (i.find("iframe").length > 0) {
                try {
                    var c = i.find("iframe");
                    var h = c.attr("id");
                    var p = $f(h);
                    p.api("pause");
                    clearTimeout(i.data("timerplay"))
                } catch (d) {
                }
                try {
                    var v = i.data("player");
                    v.stopVideo();
                    clearTimeout(i.data("timerplay"))
                } catch (d) {
                }
            }
            if (i.find("video").length > 0) {
                try {
                    i.find("video").each(function(t) {
                        var n = e(this).parent();
                        var r = n.attr("id");
                        clearTimeout(n.data("timerplay"));
                        videojs(r).ready(function() {
                            var e = this;
                            e.pause()
                        })
                    })
                } catch (d) {
                }
            }
            try {
                P(i, n)
            } catch (d) {
            }
        })
    }
    function P(n, r) {
        if (n.hasClass("randomrotate") && (r.ie || r.ie9))
            n.removeClass("randomrotate").addClass("sfb");
        if (n.hasClass("randomrotateout") && (r.ie || r.ie9))
            n.removeClass("randomrotateout").addClass("stb");
        var i = n.data("endspeed");
        if (i == t)
            i = n.data("speed");
        var s = n.data("repx");
        var o = n.data("repy");
        var u = n.data("repo");
        if (r.ie) {
            n.css({opacity: "inherit", filter: "inherit"})
        }
        if (n.hasClass("ltr") || n.hasClass("ltl") || n.hasClass("str") || n.hasClass("stl") || n.hasClass("ltt") || n.hasClass("ltb") || n.hasClass("stt") || n.hasClass("stb")) {
            s = n.position().left;
            o = n.position().top;
            if (n.hasClass("ltr"))
                s = r.width + 60;
            else if (n.hasClass("ltl"))
                s = 0 - n.width() - 60;
            else if (n.hasClass("ltt"))
                o = 0 - n.height() - 60;
            else if (n.hasClass("ltb"))
                o = r.height + 60;
            else if (n.hasClass("str")) {
                s = s + 50;
                u = 0
            } else if (n.hasClass("stl")) {
                s = s - 50;
                u = 0
            } else if (n.hasClass("stt")) {
                o = o - 50;
                u = 0
            } else if (n.hasClass("stb")) {
                o = o + 50;
                u = 0
            }
            var a = n.data("endeasing");
            if (a == t)
                a = "linear";
            if (a.indexOf("Bounce") >= 0 || a.indexOf("Elastic") >= 0)
                n.animate({opacity: u, left: s + "px", top: o + "px"}, {duration: n.data("endspeed"), easing: a, complete: function() {
                        e(this).css({visibility: "hidden"})
                    }});
            else
                n.transition({opacity: u, left: s + "px", top: o + "px", duration: n.data("endspeed"), easing: a});
            if (r.ie)
                n.removeClass("noFilterClass")
        } else if (n.hasClass("randomrotateout")) {
            n.transition({opacity: 0, scale: Math.random() * 2 + .3, left: Math.random() * r.width + "px", top: Math.random() * r.height + "px", rotate: Math.random() * 40, duration: i, easing: a, complete: function() {
                    e(this).css({visibility: "hidden"})
                }});
            if (r.ie)
                n.removeClass("noFilterClass")
        } else if (n.hasClass("fadeout")) {
            if (r.ie)
                n.removeClass("noFilterClass");
            n.transition({opacity: 0, duration: 200})
        } else if (n.hasClass("lfr") || n.hasClass("lfl") || n.hasClass("sfr") || n.hasClass("sfl") || n.hasClass("lft") || n.hasClass("lfb") || n.hasClass("sft") || n.hasClass("sfb")) {
            if (n.hasClass("lfr"))
                s = r.width + 60;
            else if (n.hasClass("lfl"))
                s = 0 - n.width() - 60;
            else if (n.hasClass("lft"))
                o = 0 - n.height() - 60;
            else if (n.hasClass("lfb"))
                o = r.height + 60;
            var a = n.data("endeasing");
            if (a == t)
                a = "linear";
            if (a.indexOf("Bounce") >= 0 || a.indexOf("Elastic") >= 0)
                n.animate({opacity: u, left: s + "px", top: o + "px"}, {duration: n.data("endspeed"), easing: a, complete: function() {
                        e(this).css({visibility: "hidden"})
                    }});
            else
                n.transition({opacity: u, left: s + "px", top: o + "px", duration: n.data("endspeed"), easing: a});
            if (r.ie)
                n.removeClass("noFilterClass")
        } else if (n.hasClass("fade")) {
            n.transition({opacity: 0, duration: i});
            if (r.ie)
                n.removeClass("noFilterClass")
        } else if (n.hasClass("randomrotate")) {
            n.transition({opacity: 0, scale: Math.random() * 2 + .3, left: Math.random() * r.width + "px", top: Math.random() * r.height + "px", rotate: Math.random() * 40, duration: i, easing: a});
            if (r.ie)
                n.removeClass("noFilterClass")
        }
    }
    function H(t, n) {
        t.children().each(function() {
            try {
                e(this).die("click")
            } catch (t) {
            }
            try {
                e(this).die("mouseenter")
            } catch (t) {
            }
            try {
                e(this).die("mouseleave")
            } catch (t) {
            }
            try {
                e(this).unbind("hover")
            } catch (t) {
            }
        });
        try {
            t.die("click", "mouseenter", "mouseleave")
        } catch (r) {
        }
        clearInterval(n.cdint);
        t = null
    }
    function B(n, r) {
        r.cd = 0;
        r.loop = 0;
        if (r.stopAfterLoops != t && r.stopAfterLoops > -1)
            r.looptogo = r.stopAfterLoops;
        else
            r.looptogo = 9999999;
        if (r.stopAtSlide != t && r.stopAtSlide > -1)
            r.lastslidetoshow = r.stopAtSlide;
        else
            r.lastslidetoshow = 999;
        r.stopLoop = "off";
        if (r.looptogo == 0)
            r.stopLoop = "on";
        if (r.slideamount > 1 && !(r.stopAfterLoops == 0 && r.stopAtSlide == 1)) {
            var i = n.find(".tp-bannertimer");
            if (i.length > 0) {
                i.css({width: "0%"});
                i.animate({width: "100%"}, {duration: r.delay - 100, queue: false, easing: "linear"})
            }
            i.data("opt", r);
            r.cdint = setInterval(function() {
                if (e("body").find(n).length == 0)
                    H(n, r);
                if (n.data("conthover-changed") == 1) {
                    r.conthover = n.data("conthover");
                    n.data("conthover-changed", 0)
                }
                if (r.conthover != 1 && r.videoplaying != true && r.width > r.hideSliderAtLimit)
                    r.cd = r.cd + 100;
                if (r.fullWidth != "on")
                    if (r.width > r.hideSliderAtLimit)
                        n.parent().removeClass("tp-hide-revslider");
                    else
                        n.parent().addClass("tp-hide-revslider");
                if (r.videostartednow == 1) {
                    n.trigger("revolution.slide.onvideoplay");
                    r.videostartednow = 0
                }
                if (r.videostoppednow == 1) {
                    n.trigger("revolution.slide.onvideostop");
                    r.videostoppednow = 0
                }
                if (r.cd >= r.delay) {
                    r.cd = 0;
                    r.act = r.next;
                    r.next = r.next + 1;
                    if (r.next > n.find(">ul >li").length - 1) {
                        r.next = 0;
                        r.looptogo = r.looptogo - 1;
                        if (r.looptogo <= 0) {
                            r.stopLoop = "on"
                        }
                    }
                    if (r.stopLoop == "on" && r.next == r.lastslidetoshow - 1) {
                        clearInterval(r.cdint);
                        n.find(".tp-bannertimer").css({visibility: "hidden"});
                        n.trigger("revolution.slide.onstop")
                    }
                    S(n, r);
                    if (i.length > 0) {
                        i.css({width: "0%"});
                        i.animate({width: "100%"}, {duration: r.delay - 100, queue: false, easing: "linear"})
                    }
                }
            }, 100);
            n.hover(function() {
                if (r.onHoverStop == "on") {
                    r.conthover = 1;
                    i.stop();
                    n.trigger("revolution.slide.onpause")
                }
            }, function() {
                if (n.data("conthover") != 1) {
                    n.trigger("revolution.slide.onresume");
                    r.conthover = 0;
                    if (r.onHoverStop == "on" && r.videoplaying != true) {
                        i.animate({width: "100%"}, {duration: r.delay - r.cd - 100, queue: false, easing: "linear"})
                    }
                }
            })
        }
    }
    e.fn.extend({revolution: function(i) {
            e.fn.revolution.defaults = {delay: 9e3, startheight: 500, startwidth: 960, hideThumbs: 200, thumbWidth: 100, thumbHeight: 50, thumbAmount: 5, navigationType: "bullet", navigationArrows: "withbullet", navigationStyle: "round", navigationHAlign: "center", navigationVAlign: "bottom", navigationHOffset: 0, navigationVOffset: 20, soloArrowLeftHalign: "left", soloArrowLeftValign: "center", soloArrowLeftHOffset: 20, soloArrowLeftVOffset: 0, soloArrowRightHalign: "right", soloArrowRightValign: "center", soloArrowRightHOffset: 20, soloArrowRightVOffset: 0, touchenabled: "on", onHoverStop: "on", stopAtSlide: -1, stopAfterLoops: -1, hideCaptionAtLimit: 0, hideAllCaptionAtLilmit: 0, hideSliderAtLimit: 0, shadow: 1, fullWidth: "off", fullScreen: "off"};
            i = e.extend({}, e.fn.revolution.defaults, i);
            return this.each(function() {
                var s = i;
                var o = e(this);
                if (!o.hasClass("revslider-initialised")) {
                    o.addClass("revslider-initialised");
                    if (o.attr("id") == t)
                        o.attr("id", "revslider-" + Math.round(Math.random() * 1e3 + 5));
                    s.firefox13 = false;
                    s.ie = !e.support.opacity;
                    s.ie9 = document.documentMode == 9;
                    var a = e.fn.jquery.split("."), f = parseFloat(a[0]), d = parseFloat(a[1]), v = parseFloat(a[2] || "0");
                    if (f == 1 && d < 7) {
                        o.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + a + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>")
                    }
                    if (f > 1)
                        s.ie = false;
                    if (!e.support.transition)
                        e.fn.transition = e.fn.animate;
                    e.cssEase["Bounce"] = "cubic-bezier(0,1,0.5,1.3)";
                    o.find(".caption").each(function() {
                        e(this).addClass("tp-caption")
                    });
                    var g = 0;
                    var y = 0;
                    var b = 0;
                    o.find(".tp-caption iframe").each(function(t) {
                        try {
                            if (e(this).attr("src").indexOf("you") > 0 && g == 0) {
                                g = 1;
                                var n = document.createElement("script");
                                n.src = "http://www.youtube.com/player_api";
                                var r = document.getElementsByTagName("script")[0];
                                r.parentNode.insertBefore(n, r)
                            }
                        } catch (i) {
                        }
                    });
                    o.find(".tp-caption iframe").each(function(t) {
                        try {
                            if (e(this).attr("src").indexOf("vim") > 0 && y == 0) {
                                y = 1;
                                var n = document.createElement("script");
                                n.src = "http://a.vimeocdn.com/js/froogaloop2.min.js";
                                var r = document.getElementsByTagName("script")[0];
                                r.parentNode.insertBefore(n, r)
                            }
                        } catch (i) {
                        }
                    });
                    o.find(".tp-caption video").each(function(t) {
                        try {
                            if (e(this).hasClass("video-js") && b == 0) {
                                b = 1;
                                var n = document.createElement("script");
                                n.src = s.videoJsPath + "video.js";
                                var r = document.getElementsByTagName("script")[0];
                                r.parentNode.insertBefore(n, r);
                                e("head").append('<link rel="stylesheet" type="text/css" href="' + s.videoJsPath + 'video-js.min.css" media="screen" />');
                                e("head").append('<script> videojs.options.flash.swf = "' + s.videoJsPath + 'video-js.swf";</script>')
                            }
                        } catch (i) {
                        }
                    });
                    if (s.shuffle == "on") {
                        for (var w = 0; w < o.find(">ul:first-child >li").length; w++) {
                            var E = Math.round(Math.random() * o.find(">ul:first-child >li").length);
                            o.find(">ul:first-child >li:eq(" + E + ")").prependTo(o.find(">ul:first-child"))
                        }
                    }
                    s.slots = 4;
                    s.act = -1;
                    s.next = 0;
                    if (s.startWithSlide != t)
                        s.next = s.startWithSlide;
                    var x = n("#")[0];
                    if (x.length < 9) {
                        if (x.split("slide").length > 1) {
                            var T = parseInt(x.split("slide")[1], 0);
                            if (T < 1)
                                T = 1;
                            if (T > o.find(">ul:first >li").length)
                                T = o.find(">ul:first >li").length;
                            s.next = T - 1
                        }
                    }
                    s.origcd = s.delay;
                    s.firststart = 1;
                    if (s.navigationHOffset == t)
                        s.navOffsetHorizontal = 0;
                    if (s.navigationVOffset == t)
                        s.navOffsetVertical = 0;
                    o.append('<div class="tp-loader"></div>');
                    if (o.find(".tp-bannertimer").length == 0)
                        o.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
                    var N = o.find(".tp-bannertimer");
                    if (N.length > 0) {
                        N.css({width: "0%"})
                    }
                    o.addClass("tp-simpleresponsive");
                    s.container = o;
                    s.slideamount = o.find(">ul:first >li").length;
                    if (o.height() == 0)
                        o.height(s.startheight);
                    if (s.startwidth == t || s.startwidth == 0)
                        s.startwidth = o.width();
                    if (s.startheight == t || s.startheight == 0)
                        s.startheight = o.height();
                    s.width = o.width();
                    s.height = o.height();
                    s.bw = s.startwidth / o.width();
                    s.bh = s.startheight / o.height();
                    if (s.width != s.startwidth) {
                        s.height = Math.round(s.startheight * (s.width / s.startwidth));
                        o.height(s.height)
                    }
                    if (s.shadow != 0) {
                        o.parent().append('<div class="tp-bannershadow tp-shadow' + s.shadow + '"></div>');
                        o.parent().find(".tp-bannershadow").css({width: s.width})
                    }
                    o.find("ul").css({display: "none"});
                    if (s.lazyLoad != "on") {
                        o.waitForImages(function() {
                            o.find("ul").css({display: "block"});
                            m(o, s);
                            if (s.slideamount > 1)
                                l(o, s);
                            if (s.slideamount > 1)
                                u(o, s);
                            if (s.slideamount > 1)
                                c(o, s);
                            e("#unvisible_button").click(function() {
                                s.navigationArrows = e(".selectnavarrows").val();
                                s.navigationType = e(".selectnavtype").val();
                                s.navigationStyle = e(".selectnavstyle").val();
                                s.soloArrowStyle = "default";
                                e(".tp-bullets").remove();
                                e(".tparrows").remove();
                                if (s.slideamount > 1)
                                    l(o, s);
                                if (s.slideamount > 1)
                                    u(o, s);
                                if (s.slideamount > 1)
                                    c(o, s)
                            });
                            h(o, s);
                            if (s.hideThumbs > 0)
                                p(o, s);
                            o.waitForImages(function() {
                                o.find(".tp-loader").fadeOut(600);
                                setTimeout(function() {
                                    S(o, s);
                                    if (s.slideamount > 1)
                                        B(o, s);
                                    o.trigger("revolution.slide.onloaded")
                                }, 600)
                            })
                        })
                    } else {
                        var C = o.find("ul >li >img").first();
                        if (C.data("lazyload") != t)
                            C.attr("src", C.data("lazyload"));
                        C.data("lazydone", 1);
                        C.parent().waitForImages(function() {
                            o.find("ul").css({display: "block"});
                            m(o, s);
                            if (s.slideamount > 1)
                                l(o, s);
                            if (s.slideamount > 1)
                                u(o, s);
                            if (s.slideamount > 1)
                                c(o, s);
                            h(o, s);
                            if (s.hideThumbs > 0)
                                p(o, s);
                            C.parent().waitForImages(function() {
                                o.find(".tp-loader").fadeOut(600);
                                setTimeout(function() {
                                    S(o, s);
                                    if (s.slideamount > 1)
                                        B(o, s);
                                    o.trigger("revolution.slide.onloaded")
                                }, 600)
                            })
                        })
                    }
                    e(window).resize(function() {
                        if (e("body").find(o) != 0)
                            if (o.outerWidth(true) != s.width) {
                                r(o, s)
                            }
                    });
                    o.find(".tp-scrollbelowslider").on("click", function() {
                        var t = 0;
                        try {
                            t = e("body").find(s.fullScreenOffsetContainer).height()
                        } catch (n) {
                        }
                        try {
                            t = t - e(this).data("scrolloffset")
                        } catch (n) {
                        }
                        e("body,html").animate({scrollTop: o.offset().top + o.find(">ul >li").height() - t + "px"}, {duration: 400})
                    })
                }
            })
        }, revscroll: function(t) {
            return this.each(function() {
                var n = e(this);
                e("body,html").animate({scrollTop: n.offset().top + n.find(">ul >li").height() - t + "px"}, {duration: 400})
            })
        }, revpause: function(t) {
            return this.each(function() {
                var t = e(this);
                t.data("conthover", 1);
                t.data("conthover-changed", 1);
                t.trigger("revolution.slide.onpause");
                var n = t.parent().find(".tp-bannertimer");
                n.stop()
            })
        }, revresume: function(t) {
            return this.each(function() {
                var t = e(this);
                t.data("conthover", 0);
                t.data("conthover-changed", 1);
                t.trigger("revolution.slide.onresume");
                var n = t.parent().find(".tp-bannertimer");
                var r = n.data("opt");
                n.animate({width: "100%"}, {duration: r.delay - r.cd - 100, queue: false, easing: "linear"})
            })
        }, revnext: function(t) {
            return this.each(function() {
                var t = e(this);
                t.parent().find(".tp-rightarrow").click()
            })
        }, revprev: function(t) {
            return this.each(function() {
                var t = e(this);
                t.parent().find(".tp-leftarrow").click()
            })
        }, revmaxslide: function(t) {
            return e(this).find(">ul:first-child >li").length
        }, revcurrentslide: function(t) {
            var n = e(this);
            var r = n.parent().find(".tp-bannertimer");
            var i = r.data("opt");
            return i.act
        }, revlastslide: function(t) {
            var n = e(this);
            var r = n.parent().find(".tp-bannertimer");
            var i = r.data("opt");
            return i.lastslide
        }, revshowslide: function(t) {
            return this.each(function() {
                var n = e(this);
                n.data("showus", t);
                n.parent().find(".tp-rightarrow").click()
            })
        }})
})(jQuery);
(function(e) {
    function r(e) {
        if (e in t.style)
            return e;
        var n = ["Moz", "Webkit", "O", "ms"];
        var r = e.charAt(0).toUpperCase() + e.substr(1);
        if (e in t.style) {
            return e
        }
        for (var i = 0; i < n.length; ++i) {
            var s = n[i] + r;
            if (s in t.style) {
                return s
            }
        }
    }
    function i() {
        t.style[n.transform] = "";
        t.style[n.transform] = "rotateY(90deg)";
        return t.style[n.transform] !== ""
    }
    function f(e) {
        if (typeof e === "string") {
            this.parse(e)
        }
        return this
    }
    function l(e, t, n) {
        if (t === true) {
            e.queue(n)
        } else if (t) {
            e.queue(t, n)
        } else {
            n()
        }
    }
    function c(t) {
        var n = [];
        e.each(t, function(t) {
            t = e.camelCase(t);
            t = e.transit.propertyMap[t] || e.cssProps[t] || t;
            t = d(t);
            if (e.inArray(t, n) === -1) {
                n.push(t)
            }
        });
        return n
    }
    function h(t, n, r, i) {
        var s = c(t);
        if (e.cssEase[r]) {
            r = e.cssEase[r]
        }
        var o = "" + m(n) + " " + r;
        if (parseInt(i, 10) > 0) {
            o += " " + m(i)
        }
        var u = [];
        e.each(s, function(e, t) {
            u.push(t + " " + o)
        });
        return u.join(", ")
    }
    function p(t, r) {
        if (!r) {
            e.cssNumber[t] = true
        }
        e.transit.propertyMap[t] = n.transform;
        e.cssHooks[t] = {get: function(n) {
                var r = e(n).css("transit:transform");
                return r.get(t)
            }, set: function(n, r) {
                var i = e(n).css("transit:transform");
                i.setFromString(t, r);
                e(n).css({"transit:transform": i})
            }}
    }
    function d(e) {
        return e.replace(/([A-Z])/g, function(e) {
            return"-" + e.toLowerCase()
        })
    }
    function v(e, t) {
        if (typeof e === "string" && !e.match(/^[\-0-9\.]+$/)) {
            return e
        } else {
            return"" + e + t
        }
    }
    function m(t) {
        var n = t;
        if (typeof n === "string" && !n.match(/^[\-0-9\.]+/)) {
            n = e.fx.speeds[n] || e.fx.speeds._default
        }
        return v(n, "ms")
    }
    e.transit = {version: "0.9.9", propertyMap: {marginLeft: "margin", marginRight: "margin", marginBottom: "margin", marginTop: "margin", paddingLeft: "padding", paddingRight: "padding", paddingBottom: "padding", paddingTop: "padding"}, enabled: true, useTransitionEnd: false};
    var t = document.createElement("div");
    var n = {};
    var s = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    n.transition = r("transition");
    n.transitionDelay = r("transitionDelay");
    n.transform = r("transform");
    n.transformOrigin = r("transformOrigin");
    n.transform3d = i();
    var o = {transition: "transitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", WebkitTransition: "webkitTransitionEnd", msTransition: "MSTransitionEnd"};
    var u = n.transitionEnd = o[n.transition] || null;
    for (var a in n) {
        if (n.hasOwnProperty(a) && typeof e.support[a] === "undefined") {
            e.support[a] = n[a]
        }
    }
    t = null;
    e.cssEase = {_default: "ease", "in": "ease-in", out: "ease-out", "in-out": "ease-in-out", snap: "cubic-bezier(0,1,.5,1)", easeInCubic: "cubic-bezier(.55, .055, .675, .19)", easeOutCubic: "cubic-bezier(.215,.61,.355,1)", easeInOutCubic: "cubic-bezier(.645,.045,.355,1)", easeInCirc: "cubic-bezier(.6,.04,.98,.335)", easeOutCirc: "cubic-bezier(.075,.82,.165,1)", easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)", easeInExpo: "cubic-bezier(.95,.05,.795,.035)", easeOutExpo: "cubic-bezier(.19,1,.22,1)", easeInOutExpo: "cubic-bezier(1,0,0,1)", easeInQuad: "cubic-bezier(.55,.085,.68,.53)", easeOutQuad: "cubic-bezier(.25,.46,.45,.94)", easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)", easeInQuart: "cubic-bezier(.895,.03,.685,.22)", easeOutQuart: "cubic-bezier(.165,.84,.44,1)", easeInOutQuart: "cubic-bezier(.77,0,.175,1)", easeInQuint: "cubic-bezier(.755,.05,.855,.06)", easeOutQuint: "cubic-bezier(.23,1,.32,1)", easeInOutQuint: "cubic-bezier(.86,0,.07,1)", easeInSine: "cubic-bezier(.47,0,.745,.715)", easeOutSine: "cubic-bezier(.39,.575,.565,1)", easeInOutSine: "cubic-bezier(.445,.05,.55,.95)", easeInBack: "cubic-bezier(.6,-.28,.735,.045)", easeOutBack: "cubic-bezier(.175, .885,.32,1.275)", easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"};
    e.cssHooks["transit:transform"] = {get: function(t) {
            return e(t).data("transform") || new f
        }, set: function(t, r) {
            var i = r;
            if (!(i instanceof f)) {
                i = new f(i)
            }
            if (n.transform === "WebkitTransform" && !s) {
                t.style[n.transform] = i.toString(true)
            } else {
                t.style[n.transform] = i.toString()
            }
            e(t).data("transform", i)
        }};
    e.cssHooks.transform = {set: e.cssHooks["transit:transform"].set};
    if (e.fn.jquery < "1.8") {
        e.cssHooks.transformOrigin = {get: function(e) {
                return e.style[n.transformOrigin]
            }, set: function(e, t) {
                e.style[n.transformOrigin] = t
            }};
        e.cssHooks.transition = {get: function(e) {
                return e.style[n.transition]
            }, set: function(e, t) {
                e.style[n.transition] = t
            }}
    }
    p("scale");
    p("translate");
    p("rotate");
    p("rotateX");
    p("rotateY");
    p("rotate3d");
    p("perspective");
    p("skewX");
    p("skewY");
    p("x", true);
    p("y", true);
    f.prototype = {setFromString: function(e, t) {
            var n = typeof t === "string" ? t.split(",") : t.constructor === Array ? t : [t];
            n.unshift(e);
            f.prototype.set.apply(this, n)
        }, set: function(e) {
            var t = Array.prototype.slice.apply(arguments, [1]);
            if (this.setter[e]) {
                this.setter[e].apply(this, t)
            } else {
                this[e] = t.join(",")
            }
        }, get: function(e) {
            if (this.getter[e]) {
                return this.getter[e].apply(this)
            } else {
                return this[e] || 0
            }
        }, setter: {rotate: function(e) {
                this.rotate = v(e, "deg")
            }, rotateX: function(e) {
                this.rotateX = v(e, "deg")
            }, rotateY: function(e) {
                this.rotateY = v(e, "deg")
            }, scale: function(e, t) {
                if (t === undefined) {
                    t = e
                }
                this.scale = e + "," + t
            }, skewX: function(e) {
                this.skewX = v(e, "deg")
            }, skewY: function(e) {
                this.skewY = v(e, "deg")
            }, perspective: function(e) {
                this.perspective = v(e, "px")
            }, x: function(e) {
                this.set("translate", e, null)
            }, y: function(e) {
                this.set("translate", null, e)
            }, translate: function(e, t) {
                if (this._translateX === undefined) {
                    this._translateX = 0
                }
                if (this._translateY === undefined) {
                    this._translateY = 0
                }
                if (e !== null && e !== undefined) {
                    this._translateX = v(e, "px")
                }
                if (t !== null && t !== undefined) {
                    this._translateY = v(t, "px")
                }
                this.translate = this._translateX + "," + this._translateY
            }}, getter: {x: function() {
                return this._translateX || 0
            }, y: function() {
                return this._translateY || 0
            }, scale: function() {
                var e = (this.scale || "1,1").split(",");
                if (e[0]) {
                    e[0] = parseFloat(e[0])
                }
                if (e[1]) {
                    e[1] = parseFloat(e[1])
                }
                return e[0] === e[1] ? e[0] : e
            }, rotate3d: function() {
                var e = (this.rotate3d || "0,0,0,0deg").split(",");
                for (var t = 0; t <= 3; ++t) {
                    if (e[t]) {
                        e[t] = parseFloat(e[t])
                    }
                }
                if (e[3]) {
                    e[3] = v(e[3], "deg")
                }
                return e
            }}, parse: function(e) {
            var t = this;
            e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(e, n, r) {
                t.setFromString(n, r)
            })
        }, toString: function(e) {
            var t = [];
            for (var r in this) {
                if (this.hasOwnProperty(r)) {
                    if (!n.transform3d && (r === "rotateX" || r === "rotateY" || r === "perspective" || r === "transformOrigin")) {
                        continue
                    }
                    if (r[0] !== "_") {
                        if (e && r === "scale") {
                            t.push(r + "3d(" + this[r] + ",1)")
                        } else if (e && r === "translate") {
                            t.push(r + "3d(" + this[r] + ",0)")
                        } else {
                            t.push(r + "(" + this[r] + ")")
                        }
                    }
                }
            }
            return t.join(" ")
        }};
    e.fn.transition = e.fn.transit = function(t, r, i, s) {
        var o = this;
        var a = 0;
        var f = true;
        var c = e.extend(true, {}, t);
        if (typeof r === "function") {
            s = r;
            r = undefined
        }
        if (typeof r === "object") {
            i = r.easing;
            a = r.delay || 0;
            f = r.queue || true;
            s = r.complete;
            r = r.duration
        }
        if (typeof i === "function") {
            s = i;
            i = undefined
        }
        if (typeof c.easing !== "undefined") {
            i = c.easing;
            delete c.easing
        }
        if (typeof c.duration !== "undefined") {
            r = c.duration;
            delete c.duration
        }
        if (typeof c.complete !== "undefined") {
            s = c.complete;
            delete c.complete
        }
        if (typeof c.queue !== "undefined") {
            f = c.queue;
            delete c.queue
        }
        if (typeof c.delay !== "undefined") {
            a = c.delay;
            delete c.delay
        }
        if (typeof r === "undefined") {
            r = e.fx.speeds._default
        }
        if (typeof i === "undefined") {
            i = e.cssEase._default
        }
        r = m(r);
        var p = h(c, r, i, a);
        var d = e.transit.enabled && n.transition;
        var v = d ? parseInt(r, 10) + parseInt(a, 10) : 0;
        if (v === 0) {
            var g = function(e) {
                o.css(c);
                if (s) {
                    s.apply(o)
                }
                if (e) {
                    e()
                }
            };
            l(o, f, g);
            return o
        }
        var y = {};
        var b = function(r) {
            var i = false;
            var a = function() {
                if (i) {
                    o.unbind(u, a)
                }
                if (v > 0) {
                    o.each(function() {
                        this.style[n.transition] = y[this] || null
                    })
                }
                if (typeof s === "function") {
                    s.apply(o)
                }
                if (typeof r === "function") {
                    r()
                }
            };
            if (v > 0 && u && e.transit.useTransitionEnd) {
                i = true;
                o.bind(u, a)
            } else {
                window.setTimeout(a, v)
            }
            o.each(function() {
                if (v > 0) {
                    this.style[n.transition] = p
                }
                e(this).css(t)
            })
        };
        var w = function(e) {
            this.offsetWidth;
            b(e)
        };
        l(o, f, w);
        return this
    };
    e.transit.getTransitionValue = h
})(jQuery);
(function(e, t) {
    jQuery.easing["jswing"] = jQuery.easing["swing"];
    jQuery.extend(jQuery.easing, {def: "easeOutQuad", swing: function(e, t, n, r, i) {
            return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
        }, easeInQuad: function(e, t, n, r, i) {
            return r * (t /= i) * t + n
        }, easeOutQuad: function(e, t, n, r, i) {
            return-r * (t /= i) * (t - 2) + n
        }, easeInOutQuad: function(e, t, n, r, i) {
            if ((t /= i / 2) < 1)
                return r / 2 * t * t + n;
            return-r / 2 * (--t * (t - 2) - 1) + n
        }, easeInCubic: function(e, t, n, r, i) {
            return r * (t /= i) * t * t + n
        }, easeOutCubic: function(e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t + 1) + n
        }, easeInOutCubic: function(e, t, n, r, i) {
            if ((t /= i / 2) < 1)
                return r / 2 * t * t * t + n;
            return r / 2 * ((t -= 2) * t * t + 2) + n
        }, easeInQuart: function(e, t, n, r, i) {
            return r * (t /= i) * t * t * t + n
        }, easeOutQuart: function(e, t, n, r, i) {
            return-r * ((t = t / i - 1) * t * t * t - 1) + n
        }, easeInOutQuart: function(e, t, n, r, i) {
            if ((t /= i / 2) < 1)
                return r / 2 * t * t * t * t + n;
            return-r / 2 * ((t -= 2) * t * t * t - 2) + n
        }, easeInQuint: function(e, t, n, r, i) {
            return r * (t /= i) * t * t * t * t + n
        }, easeOutQuint: function(e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t * t * t + 1) + n
        }, easeInOutQuint: function(e, t, n, r, i) {
            if ((t /= i / 2) < 1)
                return r / 2 * t * t * t * t * t + n;
            return r / 2 * ((t -= 2) * t * t * t * t + 2) + n
        }, easeInSine: function(e, t, n, r, i) {
            return-r * Math.cos(t / i * (Math.PI / 2)) + r + n
        }, easeOutSine: function(e, t, n, r, i) {
            return r * Math.sin(t / i * (Math.PI / 2)) + n
        }, easeInOutSine: function(e, t, n, r, i) {
            return-r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
        }, easeInExpo: function(e, t, n, r, i) {
            return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
        }, easeOutExpo: function(e, t, n, r, i) {
            return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
        }, easeInOutExpo: function(e, t, n, r, i) {
            if (t == 0)
                return n;
            if (t == i)
                return n + r;
            if ((t /= i / 2) < 1)
                return r / 2 * Math.pow(2, 10 * (t - 1)) + n;
            return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        }, easeInCirc: function(e, t, n, r, i) {
            return-r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
        }, easeOutCirc: function(e, t, n, r, i) {
            return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
        }, easeInOutCirc: function(e, t, n, r, i) {
            if ((t /= i / 2) < 1)
                return-r / 2 * (Math.sqrt(1 - t * t) - 1) + n;
            return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        }, easeInElastic: function(e, t, n, r, i) {
            var s = 1.70158;
            var o = 0;
            var u = r;
            if (t == 0)
                return n;
            if ((t /= i) == 1)
                return n + r;
            if (!o)
                o = i * .3;
            if (u < Math.abs(r)) {
                u = r;
                var s = o / 4
            } else
                var s = o / (2 * Math.PI) * Math.asin(r / u);
            return-(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
        }, easeOutElastic: function(e, t, n, r, i) {
            var s = 1.70158;
            var o = 0;
            var u = r;
            if (t == 0)
                return n;
            if ((t /= i) == 1)
                return n + r;
            if (!o)
                o = i * .3;
            if (u < Math.abs(r)) {
                u = r;
                var s = o / 4
            } else
                var s = o / (2 * Math.PI) * Math.asin(r / u);
            return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
        }, easeInOutElastic: function(e, t, n, r, i) {
            var s = 1.70158;
            var o = 0;
            var u = r;
            if (t == 0)
                return n;
            if ((t /= i / 2) == 2)
                return n + r;
            if (!o)
                o = i * .3 * 1.5;
            if (u < Math.abs(r)) {
                u = r;
                var s = o / 4
            } else
                var s = o / (2 * Math.PI) * Math.asin(r / u);
            if (t < 1)
                return-.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n;
            return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
        }, easeInBack: function(e, t, n, r, i, s) {
            if (s == undefined)
                s = 1.70158;
            return r * (t /= i) * t * ((s + 1) * t - s) + n
        }, easeOutBack: function(e, t, n, r, i, s) {
            if (s == undefined)
                s = 1.70158;
            return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
        }, easeInOutBack: function(e, t, n, r, i, s) {
            if (s == undefined)
                s = 1.70158;
            if ((t /= i / 2) < 1)
                return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n;
            return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
        }, easeInBounce: function(e, t, n, r, i) {
            return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
        }, easeOutBounce: function(e, t, n, r, i) {
            if ((t /= i) < 1 / 2.75) {
                return r * 7.5625 * t * t + n
            } else if (t < 2 / 2.75) {
                return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n
            } else if (t < 2.5 / 2.75) {
                return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n
            } else {
                return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
            }
        }, easeInOutBounce: function(e, t, n, r, i) {
            if (t < i / 2)
                return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n;
            return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
        }});
    e.waitForImages = {hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]};
    e.expr[":"].uncached = function(t) {
        var n = document.createElement("img");
        n.src = t.src;
        return e(t).is('img[src!=""]') && !n.complete
    };
    e.fn.waitForImages = function(t, n, r) {
        if (e.isPlainObject(arguments[0])) {
            n = t.each;
            r = t.waitForAll;
            t = t.finished
        }
        t = t || e.noop;
        n = n || e.noop;
        r = !!r;
        if (!e.isFunction(t) || !e.isFunction(n)) {
            throw new TypeError("An invalid callback was supplied.")
        }
        return this.each(function() {
            var i = e(this), s = [];
            if (r) {
                var o = e.waitForImages.hasImageProperties || [], u = /url\((['"]?)(.*?)\1\)/g;
                i.find("*").each(function() {
                    var t = e(this);
                    if (t.is("img:uncached")) {
                        s.push({src: t.attr("src"), element: t[0]})
                    }
                    e.each(o, function(e, n) {
                        var r = t.css(n);
                        if (!r) {
                            return true
                        }
                        var i;
                        while (i = u.exec(r)) {
                            s.push({src: i[2], element: t[0]})
                        }
                    })
                })
            } else {
                i.find("img:uncached").each(function() {
                    s.push({src: this.src, element: this})
                })
            }
            var a = s.length, f = 0;
            if (a == 0) {
                t.call(i[0])
            }
            e.each(s, function(r, s) {
                var o = new Image;
                e(o).bind("load error", function(e) {
                    f++;
                    n.call(s.element, f, a, e.type == "load");
                    if (f == a) {
                        t.call(i[0]);
                        return false
                    }
                });
                o.src = s.src
            })
        })
    };
    e.fn.swipe = function(t) {
        if (!this)
            return false;
        var n = {fingers: 1, threshold: 75, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, click: null, triggerOnTouchEnd: true, allowPageScroll: "auto"};
        var r = "left";
        var i = "right";
        var s = "up";
        var o = "down";
        var u = "none";
        var a = "horizontal";
        var f = "vertical";
        var l = "auto";
        var c = "start";
        var h = "move";
        var p = "end";
        var d = "cancel";
        var v = "ontouchstart"in window, m = v ? "touchstart" : "mousedown", g = v ? "touchmove" : "mousemove", y = v ? "touchend" : "mouseup", b = "touchcancel";
        var w = "start";
        if (t.allowPageScroll == undefined && (t.swipe != undefined || t.swipeStatus != undefined))
            t.allowPageScroll = u;
        if (t)
            e.extend(n, t);
        return this.each(function() {
            function t() {
                var e = S();
                if (e <= 45 && e >= 0)
                    return r;
                else if (e <= 360 && e >= 315)
                    return r;
                else if (e >= 135 && e <= 225)
                    return i;
                else if (e > 45 && e < 135)
                    return o;
                else
                    return s
            }
            function S() {
                var e = P.x - H.x;
                var t = H.y - P.y;
                var n = Math.atan2(t, e);
                var r = Math.round(n * 180 / Math.PI);
                if (r < 0)
                    r = 360 - Math.abs(r);
                return r
            }
            function x() {
                return Math.round(Math.sqrt(Math.pow(H.x - P.x, 2) + Math.pow(H.y - P.y, 2)))
            }
            function T(e, t) {
                if (n.allowPageScroll == u) {
                    e.preventDefault()
                } else {
                    var c = n.allowPageScroll == l;
                    switch (t) {
                        case r:
                            if (n.swipeLeft && c || !c && n.allowPageScroll != a)
                                e.preventDefault();
                            break;
                        case i:
                            if (n.swipeRight && c || !c && n.allowPageScroll != a)
                                e.preventDefault();
                            break;
                        case s:
                            if (n.swipeUp && c || !c && n.allowPageScroll != f)
                                e.preventDefault();
                            break;
                        case o:
                            if (n.swipeDown && c || !c && n.allowPageScroll != f)
                                e.preventDefault();
                            break
                        }
                }
            }
            function N(e, t) {
                if (n.swipeStatus)
                    n.swipeStatus.call(M, e, t, direction || null, distance || 0);
                if (t == d) {
                    if (n.click && (D == 1 || !v) && (isNaN(distance) || distance == 0))
                        n.click.call(M, e, e.target)
                }
                if (t == p) {
                    if (n.swipe) {
                        n.swipe.call(M, e, direction, distance)
                    }
                    switch (direction) {
                        case r:
                            if (n.swipeLeft)
                                n.swipeLeft.call(M, e, direction, distance);
                            break;
                        case i:
                            if (n.swipeRight)
                                n.swipeRight.call(M, e, direction, distance);
                            break;
                        case s:
                            if (n.swipeUp)
                                n.swipeUp.call(M, e, direction, distance);
                            break;
                        case o:
                            if (n.swipeDown)
                                n.swipeDown.call(M, e, direction, distance);
                            break
                        }
                }
            }
            function C(e) {
                D = 0;
                P.x = 0;
                P.y = 0;
                H.x = 0;
                H.y = 0;
                B.x = 0;
                B.y = 0
            }
            function k(e) {
                e.preventDefault();
                distance = x();
                direction = t();
                if (n.triggerOnTouchEnd) {
                    w = p;
                    if ((D == n.fingers || !v) && H.x != 0) {
                        if (distance >= n.threshold) {
                            N(e, w);
                            C(e)
                        } else {
                            w = d;
                            N(e, w);
                            C(e)
                        }
                    } else {
                        w = d;
                        N(e, w);
                        C(e)
                    }
                } else if (w == h) {
                    w = d;
                    N(e, w);
                    C(e)
                }
                O.removeEventListener(g, L, false);
                O.removeEventListener(y, k, false)
            }
            function L(e) {
                if (w == p || w == d)
                    return;
                var r = v ? e.touches[0] : e;
                H.x = r.pageX;
                H.y = r.pageY;
                direction = t();
                if (v) {
                    D = e.touches.length
                }
                w = h;
                T(e, direction);
                if (D == n.fingers || !v) {
                    distance = x();
                    if (n.swipeStatus)
                        N(e, w, direction, distance);
                    if (!n.triggerOnTouchEnd) {
                        if (distance >= n.threshold) {
                            w = p;
                            N(e, w);
                            C(e)
                        }
                    }
                } else {
                    w = d;
                    N(e, w);
                    C(e)
                }
            }
            function A(e) {
                var t = v ? e.touches[0] : e;
                w = c;
                if (v) {
                    D = e.touches.length
                }
                distance = 0;
                direction = null;
                if (D == n.fingers || !v) {
                    P.x = H.x = t.pageX;
                    P.y = H.y = t.pageY;
                    if (n.swipeStatus)
                        N(e, w)
                } else {
                    C(e)
                }
                O.addEventListener(g, L, false);
                O.addEventListener(y, k, false)
            }
            var O = this;
            var M = e(this);
            var _ = null;
            var D = 0;
            var P = {x: 0, y: 0};
            var H = {x: 0, y: 0};
            var B = {x: 0, y: 0};
            try {
                this.addEventListener(m, A, false);
                this.addEventListener(b, C)
            } catch (j) {
            }
        })
    }
})(jQuery)