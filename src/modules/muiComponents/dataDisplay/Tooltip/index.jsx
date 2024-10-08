import React from "react";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppGridContainer from "@crema/components/AppGridContainer";
import Grid from "@mui/material/Grid";
import AppComponentCard from "@crema/components/AppComponentCard";

import BasicTooltip from "./BasicTooltip";
import BasicTooltipSource from "./BasicTooltip?raw";

import PositionedTooltips from "./PositionedTooltips";
import PositionedTooltipsSource from "./PositionedTooltips?raw";

import CustomizedTooltips from "./CustomizedTooltips";
import CustomizedTooltipsSource from "./CustomizedTooltips?raw";

import ArrowTooltips from "./Arrowtooltips";
import ArrowTooltipsSource from "./Arrowtooltips?raw";

import TriggersTooltips from "./TriggersTooltips";
import TriggersTooltipsSource from "./TriggersTooltips?raw";

import ControlledTooltips from "./ControlledTooltips";
import ControlledTooltipsSource from "./ControlledTooltips?raw";

import VariableWidth from "./VariableWidth";
import VariableWidthSource from "./VariableWidth?raw";

import NotInteractiveTooltips from "./NotInteractiveTooltips";
import NotInteractiveTooltipsSource from "./NotInteractiveTooltips?raw";

import DisabledTooltips from "./DisabledTooltips";
import DisabledTooltipsSource from "./DisabledTooltips?raw";

import TransitionsTooltips from "./TransitionsTooltips";
import TransitionsTooltipsSource from "./TransitionsTooltips?raw";

import FollowCursorTooltips from "./FollowCursorTooltips";
import FollowCursorTooltipsSource from "./FollowCursorTooltips?raw";

import AnchorElTooltips from "./Virtualelement";
import AnchorElTooltipsSource from "./AnchorElTooltips?raw";

import DelayTooltips from "./DelayTooltips";
import DelayTooltipsSource from "./DelayTooltips?raw";

import AccessibilityTooltips from "./AccessibilityTooltips";
import AccessibilityTooltipsSource from "./AccessibilityTooltips?raw";

const Tooltip = () => {
  return (
    <>
      <AppComponentHeader
        title="Tooltip"
        description="Tooltips display informative text when users hover over, focus on, or tap an element."
        refUrl="https://mui.com/components/tooltips/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic Tooltip"
            component={BasicTooltip}
            source={BasicTooltipSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Customized Tooltips"
            component={CustomizedTooltips}
            source={CustomizedTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Arrow Tooltips"
            component={ArrowTooltips}
            source={ArrowTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Triggers Tooltips"
            component={TriggersTooltips}
            source={TriggersTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Controlled Tooltips"
            component={ControlledTooltips}
            source={ControlledTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Variable Width"
            component={VariableWidth}
            source={VariableWidthSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Not Interactive Tooltips"
            component={NotInteractiveTooltips}
            source={NotInteractiveTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Disabled Tooltips"
            component={DisabledTooltips}
            source={DisabledTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Transitions Tooltips"
            component={TransitionsTooltips}
            source={TransitionsTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="FollowCursor Tooltips"
            component={FollowCursorTooltips}
            source={FollowCursorTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="AnchorEl Tooltips"
            component={AnchorElTooltips}
            source={AnchorElTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Delay Tool tips"
            component={DelayTooltips}
            source={DelayTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Accessibility Tooltips"
            component={AccessibilityTooltips}
            source={AccessibilityTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Positioned Tooltips"
            component={PositionedTooltips}
            source={PositionedTooltipsSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Tooltip;
