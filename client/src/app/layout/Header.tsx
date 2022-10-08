// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import { Badge, IconButton, List, ListItem, Switch } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, NavLink } from "react-router-dom";
// import { useStoreContext } from "../context/StoreContext";
import { ShoppingCart } from "@mui/icons-material";
<<<<<<< HEAD
import { useAppDispatch, useAppSelector } from "../store/configureStore";
=======
import { useAppSelector } from "../store/configureStore";
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
import SignedinMenu from "./SignedinMenu";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];
const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

const Header = (props: any) => {
<<<<<<< HEAD
  
  const { user } = useAppSelector((state) => state.account);
  const { basket } = useAppSelector(state=>state.basket)
=======
  // const { basket } = useStoreContext();
  const { user } = useAppSelector((state) => state.account);
  const { basket } = useAppSelector((state) => state.basket);
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Switch
              defaultChecked
              color="default"
              onChange={props.handleMode}
            />

<<<<<<< HEAD
            <Typography variant="h6" component="div">
              YEDOM
            </Typography>
=======
            <IconButton component={Link} to="/">
              <Typography variant="h6" component="div">
                SilverPony
              </Typography>
            </IconButton>
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
          </Box>
          <List sx={{ display: "flex" }}>
            {midLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title}
              </ListItem>
            ))}
          </List>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              component={Link}
              to="/basket"
              aria-label="cart"
              sx={{ color: "inherit" }}
              size="large"
            >
              <Badge badgeContent={itemCount} color="warning">
                <ShoppingCart />
              </Badge>
            </IconButton>
<<<<<<< HEAD

=======
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
            {user ? (
              <SignedinMenu />
            ) : (
              <List sx={{ display: "flex" }}>
                {rightLinks.map(({ title, path }) => (
                  <ListItem
                    component={NavLink}
                    to={path}
                    key={path}
                    sx={{ color: "inherit", typography: "h6" }}
                  >
                    {title.toUpperCase()}
                  </ListItem>
                ))}
              </List>
            )}
<<<<<<< HEAD


=======
>>>>>>> 3ff57e8fc4efaa7b045ef710d46d5302cfd783e2
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
