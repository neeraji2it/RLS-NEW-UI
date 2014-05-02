class Addbathroomstoproperties < ActiveRecord::Migration
  def change
    add_column :properties, :bath_rooms, :integer
  end
end
