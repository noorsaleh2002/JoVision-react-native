import { Component } from "react";
import { Text, View } from "react-native";

class MyclasspageTask25 extends Component{

 constructor(props){
    super(props);
    this.state={
        outputText:'',
    };
 }  
 //method
 updateText=(newText)=>{
  this.setState({outputText:newText});
 }
render(){
return(
   
   <View style={{marginTop:20}}>
       <Text style={{fontSize:20}}>This is text  child Componant</Text>
     <Text style={{fontSize:20,marginLeft:125,color:"blue"}}>{this.state.outputText}</Text>
   </View>



);
}

}
export default MyclasspageTask25;