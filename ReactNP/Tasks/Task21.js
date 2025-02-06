import React, { useState } from "react";

import { StyleSheet, Button, View, SafeAreaView } from "react-native";
import MyFunctionPageTask21 from "../Componants/MyFunctionPage_Task21";

const Task21 = () => {
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
      <MyFunctionPageTask21 show={show}/>
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

export default Task21;
