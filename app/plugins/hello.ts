export default defineNuxtPlugin(() => {
  return {
    // 全局输入一个函数
    provide: {
      myXiaomingPlugin: (msg: string) => `Hello ${msg}`
    }
  }
})