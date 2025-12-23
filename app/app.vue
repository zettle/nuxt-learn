<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <!-- 页面标题 -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">二维码生成与解析工具</h1>
      <p class="text-gray-500">轻松生成自定义二维码，或解析已有二维码内容</p>
    </div>

    <!-- 主要内容区域 -->
    <div class="max-w-6xl mx-auto px-4">
      <el-row :gutter="24">
        <!-- 左侧：生成二维码 -->
        <el-col :span="12">
          <el-card class="h-full" shadow="hover">
            <h2 class="text-xl font-bold text-gray-800 mb-6">生成二维码</h2>
            
            <!-- 输入内容 -->
            <el-form label-position="top">
              <el-form-item label="输入内容(文本或网址)：">
                <el-input
                  v-model="generateForm.content"
                  type="textarea"
                  :rows="5"
                  placeholder="请输入内容"
                />
              </el-form-item>

              <!-- 二维码大小和颜色 -->
              <el-row :gutter="16">
                <el-col :span="12">
                  <el-form-item label="二维码大小：">
                    <el-input
                      v-model="generateForm.size"
                      placeholder="请输入二维码大小"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="二维码颜色：">
                    <el-color-picker
                      v-model="generateForm.color"
                      style="width: 100%"
                    />
                  </el-form-item>
                </el-col>
              </el-row>

              <!-- 生成按钮 -->
              <el-button type="primary" class="w-full mb-4" @click="handleGenerate">
                生成二维码
              </el-button>
            </el-form>

            <!-- 生成结果展示区域 -->
            <div class="border border-gray-200 rounded-lg p-8 min-h-[150px] flex items-center justify-center">
              <div v-if="generatedQrCode" class="text-center">
                <img :src="generatedQrCode" alt="生成的二维码" class="mx-auto" />
              </div>
              <span v-else class="text-gray-400">生成的二维码将显示在这里</span>
            </div>
          </el-card>
        </el-col>

        <!-- 右侧：解析二维码 -->
        <el-col :span="12">
          <el-card class="h-full" shadow="hover">
            <h2 class="text-xl font-bold text-gray-800 mb-6">解析二维码</h2>

            <!-- 上传区域 -->
            <el-upload
              ref="uploadRef"
              class="upload-area mb-4"
              drag
              :auto-upload="false"
              :show-file-list="false"
              accept="image/*"
              @change="handleFileChange"
            >
              <div class="py-4">
                <span class="text-gray-500">拖放二维码图片到此处，或 </span>
                <span class="text-blue-500 cursor-pointer">点击上传</span>
              </div>
            </el-upload>

            <!-- 解析按钮 -->
            <el-button type="success" class="w-full mb-4" @click="handleParse">
              解析二维码
            </el-button>

            <!-- 上传的图片展示区域 -->
            <div class="border border-gray-200 rounded-lg p-8 min-h-[200px] flex items-center justify-center">
              <div v-if="uploadedImage" class="text-center">
                <img :src="uploadedImage" alt="上传的二维码" class="max-w-full max-h-[180px] mx-auto" />
              </div>
              <span v-else class="text-gray-400">上传的二维码图片将显示在这里</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UploadFile } from 'element-plus'

// 生成二维码表单
const generateForm = reactive({
  content: '',
  size: '',
  color: '#000000'
})

// 生成的二维码图片
const generatedQrCode = ref('')

// 上传的图片
const uploadedImage = ref('')

// 上传组件引用
const uploadRef = ref()

// 生成二维码
const handleGenerate = () => {
  if (!generateForm.content) {
    ElMessage.warning('请输入内容')
    return
  }
  // TODO: 调用二维码生成逻辑
  ElMessage.success('二维码生成成功')
}

// 文件改变处理
const handleFileChange = (file: UploadFile) => {
  if (file.raw) {
    uploadedImage.value = URL.createObjectURL(file.raw)
  }
}

// 解析二维码
const handleParse = () => {
  if (!uploadedImage.value) {
    ElMessage.warning('请先上传二维码图片')
    return
  }
  // TODO: 调用二维码解析逻辑
  ElMessage.success('二维码解析成功')
}
</script>

<style scoped>
.upload-area :deep(.el-upload-dragger) {
  border-style: dashed;
  border-color: #d9d9d9;
  border-radius: 8px;
  padding: 0;
}

.upload-area :deep(.el-upload-dragger:hover) {
  border-color: #409eff;
}

.upload-area :deep(.el-upload) {
  width: 100%;
}
</style>