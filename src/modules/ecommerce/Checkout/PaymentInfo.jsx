  import React, { useState } from 'react';
  import AppCard from '@crema/components/AppCard';
  import { Box } from '@mui/material';
  import { Fonts } from '@crema/constants/AppEnums';
  import Checkbox from '@mui/material/Checkbox';
  import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
  import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
  import Button from '@mui/material/Button';
  import TextField from '@mui/material/TextField';
  
  import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';





  import { useCreateOrderMutation, } from '@crema/Slices/orderSlice';
  import { useNavigate } from 'react-router-dom';

  import { useSelector, useDispatch } from 'react-redux';
  import { clearCart } from '@crema/Slices/cartSlice'; // Adjust the path as needed



  const PaymentInfo = () => {
   
    // Move the hook to the top level of the component
    const [createOrder,  { data, error, isLoading, isSuccess }] = useCreateOrderMutation();
    const navigate = useNavigate(); // Initialize useNavigate
    
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
      dispatch(clearCart());
    };
    if(isSuccess){
   
      handleClearCart();
      navigate('/ecommerce/confirmation/'+data.id);
    }
    const {selectedAddress} = useLayoutContext();

    console.log(selectedAddress);

    return (
      <AppCard
        sxStyle={{ mt: 6 }}
        footerStyle={{ marginTop: 2.5 }}
        title={
          <Box sx={{ fontSize: 16, fontWeight: Fonts.BOLD }}>Order</Box>
        }
        footer={
          <Button variant='contained' color='primary' fullWidth onClick={async ()=>{
            await createOrder({selectedAddress, cartItems});

            
            }}>
          Place Order now
        </Button>
        
        }
      >
      
     
      </AppCard>
    );
  };

  export default PaymentInfo;
