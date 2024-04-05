import React, { useEffect, useState } from "react";
function Test() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/coupons');
      if (!response.ok) {
        throw new Error('서버에서 데이터를 가져오지 못했습니다.');
      }
      const result = await response.json();
      console.log(result);
      setItems(result);
    } catch (error) {
      console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
    }
  };
  return (
    <div>
      <h1>Items</h1>
      <select>
        {
          items.map((item, index) => {
            return (
              <option key={index}>{items[index].te}</option>
            )
          })
        }
      </select>
      {/* <button onClick={() => fetchData()}>fetch</button>
        <ul>
            {items.map((item,index)=>{
                <li key={index}>{item}</li>
            })}
        </ul> */}
    </div>
  )
}

export default Test;