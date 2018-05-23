<template>
  <body>
    <nav class="navbar fixed-top navbar-expand-md" style="background-color: #315989;">
        <a href="Index" class="navbar-brand">
          <img src="../assets/calendar.png" width="30" height="30">
          모두의 다이어리
        </a>
        <ul class="navbar-nav ml-auto">
          <li>
            <button class="btn btn-primary mr-2">
              <router-link to="Login">로그인</router-link>
            </button>
          </li>
          <li>
            <button class="btn btn-success ml-1">
              <router-link to="Signup">회원가입</router-link>
            </button>
          </li>
        </ul>
    </nav>
    <section class="jumbotron background">
      <div class="text-center word">
        <h1 class="mb-4">EveryOne's Diary lets you work<br/>more collaboratively and get more done.</h1>
        <p class="lead">Trello’s boards, lists, and cards enable you to organize and prioritize<br/>your projects in a fun, flexible and rewarding way.</p>
      </div>
    </section>
    <section class="mt-5 pb-5">
      <img src="../assets/intro1.jpg">
    </section>
    <section class="pt-5 pb-5" style="background-color: #7C8FD3;">
      <img src="../assets/intro1.jpg">
    </section>

    <footer style="background-color: #FFFFFF;">
      <div class="footer-copyright text-center py-3">© Copyright 2018. All rights reserved.</div>
    </footer>
  </body>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: white;
  text-decoration:none;
}
body {
  background-color: #0980C4;
}
.background {
  width: 100%;
  height: 55vh;
  background: url(../assets/study.jpg);
  background-size: cover;
  background-position: center;
}
.word {
  margin-top: 150px;
  color: white;
}
</style>
