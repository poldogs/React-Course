import React from 'react'

import useCounter from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(100)
  return (
    <>

    <h1>Counter with hook: {counter}</h1>

    <button className='btn btn-primary' onClick={increment}>+1</button>
    <button className='btn btn-primary' onClick={decrement}>-1</button>
    <button className='btn btn-danger' onClick={reset}>Reset</button>
    </>
  )
}
