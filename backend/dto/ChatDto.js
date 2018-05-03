class ChatDto {
  constructor(chat) {
    this.projectId = chat.projectId;
    this.userId = chat.userId;
    this.content = chat.content;
    this.date = chat.date;
  }
}

module.exports = ChatDto;