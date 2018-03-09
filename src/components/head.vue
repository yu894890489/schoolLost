<template>
    <el-row class="head">
        <el-col :span="5">
            <img src="../assets/logo.png" class="head-img" alt="">
        </el-col>
        <el-col :span="5">
            <el-dropdown @command="handleCommand" size="medium" type="info">
                <span class="el-dropdown-link">{{menu_name}}
                    <i class="el-icon-arrow-down el-icon-arrow-right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(l,i) in menu_list" :key="i" :command="l.url">
                        {{l.name}}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </el-col>
        <el-col :offset="9" :span="5">
            <el-dropdown class="user-info">
                <span class="el-dropdown-link">
                    {{info}}
                    <i class="el-icon-arrow-down ">
                    </i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        退出
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
</template>
<script>
import $ from "jquery";
import axios from "axios";
const MENU_NAME = "菜单";
let menu_list = [
  { name: "测试1", url: "/detail" },
  { name: "测试4", url: "/" },
  { name: "测试3", url: "/lostList" }
];

export default {
  name: "heads",
  props: ["child"],
  data() {
    return {
      menu_name: MENU_NAME,
      menu_list: menu_list,
      info: "yu"
    };
  },
  methods: {
    handleCommand(command) {
      axios.get("/api/list").then(function(response) {
        console.log(response.data);
      });
      this.$router.push({ path: command });
    }
  }
};
</script>
<style lang="stylus">
@import '../assets/css/variable';

.head {
    background: color-bg-head;
    height: 60px;
}

.head-img {
    width: 100%;
    height: 100%;
    max-width: 40px;
    float: left;
}

.el-dropdown {
    padding-top: 10px;

    .el-dropdown-link {
        font-size: 15px;
        color #ffffff
    }
}

.user-info {
    border 1px solid #e5e5e5
    color: blue;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>



