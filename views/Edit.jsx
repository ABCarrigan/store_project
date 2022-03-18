const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">
        <link rel="stylesheet" href="/css/app.css"/>      
        {/* The Layout takes in a prop called Title and we pass the Edit Page to it */}
        <form action={`/products/${this.props.products._id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={this.props.products.name}/><br/>
        Image Link: <input type="text" name="img"  defaultValue={this.props.products.img}/><br/>
        Description: <input type="text" name="description" defaultValue={this.props.products.description}/>
        <br></br>
        Price: <input type="number" name="price" defaultValue={this.props.products.price}/>
        <br></br>
        Quantity: <input type="number" name="quantity" defaultValue={this.props.products.qty}/>
        <br/>
        <br/>
        <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports = Edit;