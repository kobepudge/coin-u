<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">用户端测试页面</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="font-semibold text-blue-800">前端状态</h3>
          <p class="text-blue-600">✅ Vue应用正常加载</p>
          <p class="text-blue-600">✅ TailwindCSS样式正常</p>
          <p class="text-blue-600">✅ 路由系统正常</p>
        </div>
        
        <div class="bg-green-50 p-4 rounded">
          <h3 class="font-semibold text-green-800">快速导航</h3>
          <div class="space-y-2">
            <router-link 
              to="/" 
              class="block text-green-600 hover:text-green-800"
            >
              → 返回首页
            </router-link>
            <a 
              href="http://localhost:3000/api/health" 
              target="_blank"
              class="block text-green-600 hover:text-green-800"
            >
              → 后端健康检查
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 测试页面，无需复杂逻辑
</script>
