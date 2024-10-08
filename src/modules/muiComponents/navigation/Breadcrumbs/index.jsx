import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import BasicBreadcrumbs from "./BasicBreadcrumbs";
import BasicBreadcrumbsSource from "./BasicBreadcrumbs?raw";

import ActiveLastBreadcrumb from "./ActiveLastBreadcrumb";
import ActiveLastBreadcrumbSource from "./ActiveLastBreadcrumb?raw";

import CustomSeparator from "./CustomSeparator";
import CustomSeparatorSource from "./CustomSeparator?raw";

import CollapsedBreadcrumbs from "./CollapsedBreadcrumbs";
import CollapsedBreadcrumbsSource from "./CollapsedBreadcrumbs?raw";

import CustomizedBreadcrumbs from "./CustomizedBreadcrumbs";
import CustomizedBreadcrumbsSource from "./CustomizedBreadcrumbs?raw";

const BottomNavigation = () => {
  return (
    <>
      <AppComponentHeader
        title="Breadcrumbs"
        description="Breadcrumbs allow users to make selections from a range of values."
        refUrl="https://mui.com/components/breadcrumbs/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Bottom Navigation"
            component={BasicBreadcrumbs}
            source={BasicBreadcrumbsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="ActiveLast Breadcrumb"
            component={ActiveLastBreadcrumb}
            source={ActiveLastBreadcrumbSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Customized Breadcrumbs"
            component={CustomizedBreadcrumbs}
            source={CustomizedBreadcrumbsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Collapsed Breadcrumbs"
            component={CollapsedBreadcrumbs}
            source={CollapsedBreadcrumbsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Custom Separator"
            component={CustomSeparator}
            source={CustomSeparatorSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default BottomNavigation;
