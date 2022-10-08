<<<<<<< HEAD
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
=======
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
interface Props {
  options: any[];
  onChange: (event: any) => void;
  selectedValue: string;
}
export default function RadioButtonGroup({
  options,
  onChange,
  selectedValue,
}: Props) {
  return (
    <FormControl component="fieldset">
      <RadioGroup onChange={onChange} value={selectedValue}>
        {options.map(({ value, label }) => (
          <FormControlLabel
            value={value}
            control={<Radio />}
            label={label}
            key={value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
