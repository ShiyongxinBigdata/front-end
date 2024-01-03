<script setup>
  import request from "../axios/request.js";
  import {ref} from "vue";
  const id = ref(null);
  const content = ref('');
  const onDeleteByID = function () {
    request({
      url: `http://localhost:5173/api/delete/${id.value}` ,
      method: 'DELETE'
    }).then(res => {
      console.log(res);
      content.value.innerHTML =  `<h2>${res.data.msg}</h2>`;
    }).catch(error => {
      console.log(error.message);
    })
  }
</script>

<template>
  <input type="text" v-model="id" placeholder="请输入要删除数据的ID">
  <button @click="onDeleteByID">删除</button>
  <div ref="content"></div>
</template>