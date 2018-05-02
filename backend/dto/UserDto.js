 class user {
  constructor(userId, password, name, themaId = 0) {
    this.userId = userId;
    this.password = password;
    this.name = name;
    this.themaId = themaId;
  }
}

 moudule.exports = user;