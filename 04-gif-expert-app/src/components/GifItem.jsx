import React from 'react'
import PropTypes from 'prop-types'

export const GifItem = ({ id, title, url }) => (
    <li key={id} className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </li>
);

GifItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}