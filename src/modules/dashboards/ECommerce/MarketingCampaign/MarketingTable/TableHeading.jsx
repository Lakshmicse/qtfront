import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHeader from '@crema/components/AppTable/TableHeader';
import { grey } from '@mui/material/colors';
import { Fonts } from '@crema/constants/AppEnums';

const TableHeading = () => {
  return (
    <TableHeader
      sx={{
        borderBottom: '0 none',
        color: grey[500],
        '& .tableCell': {
          fontSize: 13,
          padding: 2,
          fontWeight: Fonts.BOLD,
          backgroundColor: (theme) => theme.palette.background.paper,
          '&:first-of-type': {
            pl: 5,
          },
          '&:last-of-type': {
            pr: 5,
          },
        },
      }}
    >
      <TableCell className='tableCell'>Name</TableCell>
      <TableCell className='tableCell'>Duration</TableCell>
      <TableCell className='tableCell'>Spend</TableCell>
      <TableCell className='tableCell'>Budget</TableCell>
      <TableCell className='tableCell'>Graph</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
