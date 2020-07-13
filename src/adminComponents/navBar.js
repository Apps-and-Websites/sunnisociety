import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  FormControlLabel,
  FormGroup,
  Menu,
  MenuItem,
} from "@material-ui/core/";
import { MenuIcon, AccountCircle } from "@material-ui/icons/";

import * as Styles from "./MaterialUIStyles/NavStyles";

export default function MenuAppBar({ token, toggleLoginModal, logoutUser }) {
  const classes = Styles.NavUseStyles();

  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const isToken = Boolean(token);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleSwitch = () => {
    if (isToken) {
      logoutUser();
    } else {
      toggleLoginModal();
    }
  };

  return (
    <nav className={classes.navBar}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={isToken}
              // onChange={handleChange}
              aria-label="login switch"
              onClick={handleSwitch}
            />
          }
          label={isToken ? "Logout" : "Login"}
        />
      </FormGroup>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <Link to="/admin/addBook">Add Book</Link>
          </Typography>

          <Typography variant="h4" className={classes.title}>
            <Link to="/admin/addAuthor">Add Author</Link>
          </Typography>

          <Typography variant="h4" className={classes.title}>
            <Link to="/admin/addCategory">Add Category</Link>
          </Typography>

          <Typography variant="h4" className={classes.title}>
            <Link to="/admin/books">View All Books</Link>
          </Typography>

          {token && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </nav>
  );
}
