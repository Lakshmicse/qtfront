import React from 'react';
import { Box } from '@mui/material';
import PropsTypes from 'prop-types';

const HorDarkContainer = ({ children, ...rest }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: (theme) => theme.palette.background.default,

        '&.boxedLayout': {
          maxWidth: { xl: 1480 },
          mx: { xl: 'auto' },
          boxShadow: 'none',
          borderLeft: '1px solid #e8e5dd',
          borderRight: '1px solid #e8e5dd',
          pt: { xl: 0 },

          '& .mainContent': {
            position: { xl: 'static' },
          },
          '& .fixed-footer': {
            position: { xl: 'sticky' },
          },
          '& .appMainFixedFooter': {
            pb: { xl: 0 },
          },
        },
        '&.framedLayout': {
          padding: { xl: 5 },
          backgroundColor: (theme) => theme.palette.primary.main,

          '& .horDarkWrapper': {
            borderRadius: { xl: 3 },
          },

          '& .app-bar': {
            borderTopLeftRadius: { xl: 12 },
            borderTopRightRadius: { xl: 12 },
            overflow: 'hidden',
          },

          '& .footer': {
            borderBottomLeftRadius: { xl: 12 },
            borderBottomRightRadius: { xl: 12 },
          },

          '& .mainContent': {
            position: { xl: 'static' },
          },
          '& .fixed-footer': {
            position: { xl: 'sticky' },
          },
          '& .appMainFixedFooter': {
            pb: { xl: 0 },
          },
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default HorDarkContainer;

HorDarkContainer.propTypes = {
  children: PropsTypes.node,
};
