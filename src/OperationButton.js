import React from 'react';
import {ACTIONS} from './App'
import './App.css'

const OperationButton = ({dispatch, operation}) => {
  return (
   <button
   className="redora"
   onClick={()=>dispatch({type:ACTIONS.CHOOSE_OPERATOR, payload:{operation}})}
   >
   {operation}
   </button>
  )
}

export default OperationButton