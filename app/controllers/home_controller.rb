require 'active_support/core_ext/hash'
#require 'will_paginate/array' 
class HomeController < ApplicationController
  
  def index
    @properties = Property.all.order("created_at DESC")
    @lat_longs = []
    @types = []
    @contents = []
    @properties.each do |prop|
      @lat_longs << [prop.latitude,prop.longitude]
      @types << [prop.property_type.split('/')[0]]
      @contents << ['<div class="infobox clearfix"><div class="close"><img src="/assets/img/cross.png" alt=""></div><div class="image"><a href='"properties/#{prop.id}"'><img src='"#{prop.images.present? ? prop.images.first.image : " "}"' alt='"#{prop.title}"' width=100 height=100></a></div><div class="info"><div class="title"><a href='"properties/#{prop.id}"'>'"#{prop.title}"'</a></div><div class="location">'"#{prop.location}"'</div><div class="property-info clearfix"><div class="area"><i class="icon icon-normal-cursor-scale-up"></i>'"#{prop.area}"'m<sup>2</sup></div><div class="bedrooms"><i class="icon icon-normal-bed"></i>'"#{prop.no_of_rooms}"'</div><div class="bathrooms"><i class="icon icon-normal-shower"></i>'"#{prop.no_of_rooms}"'</div></div><div class="price">'"#{prop.price}"' INR</div><div class="link"><a href="properties/'"#{prop.id}"'">View more</a></div></div></div>']
    end
    @contact = Contact.new
  end
end
