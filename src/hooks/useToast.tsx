// hooks/useToast.ts
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { showToast, hideToast } from '../redux/slices/toastSlice'

const useToast = () => {
  const dispatch = useDispatch()

  const activateToast = useCallback(
    (message: string) => {
      const messageId = Date.now()
      dispatch(showToast({ id: messageId, message: message }))
    },
    [dispatch]
  )

  const hide = useCallback(
    (id: number) => {
      dispatch(hideToast(id))
    },
    [dispatch]
  )

  return {
    activateToast,
    hide,
  }
}

export default useToast
