import { collection, getDocs, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from '../firebase';
import deleteData from "./Delete";

function Read() {
    let [read, setRead] = useState([]);

    useEffect(() => {
        const data = async () => {
            const query = await getDocs(collection(db, 'crud'));
            setRead(query.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        data()
    }, [])
    console.log(read)
    return (
        <div>
            {
                read.map((read, index) => {
                    return (
                        <ul key={index}>
                            <li>제목 : {read.title}</li>
                            <li>작성자 : {read.name}</li>
                            <li>내용 : {read.content}</li>
                            <li>작성일 : {read.wdate}</li>
                            <li>수정일 : {read.udate}</li>
                            <button>수정</button>
                            <button onClick={()=> deleteData(read.id)}>삭제</button>
                        </ul>
                    )
                })
            }
        </div>
    )
}



export default Read;