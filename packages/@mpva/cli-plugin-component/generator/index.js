module.exports = (api, opts, rootOptions, invoking) => {
  const componentsDir = './src/js/components'
  if (opts.simple) {
    api.render({
      [`${componentsDir}/${opts.name}.vue`]: './templates/src/main.vue'
    })
  } else {
    api.render({
      [`${componentsDir}/${opts.name}/src/main.vue`]: './templates/src/main.vue',
      [`${componentsDir}/${opts.name}/src/main.js`]: './templates/src/main.js',
      [`${componentsDir}/${opts.name}/index.js`]: './templates/index.js'
    })
  }

  api.onCreateComplete(() => {

  })
}