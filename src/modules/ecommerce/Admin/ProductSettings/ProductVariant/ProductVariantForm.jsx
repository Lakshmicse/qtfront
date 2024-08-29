import React, { useState, useEffect } from 'react';
import { useAddProductVariantMutation, useUpdateProductVariantMutation } from '@crema/Slices/productVariantSlice';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Typography, Checkbox, ListItemText, Divider } from '@mui/material';
import { useDropzone } from 'react-dropzone';

const ProductVariantForm = ({ variantToEdit, onSave, selectedProd }) => {
  const [addVariant] = useAddProductVariantMutation();
  const [updateVariant] = useUpdateProductVariantMutation();

  const [formValues, setFormValues] = useState({
    sku: '',
    type: '',
    color: [],
    size: [],
    price: '',
    image: null,
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (variantToEdit) {
      setFormValues({
        sku: variantToEdit.sku || '',
        type: variantToEdit.type || '',
        color: variantToEdit.color || [],
        size: variantToEdit.size || [],
        price: variantToEdit.price || '',
        image: variantToEdit.image || null,
      });
    }
  }, [variantToEdit]);
  

  const validate = () => {
    let errors = {};

    if (!formValues.sku) errors.sku = 'SKU is required';
    if (!formValues.type) errors.type = 'Type is required';
    if (formValues.color.length === 0) errors.color = 'At least one color is required';
    if (formValues.size.length === 0) errors.size = 'At least one size is required';
    if (!formValues.price || formValues.price <= 0) errors.price = 'Price must be a positive number';
    if (!formValues.image) errors.image = 'An image is required';

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    if (!validate()) return;

    const formData = new FormData();
    formData.append('sku', formValues.sku);
    formData.append('type', formValues.type);
    formData.append('color', JSON.stringify(formValues.color));
    formData.append('size', JSON.stringify(formValues.size));
    formData.append('price', formValues.price);
    formData.append('productId', selectedProd.id);
    if (formValues.image) {
      formData.append('image', formValues.image);
    }

    try {
      if (variantToEdit) {
        await updateVariant({ id: variantToEdit.id, body: formData });
      } else {
        await addVariant(formData);
      }

      onSave();
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setFormValues({ ...formValues, image: file });
    },
  });

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
      <TextField
        label="SKU"
        name="sku"
        value={formValues.sku}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={{ m: 1 }}
        error={Boolean(formErrors.sku)}
        helperText={formErrors.sku}
      />
<br />
<FormControl sx={{ m: 1, width: '210px' }}>
  <InputLabel>Type</InputLabel>
  <Select
    name="type"
    value={formValues.type}
    onChange={handleChange}
    label="Type"
    error={Boolean(formErrors.type)}
  >
    <MenuItem value={'V-neck'}>V-neck</MenuItem>
    <MenuItem value={'Crew Neck'}>Crew Neck</MenuItem>
    <MenuItem value={'Polo'}>Polo</MenuItem>
  </Select>
  {formErrors.type && <Typography color="error">{formErrors.type}</Typography>}
</FormControl>

      <FormControl fullWidth sx={{ m: 1, width: '210px' }}>
        <InputLabel>Color</InputLabel>
        <Select
          name="color"
          multiple
          value={formValues.color}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
          error={Boolean(formErrors.color)}
        >
          {['Red', 'Blue', 'Green'].map((color) => (
            <MenuItem key={color} value={color}>
              <Checkbox checked={formValues.color.indexOf(color) > -1} />
              <ListItemText primary={color} />
            </MenuItem>
          ))}
        </Select>
        {formErrors.color && <Typography color="error">{formErrors.color}</Typography>}
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 , width: '210px'}}>
        <InputLabel>Size</InputLabel>
        <Select
          name="size"
          multiple
          value={formValues.size}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
          error={Boolean(formErrors.size)}
        >
          {['S', 'M', 'L', 'XL', 'XXL', '3XL'].map((size) => (
            <MenuItem key={size} value={size}>
              <Checkbox checked={formValues.size.indexOf(size) > -1} />
              <ListItemText primary={size} />
            </MenuItem>
          ))}
        </Select>
        {formErrors.size && <Typography color="error">{formErrors.size}</Typography>}
      </FormControl>
      <br />
      <TextField
        label="Price"
        name="price"
        value={formValues.price}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={{ m: 1 }}
        error={Boolean(formErrors.price)}
        helperText={formErrors.price}
      />

      <Box
        {...getRootProps()}
        sx={{
          border: '2px dashed #eeeeee',
          padding: '16px',
          textAlign: 'center',
          marginTop: '16px',
          cursor: 'pointer',
        }}
      >
        <input {...getInputProps()} />
        <Typography>Drag 'n' drop an image here, or click to select one</Typography>
      </Box>

      {formValues.image && (
        <Box sx={{ m: 1, mt: 2 }}>
          <Typography variant="subtitle1">Preview:</Typography>
          <img src={URL.createObjectURL(formValues.image)} alt="Product" style={{ width: '100%', maxWidth: '200px' }} />
        </Box>
      )}

      <Button type="submit" variant="contained" color="primary" sx={{ m: 1 }}>
        {variantToEdit ? 'Update' : 'Add'} Product Variant
      </Button>
    </Box>
  );
};

export default ProductVariantForm;
