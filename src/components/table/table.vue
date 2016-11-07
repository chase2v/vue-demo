<template lang="html">
  <table class="table" :class="tableStyle" @mousedown="rightClick">
    <tbody>
      <tr>
        <th @dragover.prevent="" v-for="(field, idx) in tdata.fields" :align="field.align" @click="reverse" :style="{flexBasis: field.width, flexGrow: field.width ? 0 : 1}">{{ field.name }} <i v-if="field.align" class="fa" :class="iconTitle"></i><span class="editable-border" draggable="true" @drag="drag" @dragstart="dragstart" @dragend="dragend" :data-idx="idx"></span></th>
      </tr>
      <tr v-for="row in tdata.rows">
        <td v-for="(rowData, idx) in row" :style="{flexBasis: tdata.fields[idx].width, flexGrow: tdata.fields[idx].width ? 0 : 1}">{{ rowData }}</td>
      </tr>
    </tbody>
    <div class="right-menu">右键菜单</div>
  </table>
</template>

<script>
import http from '../../util/http'

export default {
  name: 'table',
  props: {
    tableStyle: {
      type: String,
      default: 'table-border'
    }
  },
  data () {
    return {
      tdata: {},
      iconTitle: 'fa-sort-desc',
      drag: {}
    }
  },
  methods: {
    reverse ($event) {
      if ($event.currentTarget.align) {
        this.iconTitle = this.iconTitle === 'fa-sort-desc' ? 'fa-sort-asc' : 'fa-sort-desc'
        this.tdata.rows.reverse()
      }
    },
    rightClick ($event) {
      $event.preventDefault()
      $event.stopPropagation()
      if ($event.button === 2) {
        $event.currentTarget.querySelector('.right-menu').style.left = $event.pageX + 'px'
        $event.currentTarget.querySelector('.right-menu').style.top = $event.pageY + 'px'
      }
    },
    dragstart ($event) {
      if (!this.drag.flag) {
        this.drag.flag = true
        this.drag.w = window.getComputedStyle($event.target.parentElement).width
        this.drag.x = $event.pageX
      }
    },
    drag ($event) {
      if (this.drag.flag) {
        this.tdata.fields[$event.target.dataset.idx].width = parseInt(this.drag.w) + ($event.pageX - this.drag.x) + 'px'
      }
    },
    dragend ($event) {
      if (this.drag.flag) {
        this.drag.flag = false
      }
    }
  },
  beforeCreate () {
    http.$get('static/data/table_mock.json').then(res => {
      this.tdata = JSON.parse(res).data
    })

    document.oncontextmenu = (event) => {
      event.preventDefault()
    }
  }
}
</script>

<style lang="scss">

.table {

  th {
    position: relative;
  }

  .editable-border {
    position: absolute;
    right: -3px;
    top: 0;
    display: inline-block;
    width: 5px;
    height: 100%;

    &:hover {
      cursor:col-resize;
    }
  }

  .right-menu {
    position: fixed;
    width: 180px;
    height: 200px;
    border: 1px solid #aaa;
    background-color: #fff;
  }
}

.table.table-border {

  width: 100%;
  color: #555;
  border: 1px solid #ccc;
  border-collapse: collapse;
  border-spacing: 0;

  tr {
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-flow: row nowrap;

    &:last-child {
      border-bottom: none;
    }

    &:nth-child(even) {
      background-color: #efefef;
    }
  }

  td, th {
    border-right: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
    flex: 1 1 0;

    &:last-child {
      border-right: none;
    }
  }

  td:hover {
    background-color: #000;
    color: #fff;
  }
}

.fa {
  /* fix 图标位置 */
  position: relative;

  &.fa-sort-desc {
    top: -3px;
  }
  &.fa-sort-asc {
    top: 3px;
  }
}

</style>
