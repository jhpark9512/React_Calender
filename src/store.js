import { configureStore, createSlice } from '@reduxjs/toolkit'

let dataList = createSlice({
  name : 'datalist',
  initialState : [],
  reducers : {
    changeData(state){
      return state
    }
  }
  })
  export let  changeData = dataList.actions

export default configureStore({
  reducer: { 
    
  }
}) 


