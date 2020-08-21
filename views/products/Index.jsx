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
                                    {/* a name, img, and price of each product will be shown on the index/products page */}
                                    <li>Name: {product.name}</li>
                                    <a href={`/products/${product._id}`}><img src={product.img} /></a>
                                    <li>Price: ${product.price}</li>

                                    {/* override post method to delete the product of this uniq id */}
                                    <form action={`/products/${product._id}?_method=DELETE`} method='POST'>
                                        <input type='submit' value='Delete Product' />
                                    </form>
                                    <a href={`/products/${product._id}/edit`}>Edit Product</a>
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