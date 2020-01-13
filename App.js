import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="result">
                <p>0</p>
            </div>
		<div className="button">
                <button name="Clear" className="buttona">clear</button>
				<button name="/" className="b">%</button><br/>
				<button name="7">7</button>
                <button name="8">8</button>
                <button name="9">9</button>
				<button name="-" className="b">-</button><br/>
				<button name="4">4</button>
                <button name="5">5</button>
                <button name="6">6</button>
                <button name="+" className="b">+</button><br/>
                <button name="1">1</button>
                <button name="2">2</button>
                <button name="3">3</button>
				<button name="=" className="b">=</button><br/>


                
                

            </div>
      </header>
    </div>
  );
}

export default App;
