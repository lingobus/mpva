require('colors')
const glob = require('glob')
const $path = require('path')
var router = require('express').Router()

router.get('/', function (req, res) {
  //change following line to render your index page
  res.type('text/html')
  res.status(200)
  res.send('<h1>Hello!</h1><p>you may want to edit controllers/index.js</p>')
})

glob.glob($path.join(__dirname, './*.controller.js'), function (err, files) {
  if (err) {
    console.error('Load controlelrs failed!'.red.bold)
  } else {
    files.forEach(function (file) {
      console.log(('Loading controller from ' + file).green.bold)
      const fn = require(file)
      fn(router)
    })
  }
})

module.exports = router