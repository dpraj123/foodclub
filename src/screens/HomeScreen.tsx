import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView >
      <Text className="text-xl font-bold text-blue-500">HomeScreen</Text>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({});
