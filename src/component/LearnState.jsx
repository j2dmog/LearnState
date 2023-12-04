import React, {useState} from 'react'
const LearnState = () => {
    const [count, setCount] = useState(0)
    
    const Increment = ()=> {
        if(count < 10) {
            return  setCount(count +1)
        }
     }
     const Decrement = ()=> {
        if(count > 0) {
            return setCount(count -1)
        }
     }
     const Reset = ()=> {
        setCount(0)
     }


    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}> 
            <div style={{display: "flex", alignItems: "center"}}>
                <button onClick={Increment} style={{width:"200px"}}> + </button>
                <div style={{fontSize: "70px"}}> {count} </div>
                <button onClick={Decrement} style={{width:"200px"}}> - </button>
                <button onClick={Reset} style={{marginLeft: "2rem"}}>Reset</button>
            </div>
        </div>
    )
}
 export default LearnState