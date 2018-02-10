const path = require('path');
const WebpackPlugins = require('./webpack/webpack.plugins.config.js');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('build'),
        publicPath: path.resolve('build'),
		filename: './statics/js/main[hash].js'
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
                        presets: ['env','stage-0','react']
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
                use: ExtractTextWebpackPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|svg|gif|jpe?g)$/,
                'exclude': /node_modules/,
                use: [{
					loader: 'url-loader',
					options: {
						limit: 450000, // 450Kb
						name: './statics/media/[name].[ext]',
						fallback: 'file-loader'
					}
				}]
			},
			{
				test: /\.(mp3|mp4|webm)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 1000000, // 1Mb
						name: './statics/media/[name].[ext]',
						fallback: 'file-loader'
					}
				}]
			}
        ]
    },
    plugins: [
        WebpackPlugins.ProgressBarWebpackPluginConfig,
        WebpackPlugins.CleanWebpackPluginConfig,
        WebpackPlugins.HtmlWebpackPluginConfig,
        WebpackPlugins.ExtractTextWebpackPluginConfig,
        WebpackPlugins.UglifyJSWebpackPluginConfig
    ]
};