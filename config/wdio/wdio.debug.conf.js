// Let's load the default configs:
var defaults = require('./wdio.conf.js').config
var _ = require('lodash')

var overrides = {

    // enable debugging
    debug: true,
    execArgv: ['--inspect=127.0.0.1:5859']
}

// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults)
