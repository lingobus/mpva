// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var prettyjson = require('prettyjson')
var colors = require('colors')
var buildPath = '../build'
<% if (options.productionCDN) { %>
function getProductionPublicPath() {
  var hostAlias = process.env.HOSTALIAS // development machine host alias, e.g: a1, a2, a3
  var CDN = process.env.CDN
  if (CDN === 'true') {
    if (hostAlias) {
      return `//<%=options.devCDN%>/${hostAlias}/static/`
    }
    return '//<%=options.productionCDN%>/static/'
  }
  return '/static/'
}
<% } %>
const envconfigs = {
  paths: {
    root: path.resolve(__dirname, '..'),
    src: path.resolve(__dirname, '../src'),
    build: path.resolve(__dirname, buildPath),
    views: path.resolve(__dirname, '../views')
  },
  externals: {},
  alias: {
    '@': path.resolve(__dirname, '../src')
  },
  prod: {
    env: {
      NODE_ENV: '"production"'
    },
    port: <%=options.productionPort%>,
    assetsRoot: path.resolve(__dirname, buildPath, 'prod'),
    assetsBuildPath: '/static/',
    publicPath: <% if (options.productionCDN) { %>getProductionPublicPath()<% } else { %>'/static/'<% } %>
  },
  dev: {
    env: {
      NODE_ENV: '"development"'
    },
    port: <%=options.devPort%>,
    assetsRoot: path.resolve(__dirname, buildPath, 'dev'),
    assetsBuildPath: '/static/',
    publicPath: '/static/'
  }
}
const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
console.log('Enviroment Configuration:'.magenta.bold)
console.log(prettyjson.render(envconfigs[env]))
module.exports = envconfigs
