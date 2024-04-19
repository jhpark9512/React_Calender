import React, { Component } from "react";

export default class LifeCyCle extends Component {
    //생성자
    constructor(props) {
        super(props);
        console.log("constructor 호출")
        //state 생성, 초기값 설정
        this.state = {
            show : true,
            counter:0,
            data: 0
        };
    }
    
    render() {
        console.log("LifeCycle컴포넌트 렌더링됨")   
        return (
            <div>
                <h3>※ DidMount, WillUnmount : 컴포넌트 마운트, 언마운트시 발생</h3>
                
                {
                    this.state.show ? <LifeCompo/> : <h3>컴포넌트 언마운트됨</h3>
                }
                <button onClick={()=>{this.setState({show:!this.state.show})}}>마운트/언마운트</button>
                <br/>
                <br/>
                <DidUpdate data={this.state.counter}/>
                <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>Update counter : {this.state.counter}</button>
                <br/>
                <br/>
                <h3>※ GetDerivedStateFromProps : props를 통해 state값을 얻음, 렌더링전에 발생</h3>
                <h3>GetDerived : {this.state.data}</h3>
                <GetDerived data = {this.state.data}/>
                <button onClick={()=>{this.setState({data:this.state.data+1})}}>증가</button>
                <br/>
                <br/>
                <Snap data = {this.state.data}/>
                <br/>
                <br/>
                <ShouldUpdate/>
            </div>
        )
    }
}

class LifeCompo extends React.Component {
    componentDidMount(){
        console.log("컴포넌트 마운트됨!!!")
    }
    componentWillUnmount() {
        console.log("컴포넌트 언마운트 됨!!!")
    }
    render()
    {
        console.log("LifeCompo 렌더링됨")
        return <h3>컴포넌트임</h3>
    }
}

class DidUpdate extends React.Component {
    //생성자
    constructor() {
        super();
        this.state = {
            counter:0
        }
    }
    componentDidUpdate(prevProps, prevState, snapShot){
        console.log("데이터 갱신됨", prevProps.data+"->"+ this.props.data)
    }
    
    render() {
        console.log("DidUpdate컴포넌트 렌더링됨")
        const { count } = this.state;
        
        return (
            <div>
                <h3>※ DidUpdate : props 또는 state가 갱신되면 발생</h3>
                <h3>DidUpdate count : {this.props.data}</h3>
            </div>
        )
    }
}

class GetDerived extends React.Component {
    constructor() {
        super()    
        this.state = {
            currentValue:0
        };
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps실행", props,state)
        return{
            currentValue : props.data*10
        } 
    }

    render() {
        console.log("GetDerived 컴포넌트 렌더링됨")
        return (
            <div>
                <h3>currentValue : {this.state.currentValue}</h3>
            </div>
        )
    }
}

class Snap extends React.Component {
    constructor()
    {
        super();
        this.state={
            currentValue: 0
        }
    }
    componentDidUpdate(props,state,snapShot){
        console.log("componentDidUpdate",snapShot)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate")
        return prevState.currentValue*10
    }

    render(){
        console.log("Snap컴포넌트 렌더링됨")
        return (
            <div>
                <h3>{this.state.currentValue}</h3>
                <button onClick={()=>{this.setState({ currentValue:this.state.currentValue+1})}}>
                    update state </button>
            </div>
        )
    }
}

class ShouldUpdate extends React.Component {
    
    constructor(){
        super();
        this.state={
            data: 0
        }
    }
    shouldComponentUpdate(prevProps,prevState)
    {
        console.log(prevState);
        if(prevState.data==3){
            return false;
        }
        return true;
    }
    render(){
        console.log("ShouldUpdate컴포넌트 렌더링됨")
        return (
            
            <div>
                <h3>shouldComponentUpdate : {this.state.data}</h3>
                <button onClick={()=>{this.setState({data:this.state.data+1})}}>update State</button>
            </div>
        )
    }
}
