const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>New Product Page</h1>
                <form action='/porducts' method='POST'>
                    Name: <input type='text' name='name' /><br />
                    Image URL: <input type='text' name='img' /><br />
                    Description: <input type='text' name='description' /><br />
                    Quantity: <input type='number' name='qty' /><br />
                    Price: <input type='number' name='qty' /><br />
                    <input type='submit' name='' value='Create New Product' />
                </form>
            </div>
        );
    }
}

module.exports = New;