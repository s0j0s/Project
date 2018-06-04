import Vue from 'vue'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

export const SocketInstance = socketio('http://localhost:3000') // 'http://localhost:3000'

Vue.use(VueSocketIO, SocketInstance)

export default new Vue({
  sockets: {
    connect () {
      Vue.prototype.isConnected = true
      // todo test code - socket room id
      localStorage.projectId = '123'
      // test code end
      if (localStorage.projectId) {
        this.$socket.emit('join', localStorage.projectId)
      }
    },
    disconnect () {
      Vue.prototype.isConnected = false
    }
  }
})
