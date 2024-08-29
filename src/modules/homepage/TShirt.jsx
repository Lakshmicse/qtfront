import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  Divider,
  Chip,
  Button
} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Array of image URLs
const productImages = [
  'https://cdnimages.opentip.com/thumbs/RFSV/RFSV-AS80671_13_576_576.jpg',
  'https://cdnimages.opentip.com/thumbs/RFSV/RFSV-AS80671_YELLOWBLACK_576_576.jpg',
  'https://cdnimages.opentip.com/thumbs/RFSV/RFSV-AS80671_11_576_576.jpg'
];

const TShirt = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        style={{ fontSize: '2.5rem', marginBottom: 50 }}
      >
        Safety T-Shirt
      </Typography>
      <Divider sx={{ marginTop: 4, marginBottom: 4, backgroundColor: '#F0464D' }} />
      
      <Card 
        sx={{ maxWidth: 245 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Carousel 
          showThumbs={false} 
          showStatus={false} 
          autoPlay={isHovering}
          interval={1000}
          infiniteLoop={true}
        >
          {productImages.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              height="50"
              image={image}
              alt={`Product ${index + 1}`}
            />
          ))}
        </Carousel>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CHKOKKO
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Printed T-Shirt With Joggers
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Rating value={3.9} precision={0.1} readOnly size="small" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              (296 reviews)
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Typography variant="h6" component="span">
              Rs. 1199
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ textDecoration: 'line-through', ml: 1 }}
            >
              Rs. 2999
            </Typography>
            <Chip 
              label="60% OFF" 
              color="secondary" 
              size="small" 
              sx={{ ml: 1 }}
            />
          </Box>

          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              mt: 3 
            }}
          >
            <Button
              variant="contained"
              color="error"
              startIcon={<ShoppingCartIcon />}
              sx={{
                background: "red",
                borderRadius: "50px",
                padding: "10px 20px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  background: "green",
                  transform: "scale(1.05)",
                  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
                },
                "& .MuiButton-startIcon": {
                  color: "white",
                },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default TShirt;
