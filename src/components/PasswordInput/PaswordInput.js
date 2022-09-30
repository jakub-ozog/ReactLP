import React from 'react';
import './style.scss'
import {useState} from "react";
import {AiFillEyeInvisible} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'

export const PasswordInput = (props) => {
    const [hide, setHide] = useState(false)
    const [retype, setRetype] = useState(false)


    const toggle = () => {
        setHide((prev) => !prev);
    };
    const toggleRetype = () => {
        setRetype((prev) => !prev);
    }
    return (
        <>
            <div className="passInput">
                <input className="passInput__input" type={!hide ? "password" : "text"} {...props} required/>
                <i className="passInput__showPassIcon" onClick={toggle}>
                    {hide ? <AiFillEyeInvisible/> : <AiFillEye/>}
                </i>
            </div>

            <div className="passRetypeInput">
                <input className="passRetypeInput__input" type={!retype ? "password" : "text"} {...props} required/>
                <i className="passRetypeInput__showPassRetypeIcon" onClick={toggleRetype}>
                    {retype ? <AiFillEyeInvisible/> : <AiFillEye/>}
                </i>
            </div>

        </>
    );
}

