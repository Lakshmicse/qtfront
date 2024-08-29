import React, { useState } from 'react';
import { Typography, Grid, IconButton, TextField, Box, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useCreateCustomizationMutation, useGetCustomizationQuery } from '@crema/Slices/customizationApiSlice';
import { styled } from '@mui/system';

const Input = styled('input')({
  display: 'none',
});

const ImagePreview = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '8px',
  maxWidth: '300px',
  margin: '0 auto',
});

const Customize = ({variantId, handleCustomizeSave}) => {
  const [shoulderLogo, setShoulderLogo] = useState(null);
  const [frontLogo, setFrontLogo] = useState(null);
  const [backLogo, setBackLogo] = useState(null);
  const [frontText, setFrontText] = useState('');
  const [backText, setBackText] = useState('');
  const [createCustomization] = useCreateCustomizationMutation();

  // const { variantId } = useParams();
  const { data: productData } = useGetCustomizationQuery(variantId);
  const handleLogoChange = (setter) => (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setter(file);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('shoulderLogo', shoulderLogo);
    formData.append('frontLogo', frontLogo);
    formData.append('backLogo', backLogo);
    formData.append('frontText', frontText);
    formData.append('backText', backText);
    formData.append('productVariantId', variantId);

    try {
      const result = await createCustomization(formData).unwrap();
      handleCustomizeSave(result);
      alert('Customization saved successfully!');
    } catch (error) {
      alert('Failed to save customization.');
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        boxShadow: 1,
      }}
    >
      <Grid container spacing={2}>
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Box textAlign="center">
            <Typography textAlign="left" variant="h2" color="red" gutterBottom>
              Black Safety T-shirt
            </Typography>
            <Typography textAlign="left" variant="h3" gutterBottom>
              SKU: KM5047
            </Typography>
            <ImagePreview
              src="https://cdnimages.opentip.com/thumbs/7GAE/7GAE-DKGAE18_YELLOW_576_576.jpg"
              alt="T-shirt"
            />
          </Box>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6}>
          <Typography variant="h1" color="chocolate" gutterBottom>
            Customize your Shirt
          </Typography>
          <br />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h3">Shoulder Logo:</Typography>
              <label htmlFor="shoulder-logo-upload">
                <Input
                  accept="image/*"
                  id="shoulder-logo-upload"
                  type="file"
                  onChange={handleLogoChange(setShoulderLogo)}
                />
                {shoulderLogo ? (
                  <ImagePreview src={URL.createObjectURL(shoulderLogo)} alt="Shoulder Logo Preview" />
                ) : (
                  <IconButton color="primary" aria-label="upload shoulder logo" component="span">
                    <FileUploadOutlinedIcon />
                  </IconButton>
                )}
              </label>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">Front Logo:</Typography>
              <label htmlFor="front-logo-upload">
                <Input
                  accept="image/*"
                  id="front-logo-upload"
                  type="file"
                  onChange={handleLogoChange(setFrontLogo)}
                />
                {frontLogo ? (
                  <ImagePreview src={URL.createObjectURL(frontLogo)} alt="Front Logo Preview" />
                ) : (
                  <IconButton color="primary" aria-label="upload front logo" component="span">
                    <FileUploadOutlinedIcon />
                  </IconButton>
                )}
              </label>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">Back Logo:</Typography>
              <label htmlFor="back-logo-upload">
                <Input
                  accept="image/*"
                  id="back-logo-upload"
                  type="file"
                  onChange={handleLogoChange(setBackLogo)}
                />
                {backLogo ? (
                  <ImagePreview src={URL.createObjectURL(backLogo)} alt="Back Logo Preview" />
                ) : (
                  <IconButton color="primary" aria-label="upload back logo" component="span">
                    <FileUploadOutlinedIcon />
                  </IconButton>
                )}
              </label>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">Front Text:</Typography>
              <TextField
                variant="outlined"
                fullWidth
                value={frontText}
                onChange={(e) => setFrontText(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">Back Text:</Typography>
              <TextField
                variant="outlined"
                fullWidth
                value={backText}
                onChange={(e) => setBackText(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={handleSubmit}>
                Save
              </Button>
             
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customize;
