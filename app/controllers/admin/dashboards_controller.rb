class Admin::DashboardsController < ApplicationController
  def index
    @properties = Property.where("property_listing = 'Sale'")
  end
  
  def inactivate_property
    @property = Property.find(params[:id])
    @property.update_attributes(:status => "Inactive")
    flash[:notice]= "Property was inactivated successfully."
    respond_to do |format|
      format.js
    end
  end
  
  def activate_property
    @property = Property.find(params[:id])
    @property.update_attributes!(:status => "active")
    flash[:notice]= "Property was activated successfully."
    respond_to do |format|
      format.js
    end
  end
  def users
    @users = Property.all
  end
end
