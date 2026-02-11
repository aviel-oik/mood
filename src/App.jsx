import { useState } from 'react'
import './App.css'
import Mood from './components/mood'
import Button from './components/button'

function App() {

  const [lab, setLab] = useState("Neutral 😐") 

  return (
    <>
    <Mood label= {lab}/>
    <Button onClick={() => {setLab("Happy 😀")}} label="Happy 😀" />
    <Button onClick={() => {setLab("Sad 😢")}} label="Sad 😢" />
    <Button onClick={() => {setLab("Angry 😡")}} label="Angry 😡" />
    <Button onClick={() => {setLab("Neutral 😐")}} label="Neutral 😐" />
    </>
  )
}

export default App
