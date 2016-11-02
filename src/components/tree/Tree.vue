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
      ":iconClass"="node.type === 0 ? 'fa-minus-circle' : node.type === 1 ? 'fa-circle-o' : 'fa-circle-o-notch'"
      ":parentNode"="node.parentNode"
      ":childNodes"="node.childNodes"
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
  components: {
    node: TreeNode
  }
}
</script>

<style lang="css">
</style>
