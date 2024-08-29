
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGetOrderByIdQuery } from '@crema/Slices/orderSlice';

import { mediaUrl } from "@crema/constants/AppConst";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  CircularProgress,
  Container,
  Paper,
  List,
  ListItem,
  Avatar,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: theme.spacing(2),
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const Label = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
}));

const Value = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const Image = styled(Typography)(({ theme }) => ({
  maxWidth: 200,
  maxHeight: 200,
}));



const OrderDetails = ({ order }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Order Details
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6">Order ID: {order.id}</Typography>
        <Typography variant="h6">Order Status: {order.orderStatus}</Typography>
        <Typography variant="h6">Total Amount: ${order.totalAmount}</Typography>
        <Typography variant="h6">Order Date: {new Date(order.orderDate).toLocaleString()}</Typography>
      </Paper>

      <ShippingAddress address={order.shippingAddress} />

      <OrderItems items={order.items} />
    </Container>
  );
};

const ShippingAddress = ({ address }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Shipping Address
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="body1">{address.addressLine1}, {address.addressLine2}</Typography>
        <Typography variant="body1">{address.city}, {address.state}, {address.postalCode}</Typography>
        <Typography variant="body1">{address.country}</Typography>
        <Typography variant="body1">Phone: {address.phoneNumber}</Typography>
      </Paper>
    </Box>
  );
};

const OrderItems = ({ items }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Order Items
      </Typography>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} alignItems="flex-start">
            <Avatar src={`/images/${item.productVariantId.image}`} alt="Product Image" sx={{ marginRight: 2 }} />
            <ListItemText
              primary={`${item.productVariantId.attributes.find(attr => attr.name === 'type').value} - ${item.productVariantId.attributes.find(attr => attr.name === 'color').value} (${item.productVariantId.attributes.find(attr => attr.name === 'size').value})`}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    Quantity: {item.quantity}
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2" color="text.primary">
                    Unit Price: ${item.unitPrice}
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2" color="text.primary">
                    Total Price: ${item.totalPrice}
                  </Typography>
                  {item.customizationId && (
                    <Box sx={{ marginTop: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Customization:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      <Box
      component="img"
      sx={{
        height: 300,
        width: 300,
        maxHeight: { xs: 300, md: 300 },
        maxWidth: { xs: 300, md: 300 },
      }}
      alt="Your image description"
      src={`${mediaUrl}/product/${item.customizationId.frontLogo}`}
    />
                        Front Logo: {item.customizationId.frontLogo}, Back Logo: {item.customizationId.backLogo}, Shoulder Logo: {item.customizationId.shoulderLogo}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Front Text: {item.customizationId.frontText}, Back Text: {item.customizationId.backText}
                      </Typography>
                    </Box>
                  )}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
const OrderView = () => {
  const { id } = useParams();
  const { data: orderData, isLoading, isError } = useGetOrderByIdQuery(id);

  useEffect(() => {
    if (isError) {
      // Handle error if needed
    }
  }, [isError]);

  if (isLoading) {
    return <CircularProgress />;
  }else{
  
  }

  if (!orderData) {
    return <Typography variant="h6">Order not found.</Typography>;
  }

  return (
    <Card>
      <CardContent>
        <OrderDetails order={orderData} />;
      </CardContent>
    </Card>
  );
};

export default OrderView;
