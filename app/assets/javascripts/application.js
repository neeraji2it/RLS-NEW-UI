// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-datepicker

function LoadMapProperty(lat_long) {
    var location = lat_long;
    var markers = new Array();
    var mapOptions = {
        center: new google.maps.LatLng(location[0], location[1]),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById('property-map'), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[0], location[1]),
        map: map,
        icon: '/assets/marker.png'
    });

    var myOptions = {
        content: '<div class="infobox"><div class="image"><img src="' + location[3] + '" alt="" width="50" height="50"></div><div class="title">' + location[2] + ' - ' + location[7] + '</div><div class="area"><span class="key">Type:</span><span class="value">' + location[8] + '</span></div><div class="area"><span class="key">Area:</span><span class="value">' + location[4] + ' SQFT</span></div><div class="price">PRICE:' + location[6] + ' INR</div><div class="link"><a href="/properties/' + location[5] + '">View more</a></div></div>',
        disableAutoPan: false,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(-146, -190),
        zIndex: null,
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(1, 1),
        position: new google.maps.LatLng(location[0], location[1]),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false
    };
    marker.infobox = new InfoBox(myOptions);
    marker.infobox.isOpen = false;

    var myOptions = {
        draggable: true,
        content: '<div class="marker"><div class="marker-inner"></div></div>',
        disableAutoPan: true,
        pixelOffset: new google.maps.Size(-21, -58),
        position: new google.maps.LatLng(location[0], location[1]),
        closeBoxURL: "",
        isHidden: false,
        // pane: "mapPane",
        enableEventPropagation: true
    };
    marker.marker = new InfoBox(myOptions);
    marker.marker.open(map, marker);
    markers.push(marker);

    google.maps.event.addListener(marker, "click", function(e) {
        var curMarker = this;

        $.each(markers, function(index, marker) {
            // if marker is not the clicked marker, close the marker
            if (marker !== curMarker) {
                marker.infobox.close();
                marker.infobox.isOpen = false;
            }
        });


        if (curMarker.infobox.isOpen === false) {
            curMarker.infobox.open(map, this);
            curMarker.infobox.isOpen = true;
            map.panTo(curMarker.getPosition());
        } else {
            curMarker.infobox.close();
            curMarker.infobox.isOpen = false;
        }

    });
}

function add_fields(link, association, content) {
    var new_id = new Date().getTime();
    var regexp = new RegExp("new_" + association, "g");
    $(link).parent().before(content.replace(regexp, new_id));
}


function remove_fields(link) {
    $(link).prev("input[type=hidden]").val("1");
    $(link).closest(".fields").hide();
}

$(document).ready(function() {
    $(".close").click(function() {
        $("#errorExplanation").hide();
    });
});

$(document).ready(function() {
    $('#crm_crm_date').datepicker({
        format: "dd-mm-yyyy",
        parseFormats: ["yyyy-mm-dd"]
    });
});

function get_properties(blr) {
    if (jQuery(blr).val() !== '') {
        $.ajax({
            url: "/admin/crms/" + jQuery(blr).val() + "/builder_properties/",
            type: "GET",
            dataType: 'script',
            success: function(data) {

            }
        });
    } else {

    }
}

