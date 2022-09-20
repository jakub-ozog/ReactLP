import './style.scss';
import React from "react";
import Navbar from "../Navbar/Navbar";
import Body from "../Body/Body";
import FunFacts from "../FunFacts";
import ReactIcon from "../../assets/reactjs-icon 2.svg";


export default function BaseLayout(props) {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar/>
            </header>
            <main className="bodyContainer">
                <div className="reactIcon">
                    <img src={ReactIcon} alt=""/>
                </div>
                {props.children}
            </main>
        </div>
        // <main className="main">
        // </main>
    )
}