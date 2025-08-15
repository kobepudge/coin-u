<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
    <!-- 顶部导航 -->
    <header class="bg-white/80 backdrop-blur-md shadow-soft sticky top-0 z-50">
      <div class="container">
        <div class="flex items-center justify-center py-4">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-lg">币</span>
            </div>
            <div>
              <h1 class="text-xl font-bold text-gray-900">游戏金币交易平台</h1>
              <p class="text-sm text-gray-500">安全 · 快速 · 便捷</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- 主要内容 -->
    <main class="container py-8">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          <span class="text-gradient">安全便捷</span>的金币交易服务
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          提供认证商家、透明价格、快速交易的专业游戏金币交易平台
        </p>
      </div>

      <!-- 交易区域 -->
      <div class="grid lg:grid-cols-2 gap-8 mb-12">
        <!-- 出货信息(买金币) -->
        <div class="card p-6 lg:p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-gray-900">立即收货</h3>
            <span class="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
              现货充足
            </span>
          </div>

          <div v-if="currentSeller" class="space-y-4">
            <!-- 商家信息 -->
            <div class="flex items-center justify-between">
              <span class="text-gray-600">出货商家</span>
              <span class="font-semibold">{{ currentSeller.name }}</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-600">当前价格</span>
              <span class="text-2xl font-bold text-primary-600">{{ currentSeller.price }}</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-600">交易方式</span>
              <span class="font-medium">{{ currentSeller.trade_method }}</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-600">库存量</span>
              <span class="font-medium">{{ currentSeller.stock_or_demand }}</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-600">发货速度</span>
              <span class="font-medium">{{ currentSeller.speed }}</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-600">服务保障</span>
              <span class="font-medium text-green-600">{{ currentSeller.guarantee }}</span>
            </div>

            <!-- 购买按钮 -->
            <button
              @click="openBuyModal"
              class="w-full btn-primary btn-mobile mt-6"
            >
              立即收货
            </button>
          </div>

          <div v-else class="text-center py-12">
            <div class="text-gray-400 text-lg">暂无出货商家，敬请期待</div>
          </div>
        </div>

        <!-- 收货信息(卖金币) -->
        <div class="card p-6 lg:p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-gray-900">即时收购</h3>
            <span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
              {{ buyers?.length || 0 }} 家收购商
            </span>
          </div>

          <div v-if="buyers.length > 0" class="space-y-4">
            <div
              v-for="buyer in buyers"
              :key="buyer.id"
              class="border border-gray-200 rounded-xl p-4 hover:border-primary-300 transition-colors"
            >
              <div class="flex items-center justify-between mb-3">
                <span class="font-semibold">{{ buyer.name }}</span>
                <span class="text-lg font-bold text-secondary-600">{{ buyer.price }}</span>
              </div>

              <div class="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-3">
                <div>交易方式: {{ buyer.trade_method }}</div>
                <div>需求量: {{ buyer.stock_or_demand }}</div>
                <div>结算速度: {{ buyer.speed }}</div>
                <div>保障: {{ buyer.guarantee }}</div>
              </div>

              <button
                @click="openSellModal(buyer)"
                class="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-2 rounded-lg font-medium transition-colors"
              >
                立即出货
              </button>
            </div>
          </div>

          <div v-else class="text-center py-12">
            <div class="text-gray-400 text-lg">暂无收购商家</div>
          </div>
        </div>
      </div>

      <!-- 交易说明 -->
      <div class="card p-6 lg:p-8">
        <h3 class="text-xl font-bold text-gray-900 mb-4">交易说明</h3>
        <div class="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">购买金币流程</h4>
            <ol class="space-y-1 list-decimal list-inside">
              <li>选择出货商家，点击"立即收货"</li>
              <li>扫描二维码，转账对应金额</li>
              <li>务必备注您的游戏ID</li>
              <li>商家确认后发放金币</li>
            </ol>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">出售金币流程</h4>
            <ol class="space-y-1 list-decimal list-inside">
              <li>选择收购商家，点击"立即出货"</li>
              <li>将金币转给指定的中转ID</li>
              <li>上传您的收款二维码</li>
              <li>管理员核实后完成付款</li>
            </ol>
          </div>
        </div>
      </div>
    </main>

    <!-- 买金币弹窗 -->
    <n-modal v-model:show="showBuyModal" preset="card" style="width: 400px" title="购买金币">
      <div v-if="currentSeller" class="space-y-4">
        <div class="text-center">
          <h4 class="text-lg font-semibold mb-2">向 {{ currentSeller.name }} 购买金币</h4>
          <div class="text-2xl font-bold text-primary-600 mb-4">{{ currentSeller.price }}</div>
        </div>

        <!-- 收款二维码 -->
        <div class="text-center">
          <div v-if="currentSeller.payment_qr" class="w-48 h-48 mx-auto rounded-lg border mb-4 overflow-hidden">
            <img
              :src="getFirstPaymentQr(currentSeller.payment_qr)"
              alt="收款二维码"
              class="w-full h-full object-contain"
              @error="handleQrError"
            />
          </div>
          <div v-else class="bg-gray-200 w-48 h-48 mx-auto rounded-lg flex items-center justify-center mb-4">
            <span class="text-gray-500">暂无收款二维码</span>
          </div>
        </div>

        <!-- 重要提示 -->
        <n-alert type="warning" title="重要提示">
          <strong>转账时请务必备注您的游戏ID，否则商家无法发货！</strong>
        </n-alert>

        <div class="text-sm text-gray-600">
          请根据您需要购买的数量，按照上方价格自行计算总价并完成转账。
        </div>
      </div>
    </n-modal>

    <!-- 卖金币弹窗 -->
    <n-modal v-model:show="showSellModal" preset="card" style="width: 500px" title="出售金币">
      <div v-if="selectedBuyer" class="space-y-6">
        <div class="text-center">
          <h4 class="text-lg font-semibold mb-2">向 {{ selectedBuyer.name }} 出售金币</h4>
        </div>

        <!-- 步骤一：游戏内转账 -->
        <div class="space-y-3">
          <h5 class="font-semibold text-gray-900">步骤一：游戏内转账</h5>
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="text-sm text-gray-700 mb-2">
              请先将您要出售的金币，通过游戏内邮件/交易功能发送至该商家专属的中转游戏ID：
            </p>
            <div class="flex items-center justify-between bg-white p-3 rounded-lg border">
              <code class="font-mono text-lg font-bold text-primary-600">
                {{ selectedBuyer.transfer_game_id }}
              </code>
              <button class="text-primary-600 hover:text-primary-700 text-sm font-medium">
                复制ID
              </button>
            </div>
          </div>
        </div>

        <!-- 步骤二：填写信息 -->
        <div class="space-y-3">
          <h5 class="font-semibold text-gray-900">步骤二：填写信息</h5>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              您转出金币的游戏ID <span class="text-red-500">*</span>
            </label>
            <n-input
              v-model:value="sellForm.playerGameId"
              placeholder="请输入您的游戏ID"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              上传您的收款二维码 <span class="text-red-500">*</span>
            </label>
            <n-upload
              v-model:file-list="sellForm.paymentQr"
              :max="1"
              accept="image/*"
              list-type="image-card"
              :custom-request="handleUploadRequest"
              @change="handleUploadChange"
            >
              <n-button>点击上传</n-button>
            </n-upload>
          </div>
        </div>

        <!-- 重要提示 -->
        <n-alert type="error" title="重要提示">
          <strong>请确保填写的游戏ID与转出金币的ID一致，否则无法核实。</strong>
        </n-alert>

        <div class="flex gap-3">
          <n-button @click="showSellModal = false">取消</n-button>
          <n-button
            type="primary"
            @click="submitSellOrder"
            :loading="submitting"
            :disabled="!sellForm.playerGameId || !sellForm.paymentQr.length"
          >
            我已转账，提交信息
          </n-button>
        </div>
      </div>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { NModal, NAlert, NInput, NUpload, NButton, useMessage } from 'naive-ui'
import type { Merchant } from '@/types'
import { getPublicMerchants, getCurrentSeller } from '@/api/merchant'
import { createOrder } from '@/api/order'
import { uploadPaymentQr } from '@/api/upload'

const message = useMessage()

// 数据状态
const currentSeller = ref<Merchant | null>(null)
const buyers = ref<Merchant[]>([])
const loading = ref(false)

// 弹窗状态
const showBuyModal = ref(false)
const showSellModal = ref(false)
const selectedBuyer = ref<Merchant | null>(null)
const submitting = ref(false)

// 出售表单
const sellForm = ref({
  playerGameId: '',
  paymentQr: [] as any[]
})

// 打开购买弹窗
const openBuyModal = () => {
  showBuyModal.value = true
}

// 打开出售弹窗
const openSellModal = (buyer: Merchant) => {
  selectedBuyer.value = buyer
  sellForm.value = {
    playerGameId: '',
    paymentQr: []
  }
  showSellModal.value = true
}

// 获取第一个支付二维码URL（用于显示）
const getFirstPaymentQr = (paymentQr: string) => {
  if (!paymentQr) return ''
  const qrUrls = paymentQr.split(',').filter(url => url.trim())
  return qrUrls.length > 0 ? qrUrls[0].trim() : ''
}

// 处理二维码加载错误
const handleQrError = () => {
  message.error('收款二维码加载失败')
}

// 提交出售订单
const submitSellOrder = async () => {
  if (!selectedBuyer.value) return

  try {
    submitting.value = true

    // 前端验证
    if (!sellForm.value.playerGameId || sellForm.value.playerGameId.trim() === '') {
      message.error('请输入玩家游戏ID')
      return
    }

    if (sellForm.value.playerGameId.length > 100) {
      message.error('玩家游戏ID长度不能超过100字符')
      return
    }

    if (sellForm.value.paymentQr.length === 0) {
      message.error('请上传收款二维码')
      return
    }

    // 上传支付二维码图片
    let paymentQrUrl = ''
    if (sellForm.value.paymentQr.length > 0) {
      const uploadResponse = await uploadPaymentQr(sellForm.value.paymentQr[0].file)
      paymentQrUrl = uploadResponse.data.url
    }

    // 验证上传结果
    if (!paymentQrUrl) {
      message.error('收款二维码上传失败，请重试')
      return
    }

    console.log('提交订单数据:', {
      merchant_id: selectedBuyer.value.id,
      player_game_id: sellForm.value.playerGameId.trim(),
      payment_qr_url: paymentQrUrl
    })

    // 调用API提交订单
    await createOrder({
      merchant_id: selectedBuyer.value.id,
      player_game_id: sellForm.value.playerGameId.trim(),
      payment_qr_url: paymentQrUrl
    })

    message.success('提交成功！管理员将在核实游戏内金币到账后，通过您提供的二维码向您付款，请耐心等待。')
    showSellModal.value = false

  } catch (error: any) {
    console.error('提交订单失败:', error)

    let errorMessage = '提交失败，请重试'

    if (error?.response?.data?.message) {
      errorMessage = error.response.data.message
    } else if (error?.response?.status === 500) {
      errorMessage = '服务器内部错误，请稍后重试'
    } else if (error?.response?.status === 400) {
      errorMessage = error?.response?.data?.message || '请求参数错误'
    } else if (!error?.response) {
      errorMessage = '网络连接失败，请检查网络设置'
    }

    message.error(errorMessage)
  } finally {
    submitting.value = false
  }
}

// 加载商家数据
const loadMerchants = async () => {
  try {
    loading.value = true
    console.log('🔄 开始加载商家数据...')

    // 获取当前出货商家
    console.log('📡 请求当前出货商家...')
    const sellerResponse = await getCurrentSeller()
    console.log('📦 出货商家响应:', sellerResponse)
    console.log('📦 出货商家数据:', sellerResponse.data)

    // 修复：axios返回的是完整响应，需要访问 .data.data
    currentSeller.value = sellerResponse.data.data
    console.log('✅ currentSeller 已更新:', currentSeller.value)

    // 获取收购商家列表
    console.log('📡 请求收购商家列表...')
    const buyersResponse = await getPublicMerchants('buyer')
    console.log('📦 收购商家完整响应:', buyersResponse)
    console.log('📦 收购商家数据:', buyersResponse.data)
    console.log('🔍 数据类型检查:')
    console.log('  - typeof buyersResponse.data:', typeof buyersResponse.data)
    console.log('  - Array.isArray(buyersResponse.data):', Array.isArray(buyersResponse.data))
    console.log('  - buyersResponse.data.length:', buyersResponse.data?.length)

    // 修复：访问正确的数据路径 buyersResponse.data.data
    const buyersData = Array.isArray(buyersResponse.data.data) ? buyersResponse.data.data : []
    console.log('🔧 强制处理后的数据:', buyersData)
    console.log('🔧 强制处理后长度:', buyersData.length)

    // 使用 nextTick 确保响应式更新
    buyers.value = buyersData
    await nextTick()

    console.log('✅ 最终 buyers.value:', buyers.value)
    console.log('✅ 最终 buyers 类型:', typeof buyers.value)
    console.log('✅ 最终 buyers 是数组:', Array.isArray(buyers.value))
    console.log('✅ 最终 buyers 长度:', buyers.value?.length)

  } catch (error: any) {
    console.error('❌ 加载商家数据错误:', error)
    const errorMessage = error?.response?.data?.message || '加载商家信息失败'
    message.error(errorMessage)
  } finally {
    loading.value = false
    console.log('🏁 数据加载完成')
  }
}

onMounted(() => {
  loadMerchants()
})
</script>
