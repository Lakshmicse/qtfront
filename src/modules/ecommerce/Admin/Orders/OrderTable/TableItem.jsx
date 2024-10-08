import React from 'react';
import { Link } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import OrderActions from './OrderActions';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(() => ({
  fontSize: 14,
  padding: 8,
  '&:first-of-type': {
    paddingLeft: 20,
  },
  '&:last-of-type': {
    paddingRight: 20,
  },
}));

const TableItem = ({ data, onDeleteOrder }) => {
  const getPaymentStatusColor = () => {
    switch (data.status) {
      case 'Pending': {
        return '#F84E4E';
      }
      case 'Delivered': {
        return '#43C888';
      }
      default: {
        return '#E2A72E';
      }
    }
  };

  return (
    <TableRow key={data.name} className='item-hover'>
      <StyledTableCell component='th' scope='row'>
        <Box
          sx={{
            color: 'primary.main',
            borderBottom: (theme) => `1px solid ${theme.palette.primary.main}`,
            display: 'inline-block',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
          component={Link}
          to={`/ecommerce/order_detail/${data.id}`}
        >
          {data.id}
        </Box>
      </StyledTableCell>
      <StyledTableCell align='left'>{data.product}</StyledTableCell>
      <StyledTableCell align='left'>{data.customer}</StyledTableCell>
      <StyledTableCell align='left'>{data.date}</StyledTableCell>
      <StyledTableCell align='left'>{data.totalAmount}</StyledTableCell>
      <StyledTableCell align='left'>{data.paymentType}</StyledTableCell>
      <StyledTableCell align='left'>
        <Box
          sx={{
            color: getPaymentStatusColor(),
            backgroundColor: getPaymentStatusColor() + '44',
            padding: '3px 5px',
            borderRadius: 1,
            fontSize: 14,
            display: 'inline-block',
          }}
        >
          {data.orderStatus}
        </Box>
      </StyledTableCell>
      <TableCell align='right'>
        <OrderActions id={data.id} onDeleteOrder={onDeleteOrder} />
      </TableCell>
    </TableRow>
  );
};

export default TableItem;

TableItem.propTypes = {
  data: PropTypes.object.isRequired,
  onDeleteOrder: PropTypes.func.isRequired,
};
