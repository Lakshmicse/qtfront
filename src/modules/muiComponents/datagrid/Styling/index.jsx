import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import StylingHeaderGrid from "./StylingHeaderGrid";
import StylingHeaderGridSource from "./StylingHeaderGrid?raw";

import StylingRowsGrid from "./StylingRowsGrid";
import StylingRowsGridSource from "./StylingRowsGrid?raw";

import StylingCellsGrid from "./StylingCellsGrid";
import StylingCellsGridSource from "./StylingCellsGrid?raw";

import StylingAllCells from "./StylingAllCells";
import StylingAllCellsSource from "./StylingAllCells?raw";

import AntDesignGrid from "./AntDesignGrid";
import AntDesignGridSource from "./AntDesignGrid?raw";

const Styling = () => {
  return (
    <>
      <AppComponentHeader
        title="Styling"
        description="Easily export the rows in various file formats such as CSV, Excel, or PDF."
        refUrl="https://mui.com/components/data-grid/style/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="StylingHeaderGrid"
            component={StylingHeaderGrid}
            source={StylingHeaderGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="StylingRowsGrid"
            component={StylingRowsGrid}
            source={StylingRowsGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="StylingCellsGrid"
            component={StylingCellsGrid}
            source={StylingCellsGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="StylingAllCells"
            component={StylingAllCells}
            source={StylingAllCellsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title="AntDesignGrid"
            component={AntDesignGrid}
            source={AntDesignGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Styling;
