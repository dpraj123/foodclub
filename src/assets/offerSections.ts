// offerSections.ts
import React from 'react';
import { PromoCarousel } from '../components/PromoCarousel';
import { PaymentPartnerOffers } from '../components/PaymentPartnerOffers';
import { TOP_CHIPS } from './data';

export type OfferTag = typeof TOP_CHIPS[number];

export type OfferSection = {
    id: string;
    title: string;
    subtitle?: string;
    component: React.ComponentType;
    visibleFor: OfferTag[];
};


export const OFFER_SECTIONS = [
    {
        id: 'flat',
        title: 'Flat OFF',
        component: PromoCarousel,
        visibleFor: ['All Offers', 'Flat OFF'],
    },
    {
        id: 'payment',
        title: 'Payment Partners',
        subtitle: 'Discount auto applies upon payment',
        component: PaymentPartnerOffers,
        visibleFor: ['All Offers', 'Payment Partners'],
    },
] satisfies OfferSection[];
