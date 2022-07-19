import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.firstname}>
        <FormLabel htmlFor="first-name">First Name</FormLabel>
        <Input
          id="first-name"
          placeholder="First Name"
          {...register('firstname', {
            required: 'First Name required',
            minLength: { value: 2, message: 'Minimum length should be 2' },
          })}
        />
        <FormErrorMessage>
          {errors.firstname && errors.firstname.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.firstname}>
        <FormLabel htmlFor="last-name">Last Name</FormLabel>
        <Input
          id="last-name"
          placeholder="Last Name"
          {...register('lastname', {
            required: 'Last Name required',
            minLength: { value: 2, message: 'Minimum length should be 2' },
          })}
        />
        <FormErrorMessage>
          {errors.lastname && errors.lastname.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          placeholder="Email"
          {...register('email', {
            required: 'Email Required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.number}>
        <FormLabel htmlFor="number">Phone Number</FormLabel>
        <Input
          id="number"
          placeholder="Phone Number"
          {...register('number', {
            required: 'Phone Number Required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
            pattern: {
              value: /^(0|[1-9]\d*)(\.\d+)?$/,
              message: 'Not a valid phone number',
              valueAsNumber: true,
            },
          })}
        />
        <FormErrorMessage>
          {errors.number && errors.number.message}
        </FormErrorMessage>
      </FormControl>

      <Button mt={4} isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  )
}
