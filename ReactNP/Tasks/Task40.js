import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store_Task39";
import ClassOne_Task40 from "../Componants/ClassOne_Task40";
import { Button, View } from "react-native";
const Task40=()=>{
const [isVisible,setIsVisible]=useState(true);
return(

<Provider store={store}>
<View>
    {isVisible && <ClassOne_Task40/>}
    <Button title={isVisible?"Hide Component":"Show Component"} onPress={()=>setIsVisible(!isVisible)}/>
</View>



</Provider>


);


};
export default Task40;