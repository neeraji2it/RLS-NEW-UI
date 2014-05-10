require 'will_paginate/array' 
class Admin::PropertiesController < ApplicationController
  before_action :is_login?
  #GET /admin/properties/sale
  def sale
    @property_type = "sale"
    @properties = Property.where("property_listing = ?", 'Sale').order("created_at desc").paginate(:page => params[:page], :per_page => 20)
  end
  #GET /admin/properties/rent
  def rent
    @property_type = "rent"
    @properties = Property.where("property_listing = ?", 'Rent').order("created_at desc").paginate(:page => params[:page], :per_page => 20)
  end
  #GET /admin/properties/lease
  def lease
    @property_type = "lease"
    @properties = Property.where("property_listing = ?", 'Lease').order("created_at desc").paginate(:page => params[:page], :per_page => 20)
  end
  
  def filter_by_dates
    
  end
  
  def edit
    @property = Property.find(params[:id])
  end
  
  def update
    @property = Property.find(params[:id])
    if @property.update_attributes(property_params)
      flash[:notice] = "Property successfully updated"
      PropertyMailer.update_property(@property).deliver
      redirect_to "/admin/properties/#{params[:property_type]}"
    else
      render :edit
    end
  end
  
  def send_mail
    @email = params[:email]
    @subject = params[:subject]
    @body = params[:body]
    @property_ids = params[:id_value]
    PropertyMailer.send_mail(@email,@subject,@body,@property_ids).deliver
    redirect_to "/admin/properties/#{params[:property_type]}"
  end
  
  def search
    @properties = Property.list_property(params[:property_type]).property_location(params[:location]).property_price(params[:min_price],params[:max_price]).property_minprice(params[:min_price]).property_maxprice(params[:max_price]).paginate(:page => params[:page], :per_page =>20)
    puts "================="
    puts @properties.inspect
    @property_type = params[:property_type]
  end
  
  def destroy
    @property = Property.find(params[:id])
    if @property.destroy
      flash[:notice] = "Property has been deleted successfully."
      redirect_to "/admin/properties/#{params[:property_type]}"
    else
    end
  end
  
  private
  def property_params
    params.require(:property).permit!
  end
end
