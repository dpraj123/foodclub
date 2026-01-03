import React from 'react';
import { RESTAURANTS } from '../assets/data';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

type Props = {
    item: any;
};

const RestaurantCard = ({ item }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            className="mx-4 mb-4 rounded-2xl bg-white shadow-md overflow-hidden"
        >
            {/* Image */}
            <View className="relative">
                <Image
                    source={{ uri: item.image }}
                    className="w-full h-44"
                    resizeMode="cover"
                />

                {/* Offer */}
                <View className="absolute top-3 left-3 bg-red-500 px-3 py-1 rounded-full">
                    <Text className="text-white text-xs font-bold">
                        {item.offer}
                    </Text>
                </View>

                {/* Rating */}
                <View className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded-lg flex-row items-center">
                    <Ionicons name="star" size={12} color="#facc15" />
                    <Text className="text-white text-xs ml-1 font-semibold">
                        {item.rating}
                    </Text>
                </View>
            </View>

            {/* Details */}
            <View className="p-4">
                <Text className="text-gray-900 text-base font-bold">
                    {item.name}
                </Text>

                <Text className="text-gray-500 text-xs mt-1" numberOfLines={1}>
                    {item.cuisines}
                </Text>

                <View className="flex-row items-center justify-between mt-3">
                    <View className="flex-row items-center">
                        <Ionicons
                            name={"clock-outline" as any}
                            size={14}
                            color="#6b7280"
                        />
                        <Text className="text-gray-600 text-xs ml-1">
                            {item.time}
                        </Text>
                    </View>

                    <Text className="text-gray-600 text-xs">
                        {item.price}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};


const RestaurantList = () => {
    return (
        <View className="flex-1">
            <View className="flex-row items-center justify-center mb-4">
                <Ionicons name={"map" as any} size={24} color="#f97316" />
                <Text className="ml-2 text-gray-800 text-2xl font-bold">
                    Where are You?
                </Text>
            </View>
            <FlatList
                data={RESTAURANTS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <RestaurantCard item={item} />}
                scrollEnabled={false}
            />
        </View>
    );
};

export default RestaurantList;
