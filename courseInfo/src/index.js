import React from 'react'
import ReactDOM from 'react-dom'

//Exercises 1.1-1.5
const App = () => {
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
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({course}) => <h1>{course.name}</h1>

const Part = ({parts}) => {
  return (
    <div>
      <p>{parts.name}, {parts.exercises}</p>
    </div>
    
  )
}

const Content = ({parts}) =>
  <div>
  <Part parts={parts[0]} />
  <Part parts={parts[1]}/>
  <Part parts={parts[2]} />
  </div>

const Total = ({parts}) =>

<p>Total number of excercises is {parts[0].exercises + parts[1].exercises + parts[2].exercises} </p>


ReactDOM.render(<App />, document.getElementById('root'))