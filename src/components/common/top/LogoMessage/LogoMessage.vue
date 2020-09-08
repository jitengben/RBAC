<template>
<div id="topTxt">
  <span class="fontColor" id="yhm2">{{yhm}}</span>欢迎您来访!
  <a href="#" style="font-size:14px;text-decoration: none;"></a>
</div>
</template>

<script>
export default {
  name: "LogoMessage",
  data() {
    return {
      yhm: "",
    };
  },
  created() {
    let yhm = JSON.parse(sessionStorage.getItem("yhm"));
    this.yhm = yhm;
  },
};
</script>

<style scoped>
/* #top{

height: 55px;

color: white;

} */
#topTxt {
  height: 32.2px;
  float: right;
  padding-top: 20px;
}
</style>
