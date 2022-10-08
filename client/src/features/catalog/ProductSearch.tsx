import { debounce, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../App/store/configureStore";
import { setProductParams } from "./catalogSlice";
<<<<<<< HEAD
 
=======

>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
export default function ProductSearch() {
  const { productParams } = useAppSelector((state) => state.catalog);
  const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);
  const dispatch = useAppDispatch();
<<<<<<< HEAD
 
  //หน่วงเวลารอให้พิมพ์ข้อความ
  const debouncedSearch = debounce((event: any) => {
    dispatch(setProductParams({ searchTerm: event.target.value }));
  }, 1000);
  
=======

  const debouncedSearch = debounce((event: any) => {
    dispatch(setProductParams({ searchTerm: event.target.value }));
  }, 1000);
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
  return (
    <TextField
      label="Search products"
      variant="outlined"
      fullWidth
      value={searchTerm || ""}
      onChange={(event: any) => {
        setSearchTerm(event.target.value);
        debouncedSearch(event);
      }}
    />
  );
}
