import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Task17= () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      {isVisible && <Text style={styles.nameText}>Noor</Text>}

      <Button 
        title={isVisible ? "Hide" : "Show"}
        onPress={() => setIsVisible(!isVisible)}
         color="#ff5733"
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
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
 
});

export default Task17;
