import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDate } from "../../redux/store";
import Calender from "../calender/Calender";
import Table from "./Table";
function Coupon() {
  const dispatch = useDispatch();

  let a = useSelector((state)=> state.sDate)
  console.log(a);

  const handleSelectedDate = (result) => {
    console.log("선택된 날짜 : "+result);
    return result;
  };
  
  const handleDateChange = () =>{
    dispatch(changeDate({time:'새로운 날짜'}));
  };

  return (
    <div>
      <h1>식권대장</h1>
      <div className="meal_container">
        {/* <button onClick={
          handleDateChange
        }>버튼</button> */}
        <Calender onResult = {handleSelectedDate}/>
          <Table />
      </div>
    </div>
  )
}

export default Coupon;

