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


  const [messages, setMessages] = useState(msgs);
  const addMessage = () =>  {
    setMessages([...messages, {text: 'new message', author: 'new author'}]);
  }

  return (
    //если надо вернуть два элемента 
    <>
    <div className="App">
      <Counter randomNumber={rand} />
      <button onClick={updateRand}>Update random</button>
      {/* {msgs.map((msg) => <Message author={msg.author} text={msg.text} />)} */}
      {messages.map((msg) => <Message author={msg.author} text={msg.text} />)}
      <button onClick={addMessage}>Add message</button>
      {/* <Message author={name} text='text1' />
      <Message author={name} text='text2' /> */}
    </div>
    <div>2nd div</div>
    </>
  );
}

export default App;
