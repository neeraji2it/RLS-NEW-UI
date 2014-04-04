class Admin::UsersController < ApplicationController
  def index
    @users = Contact.all
  end
  
  def builders
    @builders = Property.select("id, name, email, mobile, COUNT(id) as listing_count").where("person_type = 'Builder'").group(:name, :email, :mobile)
  end
  
  def brokers
    @brokers = Property.select("id, name, email, mobile, COUNT(id) as listing_count").where("person_type = 'Broker'").group(:name, :email, :mobile)
  end
  
  def individuals
    @individuals = Property.select("id, name, email, person_type, mobile, COUNT(id) as listing_count").where("person_type = 'Individual'").group(:name, :email, :mobile)
  end
  
  def listing_properties
    @user = Property.find(params[:id])
    @properties = Property.where("name = '#{@user.name}' and email = '#{@user.email}' and mobile = '#{@user.mobile}'")
  end
  
  def destroy
    @user = Contact.find(params[:id])
    if @user.destroy
      flash[:notice] = "Contact has been deleted successfully."
      redirect_to  admin_users_path
    else
    end
  end
  
end
