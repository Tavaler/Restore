<<<<<<< HEAD
import { Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../App/store/configureStore";
import { decrement, increment } from "./counterSlice";
export default function ContactPage() {
  
 
  //เรียกมาจาก configureStore.ts
  const dispatch = useAppDispatch()
  const {data,title} =  useAppSelector(state => state.counter)
 
  return (
    <>
    <Typography variant="h2">
      {title} {data}
    </Typography>
    <Button sx={{m:2}} variant='contained' onClick={()=>dispatch(increment(1))}>+</Button>
    <Button variant='contained' onClick={()=>dispatch(decrement(1))}>-</Button>
    <Button sx={{m:2}} variant='contained' onClick={()=>dispatch(increment(5))}>+5</Button>
    </>
  );
}
=======
import { ButtonGroup, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../App/store/configureStore";
import { decremented, incremented } from "./counterSlice";

const ContactPage = () => {
  const dispatch = useAppDispatch()
  const {num} = useAppSelector((state)=>state.counter)

  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={()=>dispatch(decremented(5))}>-</Button>
        <Button>
          {num}
        </Button>
        <Button onClick={()=>dispatch(incremented(5))}>+</Button>
      </ButtonGroup>
    </>
  );
};
export default ContactPage;


>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
