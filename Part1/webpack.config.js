'use strict';
var webpack = require('webpack');
var path = require('path');

var APP = __dirname + '/app';

module.exports = {
    // config
    context: APP,
    entry: {
        app: ['webpack/hot/dev-server', './core/bootstrap.js']
    },
    output: {
        path: APP,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel!presets[]=es2015!jshint',
                exclude: '/node_modules|bower_components'
            }
        ]
    }
}