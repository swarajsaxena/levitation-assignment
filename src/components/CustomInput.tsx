import { useEffect, useState } from 'react'
import { Input } from './Input'
import { Label } from './Label'
import { cn } from '../lib/utils'

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  setActiveValue?: React.Dispatch<React.SetStateAction<any | undefined>>
  activeValue?: any | undefined
  customStyle?: string
  max?: number
  isError?: boolean
  errorText?: string
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  setActiveValue,
  activeValue,
  customStyle,
  max,
  isError = false,
  errorText,
  type,
}: CustomInputProps) => {
  const [inputValue, setInputValue] = useState(activeValue)

  useEffect(() => {
    setActiveValue && setActiveValue(inputValue)
  }, [inputValue])

  return (
    <div
      className={cn('flex flex-col w-full items-start gap-1.5', customStyle)}
    >
      <Label>{label}</Label>
      <Input
        value={inputValue}
        onChange={(e: any) => {
          setInputValue(e.target.value)
        }}
        id={label}
        placeholder={label}
        type={type || 'text'}
        min={0}
        maxLength={max}
      />
      {isError && (
        <span className='text-red-500 text-xs'>{errorText || 'error'}</span>
      )}
    </div>
  )
}

export default CustomInput
