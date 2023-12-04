import React, {useState} from 'react'
const EventForm = ()=>{



    return (
        <div style={{position: "relative", left: "30rem"}}>
            <div style={{display: "flex", flexDirection: "column" , width: "15rem", margin: "3rem"}}>
                <label htmlFor="" style={{marginBottom: "1rem"}}>First Name</label>
                <input type="text" />
            </div>
            <div style={{display: "flex", flexDirection: "column" , width: "15rem", margin: "3rem"}}>
                <label htmlFor="" style={{marginBottom: "1rem"}}>Second Name</label>
                <input type="text" />
            </div>
            <div style={{display: "flex", flexDirection: "column" , width: "15rem", margin: "3rem"}}>
                <label htmlFor="" style={{marginBottom: "1rem"}}>Password</label>
                <input type="password" />
            </div>
            <button style={{marginLeft: "6rem"}}>Submit</button>
        </div>
    )
}
export default EventForm