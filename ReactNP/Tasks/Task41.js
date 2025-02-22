import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Screen({ number }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen {number}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Task41() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen 1">
          {() => <Screen number={1} />}
        </Tab.Screen>
        <Tab.Screen name="Screen 2">
          {() => <Screen number={2} />}
        </Tab.Screen>
        <Tab.Screen name="Screen 3">
          {() => <Screen number={3} />}
        </Tab.Screen>
        <Tab.Screen name="Screen 4">
          {() => <Screen number={4} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
