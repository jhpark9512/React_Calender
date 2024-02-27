import { useState } from 'react';
import './App.css';
import Calender from './component/Calender.js';
function App() {
  let [today, setToday] = useState(new Date());
  let [year, setYear] = useState(new Date().getFullYear())
  let [month, setMonth] = useState(new Date().getMonth() + 1);

  const nextYear = () => {
    setYear(year + 1)
  }  

  const nextMonth = () => {
    if (month == 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }
  const beforYear = () =>{
    setYear(year -1)
  }
  const beforMonth = () => {
    if (month == 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  return (
    <div className='Calender'>
      <div className='header'>
        <h1 className='date-title'>
          <button onClick={() => beforYear()}>{year-1}년</button>
          &ensp;
          <button onClick={() => beforMonth()}><img className="button-img" src="../left.png" /></button>
          &ensp;{year}년 {month}월&ensp;
          <button onClick={() => nextMonth()}><img className="button-img" src="../right.png" /></button>
          &ensp;
          <button onClick={() => nextYear()}>{year+1}년</button>
        </h1>

      </div>
      <Calender month={month} year={year} today={today}/>
    </div>

  );
}

export default App;
