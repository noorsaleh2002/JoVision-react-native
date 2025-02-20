import React from "react";
import { SharedTextProvider } from "../Componants/TextContext_Task38";
import { View ,StyleSheet} from "react-native";
import ComponantTwo from "../Componants/ComponantTwo_Task38";

const Task38=()=>{
return(
<SharedTextProvider>
<View style={styles.container}>
        <ComponantTwo/>
        <ComponantTwo/>
        <ComponantTwo/>
        <ComponantTwo/>

    </View>
</SharedTextProvider>



);


};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
  });
export default Task38;