class ProjectMemberDto {
  constructor(projectMember) {
    this.projectId = projectMember.projectId;
    this.userId = projectMember.userId;
    this.isAdmin = projectMember.isAdmin;
  }
}

module.exports = ProjectMemberDto;