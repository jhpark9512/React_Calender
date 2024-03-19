import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom"
import { db } from '../../firebase';
import { updateDoc, collection,doc } from "firebase/firestore";
import { useNavigate, useLocation} from 'react-router-dom';
function Update(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const currentData = location.state.data;
    const currentUser = location.state.user;

    let { id } = useParams();
    let [updateTitle, setUpdateTitle] = useState("")
    let [updateName, setUpdateName] = useState("")
    let [updateContent, setUpdateContent] = useState("")
    let updateUdate = new Date().getFullYear() + "년 " + new Date().getMonth() + "월 " + new Date().getDate() + "일"
    let [newUdate, setNewUdate] = useState(updateUdate)
    let [complete, setComplete] = useState(false);


    const update = async() =>{
            const dataRef = doc(db, 'crud', id)
            await updateDoc(dataRef, {
            title: updateTitle,
            name: updateName,
            content: updateContent,
            wdate: currentData.wdate,
            udate: newUdate,
            del: currentData.del
        })
        alert('수정완료')
        navigate('/Board/List')
        setComplete(true)
    }
    const chkForm = (e) =>{
        
        if (updateTitle == "") {
            alert('제목을 입력해주세요')
            e.preventDefault()
        } else if (updateName == "") {
            alert('작성자를 선택해주세요')
            e.preventDefault()
            
        } else {
            update(e.preventDefault())
            
        }
    }
    return (
        <div className="writeForm">
            <div className="formContainer">
                <h4 style={{ textAlign: "center" }}>글 작성</h4>
                <form className="form" onSubmit={(e)=>{chkForm(e)}}>
                    <label htmlFor="title">제목</label>
                    <input type="text" name="title" defaultValue={JSON.stringify(currentData.title).replaceAll("\"","")} onChange={(e)=>{setUpdateTitle(e.target.value)}}/><br />
                    <label htmlFor="name">작성자</label>
                    <select onChange={(e) => setUpdateName(e.target.value)}>
                        {
                            currentUser.map((value, index) => {
                                return (
                                    <option key={index}>{JSON.stringify(currentUser[index].name).replaceAll("\"","")}</option>
                                )
                            })
                        }
                    </select>
                    <br />
                    <label htmlFor="content">내용</label>
                    <textarea name="content" defaultValue={JSON.stringify(currentData.content).replaceAll("\"","")} onChange={(e)=>{setUpdateContent(e.target.value)}}/><br />
                    <button type="submit">글 수정</button>
                    <button onClick={()=> navigate('/Board')}>뒤로 가기</button>
                </form>
            </div>
        </div>

    )
}
export default Update;