import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
import {Footer} from "./Components/Footer";
import {InputFull} from "./Components/InputFull";

function App() {
    return (
        <div className="App">
            <Header/>
            <Body/>
            <Footer/>
            <InputFull/>

        </div>
    );
}

export default App;
