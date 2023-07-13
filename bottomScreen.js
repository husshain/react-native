import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import ImagePath from '../asstes/ImagePath';

import CheckBoxScreen from '../screen/CheckBoxScreen';
import HomeScreen from '../screen/HomeScreen';
import LoginScreen from '../screen/LoginScreen';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator initialRouteName="LoginScreen"
      screenOptions={{
        tabBarStyle: {  backgroundColor: 'white', height: 70, },
        tabBarLabelStyle: { fontSize: 22,  },
        
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'white',
        tabBarActiveBackgroundColor:'yellow',
        tabBarInactiveBackgroundColor:'green',
        tabBarHideOnKeyboard: true
                
      }}
    >


      <Tab.Screen name="CheckBoxScreen" component={CheckBoxScreen}
        options={{
          tabBarLabel: 'CheckBox',
          tabBarIcon: ({ focused }) => (
            <Image style={{ height: 30, width: 30, tintColor:focused ? "black" : 'white' }} source={ImagePath.heartIcon} />
          ),
        }}


      />

      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ focused }) => (
            <Image style={{ height: 30, width: 30 }} source={focused ? ImagePath.Uncheck : ImagePath.notificationIcon} />
          ),
        }}
      />

      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image style={{ height: 30, width: 30 }} source={ImagePath.notificationIcon} />
          ),
        }}
      />


    </Tab.Navigator>
  );
}

export default BottomTab;