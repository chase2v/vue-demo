<template lang="html">
  <div>
    <div class="dp-output">{{showTime}}</div>
    <div class="dp-panel">
      <div class="dp-header">
        <i class="fa fa-angle-double-left" @click.stop="switchYear(-1)"></i>
        <i class="fa fa-angle-left" @click.stop="switchMonth(-1)"></i>
        <span class="dp-header-caption" @click.stop="returnToToday">{{`${year}年${month}月`}}</span>
        <i class="fa fa-angle-right" @click.stop="switchMonth(1)"></i>
        <i class="fa fa-angle-double-right" @click.stop="switchYear(1)"></i>
      </div>
      <div class="dp-main">
        <div class="dp-main-caption">
          <span class="dp-grid dp-grid-caption" v-for="day in weekdays" :key="day">{{day}}</span>
          <div v-for="(dateArr, idx) in dateArrs" :key="idx">
            <span class="dp-grid dp-grid-date" v-for="dateObj in dateArr" :key="dateObj.date" :data-date="dateObj.date" :class="dateObj.className" @click.stop="selectDate">{{dateObj.dateDay}}</span>
          </div>
        </div>
      </div>
      <div class="dp-jump" @click.self="showQJPanel">
        快速跳转
        <div class="dp-jump-panel" @keyup.enter.capture="quickJumpTo" v-show="quickJump.showPanel">
          <input v-model.number="quickJump.year"/>
          年
          <input v-model.number="quickJump.month"/>
          月
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'datepicker',
  data () {
    return {
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayAmount: [
        [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      ],
      dateArrs: [],
      showTime: '请选择日期',
      quickJump: {
        year: '',
        month: '',
        showPanel: false
      }
    }
  },
  computed: {
    dateArrsMap () {
      return this.dateArrs.map(v => {
        return v.map(_v => {
          return _v.getDate()
        })
      })
    }
  },
  methods: {
    showQJPanel () {
      this.quickJump.showPanel = !this.quickJump.showPanel
    },
    quickJumpTo () {
      let year = this.quickJump.year
      let month = this.quickJump.month
      if (!year && !month) {
        return
      } else if (!year) {
        this.month = this.quickJump.month
        this.execute(new Date(year, this.month, 1))
        this.quickJump.month = ''
        this.showQJPanel()
      } else if (!month) {
        this.year = this.quickJump.year
        this.execute(new Date(this.year, month, 1))
        this.quickJump.year = ''
        this.showQJPanel()
      } else {
        this.execute(new Date(year, month, 1))
        this.quickJump.year = ''
        this.quickJump.month = ''
        this.showQJPanel()
      }
    },
    selectDate (event) {
      let date = new Date(event.target.dataset.date)

      this.showTime = date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate() + '日'
    },
    returnToToday () {
      this.execute(new Date())
    },
    switchMonth (offset) {
      let month = this.month - 1 + offset
      if (month > 11) {
        month = 0
        this.year++
      } else if (month < 0) {
        month = 11
        this.year--
      }
      this.execute(new Date(this.year, month, 1))
    },
    switchYear (offset) {
      this.execute(new Date(this.year + offset, this.month - 1, 1))
    },
    isLeapYear (year) {
      // 判断是否是闰年
      return year % 400 !== 0 && year % 4 === 0
    },
    getMonthDays (month, year) {
      // 获取当月的天数
      // 首先要确定是否是闰年
      return this.isLeapYear(year) ? this.dayAmount[1][month] : this.dayAmount[0][month]
    },
    computeRows (day, month, year) {
      // 判断面板需要多少行展示
      // 首先要知道有多少天
      // 然后根据本月一号是星期几判断
      let dayAmount = this.getMonthDays(month, year)
      if (day === 0 && dayAmount === 28) { // 4 行
        return 4
      } else if ((day === 6 && dayAmount === 30) || (day >= 5 && dayAmount === 31)) { // 6 行
        return 6
      } else {
        return 5
      }
    },
    getDate (date, offset) {
      // 根据偏移量来获得日期
      return new Date((date - 0) + 86400000 * offset)
      // 3600*1000*24 = 86400 000
    },
    createDateObj (date, todayDate) {
      // 创建日期对象
      // {
      //   date,
      //   dateDay,
      //   class,
      // }
      let className = 'date'
      let today = {
        year: todayDate.getFullYear(),
        month: todayDate.getMonth(),
        day: todayDate.getDate()
      }
      if (date.getFullYear() === today.year && date.getMonth() === today.month) {
        className = 'date-currentMonth'
      }
      if (date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth() && date.getDate() === new Date().getDate()) {
        className = 'date-today'
      }
      return {
        date: date,
        dateDay: date.getDate(),
        className: className
      }
    },
    execute (date) {
      const today = {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay()
      }
      this.year = today.year
      this.month = today.month + 1
      const firstDayOfMonth = this.getDate(date, 1 - today.date)
      const firstDay = this.getDate(firstDayOfMonth, -firstDayOfMonth.getDay())
      const rowAmount = this.computeRows(today.day, today.mongth, today.year)
      for (let i = 0, oft = 0; i < rowAmount; i++) {
        this.$set(this.dateArrs, i, [])
        for (let j = 0; j < 7; j++) {
          // this.dateArrs[i][j] = this.getDate(firstDay, oft)
          this.$set(this.dateArrs[i], j, this.createDateObj(this.getDate(firstDay, oft), date))
          oft++
        }
      }
      console.log(this.dateArrs)
    }
  },
  created () {
    this.execute(new Date())
  }
}
</script>

<style lang="scss">
.dp-panel {

  border: 1px solid #fafafa;
  border-radius: 5px;

  @at-root .dp-header {
    .dp-header-caption {
      display: inline-block;
      width: 150px;
      height: 30px;
      line-height: 30px;
      cursor: pointer;
    }
    .fa {
      cursor: pointer;
    }
  }

  @at-root .dp-main {
    .dp-grid {
      display: inline-block;
      width: 30px;
      height: 20px;
      cursor: pointer;

      &.date-today {
        color: #f00;
      }
      &.date-currentMonth {
        color: #000;
      }
      &.date {
        color: #ccc;
      }
    }
  }
}
</style>
