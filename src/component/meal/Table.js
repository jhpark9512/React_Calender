import React, { useEffect, useState, useLayoutEffect } from "react";

function Table(props) {

    const [option1, setOption1] = useState([]);
    const [option2, setOption2] = useState([]);

    useEffect(() => {
        couponOption1();
        couponOption2();
    }, [])
    const couponOption1 = async () => {
        try {
            const response = await fetch('/coupon_types');
            if (!response.ok) {
                throw new Error('서버에서 데이터를 가져오지 못했습니다.');
            }
            const result = await response.json();
            setOption1(result);
            console.log(option1);
        } catch (error) {
            console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
        }
    };
    const couponOption2 = async () => {
        try {
            const response = await fetch('/coupon_users');
            if (!response.ok) {
                throw new Error('서버에서 데이터를 가져오지 못했습니다.');
            }
            const result = await response.json();
            setOption2(result);
            console.log(option2);
        } catch (error) {
            console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
        }
    };
    const couponTable = async () => {
        try {
            const response = await fetch(`/coupon_users?selectDate`);
            if (!response.ok) {
                throw new Error('서버에서 데이터를 가져오지 못했습니다.');
            }
            const result = await response.json();
            
        } catch (error) {
            console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
        }
    };

    return (
        <div>
            <select>
                {
                    option2.map((item, index) => {
                        return (
                            <option key={index}>{option2[index].name}</option>
                        )
                    })
                }
            </select>
            <select>
                {
                    option1.map((item, index) => {
                        return (
                            <option key={index}>{option1[index].type}</option>
                        )
                    })
                }
            </select>
            <table>
                <thead>
                    <tr>
                        <th>날짜</th>
                        <th>사번</th>
                        <th>이름</th>
                        <th>내용</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;