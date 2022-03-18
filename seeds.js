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
            img:'images/cheeseburger.jpg',
            price:(3.99),
            qty:(99)
        },
        {
            name:'Hamburger',
            description:'A boring cheeseburger...',
            img:'images/hamburger.jpg',
            price:(3.49),
            qty:(99)        
        },
        {
            name:'Fries',
            description:'Crispy, golden french fries',
            img:'images/fries.jpg',
            price:(0.99),
            qty:(99)
        },
        {
            name:'Chicken Wings',
            description:'Bone-in wings. Limited time offer!',
            img:'images/chickenwings.jpg',
            price:(5.99),
            qty:(10)
        },
        {
            name:'Cola',
            description:'The staple soda!',
            img:'images/cola.jpg',
            price:(0.99),
            qty:(99)
        },
        {
            name:'Water',
            description:'The tried and true beverage.',
            img:'images/water.jpg',
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