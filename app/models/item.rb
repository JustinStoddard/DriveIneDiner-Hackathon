class Item < ApplicationRecord
  belongs_to :cart
  has_many :carts, through: :purchases
end
