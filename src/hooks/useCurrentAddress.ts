import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { getLocationOnce } from '../assets/utilsFun';

export const useCurrentAddress = () => {
    const [currentAddress, setCurrentAddress] = React.useState<string>(
        'Fetching location...'
    );
    const [selectedAddress, setSelectedAddress] = React.useState<any>(null);

    React.useEffect(() => {
        let isMounted = true;

        (async () => {
            if (selectedAddress) {
                // @ts-ignore
                setCurrentAddress(
                    selectedAddress?.address || selectedAddress?.formatted || ''
                );
                return;
            }

            const cached = await AsyncStorage.getItem('cachedAddress');
            if (cached) {
                const parsed = JSON.parse(cached);
                if (isMounted) {
                    setCurrentAddress(parsed.address || parsed.formatted || '');
                }
                return;
            }

            await getLocationOnce(
                async position => {
                    if (!isMounted) return;

                    const { latitude, longitude } = position.coords;
                    try {
                        const res = await axios.get(
                            'https://nominatim.openstreetmap.org/reverse',
                            {
                                params: {
                                    lat: latitude,
                                    lon: longitude,
                                    format: 'json',
                                },
                                headers: {
                                    'User-Agent': 'FoodClubApp/1.0',
                                },
                            }
                        );

                        if (res?.data?.display_name) {
                            const address = res.data.display_name;

                            setCurrentAddress(address);

                            await AsyncStorage.setItem(
                                'cachedAddress',
                                JSON.stringify({ address, latitude, longitude })
                            );
                        } else {
                            setCurrentAddress('Unable to fetch address');
                        }
                    } catch (error) {
                        console.log('Reverse geocoding error', error);
                        setCurrentAddress('Unable to fetch address');
                    }
                },
                error => {
                    if (!isMounted) return;
                    console.log('Get location error', error);
                    setCurrentAddress('Unable to fetch location');
                }
            );
        })();

        return () => {
            isMounted = false;
        };
    }, [selectedAddress]);

    return { currentAddress };
};
