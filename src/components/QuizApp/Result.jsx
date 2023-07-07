
const imgUri = process.env.PUBLIC_URL + "/images/";

export default function Result({score, quizLength, handleReset}) {

  let resultMessage;
  let resultImage;
  const scorePercentage = Math.round((score / quizLength) * 100);

  switch (true) {
    case scorePercentage >= 90:
      resultMessage = "Excellent!";
      resultImage = "result-90.gif";
      break;

    case scorePercentage >= 80:
      resultMessage = "Good!";
      resultImage = "result-80.gif";
      break;

    case scorePercentage >= 70:
      resultMessage = "Average!";
      resultImage = "result-70.gif";
      break;

    case scorePercentage >= 60:
      resultMessage = "Below Average!";
      resultImage = "result-60.gif";
      break;

    default:
      resultMessage = "Bro!";
      resultImage = "result-50.gif";
      break;
  };

  return (
    <div className="quiz-card quiz-result">
      <h2>Result</h2>
      <img src={`${imgUri}${resultImage}`} alt="" />
      <p>{resultMessage}
        <br/>You scored {score} out of {quizLength}! ({scorePercentage}%)</p>
      <button onClick={handleReset}>Try Again!</button>
    </div>
  );
};
