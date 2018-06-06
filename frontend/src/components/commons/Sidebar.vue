<template>
  <div class="side-nav" style="position:fixed">
    <div class="logo">
      <img src="../../assets/calendar.png" width="20" height="20">
      <span class="mr-3">모두의 다이어리</span>
    </div>
    <nav>
      <ul id="side-button">
        <li>
            <router-link to="/diary">
              <img src="../../assets/diary_icon.png">
              <span>일정</span>
            </router-link>
        </li>
        <li>
          <router-link to="/chat">
            <img src="../../assets/chat_icon.png">
             <span>채팅</span>
          </router-link>
        </li>
        <li>
          <router-link to="/setting">
            <img src="../../assets/setting_icon.png">
            <span>설정</span>
          </router-link>
        </li>
        <li>
          <router-link to="/project">
            <img src="../../assets/project_icon.png">
              <span>프로젝트 목록</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>

</style>
