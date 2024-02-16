import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(0);

    const handleAdd = () => {
        // console.log(e);
        setCounter(counter + 1);
        console.log(counter);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
        // value is 12 because it is the default value, look at the main.jsx file
    }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={handleAdd}  >
            +1
        </button>

        <button onClick={handleSubstract}>
            -1
        </button>

        <button onClick={handleReset}>
            Reset
        </button>
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}