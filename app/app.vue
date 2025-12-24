<template>
  <nuxt-layout>
    <nuxt-page :keepalive="{include: ['news-list']}"></nuxt-page>
  </nuxt-layout>
</template>

<script lang="ts" setup>
const route = useRoute()
console.log(route)
</script>