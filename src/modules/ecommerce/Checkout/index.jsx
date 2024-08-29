import React, {useEffect, useState} from 'react';
import { Box, Grid } from '@mui/material';
import AppCard from '@crema/components/AppCard';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Fonts } from '@crema/constants/AppEnums';

import AppAnimate from '@crema/components/AppAnimate';
import AppGridContainer from '@crema/components/AppGridContainer';
import { useGetDataApi, postDataApi } from '@crema/hooks/APIHooks';

import AppLoader from '@crema/components/AppLoader';
import DeliveryAddress from './DeliveryAddress';
import OrderSummary from '../OrderSummary';
import PaymentInfo from './PaymentInfo';

import { useLayoutContext , useLayoutActionsContext} from '@crema/context/AppContextProvider/LayoutContextProvider';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '@crema/Slices/cartSlice'; // Adjust the path as needed


const Checkout = () => {

  const cartItems = useSelector((state) => state.cart.items);

  const [{ apiData: address , loading}] = useGetDataApi('/address', []);
  
  const { selectedAddress } = useLayoutContext();

  const { setSelectedAddress } = useLayoutActionsContext();


 useEffect(()=>{
  console.log(selectedAddress);
 },[selectedAddress])

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <Box>
            <Box
              sx={{
                component: 'h2',
                color: 'text.primary',
                fontWeight: Fonts.BOLD,
                mb: 6,
                fontSize: 16,
              }}
            >
              <IntlMessages id='sidebar.ecommerce.checkout' />
            </Box>
            <AppGridContainer>
              <Grid item xs={12} md={8}>
                <AppCard
                  title={
                    <Box sx={{ fontSize: 16, fontWeight: Fonts.BOLD }}>
                      Delivery Address
                    </Box>
                  }
                >
                  {address && <DeliveryAddress addresses={address.results.slice(0,1)} setSelectAddress={setSelectedAddress} />}
                </AppCard>
              </Grid>
              <Grid item xs={12} md={4}>
                <OrderSummary cartItems={cartItems} />
                <PaymentInfo />
              </Grid>
            </AppGridContainer>
          </Box>
        </AppAnimate>
      )}
    </>
  );
};

export default Checkout;
