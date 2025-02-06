import React, { useState } from "react";

import { StyleSheet, Button, View, SafeAreaView } from "react-native";
import MyClassPageTask20 from "../Componants/MyClassPage_Task20";

const Task20 = () => {
  const [show, setShow] = useState(false);

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.buttonContainer}>
        <Button
          title={show ? "Hide" : "Show"}
          onPress={() => setShow(!show)}
          color="orange"
        />
      </View>
      <MyClassPageTask20 show={show}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Optional, to give a background color
  },
  buttonContainer: {
    marginBottom: 20, // Adds space between the button and the content
  },
});

export default Task20;
