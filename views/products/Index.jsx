const React = require('react');
const Default = require('../components/Default');

class Index extends React.Component {
    render() {
        // const products = this.props.products
        const { products } = this.props;//object destructring
        return (
            <Default>
                <div>
                    <header>
                        <img class="sumer-banner img-fluid" src="https://i.imgur.com/1walnEA.jpg" />
                        <h1 class='sumer-mine-h1'>Sumer Products</h1>
                        <div class="sumer-p-btn-create">
                            <p>Sweet beans affogato, sweet, instant aroma sit in flavour. Chicory, coffee pumpkin spice latte espresso, frappuccino single origin crema trifecta percolator coffee strong. Americano ut cappuccino as, qui, crema cultivar cappuccino affogato black robust.</p>
                            <a class="btn btn-dark" role="button" href="/products/new">Create a New Product Page</a>
                        </div>
                    </header>
                    <div class="container">
                        <ul class="row row-cols-1 row-cols-md-2">
                            {
                                products.map((product, i) => {
                                    return (
                                        <div class="col mb-4">
                                            {/* a name, img, and price of each product will be shown on the index/products page */}
                                            <div class="card card mb-1 sumer-card">
                                                <li class="card-header card-title">{product.name}</li>
                                                <div class="card-body">
                                                    <a href={`/products/${product._id}`}><img class="img-fluid card-img" src={product.img} /></a>
                                                    <li class="card-title">Price: ${product.price}</li>
                                                    {/* buttons */}
                                                    <div class="row">
                                                    <a class="col btn btn-outline-dark btn-product" role="button" href={`/products/${product._id}`}>View</a>
                                                    <a class="col btn btn-outline-dark btn-product" role="button" href={`/products/${product._id}/edit`}>Edit</a>
                                                    {/* override post method to delete the product of this uniq id */}
                                                    <form class="col" action={`/products/${product._id}?_method=DELETE`} method='POST'>
                                                        <input class="btn-delete btn btn-outline-dark btn-product" type='submit' value='Delete' />
                                                    </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Default>
        );
    }
}

module.exports = Index;