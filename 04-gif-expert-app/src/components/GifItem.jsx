import React from 'react'

export const GifItem = ({ id, title, url }) => (
    <li key={id} className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </li>
);