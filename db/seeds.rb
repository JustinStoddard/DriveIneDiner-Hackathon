# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
items = [ {
  name: "Pot Stickers (6) Vegetable",
  description: "",
  price: "5.95",
},
  {
  name: "Pot Stickers (6) BBQ Pork",
  description: "",
  price: "5.95",
  },{
  name: "Egg Roll (2)",
  description: "Pork Egg Rolls",
  price: "7.25",
  },{
  name: "Paper Wrapped Chicken",
  description: "",
  price: "5.35",
  },{
  name: "Cream Cheese Wanton",
  description: "Wantons with Cream Cheese. ",
  price: "6.85",
  },{
  name: "Dragon Wings (6)",
  description: "Dragons Famous Wings",
  price: "1.25",
  },{
  name: "Hot & Sour Soup",
  description: "Souper Soup",
  price: "6.25",
  },{
  name: "Egg Flower Soup",
  description: "Souper Soup",
  price: "7.25",
  },{
  name: "Wanton Soup",
  description: "Souper Soup",
  price: "",
  },{
  name: "Mixed Vegetable Soup",
  description: "Souper Soup",
  price: "7.25",
},
  {
  name: "Yangchow Wanton Soup (for 2)",
  description: "Souper Soup",
  price: "7.25",
  },{
  name: "Noodle Soup",
  description: "Choice of Beef, Chicken or Pork",
  price: "7.25",
  },{
  name: "Fried Rice",
  description: "Choice of Chicken, Ham, Chicken,",
  price: "9.55",
  },{
  name: "Tropical Chicken Fried Rice",
  description: "Chicken fried rice with sweet and sour sauce and pineapple added for a unique taste",
  price: "9.55",
  },{
  name: "Yangchow Fried Rice",
  description: "Special combination of pork, ham, and shrimp fried rice Curry added on request",
  price: "9.55",
  },{
  name: "Chow Mein (Crispy Noodles)",
  description: "Choice of chicken, beef, pork, vegetable, shrimp, or house special",
  price: "9.55",
  },{
  name: "Lo Mein (Soft Noodles)",
  description: "Choice of pork, chicken, beef, shrimp, house special, or vegetable",
  price: "9.55",
  },{
  name: "Pan-Fried Noodles",
  description: "",
  price: "9.55",
  } ]

  items.each do |item|
  Item.create(
    name: item [:name],
    description: item[:description],
    price: item[:price],
  )
end
  
