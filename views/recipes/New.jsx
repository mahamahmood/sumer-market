const React = require('react');
const Default = require('../components/Default');

class New extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <h1>New Recipe Page</h1>
                    <form action='/recipes' method='POST'>
                        Title: <input type='text' name='title' /><br />
                        Image URL: <input type='text' name='img' /><br />
                        Ingredients: <input type='text' name='ingredients' /><br />
                        Tools Needed: <input type='text' name='tools' /><br />
                        Method: <input type='text' name='method' /><br />
                        Shared By: <input type='text' name='author'/><br />
                        Date Shared: <input type='date' name='date'/><br />
                        <input type='submit' name='' value='Create My Recipe' />
                    </form>
                </div>
            </Default>
        );
    }
}

module.exports = New;