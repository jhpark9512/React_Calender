import React, { useState } from "react";
import {db} from '../../firebase.js';
import { addDoc, collection } from "firebase/firestore";
import { useNavigate,} from 'react-router-dom';

function Create() {
    let [newTitle, setNewTitle] = useState("")
    let [newName, setNewName] = useState("")
    let [newContent, setNewContent] = useState("")
    let newWdate = new Date().getFullYear() + "년 " + new Date().getMonth() + "월 " + new Date().getDate() + "일"
    let [newUdate, setNewUdate] = useState(newWdate)
    let [newDel, setNewDel] = useState("N")

    const navigate = useNavigate();

    const input = async () =>{
        
        await addDoc(collection(db, "crud"), {
            title: newTitle,
            name: newName,
            content: newContent,
            wdate: newWdate,
            udate: newUdate,
            del: newDel
        })
        alert('등록완료')
        setNewTitle("")
        setNewName("")
        setNewContent("")
        navigate('/Board')
        window.location.reload();
    }

    return (
        <div className="writeForm">
            <div className="formContainer">
                <h4 style={{ textAlign: "center" }}>글 작성</h4>
                <form className="form" onSubmit={(e)=>input(e.preventDefault())}>
                    <label htmlFor="title">제목</label>
                    <input type="text" name="title" onChange={(e)=>{setNewTitle(e.target.value)}}/><br />
                    <label htmlFor="name">작성자</label>
                    <input type="text" name="name" onChange={(e)=>{setNewName(e.target.value)}}/><br />
                    <label htmlFor="content">내용</label>
                    <textarea name="content" onChange={(e)=>{setNewContent(e.target.value)}}/><br />
                    <button type="submit">글 등록</button>
                    <button onClick={()=> navigate('/Board')}>뒤로 가기</button>
                </form>
            </div>
        </div>
    )
}



export default Create;