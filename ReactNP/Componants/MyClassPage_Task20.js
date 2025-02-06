import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class MyClassPageTask20 extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.show !== this.props.show) {
      if (this.props.show) {
        console.log("loaded");
      } else {
        console.log("unloaded");
      }
    }
  }

  render() {
    const { show } = this.props;
    return (
      <View style={styles.body}>
        {show ? (
          <Text style={styles.print}>MyClassPage show</Text>
        ) : (
          <Text style={styles.print}>MyClassPage not show</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  print: {
    color: "orange",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MyClassPageTask20;
