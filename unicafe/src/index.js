import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, clickHandler}) => {
  return <button onClick={clickHandler}>{text}</button>;
}

const Statistic = ({name, data}) => {
  return (
    <tr>
      <td>{name}</td> 
      <td>{data}</td>
    </tr>
  );
}

const Statistics = ({stats}) => {
  const statlist = stats.map((stat, index) => {
    return <Statistic name={stat.name} data={stat.data} key={index}/>
  });
  return (
    <table>
      <tbody>
        {statlist}
      </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1);
  }

  const neutralClick = () => {
    setNeutral(neutral + 1);
  }

  const badClick = () => {
    setBad(bad + 1);
  }

  const avg = () => {
    if (good-bad === 0) return 0;
    return (good - bad) / (good + neutral + bad);
  }

  const posiPer = () => {
    return (good / (good + neutral + bad)) * 100;
  }

  const stats = [
    {name: "good", data: good},
    {name: "neutral", data: neutral},
    {name: "bad", data: bad},
    {name: "all", data: good+neutral+bad},
    {name: "average", data: avg()},
    {name: "positive", data: posiPer()+"%"}
  ]

  return (
    <div>
      <h2>give feedback</h2>
      <Button text={"good"} clickHandler={goodClick} />
      <Button text={"neutral"} clickHandler={neutralClick} />
      <Button text={"bad"} clickHandler={badClick} />
      <h2>statistics</h2>
      {good+bad+neutral !== 0 
        ? <Statistics stats={stats}/>
        : "No feedback given"
      }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)