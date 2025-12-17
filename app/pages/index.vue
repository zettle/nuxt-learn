<template>
  <div>
    首页
    pending: {{ pending }} <br />
    {{ data }}
  </div>
</template>

<script lang="ts" setup>

const { data, pending } = await useFetch('/api/getUserInfo', {
  method: 'post',
  headers: {
    auth: 'xiaoming'
  },
})
</script>