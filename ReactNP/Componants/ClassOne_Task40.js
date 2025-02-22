import React, { Component } from "react";
import { TextInput, View } from "react-native";
import { setText } from "../redux/actions_Task39";
import {connect  } from "react-redux";

class ClassoneTask40 extends Component{
constructor(props){
    super(props);
    this.state={
        text:this.props.text,
    };
}
componentDidUpdate(prevProps){
    if(prevProps.text!==this.props.text){
        this.setState({text:this.props.text});
    }
}
TextChange=(newText)=>{
this.setState({text:newText});
this.props.setText(newText);
};
render(){
    return(

        <View>
            <TextInput
             
                    placeholder="Enter Text here"
                    onChangeText={this.TextChange}
                    value={this.state.text}
            
            
                
            
            
            
            />
        </View>

    );
}



}
const mapStateProps=(state)=>({text:state.text,});
const mapDispatchProps={setText};
export default  connect(mapStateProps,mapDispatchProps)(ClassoneTask40);