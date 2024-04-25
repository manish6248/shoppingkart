import { useState } from 'react'

import './App.css'
import ShoppingKart from './Components/ShoppingKart'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
 <ShoppingKart></ShoppingKart>

    </>
  )
}

export default App
