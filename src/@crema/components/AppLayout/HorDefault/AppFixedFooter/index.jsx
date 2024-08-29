import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';

const AppFixedFooter = () => {
  return (
    <Box sx={{ 
      backgroundColor: 'white', 
      padding: '40px 20px', 
      width: '100%', 
      boxShadow: '0px -4px 6px rgba(0, 0, 0, 0.1)', // Added shadow to the footer
      borderTop: '1px solid #E0E0E0'
    }}>
      <Grid container spacing={4} justifyContent="space-between">
        
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <img 
              src="../src/assets/pavimages/QT2.png" 
              alt="Budget Truck Tires Logo" 
              style={{ 
                height: '60px',  // Increased height for the image
                marginBottom: '15px',
                borderRadius: '8px', // Added border radius for rounded corners
                transition: 'transform 0.3s ease-in-out', // Smooth hover effect
                '&:hover': {
                  transform: 'scale(1.1)', // Slightly increase the size on hover
                }
              }} 
            />
            <Typography variant="body1" textAlign="center" color="textSecondary">
              At QTWholesales.COM there is every type of truck tire you can ever want.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h2" gutterBottom>
             Links
          </Typography>
          <Box>
            <Link href="#" color="inherit" display="block" underline="hover">FAQs</Link>
            <Link href="#" color="inherit" display="block" underline="hover">Return Policy</Link>
            <Link href="#" color="inherit" display="block" underline="hover">Privacy Policy</Link>
            {/* <Link href="#" color="inherit" display="block" underline="hover">Shipping Policy</Link>
            <Link href="#" color="inherit" display="block" underline="hover">Commercial Credit Terms</Link>
            <Link href="#" color="inherit" display="block" underline="hover">Terms & Conditions</Link>
            <Link href="#" color="inherit" display="block" underline="hover">Disclaimers</Link> */}
            <Link href="#" color="inherit" display="block" underline="hover">Call: 929-489-8830 (Contact Information)</Link>
          </Box>
        </Grid>

        
      </Grid>

      <Box
  sx={{
    marginTop: '20px',
    borderTop: '1px solid #E0E0E0',
    paddingTop: '20px',
    textAlign: 'center',
    backgroundColor: '#F0464D',
    color: 'white',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Added shadow to the footer bottom section
    py: 3, // Added padding for a more balanced look
  }}
>
  <Typography 
    variant="h5" 
    sx={{
      fontWeight: 'bold', // Increased font weight for emphasis
      letterSpacing: '0.8px', // Slightly increased letter spacing for readability
      lineHeight: 1.5, // Improved line height for readability
    }}
  >
    © 2024 QT Wholesales. All rights reserved.
  </Typography>
</Box>

    </Box>
  );
};

export default AppFixedFooter;
