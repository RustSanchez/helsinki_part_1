import { useState } from 'react'



const Header  = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.title}</p>
    </div>
  )
}

const Part   = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part_name} {props.part_number}</p>
    </div>
  )
} 
const Content   = (props)=>{
  console.log(props)
  return (
    <div>
      <Part part_name={props.part1} part_number={props.exercises1}/>
      <Part part_name={props.part2} part_number={props.exercises2}/>
      <Part part_name={props.part3} part_number={props.exercises3}/>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header title={course.name}/>
      <Content  part1={course.parts[0].name} exercises1={course.parts[0].exercises} 
      part2={course.parts[1].name} exercises2={course.parts[1].exercises}
      part3={course.parts[2].name} exercises3={course.parts[2].exercises}/>
      
      <Total number={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </>
  )
}

export default App
