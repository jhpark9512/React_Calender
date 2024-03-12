import React, { useState } from "react";
import { useParams } from "react-router-dom"

function Update(props) {
    let { id } = useParams();
    console.log(props.read)
    return (
        <div>1111
        </div>
    )
}
export default Update;