import './App.css';
import { Chat } from './screens/chat/Chat';
import { ChatList } from './components/chatList/ChatList';
import { Home } from './screens/home/Home';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Profile } from './components/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}>Home</NavLink></li>
        <li><NavLink to="/profile" style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}>Profile</NavLink></li>
        <li><NavLink to="/chat" style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}>Chat</NavLink></li>
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
  );
}

export default App;
