<template>
  <body>
    <TopNavbar />
    <Sidebar />
    <div class="main-content">
      <div class="title text-left">
        설정
      </div>
      <div class="container">
        <div class="row p-3">
          <div class="col-md-6">
            <div class="list-group">
              <a href="#" class="list-group-item active">개인정보 수정</a>
              <div class="list-group-item">
                <form>
                  <div class="form-group">
                    <label>아이디</label>
                    <input type="text" disabled="true" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>비밀번호</label>
                    <input type="password" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>비밀번호 확인</label>
                    <input type="password" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>이름</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>이메일</label>
                    <input type="email" class="form-control">
                  </div>
                  <button type="submit" class="btn btn-primary">수정하기</button>
                </form>
              </div>
            </div>
          </div>
        </div>
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
.form-group {
  font-family: 'Nanum Gothic';
}
</style>
