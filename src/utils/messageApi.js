import request from '@/utils/request.js'

export const Message = function (messageboard, phonenumber) {
  return request.post('/api/message', {
    message: messageboard,
    phone: phonenumber
  })
}
