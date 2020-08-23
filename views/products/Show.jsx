const React = require('react');

class Show extends React.Component {
    render() {
        //const name = this.props.products.name;
        const { _id, name, img, description, qty, price } = this.props.product;
        return (
            <div>
                <h1>Product Show Page</h1>
                <p>Name: {name}</p>
                <img src={img} />
                <p>Description: {description}</p>
                <p>Quantity: {qty > 0 ? `${qty} Available in stock.` : `Out of stock`}</p>
                <p>Price: ${price}</p>
                <form action={`/products/${_id}?_method=PATCH`} method="POST">
                    <button type="submit" value="BUY" disabled={qty > 0 ? false : true}>{qty > 0 ? 'Buy' : 'Out of Stock'}</button>
                </form>
            </div>
        );

    }
}

module.exports = Show;

// need to come back and work on the buy/order button along with qyt and price
// buy button is rediercting to index for now