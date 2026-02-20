import Questions from "../questions.js";
import { useState } from "react";
import quizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  function handleClick(answer) {
    setSelectedAnswer((prev) => [...prev, answer]);
  }
  const activeQuestionIndex = selectedAnswer.length;
  const quizCompleted = activeQuestionIndex === Questions.length;
  if (quizCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }
  const shuffleAnwers = Questions[activeQuestionIndex].answers;
  shuffleAnwers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="questions">
        <h2>{Questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffleAnwers.map((answer) => (
            <li className="answer" key={answer}>
              <button onClick={() => handleClick(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
