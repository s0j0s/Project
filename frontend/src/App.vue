<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
export default {
  name: 'App'
}
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic");
@import url("https://fonts.googleapis.com/earlyaccess/jejugothic.css");
@import url('assets/custom.css');
</style>
