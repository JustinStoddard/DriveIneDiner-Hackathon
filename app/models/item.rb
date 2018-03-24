class Item < ApplicationRecord
  has_many :purchases
  has_many :carts, through: :purchases
end
