const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 1703,
        watchContentBase: true,
        progress: true
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
              }
        ]
    }
}