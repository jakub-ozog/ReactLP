import './style.scss'
import React, {useState} from 'react'
// import {useCharacters} from "../../hooks";
import {useQuery} from "@tanstack/react-query";
import Character from "../Character/Character";

export default function ApiScreen() {
    // const {query, data, submitData} = useCharacters()

    const [page, setPage] = useState(1);

    const fetchCharacters = async ({queryKey}) => {
        // console.warn(kobe)
        const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
        )
        return response.json();
    };

    const {data, status, isPreviousData} = useQuery(["characters", page], fetchCharacters, {keepPreviousData: true})

    console.log(data)
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
                <div>
                    <button className="characters__button"
                            disabled={page === 1}
                            onClick={() => setPage((old) => old - 1)}>
                        Previous
                    </button>
                    <button className="characters__button"
                    disabled={isPreviousData || !data.info.next}
                            onClick={() => setPage((old) => old + 1)}
                    >
                        Next
                    </button>
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