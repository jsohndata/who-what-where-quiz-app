export default function Result({score, quizLength, handleReset}) {

  return (
    <div className="quiz-card">
      <h3>Result</h3>
      <p>You scored {score} out of {quizLength}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
