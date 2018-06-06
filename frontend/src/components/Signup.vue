<template>
  <div class="card">
    <div class="card-title" style="margin-top:30px;">
      <h2 class="card-title text-center" style="color:#113366;">회원가입</h2>
    </div>
    <div class="card-body">
      <div class="form-signin">
        <h5 class="text-left" style="font-size:1em;">회원정보를 등록하세요.</h5>
        <input v-model="userId" type="text" class="form-control inputId" placeholder="아이디">
        <button class="btn-md btn-default" style="font-size:0.9rem" @click="IdCheck">중복검사</button><br/><br/>
        <input v-model="password" type="password" class="form-control" placeholder="비밀번호"><br />
        <input v-model="password2" type="password" class="form-control" placeholder="비밀번호 확인"><br />
        <input v-model="name" type="text" class="form-control" placeholder="이름"><br />
        <input v-model="email" type="email" class="form-control" placeholder="이메일"><br />
        <button class="btn btn-lg btn-primary btn-block" @click="SignUp">회원가입</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data: function () {
    return {
      userId: '',
      password: '',
      password2: '',
      name: '',
      email: '',
      idCheck: false
    }
  },
  methods: {
    async IdCheck () {
      if (!this.userId) {
        alert('아이디를 입력해주세요'); return
      }
      try {
        const res = await this.$http.get('/api/users/' + this.userId)
        if (!res.data.success) {
          this.idCheck = true
          alert("사용가능한 아이디입니다")
        } else {
          throw new Error("중복된 아이디입니다.")
        }
      } catch (err) {
        this.idCheck = false
        alert(err)
      }
    },
    async SignUp () {
      if (!this.userId) {
        alert('아이디를 입력해주세요'); return
      } else if (!this.password || !this.password2) {
        alert('패스워드를 입력해주세요'); return
      } else if (!this.name) {
        alert('이름을 입력해주세요'); return
      } else if (!this.email) {
        alert('이메일을 입력해주세요'); return
      } else if (this.password !== this.password2) {
        alert('첫 비밀번호가 두번째 비밀번호와 일치하지 않습니다.'); return
      } else if (!this.idCheck) {
        alert('아이디 중복검사를 확인 해주세요'); return
      }
      try {
        const res = await this.$http.post('/api/users', {
          userId: this.userId,
          password: this.password,
          name: this.name,
          email: this.email
        })
        if (res.data.success) {
          this.$router.push('diary')
          localStorage.token = JSON.stringify(res.data.data)
          localStorage.projectId = res.data.data.userId
          localStorage.projectName = '개인용'
        } else {
          throw new Error('회원가입 실패 ' + res.data.message)
        }
      } catch (err) {
        alert(err)
      }
    }
  }
}
</script>

<style scoped>
.card {
  margin: auto;
  margin-top: 120px;
  width:20rem;
  border-radius:20px;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  padding: 10px;
  font-size: 0.7rem;
  font-family: 'Nanum Gothic';
}
.inputId {
  width:73%;
  height:100%;
  display:inline;
}
</style>
