<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-6xl mx-auto px-4">
      <!-- 标题 -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">二维码生成与解析工具</h1>
        <p class="text-gray-600">轻松生成自定义二维码，或解析已有二维码内容</p>
      </div>

      <!-- 主要内容区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 左侧：生成二维码 -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-6">生成二维码</h2>
          
          <!-- 输入内容 -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              输入内容（文本或网址）：
            </label>
            <textarea 
              v-model="qrText"
              placeholder="请输入内容"
              class="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            ></textarea>
          </div>

          <!-- 二维码配置 -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <!-- 二维码大小 -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                二维码大小：
              </label>
              <input 
                v-model="qrSize"
                type="text"
                placeholder="请输入二维码大小"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <!-- 二维码颜色 -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                二维码颜色：
              </label>
              <div class="w-full h-10 bg-black rounded-md border border-gray-300"></div>
            </div>
          </div>

          <!-- 生成按钮 -->
          <button 
            @click="generateQR"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
          >
            生成二维码
          </button>

          <!-- 生成结果显示区域 -->
          <div class="mt-8 text-center">
            <div class="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg py-16">
              <p class="text-gray-500">生成的二维码将显示在这里</p>
            </div>
          </div>
        </div>

        <!-- 右侧：解析二维码 -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-6">解析二维码</h2>
          
          <!-- 上传区域 -->
          <div class="mb-6">
            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors duration-200 cursor-pointer">
              <div class="mb-4">
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <p class="text-gray-600">
                拖放二维码图片到此处，或 
                <span class="text-blue-500 hover:text-blue-600 cursor-pointer">点击上传</span>
              </p>
            </div>
          </div>

          <!-- 解析按钮 -->
          <button 
            @click="parseQR"
            class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 mb-6"
          >
            解析二维码
          </button>

          <!-- 解析结果显示区域 -->
          <div class="text-center">
            <div class="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg py-16">
              <p class="text-gray-500">上传的二维码图片将显示在这里</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 响应式数据
const qrText = ref('')
const qrSize = ref('')

// 生成二维码
const generateQR = () => {
  console.log('生成二维码:', qrText.value)
  // 这里可以添加二维码生成逻辑
}

// 解析二维码
const parseQR = () => {
  console.log('解析二维码')
  // 这里可以添加二维码解析逻辑
}
</script>