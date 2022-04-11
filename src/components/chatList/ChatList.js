import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link, Outlet } from 'react-router-dom';
import { Form } from "../form/Form";

export const ChatList = ({ chats, addChat, deleteChat }) => {
    const handleSubmit = (newChatName) => {
        const newChat = {
            name: newChatName,
            id: `chat-${Date.now()}`,
        };

        addChat(newChat);
    };

    return (

        <>
            <div className="chat-list">
                <List>
                    {chats.map((chat) => (
                        <ListItem key={chat.id}>
                            <Link to={`/chat/${chat.id}`}>
                                {chat.name}
                            </Link>
                            <span onClick={() => deleteChat(chat.id)}>delete</span>
                        </ListItem>))}
                </List>
                <Form onSubmit={handleSubmit} />
                <Outlet />
            </div>
        </>
    )
}

