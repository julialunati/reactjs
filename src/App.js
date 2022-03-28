import logo from './logo.svg';
import './App.css';
import { Message } from './components/message/Message';
import { Counter } from './components/example/Example';
import { Form } from './components/form/Form';
import { useEffect, useState } from 'react';

function App() {

  const [messages, setMessages] = useState([]);

  const addMessage = (newText) => {
    setMessages([...messages, { text: newText, author: 'me' }]);
  }

  const addAutoReply = () => {
    setMessages([...messages, { text: 'auto-reply', author: 'robot' }]);
  }

  useEffect(() => {
      if (messages[messages.length - 1]?.author === 'me') {
        addAutoReply();
      }
  }, [messages]);

  return (
    <>
      <div className="App">
        <div>Messages</div>
        <div className="main">
          {messages.map((msg, i) => <Message author={msg.author} text={msg.text} key={i} />)}
        </div>
        <Form onSubmit={addMessage} />
      </div>
    </>
  );
}

export default App;
