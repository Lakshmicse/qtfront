import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import ButtonAppBar from "./ButtonAppBar";
import ButtonAppBarSource from "./ButtonAppBar?raw";

import MenuAppBar from "./MenuAppBar";
import MenuAppBarSource from "./MenuAppBar?raw";

import ResponsiveAppBar from "./ResponsiveAppBar";
import ResponsiveAppBarSource from "./ResponsiveAppBar?raw";

import SearchAppBar from "./SearchAppBar";
import SearchAppBarSource from "./SearchAppBar?raw";

import PrimarySearchAppBar from "./PrimarySearchAppBar";
import PrimarySearchAppBarSource from "./PrimarySearchAppBar?raw";

import DenseAppBar from "./DenseAppBar";
import DenseAppBarSource from "./DenseAppBar?raw";

import ProminentAppBar from "./ProminentAppBar";
import ProminentAppBarSource from "./ProminentAppBar?raw";

import BottomAppBar from "./BottomAppBar";
import BottomAppBarSource from "./BottomAppBar?raw";

import HideAppBar from "./HideAppBar";
import HideAppBarSource from "./HideAppBar?raw";

import ElevateAppBar from "./ElevateAppBar";
import ElevateAppBarSource from "./ElevateAppBar?raw";

import BackToTop from "./BackToTop";
import BackToTopSource from "./BackToTop?raw";

import EnableColorOnDarkAppBar from "./EnableColorOnDarkAppBar";
import EnableColorOnDarkAppBarSource from "./EnableColorOnDarkAppBar?raw";

const AppBar = () => {
  return (
    <>
      <AppComponentHeader
        title="AppBar"
        description="The App Bar displays information and actions relating to the current screen."
        refUrl="https://mui.com/components/app-bar/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic App Bar"
            component={ButtonAppBar}
            source={ButtonAppBarSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="ResponsiveAppBar"
            component={ResponsiveAppBar}
            source={ResponsiveAppBarSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Search App Bar"
            component={SearchAppBar}
            source={SearchAppBarSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Primary Search App Bar"
            component={PrimarySearchAppBar}
            source={PrimarySearchAppBarSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Menu App Bar"
            component={MenuAppBar}
            source={MenuAppBarSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Dense App Bar"
            component={DenseAppBar}
            source={DenseAppBarSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Prominent App Bar"
            component={ProminentAppBar}
            source={ProminentAppBarSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Enable Color On Dark App Bar "
            component={EnableColorOnDarkAppBar}
            source={EnableColorOnDarkAppBarSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Bottom App Bar"
            component={BottomAppBar}
            source={BottomAppBarSource}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Hide App Bar "
            component={HideAppBar}
            source={HideAppBarSource}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Elevate App Bar "
            component={ElevateAppBar}
            source={ElevateAppBarSource}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Back To Top "
            component={BackToTop}
            source={BackToTopSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default AppBar;
