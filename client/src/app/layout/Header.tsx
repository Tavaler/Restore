import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { green } from "@mui/material/colors";
import { color } from "@mui/system";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

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

export default function Header(props: any) {
  return (
    <Box sx={{ flexGrow: 1,m:2 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Switch
                defaultChecked
                color="warning"
                onChange={props.headleMode}
              />

              {/* <MenuIcon /> */}
              {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            bbbbbbbb
          </Typography> */}
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              RESTORE
            </Typography>
          </Box>

          <Box>
            <List sx={{ display: "flex" }}>
              {midLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                >
                  {title}
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", marginRight: 1 }}>
            <Badge color="secondary" badgeContent={1}>
              <IconButton size="large" color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            </Badge>

            <List sx={{ display: "flex" }}>
              {rightLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                >
                  {title}
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
