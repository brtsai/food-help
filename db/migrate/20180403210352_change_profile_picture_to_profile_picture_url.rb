class ChangeProfilePictureToProfilePictureUrl < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :profile_picture, :profile_picture_url 
  end
end
