import React, {  useEffect } from "react";
import {  StyleSheet, Text, View } from "react-native";



const  MyFunctionPageTask21=({show})=>{
useEffect(()=>{

if(show){
    console.log("loaded");
}
else
{
    console.log("unleaded");
}

},[show]);
return(

<View style={styles.body}>
    <Text style={styles.print}>
        {show?"MyFunction show":"MyFunction not show"}
    </Text>
</View>


);



};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  print: {
    color: "orange",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MyFunctionPageTask21;
