import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { TOP_OFFERS } from '../assets/data';

const TopOffers = () => {
    const renderItem = ({ item }: { item: (typeof TOP_OFFERS)[0] }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                className="mr-4 w-64 rounded-2xl overflow-hidden"
            >
                {/* Image */}
                <Image
                    source={{ uri: item.image }}
                    className="w-full h-36"
                    resizeMode="cover"
                />

                {/* Overlay */}
                <View className="absolute inset-0 bg-black/35" />

                {/* Content */}
                <View className="absolute inset-0 p-4 justify-between">
                    {/* Top row */}
                    <View className="flex-row items-center justify-between">
                        <View className="bg-red-500 px-3 py-1 rounded-full">
                            <Text className="text-white text-xs font-bold">
                                STARTS AT {item.price}
                            </Text>
                        </View>

                        <Ionicons name="flame-outline" size={18} color="#fff" />
                    </View>

                    {/* Bottom text */}
                    <Text
                        numberOfLines={2}
                        className="text-white text-base font-extrabold"
                    >
                        {item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View className="mt-6">
            {/* Section Header */}
            <View className="flex-row items-center justify-between px-4 mb-4">
                <Text className="text-gray-900 text-lg font-extrabold">
                    Top Offers 🔥
                </Text>

                <TouchableOpacity>
                    <Text className="text-orange-500 text-xs font-bold">
                        VIEW ALL
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Horizontal List */}
            <FlatList
                data={TOP_OFFERS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 16 }}
            />
        </View>
    );
};

export default TopOffers;
