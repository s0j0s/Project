 class UserDto {
  constructor(user) {
    this.userId = user.userId;
    this.password = user.password;
    this.name = user.name;
    this.themaId = user.themaId || 0;
  }
}

 module.exports = UserDto;