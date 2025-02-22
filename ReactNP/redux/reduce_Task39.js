import { SET_TEXT } from "./actions_Task39";

const initialState={

    text:"",
};
const textReducer=(state=initialState,action)=>{
 switch(action.type){
    case SET_TEXT:
        return{...state,text:action.payload};
    default: 
        return state;
 }




};
export default textReducer;