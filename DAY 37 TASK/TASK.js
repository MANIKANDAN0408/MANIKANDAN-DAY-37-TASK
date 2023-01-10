
db.Task.insertMany(
  [
     {
         "id": "1",
         "product_name": "Steel Car",
         "product_price": 690.00,
         "product_material": "Rubber",
         "product_color": "gold"
      },
      {
        "id": "2",
        "product_name": "Cotton Chair",
        "product_price": 33.00,
        "product_material": "Fresh",
        "product_color": "black"
      },
      {   
         "id": "3",
          "product_name": "Fresh Chips",
          "product_price": 655.00,
          "product_material": "Concrete",
          "product_color": "mint green"
      },
      {
          "id": "4",
          "product_name": "Plastic Pants",
          "product_price": 490.00,
          "product_material": "Soft",
          "product_color": "plum"
      },
      {
           "id": "5",
           "product_name": "Fresh Sausages",
           "product_price": 911.0,
           "product_material": "Cotton",
           "product_color": "indigo"
      },
      {
          "id": "6",
          "product_name": " Wooden Towels",
          "product_price": 470.00,
          "product_material": "Plastic",
          "product_color": "orange"
      },
      {
          "id": "7",
          "product_name": " Soft Shoes",
          "product_price": 520.00,
          "product_material": "Rubber",
          "product_color": "pink"
      },
      {
          "id": "8",
          "product_name": "Steel Hat",
          "product_price": 800.00,
          "product_material": "Rubber",
          "product_color": "violet"
      },
      {
          "id": "9",
          "product_name": "Wooden Ball",
          "product_price": 30.00,
          "product_material": "Soft",
          "product_color": "azure"
      },
      {
          "id": "10",
          "product_name": "Wooden Pizza",
          "product_price": 89.00,
          "product_material": "Frozen",
          "product_color": "indigo"
      },
      {
          "id": "11",
          "product_name": "Wooden Cheese",
          "product_price": 25.00,
          "product_material": "Soft",
          "product_color": "black"
      },
      {
          "id": "12",
          "product_name": "Plastic Salad",
          "product_price": 90.00,
          "product_material": "Wooden",
          "product_color": "pink"
      },
      {
          "id": "13",
          "product_name": "Cotton Keyboard",
          "product_price": 35.00,
          "product_material": "Concrete",
          "product_color": "sky blue"
      },
      {
          "id": "14",
          "product_name": "Steel Shirt",
          "product_price": 750.00,
          "product_material": "Metal",
          "product_color": "white"
      },
      {
          "id": "15",
          "product_name": "Cotton Hat",
          "product_price": 45.00,
          "product_material": "Rubber",
          "product_color": "mint green"
      },
      {
          "id": "16",
          "product_name": "Soft Chair",
          "product_price": 48.00,
          "product_material": "Cotton",
          "product_color": "teal"
      },
      {
          "id": "17",
          "product_name": " Metal Car",
          "product_price": 39.00,
          "product_material": "Fresh",
          "product_color": "indigo"
      },
      {
          "id": "18",
          "product_name": "Plastic Bacon",
          "product_price": 90.00,
          "product_material": "Steel",
          "product_color": "yellow"
      },
      {
          "id": "19",
          "product_name": "Cotton Chips",
          "product_price": 50.00,
          "product_material": "Soft",
          "product_color": "azure"
      },
      {
          "id": "20",
          "product_name": "Wooden Bacon",
          "product_price": 40.00,
          "product_material": "Concrete",
          "product_color": "lime"
      },
      {
          "id": "21",
          "product_name": "Granite Chicken",
          "product_price": 90.00,
          "product_material": "Metal",
          "product_color": "gold"
      },
      {
        "id": "22",
        "product_name": "Steel Car",
        "product_price": 20.00,
        "product_material": "Cotton",
        "product_color": "indigo"
      },
      {
          "id": "23",
          "product_name": "Steel Pizza",
          "product_price": 90.00,
          "product_material": "Cotton",
          "product_color": "azure"
      },
      {
          "id": "24",
          "product_name": "Rubber Cheese",
          "product_price": 50.00,
          "product_material": "Frozen",
          "product_color": "orchid"
      },
      {
          "id": "25",
          "product_name": "Soft Hat",
          "product_price": 99.00,
          "product_material": "Rubber",
          "product_color": "black"
      }
  ]
)






//1. Find all the information about each products

db.day1Task.find()



//2. Find the product price which are between 400 to 800

db.day1Task.find({ product_price: { $gt: 400, $lt: 600 } })



//3. Find the product price which are not between 400 to 600

db.day1Task.find({ product_price: { $not: { $gt: 400, $lt: 600 } } })



//4. List the four product which are grater than 500 in price

db.day1Task.find({ product_price: { $gt: 500 } }).limit(4)



//5. Find the product name and product material of each products

db.day1Task.find({}, { _id: 0, product_name: 1, product_material: 1 })



//6. Find the product with a row id of 10

db.day1Task.find({ id: '10' })



//7. Find only the product name and product material

db.day1Task.find({ id: '10' }, { _id: 0, product_name: 1, product_material: 1 })



//8. Find all products which contain the value of soft in product material 

db.day1Task.find({ product_material: 'Soft' })



//9. Find products which contain product color indigo and product price 492.00

db.day1Task.aggregate([
    { $match: { product_color: 'indigo', product_price: 492.00 } }
])
db.day1Task.find({ product_color: 'indigo', product_price: 492 })


//10. Delete the products which product price value are same

db.day1Task.delete({ product_price: { $eq: '$product_price' } })
