import React from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'

export const HooksApp = () => {
  return (
    <div>
        <h1>HooksApp</h1>
        <CounterApp />
        <hr />
        <CounterWithCustomHook />
        <hr />
        <SimpleForm />
        <hr />
        <FormWithCustomHook />
    </div>
  )
}
