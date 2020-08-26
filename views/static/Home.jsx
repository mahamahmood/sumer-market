const React = require('react');
const Default = require('../components/Default');

class Home extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <header>
                        <img class="sumer-banner img-fluid" src="https://i.imgur.com/r4U1dnQ.jpg" />
                        <h1 class='sumer-mine-h1'>Sumer Market</h1>
                        <div class="sumer-p-btn-create">
                            <p>Welcome to Sumer Market! Here, you'll be able to find all of your favorite middle eastern grocery products. Get started by exploring our products page or create an account to join the Sumer Community! There you'll be able to share your own middle eastern recipes with the rest of the community.</p>
                        </div>
                    </header>
                    <div class="container-fluid">
                        <div class="home-show-card card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-6">
                                    <img class="home-show-img card-img img-fluid" src="https://i.imgur.com/yR5iqPZ.jpg" />
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body">
                                        <div class="home-show-p">
                                            <p class="card-text">Barista, robust rich foam iced, medium brewed, percolator fair trade wings breve strong sit shop trifecta con panna as redeye, trifecta lungo cream brewed cappuccino. Barista cup body single shot, blue mountain rich, plunger pot, aftertaste, froth kopi-luwak crema cortado organic americano instant.</p>
                                            <a class="btn-home btn btn-warning" role="button" href="/products">Explore All Products</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="home-show-card card mb-3">
                            <div class="row no-gutters">
                                <div class="col-md-6">
                                    <div class="card-body">
                                        <div class="home-show-p">
                                            <p class="card-text">Barista, robust rich foam iced, medium brewed, percolator fair trade wings breve strong sit shop trifecta con panna as redeye, trifecta lungo cream brewed cappuccino. Barista cup body single shot, blue mountain rich, plunger pot, aftertaste, froth kopi-luwak crema cortado organic americano instant.</p>
                                            <a class="btn-home btn btn-warning" role="button" href="/recipes">Explore All Recipes</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <img class="home-show-img card-img img-fluid" src="https://i.imgur.com/awBzc2Q.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Default>
        );
    }
}
module.exports = Home;