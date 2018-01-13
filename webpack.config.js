import path from 'path';

export default {
    devtool: 'inline-source-map',

    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],

    output: {
        path: path.join(__dirname, '/public/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] }
        ]
    }
}   