import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useCurrentAddress } from '../hooks/useCurrentAddress';

export const AppHeader = () => {
    const { currentAddress } = useCurrentAddress();
    const cartCount = 2;

    return (
        <SafeAreaView className="bg-[#0f2a1d] pb-2" edges={['top']}>
            <View className="px-4 flex-row items-center justify-between">
                {/* Address */}
                <View className="flex-1 pr-3">
                    <Text className="text-[14px] text-gray-300 font-semibold">
                        Delivering to :
                    </Text>
                    <Text
                        numberOfLines={2}
                        className="text-sm font-semibold text-white"
                    >
                        {currentAddress}
                    </Text>
                </View>

                {/* Cart Button */}
                <TouchableOpacity
                    activeOpacity={0.85}
                    className="relative bg-white/10 rounded-xl p-2"
                >
                    <Ionicons name="cart-outline" size={22} color="#fff" />

                    {/* Badge */}
                    {cartCount > 0 && (
                        <View className="absolute -top-1 -right-1 bg-red-500 w-5 h-5 rounded-full items-center justify-center">
                            <Text className="text-white text-[10px] font-bold">
                                {cartCount}
                            </Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
