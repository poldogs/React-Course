import React from 'react'
import { useState, useEffect } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

const [formState, setFormState] = useState({
    username: 'poldogs',
    email: 'poldo@gmail.com'
})

const onInputChange = ({ target }) => {
    setFormState({
        ...formState,
        [target.name]: target.value
    })
}

useEffect(() => {
    console.log('username changed')
}
, [formState.username])

useEffect(() => {
    console.log('email changed')
}
, [formState.email])

  return (
    <div>
        <h1>Simple form</h1>

        <input 
        type="text" 
        className='form-control'
        placeholder='Username'
        name='username'
        value={formState.username}
        onChange={onInputChange}
        />
        {
            formState.username === 'Poldogs' && <Message />
        }

        <input
        type='email'
        className='form-control mt-2'
        placeholder='Email'
        name='email'
        value={formState.email}
        onChange={onInputChange}
        />
    </div>
  )
}
