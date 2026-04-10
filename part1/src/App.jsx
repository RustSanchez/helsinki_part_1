import { useState } from 'react'
import './index.css'


const Display  = (props) => {
  console.log(props)
  return (
    <div>
      <p className={props.className}>{props.title}</p>
    </div>
  )
}
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)


function App() {
  const title1= 'give feedback'
  const title2 = 'statistics'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let average = (good - bad) / (good + neutral + bad)
  let positive_percentege = (good / (good + neutral + bad)) * 100
  return (
    <>
      <Display className='title' title={title1}/>
      <Button onClick={() => setGood(good + 1)} text='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button onClick={() => setBad(bad + 1)} text='bad'/>

      <Display className='title' title={title2}/>
      <Display title={`good: ${good}`}/>
      <Display title={`neutral: ${neutral}`}/>
      <Display title={`bad: ${bad}`}/>
      <Display title={`all: ${good + neutral + bad}`}/>
      <Display title={`average score: ${average}`}/>
      <Display title={`positive percentage: ${positive_percentege}%`}/>
    </> 
  )
}

export default App
