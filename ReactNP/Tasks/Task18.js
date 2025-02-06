import React ,{useState,useEffect}from "react";
import { View, StyleSheet, ActivityIndicator, SafeAreaView, Text } from "react-native";

const Task18 = () => {
    const [loading , setLoading]=useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 5000);
    
        return () => clearTimeout(timer); // Cleanup timeout on unmount
      }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                {loading?(
                    <>
                    <ActivityIndicator size={100} color="#00ff00" />
                    <Text style={styles.loading}>
                        Loading....
                    </Text>
                    
                    </>
                ):
                (
                    <Text style={styles.name}>
                        Noor
                    </Text>
                )
                
                }
                

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    loading:{
        fontSize:20,
        fontWeight:"bold",
        marginTop:5,
        color:"green",

    },
    name:{
        fontSize:40,
        fontWeight:"bold",
        color:"purple",



    }
});

export default Task18;
