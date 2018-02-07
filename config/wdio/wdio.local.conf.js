// Let's load the default configs:
var defaults = require('./wdio.conf.js').config
var _ = require('lodash')

var overrides = {

    baseUrl: `https://${process.env.COMPUTERNAME}.jbhunt.com`,
    mochaOpts: {
        grep: 'smoke'
    }
}

// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults)
