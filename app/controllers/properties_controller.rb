class PropertiesController < ApplicationController
  
  def index
    @properties = Property.all.order("created_at DESC").paginate(:page => params[:page], :per_page => 10)
  end
  
  def new
    @property = Property.new
    1.times{@property.aminities.build}
    1.times{@property.images.build}
  end
  
  def create
    @property = Property.new(property_params)
    if @property.no_of_rooms.present?
      @property.no_of_rooms = params[:property][:no_of_rooms].reject { |c| c.blank? }.split("\n").join(',')
    end  
    
    if @property.save
      if params[:amenity_type]
        params[:amenity_type].each do |ami|
          Aminity.create(:property_id => @property.id,:aminity_type => ami)
        end
      end
      PropertyMailer.confirm_property(@property).deliver
      Contact.select("email,name").group(:email).each do |contact|
        PropertyMailer.send_property(contact, @property).deliver
      end
      flash[:notice] = "Listing property successfull!"
      redirect_to root_path
    else
      flash[:error] = "Listing property failed!"
      1.times{@property.aminities.build}
      1.times{@property.images.build}
      render :action => :new
    end
  end
  
  def show
    @property = Property.find(params[:id])
    @properties = Property.all
    @lat_long = [@property.latitude,@property.longitude,@property.title,@property.images.present? ? @property.images.first.image : "",@property.area,@property.id,@property.price, @property.location, @property.no_of_rooms]
    @contact = params[:contact_id].present? ? Contact.find(params[:contact_id]) : Contact.new
  end
  
  def update_view_count
    @property = Property.find(params[:id])
    @property.update_attribute(:view_count, @property.view_count + 1)
    redirect_to property_path(:id => @property.id, :contact_id => params[:contact_id])
  end
  
  def search
    if params[:search].present? and (!params[:search][:property_type].blank? or !params[:search][:property_listing].blank? or !params[:search][:location].blank? or !params[:search][:price_from].blank? or !params[:search][:price_to].blank?)
      @properties = Property.type_of_property(params[:search][:property_type]).list_property(params[:search][:property_listing]).property_location(params[:search][:location]).property_price(params[:search][:price_from],params[:search][:price_to])
      @lat_longs = []
      @properties.each do |prop|
        @lat_longs<<[prop.latitude,prop.longitude,prop.title,prop.images.present? ? prop.images.first.image : " ",prop.area,prop.id,prop.price, prop.location, prop.no_of_rooms]
      end
    else
      @lat_longs = []
      @properties = []
    end
    @properties_rent = Property.where("property_listing = 'Rent'")   
    @properties_sale = Property.where("property_listing = 'Sale'").order("created_at DESC").paginate(:page => params[:page], :per_page => 12)
    @properties_lease = Property.where("property_listing = 'Lease'")
    @contact = Contact.new
  end
  
  def post_contact
    @exs_contact = Contact.where("property_id = ? and name = ? and email = ? and phone = ?",params[:id], params[:contact][:name], params[:contact][:email], params[:contact][:phone]).first
    @property = Property.find(params[:id])
    @properties = Property.all
    @contact = Contact.new(contact_params)
    @contact.property_id = @property.id
    if @exs_contact.present?
      @exs_contact.update_attributes(contact_params)
      Contactmailer.enquiry(@exs_contact, @property).deliver
      Contactmailer.enquiry_admin(@exs_contact,@property).deliver
    else
      if @contact.save
        Contactmailer.enquiry(@contact, @property).deliver
        Contactmailer.enquiry_admin(@contact,@property).deliver
        @property.update_attribute(:contacts_count, @property.contacts_count + 1)
      else
        render :action => 'show'
      end
    end
  end
  
  def send_contact
    @property = Property.find(params[:property_id])
    @contact = Contact.new(contact_params)
    if @contact.valid?
      @contact = Contact.where("property_id = ? and name = ? and email = ?", @property.id, params[:contact][:name], params[:contact][:email]).first_or_create(:property_id => @property.id, :name => params[:contact][:name], :email => params[:contact][:email], :phone => params[:contact][:phone])
      Contactmailer.enquiry(@contact, @property).deliver
      Contactmailer.enquiry_admin(@contact,@property).deliver
      @property.update_attribute(:contacts_count, @property.contacts_count + 1)
    end
    respond_to do |format|
      format.js
    end
  end
  
  def request_contact
    @contact = Contact.new(contact_params)
    Contact.where("name = ? and email = ? and phone = ? and location = ? and from_budget = ? and to_budget = ?",  params[:contact][:name], params[:contact][:email],params[:contact][:phone],params[:contact][:location],params[:contact][:from_budget],params[:contact][:to_budget]).first_or_create( :name => params[:contact][:name], :email => params[:contact][:email], :phone => params[:contact][:phone],:location  => params[:contact][:location],:from_budget =>params[:contact][:from_budget],:to_budget=>params[:contact][:to_budget])
    flash[:notice] = "Relax now, we have taken down your requirements and will notify you once we have properties matching your criteria."
    Contactmailer.need_list(@contact).deliver
    respond_to do |format|
      format.js
    end
  end
  
  def edit
    @property = Property.find(params[:id])
  end
  
  def update
    @property = Property.find(params[:id])
    @property.update_attribute(:status,params[:status])
    redirect_to admin_dashboards_path
  end
  
  
  private
  def property_params
    params.require(:property).permit!
  end
  def contact_params
    params.require(:contact).permit!
  end
end
