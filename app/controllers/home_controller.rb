require 'active_support/core_ext/hash'
#require 'will_paginate/array' 
class HomeController < ApplicationController
  
  def index
    @properties = Property.all.order("created_at DESC")
    @lat_longs = []
    @types = []
    @contents = []
    @property_types = []
    @properties_map = Property.all
    @properties_map.each do |prop|
      @lat_longs << [prop.latitude,prop.longitude]
      @types << [prop.property_type.split('/')[0].split(" ")[0]]
      if prop.property_type=="Apartment" or prop.property_type=="Villa" or prop.property_type=="Single Home" or prop.property_type=="Family House"
        @contents << ['<div class="infobox clearfix"><div class="close"><img src="/assets/img/cross.png" alt=""></div><div class="image"><a href="#myModal" role="button" data-toggle="modal" onclick=javascript:$("#property_id").val('"#{prop.id}"')><img src='"#{prop.images.present? ? prop.images.first.image : " "}"' alt='"#{prop.title}"' width=100 height=100></a></div><div class="info"><div class="title"><a href="#myModal" role="button" data-toggle="modal" onclick=javascript:$("#property_id").val('"#{prop.id}"')>'"#{prop.title}"'</a></div><div class="location">'"#{prop.location}"'</div><div class="property-info clearfix"><div class="area"><i class="icon icon-normal-cursor-scale-up"></i>'"#{prop.area}"'m<sup>2</sup></div><div class="bedrooms"><i class="icon icon-normal-bed"></i>'"#{prop.no_of_rooms}"'</div><div class="bathrooms"><i class="icon icon-normal-shower"></i>'"#{prop.bath_rooms}"'</div></div><div class="price">'"#{prop.price}"' INR</div><div class="link"> <a href="#myModal" role="button" data-toggle="modal" onclick=javascript:$("#property_id").val('"#{prop.id}"')>View more</a></div></div></div>']
      else
        @contents << ['<div class="infobox clearfix"><div class="close"><img src="/assets/img/cross.png" alt=""></div><div class="image"><a href="#myModal" role="button" data-toggle="modal" onclick=javascript:$("#property_id").val('"#{prop.id}"')><img src='"#{prop.images.present? ? prop.images.first.image : " "}"' alt='"#{prop.title}"' width=100 height=100></a></div><div class="info"><div class="title"><a href="#myModal" role="button" data-toggle="modal" onclick=javascript:$("#property_id").val('"#{prop.id}"')>'"#{prop.title}"'</a></div><div class="location">'"#{prop.location}"'</div><div class="property-info clearfix"><div class="area"><i class="icon icon-normal-cursor-scale-up"></i>'"#{prop.area}"'m<sup>2</sup></div></div><div class="price">'"#{prop.price}"' INR</div><div class="link"><a href="#myModal" role="button" data-toggle="modal" onclick=javascript:$("#property_id").val('"#{prop.id}"')>View more</a></div></div></div>']
      end
    end
    @contact = Contact.new
  end
end
