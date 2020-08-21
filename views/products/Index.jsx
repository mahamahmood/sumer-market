const React = require('react');

class Index extends React.Component {
    render() {
        // const products = this.props.products
        const { products } = this.props;//object destructring
        return (
            <div>
                <h1>Index Page / All Products</h1>
                <a href="/products/new">Create a New Product</a>
                <ul>
                    {
                        products.map((product, i) => {
                            return (
                                <div>
                                    <li>Name: {product.name}</li>
                                    <a href={`/products/${product._id}`}><img src={product.img} /></a>
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