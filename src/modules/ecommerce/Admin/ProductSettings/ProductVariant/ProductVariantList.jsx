import React from 'react';
import { useGetProductVariantsQuery, useDeleteProductVariantMutation } from '@crema/Slices/productVariantSlice';
import { Button, CircularProgress, List, ListItem, Typography, Box, IconButton, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductVariantList = ({ onEdit }) => {
  const { data, error, isLoading } = useGetProductVariantsQuery();
  const [deleteVariant] = useDeleteProductVariantMutation();

  if (isLoading) return <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />;
  if (error) return <Typography color="error">Error loading product variants</Typography>;

  return (
    <List sx={{ width: '50%', bgcolor: 'background.paper' }}>
      {data.variants.map((variant) => (
        <ListItem key={variant.id} sx={{ mb: 2, p: 2 }} component={Paper} elevation={3}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {variant.image && (
                <img
                  src={variant.image}
                  alt={variant.type}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              )}
              <Typography variant="body1">
                <strong>{variant.type}</strong> - {variant.color} - {variant.size} - <strong>${variant.price}</strong>
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={() => onEdit(variant)} color="primary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => deleteVariant(variant.id)} color="secondary">
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductVariantList;
