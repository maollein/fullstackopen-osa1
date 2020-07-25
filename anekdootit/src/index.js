import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(props.anecdotes.length).fill(0));
  
  const getRandomIndex = () => {
    return Math.floor(Math.random() * (props.anecdotes.length));
  }

  const handleRandomClick = () => {
    setSelected(getRandomIndex());
  }

  const vote = () => {
    const newPoints = [...points];
    newPoints[selected]++
    setPoints(newPoints);
  }

  const getMostVoted = () => {
    const mostVotedIndex = points.indexOf(Math.max(...points));
    return props.anecdotes[mostVotedIndex];
  }

  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        {props.anecdotes[selected]}
        <p>has {points[selected]} votes</p>
        <button onClick={vote}>vote</button>
        <button onClick={handleRandomClick}>Random</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{getMostVoted()}</p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)