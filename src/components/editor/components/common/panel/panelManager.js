import Panel from './panel'

let _id = 0
let _instances = {}

const getId = () => {
  return 'cPanel_' + _id++
}

const getZIndex = () => {

}

const init = function () {
  _instances[this.panelId] = this
  this.signRoot = true
}

const open = function () {
  for (let key in _instances) {
    if (key === this.panelId) {
      _instances[key].signLeaf = true
    } else {
      _instances[key].signLeaf = false
      _instances[key].$options.propsData.config.sign = false
    }
  }
}

const close = function () {
  if (_instances.hasOwnProperty(this.panelId)) {
    _instances[this.panelId].signLeaf = false
  }
  // else {}
}

const closeAll = function () {
  for (let key in _instances) {
    _instances[key].signLeaf = false
    _instances[key].$options.propsData.config.sign = false
  }
}

const destroy = (id) => {

}

const PanelManager = {
  getId,
  open,
  close,
  destroy,
  init,
  closeAll
}

export default PanelManager
