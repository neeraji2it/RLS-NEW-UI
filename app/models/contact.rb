class Contact < ActiveRecord::Base
  belongs_to :property
  validates :name,:email,:presence => true
  validates :location,:from_budget,:to_budget,:presence => {:if => :request_contact_required?}
  def request_contact_required?
    !self.location.nil? and !self.from_budget and !self.to_budget
  end
end
