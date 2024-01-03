<script setup>
  import request from "../axios/request.js";
  import {ref} from "vue";
  const username = ref('');
  const password = ref('');
  const content = ref(null);
  const onInsert = function () {
    request({
      url: 'http://localhost:5173/api/insert' ,
      method: 'POST' ,
      data: {
        username: username.value ,
        password: password.value
      }
    }).then(res => {
      console.log(res);
      content.value.innerHTML =  `<h2>${res.data.msg}</h2>`;
    }).catch(error => {
      console.log(error.message);
    })
  }
</script>

<template>
  <input type="text" v-model="username" placeholder="请输入用户名">
  <input type="text" v-model="password" placeholder="请个输入密码">
  <button @click="onInsert">插入</button>
  <div ref="content"></div>
</template>