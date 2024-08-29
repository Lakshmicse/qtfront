import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Grid } from '@mui/material';
import cimg11 from "../../../src/assets/homeimages/qt support.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    tireType: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can handle form submission here (e.g., send data to server)
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '500px',
          overflow: 'hidden',
        }}
      >
        <img
          src={cimg11}
          alt="cimg 11"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
           // zIndex: -1, // Ensure the image stays behind the overlay
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            //backgroundColor: 'rgba(0, 0, 0, 0.5)',
            
            p: 4,
            boxSizing: 'border-box',
          }}
        >
          {/* <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, fontSize: "50px", paddingRight:"80rem"}}>
            Contact Us
          </Typography>
          <br/>
          <Typography variant="h6" sx={{ mb: 3, fontSize: "25px", paddingRight:"57rem"}}>
            We are happy to answer any questions you may have!
          </Typography> */}
        </Box>
      </Box>

      {/* Contact Information Section */}
      <Container
        sx={{
          maxWidth: 'md',
          marginTop: 4,
          padding: 2,
          textAlign: 'center',
          
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontSize: "50px" }}>
          Call: 929-489-8830
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 ,}}>
          Call & Live Chat Availability Hours:
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 , fontWeight: 'bold',fontSize:"20px"}}>
          Monday to Friday: 9:00 AM - 6:00 PM (EST)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 ,fontSize:"20px",fontWeight: 'bold'}}>
          Saturday & Sunday: Closed
        </Typography>
        <Typography variant="body1" sx={{fontSize:"20px",fontWeight: 'bold'}}>
          Email: <a href="mailto:webaccounts@budgettrucktires.com">qtwholesales@trucktires.com</a>
        </Typography>
      </Container>

     
    </>
  );
};

export default ContactPage;
