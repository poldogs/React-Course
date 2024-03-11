import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { LoadingMessage } from './LoadingMessage'
import { PokemonCard } from './PokemonCard'

export const MultipleCustomHooks = () => {
  const [counter, setCounter] = useState(1); 

  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  const increment = () => setCounter(counter + 1); 
  const decrement = () => counter > 1 && setCounter(counter - 1);
  console.log(data)

  return (
    <div>
      <h1>Información de Pokémon</h1>
      <hr />
      { hasError && <p className='alert alert-danger'>No se pudo cargar la información</p> }
      { isLoading
          ? <LoadingMessage />
          : <PokemonCard { ...data } />
      }
  
      <button
          className='btn btn-primary'
          onClick={ decrement }
      >
          Anterior Pokémon
      </button>
      <button
          className='btn btn-primary'
          onClick={ increment }
      >
          Siguiente Pokémon
      </button>
    </div>
  )
}