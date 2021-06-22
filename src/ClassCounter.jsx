import React, { Component } from 'react'
import './ClassCounter.css'
class ClassCounter extends Component {
    constructor (props){
        super(props)
        this.state = {count:0}
    };
    handleIncreaseCount = (e) => {
        e.preventDefault();
        console.log("hello")
        this.setState({count:this.state.count +1})
    }
    handleDecreaseCount = (e) => {
        e.preventDefault();
        console.log("decrease")
        this.setState({count:this.state.count -1})
    }
    render() {
        return (
            <div className="FuncDiv" style={{textAlign: "center"}}>
                <h2 FnxCounter1>Counter:{this.state.count}</h2>
                <button className="btn-2" onClick={this.handleDecreaseCount}>Decrease</button>
                &nbsp;
                <button  className="btn-1" onClick={this.handleIncreaseCount}>Increase</button>
            </div>
        )
    }
}

export default ClassCounter
