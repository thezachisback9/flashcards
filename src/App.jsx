import './App.css';
import { useState } from 'react';
import Flipcards from './components/flipcards';
import { flashcards } from './data.jsx';

const App = () => {
  const [page, setPage] = useState(1);
  const [flip, setFlip] = useState(true);

  /*function next(){
    if (page < flashcards.length){
      setPage(page + 1);
    }
    setFlip(true);
  }

  function prev(){
    if (page > 1){
      setPage(page - 1);
    }
    setFlip(true);
  }
  accidently made prev and next buttons 
  */

  function next() {
    const val = Math.random() * flashcards.length;
    setPage(Math.ceil(val));
    setFlip(true);
  }

  function show() {
    if (flip === true) {
      return flashcards[page - 1].question;
    } else {
      return flashcards[page - 1].answer;
    }
  }

  return (
    <div className="App">
      <h1>Flashcards</h1>
      <h3>Test your geography knowledge with 10 flashcards</h3>
      <div className={`flashcard ${flip ? 'flipped' : ''}`} onClick={() => setFlip(!flip)}>
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <Flipcards info={show()} />
          </div>
          <div className="flashcard-back">
            <Flipcards info={show()} />
          </div>
        </div>
      </div>
      <button onClick={next}>random</button>
      <div className="page">Card number {page}</div>
    </div>
  );
};

export default App;