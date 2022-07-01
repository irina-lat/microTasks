
type ButtonsPropsType={
    name:string,
    callBack:()=>void
}

export const Buttons=(props:ButtonsPropsType)=>{
    function onclickButtonHandler2() {
        props.callBack()
    }

    return(
        <button onClick={onclickButtonHandler2}>{props.name}</button>
    )
}