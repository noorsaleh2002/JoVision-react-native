import React, { useState } from "react";
import useCurrentTime from "../Componants/UserCurrentTime_Task34";
import { View,StyleSheet,Button,Text } from "react-native";

const Task34 =()=>{
   const [isActive,setisActive]=useState(false);
   const currentTime=useCurrentTime(isActive);
   const toggleT=()=>{
     
  setisActive(prevState=>!prevState);

     
   };
  
   return (
    <View style={styles.container}>
      <Button title={isActive?"Stop timer":"Start Timer"} onPress={toggleT} />
      
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{currentTime.toLocaleTimeString()}</Text>
          <Text style={styles.dateText}>{currentTime.toLocaleDateString()}</Text>
        </View>
      
    </View>
  );


};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    timeContainer: {
      marginTop: 20,
    },
    timeText: {
      fontSize: 48,
      fontWeight: 'bold',
    },
    dateText: {
      fontSize: 24,
      marginTop: 10,
    },
  });
export default Task34;