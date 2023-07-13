import React from "react";
import { View, Text, backgroundColor } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const SignupScreen = ({ navigation }) => {
  return (
    <LinearGradient style={{ flex: 1, backgroundColor: 'blue', }} colors={['green', 'skyblue', 'red',]}>

      <LinearGradient colors={['green', 'skyblue', 'red',]} >

        <Text style={{ fontSize: 33, color: 'white', textAlign: 'center', marginTop: 100 }}
          onPress={() => navigation.navigate('HomeDemo')}
        >
          jakir deshwali </Text>


      </LinearGradient>


    </LinearGradient>


  )
}
export default SignupScreen;