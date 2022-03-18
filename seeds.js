require('dotenv').config()
const Product = require('./models/products')
const db = require('./models/db')
db.once('open', () => {
    console.log('seeds.js: connected to mongo, initializing seed...')
})

const seedProducts = [
        {
            name:'Cheeseburger',
            description:'A hamburger with cheese!',
            img:'https://github.com/ABCarrigan/store_project/blob/master/images/cheeseburger.jpg?raw=true',
            price:(3.99),
            qty:(99)
        },
        {
            name:'Hamburger',
            description:'A boring cheeseburger...',
            img:'https://github.com/ABCarrigan/store_project/blob/master/images/hamburger.jpg?raw=true',
            price:(3.49),
            qty:(99)        
        },
        {
            name:'Fries',
            description:'Crispy, golden french fries',
            img:'https://github.com/ABCarrigan/store_project/blob/master/images/frenchfries.jpg?raw=true',
            price:(0.99),
            qty:(99)
        },
        {
            name:'Chicken Wings',
            description:'Bone-in wings. Limited time offer!',
            img:'https://github.com/ABCarrigan/store_project/blob/master/images/chickenwings.jpg?raw=true',
            price:(5.99),
            qty:(10)
        },
        {
            name:'Cola',
            description:'The staple soda!',
            img:'https://github.com/ABCarrigan/store_project/blob/master/images/cola.jpg?raw=true',
            price:(0.99),
            qty:(99)
        },
        {
            name:'Water',
            description:'The tried and true beverage.',
            img:'https://github.com/ABCarrigan/store_project/blob/master/images/water.jpg?raw=true',
            price:(0.99),
            qty:(99)
        }
]
const seedDB = async () => {
    await Product.deleteMany({})
    await Product.insertMany(seedProducts)
}

seedDB().then(() => {
    console.log('Seed intialized, closing connection to mongoDB')
    db.close()
})