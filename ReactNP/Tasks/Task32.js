import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Video from "react-native-video";

const Task32 = () => {
  const background = require("../Resource/spong.jpg");
  return (
    <View style={styles.container}>
      <Video
        source={require("../Resource/vd.mp4")} 
        style={styles.video}
        controls
        resizeMode="contain"
        poster={Image.resolveAssetSource(require('../Resource/spong.jpg')).uri} 
        paused={true}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  video: {
    width: "100%",
    height: 300,
  },
});

export default Task32;
