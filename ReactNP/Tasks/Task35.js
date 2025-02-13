import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";

const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedData = async () => {
      try {
        const sd = await AsyncStorage.getItem('userInfo');
        if (sd) {
          const jsondata = JSON.parse(sd);
          const timestamp = new Date(jsondata.timestamp);
          const currentTime = new Date();

          if ((currentTime - timestamp) / 1000 < 60) {
            setName(jsondata.name);
            setAge(jsondata.age.toString()); // Convert age back to string for input field
            setCountry(jsondata.country);
          } else {
            setMessage('Stored data is too old');
          }
        }
      } catch (error) {
        console.error("Error loading data:", error);
        setError('Failed to load data');
      }
    };

    storedData();
  }, []);

  const Submit = async () => {
    if (!name || !age || !country) {
      setError("All fields are required!");
      return;
    }

    const timestamp = new Date().toISOString();
    const userInfo = { name, age: Number(age), country, timestamp };

    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setMessage('Data saved successfully');
      setError('');
    } catch (error) {
      console.error("Error saving data:", error);
      setError('Failed to save data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Information</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      {message && <Text style={styles.message}>{message}</Text>}
      <TextInput
        placeholder="Name"
        onChangeText={setName}
        value={name}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        onChangeText={setAge}
        value={age}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Country"
        onChangeText={setCountry}
        value={country}
        style={styles.input}
      />
      <Button onPress={Submit} title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  message: {
    color: 'green',
    textAlign: 'center',
  },
});

export default Task35;
