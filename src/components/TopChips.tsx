import React, { useCallback } from 'react';
import {
    FlatList,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { TOP_CHIPS } from '../assets/data';
import { selectOfferTag } from '../store/slices/offerSlice';
import { RootState } from '../store';

const ACTIVE_COLOR = '#F97316';
const INACTIVE_COLOR = '#E5E7EB';

export const TopChips = () => {
    const dispatch = useDispatch();
    const selectedOfferTag = useSelector(
        (state: RootState) => state.offer.selectedOfferTag
    );

    const renderItem = useCallback(
        ({ item }: { item: typeof TOP_CHIPS[number] }) => {
            const isActive = item === selectedOfferTag;

            return (
                <TouchableOpacity
                    onPress={() => dispatch(selectOfferTag(item))}
                    activeOpacity={0.85}
                    style={{
                        backgroundColor: isActive
                            ? ACTIVE_COLOR
                            : INACTIVE_COLOR,
                        paddingHorizontal: 14,
                        paddingVertical: 8,
                        borderRadius: 20,
                        marginRight: 10,
                    }}
                >
                    <Text
                        style={{
                            color: isActive ? '#FFFFFF' : '#111827',
                            fontSize: 12,
                            fontWeight: '600',
                        }}
                    >
                        {item}
                    </Text>
                </TouchableOpacity>
            );
        },
        [dispatch, selectedOfferTag]
    );

    return (
        <View className="py-2">
            <FlatList
                data={TOP_CHIPS}
                keyExtractor={(item) => item}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                removeClippedSubviews
                initialNumToRender={8}
                windowSize={5}
            />
        </View>
    );
};
