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
              <div class="list-group-item" style="background-color: #0497df; color:white;">개인정보 수정</div>
              <div class="list-group-item">
                <div>
                  <div class="form-group">
                    <label>비밀번호</label>
                    <input v-model="password" type="password" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>비밀번호 확인</label>
                    <input v-model="password2" type="password" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>이름</label>
                    <input v-model="name" type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>이메일</label>
                    <input v-model="email" type="email" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>테마</label><br/>
                    <label class="form-check-label">
                      <input v-model="themeId" class="form-check-input" type="radio" name="theme" value=0> 화이트
                    </label>
                    <label class="form-check-label">
                      <input v-model="themeId" class="form-check-input" type="radio" name="theme" value=1> 블랙
                    </label>
                  </div>
                  <button @click="userModify" type="submit" class="btn btn-primary">수정하기</button>
                </div>
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
  name: "Setting",
  components: {
    TopNavbar,
    ContentFooter,
    Sidebar
  },
  data: function () {
    // test code login Token
    const temp = {userId: '123', password: '456', name: 'qwe', email: 'tk@gm', themeId: 0}
    localStorage.token = JSON.stringify(temp)
    // test code end

    const token = JSON.parse(localStorage.token)
    return {
      userId: token.userId,
      password: '',
      password2: '',
      name: token.name,
      email: token.email,
      themeId: token.themeId
    }
  },
  methods: {
    async userModify () {
      if (!this.password || !this.password2) {
        alert('패스워드를 입력해주세요'); return
      } else if (!this.name) {
        alert('이름을 입력해주세요'); return
      } else if (!this.email) {
        alert('이메일을 입력해주세요'); return
      } else if (this.password !== this.password2) {
        alert('첫 비밀번호가 두번째 비밀번호와 일치하지 않습니다.'); return
      }
      try {
        const res = await this.$http.put('/api/users/' + this.userId, {
          password: this.password,
          name: this.name,
          email: this.email,
          themeId: this.themeId
        })
        if (res.data.success) {
          alert('정보변경 성공')
          this.$router.push('diary')
        } else {
          throw new Error(' 실패 ' + res.data.message)
        }
      } catch (err) {
        alert(err)
      }
    }
  }
}
</script>

<style scoped>
.form-group {
  font-family: 'Nanum Gothic';
}
</style>
