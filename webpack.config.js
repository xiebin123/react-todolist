const path=require('path');

module.exports={
    entry:{
      index:"./index.js"
    },
    devtool:'source-map',
    output:{
      path:path.resolve(__dirname,"lib"),
        filename:"bundle.js"
    },
    module : {
        loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
      ]

    }
}