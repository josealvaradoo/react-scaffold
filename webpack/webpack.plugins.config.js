// Import plugins
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

// Separate CSS from js bundle and create a css bundle file
const ExtractTextWebpackPluginConfig = new ExtractTextWebpackPlugin('statics/css/main[hash].css');

// Minify HTML and inject css & js bundle files
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body',
    minify: {
        removeComments: true,
        trimCustomFragments: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true
    },
    cache: true
});

// Remove and create again the /build directory
const CleanWebpackPluginConfig =  new CleanWebpackPlugin(
    ['build'], {root: __dirname}
);

// Minifi js bundle
const UglifyJSWebpackPluginConfig = new UglifyJSWebpackPlugin({
    test: /\.jsx?$/,
    exclude: /\/node_modules/,
    cache: true,
    parallel: 6,
});

// Show a progress bar on console
const ProgressBarWebpackPluginConfig = new ProgressBarWebpackPlugin();

// Export plugin configs
module.exports = {
    ExtractTextWebpackPluginConfig,
    HtmlWebpackPluginConfig,
    CleanWebpackPluginConfig,
    UglifyJSWebpackPluginConfig,
    ProgressBarWebpackPluginConfig
}