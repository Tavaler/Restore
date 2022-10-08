<<<<<<< HEAD
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
 
=======
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
interface Props {
  options: any[];
  onChange: (event: any) => void;
  selectedValue: string;
}
<<<<<<< HEAD
 
=======
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
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
