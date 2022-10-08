<<<<<<< HEAD
import { TextField } from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';
 
//UseControllerProps  มีคุณสมบัติ name,control อยู่แล้วเลยไม่ต้องกำหนด
interface Props extends UseControllerProps {
   label: string;
}
 
//วิธีใช้ https://react-hook-form.com/api/usecontroller
export default function AppTextInput(props: Props) {
  const {fieldState,field} =  useController({...props, defaultValue : ""})  
  return (
    <TextField
    {...props}
    {...field}
    fullWidth
    variant='standard'
    error={!!fieldState.error}
    helperText={fieldState.error?.message}
    />
  )
=======
import { TextField } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";
//UseControllerProps มีคุณสมบัติname,control อยู่แล้วเลยไม่ต้องก าหนด
interface Props extends UseControllerProps {
  label: string;
}
//วิธีใช้https://react-hook-form.com/api/usecontroller
export default function AppTextInput(props: Props) {
  const { fieldState, field } = useController({ ...props, defaultValue: "" });
  return (
    <TextField
      {...props}
      {...field}
      fullWidth
      variant="outlined"
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  );
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
}
