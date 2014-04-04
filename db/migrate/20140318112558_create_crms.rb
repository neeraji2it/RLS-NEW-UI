class CreateCrms < ActiveRecord::Migration
  def change
    create_table :crms do |t|
      t.string :exe_name
      t.string :builder_name
      t.string :location
      t.date :crm_date
      t.string :listing, :limit => 4
      t.integer :no_of_listings
      t.text :comment
      t.string :payment_type
      t.string :property_name
      
      t.timestamps
    end
  end
end
