const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

const config = {
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
                        presets: ['react', 'es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    }
                ]
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
    plugins: [HtmlWebpackPluginConfig],
    devServer: {
        host: 'localhost',
        port: 3000,
        compress: true
    }
}

module.exports = config;