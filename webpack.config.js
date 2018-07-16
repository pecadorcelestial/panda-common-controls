const CleanWebpackPlugin = require('clean-webpack-plugin');
//const webpack = require('webpack');
//const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
    mode: 'development',
    entry: {
        //index: ['./src/index/index.js', hotMiddlewareScript],
        //userinfo: ['./src/user-info/index.js', hotMiddlewareScript]
        main: './src/client.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['bin']),
        //new webpack.HotModuleReplacementPlugin()
    ],
    output: {
		path: __dirname + '/bin',
        filename: './[name].bundle.js',
        publicPath: '/bin'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    }
}