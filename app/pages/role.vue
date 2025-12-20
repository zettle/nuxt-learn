<template>
  <p>我是role页面</p>
  {{ $myXiaomingPlugin('小敏') }}
</template>

<script setup lang="ts">
const { $myXiaomingPlugin } = useNuxtApp();
console.log("--->", $myXiaomingPlugin('小敏'));
</script>