import Vue from 'vue'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

export const SocketInstance = socketio('http://localhost:3000') // 'http://localhost:3000'

Vue.use(VueSocketIO, SocketInstance)


export default new Vue({
  data: {
    projectId: localStorage.projectId
  },
  sockets: {
    connect () {
      Vue.prototype.isConnected = true
      if (localStorage.projectId) {
        this.$socket.emit('join', localStorage.projectId)
        this.projectId = localStorage.projectId
      }
    },
    disconnect () {
      Vue.prototype.isConnected = false
    }
  },
  methods: {
    selectProject () {
      if (this.projectId) {
        this.$socket.emit('leave', this.projectId)
      }
      this.$socket.emit('join', localStorage.projectId)
      this.projectId = localStorage.projectId
    }
  }
})
