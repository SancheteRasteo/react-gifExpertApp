import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Sword Art Online', 'Re Zero' ]);

    const formatizString = (s) => s.replace( /\s+/g, '' ).toLowerCase();  //Elimina los espacios y manda a lowercase

    const onAddCategory = (value) => {

        if( categories.map(s => formatizString(s)).includes( formatizString(value) ) ) return;
        
        setCategories([ value, ...categories ])

    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory onAddCategory={ onAddCategory }/>

            {/* Listado */}
            
            { categories.map( category => <GifGrid key={category} category={category}/>) }
        
        </>
    )

}