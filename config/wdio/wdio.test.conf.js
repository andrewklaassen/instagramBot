var defaults = require('./wdio.conf.js').config
var _ = require('lodash')

var overrides = {

    // Disable debugging
    debug: false,
    execArgv: null,

    // Save screen shots to a internal accessible location
    screenshotPath: `\\\\Engtechteam\\engtechteam\\Team - Applications\\Operations Execution\\Control Tower UI Tests\\${(new Date()).toLocaleDateString().replace(/\//g,'-')}`,
    mochaOpts: {
        timeout: 600000
    }
}

// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults)
