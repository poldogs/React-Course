import React, { useState } from 'react'
import { Small } from './Small'

export const Memorize = () => {

    const [counter, setCounter] = useState(0)
    const [show, setShow] = useState(true)


    const increment = () => {
        setCounter(counter + 1)
    }


  return (
    <div>
        
        <h1>
            Counter: <Small value={ counter } />
        </h1>

        <hr />

        <button
            className="btn btn-primary"
            onClick={ increment }
        >
            +1
        </button>

        <button
            className="btn btn-outline-primary ml-3"
            onClick={ () => setShow(!show) }
        >
            Show/Hide { JSON.stringify( show ) }
        </button>
    </div>
  )
}
