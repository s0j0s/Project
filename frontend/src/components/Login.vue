<template>
    <div class="card">
      <div class="card-title" style="margin-top:30px;">
        <h2 class="card-title text-center" style="color:#113366;">로그인</h2>
      </div>
      <div class="card-body">
        <div class="form-signin">
          <h5 class="text-left" style="font-size:1em;">아이디와 비밀번호를 입력하세요.</h5>
          <input v-model="userId" type="text" class="form-control" placeholder="아이디"><br/>
          <input v-model="password" type="password" class="form-control" placeholder="비밀번호"><br />
          <button class="btn btn-lg btn-primary btn-block" @click="doLogin">로 그 인</button>
        </div>
      </div>
    </div>
</template>

<script>
import Auth from '@/api/Auth'

export default {
  name: "Login",
  data: function () {
    return {
      userId: '',
      password: ''
    }
  },
  methods: {
    async doLogin () {
      if (!this.userId) {
        alert('아이디를 입력해주세요')
      } else if (!this.password) {
        alert('패스워드를 입력해주세요')
      } else if (await Auth.login(this.userId, this.password)) {
        if (!this.$route.query.redirect) {
          this.$router.push('diary')
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }
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
</style>
