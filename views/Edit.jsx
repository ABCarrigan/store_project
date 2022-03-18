const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">
        <link rel="stylesheet" href="/css/app.css"/>      
        {/* The Layout takes in a prop called Title and we pass the Edit Page to it */}
        <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>
        Color: <input type="text" name="color"  defaultValue={this.props.product.color}/><br/>
        Is Ready To Eat:
          { this.props.product.readyToEat? <input type="checkbox" name="readyToEat" defaultChecked />: <input type="checkbox" name="readyToEat"/> }
        <br/>
        <br/>
        <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports = Edit;