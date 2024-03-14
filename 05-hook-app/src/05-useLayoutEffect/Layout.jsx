import React, { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import { LoadingMessage } from '../03-examples/LoadingMessage'

export const Layout = () => {
  const [counter, setCounter] = useState(1); 

  const { data, hasError, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`);

    const increment = () => { setCounter(counter + 1) }
    const decrement = () => { setCounter(counter - 1) }
  useEffect(() => {
    console.log('Layout Effect')
  }, [counter])

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
            onClick={ increment }
        >
            Siguiente quote
        </button>

        <button
            className="btn btn-primary"
            onClick={ decrement }
        >
            Anterior quote
        </button>
    </div>
      
  )
}