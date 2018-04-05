class CreateBusinesses < ActiveRecord::Migration[5.1]
  def change
    create_table :businesses do |t|
      t.integer :owner_id, null: false, foreign_key: true, index: true
      t.string :name, null: false
      t.string :neighbourhood
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.decimal :latitude, null: false
      t.decimal :longitude, null: false
      t.decimal :price, null: false
      t.timestamps
    end
  end
end
