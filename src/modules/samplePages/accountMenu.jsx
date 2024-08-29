import React from 'react';
import { Menu, MenuItem, TextField, Button, Divider, Avatar, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useAuthMethod, useAuthUser } from "@crema/hooks/AuthHooks";


const AccountMenu = ({ anchorEl, handleClose }) => {
  const open = Boolean(anchorEl);

  const { logout } = useAuthMethod();
  const { user } = useAuthUser();
  const navigate = useNavigate();



  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: { width: 320, p: 2 }
      }}
    >
      {/* <form className="account-menu__form">
        <Typography variant="h6" component="div" gutterBottom>
          Log In to Your Account
        </Typography>
        <TextField
          id="header-signin-email"
          label="Email address"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
        />
        <TextField
          id="header-signin-password"
          label="Password"
          variant="outlined"
          size="small"
          fullWidth
          type="password"
          margin="normal"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="#" variant="body2">
            Forgot?
          </Link>
        </div>
        <Button variant="contained" color="primary" size="small" fullWidth type="submit" sx={{ mt: 2 }}>
          Login
        </Button>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          <Link href="account-login.html">
            Create An Account
          </Link>
        </Typography>
      </form> */}

      <Link href="#" underline="none">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt="Ryan Ford" src="images/avatars/avatar-4.jpg" sx={{ mr: 2 }} />
          <div>
            <Typography variant="subtitle1">{user.displayName ? user.displayName  : "Guest" }</Typography>
            <Typography variant="body2" color="textSecondary">{user.email}</Typography>
          </div>
        </div>
      </Link>

      <Divider sx={{ my: 2 }} />

      <List>
        <ListItem button component="a" href="account-dashboard.html">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component="a" href="account-dashboard.html">
          <ListItemText primary="Garage" />
        </ListItem>
        <ListItem button component="a" href="account-profile.html">
          <ListItemText primary="Edit Profile" />
        </ListItem>
        <ListItem button component="a" href="account-orders.html">
          <ListItemText primary="Order History" />
        </ListItem>
        <ListItem button component="a" href="account-addresses.html">
          <ListItemText primary="Addresses" />
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <List>
        <ListItem button component="a" href="account-login.html">
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Menu>
  );
};

export default AccountMenu;
