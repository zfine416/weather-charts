var HtmlWebpackPlugin = require('html-webpack-plugin'); 
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html', 
	inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.js'
	],
	module: {
		loaders: [	
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.scss$/,exclude: /node_modules/, loaders: ["style", "css", "sass"]},
			{include: /\.json$/, loaders: ["json-loader"]}
		]
	},
	resolve: {
    	extensions: ['', '.json', '.jsx', '.js']
  	},
	output: {
		filename: "index_bundle.js",
		path: __dirname + '/dist'
	},
	plugins: [HtmlWebpackPluginConfig]
};

