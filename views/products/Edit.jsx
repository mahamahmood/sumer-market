const React = require('react');
const Default = require('../components/Default');

class Edit extends React.Component {
    render() {
        const { _id, name, img, description, qty, price } = this.props.product;
        return (
            <Default>
                <div class="container">
                    <a href='/products'>Back to Products</a>
                    <div class="form-container">
                        <div class="form">
                            <h1 class="h1-form">Product Edit Page</h1>
                            <h3>Product Information</h3>
                            {/* use method override to change the method to PUT instead of POST */}
                            <form action={`/products/${_id}?_method=PUT`} method='POST'>
                                <fieldset>
                                    <label for="name">Name</label>
                                    <input class="form-input" type='text' name='name' defaultValue={name} />
                                    <label for="img">Image URL</label>
                                    <input class="form-input" type='text' name='img' defaultValue={img} />
                                    <label for="description">Description</label>
                                    <input class="form-input" type='text' name='description' defaultValue={description} />
                                    <label for="qty">Quantity</label>
                                    <input class="form-input" type='number' name='qty' defaultValue={qty} />
                                    <label for="price">Price</label>
                                    <input class="form-input" type='number' name='price' defaultValue={price} />
                                </fieldset>
                                <input class="form-btn btn-lg btn-block btn btn-dark" type='submit' name='' value='Submit Changes' />
                            </form>
                        </div>
                    </div>
                </div>
            </Default>
        );
    }
}

module.exports = Edit;