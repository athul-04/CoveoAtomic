import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define the CartItem type
interface CartItem {
  id: string;
  pic: string;
  title: string;
  price: Number;
}

// Define the initial state with CartItem array type
const initialState: CartItem[] = [];

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state,action){
      console.log("idPassed",action.payload);
      console.log("",state);
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1); // Remove only the first matching item
      }
    },
    removeAll(state){
      state.splice(0,state.length);
    }
  },
});

// Export actions to be used in components
export const cartActions = cartSlice.actions;

// Configure the Redux store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer, // Add the cart reducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;

