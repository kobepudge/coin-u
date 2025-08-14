<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <div id="app" class="min-h-screen bg-gray-50">
            <router-view v-if="mounted" />
            <div v-else class="flex items-center justify-center min-h-screen">
              <div class="text-center">
                <div class="text-lg">正在加载...</div>
              </div>
            </div>
          </div>
        </n-notification-provider>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { 
  NConfigProvider, 
  NMessageProvider, 
  NDialogProvider, 
  NNotificationProvider,
  lightTheme
} from 'naive-ui'

const mounted = ref(false)
const theme = ref(lightTheme)

onMounted(async () => {
  try {
    console.log('用户端应用启动')
    mounted.value = true
  } catch (error) {
    console.error('应用启动错误:', error)
    mounted.value = true
  }
})
</script>
