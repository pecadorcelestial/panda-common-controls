const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const hotMiddlewareScript = 'webpack-hot-middleware/client';

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname + '/dist'),
        hot: true,
        open: true,
        overlay: true,
        publicPath: '/'
    },
    entry: {
        main: ['./src/client', hotMiddlewareScript]
    },
    output: {
        path: path.join(__dirname + '/dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        alias: {
			react: path.resolve('./node_modules/react'),
			scripts: path.resolve('./src/scripts'),
			actions: path.resolve('./src/actions'),
			reducers: path.resolve('./src/reducers'),
			config: path.resolve('./config.js'),
			common: path.resolve('./src/components/common')
		},
        extensions: ['.js', '.jsx'],
        modules: [
			path.join(__dirname, 'src'),
			'node_modules'
		]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: true,
            cacheGroups: {
                vendors: {
                    chunks: 'all',
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/
                },
                commons: {
                    chunks: 'all',
                    minChunks: 2,
                    name: 'commons'
                }
            }
        }
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG: false
        }),
        new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
            template: path.join(__dirname, 'views/index.dev.ejs'),
            inject: false
        })
    ]
}