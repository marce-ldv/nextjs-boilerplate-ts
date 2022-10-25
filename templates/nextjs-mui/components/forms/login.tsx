import { FormProvider, useForm } from 'react-hook-form'
import { Input } from '@atoms/Input'
import { Button } from '@atoms/Button'
import { LoginTypes } from '../../types/login'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

export const LoginForm = () => {
  // eslint-disable-next-line no-useless-escape
  const EmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const schema = z.object({
    email: z.string().regex(EmailRegex),
    password: z.string().min(4),
  })

  const methods = useForm<LoginTypes>({
    resolver: zodResolver(schema),
  })

  const {
    formState: { errors },
  } = methods
  const handleSubmit = (data: any) => {
    methods.setError
    console.log('handleSubmit data', data)
    // call service
  }
  const onSubmit = (data: any) => handleSubmit(data)
  // TODO: remove first stack border
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      maxWidth={450}
      spacing={3}
      sx={{ border: '1px solid red', paddingBlock: '2rem', margin: '4rem' }}
    >
      <Typography>Aca va el Logo</Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        Para acceder ingrese su Email y Contraseña.
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Stack width={410}>
              <Stack>
                <Stack alignItems="center" direction={'row'}>
                  <Typography width={120}>Email</Typography>
                  <Input
                    label=""
                    name="email"
                    type="text"
                    variant="outlined"
                    required
                    id="email"
                    placeHolder="Email"
                  />
                </Stack>
                <Stack direction={'row'}>
                  <Divider sx={{ width: '120px', border: '0' }} />
                  {errors.email ? (
                    <Typography sx={{ color: '#ff0000', marginLeft: '0.5rem' }}>
                      Ingrese un Email válido
                    </Typography>
                  ) : (
                    <Divider sx={{ marginY: '12px', border: '0' }} />
                  )}
                </Stack>
              </Stack>
              <Stack>
                <Stack alignItems="center" direction={'row'}>
                  <Typography width={120}>Contraseña</Typography>
                  <Input
                    label=""
                    type="password"
                    variant="outlined"
                    required
                    id="password"
                    placeHolder="Contraseña"
                    name="password"
                  />
                </Stack>
                <Stack direction={'row'}>
                  <Divider sx={{ width: '120px', border: '0' }} />
                  {errors.password ? (
                    <Typography sx={{ color: '#ff0000', marginLeft: '0.5rem' }}>
                      Ingrese una contraseña válida
                    </Typography>
                  ) : (
                    <Divider sx={{ marginY: '12px', border: '0' }} />
                  )}
                </Stack>
              </Stack>
            </Stack>
            <Stack width={410}>
              <Button type="submit" variant={'contained'} fullWidth>
                Ingresar
              </Button>
              <Typography
                variant="subtitle2"
                sx={{
                  cursor: 'pointer',
                  margin: '1rem',
                  textAlign: 'center',
                  color: '#2196F3',
                  fontWeight: 'bold',
                }}
              >
                Recuperar contraseña
              </Typography>
            </Stack>
          </Stack>
        </form>
      </FormProvider>
    </Stack>
  )
}
