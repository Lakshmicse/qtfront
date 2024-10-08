import React from 'react';
import PropsTypes from 'prop-types';
import { Box } from '@mui/material';

const BitBucketWrapper = ({ children, ...rest }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: (theme) => theme.palette.background.default,
        paddingTop: { xs: 14, sm: 17.5, lg: 0 },
        '& .mainContent': {
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: { xs: '100%', lg: 'calc(100% - 320px)' },
          transition: 'all 0.5s ease',
        },
        '&.bitBucketCollapsed': {
          '& .mainContent': {
            width: 'calc(100% - 64px)',
          },
          '& .bit-bucket-sidebar': {
            width: 64,
            '& .app-sidebar-container': {
              width: 8,
              borderLeftColor: 'transparent',
            },
          },
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default BitBucketWrapper;

BitBucketWrapper.propTypes = {
  children: PropsTypes.node,
};
