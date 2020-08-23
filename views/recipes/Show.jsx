const React = require('react');

class Show extends React.Component {
    render() {
        const { title, img, ingredients, tools, method } = this.props.recipe;
        return(
            <div>
                <h1>Recipe Show Page</h1>
                <a href='/recipes'>Back to Recipes</a>
                <p>Title: {title}</p>
                <img src={img} />
                <p>Ingredients: {ingredients}</p>
                <p>Tools Needed: {tools}</p>
                <p>Method: {method}</p>
            </div>
        )
    }
}
 module.exports = Show;