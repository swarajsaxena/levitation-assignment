// components/Toast.tsx
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideToast, selectToastMessages } from '../redux/slices/toastSlice'
import { motion, AnimatePresence } from 'framer-motion'

import { Button } from './Button'
import useToast from '../hooks/useToast'

interface ToastMessage {
  id: number
  message: string
}

function OneToast({
  message,
  index,
  length,
  howering,
}: {
  index: number
  message: { message: string; id: number }
  length: number
  howering: boolean
}) {
  let [showing, setShowing] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowing(false)
      setTimeout(() => dispatch(hideToast(message.id)), 500)
    }, 5000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    showing && (
      <motion.div
        key={message.id + message.message}
        initial={{
          y: 0,
          // opacity: 0,
          bottom: 0,
          right: 0,
          zIndex: 9999 + length - index,
        }}
        animate={{
          y: -10,
          // opacity: 1,
          bottom: 0,
          right: 0,
          scale: howering ? 1 : 1 - ((length - 1 - index) / length) * 0.25,
          marginBottom: howering
            ? 74 * (length - 1 - index) + 10
            : (length - index) * 10,
        }}
        exit={{
          y: 0,
          opacity: 0,
        }}
        className='absolute bg-white px-4 py-3 border-border border rounded-lg min-w-[300px] max-w-[350px] shadow-xl origin-top text-sm'
      >
        <div className='font-medium'>Success</div>
        <div className='line-clamp-1'>{message.message}</div>
      </motion.div>
    )
  )
}

const Toast: React.FC = () => {
  const toastMessages = useSelector(selectToastMessages)
  let [howering, setHowering] = useState(false)

  return (
    <div
      onMouseEnter={() => setHowering(true)}
      onMouseLeave={() => setHowering(false)}
      className='toast-container absolute bottom-0 right-4 z-50 text-black flex flex-col-reverse items-end w-full'
    >
      <AnimatePresence mode='wait'>
        <div className=''>
          {toastMessages.length !== 0 &&
            toastMessages.map((message: ToastMessage, index: number) => (
              <OneToast
                howering={howering}
                key={message.id}
                message={message}
                index={index}
                length={toastMessages.length}
              ></OneToast>
            ))}
        </div>
      </AnimatePresence>
    </div>
  )
}

export default Toast
