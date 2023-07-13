import React from "react";
import { View, Text, backgroundColor,FlatList, Image, StyleSheet,ImageBackground} from "react-native";
import ImagePath from "../assets/Image/Imagepath";
;

const NightWorkRk = () => {
  return (
    <View style={{flex:1,}}>
 {/* <FlatList
//  numColumns={2}
//       data={[{key: 'Devin'},{key: 'Dan'},{key: 'Dominic'},{key: 'Jackson'},{key: 'James'},
//       {key: 'Joel'},{key: 'John'},{key: 'Jillian'},{key: 'Jimmy'},{key: 'Julie'},]}

//         renderItem={({item}) =>
        
//             <View style={{width:'45%',height:100,backgroundColor:'red'}}>

//             </View>
        
    
//       />
  */}


<FlatList
                numColumns={2}
                data={[
                    { price: 'Rs. 503', cardIcon:ImagePath.Golden, cardText: '1 card', MainBg: { uri: 'https://i.pinimg.com/550x/9e/11/67/9e116714a33851fbadeb9f3dbef7fcdd.jpg' } },

                    { price: 'Rs. 934', cardIcon: { uri: 'https://www.pngitem.com/pimgs/m/207-2077758_dollar-icon-dollar-sign-icon-hd-png-download.png' }, cardText: '2 card', MainBg: { uri: 'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg' } },

                    { price: 'Rs. 9493', cardIcon: require('../assets/Image/mnv.png')},

                    { price: 'Rs. 2044', cardIcon: { uri: 'https://www.kindpng.com/picc/m/13-130474_black-credit-card-pay-card-icon-png-transparent.png' }, cardText: '4 cardss' },{ price: 'Rs. 2044', cardIcon: { uri: 'https://www.kindpng.com/picc/m/13-130474_black-credit-card-pay-card-icon-png-transparent.png' }, cardText: '4 cardss' },
                    
                    { price: 'Rs. 2044',cardIcon:ImagePath.khan, cardText: '4 cardss' }
                ]}
                renderItem={({ item }) =>
                    <ImageBackground source={item.MainBg} style={{backgroundColor: 'blue', flex:1,marginHorizontal:10,marginVertical:10}}>

                        <Image style={{ height: 30, width: 30 }} source={item.cardIcon} />

                        <Text style={{ color: 'white', fontSize: 22, marginTop: 15 }}>{item.price} </Text>

                        <Text style={{ color: 'white' }}>{item.cardText}</Text>

                        
                    </ImageBackground>
                    
                    
                }
            />

 
  
</View>
    );
}
export default NightWorkRk;
const styles = StyleSheet.create({
    cardMain: {
        backgroundColor: 'white',  marginBottom: 20, margin: 10, flex: 1, elevation: 7, borderRadius: 20, borderWidth: 2, borderColor: 'red', flexDirection: 'row', padding: 15
    }
  });






