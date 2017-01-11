<template lang="html">
  <div class="editor">
    <div class="tool-bar" @exec="exec($event)">
      <slot>This is default slot.</slot>
    </div>
    <div
      ref="editZone"
      class="edit-zone"
      contenteditable="true">
    </div>
  </div>
</template>

<script>
export default {
}
</script>
