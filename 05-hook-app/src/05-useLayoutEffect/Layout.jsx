import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { LoadingMessage } from '../03-examples/LoadingMessage'

export const Layout = () => {
  const [trigger, setTrigger] = useState(0); // Nuevo estado para desencadenar la solicitud

  const { data, hasError, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes?i=${trigger}`); // Agrega el estado al final de la URL para cambiarla cada vez que se hace clic en el botón

  const changeQuote = () => {
    setTrigger(trigger + 1); // Cambia el estado cuando se hace clic en el botón
  };

  console.log(data) 

  return (
    <div>
        <h1>Layout Effect</h1>
        <hr />
    
        { hasError && <p className="alert alert-danger">Error!</p> }
        { isLoading 
            ? <LoadingMessage />
            : (
                <blockquote className="blockquote text-right">
                    <p className="mb-3">{ data[0].quote }</p>
                    <footer className="blockquote-footer">{ data[0].author }</footer>
                </blockquote>
            )
        }
    
        <button
            className="btn btn-primary"
            onClick={ changeQuote } // Llama a changeQuote cuando se hace clic en el botón
        >
            Change quote
        </button>
    </div>
  )
}