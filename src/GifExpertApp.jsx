import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { formatizString } from "./helpers/formatizString";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Sword Art Online', 'Re Zero' ]);

    const onAddCategory = (value) => {

        if( categories.map(s => formatizString(s)).includes( formatizString(value) ) ) return true;
        
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