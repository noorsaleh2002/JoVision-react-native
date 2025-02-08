import React, { Component } from "react";
import { TextInput, View,StyleSheet } from "react-native";
class MyClassPAgeTask23 extends Component{



render(){

return(
<View style={styles.body}>
<TextInput onChangeText={this.props.text} style={styles.text} placeholder="Enter text"/>
</View>
);
}


};

const styles=StyleSheet.create(
{
    body:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        marginTop:100,
    

    },
    text:{
        fontSize:24,

    }



}

);
export default MyClassPAgeTask23;