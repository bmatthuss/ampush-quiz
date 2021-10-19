import { useState } from "react";
import '../App.css';
import Question from './Question';
import ProgressBar from './ProgressBar';
import Footer from './Footer';

const START = 0;
const IN_PROGRESS = 1;
const END = 2;

const Quiz = () => {
  const [quizState, setQuizState] = useState(START);
  const [currQuestion, setCurrQuestion] = useState(0);
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

  const resetQuiz = () => {
    setQuizState(START);
    setCurrQuestion(0);
    setPointsLA(0);
    setPointsNY(0);
  }

  const startQuiz = () => {
    setQuizState(IN_PROGRESS);
  }

  const displayStartQuiz = () => {
    return (
      <div className='content-wrapper'>
        <header className='quiz-title'>Did You Escape From NY or LA?</header>
        <div className='button-wrapper'>
          <button 
            className='button'
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  const displayEndQuiz = () => {
    let city = null;
    if(pointsLA > pointsNY) {
      city = (<>
        <span style={{textDecoration: 'underline'}}>
          Los&nbsp;Angeles
        </span>!
      </>);
    } else if (pointsNY > pointsLA) {
      city = (<>
        <span style={{textDecoration: 'underline'}}>
          New&nbsp;York
        </span>!
      </>);
    }
    return (
      <div className='content-wrapper'>
        <div className='result-wrapper'>
          <div className='result-content'>
            <span className='result-city'>Los Angeles:</span>
            <span className='result-points'>{pointsLA}</span>
          </div>
        </div>
        <div className='result-wrapper'>
          <div className='result-content'>
            <span className='result-city'>New York:</span>
            <span className='result-points'>{pointsNY}</span>
          </div>
        </div>
        <div className='end-wrapper'>
          <span className='end-message'>
            {"Congrats, you are a survivor! You just escaped from "}
            {city}
          </span>
        </div>
        <div className='restart-wrapper'>
          <button
            onClick={resetQuiz}
            className='button'
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  const displayCurrQuestion = () => {
    let prompt, answer_LA, answer_NY = "";
    switch (currQuestion) {
      case 0:
        prompt = "In which year did you escape?";
        answer_LA = "1997";
        answer_NY = "2013";
        break;
      case 1:
        prompt = "What caused the root of all the chaos?";
        answer_LA = "An earthquake";
        answer_NY = "World War 3";
        break;
      case 2:
        prompt = "The president tries to stop an invasion from where?";
        answer_LA = "Cuba";
        answer_NY = "Soviet Union";
        break;
      case 3:
        prompt = "Where was an island converted into a prison?";
        answer_LA = "LA";
        answer_NY = "Manhattan";
        break;
      case 4:
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
      <ProgressBar 
        quizState={quizState}
        progress={currQuestion}
      />

      {quizState === START ? (
        displayStartQuiz()
      ) : (null)}

      {quizState === IN_PROGRESS ? (
        displayCurrQuestion()
      ) : (null)}

      {quizState === END ? (
        displayEndQuiz()
      ) : (null)}

      <Footer />
    </div>
  )
}

export default Quiz;