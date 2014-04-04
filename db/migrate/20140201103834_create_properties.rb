class CreateProperties < ActiveRecord::Migration
  def change
    create_table :properties do |t|
      t.string :property_type
      t.string :property_listing
      t.string :title
      t.integer :price
      t.string :no_of_rooms
      t.string :area
      t.string :furnished
      t.string :city
      t.string :location
      t.text :description
      t.string :person_type
      t.string :name
      t.string :email
      t.string :mobile
      t.string :type_of_land
      t.string :accomidiation
      t.float :longitude
      t.float :latitude
      t.boolean :gmaps
      t.string :status,:default => "active"
      t.timestamps
    end
  end
end
