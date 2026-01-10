import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PROMOS } from '../assets/data';

export const PromoCarousel = () => {
    return (
        <View className="p-4 gap-4">
            {PROMOS.map((item) => (
                <View
                    key={item.id}
                    className="rounded-2xl bg-white p-4 shadow-md"
                >
                    {/* Top Row */}
                    <View className="flex-row items-center justify-between mb-2">
                        <Text className="text-xs font-semibold text-gray-500">
                            {item.titleTop}
                        </Text>

                        <View className="bg-orange-100 px-3 py-1 rounded-full">
                            <Text className="text-orange-500 text-xs font-bold">
                                LIMITED
                            </Text>
                        </View>
                    </View>

                    {/* Offer Text */}
                    <Text className="text-lg font-extrabold text-gray-900 leading-6 mb-4">
                        {item.titleMain}
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
                            activeOpacity={0.8}
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
