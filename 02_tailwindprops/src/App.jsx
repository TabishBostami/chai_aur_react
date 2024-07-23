import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {
  

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4'>Tailwind Test</h1><br />
      <Card name = 'Tabish' />
      <Card name = 'Bostami'/>

    

    </>
  )
}

export default App
