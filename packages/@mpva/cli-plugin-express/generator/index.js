module.exports = (api, opts, rootOptions, invoking) => {
  api.extendPackage({
    dependencies: {
      "body-parser": "1.18.3",
      "colors": "1.1.2",
      "cookie-parser": "1.4.3",
      "express-http-proxy": "1.1.0",
      "express-useragent": "1.0.12",
      "morgan": "1.8.1",
      "prettyjson": "1.2.1",
      "express": "4.16.4"
    }
  })

  api.render({
    './app.js': './templates/app.js',
    './config/index.js': './templates/config/index.js',
    './controllers/index.js': './templates/controllers/index.js',
    './middlewares/index.js': './templates/middlewares/index.js'
  })

  if (opts.useProxy) {
    api.render({
    './proxy.js': './templates/proxy.js',
    './proxy-table.js': './templates/proxy-tablej.js',
    './proxy-table.dev.example.js': './templates/proxy-table.dev.example.js'
    })
  }

  if (opts.useMock) {
    api.render({
      './mocks/index.js': './templates/mocks/index.js',
      './mocks/util.js': './templates/mocks/util.js'
    })
  }
}