import React, { useState } from 'react';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import PropTypes from 'prop-types';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import { alpha, Box, Hidden, Skeleton } from '@mui/material';
import { useThemeContext } from '@crema/context/AppContextProvider/ThemeContextProvider';
import AppsFooter from '@crema/components/AppsContainer/AppsFooter';
import AppsPagination from '@crema/components/AppsPagination';
import ProductHeader from '../ProductHeader';
import ProductGrid from './ProductGrid';
import { VIEW_TYPE } from '../index';
import ProductList from './ProductList';
import { useGetProductsQuery } from '@crema/Slices/productsSlice';

// import { useSelector } from 'react-redux';

const ProductListing = ({
  filterData,
  viewType,
  setViewType,
  setFilterData,
}) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const { data, error, isLoading } = useGetProductsQuery({ page, limit: itemsPerPage });
  const { theme } = useThemeContext();
  const totalPages = data ? Math.ceil(data.totalResults / itemsPerPage) : 0;

  const onPageChange = (event, value) => {
    setPage(value);
    console.log(value);
  };

  const searchProduct = (title) => {
    setFilterData({ ...filterData, title });
  };

  return (
    <>
      <AppsHeader>
        <ProductHeader
          list={data?.products || []}
          viewType={viewType}
          page={page}
          totalProducts={data?.totalResults || 0}
          onPageChange={onPageChange}
          onSearch={searchProduct}
          setViewType={setViewType}
        />
      </AppsHeader>

      <AppsContent
        style={{
          backgroundColor: alpha(theme.palette.background.default, 0.6),
        }}
      >
        <Box
          sx={{
            width: '100%',
            flex: 1,
            display: 'flex',
            py: 2,
            px: 4,
            height: 1,
            '& > div': {
              width: '100%',
            },
          }}
        >
          {isLoading ? (
            // Shimmer effect during loading
            <>  
            <Skeleton />
            <Skeleton width="60%" /> </>
          ) : viewType === VIEW_TYPE.GRID ? (
            <ProductGrid ecommerceList={data.products} loading={isLoading} />
          ) : (
            <ProductList ecommerceList={data.products} loading={isLoading} />
          )}
        </Box>
      </AppsContent>

      <Hidden smUp>
        {data?.products?.length > 0 && (
          <AppsFooter>
            <AppsPagination
              count={totalPages}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        )}
      </Hidden>
    </>
  );
};

export default ProductListing;

ProductListing.propTypes = {
  filterData: PropTypes.object,
  viewType: PropTypes.string.isRequired,
  setViewType: PropTypes.func.isRequired,
  setFilterData: PropTypes.func.isRequired,
};
