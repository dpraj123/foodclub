import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

const NotificationExample = () => {
    const showNotification = () => {
        Alert.alert(
            'Hello 👋',
            'This is a simple notification',
            [
                { text: 'OK', onPress: () => console.log('OK pressed') },
            ]
        );
    };

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <TouchableOpacity
                onPress={showNotification}
                className="bg-orange-500 px-6 py-3 rounded-full"
            >
                <Text className="text-white font-bold text-base">
                    Show Notification
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default NotificationExample;
