const React = require('react');
const Default = require('../components/Default');

class Edit extends React.Component {
    render() {
        const { _id, title, img, ingredients, tools, method, author, date } = this.props.recipe;
        return (
            <Default>
                <div class="form-container">
                    <div class="form">
                        <h1 class="h1-form">Recipe Edit Page</h1>
                        <h3>Recipe Information</h3>
                        <form action={`/recipes/${_id}?_method=PUT`} method='POST'>
                            <fieldset>
                                <label for="title">Title</label>
                                <input class="form-input" type='text' name='title' defaultValue={title} />
                                <label for="img">Image URL</label>
                                <input class="form-input" type='text' name='img' defaultValue={img} />
                                <label for="ingredients">Ingredients</label>
                                <input class="form-input" type='text' name='ingredients' defaultValue={ingredients} />
                                <label for="tools">Tools Needed</label>
                                <input class="form-input" type='text' name='tools' defaultValue={tools} />
                                <label for="method">Method</label>
                                <input class="form-input" type='text' name='method' defaultValue={method} />
                                <label for="author">Shared By</label>
                                <input class="form-input" type='text' name='author' defaultValue={author} />
                                <label for="date">Date Shared</label>
                                <input class="form-input" type='text' name='date' defaultValue={date} />
                            </fieldset>
                            <input class="form-btn btn-lg btn-block btn btn-dark" type='submit' name='' value='Submit Changes' />
                        </form>
                    </div>
                </div>
            </Default>
        );
    }
}

module.exports = Edit;