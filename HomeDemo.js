import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, StatusBar, } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CustomInput from "../common/CustomInput";

const HomeDemo = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <StatusBar backgroundColor={'green'}></StatusBar>
                <LinearGradient colors={['green', 'skyblue', 'red',]}>
                    <View style={{ padding: 20 }}>
                        <CustomInput
                            placeholder={'pixel1'}
                            bgColor="pink"
                          
                        />


                        




                    </View>
                    <View style={{ padding: 20, marginTop: 10 }}>
                        <CustomInput
                            placeholder={'pixel2'}
                            bgColor="blue"
                        />
                    </View>
                    <View style={{ padding: 20, marginTop: 10 }}>
                        <CustomInput
                            placeholder={'pixel3'}
                            bgColor="skyblue"
                        />
                    </View>
                    <View style={{ padding: 20, marginTop: 10 }}>
                        <CustomInput
                            placeholder={'words'}
                            bgColor="blue"
                        />
                    </View>
                    <View style={{ padding: 20, marginTop: 10 }}>
                        <CustomInput
                            placeholder={'jk bhai'}
                            bgColor={"white"}

                        />
                    </View>
                        <View style={{padding:20,marginTop:10}}>
                <CustomInput
                 placeholder={'jk bhai'}
                 bgColor={"pink"}></CustomInput>

                
                    </View>

                    <View style={{padding:20,marginTop:10}}>
                <CustomInput
                 placeholder={'jk bhai'}
                 bgColor={"pink"}

                />
                    </View>
                    <View style={{padding:20,marginTop:10}}>
                <CustomInput
                 placeholder={'jk bhai'}
                 bgColor={"yellow"}

                />
                    </View>
         


                </LinearGradient>
                <TouchableOpacity style={{ width: '60%', height: 40, backgroundColor: 'gray', marginTop: 90, alignSelf: 'center' }}
                    onPress={() => navigation.navigate('Demodis')}
                >
                    <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }}>JK deshwali</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
export default HomeDemo;