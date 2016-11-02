<template lang="pug">
  .background
    node(
      v-for="node in nodes"
      ":key"="node.id"
      ":id"="node.id"
      ":type"="node.type"
      ":level"="node.level"
      ":value"="node.value"
      ":valueType"="node.valueType"
      ":iconClass"="node.type === 0 ? node.childrenVisible? 'fa-minus-circle' : 'fa-plus-circle' : node.type === 1 ? node.childrenVisible ? 'fa-circle-o' : 'fa-circle' : 'fa-circle-o-notch' "
      ":parentNode"="node.parentNode"
      ":childNodes"="node.childNodes"
      ":visible"="node.visible"
      ":childrenVisible"="node.childrenVisible"
      "@toggle"="toggle"
    )
</template>

<script>
/**
 * 树组件
 *
 * 节点类型：
 * 1.根节点
 * 2.枝节点
 * 3.叶子节点
 *
 * 节点对象：
 * {
 *   id
 *   type
 *   level
 *   value
 *   valueType
 *   iconClass
 *   parentNode
 *   childNodes
 *   visible
 *   childrenVisible
 * }
 */
import dataHandler from './dataHandler'
import TreeNode from './TreeNode'

export default {
  name: 'tree',
  data () {
    return {
      nodes: dataHandler()
    }
  },
  methods: {
    toggle (e) {
      let currentNode = this.nodes[e.target.parentNode.id]

      this._toggleChildren(currentNode.childNodes, !currentNode.childrenVisible)
      currentNode.childrenVisible = !currentNode.childrenVisible
    },
    _toggleChildren (childNodes, switchTo) {
      childNodes.forEach(v => {
        v.visible = switchTo
        /**
         * 逻辑
         * v.childrenVisible    switchTo   execute
         * true                 true       true
         * true                 false      true
         * false                true       false
         * false                false      true
         */
        if (v.type === 1 && !(!v.childrenVisible && switchTo)) {
          this._toggleChildren(v.childNodes, switchTo)
        }
      })
    }
  },
  components: {
    node: TreeNode
  }
}
</script>

<style lang="css">
</style>
