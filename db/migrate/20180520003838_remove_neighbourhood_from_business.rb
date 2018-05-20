class RemoveNeighbourhoodFromBusiness < ActiveRecord::Migration[5.1]
  def change
    remove_column :businesses, :neighbourhood
  end
end
