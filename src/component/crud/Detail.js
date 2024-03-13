import React, { useState } from "react";
import { useParams } from "react-router-dom"
import { db } from '../../firebase';
import { useNavigate,} from 'react-router-dom';

function Detail(props) {
    let { id } = useParams();

    let  i = props.data.findIndex((item) => item.id == id);
    console.log(props.data)
    console.log(props.data[i])


    return (
        <div className="container">
            {
                <div className="detail-page">
                    <h3 style={{border:'1px solid black'}}>{props.data[i].title}</h3>
                    <h3 style={{border:'1px solid black'}}>{props.data[i].name}</h3>
                    <h3 style={{border:'1px solid black'}}>{props.data[i].content}</h3>
                </div>
            }
        </div>
    )
}

export default Detail;