import React, { forwardRef, useImperativeHandle, useState } from "react";
import { View,Text } from "react-native";
const MYFuntionPageTask24=forwardRef((props,ref)=>{
const [outputtext,setoutputtext]=useState('');
useImperativeHandle(ref,()=>({

updateText:(newText)=>{

    setoutputtext(newText);
}




}))

return (

<View style={{marginTop:20}}>
    <Text style={{fontSize:20}}>This is text  child Componant</Text>
  <Text style={{fontSize:20,marginLeft:125,color:"blue"}}>{outputtext}</Text>
</View>


);



});

export default MYFuntionPageTask24;