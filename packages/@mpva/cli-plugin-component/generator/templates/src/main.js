import Vue from 'vue'
let ComponentConstructor = Vue.extend(require('./main.vue'))

var Component = function (options) {
  if (Vue.prototype.$isServer) return
  options = options || {}

  instance = new ComponentConstructor(options)
  instance.vm = instance.$mount()
  return instance.vm
}

export default Component
