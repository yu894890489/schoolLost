<template>
  <el-row>
    <el-col :span="24" v-for="(v,k) in detailData" :key="k">
        <el-col class="label" :offset="2" :span="6">
                {{key[k]}} ：
    </el-col>
    <el-col :span="10">
        {{detailData[k]}}
    </el-col>
    </el-col>
  </el-row>
</template>
<script>
import axios from "axios";

export default{
    name:'detail',
    data(){
        return {
            key:{},
            detailData:{}
        }
    },
    created(){
        axios.get('/api/listKey').then(res=>this.key = res.data.data.obj)
        axios.get('/api/list').then(res=>this.detailData = res.data.data[0])
    }
}

</script>
<style lang="stylus">
.el-row
    color #797979
    .label
        text-align right 
    .el-col
        margin-top 10px
</style>

