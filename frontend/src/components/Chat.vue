<template>
  <body>
  <TopNavbar />
  <Sidebar />
  <div class="main-content">
    <div class="title text-left">
      채팅
    </div>
    <div class="chat-wrap">
      <div v-if="msgs && msgs.length">
        <div class="msg-wrap" v-for="msg of msgs">
          <small class="float-right">{{msg.date}}</small>
          <h5 class="msg-head">{{msg.userId}}</h5>
          <small class="col-lg-10">{{msg.content}}</small>
        </div>
      </div>
    </div>
    <div class="input-group">
      <input v-model='inputMsg' @keyup.enter='sendMsg' id="btn-input" type="text" class="form-control" placeholder="Type your message here..." />
      <button @click='sendMsg' class="btn btn-warning" id="btn-chat">Send</button>
    </div>
  </div>
  <ContentFooter />
  </body>
</template>

<script>
import TopNavbar from './commons/TopNavbar.vue'
import ContentFooter from './commons/ContentFooter.vue'
import Sidebar from './commons/Sidebar.vue'
export default {
  components: {
    TopNavbar,
    ContentFooter,
    Sidebar
  },
  sockets: {
    connect () {
      this.getAllMsg()
    },
    chat_msg (chat) {
      this.msgs.push(chat)
    }
  },
  data () {
    return {
      msgs: [],
      inputMsg: ''
    }
  },
  methods: {
    scrollToEnd () {
      var container = document.querySelector(".chat-wrap")
      var scrollHeight = container.scrollHeight
      container.scrollTop = scrollHeight
    },
    async getAllMsg () {
      try {
        const res = await this.$http.get('/api/projects/' + localStorage.projectId + '/chats/')
        if (res.data.success) {
          this.msgs = res.data.data
        } else {
          throw new Error('채팅 조회 실패 ' + res.data.message)
        }
      } catch (err) {
        alert(err)
      }
    },
    async sendMsg () {
      if (!this.inputMsg) return
      if (!this.localStorage.token) return

      try {
        const token = JSON.parse(localStorage.token)
        const res = await this.$http.post('/api/projects/' + localStorage.projectId + '/chats/', {
          userId: token.userId,
          content: this.inputMsg
        })
        if (res.data.success) {
          this.inputMsg = ''
          this.msgs.push(res.data.data)
          this.$socket.emit('chat_msg', res.data.data)
        } else {
          throw new Error('채팅 전송 실패 ' + res.data.message)
        }
      } catch (err) {
        alert(err)
      }
    }
  },
  created () {
    // todo test code Token
    const temp = {userId: '123', password: '456', name: 'qwe', email: 'tk@gm', themeId: 0, projectId: '123'}
    localStorage.token = JSON.stringify(temp)
    // test code end
    this.getAllMsg()
  },
  mounted () {
    this.scrollToEnd()
  },
  updated () {
    this.scrollToEnd()
  }
}
</script>

<style scoped>
  .main-content
  {
    height: 110vh;
    background: white;
  }
  .chat-wrap
  {
    box-shadow: 0 0 3px #ddd;
    padding: 20px 20px;
    background: white;
    max-height: 80vh;
    overflow: auto;
  }
  .input-group
  {
    position: fixed;
    width: 80%;
    bottom: 25px;
    box-shadow: 0 0 3px #ddd;
    padding: 20px 20px;
    background: white;
  }
  .msg-wrap
  {
    padding:10px;
    max-height: 200px;
    overflow: auto;
  }
  .msg-head
  {
    font-weight: 700;
  }
</style>
