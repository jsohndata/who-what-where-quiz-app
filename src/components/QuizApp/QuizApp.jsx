import { useState } from "react";
import Card from "./Card";
import Result from "./Result";

import "./QuizApp.css";



export default function QuizApp ({ data }) {
  const [quizId, setQuizId] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const quizLength = data.length;

  const handleAnswer = (isCorrect) => {
    
    /* If the answer is correct, increment the score by 1.
      eg) if (isCorrect) setScore(score + 1); */
    isCorrect && setScore(score + 1);

    /* Increment the quizId by 1 once the user clicks on an answer. */
    const newQuizId = quizId + 1;

    /* If the quizId is less than the quizLength
     then set the quizId to the newQuizId.
     If not show results. */
    (newQuizId < quizLength) 
      ? setQuizId(newQuizId)
      : setShowResult(true);
  };

  const handleReset = () => {
    setQuizId(0);
    setScore(0);
    setShowResult(false);
  };
  
  return(
    <>
      <h2>Guess The Movie</h2>
      {
        !showResult
          ? <Card
              data={data}
              quizId={quizId}
              quizLength={quizLength}
              handleAnswer={handleAnswer} />

          : <Result
              score={score}
              quizLength={quizLength}
              handleReset={handleReset} />
      }
    </>
  );
};
