import { useEffect, useState } from "react";
import { RefreshControl, ScrollView, Text, View ,StyleSheet} from "react-native";

function generateRandomWord(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

const Task37=()=>{

const [refreshing,setRefreshing]=useState(false);
const [words,serWords]=useState([]);

const generateWords=()=>{
 
let x=[];
for(let i=0 ; i<100;i++){
    x.push(generateRandomWord(5));
}
serWords(x);
};

const onRefresh=()=>{
setRefreshing(true);
setTimeout(()=>{
 generateWords();
 setRefreshing(false);


},1000);



};
useEffect (()=>{
  generateWords();
},[]);
return(
<View style={styles.body}>



    <ScrollView  style={styles.scrollView}
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }
    
    >
  {words.map( (word,index)=>(
    <Text style={styles.text} key={index}>

   {index+1}){word}

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
export default Task37;