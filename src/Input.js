import React from 'react'
import colorNames from 'colornames'

export default function Input({ color, setColor, setHexColor }) {
  return (
    <div className='color-input'>
      <input
        autoFocus
        type='text'
        placeholder='Add color name'
        value={color}
        onChange={(e) => {
          setColor(e.target.value)
          setHexColor(colorNames(e.target.value))
        }}
      />
    </div>
  )
}
