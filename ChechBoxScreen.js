import React, {useState} from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ImagePath from "../assets/Image/Imagepath";


const ChechBoxScreen = ({navigation}) => {

    const [checks, setChecks] = useState()
    

    const checkboxbtn = () => {
        setChecks(!checks)
    }

    const [card, setCard] = useState();
        
    const [box, setbox] = useState();

    return (
        <View style={{ flex: 1, }}>

            <TouchableOpacity style={{ backgroundColor: checks ? 'green' : 'yellow' }} onPress={() => checkboxbtn()}>

                <Image style={{ height: 150, width: 150 }} source={checks ? ImagePath.mnv : ImagePath.monti} />

                <Text style={{ fontSize: checks ? 33 : 50, color: checks ? 'red' : 'blue' }}>new banch</Text>

            </TouchableOpacity>


            <TouchableOpacity style={{backgroundColor:card ? 'red' : 'blue', minHeight: 100}} onPress={() => setCard(!card)}>

                <Text style={{ fontSize: 44 }}>my work</Text>

            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: box ? 'pink': 'gray',minHeight:100,}} onPress={() => setbox(!box) }>

                <Image style={{height:180,width:180}} source={box ? ImagePath.monti: ImagePath.mobile} />

            <Text style={{fontSize:30}}>jk deshwali</Text>

            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:box ? 'pink' : 'brown',minHeight:70}} onPress={() => setbox(!box)}>

                <Text style={{fontSize:30}}>CheckBoxScreen</Text>

            </TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Demodis')}>
            <Text style={{fontSize:30,textAlign:'center'}}>
                good
            </Text>
</TouchableOpacity>
        </View>
    );
}

export default ChechBoxScreen;