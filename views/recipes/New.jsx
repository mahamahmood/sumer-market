const React = require('react');
const Default = require('../components/Default');

class New extends React.Component {
    render() {
        return (
            <Default>
                <div class="container">
                    <a href='/recipes'>Back to Recipes</a>
                    <div class="form-container">
                        <div class="form">
                            <h1 class="h1-form">New Recipe Page</h1>
                            <h3>Recipe Information</h3>
                            <form action='/recipes' method='POST'>
                                <fieldset>
                                    <label for="name">Title</label>
                                    <input class="form-input" type='text' name='title' />
                                    <label for="img">Image URL</label>
                                    <input class="form-input" type='text' name='img' />
                                    <label for="ingredients">Ingredients</label>
                                    <input class="form-input" type='text' name='ingredients' />
                                    <label for="tools">Tools Needed</label>
                                    <input class="form-input" type='text' name='tools' />
                                    <label for="method">Method</label>
                                    <input class="form-input" type='text' name='method' />
                                    <label for="author">Shared By</label>
                                    <input class="form-input" type='text' name='author' />
                                    <label for="date">Today's Date</label>
                                    <input class="form-input" type='text' name='date' />
                                </fieldset>
                                <input class="form-btn btn-lg btn-block btn btn-dark" type='submit' name='' value='Create My Recipe Page' />
                            </form>
                        </div>
                    </div>
                </div>
            </Default>
        );
    }
}

module.exports = New;