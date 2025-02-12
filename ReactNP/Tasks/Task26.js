import React, { useState } from "react";
import { ActivityIndicator, Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Task26 = () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);

  // Non-blocking request
  const fetchNonBlocking = () => {
    fetch('https://api.ipify.org/')
      .then(res => res.text())
      .then(Ip => setIp(Ip))
      .catch(error => console.error('Error:', error));
  };

  // Blocking request
  const fetchBlocking = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.ipify.org/');
      const ip = await res.text();
      setIp(ip);
    } catch (error) {
      console.error('Error fetching IP:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.text}>Your IP:</Text>
      <Text style={{ fontSize: 16, padding: 24 }}>{ip || "Click to fetch IP"}</Text>
      <Button title="Get IP (Non-blocking)" onPress={fetchNonBlocking} />
      
      <View style={{ marginTop: 50 }}>
        {loading ? (
          <ActivityIndicator size="small" color="gray" />
        ) : (
          <Button title="Get IP (Blocking)" onPress={fetchBlocking} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  }
});

export default Task26;
