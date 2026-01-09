import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CategoriesGrid from '../components/CategoriesGrid';
import RestaurantList from '../components/RestaurantList';
import TopOffers from '../components/TopOffers';
const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      bounces={false}
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: insets.bottom }}
    >
      <TopOffers />
      <CategoriesGrid />
      <RestaurantList />
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({});
