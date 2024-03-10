import React from 'react'
import { useState, useEffect } from 'react'
import { Message } from './Message'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

    const{ formState, onInputChange, username, email, password } = useForm()



  return (
    <div>
        <h1>Form With Custom Hook</h1>

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

        <input
        type='password'
        className='form-control mt-2'
        placeholder='Password'
        name='password'
        value={formState.password}
        onChange={onInputChange}
        />
    </div>
  )
}
