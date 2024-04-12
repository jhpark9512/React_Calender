import { React, useState, useEffect } from "react";
import {State, Effect, Memo, Callback} from "./ChildCompo.js"
function MotherCompo(){
    return(
        <div>
            <State/>
            <Effect/>
            <Memo/>
            <Callback/>
        </div>
    );
}

export default MotherCompo;