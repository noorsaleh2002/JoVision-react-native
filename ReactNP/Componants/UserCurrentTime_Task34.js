import React, { useEffect, useState } from "react";
const  useCurrentTime=(isActive)=>{
 const [currentTime,setcurrentTime]=useState(new Date());

useEffect(()=>{
 if(!isActive) return;
const interval=setInterval(()=>{
setcurrentTime(new Date());

},1000);
return ()=>clearInterval(interval);



},[isActive]);

return currentTime;

};


export default useCurrentTime;