import React, {useState} from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
import {Footer} from "./Components/Footer";
import {InputFull} from "./Components/InputFull";
import {Button} from "./Components/Button";
import {ComponentsMoney} from "./Components/CimponentMoney";
import {ComponentOne} from "./Components/ComponentOne";
import {ComponentTwo} from "./Components/ComponentTwo";
import {ButtonNum} from "./Components/ComponentNum";
import {Inputs} from "./Components/Inputs";
import {Buttons} from "./Components/Buttons";

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]);

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ];

    let [students, setStudents] = useState([
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
    ]);

    function buttonOne(name: string, age: number) {
        console.log(name, age)
    }

    function buttonTwo(name: string) {
        console.log(name)
    }

    function buttonThree() {
        console.log('Stupid')
    }

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage=(title:string)=>{
        let newMessage ={message:title}
        setMessage([newMessage, ...message])
    }

    let [title, setTitle]=useState('')
    console.log(title)

    function callBackButtonHandler() {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            microTasks
            <Header titleForHeader={'New Header'}/>
            <Body titleForBody={'Complete BODY'}/>
            <Footer titleForFooter={'Bye Footer'}/>

            <ComponentOne topCars={topCars} students={students}/>
            <ComponentTwo/>

            <Button name={'YouTube-1'} callBack={() => buttonOne('Ivan', 18)}/>
            <Button name={'YouTube-2'} callBack={() => buttonTwo('Vasya')}/>
            <Button name={'Stupid Button'} callBack={() => buttonThree()}/>
            <ButtonNum/>

            <ComponentsMoney money={money}/>

            <InputFull addMessage={addMessage} />
            {message.map((el,index)=>{
                return (
                    <div key={index}>{el.message}</div>
                )
                })}
            <Inputs setTitle={setTitle}  title={title} />
            <Buttons name={'+'} callBack={callBackButtonHandler} />

            <hr/>
        </div>
    )
}

export default App;
