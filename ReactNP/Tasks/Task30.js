import React, { useRef, useState } from "react";
import { FlatList, Image, Button, SafeAreaView, StyleSheet, TextInput, View, Alert,Pressable } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


const images = [
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

const Task30 = () => {
  const flatListr = useRef(null);
  const [imageList, setImageList] = useState(images); // Maintain the list of images
  const [indexInput, setIndexInput] = useState(""); 
  

  const handleScrollToImage = () => {
    const index = parseInt(indexInput, 10);
    if (!isNaN(index) && index >= 0 && index < imageList.length) {
      flatListr.current.scrollToIndex({ index });
      setIndexInput(""); 
      
    } else {
      alert("Invalid index. Please enter a valid index.");
    }
  };

  const removeImage = (id) => {
    Alert.alert(
      "Confirm Removal",
      "Are you sure you want to remove this image?",
      [
        { text: "Cancel" },
        {
          text: "Yes",
          onPress: () => {
            setImageList((prevList) => prevList.filter((item) => item.id !== id));
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        
        placeholder="Enter Image Index"
        keyboardType="numeric"
        value={indexInput}
        onChangeText={setIndexInput}
      />
      <Button title="Scroll to Image" onPress={handleScrollToImage} />

      <FlatList
        ref={flatListr}
        data={imageList}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.source} style={styles.image} />
            <Pressable style={styles.icon} onPress={() => removeImage(item.id)}>
            <Icon name="remove-circle" size={30} color="red" />
            </Pressable>
          </View>
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
    marginTop: 200,
  },
  imageContainer: {
    position: 'relative', 
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
 
});

export default Task30;
