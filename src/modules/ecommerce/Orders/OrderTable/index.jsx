import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/components/AppTableContainer';
import AppLoader from '@crema/components/AppLoader';

const OrderTable = ({ orderData, loading, onDeleteOrder }) => {
  return (
    <AppTableContainer>
      {loading ? (
        <AppLoader />
      ) : (
        <Table stickyHeader className='table'>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {orderData.map((data) => (
              <TableItem data={data} key={data.id} onDeleteOrder={onDeleteOrder} />
            ))}
          </TableBody>
        </Table>
      )}
    </AppTableContainer>
  );
};

export default OrderTable;

OrderTable.defaultProps = {
  orderData: [],
};

OrderTable.propTypes = {
  orderData: PropTypes.array,
  loading: PropTypes.bool,
};
