import { Checkbox, FormControlLabel } from "@mui/material";
<<<<<<< HEAD
import { useController, UseControllerProps } from "react-hook-form"
 
interface Props extends UseControllerProps {
    label: string;
    disabled: boolean;
}
 
export default function AppCheckbox(props: Props) {
    const {field} = useController({...props, defaultValue: false});
    return (
        <FormControlLabel 
            control={
                <Checkbox 
                    {...field}
                    checked={field.value}
                    color='secondary'
                    disabled={props.disabled}
                />
            }
            label={props.label}
        />
    )
} 

=======
import { useController, UseControllerProps } from "react-hook-form";
interface Props extends UseControllerProps {
  label: string;
  disabled: boolean;
}
export default function AppCheckbox(props: Props) {
  const { field } = useController({ ...props, defaultValue: false });
  return (
    <FormControlLabel
      control={
        <Checkbox
          {...field}
          checked={field.value}
          color="secondary"
          disabled={props.disabled}
        />
      }
      label={props.label}
    />
  );
}
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
