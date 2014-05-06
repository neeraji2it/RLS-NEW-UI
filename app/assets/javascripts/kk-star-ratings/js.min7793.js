/**
 * Plugin: kk Star Ratings
 *
 * Description: js for the wordpress plugin kk Star Ratings.
 *
 * @package kk Star Ratings
 * @subpackage WordPress Plugin
 * @author Kamal Khan
 * @plugin_uri http://wakeusup.com/2011/05/kk-star-ratings/
 */
(function(c, b, a, d) {
    c.fn.kkstarratings = function(e) {
        c.fn.kkstarratings.options = c.extend({ajaxurl: null, nonce: null, func: null, grs: false, msg: "Rate this post", fuelspeed: 400, thankyou: "Thank you for rating.", error_msg: "An error occured.", tooltip: true, tooltips: {0: {tip: "Poor", color: "red"}, 1: {tip: "Fair", color: "brown"}, 2: {tip: "Average", color: "orange"}, 3: {tip: "Good", color: "blue"}, 4: {tip: "Excellent", color: "green"}}}, c.fn.kkstarratings.options, e ? e : {});
        var f = [];
        this.each(function() {
            f.push(c(this))
        });
        c.fn.kkstarratings.fetch(f, 0, "0%", c.fn.kkstarratings.options.msg, true);
        return this.each(function() {
        })
    };
    c.fn.kkstarratings.animate = function(g) {
        if (!g.hasClass("disabled")) {
            var f = c(".kksr-legend", g).html(), e = c(".kksr-fuel", g).css("width");
            c(".kksr-stars a", g).hover(function() {
                var h = c(this).attr("href").split("#")[1];
                if (c.fn.kkstarratings.options.tooltip != 0) {
                    if (c.fn.kkstarratings.options.tooltips[h - 1] != null) {
                        c(".kksr-legend", g).html('<span style="color:' + c.fn.kkstarratings.options.tooltips[h - 1].color + '">' + c.fn.kkstarratings.options.tooltips[h - 1].tip + "</span>")
                    } else {
                        c(".kksr-legend", g).html(f)
                    }
                }
                c(".kksr-fuel", g).stop(true, true).css("width", "0%");
                c(".kksr-stars a", g).each(function(j, k) {
                    var i = c(this), l = i.attr("href").split("#")[1];
                    if (parseInt(l) <= parseInt(h)) {
                        c(".kksr-stars a", g).stop(true, true);
                        i.hide().addClass("kksr-star").addClass("orange").fadeIn("fast")
                    }
                })
            }, function() {
                c(".kksr-stars a", g).removeClass("kksr-star").removeClass("orange");
                if (c.fn.kkstarratings.options.tooltip != 0) {
                    c(".kksr-legend", g).html(f)
                }
                c(".kksr-fuel", g).stop(true, true).animate({width: e}, c.fn.kkstarratings.options.fuelspeed)
            }).unbind("click").click(function() {
                return c.fn.kkstarratings.click(g, c(this).attr("href").split("#")[1])
            })
        } else {
            c(".kksr-stars a", g).unbind("click").click(function() {
                return false
            })
        }
    };
    c.fn.kkstarratings.update = function(h, e, g, f, i) {
        if (f == "true") {
            c(".kksr-fuel", h).removeClass("yellow").addClass("orange")
        }
        c(".kksr-fuel", h).stop(true, true).animate({width: e}, c.fn.kkstarratings.options.fuelspeed, "linear", function() {
            if (f == "true") {
                h.addClass("disabled");
                c(".kksr-stars a", h).unbind("hover")
            }
            if (!c.fn.kkstarratings.options.grs || !i) {
                c(".kksr-legend", h).stop(true, true).hide().html(g ? g : c.fn.kkstarratings.options.msg).fadeIn("slow", function() {
                    c.fn.kkstarratings.animate(h)
                })
            } else {
                c.fn.kkstarratings.animate(h)
            }
        })
    };
    c.fn.kkstarratings.click = function(h, e) {
        c(".kksr-stars a", h).unbind("hover").unbind("click").removeClass("kksr-star").removeClass("orange").click(function() {
            return false
        });
        var g = c(".kksr-legend", h).html(), f = c(".kksr-fuel", h).css("width");
        c.fn.kkstarratings.fetch(h, e, f, g, false);
        return false
    };
    c.fn.kkstarratings.fetch = function(g, e, i, h, j) {
        var f = [];
        c.each(g, function() {
            f.push(c(this).attr("data-id"))
        });
        c.ajax({url: c.fn.kkstarratings.options.ajaxurl, data: "action=" + c.fn.kkstarratings.options.func + "&id=" + f + "&stars=" + e + "&_wpnonce=" + c.fn.kkstarratings.options.nonce, type: "post", dataType: "json", beforeSend: function() {
                c(".kksr-fuel", g).animate({width: "0%"}, c.fn.kkstarratings.options.fuelspeed);
                if (e) {
                    c(".kksr-legend", g).fadeOut("fast", function() {
                        c(".kksr-legend", g).html('<span style="color: green">' + c.fn.kkstarratings.options.thankyou + "</span>")
                    }).fadeIn("slow")
                }
            }, success: function(k) {
                c.each(g, function() {
                    var m = c(this), l = m.attr("data-id");
                    if (k[l].success) {
                        c.fn.kkstarratings.update(m, k[l].fuel + "%", k[l].legend, k[l].disable, j)
                    } else {
                        c.fn.kkstarratings.update(m, i, h, false, j)
                    }
                })
            }, complete: function() {
            }, error: function(k) {
                c(".kksr-legend", g).fadeOut("fast", function() {
                    c(".kksr-legend", g).html('<span style="color: red">' + c.fn.kkstarratings.options.error_msg + "</span>")
                }).fadeIn("slow", function() {
                    c.fn.kkstarratings.update(g, i, h, false, j)
                })
            }})
    };
    //c.fn.kkstarratings.options = {ajaxurl: bhittani_plugin_kksr_js.ajaxurl, func: bhittani_plugin_kksr_js.func, nonce: bhittani_plugin_kksr_js.nonce, grs: bhittani_plugin_kksr_js.grs, tooltip: bhittani_plugin_kksr_js.tooltip, tooltips: bhittani_plugin_kksr_js.tooltips, msg: bhittani_plugin_kksr_js.msg, fuelspeed: bhittani_plugin_kksr_js.fuelspeed, thankyou: bhittani_plugin_kksr_js.thankyou, error_msg: bhittani_plugin_kksr_js.error_msg}
    c.fn.kkstarratings.options = ""
})(jQuery, window, document);
jQuery(document).ready(function(a) {
    a(".kk-star-ratings").kkstarratings()
});