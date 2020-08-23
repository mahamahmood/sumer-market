const React = require('react');
const Default = require('../components/Default');

class Home extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <h1>This is the Home Page</h1>
                    <a href='/about'><strong>About</strong> Page</a>
                    <br /><br />
                    <a href='/products'>Go to Index <strong>Products</strong> Page</a>
                    <br /><br />
                    <a href='/recipes'>Go to Index <strong>Recipes</strong> Page</a>
                    <br /><br />
                    <a href='/contact-us'><strong>Contatc Us</strong> Page</a>
                </div>
            </Default>
        );
    }
}
module.exports = Home;