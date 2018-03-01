const path = require('path');
module.exports = {
    entry: './entry.js',
    output: {
        filename: 'Somthing.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test:/\.js$/, use: 'babel-loader' , exclude: /node_modules/ },
        ]
    },
    devtool:"source-map"
};