<template>
    <div class="main-content">
      <div class="title text-left">
        프로젝트 목록
      </div>

      <div class="container mt-3">
        <button @click="onMemberPopup" class="btn btn-primary mr-1" data-toggle="modal">멤버관리</button>
        <button class="btn btn-primary mr-1" data-toggle="modal" data-target="#projectadd" @click="inputProjectName=''">추가</button>
        <button class="btn btn-primary" @click="delProject">삭제</button>
        <div class="row p-3">
          <div class="col-md-6">
            <div class="list-group">
              <div class="list-group-item" style="background-color: #0497df; color:white;">프로젝트 목록</div>
              <div class="list-group-item">
                <div id="user" class="list-group-item list-group-item-secondary disabled">
                  개인용
                </div>
                <div class="list-group" id="list-tab" role="tablist">
                  <div v-if="projects && projects.length">
                  <template v-for="project in projects">
                    <a v-if="project.projectId == projectId" class="list-group-item list-group-item-action active"
                       @click="selectProject(project)" v-bind:id="project.projectId" data-toggle="list" href="#" role="tab">
                      {{project.projectName}}
                    </a>
                    <a v-else class="list-group-item list-group-item-action"
                       @click="selectProject(project)" v-bind:id="project.projectId" data-toggle="list" href="#" role="tab">
                      {{project.projectName}}
                    </a>
                  </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 멤버관리 -->
      <div class="modal fade" id="member" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">멤버목록</h5>
            </div>
            <div class="modal-body">
              <table class="table" style="color: black; text-align: center;">
                <thead>
                  <tr>
                    <td align="center" width="60">아이디</td>
                    <td align="center" width="15">이름</td>
                    <td align="center" width="15">권한</td>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="member in members">
                    <tr :class="{selected:member == selected}" @click="selected = member">
                      <td align="center" width="60">{{member.userId}}</td>
                      <td align="center" width="15">{{member.name}}</td>
                      <td align="center" width="15">{{member.isAdmin}}</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#invite" @click="searchResult=[], selected=''">초대</button>
              <button type="button" class="btn btn-primary" @click="delMember">추방</button>
              <button type="button" class="btn btn-default" data-dismiss="modal">나가기</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 멤버초대 -->
      <div class="modal fade" id="invite" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modal">멤버초대</h5>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <input v-model="keyword" type="text" id="keyword" class="form-control" name="keyword" placeholder="유저 ID 입력 (ex: tkqlzz)" style="width:70%; display:inline;">
                <button @click="searchMember(keyword)" type="button" class="btn btn-primary">검색</button>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <td align="center" width="10">No.</td>
                    <td align="center" width="50">아이디</td>
                    <td align="center" width="15">이름</td>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="res in searchResult">
                    <tr :class="{selected:res == selected}" @click="selected = res">
                      <td align="center" width="10">{{res.number}}</td>
                      <td align="center" width="50">{{res.userId}}</td>
                      <td align="center" width="15">{{res.name}}</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" @click="inviteMember">초대</button>
              <button type="button" class="btn btn-default" data-dismiss="modal">나가기</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 프로젝트 추가 -->
      <div class="modal fade" id="projectadd" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">프로젝트 추가</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label>내용</label>
                  <input type="text" v-model="inputProjectName" class="form-control">
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
                  <button type="button" class="btn btn-primary" @click="addProject">등록하기</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import TopNavbar from './commons/TopNavbar.vue'
import ContentFooter from './commons/ContentFooter.vue'
import Sidebar from './commons/Sidebar.vue'
export default {
  components: {
    TopNavbar,
    ContentFooter,
    Sidebar
  },
  data () {
    return {
      projects: [],
      project: '',
      projectId: localStorage.projectId,
      inputProjectName: '',
      isLoading: false,
      members: [],
      searchResult: [],
      selected: ''
    }
  },
  methods: {
    selectProject (project) {
      this.project = project
      this.projectId = project.projectId
    },
    async addProject () {
      if (!this.inputProjectName) return
      if (!localStorage.token) return

      try {
        const token = JSON.parse(localStorage.token)
        const projectName = this.inputProjectName
        this.inputProjectName = ''
        const res = await this.$http.post('/api/projects/', {
          projectName: projectName,
          userId: token.userId
        })
        if (res.data.success) {
          this.projects.push(res.data.data)
          $('#projectadd').modal('hide')
          this.$EventBus.$emit('pushProject', res.data.data)
        } else {
          throw new Error('프로젝트 생성 실패 ' + res.data.message)
        }
      } catch (err) {
        alert(err)
      }
    },
    async delProject () {
      if (this.isLoading) return
      if (!this.projectId || !this.project) return
      this.isLoading = true

      try {
        const res = await this.$http.delete('/api/projects/' + this.projectId)
        if (res.data.success) {
          const index = this.projects.indexOf(this.project)
          this.projects.splice(index, 1)
          this.projectId = ''
          this.$EventBus.$emit('delProject', this.project)
        } else {
          throw new Error('프로젝트 삭제 실패 ' + res.data.message)
        }
      } catch (err) {
        alert(err)
      }
      this.isLoading = false
    },
    async onMemberPopup () {
      if (this.isLoading) return
      if (!this.projectId || !this.project) {
        alert('프로젝트를 먼저 선택해주세요')
        return
      }
      this.isLoading = true

      try {
        const res = await this.$http.get('/api/projects/' + this.projectId + '/members/')
        if (res.data.success) {
          this.members = res.data.data
          this.selected = ''
          $('#member').modal('show')
        } else {
          throw new Error('프로젝트 멤버 조회 실패 ' + res.data.message)
        }
      } catch (err) {
        alert(err)
      }

      this.isLoading = false
    },
    async searchMember (userId) {
      if (this.isLoading) return
      this.searchResult = ''
      if (!userId || !this.projectId) return
      this.isLoading = true

      try {
        const res = await this.$http.get('/api/users/like/' + userId + '/projects/' + this.projectId)
        if (res.data.success) {
          this.searchResult = res.data.data
        } else {
          throw new Error('유저 검색 실패 ' + res.data.message)
        }
      } catch (err) {
        console.log(err)
      }

      this.isLoading = false
    },
    async inviteMember () {
      if (this.isLoading) return
      if (!this.selected || !this.projectId) return
      this.isLoading = true

      try {
        const res = await this.$http.post('/api/projects/' + this.projectId + '/members/', {
          userId: this.selected.userId,
          isAdmin: 0
        })
        if (res.data.success) {
          this.members.push(res.data.data)
          $('#invite').modal('hide')
        } else {
          throw new Error('멤버 추가 실패 ' + res.data.message)
        }
      } catch (err) {
        alert(err)
      }

      this.isLoading = false
    },
    async delMember () {
      if (!this.selected || !this.projectId) return
      if (this.selected.isAdmin) { alert('관리자는 추방할 수 없습니다'); return }
      if (this.isLoading) return
      this.isLoading = true

      try {
        const res = await this.$http.delete('/api/projects/' + this.projectId + '/members/' + this.selected.userId)
        if (res.data.success) {
          const index = this.members.indexOf(this.selected)
          this.members.splice(index, 1)
          this.selected = ''
        } else {
          throw new Error('멤버 삭제 실패 ' + res.data.message)
        }
      } catch (err) {
        alert.log(err)
      }

      this.isLoading = false
    }
  },
  async created () {
    // todo test code Token
    const temp = {userId: 'tkql', password: '456', name: 'qwe', email: 'tk@gm', themeId: 0, projectId: 'tkql'}
    localStorage.token = JSON.stringify(temp)
    // test code end
    try {
      const token = JSON.parse(localStorage.token)
      const res = await this.$http.get('/api/projects/users/' + token.userId)
      if (res.data.success) {
        this.projects = res.data.data
      } else {
        throw new Error('유저 프로젝트 조회 실패 ' + res.data.message)
      }
    } catch (err) {
      alert(err)
    }
  }
}
</script>

<style scoped>
tbody tr:hover, tbody tr.selected {
  background-color: #94b8ff
}
</style>
