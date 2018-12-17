const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
			{
				loader: 'style-loader'
			},
			{
				loader: 'css-loader'
			},
			{
				loader: 'sass-loader'
			}
		]
      },
    ],
  },

  plugins: [new UglifyJSPlugin()],
  entry: './src/',

  output: {
	  filename: 'bundle.js',
	  path: path.resolve(__dirname, 'public')
  },

  mode: 'development'
};