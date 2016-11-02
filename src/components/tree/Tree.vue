<template lang="html">
  <div class="background">

  </div>
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
  components: {
    TreeNode
  },
  beforeCreate () {
    console.log(dataHandler())
  }
}
</script>

<style lang="css">
</style>
