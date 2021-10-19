import { useEffect, useState } from "react";
import '../App.css';
import Question from './Question';

const START = 0;
const IN_PROGRESS = 1;
const END = 2;

const Quiz = (props) => {
  const [quizState, setQuizState] = useState(START);
  const [currQuestion, setCurrQuestion] = useState(1);
  const [pointsLA, setPointsLA] = useState(0);
  const [pointsNY, setPointsNY] = useState(0);

  const answerQuestion = (choice) => {
    setCurrQuestion(currQuestion + 1);
    if(choice === "LA") {
      setPointsLA(pointsLA + 1);
    } else if (choice === "NY") {
      setPointsNY(pointsNY + 1);
    }
  }

  const startQuiz = () => {
    setQuizState(IN_PROGRESS);
    setCurrQuestion(1);
  }

  const displayStartQuiz = () => {
    return (
      <div className='content-wrapper'>
        <header className='header'>Did You Escape From NY or LA?</header>
        <div className='button-wrapper'>
          <button 
            className='start-button'
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  const displayEndQuiz = () => {
    let city = "";
    if(pointsLA > pointsNY) {
      city = "Los Angeles";
    } else if (pointsNY > pointsLA) {
      city = "New York";
    }
    return (
      <div className='content-wrapper'>
        Congrats, you are a survivor!  You just escaped from {city}!
      </div>
    );
  }

  const displayCurrQuestion = () => {
    let prompt, answer_LA, answer_NY = "";
    switch (currQuestion) {
      case 1:
        prompt = "In which year did you escape?";
        answer_LA = "1997";
        answer_NY = "2013";
        break;
      case 2:
        prompt = "What caused the root of all the chaos?";
        answer_LA = "An earthquake";
        answer_NY = "World War 3";
        break;
      case 3:
        prompt = "The president tries to stop an invasion from where?";
        answer_LA = "Cuba";
        answer_NY = "Soviet Union";
        break;
      case 4:
        prompt = "Where was an island converted into a prison?";
        answer_LA = "LA";
        answer_NY = "Manhattan";
        break;
      case 5:
        prompt = "Warning.. SPOILER ALERT: At the end of the movie, the main character Snake, does what?";
        answer_LA = "Puffs a cigarette while going into the darkness ";
        answer_NY = "Picks a cigarette box labelled “American Spirit”";
        break;
      default:
        setQuizState(END);
    }
    return (
      <Question 
        answerQuestion={answerQuestion}
        prompt={prompt}
        answer_LA={answer_LA}
        answer_NY={answer_NY}
      />
    );
  }

  return (
    <div className='page-wrapper'>
      <span className='question'>{props.question}</span>

      { quizState === START ? (
        displayStartQuiz()
      ) : (null)}

      { quizState === IN_PROGRESS ? (
        displayCurrQuestion()
      ) : (null)}

      { quizState === END ? (
        displayEndQuiz()
      ) : (null)}

    </div>
  )
}

export default Quiz;