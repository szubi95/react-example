const path = require('path');

module.exports = {
    entry: {
        index: [path.join(__dirname, "src/index.js")]
    },
    output: {
        path: path.join(__dirname, '../target/classes/client'),
        filename: '[name].pack.js',
    },
    mode: "development",

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {loader: "babel-loader", options: {cacheDirectory: true}},
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }

        ]
    }
};