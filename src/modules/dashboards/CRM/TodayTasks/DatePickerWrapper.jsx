import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const DatePickerWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        position: 'relative',
        '& .MuiPickersToolbar-root': {
          '& > .MuiTypography-root': {
            display: 'none',
          },
        },
        '& .MuiPickersToolbar-content': {
          display: 'none',
        },
        // '& > div': {
        //   minWidth: 100,
        //   height: '100%',
        //   '& > div': {
        //     height: '100%',
        //     '& > div, & .MuiCalendarPicker-root': {
        //       height: '100%',
        //       maxHeight: 450,
        //       width: '100%',
        //     },
        //   },
        // },
        // '& .PrivatePickersFadeTransitionGroup-root': {
        //   height: '100%',
        //   '& > div': {
        //     height: '100%',
        //     '& > div': {
        //       justifyContent: 'space-around',
        //     },
        //   },
        // },
        // '& .PrivatePickersSlideTransition-root': {
        //   height: 'calc(100% - 40px)',
        //   '& > div': {
        //     height: '100%',
        //     display: 'flex',
        //     flexDirection: 'column',
        //     justifyContent: 'space-around',
        //     '& > div': {
        //       justifyContent: 'space-around',
        //     },
        //   },
        // },
        // '& .MuiButtonBase-root': {
        //   padding: '3px',
        //   color: 'text.primary',
        // },
      }}
    >
      {children}
    </Box>
  );
};

export default DatePickerWrapper;

DatePickerWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
