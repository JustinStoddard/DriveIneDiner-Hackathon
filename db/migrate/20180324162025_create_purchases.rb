class CreatePurchases < ActiveRecord::Migration[5.1]
  def change
    create_table :purchases do |t|
      t.string :name
      t.string :price
      t.integer :quantity
      t.integer :item_id
      t.integer :cart_id

      t.timestamps
    end
  end
end
