var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [node_modules_dir],
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            loader: 'css-loader'
        }]
    }
}

module.exports = config;
