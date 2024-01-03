<script setup>
  import request from "../axios/request.js";
  import {ref} from "vue";
  const username = ref('');
  const password = ref('');
  const content = ref(null);
  const onSelectOne = function () {
    request({
      url: `http://localhost:5173/api/getOne?username=${username.value}&password=${password.value}` ,
      method: 'get'
    }).then(res => {
      console.log(res);
      content.value.innerHTML =  `<h2>${res.data}</h2>`;
    }).catch(error => {
      console.log(error.message);
    })
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

<style scoped>

</style>