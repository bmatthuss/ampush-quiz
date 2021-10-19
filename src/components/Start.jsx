import { useEffect, useState } from "react";
import '../App.css';
import { useHistory } from "react-router";

const Start = (props) => {
  const history = useHistory();

  const startQuiz = () => {
    console.log("in startQuiz");
    history.push('/quiz');
  }

  return (
    <div className='page-wrapper'>
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
    </div>
  )
}

export default Start;