import { useState } from "react";

//rafc
export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('Psycho Pass');

    const onInputChange = ({target}) => {
        
        setInputValue( target.value );

    };

    const onSubmit = (event) => {

        event.preventDefault();

        if( inputValue.length < 3 || inputValue.trim().length <= 1) return;

        onAddCategory( inputValue );
        setInputValue('');

    };

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Inserte un Anime"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>

    )
}
