import { InputBaseComponentProps } from "@mui/material";
import { forwardRef, Ref, useImperativeHandle, useRef } from "react";
<<<<<<< HEAD
 
interface Props extends InputBaseComponentProps {}
 
=======

interface Props extends InputBaseComponentProps {}

>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
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
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
  return (
    <Component
      onReady={(element: any) => (elementRef.current = element)}
      {...props}
    />
  );
<<<<<<< HEAD
});
=======
});
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
