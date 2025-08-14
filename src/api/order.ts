import api from './index'
import type { ApiResponse, Order, CreateOrderData } from '@/types'

// 创建订单
export const createOrder = (data: CreateOrderData) => {
  return api.post<ApiResponse<{ order: Order }>>('/api/public/orders', data)
}
