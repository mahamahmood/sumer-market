const React = require('react');

class Index extends React.Component {
    render() {
        // const products = this.props.products
        const { products } = this.props;//object destructring
        return (
            <div>
                <h1>Index Page / All Products</h1>
                <a href="/prodcuts/new">Create a New Product</a>
                <ul>
                    {
                        products.map((product, i) => {
                            return (
                                <div>
                                    <li>Name: {product.name}</li>
                                    <img src={product.img} />
                                    <li>Price: ${product.price}</li>
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

module.exports = Index;