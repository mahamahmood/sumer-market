const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, title, img, ingredients, tools, method } = this.props.recipe;
        return (
            <div>
                <h1>Recipe Edit Page</h1>
                <form action={`/recipes/${_id}?_method=PUT`} method='POST'>
                    Title: <input type='text' name='title' defaultValue={title} /><br />
                    Image URL: <input type='text' name='img' defaultValue={img} /><br />
                    Ingredients: <input type='text' name='ingredients' defaultValue={ingredients} /><br />
                    Tools Needed: <input type='text' name='tools' defaultValue={tools} /><br />
                    Method: <input type='text' name='method' defaultValue={method} /><br />
                    <input type='submit' name='' value='Submit Changes' />
                </form>
            </div>
        )
    }
}

module.exports = Edit;