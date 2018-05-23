<template>
  <div class="card">
    <div class="card-title" style="margin-top:30px;">
      <h2 class="card-title text-center" style="color:#113366;">회원가입</h2>
    </div>
    <div class="card-body">
      <form class="form-signin">
        <h5 class="text-left" style="font-size:1em;">회원정보를 등록하세요.</h5>
        <input type="text" class="form-control" placeholder="아이디"><br/>
        <input type="password" class="form-control" placeholder="비밀번호"><br />
        <input type="password" class="form-control" placeholder="비밀번호 확인"><br />
        <input type="text" class="form-control" placeholder="이름"><br />
        <input type="text" class="form-control" placeholder="이메일"><br />
        <button class="btn btn-lg btn-primary btn-block" type="submit">회원가입</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup"
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
