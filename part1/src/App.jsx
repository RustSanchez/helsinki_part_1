import { useState } from 'react'
import './index.css'

const Statistics  = (props) => {
  console.log(props)
  if (props.good === 'good: 0' && props.neutral === 'neutral: 0' && props.bad === 'bad: 0') {
    return (
      <>
        <p className={props.className}>{props.title}</p>
        <p>No feedback given yet.</p>
      </> 
    )
  } 

  return (
    <div>
      <p className={props.className}>{props.title}</p>
      <p >{props.good}</p>
      <p >{props.neutral}</p>
      <p >{props.bad}</p>
      <p >{props.all}</p>
      <p >{props.average_score}</p>
      <p >{props.positive_percentege}</p>

    </div>
  )
}
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

      <Statistics 
        className='title' title={title2}
        good={`good: ${good}`}
        neutral={`neutral: ${neutral}`}
        bad={`bad: ${bad}`}
        all={`all: ${good + neutral + bad}`}
        average_score={`average score: ${average}`}
        positive_percentege={`positive percentage: ${positive_percentege}%`}
      />

    
    </> 
  )
}

export default App
