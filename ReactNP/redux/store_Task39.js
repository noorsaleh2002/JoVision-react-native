import { configureStore } from "@reduxjs/toolkit";

import textReducer from "./reduce_Task39";
const store=configureStore({
  reducer:textReducer,


});
export default store;