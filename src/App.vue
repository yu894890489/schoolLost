<template>
  <div id="app">
    <el-container>
      <el-header>
        <heads></heads>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>

  </div>
</template>

<script>
import heads from "./components/head";
export default {
  name: "App",
  data(){
    return {
      parentData: "this a parent!"
  }
  } ,
  components: {
    heads
  }
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header {
  padding: 0px;
}
</style>
