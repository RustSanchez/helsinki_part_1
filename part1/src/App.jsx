import { useState } from 'react'
import './index.css'




const Statistics  = (props) => {
  console.log(props)
  if (props.good ===  0 && props.neutral ===  0 && props.bad === 0) {
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
      <table>
        <tbody>
          <tr>
            <td>good:</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>neutral:</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad:</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>all:</td>
            <td>{props.all}</td>
          </tr>
          <tr>
            <td>average score:</td>
            <td>{props.average_score}</td>
          </tr>
          <tr>
            <td>positive percentage:</td>
            <td>{props.positive_percentege}%</td>
          </tr>
        </tbody>
      </table>

      
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
  console.log(Math.random()* 8 )

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const title1= 'give feedback'
  const title2 = 'statistics'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let average = (good - bad) / (good + neutral + bad)
  let positive_percentege = (good / (good + neutral + bad)) * 100
  return (
    <>
      <Display  title={anecdotes[selected]}/>
      <Button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text='next anecdote'/>

      <Display className='title' title={title1}/>
      <Button onClick={() => setGood(good + 1)} text='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button onClick={() => setBad(bad + 1)} text='bad'/>

     
      <Statistics 
        className='title' title={title2}
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average_score={average}
        positive_percentege={positive_percentege}
      />

    
    </> 
  )
}

export default App
