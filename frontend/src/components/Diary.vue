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
          <button class="btn btn-primary ml-auto" data-toggle="modal" data-target="#plus">+</button>
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
                  <label>제목</label>
                  <input type="text" class="form-control">
                </div>
                <div class="form-group">
                  <label>내용</label>
                  <textarea type="text" class="form-control" style="height: 80px;"></textarea>
                </div>
                <div class="form-group">
                  <label>중요도</label>
                  <div class="starRev">
                    <span class="starR on"></span>
                    <span class="starR"></span>
                    <span class="starR"></span>
                    <span class="starR"></span>
                    <span class="starR"></span>
                  </div>
                </div>
                <div class="form-row">
                  <label>시작 날짜</label>
                  <input class="form-control" type="datetime-local" value="2018-06-01T00:00:00">
                </div>
                <br />
                <div class="form-row">
                  <label>종료 날짜</label>
                  <input class="form-control" type="datetime-local" value="2018-06-01T00:00:00">
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
                  <button type="button" class="btn btn-primary">추가하기</button>
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
export default {
  components: {
    TopNavbar,
    ContentFooter,
    Sidebar
  }
}
$(document).ready(function () {
  $('.starRev span').click(function () {
    $(this).parent().children('span').removeClass('on')
    $(this).addClass('on').prevAll('span').addClass('on')
    return false
  })
})
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
