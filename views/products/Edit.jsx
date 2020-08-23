const React = require('react');
const Default = require('../components/Default');

class Edit extends React.Component {
    render() {
        const { _id, name, img, description, qty, price } = this.props.product;
        return (
            <Default>
                <div>
                    <h1>Product Edit Page</h1>
                    {/* use method override to change the method to PUT instead of POST */}
                    <form action={`/products/${_id}?_method=PUT`} method='POST'>
                        Name: <input type='text' name='name' defaultValue={name} /><br />
                    Image URL: <input type='text' name='img' defaultValue={img} /><br />
                    Description: <input type='text' name='description' defaultValue={description} /><br />
                    Quantity: <input type='number' name='qty' defaultValue={qty} /><br />
                    Price: <input type='number' name='price' defaultValue={price} /><br />
                        <input type='submit' name='' value='Submit Changes' />
                    </form>
                </div>
            </Default>
        );
    }
}

module.exports = Edit;