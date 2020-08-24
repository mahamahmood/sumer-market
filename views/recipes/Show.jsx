const React = require('react');
const Default = require('../components/Default');

class Show extends React.Component {
    render() {
        const { title, img, ingredients, tools, method, author, date } = this.props.recipe;
        return (
            <Default>
                <div class="container">
                    <a href='/recipes'>Back to Recipes</a>
                    <h1 class="recipe-show-h1">{title}</h1>
                    <img class="recipe-show-img img-fluid" src={img} />
                    <p><strong><i>Shared By: {author} on {date}</i></strong></p>
                    <div class="recipe-show-p">
                        <p><strong>Ingredients:</strong> {ingredients}</p>
                        <p><strong>Tools Needed:</strong> {tools}</p>
                        <p><strong>Method:</strong> {method}</p>
                    </div>
                </div>
            </Default>
        );
    }
}
module.exports = Show;