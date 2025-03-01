import { GifChart } from "./GifChart";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { requerido } from "../helpers/requerido";

export const GifGrid = ({ category = requerido() }) => {

    const { gifs, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {/* Para este proceso seria ideal crearse un nuevo componente, pero este es simple */}
            {
                isLoading && <h2>Cargando...</h2> 
            }

            <div className="card-grid">
                { gifs.map( (g) => <GifChart key={g.id} { ...g } />) }
            </div>
        </>
    )
}
