import './App.css';
import DiceButtun from './components/DiceButtun'
import { useState } from 'react';

function App() {
  let [leftDiceNum, setLeftDiceNum] = useState(1)
  let [rightDiceNum, setRightDiceNum] = useState(1)
  
  function handleClick(){
    setLeftDiceNum(leftDiceNum=Math.floor(Math.random()*6)+1)
    setRightDiceNum(rightDiceNum=Math.floor(Math.random()*6)+1)
  }

  return (
    <div className="App">
      <header>
        <h1>The Dice app</h1>
      </header>
      <main>
        <DiceButtun DiceImgNum = {leftDiceNum} handleFunct={handleClick}/>
        <DiceButtun DiceImgNum = {rightDiceNum} handleFunct={handleClick}/>
      </main>
    </div>
  );
}

export default App;
