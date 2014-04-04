class AddViewCountToProperties < ActiveRecord::Migration
  def change
    add_column :properties, :view_count, :integer, :default => 0
    add_column :properties, :contacts_count, :integer, :default => 0
  end
end
