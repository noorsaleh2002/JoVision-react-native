import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/actions_Task39";
import { TextInput, View } from "react-native";

const ComponantOneTask39=()=>{

const storedText=useSelector((state)=>state.text);//is used to read from Redux state.
const dispatch=useDispatch();//is needed to send updates to Redux state
const [text,setlText]=useState(storedText);

useEffect(()=>{setlText(storedText)},[storedText]);
const TextChange=(newText)=>{
setlText(newText);
dispatch(setText(newText));
};

return (
<View>
    <TextInput
        placeholder="Enter Text here"
        onChangeText={TextChange}
        value={text}


    />
</View>


);





};
export default ComponantOneTask39;
