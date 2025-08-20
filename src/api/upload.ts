import api from './index'
import type { ApiResponse, UploadResponse } from '@/types'

// 上传支付二维码
export const uploadPaymentQr = (file: File) => {
  const formData = new FormData()
  formData.append('qr', file)

  return api.post<ApiResponse<UploadResponse>>('/upload/payment-qr', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

// 上传转账截图
export const uploadTransferScreenshot = (file: File) => {
  const formData = new FormData()
  formData.append('screenshot', file)

  return api.post<ApiResponse<UploadResponse>>('/upload/transfer-screenshot', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
