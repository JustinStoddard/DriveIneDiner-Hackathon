class Cart < ApplicationRecord
  has_many :items, through: :purchases
  has_many :purchases
end
 