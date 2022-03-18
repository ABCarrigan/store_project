const React = require('react');

class Index extends React.Component {
  render() {
    return (<div>
        <link rel="stylesheet" href="/css/app.css"/>
        <h1>Products Index Page</h1>
        <div className="productsContainer">
            { this.props.products.map((product,i)=>{
                return (<div key = {i} className="productIndividual">
                    <img src={product.img} className="productImg"></img>
                    <h3 class="productName">{product.name}</h3>
                    <p class="productDescription">{product.description}</p>
                    <p class="productPrice">{product.price.toLocaleString("en-US", {style:'currency', currency:'USD'})}</p>
                    <p class="productQty">Quantity: {product.qty}</p>
                    </div>)
            })
            }
        </div>
    </div>
    )
  }
}
module.exports = Index