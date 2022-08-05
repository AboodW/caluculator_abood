import React from 'react';
import {ACTIONS} from './App';
import './App.css'

const DigitButton = ({dispatch, digit}) => {
  return(
    <button
    onClick={()=>dispatch({type:ACTIONS.ADD_DIGIT, payload:{digit}})}
    >
    {digit}
    </button>
  )
  }

export default DigitButton