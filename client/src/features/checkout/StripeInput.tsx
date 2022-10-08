import { InputBaseComponentProps } from "@mui/material";
import { forwardRef, Ref, useImperativeHandle, useRef } from "react";
<<<<<<< HEAD
 
interface Props extends InputBaseComponentProps {}
 
=======

interface Props extends InputBaseComponentProps {}

>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
export const StripeInput = forwardRef(function StripeInput(
  { component: Component, ...props }: Props,
  ref: Ref<unknown>
) {
  const elementRef = useRef<any>();
<<<<<<< HEAD
 
  useImperativeHandle(ref, () => ({
    focus: () => elementRef.current.focus,
  }));
 
=======
  useImperativeHandle(ref, () => ({
    focus: () => elementRef.current.focus,
  }));
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
  return (
    <Component
      onReady={(element: any) => (elementRef.current = element)}
      {...props}
    />
  );
});
