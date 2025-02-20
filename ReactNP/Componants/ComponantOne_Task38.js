import { Component } from "react";
import { Text, View } from "react-native";
import { sharedTextContext } from "./TextContext_Task38";


class ComponantOne extends Component{
//For Class to access context not use uesContext , but : 
static contextType=sharedTextContext;
render(){
    const {text}=this.context;
return(

<View>
    <Text>Shared Text : {text}</Text>
</View>


);


}



}
export default ComponantOne;