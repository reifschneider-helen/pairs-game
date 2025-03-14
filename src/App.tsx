import { useState } from 'react';
import Cards from './components/Cards/Cards'
import './App.css';

function App() {
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [newGame, setNewGame] = useState<boolean>(false)

  const handleClick = () => {
    setGameOver(false)
    setNewGame(prevState => !prevState)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TYPESCRIPT PAIRS GAME</h1>
        <h2>click any card to begin</h2>
      </header>
      <Cards setGameOver={setGameOver} newGame={newGame}></Cards>
      {gameOver && <button className='tryAgainBtn' onClick={handleClick}>Try again</button>}
    </div>
  );
}

export default App;
