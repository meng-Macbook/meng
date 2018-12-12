const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/release.bundle.js'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    // several examples !
                    // community formatter
                    formatter: require("eslint-friendly-formatter"),

                }
            }
        ]
    }
};