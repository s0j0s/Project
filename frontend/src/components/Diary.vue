<template>
  <body>
    <TopNavbar />
    <Sidebar />
    <div class="main-content">
      <div class="title text-left">
        일정
      </div>

      <div class="container mt-3">
        <button class="btn btn-primary">캘린더</button>
        <button class="btn btn-primary">중요도순</button>
        <button class="btn btn-primary">목록</button>
      </div>

    </div>
    <ContentFooter />
  </body>
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
