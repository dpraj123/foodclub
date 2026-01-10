import { TOP_CHIPS } from './../../assets/data';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Offer = {
    id: string;
    code: string;
    title?: string;
    partner?: string;
};

type OfferState = {
    selectedOffer: Offer | null,
    selectedOfferTag: typeof TOP_CHIPS[number];
};

const initialState: OfferState = {
    selectedOffer: null,
    selectedOfferTag: 'All Offers',
};

const offerSlice = createSlice({
    name: 'offer',
    initialState,
    reducers: {
        selectOffer: (state, action: PayloadAction<Offer>) => {
            state.selectedOffer = action.payload;
        },
        selectOfferTag: (state, action: PayloadAction<typeof TOP_CHIPS[number]>) => {
            state.selectedOfferTag = action.payload;
        },

        clearOffer: (state) => {
            state.selectedOffer = null;
        },
    },
});

export const { selectOffer, selectOfferTag, clearOffer } = offerSlice.actions;
export default offerSlice.reducer;
