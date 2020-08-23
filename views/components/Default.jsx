const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="/css/style.css" />
                    <title>Sumer Market</title>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        );
    }
}

module.exports = Default;