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
import { useAppDispatch, useAppSelector } from "../store/configureStore";
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
  
  const { user } = useAppSelector((state) => state.account);
  const { basket } = useAppSelector(state=>state.basket)
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

            <Typography variant="h6" component="div">
              YEDOM
            </Typography>
          </Box>
          <List sx={{ display: "flex" }}>
            {midLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title}
              </ListItem>
            ))}

            {user && user.roles?.includes("Admin") && (
              <ListItem component={NavLink} to={"/inventory"} sx={navStyles}>
                INVENTORY
              </ListItem>
            )}
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;