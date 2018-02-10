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
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|gif|jpe?g)$/,
                'exclude': /node_modules/,
                use: [{
					loader: 'url-loader',
					options: {
						limit: 450000, // 450Kb
						name: '/statics/media/[name].[ext]',
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
						name: '/statics/media/[name].[ext]',
						fallback: 'file-loader'
					}
				}]
			}
        ]
    },
    plugins: [
        WebpackPlugins.HtmlWebpackPluginConfig
    ],
    devServer: WebpackDevServer
};