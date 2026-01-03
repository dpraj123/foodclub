import Geolocation from "@react-native-community/geolocation";
import { PermissionsAndroid, Platform } from "react-native";

export const requestLocationPermission = async () => {
    try {
        if (Platform.OS === 'ios') {
            return new Promise(resolve => {
                Geolocation.requestAuthorization(() => resolve(true), (err: any) => {
                    console.log("error", err)
                    resolve(false)
                })
            });
        } else {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Location Permission",
                    message: "This app needs access to your location.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        }


    } catch (error) {
        console.log("error", error)
    }
}
export const getLocationOnce = async (
    onsuccess: (position: any) => void,
    onFail: (error: any) => void
) => {
    const ok = await requestLocationPermission();
    if (!ok) {
        onFail("Permission not granted")
        return;
    }
    let got = false;
    Geolocation.getCurrentPosition(
        (position: any) => {
            got = true;
            console.log("get current position success", position)
            onsuccess(position);
        },
        (error: any) => {
            console.log("get current position error", error)
            if (!got) {
                let watchId: number | null = null;
                try {
                    watchId = Geolocation.watchPosition(pos => {
                        console.log("watch position fallback position", pos)
                        if (watchId !== null) {
                            Geolocation.clearWatch(watchId);
                            watchId = null;
                        }
                        onsuccess(pos)
                    }, watchErr => {
                        console.log("watch position fallback error", watchErr)
                        if (watchId !== null) {
                            Geolocation.clearWatch(watchId);
                            watchId = null;
                        }
                        onFail(watchErr)
                    });
                    setTimeout(() => {
                        if (watchId !== null) {
                            Geolocation.clearWatch(watchId);
                        }
                        onFail({ message: "Timeout getting location" });
                    }, 8000);
                } catch (error) {
                    console.log("watch position fallback exception", error)
                    onFail(error);
                }
            } else {
                onFail(error);
            }
        },
        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000
        }
    );
}