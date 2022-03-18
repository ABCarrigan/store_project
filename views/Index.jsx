const React = require('react');



class Index extends React.Component {
    constructor(props) {
        super(props);
        this.buyProduct = this.buyProduct.bind(this);
    }
    buyProduct() {
        product.qty --
        console.log (product.qty)
    }
  render() {
    return (<div>
        <link rel="stylesheet" href="/css/app.css"/>
        <h1>Diner</h1>
        <div className="productsContainer">
            { this.props.products.map((product,i)=>{
                return (<div key = {i} className="productIndividual">
                    <button onClick={this.buyProduct} class="buyProduct">BUY NOW!!!</button><br></br><br></br>
                    <img src={product.img} className="productImg"></img>
                    <h3 class="productName">{product.name}</h3>
                    <p class="productDescription">{product.description}</p>
                    <p class="productPrice">{product.price.toLocaleString("en-US", {style:'currency', currency:'USD'})}</p>
                    <p class="productQty">Quantity: {product.qty}</p>
                    <button class="editProduct">Edit</button>
                    <button class="deleteProduct">Delete</button>
                    </div>)
            })
            }
        </div>
    </div>
    )
  }
}
module.exports = Index