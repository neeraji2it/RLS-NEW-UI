class CreateAminities < ActiveRecord::Migration
  def change
    create_table :aminities do |t|
      t.integer :property_id
      t.string :aminity_type 
      t.timestamps
    end
  end
end
