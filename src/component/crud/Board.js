import { doc, deleteDoc } from "firebase/firestore";
import React from "react";
import { db } from '../../firebase';
import { useNavigate, Link} from 'react-router-dom';

function Board(props) {
    const readData = props.data;
    
    const navigate = useNavigate();
    
    //데이터 삭제
    const deleteData = async (readData) => {
        await deleteDoc(doc(db, 'crud', readData.id))
        window.location.reload();
    }

    return (
        <div className="container">
            <button className="write-button" onClick={()=> navigate('/Create')}>글 작성</button>
            <table>
                    <thead>
                    <tr>
                        <th className="tableTitle">제목</th>
                        <th className="tableName">작성자</th>
                        <th className="tableWdate">작성일자</th>
                    </tr>
                    </thead>
            {
                readData.map((readData) => {
                    return (
                        <tr key={readData.id}>
                            <td className="tableTitle"><Link to={`detail/${readData.id}`}>{readData.title}</Link></td>
                            <td className="tableName">{readData.name}</td>
                            <td className="tableWdate">{readData.wdate}</td>
                        </tr>
                        // <ul className="list" key={readData.id}>
                        //     <li>제목 : {readData.title}</li>
                        //     <li>작성자 : {readData.name}</li>
                        //     <li>내용 : {readData.content}</li>
                        //     <li>작성일 : {readData.wdate}</li>
                        //     <li>수정일 : {readData.udate}</li>
                        //     <button onClick={()=> navigate('/Board/Update/'+readData.id)}>수정</button>
                        //     <button onClick={() => deleteData(readData)}>삭제</button>
                        // </ul>
                    )
                })
            }
            </table>
        
        </div>
    )
}



export default Board;