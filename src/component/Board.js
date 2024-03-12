import { doc, deleteDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from '../firebase';

function Board(props) {

    const readData = props.data;

    const deleteData = async (readData) => {
        await deleteDoc(doc(db, 'crud', readData.id))
        window.location.reload();
    }

    return (
        <div>
            {
                readData.map((readData) => {
                    return (
                        <ul key={readData.id}>
                            <li>제목 : {readData.title}</li>
                            <li>작성자 : {readData.name}</li>
                            <li>내용 : {readData.content}</li>
                            <li>작성일 : {readData.wdate}</li>
                            <li>수정일 : {readData.udate}</li>
                            <button>수정</button>
                            <button onClick={() => deleteData(readData)}>삭제</button>
                        </ul>
                    )
                })
            }
        </div>
    )
}



export default Board;