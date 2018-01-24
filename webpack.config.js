const webpack = require('webpack');  
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

const config = {  
  context: __dirname,
  entry: './client/index.js',
  output: {
    path: path.join(__dirname,'/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      query:
      {
        presets: ['react']
      }
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    },
    { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
    },
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env':{ 'NODE_ENV': JSON.stringify('production') } }),
  ]
};

module.exports = config;  