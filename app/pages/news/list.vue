<template>
  <div>
    新闻list页
    <el-input v-model="haha"></el-input>
    <ul>
      <li v-for="value in data?.data" :key="value.id">
        <el-button type="primary" @click="handleGo(value.id)">{{ value.title }}</el-button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'news-list'
})

const haha = ref('')

interface RespResult {
  code: number
  data: {id:number,title:string}[]
}
const { data } = await useFetch<RespResult>('/admin-api/get-news', {
  method: 'post',
  baseURL: 'http://127.0.0.1:4523/m1/6831971-6546029-default'
})

const handleGo = (id: number) => {
  navigateTo(`/news/${id}`)
}
</script>