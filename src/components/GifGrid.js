import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs( category );

    // useEffect(() => {
    //     getGifs(category)
    //         .then( setImages );// then( imgs => setImages(imgs) )  --> es lo mismo
    // }, [ category ]) //Aqui hay un arreglo de dependencias.Si no ponemos ninguna dependencia el useEffect se disparará una sola vez

    


    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
