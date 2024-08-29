import React from "react";
import Carousel from "./Carosel";
import Shopbybrand from "./Shopbybrand";
import Popularbrand from "./Popularbrand";
import ScrollingBanner from "./ScrollingBanner";
import { Box } from "@mui/material";
import PromotionImage from "./PromotionImage";
import image1 from "../../../src/assets/homeimages/qt support.jpg";
import { width } from "@mui/system";
import Support from "./Support";
import TShirt from "./TShirt";

const Home = () => {
  return (
    <Box
    sx={{
      width: "100%",
      padding: { xs: 1, sm: 2, md: 3 },
      overflowX: "hidden",
    }}
  >
<Box sx={{ my: { xs: 2, sm: 3, md: 4 } }}>
        <Carousel />
      </Box>
      
      <Box sx={{ my: 4 }}>
        <Popularbrand />
      </Box>
      <Box sx={{ my: 4 }}>
        <TShirt />
      </Box>
      <Box sx={{ my: 4 }}>
        <PromotionImage />
      </Box>
      {/* <Box sx={{ my: 4 }}>
        <ScrollingBanner />
      </Box> */}
      {/* <Box sx={{ my: 4 }}>
        <Support />
      </Box>  */}
    </Box>
  );
};

export default Home;
