<template>
<div>
  <table-search :show="show" @btnClick="btnClick"></table-search>
  <update-window :upWindowMessage='upWindowMessage' v-show="isShow" @closeUpdateWindow="closeUpdateWindow" @save="save">
    <tr slot="inMessage1">
      <td>角色</td>
      <td>
        <select v-model="isSelect">
          <option v-for="(item,index) in roleName" :value="index" :key="item.id">{{item}}</option>
        </select>
      </td>
    </tr>
  </update-window>
</div>
</template>

<script>
import TableSearch from "components/common/table/TableSearch.vue";
import UpdateWindow from "components/common/UpdateWindow.vue";
import {
  searchAllRole_User
} from "network/searchAll.js";
import {
  deleteRole_User
} from "network/delete.js";
import {
  searchAllRole_Name
} from "network/searchAll.js";
import {
  updateUser_Role
} from "network/update.js";
export default {
  name: "Yhjs",
  components: {
    TableSearch,
    UpdateWindow,
  },
  created() {
    this.searchAllRole_User();
    searchAllRole_Name().then((res) => {
      for (let i = 0; i < res.length; i++) {
        this.roleName.push(res[i].jsmc);
        this.roleId.push(res[i].jsid);
      }
    });
  },
  data() {
    return {
      show: {
        titles: [
          "序号",
          "用户ID",
          "用户角色ID",
          "用户名",
          "角色ID",
          "角色名称",
          "角色描述",
          "操作",
        ],
        btnKey: ["修改", "删除"],
        message: [],
      },
      isSelect: "",
      roleName: [],
      roleId: [],
      upWindowMessage: {
        message: [],
        select: {
          name: "角色",
          option: ["老师", "学生"],
        },
        isShow: true,
      },
      isShow: false,
      yhjsid: "",
      yhid: "",
    };
  },
  methods: {
    btnClick(index, item) {
      switch (index) {
        case 0: {
          this.isShow = true;
          this.yhjsid = item.yhjsid;
          this.yhid = item.yhid;
          break;
        }
        case 1: {
          deleteRole_User(item.yhjsid).then((res) => {
            if (res == true) {
              this.searchAllRole_User();
            } else {
              alert("删除失败");
            }
          });
          break;
        }
      }
    },
    closeUpdateWindow() {
      this.isShow = !this.isShow;
    },
    save() {
      updateUser_Role(this.yhjsid, this.yhid, this.roleId[this.isSelect]).then(
        (res) => {
          if (res == true) {
            this.searchAllRole_User();
            this.isShow = false;
          } else {
            alert("修改失败");
          }
        }
      );
    },
    searchAllRole_User() {
      this.show.message.length = 0;
      searchAllRole_User().then((res) => {
        console.log(res);
        for (let i = 0; i < res.length; i++) {
          this.show.message.push(res[i]);
        }
      });
    },
  },
};
</script>

<style scoped="scoped">
</style>
