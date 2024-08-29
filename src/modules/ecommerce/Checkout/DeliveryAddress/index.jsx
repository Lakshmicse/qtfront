
import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, MenuItem, DialogContentText, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import AppList from '@crema/components/AppList';
import AddressCell from './AddressCell';
import { useGetAddressesQuery, useCreateAddressMutation, useUpdateAddressMutation, useDeleteAddressMutation } from '@crema/Slices/addressSlice';



const AddressCrudPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  
  const [createAddress] = useCreateAddressMutation();
  const [updateAddress] = useUpdateAddressMutation();
  const [deleteAddress] = useDeleteAddressMutation();

  const { data, isLoading, refetch } = useGetAddressesQuery({ page, limit });


  if (isLoading) {
    return <Box>Loading...</Box>;
  }
console.log(data);
  const handleOpen = (address) => {
    setCurrentAddress(address || {
      addressType: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      phoneNumber: ''
    });
    setEditMode(!!address); // Switch to edit mode if an address is passed
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentAddress(null);
  };

  const handleSave = async () => {
    if (editMode) {
      try {
        await updateAddress({ id: currentAddress.id, ...currentAddress });
        refetch(); // Refresh data to reflect changes
      } catch (error) {
        console.error("Failed to update address:", error);
      }
    } else {
      try {
        await createAddress(currentAddress);
        refetch();
        console.log("Address created successfully");
      } catch (error) {
        console.error("Failed to create address:", error);
      }
    }
    handleClose();
  };

  const handleDelete = async () => {
    try {
      await deleteAddress(deleteId); 
      setConfirmDeleteOpen(false); 
      refetch(); 
    } catch (error) {
      console.error("Failed to delete the address:", error);
    }
  };

  const handleDeleteConfirmation = (id) => {
    setDeleteId(id);
    setConfirmDeleteOpen(true); // Open the confirmation dialog
  };

  const handleConfirmClose = () => {
    setConfirmDeleteOpen(false); // Close the confirmation dialog
    setDeleteId(null);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h2" gutterBottom>Delivery Address</Typography>
      {data?.addresses?.length === 0 && (
        <Button variant="contained" color="primary" onClick={() => handleOpen()}>
          Add New Address
        </Button>
      )}
      
      {/* Replace DataGrid with AppList and AddressCell */}
      <AppList
        delay={200}
        data={data?.addresses || []} // Pass the addresses array here
        renderRow={(address) => (
          <AddressCell
            key={address.id}
            address={address} // Pass the entire address object
          
            handleOpen={handleOpen}
            // Function to update the selected address ID
            // Handle delete action
          />
        )}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editMode ? 'Edit Address' : 'Add New Address'}</DialogTitle>
        <DialogContent>
          <TextField
            select
            label="Address Type"
            value={currentAddress?.addressType || ''}
            onChange={(e) => setCurrentAddress({ ...currentAddress, addressType: e.target.value })}
            fullWidth
            margin="dense"
          >
            <MenuItem value="Shipping">Shipping</MenuItem>
            <MenuItem value="Billing">Billing</MenuItem>
          </TextField>
          <TextField
            label="Address Line 1"
            value={currentAddress?.addressLine1 || ''}
            onChange={(e) => setCurrentAddress({ ...currentAddress, addressLine1: e.target.value })}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Address Line 2"
            value={currentAddress?.addressLine2 || ''}
            onChange={(e) => setCurrentAddress({ ...currentAddress, addressLine2: e.target.value })}
            fullWidth
            margin="dense"
          />
          <TextField
            label="City"
            value={currentAddress?.city || ''}
            onChange={(e) => setCurrentAddress({ ...currentAddress, city: e.target.value })}
            fullWidth
            margin="dense"
          />
          <TextField
            label="State"
            value={currentAddress?.state || ''}
            onChange={(e) => setCurrentAddress({ ...currentAddress, state: e.target.value })}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Postal Code"
            value={currentAddress?.postalCode || ''}
            onChange={(e) => setCurrentAddress({ ...currentAddress, postalCode: e.target.value })}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Country"
            value={currentAddress?.country || ''}
            onChange={(e) => setCurrentAddress({ ...currentAddress, country: e.target.value })}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Phone Number"
            value={currentAddress?.phoneNumber || ''}
            onChange={(e) => setCurrentAddress({ ...currentAddress, phoneNumber: e.target.value })}
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleSave} color="primary">{editMode ? 'Update' : 'Save'}</Button>
        </DialogActions>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog
        open={confirmDeleteOpen}
        onClose={handleConfirmClose}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this address?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmClose} color="secondary">Cancel</Button>
          <Button onClick={handleDelete} color="primary">Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddressCrudPage;

