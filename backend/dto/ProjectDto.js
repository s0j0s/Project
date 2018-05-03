class ProjectDto {
  constructor(project) {
    this.projectId = project.projectId;
    this.projectName = project.projectName;
    this.projectDate = project.projectDate;
  }
}

module.exports = ProjectDto;