import React, { useEffect, useState, useLayoutEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase.js';
import Results from '../hook/data.js';
import { useNavigate, Link, Outlet } from 'react-router-dom';

function Board() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

function List() {
    
    let [readData, setReadData] = useState([])
    let [userData, setUserData] = useState([])
    useEffect(()=>{
        const listData = async () => {
          const query = await getDocs(collection(db, 'crud'));
          setReadData(query.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        listData()
      },[])
      useEffect(() => {
        const userdata = async () => {
          const userQuery = await getDocs(collection(db, 'user'));
          setUserData(userQuery.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        userdata();
      }, []);

      console.log(readData)
      console.log(userData)

    const navigate = useNavigate();
    return (
        <div className="container">

            <button className="write-button" onClick={() => navigate('/Board/Create',{state:{user: userData, data: readData}})}>글 작성</button>
            <button onClick={() => navigate('/Board/Register')}>가입</button>
            <table>
                <thead>
                    <tr>
                        <th className="tableTitle">제목</th>
                        <th className="tableName">작성자</th>
                        <th className="tableWdate">작성일자</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        readData.map((readData,i) => {
                            return (
                                <tr key={readData.id}>
                                    <td className="dataTitle" onClick={()=>navigate(`/Board/Detail/${readData.id}`, {state:{user: userData, data: readData}})}>{readData.title}</td>
                                    <td className="tableName">{readData.name}</td>
                                    <td className="dataWdate">{readData.wdate}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


export { Board, List };