import React,{ useState } from 'react';
import './functionCounter.css'

const FunctionCounter = () => {
    const [count, newCount]= useState(0);
    return (
        
        <div className="FuncDiv"style={{textAlign:"center"}}>
            <h5>Function Counter</h5>
            <h2 className= "FnxCounter1">Counter :{count}</h2>
            <button className="btn-2" onClick={() => newCount(count - 1)}>Decrease</button>
            &nbsp;
            <button className="btn-1" onClick={() => newCount(count + 1)}>Increase</button>
        </div>
    );
}

export default FunctionCounter;
