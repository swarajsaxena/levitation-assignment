// redux/slices/toastSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ToastMessage {
  id: number
  message: string
}

export interface ToastState {
  messages: ToastMessage[]
}

const initialToastState: ToastState = {
  messages: [],
}

const toastSlice = createSlice({
  name: 'toast',
  initialState: initialToastState,
  reducers: {
    showToast: (state, action: PayloadAction<ToastMessage>) => {
      if (state.messages.length >= 5) {
        state.messages.shift()
      }
      state.messages.push(action.payload)
    },
    hideToast: (state, action: PayloadAction<number>) => {
      state.messages = state.messages.filter(
        (message) => message.id !== action.payload
      )
    },
  },
})

export const { showToast, hideToast } = toastSlice.actions
export default toastSlice.reducer

export const selectToastMessages = (state: { toast: ToastState }) =>
  state.toast.messages
