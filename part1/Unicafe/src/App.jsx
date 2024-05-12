import { useState } from "react";

const Boton = ({ name, handle }) => <button onClick={handle}>{name}</button>;

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}: {value}{" "}</td>
  </tr>
);

const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad;
  const average = good + bad * -1;
  const positive = good / total;
  if (total == 0) {
    return (
      <div>
        <h3>No feedback given</h3>
      </div>
    );
  }
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClicGood = () => {
    setGood(good + 1);
  };
  const handleClicNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleClicBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Boton name={"good"} handle={handleClicGood} />
        <Boton name={"neutral"} handle={handleClicNeutral} />
        <Boton name={"bad"} handle={handleClicBad} />
      </div>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <Statistics bad={bad} good={good} neutral={neutral} />
    </div>
  );
};

export default App;
