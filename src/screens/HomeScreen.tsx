import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import CategoriesGrid from '../components/CategoriesGrid';
import OfferBanner from '../components/OfferBanner';
import RestaurantList from '../components/RestaurantList';
const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      bounces={false}
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: insets.bottom }}
    >
      <OfferBanner />
      <CategoriesGrid />
      <RestaurantList />
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({});
