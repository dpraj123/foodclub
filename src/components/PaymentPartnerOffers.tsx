import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PAYMENT_PARTNERS } from '../assets/data';

export const PaymentPartnerOffers = () => {
    return (
        <View className="px-4 gap-4">
            {PAYMENT_PARTNERS.map((item) => (
                <View
                    key={item.id}
                    className="bg-white rounded-2xl p-4 shadow-md"
                >
                    {/* Header */}
                    <View className="flex-row items-center justify-between mb-2">
                        <Text className="text-base font-extrabold text-gray-900">
                            {item.name}
                        </Text>

                        <View className="bg-green-100 px-3 py-1 rounded-full">
                            <Text className="text-green-600 text-xs font-bold">
                                PAYMENT OFFER
                            </Text>
                        </View>
                    </View>

                    {/* Offer */}
                    <Text className="text-lg font-bold text-gray-800 mb-1">
                        {item.offer}
                    </Text>

                    <Text className="text-sm text-gray-500 mb-4">
                        {item.description}
                    </Text>

                    {/* Bottom Row */}
                    <View className="flex-row items-center justify-between">
                        {/* Coupon */}
                        <View className="border border-dashed border-orange-400 px-4 py-2 rounded-lg">
                            <Text className="text-orange-500 font-bold tracking-widest text-sm">
                                {item.code}
                            </Text>
                        </View>

                        {/* CTA */}
                        <TouchableOpacity
                            activeOpacity={0.85}
                            className="bg-orange-500 px-5 py-2 rounded-full"
                        >
                            <Text className="text-white font-bold text-sm">
                                APPLY
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
};
