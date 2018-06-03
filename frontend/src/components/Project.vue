<template>
  <body>
    <TopNavbar />
    <Sidebar />
    <div class="main-content">
      <div class="title text-left">
        프로젝트 목록
      </div>

      <div class="container mt-3">
        <button class="btn btn-primary">멤버관리</button>
        <button class="btn btn-primary" data-toggle="modal" data-target="#modal">추가</button>
        <button class="btn btn-primary">삭제</button>
        <div class="row p-3">
          <div class="col-md-6">
            <div class="list-group">
              <a href="#" class="list-group-item active">프로젝트 목록</a>
              <div class="list-group-item">

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade">

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
