import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

// Esto es un custom hook
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => { // Aclaracion: useEffect no puede ser Async pq esperan algo sincrono
        
        getGifs(category)
            .then(imgs => {

           
                setState({
                    data: imgs,
                    loading: false
                });
         

            })

    }, [category])


    return state; // {data: [], loading: true}
}