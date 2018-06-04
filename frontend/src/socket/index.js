import Vue from 'vue'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

export const SocketInstance = socketio() // 'http://localhost:3000'

Vue.use(VueSocketIO, SocketInstance)

export default new Vue({
  sockets: {
    connect () {
      Vue.prototype.isConnected = true
      // test code login Token
      const temp = {userId: '123', password: '456', name: 'qwe', email: 'tk@gm', themeId: 0, projectId: '123'}
      localStorage.token = JSON.stringify(temp)
      // test code end
      if (localStorage.token) {
        const token = JSON.parse(localStorage.token)
        this.$socket.emit('join', token.projectId)
      }
    },
    disconnect () {
      Vue.prototype.isConnected = false
    }
  }
})
