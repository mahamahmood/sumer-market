const React = require('react');
const Default = require('../components/Default');

class Index extends React.Component {
    render() {
        const { recipes } = this.props;
        return (
            <Default>
                <div class="container">
                    <h1>Sumer Recipes <small><i>Shared by Our Community</i></small></h1>
                    <div class="row">
                        <p class="col-sm-8">Our customers not only shop at Sumer Market but also they come here to share their best tips and tricks of making the best middel eastern dishes. Here you will be able to view all of the recipes that have been shared and <a href="/recipes/new">create your own recipe page.</a></p>
                        <a class="col-sm-4 btn btn-outline-success" role="button" href="/recipes/new">Create a New Recipe Page</a>
                    </div>
                    <br></br>
                    <ul class="row row-cols-1 row-cols-md-2">
                        {
                            recipes.map((recipe, i) => {
                                return (
                                    <div class="col mb-4">
                                        <div class="col card mb-1 recipe-card">
                                            <a href={`/recipes/${recipe._id}`}><img class="img-fluid card-img-top" src={recipe.img} /></a>
                                            <div class="card-body">
                                                <li class="card-title">{recipe.title}</li>
                                                <a class="btn btn-outline-success btn-recipe" role="button" href={`/recipes/${recipe._id}`}>View</a>
                                                <a class="btn btn-outline-success btn-recipe" role="button" href={`/recipes/${recipe._id}/edit`}>Edit</a>
                                                <form action={`/recipes/${recipe._id}?_method=DELETE`} method='POST'>
                                                    <input class="btn btn-outline-success btn-recipe" type='submit' value='Delete' />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </ul>
                </div>
            </Default>
        );
    }
}

module.exports = Index;