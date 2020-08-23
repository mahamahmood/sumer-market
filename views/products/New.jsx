const React = require('react');
const Default = require('../components/Default');

class New extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <h1>New Product Page</h1>
                    <form action='/products' method='POST'>
                        Name: <input type='text' name='name' /><br />
                        Image URL: <input type='text' name='img' /><br />
                        Description: <input type='text' name='description' /><br />
                        Quantity: <input type='number' name='qty' /><br />
                        Price: <input type='number' name='price' /><br />
                        <input type='submit' name='' value='Create New Product' />
                    </form>
                </div>
            </Default>
        );
    }
}

module.exports = New;