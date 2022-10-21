import { Button } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormOptions = {
  SelectedOption: string
}

const MokedOptions = [
  { value: 'option1' },
  { value: 'option2' },
  { value: 'option3' },
]

export const SelectInput = () => {
  const { register, handleSubmit } = useForm<FormOptions>()
  const onSubmit: SubmitHandler<FormOptions> = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Select option:</label>
      <select {...register('SelectedOption')}>
        {MokedOptions.map(singleOption => (
          <option value={singleOption.value} key={singleOption.value}>
            {singleOption.value}
          </option>
        ))}
      </select>
      <Button variant="outlined" size="small" type="submit">
        Submit
      </Button>
    </form>
  )
}
