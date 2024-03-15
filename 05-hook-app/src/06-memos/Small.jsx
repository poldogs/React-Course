import React, { memo } from 'react'

export const Small = memo(({ value }) => {

    console.log('Me volví a llamar :(')

    const counter = value

  return (
    <small>{ counter }</small>
  )
}
)
