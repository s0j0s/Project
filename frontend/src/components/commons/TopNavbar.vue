<template>
  <div class="header">
    <div class="logo">
      <img src="../../assets/calendar_black.png" width="20" height="20">
      <span>모두의 다이어리</span>
    </div>
    <div class="d-flex flex-row-reverse">
      <button @click="logOut" class="btn btn-sm m-2 mr-3" style="font-size:0.8rem;">로그아웃</button>
    </div>
    <a hrer="#" class="nav-trigger"><span></span></a>
  </div>
</template>

<script>
import Auth from '@/api/Auth'

export default {
  name: "TopNavbar",
  methods: {
    logOut () {
      Auth.logout()
      this.$router.push('index')
    }
  }
}
$(document).ready(function() {
  $('.nav-trigger').click(function() {
    $('.side-nav').toggleClass('visible');
  });
});
</script>

<style>
</style>
