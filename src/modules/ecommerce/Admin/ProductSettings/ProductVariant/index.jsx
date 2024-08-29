// src/App.js
import React, { useState } from 'react';
import ProductVariantList from './ProductVariantList';
import ProductVariantForm from './ProductVariantForm';
import { Grid, Typography } from '@mui/material';
import AppCard from "@crema/components/AppCard";
import { width } from '@mui/system';


function ProductVariant({selectedProd}) {
  const [variantToEdit, setVariantToEdit] = useState(null);

  const handleEdit = (variant) => {
    setVariantToEdit(variant);
  };

  const handleSave = () => {
    setVariantToEdit(null);
  };

  return (
    
    <Grid item xs={12} lg={8}>
      <AppCard  >
      <Typography variant="h4"  gutterBottom>
        Product Variant Management
      </Typography>
      <ProductVariantForm variantToEdit={variantToEdit} onSave={handleSave} selectedProd={selectedProd}/>
      <ProductVariantList onEdit={handleEdit} />
      </AppCard>
    </Grid>
    
  );
}

export default ProductVariant;
