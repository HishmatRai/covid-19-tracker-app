import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import Getstart from '../../Screen/Getstart/Getstart'
import Home from './../../Screen/Home/Home'
import Country from './../../Screen/Country/Country'
import News from './../../Screen/News/News'

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Getstart" component={Getstart} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={BottomNavigation} options={{ headerShown: false }} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}




const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home}

        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon android="md-settings" style={{ fontSize: 20, color: 'red' }} />
          ),
        }}
      />
      <Tab.Screen name="Country" component={Country} />
      <Tab.Screen name="News" component={News} />

    </Tab.Navigator>
  );
}

export default StackNavigation