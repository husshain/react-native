import React, { useState } from "react";
import { TouchableOpacity, Text, View, ScrollView, FlatList } from "react-native";


const Array_item = () => {
    const [bollywood,setbollywood]=useState([
        { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
        { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
        { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
        { "id": "4", "title": "Inception", "releaseYear": "2010" },
        { "id": "5", "title": "Interstellar", "releaseYear": "2014" },
   
    ])
    const [value,setvalue]=useState(true)


const AddValue=()=>{
    bollywood.push({ "id": "2", "title": "Back to the Future", "releaseYear": "1985" })
    setvalue(!value)
}

const AddDec=()=>{
    bollywood.pop()
    setvalue(!value)
}

const selectvalue=(items,)=>{

    const itemToRemoveIndex = bollywood.findIndex(function(item) {
        return item.id == items.id;
    });

      console.log('itemToRemoveIndex',itemToRemoveIndex)
      

      
      if(itemToRemoveIndex !== -1){
        bollywood.splice(itemToRemoveIndex, 1);
        setvalue(!value)

      }
      

    

}
  
    

    const renderItem = ({ item,index }) => {
        return (
            <TouchableOpacity onPress={()=>{selectvalue(item,index)}} style={{marginTop: 33, borderBottomColor: 'white', borderBottomWidth:1}}>
                <Text style={{ fontSize: 33, color: 'black', textAlign: 'center' }}>{item.name}</Text>
                <Text style={{ fontSize: 33, color: 'black', textAlign: 'center' }}>{item.id}</Text>
                <Text style={{ fontSize: 33, color: 'black', textAlign: 'center' }}>{item.title}</Text>
                <Text style={{ fontSize: 33, color: 'black', textAlign: 'center' }}>{item.releaseYear}</Text>
            </TouchableOpacity>
        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'red', }}>
           <FlatList
                data={bollywood}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity onPress={()=>{AddValue()}}>
            <Text style={{ fontSize: 50, color: 'black', textAlign: 'center' }}>+</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{AddDec()}}>
            <Text style={{ fontSize: 50, color: 'black', textAlign: 'center' }}>-</Text>

            </TouchableOpacity>


        </View>

    )
}
export default Array_item;