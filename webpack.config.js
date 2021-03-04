const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
};
