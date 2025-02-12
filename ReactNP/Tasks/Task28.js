import React from "react";
import { FlatList, Image, Pressable, SafeAreaView ,StyleSheet} from "react-native";
import { Alert } from "react-native";

const images=[
    { id: '1', source:require("../Resource/one.jpeg") },
    { id: '2', source:require("../Resource/tow.jpeg")},
    { id: '3', source:require("../Resource/three.jpeg") },
    { id: '4', source: require("../Resource/4.jpeg") },
    { id: '5', source: require("../Resource/5.jpeg") },
    { id: '6', source: require("../Resource/6.jpeg") },
    { id: '7', source: require("../Resource/7.jpeg") },
    { id: '8', source: require("../Resource/8.jpeg") },
    { id: '9', source: require("../Resource/9.jpeg") },
    { id: '10', source: require("../Resource/10.jpeg") },



]
const Task28=()=>{
    const handleImagePress = (index) => {
        Alert.alert(`You have selected image: ${index}`);
      };
return(
<SafeAreaView style={styles.container}>
 <FlatList
    data={images}
    keyExtractor={(item)=>item.id}
    horizontal
    renderItem={({item,index})=>(
      <Pressable onPress={()=>handleImagePress(index)}>
        <Image source={item.source} style={styles.image}/>



      </Pressable>



    )}
 
 
 
 />
 




</SafeAreaView>




);


};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:200
    },
    image: {
      width: 100,
      height: 100,
      margin: 5,
    },
  });
export default Task28;