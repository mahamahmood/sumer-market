const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        const { title, img, ingredients, tools, method, author, date } = this.props.recipe;
        return (
            <Default>
                <div class="container">
                    <a href='/recipes'>Back to Recipes</a>
                    <h1 class="recipe-mine-h1">{title}</h1>
                    <img class="recipe-show-img img-fluid" src={img} />
                    <p><strong><i>Shared By: {author} on {date}</i></strong></p>
                    <p>Ingredients: {ingredients}</p>
                    <p>Tools Needed: {tools}</p>
                    <p>Method: {method}</p>
                </div>
            </Default>
        );
    }
}
module.exports = Show;