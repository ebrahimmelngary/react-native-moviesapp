import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Details from '../screens/details';
import Movies from '../screens/movies/index';

export const navigationRef: React.RefObject<NavigationContainerRef> =
  React.createRef();

const RootStack = createStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen name={'Movies'} component={Movies} />
        <RootStack.Screen name={'Details'} component={Details} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;

export const navigate = (name: any, params: object | undefined) => {
  navigationRef.current
    ? navigationRef.current.navigate(name, params)
    : undefined;
};
