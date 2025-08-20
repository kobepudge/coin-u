// 用户端类型定义

// 基础类型
export type ID = number
export type Timestamp = Date

// 商家相关类型
export interface Merchant {
  id: ID
  name: string
  type: 'seller' | 'buyer'
  price: string
  trade_method: string
  stock_or_demand: string
  speed: string
  guarantee: string
  alipay_account?: string // 支付宝账号
  transfer_game_id?: string
  payment_qr?: string // 收款二维码URL，支持多个用逗号分隔
  status: 'active' | 'inactive'
  created_at: Timestamp
  updated_at: Timestamp
}

// 订单相关类型
export interface Order {
  id: ID
  merchant_id: ID
  player_game_id: string
  payment_qr_url?: string
  transfer_screenshot_url?: string
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'rejected'
  admin_notes?: string
  created_at: Timestamp
  updated_at: Timestamp
  merchant?: Merchant
}

export interface CreateOrderData {
  merchant_id: ID
  player_game_id: string
  payment_qr_url?: string
  transfer_screenshot_url?: string
}

// API响应类型
export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data: T
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// 错误类型
export interface ApiError {
  message: string
  code?: string
  field?: string
  details?: any
}

// 文件上传类型
export interface UploadResponse {
  url: string
  filename: string
  size: number
}

// 工具类型
export type WithTimestamps<T> = T & {
  created_at: Timestamp
  updated_at: Timestamp
}

export type WithId<T> = T & {
  id: ID
}

export type CreateData<T> = Omit<T, 'id' | 'created_at' | 'updated_at'>
