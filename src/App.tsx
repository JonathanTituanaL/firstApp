import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Usuario from './Usuario';
import TimerPadre from './TimerPadre';

function App() {
  return (
    <>
      <h1>Hola mundo typescript</h1>
      <Counter/>
      <hr/>
      <Usuario/>
      <br/>
      <h2>useEffect -useRef</h2>
      <hr/>
      <TimerPadre/>
    </>
  );
}

export default App;
