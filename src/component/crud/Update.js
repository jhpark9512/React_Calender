import React, { useState } from "react";
import { useParams } from "react-router-dom"
import { db } from '../../firebase';
import { updateDoc, collection,doc } from "firebase/firestore";
import { useNavigate,} from 'react-router-dom';
function Update(props) {
    let { id } = useParams();
    let [updateTitle, setUpdateTitle] = useState("")
    let [updateName, setUpdateName] = useState("")
    let [updateContent, setUpdateContent] = useState("")
    let updateUdate = new Date().getFullYear() + "년 " + new Date().getMonth() + "월 " + new Date().getDate() + "일"
    let [newUdate, setNewUdate] = useState(updateUdate)

    
    let  i = props.data.findIndex((item) => item.id == id);
    console.log(props.data)
    console.log(props.data[i])

    const navigate = useNavigate();
    

    const update = async() =>{
            const dataRef = doc(db, 'crud', id)
            await updateDoc(dataRef, {
            title: updateTitle,
            name: updateName,
            content: updateContent,
            wdate: props.data[i].wdate,
            udate: newUdate,
            del: props.data[i].del
        })
        navigate('/Board')
        window.location.reload();
    }
    return (

        <div className="writeForm">
            <div className="formContainer">
                <h4 style={{ textAlign: "center" }}>글 작성</h4>
                <form className="form" onSubmit={(e)=>update(e.preventDefault())}>
                    <label htmlFor="title">제목</label>
                    <input type="text" name="title" defaultValue={props.data[i].title} onChange={(e)=>{setUpdateTitle(e.target.value)}}/><br />
                    <label htmlFor="name">작성자</label>
                    <input type="text" name="name" defaultValue={props.data[i].name} onChange={(e)=>{setUpdateName(e.target.value)}}/><br />
                    <label htmlFor="content">내용</label>
                    <textarea name="content" defaultValue={props.data[i].content} onChange={(e)=>{setUpdateContent(e.target.value)}}/><br />
                    <button type="submit">글 수정</button>
                    <button onClick={()=> navigate('/Board')}>뒤로 가기</button>
                </form>
            </div>
        </div>

    )
}
export default Update;