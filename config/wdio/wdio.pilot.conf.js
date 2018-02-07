var defaults = require('./wdio.conf.js').config
var _ = require('lodash')

var overrides = {

    // Disable debugging
    debug: false,
    execArgv: null,
    suites: {
        // pilot: [
        //     './specs/search/advanced-search.spec.ts',
        //     './specs/search/quick-track.spec.ts'
        // ]
    },
    exclude: [
        // 'path/to/excluded/files'
    ],
    baseUrl: 'https://tms-pilot.jbhunt.com',
    // Save screen shots to a internal accessible location
    screenshotPath: `\\\\Engtechteam\\engtechteam\\Team - Applications\\Operations Execution\\Control Tower UI Tests\\Pilot\\${(new Date()).toLocaleDateString().replace(/\//g,'-')}`,
    mochaOpts: {
        timeout: 600000
    }
}

// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults)
