class Admin::NewslettersController < ApplicationController
  def new
    
  end
  
  def create
    if params[:user_type]== "users"
      @users = Contact.all
      common_code(@users)
    elsif params[:user_type]== "builders"
      @builders = Property.all
      common_code(@builders)
    else
      @users = Contact.all
      common_code(@users)
      @builders = Property.all
      common_code(@builders)
    end
    redirect_to new_admin_newsletter_path
  end
  
  def common_code(users)
    @user_mails = []
    users.each do |user|
      @user_mails<< [user.email]
    end
    @subject = params[:subject]
    @body = params[:body]
    PropertyMailer.news_letter(@user_mails.uniq,@subject,@body).deliver
  end
end
