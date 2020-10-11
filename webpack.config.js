const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const AssetMap = require('./asset.map');

module.exports = {

	devtool: 'inline-resource-map',

	entry: {
		
		app:'./js/app.js',
		index:'./js/index.js'
	},
	output: {
		filename: '[name]bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},

	plugins:[
		new CopyPlugin({
		patterns: AssetMap.map(item =>{
			return{
				from: path.resolve(__dirname, `./node_modules/${item}`),
				to:   path.resolve(__dirname, 'resource')
			}
		})
	 }),

	],

}