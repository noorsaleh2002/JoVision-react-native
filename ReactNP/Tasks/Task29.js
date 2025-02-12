import React, { useState, useRef } from "react";
import { FlatList, Image, Button, SafeAreaView, StyleSheet, TextInput, Alert } from "react-native";

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

const Task29 = () => {
  const flatListr = useRef(null);
  const [indexInput, setIndexInput] = useState(""); 

  const handleScrollToImage = () => {
    const index = parseInt(indexInput, 10);
    if (!isNaN(index) && index >= 0 && index < images.length) {
      flatListr.current.scrollToIndex({ index });
      setIndexInput(""); 
    } else {
        Alert.alert("Invalid index. Please enter a valid index.");
        setIndexInput(""); 
    }
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
        data={images}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <Image source={item.source} style={styles.image} />
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
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  
});

export default Task29;
