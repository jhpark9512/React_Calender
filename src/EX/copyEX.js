import React, { useEffect, useState } from "react";

function Copy() {
    let originData = [
        {
            name: 'David',
            age: 30,
            gender: 'male'
        },
        {
            name: 'Peni',
            age: 20,
            gender: 'male'
        },
        {
            name: 'Alex',
            age: 50,
            gender: 'male'
        }
    ]

    let originData2 = [
        {
            title: '어벤져스',
            status: '개봉예정'
        },
        {
            title: '트랜스포머',
            status: '상영중'
        },
        {
            title: '베테랑',
            status: '상영종료'
        }
    ]
    

    let [data, setData] = useState(originData);
    let [data2, setData2] = useState(originData2);

    const arr = [];
    const brr = arr;
    brr.push('1')

    console.log(arr)
    console.log(brr)

    useEffect(() => {
        console.log('원본 데이터', originData)
    }, [])

    //정렬 기능
    const sort = () => {
        const copy = JSON.parse(JSON.stringify(originData));
        var result = copy.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
        });
        setData(result)
        console.log('변경된 데이터', data)
    }

    //상태 변경 기능
    const change = () => {
        const status = ['개봉예정','상영중','상영종료']
        let copySta = status.slice();
        copySta.push('추가됨')
        setData2(copySta)
        console.log(status)
        console.log(data2)
        

    }

    return (
        <div>
            <h3>※ 깊은복사 예제</h3>
            <ul>
                {
                    data.map((a, i) => {
                        return (
                            <li key={i}>
                                {data[i].name}<br />
                                {data[i].age}<br />
                                {data[i].gender}<br />
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={() => { sort() }}>정렬</button>
            <br />
            <br />
            <h3>※ 얕은복사 예제</h3>
            <ul>
                {
                    data2.map((a, i) => {
                        return (
                            <li key={i}>
                                {data2[i].title}<br />
                                상태 : {data2[i].status}<br />
                                <button onClick={() => { change() }}>상태 변경</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Copy;