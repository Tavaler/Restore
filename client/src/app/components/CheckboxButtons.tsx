import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";
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
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
  function handleChecked(value: string) {
    const currentIndex = checkedItems.findIndex((item) => item === value);
    let newChecked: string[] = [];
    if (currentIndex === -1) newChecked = [...checkedItems, value];
    else newChecked = checkedItems.filter((item) => item !== value);
    setCheckedItems(newChecked);
    onChange(newChecked); //ส่งพารามิเตอร์ไปค้นสินค้า
  }
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
