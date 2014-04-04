require 'active_support/core_ext/hash'
#require 'will_paginate/array' 
class HomeController < ApplicationController
  
  def index
    @properties = Property.all.order("created_at DESC")
    @contact = Contact.new
  end
end
