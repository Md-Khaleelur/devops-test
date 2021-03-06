const merge = require('webpack-merge');
const BaseConfig = require('./webpack.config.base');
const path = require('path')

module.exports = merge(BaseConfig, {
        mode: 'development',
        devServer: {
            contentBase: path.join(__dirname, './dist'),
            historyApiFallback: true,
            port: 8082
          },
        devtool: 'source-map'
});