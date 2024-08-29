import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import AppTooltip from '../AppTooltip';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Drawer from '@mui/material/Drawer';
import AppMessageContent from './AppMessageContent';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';



const AppMessages = ({
  drawerPosition = 'right',
  tooltipPosition = 'bottom',
  isMenu,
  sxMessageContentStyle,
}) => {
  const [showMessage, setShowMessage] = useState(false);
 
  const cartItems = useSelector((state) => state.cart.items);
 
  
  return (
    <>
      {isMenu ? (
        <Box component='span' onClick={() => setShowMessage(true)}>
          Cart
        </Box>
      ) : (
        <AppTooltip title='Message' placement={tooltipPosition}>
          <IconButton
            className='icon-btn'
            sx={{
              borderRadius: '50%',
              width: 40,
              height: 40,
              color: (theme) => theme.palette.text.secondary,
              backgroundColor: (theme) => theme.palette.background.default,
              border: 1,
              borderColor: 'transparent',
              '&:hover, &:focus': {
                color: (theme) => theme.palette.text.primary,
                backgroundColor: (theme) =>
                  alpha(theme.palette.background.default, 0.9),
                borderColor: (theme) =>
                  alpha(theme.palette.text.secondary, 0.25),
              },
            }}
            onClick={() => setShowMessage(true)}
            size='large'
          >
            <ShoppingCart className='icon' />
          </IconButton>
        </AppTooltip>
      )}

      <Drawer
        anchor={drawerPosition}
        open={showMessage}
        onClose={() => setShowMessage(false)}
      >
        {cartItems && <AppMessageContent
          sxStyle={sxMessageContentStyle}
          onClose={() => setShowMessage(false)}
          cartItems={cartItems}
        />}
      </Drawer>
    </>
  );
};

export default AppMessages;

AppMessages.propTypes = {
  sxMessageContentStyle: PropTypes.object,
  drawerPosition: PropTypes.string,
  tooltipPosition: PropTypes.string,
  isMenu: PropTypes.bool,
};
