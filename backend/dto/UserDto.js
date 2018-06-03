 class UserDto {
  constructor(user) {
    this.userId = user.userId;
    this.password = user.password;
    this.name = user.name;
    this.email = user.email;
    this.themeId = user.themeId || 0;
  }
}

 module.exports = UserDto;