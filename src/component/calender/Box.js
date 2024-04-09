import { useEffect, useState } from "react";
function Box(props) {
    const [box, setBox] = useState("");
    
    const handleClick = (index, e) => {
        console.log(index)
        props.setSelectedIdx(index);
    }
    return (
        new Date().getFullYear() === props.year && new Date().getMonth() + 1 === props.month && props.monthArr[props.index] === props.currentDate ?
            <div className={props.index === props.selectedIdx ? 'box-select' : 'box'} style={{ border: '3px solid red' }} key={props.index} onClick={(e) => handleClick(props.index)}>
                {
                    props.index % 7 === 0 ?
                        <h4 className="monthNum-red">
                            {props.monthArr[props.index]}
                        </h4>
                        :
                        props.index === 6 || props.index === 13 || props.index === 20 || props.index === 27 || props.index === 34 || props.index === 41 ?
                            <h4 className="monthNum-blue">
                                {props.monthArr[props.index]}
                            </h4>
                            :
                            <h4 className="monthNum">
                                {props.monthArr[props.index]}
                            </h4>
                }
            </div>
            :
            <div className={props.index === props.selectedIdx ? 'box-select' : 'box'} key={props.index} onClick={(e) => handleClick(props.index)}>
                {
                    props.index % 7 === 0 ?
                        <h6 className="monthNum-red">
                            {props.monthArr[props.index]}
                        </h6>
                        :
                        props.index === 6 || props.index === 13 || props.index === 20 || props.index === 27 || props.index === 34 || props.index === 41 ?
                            <h6 className="monthNum-blue">
                                {props.monthArr[props.index]}
                            </h6>
                            :
                            <h6 className="monthNum">
                                {props.monthArr[props.index]}
                            </h6>
                }
            </div>
    )
}


export default Box;
