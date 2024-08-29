import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DiscountIcon from '@mui/icons-material/Discount';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MessageIcon from '@mui/icons-material/Message';
import { Box, Typography } from '@mui/material';

const PromotionImage = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'red',
        height: { xs: 'auto', sm: '250px' }, // Auto height for mobile, fixed height for larger screens
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Column on mobile, row on larger screens
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px', // Increased padding for mobile
        gap: { xs: 4, sm: 0 }, // Adds spacing between items in mobile view
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <LocalShippingIcon sx={{ fontSize: 60 }} />
        <Typography variant="h6" sx={{ mt: 1, textAlign: 'center' }}> {/* Adjusted typography variant for mobile */}
          Swift Delivery
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, textAlign: 'center' }}> {/* Smaller text for mobile */}
          Fast Shipping on all tyres
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <DiscountIcon sx={{ fontSize: 60 }} />
        <Typography variant="h6" sx={{ mt: 1, textAlign: 'center' }}>
          Special Offers
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, textAlign: 'center' }}>
          Explore our special offers
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <TaskAltIcon sx={{ fontSize: 60 }} />
        <Typography variant="h6" sx={{ mt: 1, textAlign: 'center' }}>
          Best Price
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, textAlign: 'center' }}>
          Beat Any Price
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <MessageIcon sx={{ fontSize: 60 }} />
        <Typography variant="h6" sx={{ mt: 1, textAlign: 'center' }}>
          Chat Facility
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, textAlign: 'center' }}>
          Talk to a Real Person
        </Typography>
      </Box>
    </Box>
  );
};

export default PromotionImage;
