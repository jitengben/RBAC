<template>
<div class="content">
  <table-search :show="show" @btnClick="btnClick"></table-search>
  <update-window :upWindowMessage='upWindowMessage' v-show="isShow" @closeUpdateWindow="closeUpdateWindow" @save="dosave">
    <tr slot="inMessage1">
      <td>用户名</td>
      <td><input type="text" v-model="yhm"></td>
    </tr>
    <tr slot="inMessage2">
      <td>密码</td>
      <td><input type="text" v-model="pwd"></td>
    </tr>
  </update-window>
</div>
</template>

<script>
import TableSearch from "components/common/table/TableSearch.vue";
import {
  searchAll
} from "network/searchAll.js";
import UpdateWindow from "components/common/UpdateWindow.vue";
import {
  deleteUser
} from "network/delete.js";
import {
  updateUser
} from "network/update.js";
export default {
  name: "Yhwh",
  components: {
    TableSearch,
    UpdateWindow,
  },
  created() {
    this.searchAll();
  },
  data() {
    return {
      show: {
        titles: ["序号", "用户ID", "用户名", "密码", "操作"],
        btnKey: ["修改", "删除"],
        message: [],
      },
      upWindowMessage: {
        message: [],
        select: {},
        isShow: false,
      },
      isShow: false,
      item: {},
      yhm: "abc",
      pwd: "abc",
      yhid: "",
    };
  },
  methods: {
    btnClick(index, item) {
      this.item = item;
      switch (index) {
        case 0: {
          this.isShow = true;
          this.yhm = item.yhm;
          this.pwd = item.pwd;
          this.yhid = item.yhid;
          break;
        }
        case 1: {
          deleteUser(item.yhid).then((res) => {
            if (res == true) {
              this.searchAll();
            } else {
              alert(删除失败);
            }
          });
          break;
        }
        case 2: {
          console.log(index);
          break;
        }
      }
    },
    closeUpdateWindow() {
      this.isShow = !this.isShow;
    },
    dosave() {
      updateUser(this.yhid, this.yhm, this.pwd).then((res) => {
        if (res == true) {
          this.isShow = false;
          this.searchAll();
        } else {
          alert("修改失败");
        }
      });
    },
    searchAll() {
      this.show.message.length = 0;
      searchAll().then((res) => {
        // console.log(res)
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
