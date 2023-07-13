import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native"
import CustomInput from "../common/CustomInput";
import ImagePath from "../assets/Image/Imagepath";
import CustomBtn from "../common/CustomBtn";
const Jm = (navigation) => {
  return (
    <View style={{ backgroundColor:'blue',}}>
<View style={{width:'100%',flexDirection:'row'}}> 
<View style={{width:'50%'}}> 
      <CustomBtn
      Text="Login"
      bgcolor="green"
      padding={15}
      
      />
      </View>
      
<View style={{width:'50%'}}>
  <CustomBtn
  Text="SignUp"
  bgcolor="red"
  padding={15}

  />
</View>
</View>

<View style={{flexDirection:'row'}}>
<View style={{width:'50%'}}>
  <CustomBtn
  Text="SignIn"
  bgcolor="skyblue"
  padding={15}/>
</View>

<View style={{width:'50%'}}>
  <CustomBtn
  Text="SignIn"
  bgcolor="yellow"
  padding={15}/>
</View>
</View>



       
    
    <CustomInput
          bgColor='red'
          placeholderTextColor='white'
          placeholder='jk deshwali'
          CustomInput={ImagePath.Golden}

            />
            
         
            <CustomInput
          bgColor='pink'
          placeholder='deshwali'
          CustomInput={ImagePath.bkimage}

            />
            <CustomInput
          bgColor='yellow'
          CustomInput={ImagePath.mobile}
          

            />

 <CustomInput
          bgColor='red'
            
            />
 <CustomInput
          bgColor='black'
            
            />
 <CustomInput
          bgColor='red'
            
            />

<TouchableOpacity style={{ width: '60%', height: 40, backgroundColor: 'gray', marginTop: 90, alignSelf: 'center' }}
                    onPress={() => navigation.navigate('Demodis')}
                >
                    <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }}>JK deshwali</Text>
            
  





</TouchableOpacity>

    </View>



  )
}
export default Jm;

