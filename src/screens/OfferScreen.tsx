import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { TopChips } from '../components/TopChips';
import { RootState } from '../store';
import { OFFER_SECTIONS, OfferTag } from '../assets/offerSections';

const OfferScreen = () => {
  const insets = useSafeAreaInsets();
  const selectedOfferTag = useSelector(
    (state: RootState) => state.offer.selectedOfferTag
  )
  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={{ paddingBottom: insets.bottom }}
    >
      <Text className="text-2xl font-bold px-4 mt-4 mb-2">
        DEALS
      </Text>

      <TopChips />

      {OFFER_SECTIONS
        .filter(section =>
          section.visibleFor.includes(selectedOfferTag as any)
        )
        .map(section => {
          const SectionComponent = section.component;

          return (
            <View key={section.id}>
              <Text className="text-2xl font-bold px-4 mt-4">
                {section.title}
              </Text>

              {section.subtitle && (
                <Text className="text-md text-gray-700 px-4 mb-2">
                  {section.subtitle}
                </Text>
              )}

              <SectionComponent />
            </View>
          );
        })}

    </ScrollView>
  );
};

export default OfferScreen;
