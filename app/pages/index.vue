<template>
<el-button type="primary" @click="handleGetCookie">获取cookie</el-button>
<el-button type="primary" @click="handleSetCookie">设置cookie</el-button>
</template>

<script setup lang="ts">
const userInfoCookie = useCookie<{name:string, age:number}>('user-info', { 
  maxAge: 60 // 60s过期
});

const handleGetCookie = () => {
  console.log(userInfoCookie.value);
};

const handleSetCookie = () => {
  // 
  userInfoCookie.value = {
    name: 'John Doe',
    age: new Date().getTime()
  };
};
</script>
