class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  layout :layout
  before_filter :contact_method
  
  def layout
    (params[:controller] == "properties" or params[:controller] == "home") ? 'application' : 'admin'
  end
  
  def after_sign_in_path_for(resource_or_scope)
    if resource_or_scope.is_a?(Admin)
      rent_admin_properties_path
    elsif resource_or_scope.is_a?(User)
      new_property_path
    end
  end
  
  def contact_method
    @contact ||= Contact.new
  end
  
  def is_login?
    unless signed_in?
      flash[:error] = "Please login."
      redirect_to new_admin_session_path
    end
  end
end
