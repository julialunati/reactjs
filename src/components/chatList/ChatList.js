import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { ThemeContext } from '../../utils/ThemeContext';
import { useContext } from 'react';
import { OtherButton } from "../example/Example";

const chats = [
    {
        id: '1',
        name: 'chat 1'
    },
    {
        id: '2',
        name: 'chat 2'
    },
    {
        id: '3',
        name: 'chat3'
    }
];


export const ChatList = () => {

    const { changeTheme } = useContext(ThemeContext);

    return (
      
        <>
          <OtherButton onClick={changeTheme}></OtherButton>
            <List>
                {chats.map((chat) => (<ListItem key={chat.id}><Link to={`/chat/${chat.id}`} key={chat.id}> {chat.name} </Link></ListItem>))}
            </List>
            {/* this component renders child routes which are passing from parent route
            in this case it is Chat */}
            <Outlet />
        </>
    )
}

