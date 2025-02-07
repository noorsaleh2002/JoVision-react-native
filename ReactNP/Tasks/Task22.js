import React, { useState } from "react";
import { Text,StyleSheet, View } from "react-native";
import MyFunctionPageTask22 from "../Componants/MyFuntionPage_Task22";

const Task22 =()=>{
const [text,setText]=useState('');

return (

<View style={styles.body}>
    <Text style={styles.text}>
         Parent Component text: {text}
    </Text>
    <MyFunctionPageTask22 text={setText} />
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
export default Task22;