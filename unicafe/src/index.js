import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//Exercises 1.6-1.10

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Stat = (props) => {

  if (props.all === 0) {
    return (
      <div>
        <p>
        </p>
      </div>
    )
  }

  return (
    <div>
      <p>{props.text} {props.value} {props.comment} </p>
    </div>
  ) 
}


const StatisticsHeadlines = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>
          No feedback given
          </p>
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [points, setPoints] = useState(0)
  const [averige, setAverige] = useState(0)
  const [positivePercent, setPositivePercent] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setPoints(points + 1)
    setAverige((points + 1) / (all + 1))
    setPositivePercent((good + 1) / (all + 1))

  }
  console.log("Averige: ", averige)

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setPoints(points)
    setAverige(points / all)
    setAverige((points) / (all + 1))
    setPositivePercent((good) / (all + 1))

  }
  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setPoints(points - 1)
    setAverige(points / all)
    setAverige((points - 1) / (all + 1))
    setPositivePercent((good) / (all + 1))

  }

  console.log("Amount of times pressed 'good'", good)

  return (
    <div>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <StatisticsHeadlines all = {all}/>
      <Stat text="good" value={good} all ={all}/>
      <Stat text="neutral" value={neutral} all ={all}/>
      <Stat text="bad" value={bad} all ={all}/>
      <Stat text="all" value={all} all ={all}/>
      <Stat text="averige" value={averige} all ={all}/>
      <Stat text="positive" value={positivePercent} all ={all} comment ={'%'}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)