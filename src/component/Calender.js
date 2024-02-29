import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Calender() {
    let today = new Date();
    let [year, setYear] = useState(new Date().getFullYear())
    let [month, setMonth] = useState(new Date().getMonth() + 1);

    let selectDate = new Date(year, month - 1, 1);
    let firstDate = new Date(selectDate.getFullYear(), selectDate.getMonth(), 1);
    let lastDate = new Date(selectDate.getFullYear(), selectDate.getMonth() + 1, 0);
    let currentDate = new Date().getDate(today);
    let startDate = firstDate.getDay();
    let weekArr = ['일', '월', '화', '수', '목', '금', '토'];
    let monthArr = [];

    
    //년도, 월 이동
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

    const beforYear = () => {
        setYear(year - 1)
    }

    const beforMonth = () => {
        if (month == 1) {
            setMonth(12);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    }

    //날짜 선택
    const Click = () => {
        console.log('hi')
    }
    
    //날짜 배열
    for (var i = 0; i < startDate; i++) {
        monthArr.push("")
    }
    for (var i = 1; i < lastDate.getDate() + 1; i++) {
        monthArr.push(i)
    }
    while (monthArr.length < 42) {
        monthArr.push('')
    }

    return (
        <div className='header'>
            <h3 className='date-title'>
                <Button onClick={() => beforYear()}>{year - 1}년</Button>
                &ensp;
                <Button onClick={() => beforMonth()}><img className="button-img" src="../left.png" /></Button>
                &ensp;{year}년 {month}월&ensp;
                <Button onClick={() => nextMonth()}><img className="button-img" src="../right.png" /></Button>
                &ensp;
                <Button onClick={() => nextYear()}>{year + 1}년</Button>
            </h3>
            <div className="grid">
                {
                    weekArr.map(function (a, i) {
                        return (
                            <div className="day" key={i}>
                                {
                                    weekArr[i]
                                }
                            </div>
                        )
                    })
                }
                {
                    monthArr.map(function (a, i) {
                        return (
                            new Date().getFullYear() === year && new Date().getMonth() + 1 === month && monthArr[i] === currentDate ?
                                <div className="box-today" key={i} >
                                    {
                                        i % 7 === 0 ?
                                            <h4 className="monthNum-red" onClick={() => Click()}>
                                                {monthArr[i]}
                                            </h4>
                                            :
                                            i === 6 || i === 13 || i === 20 || i === 27 || i === 34 || i === 41 ?
                                                <h4 className="monthNum-blue" onClick={() => Click()}>
                                                    {monthArr[i]}
                                                </h4>
                                                :
                                                <h4 className="monthNum" onClick={() => Click()}>
                                                    {monthArr[i]}
                                                </h4>
                                    }
                                </div>
                                :

                                <div className="box" key={i} >
                                    {
                                        i % 7 === 0 ?
                                            <h6 className="monthNum-red" onClick={() => Click()}>
                                                {monthArr[i]}
                                            </h6>
                                            :
                                            i === 6 || i === 13 || i === 20 || i === 27 || i === 34 || i === 41 ?
                                                <h6 className="monthNum-blue" onClick={() => Click()}>
                                                    {monthArr[i]}
                                                </h6>
                                                :
                                                <h6 className="monthNum" onClick={() => Click()}>
                                                    {monthArr[i]}
                                                </h6>
                                    }
                                </div>
                        )

                    })
                }
            </div>
        </div>
    )
}




export default Calender