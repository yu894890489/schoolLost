<template>
    <el-table :data="tableData" highlight-current-row @row-click="handleCurrentChange" stripe style="width: 100%">
        <el-table-column  v-for="item in listKey" :key="item.key" :prop="item.key" :label="item.value">
        </el-table-column>
    </el-table>
</template>

<script>
import axios from "axios";


export default {
  name: 'lostList',
  data() {
    return {
        tableData:[],
        listKey:{}
    };
  },
  methods:{
    handleCurrentChange(v){
      this.$router.push({path:'detail',query:{id:v.losterID}})
    }
  },
  created(){
    axios.get('/api/listKey').then(res=>this.listKey = res.data.data.arr)
    axios.get('/api/list').then(res=>{
      this.tableData = res.data.data
    })
  }
};
</script>