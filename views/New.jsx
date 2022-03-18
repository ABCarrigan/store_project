const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="/css/app.css"/>
                <h1>New Dish Page</h1>
                <div className="newContainer">
                    <form action='/products' method='POST'>
                        Name: <input type='text' name='name' />
                        <br></br>
                        Image Link: <input type='text' name='img' />
                        <br></br>
                        Description: <input type="text" name="description" />
                        <br></br>
                        Price: <input type="number" name="price" />
                        <br></br>
                        Quantity: <input type="number" name="qty" />
                        <input type='submit' name='' value='Create Dish!' />
                    </form>
                </div>
            </div>
        )
    }
}

module.exports = New;