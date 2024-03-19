import React, { useState } from "react";
import { db } from '../../firebase';
import { addDoc, collection } from "firebase/firestore";
import { useNavigate, Link} from 'react-router-dom';

function Register(){
    let [regId, setRegId] = useState("")
    let [regPw, setRegPw] = useState("")
    let [regName, setRegName] = useState("")
    const navigate = useNavigate();
    
    const reg = async () =>{
        
        await addDoc(collection(db, "user"), {
            id: regId,
            password: regPw,
            name: regName
        })
        alert('등록완료')
        navigate('/Board/List')

    }

    return(
        <div className="writeForm">
            <div className="formContainer">
                <h4 style={{ textAlign: "center" }}>회원가입</h4>
                <form className="form" onSubmit={(e)=>reg(e.preventDefault())}>
                    <label htmlFor="id">아이디</label>
                    <input type="text" name="id" onChange={(e)=>{setRegId(e.target.value)}}/><br />
                    <label htmlFor="pw">비밀번호</label>
                    <input type="text" name="pw"onChange={(e)=>{setRegPw(e.target.value)}}/><br />
                    <label htmlFor="name">이름</label>
                    <input type="text" name="name" onChange={(e)=>{setRegName(e.target.value)}}/><br />
                    <button type="submit">회원가입</button>
                    <button onClick={()=> navigate('/Board/List')}>뒤로 가기</button>
                </form>
            </div>
        </div>
    )
}

export default Register;