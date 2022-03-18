const React = require('react');
const Product = require('../models/products');

class Show extends React.Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="/css/app.css"/>
                <h1>Products show page</h1>
                The { Product.name } 
            </div>
        )
    }
}

module.exports = Show;