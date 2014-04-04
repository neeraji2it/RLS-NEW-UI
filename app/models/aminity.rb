class Aminity < ActiveRecord::Base
  attr_accessor :destroy
  belongs_to :property
end
