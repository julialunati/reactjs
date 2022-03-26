import logo from './logo.svg';
import './App.css';
import { Message } from './components/message/Message'
import { Counter } from './components/example/Example';
import { useState } from 'react';

const name = 'Julia'; 
const age = 18;

function App() {
  const [rand, setRand] = useState(0);
  const updateRand = () => {
    setRand(Math.random());
  }
  const foo = () =>( alert('Hello') );
  
  return (
    <div className="App">
      <Counter randomNumber={rand} />
      <button onClick={updateRand}>Update random</button>
      <Message name={name} age={age} doSmth={foo} italic={true}/> 
      
    </div>
  );
}

export default App;
