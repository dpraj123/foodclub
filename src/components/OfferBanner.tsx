import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const OfferBanner = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            className="mx-4 mt-4 rounded-2xl overflow-hidden"
        >
            {/* Background Image */}
            <Image
                source={{
                    uri: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
                }}
                className="w-full h-40"
                resizeMode="cover"
            />

            {/* Overlay */}
            <View className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <View className="absolute inset-0 p-4 justify-between">
                {/* Offer Text */}
                <View>
                    <Text className="text-white text-lg font-extrabold">
                        Flat 40% OFF
                    </Text>
                    <Text className="text-white/90 text-sm mt-1">
                        On Pizza & Burgers
                    </Text>
                </View>

                {/* CTA */}
                <View className="self-start bg-red-500 px-4 py-2 rounded-full">
                    <Text className="text-white text-xs font-bold">
                        ORDER NOW
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default OfferBanner;
