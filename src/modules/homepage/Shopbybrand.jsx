import React, { useEffect } from "react";
import { useGetDataApi } from "../../@crema/hooks/APIHooks"; // Adjust the import path accordingly
import {
  Box,
  Typography,
  CircularProgress,
  Divider
} from "@mui/material";

const Shopbybrand = () => {
  const [{ apiData: ecommerceList, loading }] = useGetDataApi("/brand", {
    results: [],
    totalResults: 0,
  });

  // Destructure the fetched data
  const { results: list } = ecommerceList;

  // Log the fetched data to the console
  useEffect(() => {
    if (!loading && ecommerceList) {
      console.log("Fetched Data:", ecommerceList);
    }
  }, [loading, ecommerceList]);

  // Dummy images array
  const dummyImages = [
    "https://budgettrucktires.com/cdn/shop/collections/AMERICAN-ROAD-STAR-LOGO.png?v=1714596608&width=800",
    "https://budgettrucktires.com/cdn/shop/collections/Bridgestone.jpg?v=1684772142&width=460",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5cDm6vWnT0rNfJcZowi6ueJt5NTK0n-6uA&s",
    // Add more dummy images if needed
  ];

  // Limit the number of products to display to 5
  const productsToShow = list.slice(0, 5);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h1" component="h1" gutterBottom style={{ fontSize: "2.5rem" }}>
        Shop by Brand
      </Typography>
      <Divider style={{ marginTop: 35, marginBottom: 35, backgroundColor: "#F0464D" }} />

      {loading ? (
        <CircularProgress />
      ) : productsToShow.length > 0 ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)", // 1 column for extra small screens
              sm: "repeat(2, 1fr)", // 2 columns for small screens
              md: "repeat(3, 1fr)", // 3 columns for medium screens
              lg: "repeat(4, 1fr)", // 4 columns for large screens
            },
            gap: 2, // Equal spacing between items
          }}
        >
          {productsToShow.map((item, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={dummyImages[index] || dummyImages[0]} // Use a different dummy image for each brand
                alt={item.title}
                sx={{ 
                  width: { xs: 180, sm: 220, md: 260 }, // Increased width
                  height: { xs: 100, sm: 130, md: 150 }, // Decreased height
                  objectFit: "cover", // Ensures the image covers the box while preserving aspect ratio
                }}
              />
            </Box>
          ))}
        </Box>
      ) : (
        <Typography>No Brands available.</Typography>
      )}
    </Box>
  );
};

export default Shopbybrand;
