const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="/css/app.css"/>
                <h1>New Dish Page</h1>
                <form action='/products' method='POST'>
                    Name: <input type='text' name='name' />
                    <br></br>
                    Image Link: <input type='text' name='img' />
                    <br></br>
                    Description: <input type="text" name="description" />
                    <br></br>
                    Price: <input type="number" name="price" />
                    <br></br>
                    Quantity: <input type="number" name="quantity" />
                    <input type='submit' name='' value='Create Product' />
                </form>
            </div>
        )
    }
}

module.exports = New;