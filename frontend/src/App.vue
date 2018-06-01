<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic");
@import url("https://fonts.googleapis.com/earlyaccess/jejugothic.css");
body {
  font-family: 'Jeju Gothic', 'Nanum Gothic', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #D2D6DE;
}
</style>
