import React from 'react'

export default function Square({ color, hexColor }) {
  return (
    <div className='square' style={{ backgroundColor: color }}>
      <p>{color ? color : 'Empty value'}</p>
      <p>{hexColor ? hexColor : null}</p>
    </div>
  )
}
