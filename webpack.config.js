const webpack = require('webpack');  
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const path = require('path')

const config = {  
  context: __dirname,
  entry: {
    main: './client/index.js',
    splash: './client/splash.js'
  },
  output: {
    path: path.join(__dirname,'/public/'),
    filename: '[name]/[name]-bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      query:
      {
        presets: ['react'],
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
    ],
    // rules: [
    //   {
    //     test: /\.(gql)$/,
    //     exclude: /node_modules/,
    //     loader: 'graphql-tag/loader',
    //   },
    // ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  },
  watchOptions: {
    poll: true
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env':{ 'NODE_ENV': JSON.stringify('production') } }),
    new HardSourceWebpackPlugin()
  ]
};

module.exports = config;  