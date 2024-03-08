
import { ref, set, get, child} from "firebase/database";
import { uid } from "uid";
import { db } from "../firebase";
import React, { useState } from "react";

function Creat() {
    let wDate = new Date().getFullYear() + "년 " + new Date().getMonth() + "월 " + new Date().getDate() + "일"
    let [index, setIndex] = useState(0)
    const [values, setValues] = useState({
        title: "",
        content: "",
        writer: "",
        writeDate: wDate,
        lastModify: wDate,
        delete: "N",
    });

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {

        e.preventDefault();
        console.log(values)

        set(ref(db, "list/" + index), {
            values,
        });
        setIndex(index + 1);
    };
    return (
        <div className="writeForm">
            <div className="formContainer">
                <h4 style={{ textAlign: "center" }}>글 작성</h4>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="title">제목</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={handleChange} /><br />
                    <label htmlFor="writer">작성자</label>
                    <input type="text" id="writer" name="writer" value={values.writer} onChange={handleChange} /><br />
                    <label htmlFor="content">내용</label>
                    <textarea id="content" name="content" value={values.content} onChange={handleChange} /><br />
                    <button type="submit">글 등록</button>
                </form>
            </div>
        </div>
    )
}

function Read() {
        const dbRef = ref(db);
        get(child(dbRef, "/list"))
          .then(snapshot => {
          if (snapshot.exists()) {
            var data = snapshot.val();
            console.log(data[0].values.content)
          } else {
            console.log("No data available");
          }
        })
          .catch(error => {
          console.error(error);
          
        });

      return (
        <div>1</div>
      )
}


export { Creat, Read };