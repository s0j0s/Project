<template>
  <body>
    <TopNavbar />
    <Sidebar />
    <div class="main-content">
      <div class="title text-left">
        채팅
      </div>

      <div class="chatbody wrapper mt-5">

        <div id="chatbox"></div>

        <form name="message d-flex flex-row" action="">
          <input name="usermsg" type="text" id="usermsg" size="63" />
          <input name="submitmsg" type="submit"  id="submitmsg" value="Send" />
        </form>
      </div>

    </div>
    <ContentFooter />
  </body>
</template>

<script>
import TopNavbar from './commons/TopNavbar.vue'
import ContentFooter from './commons/ContentFooter.vue'
import Sidebar from './commons/Sidebar.vue'
export default {
  components: {
    TopNavbar,
    ContentFooter,
    Sidebar
  }
}
</script>

<style scoped>
  .chatbody {
    font:12px arial;
    color: #222;
    text-align:center;
    padding-top : 35px;
  }

  form, p, span {
    margin:0;
    padding:0; }

  input { font:12px arial; }

  a {
    color:#0000FF;
    text-decoration:none; }

  a:hover { text-decoration:underline; }

  .wrapper{
    margin:0 auto;
    padding-bottom:25px;
    background:#EBF4FB;
    width:504px;
    border:1px solid #ACD8F0; }

  #chatbox {
    text-align:left;
    margin:0 auto;
    margin-bottom:25px;
    padding:10px;
    background:#fff;
    height:270px;
    width:430px;
    border:1px solid #ACD8F0;
    overflow:auto;
  }

  #usermsg {
    width:395px;
    border:1px solid #ACD8F0;
  }
</style>
