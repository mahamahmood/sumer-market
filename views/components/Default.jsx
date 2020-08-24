const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    {/* Bootstrap CDN */}
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
                    {/* Start of Style Sheets */}
                    <link rel="stylesheet" href="/css/style.css" />
                    {/* End of Style Sheets */}
                    <title>Sumer Market</title>
                </head>
                <body class="container">
                    <nav>
                        <ul class="nav nav-tabs justify-content-center">
                            <li class="nav-item"><a class="nav-link" href="/">HOME</a></li>
                            <li class="nav-item"><a class="nav-link" href="/about">ABOUT</a></li>
                            <li class="nav-item"><a class="nav-link" href="/contact-us">CONTACT US</a></li>
                            <li class="nav-item"><a class="nav-link" href="/products">SHOP PRODUCTS</a></li>
                            <li class="nav-item"><a class="nav-link" href="/recipes">COMMUNITY SHARED RECIPES</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">SHOPPING CART</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">LOG IN</a></li>
                        </ul>
                    </nav>
                    {this.props.children}
                    <footer>
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link" href="#"><img src="#" alt="logo-twitter" /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><img src="#" alt="logo-youtube" /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><img src="#" alt="logo-facebook" /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><img src="#" alt="logo-reddit" /></a>
                            </li>
                        </ul>
                        <p class="copy-rights">All rights reserved. Copyright &copy;2020.</p>
                    </footer>
                </body>
            </html>
        );
    }
}

module.exports = Default;