const React = require('react')
class Show extends React.Component {
    render() {
        const { product } = this.props
        return (
            <div>
                <link rel="stylesheet" href="/css/app.css"/>
                <title>{product.name}</title>
                <h1 className="productName">{product.name}</h1>
                <img src={product.img} id="productImgShow"></img>
                <p class="productDescription">{product.description}</p>
                <p class="productPrice">{product.price.toLocaleString("en-US", {style:'currency', currency:'USD'})}</p>
                <p class="productQty">Quantity: {product.qty}</p>
                <form action={`/products/${product.id}/edit`}>
                        <input type="submit" value="Edit" />
                </form>
                <form action = {`/products/${product._id}?_method=PATCH`} method= "POST">
                            {product.qty > 0 ? <input type = "submit" value = "BUY NOW!!!" class="buyProduct"/> : null} <br></br><br></br>
                </form>
                <a href="/products">Back to the index</a>
            </div>
        )
    }
}

module.exports = Show;