import { useState } from 'react';

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick = {handleClick}> 
        {text}
      </button>
    </div>
    );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);
  const randomQuote = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  const voteForQuote = () => {
    const copy = {...votes};
    copy[selected] += 1;
    setVotes(copy);
    if(votes[selected] > votes[mostVoted])
    {
      setMostVoted(selected);
    }
  };
  

  return (
    <div>
      <h1>Anecdotes</h1>
      <p>{anecdotes[selected]}</p>
      <p>{votes[selected]}</p>
      <Button handleClick={randomQuote} text="New Quote" />
      <Button handleClick={voteForQuote} text="Vote for Quote" />
      <h1>Anecdotes with the Most Votes</h1>
      <p>{anecdotes[mostVoted]}</p>
    </div>
  );
};

export default App;