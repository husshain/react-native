import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import ImagePath from "../assets/Image/Imagepath";

const Verify = ({ navigation }) => {

    const [one, setone] = useState()
    const [khan, setkhan] = useState()
    return (
        <View style={{ flex: 1, }}>
            <TouchableOpacity

                style={{ backgroundColor: 'skyblue', flexDirection: 'row' }}
            >

                <Image style={{ width: 200, height: 200 }} source={one ? ImagePath.imagess : ImagePath.mnu} />
                <Image style={{ width: 200, height: 200 }} source={one ? ImagePath.imagess : ImagePath.mnu} />


            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setkhan(!khan)}
            >
                <Text style={{ fontSize: khan ? 60 : 20, color: khan ? 'black' : 'green' }}>jk deshwali</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setone(!one)}
                style={{ backgroundColor: one ? 'blue' : 'skyblue', flexDirection: 'row' }}
            >
                <Image style={{ width: 200, height: 200 }} source={one ? ImagePath.bkimage : ImagePath.mobile} />
                <Image style={{ width: 200, height: 200 }} source={one ? ImagePath.bkimage : ImagePath.mobile} />



            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('FlatListScreen')}>
                <Text style={{ textAlign: 'center', fontSize: 30 }}>Rideo</Text>
            </TouchableOpacity>


        </View>
    )
}
export default Verify;
