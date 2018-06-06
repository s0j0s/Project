<template>
  <body>
    <nav class="navbar fixed-top navbar-expand-md" style="background-color: #315989;">
        <a href="Index" class="navbar-brand">
          <img src="../assets/calendar.png" width="30" height="30">
          모두의 다이어리
        </a>
        <ul class="navbar-nav ml-auto d-flex flex-row">
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
        <h1 class="mb-4" style="font-size:2.5rem;">EveryOne's Diary lets you work more<br/> collaboratively and get more done.</h1>
        <p class="lead" style="font-size:1.2rem;">Diary enable you to organize and prioritize<br/>your projects in a fun, flexible and rewarding way.</p>
      </div>
    </section>

    <section class="pt-5 pl-5 pr-5" style="text-align: center; color:white;">
      <h3>Work With Any Team</h3>
      <h5 style="font-size:1rem">Whether it’s for work, a side project or even the next family <br/>vacation, Diary helps your team stay organized.</h5>
      <img src="../assets/introduce1.jpg" width="80%">
    </section>
    <section class="pl-5 pr-5" style="padding-top: 100px; background-color: #7C8FD3; text-align: center;  color:white;">
      <h3>A Productivity Platform</h3>
      <h5 style="font-size:1rem">Integrate the apps your team already uses directly into your workflow.<br/> Your team's unique business needs.</h5>
      <img src="../assets/intro1.jpg" width="80%">
    </section>

    <footer style="background-color: #FFFFFF;">
      <div class="footer-copyright text-center py-3" style="font-size:1rem">Copyright &copy; 2018. All rights reserved.</div>
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
  height: auto;
  background: url(../assets/study.jpg);
  background-size: cover;
  background-position: center;
}
.word {
  width: auto;
  margin-top: 150px;
  color: white;
}
</style>
