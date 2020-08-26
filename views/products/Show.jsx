const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        //const name = this.props.products.name;
        const { _id, name, img, description, qty, price } = this.props.product;
        return (
            <Default>
                <div class="container">
                    <a href='/products'>Back to Products</a>
                    <div class="product-show-card card mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-6">
                                <img class="product-show-img card-img img-fluid" src={img} />
                            </div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h2 class="product-show-h2 card-title">{name}</h2>
                                    <div class="product-show-p">
                                        <p class="card-text">{description}</p>
                                        <p class="card-text"><strong>Quantity: {qty > 0 ? `${qty} Available in stock.` : `Out of stock`}</strong></p>
                                        <p class="card-text"><strong>Price: ${price}</strong></p>
                                    </div>
                                    <form action={`/products/${_id}?_method=PATCH`} method="POST">
                                        <button class="buy-btn btn btn-warning btn-product" type="submit" value="BUY" disabled={qty > 0 ? false : true}>{qty > 0 ? 'Buy Now' : 'Out of Stock'}</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Default>
        );
    }
}

module.exports = Show;
