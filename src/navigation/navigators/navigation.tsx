import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainRoutes, RootRoutes } from '../Routes';
import HomeScreen from '../../screens/HomeScreen';
import OfferScreen from '../../screens/OfferScreen';
import EatclubScreen from '../../screens/EatclubScreen';
import AccountScreen from '../../screens/AccountScreen';
import AuthStackNavigator from './AuthStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from '@react-native-vector-icons/ant-design';
import {
  navigationRef,
  parsedAndLogRoute,
  setIsnavigationReady,
} from '../Navigation';
import { AppHeader } from '../../components/AppHeader';
const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        tabBarIcon: ({ color }: { color: string }) => {
          let iconName: string = 'home';

          if (route.name === MainRoutes.Home) iconName = 'home';

          if (route.name === MainRoutes.Offers) iconName = 'tags'; // offers

          if (route.name === MainRoutes.Eatclub) iconName = 'shop'; // restaurant / food

          if (route.name === MainRoutes.Account) iconName = 'user';

          return <AntDesign name={iconName as any} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen name={MainRoutes.Home} component={HomeScreen} />
      <Tab.Screen name={MainRoutes.Offers} component={OfferScreen} />
      <Tab.Screen name={MainRoutes.Eatclub} component={EatclubScreen} />
      <Tab.Screen name={MainRoutes.Account} component={AccountScreen} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  const isAuthenticated = true;

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => setIsnavigationReady(true)}
      onStateChange={state => parsedAndLogRoute(state)}
    >
      <RootStack.Navigator screenOptions={{
        headerShown: true,
        header: () => <AppHeader />
      }}>
        {isAuthenticated ? (
          <RootStack.Screen
            name={RootRoutes.MainTabs}
            component={MainStackScreen}
          />
        ) : (
          <RootStack.Screen name="AuthStack" component={AuthStackNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
const MainStackScreen: React.FC = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Tabs" component={MainTabs} />
    </MainStack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
