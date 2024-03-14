import React from 'react'
import { useRef } from 'react'; 

export const FocusScreen = () => {

    const inputRef = useRef();

const onClick = () => {
    // document.querySelector('input').select();
    inputRef.current.select();
}

  return (
    <div>
        <h1>FocusScreen</h1>
        <hr />

        <input
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Su nombre"
        />

        <button
            className="btn btn-outline-primary mt-5"
            onClick={onClick}
        >
            Set Focus
        </button>
    </div>
  )
}
