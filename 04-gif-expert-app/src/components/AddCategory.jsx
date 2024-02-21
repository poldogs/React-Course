import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        e.preventDefault()
        setinputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 2) {
            onNewCategory(inputValue.trim())
            setinputValue('')
        }
    }


  return (
    <form onSubmit={ onSubmit }>
        <input 
        type="text" 
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleInputChange}/>
    </form>
    


  )
}
