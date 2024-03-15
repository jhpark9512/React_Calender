import React, { useState, useEffect, useRef } from "react";
import { db } from '../../firebase.js';
import { addDoc, collection } from "firebase/firestore";
import { useNavigate, } from 'react-router-dom';

function Create(props) {
    let [newTitle, setNewTitle] = useState("")
    let [newName, setNewName] = useState("")
    let [newContent, setNewContent] = useState("")
    let newWdate = new Date().getFullYear() + "년 " + new Date().getMonth() + "월 " + new Date().getDate() + "일"
    let [newUdate, setNewUdate] = useState(newWdate)
    let [newDel, setNewDel] = useState("N")

    let [nameArr, setNameArr] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        const userData = props.userData;
        console.log(userData)
        userData.map((a, i) => { nameArr.push(a.name)})
        console.log(nameArr)
    }, [])

    

    const input = async () => {

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
        navigate('/Board/List')
    }



    return (
        <div className="writeForm">
            <div className="formContainer">
                <h4 style={{ textAlign: "center" }}>글 작성</h4>
                <form className="form" onSubmit={(e) => {
                    if (newTitle == "") {
                        alert('제목을 입력해주세요')
                        return false;
                    } else if (newName == "") {
                        alert('작성자를 선택해주세요')
                        return false;
                    } else {
                        input(e.preventDefault())
                    }
                }}>
                    <label htmlFor="title">제목</label>
                    <input type="text" name="title" onChange={(e) => { setNewTitle(e.target.value) }} /><br />
                    <label htmlFor="name">작성자</label>
                    <select onChange={(e) => setNewName(e.target.value)}>
                        {
                            nameArr.map((value, index) => {
                                return (
                                    <option key={index}>{nameArr[index]}</option>
                                )
                            })
                        }
                    </select>
                    <br />
                    <label htmlFor="content">내용</label>
                    <textarea name="content" onChange={(e) => { setNewContent(e.target.value) }} /><br />
                    <button type="submit">글 등록</button>
                    <button onClick={() => navigate('/Board/List')}>뒤로 가기</button>
                </form>
            </div>
        </div>
    )
}



export default Create;