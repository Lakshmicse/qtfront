import React, { useRef } from 'react';
import { Box, Grid } from '@mui/material';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import AppCard from '@crema/components/AppCard';




const ProductContent = () => {
  return (
      <Grid item xs={12}>
          <AppCard sx={{width:"500px"}} >
            <AppTextField
              name='title'
              variant='outlined'
              sx={{
                width: '100%',
                my: 2,
              }}
              label='Product Name'
            />

          
          </AppCard>
      </Grid>
  );
};

export default ProductContent;

