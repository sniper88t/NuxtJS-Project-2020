import Vue from 'vue'
import money from 'v-money'

const ignoreWarnMessage =
  'The .native modifier for v-on is only valid on components but it was used on <div>.'

Vue.config.warnHandler = function(msg, vm, trace) {
  // `trace` is the component hierarchy trace
  if (msg === ignoreWarnMessage) {
    msg = null
    vm = null
    trace = null
  }
}

// register directive v-money and component <money>
Vue.use(money, {
  precision: 0,
  decimal: '.',
  thousands: ',',
  allowBlank: true
})
