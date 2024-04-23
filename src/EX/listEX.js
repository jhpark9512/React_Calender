import React, { useEffect, useState } from "react";

function ListEX() {
    let user = [
        {
            "num": 1,
            "name": "토니스타크",
            "department": "IT",
            "phone": "010-1111-2222",
            "email": "stark@gmail.com"
        },
        {
            "num": 2,
            "name": "캡틴아메리카",
            "department": "영업",
            "phone": "010-2222-3333",
            "email": "cap@gmail.com"
        },
        {
            "num": 3,
            "name": "토르",
            "department": "인사",
            "phone": "010-3333-4444",
            "email": "stark@gmail.com"
        },
        {
            "num": 4,
            "name": "헐크",
            "department": "총무",
            "phone": "010-4444-5555",
            "email": "stark@gmail.com"
        }
    ]

    let [userList, setUserList] = useState(user);
    let [values, setValues] = useState({
        num: '',
        name: '',
        department: '',
        phone: '',
        email: '',
    })

    let shllowCopy = user;
    let deepCopy = JSON.parse(JSON.stringify(user));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues(values)
        shllowCopy.push(values);
        console.log(user)
        console.log(shllowCopy)
        setUserList(shllowCopy)
    }

     const handleDelete = (e,i) =>{
        e.preventDefault();
        console.log(i)
        shllowCopy.splice(i,1)
        console.log(user)
        console.log(shllowCopy)
        setUserList(shllowCopy)
     }

     useEffect(()=>{
        console.log('렌더링!')
     },[])

    return (
        <div>
            <form className="submitForm" onSubmit={handleSubmit}>
                <p>
                    사번 : <input type="text" name="num" value={values.num} onChange={handleChange} />&nbsp;
                    이름 : <input type="text" name="name" onChange={handleChange} />&nbsp;
                    부서 : <input type="text" name="department" onChange={handleChange} />&nbsp;
                    전화번호 : <input type="text" name="phone" onChange={handleChange} />&nbsp;
                    e-mail : <input type="text" name="email" onChange={handleChange} />&nbsp;
                    <button type="submit">입력</button>
                </p>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>사번</th>
                        <th>이름</th>
                        <th>부서</th>
                        <th>전화번호</th>
                        <th>e-mail</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userList.map((a, i) => {
                            return (
                                <tr key={i}>
                                    <td>{userList[i].num}</td>
                                    <td>{userList[i].name}</td>
                                    <td>{userList[i].department}</td>
                                    <td>{userList[i].phone}</td>
                                    <td>{userList[i].email}</td>
                                    <td><button onClick={(e) => {handleDelete(e,i)}}>삭제</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEX;