import React from "react";
import { StyleSheet,Text,View,TextInput } from "react-native";


const MyFunctionPageTask22 =({text})=>{

return (
<View style={styles.body}>
<Text style={styles.text}>
   Enter Text:
</Text>
<TextInput style={styles.text} onChangeText={text}/>
  


</View>



);




};

const styles=StyleSheet.create({
 body:{
justifyContent  :'center',
alignItems:'center ',
flex:1,

marginTop:150,
 },
text:{
   fontSize:20,


}


});

export default MyFunctionPageTask22;