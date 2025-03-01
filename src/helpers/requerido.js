

export const requerido = () => {
    throw new Error(`Algun parametro obligatorio no fue recibido`);  //Reemplazo de las propTypes
}