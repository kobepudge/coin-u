import api from './index'
import type { ApiResponse, Merchant } from '@/types'

// 获取公开商家列表
export const getPublicMerchants = (type?: 'seller' | 'buyer') => {
  const params = type ? { type } : {}
  return api.get<ApiResponse<{ merchants: Merchant[] }>>('/api/public/merchants', { params })
}

// 获取当前出货商家
export const getCurrentSeller = () => {
  return api.get<ApiResponse<{ merchant: Merchant | null }>>('/api/public/current-seller')
}
