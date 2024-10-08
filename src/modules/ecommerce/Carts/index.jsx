import React from 'react';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import AppCard from '@crema/components/AppCard';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Fonts } from '@crema/constants/AppEnums';
import AppAnimate from '@crema/components/AppAnimate';
import AppGridContainer from '@crema/components/AppGridContainer';
import { postDataApi, putDataApi, useGetDataApi } from '@crema/hooks/APIHooks';

import AppLoader from '@crema/components/AppLoader';
import CartTable from './CartTable';
import OrderSummary from '../OrderSummary';

import { useSelector, useDispatch } from 'react-redux';
import { getCartItems, addItemToCart, removeItemFromCart, clearCart,  decreaseItemQuantity, increaseItemQuantity } from '@crema/Slices/cartSlice'; // Adjust the path as needed

const Carts = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  const navigate = useNavigate();

  const onRemoveItem = (product) => {
    dispatch(removeItemFromCart(product));
   
  };

  const onDecrement = (product) => {
   // handleUpdateQuantity(data.id,data.count - 1);
  
    dispatch(decreaseItemQuantity(product));
    
  };


  const onIncrement = (product) => {
   
    dispatch(increaseItemQuantity(product));
    
  };

  return (
    <>
      {false ? (
        <AppLoader />
      ) : (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <Box>
            <Box
              component='h2'
              sx={{
                color: 'text.primary',
                fontWeight: Fonts.BOLD,
                mb: 6,
                fontSize: 16,
              }}
            >
              <IntlMessages id='sidebar.ecommerce.cart' />
            </Box>
            <AppGridContainer>
              <Grid item xs={12} md={8}>
                <AppCard
                  contentStyle={{ px: 0 }}
                  footer={
                    <Box
                      sx={{
                        mt: 4,
                        width: 1,
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={() => {
                          navigate('/ecommerce/products');
                        }}
                      >
                        Continue Shopping
                      </Button>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => {
                          navigate('/ecommerce/checkout');
                        }}
                      >
                        Checkout
                      </Button>
                    </Box>
                  }
                >
                  <CartTable
                    cartItems={cartItems}
                    onRemoveItem={onRemoveItem}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                  />
                </AppCard>
              </Grid>
              <Grid item xs={12} md={4}>
                <OrderSummary cartItems={cartItems} />
              </Grid>
            </AppGridContainer>
          </Box>
        </AppAnimate>
      )}
    </>
  );
};

export default Carts;
