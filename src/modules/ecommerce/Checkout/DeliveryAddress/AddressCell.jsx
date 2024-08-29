
import React from 'react';
import { Box, Button } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';


import { useLayoutActionsContext } from '@crema/context/AppContextProvider/LayoutContextProvider';

const AddressCell = ({ address, handleOpen }) => {

  
const { setSelectedAddress } = useLayoutActionsContext();

setSelectedAddress(address);

    const isActive = true; // Assuming isActive is true for demonstration purposes

    return (
      <Box
        onClick={() => setSelectedAddress(address)}
        className='item-hover'
        sx={{
          border: 1,
          px: 5,
          py: 2,
          mb: 4,
          borderRadius: 4,
          borderColor: '#D9DBE3',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
          }}
        >
          <Box sx={{ mx: 3.5 }}>{address.name}</Box>
          <Box>{address.phoneNumber}</Box>
          {isActive ? (
            <Box sx={{ ml: 'auto' }}>
              <IconButton
                size='small'
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the select function
                  handleOpen(address);  // Open the edit dialog with the current address data
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
            </Box>
          ) : null}
        </Box>
        <Box
          sx={{ fontSize: 14, fontWeight: Fonts.REGULAR, ml: 14, mt: -2, mb: 4 }}
        >
          {address.addressLine1}, <br />
          {address.addressLine1}
          {address.city},  
          <br />
          {address.postalCode}
        </Box>
        {isActive ? (
          <Box
            sx={{ fontSize: 14, fontWeight: Fonts.REGULAR, ml: 14, mt: 1, mb: 4 }}
          >
            <Button variant='contained' color='primary'>
              Deliver Here
            </Button>
          </Box>
        ) : null}
      </Box>
    );
};

export default AddressCell;

AddressCell.propTypes = {
  address: PropTypes.object.isRequired,
  selectedAddress: PropTypes.object.isRequired,
  setSelectAddress: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};
