import React from 'react';
import AppCard from '@crema/components/AppCard';
import Grid from '@mui/material/Grid';
import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import AppGridContainer from '@crema/components/AppGridContainer';
import { Fonts } from '@crema/constants/AppEnums';  
import { getTotalPrice } from './helper';

const OrderPlaced = ({ order }) => {
  
  
  const {items : orderItems , shippingAddress : address} = order;

  return (
    <AppCard style={{ marginBottom: 24 }}>
      <AppGridContainer>
        <Grid xs={12} md={8} item>
          <Box sx={{ display: 'flex', p: 4, alignItems: 'center' }}>
            <img src={'/assets/images/ecommerce/gift.png'} alt='confirm' />
            <Box p={4}>
              <Box
                component='h3'
                sx={{ color: 'primary.main', mb: 0.5, fontSize: 16 }}
              >
                Order placed for {order.totalAmount}
                $
              </Box>
              <Box sx={{ fontSize: 14 }}>
              One of our representatives will contact you to gather more details and arrange for delivery and payment
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={4} item>
        <Box sx={{ px: 4 }}>
            <Box sx={{ my: 4, fontSize: 16, fontWeight: Fonts.BOLD }}>
              Delivery Address
            </Box>
            <Box sx={{ fontSize: 14, fontWeight: Fonts.BOLD }}>
              {address.name}
            </Box>
            <Box sx={{ fontSize: 14, fontWeight: Fonts.REGULAR }}>
              {address.addressLine}, {address.city}, {address.pin}
            </Box>
          </Box>

        </Grid>
      </AppGridContainer>
    </AppCard>
  );
};

export default OrderPlaced;

OrderPlaced.propTypes = {
  orderItems: PropTypes.array,
};
