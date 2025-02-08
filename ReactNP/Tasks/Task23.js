import React, { useState } from "react";
import { Text,View,StyleSheet } from "react-native";
import MyClassPAgeTask23 from "../Componants/MyClassPage_Task23";
const Task23 =()=>{

 const [text,settext]=useState("");
 return(
<View style={styles.body}>
<Text style={styles.text}>Parent Component text:{text}</Text>
<MyClassPAgeTask23 text={settext}/>

</View>



 );


};


const styles=StyleSheet.create(
    {
        body:{
            alignItems:'center',
            justifyContent:'center',
            flex:1,
            marginTop:100,
        
    
        },
        text:{
            fontSize:24,
    
        }
    
    
    
    }
    
    );
export default Task23;