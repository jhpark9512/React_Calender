import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from '../../firebase';
import { doc, deleteDoc } from "firebase/firestore";
import { useLocation,useNavigate } from 'react-router-dom';

function Detail(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state.data;
    const user = location.state.user

    let { id } = useParams();
    
    let readData = data;
    let userData = user;

    

    //데이터 삭제
    const deleteData = async (readData) => {
        if (window.confirm('정말 삭제하겠습니까?')) {
            await deleteDoc(doc(db, 'crud', readData.id))
            navigate('/Board/List');
        } else {
            alert('취소')
        }

    }


    return (
        <div className="container">
            {   
                <div className="detail-page">  
                    <h3 style={{ border: '1px solid black' }}>{readData.title}</h3>
                    <h3 style={{ border: '1px solid black' }}>{readData.name}</h3>
                    <h3 style={{ border: '1px solid black' }}>{readData.content}</h3>
                    <button onClick={() => navigate('/Board/Update/' + readData.id,{state:{ data: readData, user: userData}})}>수정</button>
                    <button onClick={() => deleteData(readData)}>삭제</button>
                    <button onClick={() => navigate('/Board/List')}>뒤로가기</button>
                </div>
            }
        </div>
    )
}

export default Detail;