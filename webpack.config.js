/*
 *   Copyright (c) 2022 DSAS Holdings LTD.
 *   All rights reserved.
 */
//const { VueLoaderPlugin } = require('vue-loader')
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry:'./index.js',
  devtool:'inline-source-map',
  output:{
    library:{
      name:'VuesticUI',
      type:'umd2'
    }
  },
	externals: {
		vue: 'vue',
	},
  resolve:{
    extensions: ['.js','.ts','.vue'],
		alias:{
		'@':path.resolve(__dirname, 'src'),
    'vue': '@vue/runtime-dom',
    'vuex': 'vuex/dist/vuex.esm-bundler'
		}
  },
  module: {
    rules: [
      {
        test: /\.(ts)?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        },
      },
      /*{
        test: /\.vue$/,
        use: [
          {
            loader:'vue-loader'
          }
        ]
      },*/
      {
        test:/\.css$/,
        use:['style-loader','css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          //'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }

    ]
  },
  plugins: [
   //new VueLoaderPlugin(),
	 new CopyPlugin({
		patterns: [
			{ from: "node_modules/@material-design-icons/svg/filled", to: "material-icons" }
		],
	}),

  ]
}
