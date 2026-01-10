import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import offerReducer from './slices/offerSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        offer: offerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;