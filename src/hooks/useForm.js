import { useState } from "react";
import axios from 'axios';

export const useForm = ( initialForm = {}) => {
    
    const [error, setError] = useState("");
    const [ message, setMessage] = useState("");
    
    const onResetForm = () => {
        setFormState( initialForm );
    };

    const [ formState, setFormState] = useState(initialForm); 

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ] : value
        });
    }

    const onSave = () =>{
        (async () => {
            try{
                const response = await axios.post( 'https://contable-advisory.herokuapp.com/cliente/', formState ) //http://localhost:8000/cliente
                    console.log(response);
            }catch ( error ){
                setError(error.message)
            }
        })();
    }

    const onDelete = () =>{
        (async () => {
            try{
                console.log(formState);
                const response = await axios.delete( 'https://contable-advisory.herokuapp.com/cliente/', formState ) //JSON.stringify(formState)
                    console.log(response);
                    console.log(response.data.message);
            }catch ( error ){
                setError(error.message)
            }
        })();
    }

    return { 
        ...formState,
        formState, 
        onInputChange,
        onResetForm,
        onSave,
        onDelete
    }
}