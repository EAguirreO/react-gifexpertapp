import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     // No es buena practica usar el categories.push

    //     // setCategories([...categories, 'Evangelion']); Opcion válida
        
    //     setCategories(cats => [...cats, 'Evangelion'])
    // }



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    )
                }
            </ol>
        </>
    )
}


