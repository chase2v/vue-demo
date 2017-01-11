import Vue from 'vue'

Vue.component('c-popover', {
  render (h) {
    let div = document.createElement('div')
    div.className = 'c-popover'
    div.style.zIndex = 10000

    debugger
  }
})

// Vue.directive('popover', {
//   inserted (el) {
//     let div = document.createElement('div')
//     div.className = 'c-popover'
//     div.style.zIndex = 10000
//     div.style.display = 'none'
//     div.click = () => {
//       debugger
//     }
//
//     let elPos = el.getBoundingClientRect()
//     el.style.position = 'absolute'
//     el.style.left = elPos.left + 'px'
//     el.style.top = elPos.top + 'px'
//     el.style.zIndex = 10001
//     el.style.backgroundColor = '#000'
//     el.style.width = '500px'
//     el.style.height = '500px'
//     div.appendChild(el)
//
//     document.documentElement.appendChild(div)
//   },
//
//   componentUpdated (el, bd, nV, oV) {
//     let popover = document.querySelector('.c-popover')
//
//     if (nV.context.isShow) {
//       popover.style.display = 'block'
//     } else {
//       popover.style.display = 'none'
//     }
//
//     popover.addEventListener('click', () => {
//       popover.style.display = 'none'
//
//
//     })
//   }
// })
