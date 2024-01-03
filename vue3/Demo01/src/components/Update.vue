<script setup>
  import {ref} from "vue";
  import request from "../axios/request.js";
  const id = ref(null);
  const username = ref('');
  const password = ref('');
  const content = ref(null);
  const onUpdateById = function () {
    request({
      url: `http://localhost:5173/api/update/${id.value}` ,
      method: 'PUT' ,
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
  <input type="text" v-model.number="id" placeholder="请输入要修改的id">
  <input type="text" v-model="username" placeholder="请输入要修改的用户名">
  <input type="text" v-model="password" placeholder="请输入要修改的密码">
  <button @click="onUpdateById">根据id修改数据</button>
  <div ref="content"></div>
</template>