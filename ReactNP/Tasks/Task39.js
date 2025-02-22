import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store_Task39";
import ComponantOneTask39 from "../Componants/ComponantOne_Task39";
import { Button, View } from "react-native";
const Task39=()=>{
const [isVisible,setIsVisible]=useState(true);
return(

<Provider store={store}>
<View>
    {isVisible && <ComponantOneTask39/>}
    <Button title={isVisible?"Hide Component":"Show Component"} onPress={()=>setIsVisible(!isVisible)}/>
</View>



</Provider>


);


};
export default Task39;