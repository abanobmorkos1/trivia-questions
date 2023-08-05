import React, { useState } from 'react';

function Display() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState('');
  const [answerRevealed, setAnswerRevealed] = useState('');

  const decreaseScore = () => setScore((prevScore) => prevScore - 50);
  const increaseScore = () => setScore((prevScore) => prevScore + 100);
  const resetScore = () => setScore(0);

  const getRandomQuestion = async () => {
    const url = 'http://jservice.io/api/random';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setQuestion(data[0].question);
    setAnswerRevealed()
    setAnswerRevealed((data[0].answer) , false); 
  };

  const hideAnswer = () => {
    setAnswerRevealed(true); 
  };

  return (
    <div className='display-container'>
      <h1>Welcome to jeopardy</h1>
      <h3>Score: <span>{score}</span></h3>
      <button onClick={decreaseScore}>Decrease</button>
      <button onClick={increaseScore}>Increase</button>
      <button onClick={resetScore}>Reset</button>
      <h2>Let's play!</h2>
      <button onClick={getRandomQuestion}>Get Question</button>
      <button onClick={hideAnswer}>Hide answer</button>
      <h3>Question: {question}</h3>
      <h3>Answer: {answerRevealed}</h3>
    </div>
  );
}

export default Display;
