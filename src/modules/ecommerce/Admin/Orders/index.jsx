import React, { useEffect, useState } from 'react';
import AppsContainer from '@crema/components/AppsContainer';
import { useIntl } from 'react-intl';
import { Hidden, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import AppsPagination from '@crema/components/AppsPagination';

import AppSearchBar from '@crema/components/AppSearchBar';
import OrderTable from './OrderTable';


import { useGetOrdersQuery, useDeleteOrderMutation } from '@crema/Slices/orderSlice';


const Orders = () => {
  const { messages } = useIntl();
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const itemsPerPage = 10;

  const { data, error, isLoading, refetch } = useGetOrdersQuery({ 
    page, 
    limit: itemsPerPage,
    search: searchQuery,
  });

  const [deleteOrder] = useDeleteOrderMutation();

  const onPageChange = (event, value) => {
    setPage(value);
  };

  const onSearchOrder = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  const handleClickOpen = (orderId) => {
    setSelectedOrderId(orderId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedOrderId(null);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteOrder(selectedOrderId).unwrap();
      refetch(); // Re-fetch orders after deletion
    } catch (error) {
      console.error('Failed to delete the order:', error);
    } finally {
      handleClose();
    }
  };
  if(isLoading) return <>Loading</>

  return (
    <AppsContainer title={messages['eCommerce.recentOrders']} fullView>
      <AppsHeader>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          width={1}
          justifyContent='space-between'
        >
          <AppSearchBar
            iconPosition='right'
            overlap={false}
            onChange={(event) => onSearchOrder(event.target.value)}
            placeholder={messages['common.searchHere']}
          />
          <Box display='flex' flexDirection='row' alignItems='center'>
         
            <Hidden smDown>
              <AppsPagination
                rowsPerPage={10}
                count={data?.totalResults}
                page={page}
                onPageChange={onPageChange}
              />
            </Hidden>
          </Box>
        </Box>
      </AppsHeader>

      <AppsContent
        sx={{
          paddingTop: 2.5,
          paddingBottom: 2.5,
        }}
      >
         <OrderTable 
          orderData={data?.orders || []} 
          onDeleteOrder={handleClickOpen} 
          loading={isLoading} 
        />
      </AppsContent>

      <Hidden smUp>
        <AppsPagination
          rowsPerPage={10}
          count={data?.totalResults}
          page={page}
          onPageChange={onPageChange}
        />
      </Hidden>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          {"Confirm"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {
              "Confirm Order Item Delete"
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {messages['common.cancel']}
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary">
            {messages['common.delete']}
          </Button>
        </DialogActions>
      </Dialog>
    </AppsContainer>
  );
};

export default Orders;
