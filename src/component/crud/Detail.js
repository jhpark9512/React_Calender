import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from '../../firebase';
import { doc, deleteDoc } from "firebase/firestore";
import { Outlet,useNavigate } from 'react-router-dom';

function Detail(props) {
    let { id } = useParams();
    let i = props.data.findIndex((item) => item.id == id);

    const readData = props.data;

    const navigate = useNavigate();

    //데이터 삭제
    const deleteData = async (readData) => {
        if (window.confirm('정말 삭제하겠습니까?')) {
            await deleteDoc(doc(db, 'crud', readData[i].id))
            navigate('/Board');
        } else {
            alert('취소')
        }

    }


    return (
        <div className="container">
            {   
                <div className="detail-page">  
                    <h3 style={{ border: '1px solid black' }}>{readData[i].title}</h3>
                    <h3 style={{ border: '1px solid black' }}>{readData[i].name}</h3>
                    <h3 style={{ border: '1px solid black' }}>{readData[i].content}</h3>
                    <button onClick={() => navigate('/Board/Update/' + readData[i].id)}>수정</button>
                    <button onClick={() => deleteData(readData)}>삭제</button>
                    <button onClick={() => navigate('/Board')}>뒤로가기</button>
                </div>
            }
        </div>
    )
}

export default Detail;