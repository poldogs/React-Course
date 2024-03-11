import React from 'react'

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <div>
        <h3>{ id } { name }</h3>
        <img src={ sprites.front_default } alt={ name } />
        <img src={ sprites.back_default } alt={ name } />
        <img src={ sprites.front_shiny } alt={ name } />
        <img src={ sprites.back_shiny } alt={ name } />
    </div>
  )
}
