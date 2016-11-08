var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_PREFIX: '"/v1"',
    API_ROOT: '"api.kongroo.dev"',
    API_PROTOCOL: '"http://"'
})
