const React = require('react');

class Index extends React.Component {
  render() {
    return (<div>
        <link rel="stylesheet" href="/css/app.css"/>
        <h1>Diner</h1>
        <div className="productsContainer">
            { this.props.products.map((product,i)=>{
                return (<div key = {i} className="productIndividual">
                        <form action={`/products/${product.id}`}>
                        <input type="submit" value="View" class="buyProduct"/>
                        </form>
                        <img src={product.img} className="productImg"></img>
                        <h3 class="productName">{product.name}</h3>
                        <p class="productDescription">{product.description}</p>
                        <p class="productPrice">{product.price.toLocaleString("en-US", {style:'currency', currency:'USD'})}</p>
                        <p class="productQty">Quantity: {product.qty}</p>
                        <form action={`/products/${product.id}/edit`}>
                        <input type="submit" value="Edit" />
                        </form>
                        <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="DELETE"/>
                        </form>
                    </div>)
            })
            }
            <a href="/products/new"><div class ="addDishButton"><p class ="promptText">Click here <br></br> to add a new dish!</p></div></a>
        </div>
    </div>
    )
  }
}
module.exports = Index