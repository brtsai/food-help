class CreateBusinessCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :business_categories do |t|
      t.string :category, null: false, index: true, unique: true
      t.timestamps
    end
  end
end
