import './App.css';
import { useState } from 'react';
import Flipcards from './components/flipcards';
import { flashcards } from './data.jsx';

const App = () => {
  const [page, setPage] = useState(1);
  const [flip, setFlip] = useState(true);
  const [input, setInput] = useState('');
  const [ans,setAns] = useState('');

  function nextt(){
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

  function correct(){
    if (ans == "correct"){
      return true;
    } else {
      return false;
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
      <div>
      <input
        type="text"
        placeholder = "type answer here"
        id = "answerbox"
        onChange = {(e) => {
          setInput(e.target.value);
        }}

      />
      </div>
      <div>
        <button onClick =  {() => {
          if (input.toUpperCase() == (flashcards[page - 1].answer).toUpperCase()){
            setAns("correct");
          } else {
            setAns("incorrect");
          }
        }
      }>Submit</button>
      </div>
      <div className = "anss"><div className = {`${correct() ? "correct": "incorrect"}`}>{ans}</div></div>
      <button onClick = {prev}>prev</button>
      <button onClick = {nextt}>next</button>
      <button onClick={next}>random</button>
      <div className="page">Card number {page}</div>
    </div>
  );
};

export default App;