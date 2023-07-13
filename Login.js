import React from "react";
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, } from "react-native";

const Login = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'blue', height: 690, alignItems: 'center', justifyContent: 'center' }}>

                {/* <Image source={{ uri: 'https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas=' }}
                    style={{ width: 450, height: 200 }}
                /> */}
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}
                >
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2480/2480421.png' }} style={{ height: 300, bottom: 60 }} />

                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white', }}>English speking</Text>
                    <Text style=
                        {{ color: 'white', left: 20, fontSize: 22 }}>
                        spikink english for bigines
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default Login;