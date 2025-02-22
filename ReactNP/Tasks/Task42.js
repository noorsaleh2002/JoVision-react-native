import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


function Screen({ number }) {
  const navigation = useNavigation();

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen {number}</Text>

      
      {number !== 1 && (
        <Button title={`Go to Screen 1`} onPress={() => navigateTo('Screen 1')} />
      )}
      {number !== 2 && (
        <Button title={`Go to Screen 2`} onPress={() => navigateTo('Screen 2')} />
      )}
      {number !== 3 && (
        <Button title={`Go to Screen 3`} onPress={() => navigateTo('Screen 3')} />
      )}
      {number !== 4 && (
        <Button title={`Go to Screen 4`} onPress={() => navigateTo('Screen 4')} />
      )}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Task42() {
  return (
    <NavigationContainer>
      <Tab.Navigator
              screenOptions={() => ({
                tabBarIcon: () => { 
                  
                  return <Ionicons name='scan-outline'  />;
                },
              
              })}
            >
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