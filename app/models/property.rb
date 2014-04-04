class Property < ActiveRecord::Base
  
  has_many :images , :dependent => :destroy
  accepts_nested_attributes_for :images, :allow_destroy => true, :reject_if=>:all_blank
  
  has_many :aminities , :dependent => :destroy
  accepts_nested_attributes_for :aminities, :allow_destroy => true, :reject_if=>:all_blank
  scope :type_of_property, ->(property_type) { where("property_type = '#{property_type}'") if !property_type.blank? }
  scope :list_property, ->(property_listing) { where("property_listing IN (?)", property_listing) if !property_listing.blank? }
  scope :property_location, ->(location) { where("location = '#{location}'") if !location.blank? }
  scope :property_price, ->(price_from,price_to) { where("price BETWEEN (?) AND (?)",price_from,price_to) if !price_from.blank? and !price_to.blank? }
  scope :property_minprice,->(min_price) {where("price >= (?)",min_price) if !min_price.blank?}
  scope :property_maxprice,->(max_price) {where("price <= (?)",max_price) if !max_price.blank?}
  
  before_create :assign_property_listing
  
  def gmaps4rails_address
    "#{self.location}"
  end
  

  def assign_property_listing
    self.property_listing = "Sale" if self.property_type == "Land"
  end
  
  validates :no_of_rooms,:furnished,:area,:presence => {:if => :apartment_required?}
  def apartment_required?
    !self.property_type.nil? and ['Apartment'].include?(self.property_type)
  end
  
  validates :no_of_rooms,:furnished,:area,:presence => {:if => :villa_required?}
  def villa_required?
    !self.property_type.nil? and ['Villa'].include?(self.property_type)
  end
  
  validates :type_of_land,:presence => {:if => :land_required?}
  def land_required?
    !self.property_type.nil? and ['Land'].include?(self.property_type)
  end

  validates :furnished,:area,:presence => {:if => :office_required?}
  def office_required?
    !self.property_type.nil? and ['OfficeCommercial'].include?(self.property_type)
  end
  
  validates :property_type,:property_listing,:price,:person_type,:name,:email,:mobile,:presence => true
  validates :price,:numericality => true
  acts_as_gmappable

   validates :terms_of_service, acceptance: true
  
end
