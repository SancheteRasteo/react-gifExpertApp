import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { avisoYaIngresado, avisoNoPermitido } from "../helpers/toastMessages";
import { requerido } from '../helpers/requerido';


//rafc
export const AddCategory = ({ onAddCategory = requerido() }) => {

    const [inputValue, setInputValue] = useState('Psycho Pass');

    const onInputChange = ({target}) => {
        
        setInputValue( target.value );

    };

    const onSubmit = (event) => {

        event.preventDefault();

        if( inputValue.length < 3 || inputValue.trim().length <= 1 ) { 
            
            avisoNoPermitido();
            
            return;

        }

        if( !onAddCategory( inputValue ) )
        {
            setInputValue('');
        } else {
            avisoYaIngresado();
        }
    };

    return (
        <>
            <form aria-label="form" onSubmit={ onSubmit }>
                <input 
                    type="text" 
                    placeholder="Inserte un Anime"
                    value={ inputValue }
                    onChange={ onInputChange }
                />
            </form>
            <ToastContainer />
        </>
    )
}
