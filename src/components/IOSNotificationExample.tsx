import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';

const IOSNotificationExample = () => {

    const showNotification = async () => {
        // Request permission (iOS)
        await notifee.requestPermission();

        // Create channel (required for Android, safe for iOS)
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
            importance: AndroidImportance.HIGH,
        });

        // Display notification
        await notifee.displayNotification({
            title: '🍕 Order Update',
            body: 'Your pizza is on the way!',
            android: {
                channelId,
            },
        });
    };

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <TouchableOpacity
                onPress={showNotification}
                className="bg-orange-500 px-6 py-3 rounded-full"
            >
                <Text className="text-white font-bold text-base">
                    Show iOS Notification
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default IOSNotificationExample;
