import { GifChart } from "./GifChart";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs( category );

    console.log( isLoading )

    return (
        <>
            <h3>{ category }</h3>
            {/* Para la carga seria ideal crearse un nuevo componente, pero esto es simple */}
            {
                (<h2>Cargando...</h2>) && isLoading
            }

            <div className="card-grid">
                { gifs.map( (g) => <GifChart key={g.id} { ...g } />) }
            </div>
        </>
    )
}
