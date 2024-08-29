import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { styled } from "@mui/system";

// Custom styling for the scrolling banner
const ScrollingBannerContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  padding: theme.spacing(1),
  whiteSpace: "nowrap",
}));

const ScrollingText = styled(Typography)(({ theme }) => ({
  display: "flex",
  paddingLeft: theme.spacing(2),
  animation: "scroll 7s linear infinite",
  whiteSpace: "nowrap",
  fontSize: "2rem",
  color: "black",
  "@keyframes scroll": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
}));

const ScrollingBanner = () => {
  return (
    <>

      <ScrollingBannerContainer>
       <ScrollingText variant="h6"> !!! BUY MORE SAVE MORE  &nbsp;&nbsp;&nbsp;&nbsp;  !!! BUY MORE SAVE MORE  &nbsp;&nbsp;&nbsp;&nbsp;  !!! BUY MORE SAVE MORE  &nbsp;&nbsp;&nbsp;&nbsp;  !!!  BUY MORE SAVE MORE  &nbsp;&nbsp;&nbsp;&nbsp;   !!!BUY MORE SAVE MORE </ScrollingText>
        
      </ScrollingBannerContainer>
    </>
  );
};

export default ScrollingBanner;
