const React = require('react');
const Default = require('../components/Default');

class New extends React.Component {
    render() {
        return (
            <Default>
                <div class="container">
                <a href='/products'>Back to Products</a>
                <div class="form-container">
                    <div class="form">
                        <h1 class="h1-form">New Product Page</h1>
                        <h3>Product Information</h3>
                        <form action='/products' method='POST'>
                            <fieldset>
                                <label for="name">Name</label> 
                                <input class="form-input" type='text' name='name' />
                                <label for="img">Image URL</label>
                                <input class="form-input"  type='text' name='img' />
                                <label for="description">Description</label> 
                                <input class="form-input"  type='text' name='description' />
                                <label for="qty">Quantity</label>
                                <input class="form-input"  type='number' name='qty' />
                                <label for="price">Price</label>
                                <input class="form-input"  type='number' name='price' />
                            </fieldset>
                            <input class="form-btn btn-lg btn-block btn btn-dark" type='submit' name='' value='Create New Product' />
                        </form>
                    </div>
                </div>
                </div>
            </Default>
        );
    }
}

module.exports = New;