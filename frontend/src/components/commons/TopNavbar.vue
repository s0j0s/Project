<template>
  <div class="header">
    <div class="logo">
      <img src="../../assets/calendar_black.png" width="20" height="20">
      <span>모두의 다이어리</span>
    </div>
    <div class="d-flex flex-row-reverse">
      <button @click="logout" class="btn btn-sm m-2 mr-3" style="font-size:0.8rem;">로그아웃</button>
      <div class="btn-sm m-2 mr-3" style="font-size:0.8rem;">{{userId}}</div>
      <div class="dropdown m-2 mr-3">
        <button class="btn btn-primary btn-sm dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{projectName}}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <h6 class="dropdown-header">{{projectName}}</h6>
          <div class="dropdown-divider"></div>
          <template v-for="project in projects">
            <a v-if="project.projectId != projectId" class="dropdown-item"
               @click="selectProject(project)" v-bind:id="project.projectId" href="#">
              {{project.projectName}}
            </a>
          </template>
        </div>
      </div>
    </div>
    <a hrer="#" class="nav-trigger"><span></span></a>
  </div>
</template>

<script>
import Auth from '@/api/Auth'
import Socket from '@/socket'

export default {
  name: "TopNavbar",
  data () {
    // todo test code - token
    const temp = {userId: '123', password: '456', name: 'qwe', email: 'tk@gm', themeId: 0}
    localStorage.token = JSON.stringify(temp)
    // test code end
    const token = JSON.parse(localStorage.token)
    return {
      userId: token.userId,
      projectId: localStorage.projectId,
      projectName: localStorage.projectName,
      projects: []
    }
  },
  methods: {
    logout () {
      Auth.logout()
      this.$router.push('index')
    },
    pushProject (project) {
      this.projects.push(project)
    },
    delProject (project) {
      const index = this.projects.map(function(e) { return e.projectId }).indexOf(project.projectId)
      this.projects.splice(index, 1)
      if (this.projectId == project.projectId) {
        localStorage.projectId = this.projectId = JSON.parse(localStorage.token).userId
        localStorage.projectName = this.projectName = '개인용'
      }
    },
    selectProject (project) {
      localStorage.projectId = this.projectId = project.projectId
      localStorage.projectName = this.projectName = project.projectName
      this.$EventBus.$emit('selectProject', project)
      Socket.selectProject()
    }
  },
  async created () {
    this.$EventBus.$on('pushProject', this.pushProject);
    this.$EventBus.$on('delProject', this.delProject);
    try {
      const token = JSON.parse(localStorage.token)
      const res = await this.$http.get('/api/projects/users/' + token.userId)
      if (res.data.success) {
        this.projects = [{projectId: token.userId, projectName: '개인용', projectDate: ''}].concat(res.data.data)
      } else {
        throw new Error('유저 프로젝트 조회 실패 ' + res.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
$(document).ready(function () {
  $('.nav-trigger').click(function () {
    $('.side-nav').toggleClass('visible')
  })
  $('#side-button').click(function () {
    $('.side-nav').toggleClass('visible')
  })
})
</script>

<style>
</style>
