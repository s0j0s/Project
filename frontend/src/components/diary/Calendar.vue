<template>
  <full-calendar :config="config" :events="events"  @event-selected="eventSelected"/>
</template>
<script>
import moment from 'moment'
import Vue from 'vue'
import 'font-awesome/css/font-awesome.css'
export default {
  name: 'Calendar',
  data () {
    return {
      events: [
        {
          title: 'testset',
          start: moment(),
          end: moment().add(1, 'd'),
        },
        {
          title: 'another test',
          start: moment().add(2,'d'),
          end: moment().add(2, 'd').add(2, 'h'),
        },
      ],
      config: {
        defaultView: 'month',
        locale: 'ko',
        themeSystem: 'bootstrap4'
      }
    }
  },
  methods: {
    eventSelected (event) {
      this.$EventBus.$emit('openEdit', event)
    },
    async getAllDiary () {
      try {
        const res = await this.$http.get('/api/projects/' + localStorage.projectId + '/diaries/')
        if (res.data.success) {
          var events = res.data.data
          for (var i in events) {
            events[i].color = this.setColor(events[i].importance)
          }
          this.events = events
        } else {
          throw new Error('일정 조회 실패 ' + res.data.message)
        }
      } catch (err) {
        alert(err)
      }
    },
    addDiary (diary) {
      diary.color = this.setColor(diary.importance)
      this.events.push(diary)
    },
    updateDiary (diary) {
      const index = this.events.map(function(e) { return e.diaryId }).indexOf(parseInt(diary.diaryId))
      this.events[index].title = diary.title
      this.events[index].start = diary.start
      this.events[index].end = diary.end
      this.events[index].importance = diary.importance
      this.events[index].color = this.setColor(diary.importance)
    },
    delDiary (diaryId) {
      const index = this.events.map(function(e) { return e.diaryId }).indexOf(diaryId)
      this.events.splice(index, 1)
    },
    setColor (importance) {
      if (importance == 1)
        return 'rgba(75, 140, 173, 0.8)'
      else if (importance == 2)
        return 'rgba(61, 128, 173, 0.85)'
      else if (importance == 3)
        return 'rgba(48, 125, 173, 0.91)'
      else if (importance == 4)
        return 'rgba(28, 112, 173, 0.96)'
      else if (importance == 5)
        return '#0062ad'
    },
    selectProject () {
      this.getAllDiary()
    },
  },
  created () {
    // todo test code Token
    const temp = {userId: 'tkql', password: '456', name: 'qwe', email: 'tk@gm', themeId: 0, projectId: 'tkql'}
    localStorage.token = JSON.stringify(temp)
    // test code end
    this.$EventBus.$on('addDiary', this.addDiary)
    this.$EventBus.$on('updateDiary', this.updateDiary)
    this.$EventBus.$on('delDiary', this.delDiary)
    this.$EventBus.$on('selectProject', this.selectProject)
    this.$EventBus.$on('getAllDiary', this.getAllDiary)
    this.getAllDiary()
  }
}
</script>
<style scoped>
#calendar {
  background-color: white;
}
</style>
