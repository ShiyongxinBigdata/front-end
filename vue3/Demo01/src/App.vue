<script setup>
  import request from "./axios/request.js";
  const onGetStudents = function () {
    request({
      url: 'http://localhost:5173/beiwang/students' ,
      method: 'get'
    }).then(res => {
      console.log(res);
      console.log(res.data);
    }).catch(error => {
      console.log(error);
    })
  }
  const onGetCars = function () {
    request({
      url: 'http://localhost:5173/demo/cars' ,
      method: 'get'
    }).then(res => {
      console.log(res);
      console.log(res.data);
    }).catch(error => {
      console.log(error);
    })
  }
</script>

<template>
  <div>
    <button @click="onGetStudents">获取学生信息</button>
    <button @click="onGetCars">获取汽车信息</button>
  </div>
</template>
