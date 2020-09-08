<template>
<div class="menu-bar">
  <!-- <menu-tab-bar v-for="(item,index) in title.name" :key="item.id">
    <div slot="leftMenu">
      <p @click="show(index)">{{item}}</p>

      <div v-for="items in title.cmenu1[index]" v-show="index==currntindex" :key="items.id">
        <div @click="goWhere(items.url)">{{items.cdmc}}</div>
      </div>

    </div>
  </menu-tab-bar> -->
	<menu-bar-item :showMessage='showMessage'></menu-bar-item>
</div>
</template>

<script>
import MenuBarItem from './MenuBarItem.vue'
import MenuTabBar from "./MenuTabBar.vue";
import {
  searchMenu
} from "network/searchMenu.js";
export default {
  name: "MenuBar",
  components: {
    MenuTabBar,
		MenuBarItem
  },
  created() {
    let yhid = JSON.parse(sessionStorage.getItem("yhid"));
    // console.log(this.$store.state.yhid)
    searchMenu(yhid).then((res) => {
      for (let i = 0; i < Object.keys(res).length; i++) {
        this.showMessage.name.push(Object.keys(res)[i]);
        this.showMessage.cmenu.push(Object.values(res)[i]);
      }
      /* for(let i=0; i< this.cmenu1.length;i++){

this.cmenu2=this.cmenu1[0]

} */
      // console.log(Object.values(res)[0])
    });
  },

  data() {
    return {
			showMessage:{
				name: [],
				cmenu: []
			},
      titles: [{
          name: "用户权限",
          power: [{
              powername: "查询书籍",
              url: "/cxsj",
            },
            {
              powername: "修改密码",
              url: "/xgmm",
            },
          ],
        },
        {
          name: "管理员权限",
          power: [{
              powername: "书籍管理",
              url: "/sjgl",
            },
            {
              powername: "用户管理",
              url: "yhgl",
            },
          ],
        },
        {
          name: "权限管理-用户",
          power: [{
              powername: "用户维护",
              url: "/yhwh",
            },
            {
              powername: "用户增加",
              url: "/yhzj",
            },
            {
              powername: "用户角色",
              url: "yhjs",
            },
          ],
        },
        {
          name: "权限管理-角色",
          power: [{
              powername: "角色维护",
              url: "/jswh",
            },
            {
              powername: "角色添加",
              url: "/jstj",
            },
            {
              powername: "添加权限",
              url: "tjqx",
            },
          ],
        },
        {
          name: "权限管理-菜单",
          power: [{
              powername: "菜单维护",
              url: "cdwh",
            },
            {
              powername: "菜单增加",
              url: "cdzj",
            },
          ],
        },
      ],
      title: {
        name: [],
        cmenu1: [],
      },
      isShow: true,
      currntindex: -1,
      isNone: "false",
    };
  },
  methods: {
    show(index) {
      (this.currntindex = index), (this.isNone = !this.isNone);
    },
    goWhere(url) {
      this.$router.replace(url);
    },
  },
};
</script>

<style scoped>
.menu-bar{
	
width: 100%;
overflow: auto;

}
</style>
