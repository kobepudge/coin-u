import api from './index'
import type { ApiResponse, UploadResponse } from '@/types'

// 上传支付二维码
export const uploadPaymentQr = (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  return api.post<ApiResponse<UploadResponse>>('/upload/payment-qr', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
