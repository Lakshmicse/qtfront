import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import image1 from "../../../src/assets/homeimages/qt support.jpg";
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); // Replace '/contact' with your actual contact page route
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Add opacity to the image
          zIndex: 1, // Make sure the overlay is on top of the image
        }}
      />
      <img
        src={image1}
        alt="Support"
        style={{
          width: "100%",
          objectFit: "cover",
          display: "block",
          opacity: 0.7, // Adjust the image opacity
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2, // Ensure the text and button are above the image overlay
          p: 2,
        }}
      >
        <Grid 
          container 
          spacing={2} 
          sx={{ 
            textAlign: "center", 
            maxWidth: 600, 
            margin: "0 auto", 
            px: { xs: 2, sm: 4 },
            py: { xs: 4, sm: 6 },
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h1"
              component="div"
              gutterBottom
              style={{ fontSize: "1.5rem" }}
              color="white"
              sx={{
                fontSize: { xs: "0.6rem", sm: "0.4rem" },
              }}
            >
              Need A Support
            </Typography>
            <Typography 
              variant="body1" 
              paragraph  
              color="white"
              sx={{
                fontSize: { xs: "0.4rem", sm: "1rem" },
              }}
            >
              Need assistance selecting the perfect tire? Our team of dedicated
              experts is here to help. Reach out to us via{" "}
              <a
                href="mailto:helpdesk@qtwholesales.com"
                style={{ color: "white", textDecoration: "underline" }}
              >
                helpdesk@qtwholesales.com
              </a>
              , and we'll gladly solve your problems and provide guidance every
              step of the way. We're passionate about what we do and committed
              to offering exceptional service.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
             
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px", // Rounded corners
                padding: "10px 20px", // Adjust padding as needed
                "&:hover": {
                  backgroundColor: "#f5f5f5", // Light grey on hover
                },
              }}
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Support;
