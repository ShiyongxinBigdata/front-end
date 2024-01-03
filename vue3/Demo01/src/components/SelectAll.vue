<script setup>
  import request from "../axios/request.js";
  import {ref} from "vue";
  const content = ref(null);
  const onSelectAll = function () {
    request({
      url: 'http://localhost:5173/api/getAll' ,
      method: 'GET'
    }).then(res => {
      const arr = res.data;
      arr.forEach(elem => {
        const { id , username , password } = elem;
        content.value.innerHTML += username +","+ password + "<br />";
      })
    }).catch(error => {
      console.log(error.message);
    })
  }
</script>

<template>
  <div>
    <button @click="onSelectAll">点击查询所有</button>
    <div ref="content"></div>
  </div>
</template>