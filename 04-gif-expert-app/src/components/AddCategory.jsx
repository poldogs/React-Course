import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        e.preventDefault()
        setinputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories])
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
