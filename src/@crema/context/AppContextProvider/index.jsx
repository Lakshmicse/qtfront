import React from 'react';
import PropTypes from 'prop-types';
import ThemeContextProvider from './ThemeContextProvider';
import LocaleContextProvider from './LocaleContextProvider';
import LayoutContextProvider from './LayoutContextProvider';
import SidebarContextProvider from './SidebarContextProvider';

const AppContextProvider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <LocaleContextProvider>
        <LayoutContextProvider>
          <SidebarContextProvider>{children}</SidebarContextProvider>
        </LayoutContextProvider>
      </LocaleContextProvider>
    </ThemeContextProvider>
  );
};

export default AppContextProvider;

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
