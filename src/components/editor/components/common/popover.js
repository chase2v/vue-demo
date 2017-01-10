export default class Popover {
  static show () {
    let el = document.createElement('div')
    el.className = 'c-popover'
    document.querySelector('.editor').appendChild(el)
  }
  static hidden () {
    let el = document.querySelector('.c-popover')
    document.querySelector('.editor').removeChild(el)
  }
}
