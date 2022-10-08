import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { Link } from "react-router-dom";
import { signOut } from "../../features/account/accountSlice";
import { clearBasket } from "../../features/basket/basketSlice";
<<<<<<< HEAD
 
export default function SignedinMenu() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.account);
 
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
 
=======
export default function SignedinMenu() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.account);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
<<<<<<< HEAD
 
=======
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
  return (
    <>
      <Button onClick={handleClick} color="inherit" sx={{ typography: "h6" }}>
        {user?.email}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
<<<<<<< HEAD
        <MenuItem component={Link} to="/orders">
=======
        <MenuItem component={Link} to="/order">
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
          My orders
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(signOut());
            dispatch(clearBasket());
            localStorage.removeItem("savepath");
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
