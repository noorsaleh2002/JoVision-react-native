import React, { useState } from "react";
import { Alert, Button, View, Image, StyleSheet } from "react-native";

const images = {
  1: require("../Resource/one.jpeg"),
  2: require("../Resource/tow.jpeg"),
  3: require("../Resource/three.jpeg"),
};

const Task27 = () => {
  const [im, setIm] = useState(images[1]);

  const chooseImage = () => {
    Alert.alert(
      "Pick the number of one of the images",
      "1, 2 or 3",
      [
        { text: "1", onPress: () => setIm(images[1]) },
        { text: "2", onPress: () => setIm(images[2]) },
        { text: "3", onPress: () => setIm(images[3]) },
        {text: "Cancel", onPress: () => {}, style: "cancel"},

      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={im} style={styles.image} />
      <Button title="Choose Image" onPress={chooseImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    margin:20
  },
});

export default Task27;
