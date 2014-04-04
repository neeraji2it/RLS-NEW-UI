class PropertyMailer < ActionMailer::Base
  include SendGrid
  default from: "ezyprops@ezyprops.com"
  sendgrid_category :use_subject_lines
  sendgrid_enable   :ganalytics, :opentrack
  
  def confirm_property(property)
    @property = property
    mail(:to => @property.email, :subject => "Confirmation from EZYPROPS")
  end
  
  def update_property(property)
    @property = property
    mail(:to=>@property.email, :subject=>"Update Info from EZYPROPS")
  end
  
  def news_letter(emails,subject,body)
    @emails = emails.join(",")
    @subject = subject
    @body = body
    sendgrid_category "contacts"
    sendgrid_recipients emails
    mail(:to=> @emails,:subject=>@subject)
  end
  
  def send_mail(email,subject,body,ids_array)
    @email = email
    @subject = subject
    @body = body
    @ids_array = ids_array
    @properties = Property.find(@ids_array.split(","))
    mail(:to=>@email,:subject=>@subject)
  end
   
  def send_property(contact,property)
    @contact = contact
    @property = property
    mail(:to=>@contact.email,:subject=>"Properties Info from EZYPROPS")
  end
  
end