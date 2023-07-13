import React from 'react';
import { Text, FlatList, View, Image, TouchableOpacity } from 'react-native';
import ImagePath from '../assets/Image/Imagepath';

const DATAssss = [
    {
        productName: 'First Item', priceCard: 'Rs44', cardImage:require('../assets/Image/plus.png')
    },
    {
        productName: 'Second Item', priceCard: 'Rs44', cardImage: require('../assets/Image/plus.png')
    },
    {
        productName: 'Third Item', priceCard: 'Rs44', priceCardTwo:'Rs : 333'
    },
    {
        productName: 'Third Item', priceCard: 'Rs44'
    },
];



const jk = ["Banana", "Orange", "Apple", "Mango"];

jk.splice(2,2, "sameer","jk");



const NewFlatList = ({navigation}) => {

    const renderItemttttt = ({ item }) => (
        <View style={{ backgroundColor: "red", marginBottom: 20, flex: 1, margin: 10, padding: 20 }}>


            <Text>{jk}</Text>
          
          <Image style={{height: 70, width: 70, alignSelf:'center'}} source={item.cardImage}/>

            <Text style={{ fontSize: 22, color: 'white' }}>{item.productName}</Text>
            
            
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 22, color: 'white' }}>{item.priceCard}</Text>
                <Text>{item.priceCardTwo}</Text>
            </View>
        </View>
    );

    return (

              <View style={{ flex: 1, }}>
            <FlatList
                numColumns={2}
                data={jk}
                renderItem={renderItemttttt}
                keyExtractor={item => item.id}
            />

            <TouchableOpacity
            
           
            onPress={() => navigation.navigate('jm')}
            >
<Text>go to jm</Text>

            </TouchableOpacity>
        </View>
 
    );
}

export default NewFlatList;