import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
    id: string;
    name: string;
    price: number;
    qty: number;
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const existing = state.items.find(i => i.id === action.payload.id);

            if (existing) {
                existing.qty += 1;
            } else {
                state.items.push({ ...action.payload, qty: 1 });
            }
        },

        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter(i => i.id !== action.payload);
        },

        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
