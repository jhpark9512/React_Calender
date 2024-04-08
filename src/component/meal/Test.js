import React, { useEffect, useState } from "react";
import Calender from "../calender/Calender";
import Table from "./Table";
function Test() {
  
  return (
    <div>
      <h1>식권대장</h1>
      <div className="meal_container">
        <Calender />
          <Table/>
      </div>
      {/* <button onClick={() => couponOption2()}>fetch</button>
        <ul>
            {option2.map((item,index)=>{
                <li key={index}>{option2}</li>
            })}
        </ul> */}
    </div>
  )
}

export default Test;

