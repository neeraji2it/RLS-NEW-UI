class AddCreatiwaToProperties < ActiveRecord::Migration
  def change
    add_column :properties, :creatiwa_team, :string, :limit => 3
  end
end
