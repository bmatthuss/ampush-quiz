import { useEffect, useState } from "react";
import '../App.css';

const Question = (props) => {
  const [checkLA, setCheckLA] = useState(false);
  const [checkNY, setCheckNY] = useState(false);

  useEffect(() => {
    setCheckLA(false);
    setCheckNY(false);
  }, [props]);

  const chooseLA = (e) => {
    if(checkLA === false){
      setCheckNY(false);
    }
    setCheckLA(!checkLA);
  }

  const chooseNY = (e) => {
    if(checkNY === false){
      setCheckLA(false);
    }
    setCheckNY(!checkNY);
  }

  const nextQuestion = () => {
    if(checkLA) {
      props.answerQuestion("LA");
    } else if (checkNY) {
      props.answerQuestion("NY");
    }
  }

  return (
    <div className='question-wrapper'>
      <header className='question-prompt'>{props.prompt}</header>
      <div className='checkbox-container'>
        <input
          className='checkbox'
          type="checkbox"
          checked={checkLA}
          onChange={chooseLA}
        />
        <label className='checkbox-label'>
          {props.answer_LA}
        </label>
      </div>
      <div className='checkbox-container'>
        <input
          className='checkbox'
          type="checkbox"
          checked={checkNY}
          onChange={chooseNY}
        />
        <label className='checkbox-label'>
          {props.answer_NY}
        </label>
      </div>
      <div className='next-question-wrapper'>
        <button
          className='button'
          disabled={!checkLA && !checkNY}
          onClick={nextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  )
}

export default Question;

