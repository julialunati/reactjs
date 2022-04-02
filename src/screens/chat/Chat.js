import './Chat.styles.css';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { MessageList } from '../../components/messageList/MesssageList';
import { AUTHORS } from '../../utils/constants';
import { Form } from '../../components/form/Form';
import { Navigate } from 'react-router-dom';

const initMessages = {
  1: [],
  2: [],
  3: [],
}

export const Chat = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState(initMessages);
  const timeout = useRef();

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`
    })
  }

  const addMessage = (newMsg) => {
    setMessages({...messages, [id]: [...messages[id], newMsg]});
  }

  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id]?.length - 1];
    if (lastMessage?.author === AUTHORS.human) {
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

  if(!messages[id]){
    return <Navigate to="/chat" replace />
  }

  return (
    <>
      <div className="App">
        {id && (
          <div>
            <span>Messages</span>
            <MessageList messages={messages[id]} />
            <Form onSubmit={sendMessage} />
          </div>
        )}
      </div>
    </>
  );
}

//  