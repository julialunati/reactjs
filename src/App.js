import './App.css';
import { Chat } from './screens/chat/Chat';
import { ChatList } from './components/chatList/ChatList';
import { Home } from './screens/home/Home';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Profile } from './screens/profile/Profile';
import { MyButton } from './components/example/Example';
import { useState } from 'react';
import { ThemeContext } from './utils/ThemeContext';
import { Provider } from "react-redux";
import { store } from "./store";

function App() {

  // this element can be passed as prop to diff elements but probably will create a mess
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  const handleActive = (isActive) => {
    return isActive ? 'blue' : 'grey';
  }

  return (
    <Provider store={store}>
    {/* //important to use this element hierarchically higher than other elements */}
    <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
      <BrowserRouter>
        {/* <MyButton onClick={() => setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))} /> */}
        <ul>
          <li><NavLink to="/" style={({ isActive }) => ({ color: handleActive(isActive) })}>Home</NavLink></li>
          <li><NavLink to="/profile" style={({ isActive }) => ({ color: handleActive(isActive) })}>Profile</NavLink></li>
          <li><NavLink to="/chat" style={({ isActive }) => ({ color: handleActive(isActive) })}>Chat</NavLink></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:id" element={<Chat />} /> */}

          <Route path="/chat" element={<ChatList />}>
            {/* chat will be passed in Outlet element */}
            <Route path=":id" element={<Chat />} />
          </Route>

          <Route path="*" element={<h4>404</h4>} />
        </Routes>

      </BrowserRouter>
    </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
