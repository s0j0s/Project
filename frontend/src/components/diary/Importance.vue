<template>
  <div class="container">
    <div class="card mb-3 pl-2 pr-2">
      <div class="card-header" style="text-align: center">Important</div>
        <div class="row">
          <div class="col-md-6 mt-2">
            <div class="card border-dark">
              <div class="card-header" style="text-align: center">Urgent</div>
              <table class="table" style="text-align: center">
                <thead>
                <tr>
                  <td width="30">내용</td>
                  <td width="30">시작 날짜</td>
                  <td width="30">종료 날짜</td>
                </tr>
                </thead>
                <tbody>
                <template v-for="event in events">
                  <tr v-if="event.importance > 3 && is7After(event.end)">
                    <td width="30">{{event.title}}</td>
                    <td width="30">{{(event.start).substring(0, 16).replace('T', ' ')}}</td>
                    <td width="30">{{(event.end).substring(0, 16).replace('T', ' ')}}</td>
                  </tr>
                </template>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-md-6 mt-2 mb-2">
            <div class="card border-dark">
              <div class="card-header" style="text-align: center">Not Urgent</div>
              <table class="table" style="text-align: center">
                <thead>
                <tr>
                  <td width="30">내용</td>
                  <td width="30">시작 날짜</td>
                  <td width="30">종료 날짜</td>
                </tr>
                </thead>
                <tbody>
                <template v-for="event in events">
                  <tr v-if="event.importance > 3 && !is7After(event.end)">
                    <td width="30">{{event.title}}</td>
                    <td width="30">{{(event.start).substring(0, 16).replace('T', ' ')}}</td>
                    <td width="30">{{(event.end).substring(0, 16).replace('T', ' ')}}</td>
                  </tr>
                </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
    <div class="card mb-5 pl-2 pr-2">
      <div class="card-header" style="text-align: center">Not Important</div>
        <div class="row">
          <div class="col-md-6 mt-2">
            <div class="card border-dark">
              <div class="card-header" style="text-align: center">Urgent</div>
              <table class="table" style="text-align: center">
                <thead>
                <tr>
                  <td width="30">내용</td>
                  <td width="30">시작 날짜</td>
                  <td width="30">종료 날짜</td>
                </tr>
                </thead>
                <template v-for="event in events">
                  <tr v-if="event.importance <= 3 && is7After(event.end)">
                    <td width="30">{{event.title}}</td>
                    <td width="30">{{(event.start).substring(0, 16).replace('T', ' ')}}</td>
                    <td width="30">{{(event.end).substring(0, 16).replace('T', ' ')}}</td>
                  </tr>
                </template>
              </table>
            </div>
          </div>
        <div class="col-md-6 mt-2 mb-2">
          <div class="card border-dark">
            <div class="card-header" style="text-align: center">Not Urgent</div>
            <table class="table" style="text-align: center">
              <thead>
              <tr>
                <td width="30">내용</td>
                <td width="30">시작 날짜</td>
                <td width="30">종료 날짜</td>
              </tr>
              </thead>
              <tbody>
              <template v-for="event in events">
                <tr v-if="event.importance <= 3 && !is7After(event.end)">
                  <td width="30">{{event.title}}</td>
                  <td width="30">{{(event.start).substring(0, 16).replace('T', ' ')}}</td>
                  <td width="30">{{(event.end).substring(0, 16).replace('T', ' ')}}</td>
                </tr>
              </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      events: [],
      sevenAfter: moment().add(7, 'days')
    }
  },
  methods: {
    is7After (date) {
      console.log(date)
      return this.sevenAfter.isAfter(moment(date))
    },
    async getAllDiary () {
      try {
        const res = await this.$http.get('/api/projects/' + localStorage.projectId + '/diaries/')
        if (res.data.success) {
          this.events = res.data.data
        } else {
          throw new Error('일정 조회 실패 ' + res.data.message)
        }
      } catch (err) {
        alert(err)
      }
    },
    addDiary (diary) {
      this.events.push(diary)
    },
    updateDiary (diary) {
      const index = this.events.map(function(e) { return e.diaryId }).indexOf(parseInt(diary.diaryId))
      this.events[index].title = diary.title
      this.events[index].start = diary.start
      this.events[index].end = diary.end
      this.events[index].importance = diary.importance
    },
    delDiary (diaryId) {
      const index = this.events.map(function(e) { return e.diaryId }).indexOf(diaryId)
      this.events.splice(index, 1)
    },
    selectProject () {
      this.getAllDiary()
    },
  },
  created () {
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

</style>
