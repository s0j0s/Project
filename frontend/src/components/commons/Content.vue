<template>
  <div>
  <TopNavbar></TopNavbar>
  <Sidebar></Sidebar>
  <ContentFooter></ContentFooter>
  <router-view></router-view>
  </div>
</template>

<script>
  import TopNavbar from "./TopNavbar";
  import Sidebar from "./Sidebar";
  import ContentFooter from "./ContentFooter";
  export default {
    components: {ContentFooter, Sidebar, TopNavbar}
  }
</script>

<style scoped>

</style>
