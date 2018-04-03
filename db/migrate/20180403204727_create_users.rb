class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :profile_picture, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.timestamps
    end
    add_index :users, :username
  end
end
