import React, { useState } from "react";
import { ImageBackground, View ,StatusBar,Modal,Button,Text, TouchableOpacity} from "react-native";
import OTPTextInput from 'react-native-otp-textinput';

function AHScreen() {
    const [modalDemo,setModalDemo] = useState(true);
    const [modalDemoTwo,setModalDemoTwo] = useState(true);
    return (

<View style={{flex:1,backgroundColor:'red'}}>


 <Text style={{fontSize:22,color:'green'}}>jk deshwali ki terf se aap sabi ko gyarahavin sharif ka chand mubark ho  jk deshwali jdghq5dhf o yg7f4gboftorfhgfkgh2vgqghjpghvnhgqjk desheajkgjkbhs;jk bhajkdhdfuyiuyf8ytighyigykaj[t4ihguyt18hofqht78ypfjdiuhytduihyfgtyyufbcipqybcrcgvhc  cubuhlbcfttttttttttttjhgtfyhbfq]
 </Text>


 <TouchableOpacity onPress={()=> setModalDemo(true)}> 


<Text style={{fontSize:25,backgroundColor:'blue',textAlign:'center'}}>pixel dreem</Text>


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
        <View style={{backgroundColor:'yellow',minHeight:200,width:'60%',flexDirection:'row', }}>
         
       
 
            <Text> jk bhai</Text>

            <View> 
            <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:30}}> 
            <TouchableOpacity onPress={() => setModalDemo(!modalDemo)}>
             
              <Text style={{fontSize:25,backgroundColor:'red',}}>pixel </Text>


            </TouchableOpacity>

            
                <TouchableOpacity onPress={()=>setModalDemoTwo(true)}>
                <Text style={{fontSize:20,backgroundColor:'blue'}}>pixel</Text>
                </TouchableOpacity>
            
            </View>
            </View>

        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalDemoTwo}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalDemoTwo(!modalDemoTwo);
        }}
      >
        <View>
          <View style={{backgroundColor:'gray',width:'80%',minHeight:200}}>
            <Text style={{textAlign:'center'}}>farukh deshwali</Text>
            <TouchableOpacity
              
              onPress={() => {setModalDemoTwo(!modalDemoTwo)}} 
            >


<OTPTextInput/>




              <Text style={{fontSize:40,color:'white',textAlign:'center',marginTop:40}}>jk deshwali</Text>
            </TouchableOpacity>


          </View>
        </View>
      </Modal>
  

    
      







</View>         


        
      
    );
  }
export default AHScreen;



