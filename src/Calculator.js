import React from 'react';
import './App.css'

const Calculator = ({calcLoaded}) => {
  return (
   <div className="calculator-grid">
      <div className="output">
         <div className="previous-number"></div>
         <div className="current-number"></div>
      </div>

      {/* <div className="buttons-container"> */}
      <button onClick={calcLoaded} className="span2 lightgr">AC</button>
      <button onClick={calcLoaded} className="lightgr">DEL</button>
      <button onClick={calcLoaded} className="redora">÷</button>
      <button onClick={calcLoaded}>7</button>
      <button onClick={calcLoaded}>8</button>
      <button onClick={calcLoaded}>9</button>
      <button onClick={calcLoaded} className="redora">×</button>
      <button onClick={calcLoaded}>4</button>
      <button onClick={calcLoaded}>5</button>
      <button onClick={calcLoaded}>6</button>
      <button onClick={calcLoaded} className="redora msd">-</button>
      <button onClick={calcLoaded}>1</button>
      <button onClick={calcLoaded}>2</button>
      <button onClick={calcLoaded}>3</button>
      <button onClick={calcLoaded} className="redora">+</button>
      <button onClick={calcLoaded} className="span2">0</button>
      <button onClick={calcLoaded} className="dot">.</button>
      <button onClick={calcLoaded} className="redora">=</button>
   </div>
   // {/* </div> */}
  )
}

export default Calculator



  // const onbuttonclick = (e) => {
  //       let x = e.clientX - e.target.offsetLeft;
  //       let y = e.clientY - e.target.offsetTop;
  
  //       let ripples = document.createElement('span');
  //       ripples.style.left = x + 'px';
  //       ripples.style.top = y + 'px';
  //       this.appendChild(ripples);
  
  //       setTimeout(()=>{
  //         ripples.remove();
  //       },1000);
  // }