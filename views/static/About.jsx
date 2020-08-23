const React = require('react');
const Default = require('../components/Default');

class About extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <h1>This is the About Page</h1>
                </div>
            </Default>
        );
    }
}

module.exports = About;