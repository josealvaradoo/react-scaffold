const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});
const CleanWebpackPluginConfig =  new CleanWebpackPlugin(
    ['build'], {root: __dirname}
)

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'bundle.[hash].js'
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
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader']
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
        HtmlWebpackPluginConfig,
        CleanWebpackPluginConfig
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        compress: true
    }
}

module.exports = config;