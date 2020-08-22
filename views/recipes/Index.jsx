const React = require('react');

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>Index Page for All Recipes</h1>
                <a href="/recipes/new">Create a New Recipe Page</a>
            </div>
        );
    }
}

module.exports = Index;