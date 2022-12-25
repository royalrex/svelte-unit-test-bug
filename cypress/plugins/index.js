// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
const webpack = require('webpack');

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
let servers = [];

module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    const webpackPreprocessor = require('@cypress/webpack-preprocessor');
    const webpackOptions = require('../../webpack.config');
    webpackOptions.plugins = [
        new webpack.DefinePlugin({
            'process.browser': true,
            'process.env.NODE_ENV': JSON.stringify('test'),
            'process.env.APP_CONFIG': JSON.stringify('test'),
        }),
    ];
    const options = {
        webpackOptions,
        watchOptions: {},
    };

    on('file:preprocessor', webpackPreprocessor(options));
};
