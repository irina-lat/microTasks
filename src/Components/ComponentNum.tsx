import React, {useState} from "react";

export const ButtonNum=()=>{
    let [a, setA]=useState(1)
    const onClickHandlerA =()=>{
        setA(++a)
        console.log(a)
    }

    const onClickHandlerB =()=>{
        setA(--a)
        console.log(a)
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandlerA}>add</button>
            <button onClick={onClickHandlerB}>remove</button>
        </div>
    )
}