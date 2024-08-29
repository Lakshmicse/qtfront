import React, { useEffect, useState } from 'react';
import { IconButton, Popover, Typography, List, ListItem, Divider, Button, Avatar, Badge } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { getCartItems, addItemToCart } from '@crema/Slices/cartSlice'; 
import { useAuthMethod, useAuthUser } from "@crema/hooks/AuthHooks";

import { Link } from 'react-router-dom';
import AccountMenu from './accountMenu';
import Dropcart from './dropCart';


const BasketButton = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const cart = useSelector((state) => state.cart);


  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {

  }, []);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const calculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => {
      return total + item.mrp * item.quantity;
    }, 0);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <>

      <div className="indicator indicator--trigger--click" onClick={handleClick}>
        <a href="#" className="indicator__button">
          <span className="indicator__icon">
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10.5" cy="27.5" r="2.5"></circle>
              <circle cx="23.5" cy="27.5" r="2.5"></circle>
              <path d="M26.4,21H11.2C10,21,9,20.2,8.8,19.1L5.4,4.8C5.3,4.3,4.9,4,4.4,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h3.4C5.8,2,7,3,7.3,4.3 l3.4,14.3c0.1,0.2,0.3,0.4,0.5,0.4h15.2c0.2,0,0.4-0.1,0.5-0.4l3.1-10c0.1-0.2,0-0.4-0.1-0.4C29.8,8.1,29.7,8,29.5,8H14 c-0.6,0-1-0.4-1-1s0.4-1,1-1h15.5c0.8,0,1.5,0.4,2,1c0.5,0.6,0.6,1.5,0.4,2.2l-3.1,10C28.5,20.3,27.5,21,26.4,21z"></path>
            </svg>
            <span className="indicator__counter">{cart.items?.length}</span>
          </span>
          <span className="indicator__title">Cart</span>
          <span className="indicator__value">${cart.totalPrice}</span>
        </a>
        <div className="indicator__content">

        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>Cart Items</Typography>
        <Divider />
        <Dropcart />
       
      </Popover>
    </>
  );
};

export const HeaderIndicators = () => {


  const [accountAnchorEl, setAccountAnchorEl] = useState(null);
  const { logout } = useAuthMethod();
  const { user } = useAuthUser();
  const navigate = useNavigate();



  const open = Boolean(accountAnchorEl);
  const id = open ? 'account-popover' : undefined;

  const handleAccountClick = (event) => {
    setAccountAnchorEl(event.currentTarget)
  }


  const handleClose = () => {
    setAccountAnchorEl(null);
  };


  return (
    <div className="header__indicators">
      <div className="indicator">
        <a href="wishlist.html" className="indicator__button">
          <span className="indicator__icon">
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
              <path d="M23,4c3.9,0,7,3.1,7,7c0,6.3-11.4,15.9-14,16.9C13.4,26.9,2,17.3,2,11c0-3.9,3.1-7,7-7c2.1,0,4.1,1,5.4,2.6l1.6,2l1.6-2 C18.9,5,20.9,4,23,4 M23,2c-2.8,0-5.4,1.3-7,3.4C14.4,3.3,11.8,2,9,2c-5,0-9,4-9,9c0,8,14,19,16,19s16-11,16-19C32,6,28,2,23,2L23,2z"></path>
            </svg>
          </span>
        </a>
      </div>

      <BasketButton />

      <div className="indicator indicator--trigger--click" onClick={handleAccountClick}>
        <a href="#" className="indicator__button">
          <span className="indicator__icon">
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
              <path d="M16,18C9.4,18,4,23.4,4,30H2c0-6.2,4-11.5,9.6-13.3C9.4,15.3,8,12.8,8,10c0-4.4,3.6-8,8-8s8,3.6,8,8c0,2.8-1.5,5.3-3.6,6.7 C26,18.5,30,23.8,30,30h-2C28,23.4,22.6,18,16,18z M22,10c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S22,13.3,22,10z"></path>
            </svg>
          </span>
          <span className="indicator__title">Hello, {user.id ? user.displayName : "Log In"}</span>
          <span className="indicator__value">{user.id ? "My Account" : ""}</span>
        </a>
        <Popover
        id={id}
        open={open}
        anchorEl={accountAnchorEl}
        onClose={() => { setAccountAnchorEl(null) }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
         <AccountMenu anchorEl={accountAnchorEl} handleClose={() => { setAccountAnchorEl(null) }} />
      </Popover>
       
      </div>


    </div>
  );
};

//  HeaderIndicators;
