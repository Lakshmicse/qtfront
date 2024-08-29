import React, { useState } from 'react';
import { Box, Grid, Hidden, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Slide } from '@mui/material';
import { useIntl } from 'react-intl';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import AppCard from '@crema/components/AppCard';
import AppSearchBar from '@crema/components/AppSearchBar';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import AppsPagination from '@crema/components/AppsPagination';
import ListingTable from './ListingTable';
import FilterItem from './FilterItem';
import { useGetProductsQuery, useDeleteProductMutation } from '@crema/Slices/productsSlice';
import { Fonts } from '@crema/constants/AppEnums';

const ProductListing = () => {
  const { messages } = useIntl();
  const [filterData, setFilterData] = useState({
    title: '',
    inStock: [],
    mrp: { start: 0, end: 30000 },
  });
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const { data, error, isLoading , refetch} = useGetProductsQuery({ page, limit: itemsPerPage });

  const [deleteProduct] =  useDeleteProductMutation();

  if(isLoading){
    return <>Loading</>;
  }

  const totalPages = data ? Math.ceil(data.totalResults / itemsPerPage) : 0;

  const onPageChange = (event, value) => {
    setPage(value);
  };

  const handleDeleteClick = (productId) => {
    setSelectedProductId(productId);
    
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    // Call your delete API or function here
    deleteProduct(selectedProductId);
    refetch();
    console.log(`Product with ID ${selectedProductId} deleted.`);
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
    setSelectedProductId(null);
  };

  return (
    <>
      <Box
        component='h2'
        variant='h2'
        sx={{
          fontSize: 16,
          color: 'text.primary',
          fontWeight: Fonts.SEMI_BOLD,
          mb: {
            xs: 2,
            lg: 4,
          },
        }}
      >
        {messages['sidebar.ecommerceAdmin.productListing']}
      </Box>
      <AppGridContainer spacing={7}>
        <Slide direction='right' in mountOnEnter unmountOnExit>
          <Grid item xs={12} lg={9}>
            <AppCard
              title={
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
                      onChange={(event) => searchProduct(event.target.value)}
                      placeholder={messages['common.searchHere']}
                    />
                    <Box
                      display='flex'
                      flexDirection='row'
                      alignItems='center'
                      justifyContent='flex-end'
                    >
                      <Hidden smDown>
                        <AppsPagination
                          rowsPerPage={10}
                          count={data.totalResults}
                          page={page}
                          onPageChange={onPageChange}
                        />
                      </Hidden>
                    </Box>
                  </Box>
                </AppsHeader>
              }
              headerStyle={{ p: 0 }}
              contentStyle={{ p: 0 }}
            >
              <AppsContent
                sx={{
                  paddingTop: 2.5,
                  paddingBottom: 2.5,
                }}
              >
                <ListingTable 
                  productData={data.products || []} 
                  loading={isLoading}
                  handleDeleteClick={handleDeleteClick}
                />
              </AppsContent>
              <Hidden smUp>
                <AppsPagination
                  rowsPerPage={10}
                  count={data.products.totalResults}
                  page={page}
                  onPageChange={onPageChange}
                />
              </Hidden>
            </AppCard>
          </Grid>
        </Slide>
        <Slide direction='left' in mountOnEnter unmountOnExit>
          <Grid item xs={12} lg={3}>
            <FilterItem filterData={filterData} setFilterData={setFilterData} />
          </Grid>
        </Slide>
      </AppGridContainer>

      <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
      >
        <DialogTitle>{messages['common.deleteConfirmation']}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {messages['common.deleteConfirmationMessage']}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            {messages['common.cancel']}
          </Button>
          <Button onClick={handleDeleteConfirm} color="secondary">
            {messages['common.delete']}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductListing;
