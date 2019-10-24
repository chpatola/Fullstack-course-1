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
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = ({course}) => <h1>{course.name}</h1>

const Part = ({course}) => {
  return (
    <div>
      <p>{course.name}, {course.exercises}</p>
    </div>
    
  )
}

const Content = ({course}) =>
  <div>
  <Part course={course.parts[0]} />
  <Part course={course.parts[1]} />
  <Part course={course.parts[2]} />
  </div>

const Total = ({ course }) =>

<p>Total number of excercises is {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} </p>


ReactDOM.render(<App />, document.getElementById('root'))