import React from 'react';
import PropsTypes from 'prop-types';
import { Box } from '@mui/material';

const UserHeaderSidebarWrapper = ({ children, ...rest }) => {
  return (
    <Box
      sx={{
        width: 280,
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.5s ease',
        position: { xs: 'relative', lg: 'fixed' },
        top: { xs: 0, lg: 71 },
        left: 0,
        zIndex: 1101,
        '& .app-sidebar': {
          position: 'relative',
          top: 'auto',
          left: 'auto',
          width: '100%',
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default UserHeaderSidebarWrapper;

UserHeaderSidebarWrapper.propTypes = {
  children: PropsTypes.node,
};
