import React from "react";

function Calender(props) {
    let selectDate = new Date(props.year, props.month-1,1);
    let firstDate = new Date(selectDate.getFullYear(), selectDate.getMonth(), 1);
    let lastDate = new Date(selectDate.getFullYear(), selectDate.getMonth() + 1, 0);
    let startDate = firstDate.getDay();
    let weekArr = ['일','월','화','수','목','금','토'];
    let monthArr =[];
    
    let year = new Date().getFullYear(props.today);
    let month = new Date().getMonth(props.today)+1;
    let date = new Date().getDate(props.today);

    const Click = () =>{
        console.log('hi')
    }

    for(var i=0; i<startDate; i++){
        monthArr.push("")
    }
    for(var i=1; i <lastDate.getDate()+1; i++){
        monthArr.push(i)
    }
    while(monthArr.length < 42){
        monthArr.push('')
    }

    return(
        <div className="grid">
                
        {
            weekArr.map(function(a,i){
                return(
                    <div className="day" key={i}>
                        {
                            weekArr[i]
                        }
                    </div>
                )
            })
        }
        {
            monthArr.map(function(a,i){
                return(
                    new Date().getFullYear() === props.year && new Date().getMonth()+1 === props.month && monthArr[i] === date ?
                    <div className="box-today" key={i} >
                        {
                            i%7 === 0 ?
                            <h3 className="monthNum-red" onClick={()=>Click()}>
                            {monthArr[i]}
                            </h3>
                            :
                            i === 6 || i === 13 || i ===20 ||i === 27 || i === 34 ||i === 41 ?
                            <h3 className="monthNum-blue" onClick={()=>Click()}>
                            {monthArr[i]}
                            </h3>
                            :
                            <h3 className="monthNum" onClick={()=>Click()}>
                            {monthArr[i]}
                            </h3>
                        }
                    </div>
                    :
                    
                    <div className="box" key={i} >
                        {
                            i%7 === 0 ?
                            <h3 className="monthNum-red" onClick={()=>Click()}>
                            {monthArr[i]}
                            </h3>
                            :
                            i === 6 || i === 13 || i ===20 ||i === 27 || i === 34 ||i === 41 ?
                            <h3 className="monthNum-blue" onClick={()=>Click()}>
                            {monthArr[i]}
                            </h3>
                            :
                            <h3 className="monthNum" onClick={()=>Click()}>
                            {monthArr[i]}
                            </h3>
                        }
                    </div>
                    

                )
                
            })
        }
        </div>
    )
}




export default Calender