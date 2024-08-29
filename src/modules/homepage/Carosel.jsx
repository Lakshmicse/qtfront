import React, { useState, useEffect } from 'react';
import { Box, Stack, IconButton, useTheme, useMediaQuery } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import image1 from "../../../src/assets/homeimages/7.png";
import image2 from "../../../src/assets/homeimages/8.png";

const images = [
  { imgPath: image1, label: 'Image 1' },
  { imgPath: image2, label: 'Image 2' },
];

const Carousel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton 
          onClick={handleBack} 
          sx={{ 
            position: 'absolute', 
            left: 8, 
            zIndex: 2,
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.3)',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.5)',
            }
          }}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <Box
          component="img"
          sx={{
            height: { xs: '30vh', sm: '40vh', md: '75vh' },
            display: 'block',
            margin: 'auto',
            width: { xs: '90%', sm: '95%', md: '100%' },
            objectFit: 'contain',
            maxWidth: '100%',
          }}
          src={images[activeStep].imgPath}
          alt={images[activeStep].label}
        />
        <IconButton 
          onClick={handleNext} 
          sx={{ 
            position: 'absolute', 
            right: 8, 
            zIndex: 2,
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.3)',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.5)',
            }
          }}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Stack>
      <Box
        sx={{
          position: 'absolute',
          bottom: 8,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            component="span"
            sx={{
              width: 8,
              height: 8,
              margin: '0 4px',
              borderRadius: '50%',
              display: 'inline-block',
              backgroundColor: index === activeStep ? 'primary.main' : 'grey.300',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;