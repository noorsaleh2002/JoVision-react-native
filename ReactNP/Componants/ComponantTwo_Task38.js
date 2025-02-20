import React, { useContext, useState } from "react";
import { TextInput, View } from "react-native";
import { sharedTextContext } from "./TextContext_Task38";
import ComponantOne from "../Componants/ComponantOne_Task38"

const ComponantTwo=()=>{
const {text,setText}=useContext(sharedTextContext);
return(

<View>
  <TextInput
  placeholder="Type here...."
  onChangeText={(newtext)=>setText(newtext)}
  value={text}

  
  
  />
 <ComponantOne/>

</View>


);

};


export default ComponantTwo;