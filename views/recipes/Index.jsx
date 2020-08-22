const React = require('react');

class Index extends React.Component {
    render() {
        const { recipes } = this.props;
        return (
            <div>
                <h1>Index Page for All Recipes</h1>
                <a href="/recipes/new">Create a New Recipe Page</a>
                <ul>
                    {
                        recipes.map((recipe, i) => {
                            return (
                                <div>
                                    <li>Title: {recipe.title}</li>
                                    <img src={recipe.img} />
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

module.exports = Index;