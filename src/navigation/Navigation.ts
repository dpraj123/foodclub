import {
  NavigationContainerRef,
  NavigationState,
} from '@react-navigation/native';
import React from 'react';
import {RootStackParamList} from './Routes';
import logger from '../utils/Logger';

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();
export function parsedAndLogRoute(state: NavigationState | undefined) {
  if (!state) return;
  const route = state.routes[state.index];
  logger.info('Current Route:', route.name, route.params);
}

export function setIsnavigationReady(isReady: boolean) {
  if (isReady) {
    logger.info('Navigation is ready');
  }
}
