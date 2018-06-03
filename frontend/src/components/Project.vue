<template>
  <body>
    <TopNavbar />
    <Sidebar />
    <div class="main-content">
      <div class="title text-left">
        프로젝트 목록
      </div>

      <div class="container mt-3">
        <button class="btn btn-primary" data-toggle="modal" data-target="#member">멤버관리</button>
        <button class="btn btn-primary" data-toggle="modal" data-target="#invite">멤버초대</button>
        <button class="btn btn-primary" data-toggle="modal" data-target="#projectadd">추가</button>
        <button class="btn btn-primary">삭제</button>
        <div class="row p-3">
          <div class="col-md-6">
            <div class="list-group">
              <div class="list-group-item" style="background-color: #0497df; color:white;">프로젝트 목록</div>
              <div class="list-group-item">
                <div class="list-group">
                  <div class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-center">
                      <h5 class="mb-1">To Do</h5>
                    </div>
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
              <div>
                <table class="table" style="color: black; text-align: center;">
                  <thead>
                  <tr>
                    <td align="center" width="60">아이디</td>
                    <td align="center" width="15">이름</td>
                    <td align="center" width="15">권한</td>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">초대</button>
                <button type="button" class="btn btn-primary">추방</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">나가기</button>
              </div>
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
                <input type="text" id="keyword" class="form-control" name="keyword" placeholder="유저 ID 입력 (ex: tkqlzz)" style="width:300px; display:inline;">
                <button type="button" class="btn btn-primary">검색</button>
              </div>
              <div>
                <table class="table">
                  <thead>
                    <tr>
                      <td align="center" width="10">No.</td>
                      <td align="center" width="50">ID</td>
                      <td align="center" width="15">NAME</td>
                      <td align="center" width="10">#</td>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">나가기</button>
              </div>
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
                  <input type="text" class="form-control">
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
                  <button type="button" class="btn btn-primary">등록하기</button>
                </div>
              </form>
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

</style>
