import {ChangeEvent, useState} from "react";

type InputFullPropsType = {
    addMessage: (title: string) => void
}

export const InputFull = (props: InputFullPropsType) => {

    let [title, setTitle] = useState('')

    function onChangeInputHundler(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.currentTarget.value)
    }

    function onClickInputHandler() {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input  value={title} onChange={onChangeInputHundler} type="text"/>
            <button onClick={onClickInputHandler}>+</button>
        </div>
    )
}