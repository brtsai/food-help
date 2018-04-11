class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false, foreign_key: true, index: true
      t.integer :business_id, null: false, foreign_key: true, index: true
      t.integer :rating, null: false, inclusion: [1,2,3,4,5]
      t.text :review, null: false
      t.timestamps
    end
  end
end
