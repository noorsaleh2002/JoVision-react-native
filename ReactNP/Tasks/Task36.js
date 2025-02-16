import React from "react";
import { ScrollView, Text, View ,StyleSheet} from "react-native";

function generateRandomWord(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
    }
    

const Task36 =()=>{

let words =[];
for(let i=0;i<100;i++)
{

    words.push(generateRandomWord(5));
}
return (

 <View style={styles.body}>
    <ScrollView style={styles.scrollView}>
        {
            words.map((word,index)=>(


                <Text key={index } style={styles.text}>
                      {index+1})  {word}
                </Text>
            ))
        }
    </ScrollView>
 </View>



);



};
const styles = StyleSheet.create({
    body: {
      flex: 1,
      paddingTop: 50,
     
    },
    scrollView: {
      marginHorizontal: 20,
    },
    text: {
      fontSize: 18,
      marginVertical: 5,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      elevation: 2,
    },
  });
export default Task36;