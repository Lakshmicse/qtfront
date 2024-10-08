import React from 'react';
import PropsTypes from 'prop-types';
import { Box } from '@mui/material';

const UserMiniHeaderContainer = ({ children, ...rest }) => {
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
          flexDirection: { xl: 'column' },
          '& .user-mini-header-sidebar': {
            position: { xl: 'sticky' },
            height: { xl: '100%' },
            '& [data-simplebar]': {
              height: { xl: 'calc(100vh - 71px) !important' },
            },
          },
          '& .mini-sidebar-collapsed': {
            pt: { xl: 0 },
          },
          '& .app-bar': {
            position: { xl: 'sticky' },
            width: { xl: '100%' },
          },
          '& .mainContent': {
            position: { xl: 'static' },
            ml: { xl: 0 },
            width: { xl: '100%' },
            flexDirection: { xl: 'row' },
            flexWrap: { xl: 'wrap' },
          },
          '& .fixed-footer': {
            position: { xl: 'sticky' },
          },
          '& .appMainFixedFooter': {
            pb: { xl: 0 },
            '& .user-mini-header-sidebar': {
              '& [data-simplebar]': {
                height: { xl: 'calc(100vh - 131px) !important' },
              },
            },
          },
        },
        '&.framedLayout': {
          padding: { xl: 5 },
          backgroundColor: (theme) => theme.palette.primary.main,

          '& .mini-sidebar-collapsed': {
            borderRadius: { xl: 3 },
            pt: { xl: 0 },
          },
          '& .user-mini-header-sidebar': {
            position: { xl: 'sticky' },
            height: { xl: '100%' },
            borderBottomLeftRadius: { xl: 12 },
            overflow: { xl: 'hidden' },
            '& [data-simplebar]': {
              height: { xl: 'calc(100vh - 91px) !important' },
            },
          },
          '& .app-bar': {
            position: { xl: 'sticky' },
            width: { xl: '100%' },
            borderTopLeftRadius: { xl: 12 },
            borderTopRightRadius: { xl: 12 },
          },
          '& .footer': {
            borderBottomRightRadius: { xl: 12 },
          },
          '& .mainContent': {
            position: { xl: 'static' },
            ml: { xl: 0 },
            width: { xl: '100%' },
            flexDirection: { xl: 'row' },
            flexWrap: { xl: 'wrap' },
          },
          '& .fixed-footer': {
            position: { xl: 'sticky' },
          },
          '& .appMainFixedFooter': {
            pb: { xl: 0 },
            '& .footer': {
              borderBottomLeftRadius: { xl: 12 },
            },
            '& .user-mini-header-sidebar': {
              '& [data-simplebar]': {
                height: { xl: 'calc(100vh - 131px) !important' },
              },
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

export default UserMiniHeaderContainer;

UserMiniHeaderContainer.propTypes = {
  children: PropsTypes.node,
};
