// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import socket from './socket'
import FullCalendar from 'vue-full-calendar'
import "fullcalendar/dist/fullcalendar.min.css";
import StarRating from 'vue-star-rating'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$EventBus = new Vue();
Vue.use(FullCalendar)
Vue.component('star-rating', StarRating);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  socket,
  components: { App },
  template: '<App/>'
})
