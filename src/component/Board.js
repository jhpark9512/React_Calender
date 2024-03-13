import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Update from './Update.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { db } from '../firebase';

function Board() {
    
    let [read, setRead] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const data = async () => {
            const query = await getDocs(collection(db, 'crud'));
            setRead(query.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        data()
    }, [])

    const deleteData = async (read) => {
        await deleteDoc(doc(db, 'crud', read.id))
        window.location.reload();
    }

    return (
        <div>
            <Routes>
            <Route path="/Update/:id" element={<Update read={read}/>} />
            </Routes>
            {
                read.map((read) => {
                    return (
                        <ul key={read.id}>
                            <li>제목 : {read.title}</li>
                            <li>작성자 : {read.name}</li>
                            <li>내용 : {read.content}</li>
                            <li>작성일 : {read.wdate}</li>
                            <li>수정일 : {read.udate}</li>
                            <button onClick={() => navigate("/Update/"+read.id)}>수정</button>
                            <button onClick={() => deleteData(read)}>삭제</button>
                        </ul>
                    )
                })
            }
            
        </div>
    )
}



export default Board;