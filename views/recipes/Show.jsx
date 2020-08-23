const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        const { title, img, ingredients, tools, method, author, date } = this.props.recipe;
        return (
            <Default>
                <div>
                    <h1>Recipe Show Page</h1>
                    <a href='/recipes'>Back to Recipes</a>
                    <p>Title: {title}</p>
                    <img src={img} />
                    <p>Ingredients: {ingredients}</p>
                    <p>Tools Needed: {tools}</p>
                    <p>Method: {method}</p>
                    <p>Shared By: {author}</p>
                    <p>Date Shared: {date}</p>
                </div>
            </Default>
        );
    }
}
module.exports = Show;