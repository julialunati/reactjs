import './Chat.styles.css';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { MessageList } from '../../components/messageList/MesssageList';
import { AUTHORS } from '../../utils/constants';
import { Form } from '../../components/form/Form';
import { Navigate } from 'react-router-dom';

export const Chat = ({ messages, addMessage }) => {
  const { id } = useParams();
  
  const timeout = useRef();
  const wrapperRef = useRef();

  const sendMessage = (text) => {
    addMessage(
      {
        author: AUTHORS.human,
        text,
        id: `msg-${Date.now()}`,
      },
      id
    );
  }

  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id]?.length - 1];
    if (lastMessage?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage(
          {
            author: AUTHORS.robot,
            text: "auto-reply",
            id: `msg-${Date.now()}`,
          },
          id
        );
      }, 1000);
    }

    return () => {
      clearTimeout(timeout.current);
    }
  }, [messages]);

  if(!messages[id]){
    return <Navigate to="/chat" replace />
  }

  return (
    <>
      <div className="App" ref={wrapperRef}>
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
