<template>
<div id="app">
  <!-- <login-control></login-control> -->
  <tab-bar></tab-bar>
  <!-- v-if="isShow" -->
  <!-- <admin-login @login='login'v-else></admin-login> -->
</div>
</template>

<script>
import TabBar from "components/common/TabBar.vue";
import LoginControl from "views/login/LoginControl.vue";
import ElementExample from "common/ElementExample.vue";
import AdminLogin from "components/content/AdminLogin.vue";
export default {
  name: "App",
  components: {
    LoginControl,
    TabBar,
    ElementExample,
    AdminLogin
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    login(yhid) {
      this.isShow = true;
    },
  },
};
</script>

<style>
@import url("assets/css/base.css");
html,body,#app {
  height: 100%;
}
</style>
