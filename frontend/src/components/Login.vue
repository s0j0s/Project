<template>
  <div class="card">
    <div class="card-title" style="margin-top:30px;">
      <h2 class="card-title text-center" style="color:#113366;">로그인</h2>
    </div>
    <div class="card-body">
      <form class="form-signin" method="POST" onSubmit="logincall();return false">
        <h5 class="text-left" style="font-size:1em;">아이디와 비밀번호를 입력하세요.</h5>
        <input type="text" class="form-control" placeholder="아이디"><br/>
        <input type="password" class="form-control" placeholder="비밀번호"><br />
        <button class="btn btn-lg btn-primary btn-block" type="submit">로 그 인</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
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
  font-size: 16px;
}
</style>
