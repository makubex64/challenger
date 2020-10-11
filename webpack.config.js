const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const assetMap = require('asset.map');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: assetMap.map(item =>{
        	return {
        			from: path.resolve(__dirname, `${item}`),
        			
        	}
        })
      
    }),
  ],
};