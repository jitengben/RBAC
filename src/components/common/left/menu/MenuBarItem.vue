<template>
<div id="MenuBarItem">
  <el-col :span="12" class="panel">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#34495e"
      text-color="white"
      active-text-color="red"
    >
      <el-submenu :index="inde+''" v-for="(item,inde) in showMessage.name" :key="item.id">
        <template slot="title" >
         <!-- <i class="el-icon-location"></i> -->
          <span>{{item}}</span>
        </template>
        <el-menu-item-group  >
          <el-menu-item v-for="(item1,ind) in showMessage.cmenu[inde]" class="group" :index="ind+'-'+inde" @click="goWhere(item1.url)" :key="item1.id">{{item1.cdmc}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</div>
</template>

<script>
export default {
  name: "MenuBarItem",
  data() {
    return {};
  },
	props:{
		showMessage:{
			type: Object,
			default(){
				return {}
			}
		}
	},

  components: {},

  computed: {},

  methods: {
		goWhere(url) {
		  this.$router.replace(url);
		},
	},
};
</script>

<style scoped="scoped">
	#MenuBarItem{
		overflow: hidden;
		
	}
	.panel {
	  height: 100%;
	}
	
	.el-menu-vertical-demo {
	  width: 220px;
	  height: 100%;
	}
	.group{
		background-color: #000000;
	}
</style>
