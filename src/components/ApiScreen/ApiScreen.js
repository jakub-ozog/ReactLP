import './style.scss'
import React, {useEffect, useState} from 'react'
import {useCharacters} from "../../hooks";

export default function ApiScreen() {

    const {query, data, submitData} = useCharacters()


    return (
        <>
            {query.isLoading ? (
                <div>loading...</div>
            ) : (
                <div>
                    {data?.map((ch, idx) => (
                        <div key={idx}>{ch.name}</div>
                    ))}
                    <button onClick={submitData({id: 5})}>
                        Wyślij
                    </button>
                </div>
            )}
        </>
    )
}