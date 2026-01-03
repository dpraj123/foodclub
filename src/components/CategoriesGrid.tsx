import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { CATEGORIES } from '../assets/data';
import AntDesign from '@react-native-vector-icons/ant-design';
import Ionicons from '@react-native-vector-icons/ionicons';

const CategoriesGrid = () => {
  const renderItem = ({ item }: { item: (typeof CATEGORIES)[0] }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        className="flex-1 mb-4"
      >
        <View className="rounded-2xl overflow-hidden bg-black">
          {/* Image */}
          <Image
            source={{ uri: item.img }}
            className="w-full h-24"
            resizeMode="cover"
          />

          {/* Dark overlay */}
          <View className="absolute inset-0 bg-black/30" />

          {/* Title chip */}
          <View className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded-lg">
            <Text className="text-xs font-bold text-gray-900">
              {item.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="px-4 mt-2">
      <View className="flex-row items-center justify-center mb-4">
        <Ionicons name={"fast-food-outline" as any} size={24} color="#f97316" />
        <Text className="ml-2 text-gray-800 text-2xl font-bold">
          What’s on your mind?
        </Text>
      </View>

      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ gap: 12 }}
        scrollEnabled={false}
      />
    </View>
  );
};

export default CategoriesGrid;
