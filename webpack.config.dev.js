const path = require('path');
const WebpackPlugins = require('./webpack/webpack.plugins.config.js');
const WebpackDevServer = require('./webpack/webpack.server.config.js');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'env']
                    }
                }
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: ['json-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|gif|jpe?g)$/,
                'exclude': /node_modules/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    },
    plugins: [
        WebpackPlugins.HtmlWebpackPluginConfig
    ],
    devServer: WebpackDevServer
};