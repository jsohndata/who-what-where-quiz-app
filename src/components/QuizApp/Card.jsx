const imageUri = process.env.PUBLIC_URL + '/images/';

export default function Card({ data, quizId, quizLength, handleAnswer }) {

  return(
    <div className="quiz-card">
      <p>{quizId + 1}/{quizLength}</p>
      
      <img src={imageUri + data[quizId].image} alt="" />

      <ul>
        {
          data[quizId].options.map(
            (element,index) => {

              return(
                <li key={index}
                  onClick={ () => {handleAnswer(element.isCorrect)} }>{element.answer}</li>
              );
            }
          )
        }
      </ul>
    </div>
  );
};
