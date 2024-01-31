interface ToastState {
  message: string | null
}

const initialState: ToastState = {
  message: null,
}

const toastReducer = (state = initialState, action: any): ToastState => {
  switch (action.type) {
    case 'SHOW_TOAST':
      return { ...state, message: action.payload.message }
    case 'HIDE_TOAST':
      return { ...state, message: null }
    default:
      return state
  }
}

export default toastReducer
