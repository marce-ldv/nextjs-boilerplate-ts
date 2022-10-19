import { FormProvider, useForm } from 'react-hook-form'
import { Input } from '@atoms/Input'
import { Button } from '@atoms/Button'

export const LoginForm = () => {
  const methods = useForm({
    defaultValues: {
      username: 'mrc@fake.com',
      password: '12345',
    },
  })

  const handleSubmit = (data: any) => {
    console.log('handleSubmit data', data)
    // call service
  }

  const onSubmit = (data: any) => handleSubmit(data)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input label="Username" name="username" type="text" />
        <Input label="Password" name="password" type="password" />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  )
}
