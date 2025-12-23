<template>
  <div>
    {{data}}
    <el-button type="primary" @change="handleChange">改变</el-button>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/getUserInfo');

const handleChange = () => {
  console.log("data--->", data.value)
}
</script>