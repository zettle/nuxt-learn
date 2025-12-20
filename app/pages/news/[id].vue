<template>
  <div>
    news-detail
    {{data}}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id
const { data } = await useFetch('/admin-api/news/'+id, {
  baseURL: 'http://127.0.0.1:4523/m1/6831971-6546029-default'
})
</script>