import logo from './logo.svg';
import './App.css';
import { Message } from './components/message/Message';
import { Counter } from './components/example/Example';
import { Form } from './components/form/Form';
import { useEffect, useState } from 'react';
import { AUTHORS } from './utils/constants';
import { MessageList } from './components/messageList/MesssageList';

const human = 'me';

function App() {

  const [messages, setMessages] = useState([]);
  const [flag, setFlag] = useState(false);

  const sendMessage = (text) => {
    addMessage({
      author: human,
      text,
      id: `msg-${Date.now()}`
    })
  }

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  }

  useEffect(() => {
    let timeout;
    if (messages[messages.length - 1]?.author === human) {
      timeout = setTimeout(() => {
        addMessage({ author: 'robot', text: 'auto-reply' });
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [messages]);


  useEffect(() => {
    console.log('like mounted');
    return () => {
      console.log('unmounted');
    }
  }, []);


  return (
    <>
      <div className="App">
        <div>Messages</div>
        <MessageList messages={messages} />
        {
          flag ? (<div><Form onSubmit={sendMessage}/></div>) : (<section><Form onSubmit={sendMessage}/></section>)
        }

        <Form onSubmit={sendMessage} />
        <button onClick={()=> setFlag(!flag)}>click</button>
      </div>
    </>
  );
}

export default App;
