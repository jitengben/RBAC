<template>
<div id="left">
  <photo-panel></photo-panel>
  <menu-bar></menu-bar>
</div>
</template>

<script>
import PhotoPanel from "./photo/PhotoPanel.vue";
import MenuBar from "./menu/MenuBar.vue";
export default {
  name: "LeftTabBar",
  components: {
    PhotoPanel,
    MenuBar,
  },
};
</script>

<style scoped>
#left {
  width: 220px;
  height: 89%;
  border-right: 1px solid white;
  background-color: #33485d;
  color: white;
  float: left;
	background-attachment: fixed;
  /* overflow: auto; */
  /*当内容超出边框时，出现滚动条*/
}
</style>
