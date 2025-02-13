import React, { useState } from "react";
import { View, Image, Pressable } from "react-native";
import Video from "react-native-video";
import { StyleSheet } from "react-native";

const Task33 = () => {
  const [isPaused, setIsPaused] = useState(true); 
  
  const handlePress = () => {
    setIsPaused(prevState => !prevState); 
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress} style={styles.videoContainer}> 
        <Video
          source={require("../Resource/sponge.mp4")}
          controls={false} 
          paused={isPaused} 
          poster={Image.resolveAssetSource(require('../Resource/spong.jpg')).uri} 
          style={styles.video} 
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: '100%',
    height: 250, 
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default Task33;
