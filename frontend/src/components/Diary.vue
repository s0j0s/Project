<template>
    <div class="main-content">
      <div class="title text-left">
        일정
      </div>

      <div class="container mt-3">
        <router-link to="/diary/calendar"><button class="btn btn-primary">캘린더</button></router-link>
        <router-link to="/diary/importance"><button class="btn btn-primary">중요도순</button></router-link>
        <router-link to="/diary/list"><button class="btn btn-primary">목록</button></router-link>
      </div>

      <router-view></router-view>

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
  }
}
</script>

<style scoped>

</style>
