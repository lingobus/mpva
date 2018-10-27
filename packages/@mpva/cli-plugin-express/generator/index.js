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
      "express": "4.16.4",
      "pug": "2.0.3"
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
    './proxy-table.js': './templates/proxy-table.js',
    './proxy-table.dev.example.js': './templates/proxy-table.dev.example.js'
    })
  }

  if (opts.useMock) {
    api.render({
      './mocks/index.js': './templates/mocks/index.js',
      './mocks/util.js': './templates/mocks/util.js'
    })
  }

  const viewDirName = 'views'
  api.onCreateComplete(() => {
    const ignoreFilePath = api.resolve('.gitignore')
    const fs = require('fs')
    if (!fs.existsSync(ignoreFilePath)) return
    const content = fs.readFileSync(ignoreFilePath).toString('utf-8')
    const trimedLines = content.split("\n").map(line => line.trim())
    const hasViewDirAdded = trimedLines.indexOf(viewDirName) >= 0 || trimedLines.indexOf('./' + viewDirName) >= 0
    if (hasViewDirAdded) return
    fs.writeFileSync(ignoreFilePath, content + "\nproxy-table.dev.example.js\nproxy-table.dev.js\n#express view directory\n" + viewDirName)
  })

  api.exitLog('Run `node app.js` and open http://localhost:' + opts.devPort, 'done')
}