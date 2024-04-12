import { configureStore, createSlice } from '@reduxjs/toolkit'

let sDate = createSlice({
    name : "selectedDate",
    initialState : {time:''},
    reducers : {
        changeDate({state, action}){
            return {time: action.payload};
        }
    }
});

export default configureStore({
  reducer: { 
    sDate : sDate.reducer
  }
})
export let {changeDate} = sDate.actions; 