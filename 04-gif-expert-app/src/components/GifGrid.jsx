import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {

  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs(category)
      .then(setGifs)
  }, [category])

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          gifs.map(({ id, title, url }) => (
            <div className="card" key={id}>
              <img src={url} alt={title} />
              <p>{title}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}
