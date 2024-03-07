import { useState } from "react"


export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

  return (
    <>
        <h1>Counter:</h1>

        <h2>Counter 1: {counter.counter1}</h2>
        <h2>Counter 2: {counter.counter2}</h2>
        <h2>Counter 3: {counter.counter3}</h2>

        <button onClick={() => setCounter({ ...counter, counter1: counter.counter1 + 1 })}>+Counter1</button>
        <button onClick={() => setCounter({ ...counter, counter2: counter.counter2 + 1 })}>+Counter2</button>
        <button onClick={() => setCounter({ ...counter, counter3: counter.counter3 + 1 })}>+Counter3</button>
    </>
  )
}
