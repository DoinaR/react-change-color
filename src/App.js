import React, { useState } from 'react'
import Square from './Square'
import Input from './Input'

function App() {
  const [color, setColor] = useState('')
  const [hexColor, setHexColor] = useState('')

  return (
    <>
      <Square color={color} hexColor={hexColor} />
      <Input color={color} setColor={setColor} setHexColor={setHexColor} />
    </>
  )
}

export default App
