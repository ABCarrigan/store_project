const React = require('react');

class Index extends React.Component {
  render() {
    return (<div>
        <link rel="stylesheet" href="/css/app.css"/>
        <h1>Products Index Page</h1>
        { this.props.products.map((product,i)=>{
            return (<div key = {i}>
                <img href={`/products/${product.img}`}></img>
                </div>)
        })
        }
        </div>
    )
  }
}
module.exports = Index