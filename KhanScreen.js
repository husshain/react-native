import React from "react";
import { View, Text,Image } from "react-native";
import Colorpath from "../assets/Colorpath";
import ImagePath from "../assets/Image/Imagepath";
import styles from "../common/Customstyle";

const KhanScreen = () => {   
    
    return (
        <View style={{ flex: 1, }}>

            <View style={styles.container}>
               <Text style={styles.Text}>khan joya</Text>

            </View>


            <View style={styles.container}>
                <Text style={styles.Text}>khan sameer joya </Text>
                <Image style={styles.Image} source={ImagePath.Golden}/>
            </View>
        </View>
    )
}
export default KhanScreen;