/**
 * Created by jlmconsulting on 1/13/18.
 */

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import config from './webpack.config.js';

const compiler = webpack(config);

const app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.listen('5000', function (err) {
    if (err) {
        console.log('An error occurred: ', err);
    }
});