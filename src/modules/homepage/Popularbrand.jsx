import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  Divider,
} from '@mui/material';
import { useGetProductsQuery } from '@crema/Slices/productsSlice';
import Product from './Product';

const Popularbrand = () => {
  const [page] = useState(1);
  const itemsPerPage = 10;

  const { data, isLoading } = useGetProductsQuery({ page, limit: itemsPerPage });
  const navigate = useNavigate();
 
  const handleCardClick = (productId) => {
    navigate(`/ecommerce/product_detail/${productId}`);
  };

  const handleAddToCart = async (product) => {
    try {
      const result = await addItemToCart({ product, quantity: 1 }).unwrap(); // Unwrap the result to get data
      console.log('Item added to cart successfully:', result);
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

  const productsToShow = data?.products.slice(0, 3);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        style={{ fontSize: '2.5rem', marginBottom: 50 }}
      >
        Truck Tyres
      </Typography>
      <Divider sx={{ marginTop: 4, marginBottom: 4, backgroundColor: '#F0464D' }} />
      <Grid container spacing={2}>
        {isLoading ? (
          <CircularProgress />
        ) : productsToShow?.length > 0 ? (
          productsToShow.map((item, index) => (
            <Product 
              product={item} 
              key={index} 
              onCardClick={() => handleCardClick(item.id)} 
            />
          ))
        ) : (
          <Typography>No products available.</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Popularbrand;
