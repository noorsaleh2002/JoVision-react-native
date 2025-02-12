import React, { useRef, useState } from "react";
import { Alert, Button, FlatList, Pressable, SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Image } from "react-native";
const images=[
    { id: '1', source: require("../Resource/one.jpeg") },
    { id: '2', source: require("../Resource/tow.jpeg") },
    { id: '3', source: require("../Resource/three.jpeg") },
    { id: '4', source: require("../Resource/4.jpeg") },
    { id: '5', source: require("../Resource/5.jpeg") },
    { id: '6', source: require("../Resource/6.jpeg") },
    { id: '7', source: require("../Resource/7.jpeg") },
    { id: '8', source: require("../Resource/8.jpeg") },
    { id: '9', source: require("../Resource/9.jpeg") },
    { id: '10', source: require("../Resource/10.jpeg") },



];
const Task31 =()=>{
  const [inputindex,setindex]=useState("");
  const flatlistr=useRef(null);
  const [imageList, setImageList] = useState(images);
  const holdindexchange=()=>{
   const index=parseInt(inputindex,10);
   if(index>=0 && index<imageList.length&&!isNaN(index)){
    flatlistr.current.scrollToIndex({ index });
    setindex("");

   }else{
    Alert.alert("Please enter correct index");
    setindex("");
   }
   


  };
  const duplicateImage = (index) => {
    const newImage = { ...imageList[index], id: Math.random().toString() }; //shallow copy
    const updatedList = [...imageList];
    updatedList.splice(index + 1, 0, newImage); 
    setImageList(updatedList);
  };
  const removeImg=(id)=>{
   Alert.alert(
   "Confirm Removal",
   "Are you sure you want to remove this image?",
    [
         {text:"CANCEL", style:"cancel"},
         {text:"YES", onPress:()=>{
          
            setImageList((prevList)=>prevList.filter((item)=>item.id!==id));

         }}


    ]


   );




  };
    return(

        <SafeAreaView style={styles.container}>
                <TextInput
                    placeholder="Enter Image Index"
                    value={inputindex}
                    onChangeText={setindex}
                />
                <Button title="SCROLL TO IMAGE" onPress={holdindexchange}/>
               <FlatList
                data={imageList}
                 ref={flatlistr}
                 horizontal
                 keyExtractor={(item)=>item.id}
                 renderItem={({item,index})=>(
                        <View style={styles.imagehold}>
                             <Image source={item.source} style={styles.image}/>
                             <Pressable onPress={()=>removeImg(item.id)} style={styles.imgpos}>
                                <Icon name="remove-circle" size={25} color="red" />
                                
                                
                            </Pressable>   

                            <Pressable onPress={()=>duplicateImage(index)} style={styles.imgposl}>
                                <Icon name="add-circle" size={25} color="green" />
                                
                                
                            </Pressable>   


                        </View>
                   


                 )}

               />

               

        </SafeAreaView>




    );






};

const styles=StyleSheet.create({

container:{
flex:1,
alignItems:'center',
justifyContent:'center',

marginTop: 200,
 

},
image:{
    width:100,
    height:100,
    resizeMode:"contain",
    margin:10

},
imgpos:{
  top:0,
  right:0,
  position:'absolute'
},
imagehold:{
position:'relative',
margin:5

},
imgposl:{
    top:0,
    left:0,
    position:'absolute' 
}










});


export default Task31;