import { React, useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, Link, Outlet } from 'react-router-dom';

function Effect(){
    let [data, setData] = useState(true);
    let [data2, setData2] =useState(true);

    const navigate = useNavigate();

    useEffect(()=>{
        setData('마운트 됨')
        console.log('useEffect(마운트)실행')
        return () =>{
            console.log('useEffect(언마운트)실행')
        }
    },[])

    useEffect(()=>{
        console.log('useEffect(의존성없음)실행, 렌더링될때마다 실행')
    })
    
    useEffect(()=>{
        console.log('useEffect(의존성있음)실행, 의존성변경될때 실행')
    },[data2])
    
    const changeData = () =>{
        setData(!data)
    }
    const changeData2 = () =>{
        setData2(!data2)
    }

    const leavePage = () =>{
        navigate('/Calender')
    }

    return(
        <div>
            <h6>라이프 사이클 컴포넌트</h6>
            <p>useEffect에 의존성 배열을 비워두면 최초 마운트가 끝나고 실행됨<br/>화면이 나오면 마운트 된것이니 콘솔 확인</p>
            <p>useEffect에 의존성 배열을 안넣으면 렌더링 될때마다 useEffect가 실행됨
            <br/>예를 들어 렌더링 할때마다 서버에 요청을 보내야 하는 경우가 있음 </p>
            <button onClick={()=>changeData()}>누르면 state 바뀜</button>
            <br/>
            <br/>
            <p>useEffect에 의존성 배열에 값을 넣으면 그 값이 변경될때 useEffect가 실행됨</p>
            <button onClick={()=>changeData2()}>누르면 state(의존성배열값) 바뀜</button> 이 버튼 누르고 콘솔 확인
            <br/>
            <br/>
            <p>useEffect에 return을 주면 컴포넌트가 언마운트 될때 return안에 있는 함수 실행<br/>언마운트는 화면에서 컴포넌트가 사라질때 실행됨</p>
            <button onClick={()=>leavePage()}>주소변경(언마운트됨)</button> 이 버튼 누르고 콘솔 확인
        </div>
    )
}

export default Effect;