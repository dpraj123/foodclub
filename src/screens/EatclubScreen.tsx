import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';
import NotificationExample from '../components/NotificationExample';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IOSNotificationExample from '../components/IOSNotificationExample';

const EatclubScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      bounces={false}
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: insets.bottom }}
    >
      <View className=' h-80'>
        <NotificationExample />
        <IOSNotificationExample />
      </View>
    </ScrollView>
  );
};

export default EatclubScreen;

const styles = StyleSheet.create({});
