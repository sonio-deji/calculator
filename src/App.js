import './App.css';
import { useState } from 'react';

function App() {
  const [calc, setcalc] = useState('');
  const [result, setResult] = useState('');


  const ops = ['/', '*', '+', '-', '.'];

  const expression = (symbol) => {
    //eslint-disable-next-line
    if(ops.includes(symbol) && setcalc === '' || ops.includes(symbol) && ops.includes(calc.slice(-1))) {
      return;
    }
    if(!ops.includes(symbol)) {
          //eslint-disable-next-line
      setResult(eval(calc + symbol).toString())
    }
    setcalc(prev => prev + symbol)
  }


  const clearAll = () => {
    setcalc('')
    setResult('0')
  }
  const answer = () => {
        //eslint-disable-next-line
    setcalc(eval(calc.toString()))
  }


  const deleteLast = () => {
    if(calc === '') {
      return;
    }
    const value = calc.slice(0, -1)
    setcalc(value)
  }


  const createDigits = () => {
    const digits = [];
    for(let i = 9; i >= 1; i-- ){
      digits.push(<button className="buttons" onClick={() => expression(i.toString())} key={i}>{i}</button>)
    }
    return digits;
  }

  return (
    <div className="App">
      <div className="calculator">
      <div className="display"><span>({result ? <span>{result}</span> : ''})</span>{calc}</div>
      <div className="operations-first">
        <div>
              <button className="buttons" onClick={clearAll}>AC</button>
              </div>
              <div className='operations'>
        <button className="buttons" onClick={() => expression('/')}>/</button>
        <button className="buttons" onClick={() => expression('*')}>X</button>
        <button className="buttons" onClick={() => expression('+')} >+</button>
        <button className="buttons" onClick={() => expression('-')}>-</button>
        <button className="buttons" onClick={deleteLast}>DEL</button>
        </div>
        </div>
        <div className="digits">
        {createDigits()}
        <button className="buttons"  onClick={() => expression('0')}>0</button>
        <button className="buttons"  onClick={() => expression('.')}>.</button>
        <button className="buttons equals" onClick={answer}>=</button>
              
      </div>
      </div>

    </div>
  );
}

export default App;