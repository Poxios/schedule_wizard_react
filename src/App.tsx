import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScheduleResultPage from './ScheduleResultPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScheduleResultPage />
    </>
  )
}

export default App
