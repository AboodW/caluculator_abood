import React,{useReducer} from 'react';
import './App.css'
// import Calculator from './Calculator'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'
import Aboodtext from './Aboodtext'

export const ACTIONS={
  ADD_DIGIT: "add_digit",
  CHOOSE_OPERATOR: "choose_operator",
  CLEAR: "clear",
  DELETE_DIGIT: "delete_digit",
  EVALUATE: "evaluate"
}

function reducer(state, {type, payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      if(state.overwrite){
        return{
          ...state,
          currentOperand: payload.digit,
          overwrite:false
        }
      }
      if(payload.digit ==='0' && state.currentOperand==='0')
      {return state}
      if(payload.digit ==='.' && state.currentOperand.includes('.'))
      {return state}

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`
      }

    case ACTIONS.CHOOSE_OPERATOR:
      if(state.currentOperand ==null && state.prevOperand == null){
        return state
      }
      if(state.currentOperand==null){
        return{
          ...state,
          operation:payload.operation,
        }
      }
      if(state.prevOperand == null){
        return{
          ...state,
          operation:payload.operation,
          prevOperand:state.currentOperand,
          currentOperand:null
        }
      }
      return{
        ...state,
        prevOperand:evaluate(state),
        operation:payload.operation,
        currentOperand:null
      }

    case ACTIONS.CLEAR:
      return {}

    case ACTIONS.DELETE_DIGIT:
      if(state.overwrite){
        return{
          ...state,
          overwrite:false,
          currentOperand:null
        }
      }
      if(state.currentOperand == null){return state}
      if(state.currentOperand.length === 1){
        return{
        ...state,
        currentOperand:null
      }}
      return{
        ...state,
        currentOperand:state.currentOperand.slice(0,-1)
      }

    case ACTIONS.EVALUATE:
      if(state.currentOperand ==null
        && state.operation ==null
        && state.prevOperand ==null){
          return state
        }
        return{
          ...state,
          overwrite:true,
          prevOperand:null,
          operation:null,
          currentOperand:evaluate(state)
        }
  }
}

function evaluate({currentOperand, prevOperand, operation}) {
  const prev = parseFloat(prevOperand);
  const current = parseFloat(currentOperand);
  if(isNaN(prev) || isNaN(current)){
    return ""
  }
  let compu = ""

  switch (operation){
    case '+':
      compu = prev + current;
      break;

    case '-':
      compu = prev - current;
      break;

    case '×':
      compu = prev * current;
      break;

    case '÷':
      compu = prev / current;
      break;
  }
  return compu.toString()
}

const Integer_formatter = new Intl.NumberFormat('en-us',{
  maximumFractionDigits : 0,
})

function formatOperand(operand) {
  if(operand == null) return

  const [integer, decimal] = operand.split('.');
  if(decimal == null) {
    return Integer_formatter.format(integer);
  }
  return `${Integer_formatter.format(integer)}.${decimal}`
}

const App = () => {

    const [{currentOperand, prevOperand, operation},dispatch] = useReducer(reducer,{});
  
  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-number">{formatOperand(prevOperand)} {operation}</div>
          <div className="current-number">{formatOperand(currentOperand)}</div>
        </div>

      {/* <div className="buttons-container"> */}
        <button className="span2 lightgr" onClick={()=>{
          dispatch({type:ACTIONS.CLEAR})
        }}>AC</button>

        <button className="lightgr" onClick={()=>{
          dispatch({type:ACTIONS.DELETE_DIGIT})
        }}>DEL</button>

        <OperationButton operation="÷" dispatch={dispatch}/>
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="×" dispatch={dispatch}/>
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch}/>
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch}/>
        <DigitButton digit="0" dispatch={dispatch}/>
        <DigitButton digit="." dispatch={dispatch}/>

        <button className="redora span2" onClick={()=>{
          dispatch({type: ACTIONS.EVALUATE})
        }}>=</button>

    </div>
    <br/><br/><br/><br/><br/>
    <Aboodtext />
    </>
  )
}

export default App
