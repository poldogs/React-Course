import React from 'react'
import { useState } from 'react'

export const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState( initialForm )

    // {
    //     username: '',
    //     email: '',
    //     password: ''
    // }
    
    const onInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    const onResetForm = () => {
        setFormState( initialForm )
    }

    return{
        formState,
        onInputChange,
        onResetForm
    }
}
