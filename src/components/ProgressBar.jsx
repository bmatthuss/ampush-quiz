import { useEffect, useState } from "react";
import '../App.css';

const ProgressBar = (props) => {

  const showProgress = () => {
    var currProgress = [];
    if(props.progress === 0) {
      return null;
    }
    for(var i = 0; i < props.progress; i++) {
      if(i === 0) {
        currProgress.push(
          <div key={i} className='prog-segment-start'/>
        );
      } else if (i === 4) {
        currProgress.push(
          <div key={i} className='prog-segment-end'/>
        );
      } else {
        currProgress.push(
          <div key={i} className='prog-segment-middle'/>
        );
      }
    }
    return currProgress;
  }

  return (
    <div className='progress-wrapper'>
      <div className='progress-content'>
        <div className='progress-text'>
          {/* {props.progress < 6 ? (
            <>Question {props.progress}/5</>
          ) : (
            <>Done!</>
          )} */}
          Answered {props.progress}/5
        </div>
        <div className='progress-bar'>
          {showProgress()}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar;

