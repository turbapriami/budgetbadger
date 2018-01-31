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
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'img/'
          }
        }
      ]
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
          },
        }
      ],
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
  plugins: [
    new webpack.DefinePlugin({ 'process.env':{ 'NODE_ENV': JSON.stringify('production') } }),
    new HardSourceWebpackPlugin()
  ]
};

module.exports = config;  