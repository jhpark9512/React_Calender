import { doc } from "firebase/firestore";
import React from "react";
import { db } from '../../firebase';
import { useNavigate, Link, Outlet} from 'react-router-dom';

function Board(){
    return(
        <div>
            <Outlet/>
        </div>
    )
}

function List(props) {
    
    const readData = props.data;
    
    const navigate = useNavigate();
    

    return (
        <div className="container">
             
            <button className="write-button" onClick={()=> navigate('/Create')}>글 작성</button>
            <button onClick={()=>navigate('/Board/Register')}>가입</button>
            <table>
                    <thead>
                    <tr>
                        <th className="tableTitle">제목</th>
                        <th className="tableName">작성자</th>
                        <th className="tableWdate">작성일자</th>
                    </tr>
                    </thead>
                    <tbody>
            {
                readData.map((readData) => {
                    return (
                        <tr key={readData.id}>
                            <td className="dataTitle"><Link to={`/Board/Detail/${readData.id}`}>{readData.title}</Link></td>
                            <td className="tableName">{readData.name}</td>
                            <td className="dataWdate">{readData.wdate}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
        
        </div>
    )
}


export {Board, List};