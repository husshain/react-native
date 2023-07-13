import React from 'react';
import { Text, FlatList, View, Image, TouchableOpacit} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Signup from './Signup';
import Verify from './Verify';
import ImagePath from '../assets/Image/Imagepath';
import OtpScreen from './OtpScreen';
import ChechBoxScreen from './ChechBoxScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';


const RenderItemStack =(props)=>{

const {  tabActive,tabUnActive,title,isfocused  }=props

return (
<View>

            



</View>




)


}
















const OtpStack  = createNativeStackNavigator();

function OtpScreenStack() {
  return (
    <OtpStack.Navigator>
      <OtpStack.Screen name="OtpScreen" component={OtpScreen} />
     
    </OtpStack.Navigator>
  );
}


const ChechBoxStack  = createNativeStackNavigator();

function CheckBoxScreenStack() {
  return (
    <CheckBoxStack.Navigator>
      <ChechBoxStack.Screen name="CheckBoxScreen" component={ChechBoxScreen} />
     
    </CheckBoxStack.Navigator>
  );
  
}



 
const Tab = createMaterialTopTabNavigator();

function TopTab () {
  return (

    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12,color:'black' },
      tabBarItemStyle: {height:80},
      tabBarStyle: { },
    }}
    >

      <Tab.Screen name="Signup" component={OtpScreenStack}  
      
      
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => {

        }
          
      }}
      
      />


      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      
    </Tab.Navigator>
  );
}
export default TopTab;          