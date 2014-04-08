class Contactmailer < ActionMailer::Base
  default :from => "ezyprops@ezyprops.com"
  def enquiry(contact, property)
    @contact = contact
    @property = property
    @message = "#{contact.email} wants to enquiry your property"
    mail(:to => @property.email, :subject => @message)
  end
  def enquiry_admin(contact,property)
    @contact = contact
    @property = property
    mail(:to=> ADMIN_EMAIL,:subject=>"#{@contact.name} has viewed #{@property.title} property")
  end
  def need_list(contact)
    @contact = contact
    mail(:to=> contact.email,:subject=>"Contact Info from ezyprops")
  end
end
