import axios from 'axios'

export default {
  async login (id, pw) {
    try {
      const res = await axios.post('/api/users/login', {
        userId: id,
        password: pw
      })
      if (res.data.success) {
        localStorage.token = JSON.stringify(res.data.data)
        localStorage.projectId = res.data.data.userId
        localStorage.projectName = res.data.data.userId
        return true
      } else {
        throw new Error("아이디 혹은 비밀번호가 틀렸습니다..")
      }
    } catch (err) {
      alert(err)
      return false
    }
  },
  logout () {
    delete localStorage.token
  },
  loggedIn () {
    return !!localStorage.token
  }
}
