import Panel from './panel'

let _id = 0

const getId = () => {
  return 'cPanel_' + _id++
}

const getZIndex = () => {

}

const open = (id) => {
  if (this.panelId === 'cPanel_' + id) {
    this.sign = true
  } else {
    this.sign = false
  }
}

const close = (id) => {
  if (this.panelId === 'cPanel_' + id) {
    this.sign = false
  }
  // else {}
}

const destroy = (id) => {

}

const PanelManager = {
  getId,
  open,
  close,
  destroy
}

export default PanelManager
