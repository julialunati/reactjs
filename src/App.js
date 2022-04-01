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
import { Chat } from './screens/chat/Chat';
import { Home } from './screens/home/Home';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><NavLink to="/" style={({ isActive }) => ({color: isActive ? 'blue' : 'grey'})}>Home</NavLink></li>
        <li><NavLink to="/chat" style={({ isActive }) => ({color: isActive ? 'blue' : 'grey'})}>Chat</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
