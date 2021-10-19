import { useEffect, useState } from "react";
import '../App.css';
import { useHistory } from "react-router";
import Question from './Question';

const Quiz = (props) => {
  const history = useHistory();

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
        prompt = "ERROR";
        answer_LA = "ERROR";
        answer_NY = "ERROR";
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
      {displayCurrQuestion()}
    </div>
  )
}

export default Quiz;