import './style.scss'
import React from 'react'
// import {useCharacters} from "../../hooks";
import {useQuery} from "@tanstack/react-query";
import Character from "../Character/Character";

export default function ApiScreen() {
    // const {query, data, submitData} = useCharacters()

    const fetchCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        return response.json();
    };

    const {data, status,} = useQuery(["characters"], fetchCharacters)

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (status === "error") {
        return <div>Error</div>
    }

    return (
        <>
            <div className="container">
                <h1>Rick and Morty API!</h1>
                <div className="characters">
                    {data?.results.map((character, idx) => (
                        <Character key={idx} character={character}/>
                    ))}
                </div>
            </div>
        </>








        // <>
        //     {query.isLoading ? (
        //         <div>loading...</div>
        //     ) : (
        //         <div>
        //             {data?.map((ch, idx) => (
        //                 <div key={idx}>{ch.name}</div>
        //             ))}
        //             <button onClick={submitData({id: 5})}>
        //                 Wyślij
        //             </button>
        //         </div>
        //     )}
        // </>
    )
}