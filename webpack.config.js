module.exports = {
  entry: "./lib/threeter.js",
  output: {
  	filename: "./lib/bundle.js"
  },
  module: {
  loaders: [
   {
     test: [/\.js?$/],
     exclude: /(node_modules)/,
     loader: 'babel',
     query: {
       presets: ['es2015']
     },
   },
  ]
  },
  resolve: {
  extensions: ['', '.js' ]
  },
  devtool: 'source-map',
};
