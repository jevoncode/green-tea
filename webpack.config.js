var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
	entry:{
		index:"./src/js/page/index.js"
	},
	output:{
		path:path.join(__dirname,'dist'),
		publicPath:"../",
		filename: "js/[name].js",
		chunkFilename: "js/[id].chunk.js"
	},

	module:{
		loaders:[
			{test: /\.css$/, loader:ExtractTextPlugin.extract("style", "css") },
			{test: /\.html$/, loader:"html"},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'}
		]
	},


	plugins:[
		new webpack.ProvidePlugin({
			$: 'jquery'
		}),
		new ExtractTextPlugin("css/[name].css"),
		new HtmlWebpackPlugin({
			favicon:'./src/img/favicon.ico',
			filename:'/view/index.html',
			template:'./src/view/index.html',
			inject:true,
			hash:true,
			minify:{
				removeComments:true,
				collapseWhitespace:false
			}
		})
	]
};