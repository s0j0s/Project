class DiaryDto {
  constructor(diary) {
    this.diaryId = diary.diaryId;
    this.projectId = diary.projectName;
    this.content = diary.content;
    this.startDate = diary.startDate;
    this.endDate = diary.endDate;
    this.importRating = diary.importRating;
  }
}

module.exports = DiaryDto;