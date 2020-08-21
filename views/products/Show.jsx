const React = require('react');

class Show extends React.Component {
    render() {
        //const name = this.props.products.name;
        const { name, img, description, qty, price } = this.props.product;
        return (
            <div>
                <h1>Product Show Page</h1>
                <p>Name: {name}</p>
                <img src={img} />
                <p>Description: {description}</p>
                <p>Quantity: {qty} remaining in stock</p>
                <p>Price: ${price}</p>
                <form action={'/products/'} method="POST">
                    <input type="submit" value="BUY"/>
                </form>
            </div>
        );

    }
}

module.exports = Show;

// need to come back and work on the buy/order button along with qyt and price
// buy button is rediercting to index for now