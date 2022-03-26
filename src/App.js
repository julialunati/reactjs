import logo from './logo.svg';
import './App.css';
import { Message } from './components/message/Message'
import { Counter } from './components/example/Example';
import { useState } from 'react';

const name = 'Julia';
const age = 18;

const msgs = [{
  author: name,
  text: 'text1'
}, {
  author: name,
  text: 'text2'
}];

function App() {
  const [rand, setRand] = useState(0);
  const updateRand = () => {
    setRand(Math.random());
  }
  const foo = () => (alert('Hello'));

  return (
    <div className="App">
      <Counter randomNumber={rand} />
      <button onClick={updateRand}>Update random</button>
      {msgs.map((msg) => <Message author={msg.author} text={msg.text} />)}
      {/* <Message author={name} text='text1' />
      <Message author={name} text='text2' /> */}
    </div>
  );
}

export default App;
