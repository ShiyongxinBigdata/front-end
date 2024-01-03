<script>
  import axios from "axios";
  export  default {
    name: 'SelectOne' ,
    data() {
      return {
        username: '' ,
        password: ''
      }
    } ,
    methods: {
      onSelectOne() {
        axios
            .get(`http://localhost:8080/api/getOne?username=${this.username}&password=${this.password}`)
            .then(
                res => {
                  console.log('请求成功' , res.data);
                  this.$refs.content.innerHTML =  `<h2>${res.data}</h2>`;
                } ,
                error => {
                  console.log('请求失败了', error.message);
                }
            )
      }
    }
  }
</script>
<template>
  <div>
    用户名：<input type="text" v-model="username" placeholder="请输入用户名" /><br />
    密码：<input type="text" v-model="password" placeholder="请输入密码" /><br />
    <button @click="onSelectOne">点击查询一条图书信息数据</button>
    <div ref="content"></div>
  </div>
</template>