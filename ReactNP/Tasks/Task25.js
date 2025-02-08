import { useRef } from "react";
import MyclasspageTask25 from "../Componants/MyClassPage_Task25";

import { StyleSheet ,View,Text,TextInput} from "react-native";
const Task25=()=>{

const myClassPageref=useRef(null);

const changedtext=(text)=>{
    if(myClassPageref.current){
        myClassPageref.current.updateText(text);
    }
}

return(

    <View style={styles.body }>
        <Text style={{fontSize:20}}>Enter text from Parent Componant</Text>
        <TextInput style={styles.textinput}

        onChangeText={changedtext}
      
        placeholder="Enter text"
        
            />
<MyclasspageTask25 ref={myClassPageref}/>

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
export default Task25;