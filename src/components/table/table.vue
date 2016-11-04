<template lang="html">
  <table class="table" :class="tableStyle">
    <tbody>
      <tr>
        <th v-for="field in tdata.fields" :align="field.align" @click="reverse">{{ field.name }} <i v-if="field.align" class="fa" :class="iconTitle"></i></th>
      </tr>
      <tr v-for="row in tdata.rows">
        <td v-for="rowData in row">{{ rowData }}</td>
      </tr>
    </tbody>
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
      iconTitle: 'fa-sort-desc'
    }
  },
  methods: {
    reverse ($event) {
      if ($event.currentTarget.align) {
        this.iconTitle = this.iconTitle === 'fa-sort-desc' ? 'fa-sort-asc' : 'fa-sort-desc'
        this.tdata.rows.reverse()
      }
    }
  },
  beforeCreate () {
    http.$get('static/data/table_mock.json').then(res => {
      this.tdata = JSON.parse(res).data
    })
  }
}
</script>

<style lang="scss">

.table.table-border {

  width: 100%;
  color: #555;
  border: 1px solid #ccc;
  border-collapse: collapse;
  border-spacing: 0;

  tr {
    border-bottom: 1px solid #ccc;

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

    &:hover {
      background-color: #000;
      color: #fff;
    }

    &:last-child {
      border-right: none;
    }
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
