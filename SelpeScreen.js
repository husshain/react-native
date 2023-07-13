
import React, { useState } from 'react';
import { View, Text, FlatList ,TouchableOpacity,Image,StatusBar} from 'react-native';
import ImagePath from '../assets/Image/Imagepath';

const radioScrren = () => {

const [radioSelect,setRadioSelect] = useState ()

const RadioBtn = (data)=>{
   setRadioSelect(data)
}


return(
<View style={{flex:1,padding:30,flexDirection:'row'}}>
<TouchableOpacity onPress={()=> RadioBtn("1")} style={{flexDirection:'row',marginTop:15}}>
<Image style={{height:20,width:20,}} source={radioSelect=="1" ? ImagePath.Golden : ImagePath.khan}/>
 <Text style={{fontSize:20,marginTop:20}}>pixel</Text>
</TouchableOpacity>




<TouchableOpacity onPress={()=> RadioBtn("2")} style={{flexDirection:'row',marginTop:15}}>
<Image style={{height:20,width:20,}} source={radioSelect=="2" ? ImagePath.Golden : ImagePath.khan}/>
 <Text style={{fontSize:20,marginTop:20}}>Farukh</Text>
</TouchableOpacity>


<TouchableOpacity onPress={()=> RadioBtn("3")} style={{flexDirection:'row',marginTop:15}}>
<Image style={{height:20,width:20,}} source={radioSelect=="3" ? ImagePath. radio: ImagePath.khan}/>
 <Text style={{fontSize:20,marginTop:20}}>jk deshwali</Text>
</TouchableOpacity>





</View>

);
 
}



export default radioScrren ;











