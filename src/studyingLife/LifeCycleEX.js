import React, { Component } from "react";

export default class LifeCyCle2 extends Component {
    //생성자
    constructor(props) {
        super(props);
        console.log("constructor 호출!!")
        //state 생성, 초기값 설정
        this.state = {
            show: true,
            counter: 0,
            data: {
                data1: 'data1',
                data2: 'data2',
                data3: 'data3'
            }
        };
    }
    render() {
        console.log("LifeCycle컴포넌트 렌더링됨!!")
        return (
            <div>
                <h1>LifeCycle2EX</h1>
                {
                    this.state.show ? <Child data={this.state.data} /> : <h3>컴포넌트 언마운트됨</h3>
                }
                <button onClick={() => { this.setState({ show: !this.state.show }) }}>마운트/언마운트</button>
                <button onClick={() => {
                    this.setState({
                        data: {
                            data1: '데이터1',
                            data2: '데이터2',
                            data3: '데이터3'
                        }
                    })
                }}> 업데이트</button>
            </div>
        )
    }
}

class Child extends React.Component {
    constructor() {
        super();
        this.state = {
            currentValue: {}
        }
    }

    componentDidMount() {
        console.log("컴포넌트 마운트됨!!!")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps 실행!!")
        return {
            currentValue: props.data
        }
    }

    shouldComponentUpdate(nextProps)
    {
        console.log("shouldComponentUpdate 실행!!")
        console.log("※ 이전 props : "+this.props.data.data1 + ", 새로운 props : "+nextProps.data.data1);
        if(this.props.data.data1 == nextProps.data.data1){
            console.log("props변경없음 자식컴포넌트 렌더링 안됨")
            return false
        }
        console.log("props변경됨 자식컴포넌트렌더링됨")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate실행!! props.data 값 DidUpdate로 넘김")
        return prevProps.data
    }
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("componentDidUpdate실행!!")
    }

    componentWillUnmount() {
        console.log("컴포넌트 언마운트 됨!!!")
    }
    
    render() {
        console.log('Child컴포넌트 렌더링됨!!')
        return (
            <div>
                <h3>Child컴포넌트 입니다</h3>
                 <ul>
                    <li>{this.props.data.data1}</li>
                    <li>{this.props.data.data2}</li>
                    <li>{this.props.data.data3}</li>
                 </ul>
            </div>
        )
    }
}
