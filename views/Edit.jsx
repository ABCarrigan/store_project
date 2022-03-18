const React = require('react');
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">
        <link rel="stylesheet" href="/css/app.css"/>      
        {/* The Layout takes in a prop called Title and we pass the Edit Page to it */}
        <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>
        Image Link: <input type="text" name="img"  defaultValue={this.props.product.img}/><br/>
        Description: <input type="text" name="description" defaultValue={this.props.product.description}/>
        <br></br>
        Price: <input type="number" min="0" step="0.01" name="price" defaultValue={this.props.product.price}/>
        <br></br>
        Quantity: <input type="number" min="0" name="qty" defaultValue={this.props.product.qty}/>
        <br/>
        <br/>
        <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports = Edit;