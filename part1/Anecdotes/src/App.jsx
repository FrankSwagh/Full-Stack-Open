import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const copy = [...points];

  const handleAnecodotes = () => {
    const nRandom = Math.floor(Math.random() * (7 - 0 + 1) + 0);
    setSelected(nRandom);
  };

  const handleVotes = () => {
    copy[selected] += 1;
    setPoints(copy);
  };

  const mostVoted = () => {
    let max = 0
    let mostVoted = 0
    points.forEach((pointAnecdote, indexPoints) => {
      if (pointAnecdote > max) {
        max = pointAnecdote
        mostVoted = indexPoints
      }
    })
    return mostVoted
  }

  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
        <p>Has {points[selected]} votes</p>
      </div>
      <button onClick={handleAnecodotes}>Next anecdote</button>
      <button onClick={handleVotes}>Vote</button>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[mostVoted()]}</p>
          <p>has {points[mostVoted()]} votes</p>
      </div>
    </div>
  );
};

export default App;
