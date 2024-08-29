import React from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Divider,
    Button,
    Table,
    TableBody,
    TableCell,
    TableRow,
  
} from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';

import { mediaUrl } from "@crema/constants/AppConst.jsx";

import { removeItemFromCart } from '@crema/Slices/cartSlice';

const Dropcart = () => {
    const dispatch = useDispatch();
    const cart= useSelector((state) => state.cart);
    
    const calculateTotalPrice = (cart) => {
        return cart.reduce((total, item) => {
          return total + item.mrp * item.quantity;
        }, 0);
      }

      if (cart.items.length == 0 ){
        return <h1>Cart is empty</h1>
      }

      const  removeItem = (item) => {

            dispatch(removeItemFromCart(item));
      }
    return (


        <Box className="dropcart">
            <List className="dropcart__list">

                {

                    cart.items.map((item) => {
                        return <><ListItem className="dropcart__item">
                            <Box className="dropcart__item-image">  
                                <a href="product-full.html">
                                    <img
                                        src={`${mediaUrl}/product/${item.image}`}
                                        alt=""
                                        className="image__tag"
                                    />
                                </a>
                            </Box>
                            <div className="dropcart__item-info">

                                <ListItemText
                                    primary={<a href="product-full.html">{item.sku}</a>}
                                    secondary={
                                        <Box component="ul" className="dropcart__item-features" sx={{ pl: 2 }}>
                                            <li>Color: Yellow</li>
                                            <li>Material: Aluminium</li>
                                        </Box>
                                    }
                                />
                                <div className="dropcart__item-meta">
                                    <div className="dropcart__item-quantity">{item.quantity }</div>
                                    <div className="dropcart__item-price">${item.totalPrice}</div>
                                </div>
                            </div>
                            <button type="button" className="dropcart__item-remove" onClick={()=> {removeItem(item) }}>
                                <svg width="10" height="10">
                                    <path d="M8.8,8.8L8.8,8.8c-0.4,0.4-1,0.4-1.4,0L5,6.4L2.6,8.8c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L3.6,5L1.2,2.6c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L5,3.6l2.4-2.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L6.4,5l2.4,2.4C9.2,7.8,9.2,8.4,8.8,8.8z"></path>
                                </svg>
                            </button>
                        </ListItem>
                        <Divider />
                        </>

                    })

                }



                
            </List>

            <Box className="dropcart__totals">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th">Subtotal</TableCell>
                            <TableCell>${cart.totalPrice}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">Shipping</TableCell>
                            <TableCell>$25.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">Tax</TableCell>
                            <TableCell>$0.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">Total</TableCell>
                            <TableCell>${cart.totalPrice + 25 + 0}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>



            <Box className="dropcart__actions" sx={{ display: 'flex', gap: 1 }}>
                <Link to="ecommerce/cart" style={{ textDecoration: 'none' }}>

                    <Button variant="contained" color="secondary">
                        View Cart
                    </Button>

                </Link>
                <Link to="ecommerce/checkout" style={{ textDecoration: 'none' }}>

                    <Button variant="contained" color="primary">
                        Checkout
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default Dropcart;
