import React, { useMemo, useState } from 'react'


const procesoPesado = ( iteraciones = 100 ) => {
    for (let i = 0; i < iteraciones; i++) {
        console.log('Ahí vamos...')
    }

    return `${ iteraciones } iteraciones realizadas.`
}

export const MemoHook = () => {

    const [counter, setCounter] = useState(0)
    const [show, setShow] = useState(true)


    const increment = () => {
        setCounter(counter + 1)
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]) // Si el counter cambia, se vuelve a ejecutar el procesoPesado

  return (
    <div>
        
        <h1>
            Counter: <small>{ counter }</small>
        </h1>

        <hr />
        <h4>
            { memoProcesoPesado }
        </h4>

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
