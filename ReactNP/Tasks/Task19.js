import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class MyClassPage extends Component {
    render() {
        return (
            <View style={styles.body}>
                <Text style={styles.print}>Hello this is MyClassPage</Text>
            </View>
        );
    }
}

const Task19 = () => {
    const [Show, setShow] = useState(false);

    return (
        <View style={styles.body}>
            {!Show ? (
                <Button title="Show" onPress={() => setShow(true)} color="pink" />
            ) : (
                <MyClassPage />
                
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    print: {
        fontSize: 20,
        fontWeight: "bold",
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Task19;
