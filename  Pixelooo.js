import React, { useState } from 'react';
import { Text, StatusBar, View, Modal, Pressable, ImageBackground, TouchableOpacity, TextInput } from 'react-native';

const Pixelooo = () => {

    const [modalDemo, setModalDemo] = useState(true);

    return (
        <View style={{ flex: 1, backgroundColor: 'yellow' }}>
            <ImageBackground style={{ height: '100%' }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQSQJyd0WQC6NdkF8o3L0CfJzh6O0wIntXQ&usqp=CAU" }}>
                <Text style={{ fontSize: 30, color: 'red' }}>jk deshwali merta ciyc gaw karkwal pixel software engineer jaipur welcome to jaipur sir farukh khan deshwali karkwal basni rood web designing development jakir khan pixel most welcome new bench starte super fast kgn pixel.</Text>


                <TouchableOpacity onPress={() => setModalDemo(true)}>
                    <Text style={{ backgroundColor: 'red', color: 'blue', fontSize: 33 ,textAlign:'center'}}>jk deshwali</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalDemo}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalDemo(!modalDemo);
                    }}
                >
                    <View style={{ backgroundColor: 'rgba(247, 103, 64, 0.8)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: 'white', minHeight: 200, width: '80%', padding: 10 }}>
                            <Text style={{ fontSize: 22 }}>farukh</Text>


                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ backgroundColor: 'pink', padding: 10, width: '50%' }}>
                                    <Text style={{ fontSize: 22, color: 'white' }}>new pixel</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, width: '50%' }} onPress={() => setModalDemo(!modalDemo)}>
                                    <Text style={{ fontSize: 22, color: 'white' }}>pixel </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>


            </ImageBackground>
        </View>
    );
}

export default Pixelooo;