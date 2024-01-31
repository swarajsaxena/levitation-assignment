import { Dispatch } from 'redux'

export const showToast = (message: string) => (dispatch: Dispatch) => {
  dispatch({ type: 'SHOW_TOAST', payload: { message } })

  setTimeout(() => {
    dispatch({ type: 'HIDE_TOAST' })
  }, 3000)
}
