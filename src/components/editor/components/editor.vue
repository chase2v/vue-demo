<template lang="html">
  <div class="editor">
    <div class="tool-bar">
      <slot>This is default slot.</slot>
    </div>
    <div class="edit-zone" contenteditable="true"></div>
  </div>
</template>

<script>
export default {
}
</script>
