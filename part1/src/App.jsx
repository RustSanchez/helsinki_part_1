import { useState } from 'react'



const Header  = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.title}</p>
    </div>
  )
}
const Content   = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part_name} {props.part_number}</p>
    </div>
  )
}
const Total    = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.number}</p>
    </div>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header title={course}/>
      <Content  part_name={part1} part_number={exercises1}/>
      <Content  part_name={part2} part_number={exercises2}/>
      <Content  part_name={part3} part_number={exercises3}/>
      <Total number={exercises1+exercises2+exercises3}/>
    </>
  )
}

export default App
