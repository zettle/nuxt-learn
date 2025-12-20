<template>
  <div>
    111
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to, from) {
      console.log("匿名中间件 to, from:")
    },
  ]
})
</script>