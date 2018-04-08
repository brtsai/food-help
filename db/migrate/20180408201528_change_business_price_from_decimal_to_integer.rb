class ChangeBusinessPriceFromDecimalToInteger < ActiveRecord::Migration[5.1]
  def change
    change_column :businesses, :price, :integer, null: false
  end
end
