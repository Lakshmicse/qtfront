import { createSlice } from '@reduxjs/toolkit';

// Function to get cart from local storage
const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : { items: [], totalQuantity: 0, totalPrice: 0 };
};

// Function to save cart to local storage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Define the initial state of the cart, fetched from local storage
const initialState = getCartFromLocalStorage();

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        item => item.id === newItem.id && item.variantId === newItem.variantId
      );
    
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      }
    
      // Recalculate the totalQuantity and totalPrice from scratch
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);
    
      saveCartToLocalStorage(state); // Save updated cart to local storage
    },
    
    decreaseItemQuantity(state, action) {
      const { id, variantId } = action.payload;
      const existingItem = state.items.find(item => item.id === id && item.variantId === variantId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity = existingItem.quantity - 1;
          existingItem.totalPrice = existingItem.totalPrice-existingItem.price;
        } else {
          state.items = state.items.filter(item => !(item.id === id && item.variantId === variantId));
        }
        state.totalQuantity =state.totalQuantity -1;
        state.totalPrice = state.totalPrice- existingItem.price;
        saveCartToLocalStorage(state); // Save updated cart to local storage
      }
    },
    increaseItemQuantity(state, action) {
      const { id, variantId } = action.payload;
      const existingItem = state.items.find(item => item.id === id && item.variantId === variantId);

      if (existingItem) {
        if (existingItem.quantity > 0) {
          existingItem.quantity = existingItem.quantity + 1;
          existingItem.totalPrice = existingItem.totalPrice  + existingItem.price;
        } else {
          state.items = state.items.filter(item => !(item.id === id && item.variantId === variantId));
        }
        state.totalQuantity =state.totalQuantity + 1;
        state.totalPrice = state.totalPrice +  existingItem.price;
        saveCartToLocalStorage(state); // Save updated cart to local storage
      }
    },
    removeItemFromCart(state, action) {
      const { id, variantId } = action.payload;
      const existingItem = state.items.find(item => item.id === id && item.variantId === variantId);

      if (existingItem) {
        state.items = state.items.filter(item => !(item.id === id && item.variantId === variantId));
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        saveCartToLocalStorage(state); // Save updated cart to local storage
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      saveCartToLocalStorage(state); // Save updated cart to local storage
    },
    getCartItems(state) {
      const storedCart = getCartFromLocalStorage();
      state.items = storedCart.items;
      state.totalQuantity = storedCart.totalQuantity;
      state.totalPrice = storedCart.totalPrice;
    },
  },
});

// Export the cart actions
export const { getCartItems, addItemToCart, decreaseItemQuantity, removeItemFromCart, clearCart ,increaseItemQuantity } = cartSlice.actions;

// Export the cart reducer
export default cartSlice.reducer;
