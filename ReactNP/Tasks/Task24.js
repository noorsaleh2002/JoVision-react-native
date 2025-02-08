import React, { useRef } from "react";
import { View,Text,TextInput,StyleSheet } from "react-native";
import MYFuntionPageTask24 from "../Componants/MYFuntionPage_Task24";
const Task24=()=>{
  
    const MYFuntionPageTask24ref=useRef();
    const changedtext=(text)=>{

     
        
        
        if (MYFuntionPageTask24ref.current) {
      
            MYFuntionPageTask24ref.current.updateText(text);
    }  
        
        
    };
    return(

        <View style={styles.body }>
            <Text style={{fontSize:20}}>Enter text from Parent Componant</Text>
            <TextInput style={styles.textinput}

            onChangeText={changedtext}
          
            placeholder="Enter text"
            
                />
     <MYFuntionPageTask24 ref={MYFuntionPageTask24ref}/>

        </View>

        
    );

};

const styles=StyleSheet.create({
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'


    },
    textinput:{
        borderWidth:1,
        paddingLeft:10,
        marginBottom:20,
        width:200,
        marginTop:20,
        color:"blue"

    }



});
export default Task24;