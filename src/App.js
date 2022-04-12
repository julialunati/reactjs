import './App.css';
import { Chat } from './screens/chat/Chat';
import { ChatList } from './components/chatList/ChatList';
import { Home } from './screens/home/Home';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Profile } from './screens/profile/Profile';
import { MyButton } from './components/example/Example';
import { useState } from 'react';
import { ThemeContext } from './utils/ThemeContext';
import { store } from "./store";
import { Provider, shallowEqual, useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "./store/chat/actions";
import { addMessage } from "./store/message/actions";
import { selectChats } from "./store/chat/selectors";
import { selectMessages } from './store/message/selectors';

const initialChats = [
  {
    name: "Chat1",
    id: "chat1",
  },
  {
    name: "Chat2",
    id: "chat2",
  },
  {
    name: "Chat3",
    id: "chat3",
  },
];

const initMessages = initialChats.reduce((acc, chat) => {
  acc[chat.id] = [];
  return acc;
}, {});

function App() {
  // this element can be passed as prop to diff elements but probably will create a mess
  const [theme, setTheme] = useState('dark');

  const chats = useSelector(selectChats, shallowEqual);
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();
  // const [messages, setMessages] = useState(initMessages);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  const handleActive = (isActive) => {
    return isActive ? 'blue' : 'grey';
  }

  const addNewMessage = (newMsg, id) => {
    dispatch(addMessage(newMsg, id));
    // setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };

  const addNewChat = (newChat) => {
    dispatch(addChat(newChat));
    // setMessages((prevMessages) => ({ ...prevMessages, [newChat.id]: [] }));
  };

  const removeChat = (id) => {
    dispatch(deleteChat(id));
    // setMessages((prevMessages) => {
    //   const newMessages = { ...prevMessages };
    //   delete newMessages[id];

    //   return newMessages;
    // });
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
              style={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
              to="/chat"
            >
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/chat"
            element={
              <ChatList
                deleteChat={removeChat}
                addChat={addNewChat}
                chats={chats}
              />
            }
          >
            <Route
              path=":id"
              element={<Chat messages={messages} addMessage={addNewMessage} />}
            />
          </Route>
          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
