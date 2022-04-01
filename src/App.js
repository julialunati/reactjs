import logo from './logo.svg';
import './App.css';
import { Message } from './components/message/Message';
import { Counter } from './components/example/Example';
import { MyButton } from './components/example/Example';
import { Form } from './components/form/Form';
import { useEffect, useState, useRef } from 'react';
import { AUTHORS } from './utils/constants';
import { MessageList } from './components/messageList/MesssageList';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ExampleForm } from './components/example/ExampleForm';
import { TextField } from '@mui/material';


const msgs = [
  {
    id: '1',
    sender: 'jhon',
    text: 'hello'
  },
  {
    id: '2',
    sender: 'kate',
    text: 'ciao'
  },
  {
    id: '3',
    sender: 'sam',
    text: 'buongiorno'
  }
];

function App() {

  const [messages, setMessages] = useState([]);
  const [arrMsg, setArrMsg] = useState(msgs);

  const timeout = useRef();

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`
    })
  }

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  }

  useEffect(() => {
    if (messages[messages.length - 1]?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage({ author: AUTHORS.bot, text: 'auto-reply', id: `msg-robot-${Date.now()}` });
      }, 2000);
    }

    return () => {
      clearTimeout(timeout.current);
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
        <div>
          <List>
            {arrMsg.map((msg) => <ListItem key={msg.id}><ListItemText primary={msg.sender} secondary={msg.text} /></ListItem>)}
          </List>
        </div>
        <div>
          <span>Messages</span>
          <MessageList messages={messages} />
          <Form onSubmit={sendMessage} />
          {/* <button onClick={handleScroll}>scroll</button> */}
        </div>
        <MyButton text="otherBtn" onClick={() => {}}>
                <span style={{color: "red"}}></span>
            </MyButton>
      </div>
{/* 
      <ExampleForm onSubmit={() => {console.log('submitted')}}>{({ value, handleChange }) => <TextField value={value} onChange={handleChange} />}</ExampleForm>
      <ExampleForm onSubmit={() => {console.log('another action')}}>{({ value, handleChange }) => <input value={value} onChange={handleChange} />}</ExampleForm> */}
       {/* render prop has the same logic as a children, only a little bit diff in passing data and the name render is not reservated and can be used any other */}
      <ExampleForm onSubmit={() => {console.log('submitted')}} render={({ value, handleChange }) => <TextField value={value} onChange={handleChange} />}></ExampleForm>
      <ExampleForm onSubmit={() => {console.log('another action')}} render={({ value, handleChange }) => <input value={value} onChange={handleChange} />}></ExampleForm>
    </>
  );
}

export default App;
