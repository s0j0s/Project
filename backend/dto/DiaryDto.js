class DiaryDto {
  constructor(diary) {
    this.diaryId = diary.diaryId;
    this.projectId = diary.projectId;
    this.title = diary.title;
    this.start = diary.start;
    this.end = diary.end;
    this.importance = diary.importance;
  }
}

module.exports = DiaryDto;