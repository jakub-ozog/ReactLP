import {useQuery} from "@tanstack/react-query";
import {useEffect} from "react";
import {useActions} from "./index";

export default function useCharacters(){
    const actions = useActions()
    const query = useQuery(['characters'], actions.getCharacters, {keepPreviousData: true})

    const submitData = (payload) => {
        const data = {
            name: 'Jakub',
            ...payload
        }

        console.log(data)
    }
    return {
        data: query?.data?.data?.results,
        query: query,
        submitData
    }
}