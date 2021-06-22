import React,{ useState } from 'react';
import './functionCounter.css'

const FunctionCounter = () => {
    const [count, newCount]= useState(0);
    return (
        <div className="FuncDiv"style={{textAlign:"center"}}>
            <h1>Function Counter</h1>
            <h3 className= "FnxCounter1">Count :{count}</h3>
            <button className="btn-1" onClick={() => newCount(count - 1)}>Decrease</button>
            &nbsp;
            <button className="btn-1" onClick={() => newCount(count + 1)}>Increase</button>
        </div>
    );
}

export default FunctionCounter;
