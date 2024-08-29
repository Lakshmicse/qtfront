import React, { useState, useEffect } from "react";
import {
  Grid,
  Divider,
  Typography,
  Button,
  Box,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  IconButton
} from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "@crema/Slices/productsSlice";
import { addItemToCart } from "@crema/Slices/cartSlice";
import { mediaUrl } from "@crema/constants/AppConst";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Drawer from '@mui/material/Drawer';

import Customize from "./Customize";

const ProductDetailPage = ({ product }) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [filteredVariants, setFilteredVariants] = useState(product.variant);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [filterValues, setFilterValues] = useState({});
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showDrawer, setShowDrawer] = useState(false);
  const [customizationId, setCustomizationId] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCustomizeSave = (customization) => {
    // Save customization
    // navigate("/customize/"+selectedVariant.id);
    setShowDrawer(false);

    setCustomizationId(customization.id);
    console.log(customization);
  }
  const handleCustomizeClick = () => {
    //navigate("/customize/"+selectedVariant.id);
    setShowDrawer(true);
  };

  useEffect(() => {
    const filters = {};

    if (product.category) {
      filters.category = product.category.name;
    }

    if (product.brand) {
      filters.brand = product.brand;
    }

    product.variant.forEach((variant) => {
      variant.attributes.forEach((attribute) => {
        if (!filters[attribute.name]) {
          filters[attribute.name] = new Set();
        }
        filters[attribute.name].add(attribute.value);
      });
    });

    for (let key in filters) {
      if (filters[key] instanceof Set) {
        filters[key] = Array.from(filters[key]);
      }
    }

    setFilterValues(filters);

    if (product.variant.length > 0) {
      const firstVariant = product.variant[0];
      setSelectedType(
        firstVariant.attributes.find((attr) => attr.name === "type")?.value ||
          ""
      );
      setSelectedColor(
        firstVariant.attributes.find((attr) => attr.name === "color")?.value ||
          ""
      );
      setSelectedSize(
        firstVariant.attributes.find((attr) => attr.name === "size")?.value ||
          ""
      );
      setSelectedVariant(firstVariant);
      setMainImage(`${mediaUrl}/product/${firstVariant.image}`);
    }
  }, [product]);

  useEffect(() => {
    let variants = product.variant;

    if (selectedType) {
      variants = variants.filter((v) =>
        v.attributes.some(
          (attr) => attr.name === "type" && attr.value === selectedType
        )
      );
    }

    if (selectedColor) {
      variants = variants.filter((v) =>
        v.attributes.some(
          (attr) => attr.name === "color" && attr.value === selectedColor
        )
      );
    }

    if (selectedSize) {
      variants = variants.filter((v) =>
        v.attributes.some(
          (attr) => attr.name === "size" && attr.value === selectedSize
        )
      );
    }

    setFilteredVariants(variants);
    setSelectedVariant(variants.length > 0 ? variants[0] : null);
  }, [selectedType, selectedColor, selectedSize, product.variant]);

  const handleTypeChange = (event) => setSelectedType(event.target.value);
  const handleColorChange = (event, newColor) => setSelectedColor(newColor);
  const handleSizeChange = (event) => setSelectedSize(event.target.value);
  const handleQuantityChange = (event) => setQuantity(event.target.value);

  const handleAddToCart = () => {
    console.log({ ...selectedVariant, quantity: quantity , customizationId });
    if (selectedVariant) {
      dispatch(addItemToCart({ ...selectedVariant, quantity: quantity , customizationId  }));
    }
  };

  const StyledImage = styled("img")({
    maxWidth: "90%",
    height: "auto",
  });

  const Container = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "15px",
  }));

  const ThumbnailImage = styled("img")({
    width: "60px",
    height: "60px", // Vertical aspect ratio
    objectFit: "cover",
    borderRadius: "4px",
    marginBottom: "10px",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  });

  const ColorSwatch = styled(ToggleButton)({
    width: 60,
    height: 60,
    borderRadius: "0%",
    margin: "0 8px",
    "&.Mui-selected": {
      border: "2px solid red",
    },
  });

  return (
    <Container>
      <Grid container>
        {/* Thumbnail Images */}
        <Grid item xs={2} md={1}>
          <Box display="flex" flexDirection="column" gap={2}>
            {product.variant.map((variant, index) => (
              <ThumbnailImage
                key={index}
                src={`${mediaUrl}/product/${variant.image}`}
                alt={`Thumbnail ${index + 1}`}
                onClick={() =>
                  setMainImage(`${mediaUrl}/product/${variant.image}`)
                }
              />
            ))}
          </Box>
        </Grid>

        {/* Main Product Image */}
        <Grid item xs={10} md={5}>
          {selectedVariant ? (
            <StyledImage src={mainImage} alt={product.title} />
          ) : (
            <Typography variant="h6">No variant selected</Typography>
          )}
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" gap={3}>
            <Typography variant="h1" color="red">
              {product.title}
            </Typography>
            <Typography variant="body1">{product?.description}</Typography>
            <Typography variant="h4">
              Brand:{" "}
              <span style={{ color: "blue" }}>{product.brand?.name}</span>
            </Typography>
            <Typography variant="h4">
              Category:{" "}
              <span style={{ color: "blue" }}>{product.category?.name}</span>
            </Typography>
            <Typography variant="h3">
              SKU: <span style={{ color: "blue" }}>{product.SKU}</span>
            </Typography>

            {/* Color Selector */}
            <Box>
              <Typography variant="h3">Color</Typography>
              <ToggleButtonGroup
                value={selectedColor}
                exclusive
                onChange={(event, newColor) => {
                  const variant = product.variant.find((v) =>
                    v.attributes.some(
                      (attr) => attr.name === "color" && attr.value === newColor
                    )
                  );
                  setSelectedColor(newColor);
                  setSelectedVariant(variant);
                  setMainImage(`${mediaUrl}/product/${variant.image}`);
                }}
                aria-label="color selection"
              >
                {filterValues["color"]?.map((filter) => {
                  const variant = product.variant.find((v) =>
                    v.attributes.some(
                      (attr) => attr.name === "color" && attr.value === filter
                    )
                  );

                  return (
                    <ColorSwatch key={filter} value={filter}>
                      <img
                        src={`${mediaUrl}/product/${variant.image}`}
                        alt={filter}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </ColorSwatch>
                  );
                })}
              </ToggleButtonGroup>
            </Box>

            {/* Type Selector */}
            <FormControl fullWidth>
              <Typography variant="h3" gutterBottom>
                Sleeves
              </Typography>
              <Select
                size="small"
                margin="normal"
                sx={{ marginBottom: "16px", width: "150px" }}
                value={selectedType}
                onChange={handleTypeChange}
              >
                {filterValues["type"]?.map((filter) => (
                  <MenuItem key={filter} value={filter}>
                    {filter}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Size Selector */}
            <FormControl fullWidth>
              <Typography variant="h3" gutterBottom>
                Size
              </Typography>
              <Select
                labelId="size-select-label"
                size="small"
                margin="normal"
                sx={{ marginBottom: "16px", width: "150px" }}
                value={selectedSize}
                onChange={handleSizeChange}
              >
                {filterValues["size"]?.map((filter) => (
                  <MenuItem key={filter} value={filter}>
                    {filter}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* Quantity Selector */}
            <FormControl fullWidth>
              <Typography variant="h3" gutterBottom>
                Quantity
              </Typography>
              <Select
                labelId="quantity-select-label"
                size="small"
                margin="normal"
                sx={{ marginBottom: "16px", width: "100px" }}
                value={quantity}
                onChange={handleQuantityChange}
              >
                {[...Array(10).keys()].map((_, index) => (
                  <MenuItem key={index + 1} value={index + 1}>
                    {index + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* Display Selected Variant Info */}
            {selectedVariant && (
              <Box mt={2}>
                <Typography variant="h1" color={"red"}>
                  {" "}
                  ${selectedVariant.price}
                </Typography>
                <br />
                <Button
                  variant="contained"
                  color="error"
                  disabled={!selectedVariant}
                  onClick={() => {
                    handleAddToCart();
                  }}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </Box>
            )}

<Button color="error" onClick={handleCustomizeClick}>
      Customize
    </Button>
      

    <Drawer
            anchor={'right'}
            open={showDrawer}
            onClose={(event) => { console.log(event); setShowDrawer(false)}}
          >
               <IconButton onClick={() => {setShowDrawer(false)}}>
            <CloseIcon />
          </IconButton>
            {selectedVariant && <Customize variantId={selectedVariant?.id} handleCustomizeSave={handleCustomizeSave}/>}   
          </Drawer>
              
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

// Example usage of the ProductDetailPage component
const App = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;

  return <ProductDetailPage product={product} />;
};

export default App;
