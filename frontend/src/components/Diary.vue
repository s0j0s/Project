<template>
    <div class="main-content">
      <div class="title text-left">
        일정
      </div>

      <div class="container">
        <div class="row p-3">
          <router-link to="/diary/calendar"><button class="btn btn-primary">캘린더</button></router-link>
          <router-link to="/diary/importance"><button class="btn btn-primary ml-2">중요도순</button></router-link>
          <router-link to="/diary/list"><button class="btn btn-primary ml-2">목록</button></router-link>
          <button class="btn btn-primary ml-auto" data-toggle="modal" data-target="#plus" @click="init">+</button>
        </div>
      </div>

      <!-- 일정 추가 -->
      <div class="modal fade" id="plus" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">일정 추가</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label>내용</label>
                  <input v-model="title" type="text" class="form-control">
                </div>
                <div class="form-group">
                  <label>중요도</label>
                  <star-rating v-model="importance" v-bind:star-size="40"></star-rating>
                </div>
                <div class="form-row">
                  <label>시작 날짜</label>
                  <input v-model="start" class="form-control" type="datetime-local" value="">
                </div>
                <br />
                <div class="form-row">
                  <label>종료 날짜</label>
                  <input v-model="end" class="form-control" type="datetime-local" value="2018-06-01T00:00:00">
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
                  <button @click="addDiary" type="button" class="btn btn-primary">추가하기</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- 일정 수정 -->
      <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">일정 수정</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label>내용</label>
                  <input v-model="title" type="text" class="form-control">
                </div>
                <div class="form-group">
                  <label>중요도</label>
                  <star-rating v-model="importance" v-bind:star-size="40"></star-rating>
                </div>
                <div class="form-row">
                  <label>시작 날짜</label>
                  <input v-model="start" class="form-control" type="datetime-local" value="">
                </div>
                <br />
                <div class="form-row">
                  <label>종료 날짜</label>
                  <input v-model="end" class="form-control" type="datetime-local" value="2018-06-01T00:00:00">
                </div>
                <div class="modal-footer">
                  <button @click="delDiary" type="button" class="btn btn-danger mr-auto">삭제하기</button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
                  <button @click="updateDiary" type="button" class="btn btn-primary">수정하기</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <router-view></router-view>

    </div>
</template>

<script>
import TopNavbar from './commons/TopNavbar.vue'
import ContentFooter from './commons/ContentFooter.vue'
import Sidebar from './commons/Sidebar.vue'
import moment from 'moment'
export default {
  components: {
    TopNavbar,
    ContentFooter,
    Sidebar
  },
  sockets: {
    connect () {
      this.$EventBus.$emit('getAllDiary')
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
    }
  },
  data () {
    return {
      diaryId: '',
      title: '',
      start: '',
      end: '',
      importance: 1,
      isLoading: false
    }
  },
  methods: {
    init () {
      this.title = ''
      this.start = (moment().format()).substring(0, 19)
      this.end = moment().add(1, 'd').format().substring(0, 19)
      this.importance = 1
      this.isLoading = false
    },
    openEdit (diary) {
      this.diaryId = diary.diaryId
      this.title = diary.title
      this.start = (diary.start.format()).substring(0, 19)
      this.end = (diary.end.format()).substring(0, 19)
      this.importance = diary.importance
      $('#edit').modal('show')
    },
    async addDiary () {
      if (!this.title || !this.start || !this.end || !this.importance) return
      if (!localStorage.token) return
      if (!localStorage.projectId) return
      if (this.isLoading) return
      this.isLoading = true

      try {
        const projectId = localStorage.projectId
        const res = await this.$http.post('/api/projects/' + projectId + '/diaries/', {
          title: this.title,
          start: this.start,
          end: this.end,
          importance: this.importance
        })
        if (res.data.success) {
          $('#plus').modal('hide')
          this.$EventBus.$emit('addDiary', res.data.data)
          this.$socket.emit('addDiary', res.data.data)
        } else {
          throw new Error('일정 등록 실패 ' + res.data.message)
        }
      } catch (err) {
        alert(err)
      }
      this.isLoading = false
    },
    async updateDiary () {
      if (!this.title || !this.start || !this.end || !this.importance || !this.diaryId) return
      if (!localStorage.token) return
      if (!localStorage.projectId) return
      if (this.isLoading) return
      this.isLoading = true

      try {
        const projectId = localStorage.projectId
        const res = await this.$http.put('/api/projects/' + projectId + '/diaries/' + this.diaryId, {
          title: this.title,
          start: this.start,
          end: this.end,
          importance: this.importance
        })
        if (res.data.success) {
          $('#edit').modal('hide')
          this.$EventBus.$emit('updateDiary', res.data.data)
          this.$socket.$emit('updateDiary', res.data.data)
        } else {
          throw new Error('일정 등록 실패 ' + res.data.message)
        }
      } catch (err) {
        alert(err)
      }
      this.isLoading = false
    },
    async delDiary () {
      if (!this.title || !this.start || !this.end || !this.importance  || !this.diaryId) return
      if (!localStorage.token) return
      if (!localStorage.projectId) return
      if (this.isLoading) return
      this.isLoading = true

      try {
        const projectId = localStorage.projectId
        const res = await this.$http.delete('/api/projects/' + projectId + '/diaries/' + this.diaryId)
        if (res.data.success) {
          $('#edit').modal('hide')
          this.$EventBus.$emit('delDiary', this.diaryId)
          this.$socket.emit('delDiary', this.diaryId)
        } else {
          throw new Error('일정 등록 실패 ' + res.data.message)
        }
      } catch (err) {
        alert(err)
      }
      this.isLoading = false
    }
  },
  created () {
    this.$EventBus.$on('openEdit', this.openEdit);
  }
}
</script>

<style scoped>
.starR{
  background: url('http://miuu227.godohosting.com/images/icon/ico_review.png') no-repeat right 0;
  background-size: auto 100%;
  width: 30px;
  height: 30px;
  display: inline-block;
  cursor: pointer;
}
.starR.on{background-position:0 0;}
</style>
