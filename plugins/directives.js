import Vue from 'vue'

Vue.directive('uppercase', {
  bind(el) {
    el.addEventListener('blur', (e) => {
      e.target.value = e.target.value.toUpperCase()
      const event = new Event('input', {
        bubbles: true
      })
      el.value = e.target.value.toUpperCase()
      el.dispatchEvent(event)
    })
  }
})
Vue.directive('ssn', {
  bind(el) {
    el.addEventListener('blur', (e) => {
      const last4 = e.target.value.substr(e.target.value.length - 4)
      const mask = '*** - ** - '
      e.target.value = mask + last4
      // const event = new Event('input', {
      //   bubbles: true
      // })
      // el.value = e.target.value.toUpperCase()
      // el.dispatchEvent(event)
    })
  }
})
