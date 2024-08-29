import React, { useState } from 'react';
import { Button, IconButton, List, ListItem, ListItemText, ListItemIcon, Divider, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { useLayoutContext , useLayoutActionsContext} from '@crema/context/AppContextProvider/LayoutContextProvider';

import {Link} from 'react-router-dom';
const MobileMenu = ({ isOpen, onClose }) => {

    const cartItems = useSelector((state) => state.cart.items);



    const { openMobileMenu } = useLayoutContext();


    const { setOpenMobileMenu } = useLayoutActionsContext();




  return (
    <Box  className={`mobile-menu ${openMobileMenu ? 'mobile-menu--open' : ''}`}>
      <Box className="mobile-menu__backdrop" onClick={onClose} />
      <Box className="mobile-menu__body">
        <IconButton className="mobile-menu__close" onClick={()=> {setOpenMobileMenu(false)}}>
          <CloseIcon />
        </IconButton>
        <Box className="mobile-menu__panel">
          <Box className="mobile-menu__panel-header">
            <Box className="mobile-menu__panel-title">Menu</Box>
          </Box>
          <Box className="mobile-menu__panel-body">
           
            <Box className="mobile-menu__indicators">

    <Link className="mobile-menu__indicator"to="/home">
            
              <span className="mobile-menu__indicator-icon"><svg width="20" height="20"><path d="M14,3c2.2,0,4,1.8,4,4c0,4-5.2,10-8,10S2,11,2,7c0-2.2,1.8-4,4-4c1,0,1.9,0.4,2.7,1L10,5.2L11.3,4C12.1,3.4,13,3,14,3 M14,1
	c-1.5,0-2.9,0.6-4,1.5C8.9,1.6,7.5,1,6,1C2.7,1,0,3.7,0,7c0,5,6,12,10,12s10-7,10-12C20,3.7,17.3,1,14,1L14,1z"></path></svg> </span><span className="mobile-menu__indicator-title">Wishlist</span> </Link>

  <a className="mobile-menu__indicator" href="account-dashboard.html"><span className="mobile-menu__indicator-icon"><svg width="20" height="20"><path d="M20,20h-2c0-4.4-3.6-8-8-8s-8,3.6-8,8H0c0-4.2,2.6-7.8,6.3-9.3C4.9,9.6,4,7.9,4,6c0-3.3,2.7-6,6-6s6,2.7,6,6
	c0,1.9-0.9,3.6-2.3,4.7C17.4,12.2,20,15.8,20,20z M14,6c0-2.2-1.8-4-4-4S6,3.8,6,6s1.8,4,4,4S14,8.2,14,6z"></path></svg> </span>
  <span className="mobile-menu__indicator-title">Account</span> 
  </a>
  
    <Link className="mobile-menu__indicator"to="/home">
    <span className="mobile-menu__indicator-icon"><svg width="20" height="20"><circle cx="7" cy="17" r="2"></circle><circle cx="15" cy="17" r="2"></circle><path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
	V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
	C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path></svg> <span className="mobile-menu__indicator-counter">3</span> </span><span className="mobile-menu__indicator-title">Cart</span>
 </Link>
  
 
 <Link className="mobile-menu__indicator"to="/ecommerce/cart">
    <span className="mobile-menu__indicator-icon"><svg width="20" height="20"><path d="M6.6,2c2,0,4.8,0,6.8,0c1,0,2.9,0.8,3.6,2.2C17.7,5.7,17.9,7,18.4,7C20,7,20,8,20,8v1h-1v7.5c0,0.8-0.7,1.5-1.5,1.5h-1
	c-0.8,0-1.5-0.7-1.5-1.5V16H5v0.5C5,17.3,4.3,18,3.5,18h-1C1.7,18,1,17.3,1,16.5V16V9H0V8c0,0,0.1-1,1.6-1C2.1,7,2.3,5.7,3,4.2
	C3.7,2.8,5.6,2,6.6,2z M13.3,4H6.7c-0.8,0-1.4,0-2,0.7c-0.5,0.6-0.8,1.5-1,2C3.6,7.1,3.5,7.9,3.7,8C4.5,8.4,6.1,9,10,9
	c4,0,5.4-0.6,6.3-1c0.2-0.1,0.2-0.8,0-1.2c-0.2-0.4-0.5-1.5-1-2C14.7,4,14.1,4,13.3,4z M4,10c-0.4-0.3-1.5-0.5-2,0
	c-0.4,0.4-0.4,1.6,0,2c0.5,0.5,4,0.4,4,0C6,11.2,4.5,10.3,4,10z M14,12c0,0.4,3.5,0.5,4,0c0.4-0.4,0.4-1.6,0-2c-0.5-0.5-1.3-0.3-2,0
	C15.5,10.2,14,11.3,14,12z"></path>
    </svg> 
    </span>
    </Link>
    </Box>
    </Box>
          
    </Box>
        <Divider className="mobile-menu__divider" />
        <Box className="mobile-menu__indicators">
          <Button className="mobile-menu__indicator" href="wishlist.html">
            <Box className="mobile-menu__indicator-icon">
              <svg width="20" height="20">
                <path d="M14,3c2.2,0,4,1.8,4,4c0,4-5.2,10-8,10S2,11,2,7c0-2.2,1.8-4,4-4c1,0,1.9,0.4,2.7,1L10,5.2L11.3,4C12.1,3.4,13,3,14,3 M14,1 c-1.5,0-2.9,0.6-4,1.5C8.9,1.6,7.5,1,6,1C2.7,1,0,3.7,0,7c0,5,6,12,10,12s10-7,10-12C20,3.7,17.3,1,14,1L14,1z"></path>
              </svg>
            </Box>
            <Box className="mobile-menu__indicator-title">Wishlist</Box>
          </Button>

          {/* Similar structure for Account, Cart, and Garage indicators */}
        </Box>
      </Box>
    </Box>
  );
};

export default MobileMenu;
