class CreateBusinessCategoryMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :business_category_memberships do |t|
      t.integer :business_id, null: false, index: true, foreign_key: true
      t.integer :business_category_id, null: false, index: true, foreign_key: true
      t.timestamps
    end
  end
end
