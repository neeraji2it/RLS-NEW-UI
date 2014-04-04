class AddBudgetLocationFieldsToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :from_budget, :float
    add_column :contacts, :to_budget, :float
    add_column :contacts, :location, :string
  end
end
