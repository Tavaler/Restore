import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";
<<<<<<< HEAD

=======
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
interface Props {
  items: string[];
  checked?: string[];
  onChange: (items: string[]) => void;
}
<<<<<<< HEAD

export default function CheckboxButtons({ items, checked, onChange }: Props) {
  const [checkedItems, setCheckedItems] = useState(checked || []);

  //จัดการค่าที่เลือก/ยกเลิก ใส่ array
=======
export default function CheckboxButtons({ items, checked, onChange }: Props) {
  const [checkedItems, setCheckedItems] = useState(checked || []);
  //จัดกํารค่ําที่เลือก/ยกเลิก ใส่ array
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
  function handleChecked(value: string) {
    const currentIndex = checkedItems.findIndex((item) => item === value);
    let newChecked: string[] = [];
    if (currentIndex === -1) newChecked = [...checkedItems, value];
    else newChecked = checkedItems.filter((item) => item !== value);
    setCheckedItems(newChecked);
    onChange(newChecked); //ส่งพารามิเตอร์ไปค้นสินค้า
  }
<<<<<<< HEAD

=======
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
  return (
    <FormGroup>
      {items.map((item) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems.indexOf(item) !== -1}
              onClick={() => handleChecked(item)}
            />
          }
          label={item}
          key={item}
        />
      ))}
    </FormGroup>
  );
}
