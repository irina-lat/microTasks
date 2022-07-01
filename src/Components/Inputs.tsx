import React, {ChangeEvent} from "react";

type InputsPropsType={
    setTitle:(title:string)=>void,
    title:string
}

export const Inputs=(props:InputsPropsType)=>{
    function onChangeHandler2(event: ChangeEvent<HTMLInputElement>) {
        props.setTitle(event.currentTarget.value)
    }

    return(
        <input value={props.title} onChange={onChangeHandler2} />
    )
}