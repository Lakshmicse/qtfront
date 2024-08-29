
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Button,
} from '@mui/material';
import { mediaUrl } from '@crema/constants/AppConst.jsx';
import { addItemToCart } from '@crema/Slices/cartSlice'; // Adjust the path as needed
import '../samplePages/card.css';
const Product = ({ product: item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClick = (productId) => {
    navigate(`/ecommerce/product_detail/${productId}`);
  };

  const handleAddToCart = (product) => {
    try {
      dispatch(addItemToCart(product));
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        className="bg-white rounded-bordered pb-0"
        sx={{ transform: 'scale(0.95)', boxShadow: 3 }}
        onClick={() => handleCardClick(item.id)}
      >
        <Grid container spacing={2} className="buy-cheaper__item">
          <Grid item xs={12} lg={8}>
            <CardContent>
              <Typography
                variant="h6"
                className="fw-medium"
                sx={{ fontSize: '1.2rem' }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: '1rem', mt: 1 }}
              >
                Ref.: Tomket Sport 275/40 ZR19 105Y XL
              </Typography>
              <Box className="buy-cheaper__content-focus fw-medium">
                <Grid container>
                  <Grid item xs={6} lg={8}>
                    <Typography
                      variant="body1"
                      color="error"
                      sx={{ fontSize: '1.1rem' }}
                    >
                      Discounted Price
                    </Typography>
                  </Grid>
                  <Grid item xs={6} lg={4} className="text-end text-nowrap">
                    <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                      <span className="price__amount--devise">$</span>
                      <span className="price__amount--value">{item.mrp}</span>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Grid>
          <Grid item xs={12} lg={4} className="text-center mx-auto pe-0">
            <CardMedia
              component="img"
              src={`${mediaUrl}/product/${item.images[0]?.src}`}
              alt="Tomket Sport"
              sx={{ width: { xs: 130, lg: 170 }, height: { xs: 130, lg: 150 }, mt: { xs: 2, lg: 4 } }}
              loading="lazy"
            />
          </Grid>
        </Grid>
        <Box className="skew-gradient fw-medium">
          <Button
            variant="contained"
            color="error"
            sx={{ margin: 2 }}
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(item);
            }}
          >
            {'Add to Cart'}
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};

export default Product;
