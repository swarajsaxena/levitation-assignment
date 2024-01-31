import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import useToast from '../hooks/useToast'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import { emailRegex, passwordRegex } from '../lib/utils'

interface FormState {
  name: string | undefined
  email: string | undefined
  password: string | undefined
}

export default function Register() {
  const { activateToast } = useToast()
  let [formState, setFormState] = useState<FormState>({
    name: undefined,
    email: undefined,
    password: undefined,
  })

  const handleFieldChange = (fieldName: keyof FormState, value: any) => {
    setFormState({
      ...formState,
      [fieldName]: value,
    })
  }

  return (
    <div className='relative flex-1 h-full flex justify-center items-center px-4'>
      <Link to={'/login'}>
        <Button
          variant={'secondary'}
          className='absolute top-4 right-4'
        >
          Login
        </Button>
      </Link>
      <div className='flex flex-col items-stretch gap-8 max-w-lg w-full'>
        <div className='flex flex-col items-center'>
          <div className='text-xl font-bold'>Create an account</div>
          <div>Enter your email below to create your account.</div>
        </div>
        <div className='flex flex-col gap-4'>
          <CustomInput
            label='Name'
            value={formState.name}
            setActiveValue={(value) => handleFieldChange('name', value)}
          />
          <CustomInput
            label='Email'
            value={formState.email}
            setActiveValue={(value) => handleFieldChange('email', value)}
            isError={
              !formState.email
                ? false
                : emailRegex.test(formState.email)
                ? false
                : true
            }
            errorText='Please enter a valid email address'
          />
          <CustomInput
            label='Password'
            type='password'
            value={formState.password}
            setActiveValue={(value) => handleFieldChange('password', value)}
            isError={
              !formState.password
                ? false
                : passwordRegex.test(formState.password)
                ? false
                : true
            }
            errorText={
              'Password must be at least 8 characters including 1 lowercase, uppercase, number and special character.'
            }
          />
        </div>
        <Button onClick={() => activateToast('Registered Successfully !!')}>
          Register
        </Button>
        <div className='text-xs opacity-50 text-center'>
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </div>
      </div>
    </div>
  )
}
